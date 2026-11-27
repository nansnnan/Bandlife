// 音乐播放器 UI：模拟现实播放器（网易云风格），含歌曲列表、播放详情、评论区、迷你播放条

// 播放控制图标（用 SVG 替代 Unicode 符号，避免在部分字体下渲染成方框）
const ICONS = {
  play: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
  prev: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M6 6h2v12H6zM9 12l8-6v12z"/></svg>',
  next: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="display:block"><path d="M16 6h2v12h-2zM7 6l8 6-8 6z"/></svg>',
};

// 竞品作品稳定 id（旧存档无 id 时生成，保证各处一致）
function rivalRelId(rel) {
  if (!rel.id) rel.id = "rival_" + (rel.bandName || "") + "_" + (rel.album || rel.name) + "_" + rel.name + "_" + (rel.dayIndex || 0);
  return rel.id;
}
function hashUnit(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return (h % 1000) / 1000;
}

const Player = {
  queue: [],       // 播放队列（展平的歌曲对象）
  index: -1,
  playing: false,
  progress: 0,     // 0~1
  timer: null,
  current: null,
  bgmMode: false,  // 右侧是否展示背景音乐详情
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
        id: rivalRelId(rel), name: rel.name, artist: rel.bandName,
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
function renderMyRankDropdown(items) {
  return `<details class="my-rank-dropdown"><summary>我的作品排名（${items.length}） ▾</summary>
    <div class="my-rank-list">
      ${items.length ? items.map(it => `<div class="my-rank-item"><span>${escapeHtml(it.name)}</span><span class="my-rank-pos">${it.rank > 100 ? "100+" : "第 " + it.rank + " 名"}</span></div>`).join("") : `<div style="color:var(--text-faint);padding:6px 12px;">暂无我的作品上榜</div>`}
    </div>
  </details>`;
}

function buildCharts() {
  const singles = [];
  for (const rel of Game.releases) {
    const totalPlays = rel.plays || 0;
    const totalSales = rel.sales || 0;
    const weights = rel.songs.map(s => Math.max(1, s.quality || 50));
    const totalW = weights.reduce((a, b) => a + b, 0) || 1;
    rel.songs.forEach((song, idx) => {
      const share = weights[idx] / totalW;
      const jitter = 0.85 + 0.3 * hashUnit((song.id || song.name) + "|p");
      singles.push({
        id: song.id || (rel.id + "_" + song.name), playId: rel.id, name: song.name,
        bandName: rel.bandName || Game.band.name, album: rel.name,
        plays: Math.round(totalPlays * share * jitter),
        sales: Math.round(totalSales * share),
        dayIndex: rel.dayIndex, quality: song.quality, isRival: false,
        style: rel.style, releaseType: rel.releaseType,
        share, jitter, duration: song.duration, lyrics: song.lyrics || "", source: rel,
        // 每首歌独立的评论来源，避免同一专辑内所有歌曲共用评论
        commentSource: {
          id: "song|" + rel.id + "|" + (song.id || song.name),
          name: song.name,
          bandName: rel.bandName || Game.band.name,
          style: rel.style,
          quality: song.quality,
          dayIndex: rel.dayIndex,
          comments: Math.round((rel.comments || 0) * share),
        },
      });
    });
  }
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      const jitter = 0.8 + 0.4 * hashUnit(rivalRelId(rel) + "|p");
      singles.push({
        id: rivalRelId(rel), playId: rivalRelId(rel), name: rel.name,
        bandName: rel.bandName || r.name, album: rel.album || rel.name,
        plays: Math.round((rel.plays || 0) * jitter), sales: rel.sales || 0,
        dayIndex: rel.dayIndex, quality: rel.quality, isRival: true,
        style: rel.style, releaseType: rel.releaseType,
        share: 1, jitter, duration: rel.duration || 240, lyrics: "", source: rel,
      });
    }
  }
  const albums = [];
  for (const rel of Game.releases) {
    albums.push({
      key: "own||" + rel.id, bandName: rel.bandName || Game.band.name, album: rel.name,
      plays: rel.plays || 0, sales: rel.sales || 0, releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: false,
      tracks: rel.songs.map(s => ({ name: s.name, playId: rel.id })),
    });
  }
  const map = {};
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      const key = "riv||" + r.name + "||" + (rel.album || rel.name);
      if (!map[key]) map[key] = { key, bandName: r.name, album: rel.album || rel.name, plays: 0, sales: 0, releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: true, tracks: [] };
      const a = map[key];
      a.plays += rel.plays || 0;
      a.sales += rel.sales || 0;
      a.dayIndex = Math.min(a.dayIndex, rel.dayIndex);
      a.tracks.push({ name: rel.name, playId: rivalRelId(rel) });
    }
  }
  for (const k in map) albums.push(map[k]);
  return { singles, albums };
}


// 名称排序：英文按字母、中文按拼音（localeCompare zh），英文优先于中文
function _sortKey(name) {
  const n = String(name || "").trim();
  if (!n) return "~";
  const c = n[0];
  if (/[a-zA-Z]/.test(c)) return "A" + n.toLowerCase();
  if (/[0-9]/.test(c)) return "0" + n;
  return "Z" + n;
}
function _cmpName(a, b) {
  const ka = _sortKey(a), kb = _sortKey(b);
  if (ka[0] !== kb[0]) return ka < kb ? -1 : 1;
  return String(a).localeCompare(String(b), "zh");
}

// 已发行（当前日期之前）的全部歌曲与专辑，按名称排序
function buildLibrary() {
  const today = Game.dayIndex;
  const songs = [], albums = [];
  for (const rel of Game.releases) {
    if ((rel.dayIndex || 0) > today) continue;
    albums.push({
      key: "own||" + rel.id, album: rel.name, bandName: rel.bandName || Game.band.name,
      releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: false,
      tracks: rel.songs.map((sg, i) => ({ name: sg.name, playId: rel.id, idx: i })),
    });
    rel.songs.forEach(sg => {
      songs.push({ id: sg.id || (rel.id + "_" + sg.name), name: sg.name, bandName: rel.bandName || Game.band.name, album: rel.name, dayIndex: rel.dayIndex });
    });
  }
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      if ((rel.dayIndex || 0) > today) continue;
      const key = "riv||" + r.name + "||" + (rel.album || rel.name);
      let a = albums.find(x => x.key === key);
      if (!a) {
        a = { key, album: rel.album || rel.name, bandName: r.name, releaseType: rel.releaseType, dayIndex: rel.dayIndex, isRival: true, tracks: [] };
        albums.push(a);
      }
      a.tracks.push({ name: rel.name, playId: rivalRelId(rel), idx: a.tracks.length });
      songs.push({ id: rivalRelId(rel), name: rel.name, bandName: r.name, album: rel.album || rel.name, dayIndex: rel.dayIndex });
    }
  }
  songs.sort((a, b) => _cmpName(a.name, b.name));
  albums.sort((a, b) => _cmpName(a.album, b.album));
  // 专辑内歌曲保持默认（发行）顺序
  albums.forEach(a => a.tracks.sort((x, y) => x.idx - y.idx));
  return { songs, albums };
}

function renderPlayerView() {
  const el = document.querySelector('[data-game-view="player"]');
  const prevScrollEl = el.querySelector('.player-scroll');
  const prevScrollTop = prevScrollEl ? prevScrollEl.scrollTop : 0;
  const prevListEl = el.querySelector('.player-track-list');
  const prevListTop = prevListEl ? prevListEl.scrollTop : 0;
  const { singles, albums } = buildCharts();
  const lib = buildLibrary();
  const tab = window._playerChartTab || "单曲热度";
  const isLibrarySongs = tab === "全部音乐";
  const isLibraryAlbums = tab === "全部专辑";
  const isAlbums = (tab === "专辑热度" || tab === "专辑销量" || isLibraryAlbums);
  let list;
  if (isLibrarySongs) list = lib.songs;
  else if (isLibraryAlbums) list = lib.albums;
  else if (tab === "单曲热度") list = singles.slice().sort((a, b) => b.plays - a.plays);
  else if (tab === "专辑热度") list = albums.slice().sort((a, b) => b.plays - a.plays);
  else if (tab === "新歌热度") list = singles.filter(s => s.dayIndex >= Game.dayIndex - 30).sort((a, b) => b.plays - a.plays);
  else list = albums.slice().sort((a, b) => b.sales - a.sales);

  const myRankItems = [];
  const isChartMode = !isLibrarySongs && !isLibraryAlbums;
  if (!isChartMode) { /* 全部音乐/全部专辑模式下不显示排名对比 */ }
  else if (!isAlbums) {
    const mySongs = [];
    for (const rel of Game.releases) for (const s of rel.songs) mySongs.push({ id: s.id || (rel.id + "_" + s.name), name: s.name });
    for (const ms of mySongs) {
      const idx = list.findIndex(x => x.id === ms.id);
      if (idx >= 0) myRankItems.push({ name: ms.name, rank: idx + 1 });
    }
  } else {
    for (const rel of Game.releases) {
      const key = "own||" + rel.id;
      const idx = list.findIndex(x => x.key === key);
      if (idx >= 0) myRankItems.push({ name: rel.name, rank: idx + 1 });
    }
  }
  myRankItems.sort((a, b) => a.rank - b.rank);

  if (!window._playerExpandedAlbums) window._playerExpandedAlbums = new Set();
  const expanded = window._playerExpandedAlbums;

  let rows;
  if (isAlbums) {
    rows = (isLibraryAlbums ? list : list.slice(0, 100)).map((it, i) => {
      const val = isLibraryAlbums ? "" : (tab === "专辑销量" ? formatNumber(it.sales) + " 张" : formatNumber(it.plays) + " 播放");
      const isOpen = expanded.has(it.key);
      const subRows = isOpen ? (it.tracks || []).map((t, ti) => `<div class="chart-item clickable chart-sub-item" data-action="play-track" data-id="${escapeHtml(t.playId)}">
        <span class="chart-rank">${ti + 1}</span>
        <div class="chart-main"><div class="chart-name">${escapeHtml(t.name)}</div></div>
        <div class="chart-val">▶</div>
      </div>`).join("") : "";
      return `<div class="chart-item clickable album-row" data-action="player-toggle-album" data-key="${escapeHtml(it.key)}">
        <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
        <div class="chart-main">
          <div class="chart-name">${escapeHtml(it.album)}</div>
          <div class="chart-sub">${escapeHtml(it.bandName)} · ${it.releaseType} · ${it.tracks ? it.tracks.length : 0} 首</div>
        </div>
        <div class="chart-val">${val} <span class="album-arrow">${isOpen ? "▾" : "▸"}</span></div>
      </div>${subRows}`;
    }).join("");
  } else {
    rows = (isLibrarySongs ? list : list.slice(0, 100)).map((it, i) => {
      const val = isLibrarySongs ? "" : formatNumber(it.plays) + " 播放";
      return `<div class="chart-item clickable" data-action="play-track" data-id="${it.id}">
        <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
        <div class="chart-main">
          <div class="chart-name">${escapeHtml(it.name)}</div>
          <div class="chart-sub">${escapeHtml(it.bandName)} · ${escapeHtml(it.album)}</div>
        </div>
        <div class="chart-val">${val}</div>
      </div>`;
    }).join("");
  }

  el.innerHTML = `
    <div class="player-fixed-head">
      <div class="section-title">🎧 音乐播放器</div>
      <div class="player-bgm clickable" data-action="select-bgm">
        <span class="player-bgm-icon">🎵</span>
        <div class="player-bgm-main">
          <div class="player-bgm-name">背景音乐 · At the night</div>
          <div class="player-bgm-note">这是背景音乐，不属于下方排行榜（点击查看播放）</div>
        </div>
      </div>
      <div class="chart-tabs">
        ${["单曲热度", "专辑热度", "新歌热度", "专辑销量", "全部音乐", "全部专辑"].map(t => `<button class="chart-tab ${t === tab ? "active" : ""}" data-action="player-chart-tab" data-tab="${t}">${/^全部/.test(t) ? t : t + "榜"}</button>`).join("")}
      </div>
    </div>
    <div class="player-scroll">
      ${isChartMode ? renderMyRankDropdown(myRankItems) : ""}
      <div class="player-layout">
        <div class="player-left">
          <div class="player-track-list chart-list">
            ${list.length ? rows : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无数据</div>`}
          </div>
        </div>
        <div class="player-right" id="player-detail">
          ${Player.bgmMode ? renderBgmDetail() : (Player.current ? renderPlayerDetail(Player.current) : `<div class="player-empty"><div class="player-empty-disc">♫</div><p>点击榜单中的歌曲开始播放</p></div>`)}
        </div>
      </div>
    </div>
  `;
  const newScroll = el.querySelector('.player-scroll');
  if (newScroll) newScroll.scrollTop = prevScrollTop;
  const newList = el.querySelector('.player-track-list');
  if (newList) newList.scrollTop = prevListTop;
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
  const share = track.share || 1;
  const jitter = track.jitter || 1;
  const plays = Math.round((source.plays ?? track.plays ?? 0) * share * jitter);
  const likes = source.likes ?? track.likes;
  const cs = track.commentSource || source;
  const totalComments = cs.comments ?? source.comments ?? track.comments;
  // 生成评论列表（基于真实评论总数，评论数为 0 时不生成）
  const commentCount = Math.min(20, Math.round(totalComments / 50));
  // 歌曲级评论源为临时对象（不写回专辑缓存），专辑级仍复用缓存
  let comments = track.commentSource ? [] : (source.commentList || []);
  if (!comments.length && commentCount > 0) {
    comments = generateComments(cs, commentCount);
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
          <div class="ps-item"><div class="ps-num">${formatNumber(plays)}</div><div class="ps-label">播放量</div></div>
          <div class="ps-item"><div class="ps-num">${formatNumber(likes)}</div><div class="ps-label">收藏</div></div>
          <div class="ps-item"><div class="ps-num">${formatNumber(totalComments)}</div><div class="ps-label">评论</div></div>
        </div>
      </div>
    </div>
    <div class="player-progress-wrap">
      <span class="pp-time" id="player-cur-time">${fmtTime(curSec)}</span>
      <div class="player-progress" data-action="seek"><div class="player-progress-bar" style="width:${progress}%"></div></div>
      <span class="pp-time">${fmtTime(totalSec)}</span>
    </div>
    <div class="player-controls">
      <button class="mini-btn" data-action="player-prev">${ICONS.prev}</button>
      <button class="mini-btn play" data-action="player-toggle">${Player.playing ? ICONS.pause : ICONS.play}</button>
      <button class="mini-btn" data-action="player-next">${ICONS.next}</button>
    </div>
    ${track.lyrics ? `<div class="player-lyrics"><div class="lyrics-title">歌词</div><pre>${escapeHtml(track.lyrics)}</pre></div>` : ""}
    <div class="player-comments">
      <div class="comments-title">评论区（${formatNumber(totalComments)}）</div>
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

// 背景音乐详情（仅暂停与进度，不显示播放量与评论）
function renderBgmDetail() {
  const a = document.getElementById("bgm");
  const dur = a && a.duration ? a.duration : 0;
  const cur = a ? (a.currentTime || 0) : 0;
  const pct = dur ? Math.round((cur / dur) * 100) : 0;
  const playing = a && !a.paused;
  return `
    <div class="player-detail-header">
      <div class="player-disc ${playing ? "spinning" : ""}">
        <div class="disc-ring"></div>
        <div class="disc-center">♫</div>
      </div>
      <div class="player-meta">
        <div class="player-song-name">At the night</div>
        <div class="player-artist-name">背景音乐 · 不参与榜单</div>
        <div class="player-tags"><span class="badge badge-blue">背景音乐</span></div>
      </div>
    </div>
    <div class="player-progress-wrap">
      <span class="pp-time" id="bgm-cur-time">${fmtTime(cur)}</span>
      <div class="player-progress" data-action="seek"><div class="player-progress-bar" id="bgm-progress-bar" style="width:${pct}%"></div></div>
      <span class="pp-time">${fmtTime(dur)}</span>
    </div>
    <div class="player-controls">
      <button class="mini-btn play" data-action="bgm-toggle">${playing ? ICONS.pause : ICONS.play}</button>
    </div>
  `;
}

function escapeHtml(s) {
  return (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// ===== 播放控制 =====
function playTrack(id) {
  const { singles } = buildCharts();
  const si = singles.findIndex(s => s.id === id);
  if (si >= 0) {
    const s = singles[si];
    Player.queue = singles;
    Player.index = si;
    Player.current = {
      id: s.id, name: s.name, artist: s.bandName, album: s.album, style: s.style,
      releaseType: s.releaseType, duration: s.duration || 240,
      likes: s.source.likes, comments: s.source.comments,
      lyrics: s.lyrics || "", source: s.source, isRival: s.isRival, quality: s.quality,
      share: s.share || 1, jitter: s.jitter || 1, commentSource: s.commentSource || null,
    };
  } else {
    const tracks = collectAllTracks();
    const idx = tracks.findIndex(t => t.id === id);
    if (idx < 0) return;
    Player.queue = tracks;
    Player.index = idx;
    Player.current = tracks[idx];
  }
  Player.progress = 0;
  Player.bgmMode = false;
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
