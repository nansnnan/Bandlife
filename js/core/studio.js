// 工作室系统：8 个等级，影响歌曲质量（占 35%），每月产生租金与维护费

const STUDIO_LEVELS = [
  { level: 1, name: "初级工作室", desc: "排练房改造的简易录制空间", quality: 40, rent: 3000, maintain: 1000, upgradeCost: 0 },
  { level: 2, name: "标准录音室", desc: "基础隔音与监听设备", quality: 47, rent: 8000, maintain: 3000, upgradeCost: 50000 },
  { level: 3, name: "专业录音棚", desc: "独立控制室与分轨录音能力", quality: 54, rent: 20000, maintain: 7000, upgradeCost: 150000 },
  { level: 4, name: "高级制作中心", desc: "专业混音台与声学处理", quality: 61, rent: 50000, maintain: 18000, upgradeCost: 400000 },
  { level: 5, name: "旗舰录音基地", desc: "多间录音室与母带处理间", quality: 68, rent: 120000, maintain: 40000, upgradeCost: 1000000 },
  { level: 6, name: "国际标准工作室", desc: "与国际团队合作的制作环境", quality: 76, rent: 280000, maintain: 90000, upgradeCost: 2500000 },
  { level: 7, name: "顶级创作工坊", desc: "顶级设备与专属制作团队", quality: 85, rent: 600000, maintain: 200000, upgradeCost: 6000000 },
  { level: 8, name: "殿堂级制作中心", desc: "行业标杆级的完整制作体系", quality: 94, rent: 1200000, maintain: 400000, upgradeCost: 15000000 },
];

const STUDIO_BAND_WEIGHT = 0.65;   // 乐队能力占比
const STUDIO_WEIGHT = 0.35;        // 工作室占比

function studioLevel() {
  return clamp((Game.studio && Game.studio.level) || 1, 1, STUDIO_LEVELS.length);
}
function studioInfo(level) {
  return STUDIO_LEVELS[clamp(level || studioLevel(), 1, STUDIO_LEVELS.length) - 1];
}
function studioQuality() {
  return studioInfo().quality;
}
function studioMonthlyCost() {
  const s = studioInfo();
  return s.rent + s.maintain;
}

// 升级工作室
function upgradeStudio() {
  const cur = studioLevel();
  if (cur >= STUDIO_LEVELS.length) return { ok: false, msg: "工作室已达到最高等级" };
  const next = STUDIO_LEVELS[cur];   // 下一级（数组 0 基）
  const cost = next.upgradeCost;
  if (Game.mode === "real" && Game.finance.balance < cost) {
    return { ok: false, msg: `预算不足，升级需 ¥${cost.toLocaleString()}` };
  }
  if (Game.mode === "real") {
    Game.finance.balance -= cost;
    Game.finance.totalExpense += cost;
  }
  Game.studio.level = cur + 1;
  addEvent(`工作室升级为「${next.name}」，歌曲质量随之提升。`);
  saveGame();
  return { ok: true, cost, level: Game.studio.level };
}

// 每月租金与维护费（由 tickMonthly 调用）
function studioMonthlyCharge() {
  if (!Game.studio) return 0;
  const cost = studioMonthlyCost();
  if (Game.mode === "real") {
    Game.finance.balance -= cost;
    Game.finance.totalExpense += cost;
  }
  Game.stats.studioCost = (Game.stats.studioCost || 0) + cost;
  return cost;
}
