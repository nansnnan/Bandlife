// 评分网站 UI：按专辑分组展示 + 多平台评分 + 各平台评论详情页

let currentRatingRelease = null;
let currentPlatformName = null;   // 当前查看的平台评论，null = 查看所有平台
let expandedAlbums = new Set();   // 已展开的专辑索引

// 收集所有可评分歌曲（玩家作品拆成单曲 + 竞争对手每首作品）
function collectAllRatingTracks() {
  const tracks = [];
  // 玩家作品：拆成歌曲
  for (const rel of Game.releases) {
    for (const song of rel.songs) {
      tracks.push({
        id: song.id || (rel.id + "_" + song.name),
        name: song.name,
        bandName: rel.bandName || Game.band.name,
        album: rel.name,
        releaseType: rel.releaseType,
        style: song.style || rel.style,
        quality: song.quality,
        dayIndex: rel.dayIndex,
        isRival: false,
      });
    }
  }
  // 竞争对手作品：每个 rel 是一首歌
  for (const r of Game.rivals) {
    for (const rel of r.releases) {
      rel.id = rel.id || ("rival_" + r.name + "_" + rel.album + "_" + rel.name);
      tracks.push({
        id: rel.id,
        name: rel.name,
        bandName: rel.bandName,
        album: rel.album || rel.name,
        releaseType: rel.releaseType,
        style: rel.style,
        quality: rel.quality,
        dayIndex: rel.dayIndex,
        isRival: true,
      });
    }
  }
  return tracks;
}

// 按「乐队 + 专辑」分组
function groupByAlbum(tracks) {
  const groups = [];
  const map = {};
  for (const t of tracks) {
    const key = (t.bandName || "未知乐队") + "||" + (t.album || t.name);
    if (!map[key]) {
      map[key] = { bandName: t.bandName || "未知乐队", album: t.album || t.name, releaseType: t.releaseType, tracks: [] };
      groups.push(map[key]);
    }
    map[key].tracks.push(t);
  }
  return groups;
}

// 专辑总评分 = 组内歌曲评分的平均
function calcAlbumScore(tracks) {
  if (!tracks.length) return 0;
  let sum = 0, count = 0;
  for (const t of tracks) {
    if (t.avgScore != null) { sum += t.avgScore; count++; }
  }
  return count ? Math.round(sum / count * 10) / 10 : 0;
}

// 五角星 path（24x24）
const STAR_PATH = "M12 2.5 L14.9 8.4 L21.5 9.3 L16.7 13.9 L17.9 20.5 L12 17.2 L6.1 20.5 L7.3 13.9 L2.5 9.3 L9.1 8.4 Z";

// 生成单颗星 SVG，fill 为 0~1 的填充比例（支持半星，避免 Unicode 半星字符渲染成方框）
function starSVG(fill) {
  const gold = "#ffc83d", gray = "#3a3a4a";
  const common = 'viewBox="0 0 24 24" width="16" height="16" style="display:inline-block;vertical-align:middle;margin:0 1px"';
  if (fill >= 1) {
    return `<svg ${common}><path d="${STAR_PATH}" fill="${gold}"/></svg>`;
  }
  if (fill <= 0) {
    return `<svg ${common}><path d="${STAR_PATH}" fill="${gray}"/></svg>`;
  }
  const id = "hs" + Math.floor(Game.rng() * 1e6);
  const pct = Math.round(fill * 100);
  return `<svg ${common}><defs><linearGradient id="${id}"><stop offset="${pct}%" stop-color="${gold}"/><stop offset="${pct}%" stop-color="${gray}"/></linearGradient></defs><path d="${STAR_PATH}" fill="url(#${id})"/></svg>`;
}

// count: 0~5
function renderStars(count) {
  let html = "";
  for (let i = 0; i < 5; i++) {
    html += starSVG(clamp(count - i, 0, 1));
  }
  return html;
}

function renderRatingView() {
  const el = document.querySelector('[data-game-view="rating"]');
  const contentEl = document.querySelector('.content');
  const prevScroll = contentEl ? contentEl.scrollTop : 0;
  const prevLeft = el.querySelector('.player-left .player-track-list');
  const leftScroll = prevLeft ? prevLeft.scrollTop : 0;
  const tab = window._ratingTab || "单曲评分榜";
  const tracks = collectAllRatingTracks();
  for (const t of tracks) if (!t.ratings || !t.ratings.length) generateRatings(t);
  const groups = groupByAlbum(tracks);

  if (!window._ratingExpandedAlbums) window._ratingExpandedAlbums = new Set();
  const expanded = window._ratingExpandedAlbums;

  const isAlbumChart = (tab === "专辑评分榜");
  let list;
  if (isAlbumChart) {
    list = groups.map(g => ({ bandName: g.bandName, album: g.album, tracks: g.tracks, score: calcAlbumScore(g.tracks) }))
      .filter(g => g.score > 0).sort((a, b) => b.score - a.score);
  } else {
    list = tracks.filter(t => t.avgScore != null).sort((a, b) => b.avgScore - a.avgScore);
  }

  const myRankItems = [];
  if (isAlbumChart) {
    for (const rel of Game.releases) {
      const idx = list.findIndex(g => g.bandName === (rel.bandName || Game.band.name) && g.album === rel.name);
      if (idx >= 0) myRankItems.push({ name: rel.name, rank: idx + 1 });
    }
  } else {
    const mySongs = [];
    for (const rel of Game.releases) for (const s of rel.songs) mySongs.push({ id: s.id || (rel.id + "_" + s.name), name: s.name });
    for (const ms of mySongs) {
      const idx = list.findIndex(t => t.id === ms.id);
      if (idx >= 0) myRankItems.push({ name: ms.name, rank: idx + 1 });
    }
  }
  myRankItems.sort((a, b) => a.rank - b.rank);

  let rows;
  if (isAlbumChart) {
    rows = list.slice(0, 100).map((g, i) => {
      const key = g.bandName + "||" + g.album;
      const isOpen = expanded.has(key);
      const subRows = isOpen ? g.tracks.slice().sort((a, b) => (b.avgScore || 0) - (a.avgScore || 0)).map((t, ti) => `<div class="chart-item clickable chart-sub-item" data-action="select-rating-chart" data-id="${escapeHtml(t.id)}">
        <span class="chart-rank">${ti + 1}</span>
        <div class="chart-main"><div class="chart-name">${escapeHtml(t.name)}</div></div>
        <div class="chart-val">${t.avgScore ?? "—"}</div>
      </div>`).join("") : "";
      return `<div class="chart-item clickable album-row" data-action="rating-toggle-album" data-key="${escapeHtml(key)}">
        <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
        <div class="chart-main"><div class="chart-name">${escapeHtml(g.album)}</div><div class="chart-sub">${escapeHtml(g.bandName)} · ${g.tracks.length} 首</div></div>
        <div class="chart-val">${g.score} <span class="album-arrow">${isOpen ? "▾" : "▸"}</span></div>
      </div>${subRows}`;
    }).join("");
  } else {
    rows = list.slice(0, 100).map((t, i) => `<div class="chart-item clickable" data-action="select-rating-chart" data-id="${escapeHtml(t.id)}">
      <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
      <div class="chart-main"><div class="chart-name">${escapeHtml(t.name)}</div><div class="chart-sub">${escapeHtml(t.bandName)} · ${escapeHtml(t.album || "")}</div></div>
      <div class="chart-val">${t.avgScore}</div>
    </div>`).join("");
  }

  let detailHTML;
  if (currentRatingRelease) {
    detailHTML = currentPlatformName ? renderPlatformComments(currentRatingRelease, currentPlatformName) : renderRatingDetail(currentRatingRelease);
  } else {
    detailHTML = `<div class="player-empty"><div class="player-empty-disc">♫</div><p>点击榜单中的作品查看各平台评分</p></div>`;
  }

  el.innerHTML = `
    <div class="section-title">⭐ 评分网站</div>
    ${renderMyRankDropdown(myRankItems)}
    <div class="chart-tabs">
      ${["单曲评分榜", "专辑评分榜"].map(t => `<button class="chart-tab ${t === tab ? "active" : ""}" data-action="rating-tab" data-tab="${t}">${t}</button>`).join("")}
    </div>
    <div class="player-layout">
      <div class="player-left">
        <div class="player-track-list chart-list">
          ${list.length ? rows : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无评分数据</div>`}
        </div>
      </div>
      <div class="player-right" id="rating-detail">${detailHTML}</div>
    </div>
  `;
  const newLeft = el.querySelector('.player-left .player-track-list');
  if (newLeft) newLeft.scrollTop = leftScroll;
  if (contentEl) contentEl.scrollTop = prevScroll;
}


function renderRatingTabs(active) {
  return `<div class="chart-tabs">${["专辑列表", "单曲评分榜", "专辑评分榜"].map(t => `<button class="chart-tab ${t === active ? "active" : ""}" data-action="rating-tab" data-tab="${t}">${t}</button>`).join("")}</div>`;
}

function renderSingleScoreChart() {
  const tracks = collectAllRatingTracks();
  for (const t of tracks) if (!t.ratings || !t.ratings.length) generateRatings(t);
  const sorted = tracks.filter(t => t.avgScore != null).sort((a, b) => b.avgScore - a.avgScore).slice(0, 100);
  return `
    <div class="section-title">⭐ 评分网站</div>
    ${renderRatingTabs("单曲评分榜")}
    <div class="chart-list">
      ${sorted.length ? sorted.map((t, i) => `<div class="chart-item clickable" data-action="select-rating-chart" data-id="${escapeHtml(t.id)}">
        <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
        <div class="chart-main"><div class="chart-name">${escapeHtml(t.name)}</div><div class="chart-sub">${escapeHtml(t.bandName)} · ${escapeHtml(t.album || "")}</div></div>
        <div class="chart-val">${t.avgScore}</div>
      </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无评分数据</div>`}
    </div>`;
}

function renderAlbumScoreChart() {
  const tracks = collectAllRatingTracks();
  for (const t of tracks) if (!t.ratings || !t.ratings.length) generateRatings(t);
  const groups = groupByAlbum(tracks).map(g => ({ bandName: g.bandName, album: g.album, score: calcAlbumScore(g.tracks), count: g.tracks.length })).filter(g => g.score > 0).sort((a, b) => b.score - a.score).slice(0, 100);
  return `
    <div class="section-title">⭐ 评分网站</div>
    ${renderRatingTabs("专辑评分榜")}
    <div class="chart-list">
      ${groups.length ? groups.map((g, i) => `<div class="chart-item">
        <span class="chart-rank ${i < 3 ? "top" : ""}">${i + 1}</span>
        <div class="chart-main"><div class="chart-name">${escapeHtml(g.album)}</div><div class="chart-sub">${escapeHtml(g.bandName)} · ${g.count} 首</div></div>
        <div class="chart-val">${g.score}</div>
      </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无评分数据</div>`}
    </div>`;
}

function selectRatingFromChart(id) {
  const tracks = collectAllRatingTracks();
  const t = tracks.find(x => x.id === id);
  if (!t) return;
  currentRatingRelease = t;
  currentPlatformName = null;
  renderRatingView();
}



// 渲染单个专辑分组（含展开的歌曲列表）
function renderAlbumGroup(g, index) {
  const expanded = expandedAlbums.has(index);
  const totalScore = calcAlbumScore(g.tracks);
  return `
    <div class="album-group">
      <div class="album-item" data-action="toggle-album" data-index="${index}">
        <div class="album-cover">${g.releaseType === "专辑" ? "💿" : g.releaseType === "EP" ? "📀" : "🎵"}</div>
        <div class="album-main">
          <div class="album-name">${escapeHtml(g.album)}</div>
          <div class="album-sub">${escapeHtml(g.bandName)} · ${g.tracks.length} 首</div>
        </div>
        <div class="album-score">${totalScore}</div>
        <div class="album-arrow">${expanded ? "▾" : "▸"}</div>
      </div>
      ${expanded ? `<div class="album-tracks">
        ${g.tracks.map(t => `
          <div class="album-track ${currentRatingRelease && currentRatingRelease.id === t.id ? "active" : ""}" data-action="select-rating" data-id="${t.id}">
            <span class="album-track-name">${escapeHtml(t.name)}</span>
            <span class="album-track-score">${t.avgScore ?? "—"}</span>
          </div>`).join("")}
      </div>` : ""}
    </div>
  `;
}

function renderRatingDetail(rel) {
  if (!rel.ratings || !rel.ratings.length) generateRatings(rel);
  const ratings = rel.ratings;
  const avg = rel.avgScore ?? calcAvgScore(ratings);
  const avgLevel = window.RATING_LEVELS(avg, 10);

  return `
    <div class="rating-detail-header">
      <div class="rating-detail-cover">${rel.releaseType === "专辑" ? "💿" : rel.releaseType === "EP" ? "📀" : "🎵"}</div>
      <div class="rating-detail-meta">
        <h2 class="rating-detail-name">${rel.name}</h2>
        <div class="rating-detail-artist">${rel.bandName || Game.band.name} · ${rel.style || ""} · ${rel.releaseType || ""} · 收录于《${rel.album || ""}》</div>
        <div class="rating-avg-wrap">
          <div class="rating-avg-score">${avg}</div>
          <div class="rating-avg-info">
            <div class="rating-avg-level" style="color:${levelColor(avg)}">${avgLevel}</div>
            <div class="rating-avg-stars">${renderStars(avg / 2)}</div>
            <div class="rating-avg-count">${ratings.length} 个平台评分</div>
          </div>
        </div>
      </div>
    </div>
    <div class="rating-platforms">
      ${ratings.map(r => renderPlatformCard(r)).join("")}
    </div>
  `;
}

function renderPlatformCard(r) {
  const pf = window.RATING_PLATFORMS.find(p => p.name === r.platform) || {};
  const showStar = r.scale === 5;
  return `
    <div class="platform-card" style="border-top-color:${pf.color || "#666"}">
      <div class="platform-head">
        <div class="platform-name" style="color:${pf.color || "#666"}">${pf.name}</div>
        <span class="badge badge-blue" style="background:${pf.color || "#666"}22;color:${pf.color || "#888"}">${pf.type}</span>
      </div>
      <div class="platform-score-wrap">
        <div class="platform-score" style="color:${pf.color || "#666"}">${formatScore(r.score)}</div>
        <div class="platform-scale">/ ${formatScale(r.scale)}</div>
      </div>
      ${showStar ? `<div class="platform-stars">${renderStars(r.score / r.scale * 5)}</div>` : ""}
      <div class="platform-level">${r.level}</div>
      <div class="platform-desc">${pf.desc || ""}</div>
      <button class="btn-time platform-comments-btn" data-action="select-platform" data-platform="${r.platform}">查看评论</button>
    </div>
  `;
}

// 单个平台的评论详情页
function renderPlatformComments(rel, platformName) {
  const rating = rel.ratings.find(x => x.platform === platformName);
  const pf = window.RATING_PLATFORMS.find(p => p.name === platformName) || {};
  if (!rating) return "";
  const comments = generatePlatformComments(rel, platformName);
  return `
    <div class="platform-comments">
      <button class="btn-secondary" data-action="back-platforms" style="margin-bottom:16px;">← 返回平台列表</button>
      <div class="platform-comments-head" style="border-top-color:${pf.color || "#666"}">
        <div class="platform-comments-name" style="color:${pf.color || "#666"}">${pf.name}</div>
        <div class="platform-comments-score" style="color:${pf.color || "#666"}">${formatScore(rating.score)}<span style="font-size:14px;color:var(--text-dim)"> / ${formatScale(rating.scale)}</span></div>
        <div class="platform-comments-level">${rating.level}</div>
        <div class="platform-comments-stars">${rating.scale === 5 ? renderStars(rating.score / rating.scale * 5) : ""}</div>
        <div style="color:var(--text-dim);font-size:12px;">《${rel.name}》 · ${pf.type} · ${pf.desc || ""}</div>
      </div>
      <div class="comments-title" style="margin-top:20px;">评论（${comments.length}）</div>
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

// 根据平台评分生成该平台的评论（按预设模板，评分越高正面评论越多）
function generatePlatformComments(rel, platformName) {
  const rating = rel.ratings.find(x => x.platform === platformName);
  const ratio = rating ? rating.score / rating.scale : 0.5;
  const count = rand(6, 12);
  const list = [];
  for (let i = 0; i < count; i++) {
    const tpl = pickCommentTemplate(ratio);
    const text = tpl
      .replace(/\{song\}/g, rel.name)
      .replace(/\{band\}/g, rel.bandName || Game.band?.name || "")
      .replace(/\{style\}/g, rel.style || "")
      .replace(/\{album\}/g, rel.album || rel.name)
      .replace(/\{ep\}/g, rel.name);
    list.push({
      user: pick(window.COMMENT_USERS),
      text,
      likes: rand(0, 5000),
      time: formatDateShort(Math.max(0, Game.dayIndex - rand(0, Math.max(1, Game.dayIndex - (rel.dayIndex || 0))))),
    });
  }
  return list;
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1).replace(/\.0$/, "");
}
function formatScale(scale) {
  return Number.isInteger(scale) ? String(scale) : String(scale);
}

function levelColor(score) {
  if (score >= 8.5) return "#ffc83d";
  if (score >= 7) return "#2ecc71";
  if (score >= 5.5) return "#4db8ff";
  return "#9a9ab0";
}

function selectRating(id) {
  currentRatingRelease = collectAllRatingTracks().find(r => r.id === id);
  currentPlatformName = null;   // 切换作品时回到平台列表
  renderRatingView();
}

function toggleAlbum(index) {
  if (expandedAlbums.has(index)) expandedAlbums.delete(index);
  else expandedAlbums.add(index);
  renderRatingView();
}

function selectPlatform(platformName) {
  currentPlatformName = platformName;
  renderRatingView();
}

function backToPlatforms() {
  currentPlatformName = null;
  renderRatingView();
}
