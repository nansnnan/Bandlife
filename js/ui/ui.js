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
  // 成员编辑：根据人数生成可编辑的成员行，人数变化时重新生成
  const memberCountSel = document.getElementById("band-members");
  renderMemberEditor(parseInt(memberCountSel.value));
  memberCountSel.addEventListener("change", () => renderMemberEditor(parseInt(memberCountSel.value)));
  // 默认乐队名
  if (!document.getElementById("band-name").value) {
    document.getElementById("band-name").value = "";
  }
}

// 根据人数渲染成员编辑行（名字、角色、初始能力）
function renderMemberEditor(count) {
  const editor = document.getElementById("member-editor");
  if (!editor) return;
  const isReal = createMode === "real";
  const defaultRoles = ["主唱", "吉他手", "贝斯手", "鼓手", "键盘手", "吉他手"];
  const roleOptions = ["主唱", "吉他手", "贝斯手", "鼓手", "键盘手"];
  let html = "";
  for (let i = 0; i < count; i++) {
    const role = defaultRoles[i % defaultRoles.length];
    const skill = rand(50, 75);
    html += `
      <div style="display:flex;gap:8px;margin-bottom:8px;align-items:center;">
        <input type="text" class="member-name" value="成员${i + 1}" style="flex:1;">
        <select class="member-role" style="width:92px;">
          ${roleOptions.map(r => `<option ${r === role ? "selected" : ""}>${r}</option>`).join("")}
        </select>
        <input type="number" class="member-skill" value="${skill}" min="20" max="99" style="width:76px;" title="初始能力 20~99" ${isReal ? "disabled" : ""}>
      </div>`;
  }
  if (isReal) {
    html += `<div style="color:var(--text-faint);font-size:12px;margin-top:4px;">真实模式下成员初始实力由系统随机生成，不可手动修改。</div>`;
  }
  editor.innerHTML = html;
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
    if (createStep === "mode") {
      createStep = "band";
      updateCreateStep();
      // 切换到乐队信息时，按当前模式重新渲染成员编辑（真实模式能力锁定为随机）
      renderMemberEditor(parseInt(document.getElementById("band-members").value));
    } else if (createStep === "band") { submitCreate(); }
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
  // 读取成员编辑行，生成成员列表（含名字、角色、初始能力）
  const memberNames = [...document.querySelectorAll("#member-editor .member-name")].map(i => i.value.trim());
  const memberRoles = [...document.querySelectorAll("#member-editor .member-role")].map(s => s.value);
  const memberSkills = [...document.querySelectorAll("#member-editor .member-skill")].map(i => parseInt(i.value) || 60);
  const lineupArr = [];
  for (let i = 0; i < memberCount; i++) {
    lineupArr.push({
      name: memberNames[i] || `成员${i + 1}`,
      role: memberRoles[i] || "乐手",
      skill: memberSkills[i],
    });
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
  const INSTR = ["木吉他", "电吉他", "贝斯", "鼓", "键盘", "钢琴", "小提琴", "大提琴", "小号", "萨克斯", "合成器", "和声"];
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
          <label>歌曲时长</label>
          <div style="display:flex;gap:6px;align-items:center;">
            <input type="number" id="song-duration-min" value="4" min="1" max="20" style="width:90px;"> 分
            <input type="number" id="song-duration-sec" value="0" min="0" max="59" style="width:90px;"> 秒
          </div>
        </div>
      </div>
      <div class="form-group" id="song-players-wrap" style="display:none;">
        <label>演奏者（按已选乐器填写姓名）</label>
        <div id="song-players" style="display:flex;flex-direction:column;gap:8px;"></div>
      </div>
      <div class="form-group">
        <label>歌曲编制（选择参与的乐器）</label>
        <div id="song-instrument-box" style="display:flex;flex-wrap:wrap;gap:12px;">
          ${INSTR.map(ins => `<label style="display:flex;align-items:center;gap:4px;font-size:13px;cursor:pointer;"><input type="checkbox" class="song-instrument" value="${ins}"> ${ins}</label>`).join("")}
        </div>
      </div>
      <div class="form-group">
        <label>自定义歌词</label>
        <textarea id="song-lyrics" rows="6" placeholder="输入歌词（填写完整歌词可提升歌曲质量）" style="width:100%;resize:vertical;"></textarea>
      </div>
      <button class="btn-primary" data-action="submit-song" style="width:100%;">创作歌曲（消耗 30 天）</button>
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
  // 歌曲编制：勾选乐器后在上方生成对应演奏者输入框
  document.getElementById("song-instrument-box").addEventListener("change", updateSongPlayers);
}

function updateSongPlayers() {
  const selected = [...document.querySelectorAll(".song-instrument:checked")].map(c => c.value);
  const wrap = document.getElementById("song-players-wrap");
  const box = document.getElementById("song-players");
  if (!wrap || !box) return;
  if (!selected.length) { wrap.style.display = "none"; box.innerHTML = ""; return; }
  wrap.style.display = "";
  const prev = {};
  box.querySelectorAll(".song-player-input").forEach(i => { prev[i.dataset.ins] = i.value; });
  box.innerHTML = selected.map(ins => `
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:72px;color:var(--text-dim);font-size:13px;">${ins}</span>
      <input type="text" class="song-player-input" data-ins="${ins}" value="${escapeHtml(prev[ins] || "")}" placeholder="演奏者姓名" style="flex:1;">
    </div>`).join("");
}

function submitSong() {
  const name = document.getElementById("song-name").value.trim();
  if (!name) { alert("请输入歌曲名称"); return; }
  const instrumentation = [...document.querySelectorAll(".song-instrument:checked")].map(cb => {
    const ins = cb.value;
    const inp = document.querySelector(`#song-players .song-player-input[data-ins="${ins}"]`);
    return { instrument: ins, player: inp ? inp.value.trim() : "" };
  });
  const style = document.getElementById("song-style").value;
  const styleObj = window.MUSIC_STYLES.find(s => s.name === style);
  const song = createSong({
    name,
    style,
    styleCategory: styleObj?.category,
    lyricist: document.getElementById("song-lyricist").value,
    composer: document.getElementById("song-composer").value,
    arranger: document.getElementById("song-arranger").value,
    duration: (parseInt(document.getElementById("song-duration-min").value) || 0) * 60 + (parseInt(document.getElementById("song-duration-sec").value) || 0) || 240,
    lyrics: document.getElementById("song-lyrics").value,
    instrumentation,
  });
  advanceTime(30);  // 创作耗时（约 1 个月，符合真实乐队单曲创作周期）
  renderCreateSong();
  renderTopbar();
}

// ===== 发布视图 =====
function renderRelease() {
  const el = document.querySelector('[data-game-view="release"]');
  const songs = Game.songs.filter(s => !s.released);
  if (!window._releaseQueue) window._releaseQueue = [];
  window._releaseQueue = window._releaseQueue.filter(id => songs.some(s => s.id === id));
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
        <label>选择歌曲（下拉选择后添加到列表，可自由调整顺序）</label>
        <div style="display:flex;gap:8px;">
          <select id="release-song-select" style="flex:1;">
            ${songs.length ? songs.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join("") : `<option value="">（暂无未发布歌曲）</option>`}
          </select>
          <button class="btn-time" data-action="release-add">添加</button>
        </div>
        <div id="release-queue-list" style="margin-top:10px;"></div>
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
  renderReleaseQueue();
}

function renderReleaseQueue() {
  const box = document.getElementById("release-queue-list");
  if (!box) return;
  const q = window._releaseQueue || [];
  if (!q.length) {
    box.innerHTML = `<div style="color:var(--text-faint);text-align:center;padding:12px;">尚未添加歌曲</div>`;
    return;
  }
  box.innerHTML = q.map((id, i) => {
    const s = Game.songs.find(x => x.id === id);
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:var(--bg-2);border-radius:8px;margin-bottom:6px;">
        <span>${i + 1}. ${escapeHtml(s ? s.name : "(已发布)")}${s ? ` <span class="badge badge-purple">${escapeHtml(s.style)}</span>` : ""}</span>
        <span style="display:flex;gap:4px;">
          <button class="mini-btn" data-action="release-up" data-index="${i}" ${i === 0 ? "disabled" : ""}>↑</button>
          <button class="mini-btn" data-action="release-down" data-index="${i}" ${i === q.length - 1 ? "disabled" : ""}>↓</button>
          <button class="mini-btn" data-action="release-remove" data-index="${i}">✕</button>
        </span>
      </div>`;
  }).join("");
}


function handleReleaseAdd() {
  const sel = document.getElementById("release-song-select");
  if (!sel) return;
  const id = sel.value;
  if (!id) return;
  if (!window._releaseQueue) window._releaseQueue = [];
  if (!window._releaseQueue.includes(id)) window._releaseQueue.push(id);
  renderReleaseQueue();
}

function handleReleaseRemove(index) {
  if (!window._releaseQueue) return;
  window._releaseQueue.splice(index, 1);
  renderReleaseQueue();
}

function handleReleaseMove(index, dir) {
  const q = window._releaseQueue || [];
  const ni = index + dir;
  if (ni < 0 || ni >= q.length) return;
  [q[index], q[ni]] = [q[ni], q[index]];
  renderReleaseQueue();
}

function submitRelease() {
  const type = document.getElementById("release-type").value;
  const title = document.getElementById("release-title").value.trim();
  const ids = (window._releaseQueue || []).slice();
  const promotion = document.getElementById("release-promotion").checked;
  if (!ids.length) { alert("请先添加要发布的歌曲"); return; }
  const res = releaseWork(type, ids, { title, promotion });
  if (!res.ok) { alert(res.msg); return; }
  window._releaseQueue = [];
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
      <div class="card-title">成员成长训练</div>
      <p style="color:var(--text-dim);font-size:13px;margin-bottom:16px;">${Game.mode === "real" ? "训练消耗预算（每天 ¥200），提升单个成员的能力，进而提升乐队整体能力。" : "沙盒模式：训练免费。"}</p>
      <div class="grid grid-2">
        ${b.members.map(m => `
          <div class="card" style="margin-bottom:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-weight:600;">${escapeHtml(m.name)} <span class="badge badge-purple">${m.role}</span></span>
              <span style="color:var(--text-dim);font-size:13px;">能力 ${Math.round(m.skill)}</span>
            </div>
            <div class="progress" style="margin-bottom:10px;"><div class="progress-bar" style="width:${m.skill}%"></div></div>
            <div style="color:var(--text-faint);font-size:12px;margin-bottom:10px;">累计训练 ${m.trained || 0} 天</div>
            <div style="display:flex;gap:8px;">
              <button class="btn-time" data-action="train" data-member="${m.id}" data-days="7">训练 7 天</button>
              <button class="btn-time" data-action="train" data-member="${m.id}" data-days="30">训练 30 天</button>
            </div>
          </div>`).join("")}
      </div>
    </div>
  `;
}

function handleTrain(memberId, days) {
  const res = trainMember(memberId, parseInt(days));
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
          <label>地级市</label>
          <select id="tour-city"></select>
        </div>
        <div class="form-group">
          <label>县级市/区（可选）</label>
          <select id="tour-county"><option value="">（不选，用地级市）</option></select>
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
  document.getElementById("tour-city").addEventListener("change", updateTourCounty);
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
  updateTourCounty();
}

function updateTourCounty() {
  const prov = document.getElementById("tour-province").value;
  const city = document.getElementById("tour-city").value;
  const countySel = document.getElementById("tour-county");
  countySel.innerHTML = '<option value="">（不选，用地级市）</option>';
  const region = window.CHINA_REGIONS.find(r => r.province === prov);
  const cityObj = region ? region.cities.find(c => c.name === city) : null;
  const districts = cityObj ? cityObj.districts : [];
  districts.forEach(d => {
    if (d === city) return;
    const opt = document.createElement("option");
    opt.value = d; opt.textContent = d;
    countySel.appendChild(opt);
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
  const county = document.getElementById("tour-county").value;
  const label = county ? `${city}·${county}` : city;
  if (!window._tourCities) window._tourCities = [];
  if (window._tourCities.includes(label)) { return; }
  window._tourCities.push(label);
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
