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
  const tracks = collectAllRatingTracks();
  // 打开界面时自动为所有歌曲生成评分，列表直接显示分数，无需点击
  for (const t of tracks) {
    if (!t.ratings || !t.ratings.length) {
      generateRatings(t);
    }
  }
  const groups = groupByAlbum(tracks);
  if (!currentRatingRelease && tracks.length) {
    currentRatingRelease = tracks[0];
  }
  let detailHTML;
  if (currentRatingRelease) {
    detailHTML = currentPlatformName
      ? renderPlatformComments(currentRatingRelease, currentPlatformName)
      : renderRatingDetail(currentRatingRelease);
  } else {
    detailHTML = `<div style="color:var(--text-faint);text-align:center;padding:40px;">选择左侧作品查看评分</div>`;
  }
  el.innerHTML = `
    <div class="section-title">⭐ 评分网站</div>
    <div class="rating-layout">
      <div class="rating-left">
        <div class="rating-list-title">专辑列表（${groups.length}）</div>
        ${groups.length ? groups.map((g, i) => renderAlbumGroup(g, i)).join("") : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无已发布作品</div>`}
      </div>
      <div class="rating-right" id="rating-detail">${detailHTML}</div>
    </div>
  `;
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
    const r = Game.rng();
    let pool;
    if (r < ratio * 0.75) pool = window.COMMENT_TEMPLATES.praise;
    else if (r < ratio * 0.75 + (1 - ratio) * 0.6) pool = window.COMMENT_TEMPLATES.criticize;
    else if (r < 0.88) pool = window.COMMENT_TEMPLATES.neutral;
    else pool = window.COMMENT_TEMPLATES.short;
    let text = pick(pool)
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
