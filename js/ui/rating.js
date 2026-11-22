// 评分网站 UI：模拟豆瓣等现实评分网站，多平台评分展示

let currentRatingRelease = null;

function renderRatingView() {
  const el = document.querySelector('[data-game-view="rating"]');
  const releases = Game.releases;
  // 如果当前没有选中的作品，默认选最新的
  if (!currentRatingRelease && releases.length) {
    currentRatingRelease = releases[releases.length - 1];
  }
  el.innerHTML = `
    <div class="section-title">⭐ 评分网站</div>
    <div class="rating-layout">
      <div class="rating-left">
        <div class="rating-list-title">作品列表</div>
        ${releases.length ? releases.slice().reverse().map(r => `
          <div class="rating-item ${currentRatingRelease && currentRatingRelease.id === r.id ? "active" : ""}" data-action="select-rating" data-id="${r.id}">
            <div class="rating-item-cover">${r.releaseType === "专辑" ? "💿" : r.releaseType === "EP" ? "📀" : "🎵"}</div>
            <div>
              <div class="rating-item-name">${r.name}</div>
              <div class="rating-item-sub">${r.releaseType} · ${r.style}</div>
            </div>
            <div class="rating-item-score">${r.avgScore ?? "—"}</div>
          </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:30px;">暂无已发布作品</div>`}
      </div>
      <div class="rating-right" id="rating-detail">
        ${currentRatingRelease ? renderRatingDetail(currentRatingRelease) : `<div style="color:var(--text-faint);text-align:center;padding:40px;">选择左侧作品查看评分</div>`}
      </div>
    </div>
  `;
}

function renderRatingDetail(rel) {
  // 确保有评分
  if (!rel.ratings || !rel.ratings.length) generateRatings(rel);
  const ratings = rel.ratings;
  const avg = rel.avgScore ?? calcAvgScore(ratings);
  const avgLevel = window.RATING_LEVELS(avg, 10);

  return `
    <div class="rating-detail-header">
      <div class="rating-detail-cover">${rel.releaseType === "专辑" ? "💿" : rel.releaseType === "EP" ? "📀" : "🎵"}</div>
      <div class="rating-detail-meta">
        <h2 class="rating-detail-name">${rel.name}</h2>
        <div class="rating-detail-artist">${rel.bandName || Game.band.name} · ${rel.style} · ${rel.releaseType}</div>
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
  const is5Star = r.scale === 5 && pf.type === "媒体乐评" && pf.name !== "知乎" && pf.name !== "网易云音乐";
  const showStar = is5Star || pf.name === "滚石" || pf.name === "AllMusic" || pf.name === "网易云音乐" || pf.name === "知乎";
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
    </div>
  `;
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1).replace(/\.0$/, "");
}
function formatScale(scale) {
  return Number.isInteger(scale) ? String(scale) : String(scale);
}

function renderStars(count) {
  // count: 0~5
  const full = Math.floor(count);
  const half = count - full >= 0.25 && count - full < 0.75;
  const hasHalf = count - full >= 0.75 || (count - full >= 0.25 && count - full < 0.75);
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += "★";
    else if (i === full && hasHalf) stars += "⯪";
    else stars += "☆";
  }
  return stars;
}

function levelColor(score) {
  if (score >= 8.5) return "#ffc83d";
  if (score >= 7) return "#2ecc71";
  if (score >= 5.5) return "#4db8ff";
  return "#9a9ab0";
}

function selectRating(id) {
  currentRatingRelease = Game.releases.find(r => r.id === id);
  renderRatingView();
}
