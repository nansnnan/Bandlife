// 音乐播放器 UI：模拟现实播放器（网易云风格），含歌曲列表、播放详情、评论区、迷你播放条

// 播放控制图标（用 SVG 替代 Unicode 符号，避免在部分字体下渲染成方框）
const ICONS = {
  play: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
  prev: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M6 6h2v12H6zM9 12l8-6v12z"/></svg>',
  next: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M16 6h2v12h-2zM7 6l8 6-8 6z"/></svg>',
};

const Player = {
  queue: [],       // 播放队列（展平的歌曲对象）
  index: -1,
  playing: false,
  progress: 0,     // 0~1
  timer: null,
  current: null,
};

// 播放器展开状态
const playerExpandedAlbums = new Set();

// 收集所有可播放的歌曲（我的作品 + 竞争对手作品），带专辑信息
function collectAllTracks() {
  const tracks = [];
  for (const rel of Game.releases) {
    tracks.push({
      id: rel.id, name: rel.name, artist: rel.bandName || Game.band.name,
      album: rel.name, style: rel.style, releaseType: rel.releaseType, plays: rel.plays,
      likes: rel.likes, comments: rel.comments, duration: rel.songs.reduce((s, x) => s + x.duration, 0),
      lyrics: rel.songs.map(s => s.lyrics).filter(Boolean).join("\n\n"),
      source: rel, isRival: false, quality: rel.quality,
    });
  }
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      tracks.push({
        id: rel.id || rel.name, name: rel.name, artist: rel.bandName,
        album: rel.album || rel.name, style: rel.style, releaseType: rel.releaseType, plays: rel.plays,
        likes: rel.likes, comments: rel.comments, duration: rel.duration || 240,
        lyrics: "", source: rel, isRival: true, quality: rel.quality,
      });
    }
  }
  return tracks;
}

// 按「歌手 + 专辑」分组
function groupTracksByAlbum(tracks) {
  const groups = [];
  const map = {};
  for (const t of tracks) {
    const key = (t.artist || "未知") + "||" + (t.album || t.name);
    if (!map[key]) {
      map[key] = { artist: t.artist, album: t.album || t.name, releaseType: t.releaseType, tracks: [] };
      groups.push(map[key]);
    }
    map[key].tracks.push(t);
  }
  for (const g of groups) {
    g.tracks.sort((a, b) => (b.plays || 0) - (a.plays || 0));
  }
  return groups;
}

// ===== 渲染播放器视图 =====
function buildCharts() {
  const singles = [];
  for (const rel of Game.releases) {
    const n = rel.songs.length || 1;
    const perPlays = Math.round((rel.plays || 0) / n);
    const perSales = Math.round((rel.sales || 0) / n);
    for (const song of rel.songs) {
      singles.push({
        id: song.id || (rel.id + "_" + song.name), playId: rel.id, name: song.name,
        bandName: rel.bandName || Game.band.name, album: rel.name,
        plays: perPlays, sales: perSales, dayIndex: rel.dayIndex, quality: song.quality, isRival: false,
      });
    }
  }
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      singles.push({
        id: rel.id, playId: rel.id, name: rel.name,
        bandName: rel.bandName || r.name, album: rel.album || rel.name,
        plays: rel.plays || 0, sales: rel.sales || 0, dayIndex: rel.dayIndex, quality: rel.quality, isRival: true,
      });
    }
  }
  const albums = [];
  for (const rel of Game.releases) {
    albums.push({ bandName: rel.bandName || Game.band.name, album: rel.name, plays: rel.plays || 0, sales: rel.sales || 0, releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: false });
  }
  const map = {};
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      const key = r.name + "||" + (rel.album || rel.name);
      if (!map[key]) map[key] = { bandName: r.name, album: rel.album || rel.name, plays: 0, sales: 0, releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: true };
      const a = map[key];
      a.plays += rel.plays || 0;
      a.sales += rel.sales || 0;
      a.dayIndex = Math.min(a.dayIndex, rel.dayIndex);
    }
  }
  for (const k in map) albums.push(map[k]);
  return { singles, albums };
}

function renderPlayerView() {
  const el = document.querySelector('[data-game-view="player"]');
  const { singles, albums } = buildCharts();
  const tab = window._playerChartTab || "单曲热度";
  const isAlbums = (tab === "专辑热度" || tab === "专辑销量");
  let list;
  if (tab === "单曲热度") list = singles.slice().sort((a, b) => b.plays - a.plays);
  else if (tab === "专辑热度") list = albums.slice().sort((a, b) => b.plays - a.plays);
  else if (tab === "新歌热度") list = singles.filter(s => s.dayIndex >= Game.dayIndex - 30).sort((a, b) => b.plays - a.plays);
  else list = albums.slice().sort((a, b) => b.sales - a.sales);

  const rows = list.slice(0, 100).map((it, i) => {
    const title = isAlbums ? it.album : it.name;
    const sub = isAlbums ? `${it.bandName} · ${it.releaseType}` : `${it.bandName} · ${it.album}`;
    const val = tab === "专辑销量" ? formatNumber(it.sales) + " 张" : formatNumber(it.plays) + " 播放";
    const clickable = !isAlbums;
    return `<div class="chart-item ${clickable ? "clickable" : ""}" ${clickable ? `data-action="play-track" data-id="${it.playId}"` : ""}>
      <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
      <div class="chart-main">
        <div class="chart-name">${escapeHtml(title)}</div>
        <div class="chart-sub">${escapeHtml(sub)}</div>
      </div>
      <div class="chart-val">${val}</div>
    </div>`;
  }).join("");

  el.innerHTML = `
    <div class="section-title">🎧 音乐播放器</div>
    <div class="chart-tabs">
      ${["单曲热度", "专辑热度", "新歌热度", "专辑销量"].map(t => `<button class="chart-tab ${t === tab ? "active" : ""}" data-action="player-chart-tab" data-tab="${t}">${t}榜</button>`).join("")}
    </div>
    <div class="player-layout">
      <div class="player-left">
        <div class="player-track-list chart-list">
          ${list.length ? rows : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无数据</div>`}
        </div>
      </div>
      <div class="player-right" id="player-detail">
        ${Player.current ? renderPlayerDetail(Player.current) : `<div class="player-empty"><div class="player-empty-disc">♫</div><p>点击榜单中的歌曲开始播放</p></div>`}
      </div>
    </div>
  `;
}


// 渲染播放器专辑分组（含展开的歌曲列表）
function renderPlayerAlbumGroup(g, index) {
  const expanded = playerExpandedAlbums.has(index);
  const totalPlays = g.tracks.reduce((s, t) => s + (t.plays || 0), 0);
  return `
    <div class="player-album-group">
      <div class="player-album-item" data-action="toggle-player-album" data-index="${index}">
        <div class="player-album-cover">${g.releaseType === "专辑" ? "💿" : g.releaseType === "EP" ? "📀" : "🎵"}</div>
        <div class="player-album-main">
          <div class="player-album-name">${escapeHtml(g.album)}</div>
          <div class="player-album-sub">${escapeHtml(g.artist)} · ${g.tracks.length} 首 · ${formatNumber(totalPlays)} 播放</div>
        </div>
        <div class="player-album-arrow">${expanded ? "▾" : "▸"}</div>
      </div>
      ${expanded ? `<div class="player-album-tracks">
        ${g.tracks.map(t => `
          <div class="player-track-item ${Player.current && Player.current.id === t.id ? "active" : ""}" data-action="play-track" data-id="${t.id}">
            <div class="player-track-name">${escapeHtml(t.name)}</div>
            <div class="player-track-plays">${formatNumber(t.plays)}</div>
            <div class="player-track-play-btn">${ICONS.play}</div>
          </div>`).join("")}
      </div>` : ""}
    </div>
  `;
}

function togglePlayerAlbum(index) {
  if (playerExpandedAlbums.has(index)) playerExpandedAlbums.delete(index);
  else playerExpandedAlbums.add(index);
  renderPlayerView();
}

// 渲染播放详情
function renderPlayerDetail(track) {
  const source = track.source;
  // 生成评论列表（基于真实评论总数，评论数为 0 时不生成）
  const commentCount = Math.min(20, Math.round(source.comments / 50));
  let comments = source.commentList || [];
  if (!comments.length && commentCount > 0) {
    comments = generateComments(source, commentCount);
  }
  const progress = Math.round(Player.progress * 100);
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
      <span class="pp-time" id="player-cur-time">${fmtTime(curSec)}</span>
      <div class="player-progress"><div class="player-progress-bar" style="width:${progress}%"></div></div>
      <span class="pp-time">${fmtTime(totalSec)}</span>
    </div>
    <div class="player-controls">
      <button class="mini-btn" data-action="player-prev">${ICONS.prev}</button>
      <button class="mini-btn play" data-action="player-toggle">${Player.playing ? ICONS.pause : ICONS.play}</button>
      <button class="mini-btn" data-action="player-next">${ICONS.next}</button>
    </div>
    ${track.lyrics ? `<div class="player-lyrics"><div class="lyrics-title">歌词</div><pre>${escapeHtml(track.lyrics)}</pre></div>` : ""}
    <div class="player-comments">
      <div class="comments-title">评论区（${formatNumber(track.comments)}）</div>
      ${comments.length ? comments.map(c => `
        <div class="comment-item">
          <div class="comment-avatar">${c.user.charAt(0)}</div>
          <div class="comment-body">
            <div class="comment-user">${c.user} <span class="comment-time">${c.time}</span></div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
            <div class="comment-likes">👍 ${formatNumber(c.likes)}</div>
          </div>
        </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:20px;">暂无评论</div>`}
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
  const detailBar = document.querySelector(".player-progress-bar");
  if (detailBar) detailBar.style.width = pct + "%";
  // 实时更新当前时间显示
  const curTimeEl = document.getElementById("player-cur-time");
  if (curTimeEl && Player.current) {
    curTimeEl.textContent = fmtTime(Math.round(Player.progress * Player.current.duration));
  }
}

function togglePlay() {
  if (!Player.current) return;
  Player.playing = !Player.playing;
  if (Player.playing) startPlayback();
  else if (Player.timer) clearInterval(Player.timer);
  renderPlayerView();
}

function prevTrack() {
  if (Player.queue.length === 0) return;
  Player.index = (Player.index - 1 + Player.queue.length) % Player.queue.length;
  Player.current = Player.queue[Player.index];
  Player.progress = 0;
  startPlayback();
  renderPlayerView();
}

function nextTrack() {
  if (Player.queue.length === 0) return;
  Player.index = (Player.index + 1) % Player.queue.length;
  Player.current = Player.queue[Player.index];
  Player.progress = 0;
  startPlayback();
  renderPlayerView();
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
}
window.showReleaseDetail = showReleaseDetail;
