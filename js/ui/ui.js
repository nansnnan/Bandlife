// 核心 UI：视图切换、主菜单、创建流程、dashboard、创作/发布/巡演/训练视图

// ===== 视图切换 =====
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.querySelector(`.view[data-view="${name}"]`);
  if (target) target.classList.add("active");
}

function switchGameView(name) {
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.nav === name));
  document.querySelectorAll(".game-view").forEach(v => v.classList.remove("active"));
  const target = document.querySelector(`.game-view[data-game-view="${name}"]`);
  if (target) target.classList.add("active");
  // 渲染对应视图
  renderGameView(name);
}

// ===== 主菜单 =====
function renderMenu() {
  document.getElementById("menu-version").textContent = Game.version;
  const continueBtn = document.querySelector('[data-action="continue-game"]');
  continueBtn.style.display = hasSave() ? "" : "none";
}

// ===== 创建流程 =====
let createMode = "sandbox";
let createStep = "mode";

function initCreateForm() {
  createMode = "sandbox";
  createStep = "mode";
  updateCreateStep();
  // 填充风格下拉
  const styleSel = document.getElementById("band-style");
  styleSel.innerHTML = "";
  const cats = {};
  window.MUSIC_STYLES.forEach(s => {
    if (!cats[s.category]) cats[s.category] = [];
    cats[s.category].push(s);
  });
  for (const cat of window.STYLE_CATEGORIES) {
    if (!cats[cat]) continue;
    const optg = document.createElement("optgroup");
    optg.label = cat;
    cats[cat].forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.name;
      opt.textContent = `${s.name}（${s.en}）`;
      optg.appendChild(opt);
    });
    styleSel.appendChild(optg);
  }
  // 填充省份下拉
  const provSel = document.getElementById("origin-province");
  provSel.innerHTML = "";
  window.CHINA_REGIONS.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.province;
    opt.textContent = r.province;
    provSel.appendChild(opt);
  });
  updateCityOptions();
  provSel.addEventListener("change", updateCityOptions);
  // 默认乐队名
  if (!document.getElementById("band-name").value) {
    document.getElementById("band-name").value = "";
  }
}

function updateCityOptions() {
  const prov = document.getElementById("origin-province").value;
  const citySel = document.getElementById("origin-city");
  citySel.innerHTML = "";
  const region = window.CHINA_REGIONS.find(r => r.province === prov);
  const cities = region ? region.cities.map(c => c.name) : [];
  const extra = prov === "台湾省" ? (window.TAIWAN_CITIES || []) : [];
  [...cities, ...extra].forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    citySel.appendChild(opt);
  });
}

function updateCreateStep() {
  document.querySelectorAll(".create-step").forEach(s => s.classList.remove("active"));
  document.querySelector(`.create-step[data-step="${createStep}"]`)?.classList.add("active");
}

function handleCreateAction(action) {
  if (action === "new-game") {
    initCreateForm();
    showView("create");
  } else if (action === "continue-game") {
    if (loadGame()) {
      renderGame();
      showView("game");
      switchGameView("dashboard");
    }
  } else if (action === "open-settings") {
    renderSettings();
    showView("settings");
  } else if (action === "create-back") {
    if (createStep === "band") { createStep = "mode"; updateCreateStep(); }
  } else if (action === "create-next") {
    if (createStep === "mode") { createStep = "band"; updateCreateStep(); }
    else if (createStep === "band") { submitCreate(); }
  } else if (action === "settings-back") {
    if (Game.band) { showView("game"); }
    else { showView("menu"); }
  } else if (action === "back-menu") {
    saveGame();
    renderMenu();
    showView("menu");
  }
}

function submitCreate() {
  const name = document.getElementById("band-name").value.trim();
  if (!name) { alert("请输入乐队名称"); return; }
  const style = document.getElementById("band-style").value;
  const styleObj = window.MUSIC_STYLES.find(s => s.name === style);
  const lineup = document.getElementById("band-lineup").value;
  const memberCount = parseInt(document.getElementById("band-members").value);
  const province = document.getElementById("origin-province").value;
  const city = document.getElementById("origin-city").value;
  // 生成成员
  const roles = ["主唱", "吉他手", "贝斯手", "鼓手", "键盘手", "吉他手"];
  const lineupArr = [];
  for (let i = 0; i < memberCount; i++) {
    lineupArr.push({ name: "", role: roles[i % roles.length] });
  }
  const bandData = {
    name, style, styleCategory: styleObj?.category || "摇滚",
    lineupType: lineup, origin: city, originProvince: province,
    lineup: lineupArr,
  };
  initGame(createMode, bandData);
  renderGame();
  showView("game");
  switchGameView("dashboard");
}

// ===== 渲染主游戏界面 =====
function renderGame() {
  renderTopbar();
}

function renderTopbar() {
  document.getElementById("top-band-name").textContent = Game.band?.name || "乐队";
  document.getElementById("top-date").textContent = formatDate(Game.dayIndex);
  document.getElementById("top-fans").textContent = formatNumber(Game.stats.totalFans);
  document.getElementById("top-rep").textContent = Math.round(Game.stats.reputation);
  document.getElementById("top-plays").textContent = formatNumber(Game.stats.totalPlays);
  document.getElementById("top-money").textContent = Game.mode === "sandbox" ? "∞" : "¥" + formatNumber(Game.finance.balance);
  document.getElementById("time-info").textContent = `第 ${Game.dayIndex + 1} 天 · ${Game.mode === "real" ? "真实模式" : "沙盒模式"}`;
}

function renderGameView(name) {
  renderTopbar();
  const map = {
    "dashboard": renderDashboard,
    "create-song": renderCreateSong,
    "release": renderRelease,
    "player": renderPlayerView,
    "rating": renderRatingView,
    "tour": renderTour,
    "train": renderTrain,
  };
  if (map[name]) map[name]();
}

// ===== Dashboard =====
function renderDashboard() {
  const el = document.querySelector('[data-game-view="dashboard"]');
  const b = Game.band;
  const releases = Game.releases;
  el.innerHTML = `
    <div class="section-title">乐队总览</div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card-title">🎸 ${b.name}</div>
        <div style="color:var(--text-dim);font-size:13px;line-height:1.8;">
          风格：<span class="badge badge-purple">${b.style}</span><br>
          编制：${b.lineupType}<br>
          出道地区：${b.originProvince} · ${b.origin}<br>
          成员：${b.members.length} 人
        </div>
      </div>
      <div class="card">
        <div class="card-title">📊 乐队数据</div>
        <div style="color:var(--text-dim);font-size:13px;line-height:2;">
          名气：<b style="color:var(--text)">${Math.round(Game.stats.reputation)}</b><br>
          粉丝：<b style="color:var(--text)">${formatNumber(Game.stats.totalFans)}</b><br>
          总播放量：<b style="color:var(--text)">${formatNumber(Game.stats.totalPlays)}</b><br>
          ${Game.mode === "real" ? `预算：<b style="color:var(--yellow)">¥${formatNumber(Game.finance.balance)}</b>` : "预算：<b style='color:var(--green)'>∞ 无限</b>"}
        </div>
      </div>
      <div class="card">
        <div class="card-title">🎯 乐队能力</div>
        <div style="font-size:13px;line-height:1.9;">
          ${Object.entries(b.skill).map(([k, v]) => `
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="width:40px;color:var(--text-dim)">${skillName(k)}</span>
              <div class="progress" style="flex:1"><div class="progress-bar" style="width:${v}%"></div></div>
              <span style="width:24px;text-align:right">${Math.round(v)}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>

    <div class="section-title" style="margin-top:24px;">已发布作品（${releases.length}）</div>
    <div id="dashboard-releases">
      ${releases.length ? releases.slice().reverse().map(r => `
        <div class="list-item" data-action="open-release" data-id="${r.id}">
          <div class="li-left">
            <div class="li-cover">${r.releaseType === "专辑" ? "💿" : r.releaseType === "EP" ? "📀" : "🎵"}</div>
            <div>
              <div class="li-title">${r.name}</div>
              <div class="li-sub">${r.releaseType} · ${r.style} · ${r.songs.length} 首</div>
            </div>
          </div>
          <div class="li-right">
            <div class="num">${formatNumber(r.plays)}</div>
            <div>播放量 · ⭐${r.avgScore ?? "—"}</div>
          </div>
        </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:40px;">还没有发布作品，去「创作歌曲」开始你的第一首歌吧</div>`}
    </div>

    <div class="section-title" style="margin-top:24px;">近期动态</div>
    <div class="event-log">
      ${Game.events.slice().reverse().slice(0, 30).map(e => `<div class="event-item"><span class="ev-day">${formatDateShort(e.day)}</span>${e.text}</div>`).join("")}
    </div>
  `;
}

// ===== 创作歌曲视图 =====
function renderCreateSong() {
  const el = document.querySelector('[data-game-view="create-song"]');
  const b = Game.band;
  const songs = Game.songs.filter(s => !s.released);
  el.innerHTML = `
    <div class="section-title">创作歌曲</div>
    <div class="card">
      <div class="card-title">新歌创作</div>
      <div class="grid grid-2">
        <div class="form-group">
          <label>歌曲名称</label>
          <input type="text" id="song-name" placeholder="输入歌曲名称" maxlength="30">
        </div>
        <div class="form-group">
          <label>音乐风格</label>
          <select id="song-style"></select>
        </div>
        <div class="form-group">
          <label>作词</label>
          <input type="text" id="song-lyricist" placeholder="作词人（默认乐队名）" value="${b.name}">
        </div>
        <div class="form-group">
          <label>作曲</label>
          <input type="text" id="song-composer" placeholder="作曲人（默认乐队名）" value="${b.name}">
        </div>
        <div class="form-group">
          <label>编曲</label>
          <input type="text" id="song-arranger" placeholder="编曲人（默认乐队名）" value="${b.name}">
        </div>
        <div class="form-group">
          <label>歌曲时长（秒）</label>
          <input type="number" id="song-duration" value="240" min="60" max="1200">
        </div>
      </div>
      <div class="form-group">
        <label>参与成员</label>
        <div id="song-members" style="display:flex;flex-wrap:wrap;gap:8px;">
          ${b.members.map((m, i) => `<label style="display:flex;align-items:center;gap:4px;font-size:13px;"><input type="checkbox" class="song-member" value="${i}" checked> ${m.role}·${m.name || "成员" + (i+1)}</label>`).join("")}
        </div>
      </div>
      <div class="form-group">
        <label>自定义歌词</label>
        <textarea id="song-lyrics" rows="6" placeholder="输入歌词（填写完整歌词可提升歌曲质量）" style="width:100%;resize:vertical;"></textarea>
      </div>
      <button class="btn-primary" data-action="submit-song" style="width:100%;">创作歌曲（消耗 3 天）</button>
    </div>

    <div class="section-title" style="margin-top:20px;">未发布的歌曲（${songs.length}）</div>
    ${songs.length ? songs.map(s => `
      <div class="list-item" data-action="preview-song" data-id="${s.id}">
        <div class="li-left">
          <div class="li-cover">🎵</div>
          <div>
            <div class="li-title">${s.name}</div>
            <div class="li-sub">${s.style} · 时长 ${Math.floor(s.duration/60)}:${String(s.duration%60).padStart(2,"0")} · 质量 ${s.quality}</div>
          </div>
        </div>
        <div class="li-right">
          <span class="badge badge-blue">待发布</span>
        </div>
      </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:20px;">暂无未发布歌曲</div>`}
  `;
  // 填充风格下拉
  const styleSel = document.getElementById("song-style");
  window.MUSIC_STYLES.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    styleSel.appendChild(opt);
  });
  styleSel.value = b.style;
}

function submitSong() {
  const name = document.getElementById("song-name").value.trim();
  if (!name) { alert("请输入歌曲名称"); return; }
  const members = [...document.querySelectorAll(".song-member:checked")].map(cb => Game.band.members[parseInt(cb.value)].name || Game.band.members[parseInt(cb.value)].role);
  const style = document.getElementById("song-style").value;
  const styleObj = window.MUSIC_STYLES.find(s => s.name === style);
  const song = createSong({
    name,
    style,
    styleCategory: styleObj?.category,
    lyricist: document.getElementById("song-lyricist").value,
    composer: document.getElementById("song-composer").value,
    arranger: document.getElementById("song-arranger").value,
    duration: parseInt(document.getElementById("song-duration").value) || 240,
    lyrics: document.getElementById("song-lyrics").value,
    members,
  });
  advanceTime(3);  // 创作耗时
  renderCreateSong();
  renderTopbar();
}

// ===== 发布视图 =====
function renderRelease() {
  const el = document.querySelector('[data-game-view="release"]');
  const songs = Game.songs.filter(s => !s.released);
  el.innerHTML = `
    <div class="section-title">发布作品</div>
    <div class="card">
      <div class="card-title">选择发布形式</div>
      <div class="form-group">
        <label>发布类型</label>
        <select id="release-type">
          <option value="单曲">单曲（1 首）</option>
          <option value="EP">EP（2~5 首）</option>
          <option value="专辑">专辑（6 首以上）</option>
        </select>
      </div>
      <div class="form-group">
        <label>作品名称</label>
        <input type="text" id="release-title" placeholder="作品名称（默认用第一首歌名）">
      </div>
      <div class="form-group">
        <label>选择歌曲（勾选）</label>
        <div id="release-songs">
          ${songs.length ? songs.map(s => `
            <label style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg-2);border-radius:8px;margin-bottom:6px;">
              <input type="checkbox" class="release-song" value="${s.id}">
              <span>${s.name}</span><span class="badge badge-purple">${s.style}</span>
            </label>`).join("") : `<div style="color:var(--text-faint);padding:12px;">暂无未发布歌曲，请先创作</div>`}
        </div>
      </div>
      <div class="form-group">
        <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="release-promotion" style="width:auto;"> 投入推广（¥30,000，+5% 质量）</label>
      </div>
      <button class="btn-primary" data-action="submit-release" style="width:100%;">发布</button>
    </div>

    <div class="section-title">已发布作品</div>
    <div id="released-list">
      ${Game.releases.length ? Game.releases.slice().reverse().map(r => `
        <div class="list-item" data-action="open-release" data-id="${r.id}">
          <div class="li-left"><div class="li-cover">💿</div>
            <div><div class="li-title">${r.name}</div><div class="li-sub">${r.releaseType} · ${formatDateShort(r.dayIndex)}</div></div></div>
          <div class="li-right"><div class="num">${formatNumber(r.plays)}</div><div>播放量</div></div>
        </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:20px;">暂无已发布作品</div>`}
    </div>
  `;
}

function submitRelease() {
  const type = document.getElementById("release-type").value;
  const title = document.getElementById("release-title").value.trim();
  const ids = [...document.querySelectorAll(".release-song:checked")].map(cb => cb.value);
  const promotion = document.getElementById("release-promotion").checked;
  const res = releaseWork(type, ids, { title, promotion });
  if (!res.ok) { alert(res.msg); return; }
  renderRelease();
  renderTopbar();
}

// ===== 训练视图 =====
function renderTrain() {
  const el = document.querySelector('[data-game-view="train"]');
  const b = Game.band;
  el.innerHTML = `
    <div class="section-title">训练</div>
    <div class="card">
      <div class="card-title">提升乐队能力</div>
      <p style="color:var(--text-dim);font-size:13px;margin-bottom:16px;">${Game.mode === "real" ? "训练消耗预算（每天 ¥200），可提升对应能力。" : "沙盒模式：训练免费。"}</p>
      <div class="grid grid-2">
        ${Object.entries(b.skill).map(([k, v]) => `
          <div class="card" style="margin-bottom:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-weight:600;">${skillName(k)}</span>
              <span style="color:var(--text-dim);font-size:13px;">${Math.round(v)}${b.training[k] ? ` <span style="color:var(--green)">+${Math.round(b.training[k])}</span>` : ""}</span>
            </div>
            <div class="progress" style="margin-bottom:10px;"><div class="progress-bar" style="width:${Math.min(100, v + b.training[k])}%"></div></div>
            <div style="display:flex;gap:8px;">
              <button class="btn-time" data-action="train" data-skill="${k}" data-days="7">训练 7 天</button>
              <button class="btn-time" data-action="train" data-skill="${k}" data-days="30">训练 30 天</button>
            </div>
          </div>`).join("")}
      </div>
    </div>
  `;
}

function handleTrain(skill, days) {
  const res = train(skill, parseInt(days));
  if (!res.ok) { alert(res.msg); return; }
  renderTrain();
  renderTopbar();
}

// ===== 巡演视图 =====
function renderTour() {
  const el = document.querySelector('[data-game-view="tour"]');
  const cityMap = getCitiesByProvince();
  el.innerHTML = `
    <div class="section-title">巡演</div>
    <div class="card">
      <div class="card-title">选择演出地点</div>
      <div class="grid grid-2">
        <div class="form-group">
          <label>省份</label>
          <select id="tour-province"></select>
        </div>
        <div class="form-group">
          <label>城市</label>
          <select id="tour-city"></select>
        </div>
        <div class="form-group">
          <label>演出规模</label>
          <select id="tour-size">
            <option value="小型">小型（Livehouse）</option>
            <option value="中型">中型（剧场）</option>
            <option value="大型">大型（体育馆）</option>
          </select>
        </div>
        <div class="form-group">
          <label>巡演名称</label>
          <input type="text" id="tour-name" placeholder="自定义巡演名称（可选）">
        </div>
      </div>
      <button class="btn-time" data-action="tour-add" style="width:100%;margin-bottom:12px;">+ 添加到巡演列表</button>
      <div id="tour-list" style="margin-bottom:12px;"></div>
      <div id="tour-summary" style="color:var(--text-dim);font-size:13px;margin-bottom:12px;"></div>
      <button class="btn-primary" data-action="tour-start" style="width:100%;">开始巡演</button>
    </div>
  `;
  const provSel = document.getElementById("tour-province");
  Object.keys(cityMap).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p; opt.textContent = p;
    provSel.appendChild(opt);
  });
  updateTourCity();
  provSel.addEventListener("change", updateTourCity);
  window._tourCities = [];
  renderTourList();
}

function updateTourCity() {
  const prov = document.getElementById("tour-province").value;
  const citySel = document.getElementById("tour-city");
  citySel.innerHTML = "";
  const cities = getCitiesByProvince()[prov] || [];
  cities.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    citySel.appendChild(opt);
  });
}

function renderTourList() {
  const list = window._tourCities || [];
  document.getElementById("tour-list").innerHTML = list.length ? list.map((c, i) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:var(--bg-2);border-radius:8px;margin-bottom:6px;">
      <span>${c}</span>
      <button class="mini-btn" data-action="tour-remove" data-index="${i}">✕</button>
    </div>`).join("") : `<div style="color:var(--text-faint);text-align:center;padding:12px;">尚未添加城市</div>`;
  const size = document.getElementById("tour-size")?.value || "小型";
  const cfg = VENUE_SIZES[size];
  const cities = window._tourCities || [];
  document.getElementById("tour-summary").innerHTML = cities.length
    ? `共 ${cities.length} 个城市 · 预计成本 ¥${(cities.length * cfg.cost).toLocaleString()} · 约 ${cities.length * 3} 天`
    : "";
}

function handleTourAdd() {
  const city = document.getElementById("tour-city").value;
  if (!window._tourCities) window._tourCities = [];
  if (window._tourCities.includes(city)) { return; }
  window._tourCities.push(city);
  renderTourList();
}

function handleTourStart() {
  const cities = window._tourCities || [];
  if (!cities.length) { alert("请先添加演出城市"); return; }
  const size = document.getElementById("tour-size").value;
  const name = document.getElementById("tour-name").value.trim();
  const tour = createTour(cities, size, name);
  const res = startTour(tour);
  if (!res.ok) { alert(res.msg); return; }
  window._tourCities = [];
  renderTour();
  renderTopbar();
}

// ===== 通用：打开作品详情 =====
function openRelease(id) {
  const rel = Game.releases.find(r => r.id === id);
  if (!rel) return;
  // 在播放器中打开
  switchGameView("player");
  showReleaseDetail(rel);
}

// 暴露给 player.js 使用
window.showReleaseDetail = null;
