// 版本号递增规则 + 更新公告
// 规则：更新内容 1~5 个 = 小更新（第三位+1）；6~10 个 = 中更新（第二位+1，第三位清零）；11+ 个 = 大更新（第一位+1，后两位清零）
// 版本号各数字无上限，不做十进制进位

// 根据更新条目数量计算新版本号
function bumpVersion(currentVersion, changeCount) {
  const parts = currentVersion.split(".").map(Number);
  if (changeCount >= 11) {
    parts[0] += 1;
    parts[1] = 0;
    parts[2] = 0;
  } else if (changeCount >= 6) {
    parts[1] += 1;
    parts[2] = 0;
  } else {
    parts[2] += 1;
  }
  return parts.join(".");
}

// 更新大小描述
function updateSizeLabel(changeCount) {
  if (changeCount >= 11) return "大更新";
  if (changeCount >= 6) return "中更新";
  return "小更新";
}

// 更新公告历史（按时间倒序，最新在前）
// 每条：{ version, date, size, items: [润色后的更新条目] }
window.UPDATE_LOGS = [
  {
    version: "1.1.0",
    date: "2026-11-22",
    size: "中更新",
    items: [
      "乐队成员现在可单独编辑姓名、角色与初始能力，创作歌曲时可指派具体成员参与。",
      "歌曲时长改为分:秒制，创作更直观。",
      "39 个竞争对手乐队接入真实作品目录，包含真实发行日期、歌曲时长与评分数据。",
      "评分网站新增各平台评论详情页，可进入查看每个评分平台的详细评论。",
      "修复评分网站半颗星显示为方框的问题。",
      "巡演新增县级市/区选择，支持省、地级市、县级市三级联动。",
      "每个乐队成员配置独立的成长训练系统。",
    ],
  },
  {
    version: "1.0.0",
    date: "2026-11-22",
    size: "正式版",
    items: [
      "游戏正式上线，开启乐队生涯模拟之旅。",
      "从 2000 年 1 月 1 日开始，见证华语乐坛二十余年的风云变幻。",
      "提供真实模式与沙盒模式两种玩法，满足不同玩家的经营需求。",
    ],
  },
];

// 应用一次更新：传入原始条目列表，自动润色、计算版本号、写入公告
function applyUpdate(rawItems) {
  const changeCount = rawItems.length;
  const newVersion = bumpVersion(Game.version, changeCount);
  const size = updateSizeLabel(changeCount);
  const { year, month, day } = currentDate();
  const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const items = rawItems.map(polishUpdateItem);
  UPDATE_LOGS.unshift({ version: newVersion, date, size, items });
  Game.version = newVersion;
  return { version: newVersion, size, date };
}

// 润色更新条目（把简短条目润色为公告语句）
function polishUpdateItem(item) {
  const t = item.trim();
  if (!t) return t;
  if (/[。！？.!?]$/.test(t)) return t;
  return t + "。";
}
