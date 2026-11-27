// 巡演系统：演出地点、巡演组合、收入与名气

// 一线/特大城市（规模系数最高）
const MAJOR_CITIES = ["北京市", "上海市", "广州市", "深圳市", "重庆市", "天津市", "成都市", "武汉市", "杭州市", "南京市", "西安市", "苏州市"];
// 省会/副省级城市
const PROVINCIAL_CAPITALS = [
  "石家庄市","太原市","呼和浩特市","沈阳市","长春市","哈尔滨市","合肥市","福州市","南昌市","济南市",
  "郑州市","长沙市","南宁市","海口市","贵阳市","昆明市","拉萨市","兰州市","西宁市","银川市","乌鲁木齐市",
  "宁波市","青岛市","大连市","厦门市","无锡市","佛山市","东莞市","珠海市","温州市","泉州市","南通市","常州市","徐州市",
];

function cityScale(cityName) {
  const base = cityName.split("·")[0];  // 若是县级市，取所属地级市
  if (MAJOR_CITIES.includes(base)) return 10;
  if (PROVINCIAL_CAPITALS.includes(base)) return 8;
  // 直辖市/特别行政区
  if (["北京市","天津市","上海市","重庆市"].includes(base)) return 10;
  if (cityName.includes("·")) return 4;   // 县级市/区，规模较小
  return 6;  // 普通地级市
}

// 演出规模配置
const VENUE_SIZES = {
  "小型": { label: "小型（Livehouse）", capacity: 500, cost: 20000, ticket: 80 },
  "中型": { label: "中型（剧场）", capacity: 3000, cost: 80000, ticket: 280 },
  "大型": { label: "大型（体育馆）", capacity: 10000, cost: 300000, ticket: 580 },
};

// ===== 创建巡演 =====
function createTour(cities, size, tourName, setlist) {
  const sizeCfg = VENUE_SIZES[size] || VENUE_SIZES["小型"];
  const totalCost = cities.length * sizeCfg.cost;
  const songs = (setlist || []).map(x => ({ id: x.id, name: x.name, duration: x.duration || 240 }));

  // 预计收入
  const reputation = Game.stats.reputation;
  const fansPerCity = Math.round(sizeCfg.capacity * (0.3 + reputation / 100 * 0.7));
  const totalIncome = cities.length * fansPerCity * sizeCfg.ticket;

  const tour = {
    id: Date.now() + "_" + rand(1000, 9999),
    name: tourName || `${cities[0]}巡演`,
    cities: cities.map(c => ({ name: c, scale: cityScale(c) })),
    size: size,
    sizeCfg: sizeCfg,
    totalCost,
    totalIncome,
    dayIndex: Game.dayIndex,
    days: cities.length * 3,  // 每个城市约 3 天
    setlist: songs,
    setDuration: songs.reduce((n, x) => n + x.duration, 0),
  };
  return tour;
}

// 可用的演出曲目：全部已发布作品中的歌曲（含专辑曲目）
function tourAvailableSongs() {
  const out = [];
  for (const rel of (Game.releases || [])) {
    for (const s of (rel.songs || [])) {
      out.push({
        id: s.id || (rel.id + "_" + s.name),
        name: s.name,
        duration: s.duration || 240,
        album: rel.name,
      });
    }
  }
  return out;
}

// 巡演录像时长：曲目总长再加 20~30 分钟（换场、互动、返场）
function tourFootageDuration(tour) {
  const base = (tour.setDuration != null)
    ? tour.setDuration
    : (tour.setlist || []).reduce((n, x) => n + (x.duration || 240), 0);
  return Math.max(1800, base + (20 + Math.floor(seededUnit("live|" + tour.id) * 10)) * 60);
}

// ===== 执行巡演 =====
function startTour(tour) {
  if (Game.mode === "real" && Game.finance.balance < tour.totalCost) {
    return { ok: false, msg: `预算不足，巡演需 ¥${tour.totalCost.toLocaleString()}` };
  }
  if (Game.mode === "real") {
    Game.finance.balance -= tour.totalCost;
    Game.finance.totalExpense += tour.totalCost;
  }

  // 实际收入（有随机浮动，取决于名气）
  const rep = Game.stats.reputation;
  const actualIncome = Math.round(tour.totalIncome * randf(0.7, 1.3) * (0.5 + rep / 100));
  if (Game.mode === "real") {
    Game.finance.balance += actualIncome;
    Game.finance.totalIncome += actualIncome;
  }

  // 名气提升
  const repGain = clamp(Math.round(tour.cities.length * (1 + rep / 100) * randf(0.5, 1.5)), 1, 15);
  Game.stats.reputation = clamp(Game.stats.reputation + repGain, 5, 100);
  Game.stats.totalFans += Math.round(tour.totalIncome / 100);

  // 记录巡演（供巡演录像使用）
  if (!Game.tours) Game.tours = [];
  Game.tours.unshift({
    id: tour.id,
    name: tour.name,
    cities: tour.cities.map(c => c.name),
    size: tour.size,
    dayIndex: Game.dayIndex,
    days: tour.days,
    setlist: tour.setlist || [],
    setDuration: tour.setDuration || 0,
    footageDuration: tourFootageDuration(tour),
    income: actualIncome,
  });
  if (Game.tours.length > 40) Game.tours.length = 40;

  // 推进时间
  advanceTime(tour.days);

  const cityNames = tour.cities.map(c => c.name).join("、");
  addEvent(`${Game.band.name} 完成「${tour.name}」巡演，途经 ${cityNames}，收入 ¥${actualIncome.toLocaleString()}。`);

  saveGame();
  return { ok: true, income: actualIncome, repGain };
}

// ===== 获取所有可巡演城市（扁平列表：省 + 地级市） =====
function getAllCities() {
  const result = [];
  for (const r of window.CHINA_REGIONS) {
    for (const c of r.cities) {
      result.push({ province: r.province, city: c.name, scale: cityScale(c.name) });
    }
  }
  // 补充台湾城市
  for (const tc of (window.TAIWAN_CITIES || [])) {
    result.push({ province: "台湾省", city: tc, scale: cityScale(tc) });
  }
  return result;
}

// 按省分组
function getCitiesByProvince() {
  const map = {};
  for (const r of window.CHINA_REGIONS) {
    map[r.province] = r.cities.map(c => c.name);
  }
  if (window.TAIWAN_CITIES) {
    map["台湾省"] = (map["台湾省"] || []).concat(window.TAIWAN_CITIES);
  }
  return map;
}
