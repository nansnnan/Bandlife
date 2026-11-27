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
    "news": renderNews,
    "rating": renderRatingView,
    "tour": renderTour,
    "train": renderTrain,
    "rivals": renderRivals,
    "awards": renderAwards,
    "studio": renderStudio,
    "video-studio": renderVideoStudio,
    "video-platform": renderVideoPlatform,
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

    <div class="card" style="margin-top:24px;">
      <div class="card-title">💾 存档管理</div>
      <p style="color:var(--text-dim);font-size:13px;margin-bottom:12px;">游戏不会自动保存存档到文件，进度仅存于本机浏览器缓存；清理缓存、更换设备或使用无痕模式会导致进度丢失，请定期导出备份。</p>
      <div style="display:flex;gap:8px;">
        <button class="btn-secondary" data-action="export-save">导出存档</button>
        <button class="btn-secondary" data-action="import-save">导入存档</button>
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
  `;
}

// ===== 新闻视图 =====
function renderNews() {
  const el = document.querySelector('[data-game-view="news"]');
  const curWeek = Math.floor(Game.dayIndex / 7);
  const issue = buildNewsIssue(curWeek);
  el.innerHTML = `
    <div class="section-title">📰 时代周刊</div>
    <div class="news-paper-list">${renderNewsIssue(issue)}</div>
  `;
}

function buildNewsIssue(week) {
  return generateNewsIssue(week);
}

function renderNewsIssue(issue) {
  const WK = ["日","一","二","三","四","五","六"];
  const wk = WK[(((issue.startDay + 6) % 7) + 7) % 7];

  const leads = issue.leads || [];
  const renderLead = (l, big) => {
    const paras = (l.body || "").split("\n").filter(Boolean).map(p => `<p>${escapeHtml(p)}</p>`).join("");
    return `<div class="news-block ${big ? "lead" : ""}">
      <div class="news-headline ${big ? "big" : ""}">${escapeHtml(l.title)}</div>
      <div class="news-article ${big ? "cols3" : "cols2"}">${paras}</div>
    </div>`;
  };
  const head = leads[0];
  const rest = leads.slice(1);
  const headHtml = head ? renderLead(head, true) : "";
  const restHtml = rest.length ? `<div class="news-cols">
    <div class="news-col">${rest.slice(0, 2).map(l => renderLead(l, false)).join("")}</div>
    <div class="news-col">${rest.slice(2, 4).map(l => renderLead(l, false)).join("")}</div>
  </div>` : "";
  const socialItems = (issue.items || []).filter(i => !i.band);
  const bandItems = (issue.items || []).filter(i => i.band);
  const shortGroup = (title, arr) => arr.length
    ? `<div class="news-short-group"><h3>${title}</h3>${arr.map(i => `<div class="news-short"><p>${escapeHtml(i.text)}</p></div>`).join("")}</div>`
    : "";
  return `
    <div class="news-paper">
      <div class="news-top">
        <div class="news-masthead-red">时代周刊</div>
        <div class="news-info">
          <div>${issue.date.year}年${issue.date.month}月${issue.date.day}日</div>
          <div>星期${wk}</div>
          <div>第 ${issue.issueNo} 期</div>
          <div>本报编辑部 出版</div>
        </div>
      </div>
      <div class="news-rule"></div>
      ${headHtml}
      ${restHtml}
      <div class="news-shorts">
        ${shortGroup("社会", socialItems)}
        ${shortGroup("乐坛", bandItems)}
      </div>
    </div>`;
}

// ===== 创作歌曲视图 =====
function renderCreateSong() {
  const el = document.querySelector('[data-game-view="create-song"]');
  const b = Game.band;
  const songs = Game.songs.filter(s => !s.released);
  const _INSTR_RAW = ["木吉他", "电吉他", "贝斯", "鼓", "键盘", "钢琴", "小提琴", "大提琴", "小号", "萨克斯", "合成器", "和声",
    "长笛", "单簧管", "双簧管", "大管", "长号", "圆号", "大号", "手风琴", "口琴", "班卓琴", "尤克里里",
    "曼陀林", "竖琴", "管风琴", "电子琴", "打击乐", "定音鼓", "铃鼓", "康佳鼓", "架子鼓", "非洲鼓", "二胡",
    "古筝", "琵琶", "笛子", "箫", "唢呐", "扬琴", "三弦", "马头琴", "笙", "埙", "葫芦丝", "管子"];
  const INSTR = [...new Set(_INSTR_RAW)];
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
        <div id="song-instrument-box" class="opt-group">
          ${INSTR.map(ins => `<label class="opt-item"><input type="checkbox" class="song-instrument" value="${ins}"> ${ins}</label>`).join("")}
        </div>
      </div>
      <div class="form-group">
        <label>自定义歌词</label>
        <textarea id="song-lyrics" rows="6" placeholder="输入歌词（填写完整歌词可提升歌曲质量）" style="width:100%;resize:vertical;"></textarea>
      </div>
      <button class="btn-primary" data-action="submit-song" style="width:100%;">开始创作</button>
    </div>

    <div class="section-title" style="margin-top:20px;">未发布的歌曲（${songs.length}）</div>
    ${songs.length ? songs.map(s => s.inProgress ? `
      <div class="list-item" data-action="preview-song" data-id="${s.id}">
        <div class="li-left">
          <div class="li-cover">✍️</div>
          <div>
            <div class="li-title">${s.name}</div>
            <div class="li-sub">歌曲创作中，预计 ${Math.max(0, s.dueDay - Game.dayIndex)} 天后完成</div>
          </div>
        </div>
        <div class="li-right">
          <span class="badge">创作中</span>
        </div>
      </div>` : `
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

const SONG_CREATE_DAYS = 30;   // 歌曲创作周期（天）

// 检查创作中的歌曲：到达完成日期则转为已创作
function checkSongProgress() {
  let changed = false;
  for (const s of Game.songs) {
    if (s.inProgress && Game.dayIndex >= s.dueDay) {
      s.inProgress = false;
      delete s.dueDay;
      s.quality = calcSongQuality(s);
      addEvent(`新歌《${s.name}》创作完成。`);
      changed = true;
    }
  }
  if (changed) saveGame();
  return changed;
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
    inProgress: true,
    dueDay: Game.dayIndex + SONG_CREATE_DAYS,
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
  // 不立即消耗时间：创作中状态由 checkSongProgress 在到达日期后结算
  renderCreateSong();
  renderTopbar();
}

// ===== 发布视图 =====
function renderRelease() {
  const el = document.querySelector('[data-game-view="release"]');
  const songs = Game.songs.filter(s => !s.released && !s.inProgress);
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
      <div class="form-group" id="release-sale-wrap">
        <label>专辑销售（仅发布「专辑」时生效）</label>
        <div class="opt-group" style="margin-bottom:10px;">
          <label class="opt-item"><input type="radio" name="sale-mode" value="不销售" checked> 不销售</label>
          <label class="opt-item"><input type="radio" name="sale-mode" value="数字"> 数字专辑</label>
          <label class="opt-item"><input type="radio" name="sale-mode" value="实体"> 实体专辑</label>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <label style="flex:1;min-width:120px;">定价（元）
            <input type="number" id="release-price" value="30" min="1" max="200" style="width:100%;">
          </label>
          <label style="flex:1;min-width:120px;display:none;" id="release-stock-wrap">实体制作数量
            <input type="number" id="release-stock" value="500" min="1" style="width:100%;">
          </label>
        </div>
        <div id="release-sale-hint" style="color:var(--text-faint);font-size:12px;margin-top:6px;"></div>
      </div>
      <div class="form-group">
        <div class="opt-group"><label class="opt-item"><input type="checkbox" id="release-promotion"> 投入推广（¥30,000，+5% 质量）</label></div>
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
  document.querySelectorAll('input[name="sale-mode"]').forEach(r => r.addEventListener("change", updateSaleUI));
  updateSaleUI();
}

function updateSaleUI() {
  const mode = document.querySelector('input[name="sale-mode"]:checked')?.value || "不销售";
  const stockWrap = document.getElementById("release-stock-wrap");
  const hint = document.getElementById("release-sale-hint");
  if (!stockWrap || !hint) return;
  stockWrap.style.display = mode === "实体" ? "" : "none";
  if (mode === "数字") {
    hint.textContent = (typeof currentDate === "function" && currentDate().year < 2012)
      ? "数字专辑要到 2012 年之后才会出现（当前年份暂不支持）。"
      : "数字专辑无制作成本、不限量、销量更高；定价不超过 30 元。";
  } else if (mode === "实体") {
    hint.textContent = "实体专辑有制作成本（5 元/张），库存售罄会断货；定价范围 30~200 元，接受度更高。";
  } else {
    hint.textContent = "";
  }
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
  const saleModeEl = document.querySelector('input[name="sale-mode"]:checked');
  const saleMode = saleModeEl ? saleModeEl.value : "不销售";
  const price = parseInt(document.getElementById("release-price").value) || 0;
  const stock = parseInt(document.getElementById("release-stock").value) || 0;
  if (!ids.length) { alert("请先添加要发布的歌曲"); return; }
  const res = releaseWork(type, ids, { title, promotion, saleMode: saleMode === "不销售" ? null : saleMode, price, stock });
  if (!res.ok) { alert(res.msg); return; }
  window._releaseQueue = [];
  renderRelease();
  renderTopbar();
}



// ===== 竞争对手视图 =====
// 与玩家「名气」同一算法：起始名次取乐队固有知名度（百分制），
// 再按每张专辑的平均质量累加 (avgQuality-50)/20，区间 5–100（与玩家 reputation 公式一致）
function rivalFame(r) {
  const base = (r.popularity != null ? r.popularity : (r.currentPopularity || 5)) * 10;
  let rep = Math.max(5, Math.min(100, base));
  const rels = r.releases || [];
  const groups = new Map();
  for (const rel of rels) {
    const key = rel.album || rel.name;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(rel);
  }
  for (const arr of groups.values()) {
    const avg = arr.reduce((s, x) => s + (x.quality || 50), 0) / arr.length;
    rep = Math.max(5, Math.min(100, rep + (avg - 50) / 20));
  }
  return Math.round(rep);
}

function rivalFormedDate(r) {
  if (r.formedDate) {
    const f = r.formedDate;
    return f.year + "-" + String(f.month).padStart(2, "0") + "-" + String(f.day).padStart(2, "0");
  }
  const d = dayToDate(r.activeDay || 0);
  return d.year + "-" + String(d.month).padStart(2, "0") + "-" + String(d.day).padStart(2, "0");
}

// ===== 金曲奖 =====
function renderAwards() {
  const el = document.querySelector('[data-game-view="awards"]');
  const d = dayToDate(Game.dayIndex);
  const aw = Game.awards || {};
  const nom = aw.nominations;
  const res = aw.results;
  const playerName = Game.band ? Game.band.name : null;

  const nomineeRow = (n, isWinner) => {
    const isMe = playerName && n.name === playerName;
    const bandLabel = escapeHtml(displayBandName(n.name));
    const label = n.work ? `<span class="award-work">《${escapeHtml(n.work)}》</span>${bandLabel}` : bandLabel;
    return `<div class="award-nominee ${isWinner ? "winner" : ""} ${isMe ? "me" : ""}">
      <span class="award-nom-name">${label}${isMe ? ' <span class="badge badge-purple">你</span>' : ""}</span>
      <span class="award-nom-style">${escapeHtml(n.style || "")}</span>
      ${isWinner ? '<span class="badge badge-gold">金奖</span>' : ""}
    </div>`;
  };

  const awardCard = (a) => {
    const winner = a.winner || null;
    return `<div class="card award-card">
      <div class="award-title">${escapeHtml(a.name)}</div>
      <div class="award-desc">${escapeHtml(a.desc || "")}</div>
      <div class="award-nominees">
        ${a.nominees.map(n => nomineeRow(n, winner && winner.name === n.name)).join("")}
        ${!a.nominees.length ? '<div class="award-empty">本年度暂无符合条件的提名</div>' : ""}
      </div>
    </div>`;
  };

  let statusHtml = "";
  if (d.year < 2001) {
    statusHtml = `<div class="award-status">
      <div class="award-status-title">金曲奖 · 尚未设立</div>
      <div class="award-status-sub">金曲奖自 2001 年起举办，第一届评选将于 2001 年 11 月启动，12 月 15 日颁奖。</div>
    </div>`;
  } else if (nom && nom.year === d.year && !res) {
    statusHtml = `<div class="award-status">
      <div class="award-status-title">📌 第 ${awardEdition(nom.year)} 届金曲奖 · 提名公布</div>
      <div class="award-status-sub">提名期进行中，颁奖典礼定于 12 月 15 日举行。</div>
    </div>`;
  } else if (res && res.year === d.year) {
    statusHtml = `<div class="award-status done">
      <div class="award-status-title">🏆 第 ${awardEdition(res.year)} 届金曲奖 · 已揭晓</div>
      <div class="award-status-sub">颁奖典礼已于 12 月 15 日举行，金奖以金色标记。</div>
    </div>`;
  } else if (d.month < 11) {
    statusHtml = `<div class="award-status">
      <div class="award-status-title">第 ${awardEdition(d.year)} 届金曲奖 · 尚未开始</div>
      <div class="award-status-sub">提名将于今年 11 月 1 日公布，12 月 15 日颁奖。</div>
    </div>`;
  } else {
    statusHtml = `<div class="award-status">
      <div class="award-status-title">第 ${awardEdition(d.year)} 届金曲奖 · 等待提名</div>
      <div class="award-status-sub">提名将于 11 月 1 日公布。</div>
    </div>`;
  }

  const list = res ? res.list : (nom ? nom.list : []);
  const bodyHtml = list.length
    ? `<div class="grid grid-2">${list.map(awardCard).join("")}</div>`
    : `<div class="award-empty-big">本年度金曲奖尚未开始评选。每年 11 月 1 日公布提名，12 月 15 日颁奖。</div>`;

  const history = (aw.history || []).slice(0, 5);
  const historyHtml = history.length
    ? `<div class="section-title">往届获奖</div>
       <div class="award-history">
         ${history.map(h => `<div class="award-history-year">
           <div class="award-history-title">第 ${awardEdition(h.year)} 届（${h.year} 年）</div>
           <div class="award-history-list">
             ${h.winners.map(w => `<div class="award-history-item"><span class="ah-award">${escapeHtml(w.award)}</span><span class="ah-band">${w.work ? "《" + escapeHtml(w.work) + "》" : ""}${escapeHtml(displayBandName(w.band))}</span></div>`).join("")}
           </div>
         </div>`).join("")}
       </div>`
    : "";

  el.innerHTML = `
    <div class="section-title">🏆 金曲奖</div>
    <div class="award-hint">每年 11 月 1 日—11 月 30 日提名，每项提名五支乐队；12 月 15 日颁奖，每项产生一个金奖。提名可获得少量名气与粉丝，金奖则可获得大量名气、粉丝与奖金。</div>
    ${statusHtml}
    ${bodyHtml}
    ${historyHtml}
  `;
}

function renderRivals() {
  const el = document.querySelector('[data-game-view="rivals"]');
  if (window._rivalVideoName) { renderRivalVideos(window._rivalVideoName); return; }
  const all = (Game.rivals || []).slice().sort((a, b) => (a.activeDay || 0) - (b.activeDay || 0));
  const shown = all.filter(r => r.active);
  const upcoming = all.filter(r => !r.active);

  const card = (r) => {
    const formed = rivalFormedDate(r);
    if (!r.active) {
      return `<div class="rival-card dim">
        <div class="rival-row">
          <div class="rival-name">${escapeHtml(displayBandName(r.name))}</div>
          <span class="badge">未出道</span>
        </div>
        <div class="rival-sub">${escapeHtml(r.style)} · ${escapeHtml(r.origin || "")}</div>
        <div class="rival-meta">预计 ${formed} 成立/出道</div>
      </div>`;
    }
    const fame = rivalFame(r);
    const fans = Math.round(r.fans || 0);
    return `<div class="rival-card clickable" data-action="rival-detail" data-name="${escapeHtml(r.name)}">
      <div class="rival-row">
        <div class="rival-name">${escapeHtml(displayBandName(r.name))}</div>
        <span class="badge badge-blue">出道</span>
      </div>
      <div class="rival-sub">${escapeHtml(r.style)} · ${escapeHtml(r.origin || "")} · 成立于 ${formed}</div>
      <div class="rival-meta">
        <span>名气 ${fame}</span>
        <span>粉丝 ${formatNumber(fans)}</span>
      </div>
    </div>`;
  };

  el.innerHTML = `
    <div class="section-title">🎸 竞争对手</div>
    <div class="rival-hint">共 ${all.length} 支乐队，其中已出道 ${shown.length} 支，未出道 ${upcoming.length} 支</div>
    <div class="rival-list">
      ${shown.map(card).join("")}
      ${upcoming.map(card).join("")}
    </div>
  `;
}

function renderRivalDetail(name) {
  window._rivalVideoName = null;
  const el = document.querySelector('[data-game-view="rivals"]');
  const r = (Game.rivals || []).find(x => x.name === name);
  if (!r) { renderRivals(); return; }
  const formed = rivalFormedDate(r);
  const rels = (r.releases || []).slice().sort((a, b) => (b.dayIndex || 0) - (a.dayIndex || 0));
  // 与「评分网站」一致：走同一套多平台评分，取其加权均分
  const score = (x) => {
    if (x.avgScore == null) { try { generateRatings(x); } catch (e) { /* 忽略 */ } }
    return x.avgScore != null ? x.avgScore.toFixed(1) : "-";
  };

  // 按专辑名分组：同名 album 的条目属于同一张专辑
  const albumMap = new Map();
  const singles = [];
  for (const rel of rels) {
    if (rel.releaseType === "单曲") { singles.push(rel); continue; }
    const key = rel.album || rel.name;
    if (!albumMap.has(key)) {
      albumMap.set(key, { name: key, type: rel.releaseType, dayIndex: rel.dayIndex, tracks: [] });
    }
    albumMap.get(key).tracks.push(rel);
  }
  const albums = [...albumMap.values()].sort((a, b) => (b.dayIndex || 0) - (a.dayIndex || 0));

  const albHtml = albums.length ? albums.map(a => {
    const plays = a.tracks.reduce((n, t) => n + (t.plays || 0), 0);
    const avg = a.tracks.reduce((n, t) => n + (parseFloat(score(t)) || 0), 0) / (a.tracks.length || 1);
    const rows = a.tracks.map(t => `
      <div class="rival-track">
        <span class="rival-track-name">${escapeHtml(t.name)}</span>
        <span class="rival-track-plays">${formatNumber(t.plays || 0)}</span>
        <span class="rival-track-score">${score(t)}</span>
      </div>`).join("");
    return `<div class="rival-album">
      <div class="rival-album-head">
        <div>
          <div class="rival-item-title">${escapeHtml(a.name)}</div>
          <div class="rival-item-sub">${escapeHtml(a.type)} · ${a.tracks.length} 首 · ${formatNumber(plays)} 播放</div>
        </div>
        <div class="rival-score">${avg.toFixed(1)}</div>
      </div>
      <div class="rival-tracks">${rows}</div>
    </div>`;
  }).join("") : `<div class="rival-empty">暂无已发布专辑</div>`;

  const sinHtml = singles.length ? singles.map(s => `
    <div class="rival-item">
      <div class="rival-item-main">
        <div class="rival-item-title">${escapeHtml(s.name)}</div>
        <div class="rival-item-sub">单曲 · ${formatNumber(s.plays || 0)} 播放</div>
      </div>
      <div class="rival-score">${score(s)}</div>
    </div>`).join("") : `<div class="rival-empty">暂无已发布单曲</div>`;

  el.innerHTML = `
    <div class="rival-detail-head">
      <button class="btn-time" data-action="rival-back">← 返回列表</button>
    </div>
    <div class="card">
      <div class="card-title">${escapeHtml(displayBandName(r.name))}</div>
      <div class="rival-detail-meta">
        <div>风格：${escapeHtml(r.style)}</div>
        <div>成立：${formed}</div>
        <div>地区：${escapeHtml(r.origin || "-")}</div>
        <div>名气：${rivalFame(r)}</div>
        <div>粉丝：${formatNumber(Math.round(r.fans || 0))}</div>
      </div>
      ${r.desc ? `<div class="rival-desc">${escapeHtml(r.desc)}</div>` : ""}
      <button class="btn btn-secondary btn-sm" data-action="rival-videos" data-name="${escapeHtml(r.name)}" style="margin-top:12px;">查看视频平台主页</button>
    </div>
    <div class="section-title">已发布专辑（${albums.length}）</div>
    <div class="rival-items">${albHtml}</div>
    <div class="section-title">已发布单曲（${singles.length}）</div>
    <div class="rival-items">${sinHtml}</div>
  `;
}

function renderRivalVideos(name) {
  const el = document.querySelector('[data-game-view="rivals"]');
  const r = (Game.rivals || []).find(x => x.name === name);
  if (!r) { window._rivalVideoName = null; renderRivals(); return; }
  const head = `<div class="rival-detail-head"><button class="btn-time" data-action="rival-videos-back">← 返回详情</button></div>`;
  if (typeof videoPlatformOnline === "function" && !videoPlatformOnline()) {
    el.innerHTML = head + `<div class="award-empty-big">视频平台暂未上线，预计 2009 年 7 月 1 日上线。</div>`;
    return;
  }
  const videos = rivalVideoList(r);
  const compact = n => {
    n = Math.round(n || 0);
    if (n >= 10000000) return (n / 100000000).toFixed(2).replace(/\.?0+$/, "") + "亿";
    if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, "") + "万";
    return String(n);
  };
  const card = v => `
    <div class="bf-video">
      <div class="bf-thumb" style="${videoCoverStyle(v.id)}"></div>
      <div class="bf-stat">
        <span>▶ ${compact(v.views)}</span>
        <span>💬 ${compact(Math.round(v.views * 0.01))}</span>
        <span class="bf-stat-time">${fmtVideoDuration(v.duration || 180)}</span>
      </div>
      <div class="bf-title">${escapeHtml(v.title)}</div>
      <div class="bf-author">UP ${escapeHtml(v.band)}官方</div>
    </div>`;
  el.innerHTML = `
    ${head}
    <div class="card" style="margin-bottom:16px;">
      <div class="card-title">${escapeHtml(displayBandName(r.name))} · 视频主页</div>
      <div class="rival-detail-meta">
        <div>视频数：${videos.length}</div>
        <div>总播放：${formatNumber(videos.reduce((n, v) => n + (v.views || 0), 0))}</div>
        <div>粉丝：${formatNumber(Math.round(r.fans || 0))}</div>
      </div>
    </div>
    ${videos.length ? `<div class="bf-grid">${videos.map(card).join("")}</div>` : `<div class="award-empty-big">该乐队还没有发布视频。</div>`}
  `;
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
            ${m.lastTrain ? `<div style="margin-bottom:10px;"><span class="badge ${m.lastTrain.delta > 0 ? "badge-green" : m.lastTrain.delta < 0 ? "badge-red" : "badge-blue"}">上次训练：${m.lastTrain.label} ${m.lastTrain.delta >= 0 ? "+" : ""}${m.lastTrain.delta}</span></div>` : ""}
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
  const songList = tourAvailableSongs();
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
      <div class="form-group" style="margin-bottom:12px;">
        <label>演出曲目（至少 15 首，已选 <b id="tour-song-count">0</b> / ${songList.length}）</label>
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <button class="mini-btn" data-action="tour-songs-all">全选</button>
          <button class="mini-btn" data-action="tour-songs-none">清空</button>
        </div>
        <div id="tour-song-list" style="max-height:260px;overflow:auto;border:1px solid var(--line);border-radius:8px;padding:8px;">
          ${songList.length ? songList.map((sg, i) => `
            <label class="opt-item" style="display:flex;gap:8px;padding:6px 4px;">
              <input type="checkbox" class="tour-song-cb" data-id="${escapeHtml(sg.id)}" data-name="${escapeHtml(sg.name)}" data-dur="${sg.duration}">
              <span>${escapeHtml(sg.name)}<span style="color:var(--text-faint);font-size:12px;"> · ${escapeHtml(sg.album || "")}</span></span>
            </label>`).join("") : `<div style="color:var(--text-faint);padding:8px;">暂无已发布歌曲，请先发布作品。</div>`}
        </div>
      </div>
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
  const syncCount = () => {
    const n = document.querySelectorAll(".tour-song-cb:checked").length;
    const c = document.getElementById("tour-song-count");
    if (c) c.textContent = n;
  };
  document.querySelectorAll(".tour-song-cb").forEach(cb => cb.addEventListener("change", syncCount));
  syncCount();
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
  const picked = [...document.querySelectorAll(".tour-song-cb:checked")].map(cb => ({
    id: cb.dataset.id,
    name: cb.dataset.name,
    duration: Number(cb.dataset.dur) || 240,
  }));
  if (picked.length < 15) {
    alert(`演出曲目至少 15 首（含专辑曲目），当前已选 ${picked.length} 首。`);
    return;
  }
  const size = document.getElementById("tour-size").value;
  const name = document.getElementById("tour-name").value.trim();
  const tour = createTour(cities, size, name, picked);
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

// ===== 工作室 =====
function renderStudio() {
  const el = document.querySelector('[data-game-view="studio"]');
  if (!el) return;
  if (!Game.studio) Game.studio = { level: 1 };
  const level = studioLevel();
  const cur = studioInfo();
  const next = level < STUDIO_LEVELS.length ? STUDIO_LEVELS[level] : null;
  const money = Game.finance.balance || 0;

  const rows = STUDIO_LEVELS.map(s => {
    const active = s.level === level;
    return `<div class="studio-lv ${active ? "active" : ""}">
      <span class="slv-name">${active ? "▶ " : ""}${s.level} 级 · ${escapeHtml(s.name)}</span>
      <span class="slv-q">质量 ${s.quality}</span>
      <span class="slv-cost">租金 ${formatNumber(s.rent)} / 维护 ${formatNumber(s.maintain)}</span>
    </div>`;
  }).join("");

  el.innerHTML = `
    <div class="section-title">🎛️ 工作室</div>
    <div class="studio-hint">工作室等级影响歌曲质量：乐队能力占 65%，工作室占 35%。等级越高，作品底子越好，但每月租金与维护费也越高。</div>
    <div class="card studio-card">
      <div class="studio-head">
        <div>
          <div class="card-title">${escapeHtml(cur.name)}</div>
          <div class="studio-desc">${escapeHtml(cur.desc)}</div>
        </div>
        <div class="studio-badge">${level} / 8 级</div>
      </div>
      <div class="studio-metrics">
        <div class="sm-item"><span>工作室质量</span><b>${cur.quality}</b></div>
        <div class="sm-item"><span>月租金</span><b>¥${formatNumber(cur.rent)}</b></div>
        <div class="sm-item"><span>月维护费</span><b>¥${formatNumber(cur.maintain)}</b></div>
        <div class="sm-item"><span>每月合计</span><b>¥${formatNumber(cur.rent + cur.maintain)}</b></div>
      </div>
      <div class="studio-quality-note">歌曲质量 = 乐队能力 × 65% + 工作室质量 × 35%</div>
      ${next ? `<button class="btn btn-primary" data-action="studio-upgrade">
        升级到「${escapeHtml(next.name)}」（¥${formatNumber(next.upgradeCost)}）
      </button>` : `<div class="studio-max">已达最高等级</div>`}
      <div class="studio-balance">当前资金：¥${formatNumber(money)}</div>
    </div>
    <div class="section-title">等级一览</div>
    <div class="studio-levels">${rows}</div>
  `;
}

// ===== 视频制作 =====
function renderVideoStudio() {
  const el = document.querySelector('[data-game-view="video-studio"]');
  if (!el) return;
  if (!Game.videos) Game.videos = [];

  const songOpts = (Game.songs || []).filter(s => !s.inProgress)
    .map(s => `<option value="${s.id}">《${escapeHtml(s.name)}》</option>`).join("");
  const relOpts = (Game.releases || [])
    .map(r => `<option value="${r.id}">${escapeHtml(r.releaseType)}《${escapeHtml(r.name)}》</option>`).join("");
  const albumOpts = (Game.releases || []).filter(r => r.releaseType !== "单曲")
    .map(r => `<option value="${r.id}">${escapeHtml(r.releaseType)}《${escapeHtml(r.name)}》· ${fmtVideoDuration(releaseTotalDuration(r))}</option>`).join("");
  const tourOpts = (Game.tours || [])
    .map(t => `<option value="${t.id}">${escapeHtml(t.name)}（${(t.setlist || []).length} 首 · 录像约 ${fmtVideoDuration(t.footageDuration || tourFootageDuration(t))}）</option>`).join("");

  const making = Game.videos.filter(v => v.status === "making");
  const unedited = Game.videos.filter(v => v.status === "unedited");
  const edited = Game.videos.filter(v => v.status === "edited");
  const published = Game.videos.filter(v => v.status === "published");

  const typeCard = (t, selectHtml) => `
    <div class="card video-type-card">
      <div class="vt-head"><b>${t.name}</b><span>约 ${t.days} 天</span></div>
      <div class="vt-desc">${escapeHtml(t.desc)}</div>
      ${selectHtml}
    </div>`;

  const editBtns = v => Object.values(VIDEO_EDIT_LEVELS).map(lv => `
    <button class="btn btn-sm ${lv.cost > 0 ? "" : "btn-ghost"}" data-action="video-edit" data-id="${v.id}" data-level="${lv.id}">
      ${lv.name}（${lv.cost ? "¥" + formatNumber(lv.cost) : "免费"}，质量 ${lv.quality}）
    </button>`).join("");

  el.innerHTML = `
    <div class="section-title">🎬 视频制作</div>
    <div class="video-hint">制作完成后需剪辑方可发布。自我剪辑免费但质量一般，外包剪辑等级越高成片质量越好、价格越贵。</div>

    <div class="section-title">新建视频</div>
    <div class="grid grid-3">
      ${typeCard(VIDEO_TYPES.mv, `
        <select id="video-target-mv" class="input">${songOpts || '<option value="">（暂无可用歌曲）</option>'}</select>
        <button class="btn btn-primary btn-sm" data-action="video-start" data-type="mv">开始制作 MV</button>`)}
      ${typeCard(VIDEO_TYPES.trailer, `
        <select id="video-target-trailer" class="input">${relOpts || '<option value="">（暂无已发布作品）</option>'}</select>
        <button class="btn btn-primary btn-sm" data-action="video-start" data-type="trailer">开始制作预告片</button>`)}
      ${typeCard(VIDEO_TYPES.doc, `
        <select id="video-target-doc" class="input">${relOpts || '<option value="">（暂无已发布作品）</option>'}</select>
        <button class="btn btn-primary btn-sm" data-action="video-start" data-type="doc">开始制作纪录片</button>`)}
      ${typeCard(VIDEO_TYPES.album, `
        <select id="video-target-album" class="input">${albumOpts || '<option value="">（暂无已发布专辑）</option>'}</select>
        <button class="btn btn-primary btn-sm" data-action="video-start" data-type="album">开始制作整轨专辑</button>`)}
      ${typeCard(VIDEO_TYPES.live, `
        <select id="video-target-live" class="input">${tourOpts || '<option value="">（暂无巡演记录）</option>'}</select>
        <button class="btn btn-primary btn-sm" data-action="video-start" data-type="live">开始制作巡演录像</button>`)}
    </div>

    ${making.length ? `<div class="section-title">制作中（${making.length}）</div>
      <div class="video-list">${making.map(v => `
        <div class="video-row">
          <div class="vr-main"><b>${escapeHtml(v.targetName)}</b> · ${v.typeName}</div>
          <div class="vr-sub">预计 ${Math.max(0, v.dueDay - Game.dayIndex)} 天后完成</div>
          <span class="badge badge-blue">制作中</span>
        </div>`).join("")}</div>` : ""}

    ${unedited.length ? `<div class="section-title">待剪辑（${unedited.length}）</div>
      <div class="video-list">${unedited.map(v => `
        <div class="video-row col">
          <div class="vr-main"><b>${escapeHtml(v.targetName)}</b> · ${v.typeName}</div>
          <div class="vr-sub">未经剪辑的视频，直接发布将大幅影响乐队评价。</div>
          <div class="vr-actions">${editBtns(v)}</div>
        </div>`).join("")}</div>` : ""}

    ${edited.length ? `<div class="section-title">可发布（${edited.length}）</div>
      <div class="video-list">${edited.map(v => `
        <div class="video-row col">
          <div class="vr-main"><b>${escapeHtml(v.targetName)}</b> · ${v.typeName}</div>
          <div class="vr-sub">剪辑：${v.editName} · 成片质量 ${v.quality}</div>
          <input class="input" id="vt-title-${v.id}" maxlength="40" placeholder="视频标题"
                 value="${escapeHtml(v.targetName + ' ' + v.typeName)}">
          <textarea class="input" id="vt-desc-${v.id}" rows="2" maxlength="200" placeholder="视频简介（可选）"></textarea>
          <div class="vr-actions">
            <button class="btn btn-primary btn-sm" data-action="video-publish" data-id="${v.id}">发布到官方账号</button>
          </div>
        </div>`).join("")}</div>` : ""}

    ${published.length ? `<div class="section-title">已发布（${published.length}）</div>
      <div class="video-list">${published.map(v => `
        <div class="video-row">
          <div class="vr-main"><b>${escapeHtml(v.targetName)}</b> · ${v.typeName}${v.unedited ? ' <span class="badge badge-red">未剪辑</span>' : ""}</div>
          <div class="vr-sub">播放 ${formatNumber(v.views)} · 点赞 ${formatNumber(v.likes)} · 评论 ${formatNumber(v.comments)}</div>
        </div>`).join("")}</div>` : ""}
  `;
}

// ===== 视频平台 =====
function renderVideoPlatform() {
  const el = document.querySelector('[data-game-view="video-platform"]');
  if (!el) return;
  const tab = window._videoTab || "feed";

  if (typeof videoPlatformOnline === "function" && !videoPlatformOnline()) {
    el.innerHTML = `
      <div class="section-title">📺 视频平台</div>
      <div class="award-empty-big">视频平台暂未上线，预计 2009 年 7 月 1 日上线。</div>
    `;
    return;
  }

  if (window._videoDetail) {
    renderVideoDetail(el, window._videoDetail);
    return;
  }

  const feed = settleVideoPlatform();
  const mine = (Game.videos || []).filter(v => v.status === "published").slice().reverse();

  const compactNum = n => {
    n = Math.round(n || 0);
    if (n >= 10000000) return (n / 100000000).toFixed(2).replace(/\.?0+$/, "") + "亿";
    if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, "") + "万";
    return String(n);
  };
  const card = v => `
    <div class="bf-video" data-action="video-open" data-id="${v.id}" data-src="${v.id.startsWith("pf_") ? "feed" : "mine"}">
      <div class="bf-thumb" style="${videoCoverStyle(v.id)}"></div>
      <div class="bf-stat">
        <span class="bf-stat-play">▶ ${compactNum(v.views)}</span>
        <span class="bf-stat-dm">💬 ${compactNum(v.comments)}</span>
        <span class="bf-stat-time">${fmtVideoDuration(v.duration || 180)}</span>
      </div>
      <div class="bf-title">${escapeHtml(v.title)}</div>
      <div class="bf-author">UP ${escapeHtml(v.author || (Game.band ? Game.band.name + "官方" : "乐队官方"))}</div>
    </div>`;

  const list = tab === "mine" ? mine : feed;

  el.innerHTML = `
    <div class="bf-top">
      <div class="bf-logo">📺 视频平台</div>
      <div class="bf-tabs">
        <button class="bf-tab ${tab === "feed" ? "active" : ""}" data-action="video-tab" data-tab="feed">推荐</button>
        <button class="bf-tab ${tab === "mine" ? "active" : ""}" data-action="video-tab" data-tab="mine">我的账号</button>
      </div>
    </div>
    <div class="bf-hint">${tab === "mine"
      ? "乐队官方账号：在此查看已发布的视频。发布未经剪辑的视频会大幅影响乐队评价。"
      : "本期推荐视频，专业乐评、大众听感、音乐分享、排行榜与其他乐队动态。"}
      <span class="bf-users">平台用户约 ${formatNumber(videoUserBase())} 人</span></div>
    ${list.length ? `<div class="bf-grid">${list.map(card).join("")}</div>`
      : `<div class="award-empty-big">${tab === "mine" ? "还没有发布任何视频，去「视频制作」制作并发布吧。" : "暂无视频。"}</div>`}
  `;
}

// ===== 视频详情页播放器 =====
let videoPlayer = { id: null, pos: 0, dur: 0, timer: null };

function stopVideoPlayer() {
  if (videoPlayer.timer) clearInterval(videoPlayer.timer);
  videoPlayer = { id: null, pos: 0, dur: 0, timer: null };
}

function updateVideoProgress() {
  const bar = document.getElementById("bf-progress-bar");
  const time = document.getElementById("bf-time");
  const dur = videoPlayer.dur || 0;
  if (bar) bar.style.width = (dur ? (videoPlayer.pos / dur) * 100 : 0) + "%";
  if (time) time.textContent = fmtVideoDuration(Math.floor(videoPlayer.pos)) + " / " + fmtVideoDuration(dur);
}

function toggleVideoPlay(id, dur) {
  const player = document.getElementById("bf-player");
  const icon = document.getElementById("bf-play-icon");
  // 正在播放同一视频 → 暂停
  if (videoPlayer.id === id && videoPlayer.timer) {
    clearInterval(videoPlayer.timer);
    videoPlayer.timer = null;
    if (player) player.classList.remove("playing");
    if (icon) icon.textContent = "▶";
    return;
  }
  if (videoPlayer.id !== id) { stopVideoPlayer(); videoPlayer.id = id; videoPlayer.pos = 0; }
  videoPlayer.dur = dur;
  const step = () => {
    videoPlayer.pos += Math.max(1, videoPlayer.dur / 240);   // 约 4 倍速推进
    if (videoPlayer.pos >= videoPlayer.dur) {
      videoPlayer.pos = videoPlayer.dur;
      updateVideoProgress();
      stopVideoPlayer();
      const p = document.getElementById("bf-player");
      const ic = document.getElementById("bf-play-icon");
      if (p) p.classList.remove("playing");
      if (ic) ic.textContent = "▶";
      return;
    }
    updateVideoProgress();
  };
  updateVideoProgress();
  videoPlayer.timer = setInterval(step, 200);
  if (player) player.classList.add("playing");
  if (icon) icon.textContent = "❚❚";
}

function seekVideo(id, dur, ratio) {
  if (videoPlayer.id !== id) { stopVideoPlayer(); videoPlayer.id = id; videoPlayer.dur = dur; }
  videoPlayer.dur = dur;
  videoPlayer.pos = clamp(ratio, 0, 1) * dur;
  updateVideoProgress();
}

function renderVideoDetail(el, detail) {
  stopVideoPlayer();
  const v = detail.video;
  const cmts = videoCommentList(v);
  el.innerHTML = `
    <div class="bf-back" data-action="video-back">← 返回视频列表</div>
    <div class="bf-detail">
      <div class="bf-player" id="bf-player" data-action="video-toggle" data-id="${escapeHtml(v.id)}" data-dur="${v.duration || 180}" style="${videoCoverStyle(v.id)}">
        <div class="bf-play-icon" id="bf-play-icon">▶</div>
        <div class="bf-play-meta">${formatNumber(v.views || 0)} 播放 · ${v.typeName || "视频"}</div>
        <div class="bf-progress" id="bf-progress" data-action="video-seek" data-id="${escapeHtml(v.id)}" data-dur="${v.duration || 180}"><div class="bf-progress-bar" id="bf-progress-bar"></div></div>
        <div class="bf-time" id="bf-time">0:00 / ${fmtVideoDuration(v.duration || 180)}</div>
      </div>
      <div class="bf-detail-title">${escapeHtml(v.title)}</div>
      <div class="bf-detail-meta">UP ${escapeHtml(v.author || v.band || "乐队官方")} · ${formatNumber(v.views || 0)} 播放 · ${formatNumber(v.likes || 0)} 点赞 · ${formatNumber(v.comments || 0)} 弹幕 · ${fmtVideoDuration(v.duration || 180)}</div>
      <div class="bf-summary-block"><div class="bf-summary-label">视频简介</div><p>${escapeHtml(v.summary || "暂无简介")}</p></div>
      <div class="bf-comment-title">评论 ${formatNumber(v.commentCount || v.comments || (cmts.short.length + cmts.long.length))}${(v.commentCount || 0) > (cmts.short.length + cmts.long.length) ? "（展示部分）" : ""}</div>
      <div class="bf-comments">
        ${(() => {
          const pool = window.BILI_USERNAMES || [];
          const used = new Set();
          const nameOf = i => {
            if (!pool.length) return "用户" + (1000 + i);
            for (let k = 0; k < pool.length; k++) {
              const idx = Math.floor(seededUnit("bfu|" + v.id + "|" + i + "|" + k) * pool.length) % pool.length;
              if (!used.has(idx)) { used.add(idx); return pool[idx]; }
            }
            return pool[0];
          };
          return [...cmts.long, ...cmts.short].map((t, i) => `<div class="bf-comment"><div class="bf-avatar"></div><div class="bf-c-body"><div class="bf-c-name">${escapeHtml(nameOf(i))}</div><div class="bf-c-text">${escapeHtml(t)}</div></div></div>`).join("");
        })()}
      </div>
    </div>
  `;
}
