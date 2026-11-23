// 主入口：初始化 + 全局事件委托 + 设置视图

// ===== 背景音乐 =====
let bgmAudio = null;
let bgmEnabled = true;
let bgmStarted = false;

function initBgm() {
  bgmAudio = document.getElementById("bgm");
  try {
    const saved = localStorage.getItem("bgmEnabled");
    bgmEnabled = saved === null ? true : saved === "1";
  } catch (e) { bgmEnabled = true; }
  const cb = document.getElementById("bgm-toggle");
  if (cb) {
    cb.checked = bgmEnabled;
    cb.addEventListener("change", () => setBgm(cb.checked));
  }
}
function setBgm(enabled) {
  bgmEnabled = enabled;
  try { localStorage.setItem("bgmEnabled", enabled ? "1" : "0"); } catch (e) {}
  if (!bgmAudio) return;
  if (enabled) bgmAudio.play().catch(() => {});
  else bgmAudio.pause();
}
function tryPlayBgm() {
  if (bgmEnabled && bgmAudio) bgmAudio.play().catch(() => {});
}

// ===== 设置视图渲染 =====
function renderSettings() {
  document.getElementById("settings-version").textContent = Game.version;
  const logsEl = document.getElementById("update-logs");
  const log = window.UPDATE_LOGS[0];  // 只展示当前（最新）版本的更新内容
  logsEl.innerHTML = log ? `
    <div class="update-log">
      <div class="ul-head">
        <span class="ul-version">v${log.version}</span>
        <span class="ul-size badge ${log.size === "大更新" ? "badge-red" : log.size === "中更新" ? "badge-purple" : "badge-blue"}">${log.size}</span>
        <span class="ul-date">${log.date}</span>
      </div>
      <ul>${log.items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
    </div>` : "";
  const cb = document.getElementById("bgm-toggle");
  if (cb) cb.checked = bgmEnabled;
}

// ===== 全局事件委托 =====
function bindEvents() {
  document.addEventListener("click", (e) => {
    if (!bgmStarted) { bgmStarted = true; tryPlayBgm(); }
    // 模式卡片选择
    const modeCard = e.target.closest(".mode-card");
    if (modeCard) {
      createMode = modeCard.dataset.mode;
      document.querySelectorAll(".mode-card").forEach(c => c.classList.toggle("selected", c === modeCard));
      return;
    }

    const navItem = e.target.closest(".nav-item");
    if (navItem && navItem.dataset.nav) {
      switchGameView(navItem.dataset.nav);
      return;
    }

    // data-action 处理
    const target = e.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;

    switch (action) {
      case "toggle-version-content": {
        const row = document.getElementById("settings-content-row");
        const content = document.getElementById("settings-content");
        if (row && content) {
          const open = content.style.display !== "none";
          content.style.display = open ? "none" : "";
          row.classList.toggle("open", !open);
        }
        break;
      }
      // 主菜单/创建/设置
      case "new-game":
      case "continue-game":
      case "open-settings":
      case "create-back":
      case "create-next":
      case "settings-back":
      case "back-menu":
        handleCreateAction(action);
        break;

      // 时间推进
      case "advance-1":
        advanceTime(1); renderTopbar(); refreshCurrentView(); break;
      case "advance-7":
        advanceTime(7); renderTopbar(); refreshCurrentView(); break;
      case "advance-30":
        advanceTime(30); renderTopbar(); refreshCurrentView(); break;

      // 创作
      case "submit-song":
        submitSong(); break;
      case "preview-song":
        break;

      // 发布
      case "submit-release":
        submitRelease(); break;
      case "release-add":
        handleReleaseAdd(); break;
      case "release-remove":
        handleReleaseRemove(parseInt(target.dataset.index)); break;
      case "release-up":
        handleReleaseMove(parseInt(target.dataset.index), -1); break;
      case "release-down":
        handleReleaseMove(parseInt(target.dataset.index), 1); break;
      case "open-release":
        openRelease(target.dataset.id); break;

      // 训练
      case "train":
        handleTrain(target.dataset.member, target.dataset.days); break;

      // 巡演
      case "tour-add":
        handleTourAdd(); break;
      case "tour-remove":
        window._tourCities?.splice(parseInt(target.dataset.index), 1); renderTourList(); break;
      case "tour-start":
        handleTourStart(); break;

      // 播放器
      case "player-chart-tab":
        window._playerChartTab = target.dataset.tab; renderPlayerView(); break;
      case "player-toggle-album": {
        const key = target.dataset.key;
        if (!window._playerExpandedAlbums) window._playerExpandedAlbums = new Set();
        if (window._playerExpandedAlbums.has(key)) window._playerExpandedAlbums.delete(key);
        else window._playerExpandedAlbums.add(key);
        renderPlayerView(); break;
      }
      case "play-track":
        playTrack(target.dataset.id); break;
      case "toggle-player-album":
        togglePlayerAlbum(parseInt(target.dataset.index)); break;
      case "player-toggle":
        togglePlay(); break;
      case "player-prev":
        prevTrack(); break;
      case "player-next":
        nextTrack(); break;

      // 评分
      case "rating-tab":
        window._ratingTab = target.dataset.tab; currentPlatformName = null; renderRatingView(); break;
      case "rating-toggle-album": {
        const key = target.dataset.key;
        if (!window._ratingExpandedAlbums) window._ratingExpandedAlbums = new Set();
        if (window._ratingExpandedAlbums.has(key)) window._ratingExpandedAlbums.delete(key);
        else window._ratingExpandedAlbums.add(key);
        renderRatingView(); break;
      }
      case "select-rating-chart":
        selectRatingFromChart(target.dataset.id); break;
      case "select-rating":
        selectRating(target.dataset.id); break;
      case "toggle-album":
        toggleAlbum(parseInt(target.dataset.index)); break;
      case "select-platform":
        selectPlatform(target.dataset.platform); break;
      case "back-platforms":
        backToPlatforms(); break;

      default:
        break;
    }
  });

  // 省份/城市联动在创建和巡演中通过 change 监听处理
}

// 刷新当前激活的 game-view
function refreshCurrentView() {
  const active = document.querySelector(".game-view.active");
  if (active) {
    const name = active.dataset.gameView;
    renderGameView(name);
  }
}

// ===== 初始化 =====
function init() {
  initBgm();
  bindEvents();
  renderMenu();
  showView("menu");
}

document.addEventListener("DOMContentLoaded", init);
