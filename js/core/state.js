// 核心状态管理 + 工具函数 + 常量

const GAME_VERSION = "1.2.14";
const START_YEAR = 2000, START_MONTH = 1, START_DAY = 1;

// 全局游戏状态
const Game = {
  mode: "sandbox",        // 'sandbox' | 'real'
  version: GAME_VERSION,
  dayIndex: 0,            // 距 2000-01-01 的天数
  band: null,             // 乐队对象（创建后填充）
  finance: { balance: 0, totalIncome: 0, totalExpense: 0 },
  songs: [],              // 创作的歌曲
  releases: [],           // 发布的作品（单曲/EP/专辑）
  rivals: [],             // 39 个竞争对手的运行时状态
  events: [],             // 事件日志 [{day, text}]
  stats: { totalPlays: 0, totalFans: 0, reputation: 50, totalSales: 0 },
  rng: Math.random,       // 可替换的随机源
};

// ===== 工具函数 =====
function rand(min, max) { return Math.floor(Game.rng() * (max - min + 1)) + min; }
function randf(min, max) { return Game.rng() * (max - min) + min; }
function pick(arr) { return arr[Math.floor(Game.rng() * arr.length)]; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Game.rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

// ===== 日期处理 =====
function isLeapYear(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }
function daysInMonth(y, m) { return [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]; }

// dayIndex -> {year, month, day}
function dayToDate(dayIndex) {
  let y = START_YEAR, m = START_MONTH, d = START_DAY;
  let remain = dayIndex;
  if (remain >= 0) {
    while (remain > 0) {
      const dim = daysInMonth(y, m);
      if (d + remain <= dim) { d += remain; remain = 0; }
      else {
        remain -= (dim - d + 1);
        d = 1;
        m++;
        if (m > 12) { m = 1; y++; }
      }
    }
  } else {
    while (remain < 0) {
      d--;
      if (d < 1) { m--; if (m < 1) { m = 12; y--; } d = daysInMonth(y, m); }
      remain++;
    }
  }
  return { year: y, month: m, day: d };
}

// {year, month, day} -> dayIndex（2000 年之前返回负数）
function dateToDay(year, month, day) {
  const before = year < START_YEAR || (year === START_YEAR && month < START_MONTH) || (year === START_YEAR && month === START_MONTH && day < START_DAY);
  if (before) {
    // 从目标日期往前数到 2000-01-01，返回负数
    let dayIndex = 0, y = year, m = month, d = day;
    while (y < START_YEAR || (y === START_YEAR && m < START_MONTH) || (y === START_YEAR && m === START_MONTH && d < START_DAY)) {
      dayIndex--;
      d++;
      if (d > daysInMonth(y, m)) { d = 1; m++; if (m > 12) { m = 1; y++; } }
    }
    return dayIndex;
  }
  let dayIndex = 0, y = START_YEAR, m = START_MONTH, d = START_DAY;
  while (y < year || (y === year && m < month) || (y === year && m === month && d < day)) {
    dayIndex++;
    d++;
    if (d > daysInMonth(y, m)) { d = 1; m++; if (m > 12) { m = 1; y++; } }
  }
  return dayIndex;
}

function formatDate(dayIndex) {
  const { year, month, day } = dayToDate(dayIndex);
  return `${year}年${month}月${day}日`;
}
function formatDateShort(dayIndex) {
  const { year, month, day } = dayToDate(dayIndex);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function currentDate() { return dayToDate(Game.dayIndex); }

// ===== 存档 =====
function saveGame() {
  try {
    localStorage.setItem("bandSim_save", JSON.stringify(Game));
  } catch (e) { /* 忽略存储失败 */ }
}
function loadGame() {
  try {
    const s = localStorage.getItem("bandSim_save");
    if (s) {
      const data = JSON.parse(s);
      Object.assign(Game, data);
      return true;
    }
  } catch (e) { /* 忽略 */ }
  return false;
}
function hasSave() {
  try { return !!localStorage.getItem("bandSim_save"); } catch (e) { return false; }
}
function clearSave() {
  try { localStorage.removeItem("bandSim_save"); } catch (e) { /* 忽略 */ }
}
