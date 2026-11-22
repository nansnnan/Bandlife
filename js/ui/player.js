// 音乐播放器 UI：模拟现实播放器（网易云风格），含歌曲列表、播放详情、评论区、迷你播放条

const Player = {
  queue: [],       // 播放队列（展平的歌曲对象）
  index: -1,
  playing: false,
  progress: 0,     // 0~1
  timer: null,
  current: null,
};

// 收集所有可播放的歌曲（我的作品 + 竞争对手作品）
function collectAllTracks() {
  const tracks = [];
  for (const rel of Game.releases) {
    tracks.push({
      id: rel.id, name: rel.name, artist: rel.bandName || Game.band.name,
      style: rel.style, releaseType: rel.releaseType, plays: rel.plays,
      likes: rel.likes, comments: rel.comments, duration: rel.songs.reduce((s, x) => s + x.duration, 0),
      lyrics: rel.songs.map(s => s.lyrics).filter(Boolean).join("\n\n"),
      source: rel, isRival: false, quality: rel.quality,
    });
  }
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      tracks.push({
        id: rel.id || rel.name, name: rel.name, artist: rel.bandName,
        style: rel.style, releaseType: rel.releaseType, plays: rel.plays,
        likes: rel.likes, comments: rel.comments, duration: 240,
        lyrics: "", source: rel, isRival: true, quality: rel.quality,
      });
    }
  }
  return tracks;
}

// ===== 渲染播放器视图 =====
function renderPlayerView() {
  const el = document.querySelector('[data-game-view="player"]');
  const tracks = collectAllTracks();
  el.innerHTML = `
    <div class="section-title">🎧 音乐播放器</div>
    <div class="player-layout">
      <div class="player-left">
        <div class="player-list-title">热门歌曲（${tracks.length}）</div>
        <div class="player-track-list">
          ${tracks.length ? tracks.slice().sort((a, b) => b.plays - a.plays).map((t, i) => `
            <div class="track-item ${Player.current && Player.current.id === t.id ? "active" : ""}" data-action="play-track" data-id="${t.id}">
              <div class="track-idx">${i + 1}</div>
              <div class="track-main">
                <div class="track-name">${t.name}</div>
                <div class="track-artist">${t.artist} · ${t.style}</div>
              </div>
              <div class="track-plays">${formatNumber(t.plays)}</div>
              <div class="track-play-btn">▶</div>
            </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无歌曲，去创作并发布吧</div>`}
        </div>
      </div>
      <div class="player-right" id="player-detail">
        ${Player.current ? renderPlayerDetail(Player.current) : `<div class="player-empty"><div class="player-empty-disc">♫</div><p>点击左侧歌曲开始播放</p></div>`}
      </div>
    </div>
  `;
}

// 渲染播放详情
function renderPlayerDetail(track) {
  const source = track.source;
  // 生成评论列表
  let comments = source.commentList;
  if (!comments || !comments.length) {
    comments = generateComments(source, Math.min(20, Math.max(3, Math.round(source.comments / 50))));
  }
  const progress = Player.playing ? Math.round(Player.progress * 100) : 0;
  const curSec = Math.round(Player.progress * track.duration);
  const totalSec = track.duration;
  return `
    <div class="player-detail-header">
      <div class="player-disc ${Player.playing ? "spinning" : ""}">
        <div class="disc-ring"></div>
        <div class="disc-center">${track.artist.charAt(0)}</div>
      </div>
      <div class="player-meta">
        <div class="player-song-name">${track.name}</div>
        <div class="player-artist-name">${track.artist}</div>
        <div class="player-tags">
          <span class="badge badge-purple">${track.style}</span>
          <span class="badge badge-blue">${track.releaseType}</span>
        </div>
        <div class="player-stats">
          <div class="ps-item"><div class="ps-num">${formatNumber(track.plays)}</div><div class="ps-label">播放量</div></div>
          <div class="ps-item"><div class="ps-num">${formatNumber(track.likes)}</div><div class="ps-label">收藏</div></div>
          <div class="ps-item"><div class="ps-num">${formatNumber(track.comments)}</div><div class="ps-label">评论</div></div>
        </div>
      </div>
    </div>
    <div class="player-progress-wrap">
      <span class="pp-time">${fmtTime(curSec)}</span>
      <div class="player-progress"><div class="player-progress-bar" style="width:${progress}%"></div></div>
      <span class="pp-time">${fmtTime(totalSec)}</span>
    </div>
    <div class="player-controls">
      <button class="mini-btn" data-action="player-prev">⏮</button>
      <button class="mini-btn play" data-action="player-toggle">${Player.playing ? "⏸" : "▶"}</button>
      <button class="mini-btn" data-action="player-next">⏭</button>
    </div>
    ${track.lyrics ? `<div class="player-lyrics"><div class="lyrics-title">歌词</div><pre>${escapeHtml(track.lyrics)}</pre></div>` : ""}
    <div class="player-comments">
      <div class="comments-title">评论区（${formatNumber(track.comments)}）</div>
      ${comments.map(c => `
        <div class="comment-item">
          <div class="comment-avatar">${c.user.charAt(0)}</div>
          <div class="comment-body">
            <div class="comment-user">${c.user} <span class="comment-time">${c.time}</span></div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
            <div class="comment-likes">👍 ${formatNumber(c.likes)}</div>
          </div>
        </div>`).join("")}
    </div>
  `;
}

function fmtTime(sec) {
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function escapeHtml(s) {
  return (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// ===== 播放控制 =====
function playTrack(id) {
  const tracks = collectAllTracks();
  const idx = tracks.findIndex(t => t.id === id);
  if (idx < 0) return;
  Player.queue = tracks;
  Player.index = idx;
  Player.current = tracks[idx];
  Player.progress = 0;
  startPlayback();
  renderPlayerView();
  updateMiniPlayer();
}

function startPlayback() {
  Player.playing = true;
  if (Player.timer) clearInterval(Player.timer);
  Player.timer = setInterval(() => {
    if (!Player.current) return;
    const dur = Player.current.duration || 240;
    Player.progress += 1 / (dur / 0.1);  // 每 100ms 前进
    if (Player.progress >= 1) {
      Player.progress = 0;
      nextTrack();
      return;
    }
    updateProgressUI();
  }, 100);
}

function updateProgressUI() {
  const pct = Math.round(Player.progress * 100);
  const bar = document.getElementById("mini-progress-bar");
  if (bar) bar.style.width = pct + "%";
  const detailBar = document.querySelector(".player-progress-bar");
  if (detailBar) detailBar.style.width = pct + "%";
}

function togglePlay() {
  if (!Player.current) return;
  Player.playing = !Player.playing;
  if (Player.playing) startPlayback();
  else if (Player.timer) clearInterval(Player.timer);
  renderPlayerView();
  updateMiniPlayer();
}

function prevTrack() {
  if (Player.queue.length === 0) return;
  Player.index = (Player.index - 1 + Player.queue.length) % Player.queue.length;
  Player.current = Player.queue[Player.index];
  Player.progress = 0;
  startPlayback();
  renderPlayerView();
  updateMiniPlayer();
}

function nextTrack() {
  if (Player.queue.length === 0) return;
  Player.index = (Player.index + 1) % Player.queue.length;
  Player.current = Player.queue[Player.index];
  Player.progress = 0;
  startPlayback();
  renderPlayerView();
  updateMiniPlayer();
}

// ===== 迷你播放器 =====
function updateMiniPlayer() {
  const mp = document.getElementById("mini-player");
  if (Player.current) {
    mp.classList.add("show");
    document.getElementById("mini-title").textContent = Player.current.name;
    document.getElementById("mini-artist").textContent = Player.current.artist;
    document.querySelector(".mini-btn.play").textContent = Player.playing ? "⏸" : "▶";
  } else {
    mp.classList.remove("show");
  }
}

// ===== 打开作品详情（从 dashboard/发布列表） =====
function showReleaseDetail(rel) {
  const tracks = collectAllTracks();
  const idx = tracks.findIndex(t => t.id === rel.id);
  if (idx >= 0) {
    Player.queue = tracks;
    Player.index = idx;
    Player.current = tracks[idx];
    Player.progress = 0;
    startPlayback();
  }
  renderPlayerView();
  updateMiniPlayer();
}
window.showReleaseDetail = showReleaseDetail;
