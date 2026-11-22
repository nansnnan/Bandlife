// 39 个真实中国乐队的正式发行作品（录音室专辑 / EP / 单曲）
// 依据公开资料（维基百科、豆瓣、Apple Music、Spotify、Discogs 等）整理
// duration 单位为秒；date 为发行日期（YYYY-MM-DD，仅知年份的用 YYYY-01-01 近似）
// rating 为真实豆瓣评分（约值，已知则标注），未知的由运行时按算法生成
window.BAND_DISCOGRAPHY = {
  "唐朝乐队": [
    { name: "唐朝", type: "专辑", date: "1992-12-11", rating: 9.2, songs: [
      { name: "梦回唐朝", duration: 426 }, { name: "太阳", duration: 355 }, { name: "九拍", duration: 397 },
      { name: "天堂", duration: 263 }, { name: "选择", duration: 349 }, { name: "飞翔鸟", duration: 426 },
      { name: "世纪末之梦", duration: 297 }, { name: "月梦", duration: 289 }, { name: "不要逃避", duration: 277 },
      { name: "传说", duration: 284 } ] },
    { name: "演义", type: "专辑", date: "1998-12-20", songs: [
      { name: "演义", duration: 330 }, { name: "时间", duration: 300 }, { name: "缘生缘灭", duration: 280 },
      { name: "送别", duration: 290 }, { name: "英雄", duration: 310 }, { name: "玩笑", duration: 270 } ] },
    { name: "浪漫骑士", type: "专辑", date: "2008-06-13", songs: [
      { name: "啸叫列车", duration: 320 }, { name: "快乐的忧愁", duration: 300 }, { name: "浪漫骑士", duration: 320 },
      { name: "酒狂", duration: 310 }, { name: "路", duration: 300 }, { name: "封禅祭", duration: 330 },
      { name: "承诺", duration: 290 }, { name: "追溯", duration: 310 }, { name: "绝望致谎言", duration: 300 },
      { name: "大风歌", duration: 320 } ] },
    { name: "芒刺", type: "专辑", date: "2013-11-08", songs: [
      { name: "芒刺", duration: 310 }, { name: "斑马线", duration: 290 }, { name: "麋鹿的眼泪", duration: 300 },
      { name: "睡莲", duration: 280 } ] },
    { name: "沉浮", type: "EP", date: "2010-03-28", songs: [ { name: "沉浮", duration: 300 } ] },
  ],
  "黑豹乐队": [
    { name: "黑豹", type: "专辑", date: "1992-12-22", rating: 9.0, songs: [
      { name: "无地自容", duration: 338 }, { name: "Take Care", duration: 362 }, { name: "体会", duration: 285 },
      { name: "别来纠缠我", duration: 285 }, { name: "靠近我", duration: 369 }, { name: "Don't Break My Heart", duration: 316 },
      { name: "脸谱", duration: 294 }, { name: "怕你为自己流泪", duration: 294 }, { name: "眼光里", duration: 282 },
      { name: "别去糟蹋", duration: 448 } ] },
    { name: "光芒之神", type: "专辑", date: "1993-09-21", songs: [
      { name: "光芒之神", duration: 300 }, { name: "同在一片天空下", duration: 290 }, { name: "我问", duration: 280 },
      { name: "你就是你", duration: 270 }, { name: "美丽的天堂，没有悲伤", duration: 300 } ] },
    { name: "无是无非", type: "专辑", date: "1996-02-11", songs: [
      { name: "无是无非", duration: 300 }, { name: "放心走吧", duration: 290 }, { name: "谎言", duration: 280 },
      { name: "黑夜没有陌生", duration: 270 }, { name: "朝前走", duration: 290 } ] },
    { name: "黑豹IV", type: "专辑", date: "1998-05-01", songs: [
      { name: "我们这一代", duration: 300 }, { name: "不能让我的烦恼没机会表白", duration: 310 },
      { name: "逃离", duration: 280 }, { name: "已足够", duration: 270 } ] },
    { name: "黑豹V", type: "专辑", date: "2004-07-22", songs: [
      { name: "生活方式", duration: 290 }, { name: "空", duration: 280 }, { name: "孤焰烈火", duration: 300 },
      { name: "I Don't Want To Say Goodbye", duration: 290 }, { name: "错觉", duration: 280 }, { name: "未知的世纪", duration: 300 },
      { name: "旋转", duration: 280 }, { name: "继续地飞", duration: 300 }, { name: "透明的影子", duration: 290 },
      { name: "照亮我心", duration: 310 } ] },
    { name: "我们是谁", type: "专辑", date: "2013-07-11", songs: [
      { name: "枷锁", duration: 290 }, { name: "潮汐", duration: 300 }, { name: "寻找", duration: 280 },
      { name: "我们", duration: 310 } ] },
    { name: "本色", type: "专辑", date: "2017-04-20", songs: [
      { name: "How do we find a way", duration: 240 }, { name: "键盘·狭", duration: 221 }, { name: "孤独的灵魂", duration: 246 },
      { name: "炙热", duration: 187 }, { name: "Back to rock", duration: 231 }, { name: "低头士", duration: 140 },
      { name: "无畏", duration: 197 }, { name: "较量", duration: 196 }, { name: "战", duration: 179 },
      { name: "干杯", duration: 222 }, { name: "放不开你", duration: 230 }, { name: "兄弟", duration: 210 } ] },
    { name: "尽余欢", type: "EP", date: "2015-12-14", songs: [ { name: "送别", duration: 280 }, { name: "兄弟", duration: 270 } ] },
  ],
  "零点乐队": [
    { name: "别误会", type: "专辑", date: "1995-12-01", rating: 7.8, songs: [
      { name: "别误会", duration: 324 }, { name: "爱不爱我", duration: 331 }, { name: "相信自己", duration: 213 } ] },
    { name: "永恒的起点", type: "专辑", date: "1997-01-01", songs: [
      { name: "放弃", duration: 310 }, { name: "别让我离开你", duration: 271 }, { name: "爱不爱我", duration: 330 },
      { name: "面具", duration: 307 }, { name: "永恒的起点", duration: 325 }, { name: "共同的起点", duration: 391 },
      { name: "一切都会好", duration: 354 }, { name: "I Am Sorry别误会", duration: 309 }, { name: "过去", duration: 382 } ] },
    { name: "每一夜每一天", type: "专辑", date: "1998-01-01", songs: [
      { name: "粉墨人生", duration: 222 }, { name: "回心转意", duration: 350 }, { name: "该让我如何爱你", duration: 281 },
      { name: "别和他一样", duration: 237 }, { name: "放开我", duration: 261 } ] },
    { name: "00:00:00", type: "专辑", date: "1999-09-21", songs: [
      { name: "00:00:00", duration: 290 } ] },
    { name: "没有什么不可以", type: "专辑", date: "2002-01-20", songs: [
      { name: "Don't Runaway", duration: 236 }, { name: "好好过吧", duration: 218 }, { name: "冒险家", duration: 260 },
      { name: "没有什么不可以", duration: 299 }, { name: "梦游", duration: 303 }, { name: "飘", duration: 228 },
      { name: "我要", duration: 301 }, { name: "相信自己", duration: 213 }, { name: "战胜自己", duration: 259 } ] },
    { name: "越来越", type: "专辑", date: "2003-09-01", songs: [
      { name: "越来越", duration: 280 } ] },
    { name: "风雷动", type: "专辑", date: "2005-01-01", songs: [
      { name: "风雷动", duration: 270 } ] },
    { name: "多么爱你，你知道吗？！", type: "专辑", date: "2014-09-17", songs: [
      { name: "相信我", duration: 285 }, { name: "多么爱你", duration: 297 }, { name: "当思念变成回忆", duration: 297 },
      { name: "无论我走到哪里总会想起你", duration: 235 }, { name: "好寂寞", duration: 340 }, { name: "爱不离", duration: 307 },
      { name: "冲出霾伏", duration: 306 }, { name: "零点快乐", duration: 258 }, { name: "我曾以为", duration: 286 } ] },
    { name: "我还爱着你", type: "专辑", date: "2016-08-01", songs: [
      { name: "我还爱着你", duration: 280 } ] },
  ],
  "痛仰乐队": [
    { name: "这是个问题", type: "专辑", date: "2000-12-01", songs: [
      { name: "哪里有压迫哪里就有反抗", duration: 280 }, { name: "愤怒", duration: 270 }, { name: "像个婊子", duration: 260 },
      { name: "复制者", duration: 275 }, { name: "这是个问题", duration: 285 } ] },
    { name: "不", type: "EP", date: "2006-02-28", songs: [
      { name: "坚定的信念", duration: 270 }, { name: "不", duration: 290 }, { name: "枷锁", duration: 280 },
      { name: "在路上", duration: 300 }, { name: "生命中最美丽的一天", duration: 310 } ] },
    { name: "不要停止我的音乐", type: "专辑", date: "2008-09-30", rating: 8.2, songs: [
      { name: "再见杰克", duration: 273 }, { name: "公路之歌", duration: 184 }, { name: "低处穿巡", duration: 272 },
      { name: "角色", duration: 259 }, { name: "安阳", duration: 235 }, { name: "空城", duration: 213 },
      { name: "西湖", duration: 253 }, { name: "异乡", duration: 359 }, { name: "为你唱首歌", duration: 253 },
      { name: "不要停止我的音乐", duration: 258 } ] },
    { name: "盛开", type: "专辑", date: "2010-05-04", songs: [
      { name: "盛开", duration: 280 }, { name: "博卡拉", duration: 290 }, { name: "改变你的生活", duration: 270 },
      { name: "最后一班列车", duration: 280 }, { name: "空隙", duration: 290 }, { name: "生命中最美丽的一天", duration: 310 } ] },
    { name: "愿爱无忧", type: "专辑", date: "2014-08-12", rating: 7.9, songs: [
      { name: "引子", duration: 120 }, { name: "扎西德勒", duration: 280 }, { name: "哈利路亚", duration: 290 },
      { name: "夏天", duration: 270 }, { name: "行星消失的夜空", duration: 300 }, { name: "戴着镣铐起舞", duration: 280 },
      { name: "汪洋中的一条船", duration: 290 }, { name: "太阳照常升起", duration: 270 }, { name: "野歌", duration: 280 },
      { name: "美丽新世界", duration: 290 }, { name: "两个人的假期", duration: 270 }, { name: "思疆调", duration: 260 },
      { name: "愿爱无忧", duration: 300 } ] },
    { name: "今日青年", type: "专辑", date: "2016-11-01", songs: [
      { name: "四相", duration: 200 }, { name: "今日青年", duration: 290 }, { name: "黑名单上的人", duration: 280 },
      { name: "黄皮肤的吉普赛", duration: 290 }, { name: "冲锋队", duration: 270 }, { name: "自由吧电台", duration: 280 },
      { name: "Downtown", duration: 270 }, { name: "支离", duration: 280 }, { name: "如期", duration: 290 },
      { name: "午夜芭蕾", duration: 270 }, { name: "好梦", duration: 280 } ] },
    { name: "过海", type: "专辑", date: "2019-12-16", songs: [
      { name: "过海", duration: 300 }, { name: "渡口", duration: 280 }, { name: "海", duration: 290 },
      { name: "彼岸", duration: 280 }, { name: "潮汐", duration: 290 }, { name: "浪", duration: 270 },
      { name: "归航", duration: 280 }, { name: "孤岛", duration: 290 }, { name: "远方", duration: 270 },
      { name: "光", duration: 280 } ] },
  ],
  "万能青年旅店": [
    { name: "万能青年旅店", type: "专辑", date: "2010-11-12", rating: 9.3, songs: [
      { name: "狗尿馆", duration: 116 }, { name: "不万能的喜剧", duration: 334 }, { name: "揪心的玩笑与漫长的白日梦", duration: 335 },
      { name: "大石碎胸口", duration: 423 }, { name: "洋鸟消夏录", duration: 70 }, { name: "秦皇岛", duration: 485 },
      { name: "十万嬉皮", duration: 285 }, { name: "在这颗行星所有的酒馆", duration: 549 }, { name: "杀死那个石家庄人", duration: 344 } ] },
    { name: "冀西南林路行", type: "专辑", date: "2020-12-22", rating: 8.9, songs: [
      { name: "早", duration: 83 }, { name: "泥河", duration: 348 }, { name: "平等云雾", duration: 86 },
      { name: "采石", duration: 536 }, { name: "山雀", duration: 300 }, { name: "河北墨麒麟", duration: 360 },
      { name: "郊眠寺", duration: 300 } ] },
    { name: "废人们 都在忙什么？", type: "EP", date: "2006-01-01", songs: [
      { name: "不再万能的喜剧", duration: 330 }, { name: "喜剧", duration: 300 }, { name: "秦皇岛", duration: 480 } ] },
  ],
  "二手玫瑰": [
    { name: "二手玫瑰", type: "专辑", date: "2003-01-01", rating: 8.5, songs: [
      { name: "伎俩", duration: 257 }, { name: "火车快开", duration: 347 }, { name: "允许部分艺术家先富起来", duration: 271 },
      { name: "征婚启示", duration: 289 }, { name: "招安", duration: 384 }, { name: "采花", duration: 269 },
      { name: "因为所以", duration: 247 }, { name: "嫂子颂", duration: 342 }, { name: "公益歌曲", duration: 212 },
      { name: "好花红", duration: 423 } ] },
    { name: "娱乐江湖", type: "专辑", date: "2006-10-17", songs: [
      { name: "狼心狗肺", duration: 280 }, { name: "娱乐江湖", duration: 290 }, { name: "E时代桃源", duration: 270 },
      { name: "夜深了", duration: 280 }, { name: "感觉错了", duration: 290 }, { name: "起飞", duration: 270 },
      { name: "命运", duration: 280 }, { name: "跳大神", duration: 290 }, { name: "可是我还是在歌唱", duration: 280 },
      { name: "春天的故事", duration: 270 } ] },
    { name: "一枝独秀", type: "专辑", date: "2013-08-12", rating: 8.0, songs: [
      { name: "坏东西", duration: 182 }, { name: "仙儿", duration: 305 }, { name: "舞曲", duration: 350 },
      { name: "串门", duration: 307 }, { name: "黄诗", duration: 234 }, { name: "白花", duration: 401 },
      { name: "黏人", duration: 444 }, { name: "渣儿", duration: 298 }, { name: "正人君子", duration: 284 },
      { name: "你幸福吗", duration: 289 }, { name: "小石头", duration: 271 }, { name: "小短歌", duration: 144 } ] },
    { name: "如你所愿", type: "现场", date: "2019-04-11", songs: [ { name: "匠", duration: 220 } ] },
  ],
  "新裤子": [
    { name: "新裤子", type: "专辑", date: "1998-01-01", rating: 8.1, songs: [
      { name: "我们的时代", duration: 280 }, { name: "过时", duration: 270 }, { name: "流行一代", duration: 260 } ] },
    { name: "龙虎人丹", type: "专辑", date: "2005-12-01", rating: 8.2, songs: [
      { name: "你就是我的明星", duration: 148 }, { name: "Bye Bye Disco", duration: 305 }, { name: "两个男朋友", duration: 204 },
      { name: "神秘的香波", duration: 233 }, { name: "龙虎人丹", duration: 227 }, { name: "需要爱", duration: 248 },
      { name: "爱带我回家", duration: 292 }, { name: "爱瑞巴迪", duration: 176 }, { name: "我想她", duration: 215 },
      { name: "御宅", duration: 306 } ] },
    { name: "野人也有爱", type: "专辑", date: "2008-11-14", songs: [
      { name: "野人也有爱", duration: 250 }, { name: "我们可以在一起", duration: 311 } ] },
    { name: "Go East", type: "专辑", date: "2009-01-01", songs: [ { name: "Go East", duration: 260 } ] },
    { name: "Sex Drugs Internet", type: "专辑", date: "2011-01-01", songs: [
      { name: "Sex Drugs Internet", duration: 270 } ] },
    { name: "生命因你而火热", type: "专辑", date: "2016-04-01", rating: 8.3, songs: [
      { name: "你要跳舞吗", duration: 193 }, { name: "我们最好的时光就是现在", duration: 293 },
      { name: "没有理想的人不伤心", duration: 341 }, { name: "每一次我们开始争吵", duration: 234 },
      { name: "生活因你而火热", duration: 291 }, { name: "难过时把舞跳", duration: 253 },
      { name: "关于夜晚和失眠的世界", duration: 347 }, { name: "没有你的旅途没有意义", duration: 245 },
      { name: "在我死去之前", duration: 205 }, { name: "走在什刹海的冰面上", duration: 276 } ] },
    { name: "爱 广播 飞机", type: "专辑", date: "2021-03-18", songs: [
      { name: "我好希望未来不来", duration: 222 }, { name: "夏日终曲", duration: 320 },
      { name: "最后的乐队", duration: 302 } ] },
  ],
  "五条人": [
    { name: "县城记", type: "专辑", date: "2009-07-11", rating: 8.4, songs: [
      { name: "十年水流东 十年水流西", duration: 285 }, { name: "道山靓仔", duration: 328 },
      { name: "倒港纸", duration: 260 }, { name: "乐乐哭哭", duration: 184 },
      { name: "踏架脚车牵条猪", duration: 367 }, { name: "李阿伯", duration: 446 },
      { name: "梦想化工厂", duration: 244 }, { name: "问题出现我再告诉大家", duration: 213 },
      { name: "童年往事", duration: 310 }, { name: "绿苍苍", duration: 219 },
      { name: "阿炳耀", duration: 292 }, { name: "十年水流东 十年水流西（天合原始版）", duration: 218 } ] },
    { name: "一些风景", type: "专辑", date: "2012-05-25", songs: [
      { name: "陈先生", duration: 280 }, { name: "海风", duration: 290 }, { name: "彭啊湃", duration: 300 } ] },
    { name: "广东姑娘", type: "专辑", date: "2015-03-09", rating: 8.1, songs: [
      { name: "海风", duration: 280 }, { name: "心肝痛", duration: 270 }, { name: "广东姑娘", duration: 266 },
      { name: "走鬼", duration: 280 }, { name: "我的头发就是这样被吹乱的啊", duration: 290 }, { name: "像将军那样喝酒", duration: 270 },
      { name: "龙哥有真爱", duration: 280 }, { name: "东莞的月亮", duration: 270 }, { name: "我哈你", duration: 260 },
      { name: "晚上好，春天小姐", duration: 257 }, { name: "猪母上山咬老虎", duration: 280 }, { name: "美丽漂亮，英俊潇洒", duration: 270 },
      { name: "请到老祖宗", duration: 280 } ] },
    { name: "梦幻丽莎发廊", type: "专辑", date: "2017-03-29", rating: 8.2, songs: [
      { name: "梦幻丽莎发廊", duration: 248 }, { name: "阿珍爱上了阿强", duration: 409 } ] },
    { name: "故事会", type: "专辑", date: "2019-02-21", rating: 8.0, songs: [
      { name: "故事会", duration: 280 }, { name: "世界的理想", duration: 307 } ] },
    { name: "活鱼逆流而上，死鱼随波逐流", type: "专辑", date: "2021-08-18", songs: [
      { name: "活鱼逆流而上", duration: 290 } ] },
    { name: "一半真情流露，一半靠表演", type: "专辑", date: "2021-08-18", songs: [
      { name: "一半真情流露", duration: 280 } ] },
  ],
  "重塑雕像的权利": [
    { name: "CUT OFF!", type: "EP", date: "2005-01-01", rating: 8.0, songs: [
      { name: "Cut Off", duration: 300 } ] },
    { name: "WATCH OUT!CLIMATE HAS CHANGED,FAT MUM RISES...", type: "专辑", date: "2009-01-09", rating: 8.1, songs: [
      { name: "Watch Out, Climate Has Changed...", duration: 95 }, { name: "Surrender", duration: 338 },
      { name: "My Great Location", duration: 232 }, { name: "Momentarily Out Of Mind", duration: 182 },
      { name: "Escape Behind...I", duration: 150 }, { name: "Vis-A-Vis", duration: 206 },
      { name: "Escape Behind...II", duration: 286 }, { name: "Up Next_Bela Lugosi's Back", duration: 515 },
      { name: "Billy Cannot Stop", duration: 321 }, { name: "By Your Both Sides, Left And Right", duration: 333 },
      { name: "...Fat Mum Rises!", duration: 77 } ] },
    { name: "Before The Applause", type: "专辑", date: "2017-09-15", rating: 8.3, songs: [
      { name: "Pigs In The River", duration: 300 }, { name: "8+2+8 I", duration: 280 },
      { name: "8+2+8 II", duration: 280 }, { name: "Sounds for Celebration", duration: 290 } ] },
  ],
  "草东没有派对": [
    { name: "丑奴儿", type: "专辑", date: "2016-02-19", rating: 9.1, songs: [
      { name: "Intro", duration: 87 }, { name: "丑", duration: 118 }, { name: "烂泥", duration: 150 },
      { name: "勇敢的人", duration: 221 }, { name: "大风吹", duration: 236 }, { name: "艾玛", duration: 202 },
      { name: "等", duration: 156 }, { name: "鬼", duration: 160 }, { name: "在", duration: 280 },
      { name: "山海", duration: 251 }, { name: "我们", duration: 219 }, { name: "情歌", duration: 257 } ] },
    { name: "瓦合", type: "专辑", date: "2023-05-20", rating: 8.5, songs: [
      { name: "床", duration: 232 }, { name: "但", duration: 142 }, { name: "缸", duration: 280 }, { name: "芽", duration: 270 } ] },
  ],
  "海龟先生": [
    { name: "POGO不如跳舞", type: "EP", date: "2005-11-01", songs: [
      { name: "你好再见", duration: 270 } ] },
    { name: "海龟先生", type: "专辑", date: "2012-12-31", rating: 8.1, songs: [
      { name: "玛卡瑞纳", duration: 300 }, { name: "Young", duration: 280 }, { name: "一起跳舞", duration: 270 },
      { name: "Porn Star", duration: 260 }, { name: "Little Bar", duration: 280 }, { name: "Keep the Fire", duration: 270 },
      { name: "男孩别哭", duration: 290 }, { name: "微笑", duration: 280 }, { name: "California", duration: 270 } ] },
    { name: "Where are you going?", type: "专辑", date: "2014-06-28", songs: [
      { name: "Where are you going？", duration: 300 }, { name: "悬崖巴士", duration: 280 },
      { name: "脱狱", duration: 270 }, { name: "她", duration: 260 }, { name: "接纳", duration: 280 },
      { name: "给摇滚绑架", duration: 290 }, { name: "那时阳光明媚", duration: 270 },
      { name: "变形金刚", duration: 280 }, { name: "Snoopy", duration: 260 }, { name: "Last chance", duration: 270 } ] },
    { name: "咔咪哈咪哈", type: "专辑", date: "2019-03-07", songs: [
      { name: "龟波气功", duration: 280 }, { name: "内人广林", duration: 270 }, { name: "海龟之歌", duration: 290 },
      { name: "热血新纪录", duration: 280 }, { name: "赖宁", duration: 270 }, { name: "我", duration: 260 },
      { name: "望望先辈", duration: 280 }, { name: "恩典", duration: 270 }, { name: "锡安", duration: 260 },
      { name: "好时光", duration: 280 } ] },
    { name: "死不回头", type: "专辑", date: "2021-05-08", songs: [
      { name: "老手", duration: 280 }, { name: "你知道", duration: 270 }, { name: "黑暗暂把他们隐藏", duration: 280 },
      { name: "迷呓之喑", duration: 270 }, { name: "盼望", duration: 260 }, { name: "捕风", duration: 280 },
      { name: "伪君子", duration: 270 }, { name: "湾仔", duration: 260 }, { name: "忽然闯入", duration: 280 },
      { name: "海的女儿", duration: 270 } ] },
  ],
  "后海大鲨鱼": [
    { name: "Queen Sea Big Shark", type: "专辑", date: "2007-01-01", songs: [
      { name: "Lightning Metropolis", duration: 280 }, { name: "Hard Heart(Love Spy)", duration: 270 },
      { name: "No!No!No!", duration: 260 }, { name: "Tiger Dance", duration: 270 },
      { name: "Kiss!Kill!Bang", duration: 260 }, { name: "Girl Boss", duration: 280 },
      { name: "Man On The Moon", duration: 270 }, { name: "Hello!Passengers", duration: 280 },
      { name: "Hold Your Hand", duration: 270 }, { name: "Dirty Mind", duration: 260 },
      { name: "Money Fxxke", duration: 270 }, { name: "Lady Sisters", duration: 280 },
      { name: "Get Away", duration: 260 }, { name: "Love Is Pop", duration: 270 } ] },
    { name: "浪潮", type: "专辑", date: "2010-01-01", songs: [
      { name: "Glow in the dark", duration: 280 }, { name: "Back 2 the future", duration: 270 },
      { name: "E Ocean", duration: 260 }, { name: "Comxxpuda", duration: 280 },
      { name: "Loop of the sun", duration: 270 }, { name: "Wave", duration: 280 },
      { name: "Neo! Man", duration: 260 }, { name: "Star Z", duration: 270 },
      { name: "Youth", duration: 280 }, { name: "C.B.D", duration: 270 } ] },
    { name: "心要野", type: "专辑", date: "2015-03-18", rating: 8.3, songs: [
      { name: "心要野", duration: 280 }, { name: "喜马拉雅", duration: 270 }, { name: "猛犸", duration: 280 },
      { name: "时间之间", duration: 290 }, { name: "今夜留给今夜吧", duration: 270 }, { name: "漂流去世界最中心", duration: 280 },
      { name: "88奥林匹克", duration: 260 }, { name: "偷月亮的人", duration: 270 }, { name: "时髦人都好Fancy", duration: 280 },
      { name: "后海冲浪手", duration: 270 }, { name: "Bling Bling Bling", duration: 280 } ] },
  ],
  "木马乐队": [
    { name: "木马", type: "专辑", date: "1999-12-01", rating: 8.2, songs: [
      { name: "低处生活", duration: 280 }, { name: "没有声音的房间", duration: 290 } ] },
    { name: "Yellow Star", type: "EP", date: "2003-04-21", songs: [
      { name: "爱得像蜜糖", duration: 280 }, { name: "我失去了她", duration: 270 }, { name: "美丽的南方", duration: 290 },
      { name: "Feifei Run", duration: 300 }, { name: "伟大的演奏家", duration: 280 } ] },
    { name: "果冻帝国", type: "专辑", date: "2004-09-01", rating: 8.0, songs: [
      { name: "果冻帝国", duration: 280 }, { name: "我失去了她", duration: 270 } ] },
    { name: "丝绒公路", type: "专辑", date: "2007-01-01", songs: [
      { name: "她是黯淡星", duration: 280 } ] },
    { name: "进化", type: "专辑", date: "2011-01-01", songs: [
      { name: "进化", duration: 270 } ] },
    { name: "旧城之王", type: "专辑", date: "2018-12-05", songs: [
      { name: "旧城之王", duration: 280 } ] },
  ],
  "舌头乐队": [
    { name: "小鸡出壳", type: "专辑", date: "1999-01-01", rating: 8.3, songs: [
      { name: "小鸡出壳", duration: 300 }, { name: "复制者", duration: 280 } ] },
    { name: "这就是你", type: "专辑", date: "2002-01-01", rating: 8.1, songs: [
      { name: "这就是你", duration: 300 } ] },
    { name: "妈妈一起飞吧，妈妈一起摇滚吧", type: "专辑", date: "2014-08-01", songs: [
      { name: "妈妈一起飞吧", duration: 400 } ] },
    { name: "原始人爱空调协会", type: "专辑", date: "2016-08-01", rating: 7.9, songs: [
      { name: "时光机器", duration: 300 } ] },
    { name: "怎么能够说我爱你", type: "专辑", date: "2019-01-01", songs: [
      { name: "怎么能够说我爱你", duration: 300 } ] },
    { name: "中国制造", type: "专辑", date: "2021-01-01", songs: [
      { name: "猫和老鼠", duration: 280 }, { name: "摇滚教父", duration: 270 } ] },
  ],
  "杭盖乐队": [
    { name: "介绍杭盖", type: "专辑", date: "2008-07-28", rating: 8.0, songs: [
      { name: "我的陶布竖尔", duration: 280 }, { name: "酒歌", duration: 270 }, { name: "四季", duration: 290 } ] },
    { name: "远走的人", type: "专辑", date: "2010-10-25", rating: 8.1, songs: [
      { name: "戈壁路", duration: 213 }, { name: "乌仁都希", duration: 163 }, { name: "圆顶的帽子", duration: 188 },
      { name: "海然，海然", duration: 203 }, { name: "樟登树", duration: 146 }, { name: "察哈尔", duration: 238 },
      { name: "希格希日", duration: 293 }, { name: "波如来", duration: 200 }, { name: "杭盖", duration: 355 },
      { name: "酒歌", duration: 214 }, { name: "四季", duration: 332 }, { name: "金手镯", duration: 251 } ] },
    { name: "四季", type: "专辑", date: "2012-05-01", rating: 7.9, songs: [
      { name: "戈壁路", duration: 213 }, { name: "乌仁都西", duration: 163 }, { name: "圆顶帽", duration: 188 },
      { name: "海然海然", duration: 203 }, { name: "樟登树", duration: 146 }, { name: "察哈尔", duration: 238 },
      { name: "希格希日", duration: 293 }, { name: "波如莱", duration: 200 }, { name: "花儿", duration: 181 },
      { name: "杭盖", duration: 355 }, { name: "四季", duration: 332 } ] },
    { name: "回到你身旁", type: "专辑", date: "2014-05-22", songs: [
      { name: "回到你身旁", duration: 226 }, { name: "硕特英雄", duration: 236 }, { name: "五条好汉", duration: 350 },
      { name: "思念女儿", duration: 278 }, { name: "青海摇篮曲", duration: 169 }, { name: "鸿雁", duration: 241 },
      { name: "金扣子", duration: 349 }, { name: "乌兰巴托之夜", duration: 293 }, { name: "白河滩上的兔子", duration: 252 },
      { name: "金秋", duration: 340 }, { name: "我的母亲", duration: 287 }, { name: "呼和那木吉拉的骏马", duration: 259 },
      { name: "漂亮的蒙古马", duration: 426 }, { name: "达亚波尔", duration: 224 }, { name: "河套湾高树", duration: 269 } ] },
    { name: "花斑马", type: "专辑", date: "2016-05-15", songs: [
      { name: "花斑马", duration: 346 }, { name: "轮回", duration: 271 }, { name: "阿里河，母亲河", duration: 151 },
      { name: "海然海然", duration: 303 }, { name: "初升的太阳", duration: 347 }, { name: "美丽的草原我的家", duration: 222 },
      { name: "上海产的半导体", duration: 266 }, { name: "小兔子", duration: 225 }, { name: "辽阔的草原", duration: 384 },
      { name: "故乡山峰", duration: 249 }, { name: "天上的风", duration: 290 }, { name: "圣主", duration: 161 } ] },
    { name: "故乡", type: "专辑", date: "2017-01-01", songs: [
      { name: "故乡", duration: 280 } ] },
    { name: "杭盖与铜管", type: "专辑", date: "2019-01-01", songs: [
      { name: "鸿雁", duration: 271 }, { name: "丁吉图湾", duration: 286 }, { name: "四岁的海骝马", duration: 39 },
      { name: "古纳根乌兰巴特", duration: 338 }, { name: "北边的芨芨草", duration: 352 }, { name: "花斑马", duration: 324 },
      { name: "约会", duration: 351 }, { name: "乌仁都希", duration: 222 }, { name: "戈壁路", duration: 284 },
      { name: "初升的太阳", duration: 340 }, { name: "喇嘛大叔寻亲记", duration: 212 }, { name: "上海产的半导体", duration: 284 } ] },
  ],
  "九宝乐队": [
    { name: "十丈铜嘴", type: "专辑", date: "2012-05-05", rating: 7.9, songs: [
      { name: "圣赞", duration: 132 }, { name: "神秘之力", duration: 207 }, { name: "十丈铜嘴", duration: 235 },
      { name: "骑兵", duration: 236 }, { name: "娜明达赖", duration: 168 }, { name: "吆呼尔", duration: 164 },
      { name: "英雄", duration: 206 }, { name: "钟声为谁而鸣", duration: 305 }, { name: "神秘之力(Acoustic)", duration: 205 } ] },
    { name: "九宝", type: "专辑", date: "2013-12-13", rating: 8.0, songs: [
      { name: "九宝", duration: 290 } ] },
    { name: "灵眼", type: "专辑", date: "2016-08-19", rating: 8.1, songs: [
      { name: "灵眼", duration: 290 }, { name: "顽固", duration: 280 } ] },
    { name: "Awakening From Dukkha", type: "精选", date: "2020-11-18", songs: [
      { name: "特斯河之赞", duration: 290 }, { name: "黑心", duration: 280 } ] },
    { name: "究极之境", type: "专辑", date: "2025-09-24", songs: [
      { name: "直到如今", duration: 296 }, { name: "彷徨", duration: 287 }, { name: "真梦", duration: 310 } ] },
  ],
  "夜叉乐队": [
    { name: "自由", type: "专辑", date: "2000-12-01", rating: 8.0, songs: [
      { name: "自由", duration: 280 } ] },
    { name: "发发发", type: "专辑", date: "2003-06-01", songs: [
      { name: "发发发", duration: 270 } ] },
    { name: "Keep on Fighting", type: "EP", date: "2006-07-15", songs: [
      { name: "Keep on Fighting", duration: 280 } ] },
    { name: "You Aren't The Loser", type: "专辑", date: "2010-01-01", songs: [
      { name: "You Aren't The Loser", duration: 280 } ] },
    { name: "暗流", type: "专辑", date: "2015-09-01", songs: [
      { name: "暗流", duration: 280 }, { name: "与魔鬼同行", duration: 420 } ] },
    { name: "我即是神", type: "专辑", date: "2018-01-01", songs: [
      { name: "我即是神", duration: 280 } ] },
  ],
  "反光镜": [
    { name: "Reflector", type: "EP", date: "2002-05-01", songs: [
      { name: "别上当", duration: 250 }, { name: "天天有时间", duration: 260 }, { name: "韩怂", duration: 250 } ] },
    { name: "成长瞬间", type: "专辑", date: "2007-10-11", songs: [
      { name: "成长瞬间", duration: 270 }, { name: "无烦恼", duration: 260 }, { name: "晚安北京", duration: 280 },
      { name: "果儿", duration: 270 }, { name: "还我蔚蓝", duration: 260 }, { name: "You are my sunshine", duration: 280 },
      { name: "陌生的房间", duration: 270 }, { name: "毒药", duration: 260 }, { name: "无奈", duration: 270 },
      { name: "坦白", duration: 260 }, { name: "路", duration: 280 } ] },
    { name: "释你", type: "EP", date: "2010-04-26", songs: [
      { name: "溶化", duration: 260 }, { name: "只有音乐才是我的解药", duration: 280 }, { name: "嘿！姑娘", duration: 270 },
      { name: "释你", duration: 280 }, { name: "麻痹", duration: 260 }, { name: "长大", duration: 270 } ] },
    { name: "我们的歌", type: "专辑", date: "2013-12-21", rating: 7.8, songs: [
      { name: "Intro", duration: 60 }, { name: "冲", duration: 260 }, { name: "我们的歌", duration: 280 },
      { name: "大海", duration: 270 }, { name: "算了吧", duration: 260 }, { name: "孩子不哭", duration: 280 },
      { name: "约定", duration: 270 }, { name: "那四年", duration: 280 }, { name: "情愿放弃一切", duration: 270 } ] },
    { name: "因为,所以", type: "专辑", date: "2019-02-22", songs: [
      { name: "intro", duration: 60 }, { name: "明天再说", duration: 270 }, { name: "这不是我想要的感觉", duration: 280 },
      { name: "如果不能选择，我们就去歌唱", duration: 270 }, { name: "没人在乎你", duration: 260 },
      { name: "青春的代价", duration: 280 }, { name: "以为", duration: 270 }, { name: "因为所以", duration: 280 },
      { name: "来到你身边", duration: 260 } ] },
  ],
  "脑浊": [
    { name: "踩响失真", type: "专辑", date: "2002-01-01", songs: [
      { name: "Turn On The Distortion", duration: 260 } ] },
    { name: "American Dreamer", type: "专辑", date: "2004-08-01", songs: [
      { name: "American Dreamer", duration: 270 } ] },
    { name: "欢迎来到北京", type: "专辑", date: "2007-03-01", songs: [
      { name: "欢迎来到北京", duration: 270 } ] },
    { name: "歪打正着", type: "专辑", date: "2012-11-01", songs: [
      { name: "歪打正着", duration: 280 }, { name: "碎肉拌面肉啃肉", duration: 270 },
      { name: "八千里路云和月", duration: 280 }, { name: "十年", duration: 270 } ] },
    { name: "皂.白", type: "专辑", date: "2016-01-01", songs: [
      { name: "永远的乌托邦", duration: 270 }, { name: "Ta", duration: 280 } ] },
  ],
  "达达乐队": [
    { name: "天使", type: "专辑", date: "2001-01-01", rating: 8.0, songs: [
      { name: "化学心情下的爱情反应", duration: 294 }, { name: "我的天使", duration: 184 },
      { name: "瞬间", duration: 243 }, { name: "节日快乐", duration: 198 },
      { name: "暴雨", duration: 261 }, { name: "玩偶", duration: 276 },
      { name: "1999", duration: 280 }, { name: "毛病", duration: 249 },
      { name: "荒诞", duration: 143 }, { name: "五分儿", duration: 168 },
      { name: "UNO", duration: 162 } ] },
    { name: "黄金时代", type: "专辑", date: "2003-12-25", rating: 8.2, songs: [
      { name: "不经意间", duration: 280 }, { name: "无双", duration: 270 },
      { name: "巴巴罗萨", duration: 290 }, { name: "Song F", duration: 300 },
      { name: "午夜说再见", duration: 280 }, { name: "浮出水面", duration: 270 },
      { name: "等待", duration: 290 }, { name: "黄金时代", duration: 280 },
      { name: "南方", duration: 300 }, { name: "收音机之恋", duration: 260 },
      { name: "ROCKLIFE", duration: 270 } ] },
  ],
  "果味VC": [
    { name: "双重生命", type: "专辑", date: "2001-01-01", rating: 7.9, songs: [
      { name: "双重生命", duration: 270 } ] },
    { name: "来自VC的礼物", type: "专辑", date: "2005-01-01", songs: [
      { name: "来自VC的礼物", duration: 280 } ] },
    { name: "伟大的复兴", type: "专辑", date: "2008-12-12", songs: [
      { name: "伟大的复兴", duration: 270 } ] },
    { name: "THE SUPERVC", type: "专辑", date: "2017-01-01", songs: [
      { name: "躁不完的青春", duration: 280 }, { name: "带我回家", duration: 270 } ] },
    { name: "新世纪罗曼史", type: "专辑", date: "2020-01-01", songs: [
      { name: "新世纪罗曼史", duration: 280 } ] },
  ],
  "惘闻": [
    { name: "凌水河", type: "专辑", date: "2000-09-01", songs: [ { name: "凌水河", duration: 360 } ] },
    { name: "二十八天失眠日记", type: "专辑", date: "2003-08-01", rating: 7.3, songs: [
      { name: "失眠日记", duration: 300 } ] },
    { name: "Re:Re:Re:", type: "专辑", date: "2005-12-01", rating: 7.1, songs: [
      { name: "Re:Re:Re:", duration: 320 } ] },
    { name: "7 Objects in Another Infinite Space", type: "专辑", date: "2007-04-14", rating: 7.0, songs: [
      { name: "7 Objects", duration: 340 } ] },
    { name: "IV", type: "专辑", date: "2008-05-17", rating: 7.4, songs: [
      { name: "污水塘", duration: 380 }, { name: "Rust Inside", duration: 360 } ] },
    { name: "L&R", type: "专辑", date: "2010-04-09", rating: 6.6, songs: [
      { name: "童篇", duration: 438 }, { name: "近景", duration: 361 } ] },
    { name: "0.7", type: "专辑", date: "2012-06-08", rating: 7.9, songs: [
      { name: "2012", duration: 403 }, { name: "Rain Watcher", duration: 338 },
      { name: "Lonely God", duration: 570 }, { name: "Angelo's Portrait", duration: 459 } ] },
    { name: "八匹马", type: "专辑", date: "2014-06-03", rating: 7.6, songs: [
      { name: "北方向北", duration: 380 }, { name: "大连天空", duration: 400 }, { name: "第八层地狱", duration: 460 },
      { name: "万佛朝宗", duration: 420 }, { name: "逃离母宇宙", duration: 440 }, { name: "酒神经", duration: 400 },
      { name: "最后旅程", duration: 460 }, { name: "Welcome to Utopia", duration: 480 } ] },
    { name: "岁月鸿沟", type: "专辑", date: "2016-04-25", rating: 7.5, songs: [
      { name: "岁月鸿沟", duration: 380 } ] },
    { name: "看不见的城市", type: "专辑", date: "2018-07-02", rating: 7.5, songs: [
      { name: "破晓", duration: 420 }, { name: "水之湄", duration: 360 },
      { name: "大连,勿语", duration: 480 }, { name: "老虎棒子鸡", duration: 600 } ] },
    { name: "十万个为什么", type: "专辑", date: "2020-09-23", rating: 6.9, songs: [
      { name: "醉忘川", duration: 400 }, { name: "孤独的鸟", duration: 380 } ] },
    { name: "辛丑壬寅", type: "专辑", date: "2022-01-01", rating: 6.6, songs: [
      { name: "野火", duration: 400 }, { name: "辛丑", duration: 380 } ] },
  ],
  "沼泽乐队": [
    { name: "沧浪星", type: "专辑", date: "2010-12-18", rating: 7.0, songs: [
      { name: "沧浪星", duration: 320 } ] },
    { name: "1911", type: "专辑", date: "2011-12-31", rating: 8.4, songs: [
      { name: "1911 第一回", duration: 938 }, { name: "1911 第二回", duration: 793 },
      { name: "1911 第三回", duration: 508 }, { name: "1911 第四回", duration: 1399 } ] },
    { name: "远", type: "专辑", date: "2013-01-01", rating: 6.4, songs: [
      { name: "远", duration: 320 } ] },
    { name: "琴晚", type: "专辑", date: "2015-01-01", rating: 7.0, songs: [
      { name: "琴晚", duration: 320 } ] },
    { name: "争鸣", type: "专辑", date: "2018-01-01", rating: 8.7, songs: [
      { name: "争鸣", duration: 2580 } ] },
  ],
  "刺猬乐队": [
    { name: "Happy Idle Kid", type: "专辑", date: "2006-03-12", songs: [
      { name: "快乐的懒孩子", duration: 280 } ] },
    { name: "噪音袭击世界", type: "专辑", date: "2007-09-29", songs: [
      { name: "噪音袭击世界", duration: 290 } ] },
    { name: "白日梦蓝", type: "专辑", date: "2009-03-01", rating: 8.1, songs: [
      { name: "白日梦蓝", duration: 296 }, { name: "春天来了", duration: 330 }, { name: "电影", duration: 387 },
      { name: "二十四小时摇滚聚会", duration: 288 }, { name: "最后一班车", duration: 322 }, { name: "金色年华，无限伤感", duration: 252 } ] },
    { name: "甜蜜与杀害", type: "专辑", date: "2011-03-18", songs: [
      { name: "甜蜜与杀害", duration: 280 } ] },
    { name: "阳光、欢乐、枪", type: "专辑", date: "2012-04-05", songs: [
      { name: "Sun Fun Gun", duration: 270 } ] },
    { name: "幻象波普星", type: "专辑", date: "2014-04-25", songs: [
      { name: "幻象波普星", duration: 290 } ] },
    { name: "生之响往", type: "专辑", date: "2018-04-25", rating: 8.0, songs: [
      { name: "火车驶向云外，梦安魂于九霄", duration: 320 }, { name: "生之响往", duration: 280 } ] },
    { name: "赤子白仙", type: "专辑", date: "2020-07-13", songs: [
      { name: "赤子白仙", duration: 290 } ] },
  ],
  "逃跑计划": [
    { name: "带我离开", type: "EP", date: "2008-08-08", songs: [
      { name: "Take Me Away", duration: 206 }, { name: "Is This Love", duration: 219 },
      { name: "08年我们结婚", duration: 338 }, { name: "再见再见", duration: 276 } ] },
    { name: "世界", type: "专辑", date: "2012-07-01", rating: 8.0, songs: [
      { name: "Is This Love", duration: 216 }, { name: "阳光照进回忆里", duration: 321 },
      { name: "Take Me Away", duration: 208 }, { name: "一万次悲伤", duration: 255 },
      { name: "Apple", duration: 229 }, { name: "08年我们结婚", duration: 278 },
      { name: "夜空中最亮的星", duration: 252 }, { name: "哪里是你的拥抱", duration: 415 },
      { name: "Chemical Bus", duration: 250 }, { name: "再见 再见", duration: 329 } ] },
    { name: "时代之梦", type: "EP", date: "2016-01-01", songs: [
      { name: "时代之梦", duration: 280 }, { name: "重来", duration: 270 } ] },
    { name: "回到海洋", type: "专辑", date: "2021-09-06", songs: [
      { name: "梦中的你", duration: 280 }, { name: "海鸥", duration: 290 }, { name: "你的爱情", duration: 270 } ] },
  ],
  "布衣乐队": [
    { name: "那么久", type: "专辑", date: "2007-12-18", rating: 7.8, songs: [
      { name: "我爱你亲爱的姑娘", duration: 229 }, { name: "羊肉面", duration: 280 }, { name: "丢", duration: 334 } ] },
    { name: "布衣", type: "专辑", date: "2009-09-26", rating: 8.0, songs: [
      { name: "三峰", duration: 291 }, { name: "遥远的地方", duration: 329 }, { name: "粼蓝曲", duration: 405 } ] },
    { name: "秋天", type: "专辑", date: "2010-11-18", songs: [
      { name: "秋天", duration: 280 } ] },
    { name: "出发", type: "专辑", date: "2013-10-18", songs: [
      { name: "出发", duration: 280 } ] },
    { name: "小怪兽", type: "专辑", date: "2018-09-03", songs: [
      { name: "小怪兽", duration: 280 } ] },
    { name: "八宝茶", type: "专辑", date: "2021-03-14", songs: [
      { name: "好风", duration: 366 }, { name: "云", duration: 280 } ] },
  ],
  "扭曲的机器": [
    { name: "扭曲的机器", type: "专辑", date: "2000-01-01", songs: [
      { name: "自由的生活", duration: 280 }, { name: "没人给你面子", duration: 270 } ] },
    { name: "重返地下", type: "专辑", date: "2003-01-01", songs: [
      { name: "新世纪", duration: 280 }, { name: "扭曲的机器", duration: 270 } ] },
    { name: "存在", type: "专辑", date: "2007-01-01", songs: [
      { name: "存在的意义", duration: 280 }, { name: "镜子中", duration: 270 } ] },
    { name: "XXX", type: "专辑", date: "2015-01-01", songs: [
      { name: "天堂里", duration: 280 }, { name: "三十", duration: 270 } ] },
  ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
    { name: "无界", type: "专辑", date: "2020-07-27", songs: [
      { name: "黎明之下", duration: 280 }, { name: "亚特兰蒂斯", duration: 290 },
      { name: "巨鲸落", duration: 280 } ] },
  ],
  "郁乐队": [
    { name: "日落伊甸园", type: "EP", date: "2009-01-01", songs: [
      { name: "仙女座", duration: 280 }, { name: "悲伤致死", duration: 270 } ] },
    { name: "悲伤之旅", type: "专辑", date: "2012-01-01", rating: 7.8, songs: [
      { name: "悲伤之旅", duration: 280 }, { name: "仙女座", duration: 290 },
      { name: "针锋相对", duration: 270 }, { name: "Die From Sorrow", duration: 300 } ] },
    { name: "异海之王", type: "专辑", date: "2016-01-01", songs: [
      { name: "异海之王", duration: 290 } ] },
    { name: "盛大的狂欢", type: "专辑", date: "2024-02-19", songs: [
      { name: "盛大的狂欢", duration: 280 } ] },
  ],
  "声音玩具": [
    { name: "最美妙的旅行", type: "专辑", date: "2003-12-01", rating: 8.4, songs: [
      { name: "星期天大街", duration: 300 }, { name: "秘密的爱", duration: 280 },
      { name: "爱玲", duration: 290 }, { name: "不朽", duration: 660 },
      { name: "伟大说谎者", duration: 280 } ] },
    { name: "爱是昂贵的", type: "专辑", date: "2015-01-01", rating: 8.5, songs: [
      { name: "请问哪里才能买到晶体管收音机", duration: 300 }, { name: "明天你依旧在我身旁", duration: 280 },
      { name: "生命", duration: 290 }, { name: "抚琴小夜曲", duration: 280 } ] },
    { name: "劳动之余", type: "专辑", date: "2021-04-30", rating: 8.2, songs: [
      { name: "你的城市", duration: 280 }, { name: "昨夜我飞向遥远的火星", duration: 290 },
      { name: "没有人能够比我们更接近对方", duration: 300 }, { name: "爱是昂贵的", duration: 280 } ] },
  ],
  "秘密行动": [
    { name: "奇怪的老式娱乐", type: "EP", date: "2013-10-01", songs: [
      { name: "奇怪的老式娱乐", duration: 280 } ] },
    { name: "Loop 循环", type: "专辑", date: "2015-08-01", rating: 7.8, songs: [
      { name: "Loop", duration: 300 } ] },
    { name: "碎片", type: "专辑", date: "2019-01-01", songs: [
      { name: "碎片", duration: 290 } ] },
  ],
  "大波浪": [
    { name: "THE BIG WAVE", type: "专辑", date: "2016-09-01", rating: 7.8, songs: [
      { name: "Fill in", duration: 280 }, { name: "Not Just Imagining", duration: 270 } ] },
    { name: "蓝色的脸", type: "专辑", date: "2018-01-01", rating: 8.0, songs: [
      { name: "No Such Disease", duration: 280 }, { name: "他的方式", duration: 270 } ] },
    { name: "新逻辑", type: "专辑", date: "2021-01-01", songs: [
      { name: "新逻辑", duration: 280 } ] },
    { name: "不止一面", type: "专辑", date: "2021-01-01", songs: [
      { name: "不止一面", duration: 280 } ] },
  ],
  "房东的猫": [
    { name: "房东的猫", type: "专辑", date: "2017-01-26", rating: 7.8, songs: [
      { name: "美好事物", duration: 280 }, { name: "秋酿", duration: 260 }, { name: "往往", duration: 270 } ] },
    { name: "柔软", type: "专辑", date: "2018-04-01", songs: [
      { name: "柔软", duration: 280 }, { name: "如常", duration: 270 } ] },
    { name: "这是你想要的生活吗", type: "专辑", date: "2020-04-18", songs: [
      { name: "这是你想要的生活吗", duration: 280 }, { name: "孤独之书", duration: 270 } ] },
    { name: "世界/青年", type: "专辑", date: "2023-05-04", songs: [
      { name: "城市动物园", duration: 280 }, { name: "慢游", duration: 270 } ] },
  ],
  "鹿先森乐队": [
    { name: "所有的酒, 都不如你", type: "专辑", date: "2016-01-01", rating: 7.5, songs: [
      { name: "春风十里", duration: 375 }, { name: "晚安", duration: 280 } ] },
    { name: "华年", type: "专辑", date: "2018-01-01", songs: [
      { name: "华年", duration: 280 }, { name: "之间", duration: 270 } ] },
    { name: "在心碎处", type: "专辑", date: "2020-01-01", songs: [
      { name: "再唱一次这首歌好吗?", duration: 280 } ] },
    { name: "滔滔", type: "专辑", date: "2023-01-01", songs: [
      { name: "生之河", duration: 280 } ] },
  ],
  "低苦艾": [
    { name: "苦艾酒", type: "EP", date: "2006-01-01", songs: [
      { name: "苦艾酒", duration: 280 } ] },
    { name: "低苦艾", type: "专辑", date: "2007-05-06", songs: [
      { name: "低苦艾", duration: 280 } ] },
    { name: "我们不由自主的亲吻对方", type: "专辑", date: "2008-01-01", rating: 7.8, songs: [
      { name: "候鸟", duration: 280 }, { name: "大圣", duration: 290 }, { name: "谁", duration: 270 } ] },
    { name: "兰州 兰州", type: "专辑", date: "2011-09-30", rating: 8.0, songs: [
      { name: "兰州 兰州", duration: 290 } ] },
    { name: "守望者", type: "专辑", date: "2013-01-01", songs: [
      { name: "守望者", duration: 280 } ] },
    { name: "一天", type: "专辑", date: "2017-01-01", songs: [
      { name: "一天", duration: 280 } ] },
    { name: "驰名商标", type: "专辑", date: "2020-01-01", songs: [
      { name: "驰名商标", duration: 280 } ] },
  ],
  "丢火车": [
    { name: "丢火车", type: "EP", date: "2008-01-01", songs: [
      { name: "茶底世界", duration: 281 } ] },
    { name: "火车日记", type: "专辑", date: "2011-12-20", songs: [
      { name: "火车日记", duration: 322 }, { name: "白兰鸽巡游记", duration: 240 } ] },
    { name: "游歌", type: "EP", date: "2014-10-21", songs: [
      { name: "游歌", duration: 280 } ] },
    { name: "浮生", type: "专辑", date: "2017-10-26", songs: [
      { name: "索菲亚", duration: 280 }, { name: "浮生", duration: 290 },
      { name: "Hello Hello", duration: 270 }, { name: "晚安", duration: 280 } ] },
  ],
  "旅行团": [
    { name: "来福胶泥", type: "专辑", date: "2008-05-08", rating: 7.9, songs: [
      { name: "回到巴巴拉拉的城堡", duration: 280 }, { name: "The Story Of Sun and I", duration: 270 },
      { name: "罗马假日", duration: 280 }, { name: "中央花园", duration: 270 } ] },
    { name: "等你吃饭", type: "EP", date: "2009-04-17", songs: [
      { name: "等你吃饭", duration: 260 }, { name: "悠长假期", duration: 270 } ] },
    { name: "Wonderful Day", type: "专辑", date: "2011-06-24", songs: [
      { name: "利物浦", duration: 280 }, { name: "柳江", duration: 270 }, { name: "厦门之夏", duration: 280 } ] },
    { name: "于是我不再唱歌", type: "专辑", date: "2013-12-28", rating: 8.0, songs: [
      { name: "于是我不再唱歌", duration: 295 }, { name: "Bye Bye", duration: 220 },
      { name: "小龙人", duration: 200 }, { name: "天后舞厅", duration: 206 },
      { name: "北京夏夜", duration: 228 } ] },
    { name: "B-SIDE", type: "专辑", date: "2015-05-15", songs: [
      { name: "生命是场马拉松", duration: 280 }, { name: "悲伤珊瑚群", duration: 270 } ] },
    { name: "10 Day's", type: "专辑", date: "2015-12-21", songs: [
      { name: "逝去的歌", duration: 290 }, { name: "父亲", duration: 280 }, { name: "新开世界", duration: 270 } ] },
    { name: "永远都会在", type: "专辑", date: "2017-07-06", rating: 8.1, songs: [
      { name: "永远都会在", duration: 280 }, { name: "你", duration: 270 }, { name: "西雅图阳光", duration: 280 } ] },
    { name: "感+", type: "专辑", date: "2018-06-21", songs: [
      { name: "夏之恋", duration: 280 }, { name: "圣地亚哥", duration: 270 }, { name: "我的蒙娜丽莎", duration: 280 } ] },
    { name: "似近似远", type: "专辑", date: "2020-09-16", songs: [
      { name: "红色的河", duration: 290 } ] },
    { name: "似你似我", type: "专辑", date: "2020-11-30", songs: [
      { name: "天涯路口", duration: 280 }, { name: "阿奶", duration: 270 } ] },
  ],
  "落日飞车": [
    { name: "Bossa Nova", type: "专辑", date: "2011-01-01", songs: [
      { name: "Bossa Nova", duration: 280 } ] },
    { name: "金桔希子", type: "EP", date: "2016-01-01", rating: 8.0, songs: [
      { name: "My Jinji", duration: 300 }, { name: "Burgundy Red", duration: 280 } ] },
    { name: "Cassa Nova", type: "专辑", date: "2018-01-01", rating: 8.1, songs: [
      { name: "Slow", duration: 290 } ] },
    { name: "Soft Storm", type: "专辑", date: "2020-01-01", songs: [
      { name: "Candlelight", duration: 280 } ] },
  ],
  "声音碎片": [
    { name: "世界是噪音的花园", type: "专辑", date: "2002-01-01", songs: [
      { name: "世界是噪音的花园", duration: 290 } ] },
    { name: "优美的低于生活", type: "专辑", date: "2005-01-01", rating: 8.1, songs: [
      { name: "优美的低于生活", duration: 290 }, { name: "从现在开始", duration: 280 } ] },
    { name: "把光芒洒向更开阔的地方", type: "专辑", date: "2008-09-30", rating: 8.3, songs: [
      { name: "情歌而已", duration: 290 }, { name: "天边一朵云", duration: 280 },
      { name: "黑白电影", duration: 280 }, { name: "陌生城市的早晨", duration: 300 },
      { name: "顺流而下", duration: 280 } ] },
    { name: "没有鸟鸣,关上窗吧", type: "专辑", date: "2019-01-01", rating: 8.2, songs: [
      { name: "送流水", duration: 300 }, { name: "致我的迷茫兄弟", duration: 280 },
      { name: "少年游", duration: 290 }, { name: "神游", duration: 280 } ] },
    { name: "有限身 无穷念", type: "专辑", date: "2022-01-01", songs: [
      { name: "有限身无穷念", duration: 280 } ] },
  ],
};
