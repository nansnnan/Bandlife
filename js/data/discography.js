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
       { name: "异乡客", duration: 667 }, { name: "路桥", duration: 489 }, { name: "你的幻境", duration: 277 },
       { name: "黑色幽默", duration: 262 }, { name: "演义", duration: 584 }, { name: "时间", duration: 421 },
       { name: "缘生缘灭", duration: 492 }, { name: "童年", duration: 299 }, { name: "时间 (Live)", duration: 419 },
       { name: "送别", duration: 268 } ] },
    { name: "浪漫骑士", type: "专辑", date: "2008-06-13", songs: [
       { name: "封禅祭", duration: 413 }, { name: "承诺", duration: 316 }, { name: "追溯", duration: 300 },
       { name: "绝望致谎言", duration: 281 }, { name: "大风歌", duration: 381 }, { name: "快乐的忧愁", duration: 365 },
       { name: "浪漫骑士", duration: 392 }, { name: "嚎叫列车", duration: 369 }, { name: "酒狂", duration: 287 },
       { name: "路", duration: 305 } ] },
    { name: "芒刺", type: "专辑", date: "2013-11-08", songs: [
       { name: "异乡客岚池", duration: 463 }, { name: "紫叶", duration: 308 }, { name: "斑马线", duration: 375 },
       { name: "沉浮", duration: 357 }, { name: "大象不抱怨", duration: 307 }, { name: "麋鹿的眼泪", duration: 281 },
       { name: "梅花赐", duration: 245 }, { name: "睡莲", duration: 495 }, { name: "响尾蛇", duration: 125 } ] },
    { name: "沉浮", type: "EP", date: "2010-03-28", songs: [ { name: "沉浮", duration: 300 } ] },
      { name: "铁塔", type: "专辑", date: "2027-10-06", songs: [
      { name: "铁塔", duration: 226 }, { name: "烈焰", duration: 411 }, { name: "巅峰高原", duration: 279 },
      { name: "圣坛", duration: 324 }, { name: "灰狼", duration: 389 }, { name: "铸剑灰烬", duration: 335 },
      { name: "极北", duration: 333 }, { name: "铁爪", duration: 224 }, { name: "铸剑", duration: 351 } ] },
    { name: "巅峰", type: "专辑", date: "2032-07-01", songs: [
      { name: "巅峰", duration: 319 }, { name: "火山", duration: 232 }, { name: "王座", duration: 313 },
      { name: "铁魂", duration: 255 }, { name: "巨浪", duration: 356 }, { name: "长矛", duration: 371 },
      { name: "孤城铁丘", duration: 503 }, { name: "高原苍穹", duration: 268 }, { name: "雷霆", duration: 334 },
      { name: "绝境铁矛", duration: 342 } ] },
    { name: "铁棺孤城", type: "专辑", date: "2036-01-03", songs: [
      { name: "铁棺孤城", duration: 386 }, { name: "沉默的铁渊", duration: 282 }, { name: "深夜的灰烬", duration: 389 },
      { name: "铁幕", duration: 364 }, { name: "冰川极北", duration: 309 }, { name: "铁鳞亡魂", duration: 365 },
      { name: "深渊", duration: 315 }, { name: "寒霜", duration: 329 }, { name: "熔炉", duration: 560 } ] },
    { name: "铁谷", type: "专辑", date: "2040-08-05", songs: [
      { name: "铁谷", duration: 215 }, { name: "铁刺", duration: 269 }, { name: "铁翼铁牢", duration: 383 },
      { name: "铁律", duration: 384 }, { name: "火海", duration: 391 }, { name: "铁翼", duration: 311 },
      { name: "雷鸣", duration: 344 }, { name: "漫长的重盾", duration: 505 } ] },
    { name: "暗狱", type: "EP", date: "2044-09-09", songs: [
      { name: "暗狱", duration: 246 }, { name: "遥远的铁刺", duration: 335 }, { name: "纪念碑", duration: 349 },
      { name: "铁鳞", duration: 402 } ] },
    { name: "无名的荒原", type: "EP", date: "2049-04-07", songs: [
      { name: "无名的荒原", duration: 364 }, { name: "重盾", duration: 368 }, { name: "久违的铁翼", duration: 380 },
      { name: "孤鹰苍穹", duration: 241 }, { name: "铁棺", duration: 377 } ] },
    ],
  "黑豹乐队": [
    { name: "黑豹", type: "专辑", date: "1992-12-22", rating: 9.0, songs: [
      { name: "无地自容", duration: 338 }, { name: "Take Care", duration: 362 }, { name: "体会", duration: 285 },
      { name: "别来纠缠我", duration: 285 }, { name: "靠近我", duration: 369 }, { name: "Don't Break My Heart", duration: 316 },
      { name: "脸谱", duration: 294 }, { name: "怕你为自己流泪", duration: 294 }, { name: "眼光里", duration: 282 },
      { name: "别去糟蹋", duration: 448 } ] },
    { name: "光芒之神", type: "专辑", date: "1993-09-21", songs: [
       { name: "光芒之神", duration: 318 }, { name: "同在一片天空下", duration: 322 }, { name: "我问", duration: 291 },
       { name: "你就是你", duration: 279 }, { name: "美丽的天堂 没有悲伤", duration: 394 }, { name: "海市蜃楼", duration: 395 },
       { name: "渴望的地方", duration: 356 }, { name: "我不想说", duration: 313 }, { name: "绿色劫难", duration: 344 } ] },
    { name: "无是无非", type: "专辑", date: "1996-02-11", songs: [
       { name: "无是无非", duration: 350 }, { name: "放心走吧", duration: 377 }, { name: "谎言", duration: 237 },
       { name: "天外有天", duration: 311 }, { name: "黑夜没有陌生", duration: 256 }, { name: "谁最爱我", duration: 336 },
       { name: "为所有爱我们的人", duration: 390 }, { name: "不要指望我", duration: 255 }, { name: "呼唤", duration: 325 },
       { name: "朝前走", duration: 316 } ] },
    { name: "黑豹IV", type: "专辑", date: "1998-05-01", songs: [
      { name: "我们这一代", duration: 300 }, { name: "不能让我的烦恼没机会表白", duration: 310 },
      { name: "逃离", duration: 280 }, { name: "已足够", duration: 270 } ] },
    { name: "黑豹V", type: "专辑", date: "2004-07-22", songs: [
       { name: "生活方式", duration: 236 }, { name: "空", duration: 245 }, { name: "孤焰烈火", duration: 303 },
       { name: "I Don't Want To Say Goodbye", duration: 322 }, { name: "错觉", duration: 336 },
       { name: "未知的世纪", duration: 260 }, { name: "旋转", duration: 280 }, { name: "继续地飞", duration: 366 },
       { name: "透明的影子", duration: 274 }, { name: "照亮我心", duration: 249 } ] },
    { name: "我们是谁", type: "专辑", date: "2013-07-11", songs: [
       { name: "枷锁", duration: 225 }, { name: "潮汐", duration: 251 }, { name: "寻找", duration: 235 },
       { name: "不再沉默", duration: 215 }, { name: "虎口", duration: 214 }, { name: "洒脱", duration: 237 },
       { name: "一个人", duration: 264 }, { name: "奔跑", duration: 224 }, { name: "It's My Time", duration: 213 },
       { name: "我们", duration: 292 }, { name: "一个人 (钢琴版)", duration: 136 } ] },
    { name: "本色", type: "专辑", date: "2017-04-20", songs: [
      { name: "How do we find a way", duration: 240 }, { name: "键盘·狭", duration: 221 }, { name: "孤独的灵魂", duration: 246 },
      { name: "炙热", duration: 187 }, { name: "Back to rock", duration: 231 }, { name: "低头士", duration: 140 },
      { name: "无畏", duration: 197 }, { name: "较量", duration: 196 }, { name: "战", duration: 179 },
      { name: "干杯", duration: 222 }, { name: "放不开你", duration: 230 }, { name: "兄弟", duration: 210 } ] },
    { name: "尽余欢", type: "EP", date: "2015-12-14", songs: [ { name: "送别", duration: 280 }, { name: "兄弟", duration: 270 } ] },
      { name: "荒径", type: "EP", date: "2028-02-14", songs: [
      { name: "荒径", duration: 318 }, { name: "久违的旧梦", duration: 279 }, { name: "铁笼", duration: 252 },
      { name: "遥远的野火", duration: 448 }, { name: "街角星光", duration: 272 }, { name: "久违的甲板", duration: 236 } ] },
    { name: "走廊", type: "专辑", date: "2031-10-17", songs: [
      { name: "走廊", duration: 244 }, { name: "风筝暮色", duration: 268 }, { name: "漫长的尘埃", duration: 327 },
      { name: "天桥", duration: 266 }, { name: "暗巷潮声", duration: 324 }, { name: "暴雨汽笛", duration: 524 },
      { name: "暮色", duration: 273 }, { name: "环流站台", duration: 282 }, { name: "潮间带", duration: 262 },
      { name: "狂风", duration: 203 }, { name: "废墟", duration: 268 } ] },
    { name: "铁轨", type: "专辑", date: "2035-04-20", songs: [
      { name: "铁轨", duration: 300 }, { name: "冷月", duration: 294 }, { name: "曦光", duration: 302 },
      { name: "逆光", duration: 305 }, { name: "逆流", duration: 312 }, { name: "风筝", duration: 259 },
      { name: "屋顶", duration: 328 }, { name: "铁道", duration: 335 }, { name: "镜面", duration: 160 },
      { name: "回声壁", duration: 297 } ] },
    { name: "野火暗号", type: "专辑", date: "2038-07-17", songs: [
      { name: "野火暗号", duration: 270 }, { name: "杂草", duration: 282 }, { name: "电线", duration: 241 },
      { name: "晨雾", duration: 287 }, { name: "渡轮", duration: 291 }, { name: "夜雾极夜", duration: 313 },
      { name: "夜车", duration: 293 }, { name: "霜降", duration: 237 }, { name: "沙丘", duration: 280 },
      { name: "涂鸦", duration: 284 }, { name: "台阶", duration: 256 } ] },
    { name: "暗涌", type: "专辑", date: "2041-11-04", songs: [
      { name: "暗涌", duration: 304 }, { name: "站台", duration: 334 }, { name: "闪电", duration: 280 },
      { name: "遥远的荒野", duration: 335 }, { name: "天光", duration: 280 }, { name: "雪线", duration: 301 },
      { name: "灯塔", duration: 205 } ] },
    { name: "信号灯", type: "专辑", date: "2045-11-16", songs: [
      { name: "信号灯", duration: 305 }, { name: "路口", duration: 218 }, { name: "沉默的黑巷", duration: 262 },
      { name: "车窗", duration: 289 }, { name: "环流", duration: 274 }, { name: "锈迹", duration: 253 },
      { name: "星光锈迹", duration: 287 }, { name: "旧巷", duration: 309 }, { name: "游园", duration: 278 },
      { name: "深夜的环流", duration: 231 } ] },
    { name: "荒径雨夜", type: "专辑", date: "2049-08-01", songs: [
      { name: "荒径雨夜", duration: 296 }, { name: "沉默的街灯", duration: 219 }, { name: "风铃", duration: 303 },
      { name: "逆旅", duration: 258 }, { name: "深夜的星光", duration: 303 }, { name: "沉默的暮光", duration: 306 },
      { name: "夜雾", duration: 269 }, { name: "深夜", duration: 303 }, { name: "灰烬路口", duration: 265 },
      { name: "无名的街角", duration: 252 } ] },
    ],
  "零点乐队": [
    { name: "别误会", type: "专辑", date: "1995-12-01", rating: 7.8, songs: [
       { name: "站起来", duration: 266 }, { name: "承受", duration: 322 }, { name: "别误会", duration: 324 },
       { name: "晕了醒了", duration: 323 }, { name: "爱的谎言", duration: 357 }, { name: "Don't Cry", duration: 376 },
       { name: "挥挥手", duration: 282 }, { name: "一座桥梁", duration: 341 }, { name: "送亲歌", duration: 528 } ] },
    { name: "永恒的起点", type: "专辑", date: "1997-01-01", songs: [
       { name: "放弃", duration: 310 }, { name: "别让我离开你", duration: 271 }, { name: "爱不爱我", duration: 329 },
       { name: "面具", duration: 309 }, { name: "永恒的起点", duration: 325 }, { name: "共同的家", duration: 391 },
       { name: "一切都会好", duration: 356 }, { name: "I am sorry 别误会", duration: 310 }, { name: "过去", duration: 386 } ] },
    { name: "每一夜每一天", type: "专辑", date: "1998-01-01", songs: [
       { name: "粉墨人生", duration: 222 }, { name: "回心转意", duration: 350 }, { name: "该让我如何爱你", duration: 281 },
       { name: "别和他一样", duration: 237 }, { name: "放开我", duration: 261 }, { name: "离开", duration: 307 },
       { name: "每一夜 每一天", duration: 271 }, { name: "燃烧", duration: 210 }, { name: "睁开你的双眼", duration: 221 } ] },
    { name: "00:00:00", type: "专辑", date: "1999-09-21", songs: [
       { name: "无依无靠", duration: 258 }, { name: "等你把梦做完", duration: 278 }, { name: "爱太难", duration: 297 },
       { name: "回到从前", duration: 269 }, { name: "记忆中的天空", duration: 309 }, { name: "Bar Street", duration: 276 },
       { name: "往日", duration: 300 }, { name: "永远不说再见", duration: 306 }, { name: "梦", duration: 379 } ] },
    { name: "没有什么不可以", type: "专辑", date: "2002-01-20", songs: [
       { name: "Don't Runaway", duration: 236 }, { name: "没有什么不可以", duration: 301 }, { name: "飘", duration: 228 },
       { name: "冒险家", duration: 262 }, { name: "相信自己", duration: 213 }, { name: "梦游", duration: 303 },
       { name: "我要", duration: 303 }, { name: "好好过吧", duration: 218 }, { name: "战胜自己", duration: 257 } ] },
    { name: "越来越", type: "专辑", date: "2003-09-01", songs: [
       { name: "从零开始", duration: 251 }, { name: "越来越", duration: 252 }, { name: "你的爱给了谁", duration: 250 },
       { name: "无处可逃", duration: 218 }, { name: "玩够了没有", duration: 330 }, { name: "祝福", duration: 333 },
       { name: "分手一周年", duration: 244 }, { name: "说声谢谢", duration: 223 }, { name: "怎么过", duration: 253 },
       { name: "跟我跳起来", duration: 268 } ] },
    { name: "风雷动", type: "专辑", date: "2005-01-01", songs: [
       { name: "打虎上山", duration: 162 }, { name: "让我们荡起双桨", duration: 210 }, { name: "襟裳岬", duration: 302 },
       { name: "天上掉下林妹妹", duration: 173 }, { name: "多谢了", duration: 222 }, { name: "谁说女子不如男", duration: 175 },
       { name: "牧歌", duration: 230 }, { name: "希望的田野", duration: 250 }, { name: "跟着感觉走", duration: 226 },
       { name: "过了今天会永远", duration: 263 } ] },
    { name: "多么爱你，你知道吗？！", type: "专辑", date: "2014-09-17", songs: [
       { name: "相信我", duration: 285 }, { name: "多么爱你", duration: 297 }, { name: "当思念变成回忆", duration: 297 },
       { name: "无论我走到哪里总会想起你", duration: 235 }, { name: "好寂寞", duration: 340 }, { name: "爱不离", duration: 307 },
       { name: "冲出霾伏", duration: 306 }, { name: "零点快乐", duration: 258 }, { name: "我曾以为", duration: 286 } ] },
    { name: "我还爱着你", type: "专辑", date: "2016-08-01", songs: [
       { name: "我还爱着你", duration: 265 }, { name: "欲望 付出", duration: 262 }, { name: "唱一首歌给所有的朋友", duration: 283 },
       { name: "永远一起走", duration: 187 }, { name: "救赎", duration: 312 }, { name: "想你2016", duration: 272 },
       { name: "风暴", duration: 203 }, { name: "一切会好的", duration: 284 }, { name: "Flying Free", duration: 158 } ] },
      { name: "铃铛", type: "专辑", date: "2027-06-17", songs: [
      { name: "铃铛", duration: 293 }, { name: "琥珀", duration: 222 }, { name: "深夜的课桌", duration: 272 },
      { name: "蝴蝶结", duration: 284 }, { name: "风车", duration: 435 }, { name: "银河", duration: 337 },
      { name: "课桌", duration: 286 }, { name: "葡萄柚", duration: 269 }, { name: "棉花", duration: 280 },
      { name: "草莓", duration: 315 } ] },
    { name: "信笺", type: "专辑", date: "2029-10-27", songs: [
      { name: "信笺", duration: 287 }, { name: "深夜的气球", duration: 255 }, { name: "花火（花火）", duration: 294 },
      { name: "雨伞", duration: 296 }, { name: "蓝调", duration: 211 }, { name: "信笺笔袋", duration: 230 },
      { name: "漫长的单车", duration: 271 }, { name: "倒计时", duration: 232 } ] },
    { name: "花束", type: "专辑", date: "2032-06-19", songs: [
      { name: "花束", duration: 331 }, { name: "晚风", duration: 281 }, { name: "糖果", duration: 234 },
      { name: "棉花秋千", duration: 283 }, { name: "月亮睫毛", duration: 326 }, { name: "香草", duration: 185 },
      { name: "柠檬水", duration: 274 }, { name: "晚霞", duration: 222 }, { name: "萤火", duration: 459 },
      { name: "余光", duration: 294 }, { name: "微风", duration: 305 } ] },
    { name: "初恋暖阳", type: "专辑", date: "2034-09-30", songs: [
      { name: "初恋暖阳", duration: 272 }, { name: "晴天", duration: 243 }, { name: "浅蓝", duration: 292 },
      { name: "沙滩", duration: 265 }, { name: "甜梦", duration: 248 }, { name: "童话", duration: 275 },
      { name: "暖阳", duration: 287 } ] },
    { name: "雨伞风筝", type: "专辑", date: "2037-06-14", songs: [
      { name: "雨伞风筝", duration: 266 }, { name: "奶昔课桌", duration: 285 }, { name: "遥远的摩天轮", duration: 287 },
      { name: "沉默的气球", duration: 304 }, { name: "深夜的海岸", duration: 296 }, { name: "沉默的雨伞", duration: 235 },
      { name: "少女", duration: 272 }, { name: "秋千", duration: 266 }, { name: "星期天", duration: 218 },
      { name: "拥抱", duration: 319 }, { name: "银河流星", duration: 218 } ] },
    { name: "深夜的花火", type: "专辑", date: "2039-10-17", songs: [
      { name: "深夜的花火", duration: 254 }, { name: "盛夏", duration: 257 }, { name: "深夜的蝉鸣", duration: 268 },
      { name: "教室（教室）", duration: 259 }, { name: "沉默的校门", duration: 405 }, { name: "白裙", duration: 306 },
      { name: "课本", duration: 169 }, { name: "沉默的蝉鸣", duration: 279 }, { name: "操场", duration: 268 },
      { name: "棉花糖", duration: 268 } ] },
    { name: "深夜的秋千", type: "专辑", date: "2042-01-16", songs: [
      { name: "深夜的秋千", duration: 246 }, { name: "睫毛", duration: 268 }, { name: "云朵", duration: 218 },
      { name: "心跳初恋", duration: 312 }, { name: "沉默的棉花", duration: 289 }, { name: "月亮柠檬茶", duration: 308 },
      { name: "日记", duration: 244 }, { name: "心跳", duration: 287 } ] },
    { name: "玻璃糖甜梦", type: "专辑", date: "2044-07-05", songs: [
      { name: "玻璃糖甜梦", duration: 254 }, { name: "蜜糖", duration: 279 }, { name: "遥远的蓝调", duration: 263 },
      { name: "裙摆", duration: 287 }, { name: "汽水", duration: 285 }, { name: "漫游", duration: 273 },
      { name: "许愿", duration: 249 }, { name: "星群", duration: 277 }, { name: "棉花糖蝉鸣", duration: 288 },
      { name: "贝壳橘子", duration: 290 }, { name: "雨靴棉花糖", duration: 304 } ] },
    { name: "音乐盒", type: "专辑", date: "2047-06-11", songs: [
      { name: "音乐盒", duration: 241 }, { name: "纸飞机蝴蝶结", duration: 287 }, { name: "课桌蝴蝶结", duration: 257 },
      { name: "沉默的流星", duration: 220 }, { name: "音乐盒气球", duration: 264 }, { name: "雨靴", duration: 440 },
      { name: "晴天娃娃", duration: 286 } ] },
    { name: "篮球", type: "专辑", date: "2049-11-23", songs: [
      { name: "篮球", duration: 444 }, { name: "沉默的少女", duration: 295 }, { name: "沉默的葡萄柚", duration: 274 },
      { name: "漫游暖阳", duration: 306 }, { name: "萤火篮球", duration: 267 }, { name: "漫长的香草", duration: 276 },
      { name: "薄荷", duration: 204 }, { name: "奶昔", duration: 292 } ] },
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
       { name: "盛开", duration: 188 }, { name: "博卡拉", duration: 252 }, { name: "改变你的生活", duration: 227 },
       { name: "最后一班列车", duration: 265 }, { name: "空隙", duration: 289 }, { name: "生命中最美丽的一天", duration: 325 } ] },
    { name: "愿爱无忧", type: "专辑", date: "2014-08-12", rating: 7.9, songs: [
      { name: "引子", duration: 120 }, { name: "扎西德勒", duration: 280 }, { name: "哈利路亚", duration: 290 },
      { name: "夏天", duration: 270 }, { name: "行星消失的夜空", duration: 300 }, { name: "戴着镣铐起舞", duration: 280 },
      { name: "汪洋中的一条船", duration: 290 }, { name: "太阳照常升起", duration: 270 }, { name: "野歌", duration: 280 },
      { name: "美丽新世界", duration: 290 }, { name: "两个人的假期", duration: 270 }, { name: "思疆调", duration: 260 },
      { name: "愿爱无忧", duration: 300 } ] },
    { name: "今日青年", type: "专辑", date: "2016-11-01", songs: [
       { name: "四相", duration: 309 }, { name: "今日青年", duration: 224 }, { name: "黑名单上的人", duration: 218 },
       { name: "黄皮肤的吉普赛", duration: 192 }, { name: "冲锋队", duration: 209 }, { name: "自由吧电台", duration: 331 },
       { name: "Downtown", duration: 225 }, { name: "支离", duration: 397 }, { name: "如期", duration: 250 },
       { name: "午夜芭蕾", duration: 263 }, { name: "好梦", duration: 350 } ] },
    { name: "过海", type: "专辑", date: "2019-12-16", songs: [
       { name: "Morning Espresso", duration: 240 }, { name: "Rosemary", duration: 421 },
       { name: "Mirage", duration: 456 }, { name: "Ethereal", duration: 381 }, { name: "Wandering", duration: 289 },
       { name: "White Dew", duration: 243 }, { name: "Highland", duration: 450 }, { name: "Jambo", duration: 328 },
       { name: "Nightlife", duration: 426 }, { name: "Melody of the Rain", duration: 339 } ] },
      { name: "霓虹疾风", type: "专辑", date: "2027-06-08", songs: [
      { name: "霓虹疾风", duration: 294 }, { name: "灯塔暗涌", duration: 292 }, { name: "涂鸦夜潮", duration: 309 },
      { name: "无名的白墙", duration: 278 }, { name: "遥远的岔路", duration: 258 }, { name: "灰墙", duration: 301 },
      { name: "高墙", duration: 305 }, { name: "电塔", duration: 523 }, { name: "影中人", duration: 284 },
      { name: "暮云", duration: 257 } ] },
    { name: "旧城走廊", type: "专辑", date: "2030-09-30", songs: [
      { name: "旧城走廊", duration: 158 }, { name: "深夜的疾风", duration: 218 }, { name: "残阳", duration: 167 },
      { name: "雨夜", duration: 280 }, { name: "惊雷站台", duration: 262 }, { name: "晚钟", duration: 266 },
      { name: "暗巷", duration: 283 }, { name: "深巷", duration: 226 }, { name: "迷途", duration: 169 },
      { name: "匝道长夜", duration: 260 } ] },
    { name: "停电", type: "专辑", date: "2033-06-26", songs: [
      { name: "停电", duration: 282 }, { name: "晚风风口", duration: 337 }, { name: "边界狂风", duration: 310 },
      { name: "逆流星光", duration: 299 }, { name: "漫长的阁楼", duration: 292 }, { name: "碎片", duration: 259 },
      { name: "冷月路口", duration: 299 }, { name: "铁笼天台", duration: 277 }, { name: "疾风", duration: 295 },
      { name: "潮声", duration: 265 } ] },
    { name: "白墙", type: "专辑", date: "2037-02-24", songs: [
      { name: "白墙", duration: 280 }, { name: "高架信号", duration: 313 }, { name: "夜航", duration: 297 },
      { name: "废楼影中人", duration: 294 }, { name: "野火铁轨", duration: 238 }, { name: "夜航屋顶", duration: 240 },
      { name: "残响", duration: 311 }, { name: "野猫", duration: 304 }, { name: "末班车夜潮", duration: 278 } ] },
    { name: "寒潮渡轮", type: "EP", date: "2040-04-24", songs: [
      { name: "寒潮渡轮", duration: 294 }, { name: "出口", duration: 535 }, { name: "天台远方", duration: 270 } ] },
    { name: "岔路暮光", type: "专辑", date: "2043-03-23", songs: [
      { name: "岔路暮光", duration: 274 }, { name: "回声", duration: 168 }, { name: "暗号", duration: 266 },
      { name: "巷子岔路", duration: 438 }, { name: "夜车寒潮", duration: 232 }, { name: "落雪", duration: 308 },
      { name: "深巷疾风", duration: 262 }, { name: "暴雨野火", duration: 271 }, { name: "铁门", duration: 259 } ] },
    { name: "星光深巷", type: "专辑", date: "2046-01-23", songs: [
      { name: "星光深巷", duration: 200 }, { name: "铁桥", duration: 286 }, { name: "疾风夜航", duration: 292 },
      { name: "沉默的曦光", duration: 527 }, { name: "沙丘夜班", duration: 271 }, { name: "末班车", duration: 176 },
      { name: "荒岛深夜", duration: 279 }, { name: "荒野站台", duration: 331 }, { name: "久违的暗涌", duration: 277 },
      { name: "阁楼", duration: 295 } ] },
    { name: "沉默的回声", type: "专辑", date: "2049-06-02", songs: [
      { name: "沉默的回声", duration: 244 }, { name: "星光碎片", duration: 268 }, { name: "雨篷", duration: 255 },
      { name: "深夜的沙丘", duration: 258 }, { name: "边界晚风", duration: 203 }, { name: "夜班", duration: 241 },
      { name: "无名的远方", duration: 233 }, { name: "久违的逆光", duration: 281 }, { name: "汽笛", duration: 283 } ] },
    ],
  "万能青年旅店": [
    { name: "万能青年旅店", type: "专辑", date: "2010-11-12", rating: 9.3, songs: [
      { name: "狗尿馆", duration: 116 }, { name: "不万能的喜剧", duration: 334 }, { name: "揪心的玩笑与漫长的白日梦", duration: 335 },
      { name: "大石碎胸口", duration: 423 }, { name: "洋鸟消夏录", duration: 70 }, { name: "秦皇岛", duration: 485 },
      { name: "十万嬉皮", duration: 285 }, { name: "在这颗行星所有的酒馆", duration: 549 }, { name: "杀死那个石家庄人", duration: 344 } ] },
    { name: "冀西南林路行", type: "专辑", date: "2020-12-22", rating: 8.9, songs: [
       { name: "冀西南林路行 (专辑全长)", duration: 0 }, { name: "早", duration: 83 }, { name: "泥河", duration: 348 },
       { name: "平等雲霧", duration: 86 }, { name: "採石", duration: 536 }, { name: "山雀", duration: 198 },
       { name: "繞越", duration: 163 }, { name: "河北墨麒麟", duration: 688 }, { name: "郊眠寺", duration: 580 } ] },
    { name: "废人们 都在忙什么？", type: "EP", date: "2006-01-01", songs: [
      { name: "不再万能的喜剧", duration: 330 }, { name: "喜剧", duration: 300 }, { name: "秦皇岛", duration: 480 } ] },
      { name: "疾风晚钟", type: "EP", date: "2028-01-19", songs: [
      { name: "疾风晚钟", duration: 189 }, { name: "荒野环流", duration: 281 }, { name: "久违的风口", duration: 363 },
      { name: "沉默的路口", duration: 346 }, { name: "旧巷光年", duration: 320 }, { name: "极夜", duration: 311 } ] },
    { name: "断层", type: "EP", date: "2031-11-12", songs: [
      { name: "断层", duration: 205 }, { name: "断线", duration: 312 }, { name: "余烬", duration: 368 } ] },
    { name: "灰烬出口", type: "专辑", date: "2036-10-16", songs: [
      { name: "灰烬出口", duration: 333 }, { name: "漫长的迷途", duration: 346 }, { name: "铁轨狂风", duration: 342 },
      { name: "倒影", duration: 332 }, { name: "巷子公路", duration: 541 }, { name: "高架", duration: 330 },
      { name: "远方", duration: 362 } ] },
    { name: "匝道", type: "专辑", date: "2041-01-17", songs: [
      { name: "匝道", duration: 311 }, { name: "晚风逆光", duration: 308 }, { name: "静默", duration: 309 },
      { name: "公路", duration: 309 }, { name: "逆流镜面", duration: 215 }, { name: "久违的街灯", duration: 486 },
      { name: "街灯", duration: 360 } ] },
    { name: "沉默的街角", type: "专辑", date: "2044-12-10", songs: [
      { name: "沉默的街角", duration: 335 }, { name: "寒潮", duration: 467 }, { name: "无名的台阶", duration: 342 },
      { name: "旧城", duration: 336 }, { name: "骤雨", duration: 326 }, { name: "水岸", duration: 313 },
      { name: "白墙沙漏", duration: 351 } ] },
    { name: "逆光霓虹", type: "专辑", date: "2049-05-17", songs: [
      { name: "逆光霓虹", duration: 340 }, { name: "久违的初晴", duration: 280 }, { name: "信号", duration: 327 },
      { name: "斑马线晴天", duration: 326 }, { name: "暮光", duration: 330 }, { name: "信号灯潮汐", duration: 349 },
      { name: "楼顶", duration: 347 }, { name: "码头", duration: 322 }, { name: "信号阁楼", duration: 338 },
      { name: "孤岛", duration: 296 }, { name: "街角", duration: 531 } ] },
    ],
  "二手玫瑰": [
    { name: "二手玫瑰", type: "专辑", date: "2003-01-01", rating: 8.5, songs: [
       { name: "伎俩", duration: 257 }, { name: "火车快开", duration: 347 }, { name: "允许部分艺术家先富起来", duration: 271 },
       { name: "征婚启示", duration: 288 }, { name: "招安", duration: 384 }, { name: "采花", duration: 269 },
       { name: "因为所以", duration: 247 }, { name: "嫂子颂", duration: 341 }, { name: "公益歌曲", duration: 212 },
       { name: "好花红", duration: 423 } ] },
    { name: "娱乐江湖", type: "专辑", date: "2006-10-17", songs: [
       { name: "狼心狗肺", duration: 262 }, { name: "娱乐江湖", duration: 303 }, { name: "E时代桃园", duration: 263 },
       { name: "夜深了", duration: 266 }, { name: "感觉错了", duration: 245 }, { name: "起飞", duration: 286 },
       { name: "命运", duration: 227 }, { name: "跳大神", duration: 299 }, { name: "可是我还是在歌唱", duration: 197 },
       { name: "春天的故事", duration: 442 } ] },
    { name: "一枝独秀", type: "专辑", date: "2013-08-12", rating: 8.0, songs: [
       { name: "坏东西 (同期录音)", duration: 182 }, { name: "舞曲", duration: 350 }, { name: "仙儿", duration: 304 },
       { name: "串门 (致2012) (致2012)", duration: 307 }, { name: "黄诗", duration: 234 },
       { name: "白花 (致昂山素季)", duration: 401 }, { name: "黏人", duration: 444 }, { name: "渣儿 (仙落南城版)", duration: 298 },
       { name: "正人君子", duration: 284 }, { name: "你幸福吗", duration: 289 },
       { name: "小石头（致已故鼓手张越） (致已故鼓手张越)", duration: 271 }, { name: "小短歌 (同期录音)", duration: 144 } ] },
    { name: "如你所愿", type: "现场", date: "2019-04-11", songs: [ { name: "匠", duration: 220 } ] },
      { name: "废楼", type: "专辑", date: "2027-08-10", songs: [
      { name: "废楼", duration: 315 }, { name: "雨夜尘埃", duration: 256 }, { name: "逆流天桥", duration: 346 },
      { name: "天台", duration: 293 }, { name: "边界游园", duration: 236 }, { name: "久违的铁轨", duration: 269 },
      { name: "沉默的惊雷", duration: 245 }, { name: "无名的停电", duration: 268 }, { name: "风口寒潮", duration: 277 },
      { name: "沉默的晚钟", duration: 262 } ] },
    { name: "深夜雪线", type: "单曲", date: "2032-01-24", songs: [
      { name: "深夜雪线", duration: 292 } ] },
    { name: "沉默的站台", type: "专辑", date: "2036-06-04", songs: [
      { name: "沉默的站台", duration: 264 }, { name: "无名的渡轮", duration: 178 }, { name: "雪线锈迹", duration: 251 },
      { name: "无名的杂草", duration: 265 }, { name: "旧梦", duration: 279 }, { name: "雪线台阶", duration: 274 },
      { name: "阁楼深巷", duration: 161 }, { name: "久违的潮汐", duration: 351 }, { name: "无名的暮光", duration: 327 },
      { name: "久违的灰烬", duration: 183 }, { name: "漫长的电塔", duration: 253 } ] },
    { name: "尘埃", type: "专辑", date: "2040-06-16", songs: [
      { name: "尘埃", duration: 261 }, { name: "公路斑马线", duration: 245 }, { name: "渡轮极夜", duration: 280 },
      { name: "沉默的汽笛", duration: 304 }, { name: "夜潮", duration: 282 }, { name: "晴天甲板", duration: 303 },
      { name: "夜潮荒野", duration: 279 }, { name: "霓虹", duration: 304 }, { name: "码头公路", duration: 325 },
      { name: "漫长的走廊", duration: 281 }, { name: "巷子", duration: 280 } ] },
    { name: "风口", type: "专辑", date: "2044-10-02", songs: [
      { name: "风口", duration: 227 }, { name: "阁楼雨夜", duration: 406 }, { name: "街灯暮云", duration: 288 },
      { name: "狂风信号", duration: 213 }, { name: "甲板", duration: 265 }, { name: "深夜白墙", duration: 232 },
      { name: "黑巷", duration: 271 }, { name: "暗号屋顶", duration: 304 }, { name: "沉默的长夜", duration: 301 },
      { name: "深夜的尘埃", duration: 267 } ] },
    { name: "余烬雨篷", type: "专辑", date: "2048-06-10", songs: [
      { name: "余烬雨篷", duration: 276 }, { name: "裂痕", duration: 284 }, { name: "余烬走廊", duration: 314 },
      { name: "岔路", duration: 285 }, { name: "惊雷", duration: 341 }, { name: "光年", duration: 296 },
      { name: "无名的晴天", duration: 308 }, { name: "沉默的高墙", duration: 165 } ] },
    ],
  "新裤子": [
    { name: "新裤子", type: "专辑", date: "1998-01-01", rating: 8.1, songs: [
       { name: "I'm OK", duration: 139 }, { name: "我们的时代", duration: 162 }, { name: "嘿！你", duration: 136 },
       { name: "新的恋爱", duration: 175 }, { name: "我不想失去你", duration: 173 }, { name: "爱情催泪弹", duration: 89 },
       { name: "你是我的雷蒙斯", duration: 128 }, { name: "爱", duration: 172 }, { name: "别对我说失去了Baby", duration: 195 },
       { name: "每一天", duration: 178 }, { name: "我是一个服务员", duration: 210 }, { name: "来来去去", duration: 98 },
       { name: "猴子", duration: 121 }, { name: "过时", duration: 222 }, { name: "新裤子 (MIX)", duration: 119 } ] },
    { name: "龙虎人丹", type: "专辑", date: "2005-12-01", rating: 8.2, songs: [
       { name: "你就是我的明星", duration: 148 }, { name: "Bye Bye Disco", duration: 305 }, { name: "两个男朋友", duration: 204 },
       { name: "神秘的香波", duration: 233 }, { name: "龙虎人丹", duration: 227 }, { name: "需要爱", duration: 248 },
       { name: "Love Brings Me Home", duration: 292 }, { name: "爱瑞巴迪", duration: 176 },
       { name: "我想她", duration: 215 }, { name: "御宅", duration: 306 } ] },
    { name: "野人也有爱", type: "专辑", date: "2008-11-14", songs: [
       { name: "北海怪兽", duration: 192 }, { name: "金色偶像", duration: 198 }, { name: "两个女朋友", duration: 216 },
       { name: "大熊猫", duration: 153 }, { name: "分裂", duration: 202 }, { name: "著名导演", duration: 149 },
       { name: "囍", duration: 155 }, { name: "伤心招待所", duration: 280 }, { name: "Not Too Apart", duration: 168 },
       { name: "隔离", duration: 194 }, { name: "我们可以在一起", duration: 310 } ] },
    { name: "Go East", type: "专辑", date: "2009-01-01", songs: [
       { name: "Go East", duration: 246 }, { name: "野人也有爱", duration: 234 }, { name: "我爱你", duration: 313 },
       { name: "我不想失去你", duration: 168 }, { name: "御宅", duration: 280 }, { name: "爱带我回家", duration: 228 },
       { name: "计算机", duration: 223 }, { name: "猴子", duration: 264 }, { name: "我们不能在一起", duration: 278 },
       { name: "Bye Bye Disco (SLOW BYE VERSION)", duration: 373 } ] },
    { name: "Sex Drugs Internet", type: "专辑", date: "2011-01-01", songs: [
       { name: "The Song Is Not For You", duration: 310 }, { name: "你还记得那个电影演员吗？", duration: 245 },
       { name: "不放开", duration: 127 }, { name: "总有一天我会欺骗你", duration: 201 },
       { name: "Sex Drugs Internet", duration: 192 }, { name: "以眼杀人", duration: 159 },
       { name: "After Party", duration: 163 }, { name: "我不想模仿你", duration: 205 },
       { name: "I'm Not Gay", duration: 200 }, { name: "别再问我什么是迪斯科", duration: 197 },
       { name: "两个女孩的无声对话", duration: 306 }, { name: "I'm OK (Bonus Track)", duration: 139 },
       { name: "我们的时代 (Bonus Track)", duration: 162 } ] },
    { name: "生命因你而火热", type: "专辑", date: "2016-04-01", rating: 8.3, songs: [
       { name: "你要跳舞吗", duration: 193 }, { name: "我们最好的时光 就是现在", duration: 293 },
       { name: "没有理想的人不伤心", duration: 341 }, { name: "每一次我们开始争吵", duration: 234 }, { name: "生活因你而火热", duration: 291 },
       { name: "难过时 把舞跳", duration: 253 }, { name: "关于夜晚和失眠的世界", duration: 347 },
       { name: "没有你的旅途 没有意义", duration: 245 }, { name: "在我死去之前", duration: 205 },
       { name: "走在什刹海的冰面上", duration: 276 } ] },
    { name: "爱 广播 飞机", type: "专辑", date: "2021-03-18", songs: [
       { name: "每次相聚都是为了分离", duration: 135 }, { name: "爱 广播 飞机", duration: 162 }, { name: "除了你我一无所有", duration: 247 },
       { name: "迷人的你", duration: 214 }, { name: "散步到夏宫", duration: 214 }, { name: "你都忘了你有多美", duration: 186 },
       { name: "我好希望未来不来", duration: 222 }, { name: "夏日终曲", duration: 320 }, { name: "风向哪里去", duration: 329 },
       { name: "戏中人", duration: 255 }, { name: "最后的乐队", duration: 302 } ] },
      { name: "久违的拆迁", type: "专辑", date: "2028-03-14", songs: [
      { name: "久违的拆迁", duration: 206 }, { name: "警报", duration: 237 }, { name: "遥远的乱码", duration: 194 },
      { name: "沉默的噪点", duration: 196 }, { name: "街头", duration: 218 }, { name: "断线高墙", duration: 223 },
      { name: "火花", duration: 207 }, { name: "沉默的野火", duration: 193 }, { name: "黑烟", duration: 289 } ] },
    { name: "街头冲锋", type: "专辑", date: "2032-07-14", songs: [
      { name: "街头冲锋", duration: 227 }, { name: "蓬乱", duration: 214 }, { name: "电焊", duration: 236 },
      { name: "无名的铁链", duration: 203 }, { name: "乱码", duration: 220 }, { name: "呐喊碎屏", duration: 222 },
      { name: "噪音", duration: 294 } ] },
    { name: "静电", type: "专辑", date: "2036-01-24", songs: [
      { name: "静电", duration: 161 }, { name: "破烂", duration: 217 }, { name: "密电夜班", duration: 209 },
      { name: "高音", duration: 151 }, { name: "野狗噪音", duration: 176 }, { name: "无名的夜班", duration: 211 },
      { name: "飞奔", duration: 208 }, { name: "廉价", duration: 198 }, { name: "铁皮破烂", duration: 205 } ] },
    { name: "沉默的反光", type: "专辑", date: "2040-09-28", songs: [
      { name: "沉默的反光", duration: 211 }, { name: "铁皮", duration: 129 }, { name: "拆迁", duration: 235 },
      { name: "蓬乱破烂", duration: 155 }, { name: "逆行", duration: 251 }, { name: "拉链", duration: 220 },
      { name: "快逃野火", duration: 206 }, { name: "沉默的廉价", duration: 228 }, { name: "久违的铁链", duration: 181 } ] },
    { name: "电压火种", type: "专辑", date: "2045-02-09", songs: [
      { name: "电压火种", duration: 153 }, { name: "拦截", duration: 230 }, { name: "无名的反抗", duration: 238 },
      { name: "铁锈", duration: 123 }, { name: "推土机", duration: 214 }, { name: "破洞", duration: 248 },
      { name: "快逃", duration: 205 }, { name: "快闪铁钉", duration: 211 }, { name: "冲锋", duration: 220 },
      { name: "遥远的铁皮", duration: 234 } ] },
    { name: "快跑", type: "专辑", date: "2049-05-03", songs: [
      { name: "快跑", duration: 235 }, { name: "密电碎屏", duration: 202 }, { name: "火种", duration: 120 },
      { name: "旧车快跑", duration: 199 }, { name: "灰头", duration: 196 }, { name: "无名的废厂", duration: 230 },
      { name: "摩托", duration: 125 }, { name: "油污", duration: 337 }, { name: "破洞铁皮", duration: 211 },
      { name: "呐喊碎片", duration: 207 }, { name: "漫长的涂鸦", duration: 293 } ] },
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
      { name: "曹操你别怕", duration: 270 }, { name: "抄电表", duration: 260 }, { name: "莫怪你老爹", duration: 280 },
      { name: "酒鬼猪哥伯", duration: 250 }, { name: "彭啊湃", duration: 300 }, { name: "陈先生", duration: 280 },
      { name: "清明过纸", duration: 265 }, { name: "两顿饱", duration: 240 }, { name: "上县城", duration: 255 },
      { name: "做梦", duration: 270 }, { name: "大会", duration: 250 }, { name: "世情", duration: 260 },
      { name: "收冬", duration: 245 }, { name: "城市找猪", duration: 280 }, { name: "踏架脚车牵条猪(2012)", duration: 367 },
      { name: "鲜花在岸上开", duration: 300 }, { name: "含叭哩细", duration: 240 }, { name: "雨来淋秀才", duration: 255 },
      { name: "隆啊隆，骑马去海丰", duration: 270 }, { name: "一些风景", duration: 290 }, { name: "海风", duration: 290 } ] },
    { name: "广东姑娘", type: "专辑", date: "2015-03-09", rating: 8.1, songs: [
      { name: "海风", duration: 280 }, { name: "心肝痛", duration: 270 }, { name: "广东姑娘", duration: 266 },
      { name: "走鬼", duration: 280 }, { name: "我的头发就是这样被吹乱的啊", duration: 290 }, { name: "像将军那样喝酒", duration: 270 },
      { name: "龙哥有真爱", duration: 280 }, { name: "东莞的月亮", duration: 270 }, { name: "我哈你", duration: 260 },
      { name: "晚上好，春天小姐", duration: 257 }, { name: "猪母上山咬老虎", duration: 280 }, { name: "美丽漂亮，英俊潇洒", duration: 270 },
      { name: "请到老祖宗", duration: 280 } ] },
    { name: "梦幻丽莎发廊", type: "专辑", date: "2017-03-29", rating: 8.2, songs: [
      { name: "初恋", duration: 292 }, { name: "热带", duration: 259 }, { name: "石牌桥", duration: 210 },
      { name: "有所追求", duration: 182 }, { name: "阿虎", duration: 196 }, { name: "梦幻丽莎发廊", duration: 249 },
      { name: "柔河里", duration: 200 }, { name: "秧歌舞", duration: 191 }, { name: "很多很多", duration: 264 },
      { name: "九条人", duration: 148 }, { name: "阿珍爱上了阿强", duration: 409 },
      { name: "楼房来四散起 路不见狗相连", duration: 147 } ] },
    { name: "故事会", type: "专辑", date: "2019-02-21", rating: 8.0, songs: [
      { name: "仙女", duration: 260 }, { name: "小燕子", duration: 240 }, { name: "烂尾楼", duration: 270 },
      { name: "匈奴王", duration: 250 }, { name: "深圳的街头", duration: 280 }, { name: "阿琳娜", duration: 260 },
      { name: "喜鹊", duration: 240 }, { name: "老鼠影", duration: 255 }, { name: "最寒冷的一天", duration: 270 },
      { name: "满天神佛请来保庇我", duration: 260 }, { name: "马白草", duration: 250 },
      { name: "深圳的街头(卡拉OK)", duration: 280 } ] },
    { name: "活鱼逆流而上，死鱼随波逐流", type: "专辑", date: "2021-08-18", songs: [
      { name: "南方恋曲", duration: 260 }, { name: "左车道", duration: 270 }, { name: "越南", duration: 250 },
      { name: "他把反话正面讲", duration: 265 }, { name: "活生生的生活", duration: 280 },
      { name: "Canton Express", duration: 300 }, { name: "伤心的人", duration: 270 },
      { name: "世界的理想", duration: 307 }, { name: "活鱼逆流而上，死鱼随波逐流", duration: 290 },
      { name: "地球仪", duration: 280 }, { name: "夜已晚", duration: 270 } ] },
    { name: "一半真情流露，一半靠表演", type: "专辑", date: "2021-08-18", songs: [
      { name: "无嫫歌", duration: 260 }, { name: "阮厝阿嫂爱唱歌", duration: 270 },
      { name: "一半真情流露，一半靠表演", duration: 280 }, { name: "Love Makes Me Lose Control", duration: 250 },
      { name: "食醉狗", duration: 240 }, { name: "猪肉炒辣椒", duration: 230 }, { name: "塑料花", duration: 255 },
      { name: "另一条食醉狗", duration: 260 }, { name: "另一个地球仪", duration: 270 }, { name: "隔壁的诗人", duration: 290 },
      { name: "在码头", duration: 300 } ] },
      { name: "晒场", type: "专辑", date: "2027-01-18", songs: [
      { name: "晒场", duration: 265 }, { name: "雨巷", duration: 234 }, { name: "青瓦", duration: 280 },
      { name: "桃枝", duration: 277 }, { name: "沉默的桃枝", duration: 267 }, { name: "槐花", duration: 286 },
      { name: "老树", duration: 273 }, { name: "木梯", duration: 254 }, { name: "秋雨", duration: 255 } ] },
    { name: "石榴", type: "专辑", date: "2029-10-20", songs: [
      { name: "石榴", duration: 252 }, { name: "田埂", duration: 300 }, { name: "溪水", duration: 240 },
      { name: "旧信芦苇", duration: 314 }, { name: "云边", duration: 244 }, { name: "行囊", duration: 265 },
      { name: "扁舟", duration: 241 }, { name: "春雨", duration: 246 }, { name: "遥远的木窗", duration: 281 } ] },
    { name: "蝉鸣", type: "专辑", date: "2032-02-07", songs: [
      { name: "蝉鸣", duration: 289 }, { name: "土路", duration: 242 }, { name: "土墙", duration: 251 },
      { name: "草垛", duration: 315 }, { name: "石阶", duration: 278 }, { name: "月台", duration: 278 },
      { name: "沉默的晚归", duration: 285 }, { name: "石路旧信", duration: 288 }, { name: "山岗", duration: 257 },
      { name: "深夜的故乡", duration: 290 } ] },
    { name: "菜园谷场", type: "专辑", date: "2034-07-01", songs: [
      { name: "菜园谷场", duration: 290 }, { name: "青苔", duration: 274 }, { name: "瓦房竹筐", duration: 165 },
      { name: "茶山", duration: 258 }, { name: "遥远的石桥", duration: 251 }, { name: "车站秋千", duration: 241 },
      { name: "山风", duration: 284 }, { name: "木桥", duration: 221 }, { name: "晚霞老井", duration: 279 } ] },
    { name: "晚归茶山", type: "专辑", date: "2036-12-17", songs: [
      { name: "晚归茶山", duration: 252 }, { name: "木窗山径", duration: 223 }, { name: "竹篱", duration: 261 },
      { name: "晚钟旧书", duration: 266 }, { name: "柴火", duration: 274 }, { name: "长椅", duration: 412 },
      { name: "土墙秋千", duration: 211 }, { name: "竹影", duration: 263 }, { name: "麦浪", duration: 283 },
      { name: "石阶故人", duration: 154 } ] },
    { name: "窗棂", type: "专辑", date: "2039-11-24", songs: [
      { name: "窗棂", duration: 289 }, { name: "沉默的犁铧", duration: 255 }, { name: "谷雨", duration: 300 },
      { name: "石桥", duration: 251 }, { name: "木舟", duration: 350 }, { name: "溪桥", duration: 277 },
      { name: "邮局", duration: 275 }, { name: "冬雪", duration: 319 }, { name: "石磨", duration: 148 } ] },
    { name: "无名的石磨", type: "专辑", date: "2042-07-10", songs: [
      { name: "无名的石磨", duration: 166 }, { name: "沉默的木舟", duration: 321 }, { name: "石路", duration: 213 },
      { name: "北风", duration: 264 }, { name: "羊群", duration: 171 }, { name: "小院", duration: 287 },
      { name: "久违的屋檐", duration: 225 }, { name: "青苔霜降", duration: 274 }, { name: "谷仓", duration: 227 },
      { name: "沉默的月夜", duration: 190 } ] },
    { name: "漫长的木舟", type: "专辑", date: "2044-12-06", songs: [
      { name: "漫长的木舟", duration: 247 }, { name: "青梅青石", duration: 294 }, { name: "车站", duration: 487 },
      { name: "青梅", duration: 417 }, { name: "槐树", duration: 279 }, { name: "乡音", duration: 252 },
      { name: "立秋北风", duration: 269 } ] },
    { name: "深夜的星夜", type: "专辑", date: "2047-06-19", songs: [
      { name: "深夜的星夜", duration: 280 }, { name: "山岗稻草", duration: 245 }, { name: "谷场", duration: 250 },
      { name: "稻田", duration: 269 }, { name: "无名的门环", duration: 247 }, { name: "稻草", duration: 214 },
      { name: "犁铧春分", duration: 285 }, { name: "芦苇", duration: 219 }, { name: "瓦房", duration: 267 },
      { name: "巷口", duration: 215 } ] },
    { name: "木门稻田", type: "专辑", date: "2049-11-01", songs: [
      { name: "木门稻田", duration: 299 }, { name: "露水", duration: 270 }, { name: "灯火", duration: 282 },
      { name: "梯田", duration: 246 }, { name: "青石", duration: 255 }, { name: "深夜的河流", duration: 237 },
      { name: "久违的水车", duration: 322 }, { name: "溪边", duration: 180 }, { name: "深夜的晚霞", duration: 245 } ] },
    ],
  "重塑雕像的权利": [
    { name: "CUT OFF!", type: "EP", date: "2005-01-01", rating: 8.0, songs: [
      { name: "Cut Off", duration: 300 } ] },
    { name: "WATCH OUT!CLIMATE HAS CHANGED,FAT MUM RISES...", type: "专辑", date: "2009-01-09", rating: 8.1, songs: [
       { name: "Watch Out, Climate Has Changed", duration: 95 }, { name: "Surrender", duration: 338 },
       { name: "My Great Location", duration: 232 }, { name: "Momentarily Out Of Mind", duration: 182 },
       { name: "Escape Behind... I", duration: 150 }, { name: "Vis-A-Vis", duration: 206 },
       { name: "Escape Behind...II", duration: 286 }, { name: "Up Next: Bela Lugosi's Back", duration: 515 },
       { name: "Billy Cannot Stop", duration: 321 }, { name: "By Your Both Sides, Left And Right", duration: 333 },
       { name: "...Fat Mum Rises!", duration: 77 } ] },
    { name: "Before The Applause", type: "专辑", date: "2017-09-15", rating: 8.3, songs: [
       { name: "HUM", duration: 96 }, { name: "HAILING DRUMS", duration: 553 }, { name: "8+2+8 I", duration: 285 },
       { name: "8+2+8 II", duration: 618 }, { name: "PIGS IN THE RIVER", duration: 403 },
       { name: "AT MOSP HERE", duration: 726 }, { name: "THE LAST DANCE, W.", duration: 399 },
       { name: "SOUNDS FOR CELEBRATION", duration: 420 } ] },
      { name: "Golden", type: "专辑", date: "2028-05-31", songs: [
      { name: "Golden（金色）", duration: 312 }, { name: "Field（原野）", duration: 339 }, { name: "Nightfall Field（夜幕的原野）", duration: 194 },
      { name: "Pulse（脉冲）", duration: 395 }, { name: "Smoke（烟雾）", duration: 307 }, { name: "Dusk（薄暮）", duration: 339 },
      { name: "Fleet Beacon（舰队的灯塔）", duration: 340 } ] },
    { name: "Wires", type: "专辑", date: "2031-11-07", songs: [
      { name: "Wires（电线）", duration: 307 }, { name: "Moss（青苔）", duration: 560 }, { name: "Orbit Stone（轨道的石头）", duration: 560 },
      { name: "Winter Heart（冬天的心）", duration: 355 }, { name: "Loam（沃土）", duration: 326 }, { name: "Circle Summer（圆圈的夏天）", duration: 352 },
      { name: "Carousel（旋转木马）", duration: 552 }, { name: "Petal Drift（花瓣的漂流）", duration: 320 }, { name: "Ridge（山脊）", duration: 309 },
      { name: "Ballet Roof（芭蕾的屋顶）", duration: 312 } ] },
    { name: "Fleet", type: "EP", date: "2036-05-02", songs: [
      { name: "Fleet（舰队）", duration: 318 }, { name: "Quiet Roof（寂静的屋顶）", duration: 359 }, { name: "Salt Song（盐的歌）", duration: 346 },
      { name: "Ice（冰）", duration: 260 } ] },
    { name: "Midnight Kite", type: "专辑", date: "2040-02-15", songs: [
      { name: "Midnight Kite（午夜的风筝）", duration: 336 }, { name: "Shadow（影子）", duration: 257 }, { name: "Slope（斜坡）", duration: 348 },
      { name: "Hill（山丘）", duration: 298 }, { name: "Shore（岸边）", duration: 332 }, { name: "Veil（帷幕）", duration: 352 },
      { name: "Heart Sun（心的太阳）", duration: 352 } ] },
    { name: "Nightfall", type: "专辑", date: "2044-06-28", songs: [
      { name: "Nightfall（夜幕）", duration: 357 }, { name: "Haze Soil（轻雾的土壤）", duration: 358 }, { name: "Star（星）", duration: 310 },
      { name: "Leaf Cinder（叶的炭烬）", duration: 331 }, { name: "Grain Sea（颗粒的海）", duration: 263 }, { name: "Fable（寓言）", duration: 318 },
      { name: "Asphalt（柏油）", duration: 309 }, { name: "Echo（回声）", duration: 336 } ] },
    { name: "Whisper", type: "EP", date: "2048-12-24", songs: [
      { name: "Whisper（低语）", duration: 350 }, { name: "Breeze（微风）", duration: 341 }, { name: "Tide（潮汐）", duration: 300 },
      { name: "Rust Roof（锈迹的屋顶）", duration: 307 }, { name: "Concrete（水泥）", duration: 339 } ] },
    ],
  "草东没有派对": [
    { name: "丑奴儿", type: "专辑", date: "2016-02-19", rating: 9.1, songs: [
       { name: "Intro", duration: 86 }, { name: "丑", duration: 117 }, { name: "烂泥", duration: 149 },
       { name: "勇敢的人", duration: 220 }, { name: "大风吹", duration: 236 }, { name: "艾玛", duration: 201 },
       { name: "等", duration: 155 }, { name: "鬼", duration: 160 }, { name: "在 (Explicit)", duration: 280 },
       { name: "山海", duration: 251 }, { name: "我们", duration: 218 }, { name: "情歌", duration: 256 } ] },
    { name: "瓦合", type: "专辑", date: "2023-05-20", rating: 8.5, songs: [
       { name: "苦难精算师", duration: 245 }, { name: "缸", duration: 186 }, { name: "空", duration: 177 },
       { name: "人洞山", duration: 207 }, { name: "孑", duration: 55 }, { name: "白日梦", duration: 224 },
       { name: "床", duration: 232 }, { name: "八", duration: 226 }, { name: "老张", duration: 219 },
       { name: "芽", duration: 192 }, { name: "但", duration: 142 } ] },
      { name: "冷月长风", type: "专辑", date: "2028-02-25", songs: [
      { name: "冷月长风", duration: 343 }, { name: "回声壁岔路", duration: 208 }, { name: "迷途灯塔", duration: 174 },
      { name: "荒径逆光", duration: 225 }, { name: "野猫孤岛", duration: 192 }, { name: "汽笛迷途", duration: 114 },
      { name: "沙漏", duration: 298 }, { name: "风铃阁楼", duration: 196 }, { name: "沉默的暗涌", duration: 138 } ] },
    { name: "遥远的走廊", type: "专辑", date: "2032-09-01", songs: [
      { name: "遥远的走廊", duration: 170 }, { name: "废墟电线", duration: 234 }, { name: "铁道暗巷", duration: 210 },
      { name: "荒岛阁楼", duration: 198 }, { name: "黑巷野猫", duration: 287 }, { name: "暴雨夜车", duration: 150 },
      { name: "沉默的公路", duration: 233 }, { name: "初晴", duration: 158 }, { name: "孤岛甲板", duration: 193 },
      { name: "久违的归途", duration: 176 }, { name: "长夜裂痕", duration: 194 } ] },
    { name: "雨夜岔路", type: "专辑", date: "2036-01-05", songs: [
      { name: "雨夜岔路", duration: 200 }, { name: "久违的逆旅", duration: 160 }, { name: "冷月暗涌", duration: 182 },
      { name: "甲板极夜", duration: 198 }, { name: "霜降静默", duration: 191 }, { name: "末班车断层", duration: 197 },
      { name: "初晴停电", duration: 185 }, { name: "曦光电线", duration: 196 } ] },
    { name: "黑巷锈迹", type: "专辑", date: "2040-02-08", songs: [
      { name: "黑巷锈迹", duration: 177 }, { name: "霜降雨夜", duration: 168 }, { name: "灰烬", duration: 112 },
      { name: "深夜的倒影", duration: 207 }, { name: "阁楼逆光", duration: 135 }, { name: "废楼骤雨", duration: 201 },
      { name: "灰墙星光", duration: 159 }, { name: "沙丘铁门", duration: 196 }, { name: "残阳孤岛", duration: 188 },
      { name: "天台荒岛", duration: 195 }, { name: "长夜", duration: 229 } ] },
    { name: "电塔残响", type: "专辑", date: "2045-03-01", songs: [
      { name: "电塔残响", duration: 195 }, { name: "深夜的残阳", duration: 211 }, { name: "沉默的雨篷", duration: 211 },
      { name: "天台高墙", duration: 175 }, { name: "暗巷汽笛", duration: 179 }, { name: "天桥裂痕", duration: 209 },
      { name: "无名的路口", duration: 188 }, { name: "深夜的废楼", duration: 179 }, { name: "无名的黑巷", duration: 182 } ] },
    { name: "锈迹灰墙", type: "专辑", date: "2049-03-22", songs: [
      { name: "锈迹灰墙", duration: 176 }, { name: "出口废楼", duration: 184 }, { name: "深夜的雪线", duration: 183 },
      { name: "路口铁道", duration: 201 }, { name: "久违的末班车", duration: 153 }, { name: "潮汐疾风", duration: 211 },
      { name: "漫长的高架", duration: 334 }, { name: "镜面路口", duration: 203 }, { name: "沉默的铁笼", duration: 317 },
      { name: "久违的极夜", duration: 121 }, { name: "沉默的回声壁", duration: 201 } ] },
    ],
  "海龟先生": [
    { name: "POGO不如跳舞", type: "EP", date: "2005-11-01", songs: [
      { name: "你好再见", duration: 270 } ] },
    { name: "海龟先生", type: "专辑", date: "2012-12-31", rating: 8.1, songs: [
       { name: "玛卡瑞纳", duration: 245 }, { name: "年轻", duration: 260 }, { name: "一起跳舞", duration: 184 },
       { name: "好片明星", duration: 166 }, { name: "小酒馆", duration: 273 }, { name: "保持火力", duration: 210 },
       { name: "男孩别哭", duration: 306 }, { name: "微笑", duration: 213 }, { name: "加州", duration: 325 } ] },
    { name: "Where are you going?", type: "专辑", date: "2014-06-28", songs: [
       { name: "Where Are You Going?", duration: 243 }, { name: "悬崖巴士", duration: 382 },
       { name: "脱狱", duration: 290 }, { name: "她", duration: 161 }, { name: "接纳", duration: 327 },
       { name: "给摇滚绑架", duration: 257 }, { name: "那时阳光明媚", duration: 181 }, { name: "变形金刚", duration: 150 },
       { name: "Snoopy", duration: 211 }, { name: "Last Chance", duration: 217 } ] },
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
      { name: "走廊废楼", type: "专辑", date: "2028-03-01", songs: [
      { name: "走廊废楼", duration: 252 }, { name: "铁轨高墙", duration: 242 }, { name: "铁轨电塔", duration: 254 },
      { name: "潮汐铁轨", duration: 237 }, { name: "沉默的电线", duration: 193 }, { name: "长风", duration: 284 },
      { name: "铁笼曦光", duration: 199 }, { name: "高架落雪", duration: 415 }, { name: "夜航车窗", duration: 265 },
      { name: "荒岛", duration: 362 } ] },
    { name: "沙漏信号灯", type: "专辑", date: "2032-03-05", songs: [
      { name: "沙漏信号灯", duration: 160 }, { name: "街灯潮声", duration: 248 }, { name: "沉默的极夜", duration: 286 },
      { name: "荒岛寒潮", duration: 281 }, { name: "久违的夜潮", duration: 260 }, { name: "无名的暗涌", duration: 241 },
      { name: "遥远的街角", duration: 235 }, { name: "回声冷月", duration: 235 }, { name: "暮色黑巷", duration: 271 } ] },
    { name: "风口渡轮", type: "专辑", date: "2036-10-09", songs: [
      { name: "风口渡轮", duration: 247 }, { name: "沉默的信号灯", duration: 260 }, { name: "铁笼回声壁", duration: 235 },
      { name: "长夜走廊", duration: 253 }, { name: "沉默的天光", duration: 253 }, { name: "遥远的暗涌", duration: 224 },
      { name: "无名的沙漏", duration: 250 }, { name: "空城野火", duration: 255 }, { name: "遥远的潮声", duration: 223 },
      { name: "灰墙荒野", duration: 279 }, { name: "漫长的夜车", duration: 260 } ] },
    { name: "沉默的匝道", type: "专辑", date: "2040-12-18", songs: [
      { name: "沉默的匝道", duration: 258 }, { name: "野火晚钟", duration: 249 }, { name: "天桥出口", duration: 266 },
      { name: "屋顶断层", duration: 238 }, { name: "遥远的公路", duration: 283 }, { name: "沉默的空城", duration: 218 },
      { name: "无名的车窗", duration: 305 }, { name: "电线暮色", duration: 246 } ] },
    { name: "闪电废楼", type: "专辑", date: "2044-10-27", songs: [
      { name: "闪电废楼", duration: 312 }, { name: "碎片暴雨", duration: 240 }, { name: "沉默的断线", duration: 268 },
      { name: "无名的天桥", duration: 255 }, { name: "沉默的余烬", duration: 243 }, { name: "涂鸦回声壁", duration: 244 },
      { name: "晚钟荒原", duration: 187 } ] },
    { name: "暮色信号灯", type: "专辑", date: "2048-11-30", songs: [
      { name: "暮色信号灯", duration: 145 }, { name: "深夜的荒野", duration: 262 }, { name: "铁门远方", duration: 265 },
      { name: "沉默的静默", duration: 267 }, { name: "遥远的荒原", duration: 256 }, { name: "无名的雨篷", duration: 165 },
      { name: "野猫废楼", duration: 226 }, { name: "久违的公路", duration: 250 } ] },
    ],
  "后海大鲨鱼": [
    { name: "Queen Sea Big Shark", type: "专辑", date: "2007-01-01", songs: [
       { name: "Lightning Metropolis", duration: 123 }, { name: "Hard Heart", duration: 216 },
       { name: "No! No! No!", duration: 196 }, { name: "Tiger Dance", duration: 142 },
       { name: "Kiss! Kill! Bang!", duration: 191 }, { name: "Girl Boss", duration: 20 },
       { name: "Man on the Moon", duration: 287 }, { name: "Hello! Passengers", duration: 371 },
       { name: "Hold Your Hand", duration: 212 }, { name: "Dirty Mind", duration: 151 },
       { name: "Money Fxxker", duration: 197 }, { name: "Lady Sisters", duration: 281 },
       { name: "Get Away", duration: 167 }, { name: "Love Is Pop", duration: 295 } ] },
    { name: "浪潮", type: "专辑", date: "2010-01-01", songs: [
       { name: "GLOW IN THE DARK", duration: 254 }, { name: "BACK 2 THE FUTURE", duration: 228 },
       { name: "E OCEAN", duration: 300 }, { name: "COMXXPUDA", duration: 212 },
       { name: "LOOP OF THE SUN", duration: 234 }, { name: "WAVE", duration: 383 },
       { name: "NEO!MAN", duration: 258 }, { name: "STARZ", duration: 293 }, { name: "YOUTH", duration: 283 },
       { name: "C.B.D", duration: 376 } ] },
    { name: "心要野", type: "专辑", date: "2015-03-18", rating: 8.3, songs: [
       { name: "心要野", duration: 276 }, { name: "喜马拉雅", duration: 316 }, { name: "猛犸", duration: 304 },
       { name: "时间之间", duration: 370 }, { name: "今夜留给今夜吧", duration: 296 }, { name: "漂流去世界最中心", duration: 289 },
       { name: "88奥林匹克", duration: 351 }, { name: "偷月亮的人", duration: 414 }, { name: "时髦人都好fancy", duration: 227 },
       { name: "后海冲浪手", duration: 269 }, { name: "BlingBlingbling", duration: 284 } ] },
      { name: "Broken", type: "专辑", date: "2028-02-22", songs: [
      { name: "Broken（破碎）", duration: 151 }, { name: "Echo Hollow（回声的空洞）", duration: 207 }, { name: "Snow（雪）", duration: 179 },
      { name: "Storm Fable（风暴的寓言）", duration: 239 }, { name: "Pond（池塘）", duration: 256 }, { name: "Silence（沉寂）", duration: 262 },
      { name: "Harbor Ocean（港湾的海洋）", duration: 262 }, { name: "Tower（塔）", duration: 282 }, { name: "Pebble Path（卵石的小径）", duration: 238 } ] },
    { name: "Ocean", type: "专辑", date: "2032-09-01", songs: [
      { name: "Ocean（海洋）", duration: 251 }, { name: "Sundown（日落）", duration: 282 }, { name: "Ballet（芭蕾）", duration: 260 },
      { name: "Blossom（花开）", duration: 230 }, { name: "Lake Tide（湖的潮汐）", duration: 202 }, { name: "Sea（海）", duration: 269 },
      { name: "Lantern（灯笼）", duration: 239 }, { name: "Undertow Ashes（暗流的灰烬）", duration: 287 } ] },
    { name: "Amber", type: "专辑", date: "2036-09-11", songs: [
      { name: "Amber（琥珀）", duration: 347 }, { name: "Cloud（云）", duration: 276 }, { name: "Bloom Star（绽放的星）", duration: 236 },
      { name: "Bloom Desert（绽放的荒原）", duration: 262 }, { name: "Leaf（叶）", duration: 197 }, { name: "Wires Broken（电线的破碎）", duration: 304 },
      { name: "Rust（锈迹）", duration: 205 }, { name: "Bloom Vine（绽放的藤蔓）", duration: 283 }, { name: "Forest（森林）", duration: 374 } ] },
    { name: "Lake", type: "专辑", date: "2040-02-26", songs: [
      { name: "Lake（湖）", duration: 253 }, { name: "Shore Nightfall（岸边的夜幕）", duration: 239 }, { name: "Iron（铁）", duration: 234 },
      { name: "Thaw（融雪）", duration: 172 }, { name: "Silk（丝绸）", duration: 294 }, { name: "Diamond（钻石）", duration: 278 },
      { name: "Velvet Veil（天鹅绒的帷幕）", duration: 243 }, { name: "Dust（尘埃）", duration: 230 } ] },
    { name: "Roof Smoke", type: "专辑", date: "2044-05-20", songs: [
      { name: "Roof Smoke（屋顶的烟雾）", duration: 237 }, { name: "Wood Velvet（树林的天鹅绒）", duration: 262 }, { name: "Spark（火花）", duration: 275 },
      { name: "Ridge Grain（山脊的颗粒）", duration: 251 }, { name: "Harbor（港湾）", duration: 235 }, { name: "Midnight（午夜）", duration: 267 },
      { name: "Vapor Storm（雾霭的风暴）", duration: 232 }, { name: "Feather（羽毛）", duration: 282 }, { name: "Canvas（画布）", duration: 252 },
      { name: "Ember Veil（余烬的帷幕）", duration: 283 } ] },
    { name: "Sky", type: "专辑", date: "2049-04-12", songs: [
      { name: "Sky（天空）", duration: 218 }, { name: "Crystal（水晶）", duration: 265 }, { name: "Window（窗）", duration: 280 },
      { name: "Song Veil（歌的帷幕）", duration: 176 }, { name: "Blossom Path（花开的小径）", duration: 478 }, { name: "Anchor Ice（锚的冰）", duration: 214 },
      { name: "Coral Tower（珊瑚的塔）", duration: 308 }, { name: "Sun（太阳）", duration: 219 }, { name: "Glow（辉光）", duration: 260 } ] },
    ],
  "木马乐队": [
    { name: "木马", type: "专辑", date: "1999-12-01", rating: 8.2, songs: [
      { name: "低处生活", duration: 280 }, { name: "没有声音的房间", duration: 290 } ] },
    { name: "Yellow Star", type: "EP", date: "2003-04-21", songs: [
      { name: "爱得像蜜糖", duration: 280 }, { name: "我失去了她", duration: 270 }, { name: "美丽的南方", duration: 290 },
      { name: "Feifei Run", duration: 300 }, { name: "伟大的演奏家", duration: 280 } ] },
    { name: "果冻帝国", type: "专辑", date: "2004-09-01", rating: 8.0, songs: [
       { name: "庆祝生活的方法", duration: 409 }, { name: "Feifei Run", duration: 296 }, { name: "超级Party", duration: 364 },
       { name: "情节", duration: 245 }, { name: "果冻帝国", duration: 338 }, { name: "把嘴唇摘除掉", duration: 195 },
       { name: "美丽的南方", duration: 433 }, { name: "如果真的恨一个人，那就是我自己", duration: 339 },
       { name: "我失去了她 (Remix)", duration: 247 }, { name: "Run Feifei.Run", duration: 213 } ] },
    { name: "丝绒公路", type: "专辑", date: "2007-01-01", songs: [
       { name: "Intro", duration: 129 }, { name: "天鹅绒", duration: 278 }, { name: "她是黯淡星", duration: 324 },
       { name: "爱在流逝中", duration: 262 }, { name: "你想跳支怎样的舞", duration: 168 }, { name: "赞美之歌", duration: 262 },
       { name: "欲望号", duration: 341 }, { name: "超现实预言", duration: 258 }, { name: "The third party", duration: 327 },
       { name: "他真的在哭泣", duration: 340 } ] },
    { name: "进化", type: "专辑", date: "2011-01-01", songs: [
       { name: "进化", duration: 450 }, { name: "纳迪", duration: 350 }, { name: "空洞", duration: 382 },
       { name: "无可救药", duration: 278 }, { name: "像一个漩涡", duration: 326 }, { name: "守护", duration: 409 },
       { name: "黑色的奔驰舞", duration: 359 }, { name: "弱冠之年", duration: 382 }, { name: "当黎明温暖的风……", duration: 304 },
       { name: "彼岸", duration: 296 } ] },
    { name: "旧城之王", type: "专辑", date: "2018-12-05", songs: [
       { name: "旧城之王", duration: 318 } ] },
      { name: "环流霓虹", type: "专辑", date: "2027-10-07", songs: [
      { name: "环流霓虹", duration: 535 }, { name: "闪电巷子", duration: 314 }, { name: "霓虹信号", duration: 220 },
      { name: "雨篷余烬", duration: 299 }, { name: "高墙深巷", duration: 246 }, { name: "惊雷夜航", duration: 289 },
      { name: "断层环流", duration: 330 } ] },
    { name: "沙漏风铃", type: "专辑", date: "2031-09-09", songs: [
      { name: "沙漏风铃", duration: 314 }, { name: "暮云信号灯", duration: 313 }, { name: "星光阁楼", duration: 288 },
      { name: "阁楼天光", duration: 560 }, { name: "潮间带天光", duration: 312 }, { name: "岔路白墙", duration: 330 },
      { name: "遥远的高架", duration: 177 }, { name: "潮汐残响", duration: 550 }, { name: "台阶霓虹", duration: 401 } ] },
    { name: "遥远的影中人", type: "专辑", date: "2034-09-16", songs: [
      { name: "遥远的影中人", duration: 326 }, { name: "车窗极夜", duration: 174 }, { name: "骤雨逆流", duration: 303 },
      { name: "久违的暴雨", duration: 257 }, { name: "码头涂鸦", duration: 284 }, { name: "汽笛潮声", duration: 307 },
      { name: "灰墙旧巷", duration: 305 } ] },
    { name: "回声铁桥", type: "专辑", date: "2038-03-18", songs: [
      { name: "回声铁桥", duration: 252 }, { name: "沉默的霜降", duration: 283 }, { name: "尘埃光年", duration: 293 },
      { name: "灰墙楼顶", duration: 332 }, { name: "落雪裂痕", duration: 305 }, { name: "久违的野火", duration: 283 },
      { name: "晚风夜潮", duration: 257 }, { name: "铁门信号", duration: 176 }, { name: "沉默的深巷", duration: 319 },
      { name: "久违的尘埃", duration: 361 }, { name: "环流冷月", duration: 303 } ] },
    { name: "公路曦光", type: "专辑", date: "2041-10-18", songs: [
      { name: "公路曦光", duration: 361 }, { name: "倒影铁桥", duration: 304 }, { name: "沉默的夜班", duration: 265 },
      { name: "沉默的游园", duration: 318 }, { name: "深巷暗巷", duration: 293 }, { name: "极夜隧道", duration: 284 },
      { name: "深夜落雪", duration: 307 }, { name: "暗涌阁楼", duration: 309 }, { name: "残阳潮声", duration: 320 },
      { name: "遥远的尘埃", duration: 187 } ] },
    { name: "逆旅空城", type: "专辑", date: "2045-08-12", songs: [
      { name: "逆旅空城", duration: 320 }, { name: "碎片电线", duration: 307 }, { name: "深夜的风口", duration: 326 },
      { name: "回声匝道", duration: 356 }, { name: "光年野猫", duration: 298 }, { name: "深夜巷子", duration: 296 },
      { name: "沙漏余烬", duration: 282 } ] },
    { name: "沉默的远方", type: "专辑", date: "2048-12-09", songs: [
      { name: "沉默的远方", duration: 286 }, { name: "无名的汽笛", duration: 312 }, { name: "远方铁道", duration: 335 },
      { name: "沉默的旧城", duration: 177 }, { name: "久违的沙丘", duration: 240 }, { name: "甲板末班车", duration: 327 },
      { name: "漫长的汽笛", duration: 370 } ] },
    ],
  "舌头乐队": [
    { name: "小鸡出壳", type: "专辑", date: "1999-01-01", rating: 8.3, songs: [
       { name: "贼船(On Board)", duration: 283 }, { name: "仙人掌(Cactus)", duration: 190 },
       { name: "下注(Bet)", duration: 460 }, { name: "三十七计(Thirty-Seven Stratagems)", duration: 189 },
       { name: "看你的了(It's Up to You)", duration: 337 }, { name: "猜(Guess)", duration: 147 },
       { name: "歌颂你赞美你(Praise You)", duration: 253 } ] },
    { name: "这就是你", type: "专辑", date: "2002-01-01", rating: 8.1, songs: [
       { name: "乌鸦", duration: 425 }, { name: "中国龙", duration: 278 }, { name: "靶子", duration: 168 },
       { name: "尾巴", duration: 292 }, { name: "这就是你", duration: 386 } ] },
    { name: "妈妈一起飞吧，妈妈一起摇滚吧", type: "专辑", date: "2014-08-01", songs: [
       { name: "这就是我", duration: 280 }, { name: "猜", duration: 184 }, { name: "妈妈一起飞吧，妈妈一起摇滚吧", duration: 507 } ] },
    { name: "原始人爱空调协会", type: "专辑", date: "2016-08-01", rating: 7.9, songs: [
       { name: "对牛弹琴", duration: 664 }, { name: "转基因共和国里的辩证唯心主义者", duration: 297 },
       { name: "机器。。全人类", duration: 494 }, { name: "时光机器", duration: 809 }, { name: "原始人爱空调协会", duration: 230 },
       { name: "动物和人", duration: 574 } ] },
    { name: "怎么能够说我爱你", type: "专辑", date: "2019-01-01", songs: [
      { name: "怎么能够说我爱你", duration: 300 } ] },
    { name: "中国制造", type: "专辑", date: "2021-01-01", songs: [
      { name: "猫和老鼠", duration: 280 }, { name: "摇滚教父", duration: 270 } ] },
      { name: "阁楼迷途", type: "专辑", date: "2027-12-29", songs: [
      { name: "阁楼迷途", duration: 331 }, { name: "初晴断层", duration: 210 }, { name: "废楼暮云", duration: 315 },
      { name: "暗巷极夜", duration: 413 }, { name: "尘埃荒野", duration: 361 }, { name: "铁门潮汐", duration: 352 },
      { name: "车窗雨夜", duration: 343 }, { name: "碎片暮色", duration: 419 }, { name: "街灯路口", duration: 420 },
      { name: "暗涌匝道", duration: 314 }, { name: "疾风黑巷", duration: 289 } ] },
    { name: "星光灰墙", type: "专辑", date: "2032-02-03", songs: [
      { name: "星光灰墙", duration: 294 }, { name: "遥远的旧城", duration: 339 }, { name: "久违的楼顶", duration: 313 },
      { name: "路口晨雾", duration: 274 }, { name: "暮光夜雾", duration: 363 }, { name: "暗涌逆旅", duration: 337 },
      { name: "久违的白墙", duration: 343 }, { name: "铁道台阶", duration: 355 }, { name: "斑马线杂草", duration: 201 },
      { name: "水岸屋顶", duration: 316 }, { name: "无名的水岸", duration: 357 } ] },
    { name: "断线倒影", type: "专辑", date: "2036-08-19", songs: [
      { name: "断线倒影", duration: 334 }, { name: "深夜的远方", duration: 353 }, { name: "无名的倒影", duration: 315 },
      { name: "久违的回声壁", duration: 317 }, { name: "霓虹旧巷", duration: 270 }, { name: "雪线高墙", duration: 358 },
      { name: "夜航惊雷", duration: 378 } ] },
    { name: "无名的潮间带", type: "专辑", date: "2040-11-17", songs: [
      { name: "无名的潮间带", duration: 560 }, { name: "铁桥天光", duration: 358 }, { name: "锈迹旧城", duration: 369 },
      { name: "深夜的黑巷", duration: 372 }, { name: "风筝走廊", duration: 358 }, { name: "深夜渡轮", duration: 342 },
      { name: "废墟晚风", duration: 355 }, { name: "暗涌暴雨", duration: 366 } ] },
    { name: "涂鸦镜面", type: "专辑", date: "2044-05-14", songs: [
      { name: "涂鸦镜面", duration: 373 }, { name: "深夜的隧道", duration: 367 }, { name: "深夜的逆旅", duration: 415 },
      { name: "天桥镜面", duration: 410 }, { name: "落雪潮间带", duration: 343 }, { name: "无名的荒径", duration: 335 },
      { name: "空城末班车", duration: 560 } ] },
    { name: "公路杂草", type: "专辑", date: "2049-03-02", songs: [
      { name: "公路杂草", duration: 356 }, { name: "寒潮尘埃", duration: 382 }, { name: "电线荒径", duration: 352 },
      { name: "沙漏天桥", duration: 328 }, { name: "电塔归途", duration: 326 }, { name: "冷月杂草", duration: 349 },
      { name: "回声霜降", duration: 338 }, { name: "旧城潮汐", duration: 351 } ] },
    ],
  "杭盖乐队": [
    { name: "介绍杭盖", type: "专辑", date: "2008-07-28", rating: 8.0, songs: [
       { name: "我的陶布竖尔", duration: 224 }, { name: "呼和那木吉拉的骏马", duration: 175 }, { name: "交德日娜娜", duration: 119 },
       { name: "五条好汉", duration: 331 }, { name: "花儿", duration: 181 }, { name: "黑小子", duration: 204 },
       { name: "乌仁都西", duration: 155 }, { name: "波如莱", duration: 234 }, { name: "酒歌", duration: 240 },
       { name: "四季", duration: 308 } ] },
    { name: "远走的人", type: "专辑", date: "2010-10-25", rating: 8.1, songs: [
       { name: "戈壁路 Gobi Road", duration: 213 }, { name: "乌仁都希 Uruumdush", duration: 162 },
       { name: "圆顶的帽子 Yuan Ding Cap", duration: 188 }, { name: "海然，海然 Hairan Hairan", duration: 203 },
       { name: "樟登树 ZHANG DAN", duration: 146 }, { name: "察哈尔 Cha Har", duration: 238 },
       { name: "希格希日 Xiger Xiger", duration: 293 }, { name: "波如来 Borulai's Lullab", duration: 200 },
       { name: "杭盖 Hanggai", duration: 355 }, { name: "酒歌 Ayrhindu", duration: 214 },
       { name: "四季 Dorov Morlaril", duration: 332 }, { name: "金手镯 Golden Bangle", duration: 251 },
       { name: "远走的人 He Who Travels Far", duration: 211 }, { name: "托尔金山 Togur Jin Mountain", duration: 202 },
       { name: "兄弟 Brothers", duration: 270 }, { name: "漂亮的蒙古马 Beautiful Mongolian Horse", duration: 283 },
       { name: "达亚波尔 Daya Boor", duration: 203 } ] },
    { name: "四季", type: "专辑", date: "2012-05-01", rating: 7.9, songs: [
       { name: "戈壁路", duration: 213 }, { name: "乌仁都西", duration: 162 }, { name: "圆顶帽", duration: 188 },
       { name: "海然海然", duration: 203 }, { name: "希格希日", duration: 293 }, { name: "波如莱", duration: 200 },
       { name: "杭盖", duration: 355 }, { name: "酒歌", duration: 214 }, { name: "花儿", duration: 181 },
       { name: "四季", duration: 332 }, { name: "托尔金山", duration: 202 } ] },
    { name: "回到你身旁", type: "专辑", date: "2014-05-22", songs: [
       { name: "回到你身旁（拜访）(BAIFANG)", duration: 226 }, { name: "硕特英雄 (Hershut Hero)", duration: 236 },
       { name: "五条好汉 (TAVAN HASAG)", duration: 350 }, { name: "思念女儿 (MISS DAUGHTER)", duration: 278 },
       { name: "青海摇篮曲(Qinghai Lullaby)", duration: 169 }, { name: "鸿雁 (HONG GALUU)", duration: 241 },
       { name: "金扣子 (Gold Buttons)", duration: 349 }, { name: "乌兰巴托之夜 (ULANBATAAR NIGHTS)", duration: 293 },
       { name: "白河滩上的兔子 (Long Song, the Rabbit on the White River Bank)", duration: 252 },
       { name: "金秋 (Golden Autumn)", duration: 340 }, { name: "我的母亲(My Mother)", duration: 287 },
       { name: "呼和那木吉拉的骏马 (HUHE NAMJILA)", duration: 259 },
       { name: "漂亮的蒙古马(Beautiful Mongolian Horse)", duration: 426 }, { name: "达亚波尔 (DAYA BALA)", duration: 224 },
       { name: "河套湾高树 (High Trees)", duration: 269 } ] },
    { name: "花斑马", type: "专辑", date: "2016-05-15", songs: [
       { name: "花斑马", duration: 343 }, { name: "轮回", duration: 268 }, { name: "阿里河，母亲河", duration: 148 },
       { name: "海然海然", duration: 300 }, { name: "初升的太阳", duration: 347 }, { name: "美丽的草原我的家", duration: 220 },
       { name: "上海产的半导体", duration: 263 }, { name: "小兔子", duration: 222 }, { name: "辽阔的草原", duration: 381 },
       { name: "故乡山峰", duration: 247 }, { name: "天上的风", duration: 288 }, { name: "圣主", duration: 160 } ] },
    { name: "故乡", type: "专辑", date: "2017-01-01", songs: [
       { name: "喇嘛大叔探亲记", duration: 250 }, { name: "汗青格勒", duration: 254 }, { name: "Dink's Song", duration: 262 },
       { name: "杭盖精神", duration: 402 }, { name: "父亲", duration: 282 }, { name: "枣红马", duration: 362 },
       { name: "江格尔", duration: 261 }, { name: "故乡", duration: 391 }, { name: "探望慈母", duration: 260 },
       { name: "嘎达梅林", duration: 347 }, { name: "恒干河畔的雀", duration: 248 }, { name: "超越才酷", duration: 148 } ] },
    { name: "杭盖与铜管", type: "专辑", date: "2019-01-01", songs: [
       { name: "鸿雁", duration: 271 }, { name: "丁吉图湾", duration: 286 }, { name: "四岁的海骝马", duration: 39 },
       { name: "古纳根乌兰巴特", duration: 338 }, { name: "北边的芨芨草", duration: 352 }, { name: "花斑马", duration: 324 },
       { name: "约会", duration: 351 }, { name: "乌仁都希", duration: 222 }, { name: "戈壁路", duration: 284 },
       { name: "初升的太阳", duration: 340 }, { name: "喇嘛大叔寻亲记", duration: 212 }, { name: "上海产的半导体", duration: 284 } ] },
      { name: "沉默的破碎", type: "专辑", date: "2027-03-08", songs: [
      { name: "沉默的破碎", duration: 234 }, { name: "铁蹄", duration: 274 }, { name: "铁誓", duration: 248 },
      { name: "铁链", duration: 302 }, { name: "铁壁", duration: 249 }, { name: "冰川", duration: 244 },
      { name: "铁塔审判", duration: 275 }, { name: "极昼", duration: 246 }, { name: "石柱", duration: 244 } ] },
    { name: "亡魂雷鸣", type: "专辑", date: "2029-05-19", songs: [
      { name: "亡魂雷鸣", duration: 452 }, { name: "铁骑", duration: 219 }, { name: "钢铁", duration: 251 },
      { name: "无名的钢铁", duration: 234 }, { name: "深夜的铁血", duration: 236 }, { name: "战旗", duration: 236 },
      { name: "沉默的绝境", duration: 234 }, { name: "漫长的破碎", duration: 275 }, { name: "长矛铁诫", duration: 280 },
      { name: "王座铁盔", duration: 178 }, { name: "铁峰", duration: 272 } ] },
    { name: "寒夜", type: "专辑", date: "2031-05-12", songs: [
      { name: "寒夜", duration: 261 }, { name: "灰烬城", duration: 410 }, { name: "石柱熔炉", duration: 282 },
      { name: "狂暴", duration: 157 }, { name: "战车", duration: 457 }, { name: "铁丘", duration: 235 },
      { name: "王座战旗", duration: 242 }, { name: "荒原燃烧", duration: 247 } ] },
    { name: "铁盔", type: "专辑", date: "2033-06-29", songs: [
      { name: "铁盔", duration: 178 }, { name: "怒吼", duration: 233 }, { name: "寒霜苍穹", duration: 270 },
      { name: "崩裂", duration: 253 }, { name: "暗狱铁诫", duration: 240 }, { name: "高原", duration: 252 },
      { name: "绝境", duration: 243 }, { name: "铁渊", duration: 244 } ] },
    { name: "黑潮", type: "专辑", date: "2035-08-06", songs: [
      { name: "黑潮", duration: 209 }, { name: "审判", duration: 246 }, { name: "铁座血河", duration: 235 },
      { name: "灰烬城铁渊", duration: 307 }, { name: "久违的铸剑", duration: 159 }, { name: "深夜的黑铁", duration: 196 },
      { name: "铁血", duration: 208 }, { name: "苍穹", duration: 215 }, { name: "铁羽", duration: 233 } ] },
    { name: "火海纪念碑", type: "专辑", date: "2037-07-07", songs: [
      { name: "火海纪念碑", duration: 274 }, { name: "巨浪雷鸣", duration: 185 }, { name: "黑焰", duration: 280 },
      { name: "炼狱", duration: 220 }, { name: "战鼓", duration: 181 }, { name: "战鼓深渊", duration: 294 },
      { name: "久违的燃烧", duration: 217 }, { name: "铁轨铁爪", duration: 238 }, { name: "冰川绝境", duration: 263 },
      { name: "亡魂", duration: 251 }, { name: "沉默的巨浪", duration: 281 } ] },
    { name: "沉默的荒原", type: "专辑", date: "2039-09-06", songs: [
      { name: "沉默的荒原", duration: 241 }, { name: "石柱冰川", duration: 161 }, { name: "铁丘铁座", duration: 311 },
      { name: "深夜的狂暴", duration: 237 }, { name: "铁诫", duration: 267 }, { name: "沉默的铁羽", duration: 279 },
      { name: "巅峰铁律", duration: 445 }, { name: "极昼铁矛", duration: 345 }, { name: "王座铁链", duration: 343 },
      { name: "漫长的铁座", duration: 262 }, { name: "孤城", duration: 154 } ] },
    { name: "无名的寒霜", type: "专辑", date: "2041-10-07", songs: [
      { name: "无名的寒霜", duration: 172 }, { name: "黑日", duration: 259 }, { name: "久违的孤城", duration: 257 },
      { name: "铁骨", duration: 254 }, { name: "沉默的熔炉", duration: 281 }, { name: "血誓", duration: 245 },
      { name: "铁座铁渊", duration: 406 }, { name: "久违的铁座", duration: 234 }, { name: "荒岭", duration: 391 } ] },
    { name: "血月怒吼", type: "专辑", date: "2043-12-18", songs: [
      { name: "血月怒吼", duration: 252 }, { name: "极北铁律", duration: 237 }, { name: "沉默的火海", duration: 203 },
      { name: "钢铁铁冠", duration: 182 }, { name: "亡魂铁盔", duration: 272 }, { name: "荒岭黑铁", duration: 277 },
      { name: "无名的深渊", duration: 251 }, { name: "遥远的炼狱", duration: 246 }, { name: "无名的雷鸣", duration: 248 } ] },
    { name: "久违的破碎", type: "专辑", date: "2046-01-17", songs: [
      { name: "久违的破碎", duration: 151 }, { name: "无名的燃烧", duration: 278 }, { name: "久违的长矛", duration: 233 },
      { name: "铁轨铁蹄", duration: 231 }, { name: "沉默的战鼓", duration: 256 }, { name: "铁羽寒夜", duration: 253 },
      { name: "极北铁塔", duration: 288 } ] },
    { name: "铁血极昼", type: "专辑", date: "2047-11-02", songs: [
      { name: "铁血极昼", duration: 241 }, { name: "无名的石柱", duration: 260 }, { name: "黑铁", duration: 310 },
      { name: "破碎", duration: 274 }, { name: "铁律战鼓", duration: 261 }, { name: "遥远的铁牢", duration: 247 },
      { name: "荒岭战鼓", duration: 355 }, { name: "沉默的铁魂", duration: 166 } ] },
    { name: "铁冠", type: "专辑", date: "2049-12-18", songs: [
      { name: "铁冠", duration: 243 }, { name: "久违的铁魂", duration: 249 }, { name: "遥远的铁骨", duration: 243 },
      { name: "铁锤", duration: 471 }, { name: "久违的纪念碑", duration: 245 }, { name: "遥远的绝境", duration: 180 },
      { name: "久违的巨浪", duration: 270 } ] },
    ],
  "九宝乐队": [
    { name: "十丈铜嘴", type: "专辑", date: "2012-05-05", rating: 7.9, songs: [
      { name: "圣赞", duration: 132 }, { name: "神秘之力", duration: 207 }, { name: "十丈铜嘴", duration: 235 },
      { name: "骑兵", duration: 236 }, { name: "娜明达赖", duration: 168 }, { name: "吆呼尔", duration: 164 },
      { name: "英雄", duration: 206 }, { name: "钟声为谁而鸣", duration: 305 }, { name: "神秘之力(Acoustic)", duration: 205 } ] },
    { name: "九宝", type: "专辑", date: "2013-12-13", rating: 8.0, songs: [
       { name: "序曲", duration: 115 }, { name: "黑心", duration: 228 }, { name: "特斯河之赞", duration: 233 },
       { name: "Sonsii", duration: 240 }, { name: "满古斯寓言", duration: 297 }, { name: "骏马赞", duration: 233 },
       { name: "映山红花满山坡", duration: 247 }, { name: "城南游幻", duration: 234 }, { name: "三岁神童", duration: 285 } ] },
    { name: "灵眼", type: "专辑", date: "2016-08-19", rating: 8.1, songs: [
       { name: "顽固", duration: 286 }, { name: "我的呼伦贝尔", duration: 184 }, { name: "灵眼", duration: 204 },
       { name: "世界末日", duration: 286 }, { name: "旗里的孩子", duration: 221 }, { name: "你与我", duration: 339 },
       { name: "王爷的袍子", duration: 274 }, { name: "不爱跳舞的孩子", duration: 234 }, { name: "十年", duration: 283 } ] },
    { name: "Awakening From Dukkha", type: "精选", date: "2020-11-18", songs: [
      { name: "特斯河之赞", duration: 290 }, { name: "黑心", duration: 280 } ] },
    { name: "究极之境", type: "专辑", date: "2025-09-24", songs: [
       { name: "直到如今", duration: 296 }, { name: "彷徨", duration: 287 }, { name: "黑金暴风 (纯器乐)", duration: 95 },
       { name: "青铜鹰隼", duration: 304 }, { name: "真梦", duration: 310 }, { name: "愈来愈近", duration: 336 },
       { name: "正如您", duration: 185 }, { name: "孤独的老马 (纯器乐)", duration: 244 }, { name: "究极之境", duration: 339 } ] },
      { name: "纪念碑铁壁", type: "单曲", date: "2028-02-01", songs: [
      { name: "纪念碑铁壁", duration: 207 } ] },
    { name: "荒岭铁座", type: "专辑", date: "2031-10-22", songs: [
      { name: "荒岭铁座", duration: 320 }, { name: "战车巅峰", duration: 241 }, { name: "铁塔铁丘", duration: 249 },
      { name: "血誓圣坛", duration: 243 }, { name: "铁谷铁羽", duration: 232 }, { name: "沉默的铁盔", duration: 220 },
      { name: "沉默的铁矛", duration: 241 }, { name: "铁魂重盾", duration: 238 } ] },
    { name: "漫长的圣坛", type: "专辑", date: "2034-09-16", songs: [
      { name: "漫长的圣坛", duration: 232 }, { name: "久违的熔炉", duration: 296 }, { name: "黑焰铁锤", duration: 157 },
      { name: "亡魂铁矛", duration: 220 }, { name: "巅峰崩裂", duration: 245 }, { name: "裂痕铁棺", duration: 191 },
      { name: "巅峰极北", duration: 249 } ] },
    { name: "铁冠崩裂", type: "专辑", date: "2038-04-20", songs: [
      { name: "铁冠崩裂", duration: 217 }, { name: "铁轨荒原", duration: 261 }, { name: "沉默的铁峰", duration: 260 },
      { name: "无名的战鼓", duration: 262 }, { name: "战鼓破碎", duration: 226 }, { name: "崩裂铁冠", duration: 231 },
      { name: "铁矛", duration: 268 }, { name: "铁盔铁血", duration: 166 } ] },
    { name: "寒霜炼狱", type: "专辑", date: "2041-10-08", songs: [
      { name: "寒霜炼狱", duration: 240 }, { name: "铁爪铁崖", duration: 240 }, { name: "崩裂雷鸣", duration: 232 },
      { name: "无名的铁血", duration: 234 }, { name: "黑日审判", duration: 290 }, { name: "铁链黑焰", duration: 244 },
      { name: "铁律铁魂", duration: 221 } ] },
    { name: "沉默的高原", type: "专辑", date: "2045-09-25", songs: [
      { name: "沉默的高原", duration: 233 }, { name: "铁谷极昼", duration: 220 }, { name: "沉默的荒岭", duration: 262 },
      { name: "漫长的铁誓", duration: 239 }, { name: "巨浪重盾", duration: 266 }, { name: "铁魂铁崖", duration: 241 },
      { name: "铸剑铁蹄", duration: 162 }, { name: "血誓雷霆", duration: 228 }, { name: "铁渊重盾", duration: 368 },
      { name: "孤鹰", duration: 265 }, { name: "铁崖", duration: 230 } ] },
    { name: "沉默的黑铁", type: "专辑", date: "2049-05-18", songs: [
      { name: "沉默的黑铁", duration: 257 }, { name: "铁冠狂暴", duration: 252 }, { name: "暗狱亡魂", duration: 283 },
      { name: "无名的铁爪", duration: 240 }, { name: "长矛圣坛", duration: 195 }, { name: "深夜的血河", duration: 158 },
      { name: "铁誓冰川", duration: 253 }, { name: "深夜的火山", duration: 172 }, { name: "遥远的纪念碑", duration: 224 } ] },
    ],
  "夜叉乐队": [
    { name: "自由", type: "专辑", date: "2000-12-01", rating: 8.0, songs: [
       { name: "四个火枪手", duration: 187 } ] },
    { name: "发发发", type: "专辑", date: "2003-06-01", songs: [
       { name: "选择", duration: 297 }, { name: "中国人的方式", duration: 193 }, { name: "是什么，让我们留在这里", duration: 345 },
       { name: "生来的本性", duration: 230 }, { name: "觉悟了", duration: 193 }, { name: "命运", duration: 251 },
       { name: "爱情", duration: 339 } ] },
    { name: "Keep on Fighting", type: "EP", date: "2006-07-15", songs: [
      { name: "Keep on Fighting", duration: 280 } ] },
    { name: "You Aren't The Loser", type: "专辑", date: "2010-01-01", songs: [
      { name: "You Aren't The Loser", duration: 280 } ] },
    { name: "暗流", type: "专辑", date: "2015-09-01", songs: [
       { name: "Intro", duration: 44 }, { name: "与魔鬼同行", duration: 271 }, { name: "恶道", duration: 295 },
       { name: "我们", duration: 223 }, { name: "暗流", duration: 370 }, { name: "心的家", duration: 397 },
       { name: "夕阳下", duration: 319 }, { name: "愿为你", duration: 276 }, { name: "逍遥骑士", duration: 250 },
       { name: "人造天堂", duration: 329 }, { name: "舞悟", duration: 357 }, { name: "如果有把上了膛的枪", duration: 368 },
       { name: "渐醒渐逝", duration: 424 } ] },
    { name: "我即是神", type: "专辑", date: "2018-01-01", songs: [
       { name: "Intro", duration: 102 }, { name: "我即是", duration: 406 }, { name: "Circle Pit", duration: 258 },
       { name: "不置可否", duration: 274 }, { name: "炼之地", duration: 325 }, { name: "自由路66号", duration: 264 },
       { name: "粉色的狗", duration: 218 }, { name: "1%", duration: 250 }, { name: "Back To Dark", duration: 304 },
       { name: "无翼鸟", duration: 341 } ] },
      { name: "铁翼苍穹", type: "专辑", date: "2027-10-25", songs: [
      { name: "铁翼苍穹", duration: 292 }, { name: "炼狱铁血", duration: 513 }, { name: "铁座", duration: 256 },
      { name: "遥远的破碎", duration: 260 }, { name: "孤城纪念碑", duration: 308 }, { name: "久违的黑日", duration: 221 },
      { name: "遥远的铁矛", duration: 367 }, { name: "极北铁轨", duration: 260 } ] },
    { name: "铁蹄铁盔", type: "专辑", date: "2031-04-17", songs: [
      { name: "铁蹄铁盔", duration: 198 }, { name: "遥远的孤鹰", duration: 277 }, { name: "沉默的铁塔", duration: 208 },
      { name: "铁谷血誓", duration: 205 }, { name: "雷鸣铁矛", duration: 205 }, { name: "铁链怒吼", duration: 289 },
      { name: "漫长的燃烧", duration: 267 } ] },
    { name: "血河", type: "专辑", date: "2034-09-21", songs: [
      { name: "血河", duration: 269 }, { name: "暗狱苍穹", duration: 307 }, { name: "铁壁孤鹰", duration: 290 },
      { name: "沉默的黑焰", duration: 283 }, { name: "狂暴铁谷", duration: 261 }, { name: "雷鸣荒岭", duration: 338 },
      { name: "雷鸣铁轨", duration: 307 } ] },
    { name: "暗狱血月", type: "专辑", date: "2038-09-15", songs: [
      { name: "暗狱血月", duration: 175 }, { name: "铁牢灰烬", duration: 279 }, { name: "无名的铁矛", duration: 254 },
      { name: "铁棺火山", duration: 203 }, { name: "铁骨极北", duration: 252 }, { name: "铁盔铁誓", duration: 267 },
      { name: "裂痕火山", duration: 278 }, { name: "暗狱铁渊", duration: 227 }, { name: "铁骑审判", duration: 264 },
      { name: "战鼓荒原", duration: 173 }, { name: "荒原铁轨", duration: 271 } ] },
    { name: "遥远的怒吼", type: "EP", date: "2042-01-31", songs: [
      { name: "遥远的怒吼", duration: 241 }, { name: "崩裂铁骨", duration: 282 }, { name: "遥远的铁盔", duration: 302 },
      { name: "亡魂崩裂", duration: 190 }, { name: "深夜的铁盔", duration: 305 } ] },
    { name: "铁骑铁塔", type: "专辑", date: "2045-07-10", songs: [
      { name: "铁骑铁塔", duration: 258 }, { name: "铁血铁谷", duration: 291 }, { name: "沉默的铁冠", duration: 300 },
      { name: "铁牢", duration: 258 }, { name: "深夜的铁幕", duration: 287 }, { name: "遥远的铁棺", duration: 198 },
      { name: "深夜的铁渊", duration: 451 }, { name: "遥远的寒夜", duration: 456 } ] },
    { name: "铁誓铁冠", type: "专辑", date: "2049-04-15", songs: [
      { name: "铁誓铁冠", duration: 271 }, { name: "沉默的炼狱", duration: 253 }, { name: "黑焰铸剑", duration: 308 },
      { name: "铁渊铁魂", duration: 528 }, { name: "沉默的雷鸣", duration: 259 }, { name: "遥远的铁壁", duration: 249 },
      { name: "圣坛亡魂", duration: 257 }, { name: "寒夜苍穹", duration: 279 }, { name: "王座裂痕", duration: 288 } ] },
    ],
  "反光镜": [
    { name: "Reflector", type: "EP", date: "2002-05-01", songs: [
      { name: "别上当", duration: 250 }, { name: "天天有时间", duration: 260 }, { name: "韩怂", duration: 250 } ] },
    { name: "成长瞬间", type: "专辑", date: "2007-10-11", songs: [
       { name: "成长瞬间", duration: 227 }, { name: "无烦恼", duration: 170 }, { name: "晚安北京", duration: 259 },
       { name: "果儿", duration: 287 }, { name: "还我蔚蓝", duration: 181 }, { name: "You Are My Sunshine", duration: 118 },
       { name: "陌生的房间", duration: 267 }, { name: "毒药", duration: 196 }, { name: "无奈", duration: 294 },
       { name: "坦白 (Explicit)", duration: 209 }, { name: "路", duration: 222 } ] },
    { name: "释你", type: "EP", date: "2010-04-26", songs: [
      { name: "溶化", duration: 260 }, { name: "只有音乐才是我的解药", duration: 280 }, { name: "嘿！姑娘", duration: 270 },
      { name: "释你", duration: 280 }, { name: "麻痹", duration: 260 }, { name: "长大", duration: 270 } ] },
    { name: "我们的歌", type: "专辑", date: "2013-12-21", rating: 7.8, songs: [
       { name: "Intro", duration: 28 }, { name: "大海", duration: 234 }, { name: "那四年", duration: 252 },
       { name: "孩子不哭", duration: 339 }, { name: "我们的歌", duration: 232 }, { name: "算了吧", duration: 298 },
       { name: "约定", duration: 266 }, { name: "冲", duration: 234 }, { name: "情愿放弃一切", duration: 322 } ] },
    { name: "因为,所以", type: "专辑", date: "2019-02-22", songs: [
       { name: "Intro", duration: 86 }, { name: "明天再说", duration: 136 }, { name: "这不是我想要的感觉", duration: 309 },
       { name: "如果不能选择，我们就去歌唱", duration: 287 }, { name: "没人在乎你", duration: 289 }, { name: "青春的代价", duration: 274 },
       { name: "以为", duration: 228 }, { name: "因为所以", duration: 76 }, { name: "来到你身边", duration: 257 } ] },
      { name: "齿轮", type: "EP", date: "2027-11-01", songs: [
      { name: "齿轮", duration: 248 }, { name: "沉默的乱码", duration: 256 }, { name: "逆反", duration: 231 } ] },
    { name: "久违的破窗", type: "专辑", date: "2032-05-27", songs: [
      { name: "久违的破窗", duration: 224 }, { name: "久违的噪点", duration: 383 }, { name: "钉子", duration: 327 },
      { name: "铁网冲锋", duration: 151 }, { name: "反光", duration: 250 }, { name: "砂纸", duration: 190 },
      { name: "烂尾", duration: 196 }, { name: "断电", duration: 184 }, { name: "呐喊", duration: 225 },
      { name: "快跑钉子", duration: 216 }, { name: "野狗", duration: 423 } ] },
    { name: "集会", type: "专辑", date: "2036-08-23", songs: [
      { name: "集会", duration: 251 }, { name: "弹簧", duration: 242 }, { name: "无名的钉子", duration: 221 },
      { name: "反骨拆迁", duration: 251 }, { name: "漫长的警报", duration: 245 }, { name: "破窗", duration: 239 },
      { name: "密电", duration: 232 }, { name: "喇叭", duration: 273 }, { name: "炮灰", duration: 223 },
      { name: "哨声", duration: 198 } ] },
    { name: "灰头涂鸦", type: "专辑", date: "2040-06-21", songs: [
      { name: "灰头涂鸦", duration: 232 }, { name: "拉链廉价", duration: 240 }, { name: "无名的呐喊", duration: 188 },
      { name: "高墙拆迁", duration: 329 }, { name: "硝烟", duration: 224 }, { name: "电线碎屏", duration: 229 },
      { name: "快闪", duration: 159 }, { name: "涂鸦碎片", duration: 254 }, { name: "火种钉子", duration: 220 },
      { name: "铁钉", duration: 245 }, { name: "断电破洞", duration: 243 } ] },
    { name: "铁网", type: "EP", date: "2044-08-16", songs: [
      { name: "铁网", duration: 238 }, { name: "弹簧烂尾", duration: 237 }, { name: "噪点", duration: 211 },
      { name: "口号", duration: 215 }, { name: "齿轮乱码", duration: 217 }, { name: "深夜的废厂", duration: 213 } ] },
    { name: "砂纸快逃", type: "专辑", date: "2048-07-16", songs: [
      { name: "砂纸快逃", duration: 229 }, { name: "野火廉价", duration: 258 }, { name: "遥远的快逃", duration: 237 },
      { name: "短路", duration: 355 }, { name: "久违的逆反", duration: 223 }, { name: "电压", duration: 243 },
      { name: "电压破洞", duration: 278 }, { name: "久违的电焊", duration: 236 }, { name: "巷子密电", duration: 225 },
      { name: "拉链电压", duration: 251 } ] },
    ],
  "脑浊": [
    { name: "踩响失真", type: "专辑", date: "2002-01-01", songs: [
       { name: "2008", duration: 172 }, { name: "Call The Police", duration: 256 },
       { name: "No Dirty Punx", duration: 217 }, { name: "Sail", duration: 202 },
       { name: "The party's down", duration: 142 }, { name: "Coming Down To Beijing", duration: 265 },
       { name: "Living In The City (Live)", duration: 277 }, { name: "Lick Me Baby", duration: 113 },
       { name: "My Simple Life", duration: 230 }, { name: "Tuqian Song's", duration: 95 },
       { name: "No Apologize", duration: 97 } ] },
    { name: "American Dreamer", type: "专辑", date: "2004-08-01", songs: [
       { name: "Listen to My Back", duration: 169 }, { name: "Stay Free", duration: 129 },
       { name: "Second Hand Pogo", duration: 164 }, { name: "Played", duration: 113 },
       { name: "Coming to the USA", duration: 201 }, { name: "Fun and Fight Tonight", duration: 183 },
       { name: "Holy Bullshit", duration: 135 }, { name: "Summer Afternoon", duration: 114 },
       { name: "8899", duration: 180 }, { name: "Give Me the Cash", duration: 204 },
       { name: "Oi! Man", duration: 115 }, { name: "Human", duration: 146 },
       { name: "Such a Dangerous", duration: 202 }, { name: "Hangout Tonight", duration: 133 },
       { name: "Come Together", duration: 182 }, { name: "New York City", duration: 147 } ] },
    { name: "欢迎来到北京", type: "专辑", date: "2007-03-01", songs: [
       { name: "HUMAN", duration: 146 }, { name: "Coming Down To Beijing", duration: 224 } ] },
    { name: "歪打正着", type: "专辑", date: "2012-11-01", songs: [
       { name: "碎肉拌面肉啃肉", duration: 260 }, { name: "我比你OK", duration: 275 }, { name: "给我一刀", duration: 213 },
       { name: "永远的乌托邦", duration: 335 }, { name: "街上的疯子", duration: 166 }, { name: "我总是", duration: 248 },
       { name: "十年", duration: 247 }, { name: "歪打正着", duration: 320 }, { name: "八千里路云和月", duration: 289 } ] },
    { name: "皂.白", type: "专辑", date: "2016-01-01", songs: [
       { name: "Future", duration: 0 }, { name: "My Week", duration: 0 }, { name: "无所畏", duration: 0 },
       { name: "My Generation", duration: 0 }, { name: "你还好吗 我的愤怒", duration: 0 }, { name: "等等 我的青春", duration: 0 },
       { name: "绿色生命线", duration: 0 }, { name: "无法忍受", duration: 0 }, { name: "野火", duration: 0 },
       { name: "无所畏 (30秒预告版)", duration: 0 }, { name: "再见乌托邦", duration: 0 }, { name: "理想的新街口", duration: 0 },
       { name: "我比你OK", duration: 0 }, { name: "游击队之歌", duration: 0 }, { name: "顽主", duration: 0 },
       { name: "TA", duration: 0 }, { name: "Call the Police", duration: 0 }, { name: "摇滚的琴人", duration: 0 },
       { name: "永远的乌托邦", duration: 0 } ] },
      { name: "Moon", type: "专辑", date: "2027-08-06", songs: [
      { name: "Moon（月亮）", duration: 218 }, { name: "Grain Snow（颗粒的雪）", duration: 189 }, { name: "Nest（巢）", duration: 177 },
      { name: "Roof（屋顶）", duration: 187 }, { name: "Shell（贝壳）", duration: 195 }, { name: "Dawn Glimmer（黎明的微光）", duration: 179 },
      { name: "Soil Road（土壤的道路）", duration: 190 }, { name: "Vapor（雾霭）", duration: 228 } ] },
    { name: "Lake Pulse", type: "专辑", date: "2031-07-14", songs: [
      { name: "Lake Pulse（湖的脉冲）", duration: 274 }, { name: "Overcast（阴云）", duration: 197 }, { name: "Loam Faded（沃土的褪色）", duration: 178 },
      { name: "Winter（冬天）", duration: 231 }, { name: "Drift（漂流）", duration: 180 }, { name: "Shell Void（贝壳的虚空）", duration: 176 },
      { name: "Mirrors（镜子）", duration: 213 }, { name: "Static（静电）", duration: 191 } ] },
    { name: "Dusk Circle", type: "专辑", date: "2034-08-30", songs: [
      { name: "Dusk Circle（薄暮的圆圈）", duration: 311 }, { name: "Moss Echo（青苔的回声）", duration: 193 }, { name: "Bloom（绽放）", duration: 179 },
      { name: "Crescent Silence（新月的沉寂）", duration: 149 }, { name: "Silver Breeze（银色的微风）", duration: 177 }, { name: "Window Soil（窗的土壤）", duration: 233 },
      { name: "River Fog（河流的雾）", duration: 185 } ] },
    { name: "Path", type: "专辑", date: "2038-06-16", songs: [
      { name: "Path（小径）", duration: 176 }, { name: "Cliff（断崖）", duration: 343 }, { name: "Pine Shell（松的贝壳）", duration: 182 },
      { name: "Petal Canvas（花瓣的画布）", duration: 208 }, { name: "Sand Mirrors（沙的镜子）", duration: 150 }, { name: "Nightfall Roof（夜幕的屋顶）", duration: 204 },
      { name: "Nest Neon（巢的霓虹）", duration: 197 }, { name: "Journey（旅程）", duration: 183 }, { name: "Gravel Petal（砾石的花瓣）", duration: 225 },
      { name: "Undertow（暗流）", duration: 191 } ] },
    { name: "Velvet Motel", type: "专辑", date: "2041-12-11", songs: [
      { name: "Velvet Motel（天鹅绒的汽车旅馆）", duration: 192 }, { name: "Coral（珊瑚）", duration: 151 }, { name: "Ashes（灰烬）", duration: 183 },
      { name: "Whisper Frost（低语的霜）", duration: 196 }, { name: "Ember（余烬）", duration: 342 }, { name: "Window Velvet（窗的天鹅绒）", duration: 180 },
      { name: "Vine Moon（藤蔓的月亮）", duration: 204 }, { name: "Beacon Window（灯塔的窗）", duration: 216 }, { name: "Blossom Gravel（花开的砾石）", duration: 174 } ] },
    { name: "Rain Glass", type: "专辑", date: "2045-09-08", songs: [
      { name: "Rain Glass（雨的玻璃）", duration: 186 }, { name: "Crescent（新月）", duration: 337 }, { name: "Ocean Vapor（海洋的雾霭）", duration: 196 },
      { name: "Orbit Ivory（轨道的象牙）", duration: 167 }, { name: "Daylight Dust（日光的尘埃）", duration: 196 }, { name: "River Thaw（河流的融雪）", duration: 206 },
      { name: "Stream（溪流）", duration: 189 } ] },
    { name: "Meadow", type: "专辑", date: "2049-01-13", songs: [
      { name: "Meadow（草地）", duration: 183 }, { name: "Grain（颗粒）", duration: 196 }, { name: "Storm（风暴）", duration: 294 },
      { name: "Glass（玻璃）", duration: 182 }, { name: "Paperplane（纸飞机）", duration: 192 }, { name: "River（河流）", duration: 200 },
      { name: "Hollow（空洞）", duration: 182 }, { name: "Valley（山谷）", duration: 218 }, { name: "Daybreak Shell（黎明的贝壳）", duration: 186 },
      { name: "Star Sundown（星的日落）", duration: 139 }, { name: "Slope Trail（斜坡的足迹）", duration: 193 } ] },
    ],
  "达达乐队": [
    { name: "天使", type: "专辑", date: "2001-01-01", rating: 8.0, songs: [
       { name: "化学心情下的爱情反应", duration: 319 }, { name: "我的天使", duration: 199 }, { name: "瞬间", duration: 263 },
       { name: "节日快乐", duration: 219 }, { name: "暴雨", duration: 283 }, { name: "玩偶", duration: 308 },
       { name: "1999", duration: 304 }, { name: "毛病", duration: 273 }, { name: "荒诞", duration: 157 },
       { name: "五分儿", duration: 186 }, { name: "UNO", duration: 168 } ] },
    { name: "黄金时代", type: "专辑", date: "2003-12-25", rating: 8.2, songs: [
       { name: "不经意间", duration: 195 }, { name: "巴巴罗萨", duration: 248 }, { name: "无双", duration: 225 },
       { name: "Song F", duration: 391 }, { name: "午夜说再见", duration: 186 }, { name: "等待", duration: 228 },
       { name: "浮出水面", duration: 330 }, { name: "南方", duration: 271 }, { name: "黄金时代", duration: 282 },
       { name: "收音机之恋", duration: 257 }, { name: "ROCKLIFE", duration: 187 }, { name: "Intro", duration: 164 } ] },
      { name: "铁道天桥", type: "专辑", date: "2027-03-20", songs: [
      { name: "铁道天桥", duration: 287 }, { name: "无名的断层", duration: 420 }, { name: "骤雨走廊", duration: 184 },
      { name: "荒岛渡轮", duration: 464 }, { name: "渡轮岔路", duration: 226 }, { name: "遥远的逆旅", duration: 257 },
      { name: "雪线骤雨", duration: 242 }, { name: "晚钟斑马线", duration: 226 }, { name: "沉默的迷途", duration: 251 },
      { name: "沉默的出口", duration: 371 } ] },
    { name: "闪电汽笛", type: "专辑", date: "2030-12-03", songs: [
      { name: "闪电汽笛", duration: 253 }, { name: "夜潮旧巷", duration: 461 }, { name: "沉默的暮云", duration: 245 },
      { name: "无名的暴雨", duration: 237 }, { name: "晚钟涂鸦", duration: 239 }, { name: "深夜的曦光", duration: 170 },
      { name: "渡轮巷子", duration: 234 }, { name: "无名的隧道", duration: 239 } ] },
    { name: "无名的末班车", type: "专辑", date: "2034-03-05", songs: [
      { name: "无名的末班车", duration: 284 }, { name: "沉默的残阳", duration: 214 }, { name: "旧梦晨雾", duration: 263 },
      { name: "遥远的星光", duration: 261 }, { name: "沉默的暗号", duration: 253 }, { name: "疾风高墙", duration: 235 },
      { name: "旧梦静默", duration: 251 }, { name: "末班车街角", duration: 260 }, { name: "骤雨站台", duration: 254 },
      { name: "逆流铁道", duration: 263 }, { name: "雨夜极夜", duration: 200 } ] },
    { name: "野火水岸", type: "专辑", date: "2037-04-12", songs: [
      { name: "野火水岸", duration: 298 }, { name: "黑巷沙丘", duration: 284 }, { name: "深夜的灯塔", duration: 153 },
      { name: "沉默的晨雾", duration: 221 }, { name: "暮色环流", duration: 252 }, { name: "夜航荒原", duration: 239 },
      { name: "极夜灰烬", duration: 164 }, { name: "久违的落雪", duration: 208 }, { name: "码头骤雨", duration: 258 },
      { name: "深夜的光年", duration: 166 }, { name: "漫长的信号灯", duration: 228 } ] },
    { name: "漫长的荒岛", type: "专辑", date: "2039-09-18", songs: [
      { name: "漫长的荒岛", duration: 228 }, { name: "雪线废墟", duration: 232 }, { name: "沉默的沙丘", duration: 185 },
      { name: "雨夜光年", duration: 228 }, { name: "久违的环流", duration: 261 }, { name: "荒岛高墙", duration: 257 },
      { name: "沉默的星光", duration: 243 }, { name: "沉默的停电", duration: 232 }, { name: "深夜的停电", duration: 255 },
      { name: "旧巷铁轨", duration: 211 }, { name: "夜航风口", duration: 223 } ] },
    { name: "极夜电线", type: "专辑", date: "2042-11-27", songs: [
      { name: "极夜电线", duration: 238 }, { name: "沉默的夜雾", duration: 251 }, { name: "暮光码头", duration: 267 },
      { name: "沙漏残响", duration: 136 }, { name: "深夜的末班车", duration: 266 }, { name: "街灯铁笼", duration: 266 },
      { name: "星光长风", duration: 244 }, { name: "倒影疾风", duration: 299 } ] },
    { name: "沉默的荒野", type: "专辑", date: "2046-04-29", songs: [
      { name: "沉默的荒野", duration: 268 }, { name: "冷月灯塔", duration: 259 }, { name: "匝道汽笛", duration: 249 },
      { name: "迷途楼顶", duration: 223 }, { name: "信号疾风", duration: 239 }, { name: "铁道阁楼", duration: 292 },
      { name: "沉默的杂草", duration: 284 }, { name: "晨雾光年", duration: 231 }, { name: "深夜的铁道", duration: 393 } ] },
    { name: "废楼电线", type: "专辑", date: "2049-06-26", songs: [
      { name: "废楼电线", duration: 273 }, { name: "长风匝道", duration: 221 }, { name: "余烬长风", duration: 262 },
      { name: "候鸟电塔", duration: 135 }, { name: "迷途回声", duration: 383 }, { name: "铁桥阁楼", duration: 260 },
      { name: "荒原废楼", duration: 229 }, { name: "信号旧巷", duration: 233 }, { name: "无名的冷月", duration: 169 },
      { name: "极夜末班车", duration: 251 }, { name: "雨夜风口", duration: 184 } ] },
    ],
  "果味VC": [
    { name: "双重生命", type: "专辑", date: "2001-11-11", rating: 7.9, songs: [
       { name: "模糊", duration: 359 }, { name: "超音速列车", duration: 272 }, { name: "年轻人", duration: 286 },
       { name: "Love Me,Girl", duration: 241 }, { name: "基因", duration: 186 }, { name: "北欧洲", duration: 351 },
       { name: "透明", duration: 272 }, { name: "Big Bang", duration: 214 }, { name: "十四层", duration: 274 },
       { name: "双重生命", duration: 314 } ] },
    { name: "来自VC的礼物", type: "专辑", date: "2005-01-01", songs: [
       { name: "C调哀歌", duration: 269 }, { name: "优雅", duration: 247 }, { name: "Kiss Me", duration: 259 },
       { name: "海岸", duration: 266 }, { name: "零下", duration: 261 }, { name: "北极冰川", duration: 209 },
       { name: "叁壹陆", duration: 194 }, { name: "降落", duration: 98 }, { name: "石像", duration: 291 },
       { name: "最后的诗", duration: 222 }, { name: "Amy And Betty", duration: 225 } ] },
    { name: "伟大的复兴", type: "专辑", date: "2008-12-12", songs: [
        { name: "1978", duration: 270 }, { name: "沙滩绅士", duration: 276 }, { name: "午后三点", duration: 259 },
        { name: "柔光", duration: 247 }, { name: "低声细语", duration: 285 }, { name: "Me&I", duration: 261 },
        { name: "夜空多灿烂", duration: 283 }, { name: "木偶剧", duration: 261 },
        { name: "Ocean Is Dead", duration: 125 }, { name: "The Great Disappointment", duration: 303 } ] },
    { name: "THE SUPERVC", type: "专辑", date: "2017-01-01", songs: [
       { name: "妈妈我要回来了", duration: 326 }, { name: "躁不完的青春", duration: 265 }, { name: "白色羽毛2017", duration: 296 },
       { name: "生命之花", duration: 309 }, { name: "今夜要谁主宰我们的世界", duration: 231 }, { name: "梦开始的人", duration: 273 },
       { name: "哪怕只剩一秒", duration: 266 }, { name: "唯一拥有的筹码是我们的一生", duration: 254 }, { name: "带我回家", duration: 202 },
       { name: "哈利路亚", duration: 245 } ] },
    { name: "新世纪罗曼史", type: "专辑", date: "2020-01-01", songs: [
       { name: "拥抱之城", duration: 281 }, { name: "日落", duration: 311 }, { name: "一个名字", duration: 359 },
       { name: "Elope", duration: 328 }, { name: "就让悲伤来得更狂野", duration: 237 }, { name: "寄往天堂的情书", duration: 256 },
       { name: "短发", duration: 278 }, { name: "阴天（把浪漫画在身体上） (把浪漫画在身体上)", duration: 232 },
       { name: "洛丽塔Lolita", duration: 248 }, { name: "国安国安", duration: 283 } ] },
      { name: "惊雷逆流", type: "专辑", date: "2028-08-01", songs: [
      { name: "惊雷逆流", duration: 287 }, { name: "雨夜荒野", duration: 267 }, { name: "锈迹铁桥", duration: 220 },
      { name: "遥远的沙漏", duration: 261 }, { name: "漫长的荒野", duration: 245 }, { name: "漫长的隧道", duration: 284 },
      { name: "沙漏风筝", duration: 257 }, { name: "黑巷荒径", duration: 263 } ] },
    { name: "电线惊雷", type: "专辑", date: "2032-08-04", songs: [
      { name: "电线惊雷", duration: 287 }, { name: "长夜候鸟", duration: 195 }, { name: "遥远的台阶", duration: 238 },
      { name: "汽笛暗号", duration: 274 }, { name: "水岸天桥", duration: 204 }, { name: "沉默的水岸", duration: 319 },
      { name: "无名的晨雾", duration: 285 }, { name: "狂风天光", duration: 221 }, { name: "出口静默", duration: 251 } ] },
    { name: "无名的光年", type: "专辑", date: "2036-09-10", songs: [
      { name: "无名的光年", duration: 245 }, { name: "晚钟站台", duration: 346 }, { name: "沉默的旧梦", duration: 240 },
      { name: "边界荒原", duration: 260 }, { name: "夜车旧城", duration: 189 }, { name: "沉默的落雪", duration: 280 },
      { name: "疾风废墟", duration: 268 }, { name: "初晴铁轨", duration: 245 } ] },
    { name: "候鸟极夜", type: "专辑", date: "2040-03-01", songs: [
      { name: "候鸟极夜", duration: 251 }, { name: "公路铁轨", duration: 283 }, { name: "回声壁雪线", duration: 276 },
      { name: "漫长的铁门", duration: 264 }, { name: "暮光岔路", duration: 252 }, { name: "沙漏电塔", duration: 206 },
      { name: "深夜的屋顶", duration: 359 } ] },
    { name: "断线野火", type: "专辑", date: "2044-04-10", songs: [
      { name: "断线野火", duration: 228 }, { name: "裂痕暮云", duration: 280 }, { name: "隧道环流", duration: 279 },
      { name: "深夜的车窗", duration: 275 }, { name: "沉默的楼顶", duration: 228 }, { name: "台阶匝道", duration: 269 },
      { name: "漫长的夜雾", duration: 215 }, { name: "无名的旧城", duration: 211 }, { name: "暮光长风", duration: 264 },
      { name: "碎片影中人", duration: 229 } ] },
    { name: "深夜的晚风", type: "专辑", date: "2048-07-17", songs: [
      { name: "深夜的晚风", duration: 236 }, { name: "电塔霜降", duration: 476 }, { name: "漫长的水岸", duration: 146 },
      { name: "深夜的碎片", duration: 237 }, { name: "野猫天光", duration: 213 }, { name: "长风信号灯", duration: 269 },
      { name: "曦光尘埃", duration: 249 } ] },
    ],
  "惘闻": [
    { name: "凌水河", type: "专辑", date: "2000-09-01", songs: [
       { name: "雨 (Demo)", duration: 328 }, { name: "属于记忆的部分 (Demo)", duration: 119 },
       { name: "我爱爱情 (Demo)", duration: 290 }, { name: "1/2 (Demo)", duration: 216 },
       { name: "妈妈 (Demo)", duration: 358 }, { name: "生我 (Demo)", duration: 344 },
       { name: "留给自己的 (Demo)", duration: 216 }, { name: "春夏秋冬 (Demo)", duration: 254 },
       { name: "渔和网 (Demo)", duration: 124 }, { name: "沿着来时的路...... (Demo)", duration: 187 } ] },
    { name: "二十八天失眠日记", type: "专辑", date: "2003-08-01", rating: 7.3, songs: [
       { name: "光", duration: 583 }, { name: "垂死的岁末", duration: 468 }, { name: "丰收", duration: 469 },
       { name: "奔丧", duration: 368 }, { name: "报仇", duration: 309 }, { name: "汉人", duration: 273 },
       { name: "辞行", duration: 349 }, { name: "素食者", duration: 351 }, { name: "A Song For Yu Wen", duration: 206 } ] },
    { name: "Re:Re:Re:", type: "专辑", date: "2005-12-01", rating: 7.1, songs: [
       { name: "隧道", duration: 644 }, { name: "劳动公园", duration: 602 }, { name: "My Crime", duration: 409 },
       { name: "最后的麻山", duration: 502 }, { name: "酒狂", duration: 487 }, { name: "圆周率", duration: 750 } ] },
    { name: "7 Objects in Another Infinite Space", type: "专辑", date: "2007-04-14", rating: 7.0, songs: [
       { name: "缘", duration: 810 }, { name: "Break the Cars", duration: 576 }, { name: "甜井", duration: 151 },
       { name: "思乡病", duration: 608 }, { name: "2005.1.26", duration: 299 }, { name: "驿站", duration: 370 },
       { name: "No Dust at All", duration: 570 } ] },
    { name: "IV", type: "专辑", date: "2008-05-17", rating: 7.4, songs: [
       { name: "污水塘", duration: 386 }, { name: "龙西", duration: 249 }, { name: "Rust inside", duration: 512 },
       { name: "06M", duration: 387 }, { name: "花满都VS川味子", duration: 463 }, { name: "抿嘴谣", duration: 459 },
       { name: "To the mars", duration: 690 }, { name: "污水塘 (Remix)", duration: 805 } ] },
    { name: "L&R", type: "专辑", date: "2010-04-09", rating: 6.6, songs: [
      { name: "童篇", duration: 438 }, { name: "近景", duration: 361 }, { name: "焦虑抑制剂", duration: 530 },
      { name: "M", duration: 367 }, { name: "悬在时间轴上", duration: 626 }, { name: "合乐", duration: 596 },
      { name: "凡士林", duration: 356 } ] },
    { name: "0.7", type: "专辑", date: "2012-06-08", rating: 7.9, songs: [
       { name: "2012", duration: 403 }, { name: "Rain Watcher", duration: 338 },
       { name: "Lonely God", duration: 570 }, { name: "Angelo's Portrait", duration: 459 },
       { name: "Absent Minded Theme", duration: 218 }, { name: "Dragon in the Pool", duration: 433 },
       { name: "Seasons", duration: 309 } ] },
    { name: "八匹马", type: "专辑", date: "2014-06-03", rating: 7.6, songs: [
      { name: "北方向北", duration: 380 }, { name: "大连天空", duration: 400 }, { name: "第八层地狱", duration: 460 },
      { name: "万佛朝宗", duration: 420 }, { name: "逃离母宇宙", duration: 440 }, { name: "酒神经", duration: 400 },
      { name: "最后旅程", duration: 460 }, { name: "Welcome to Utopia", duration: 480 } ] },
    { name: "岁月鸿沟", type: "专辑", date: "2016-04-25", rating: 7.5, songs: [
       { name: "黄泉水", duration: 895 }, { name: "红墙黑墙", duration: 487 }, { name: "海洋之心", duration: 653 },
       { name: "少年宫", duration: 818 }, { name: "21世纪不适症", duration: 540 }, { name: "岁月鸿沟", duration: 872 },
       { name: "归零", duration: 139 } ] },
    { name: "看不见的城市", type: "专辑", date: "2018-07-02", rating: 7.5, songs: [
       { name: "破晓", duration: 490 }, { name: "老虎棒子鸡", duration: 631 }, { name: "水之湄", duration: 377 },
       { name: "Lost in Train Station", duration: 451 }, { name: "独舞", duration: 312 }, { name: "竹鹤", duration: 244 },
       { name: "大连，勿语", duration: 512 }, { name: "尾声", duration: 257 } ] },
    { name: "十万个为什么", type: "专辑", date: "2020-09-23", rating: 6.9, songs: [
      { name: "鍛高潭", duration: 410 }, { name: "幽魂", duration: 522 }, { name: "五五路", duration: 440 },
      { name: "假若明天来临", duration: 353 }, { name: "流浪者之歌", duration: 553 }, { name: "孤独的鸟", duration: 425 },
      { name: "敢问路在何方", duration: 538 }, { name: "醉忘川", duration: 500 } ] },
    { name: "辛丑壬寅", type: "专辑", date: "2022-01-01", rating: 6.6, songs: [
       { name: "凿壁寻光 (Light behind the wall)", duration: 528 }, { name: "消失的图书馆 (Gone Library)", duration: 290 },
       { name: "白加黑 (Black Pill & White Pill)", duration: 563 }, { name: "辛丑 (Painful Clown)", duration: 380 },
       { name: "壬寅 (Ninja Tiger)", duration: 392 },
       { name: "奥林匹克广场 (There's a Walmart underneath the Olympic Square)", duration: 510 },
       { name: "野火 (Wild Fire)", duration: 455 } ] },
      { name: "环带", type: "专辑", date: "2027-02-27", songs: [
      { name: "环带", duration: 435 }, { name: "沉默的薄雾", duration: 459 }, { name: "倒影光斑", duration: 299 },
      { name: "静水", duration: 480 }, { name: "纹理", duration: 397 }, { name: "遥远", duration: 460 },
      { name: "边缘", duration: 333 }, { name: "光斑", duration: 502 } ] },
    { name: "光栅", type: "专辑", date: "2029-04-18", songs: [
      { name: "光栅", duration: 421 }, { name: "波纹", duration: 470 }, { name: "深夜的光栅", duration: 323 },
      { name: "退潮", duration: 433 }, { name: "经纬", duration: 560 }, { name: "晨光", duration: 382 },
      { name: "深夜的余温", duration: 475 }, { name: "漫长的山脉", duration: 510 }, { name: "光晕", duration: 423 },
      { name: "缓慢", duration: 450 }, { name: "蓝鲸边缘", duration: 481 } ] },
    { name: "环流折线", type: "专辑", date: "2031-06-08", songs: [
      { name: "环流折线", duration: 452 }, { name: "回旋", duration: 483 }, { name: "慢门", duration: 409 },
      { name: "虚空", duration: 435 }, { name: "低频", duration: 446 }, { name: "月相", duration: 395 },
      { name: "蓝鲸", duration: 533 }, { name: "透明余温", duration: 417 }, { name: "水银", duration: 432 },
      { name: "漫长的引力", duration: 505 }, { name: "星云", duration: 408 } ] },
    { name: "极光", type: "专辑", date: "2033-01-25", songs: [
      { name: "极光", duration: 420 }, { name: "轨迹", duration: 315 }, { name: "遥远的地平线", duration: 447 },
      { name: "螺旋", duration: 463 }, { name: "折线长夜", duration: 408 }, { name: "回声苍穹", duration: 430 },
      { name: "山脉", duration: 483 }, { name: "陨石", duration: 388 }, { name: "环流云层", duration: 472 },
      { name: "薄雾", duration: 372 } ] },
    { name: "深空", type: "专辑", date: "2035-05-13", songs: [
      { name: "深空", duration: 439 }, { name: "无声", duration: 426 }, { name: "寂静", duration: 453 },
      { name: "河床", duration: 439 }, { name: "久违的遥远", duration: 448 }, { name: "冰川远山", duration: 406 },
      { name: "漫长的暮色", duration: 467 }, { name: "远山", duration: 372 }, { name: "云层旷野", duration: 399 },
      { name: "银幕", duration: 461 }, { name: "空镜", duration: 465 } ] },
    { name: "折射", type: "专辑", date: "2037-05-27", songs: [
      { name: "折射", duration: 372 }, { name: "遥远的晨光", duration: 433 }, { name: "沉默的水银", duration: 419 },
      { name: "深夜的蓝鲸", duration: 456 }, { name: "水痕", duration: 413 }, { name: "虚空暗流", duration: 368 },
      { name: "久违的退潮", duration: 426 }, { name: "雾霭", duration: 484 } ] },
    { name: "星轨极昼", type: "专辑", date: "2039-08-30", songs: [
      { name: "星轨极昼", duration: 371 }, { name: "无名的云层", duration: 416 }, { name: "久违的轨迹", duration: 375 },
      { name: "星轨", duration: 418 }, { name: "云层回声", duration: 400 }, { name: "缓慢尘埃", duration: 432 },
      { name: "沉默的深空", duration: 481 }, { name: "漂移", duration: 481 } ] },
    { name: "光年低频", type: "专辑", date: "2041-08-12", songs: [
      { name: "光年低频", duration: 510 }, { name: "水痕蓝鲸", duration: 410 }, { name: "漫长的沙漏", duration: 442 },
      { name: "纹理灰白", duration: 402 }, { name: "深海", duration: 373 }, { name: "悬浮", duration: 455 },
      { name: "极地空谷", duration: 466 }, { name: "久违的折返", duration: 297 }, { name: "漫长的银幕", duration: 431 },
      { name: "星轨折线", duration: 470 } ] },
    { name: "月相极地", type: "专辑", date: "2043-12-04", songs: [
      { name: "月相极地", duration: 476 }, { name: "暮色月相", duration: 428 }, { name: "云层经纬", duration: 352 },
      { name: "极地", duration: 440 }, { name: "灰白回旋", duration: 433 }, { name: "碎光", duration: 483 },
      { name: "无名的漂移", duration: 375 }, { name: "空镜光年", duration: 445 }, { name: "极地缓慢", duration: 560 } ] },
    { name: "旷野", type: "专辑", date: "2045-08-22", songs: [
      { name: "旷野", duration: 456 }, { name: "云层", duration: 416 }, { name: "星尘", duration: 426 },
      { name: "光斑回旋", duration: 426 }, { name: "深夜的螺旋", duration: 435 }, { name: "漫长的深空", duration: 418 },
      { name: "地平线", duration: 470 }, { name: "余温沙漏", duration: 352 }, { name: "潮声银幕", duration: 521 },
      { name: "沉默的星尘", duration: 436 }, { name: "空谷", duration: 560 } ] },
    { name: "光晕星云", type: "专辑", date: "2047-10-27", songs: [
      { name: "光晕星云", duration: 560 }, { name: "蓝鲸地平线", duration: 408 }, { name: "遥远的星云", duration: 509 },
      { name: "透明空镜", duration: 446 }, { name: "轨迹边缘", duration: 483 }, { name: "无名的回旋", duration: 274 },
      { name: "漫长的水痕", duration: 458 }, { name: "薄雾静默", duration: 522 }, { name: "静止光晕", duration: 314 } ] },
    { name: "光晕深空", type: "专辑", date: "2049-12-18", songs: [
      { name: "光晕深空", duration: 512 }, { name: "回声星际", duration: 475 }, { name: "薄雾星轨", duration: 476 },
      { name: "久违的月相", duration: 483 }, { name: "折线", duration: 419 }, { name: "漂移深海", duration: 483 },
      { name: "光晕轨迹", duration: 474 } ] },
    ],
  "沼泽乐队": [
    { name: "沧浪星", type: "专辑", date: "2010-12-18", rating: 7.0, songs: [
       { name: "摇篮星", duration: 187 }, { name: "落木", duration: 435 }, { name: "飞天猪", duration: 797 },
       { name: "打捞星星的少年", duration: 419 }, { name: "声声急", duration: 607 }, { name: "过客", duration: 154 },
       { name: "沧浪谁与游", duration: 679 } ] },
    { name: "1911", type: "专辑", date: "2011-12-31", rating: 8.4, songs: [
       { name: "1911第一回", duration: 938 }, { name: "1911第三回", duration: 508 }, { name: "1911第二回", duration: 793 },
       { name: "1911第四回", duration: 1399 } ] },
    { name: "远", type: "专辑", date: "2013-01-01", rating: 6.4, songs: [
       { name: "离", duration: 389 }, { name: "失梦客", duration: 597 }, { name: "世界是块忧伤的石头", duration: 761 },
       { name: "憧憬之船", duration: 671 }, { name: "变形记", duration: 904 }, { name: "灰鹱望海", duration: 225 } ] },
    { name: "琴晚", type: "专辑", date: "2015-01-01", rating: 7.0, songs: [
       { name: "酉时 废柴", duration: 306 }, { name: "戌时 人约黄昏后", duration: 379 }, { name: "亥时 闭上眼望星", duration: 507 },
       { name: "子时 孑影舞", duration: 301 }, { name: "丑时 二维 乙未篇", duration: 371 }, { name: "寅时 稚儿笑", duration: 240 },
       { name: "卯时 早鸟", duration: 333 } ] },
    { name: "争鸣", type: "专辑", date: "2018-01-01", rating: 8.7, songs: [
       { name: "争鸣 (Excerpt)", duration: 381 }, { name: "争鸣", duration: 2607 } ] },
      { name: "星尘空镜", type: "专辑", date: "2027-01-25", songs: [
      { name: "星尘空镜", duration: 560 }, { name: "虚焦", duration: 560 }, { name: "遥远极夜", duration: 560 },
      { name: "折返", duration: 560 }, { name: "月相波纹", duration: 560 }, { name: "回声倒影", duration: 560 },
      { name: "灰白", duration: 560 } ] },
    { name: "无声银幕", type: "专辑", date: "2029-05-03", songs: [
      { name: "无声银幕", duration: 560 }, { name: "静止", duration: 411 }, { name: "沉默的云层", duration: 560 },
      { name: "静水星尘", duration: 560 }, { name: "涟漪", duration: 560 }, { name: "银幕尘埃", duration: 560 },
      { name: "沉默的折射", duration: 560 } ] },
    { name: "沉默的雾霭", type: "专辑", date: "2031-02-09", songs: [
      { name: "沉默的雾霭", duration: 515 }, { name: "深夜的薄雾", duration: 560 }, { name: "遥远的深海", duration: 560 },
      { name: "长夜冰川", duration: 560 }, { name: "晨光银幕", duration: 560 }, { name: "深空悬浮", duration: 560 },
      { name: "沉默的边缘", duration: 560 }, { name: "慢门漂移", duration: 491 } ] },
    { name: "深夜的极昼", type: "专辑", date: "2033-05-13", songs: [
      { name: "深夜的极昼", duration: 560 }, { name: "月相深渊", duration: 560 }, { name: "漫长的空谷", duration: 553 },
      { name: "遥远的暮色", duration: 560 }, { name: "沉默的无声", duration: 560 }, { name: "轨迹遥远", duration: 411 },
      { name: "久违的极光", duration: 371 }, { name: "久违的纹理", duration: 541 }, { name: "空谷低语", duration: 560 } ] },
    { name: "苍穹灰白", type: "专辑", date: "2035-03-24", songs: [
      { name: "苍穹灰白", duration: 560 }, { name: "引力", duration: 560 }, { name: "低语", duration: 550 },
      { name: "光栅深渊", duration: 560 }, { name: "边缘折线", duration: 471 }, { name: "光晕暮色", duration: 560 },
      { name: "遥远的折返", duration: 560 }, { name: "久违的星际", duration: 560 }, { name: "静水无声", duration: 560 },
      { name: "久违的波纹", duration: 560 } ] },
    { name: "潮声山脉", type: "专辑", date: "2037-06-07", songs: [
      { name: "潮声山脉", duration: 560 }, { name: "轨迹引力", duration: 560 }, { name: "深夜的虚焦", duration: 560 },
      { name: "沉默的透明", duration: 560 }, { name: "陨石虚空", duration: 560 }, { name: "遥远的云层", duration: 560 },
      { name: "光栅雾霭", duration: 560 }, { name: "深夜的极夜", duration: 560 }, { name: "空谷光年", duration: 560 },
      { name: "暗流沙漏", duration: 560 }, { name: "薄雾长夜", duration: 560 } ] },
    { name: "潮间带光晕", type: "专辑", date: "2039-07-20", songs: [
      { name: "潮间带光晕", duration: 560 }, { name: "深渊螺旋", duration: 560 }, { name: "纹理晨光", duration: 560 },
      { name: "极光深海", duration: 340 }, { name: "月相深空", duration: 560 }, { name: "余温光栅", duration: 560 },
      { name: "晨光低频", duration: 560 }, { name: "寂静漂移", duration: 560 }, { name: "无名的余温", duration: 560 },
      { name: "星云折返", duration: 560 }, { name: "环带光晕", duration: 560 } ] },
    { name: "静止暮色", type: "专辑", date: "2041-07-04", songs: [
      { name: "静止暮色", duration: 518 }, { name: "沉默的潮声", duration: 474 }, { name: "星尘极昼", duration: 560 },
      { name: "沉默的低频", duration: 560 }, { name: "沉默的光栅", duration: 560 }, { name: "光斑极夜", duration: 560 },
      { name: "无名的长夜", duration: 493 } ] },
    { name: "折线薄雾", type: "专辑", date: "2043-10-05", songs: [
      { name: "折线薄雾", duration: 394 }, { name: "苍穹深海", duration: 560 }, { name: "光斑远山", duration: 560 },
      { name: "低语慢门", duration: 560 }, { name: "余温", duration: 552 }, { name: "虚空蓝鲸", duration: 560 },
      { name: "轨迹碎光", duration: 558 }, { name: "缓慢回声", duration: 560 }, { name: "无声晨光", duration: 388 },
      { name: "遥远的碎光", duration: 560 } ] },
    { name: "碎光遥远", type: "专辑", date: "2045-09-03", songs: [
      { name: "碎光遥远", duration: 560 }, { name: "潮声回声", duration: 560 }, { name: "漫长的透明", duration: 560 },
      { name: "退潮低语", duration: 370 }, { name: "虚空折线", duration: 560 }, { name: "漫长的雪线", duration: 560 },
      { name: "深夜的陨石", duration: 560 }, { name: "沉默的轨迹", duration: 560 } ] },
    { name: "陨石极地", type: "专辑", date: "2048-01-01", songs: [
      { name: "陨石极地", duration: 560 }, { name: "漫长的深渊", duration: 474 }, { name: "无名的折线", duration: 560 },
      { name: "遥远的经纬", duration: 560 }, { name: "沉默的环流", duration: 414 }, { name: "深夜的潮间带", duration: 448 },
      { name: "空镜苍穹", duration: 560 }, { name: "无名的灰白", duration: 560 }, { name: "低语虚焦", duration: 560 },
      { name: "星尘银幕", duration: 560 }, { name: "波纹水银", duration: 560 } ] },
    { name: "暗流星云", type: "专辑", date: "2049-09-26", songs: [
      { name: "暗流星云", duration: 361 }, { name: "深夜的漂移", duration: 560 }, { name: "沙漏水痕", duration: 390 },
      { name: "沉默的纹理", duration: 372 }, { name: "遥远的薄雾", duration: 486 }, { name: "久违的倒影", duration: 560 },
      { name: "漫长的潮声", duration: 560 }, { name: "无名的极夜", duration: 560 } ] },
    ],
  "刺猬乐队": [
    { name: "Happy Idle Kid", type: "专辑", date: "2006-03-12", songs: [
       { name: "Idle", duration: 266 }, { name: "Buffer", duration: 181 }, { name: "Cool Bad Girl", duration: 103 },
       { name: "Wink", duration: 198 }, { name: "Smart", duration: 243 }, { name: "Elra", duration: 210 },
       { name: "Teenage Regrets", duration: 181 }, { name: "One", duration: 210 }, { name: "柏油公路", duration: 245 },
       { name: "Lapse", duration: 227 }, { name: "Cure Me In Your Case", duration: 181 } ] },
    { name: "噪音袭击世界", type: "专辑", date: "2007-10-01", songs: [
       { name: "玩具和61儿童节", duration: 222 }, { name: "南瓜", duration: 220 }, { name: "小鬼儿", duration: 101 },
       { name: "爱之废语", duration: 199 }, { name: "龙珠", duration: 186 }, { name: "新星 新星", duration: 252 },
       { name: "噪音袭击世界", duration: 158 }, { name: "这不是你自己但这是未来", duration: 187 }, { name: "分离", duration: 254 },
       { name: "我们最后的话", duration: 185 }, { name: "白纸年华", duration: 237 } ] },
    { name: "白日梦蓝", type: "专辑", date: "2009-03-01", rating: 8.1, songs: [
       { name: "白日梦蓝", duration: 296 }, { name: "春天来了", duration: 331 }, { name: "爱之过往", duration: 185 },
       { name: "假象", duration: 185 }, { name: "树", duration: 179 }, { name: "告诉他们我爱你", duration: 193 },
       { name: "圣诞最后", duration: 315 }, { name: "电影", duration: 388 }, { name: "胖女孩想", duration: 303 },
       { name: "24小时摇滚聚会", duration: 288 }, { name: "最后一班车", duration: 323 }, { name: "金色年华，无限伤感", duration: 253 } ] },
    { name: "甜蜜与杀害", type: "专辑", date: "2011-03-18", songs: [
       { name: "埋葬在阳光下", duration: 149 }, { name: "甜蜜与杀害", duration: 270 }, { name: "闪马", duration: 300 },
       { name: "你好 糖果", duration: 283 }, { name: "纸飞机", duration: 223 }, { name: "白娃娃", duration: 251 },
       { name: "疯狂生死恋", duration: 241 }, { name: "橙色", duration: 177 }, { name: "最后,我们会一起去海边", duration: 373 },
       { name: "生命意味", duration: 238 } ] },
    { name: "阳光、欢乐、枪", type: "专辑", date: "2012-04-05", songs: [
       { name: "亲爱的，我想做你女朋友", duration: 151 }, { name: "天歌", duration: 471 }, { name: "和鲨鱼一起冲浪", duration: 170 },
       { name: "黑吻", duration: 299 }, { name: "永远选你想要的", duration: 276 }, { name: "乐队", duration: 381 },
       { name: "重庆", duration: 317 }, { name: "最寂寞的一天", duration: 301 }, { name: "清晨里燃烧的太阳", duration: 369 },
       { name: "伙计们真摇滚，那天我也在D22", duration: 391 }, { name: "你真有名 (Unreleased Bonus Track)", duration: 135 } ] },
    { name: "幻象波普星", type: "专辑", date: "2014-04-20", songs: [
       { name: "我们飞向太空", duration: 397 }, { name: "幻象波普星", duration: 212 }, { name: "星光", duration: 268 },
       { name: "阿司匹林", duration: 276 }, { name: "梦幻想", duration: 385 }, { name: "画", duration: 279 },
       { name: "金色褪去，燃于天际", duration: 384 }, { name: "徙鸟", duration: 381 }, { name: "她在月光下", duration: 326 },
       { name: "暖浪拂心田", duration: 285 } ] },
    { name: "生之响往", type: "专辑", date: "2018-04-25", rating: 8.0, songs: [
       { name: "二十一世纪,当我们还年轻时", duration: 247 }, { name: "盼暖春来", duration: 282 }, { name: "勐巴拉娜西", duration: 364 },
       { name: "我们是动物", duration: 187 }, { name: "Kill Rock Stars", duration: 188 }, { name: "生之响往", duration: 356 },
       { name: "梦游一生", duration: 327 }, { name: "O,Lord", duration: 220 }, { name: "火车驶向云外,梦安魂于九霄", duration: 324 } ] },
    { name: "赤子白仙", type: "专辑", date: "2020-07-13", songs: [
       { name: "太阳下( Under The Sun)", duration: 193 },
       { name: "往昔耀今朝，The Future Is Now（Yesterday Was Shining On, The Future Is Now）", duration: 273 },
       { name: "光阴·流年·夏恋(The Fleeting-Time And Summer Love)", duration: 339 },
       { name: "星夜祈盼( Sky Roar, When We Light Up The Stars)", duration: 302 },
       { name: "在心间(Bottom Of Heart)", duration: 325 }, { name: "蝙蝠(Bat)", duration: 194 },
       { name: "漂离去月球(Drift Away To The Moon)", duration: 263 },
       { name: "仙情爱问( Immortal Asks What Is Love Is What Asks Immortal)", duration: 223 },
       { name: "我的矛盾，我的恨(My Contradictions, My Hatred)", duration: 312 },
       { name: "白白白白( White whitE wHiTe WhItE)", duration: 314 },
       { name: "赤子呓语一生梦 (A Newborn Baby Sleep Talking About The Dream Through Life)", duration: 290 },
       { name: "明天以后(Tomorrow Tomorrow)", duration: 454 } ] },
      { name: "久违的车窗", type: "专辑", date: "2027-03-12", songs: [
      { name: "久违的车窗", duration: 298 }, { name: "漫长的路口", duration: 242 }, { name: "公路灰墙", duration: 262 },
      { name: "沉默的铁门", duration: 320 }, { name: "灰烬雪线", duration: 311 }, { name: "静默旧城", duration: 268 },
      { name: "遥远的孤岛", duration: 249 } ] },
    { name: "无名的曦光", type: "专辑", date: "2028-12-17", songs: [
      { name: "无名的曦光", duration: 274 }, { name: "暗涌寒潮", duration: 280 }, { name: "天台逆流", duration: 286 },
      { name: "晨雾荒岛", duration: 235 }, { name: "沉默的荒径", duration: 251 }, { name: "深夜的站台", duration: 260 },
      { name: "深夜的长夜", duration: 301 }, { name: "漫长的码头", duration: 254 }, { name: "风筝旧梦", duration: 424 },
      { name: "无名的风筝", duration: 275 } ] },
    { name: "霜降电线", type: "专辑", date: "2031-01-19", songs: [
      { name: "霜降电线", duration: 249 }, { name: "狂风逆光", duration: 217 }, { name: "疾风灰烬", duration: 258 },
      { name: "沉默的残响", duration: 148 }, { name: "夜车迷途", duration: 206 }, { name: "废墟裂痕", duration: 346 },
      { name: "漫长的候鸟", duration: 275 }, { name: "无名的荒岛", duration: 277 } ] },
    { name: "深夜的暮光", type: "专辑", date: "2033-06-03", songs: [
      { name: "深夜的暮光", duration: 258 }, { name: "霜降雨篷", duration: 291 }, { name: "废墟荒原", duration: 250 },
      { name: "漫长的夜航", duration: 283 }, { name: "初晴街角", duration: 307 }, { name: "末班车铁桥", duration: 213 },
      { name: "迷途野火", duration: 246 }, { name: "遥远的汽笛", duration: 283 }, { name: "铁门荒野", duration: 238 },
      { name: "废楼野火", duration: 263 }, { name: "深夜的残响", duration: 257 } ] },
    { name: "晚风潮汐", type: "专辑", date: "2035-07-29", songs: [
      { name: "晚风潮汐", duration: 270 }, { name: "长夜岔路", duration: 276 }, { name: "霓虹旧梦", duration: 215 },
      { name: "漫长的余烬", duration: 287 }, { name: "沉默的深夜", duration: 254 }, { name: "空城碎片", duration: 483 },
      { name: "旧梦归途", duration: 263 }, { name: "站台匝道", duration: 313 } ] },
    { name: "沉默的潮汐", type: "专辑", date: "2037-08-06", songs: [
      { name: "沉默的潮汐", duration: 265 }, { name: "废楼倒影", duration: 253 }, { name: "星光电塔", duration: 241 },
      { name: "深夜的潮汐", duration: 287 }, { name: "沉默的沙漏", duration: 240 }, { name: "遥远的静默", duration: 293 },
      { name: "漫长的夜潮", duration: 273 }, { name: "暗巷渡轮", duration: 299 } ] },
    { name: "漫长的出口", type: "专辑", date: "2039-04-15", songs: [
      { name: "漫长的出口", duration: 216 }, { name: "遥远的信号灯", duration: 280 }, { name: "星光铁门", duration: 276 },
      { name: "沉默的灰墙", duration: 262 }, { name: "初晴骤雨", duration: 241 }, { name: "汽笛涂鸦", duration: 163 },
      { name: "漫长的风口", duration: 278 }, { name: "漫长的惊雷", duration: 253 }, { name: "出口暗号", duration: 390 },
      { name: "码头电线", duration: 290 }, { name: "遥远的铁门", duration: 256 } ] },
    { name: "高架逆光", type: "专辑", date: "2041-10-05", songs: [
      { name: "高架逆光", duration: 204 }, { name: "隧道潮汐", duration: 242 }, { name: "无名的雪线", duration: 314 },
      { name: "屋顶灯塔", duration: 270 }, { name: "遥远的废墟", duration: 365 }, { name: "沉默的暮色", duration: 262 },
      { name: "暴雨电线", duration: 271 }, { name: "久违的断线", duration: 264 }, { name: "巷子荒野", duration: 481 } ] },
    { name: "遥远的暮云", type: "专辑", date: "2043-09-22", songs: [
      { name: "遥远的暮云", duration: 240 }, { name: "影中人暮云", duration: 239 }, { name: "初晴迷途", duration: 239 },
      { name: "风口极夜", duration: 283 }, { name: "无名的旧梦", duration: 276 }, { name: "遥远的镜面", duration: 279 },
      { name: "沙漏光年", duration: 411 }, { name: "归途电塔", duration: 203 }, { name: "深夜的街角", duration: 271 } ] },
    { name: "回声废楼", type: "专辑", date: "2046-01-01", songs: [
      { name: "回声废楼", duration: 265 }, { name: "沉默的风口", duration: 265 }, { name: "街灯铁门", duration: 247 },
      { name: "沉默的孤岛", duration: 288 }, { name: "无名的天光", duration: 279 }, { name: "深巷信号灯", duration: 239 },
      { name: "镜面巷子", duration: 183 }, { name: "灰墙暮色", duration: 271 } ] },
    { name: "末班车裂痕", type: "专辑", date: "2048-02-01", songs: [
      { name: "末班车裂痕", duration: 247 }, { name: "久违的隧道", duration: 271 }, { name: "深夜的裂痕", duration: 286 },
      { name: "无名的铁道", duration: 287 }, { name: "野猫路口", duration: 195 }, { name: "野猫废墟", duration: 249 },
      { name: "遥远的夜潮", duration: 268 }, { name: "沉默的初晴", duration: 262 } ] },
    { name: "沉默的夜航", type: "专辑", date: "2049-10-29", songs: [
      { name: "沉默的夜航", duration: 382 }, { name: "无名的潮汐", duration: 259 }, { name: "深夜的荒径", duration: 216 },
      { name: "电线锈迹", duration: 289 }, { name: "沉默的高架", duration: 425 }, { name: "渡轮碎片", duration: 257 },
      { name: "黑巷晴天", duration: 270 } ] },
    ],
  "逃跑计划": [
    { name: "带我离开", type: "EP", date: "2008-08-08", songs: [
      { name: "Take Me Away", duration: 206 }, { name: "Is This Love", duration: 219 },
      { name: "08年我们结婚", duration: 338 }, { name: "再见再见", duration: 276 } ] },
    { name: "世界", type: "专辑", date: "2012-07-01", rating: 8.0, songs: [
       { name: "Is This Love", duration: 216 }, { name: "阳光照进回忆里", duration: 321 },
       { name: "Take Me Away", duration: 208 }, { name: "一万次悲伤", duration: 255 }, { name: "Apple", duration: 229 },
       { name: "结婚", duration: 326 }, { name: "夜空中最亮的星", duration: 252 }, { name: "哪里是你的拥抱", duration: 415 },
       { name: "Chemical Bus", duration: 250 }, { name: "再见 再见", duration: 329 } ] },
    { name: "时代之梦", type: "EP", date: "2016-01-01", songs: [
      { name: "时代之梦", duration: 280 }, { name: "重来", duration: 270 } ] },
    { name: "回到海洋", type: "专辑", date: "2021-09-06", songs: [
       { name: "梦中的你", duration: 266 }, { name: "琴岛漫步", duration: 262 }, { name: "暗示", duration: 246 },
       { name: "你的爱情", duration: 357 }, { name: "海鸥", duration: 225 }, { name: "Noise In My Head", duration: 323 },
       { name: "只是感觉", duration: 326 }, { name: "没什么比你更难忘", duration: 230 },
       { name: "Magic Elevator", duration: 353 }, { name: "10th", duration: 269 } ] },
      { name: "气球", type: "专辑", date: "2027-11-03", songs: [
      { name: "气球", duration: 447 }, { name: "贝壳", duration: 263 }, { name: "粉色", duration: 304 },
      { name: "深夜的贴纸", duration: 272 }, { name: "漫长的蝉鸣", duration: 290 }, { name: "桃子", duration: 284 },
      { name: "信笺香草", duration: 291 }, { name: "童话花束", duration: 255 }, { name: "裙摆铃铛", duration: 223 },
      { name: "汽水糖分", duration: 469 } ] },
    { name: "软糖", type: "专辑", date: "2032-05-16", songs: [
      { name: "软糖", duration: 255 }, { name: "漫长的盛夏", duration: 339 }, { name: "平行线", duration: 296 },
      { name: "晴空", duration: 262 }, { name: "久违的晚霞", duration: 302 }, { name: "暖阳笔袋", duration: 273 },
      { name: "白裙风筝", duration: 267 }, { name: "泡泡糖纸飞机", duration: 278 }, { name: "气泡", duration: 305 },
      { name: "糖分", duration: 174 }, { name: "笔袋", duration: 287 } ] },
    { name: "月亮", type: "专辑", date: "2035-12-15", songs: [
      { name: "月亮", duration: 285 }, { name: "玻璃糖", duration: 279 }, { name: "贴纸", duration: 251 },
      { name: "风车沙滩", duration: 285 }, { name: "沉默的汽水", duration: 298 }, { name: "久违的晴空", duration: 252 },
      { name: "糖果屋", duration: 262 }, { name: "微风纸飞机", duration: 303 }, { name: "冰淇淋", duration: 289 },
      { name: "泡泡糖棉花糖", duration: 330 } ] },
    { name: "日落蝴蝶结", type: "专辑", date: "2040-12-06", songs: [
      { name: "日落蝴蝶结", duration: 323 }, { name: "课桌糖果屋", duration: 163 }, { name: "久违的香草", duration: 265 },
      { name: "糖果屋初恋", duration: 340 }, { name: "蓝调蝉鸣", duration: 161 }, { name: "少女雨靴", duration: 266 },
      { name: "花火星期天", duration: 257 }, { name: "遥远的香草", duration: 303 }, { name: "橘子余光", duration: 268 } ] },
    { name: "信笺汽水", type: "EP", date: "2044-04-21", songs: [
      { name: "信笺汽水", duration: 287 }, { name: "糖果笔袋", duration: 261 }, { name: "校门", duration: 192 },
      { name: "久违的柠檬", duration: 255 }, { name: "微风奶昔", duration: 194 } ] },
    { name: "沉默的教室", type: "专辑", date: "2048-08-15", songs: [
      { name: "沉默的教室", duration: 289 }, { name: "久违的贴纸", duration: 292 }, { name: "漫长的贴纸", duration: 230 },
      { name: "风筝贝壳", duration: 287 }, { name: "遥远的柠檬茶", duration: 260 }, { name: "橘子", duration: 309 },
      { name: "相片", duration: 293 }, { name: "无名的玻璃糖", duration: 289 }, { name: "柠檬", duration: 284 } ] },
    ],
  "布衣乐队": [
    { name: "那么久", type: "专辑", date: "2007-12-18", rating: 7.8, songs: [
       { name: "那么久", duration: 325 }, { name: "在你身旁", duration: 268 }, { name: "羊肉面", duration: 300 },
       { name: "丢", duration: 334 }, { name: "风", duration: 210 }, { name: "我爱你亲爱的姑娘", duration: 229 },
       { name: "小朋友", duration: 136 }, { name: "三十里铺", duration: 286 }, { name: "唯一的理由", duration: 312 },
       { name: "新的一天", duration: 215 } ] },
    { name: "布衣", type: "专辑", date: "2009-09-26", rating: 8.0, songs: [
       { name: "遥远的地方", duration: 329 }, { name: "世事难料", duration: 437 }, { name: "你是我的希望", duration: 234 },
       { name: "雪花", duration: 408 }, { name: "三疯", duration: 291 }, { name: "三峰", duration: 291 },
       { name: "不累", duration: 276 }, { name: "光荣的愤怒", duration: 172 }, { name: "粼兰曲", duration: 405 },
       { name: "离别", duration: 257 }, { name: "粼蓝曲", duration: 405 } ] },
    { name: "秋天", type: "专辑", date: "2010-11-18", songs: [
       { name: "秋天", duration: 244 }, { name: "L B C", duration: 220 }, { name: "布衣", duration: 317 },
       { name: "想着你", duration: 193 }, { name: "小花", duration: 322 }, { name: "漫漫归乡路", duration: 277 },
       { name: "我要飞", duration: 178 }, { name: "远走", duration: 301 }, { name: "净土", duration: 429 },
       { name: "秋天 (不插电)", duration: 299 } ] },
    { name: "出发", type: "专辑", date: "2013-10-18", songs: [
       { name: "出发", duration: 239 }, { name: "浪花", duration: 246 }, { name: "空间", duration: 259 },
       { name: "亲你一口", duration: 253 }, { name: "自由的鸟", duration: 280 }, { name: "追日", duration: 231 },
       { name: "问", duration: 346 }, { name: "彩虹", duration: 310 }, { name: "你", duration: 228 },
       { name: "沙", duration: 217 } ] },
    { name: "小怪兽", type: "专辑", date: "2018-09-03", songs: [
       { name: "宁夏川", duration: 50 }, { name: "小怪兽", duration: 183 }, { name: "啤酒怪兽", duration: 196 },
       { name: "火焰山", duration: 291 }, { name: "流星", duration: 249 }, { name: "院子", duration: 229 },
       { name: "小狗", duration: 230 }, { name: "梦", duration: 263 }, { name: "从今以后", duration: 270 },
       { name: "等不及告别就要出发", duration: 231 } ] },
    { name: "八宝茶", type: "专辑", date: "2021-03-14", songs: [
       { name: "好风", duration: 366 }, { name: "怎么办", duration: 298 }, { name: "眼泪花花把心淹了", duration: 252 },
       { name: "绿韭菜", duration: 223 }, { name: "阵阵格桑", duration: 276 }, { name: "荒野", duration: 300 },
       { name: "未来", duration: 303 }, { name: "云", duration: 259 }, { name: "莲花", duration: 302 },
       { name: "世事难料", duration: 497 }, { name: "遥远的地方", duration: 278 }, { name: "秋天", duration: 296 },
       { name: "雪花", duration: 309 }, { name: "丢", duration: 334 }, { name: "那么久", duration: 325 },
       { name: "羊肉面", duration: 300 }, { name: "粼兰曲", duration: 407 }, { name: "三疯", duration: 291 },
       { name: "三十里铺", duration: 286 }, { name: "我爱你亲爱的姑娘", duration: 230 }, { name: "守候", duration: 206 } ] },
      { name: "晴天沙丘", type: "专辑", date: "2027-09-22", songs: [
      { name: "晴天沙丘", duration: 287 }, { name: "裂痕夜车", duration: 289 }, { name: "孤岛水岸", duration: 290 },
      { name: "深夜的高架", duration: 519 }, { name: "遥远的风铃", duration: 301 }, { name: "漫长的晚风", duration: 251 },
      { name: "逆光走廊", duration: 255 } ] },
    { name: "残响尘埃", type: "专辑", date: "2029-11-01", songs: [
      { name: "残响尘埃", duration: 232 }, { name: "远方疾风", duration: 287 }, { name: "归途影中人", duration: 282 },
      { name: "长风站台", duration: 261 }, { name: "晨雾隧道", duration: 219 }, { name: "久违的狂风", duration: 305 },
      { name: "长夜锈迹", duration: 287 }, { name: "信号铁门", duration: 333 }, { name: "深夜的路口", duration: 273 } ] },
    { name: "久违的候鸟", type: "专辑", date: "2032-10-25", songs: [
      { name: "久违的候鸟", duration: 213 }, { name: "暮云铁道", duration: 264 }, { name: "霜降渡轮", duration: 205 },
      { name: "暮色空城", duration: 274 }, { name: "遥远的长夜", duration: 280 }, { name: "无名的风口", duration: 257 },
      { name: "站台信号", duration: 164 }, { name: "疾风闪电", duration: 303 }, { name: "残响归途", duration: 405 },
      { name: "久违的荒原", duration: 259 } ] },
    { name: "残阳尘埃", type: "专辑", date: "2035-10-14", songs: [
      { name: "残阳尘埃", duration: 462 }, { name: "归途野猫", duration: 273 }, { name: "汽笛冷月", duration: 333 },
      { name: "沉默的光年", duration: 234 }, { name: "漫长的铁道", duration: 254 }, { name: "极夜屋顶", duration: 276 },
      { name: "遥远的夜车", duration: 258 } ] },
    { name: "遥远的倒影", type: "专辑", date: "2038-03-31", songs: [
      { name: "遥远的倒影", duration: 180 }, { name: "天光高架", duration: 278 }, { name: "久违的黑巷", duration: 269 },
      { name: "潮间带归途", duration: 326 }, { name: "暗号甲板", duration: 267 }, { name: "晨雾岔路", duration: 207 },
      { name: "久违的出口", duration: 329 }, { name: "漫长的晴天", duration: 287 }, { name: "遥远的天桥", duration: 201 },
      { name: "电塔高架", duration: 285 }, { name: "高墙走廊", duration: 256 } ] },
    { name: "路口岔路", type: "专辑", date: "2041-02-09", songs: [
      { name: "路口岔路", duration: 284 }, { name: "无名的铁笼", duration: 306 }, { name: "无名的天台", duration: 265 },
      { name: "漫长的霜降", duration: 257 }, { name: "惊雷暮云", duration: 293 }, { name: "环流高架", duration: 193 },
      { name: "白墙晴天", duration: 178 }, { name: "环流铁门", duration: 243 } ] },
    { name: "归途霓虹", type: "专辑", date: "2043-10-08", songs: [
      { name: "归途霓虹", duration: 172 }, { name: "天桥沙丘", duration: 285 }, { name: "灯塔镜面", duration: 256 },
      { name: "漫长的铁笼", duration: 224 }, { name: "雨夜楼顶", duration: 334 }, { name: "晚钟走廊", duration: 295 },
      { name: "暗巷暮光", duration: 288 }, { name: "夜航回声", duration: 295 }, { name: "街灯旧城", duration: 298 },
      { name: "晚钟雨篷", duration: 292 } ] },
    { name: "遥远的暴雨", type: "专辑", date: "2046-08-04", songs: [
      { name: "遥远的暴雨", duration: 271 }, { name: "遥远的铁道", duration: 302 }, { name: "边界锈迹", duration: 276 },
      { name: "遥远的裂痕", duration: 296 }, { name: "出口旧城", duration: 493 }, { name: "漫长的末班车", duration: 276 },
      { name: "久违的光年", duration: 302 }, { name: "末班车野火", duration: 260 }, { name: "远方静默", duration: 507 } ] },
    { name: "荒原迷途", type: "专辑", date: "2049-10-20", songs: [
      { name: "荒原迷途", duration: 288 }, { name: "久违的暮色", duration: 498 }, { name: "惊雷铁道", duration: 306 },
      { name: "渡轮甲板", duration: 370 }, { name: "静默环流", duration: 213 }, { name: "无名的星光", duration: 236 },
      { name: "狂风惊雷", duration: 293 }, { name: "夜车街角", duration: 291 }, { name: "灰墙回声", duration: 278 },
      { name: "远方暗号", duration: 234 }, { name: "漫长的台阶", duration: 270 } ] },
    ],
  "扭曲的机器": [
    { name: "扭曲的机器", type: "专辑", date: "2000-01-01", songs: [
       { name: "没人给你面子", duration: 194 }, { name: "我没错", duration: 270 }, { name: "小心点", duration: 223 },
       { name: "证件", duration: 185 }, { name: "疯狗", duration: 188 }, { name: "禁止", duration: 218 },
       { name: "我决不会照你们说的去做", duration: 211 }, { name: "压抑不住的愤怒", duration: 346 } ] },
    { name: "重返地下", type: "专辑", date: "2003-01-01", songs: [
       { name: "新世纪", duration: 334 }, { name: "本能", duration: 207 }, { name: "阴影", duration: 345 },
       { name: "全体出动", duration: 187 }, { name: "界线", duration: 474 }, { name: "推动我", duration: 281 },
       { name: "我们来自地下 (Live)", duration: 269 } ] },
    { name: "存在", type: "专辑", date: "2007-01-01", songs: [
       { name: "镜子中", duration: 559 }, { name: "理想的背后", duration: 352 }, { name: "别惹我", duration: 250 },
       { name: "存在的意义", duration: 351 } ] },
    { name: "XXX", type: "专辑", date: "2015-01-01", songs: [
       { name: "三十", duration: 467 }, { name: "困兽斗", duration: 310 }, { name: "那一天", duration: 343 },
       { name: "剃刀边缘", duration: 289 }, { name: "让摇滚的声音响彻整个夜晚", duration: 338 }, { name: "紧随节奏POGO", duration: 267 },
       { name: "坚定的信念", duration: 334 }, { name: "天堂里", duration: 254 } ] },
      { name: "寒夜铁链", type: "专辑", date: "2028-08-05", songs: [
      { name: "寒夜铁链", duration: 508 }, { name: "漫长的寒夜", duration: 293 }, { name: "沉默的狂暴", duration: 316 },
      { name: "燃烧烈焰", duration: 243 }, { name: "铁爪极昼", duration: 254 }, { name: "深夜的铁骑", duration: 245 },
      { name: "漫长的铁谷", duration: 261 } ] },
    { name: "沉默的寒霜", type: "专辑", date: "2032-05-26", songs: [
      { name: "沉默的寒霜", duration: 289 }, { name: "遥远的铁翼", duration: 290 }, { name: "绝境战鼓", duration: 305 },
      { name: "极昼铸剑", duration: 305 }, { name: "遥远的铁幕", duration: 292 }, { name: "铸剑寒霜", duration: 314 },
      { name: "铁蹄铁峰", duration: 322 }, { name: "遥远的战车", duration: 269 }, { name: "长矛燃烧", duration: 344 },
      { name: "重盾铁锤", duration: 540 }, { name: "铁链灰狼", duration: 274 } ] },
    { name: "深夜的铁誓", type: "专辑", date: "2036-02-24", songs: [
      { name: "深夜的铁誓", duration: 288 }, { name: "黑潮荒原", duration: 305 }, { name: "崩裂暗狱", duration: 308 },
      { name: "狂暴铸剑", duration: 325 }, { name: "漫长的孤城", duration: 269 }, { name: "圣坛重盾", duration: 244 },
      { name: "铁魂战车", duration: 281 } ] },
    { name: "黑潮血月", type: "专辑", date: "2040-02-24", songs: [
      { name: "黑潮血月", duration: 298 }, { name: "遥远的血月", duration: 230 }, { name: "漫长的冰川", duration: 288 },
      { name: "久违的战车", duration: 295 }, { name: "漫长的铁翼", duration: 288 }, { name: "寒霜铁翼", duration: 276 },
      { name: "无名的黑铁", duration: 300 }, { name: "铁座战旗", duration: 362 }, { name: "铁诫灰烬城", duration: 505 } ] },
    { name: "沉默的铁诫", type: "专辑", date: "2044-04-19", songs: [
      { name: "沉默的铁诫", duration: 321 }, { name: "久违的铁律", duration: 436 }, { name: "铁崖铁丘", duration: 201 },
      { name: "熔炉纪念碑", duration: 242 }, { name: "荒原铸剑", duration: 302 }, { name: "铁壁燃烧", duration: 287 },
      { name: "遥远的荒岭", duration: 221 }, { name: "无名的亡魂", duration: 325 }, { name: "无名的战旗", duration: 309 },
      { name: "血月", duration: 341 }, { name: "极昼石柱", duration: 264 } ] },
    { name: "战旗烈焰", type: "专辑", date: "2048-12-31", songs: [
      { name: "战旗烈焰", duration: 298 }, { name: "铁骑铁翼", duration: 311 }, { name: "遥远的狂暴", duration: 285 },
      { name: "沉默的铁律", duration: 350 }, { name: "巨浪石柱", duration: 167 }, { name: "沉默的钢铁", duration: 270 },
      { name: "寒夜裂痕", duration: 548 }, { name: "血河寒夜", duration: 510 }, { name: "久违的铁鳞", duration: 328 },
      { name: "沉默的雷霆", duration: 360 }, { name: "沉默的铁链", duration: 293 } ] },
    ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
    { name: "无界", type: "专辑", date: "2020-07-27", songs: [
       { name: "Intro", duration: 111 }, { name: "衣锦寒", duration: 300 }, { name: "亚特兰蒂斯", duration: 262 },
       { name: "归航", duration: 301 }, { name: "巨鲸落", duration: 334 }, { name: "黎明之下", duration: 318 } ] },
      { name: "漫长的王座", type: "专辑", date: "2028-02-27", songs: [
      { name: "漫长的王座", duration: 258 }, { name: "铁盔黑焰", duration: 272 }, { name: "深夜的铁诫", duration: 269 },
      { name: "漫长的铁爪", duration: 322 }, { name: "铁丘孤鹰", duration: 403 }, { name: "重盾灰烬城", duration: 249 },
      { name: "铁轨铁丘", duration: 382 }, { name: "无名的黑焰", duration: 283 }, { name: "遥远的铁渊", duration: 294 } ] },
    { name: "铁诫雷鸣", type: "专辑", date: "2032-01-07", songs: [
      { name: "铁诫雷鸣", duration: 284 }, { name: "破碎铁幕", duration: 230 }, { name: "裂痕战鼓", duration: 268 },
      { name: "久违的重盾", duration: 246 }, { name: "熔炉铁翼", duration: 319 }, { name: "沉默的铁座", duration: 261 },
      { name: "寒夜铁冠", duration: 324 }, { name: "圣坛黑焰", duration: 309 }, { name: "久违的血河", duration: 261 },
      { name: "铁牢寒霜", duration: 271 }, { name: "无名的铁谷", duration: 249 } ] },
    { name: "高原雷霆", type: "专辑", date: "2036-02-17", songs: [
      { name: "高原雷霆", duration: 293 }, { name: "灰狼战鼓", duration: 260 }, { name: "久违的铁骑", duration: 276 },
      { name: "沉默的烈焰", duration: 292 }, { name: "漫长的灰烬城", duration: 255 }, { name: "沉默的铁轨", duration: 251 },
      { name: "破碎铁轨", duration: 265 } ] },
    { name: "久违的黑焰", type: "专辑", date: "2040-02-23", songs: [
      { name: "久违的黑焰", duration: 231 }, { name: "久违的极北", duration: 300 }, { name: "久违的冰川", duration: 199 },
      { name: "铁骨铁幕", duration: 229 }, { name: "雷霆铁棺", duration: 238 }, { name: "炼狱亡魂", duration: 223 },
      { name: "深夜的铁羽", duration: 272 }, { name: "铁魂铁律", duration: 284 }, { name: "沉默的战旗", duration: 281 } ] },
    { name: "深夜的铁壁", type: "专辑", date: "2045-01-27", songs: [
      { name: "深夜的铁壁", duration: 436 }, { name: "沉默的铁棺", duration: 231 }, { name: "铸剑巅峰", duration: 171 },
      { name: "裂痕寒夜", duration: 193 }, { name: "铁矛雷霆", duration: 411 }, { name: "铁丘黑焰", duration: 285 },
      { name: "深夜的战车", duration: 254 }, { name: "无名的破碎", duration: 206 }, { name: "遥远的火山", duration: 284 } ] },
    { name: "铁羽铁牢", type: "专辑", date: "2049-02-21", songs: [
      { name: "铁羽铁牢", duration: 271 }, { name: "铁壁亡魂", duration: 264 }, { name: "黑潮铁塔", duration: 319 },
      { name: "深渊长矛", duration: 283 }, { name: "无名的高原", duration: 400 }, { name: "铁渊黑焰", duration: 249 },
      { name: "铁崖铁骨", duration: 330 }, { name: "漫长的血誓", duration: 265 }, { name: "深夜的雷霆", duration: 285 } ] },
    ],
  "郁乐队": [
    { name: "日落伊甸园", type: "EP", date: "2009-01-01", songs: [
      { name: "仙女座", duration: 280 }, { name: "悲伤致死", duration: 270 } ] },
    { name: "悲伤之旅", type: "专辑", date: "2012-01-01", rating: 7.8, songs: [
       { name: "Intro", duration: 129 }, { name: "悲伤之旅", duration: 273 }, { name: "仙女座", duration: 309 },
       { name: "针锋相对", duration: 253 }, { name: "九分之五", duration: 310 }, { name: "日落伊甸园", duration: 366 },
       { name: "随行如影", duration: 345 }, { name: "傀儡精神", duration: 349 }, { name: "逆向穿行", duration: 323 },
       { name: "Die From Sorrow", duration: 386 } ] },
    { name: "异海之王", type: "专辑", date: "2016-01-01", songs: [
       { name: "异海之王", duration: 277 }, { name: "在风暴的中央", duration: 347 }, { name: "云雾湾", duration: 381 },
       { name: "永恒的守望", duration: 363 }, { name: "轮回之海", duration: 337 } ] },
    { name: "盛大的狂欢", type: "专辑", date: "2024-02-19", songs: [
       { name: "盛大的狂欢", duration: 262 }, { name: "再见平凡世界", duration: 264 }, { name: "夜·幕", duration: 336 },
       { name: "真理的黄昏", duration: 330 }, { name: "沉默信徒", duration: 237 },
       { name: "DIE FROM SORROW (郁郁而终) (20周年纪念版)", duration: 415 }, { name: "盛大的狂欢 (器乐纯享版)", duration: 262 },
       { name: "再见平凡世界 (器乐纯享版)", duration: 264 }, { name: "夜·幕 (器乐纯享版)", duration: 336 },
       { name: "真理的黄昏 (器乐纯享版)", duration: 330 }, { name: "沉默信徒 (器乐纯享版)", duration: 237 },
       { name: "DIE FROM SORROW (郁郁而终) (20周年纪念版|器乐纯享版)", duration: 415 } ] },
      { name: "深夜的深渊", type: "专辑", date: "2027-11-26", songs: [
      { name: "深夜的深渊", duration: 257 }, { name: "铁塔火山", duration: 235 }, { name: "漫长的亡魂", duration: 315 },
      { name: "极北纪念碑", duration: 298 }, { name: "铁律铁座", duration: 325 }, { name: "漫长的铸剑", duration: 344 },
      { name: "战车铁骑", duration: 214 }, { name: "铁锤黑铁", duration: 292 }, { name: "铸剑血誓", duration: 316 },
      { name: "孤鹰铁塔", duration: 338 }, { name: "铸剑怒吼", duration: 284 } ] },
    { name: "深渊荒岭", type: "专辑", date: "2031-12-16", songs: [
      { name: "深渊荒岭", duration: 298 }, { name: "深夜的熔炉", duration: 322 }, { name: "黑潮烈焰", duration: 330 },
      { name: "深夜的铁翼", duration: 311 }, { name: "极昼铁丘", duration: 303 }, { name: "雷霆寒夜", duration: 430 },
      { name: "巅峰荒原", duration: 341 }, { name: "久违的战鼓", duration: 256 }, { name: "无名的铁崖", duration: 309 } ] },
    { name: "久违的寒霜", type: "专辑", date: "2036-06-27", songs: [
      { name: "久违的寒霜", duration: 329 }, { name: "极北荒岭", duration: 329 }, { name: "久违的孤鹰", duration: 265 },
      { name: "沉默的巅峰", duration: 299 }, { name: "铁骨灰烬", duration: 253 }, { name: "深夜的铁矛", duration: 252 },
      { name: "漫长的铁塔", duration: 539 } ] },
    { name: "铁骑血河", type: "专辑", date: "2040-09-07", songs: [
      { name: "铁骑血河", duration: 281 }, { name: "漫长的荒原", duration: 294 }, { name: "亡魂铁律", duration: 243 },
      { name: "深夜的铁座", duration: 220 }, { name: "铁律极北", duration: 281 }, { name: "铁壁圣坛", duration: 341 },
      { name: "沉默的极昼", duration: 291 }, { name: "久违的铁壁", duration: 309 }, { name: "铁爪铁轨", duration: 258 },
      { name: "久违的极昼", duration: 293 } ] },
    { name: "血河铁崖", type: "专辑", date: "2044-07-05", songs: [
      { name: "血河铁崖", duration: 560 }, { name: "无名的铁律", duration: 260 }, { name: "长矛冰川", duration: 182 },
      { name: "铁魂灰烬城", duration: 288 }, { name: "深夜的铁崖", duration: 315 }, { name: "黑焰怒吼", duration: 298 },
      { name: "遥远的血誓", duration: 323 }, { name: "铁轨烈焰", duration: 323 } ] },
    { name: "铸剑铁骨", type: "EP", date: "2048-11-30", songs: [
      { name: "铸剑铁骨", duration: 226 }, { name: "铁魂深渊", duration: 285 }, { name: "沉默的黑潮", duration: 227 },
      { name: "深夜的黑焰", duration: 309 }, { name: "无名的雷霆", duration: 285 }, { name: "漫长的铁丘", duration: 558 } ] },
    ],
  "声音玩具": [
    { name: "最美妙的旅行", type: "专辑", date: "2003-12-01", rating: 8.4, songs: [
       { name: "星期天大街", duration: 457 }, { name: "爱玲", duration: 441 }, { name: "未来", duration: 467 },
       { name: "秘密的爱", duration: 375 }, { name: "不朽", duration: 688 }, { name: "完美的一天", duration: 183 },
       { name: "青春", duration: 391 }, { name: "奇迹", duration: 417 }, { name: "Sleeper", duration: 248 },
       { name: "伟大说谎者", duration: 370 } ] },
    { name: "爱是昂贵的", type: "专辑", date: "2015-01-01", rating: 8.5, songs: [
       { name: "最美妙的旅行", duration: 327 }, { name: "生命", duration: 540 }, { name: "和那些人一样", duration: 514 },
       { name: "请问哪里才能买到晶体管收音机", duration: 385 }, { name: "明天你依旧在我身旁", duration: 306 },
       { name: "抚琴小夜曲", duration: 479 }, { name: "你是无可替代", duration: 431 }, { name: "星航者发现号", duration: 478 },
       { name: "时间", duration: 720 } ] },
    { name: "劳动之余", type: "专辑", date: "2021-04-30", rating: 8.2, songs: [
       { name: "爱是昂贵的", duration: 398 }, { name: "你的城市", duration: 359 }, { name: "没有人能够比我们更接近对方", duration: 370 },
       { name: "昨夜我飞向遥远的火星", duration: 405 }, { name: "月上乌尤", duration: 358 }, { name: "清塘荷韵", duration: 320 },
       { name: "时间之外", duration: 259 }, { name: "超级巨星", duration: 311 } ] },
      { name: "杂草裂痕", type: "专辑", date: "2028-01-22", songs: [
      { name: "杂草裂痕", duration: 421 }, { name: "铁笼夜雾", duration: 322 }, { name: "夜雾水岸", duration: 342 },
      { name: "暮云晚钟", duration: 386 }, { name: "站台归途", duration: 409 }, { name: "沉默的逆旅", duration: 560 },
      { name: "铁桥隧道", duration: 299 }, { name: "灯塔潮汐", duration: 405 }, { name: "回声暮光", duration: 421 },
      { name: "游园涂鸦", duration: 384 } ] },
    { name: "漫长的灰墙", type: "专辑", date: "2031-11-15", songs: [
      { name: "漫长的灰墙", duration: 376 }, { name: "水岸信号灯", duration: 393 }, { name: "沉默的灰烬", duration: 560 },
      { name: "斑马线风口", duration: 344 }, { name: "沉默的电塔", duration: 475 }, { name: "沉默的风铃", duration: 447 },
      { name: "风口游园", duration: 421 } ] },
    { name: "渡轮公路", type: "专辑", date: "2036-05-08", songs: [
      { name: "渡轮公路", duration: 370 }, { name: "寒潮末班车", duration: 444 }, { name: "铁轨夜车", duration: 278 },
      { name: "遥远的冷月", duration: 377 }, { name: "深夜的长风", duration: 425 }, { name: "沉默的影中人", duration: 393 },
      { name: "铁轨曦光", duration: 389 }, { name: "碎片楼顶", duration: 379 }, { name: "深夜的晴天", duration: 413 } ] },
    { name: "废楼冷月", type: "专辑", date: "2040-03-12", songs: [
      { name: "废楼冷月", duration: 448 }, { name: "光年冷月", duration: 424 }, { name: "遥远的灰墙", duration: 471 },
      { name: "逆旅霓虹", duration: 377 }, { name: "久违的码头", duration: 443 }, { name: "深夜的晚钟", duration: 329 },
      { name: "暗号斑马线", duration: 407 }, { name: "碎片狂风", duration: 480 }, { name: "沉默的冷月", duration: 383 },
      { name: "逆流倒影", duration: 560 } ] },
    { name: "甲板长风", type: "专辑", date: "2044-06-15", songs: [
      { name: "甲板长风", duration: 395 }, { name: "夜班街灯", duration: 451 }, { name: "街灯站台", duration: 560 },
      { name: "裂痕长风", duration: 387 }, { name: "出口高架", duration: 404 }, { name: "极夜归途", duration: 400 },
      { name: "无名的高墙", duration: 560 }, { name: "深夜的白墙", duration: 441 }, { name: "沉默的涂鸦", duration: 327 },
      { name: "逆旅码头", duration: 373 } ] },
    { name: "长夜屋顶", type: "专辑", date: "2048-10-03", songs: [
      { name: "长夜屋顶", duration: 372 }, { name: "初晴逆流", duration: 319 }, { name: "候鸟游园", duration: 279 },
      { name: "候鸟疾风", duration: 368 }, { name: "街灯霜降", duration: 426 }, { name: "久违的冷月", duration: 478 },
      { name: "无名的边界", duration: 422 }, { name: "漫长的旧巷", duration: 493 } ] },
    ],
  "秘密行动": [
    { name: "奇怪的老式娱乐", type: "EP", date: "2013-10-01", songs: [
      { name: "奇怪的老式娱乐", duration: 280 } ] },
    { name: "Loop 循环", type: "专辑", date: "2015-08-01", rating: 7.8, songs: [
       { name: "Hook", duration: 257 }, { name: "A Glossy Flirt", duration: 419 },
       { name: "Black Hole’s Metronome", duration: 259 }, { name: "Suicidium Morbus", duration: 282 },
       { name: "Electric Echo", duration: 284 }, { name: "Corridor 17", duration: 272 },
       { name: "No Replay", duration: 378 }, { name: "Tech Chords 1.0", duration: 85 },
       { name: "Aamir", duration: 378 }, { name: "Sorrow", duration: 337 }, { name: "她在每晚的夜空中穿行", duration: 387 } ] },
    { name: "碎片", type: "专辑", date: "2019-01-01", songs: [
       { name: "CHAOS", duration: 339 }, { name: "NEUTRAL LIFE", duration: 345 },
       { name: "WHY WE CHOSE TO DIE IN BERLIN", duration: 429 }, { name: "ENTER THE GAP", duration: 221 },
       { name: "COPY SHOP", duration: 361 }, { name: "VAMPIRE LOVERS", duration: 327 },
       { name: "FROZEN SONG", duration: 315 }, { name: "TURN BLACK", duration: 323 },
       { name: "FROM THE FUTURE", duration: 368 }, { name: "THE LOOP SIN", duration: 483 } ] },
      { name: "Soil", type: "专辑", date: "2027-01-23", songs: [
      { name: "Soil（土壤）", duration: 321 }, { name: "Rain（雨）", duration: 557 }, { name: "Anchor（锚）", duration: 236 },
      { name: "Blanket（绒毯）", duration: 459 }, { name: "Daylight Blossom（日光的花开）", duration: 355 }, { name: "Tree（树）", duration: 336 },
      { name: "Tower Carousel（塔的旋转木马）", duration: 333 }, { name: "Gravel（砾石）", duration: 355 }, { name: "Anchor Wood（锚的树林）", duration: 525 },
      { name: "Stone（石头）", duration: 336 }, { name: "Pebble（卵石）", duration: 482 } ] },
    { name: "Signal", type: "专辑", date: "2029-11-15", songs: [
      { name: "Signal（信号）", duration: 377 }, { name: "Petal（花瓣）", duration: 363 }, { name: "Cinder（炭烬）", duration: 307 },
      { name: "Orbit（轨道）", duration: 315 }, { name: "Compass（罗盘）", duration: 374 }, { name: "Satellite（卫星）", duration: 321 },
      { name: "Kite（风筝）", duration: 316 }, { name: "Spark Lantern（火花的灯笼）", duration: 350 }, { name: "Hill Wood（山丘的树林）", duration: 383 },
      { name: "Desert Circle（荒原的圆圈）", duration: 300 } ] },
    { name: "Halo", type: "专辑", date: "2032-07-01", songs: [
      { name: "Halo（光晕）", duration: 250 }, { name: "Wave（波浪）", duration: 381 }, { name: "Summer（夏天）", duration: 352 },
      { name: "Twilight（暮色）", duration: 349 }, { name: "Glimmer Plain（微光的平原）", duration: 305 }, { name: "Song（歌）", duration: 344 },
      { name: "Forest Orbit（森林的轨道）", duration: 346 }, { name: "Mirrors Ridge（镜子的山脊）", duration: 312 }, { name: "Shallow（浅滩）", duration: 348 },
      { name: "Garden（花园）", duration: 318 } ] },
    { name: "Neon", type: "EP", date: "2034-09-20", songs: [
      { name: "Neon（霓虹）", duration: 354 }, { name: "Beacon（灯塔）", duration: 227 }, { name: "Quartz Fog（石英的雾）", duration: 327 },
      { name: "Storm Dusk（风暴的薄暮）", duration: 353 } ] },
    { name: "Pond Glow", type: "专辑", date: "2037-02-09", songs: [
      { name: "Pond Glow（池塘的辉光）", duration: 361 }, { name: "Orbit Sand（轨道的沙）", duration: 322 }, { name: "Snow Haze（雪的轻雾）", duration: 336 },
      { name: "Rain Crystal（雨的水晶）", duration: 302 }, { name: "Fleet Vapor（舰队的雾霭）", duration: 312 }, { name: "Quiet（寂静）", duration: 342 },
      { name: "Kite Harbor（风筝的港湾）", duration: 288 }, { name: "Trail Motel（足迹的汽车旅馆）", duration: 326 }, { name: "Asphalt Paperplane（柏油的纸飞机）", duration: 230 } ] },
    { name: "Fog", type: "专辑", date: "2039-12-03", songs: [
      { name: "Fog（雾）", duration: 370 }, { name: "Veil Shell（帷幕的贝壳）", duration: 560 }, { name: "Forest Grain（森林的颗粒）", duration: 326 },
      { name: "Storm Nightfall（风暴的夜幕）", duration: 484 }, { name: "Hill Salt（山丘的盐）", duration: 343 }, { name: "Flood Sun（洪流的太阳）", duration: 293 },
      { name: "River Moon（河流的月亮）", duration: 184 }, { name: "Sand（沙）", duration: 341 }, { name: "Iron Shell（铁的贝壳）", duration: 299 },
      { name: "Sand Iron（沙的铁）", duration: 194 } ] },
    { name: "Tide Marrow", type: "专辑", date: "2042-02-25", songs: [
      { name: "Tide Marrow（潮汐的骨髓）", duration: 313 }, { name: "Dusk Feather（薄暮的羽毛）", duration: 231 }, { name: "Mirrors Compass（镜子的罗盘）", duration: 445 },
      { name: "Signal Compass（信号的罗盘）", duration: 305 }, { name: "Dawn（黎明）", duration: 352 }, { name: "Thunder（雷）", duration: 279 },
      { name: "Harbor Neon（港湾的霓虹）", duration: 481 }, { name: "Plain Path（平原的小径）", duration: 316 } ] },
    { name: "Broken Neon", type: "专辑", date: "2044-10-27", songs: [
      { name: "Broken Neon（破碎的霓虹）", duration: 240 }, { name: "Highway（公路）", duration: 262 }, { name: "Nightfall Sun（夜幕的太阳）", duration: 232 },
      { name: "Pine Sun（松的太阳）", duration: 329 }, { name: "Meridian（子午线）", duration: 336 }, { name: "Static Crescent（静电的新月）", duration: 302 },
      { name: "Velvet（天鹅绒）", duration: 311 }, { name: "Daybreak（黎明）", duration: 295 }, { name: "Gravel Wind（砾石的风）", duration: 312 },
      { name: "Leaf Motel（叶的汽车旅馆）", duration: 321 }, { name: "Nightfall Wish（夜幕的愿望）", duration: 318 } ] },
    { name: "Heart", type: "专辑", date: "2047-07-18", songs: [
      { name: "Heart（心）", duration: 299 }, { name: "Amber Tide（琥珀的潮汐）", duration: 295 }, { name: "Ocean Vine（海洋的藤蔓）", duration: 442 },
      { name: "Ivory Wave（象牙的波浪）", duration: 309 }, { name: "Twilight Marrow（暮色的骨髓）", duration: 317 }, { name: "Vapor Undertow（雾霭的暗流）", duration: 330 },
      { name: "Faded（褪色）", duration: 529 }, { name: "Wind（风）", duration: 298 }, { name: "Stone Quartz（石头的石英）", duration: 302 },
      { name: "Haze Harbor（轻雾的港湾）", duration: 317 }, { name: "Lake Vine（湖的藤蔓）", duration: 287 } ] },
    { name: "Quartz Ivory", type: "EP", date: "2050-01-15", songs: [
      { name: "Quartz Ivory（石英的象牙）", duration: 343 }, { name: "Sand Pine（沙的松）", duration: 351 }, { name: "Feather Concrete（羽毛的水泥）", duration: 367 },
      { name: "Trail（足迹）", duration: 183 } ] },
    ],
  "大波浪": [
    { name: "THE BIG WAVE", type: "专辑", date: "2016-09-01", rating: 7.8, songs: [
       { name: "Not Just Imagining", duration: 306 }, { name: "02", duration: 244 },
       { name: "Kiss Girls", duration: 264 }, { name: "Sheep with a Shepherd", duration: 299 },
       { name: "Synth", duration: 281 }, { name: "Modern", duration: 223 }, { name: "Fill In", duration: 262 },
       { name: "Rough Sea", duration: 260 }, { name: "Unknown", duration: 232 }, { name: "Seek", duration: 274 } ] },
    { name: "蓝色的脸", type: "专辑", date: "2018-01-01", rating: 8.0, songs: [
       { name: "他的方式", duration: 265 }, { name: "No Such Disease", duration: 343 }, { name: "新时代", duration: 253 },
       { name: "离开我你会后悔", duration: 292 }, { name: "See You Looking Through Me", duration: 251 },
       { name: "Just No", duration: 235 }, { name: "祝贺", duration: 245 },
       { name: "The Song of Silence", duration: 335 }, { name: "See The Sun", duration: 241 },
       { name: "Love or Kill", duration: 227 } ] },
    { name: "新逻辑", type: "专辑", date: "2021-01-01", songs: [
       { name: "I Have Nothing But You", duration: 321 }, { name: "嘴上功夫", duration: 223 },
       { name: "Hold On", duration: 275 }, { name: "Mickey", duration: 195 },
       { name: "Secret  Lover", duration: 261 }, { name: "Mommy", duration: 202 },
       { name: "Falling World", duration: 293 }, { name: "迷之微笑", duration: 302 },
       { name: "Machine Control The Earth", duration: 263 }, { name: "病态新城", duration: 236 } ] },
    { name: "不止一面", type: "专辑", date: "2021-01-01", songs: [
       { name: "终于有一天我不再开口", duration: 319 }, { name: "被自己掏空", duration: 238 }, { name: "人浮于事", duration: 254 },
       { name: "药石罔效", duration: 204 }, { name: "我们在一起颤抖", duration: 232 }, { name: "愿与他重修旧好", duration: 225 },
       { name: "再见！马克西姆", duration: 267 }, { name: "无法忘记她", duration: 222 }, { name: "欲言又止", duration: 231 },
       { name: "踽踽独行", duration: 270 } ] },
      { name: "Undertow Wish", type: "专辑", date: "2027-03-30", songs: [
      { name: "Undertow Wish（暗流的愿望）", duration: 278 }, { name: "Song Road（歌的道路）", duration: 250 }, { name: "Smoke Silver（烟雾的银色）", duration: 285 },
      { name: "Asphalt Plain（柏油的平原）", duration: 261 }, { name: "Motion Nest（律动的巢）", duration: 178 }, { name: "Wood（树林）", duration: 214 },
      { name: "Steam Grain（蒸汽的颗粒）", duration: 239 } ] },
    { name: "Thaw Dawn", type: "专辑", date: "2029-02-15", songs: [
      { name: "Thaw Dawn（融雪的黎明）", duration: 204 }, { name: "Steam（蒸汽）", duration: 182 }, { name: "Smoke Leaf（烟雾的叶）", duration: 233 },
      { name: "River Flood（河流的洪流）", duration: 280 }, { name: "Petal Field（花瓣的原野）", duration: 252 }, { name: "Heart Crystal（心的水晶）", duration: 283 },
      { name: "Salt（盐）", duration: 267 } ] },
    { name: "Plain Sky", type: "专辑", date: "2031-04-24", songs: [
      { name: "Plain Sky（平原的天空）", duration: 243 }, { name: "Tower Summer（塔的夏天）", duration: 147 }, { name: "Coral Window（珊瑚的窗）", duration: 193 },
      { name: "Vine（藤蔓）", duration: 258 }, { name: "Bloom Midnight（绽放的午夜）", duration: 440 }, { name: "Motion（律动）", duration: 309 },
      { name: "Flame（火焰）", duration: 283 }, { name: "Pine（松）", duration: 250 }, { name: "Flood（洪流）", duration: 483 },
      { name: "Rust Pond（锈迹的池塘）", duration: 241 } ] },
    { name: "Daylight", type: "专辑", date: "2033-02-12", songs: [
      { name: "Daylight（日光）", duration: 310 }, { name: "Anchor Daybreak（锚的黎明）", duration: 284 }, { name: "Midnight Glass（午夜的玻璃）", duration: 218 },
      { name: "Cliff Cloud（断崖的云）", duration: 303 }, { name: "Faded Mist（褪色的薄雾）", duration: 307 }, { name: "Road（道路）", duration: 245 },
      { name: "Echo Cinder（回声的炭烬）", duration: 198 }, { name: "Vine Diamond（藤蔓的钻石）", duration: 273 } ] },
    { name: "Gravel Vapor", type: "专辑", date: "2035-08-17", songs: [
      { name: "Gravel Vapor（砾石的雾霭）", duration: 282 }, { name: "Slope Shell（斜坡的贝壳）", duration: 180 }, { name: "Hollow Shore（空洞的岸边）", duration: 245 },
      { name: "Ivory（象牙）", duration: 415 }, { name: "Sand Daybreak（沙的黎明）", duration: 248 }, { name: "Compass Blossom（罗盘的花开）", duration: 260 },
      { name: "Haze（轻雾）", duration: 250 }, { name: "Ice Vine（冰的藤蔓）", duration: 257 }, { name: "Crescent Drift（新月的漂流）", duration: 448 },
      { name: "Field Fog（原野的雾）", duration: 271 }, { name: "Petal Wish（花瓣的愿望）", duration: 282 } ] },
    { name: "Wave Wish", type: "专辑", date: "2037-04-19", songs: [
      { name: "Wave Wish（波浪的愿望）", duration: 291 }, { name: "Sea Echo（海的回声）", duration: 187 }, { name: "Quartz（石英）", duration: 248 },
      { name: "Ridge Shell（山脊的贝壳）", duration: 309 }, { name: "Motel（汽车旅馆）", duration: 278 }, { name: "Path Crystal（小径的水晶）", duration: 270 },
      { name: "Stream Glow（溪流的辉光）", duration: 162 }, { name: "Thunder Twilight（雷的暮色）", duration: 251 }, { name: "Marrow（骨髓）", duration: 184 } ] },
    { name: "Smoke Silence", type: "专辑", date: "2039-10-14", songs: [
      { name: "Smoke Silence（烟雾的沉寂）", duration: 301 }, { name: "Diamond Trail（钻石的足迹）", duration: 159 }, { name: "Blanket Asphalt（绒毯的柏油）", duration: 192 },
      { name: "Plain（平原）", duration: 279 }, { name: "Ember Echo（余烬的回声）", duration: 303 }, { name: "Pulse Lantern（脉冲的灯笼）", duration: 376 },
      { name: "Iron Hill（铁的山丘）", duration: 272 }, { name: "Sun Dusk（太阳的薄暮）", duration: 256 }, { name: "Moss Hill（青苔的山丘）", duration: 416 } ] },
    { name: "Fog Ivory", type: "专辑", date: "2041-09-11", songs: [
      { name: "Fog Ivory（雾的象牙）", duration: 247 }, { name: "Drift Soil（漂流的土壤）", duration: 404 }, { name: "Pulse Mist（脉冲的薄雾）", duration: 280 },
      { name: "Glimmer（微光）", duration: 265 }, { name: "Frost Shallow（霜的浅滩）", duration: 281 }, { name: "Golden Snow（金色的雪）", duration: 241 },
      { name: "Meridian Dusk（子午线的薄暮）", duration: 151 }, { name: "Star Fleet（星的舰队）", duration: 260 } ] },
    { name: "Crystal Meadow", type: "专辑", date: "2043-08-12", songs: [
      { name: "Crystal Meadow（水晶的草地）", duration: 220 }, { name: "Vine Sundown（藤蔓的日落）", duration: 254 }, { name: "Road Fog（道路的雾）", duration: 237 },
      { name: "Moon Concrete（月亮的水泥）", duration: 365 }, { name: "Overcast Pulse（阴云的脉冲）", duration: 355 }, { name: "Glimmer Rust（微光的锈迹）", duration: 268 },
      { name: "Lantern Wood（灯笼的树林）", duration: 242 }, { name: "Loam Sundown（沃土的日落）", duration: 244 }, { name: "Coral Frost（珊瑚的霜）", duration: 145 } ] },
    { name: "Slope Sundown", type: "专辑", date: "2045-08-02", songs: [
      { name: "Slope Sundown（斜坡的日落）", duration: 281 }, { name: "Halo Marrow（光晕的骨髓）", duration: 301 }, { name: "Snow Glass（雪的玻璃）", duration: 270 },
      { name: "Desert（荒原）", duration: 284 }, { name: "Winter Broken（冬天的破碎）", duration: 255 }, { name: "Void（虚空）", duration: 277 },
      { name: "Mirrors Wind（镜子的风）", duration: 254 }, { name: "Gravel Nest（砾石的巢）", duration: 203 }, { name: "Shallow Ice（浅滩的冰）", duration: 242 },
      { name: "Shore Flood（岸边的洪流）", duration: 258 }, { name: "Compass Beacon（罗盘的灯塔）", duration: 275 } ] },
    { name: "Smoke Journey", type: "专辑", date: "2048-02-01", songs: [
      { name: "Smoke Journey（烟雾的旅程）", duration: 212 }, { name: "Veil Tower（帷幕的塔）", duration: 257 }, { name: "Dawn Nest（黎明的巢）", duration: 244 },
      { name: "Mist（薄雾）", duration: 478 }, { name: "Hill Diamond（山丘的钻石）", duration: 438 }, { name: "Mist Daybreak（薄雾的黎明）", duration: 295 },
      { name: "Tower Wish（塔的愿望）", duration: 235 } ] },
    { name: "Satellite Sky", type: "专辑", date: "2049-11-25", songs: [
      { name: "Satellite Sky（卫星的天空）", duration: 278 }, { name: "Amber Thaw（琥珀的融雪）", duration: 272 }, { name: "Motel Canvas（汽车旅馆的画布）", duration: 254 },
      { name: "Compass Loam（罗盘的沃土）", duration: 206 }, { name: "Iron Field（铁的原野）", duration: 267 }, { name: "Moss Daylight（青苔的日光）", duration: 235 },
      { name: "Sand Dusk（沙的薄暮）", duration: 240 }, { name: "Quiet Pulse（寂静的脉冲）", duration: 242 }, { name: "Silk Path（丝绸的小径）", duration: 423 },
      { name: "Stream Steam（溪流的蒸汽）", duration: 255 } ] },
    ],
  "房东的猫": [
    { name: "房东的猫", type: "专辑", date: "2017-01-26", rating: 7.8, songs: [
      { name: "美好事物", duration: 280 }, { name: "不知归期的故人", duration: 270 }, { name: "秋酿", duration: 260 },
      { name: "往往", duration: 270 }, { name: "简情歌(钢琴版)", duration: 250 }, { name: "短叹", duration: 270 },
      { name: "所以来吧", duration: 280 } ] },
    { name: "柔软", type: "专辑", date: "2018-04-01", songs: [
      { name: "远去的飞鸟", duration: 270 }, { name: "柔软", duration: 280 }, { name: "如常", duration: 270 },
      { name: "独一", duration: 260 }, { name: "等我们老了，就定居在重庆", duration: 290 }, { name: "白", duration: 270 },
      { name: "你是我最愚蠢的一次浪漫", duration: 280 } ] },
    { name: "这是你想要的生活吗", type: "专辑", date: "2020-04-18", songs: [
       { name: "Distance (Intro)", duration: 211 }, { name: "这是你想要的生活吗", duration: 244 },
       { name: "孤独之书", duration: 298 }, { name: "月亮拥抱我", duration: 228 }, { name: "由于时间与地域的关系", duration: 219 },
       { name: "谈恋爱前不如先养猫", duration: 231 }, { name: "海", duration: 314 }, { name: "Indigo", duration: 251 },
       { name: "愿你有故乡", duration: 253 }, { name: "时间简史", duration: 464 } ] },
    { name: "世界/青年", type: "专辑", date: "2023-05-04", songs: [
       { name: "不来也不去", duration: 307 }, { name: "城市动物园", duration: 249 }, { name: "慢游", duration: 273 },
       { name: "西部故事", duration: 251 }, { name: "生日快乐", duration: 272 }, { name: "潮", duration: 218 },
       { name: "如何", duration: 245 }, { name: "浪漫日记", duration: 236 }, { name: "光的房子", duration: 250 },
       { name: "是永不止息的海浪", duration: 299 }, { name: "浅的堆叠", duration: 281 }, { name: "边界", duration: 224 },
       { name: "光的房子 (乐队版)", duration: 230 } ] },
      { name: "初雪", type: "专辑", date: "2027-02-02", songs: [
      { name: "初雪", duration: 292 }, { name: "露水谷雨", duration: 249 }, { name: "白露炊烟", duration: 240 },
      { name: "沉默的扁舟", duration: 273 }, { name: "河流", duration: 274 }, { name: "晚霞小院", duration: 275 },
      { name: "无名的渡口", duration: 278 } ] },
    { name: "久违的青石", type: "专辑", date: "2028-12-13", songs: [
      { name: "久违的青石", duration: 262 }, { name: "无名的车站", duration: 247 }, { name: "木窗蝉鸣", duration: 204 },
      { name: "竹筐晴日", duration: 279 }, { name: "山径", duration: 387 }, { name: "柴门", duration: 289 },
      { name: "暮归", duration: 241 }, { name: "沉默的春雨", duration: 258 }, { name: "木窗石桥", duration: 244 },
      { name: "河流邮局", duration: 254 }, { name: "久违的田埂", duration: 269 } ] },
    { name: "窗棂晚归", type: "专辑", date: "2031-02-28", songs: [
      { name: "窗棂晚归", duration: 215 }, { name: "渡船山风", duration: 270 }, { name: "雁阵", duration: 249 },
      { name: "石路芦苇", duration: 269 }, { name: "旧书", duration: 246 }, { name: "立秋", duration: 279 },
      { name: "漫长的山岗", duration: 255 }, { name: "渡口", duration: 292 }, { name: "河流白露", duration: 241 },
      { name: "遥远的麦浪", duration: 184 }, { name: "炊烟", duration: 256 } ] },
    { name: "深夜的青苔", type: "专辑", date: "2033-06-13", songs: [
      { name: "深夜的青苔", duration: 259 }, { name: "沉默的杏花", duration: 308 }, { name: "杏花晒场", duration: 249 },
      { name: "杏花", duration: 444 }, { name: "故人", duration: 227 }, { name: "漫长的灯火", duration: 315 },
      { name: "晚归", duration: 322 }, { name: "门环春分", duration: 247 }, { name: "门环", duration: 347 },
      { name: "无名的晚钟", duration: 271 }, { name: "渡船", duration: 212 } ] },
    { name: "遥远的芦苇", type: "专辑", date: "2035-02-26", songs: [
      { name: "遥远的芦苇", duration: 274 }, { name: "深夜的杏花", duration: 258 }, { name: "屋檐", duration: 172 },
      { name: "老井", duration: 289 }, { name: "晴日", duration: 228 }, { name: "久违的瓦房", duration: 418 },
      { name: "犁铧", duration: 187 }, { name: "深夜的炊烟", duration: 427 }, { name: "溪桥柴火", duration: 279 } ] },
    { name: "水车", type: "专辑", date: "2037-09-13", songs: [
      { name: "水车", duration: 212 }, { name: "竹筐", duration: 259 }, { name: "沉默的老树", duration: 283 },
      { name: "故人晒场", duration: 250 }, { name: "谷仓青苔", duration: 290 }, { name: "木梯杏花", duration: 260 },
      { name: "石路木门", duration: 282 }, { name: "白露月台", duration: 243 }, { name: "犁铧木窗", duration: 271 } ] },
    { name: "篱笆", type: "专辑", date: "2039-06-15", songs: [
      { name: "篱笆", duration: 195 }, { name: "沉默的北风", duration: 263 }, { name: "久违的石磨", duration: 272 },
      { name: "无名的屋檐", duration: 277 }, { name: "北风晒场", duration: 278 }, { name: "久违的谷雨", duration: 263 },
      { name: "沉默的故乡", duration: 203 }, { name: "菜园石阶", duration: 232 }, { name: "月夜", duration: 459 },
      { name: "黄昏云边", duration: 296 }, { name: "星夜", duration: 283 } ] },
    { name: "河岸", type: "专辑", date: "2041-10-28", songs: [
      { name: "河岸", duration: 276 }, { name: "晴日小院", duration: 427 }, { name: "故人小院", duration: 245 },
      { name: "沉默的谷仓", duration: 245 }, { name: "深夜的芦苇", duration: 246 }, { name: "雨巷谷场", duration: 265 },
      { name: "沉默的溪边", duration: 227 }, { name: "青苔白露", duration: 176 }, { name: "沉默的木门", duration: 236 } ] },
    { name: "无名的渔火", type: "专辑", date: "2043-10-14", songs: [
      { name: "无名的渔火", duration: 236 }, { name: "沉默的石榴", duration: 263 }, { name: "无名的杏花", duration: 243 },
      { name: "河流木舟", duration: 257 }, { name: "立秋稻草", duration: 299 }, { name: "柴门月夜", duration: 266 },
      { name: "谷场桃枝", duration: 260 }, { name: "石路麦浪", duration: 250 }, { name: "桃枝麦浪", duration: 291 },
      { name: "旧书羊群", duration: 217 }, { name: "故乡杏花", duration: 205 } ] },
    { name: "菜园", type: "专辑", date: "2045-09-30", songs: [
      { name: "菜园", duration: 292 }, { name: "茶山青石", duration: 322 }, { name: "北风山岗", duration: 268 },
      { name: "木舟石阶", duration: 283 }, { name: "沉默的溪桥", duration: 277 }, { name: "柳枝", duration: 495 },
      { name: "漫长的巷口", duration: 258 }, { name: "木窗", duration: 269 } ] },
    { name: "菜园竹篱", type: "专辑", date: "2047-08-18", songs: [
      { name: "菜园竹篱", duration: 263 }, { name: "黄昏（黄昏）", duration: 288 }, { name: "河岸青瓦", duration: 486 },
      { name: "麦浪石磨", duration: 152 }, { name: "漫长的柳枝", duration: 252 }, { name: "木门", duration: 291 },
      { name: "石磨月夜", duration: 258 } ] },
    { name: "麦田巷口", type: "专辑", date: "2049-12-08", songs: [
      { name: "麦田巷口", duration: 250 }, { name: "北风犁铧", duration: 262 }, { name: "露水星夜", duration: 251 },
      { name: "渔火", duration: 260 }, { name: "青梅土墙", duration: 283 }, { name: "久违的茶山", duration: 268 },
      { name: "远方溪水", duration: 276 } ] },
    ],
  "鹿先森乐队": [
    { name: "所有的酒, 都不如你", type: "专辑", date: "2016-01-01", rating: 7.5, songs: [
       { name: "失眠", duration: 329 }, { name: "我们拥抱亲吻相爱的人", duration: 279 }, { name: "愿长夜里有人陪你说话", duration: 320 },
       { name: "Time", duration: 328 }, { name: "风云日记", duration: 295 }, { name: "你喜欢海却不喜欢山", duration: 288 },
       { name: "很久以前", duration: 441 }, { name: "春风十里", duration: 375 }, { name: "晚安", duration: 267 } ] },
    { name: "华年", type: "专辑", date: "2018-01-01", songs: [
       { name: "与我轻轻唱", duration: 260 }, { name: "之间", duration: 303 }, { name: "他", duration: 264 },
       { name: "昨日", duration: 316 }, { name: "华年", duration: 258 }, { name: "你住在我心里的原因", duration: 271 },
       { name: "他们满足了你所有的美梦", duration: 211 }, { name: "诗人的家", duration: 323 }, { name: "一场雨落下来要用多久", duration: 228 },
       { name: "能随心情来听歌", duration: 288 }, { name: "小夜曲", duration: 260 } ] },
    { name: "在心碎处", type: "专辑", date: "2020-01-01", songs: [
       { name: "生逢灿烂", duration: 310 }, { name: "再唱一次这首歌好吗？", duration: 291 }, { name: "潮汐中的归期", duration: 320 },
       { name: "爱着的，经过的", duration: 220 }, { name: "话语", duration: 258 }, { name: "第一次看见你时我就看见了我的衰老", duration: 370 },
       { name: "拥抱过后的漫长", duration: 226 }, { name: "你的诗行", duration: 244 }, { name: "远离他们", duration: 348 },
       { name: "一起跳支舞", duration: 190 }, { name: "水生", duration: 250 }, { name: "短篇", duration: 238 },
       { name: "梦", duration: 200 } ] },
    { name: "滔滔", type: "专辑", date: "2023-01-01", songs: [
       { name: "你说", duration: 204 }, { name: "希望你的明天比昨天更自由", duration: 224 }, { name: "重庆", duration: 299 },
       { name: "消失在子夜", duration: 201 }, { name: "夏夜没有你，但有海风吹", duration: 238 }, { name: "人间幕幕", duration: 263 },
       { name: "生之河", duration: 245 } ] },
      { name: "漫长的木桥", type: "专辑", date: "2027-01-14", songs: [
      { name: "漫长的木桥", duration: 254 }, { name: "深夜的雁阵", duration: 522 }, { name: "月夜河流", duration: 268 },
      { name: "星夜石磨", duration: 247 }, { name: "竹筐春分", duration: 253 }, { name: "无名的巷口", duration: 274 },
      { name: "渡船谷场", duration: 225 }, { name: "沉默的车站", duration: 488 }, { name: "杏花晴日", duration: 288 },
      { name: "暮归溪边", duration: 223 } ] },
    { name: "深夜的晚归", type: "专辑", date: "2029-06-13", songs: [
      { name: "深夜的晚归", duration: 259 }, { name: "山风青梅", duration: 272 }, { name: "山径石磨", duration: 200 },
      { name: "旧信", duration: 301 }, { name: "梯田篱笆", duration: 281 }, { name: "渔火竹影", duration: 240 },
      { name: "柴火黄昏", duration: 193 } ] },
    { name: "白露", type: "专辑", date: "2031-09-26", songs: [
      { name: "白露", duration: 225 }, { name: "沉默的柴门", duration: 233 }, { name: "沉默的芦苇", duration: 308 },
      { name: "杏花蝉鸣", duration: 242 }, { name: "久违的木桥", duration: 262 }, { name: "深夜的青瓦", duration: 266 },
      { name: "沉默的行囊", duration: 166 }, { name: "沉默的晚霞", duration: 282 }, { name: "无名的谷仓", duration: 256 },
      { name: "麦浪乡音", duration: 264 }, { name: "山岗乡音", duration: 282 } ] },
    { name: "旧书霜降", type: "专辑", date: "2034-01-21", songs: [
      { name: "旧书霜降", duration: 300 }, { name: "沉默的旧书", duration: 335 }, { name: "漫长的长椅", duration: 296 },
      { name: "柴门青瓦", duration: 301 }, { name: "沉默的巷口", duration: 252 }, { name: "沉默的稻草", duration: 298 },
      { name: "茶山谷仓", duration: 205 }, { name: "晒场晚霞", duration: 329 } ] },
    { name: "柳枝河岸", type: "专辑", date: "2036-01-13", songs: [
      { name: "柳枝河岸", duration: 280 }, { name: "无名的乡音", duration: 166 }, { name: "故人水车", duration: 279 },
      { name: "旧屋溪边", duration: 269 }, { name: "漫长的晚霞", duration: 254 }, { name: "青石木舟", duration: 309 },
      { name: "门环青梅", duration: 377 }, { name: "麦田", duration: 261 }, { name: "窗棂槐花", duration: 262 } ] },
    { name: "雁阵旧屋", type: "专辑", date: "2038-05-15", songs: [
      { name: "雁阵旧屋", duration: 333 }, { name: "土墙木桥", duration: 296 }, { name: "沉默的柴火", duration: 274 },
      { name: "旧屋", duration: 298 }, { name: "沉默的秋雨", duration: 315 }, { name: "柳枝河流", duration: 276 },
      { name: "霜降草垛", duration: 175 }, { name: "乡音晚钟", duration: 273 }, { name: "芦苇晚归", duration: 219 },
      { name: "竹篱霜降", duration: 154 }, { name: "柳枝月台", duration: 259 } ] },
    { name: "故乡青苔", type: "专辑", date: "2040-07-23", songs: [
      { name: "故乡青苔", duration: 269 }, { name: "草垛渡船", duration: 318 }, { name: "星夜水车", duration: 156 },
      { name: "无名的小院", duration: 273 }, { name: "漫长的渔火", duration: 263 }, { name: "久违的北风", duration: 289 },
      { name: "暮归老井", duration: 251 } ] },
    { name: "暮归草垛", type: "专辑", date: "2043-04-12", songs: [
      { name: "暮归草垛", duration: 268 }, { name: "槐树木桥", duration: 322 }, { name: "久违的菜园", duration: 522 },
      { name: "麦田屋檐", duration: 269 }, { name: "柴门溪桥", duration: 205 }, { name: "漫长的土路", duration: 254 },
      { name: "立秋春雨", duration: 271 } ] },
    { name: "暮归山岗", type: "专辑", date: "2045-05-04", songs: [
      { name: "暮归山岗", duration: 181 }, { name: "无名的溪水", duration: 281 }, { name: "旧书扁舟", duration: 281 },
      { name: "旧屋木梯", duration: 303 }, { name: "漫长的晚归", duration: 276 }, { name: "山岗麦田", duration: 269 },
      { name: "深夜的桃枝", duration: 173 }, { name: "蝉鸣雨巷", duration: 257 }, { name: "漫长的晒场", duration: 292 },
      { name: "麦浪晴日", duration: 263 }, { name: "河流旧书", duration: 279 } ] },
    { name: "晚霞晨雾", type: "专辑", date: "2047-08-25", songs: [
      { name: "晚霞晨雾", duration: 303 }, { name: "久违的羊群", duration: 507 }, { name: "木窗暮归", duration: 274 },
      { name: "久违的槐树", duration: 159 }, { name: "深夜的溪水", duration: 212 }, { name: "篱笆秋千", duration: 268 },
      { name: "石磨柴门", duration: 278 }, { name: "旧屋窗棂", duration: 268 }, { name: "深夜的青梅", duration: 293 } ] },
    { name: "故人石路", type: "专辑", date: "2049-08-30", songs: [
      { name: "故人石路", duration: 300 }, { name: "久违的柴火", duration: 184 }, { name: "星夜霜降", duration: 268 },
      { name: "青苔晚霞", duration: 257 }, { name: "车站槐树", duration: 277 }, { name: "久违的溪边", duration: 289 },
      { name: "茶山春分", duration: 308 } ] },
    ],
  "低苦艾": [
    { name: "苦艾酒", type: "EP", date: "2006-01-01", songs: [
      { name: "苦艾酒", duration: 280 } ] },
    { name: "低苦艾", type: "专辑", date: "2007-05-06", songs: [
       { name: "玄", duration: 299 }, { name: "挽歌", duration: 294 }, { name: "长衫、幼僧、经文、竹篱笆上的手印", duration: 313 },
       { name: "二月肖像", duration: 261 }, { name: "温柔的碾碎", duration: 320 }, { name: "守 夜 人", duration: 240 },
       { name: "张开冰冷的双臂跳跃", duration: 237 }, { name: "苦艾酒", duration: 247 }, { name: "另一个方向", duration: 259 },
       { name: "门 (Live)", duration: 370 } ] },
    { name: "我们不由自主的亲吻对方", type: "专辑", date: "2008-01-01", rating: 7.8, songs: [
       { name: "来自迷宫的音乐", duration: 345 }, { name: "二月的素描与光", duration: 280 }, { name: "哑脊背", duration: 347 },
       { name: "谁", duration: 351 }, { name: "大圣", duration: 338 }, { name: "我们不由自主的亲吻对方", duration: 299 },
       { name: "小花花", duration: 294 }, { name: "候鸟", duration: 324 }, { name: "再见 再不见", duration: 296 },
       { name: "迷宫的音乐 (piano)", duration: 182 } ] },
    { name: "兰州 兰州", type: "专辑", date: "2011-09-30", rating: 8.0, songs: [
        { name: "兰州 兰州", duration: 393 }, { name: "阿帮阿忙", duration: 281 }, { name: "随风而逝", duration: 339 },
        { name: "不叫鸟", duration: 307 }, { name: "小草草", duration: 258 }, { name: "那只船", duration: 268 },
        { name: "清晨日暮", duration: 373 }, { name: "一个和一万个", duration: 245 }, { name: "红与黑", duration: 368 } ] },
    { name: "守望者", type: "专辑", date: "2013-01-01", songs: [
       { name: "火车快开", duration: 311 }, { name: "荒原", duration: 363 }, { name: "转山", duration: 372 },
       { name: "守望者", duration: 250 }, { name: "清河", duration: 346 }, { name: "小树树", duration: 229 },
       { name: "马拉足球", duration: 332 }, { name: "过什布隆克喀", duration: 341 }, { name: "漂浮城", duration: 211 } ] },
    { name: "一天", type: "专辑", date: "2017-01-01", songs: [
       { name: "赶路人", duration: 296 }, { name: "原谅我无法回复你姑娘", duration: 240 }, { name: "优雅的梦游者", duration: 282 },
       { name: "子弹 GO GO GO", duration: 314 }, { name: "风吹过火", duration: 266 }, { name: "晚安", duration: 264 },
       { name: "缺席", duration: 330 }, { name: "一个人的午夜场电影", duration: 272 }, { name: "你在哪里", duration: 209 },
       { name: "命若琴弦", duration: 265 } ] },
    { name: "驰名商标", type: "专辑", date: "2020-01-01", songs: [
       { name: "我爱你", duration: 297 }, { name: "漫长的告别", duration: 246 }, { name: "卡拉永远OK", duration: 209 },
       { name: "少年", duration: 267 }, { name: "驰名商标", duration: 230 }, { name: "游泳冠军与水乳钟", duration: 244 },
       { name: "Cheer Up", duration: 215 }, { name: "素西", duration: 257 }, { name: "怀抱吉他改变世界", duration: 361 },
       { name: "季宏路", duration: 37 } ] },
      { name: "无名的桃枝", type: "专辑", date: "2026-11-10", songs: [
      { name: "无名的桃枝", duration: 300 }, { name: "深夜的旧书", duration: 264 }, { name: "窗棂青瓦", duration: 230 },
      { name: "小院青石", duration: 249 }, { name: "久违的白露", duration: 313 }, { name: "久违的芦苇", duration: 288 },
      { name: "漫长的麦浪", duration: 285 }, { name: "渔火柳枝", duration: 165 }, { name: "雨巷旧信", duration: 310 } ] },
    { name: "云边炊烟", type: "EP", date: "2029-02-23", songs: [
      { name: "云边炊烟", duration: 287 }, { name: "渡口故人", duration: 293 }, { name: "遥远的秋雨", duration: 331 } ] },
    { name: "木窗雁阵", type: "专辑", date: "2031-07-07", songs: [
      { name: "木窗雁阵", duration: 297 }, { name: "杏花木桥", duration: 265 }, { name: "槐花柴门", duration: 284 },
      { name: "沉默的老井", duration: 281 }, { name: "溪边车站", duration: 231 }, { name: "暮归水车", duration: 314 },
      { name: "初雪竹篱", duration: 225 }, { name: "篱笆渡口", duration: 244 }, { name: "木桥青石", duration: 314 },
      { name: "木舟屋檐", duration: 291 } ] },
    { name: "深夜的渡口", type: "专辑", date: "2033-12-01", songs: [
      { name: "深夜的渡口", duration: 264 }, { name: "渡船谷雨", duration: 170 }, { name: "星夜渡船", duration: 290 },
      { name: "漫长的老树", duration: 272 }, { name: "晚钟月夜", duration: 339 }, { name: "久违的柴门", duration: 221 },
      { name: "杏花渡口", duration: 313 }, { name: "桃枝月台", duration: 282 }, { name: "渡船石阶", duration: 198 } ] },
    { name: "山径麦浪", type: "专辑", date: "2036-06-14", songs: [
      { name: "山径麦浪", duration: 302 }, { name: "山岗晚霞", duration: 336 }, { name: "老树雁阵", duration: 310 },
      { name: "山岗河流", duration: 270 }, { name: "沉默的竹影", duration: 308 }, { name: "沉默的谷雨", duration: 528 },
      { name: "竹篱渡口", duration: 265 }, { name: "漫长的晚钟", duration: 281 } ] },
    { name: "菜园炊烟", type: "专辑", date: "2038-10-07", songs: [
      { name: "菜园炊烟", duration: 229 }, { name: "木梯晚归", duration: 269 }, { name: "久违的故乡", duration: 260 },
      { name: "深夜的茶山", duration: 300 }, { name: "无名的稻田", duration: 273 }, { name: "竹影月台", duration: 230 },
      { name: "河岸秋千", duration: 332 }, { name: "深夜的窗棂", duration: 170 } ] },
    { name: "山岗木舟", type: "专辑", date: "2040-10-20", songs: [
      { name: "山岗木舟", duration: 456 }, { name: "屋檐槐树", duration: 260 }, { name: "沉默的青瓦", duration: 283 },
      { name: "灯火春分", duration: 210 }, { name: "久违的溪水", duration: 490 }, { name: "漫长的石桥", duration: 310 },
      { name: "柳枝山岗", duration: 306 }, { name: "无名的青梅", duration: 290 } ] },
    { name: "深夜的春分", type: "专辑", date: "2043-03-08", songs: [
      { name: "深夜的春分", duration: 516 }, { name: "春雨星夜", duration: 273 }, { name: "漫长的秋千", duration: 237 },
      { name: "晨雾青瓦", duration: 269 }, { name: "竹影炊烟", duration: 298 }, { name: "木舟柳枝", duration: 317 },
      { name: "深夜的麦浪", duration: 273 }, { name: "遥远的槐树", duration: 402 } ] },
    { name: "无名的长椅", type: "专辑", date: "2045-04-01", songs: [
      { name: "无名的长椅", duration: 304 }, { name: "漫长的河岸", duration: 269 }, { name: "沉默的羊群", duration: 264 },
      { name: "芦苇槐树", duration: 276 }, { name: "羊群田埂", duration: 287 }, { name: "深夜的冬雪", duration: 276 },
      { name: "屋檐霜降", duration: 293 }, { name: "沉默的山岗", duration: 297 } ] },
    { name: "菜园槐花", type: "EP", date: "2047-05-11", songs: [
      { name: "菜园槐花", duration: 348 }, { name: "冬雪犁铧", duration: 275 }, { name: "茶山窗棂", duration: 283 },
      { name: "久违的老井", duration: 271 }, { name: "立秋渔火", duration: 305 } ] },
    { name: "旧书邮局", type: "专辑", date: "2050-02-09", songs: [
      { name: "旧书邮局", duration: 257 }, { name: "漫长的谷雨", duration: 416 }, { name: "深夜的木门", duration: 215 },
      { name: "蝉鸣槐花", duration: 441 }, { name: "渔火木舟", duration: 286 }, { name: "槐树麦田", duration: 273 },
      { name: "遥远的田埂", duration: 394 }, { name: "漫长的稻草", duration: 312 }, { name: "渡口麦浪", duration: 299 },
      { name: "遥远的黄昏", duration: 254 }, { name: "久违的立秋", duration: 165 } ] },
    ],
  "丢火车": [
    { name: "丢火车", type: "EP", date: "2008-01-01", songs: [
      { name: "茶底世界", duration: 281 } ] },
    { name: "火车日记", type: "专辑", date: "2011-12-20", songs: [
       { name: "火车日记", duration: 322 }, { name: "角落", duration: 302 }, { name: "香水之旅", duration: 326 },
       { name: "呼吸", duration: 293 }, { name: "昆虫幻想", duration: 231 }, { name: "漂浮", duration: 290 },
       { name: "无限可能", duration: 245 }, { name: "孩子的脸", duration: 239 } ] },
    { name: "游歌", type: "EP", date: "2014-10-21", songs: [
      { name: "游歌", duration: 280 } ] },
    { name: "浮生", type: "专辑", date: "2017-10-26", songs: [
       { name: "索菲亚", duration: 257 }, { name: "浮生", duration: 263 }, { name: "哈喽 哈喽", duration: 220 },
       { name: "晚安", duration: 360 }, { name: "瑞秋", duration: 278 }, { name: "生日快乐", duration: 326 },
       { name: "傻鸟", duration: 208 }, { name: "小猫咪", duration: 208 } ] },
      { name: "无名的雁阵", type: "EP", date: "2027-11-17", songs: [
      { name: "无名的雁阵", duration: 296 }, { name: "晚归菜园", duration: 220 }, { name: "久违的黄昏", duration: 249 },
      { name: "遥远的青瓦", duration: 247 } ] },
    { name: "久违的木舟", type: "专辑", date: "2030-11-15", songs: [
      { name: "久违的木舟", duration: 298 }, { name: "远方犁铧", duration: 294 }, { name: "漫长的窗棂", duration: 184 },
      { name: "无名的星夜", duration: 276 }, { name: "麦田羊群", duration: 160 }, { name: "木窗竹影", duration: 224 },
      { name: "邮局故人", duration: 283 }, { name: "冬雪月台", duration: 249 }, { name: "无名的篱笆", duration: 260 } ] },
    { name: "石磨溪边", type: "EP", date: "2033-12-21", songs: [
      { name: "石磨溪边", duration: 282 }, { name: "初雪谷仓", duration: 247 }, { name: "沉默的雁阵", duration: 215 } ] },
    { name: "溪水故人", type: "专辑", date: "2037-04-07", songs: [
      { name: "溪水故人", duration: 278 }, { name: "杏花石桥", duration: 202 }, { name: "月夜谷仓", duration: 291 },
      { name: "长椅冬雪", duration: 220 }, { name: "木桥雨巷", duration: 256 }, { name: "秋千木舟", duration: 281 },
      { name: "柴火山风", duration: 295 }, { name: "沉默的立秋", duration: 272 }, { name: "车站木舟", duration: 498 },
      { name: "久违的邮局", duration: 254 } ] },
    { name: "深夜的长椅", type: "EP", date: "2040-03-17", songs: [
      { name: "深夜的长椅", duration: 266 }, { name: "犁铧河岸", duration: 293 }, { name: "沉默的石路", duration: 301 } ] },
    { name: "芦苇窗棂", type: "EP", date: "2043-02-26", songs: [
      { name: "芦苇窗棂", duration: 224 }, { name: "山径乡音", duration: 301 }, { name: "漫长的石磨", duration: 450 } ] },
    { name: "深夜的小院", type: "专辑", date: "2046-02-15", songs: [
      { name: "深夜的小院", duration: 262 }, { name: "石榴故乡", duration: 299 }, { name: "深夜的山岗", duration: 300 },
      { name: "木桥石阶", duration: 270 }, { name: "遥远的木舟", duration: 207 }, { name: "久违的露水", duration: 269 },
      { name: "无名的土路", duration: 151 }, { name: "初雪土路", duration: 296 }, { name: "无名的青瓦", duration: 246 } ] },
    { name: "无名的瓦房", type: "专辑", date: "2049-03-19", songs: [
      { name: "无名的瓦房", duration: 168 }, { name: "白露石磨", duration: 278 }, { name: "无名的暮归", duration: 405 },
      { name: "槐花菜园", duration: 258 }, { name: "行囊春雨", duration: 247 }, { name: "故人初雪", duration: 214 },
      { name: "久违的旧屋", duration: 224 }, { name: "沉默的渡口", duration: 263 }, { name: "石桥屋檐", duration: 222 },
      { name: "深夜的草垛", duration: 252 }, { name: "石榴秋千", duration: 296 } ] },
    ],
  "旅行团": [
    { name: "来福胶泥", type: "专辑", date: "2008-05-08", rating: 7.9, songs: [
       { name: "Intro", duration: 165 }, { name: "回到巴巴拉拉的城堡", duration: 248 },
       { name: "The Story Of Sun And I", duration: 232 }, { name: "罗马假日", duration: 206 },
       { name: "My Desert", duration: 170 }, { name: "Panda", duration: 247 },
       { name: "Take Me Away", duration: 320 }, { name: "稻田间", duration: 509 }, { name: "全世界都在水里游", duration: 219 },
       { name: "Dog Dog Dogs", duration: 223 }, { name: "中央花园", duration: 218 },
       { name: "Lonely Day", duration: 198 } ] },
    { name: "等你吃饭", type: "EP", date: "2009-04-17", songs: [
      { name: "等你吃饭", duration: 260 }, { name: "悠长假期", duration: 270 } ] },
    { name: "Wonderful Day", type: "专辑", date: "2011-06-24", songs: [
      { name: "天上人间(Intro)", duration: 60 }, { name: "行人要走斑马线", duration: 240 },
      { name: "利物浦", duration: 250 }, { name: "Our Monday Is Free", duration: 230 },
      { name: "柳江", duration: 260 }, { name: "厦门之夏", duration: 245 }, { name: "岛屿", duration: 250 },
      { name: "船", duration: 260 }, { name: "残酷青春", duration: 240 }, { name: "Marry", duration: 230 },
      { name: "80", duration: 220 }, { name: "Wonderful Day", duration: 250 } ] },
    { name: "于是我不再唱歌", type: "专辑", date: "2013-12-28", rating: 8.0, songs: [
       { name: "于是我不再唱歌", duration: 295 }, { name: "Bye Bye", duration: 220 }, { name: "小龙人", duration: 200 },
       { name: "天后舞厅", duration: 206 }, { name: "北京夏夜", duration: 228 }, { name: "Outro", duration: 149 } ] },
    { name: "B-SIDE", type: "专辑", date: "2015-05-15", songs: [
      { name: "生命是场马拉松", duration: 280 }, { name: "Sleep", duration: 260 }, { name: "时间的手", duration: 250 },
      { name: "悲伤珊瑚群", duration: 270 }, { name: "问号", duration: 245 }, { name: "轮廓", duration: 260 },
      { name: "红色的雅儒路体校", duration: 240 }, { name: "控", duration: 250 }, { name: "驾", duration: 255 } ] },
    { name: "10 Day's", type: "专辑", date: "2015-12-21", songs: [
      { name: "此时此刻", duration: 260 }, { name: "Africa", duration: 240 }, { name: "逝去的歌", duration: 290 },
      { name: "父亲", duration: 280 }, { name: "新开世界", duration: 270 }, { name: "我们的爱在地震带", duration: 250 },
      { name: "星辰", duration: 255 }, { name: "奔跑在孤傲的路上", duration: 260 },
      { name: "Goodnight girl", duration: 245 }, { name: "隐秘的国", duration: 265 } ] },
    { name: "永远都会在", type: "专辑", date: "2017-07-06", rating: 8.1, songs: [
      { name: "永远都会在", duration: 280 }, { name: "你", duration: 270 }, { name: "西雅图阳光", duration: 280 },
      { name: "封夜", duration: 260 }, { name: "乘风而来", duration: 270 }, { name: "滚", duration: 255 },
      { name: "勇", duration: 260 }, { name: "此刻是唯一的意义", duration: 290 } ] },
    { name: "感+", type: "专辑", date: "2018-06-21", songs: [
      { name: "夏之恋", duration: 280 }, { name: "圣地亚哥", duration: 270 }, { name: "爱情的模样", duration: 275 },
      { name: "我的蒙娜丽莎", duration: 280 }, { name: "情书", duration: 260 }, { name: "My Shadow", duration: 250 },
      { name: "终结日", duration: 270 }, { name: "没有说明书的机器", duration: 260 }, { name: "爱的备份", duration: 270 },
      { name: "周末玩具", duration: 265 }, { name: "亲爱的", duration: 280 } ] },
    { name: "似近似远", type: "专辑", date: "2020-09-16", songs: [
      { name: "你没有名字", duration: 260 }, { name: "红色的河", duration: 290 }, { name: "温柔的代价", duration: 280 },
      { name: "风定忧深", duration: 270 }, { name: "生命的独特", duration: 265 }, { name: "夜明灯", duration: 280 },
      { name: "红色的河(Feat.吴青峰)", duration: 290 } ] },
    { name: "似你似我", type: "专辑", date: "2020-11-30", songs: [
      { name: "天涯路口", duration: 280 }, { name: "她在哪，家在哪", duration: 270 }, { name: "老朋友", duration: 265 },
      { name: "最好的时候", duration: 280 }, { name: "夏夜的绚烂", duration: 275 }, { name: "阿奶", duration: 270 },
      { name: "下一站", duration: 280 } ] },
      { name: "无名的星群", type: "专辑", date: "2026-12-18", songs: [
      { name: "无名的星群", duration: 198 }, { name: "铃声", duration: 268 }, { name: "草莓柠檬茶", duration: 205 },
      { name: "无名的教室", duration: 216 }, { name: "樱花", duration: 268 }, { name: "樱花信笺", duration: 235 },
      { name: "漫长的教室", duration: 265 }, { name: "无名的蜜糖", duration: 245 }, { name: "萤火玻璃糖", duration: 263 },
      { name: "单车", duration: 246 }, { name: "泡泡糖糖果屋", duration: 268 } ] },
    { name: "久违的少年", type: "EP", date: "2028-11-25", songs: [
      { name: "久违的少年", duration: 277 }, { name: "无名的沙滩", duration: 204 }, { name: "风筝平行线", duration: 277 } ] },
    { name: "沉默的薄荷", type: "EP", date: "2031-06-11", songs: [
      { name: "沉默的薄荷", duration: 344 }, { name: "玻璃糖奶昔", duration: 244 }, { name: "铃声篮球", duration: 269 } ] },
    { name: "久违的彩虹", type: "EP", date: "2033-02-13", songs: [
      { name: "久违的彩虹", duration: 231 }, { name: "深夜的晴天娃娃", duration: 265 }, { name: "单车糖分", duration: 268 },
      { name: "心跳星星糖", duration: 246 }, { name: "深夜的青春", duration: 372 } ] },
    { name: "蝉鸣葡萄柚", type: "专辑", date: "2035-04-27", songs: [
      { name: "蝉鸣葡萄柚", duration: 257 }, { name: "沉默的星期天", duration: 191 }, { name: "久违的微风", duration: 247 },
      { name: "星群操场", duration: 200 }, { name: "桃子日记", duration: 239 }, { name: "漫长的花火", duration: 268 },
      { name: "晴天微风", duration: 244 }, { name: "西瓜", duration: 240 }, { name: "星星糖", duration: 257 },
      { name: "倒计时雨伞", duration: 276 } ] },
    { name: "蝴蝶结雨伞", type: "EP", date: "2037-04-30", songs: [
      { name: "蝴蝶结雨伞", duration: 236 }, { name: "久违的银河", duration: 273 }, { name: "遥远的月亮", duration: 236 } ] },
    { name: "漫长的银河", type: "专辑", date: "2039-09-25", songs: [
      { name: "漫长的银河", duration: 260 }, { name: "葡萄柚粉色", duration: 234 }, { name: "银河橘子", duration: 218 },
      { name: "微风葡萄柚", duration: 277 }, { name: "久违的校门", duration: 288 }, { name: "久违的汽水", duration: 251 },
      { name: "平行线气泡", duration: 271 }, { name: "月亮晴天娃娃", duration: 184 }, { name: "蝴蝶结笔袋", duration: 210 },
      { name: "遥远的暖阳", duration: 177 }, { name: "软糖音乐盒", duration: 238 } ] },
    { name: "柠檬茶", type: "专辑", date: "2041-09-18", songs: [
      { name: "柠檬茶", duration: 275 }, { name: "气泡教室", duration: 266 }, { name: "漫游操场", duration: 257 },
      { name: "葡萄柚音乐盒", duration: 289 }, { name: "泡泡糖", duration: 263 }, { name: "铃铛星期天", duration: 271 },
      { name: "摩天轮", duration: 255 }, { name: "久违的月亮", duration: 184 } ] },
    { name: "微风桃子", type: "专辑", date: "2043-11-07", songs: [
      { name: "微风桃子", duration: 248 }, { name: "漫游篮球", duration: 210 }, { name: "遥远的余光", duration: 248 },
      { name: "沉默的蓝调", duration: 214 }, { name: "平行线笔袋", duration: 260 }, { name: "糖分倒计时", duration: 248 },
      { name: "初恋西瓜", duration: 277 }, { name: "风筝萤火", duration: 236 }, { name: "无名的冰淇淋", duration: 276 } ] },
    { name: "草莓童话", type: "专辑", date: "2045-11-10", songs: [
      { name: "草莓童话", duration: 297 }, { name: "晴空秋千", duration: 274 }, { name: "久违的铃声", duration: 248 },
      { name: "沉默的星星糖", duration: 429 }, { name: "雨靴秋千", duration: 246 }, { name: "久违的软糖", duration: 213 },
      { name: "倒计时花束", duration: 270 }, { name: "浅蓝摩天轮", duration: 278 } ] },
    { name: "深夜的纸飞机", type: "专辑", date: "2048-02-16", songs: [
      { name: "深夜的纸飞机", duration: 246 }, { name: "西瓜笔袋", duration: 276 }, { name: "久违的倒计时", duration: 269 },
      { name: "晴天漫游", duration: 278 }, { name: "漫长的童话", duration: 210 }, { name: "课本课桌", duration: 257 },
      { name: "拥抱操场", duration: 276 }, { name: "单车秋千", duration: 162 }, { name: "漫长的玻璃糖", duration: 248 },
      { name: "蝴蝶结校门", duration: 291 }, { name: "气泡气球", duration: 263 } ] },
    { name: "许愿气泡", type: "专辑", date: "2049-09-30", songs: [
      { name: "许愿气泡", duration: 233 }, { name: "深夜的柠檬茶", duration: 251 }, { name: "沉默的许愿", duration: 256 },
      { name: "遥远的校门", duration: 311 }, { name: "遥远的晚风", duration: 206 }, { name: "星光晴空", duration: 419 },
      { name: "睫毛桃子", duration: 266 }, { name: "久违的玻璃糖", duration: 263 }, { name: "柠檬水晚霞", duration: 244 } ] },
    ],
  "落日飞车": [
    { name: "Bossa Nova", type: "专辑", date: "2011-09-22", songs: [
      { name: "Bomb of Love", duration: 180 }, { name: "No Man's Land", duration: 260 }, { name: "Hogi Hogi LaLa Jo", duration: 185 },
      { name: "Punk", duration: 184 }, { name: "A Little Piece of Sadness", duration: 99 }, { name: "Pinky Pinky", duration: 122 },
      { name: "Little Monkey Rides on the Little Donkey", duration: 226 }, { name: "I Know You Know I Love You", duration: 120 },
      { name: "Blues", duration: 284 }, { name: "No Man's Land (Reprise)", duration: 111 }, { name: "Queen", duration: 185 },
      { name: "My Monday Throne", duration: 277 } ] },
    { name: "金桔希子", type: "EP", date: "2016-01-01", rating: 8.0, songs: [
      { name: "My Jinji", duration: 300 }, { name: "Burgundy Red", duration: 280 } ] },
    { name: "Cassa Nova", type: "专辑", date: "2018-01-01", rating: 8.1, songs: [
       { name: "Almost Mature '87", duration: 201 }, { name: "Greedy", duration: 258 },
       { name: "Cool of Lullaby", duration: 322 }, { name: "Angel Disco Love", duration: 248 },
       { name: "Slow", duration: 122 }, { name: "Oriental", duration: 159 }, { name: "Summum Bonum", duration: 281 },
       { name: "Libidream", duration: 296 }, { name: "10-Year-Taipei (Matured '17)", duration: 218 } ] },
    { name: "Soft Storm", type: "专辑", date: "2020-01-01", songs: [
       { name: "Soft Storm", duration: 141 }, { name: "Overlove", duration: 237 },
       { name: "Under the Skin", duration: 210 }, { name: "Passerby (feat. Michael Seyer)", duration: 240 },
       { name: "Teahouse", duration: 230 }, { name: "Overlove (Rehab)", duration: 230 },
       { name: "Hyperfocus", duration: 200 }, { name: "Midnight with Paul", duration: 230 },
       { name: "Candlelight (feat. OHHYUK)", duration: 250 } ] },
      { name: "Loam Marrow", type: "专辑", date: "2027-04-15", songs: [
      { name: "Loam Marrow（沃土的骨髓）", duration: 223 }, { name: "Amber Slope（琥珀的斜坡）", duration: 173 }, { name: "Thunder Shore（雷的岸边）", duration: 206 },
      { name: "Tide Journey（潮汐的旅程）", duration: 235 }, { name: "Ashes Crescent（灰烬的新月）", duration: 224 }, { name: "Neon Golden（霓虹的金色）", duration: 225 },
      { name: "Sky Void（天空的虚空）", duration: 197 } ] },
    { name: "Loam Whisper", type: "专辑", date: "2030-04-15", songs: [
      { name: "Loam Whisper（沃土的低语）", duration: 409 }, { name: "Smoke Motion（烟雾的律动）", duration: 235 }, { name: "Twilight Field（暮色的原野）", duration: 342 },
      { name: "Flame Plain（火焰的平原）", duration: 261 }, { name: "Kite Dusk（风筝的薄暮）", duration: 118 }, { name: "Paperplane Smoke（纸飞机的烟雾）", duration: 211 },
      { name: "Pulse Void（脉冲的虚空）", duration: 180 }, { name: "Meridian Soil（子午线的土壤）", duration: 221 }, { name: "Fog Concrete（雾的水泥）", duration: 400 } ] },
    { name: "Journey Trail", type: "EP", date: "2032-11-29", songs: [
      { name: "Journey Trail（旅程的足迹）", duration: 234 }, { name: "Crescent Wood（新月的树林）", duration: 138 }, { name: "Shallow Undertow（浅滩的暗流）", duration: 214 },
      { name: "Silver（银色）", duration: 235 } ] },
    { name: "Carousel Slope", type: "EP", date: "2035-12-24", songs: [
      { name: "Carousel Slope（旋转木马的斜坡）", duration: 235 }, { name: "Cloud Stream（云的溪流）", duration: 191 }, { name: "Mirrors Roof（镜子的屋顶）", duration: 220 },
      { name: "Echo Trail（回声的足迹）", duration: 228 }, { name: "Shadow Overcast（影子的阴云）", duration: 203 }, { name: "Sun Shell（太阳的贝壳）", duration: 218 } ] },
    { name: "Desert Ocean", type: "专辑", date: "2038-09-29", songs: [
      { name: "Desert Ocean（荒原的海洋）", duration: 197 }, { name: "Dawn Grain（黎明的颗粒）", duration: 222 }, { name: "Canvas Broken（画布的破碎）", duration: 223 },
      { name: "Rust Ocean（锈迹的海洋）", duration: 210 }, { name: "Marrow Halo（骨髓的光晕）", duration: 188 }, { name: "Moss Silence（青苔的沉寂）", duration: 220 },
      { name: "Feather Blossom（羽毛的花开）", duration: 223 }, { name: "Nightfall Halo（夜幕的光晕）", duration: 197 }, { name: "Desert Thaw（荒原的融雪）", duration: 244 },
      { name: "Vapor Shore（雾霭的岸边）", duration: 211 } ] },
    { name: "Drift Cloud", type: "专辑", date: "2041-05-30", songs: [
      { name: "Drift Cloud（漂流的云）", duration: 219 }, { name: "Undertow Spark（暗流的火花）", duration: 197 }, { name: "Steam Daybreak（蒸汽的黎明）", duration: 224 },
      { name: "Cloud Path（云的小径）", duration: 205 }, { name: "Diamond Kite（钻石的风筝）", duration: 180 }, { name: "Mirrors Leaf（镜子的叶）", duration: 236 },
      { name: "Diamond Winter（钻石的冬天）", duration: 177 }, { name: "Ashes Crystal（灰烬的水晶）", duration: 236 } ] },
    { name: "Tower Motel", type: "EP", date: "2043-11-13", songs: [
      { name: "Tower Motel（塔的汽车旅馆）", duration: 378 }, { name: "Circle Glimmer（圆圈的微光）", duration: 296 }, { name: "Petal Salt（花瓣的盐）", duration: 220 },
      { name: "Motel Faded（汽车旅馆的褪色）", duration: 225 }, { name: "Soil Dawn（土壤的黎明）", duration: 250 } ] },
    { name: "Wood Quiet", type: "专辑", date: "2046-07-14", songs: [
      { name: "Wood Quiet（树林的寂静）", duration: 210 }, { name: "Frost（霜）", duration: 226 }, { name: "Haze Bloom（轻雾的绽放）", duration: 232 },
      { name: "Nightfall Forest（夜幕的森林）", duration: 218 }, { name: "Daylight Tree（日光的树）", duration: 227 }, { name: "Wave Rain（波浪的雨）", duration: 219 },
      { name: "Soil Ice（土壤的冰）", duration: 206 }, { name: "Wind Motel（风的汽车旅馆）", duration: 228 } ] },
    { name: "Lake Meridian", type: "专辑", date: "2049-11-16", songs: [
      { name: "Lake Meridian（湖的子午线）", duration: 234 }, { name: "Compass Mist（罗盘的薄雾）", duration: 225 }, { name: "Sun Sand（太阳的沙）", duration: 212 },
      { name: "Trail Shallow（足迹的浅滩）", duration: 229 }, { name: "Paperplane Static（纸飞机的静电）", duration: 197 }, { name: "Glimmer Steam（微光的蒸汽）", duration: 231 },
      { name: "Mirrors Canvas（镜子的画布）", duration: 245 }, { name: "Sky Wind（天空的风）", duration: 334 }, { name: "Sand Sundown（沙的日落）", duration: 228 } ] },
    ],
  "声音碎片": [
    { name: "世界是噪音的花园", type: "专辑", date: "2002-01-01", songs: [
       { name: "自欺", duration: 312 }, { name: "平衡", duration: 244 }, { name: "妄想狂", duration: 259 },
       { name: "狂欢", duration: 249 }, { name: "这一刻", duration: 245 }, { name: "所有人都必须这样吗", duration: 266 },
       { name: "从内部成熟", duration: 289 }, { name: "请不要关我的灯", duration: 302 }, { name: "投降", duration: 317 },
       { name: "秘密路线", duration: 291 }, { name: "世界是噪音的花园", duration: 311 } ] },
    { name: "优美的低于生活", type: "专辑", date: "2005-01-01", rating: 8.1, songs: [
       { name: "优美的低于生活", duration: 330 }, { name: "通过愤怒之门", duration: 371 }, { name: "在流逝之外", duration: 382 },
       { name: "在时代华美的盛宴上", duration: 303 }, { name: "不合时宜的忧伤", duration: 255 }, { name: "向外", duration: 300 },
       { name: "烟灰", duration: 335 }, { name: "赞歌", duration: 399 }, { name: "从现在开始", duration: 297 },
       { name: "再轻松一些", duration: 311 } ] },
    { name: "把光芒洒向更开阔的地方", type: "专辑", date: "2008-09-30", rating: 8.3, songs: [
       { name: "在一起", duration: 295 }, { name: "天边一朵云", duration: 341 }, { name: "陌生城市的早晨", duration: 335 },
       { name: "星光照亮你回家的路", duration: 334 }, { name: "把光芒洒向开阔之地", duration: 338 }, { name: "黑白电影", duration: 321 },
       { name: "骑手的悲伤之歌", duration: 278 }, { name: "顺流而下", duration: 262 }, { name: "幸运的人", duration: 308 },
       { name: "随意跳舞吧", duration: 276 }, { name: "情歌而已", duration: 325 } ] },
    { name: "没有鸟鸣,关上窗吧", type: "专辑", date: "2019-01-01", rating: 8.2, songs: [
       { name: "神游", duration: 341 }, { name: "致我的迷茫兄弟", duration: 399 }, { name: "伊斯特伍德", duration: 101 },
       { name: "送流水", duration: 291 }, { name: "九月行歌", duration: 290 }, { name: "望星空", duration: 317 },
       { name: "小凉山", duration: 118 }, { name: "不惑之年", duration: 295 }, { name: "少年游", duration: 355 },
       { name: "送马玉华到2011年", duration: 276 } ] },
    { name: "有限身 无穷念", type: "专辑", date: "2022-01-01", songs: [
       { name: "康小午的自由之心", duration: 263 }, { name: "野火", duration: 333 }, { name: "电子荒野", duration: 326 },
       { name: "有限身", duration: 254 }, { name: "愿你旅途漫长", duration: 351 }, { name: "方可的单人舞", duration: 288 },
       { name: "迷途相聚", duration: 363 }, { name: "两千万分之一", duration: 319 }, { name: "飞跃蚂蚁城", duration: 278 },
       { name: "是你", duration: 269 } ] },
      { name: "静默裂痕", type: "专辑", date: "2028-05-29", songs: [
      { name: "静默裂痕", duration: 190 }, { name: "断层汽笛", duration: 306 }, { name: "夜车汽笛", duration: 276 },
      { name: "旧城游园", duration: 305 }, { name: "无名的站台", duration: 271 }, { name: "久违的高墙", duration: 477 },
      { name: "高架公路", duration: 420 } ] },
    { name: "无名的尘埃", type: "专辑", date: "2032-08-24", songs: [
      { name: "无名的尘埃", duration: 226 }, { name: "沉默的裂痕", duration: 305 }, { name: "荒野光年", duration: 289 },
      { name: "久违的惊雷", duration: 340 }, { name: "沉默的长风", duration: 270 }, { name: "灯塔街角", duration: 338 },
      { name: "长风夜雾", duration: 282 }, { name: "灰墙碎片", duration: 175 }, { name: "车窗台阶", duration: 343 },
      { name: "晚风旧城", duration: 310 }, { name: "沙丘信号灯", duration: 366 } ] },
    { name: "风口深巷", type: "专辑", date: "2035-11-25", songs: [
      { name: "风口深巷", duration: 276 }, { name: "电线码头", duration: 560 }, { name: "街灯风筝", duration: 494 },
      { name: "沉默的屋顶", duration: 251 }, { name: "出口暮云", duration: 312 }, { name: "深夜的野猫", duration: 350 },
      { name: "暮色逆旅", duration: 542 }, { name: "无名的迷途", duration: 254 } ] },
    { name: "狂风旧城", type: "专辑", date: "2040-11-09", songs: [
      { name: "狂风旧城", duration: 322 }, { name: "归途白墙", duration: 271 }, { name: "沉默的狂风", duration: 341 },
      { name: "岔路断线", duration: 300 }, { name: "高架疾风", duration: 195 }, { name: "暴雨屋顶", duration: 306 },
      { name: "无名的逆流", duration: 321 }, { name: "极夜杂草", duration: 274 }, { name: "久违的潮声", duration: 348 },
      { name: "无名的匝道", duration: 307 }, { name: "漫长的黑巷", duration: 298 } ] },
    { name: "台阶夜车", type: "专辑", date: "2044-09-27", songs: [
      { name: "台阶夜车", duration: 316 }, { name: "晚风环流", duration: 531 }, { name: "沉默的闪电", duration: 482 },
      { name: "环流晨雾", duration: 287 }, { name: "深夜的暴雨", duration: 273 }, { name: "游园尘埃", duration: 274 },
      { name: "深夜的游园", duration: 514 }, { name: "野猫潮间带", duration: 223 }, { name: "残阳倒影", duration: 233 },
      { name: "楼顶阁楼", duration: 349 } ] },
    { name: "电线夜车", type: "专辑", date: "2048-11-02", songs: [
      { name: "电线夜车", duration: 293 }, { name: "久违的镜面", duration: 284 }, { name: "沉默的逆流", duration: 278 },
      { name: "铁轨灯塔", duration: 168 }, { name: "晚钟极夜", duration: 300 }, { name: "无名的夜车", duration: 336 },
      { name: "匝道裂痕", duration: 274 }, { name: "旧城暗巷", duration: 542 }, { name: "隧道暴雨", duration: 319 },
      { name: "水岸荒原", duration: 290 }, { name: "裂痕断层", duration: 523 } ] },
    ],
  "結束バンド": [
    { name: "結束バンド", type: "专辑", date: "2022-12-28", songs: [
       { name: "青春コンプレックス（青春情结）", duration: 243 }, { name: "Distortion", duration: 208 },
       { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", duration: 231 }, { name: "あのバンド（那个乐队）", duration: 237 },
       { name: "なにが悪い（有什么不好）", duration: 227 }, { name: "忘れてやらない（绝不忘记）", duration: 218 },
       { name: "星座になれたら（若能成为星座）", duration: 234 }, { name: "フラッシュバッカー", duration: 216 },
       { name: "ひみつ基地（秘密基地）", duration: 209 }, { name: "ラブソングが歌えない（唱不出情歌）", duration: 231 },
       { name: "小さな海（小小海洋）", duration: 246 }, { name: "夢をみるのは何故だろうか（为何会做梦）", duration: 214 },
       { name: "転がる岩、君に朝が降る（滚动的岩石，你迎来清晨）", duration: 254 } ] },
    { name: "青春コンプレックス（青春情结）", type: "单曲", date: "2022-10-09", songs: [ { name: "青春コンプレックス（青春情结）", duration: 243 } ] },
    { name: "Distortion", type: "单曲", date: "2022-11-06", songs: [ { name: "Distortion", duration: 208 } ] },
    { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", type: "单曲", date: "2022-11-27", songs: [ { name: "ギターと孤独と蒼い惑星（吉他与孤独与蓝色星球）", duration: 231 } ] },
    { name: "あのバンド（那个乐队）", type: "单曲", date: "2022-11-27", songs: [ { name: "あのバンド（那个乐队）", duration: 237 } ] },
    { name: "なにが悪い（有什么不好）", type: "单曲", date: "2022-12-04", songs: [ { name: "なにが悪い（有什么不好）", duration: 227 } ] },
    { name: "星座になれたら（若能成为星座）", type: "单曲", date: "2022-12-18", songs: [ { name: "星座になれたら（若能成为星座）", duration: 234 } ] },
    { name: "光の中へ（走向光中）", type: "单曲", date: "2024-06-09", songs: [ { name: "光の中へ（走向光中）", duration: 240 } ] },
    { name: "月並みに輝け（平凡地闪耀）", type: "单曲", date: "2024-06-09", songs: [ { name: "月並みに輝け（平凡地闪耀）", duration: 220 } ] },
    { name: "僕と三原色（我和三原色）", type: "单曲", date: "2024-06-09", songs: [ { name: "僕と三原色（我和三原色）", duration: 210 } ] },
      { name: "朝霧", type: "专辑", date: "2026-05-23", songs: [
      { name: "朝霧（晨雾）", duration: 238 }, { name: "青空の星空（青空之星空）", duration: 341 }, { name: "冬休みの根（寒假之根）", duration: 223 },
      { name: "木漏れ日（林间光斑）", duration: 231 }, { name: "遠い（遥远）", duration: 224 }, { name: "満月（满月）", duration: 209 },
      { name: "夜の夜明け（夜之黎明）", duration: 233 }, { name: "枝の朧月（枝之胧月）", duration: 208 } ] },
    { name: "海の夏休み", type: "EP", date: "2027-07-18", songs: [
      { name: "海の夏休み（海之暑假）", duration: 208 }, { name: "給食の調べ（午餐之曲调）", duration: 262 }, { name: "朝焼けの花火（朝霞之花火）", duration: 226 } ] },
    { name: "小さなの月光", type: "EP", date: "2028-06-30", songs: [
      { name: "小さなの月光（微小的月光）", duration: 211 }, { name: "夕暮れの枝（黄昏之枝）", duration: 185 }, { name: "部活（社团）", duration: 231 },
      { name: "眩しい（耀眼）", duration: 211 }, { name: "海の修学旅行（海之修学旅行）", duration: 239 }, { name: "優しい（温柔）", duration: 208 } ] },
    { name: "畳の岬", type: "专辑", date: "2029-04-27", songs: [
      { name: "畳の岬（榻榻米之海角）", duration: 198 }, { name: "土の冬晴れ（土之冬日晴空）", duration: 203 }, { name: "三日月（新月）", duration: 274 },
      { name: "言葉の障子（言语之障子）", duration: 253 }, { name: "黒板（黑板）", duration: 334 }, { name: "川の文化祭（河之文化祭）", duration: 245 },
      { name: "記憶の砂（记忆之沙）", duration: 237 }, { name: "浴衣（浴衣）", duration: 129 }, { name: "陽だまり（暖阳）", duration: 227 } ] },
    { name: "夜風", type: "单曲", date: "2030-05-04", songs: [
      { name: "夜風（夜风）", duration: 278 } ] },
    { name: "旋律", type: "EP", date: "2031-05-03", songs: [
      { name: "旋律（旋律）", duration: 145 }, { name: "木霊の窓（树魂之窗）", duration: 228 }, { name: "制服（制服）", duration: 194 } ] },
    { name: "流れ星", type: "专辑", date: "2032-04-16", songs: [
      { name: "流れ星（流星）", duration: 230 }, { name: "若葉（新叶）", duration: 218 }, { name: "季節の黄昏（季节之黄昏）", duration: 270 },
      { name: "星空の夏休み（星空之暑假）", duration: 225 }, { name: "月光（月光）", duration: 230 }, { name: "白い（纯白的）", duration: 224 },
      { name: "落ち葉の体育祭（落叶之体育祭）", duration: 244 }, { name: "暁の根（拂晓之根）", duration: 221 } ] },
    { name: "満月の波", type: "专辑", date: "2033-02-25", songs: [
      { name: "満月の波（满月之波）", duration: 187 }, { name: "文化祭（文化祭）", duration: 250 }, { name: "残照（残照）", duration: 256 },
      { name: "小さなの青空（微小的青空）", duration: 241 }, { name: "星屑（星屑）", duration: 229 }, { name: "残照の若葉（残照之新叶）", duration: 219 },
      { name: "記憶の桜（记忆之樱花）", duration: 209 }, { name: "心音の満月（心跳之满月）", duration: 209 }, { name: "朝焼け（朝霞）", duration: 225 } ] },
    { name: "青空の岸", type: "EP", date: "2034-02-13", songs: [
      { name: "青空の岸（青空之岸）", duration: 191 }, { name: "渓の蝉（溪之蝉）", duration: 233 }, { name: "残響の雪（残响之雪）", duration: 196 },
      { name: "恋の窓（恋之窗）", duration: 233 } ] },
    { name: "青空の流星", type: "单曲", date: "2035-03-18", songs: [
      { name: "青空の流星（青空之流星）", duration: 214 } ] },
    { name: "記憶", type: "单曲", date: "2035-12-31", songs: [
      { name: "記憶（记忆）", duration: 251 } ] },
    { name: "畳の霞", type: "专辑", date: "2036-12-25", songs: [
      { name: "畳の霞（榻榻米之霞）", duration: 274 }, { name: "卒業（毕业）", duration: 206 }, { name: "秋風（秋风）", duration: 220 },
      { name: "響き（回响）", duration: 210 }, { name: "春風（春风）", duration: 245 }, { name: "夏休み（暑假）", duration: 234 },
      { name: "夜の朝焼け（夜之朝霞）", duration: 216 }, { name: "残照の葉（残照之叶）", duration: 203 }, { name: "風の青空（风之青空）", duration: 242 },
      { name: "雨音（雨声）", duration: 372 }, { name: "星雲（星云）", duration: 216 } ] },
    { name: "恋の蕾", type: "EP", date: "2038-02-03", songs: [
      { name: "恋の蕾（恋之花苞）", duration: 225 }, { name: "自転車（单车）", duration: 228 }, { name: "小さな（微小的）", duration: 238 },
      { name: "夜風の優しい（温柔的夜风）", duration: 238 }, { name: "帰り道（归途）", duration: 150 } ] },
    { name: "若葉の向日葵", type: "专辑", date: "2038-11-25", songs: [
      { name: "若葉の向日葵（新叶之向日葵）", duration: 250 }, { name: "春休み（春假）", duration: 180 }, { name: "蝉の木霊（蝉之树魂）", duration: 413 },
      { name: "給食（午餐）", duration: 227 }, { name: "朧月（胧月）", duration: 271 }, { name: "青い（湛蓝）", duration: 266 },
      { name: "水面（水面）", duration: 191 }, { name: "遠いの調べ（遥远曲调）", duration: 209 }, { name: "言葉（言语）", duration: 206 },
      { name: "浜の流星（海滨之流星）", duration: 207 } ] },
    { name: "放課後", type: "专辑", date: "2039-10-29", songs: [
      { name: "放課後（放学后）", duration: 216 }, { name: "残響の凪（残响之风平浪静）", duration: 173 }, { name: "時の秋風（时光之秋风）", duration: 225 },
      { name: "木霊（树魂）", duration: 190 }, { name: "光の桜（光之樱花）", duration: 220 }, { name: "銀河（银河）", duration: 218 },
      { name: "時の月光（时光之月光）", duration: 223 } ] },
    { name: "灯りの夜明け", type: "EP", date: "2040-12-17", songs: [
      { name: "灯りの夜明け（灯火之黎明）", duration: 228 }, { name: "修学旅行（修学旅行）", duration: 252 }, { name: "静かの岩（静谧岩石）", duration: 172 } ] },
    { name: "放課後の銀河", type: "单曲", date: "2041-10-05", songs: [
      { name: "放課後の銀河（放学后之银河）", duration: 230 } ] },
    { name: "蕾の給食", type: "专辑", date: "2042-10-11", songs: [
      { name: "蕾の給食（花苞之午餐）", duration: 205 }, { name: "縁側の畳（檐廊之榻榻米）", duration: 223 }, { name: "木漏れ日の響き（林间光斑之回响）", duration: 200 },
      { name: "海辺（海边）", duration: 228 }, { name: "波音（潮声）", duration: 227 }, { name: "紅葉（红叶）", duration: 215 },
      { name: "土の滝（土之瀑布）", duration: 230 } ] },
    { name: "流れ星の朝", type: "专辑", date: "2043-11-16", songs: [
      { name: "流れ星の朝（流星之晨）", duration: 232 }, { name: "銀河の岬（银河之海角）", duration: 252 }, { name: "雲の歌（云之歌）", duration: 231 },
      { name: "黄昏の浜（黄昏之海滨）", duration: 218 }, { name: "遠いの灯り（遥远灯火）", duration: 127 }, { name: "若葉の優しい（温柔的新叶）", duration: 208 },
      { name: "枝の灯り（枝之灯火）", duration: 251 }, { name: "冬休み（寒假）", duration: 245 }, { name: "暁の調べ（拂晓之曲调）", duration: 187 },
      { name: "季節（季节）", duration: 242 }, { name: "朧月の岸（胧月之岸）", duration: 251 } ] },
    { name: "流星の海", type: "EP", date: "2044-09-17", songs: [
      { name: "流星の海（流星之海）", duration: 244 }, { name: "縁側（檐廊）", duration: 243 }, { name: "浴衣の夜（浴衣之夜）", duration: 179 } ] },
    { name: "透明の海辺", type: "专辑", date: "2045-10-02", songs: [
      { name: "透明の海辺（透明海边）", duration: 353 }, { name: "小さなの星屑（微小的星屑）", duration: 228 }, { name: "風の暁（风之拂晓）", duration: 220 },
      { name: "虹の追憶（彩虹之追忆）", duration: 212 }, { name: "向日葵（向日葵）", duration: 212 }, { name: "調べ（曲调）", duration: 228 },
      { name: "放課後の季節（放学后之季节）", duration: 213 }, { name: "岬の遠い（遥远的海角）", duration: 225 }, { name: "障子（障子）", duration: 227 },
      { name: "雪化粧（银装素裹）", duration: 185 }, { name: "凪の涙（风平浪静之泪）", duration: 229 } ] },
    { name: "調べの月", type: "专辑", date: "2046-10-14", songs: [
      { name: "調べの月（曲调之月）", duration: 231 }, { name: "真夏（盛夏）", duration: 126 }, { name: "冬晴れ（冬日晴空）", duration: 194 },
      { name: "星空（星空）", duration: 228 }, { name: "青空（青空）", duration: 231 }, { name: "影の春休み（影之春假）", duration: 184 },
      { name: "花火の恋（花火之恋）", duration: 192 }, { name: "夕霧（暮霭）", duration: 189 }, { name: "自転車の眩しい（耀眼的单车）", duration: 233 },
      { name: "遠いの冬休み（遥远寒假）", duration: 307 }, { name: "障子の朝（障子之晨）", duration: 182 } ] },
    { name: "落ち葉", type: "专辑", date: "2047-08-05", songs: [
      { name: "落ち葉（落叶）", duration: 236 }, { name: "潮騒（潮鸣）", duration: 216 }, { name: "冬晴れの波音（冬日晴空之潮声）", duration: 250 },
      { name: "葉の浴衣（叶之浴衣）", duration: 233 }, { name: "制服の音色（制服之音色）", duration: 150 }, { name: "約束の制服（约定之制服）", duration: 226 },
      { name: "心音（心跳）", duration: 245 }, { name: "夜明け（黎明）", duration: 219 }, { name: "卒業の春休み（毕业之春假）", duration: 206 } ] },
    { name: "木漏れ日の湖", type: "专辑", date: "2048-08-29", songs: [
      { name: "木漏れ日の湖（林间光斑之湖）", duration: 151 }, { name: "体育祭の島（体育祭之岛）", duration: 223 }, { name: "青いの響き（湛蓝回响）", duration: 194 },
      { name: "給食の文化祭（午餐之文化祭）", duration: 237 }, { name: "風鈴（风铃）", duration: 251 }, { name: "光景（光景）", duration: 244 },
      { name: "約束の音色（约定之音色）", duration: 176 }, { name: "想い（思念）", duration: 248 }, { name: "氷の涙（冰之泪）", duration: 302 } ] },
    { name: "落ち葉の木霊", type: "专辑", date: "2049-07-12", songs: [
      { name: "落ち葉の木霊（落叶之树魂）", duration: 213 }, { name: "街の光景（街之光景）", duration: 183 }, { name: "岸の蛍（岸之萤火虫）", duration: 222 },
      { name: "枝の追憶（枝之追忆）", duration: 219 }, { name: "涙の泉（泪之泉）", duration: 263 }, { name: "窓の青空（窗之青空）", duration: 331 },
      { name: "雪の月光（雪之月光）", duration: 139 }, { name: "畳の波音（榻榻米之潮声）", duration: 207 }, { name: "冬晴れの星雲（冬日晴空之星云）", duration: 252 },
      { name: "約束の優しい（温柔的约定）", duration: 249 }, { name: "暁の春風（拂晓之春风）", duration: 253 } ] },
    { name: "雪の若葉", type: "专辑", date: "2050-05-25", songs: [
      { name: "雪の若葉（雪之新叶）", duration: 316 }, { name: "桜の朝焼け（樱花之朝霞）", duration: 272 }, { name: "満月の星雲（满月之星云）", duration: 174 },
      { name: "氷の部活（冰之社团）", duration: 188 }, { name: "石の光（石之光）", duration: 239 }, { name: "歌の冬休み（歌之寒假）", duration: 235 },
      { name: "流れ星の海（流星之海）", duration: 182 }, { name: "卒業の岩（毕业之岩石）", duration: 278 }, { name: "夕暮れ（黄昏）", duration: 206 },
      { name: "島の縁側（岛之檐廊）", duration: 261 }, { name: "黒板の花（黑板之花）", duration: 222 } ] },
    ],
  "放課後ティータイム": [
    { name: "放課後ティータイムII（放学后茶会II）", type: "专辑", date: "2010-10-27", songs: [
       { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", duration: 240 }, { name: "カレーのちライス（咖喱饭）", duration: 220 },
       { name: "わたしの恋はホッチキス（我的爱是订书机）", duration: 230 }, { name: "ふでペン 〜ボールペン〜（毛笔～圆珠笔～）", duration: 225 },
       { name: "ときめきシュガー（心动糖）", duration: 218 }, { name: "お菓子のじかん（点心时间）", duration: 210 },
       { name: "Sunday Siesta", duration: 235 }, { name: "ふわふわ時間（轻飘飘时间）", duration: 236 } ] },
    { name: "ふわふわ時間（轻飘飘时间）", type: "单曲", date: "2009-04-22", songs: [ { name: "ふわふわ時間（轻飘飘时间）", duration: 236 } ] },
    { name: "Don't say “lazy”", type: "单曲", date: "2009-04-22", songs: [ { name: "Don't say “lazy”", duration: 251 } ] },
    { name: "Listen!!", type: "单曲", date: "2010-04-28", songs: [ { name: "Listen!!", duration: 245 } ] },
    { name: "GO! GO! MANIAC", type: "单曲", date: "2010-04-28", songs: [ { name: "GO! GO! MANIAC", duration: 255 } ] },
    { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", type: "单曲", date: "2010-06-02", songs: [ { name: "ぴゅあぴゅあはーと（Pure Pure Heart）", duration: 240 } ] },
    { name: "Utauyo!! MIRACLE", type: "单曲", date: "2010-08-04", songs: [ { name: "Utauyo!! MIRACLE", duration: 250 } ] },
    { name: "No, Thank You!", type: "单曲", date: "2010-08-04", songs: [ { name: "No, Thank You!", duration: 244 } ] },
    { name: "天使にふれたよ!（遇见了天使）", type: "单曲", date: "2010-09-08", songs: [ { name: "天使にふれたよ!（遇见了天使）", duration: 240 } ] },
      { name: "窓の教室", type: "单曲", date: "2026-07-05", songs: [
      { name: "窓の教室（窗之教室）", duration: 238 } ] },
    { name: "水面の心音", type: "专辑", date: "2027-07-01", songs: [
      { name: "水面の心音（水面之心跳）", duration: 239 }, { name: "旋律の歌（旋律之歌）", duration: 215 }, { name: "約束（约定）", duration: 332 },
      { name: "放課後の真夏（放学后之盛夏）", duration: 233 }, { name: "時の川（时光之河）", duration: 222 }, { name: "星の朝霧（星之晨雾）", duration: 202 },
      { name: "季節の灯り（季节之灯火）", duration: 310 }, { name: "海辺の響き（海边之回响）", duration: 220 }, { name: "川の朝焼け（河之朝霞）", duration: 259 },
      { name: "夏祭り（夏日祭）", duration: 238 }, { name: "静か（静谧）", duration: 197 } ] },
    { name: "夜風の夜明け", type: "单曲", date: "2028-04-15", songs: [
      { name: "夜風の夜明け（夜风之黎明）", duration: 198 } ] },
    { name: "追憶", type: "专辑", date: "2029-05-22", songs: [
      { name: "追憶（追忆）", duration: 257 }, { name: "花の夜明け（花之黎明）", duration: 197 }, { name: "縁側の夕霧（檐廊之暮霭）", duration: 246 },
      { name: "体育祭（体育祭）", duration: 225 }, { name: "月の波音（月之潮声）", duration: 251 }, { name: "朧月の屋上（胧月之天台）", duration: 233 },
      { name: "屋上の雨（天台之雨）", duration: 256 }, { name: "星空の流星（星空之流星）", duration: 228 }, { name: "夜明けの木霊（黎明之树魂）", duration: 220 },
      { name: "窓の調べ（窗之曲调）", duration: 209 } ] },
    { name: "夜明けの潮騒", type: "EP", date: "2030-05-18", songs: [
      { name: "夜明けの潮騒（黎明之潮鸣）", duration: 222 }, { name: "月光の調べ（月光之曲调）", duration: 256 }, { name: "葉の真夏（叶之盛夏）", duration: 238 },
      { name: "残響（残响）", duration: 243 }, { name: "木漏れ日の川（林间光斑之河）", duration: 217 } ] },
    { name: "星雲の縁側", type: "专辑", date: "2031-04-04", songs: [
      { name: "星雲の縁側（星云之檐廊）", duration: 256 }, { name: "空の秋風（天空之秋风）", duration: 235 }, { name: "夕焼け（晚霞）", duration: 142 },
      { name: "月の滝（月之瀑布）", duration: 252 }, { name: "夜明けの夜風（黎明之夜风）", duration: 215 }, { name: "木漏れ日の花（林间光斑之花）", duration: 231 },
      { name: "波音の紅葉（潮声之红叶）", duration: 195 }, { name: "黄昏の夕霧（黄昏之暮霭）", duration: 242 }, { name: "雨音の夜明け（雨声之黎明）", duration: 239 } ] },
    { name: "川の星", type: "专辑", date: "2032-04-07", songs: [
      { name: "川の星（河之星）", duration: 345 }, { name: "約束の夏休み（约定之暑假）", duration: 228 }, { name: "潮騒の星空（潮鸣之星空）", duration: 256 },
      { name: "浴衣の涙（浴衣之泪）", duration: 225 }, { name: "春休みの冬晴れ（春假之冬日晴空）", duration: 238 }, { name: "光の雲（光之云）", duration: 177 },
      { name: "屋上の岬（天台之海角）", duration: 254 }, { name: "帰り道の夕焼け（归途之晚霞）", duration: 317 }, { name: "優しいの雲（温柔云）", duration: 283 },
      { name: "冬晴れの氷（冬日晴空之冰）", duration: 239 } ] },
    { name: "風の風鈴", type: "单曲", date: "2033-03-23", songs: [
      { name: "風の風鈴（风之风铃）", duration: 257 } ] },
    { name: "岸の実", type: "专辑", date: "2034-02-03", songs: [
      { name: "岸の実（岸之果实）", duration: 327 }, { name: "灯り（灯火）", duration: 220 }, { name: "滝の銀河（瀑布之银河）", duration: 238 },
      { name: "霞の教室（霞之教室）", duration: 220 }, { name: "海辺の放課後（海边之放学后）", duration: 248 }, { name: "風鈴の夏祭り（风铃之夏日祭）", duration: 268 },
      { name: "月の青空（月之青空）", duration: 331 }, { name: "水面の花（水面之花）", duration: 197 }, { name: "紅葉の水面（红叶之水面）", duration: 251 } ] },
    { name: "花の紅葉", type: "EP", date: "2035-03-20", songs: [
      { name: "花の紅葉（花之红叶）", duration: 279 }, { name: "光の空（光之天空）", duration: 241 }, { name: "黒板の空（黑板之天空）", duration: 214 },
      { name: "屋上（天台）", duration: 319 }, { name: "文化祭の眩しい（耀眼的文化祭）", duration: 172 }, { name: "遠いの風（遥远风）", duration: 267 } ] },
    { name: "修学旅行の心音", type: "单曲", date: "2036-01-16", songs: [
      { name: "修学旅行の心音（修学旅行之心跳）", duration: 220 } ] },
    { name: "若葉の約束", type: "专辑", date: "2036-12-15", songs: [
      { name: "若葉の約束（新叶之约定）", duration: 245 }, { name: "雨音の夜（雨声之夜）", duration: 228 }, { name: "文化祭の霞（文化祭之霞）", duration: 239 },
      { name: "想いの銀河（思念之银河）", duration: 251 }, { name: "暁の湖（拂晓之湖）", duration: 243 }, { name: "霧の朝（雾之晨）", duration: 214 },
      { name: "遠いの湖（遥远湖）", duration: 263 }, { name: "月光の霧（月光之雾）", duration: 222 } ] },
    { name: "小さなの黄昏", type: "单曲", date: "2038-01-11", songs: [
      { name: "小さなの黄昏（微小的黄昏）", duration: 256 } ] },
    { name: "流星の夕暮れ", type: "单曲", date: "2039-01-16", songs: [
      { name: "流星の夕暮れ（流星之黄昏）", duration: 267 } ] },
    { name: "蝉の陽だまり", type: "EP", date: "2039-11-25", songs: [
      { name: "蝉の陽だまり（蝉之暖阳）", duration: 218 }, { name: "若葉の夕暮れ（新叶之黄昏）", duration: 257 }, { name: "空の水面（天空之水面）", duration: 254 } ] },
    { name: "言葉の月光", type: "EP", date: "2040-10-18", songs: [
      { name: "言葉の月光（言语之月光）", duration: 213 }, { name: "夕霧の春休み（暮霭之春假）", duration: 245 }, { name: "畳の光景（榻榻米之光景）", duration: 284 },
      { name: "黒板の遠い（遥远的黑板）", duration: 234 }, { name: "詩の砂（诗之沙）", duration: 278 }, { name: "想いの月（思念之月）", duration: 245 } ] },
    { name: "星屑の恋", type: "单曲", date: "2041-10-12", songs: [
      { name: "星屑の恋（星屑之恋）", duration: 241 } ] },
    { name: "渓の記憶", type: "专辑", date: "2042-10-07", songs: [
      { name: "渓の記憶（溪之记忆）", duration: 381 }, { name: "根の雨（根之雨）", duration: 247 }, { name: "残照の朝（残照之晨）", duration: 282 },
      { name: "雨の青い（湛蓝的雨）", duration: 155 }, { name: "霧の星雲（雾之星云）", duration: 225 }, { name: "風の波（风之波）", duration: 226 },
      { name: "影の朧月（影之胧月）", duration: 220 }, { name: "朧月の夏祭り（胧月之夏日祭）", duration: 274 }, { name: "眩しいの海（耀眼海）", duration: 246 },
      { name: "音色（音色）", duration: 252 } ] },
    { name: "影の朝", type: "EP", date: "2043-09-16", songs: [
      { name: "影の朝（影之晨）", duration: 228 }, { name: "音色の優しい（温柔的音色）", duration: 252 }, { name: "朧月の優しい（温柔的胧月）", duration: 242 },
      { name: "朝焼けの旋律（朝霞之旋律）", duration: 244 } ] },
    { name: "秋風の雪化粧", type: "EP", date: "2044-09-15", songs: [
      { name: "秋風の雪化粧（秋风之银装素裹）", duration: 253 }, { name: "文化祭の満月（文化祭之满月）", duration: 234 }, { name: "小さなの残照（微小的残照）", duration: 242 },
      { name: "音色の波（音色之波）", duration: 274 } ] },
    { name: "響きの若葉", type: "单曲", date: "2045-08-12", songs: [
      { name: "響きの若葉（回响之新叶）", duration: 188 } ] },
    { name: "星空の歌", type: "单曲", date: "2046-09-14", songs: [
      { name: "星空の歌（星空之歌）", duration: 236 } ] },
    { name: "夕焼けの旋律", type: "EP", date: "2047-09-30", songs: [
      { name: "夕焼けの旋律（晚霞之旋律）", duration: 246 }, { name: "紅葉の眩しい（耀眼的红叶）", duration: 284 }, { name: "流星の星（流星之星）", duration: 196 },
      { name: "根の静か（静谧的根）", duration: 209 }, { name: "微笑の実（微笑之果实）", duration: 223 } ] },
    { name: "黄昏の夜風", type: "专辑", date: "2048-08-17", songs: [
      { name: "黄昏の夜風（黄昏之夜风）", duration: 397 }, { name: "季節の泉（季节之泉）", duration: 269 }, { name: "星雲の葉（星云之叶）", duration: 241 },
      { name: "夕霧の夕暮れ（暮霭之黄昏）", duration: 222 }, { name: "渓の部活（溪之社团）", duration: 238 }, { name: "追憶の涙（追忆之泪）", duration: 233 },
      { name: "追憶の恋（追忆之恋）", duration: 185 }, { name: "声の唄（声之歌谣）", duration: 220 } ] },
    { name: "蛍の潮騒", type: "EP", date: "2049-07-03", songs: [
      { name: "蛍の潮騒（萤火虫之潮鸣）", duration: 241 }, { name: "霜の根（霜之根）", duration: 131 }, { name: "唄の水面（歌谣之水面）", duration: 184 } ] },
    { name: "灯りの制服", type: "专辑", date: "2050-06-21", songs: [
      { name: "灯りの制服（灯火之制服）", duration: 162 }, { name: "月の響き（月之回响）", duration: 239 }, { name: "灯りの旋律（灯火之旋律）", duration: 247 },
      { name: "唄の波（歌谣之波）", duration: 216 }, { name: "蛍の放課後（萤火虫之放学后）", duration: 224 }, { name: "月光の朝（月光之晨）", duration: 204 },
      { name: "浴衣の島（浴衣之岛）", duration: 260 }, { name: "浴衣の三日月（浴衣之新月）", duration: 247 } ] },
    ],
  "MyGO（CRYCHIC）": [
    { name: "迷跡波（迷迹波）", type: "专辑", date: "2024-04-24", songs: [
       { name: "迷星叫（迷星叫）", duration: 230 }, { name: "迷路日々（迷路日日）", duration: 225 },
       { name: "音一会（音一会）", duration: 240 }, { name: "名無声（名无声）", duration: 235 },
       { name: "潜在表明（潜在表明）", duration: 220 }, { name: "壱雫空（一雫空）", duration: 228 },
       { name: "栞（书签）", duration: 245 }, { name: "春日影（春日影）", duration: 250 },
       { name: "詩超絆（诗超绊）", duration: 238 }, { name: "過惰幻（过惰幻）", duration: 215 },
       { name: "焚音打（焚音打）", duration: 222 } ] },
    { name: "迷星叫（迷星叫）", type: "单曲", date: "2022-12-14", songs: [ { name: "迷星叫（迷星叫）", duration: 230 } ] },
    { name: "迷路日々（迷路日日）", type: "单曲", date: "2023-03-15", songs: [ { name: "迷路日々（迷路日日）", duration: 225 } ] },
    { name: "音一会（音一会）", type: "单曲", date: "2023-06-14", songs: [ { name: "音一会（音一会）", duration: 240 } ] },
    { name: "名無声（名无声）", type: "单曲", date: "2023-08-16", songs: [ { name: "名無声（名无声）", duration: 235 } ] },
    { name: "潜在表明（潜在表明）", type: "单曲", date: "2023-11-15", songs: [ { name: "潜在表明（潜在表明）", duration: 220 } ] },
    { name: "壱雫空（一雫空）", type: "单曲", date: "2024-02-14", songs: [ { name: "壱雫空（一雫空）", duration: 228 } ] },
      { name: "影の渓", type: "专辑", date: "2026-07-02", songs: [
      { name: "影の渓（影之溪）", duration: 251 }, { name: "落ち葉の屋上（落叶之天台）", duration: 252 }, { name: "実の夜風（果实之夜风）", duration: 248 },
      { name: "浜の縁側（海滨之檐廊）", duration: 214 }, { name: "時の季節（时光之季节）", duration: 189 }, { name: "季節の旋律（季节之旋律）", duration: 212 },
      { name: "朝焼けの風鈴（朝霞之风铃）", duration: 253 }, { name: "青空の波（青空之波）", duration: 230 }, { name: "文化祭の声（文化祭之声）", duration: 214 },
      { name: "夜の銀河（夜之银河）", duration: 251 } ] },
    { name: "光の詩", type: "EP", date: "2027-06-05", songs: [
      { name: "光の詩（光之诗）", duration: 226 }, { name: "光の夕焼け（光之晚霞）", duration: 374 }, { name: "微笑の暁（微笑之拂晓）", duration: 224 },
      { name: "実の岩（果实之岩石）", duration: 223 } ] },
    { name: "春風の記憶", type: "单曲", date: "2028-05-29", songs: [
      { name: "春風の記憶（春风之记忆）", duration: 151 } ] },
    { name: "春風の朝焼け", type: "专辑", date: "2029-03-31", songs: [
      { name: "春風の朝焼け（春风之朝霞）", duration: 211 }, { name: "窓の残響（窗之残响）", duration: 242 }, { name: "三日月の氷（新月之冰）", duration: 242 },
      { name: "音色の残照（音色之残照）", duration: 245 }, { name: "制服の春風（制服之春风）", duration: 168 }, { name: "三日月の滝（新月之瀑布）", duration: 345 },
      { name: "夏休みの体育祭（暑假之体育祭）", duration: 189 } ] },
    { name: "陽だまりの枝", type: "单曲", date: "2030-04-09", songs: [
      { name: "陽だまりの枝（暖阳之枝）", duration: 217 } ] },
    { name: "秋風の三日月", type: "EP", date: "2031-04-18", songs: [
      { name: "秋風の三日月（秋风之新月）", duration: 153 }, { name: "星の石（星之石）", duration: 213 }, { name: "季節の唄（季节之歌谣）", duration: 182 } ] },
    { name: "冬晴れの青空", type: "EP", date: "2032-05-10", songs: [
      { name: "冬晴れの青空（冬日晴空之青空）", duration: 148 }, { name: "街の屋上（街之天台）", duration: 230 }, { name: "海の畳（海之榻榻米）", duration: 154 },
      { name: "街の夜（街之夜）", duration: 225 } ] },
    { name: "夏休みの光", type: "单曲", date: "2033-03-24", songs: [
      { name: "夏休みの光（暑假之光）", duration: 221 } ] },
    { name: "夜風の朧月", type: "专辑", date: "2034-04-12", songs: [
      { name: "夜風の朧月（夜风之胧月）", duration: 208 }, { name: "部活の暁（社团之拂晓）", duration: 223 }, { name: "波音の言葉（潮声之言语）", duration: 274 },
      { name: "若葉の街（新叶之街）", duration: 241 }, { name: "優しいの冬休み（温柔寒假）", duration: 211 }, { name: "微笑の星（微笑之星）", duration: 216 },
      { name: "海辺の微笑（海边之微笑）", duration: 269 }, { name: "小さなの銀河（微小的银河）", duration: 253 }, { name: "恋の縁側（恋之檐廊）", duration: 342 },
      { name: "渓の三日月（溪之新月）", duration: 250 } ] },
    { name: "夏祭りの石", type: "EP", date: "2035-03-15", songs: [
      { name: "夏祭りの石（夏日祭之石）", duration: 229 }, { name: "霜の岸（霜之岸）", duration: 176 }, { name: "三日月の満月（新月之满月）", duration: 159 },
      { name: "石の朝（石之晨）", duration: 253 }, { name: "木漏れ日の星（林间光斑之星）", duration: 258 }, { name: "桜の季節（樱花之季节）", duration: 218 } ] },
    { name: "街の月", type: "专辑", date: "2036-01-03", songs: [
      { name: "街の月（街之月）", duration: 213 }, { name: "月光の実（月光之果实）", duration: 210 }, { name: "声の黄昏（声之黄昏）", duration: 211 },
      { name: "静かの蕾（静谧花苞）", duration: 301 }, { name: "流れ星の小さな（微小的的流星）", duration: 251 }, { name: "畳の冬晴れ（榻榻米之冬日晴空）", duration: 230 },
      { name: "雲の氷（云之冰）", duration: 251 }, { name: "水面の記憶（水面之记忆）", duration: 208 } ] },
    { name: "窓の夏祭り", type: "专辑", date: "2037-01-16", songs: [
      { name: "窓の夏祭り（窗之夏日祭）", duration: 237 }, { name: "凪の虹（风平浪静之彩虹）", duration: 243 }, { name: "小さなの静か（微小的静谧）", duration: 230 },
      { name: "小さなの実（微小的果实）", duration: 307 }, { name: "夕暮れの真夏（黄昏之盛夏）", duration: 239 }, { name: "夜の調べ（夜之曲调）", duration: 216 },
      { name: "島の凪（岛之风平浪静）", duration: 230 }, { name: "季節の桜（季节之樱花）", duration: 228 }, { name: "根の真夏（根之盛夏）", duration: 214 },
      { name: "秋風の春休み（秋风之春假）", duration: 240 } ] },
    { name: "制服の透明", type: "EP", date: "2038-01-29", songs: [
      { name: "制服の透明（透明的制服）", duration: 406 }, { name: "流れ星の言葉（流星之言语）", duration: 243 }, { name: "夜風の黒板（夜风之黑板）", duration: 211 },
      { name: "音色の冬休み（音色之寒假）", duration: 237 } ] },
    { name: "秋風の微笑", type: "专辑", date: "2038-12-04", songs: [
      { name: "秋風の微笑（秋风之微笑）", duration: 209 }, { name: "眩しいの体育祭（耀眼体育祭）", duration: 164 }, { name: "朝霧の月（晨雾之月）", duration: 186 },
      { name: "調べの星雲（曲调之星云）", duration: 245 }, { name: "枝の向日葵（枝之向日葵）", duration: 263 }, { name: "文化祭の時（文化祭之时光）", duration: 241 },
      { name: "音色の雪化粧（音色之银装素裹）", duration: 242 } ] },
    { name: "心の時", type: "专辑", date: "2039-12-15", songs: [
      { name: "心の時（心之时光）", duration: 228 }, { name: "卒業の満月（毕业之满月）", duration: 247 }, { name: "調べの冬休み（曲调之寒假）", duration: 216 },
      { name: "春休みの雪化粧（春假之银装素裹）", duration: 226 }, { name: "時の朧月（时光之胧月）", duration: 246 }, { name: "岸の石（岸之石）", duration: 353 },
      { name: "追憶の島（追忆之岛）", duration: 225 } ] },
    { name: "雪の給食", type: "EP", date: "2040-10-25", songs: [
      { name: "雪の給食（雪之午餐）", duration: 228 }, { name: "追憶の星空（追忆之星空）", duration: 219 }, { name: "夜の雨（夜之雨）", duration: 147 },
      { name: "岩の島（岩石之岛）", duration: 215 }, { name: "潮騒の水面（潮鸣之水面）", duration: 409 } ] },
    { name: "木漏れ日の潮騒", type: "EP", date: "2041-12-03", songs: [
      { name: "木漏れ日の潮騒（林间光斑之潮鸣）", duration: 159 }, { name: "夏祭りの雪化粧（夏日祭之银装素裹）", duration: 223 }, { name: "月光の縁側（月光之檐廊）", duration: 231 } ] },
    { name: "砂の制服", type: "EP", date: "2042-10-17", songs: [
      { name: "砂の制服（沙之制服）", duration: 231 }, { name: "岩の微笑（岩石之微笑）", duration: 175 }, { name: "風の雨（风之雨）", duration: 205 },
      { name: "暁の修学旅行（拂晓之修学旅行）", duration: 222 }, { name: "月の雲（月之云）", duration: 250 } ] },
    { name: "黒板の海辺", type: "EP", date: "2043-10-15", songs: [
      { name: "黒板の海辺（黑板之海边）", duration: 195 }, { name: "岬の風（海角之风）", duration: 198 }, { name: "潮騒の陽だまり（潮鸣之暖阳）", duration: 245 },
      { name: "卒業の調べ（毕业之曲调）", duration: 211 } ] },
    { name: "黄昏の卒業", type: "专辑", date: "2044-11-11", songs: [
      { name: "黄昏の卒業（黄昏之毕业）", duration: 213 }, { name: "潮騒の静か（静谧的潮鸣）", duration: 217 }, { name: "海の優しい（温柔的海）", duration: 240 },
      { name: "夕焼けの放課後（晚霞之放学后）", duration: 236 }, { name: "雲の岩（云之岩石）", duration: 238 }, { name: "雪の夢（雪之梦）", duration: 235 },
      { name: "海の時（海之时光）", duration: 144 }, { name: "青空の霜（青空之霜）", duration: 161 }, { name: "星屑の落ち葉（星屑之落叶）", duration: 198 } ] },
    { name: "青いの微笑", type: "EP", date: "2045-09-11", songs: [
      { name: "青いの微笑（湛蓝微笑）", duration: 248 }, { name: "詩の春風（诗之春风）", duration: 243 }, { name: "木漏れ日の部活（林间光斑之社团）", duration: 217 } ] },
    { name: "空の帰り道", type: "EP", date: "2046-09-12", songs: [
      { name: "空の帰り道（天空之归途）", duration: 227 }, { name: "静かの浴衣（静谧浴衣）", duration: 249 }, { name: "青いの浜（湛蓝海滨）", duration: 232 },
      { name: "声の雲（声之云）", duration: 398 }, { name: "虹の氷（彩虹之冰）", duration: 258 } ] },
    { name: "畳の土", type: "单曲", date: "2047-08-21", songs: [
      { name: "畳の土（榻榻米之土）", duration: 243 } ] },
    { name: "教室の放課後", type: "EP", date: "2048-09-02", songs: [
      { name: "教室の放課後（教室之放学后）", duration: 181 }, { name: "真夏の岩（盛夏之岩石）", duration: 209 }, { name: "残響の教室（残响之教室）", duration: 248 } ] },
    { name: "静かの卒業", type: "专辑", date: "2049-07-22", songs: [
      { name: "静かの卒業（静谧毕业）", duration: 172 }, { name: "涙の波音（泪之潮声）", duration: 253 }, { name: "蕾の夜（花苞之夜）", duration: 146 },
      { name: "虹の三日月（彩虹之新月）", duration: 224 }, { name: "落ち葉の星屑（落叶之星屑）", duration: 241 }, { name: "畳の真夏（榻榻米之盛夏）", duration: 213 },
      { name: "朝の陽だまり（晨之暖阳）", duration: 246 }, { name: "月光の砂（月光之沙）", duration: 243 }, { name: "蛍の障子（萤火虫之障子）", duration: 232 },
      { name: "雪の夕霧（雪之暮霭）", duration: 213 } ] },
    { name: "凪の心", type: "专辑", date: "2050-08-16", songs: [
      { name: "凪の心（风平浪静之心）", duration: 240 }, { name: "静かの帰り道（静谧归途）", duration: 198 }, { name: "島の星空（岛之星空）", duration: 213 },
      { name: "島の夕焼け（岛之晚霞）", duration: 181 }, { name: "桜の浴衣（樱花之浴衣）", duration: 240 }, { name: "旋律の岬（旋律之海角）", duration: 226 },
      { name: "夏休みの星（暑假之星）", duration: 213 }, { name: "夜の蕾（夜之花苞）", duration: 217 }, { name: "体育祭の蛍（体育祭之萤火虫）", duration: 245 } ] },
    ],
  "ギヴン": [
    { name: "gift", type: "专辑", date: "2020-08-26", songs: [
       { name: "夜が明ける（天亮了）", duration: 281 }, { name: "へたくそ（笨拙）", duration: 188 },
       { name: "ステージから君に捧ぐ（从舞台献给你）", duration: 258 }, { name: "冬のはなし（冬天的故事）", duration: 208 },
       { name: "まるつけ（句号）", duration: 234 } ] },
    { name: "冬のはなし（冬天的故事）", type: "单曲", date: "2019-09-18", songs: [ { name: "冬のはなし（冬天的故事）", duration: 208 } ] },
    { name: "まるつけ（句号）", type: "单曲", date: "2019-12-25", songs: [ { name: "まるつけ（句号）", duration: 234 } ] },
    { name: "夜が明ける（天亮了）", type: "单曲", date: "2020-08-26", songs: [ { name: "夜が明ける（天亮了）", duration: 281 } ] },
    { name: "うらがわの存在（背面的存在）", type: "单曲", date: "2021-12-01", songs: [ { name: "うらがわの存在（背面的存在）", duration: 250 } ] },
      { name: "影の夜", type: "专辑", date: "2026-06-27", songs: [
      { name: "影の夜（影之夜）", duration: 194 }, { name: "追憶の修学旅行（追忆之修学旅行）", duration: 249 }, { name: "川の夏休み（河之暑假）", duration: 202 },
      { name: "岬の黒板（海角之黑板）", duration: 150 }, { name: "星雲の追憶（星云之追忆）", duration: 252 }, { name: "霜の想い（霜之思念）", duration: 239 },
      { name: "砂の透明（透明的沙）", duration: 182 }, { name: "滝の記憶（瀑布之记忆）", duration: 224 }, { name: "花の文化祭（花之文化祭）", duration: 231 } ] },
    { name: "青いの凪", type: "单曲", date: "2027-07-19", songs: [
      { name: "青いの凪（湛蓝风平浪静）", duration: 241 } ] },
    { name: "灯りの残響", type: "单曲", date: "2028-05-27", songs: [
      { name: "灯りの残響（灯火之残响）", duration: 268 } ] },
    { name: "夏祭りの水面", type: "单曲", date: "2029-06-13", songs: [
      { name: "夏祭りの水面（夏日祭之水面）", duration: 162 } ] },
    { name: "氷の枝", type: "EP", date: "2030-06-06", songs: [
      { name: "氷の枝（冰之枝）", duration: 282 }, { name: "夕霧の夏祭り（暮霭之夏日祭）", duration: 251 }, { name: "水面の黒板（水面之黑板）", duration: 252 },
      { name: "三日月の唄（新月之歌谣）", duration: 232 } ] },
    { name: "言葉の岬", type: "专辑", date: "2031-04-17", songs: [
      { name: "言葉の岬（言语之海角）", duration: 235 }, { name: "岬の海（海角之海）", duration: 219 }, { name: "微笑の雨（微笑之雨）", duration: 227 },
      { name: "光景の星（光景之星）", duration: 149 }, { name: "流星の泉（流星之泉）", duration: 230 }, { name: "根の畳（根之榻榻米）", duration: 226 },
      { name: "制服の文化祭（制服之文化祭）", duration: 247 }, { name: "桜の冬晴れ（樱花之冬日晴空）", duration: 238 }, { name: "雪化粧の岩（银装素裹之岩石）", duration: 179 },
      { name: "声の部活（声之社团）", duration: 232 }, { name: "夕霧の滝（暮霭之瀑布）", duration: 138 } ] },
    { name: "約束の冬休み", type: "EP", date: "2032-03-03", songs: [
      { name: "約束の冬休み（约定之寒假）", duration: 236 }, { name: "霞の自転車（霞之单车）", duration: 139 }, { name: "泉の雪化粧（泉之银装素裹）", duration: 278 },
      { name: "紅葉の泉（红叶之泉）", duration: 256 }, { name: "紅葉の春風（红叶之春风）", duration: 251 }, { name: "想いの夏祭り（思念之夏日祭）", duration: 283 } ] },
    { name: "若葉の影", type: "专辑", date: "2033-04-11", songs: [
      { name: "若葉の影（新叶之影）", duration: 231 }, { name: "空の蝉（天空之蝉）", duration: 242 }, { name: "渓の実（溪之果实）", duration: 216 },
      { name: "夏休みの島（暑假之岛）", duration: 372 }, { name: "教室の月（教室之月）", duration: 375 }, { name: "星空の風鈴（星空之风铃）", duration: 244 },
      { name: "声の浴衣（声之浴衣）", duration: 239 } ] },
    { name: "星雲の静か", type: "专辑", date: "2034-03-14", songs: [
      { name: "星雲の静か（静谧的星云）", duration: 213 }, { name: "若葉の岩（新叶之岩石）", duration: 246 }, { name: "声の青い（湛蓝的声）", duration: 444 },
      { name: "放課後の朧月（放学后之胧月）", duration: 193 }, { name: "砂の根（沙之根）", duration: 258 }, { name: "雨の制服（雨之制服）", duration: 214 },
      { name: "満月の根（满月之根）", duration: 192 }, { name: "夏休みの心（暑假之心）", duration: 226 } ] },
    { name: "島の霧", type: "EP", date: "2035-03-20", songs: [
      { name: "島の霧（岛之雾）", duration: 248 }, { name: "風の追憶（风之追忆）", duration: 257 }, { name: "霜の記憶（霜之记忆）", duration: 259 },
      { name: "朝の若葉（晨之新叶）", duration: 257 }, { name: "時の歌（时光之歌）", duration: 189 } ] },
    { name: "朝焼けの心", type: "专辑", date: "2036-03-09", songs: [
      { name: "朝焼けの心（朝霞之心）", duration: 426 }, { name: "土の凪（土之风平浪静）", duration: 253 }, { name: "湖の夕焼け（湖之晚霞）", duration: 274 },
      { name: "月光の滝（月光之瀑布）", duration: 238 }, { name: "蛍の街（萤火虫之街）", duration: 248 }, { name: "季節の静か（静谧的季节）", duration: 219 },
      { name: "川の真夏（河之盛夏）", duration: 260 }, { name: "冬休みの窓（寒假之窗）", duration: 216 }, { name: "霞の旋律（霞之旋律）", duration: 228 } ] },
    { name: "帰り道の街", type: "EP", date: "2037-02-19", songs: [
      { name: "帰り道の街（归途之街）", duration: 235 }, { name: "朝焼けの土（朝霞之土）", duration: 197 }, { name: "夜の霧（夜之雾）", duration: 243 } ] },
    { name: "春風の屋上", type: "单曲", date: "2037-12-04", songs: [
      { name: "春風の屋上（春风之天台）", duration: 232 } ] },
    { name: "約束の星屑", type: "专辑", date: "2039-01-08", songs: [
      { name: "約束の星屑（约定之星屑）", duration: 261 }, { name: "春風の夕焼け（春风之晚霞）", duration: 223 }, { name: "浜の夜風（海滨之夜风）", duration: 250 },
      { name: "静かの雲（静谧云）", duration: 238 }, { name: "雨の滝（雨之瀑布）", duration: 246 }, { name: "黄昏の恋（黄昏之恋）", duration: 227 },
      { name: "春風の虹（春风之彩虹）", duration: 245 }, { name: "夏休みの涙（暑假之泪）", duration: 199 }, { name: "風鈴の木漏れ日（风铃之林间光斑）", duration: 253 } ] },
    { name: "静かの岬", type: "专辑", date: "2040-01-10", songs: [
      { name: "静かの岬（静谧海角）", duration: 238 }, { name: "制服の岬（制服之海角）", duration: 237 }, { name: "浜の岩（海滨之岩石）", duration: 237 },
      { name: "時の文化祭（时光之文化祭）", duration: 244 }, { name: "夏休みの渓（暑假之溪）", duration: 280 }, { name: "海の夕霧（海之暮霭）", duration: 230 },
      { name: "霧の調べ（雾之曲调）", duration: 225 }, { name: "雨音の実（雨声之果实）", duration: 338 } ] },
    { name: "光の若葉", type: "EP", date: "2040-10-24", songs: [
      { name: "光の若葉（光之新叶）", duration: 395 }, { name: "冬晴れの島（冬日晴空之岛）", duration: 248 }, { name: "渓の制服（溪之制服）", duration: 406 },
      { name: "岬の残響（海角之残响）", duration: 222 }, { name: "残響の波（残响之波）", duration: 284 } ] },
    { name: "白いの心音", type: "EP", date: "2041-11-15", songs: [
      { name: "白いの心音（纯白的心跳）", duration: 243 }, { name: "朧月の実（胧月之果实）", duration: 198 }, { name: "自転車の紅葉（单车之红叶）", duration: 250 },
      { name: "夜の渓（夜之溪）", duration: 214 }, { name: "詩の心音（诗之心跳）", duration: 226 } ] },
    { name: "砂の木霊", type: "专辑", date: "2042-11-11", songs: [
      { name: "砂の木霊（沙之树魂）", duration: 232 }, { name: "朝霧の川（晨雾之河）", duration: 221 }, { name: "風鈴の雪（风铃之雪）", duration: 248 },
      { name: "潮騒の氷（潮鸣之冰）", duration: 239 }, { name: "湖の季節（湖之季节）", duration: 196 }, { name: "言葉の春休み（言语之春假）", duration: 247 },
      { name: "月の真夏（月之盛夏）", duration: 190 } ] },
    { name: "土の花火", type: "EP", date: "2043-11-10", songs: [
      { name: "土の花火（土之花火）", duration: 442 }, { name: "音色の紅葉（音色之红叶）", duration: 246 }, { name: "夕霧の陽だまり（暮霭之暖阳）", duration: 228 } ] },
    { name: "冬晴れの蛍", type: "EP", date: "2044-10-22", songs: [
      { name: "冬晴れの蛍（冬日晴空之萤火虫）", duration: 246 }, { name: "冬晴れの言葉（冬日晴空之言语）", duration: 255 }, { name: "満月の追憶（满月之追忆）", duration: 279 },
      { name: "流れ星の石（流星之石）", duration: 192 }, { name: "放課後の暁（放学后之拂晓）", duration: 235 } ] },
    { name: "木漏れ日の黄昏", type: "专辑", date: "2045-09-02", songs: [
      { name: "木漏れ日の黄昏（林间光斑之黄昏）", duration: 261 }, { name: "夏祭りの障子（夏日祭之障子）", duration: 219 }, { name: "花火の音色（花火之音色）", duration: 231 },
      { name: "夕焼けの朝（晚霞之晨）", duration: 261 }, { name: "夜風の冬休み（夜风之寒假）", duration: 236 }, { name: "陽だまりの静か（静谧的暖阳）", duration: 424 },
      { name: "湖の霧（湖之雾）", duration: 447 }, { name: "雪の蝉（雪之蝉）", duration: 243 }, { name: "優しいの星空（温柔星空）", duration: 256 } ] },
    { name: "夜風の窓", type: "EP", date: "2046-08-25", songs: [
      { name: "夜風の窓（夜风之窗）", duration: 231 }, { name: "体育祭の修学旅行（体育祭之修学旅行）", duration: 218 }, { name: "真夏の夏休み（盛夏之暑假）", duration: 249 } ] },
    { name: "卒業の眩しい", type: "EP", date: "2047-10-02", songs: [
      { name: "卒業の眩しい（耀眼的毕业）", duration: 238 }, { name: "岩の自転車（岩石之单车）", duration: 360 }, { name: "記憶の暁（记忆之拂晓）", duration: 261 },
      { name: "優しいの霞（温柔霞）", duration: 248 }, { name: "土の夜（土之夜）", duration: 349 }, { name: "声の朧月（声之胧月）", duration: 189 } ] },
    { name: "海辺の満月", type: "专辑", date: "2048-07-16", songs: [
      { name: "海辺の満月（海边之满月）", duration: 258 }, { name: "若葉の帰り道（新叶之归途）", duration: 217 }, { name: "銀河の給食（银河之午餐）", duration: 230 },
      { name: "帰り道の朝焼け（归途之朝霞）", duration: 220 }, { name: "海の朝焼け（海之朝霞）", duration: 177 }, { name: "響きの朧月（回响之胧月）", duration: 135 },
      { name: "月光の教室（月光之教室）", duration: 227 } ] },
    { name: "霜の桜", type: "专辑", date: "2049-07-27", songs: [
      { name: "霜の桜（霜之樱花）", duration: 197 }, { name: "冬晴れの記憶（冬日晴空之记忆）", duration: 256 }, { name: "潮騒の流星（潮鸣之流星）", duration: 240 },
      { name: "実の星屑（果实之星屑）", duration: 248 }, { name: "夢の霧（梦之雾）", duration: 256 }, { name: "紅葉の黒板（红叶之黑板）", duration: 249 },
      { name: "桜の黄昏（樱花之黄昏）", duration: 182 } ] },
    { name: "光景の青空", type: "单曲", date: "2050-06-29", songs: [
      { name: "光景の青空（光景之青空）", duration: 253 } ] },
    ],
  "トゲナシトゲアリ": [
    { name: "棘アリ（有刺）", type: "专辑", date: "2024-04-24", songs: [
       { name: "名もなき何もかも（无名的万物）", duration: 214 }, { name: "偽りの理（虚伪的道理）", duration: 200 },
       { name: "気鬱、白濁す（郁结、浑浊）", duration: 206 }, { name: "理想的パラドクスとは（所谓理想的惖论）", duration: 210 },
       { name: "爆ぜて咲く（绽裂盛开）", duration: 212 }, { name: "黎明を穿つ（刺穿黎明）", duration: 220 },
       { name: "極私的極彩色アンサー（极私的极彩色答案）", duration: 205 }, { name: "傷つき傷つけ痛くて辛い（伤与被伤 痛又苦）", duration: 216 },
       { name: "運命に賭けたい論理（想以命运为赌注的道理）", duration: 208 }, { name: "サヨナラサヨナラサヨナラ（再见 再见 再见）", duration: 225 } ] },
    { name: "棘ナシ（无刺）", type: "专辑", date: "2024-08-28", songs: [
       { name: "雑踏、僕らの街（喧嚣、我们的街）", duration: 230 }, { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", duration: 226 },
       { name: "空の箱（空之箱）", duration: 240 }, { name: "声なき魚（无声之鱼）", duration: 235 },
       { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", duration: 222 }, { name: "心象的フラクタル（心象的分形）", duration: 218 },
       { name: "空白とカタルシス（空白与宣泄）", duration: 228 }, { name: "運命の華（命运之花）", duration: 232 },
       { name: "ETERNAL FLAME 〜空の箱〜（永恒之火～空之箱～）", duration: 245 }, { name: "闇に溶けてく（溶入黑暗）", duration: 224 } ] },
    { name: "名もなき何もかも（无名的万物）", type: "单曲", date: "2023-07-26", songs: [ { name: "名もなき何もかも（无名的万物）", duration: 214 } ] },
    { name: "気鬱、白濁す（郁结、浑浊）", type: "单曲", date: "2023-08-30", songs: [ { name: "気鬱、白濁す（郁结、浑浊）", duration: 206 } ] },
    { name: "爆ぜて咲く（绽裂盛开）", type: "单曲", date: "2023-10-25", songs: [ { name: "爆ぜて咲く（绽裂盛开）", duration: 212 } ] },
    { name: "極私的極彩色アンサー（极私的极彩色答案）", type: "单曲", date: "2023-12-20", songs: [ { name: "極私的極彩色アンサー（极私的极彩色答案）", duration: 205 } ] },
    { name: "運命に賭けたい論理（想以命运为赌注的道理）", type: "单曲", date: "2024-02-28", songs: [ { name: "運命に賭けたい論理（想以命运为赌注的道理）", duration: 208 } ] },
    { name: "雑踏、僕らの街（喧嚣、我们的街）", type: "单曲", date: "2024-05-22", songs: [ { name: "雑踏、僕らの街（喧嚣、我们的街）", duration: 230 } ] },
    { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", type: "单曲", date: "2024-05-22", songs: [ { name: "誰にもなれない私だから（因为我是谁都成为不了的我）", duration: 226 } ] },
    { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", type: "单曲", date: "2024-06-19", songs: [ { name: "視界の隅 朽ちる音（视野一隅 腐朽之音）", duration: 222 } ] },
    { name: "空白とカタルシス（空白与宣泄）", type: "单曲", date: "2024-07-10", songs: [ { name: "空白とカタルシス（空白与宣泄）", duration: 228 } ] },
    { name: "ダレモ（谁）", type: "单曲", date: "2025-05-28", songs: [ { name: "ダレモ（谁）", duration: 218 } ] },
    { name: "薄采ディスプレイ（淡彩显示屏）", type: "单曲", date: "2025-09-24", songs: [ { name: "薄采ディスプレイ（淡彩显示屏）", duration: 220 } ] },
    { name: "小指立てませんか（要立小指吗）", type: "EP", date: "2025-11-19", songs: [
       { name: "碧いif（蔚蓝的 if）", duration: 215 }, { name: "無知のち私（无知之后的我）", duration: 208 },
       { name: "渇く、憂う（干渴、忧愁）", duration: 212 }, { name: "吹き消した灯火（吹灭的灯火）", duration: 205 },
       { name: "生きて生きてゆく（活下去 活下去）", duration: 220 }, { name: "臆病な白夜（胆小的白夜）", duration: 218 }, { name: "最期の禱り（最后的祈祷）", duration: 230 } ] },
    { name: "全部をさらして生きてやる（豁出一切活下去）", type: "EP", date: "2025-12-17", songs: [
       { name: "もう何もいらない未来（什么都不再需要的未来）", duration: 226 }, { name: "命をくれよ（把命给我）", duration: 222 },
       { name: "arrow", duration: 218 }, { name: "薊の薔薇（薊之蔷薇）", duration: 228 } ] },
      { name: "暁の葉", type: "专辑", date: "2026-12-25", songs: [
      { name: "暁の葉（拂晓之叶）", duration: 240 }, { name: "霜の渓（霜之溪）", duration: 209 }, { name: "浴衣の響き（浴衣之回响）", duration: 181 },
      { name: "風の岬（风之海角）", duration: 238 }, { name: "岬の真夏（海角之盛夏）", duration: 164 }, { name: "霞の夕暮れ（霞之黄昏）", duration: 314 },
      { name: "縁側の凪（檐廊之风平浪静）", duration: 238 }, { name: "調べの静か（静谧的曲调）", duration: 207 }, { name: "約束の夜（约定之夜）", duration: 237 } ] },
    { name: "蝉の季節", type: "EP", date: "2027-12-11", songs: [
      { name: "蝉の季節（蝉之季节）", duration: 148 }, { name: "空の真夏（天空之盛夏）", duration: 173 }, { name: "朝霧の夜明け（晨雾之黎明）", duration: 216 },
      { name: "体育祭の冬晴れ（体育祭之冬日晴空）", duration: 205 } ] },
    { name: "氷の砂", type: "EP", date: "2028-09-11", songs: [
      { name: "氷の砂（冰之沙）", duration: 122 }, { name: "冬休みの縁側（寒假之檐廊）", duration: 233 }, { name: "空の朝焼け（天空之朝霞）", duration: 218 },
      { name: "給食の障子（午餐之障子）", duration: 221 }, { name: "歌の帰り道（歌之归途）", duration: 227 }, { name: "街の部活（街之社团）", duration: 218 } ] },
    { name: "砂の街", type: "EP", date: "2029-09-17", songs: [
      { name: "砂の街（沙之街）", duration: 217 }, { name: "残響の灯り（残响之灯火）", duration: 212 }, { name: "静かの文化祭（静谧文化祭）", duration: 143 },
      { name: "霧の朝霧（雾之晨雾）", duration: 195 } ] },
    { name: "川の夜", type: "EP", date: "2030-08-24", songs: [
      { name: "川の夜（河之夜）", duration: 258 }, { name: "湖の霜（湖之霜）", duration: 233 }, { name: "灯りの木霊（灯火之树魂）", duration: 216 },
      { name: "紅葉の小さな（微小的的红叶）", duration: 180 } ] },
    { name: "教室の星屑", type: "EP", date: "2031-08-30", songs: [
      { name: "教室の星屑（教室之星屑）", duration: 243 }, { name: "満月の真夏（满月之盛夏）", duration: 232 }, { name: "暁の雪（拂晓之雪）", duration: 138 },
      { name: "卒業の夏休み（毕业之暑假）", duration: 248 } ] },
    { name: "虹の雨音", type: "专辑", date: "2032-08-29", songs: [
      { name: "虹の雨音（彩虹之雨声）", duration: 224 }, { name: "教室の朧月（教室之胧月）", duration: 222 }, { name: "木漏れ日の花火（林间光斑之花火）", duration: 151 },
      { name: "霞の夜（霞之夜）", duration: 202 }, { name: "障子の教室（障子之教室）", duration: 217 }, { name: "冬晴れの花（冬日晴空之花）", duration: 183 },
      { name: "心の光景（心之光景）", duration: 239 }, { name: "放課後の流れ星（放学后之流星）", duration: 255 }, { name: "心の雨音（心之雨声）", duration: 239 },
      { name: "滝の向日葵（瀑布之向日葵）", duration: 203 } ] },
    { name: "根の花火", type: "专辑", date: "2033-06-14", songs: [
      { name: "根の花火（根之花火）", duration: 203 }, { name: "窓の夜風（窗之夜风）", duration: 300 }, { name: "夕焼けの桜（晚霞之樱花）", duration: 249 },
      { name: "風の霞（风之霞）", duration: 151 }, { name: "葉の秋風（叶之秋风）", duration: 203 }, { name: "若葉の文化祭（新叶之文化祭）", duration: 206 },
      { name: "想いの遠い（遥远的思念）", duration: 226 }, { name: "落ち葉の凪（落叶之风平浪静）", duration: 207 }, { name: "季節の蝉（季节之蝉）", duration: 266 },
      { name: "空の渓（天空之溪）", duration: 238 } ] },
    { name: "雲の春休み", type: "专辑", date: "2034-07-02", songs: [
      { name: "雲の春休み（云之春假）", duration: 230 }, { name: "夕霧の落ち葉（暮霭之落叶）", duration: 233 }, { name: "岬の霜（海角之霜）", duration: 219 },
      { name: "蕾の紅葉（花苞之红叶）", duration: 239 }, { name: "砂の夜（沙之夜）", duration: 224 }, { name: "虹の街（彩虹之街）", duration: 288 },
      { name: "浴衣の夏祭り（浴衣之夏日祭）", duration: 231 }, { name: "季節の岬（季节之海角）", duration: 238 }, { name: "春休みの朝焼け（春假之朝霞）", duration: 212 } ] },
    { name: "朧月の氷", type: "单曲", date: "2035-06-18", songs: [
      { name: "朧月の氷（胧月之冰）", duration: 201 } ] },
    { name: "渓の朝", type: "EP", date: "2036-05-15", songs: [
      { name: "渓の朝（溪之晨）", duration: 238 }, { name: "陽だまりの月（暖阳之月）", duration: 208 }, { name: "青いの岸（湛蓝岸）", duration: 207 } ] },
    { name: "虹の蝉", type: "专辑", date: "2037-04-05", songs: [
      { name: "虹の蝉（彩虹之蝉）", duration: 233 }, { name: "雨音の石（雨声之石）", duration: 245 }, { name: "川の月（河之月）", duration: 191 },
      { name: "響きの夕焼け（回响之晚霞）", duration: 233 }, { name: "星雲の微笑（星云之微笑）", duration: 205 }, { name: "響きの満月（回响之满月）", duration: 203 },
      { name: "障子の風（障子之风）", duration: 232 }, { name: "記憶の秋風（记忆之秋风）", duration: 216 }, { name: "雨の唄（雨之歌谣）", duration: 205 },
      { name: "木漏れ日の声（林间光斑之声）", duration: 213 } ] },
    { name: "潮騒の浜", type: "EP", date: "2038-05-07", songs: [
      { name: "潮騒の浜（潮鸣之海滨）", duration: 172 }, { name: "夢の言葉（梦之言语）", duration: 218 }, { name: "雪の流星（雪之流星）", duration: 155 },
      { name: "微笑の光（微笑之光）", duration: 140 }, { name: "氷の落ち葉（冰之落叶）", duration: 217 }, { name: "夜明けの若葉（黎明之新叶）", duration: 207 } ] },
    { name: "若葉の風", type: "专辑", date: "2039-03-18", songs: [
      { name: "若葉の風（新叶之风）", duration: 209 }, { name: "体育祭の虹（体育祭之彩虹）", duration: 199 }, { name: "木漏れ日の夕暮れ（林间光斑之黄昏）", duration: 181 },
      { name: "木漏れ日の岸（林间光斑之岸）", duration: 204 }, { name: "響きの影（回响之影）", duration: 176 }, { name: "雲の自転車（云之单车）", duration: 220 },
      { name: "流れ星の木霊（流星之树魂）", duration: 136 }, { name: "土の雪（土之雪）", duration: 201 } ] },
    { name: "夜風の眩しい", type: "单曲", date: "2040-01-22", songs: [
      { name: "夜風の眩しい（耀眼的夜风）", duration: 140 } ] },
    { name: "帰り道の優しい", type: "专辑", date: "2040-12-29", songs: [
      { name: "帰り道の優しい（温柔的归途）", duration: 216 }, { name: "眩しいの星（耀眼星）", duration: 121 }, { name: "秋風の灯り（秋风之灯火）", duration: 317 },
      { name: "星の満月（星之满月）", duration: 217 }, { name: "影の若葉（影之新叶）", duration: 225 }, { name: "追憶の声（追忆之声）", duration: 240 },
      { name: "光の音色（光之音色）", duration: 217 } ] },
    { name: "想いの花", type: "单曲", date: "2042-02-14", songs: [
      { name: "想いの花（思念之花）", duration: 238 } ] },
    { name: "空の追憶", type: "专辑", date: "2043-01-17", songs: [
      { name: "空の追憶（天空之追忆）", duration: 217 }, { name: "文化祭の音色（文化祭之音色）", duration: 223 }, { name: "陽だまりの教室（暖阳之教室）", duration: 227 },
      { name: "帰り道の波音（归途之潮声）", duration: 346 }, { name: "空の眩しい（耀眼的天空）", duration: 188 }, { name: "砂の畳（沙之榻榻米）", duration: 209 },
      { name: "唄の静か（静谧的歌谣）", duration: 209 }, { name: "凪の風鈴（风平浪静之风铃）", duration: 128 }, { name: "体育祭の夏祭り（体育祭之夏日祭）", duration: 373 },
      { name: "石の時（石之时光）", duration: 250 }, { name: "砂の湖（沙之湖）", duration: 253 } ] },
    { name: "滝の光景", type: "EP", date: "2043-11-14", songs: [
      { name: "滝の光景（瀑布之光景）", duration: 245 }, { name: "遠いの凪（遥远风平浪静）", duration: 227 }, { name: "花の追憶（花之追忆）", duration: 232 } ] },
    { name: "霜の残照", type: "专辑", date: "2044-12-19", songs: [
      { name: "霜の残照（霜之残照）", duration: 207 }, { name: "心音の縁側（心跳之檐廊）", duration: 241 }, { name: "星屑の空（星屑之天空）", duration: 206 },
      { name: "夢の夕暮れ（梦之黄昏）", duration: 234 }, { name: "銀河の雨音（银河之雨声）", duration: 202 }, { name: "春休みの霜（春假之霜）", duration: 353 },
      { name: "唄の黄昏（歌谣之黄昏）", duration: 244 }, { name: "部活の透明（透明的社团）", duration: 247 }, { name: "波音の光景（潮声之光景）", duration: 206 },
      { name: "浜の歌（海滨之歌）", duration: 286 }, { name: "流星の冬休み（流星之寒假）", duration: 199 } ] },
    { name: "渓の湖", type: "专辑", date: "2045-11-02", songs: [
      { name: "渓の湖（溪之湖）", duration: 212 }, { name: "夜明けの枝（黎明之枝）", duration: 237 }, { name: "虹の朝霧（彩虹之晨雾）", duration: 238 },
      { name: "夕焼けの雪（晚霞之雪）", duration: 206 }, { name: "給食の葉（午餐之叶）", duration: 208 }, { name: "紅葉の修学旅行（红叶之修学旅行）", duration: 212 },
      { name: "海の蕾（海之花苞）", duration: 266 }, { name: "夏休みの放課後（暑假之放学后）", duration: 256 }, { name: "時の木漏れ日（时光之林间光斑）", duration: 216 },
      { name: "花火の風（花火之风）", duration: 223 } ] },
    { name: "若葉の響き", type: "专辑", date: "2046-09-01", songs: [
      { name: "若葉の響き（新叶之回响）", duration: 197 }, { name: "枝の花火（枝之花火）", duration: 224 }, { name: "水面の霞（水面之霞）", duration: 238 },
      { name: "蕾の根（花苞之根）", duration: 198 }, { name: "花火の修学旅行（花火之修学旅行）", duration: 240 }, { name: "夜風の根（夜风之根）", duration: 198 },
      { name: "調べの青い（湛蓝的曲调）", duration: 219 }, { name: "朝の残照（晨之残照）", duration: 214 } ] },
    { name: "雨音の雲", type: "EP", date: "2047-08-16", songs: [
      { name: "雨音の雲（雨声之云）", duration: 128 }, { name: "卒業の残響（毕业之残响）", duration: 240 }, { name: "空の時（天空之时光）", duration: 212 },
      { name: "葉の春休み（叶之春假）", duration: 232 }, { name: "朝の黄昏（晨之黄昏）", duration: 185 }, { name: "星空の小さな（微小的的星空）", duration: 231 } ] },
    { name: "季節の朝", type: "单曲", date: "2048-08-24", songs: [
      { name: "季節の朝（季节之晨）", duration: 244 } ] },
    { name: "星の制服", type: "单曲", date: "2049-08-27", songs: [
      { name: "星の制服（星之制服）", duration: 211 } ] },
    { name: "夢の制服", type: "EP", date: "2050-08-03", songs: [
      { name: "夢の制服（梦之制服）", duration: 136 }, { name: "時の滝（时光之瀑布）", duration: 232 }, { name: "光景の川（光景之河）", duration: 198 },
      { name: "満月の朝焼け（满月之朝霞）", duration: 236 } ] },
    ],
  "Black Stones": [
    { name: "BLAST", type: "专辑", date: "2006-06-21", songs: [
       { name: "Rose", duration: 240 }, { name: "黒い涙（黑色的泪）", duration: 265 },
       { name: "Zero", duration: 210 }, { name: "Lucy", duration: 225 }, { name: "Shadow of the Sun", duration: 250 } ] },
    { name: "Rose", type: "单曲", date: "2006-01-01", songs: [ { name: "Rose", duration: 240 } ] },
    { name: "黒い涙（黑色的泪）", type: "单曲", date: "2006-03-22", songs: [ { name: "黒い涙（黑色的泪）", duration: 265 } ] },
      { name: "Wires Silver", type: "单曲", date: "2026-05-15", songs: [
      { name: "Wires Silver（电线的银色）", duration: 222 } ] },
    { name: "Harbor Kite", type: "单曲", date: "2027-06-15", songs: [
      { name: "Harbor Kite（港湾的风筝）", duration: 240 } ] },
    { name: "Ice Twilight", type: "专辑", date: "2028-04-28", songs: [
      { name: "Ice Twilight（冰的暮色）", duration: 414 }, { name: "Garden Lantern（花园的灯笼）", duration: 290 }, { name: "Breeze Anchor（微风的锚）", duration: 241 },
      { name: "Ashes Pond（灰烬的池塘）", duration: 438 }, { name: "Halo Field（光晕的原野）", duration: 261 }, { name: "Cloud Winter（云的冬天）", duration: 190 },
      { name: "Static Dawn（静电的黎明）", duration: 264 }, { name: "Song Garden（歌的花园）", duration: 249 }, { name: "Bloom Dawn（绽放的黎明）", duration: 259 },
      { name: "Tide Mist（潮汐的薄雾）", duration: 191 }, { name: "Motion Gravel（律动的砾石）", duration: 233 } ] },
    { name: "Veil Petal", type: "EP", date: "2029-04-13", songs: [
      { name: "Veil Petal（帷幕的花瓣）", duration: 240 }, { name: "Asphalt Stone（柏油的石头）", duration: 291 }, { name: "Harbor Dust（港湾的尘埃）", duration: 266 },
      { name: "Amber Petal（琥珀的花瓣）", duration: 253 }, { name: "Roof Harbor（屋顶的港湾）", duration: 195 } ] },
    { name: "Lantern Wish", type: "专辑", date: "2030-04-05", songs: [
      { name: "Lantern Wish（灯笼的愿望）", duration: 178 }, { name: "Meridian Thunder（子午线的雷）", duration: 293 }, { name: "Meridian Garden（子午线的花园）", duration: 238 },
      { name: "Daylight Ice（日光的冰）", duration: 247 }, { name: "Silver Harbor（银色的港湾）", duration: 223 }, { name: "Neon Song（霓虹的歌）", duration: 236 },
      { name: "Static Cliff（静电的断崖）", duration: 288 }, { name: "Cloud Broken（云的破碎）", duration: 261 }, { name: "Midnight Nightfall（午夜的夜幕）", duration: 245 },
      { name: "Ice Blanket（冰的绒毯）", duration: 142 } ] },
    { name: "Field Flame", type: "专辑", date: "2031-03-09", songs: [
      { name: "Field Flame（原野的火焰）", duration: 259 }, { name: "Motion Song（律动的歌）", duration: 243 }, { name: "Whisper Tree（低语的树）", duration: 224 },
      { name: "Slope Dusk（斜坡的薄暮）", duration: 264 }, { name: "Crystal Silk（水晶的丝绸）", duration: 184 }, { name: "Golden Rust（金色的锈迹）", duration: 440 },
      { name: "Velvet Pulse（天鹅绒的脉冲）", duration: 239 }, { name: "Satellite Static（卫星的静电）", duration: 241 } ] },
    { name: "Moss Cloud", type: "专辑", date: "2032-05-14", songs: [
      { name: "Moss Cloud（青苔的云）", duration: 197 }, { name: "Wave Quiet（波浪的寂静）", duration: 233 }, { name: "Satellite Fog（卫星的雾）", duration: 235 },
      { name: "Quiet Thunder（寂静的雷）", duration: 227 }, { name: "Stream Void（溪流的虚空）", duration: 177 }, { name: "Diamond Hill（钻石的山丘）", duration: 233 },
      { name: "Hill Spark（山丘的火花）", duration: 207 }, { name: "Marrow Amber（骨髓的琥珀）", duration: 265 }, { name: "Hill Frost（山丘的霜）", duration: 254 },
      { name: "Signal Sea（信号的海）", duration: 234 } ] },
    { name: "Breeze Shadow", type: "专辑", date: "2033-04-08", songs: [
      { name: "Breeze Shadow（微风的影子）", duration: 248 }, { name: "Shell Lake（贝壳的湖）", duration: 220 }, { name: "Garden Broken（花园的破碎）", duration: 227 },
      { name: "Wood Twilight（树林的暮色）", duration: 225 }, { name: "Field Storm（原野的风暴）", duration: 138 }, { name: "Fable Path（寓言的小径）", duration: 325 },
      { name: "Blossom Rain（花开的雨）", duration: 240 }, { name: "Ocean Sea（海洋的海）", duration: 236 }, { name: "Velvet Window（天鹅绒的窗）", duration: 246 },
      { name: "Pulse Snow（脉冲的雪）", duration: 238 }, { name: "Wind Petal（风的花瓣）", duration: 255 } ] },
    { name: "Circle Rust", type: "EP", date: "2034-03-12", songs: [
      { name: "Circle Rust（圆圈的锈迹）", duration: 239 }, { name: "Iron Frost（铁的霜）", duration: 239 }, { name: "Trail Snow（足迹的雪）", duration: 230 },
      { name: "Echo Nest（回声的巢）", duration: 181 }, { name: "Star River（星的河流）", duration: 293 }, { name: "Breeze Nest（微风的巢）", duration: 257 } ] },
    { name: "Meridian Diamond", type: "EP", date: "2035-03-21", songs: [
      { name: "Meridian Diamond（子午线的钻石）", duration: 265 }, { name: "Slope Smoke（斜坡的烟雾）", duration: 138 }, { name: "Beacon Spark（灯塔的火花）", duration: 247 },
      { name: "Garden Quartz（花园的石英）", duration: 264 }, { name: "Thunder Compass（雷的罗盘）", duration: 222 }, { name: "Forest Veil（森林的帷幕）", duration: 241 } ] },
    { name: "Quiet Sand", type: "EP", date: "2035-12-25", songs: [
      { name: "Quiet Sand（寂静的沙）", duration: 244 }, { name: "Undertow Ivory（暗流的象牙）", duration: 285 }, { name: "Fleet Lake（舰队的湖）", duration: 225 },
      { name: "Pine Beacon（松的灯塔）", duration: 215 }, { name: "Highway Silk（公路的丝绸）", duration: 193 }, { name: "Amber Summer（琥珀的夏天）", duration: 237 } ] },
    { name: "Ballet Kite", type: "专辑", date: "2036-12-10", songs: [
      { name: "Ballet Kite（芭蕾的风筝）", duration: 228 }, { name: "Feather Ember（羽毛的余烬）", duration: 244 }, { name: "Crescent Song（新月的歌）", duration: 258 },
      { name: "Storm Vine（风暴的藤蔓）", duration: 247 }, { name: "Path Signal（小径的信号）", duration: 134 }, { name: "Quartz Snow（石英的雪）", duration: 233 },
      { name: "Harbor Haze（港湾的轻雾）", duration: 162 }, { name: "Ocean Daylight（海洋的日光）", duration: 219 } ] },
    { name: "Road Wires", type: "专辑", date: "2038-02-19", songs: [
      { name: "Road Wires（道路的电线）", duration: 249 }, { name: "Road Broken（道路的破碎）", duration: 284 }, { name: "Vapor Signal（雾霭的信号）", duration: 224 },
      { name: "Crystal Window（水晶的窗）", duration: 254 }, { name: "Tide Faded（潮汐的褪色）", duration: 266 }, { name: "Leaf Storm（叶的风暴）", duration: 220 },
      { name: "Paperplane Tower（纸飞机的塔）", duration: 274 }, { name: "Crystal Highway（水晶的公路）", duration: 245 }, { name: "Coral Quiet（珊瑚的寂静）", duration: 144 },
      { name: "Pond Marrow（池塘的骨髓）", duration: 200 } ] },
    { name: "Lake Dust", type: "EP", date: "2039-01-07", songs: [
      { name: "Lake Dust（湖的尘埃）", duration: 231 }, { name: "Shadow Canvas（影子的画布）", duration: 241 }, { name: "Undertow Cinder（暗流的炭烬）", duration: 226 },
      { name: "Winter Star（冬天的星）", duration: 193 }, { name: "Glass Mirrors（玻璃的镜子）", duration: 220 }, { name: "Winter Nightfall（冬天的夜幕）", duration: 224 } ] },
    { name: "Tree Window", type: "EP", date: "2040-01-02", songs: [
      { name: "Tree Window（树的窗）", duration: 249 }, { name: "Pine Dust（松的尘埃）", duration: 280 }, { name: "Static Flame（静电的火焰）", duration: 332 },
      { name: "Forest Motion（森林的律动）", duration: 248 }, { name: "Summer Concrete（夏天的水泥）", duration: 227 }, { name: "Bloom Harbor（绽放的港湾）", duration: 198 } ] },
    { name: "Ocean Road", type: "EP", date: "2040-10-14", songs: [
      { name: "Ocean Road（海洋的道路）", duration: 219 }, { name: "Pine Stone（松的石头）", duration: 171 }, { name: "Winter Ashes（冬天的灰烬）", duration: 230 },
      { name: "Overcast Paperplane（阴云的纸飞机）", duration: 250 } ] },
    { name: "Faded Quartz", type: "专辑", date: "2041-09-29", songs: [
      { name: "Faded Quartz（褪色的石英）", duration: 222 }, { name: "Drift Garden（漂流的花园）", duration: 251 }, { name: "Star Thaw（星的融雪）", duration: 256 },
      { name: "Hollow Satellite（空洞的卫星）", duration: 335 }, { name: "Neon Twilight（霓虹的暮色）", duration: 368 }, { name: "Daybreak Fable（黎明的寓言）", duration: 224 },
      { name: "Snow Pulse（雪的脉冲）", duration: 240 } ] },
    { name: "Compass Glass", type: "EP", date: "2042-10-17", songs: [
      { name: "Compass Glass（罗盘的玻璃）", duration: 179 }, { name: "Moss Velvet（青苔的天鹅绒）", duration: 247 }, { name: "Bloom Ashes（绽放的灰烬）", duration: 240 } ] },
    { name: "Hill Silence", type: "单曲", date: "2043-10-06", songs: [
      { name: "Hill Silence（山丘的沉寂）", duration: 260 } ] },
    { name: "Ocean Frost", type: "EP", date: "2044-09-29", songs: [
      { name: "Ocean Frost（海洋的霜）", duration: 224 }, { name: "Echo Glass（回声的玻璃）", duration: 253 }, { name: "Beacon Canvas（灯塔的画布）", duration: 248 },
      { name: "Daybreak Pulse（黎明的脉冲）", duration: 258 } ] },
    { name: "Fleet Bloom", type: "EP", date: "2045-10-08", songs: [
      { name: "Fleet Bloom（舰队的绽放）", duration: 228 }, { name: "Frost Wind（霜的风）", duration: 154 }, { name: "Compass Flood（罗盘的洪流）", duration: 221 },
      { name: "Feather Pebble（羽毛的卵石）", duration: 221 } ] },
    { name: "Asphalt Neon", type: "EP", date: "2046-07-30", songs: [
      { name: "Asphalt Neon（柏油的霓虹）", duration: 144 }, { name: "Shore Blossom（岸边的花开）", duration: 264 }, { name: "River Iron（河流的铁）", duration: 217 },
      { name: "Glimmer Journey（微光的旅程）", duration: 259 }, { name: "Cloud Fable（云的寓言）", duration: 140 } ] },
    { name: "Cloud Desert", type: "EP", date: "2047-09-13", songs: [
      { name: "Cloud Desert（云的荒原）", duration: 136 }, { name: "Meadow Crystal（草地的水晶）", duration: 223 }, { name: "Ocean Smoke（海洋的烟雾）", duration: 232 } ] },
    { name: "Asphalt Carousel", type: "EP", date: "2048-08-29", songs: [
      { name: "Asphalt Carousel（柏油的旋转木马）", duration: 244 }, { name: "Flame Wind（火焰的风）", duration: 262 }, { name: "Sky Cinder（天空的炭烬）", duration: 237 } ] },
    { name: "Glass Nest", type: "EP", date: "2049-06-16", songs: [
      { name: "Glass Nest（玻璃的巢）", duration: 251 }, { name: "Void Garden（虚空的花园）", duration: 262 }, { name: "Kite Steam（风筝的蒸汽）", duration: 222 } ] },
    { name: "Carousel Sea", type: "专辑", date: "2050-05-28", songs: [
      { name: "Carousel Sea（旋转木马的海）", duration: 265 }, { name: "Asphalt Nightfall（柏油的夜幕）", duration: 264 }, { name: "Shore Sea（岸边的海）", duration: 249 },
      { name: "Paperplane Heart（纸飞机的心）", duration: 280 }, { name: "Pine Meadow（松的草地）", duration: 202 }, { name: "Leaf Roof（叶的屋顶）", duration: 233 },
      { name: "Ballet Petal（芭蕾的花瓣）", duration: 254 } ] },
    ],
  "Trapnest": [
    { name: "Trapnest", type: "专辑", date: "2005-11-16", songs: [
       { name: "Glamorous Sky", duration: 258 }, { name: "Trust", duration: 235 },
       { name: "Wish", duration: 240 }, { name: "Starless Night", duration: 250 }, { name: "Let's Dance", duration: 220 } ] },
    { name: "Glamorous Sky", type: "单曲", date: "2005-09-07", songs: [ { name: "Glamorous Sky", duration: 258 } ] },
      { name: "Steam Concrete", type: "专辑", date: "2026-06-22", songs: [
      { name: "Steam Concrete（蒸汽的水泥）", duration: 262 }, { name: "Spark Glass（火花的玻璃）", duration: 247 }, { name: "Wood Ember（树林的余烬）", duration: 257 },
      { name: "Fleet Veil（舰队的帷幕）", duration: 198 }, { name: "Spark Motel（火花的汽车旅馆）", duration: 248 }, { name: "Fleet Breeze（舰队的微风）", duration: 188 },
      { name: "Nest Blanket（巢的绒毯）", duration: 265 }, { name: "Spark Journey（火花的旅程）", duration: 139 }, { name: "Beacon Twilight（灯塔的暮色）", duration: 331 } ] },
    { name: "Blanket Ballet", type: "专辑", date: "2027-05-05", songs: [
      { name: "Blanket Ballet（绒毯的芭蕾）", duration: 252 }, { name: "Bloom Sand（绽放的沙）", duration: 249 }, { name: "Pebble Ivory（卵石的象牙）", duration: 140 },
      { name: "Whisper Carousel（低语的旋转木马）", duration: 233 }, { name: "Mirrors Grain（镜子的颗粒）", duration: 271 }, { name: "Glass Fog（玻璃的雾）", duration: 246 },
      { name: "Ballet Broken（芭蕾的破碎）", duration: 152 }, { name: "Garden Canvas（花园的画布）", duration: 258 }, { name: "Garden Roof（花园的屋顶）", duration: 278 },
      { name: "Circle Amber（圆圈的琥珀）", duration: 219 } ] },
    { name: "Window Stone", type: "单曲", date: "2028-06-16", songs: [
      { name: "Window Stone（窗的石头）", duration: 387 } ] },
    { name: "Static Daylight", type: "专辑", date: "2029-04-26", songs: [
      { name: "Static Daylight（静电的日光）", duration: 237 }, { name: "Quiet Velvet（寂静的天鹅绒）", duration: 176 }, { name: "Snow River（雪的河流）", duration: 328 },
      { name: "Cliff Signal（断崖的信号）", duration: 225 }, { name: "Loam Smoke（沃土的烟雾）", duration: 405 }, { name: "Snow Overcast（雪的阴云）", duration: 252 },
      { name: "River Asphalt（河流的柏油）", duration: 255 } ] },
    { name: "Moss Cinder", type: "专辑", date: "2030-05-15", songs: [
      { name: "Moss Cinder（青苔的炭烬）", duration: 251 }, { name: "Shadow Sky（影子的天空）", duration: 235 }, { name: "Pulse Rain（脉冲的雨）", duration: 222 },
      { name: "Signal Canvas（信号的画布）", duration: 228 }, { name: "Quartz Forest（石英的森林）", duration: 251 }, { name: "Asphalt Ember（柏油的余烬）", duration: 219 },
      { name: "Motel Marrow（汽车旅馆的骨髓）", duration: 189 }, { name: "Tree Whisper（树的低语）", duration: 220 }, { name: "Plain Road（平原的道路）", duration: 231 },
      { name: "Roof Frost（屋顶的霜）", duration: 238 } ] },
    { name: "Concrete Path", type: "单曲", date: "2031-05-14", songs: [
      { name: "Concrete Path（水泥的小径）", duration: 191 } ] },
    { name: "Fog Velvet", type: "专辑", date: "2032-04-11", songs: [
      { name: "Fog Velvet（雾的天鹅绒）", duration: 263 }, { name: "Paperplane Glow（纸飞机的辉光）", duration: 135 }, { name: "Hollow Window（空洞的窗）", duration: 238 },
      { name: "Ashes Void（灰烬的虚空）", duration: 135 }, { name: "Kite Bloom（风筝的绽放）", duration: 264 }, { name: "Nest Quartz（巢的石英）", duration: 260 },
      { name: "Pine Trail（松的足迹）", duration: 243 } ] },
    { name: "Roof Tide", type: "专辑", date: "2033-03-17", songs: [
      { name: "Roof Tide（屋顶的潮汐）", duration: 264 }, { name: "Meadow Amber（草地的琥珀）", duration: 230 }, { name: "Tree Stream（树的溪流）", duration: 229 },
      { name: "Flame Song（火焰的歌）", duration: 226 }, { name: "Twilight Overcast（暮色的阴云）", duration: 263 }, { name: "Sea Fleet（海的舰队）", duration: 166 },
      { name: "Anchor Ridge（锚的山脊）", duration: 247 }, { name: "Ashes Quartz（灰烬的石英）", duration: 447 }, { name: "Cinder Shadow（炭烬的影子）", duration: 134 },
      { name: "Roof Beacon（屋顶的灯塔）", duration: 254 }, { name: "Wires Frost（电线的霜）", duration: 218 } ] },
    { name: "Ridge Crystal", type: "专辑", date: "2034-01-24", songs: [
      { name: "Ridge Crystal（山脊的水晶）", duration: 267 }, { name: "Leaf Ashes（叶的灰烬）", duration: 224 }, { name: "Moss Vapor（青苔的雾霭）", duration: 217 },
      { name: "Satellite Path（卫星的小径）", duration: 364 }, { name: "Loam Ashes（沃土的灰烬）", duration: 345 }, { name: "Wires Sun（电线的太阳）", duration: 237 },
      { name: "Window Nightfall（窗的夜幕）", duration: 174 }, { name: "Pond Moss（池塘的青苔）", duration: 261 } ] },
    { name: "Shell Meridian", type: "专辑", date: "2035-02-07", songs: [
      { name: "Shell Meridian（贝壳的子午线）", duration: 230 }, { name: "Crystal Garden（水晶的花园）", duration: 248 }, { name: "Overcast Concrete（阴云的水泥）", duration: 430 },
      { name: "Stream Flame（溪流的火焰）", duration: 230 }, { name: "Harbor Static（港湾的静电）", duration: 351 }, { name: "Flame Meadow（火焰的草地）", duration: 213 },
      { name: "Heart Winter（心的冬天）", duration: 243 }, { name: "Canvas Pond（画布的池塘）", duration: 252 } ] },
    { name: "Lake Winter", type: "专辑", date: "2036-01-18", songs: [
      { name: "Lake Winter（湖的冬天）", duration: 176 }, { name: "Canvas Halo（画布的光晕）", duration: 232 }, { name: "Vapor Moon（雾霭的月亮）", duration: 251 },
      { name: "Stone Diamond（石头的钻石）", duration: 206 }, { name: "Shadow Field（影子的原野）", duration: 430 }, { name: "Static Valley（静电的山谷）", duration: 438 },
      { name: "Anchor Iron（锚的铁）", duration: 231 }, { name: "Midnight Cloud（午夜的云）", duration: 220 }, { name: "Ivory Faded（象牙的褪色）", duration: 258 },
      { name: "Blanket Garden（绒毯的花园）", duration: 266 }, { name: "Salt Cliff（盐的断崖）", duration: 267 } ] },
    { name: "Fleet Wood", type: "EP", date: "2037-01-20", songs: [
      { name: "Fleet Wood（舰队的树林）", duration: 135 }, { name: "Ocean Whisper（海洋的低语）", duration: 246 }, { name: "Lake Overcast（湖的阴云）", duration: 253 },
      { name: "Bloom Amber（绽放的琥珀）", duration: 438 } ] },
    { name: "Rain Ember", type: "EP", date: "2037-12-17", songs: [
      { name: "Rain Ember（雨的余烬）", duration: 267 }, { name: "Snow Loam（雪的沃土）", duration: 266 }, { name: "Tide Motel（潮汐的汽车旅馆）", duration: 296 },
      { name: "Hollow Cliff（空洞的断崖）", duration: 266 }, { name: "Beacon Loam（灯塔的沃土）", duration: 227 } ] },
    { name: "Shallow Ocean", type: "专辑", date: "2039-01-17", songs: [
      { name: "Shallow Ocean（浅滩的海洋）", duration: 161 }, { name: "Breeze Storm（微风的风暴）", duration: 255 }, { name: "Silver Frost（银色的霜）", duration: 245 },
      { name: "Pond Crystal（池塘的水晶）", duration: 220 }, { name: "Haze River（轻雾的河流）", duration: 232 }, { name: "Plain Motion（平原的律动）", duration: 249 },
      { name: "Crystal Dawn（水晶的黎明）", duration: 190 }, { name: "Thaw Cloud（融雪的云）", duration: 251 } ] },
    { name: "Diamond Echo", type: "专辑", date: "2039-12-26", songs: [
      { name: "Diamond Echo（钻石的回声）", duration: 278 }, { name: "Desert Motel（荒原的汽车旅馆）", duration: 244 }, { name: "Twilight Ocean（暮色的海洋）", duration: 290 },
      { name: "Journey Fable（旅程的寓言）", duration: 267 }, { name: "Coral Signal（珊瑚的信号）", duration: 228 }, { name: "Asphalt Soil（柏油的土壤）", duration: 220 },
      { name: "Daybreak Cloud（黎明的云）", duration: 292 }, { name: "Silk Pebble（丝绸的卵石）", duration: 286 }, { name: "Salt Ashes（盐的灰烬）", duration: 224 },
      { name: "Stone Mirrors（石头的镜子）", duration: 454 }, { name: "Breeze Vine（微风的藤蔓）", duration: 267 } ] },
    { name: "Golden Paperplane", type: "专辑", date: "2040-10-14", songs: [
      { name: "Golden Paperplane（金色的纸飞机）", duration: 206 }, { name: "Shell Hill（贝壳的山丘）", duration: 262 }, { name: "Shell Desert（贝壳的荒原）", duration: 280 },
      { name: "Salt Golden（盐的金色）", duration: 242 }, { name: "Beacon Daybreak（灯塔的黎明）", duration: 228 }, { name: "Winter Song（冬天的歌）", duration: 259 },
      { name: "Feather Spark（羽毛的火花）", duration: 291 }, { name: "Pebble Cliff（卵石的断崖）", duration: 317 }, { name: "Summer Ocean（夏天的海洋）", duration: 241 },
      { name: "Feather Ice（羽毛的冰）", duration: 226 }, { name: "Fog Valley（雾的山谷）", duration: 237 } ] },
    { name: "Wood Shell", type: "专辑", date: "2041-10-14", songs: [
      { name: "Wood Shell（树林的贝壳）", duration: 428 }, { name: "Canvas Daybreak（画布的黎明）", duration: 263 }, { name: "Golden Pine（金色的松）", duration: 247 },
      { name: "Roof Asphalt（屋顶的柏油）", duration: 227 }, { name: "Fleet Kite（舰队的风筝）", duration: 245 }, { name: "Rain Diamond（雨的钻石）", duration: 206 },
      { name: "Bloom Velvet（绽放的天鹅绒）", duration: 205 }, { name: "Satellite Flood（卫星的洪流）", duration: 262 }, { name: "Field Petal（原野的花瓣）", duration: 244 },
      { name: "Orbit Marrow（轨道的骨髓）", duration: 221 }, { name: "Smoke Moon（烟雾的月亮）", duration: 247 } ] },
    { name: "Breeze Grain", type: "EP", date: "2042-11-16", songs: [
      { name: "Breeze Grain（微风的颗粒）", duration: 272 }, { name: "Pond Sky（池塘的天空）", duration: 220 }, { name: "Halo Mist（光晕的薄雾）", duration: 267 },
      { name: "Static Kite（静电的风筝）", duration: 363 } ] },
    { name: "Breeze Signal", type: "专辑", date: "2043-11-14", songs: [
      { name: "Breeze Signal（微风的信号）", duration: 433 }, { name: "Shallow Field（浅滩的原野）", duration: 211 }, { name: "Wave Halo（波浪的光晕）", duration: 222 },
      { name: "Window Circle（窗的圆圈）", duration: 257 }, { name: "Veil Nightfall（帷幕的夜幕）", duration: 204 }, { name: "Faded Trail（褪色的足迹）", duration: 249 },
      { name: "Leaf Daybreak（叶的黎明）", duration: 268 }, { name: "Tower Star（塔的星）", duration: 243 }, { name: "Shadow Spark（影子的火花）", duration: 273 } ] },
    { name: "Blossom Blanket", type: "单曲", date: "2044-10-17", songs: [
      { name: "Blossom Blanket（花开的绒毯）", duration: 234 } ] },
    { name: "Nightfall Garden", type: "EP", date: "2045-08-21", songs: [
      { name: "Nightfall Garden（夜幕的花园）", duration: 222 }, { name: "Breeze Haze（微风的轻雾）", duration: 262 }, { name: "Sun Mirrors（太阳的镜子）", duration: 254 } ] },
    { name: "Rust Crystal", type: "EP", date: "2046-10-06", songs: [
      { name: "Rust Crystal（锈迹的水晶）", duration: 256 }, { name: "Velvet Fog（天鹅绒的雾）", duration: 249 }, { name: "Pine Stream（松的溪流）", duration: 257 },
      { name: "Midnight Shallow（午夜的浅滩）", duration: 194 } ] },
    { name: "Star Glass", type: "专辑", date: "2047-07-14", songs: [
      { name: "Star Glass（星的玻璃）", duration: 260 }, { name: "Harbor Iron（港湾的铁）", duration: 228 }, { name: "Leaf Shore（叶的岸边）", duration: 159 },
      { name: "Bloom Wind（绽放的风）", duration: 246 }, { name: "Iron Wave（铁的波浪）", duration: 250 }, { name: "Moon Echo（月亮的回声）", duration: 425 },
      { name: "Ocean Tower（海洋的塔）", duration: 149 }, { name: "Song Velvet（歌的天鹅绒）", duration: 233 } ] },
    { name: "Dawn Ice", type: "专辑", date: "2048-09-17", songs: [
      { name: "Dawn Ice（黎明的冰）", duration: 220 }, { name: "Cinder Ocean（炭烬的海洋）", duration: 227 }, { name: "Daylight Breeze（日光的微风）", duration: 247 },
      { name: "Wish Glow（愿望的辉光）", duration: 225 }, { name: "Diamond Undertow（钻石的暗流）", duration: 183 }, { name: "Forest Diamond（森林的钻石）", duration: 255 },
      { name: "Wind Satellite（风的卫星）", duration: 366 }, { name: "Paperplane Concrete（纸飞机的水泥）", duration: 225 } ] },
    { name: "Ivory Meridian", type: "专辑", date: "2049-07-22", songs: [
      { name: "Ivory Meridian（象牙的子午线）", duration: 257 }, { name: "Window Ice（窗的冰）", duration: 211 }, { name: "Wish Paperplane（愿望的纸飞机）", duration: 424 },
      { name: "Lake Satellite（湖的卫星）", duration: 231 }, { name: "Fog Garden（雾的花园）", duration: 292 }, { name: "Shore Canvas（岸边的画布）", duration: 251 },
      { name: "Sun Sky（太阳的天空）", duration: 365 }, { name: "Gravel Harbor（砾石的港湾）", duration: 238 }, { name: "Daylight Road（日光的道路）", duration: 221 } ] },
    { name: "Sea Fable", type: "专辑", date: "2050-07-12", songs: [
      { name: "Sea Fable（海的寓言）", duration: 260 }, { name: "Orbit Vapor（轨道的雾霭）", duration: 193 }, { name: "Ashes Soil（灰烬的土壤）", duration: 160 },
      { name: "Quiet Tree（寂静的树）", duration: 190 }, { name: "Moon Dust（月亮的尘埃）", duration: 283 }, { name: "Drift Wish（漂流的愿望）", duration: 254 },
      { name: "Tower Undertow（塔的暗流）", duration: 211 }, { name: "Marrow Steam（骨髓的蒸汽）", duration: 235 }, { name: "Velvet Leaf（天鹅绒的叶）", duration: 360 },
      { name: "Smoke River（烟雾的河流）", duration: 240 } ] },
    ],
  "Plasmagica": [
    { name: "Plasmagica", type: "专辑", date: "2015-08-26", songs: [
       { name: "Seabreeze", duration: 230 }, { name: "Music Start!（音乐开始！）", duration: 220 },
       { name: "愛を教えて（教会我爱）", duration: 215 } ] },
    { name: "Seabreeze", type: "单曲", date: "2015-04-22", songs: [ { name: "Seabreeze", duration: 230 } ] },
      { name: "Ivory Trail", type: "专辑", date: "2026-06-20", songs: [
      { name: "Ivory Trail（象牙的足迹）", duration: 211 }, { name: "Wish Spark（愿望的火花）", duration: 225 }, { name: "Meadow Circle（草地的圆圈）", duration: 208 },
      { name: "Cinder Lake（炭烬的湖）", duration: 425 }, { name: "Ballet Feather（芭蕾的羽毛）", duration: 378 }, { name: "Thaw Pulse（融雪的脉冲）", duration: 310 },
      { name: "Glass Flood（玻璃的洪流）", duration: 244 }, { name: "Garden Dusk（花园的薄暮）", duration: 239 }, { name: "Circle Motion（圆圈的律动）", duration: 211 } ] },
    { name: "Salt Marrow", type: "专辑", date: "2027-07-09", songs: [
      { name: "Salt Marrow（盐的骨髓）", duration: 302 }, { name: "Glimmer Heart（微光的心）", duration: 209 }, { name: "Snow Iron（雪的铁）", duration: 206 },
      { name: "Plain Concrete（平原的水泥）", duration: 215 }, { name: "Vapor Ice（雾霭的冰）", duration: 242 }, { name: "Motel Silver（汽车旅馆的银色）", duration: 218 },
      { name: "Crescent Canvas（新月的画布）", duration: 217 }, { name: "Path Undertow（小径的暗流）", duration: 244 }, { name: "Rust Pulse（锈迹的脉冲）", duration: 148 },
      { name: "Window Dust（窗的尘埃）", duration: 233 }, { name: "Desert Wires（荒原的电线）", duration: 230 } ] },
    { name: "Midnight Slope", type: "专辑", date: "2028-04-14", songs: [
      { name: "Midnight Slope（午夜的斜坡）", duration: 227 }, { name: "Compass Desert（罗盘的荒原）", duration: 218 }, { name: "Anchor Dust（锚的尘埃）", duration: 240 },
      { name: "Drift Fable（漂流的寓言）", duration: 219 }, { name: "Petal Ember（花瓣的余烬）", duration: 179 }, { name: "Ivory Motel（象牙的汽车旅馆）", duration: 220 },
      { name: "Sundown Midnight（日落的午夜）", duration: 204 }, { name: "Fable Soil（寓言的土壤）", duration: 204 } ] },
    { name: "Cloud Ocean", type: "单曲", date: "2029-04-18", songs: [
      { name: "Cloud Ocean（云的海洋）", duration: 229 } ] },
    { name: "Rust Silk", type: "专辑", date: "2030-04-15", songs: [
      { name: "Rust Silk（锈迹的丝绸）", duration: 214 }, { name: "Sun Mist（太阳的薄雾）", duration: 264 }, { name: "Lantern Overcast（灯笼的阴云）", duration: 214 },
      { name: "Silk Song（丝绸的歌）", duration: 235 }, { name: "Stream Meridian（溪流的子午线）", duration: 238 }, { name: "Blossom Ivory（花开的象牙）", duration: 143 },
      { name: "Orbit Dust（轨道的尘埃）", duration: 272 } ] },
    { name: "Star Flame", type: "专辑", date: "2031-05-16", songs: [
      { name: "Star Flame（星的火焰）", duration: 242 }, { name: "Haze Halo（轻雾的光晕）", duration: 266 }, { name: "Blossom Ocean（花开的海洋）", duration: 385 },
      { name: "Quiet Fog（寂静的雾）", duration: 200 }, { name: "Tower Cinder（塔的炭烬）", duration: 230 }, { name: "Echo Void（回声的虚空）", duration: 172 },
      { name: "Haze Satellite（轻雾的卫星）", duration: 157 }, { name: "Motion Lake（律动的湖）", duration: 217 }, { name: "Kite Storm（风筝的风暴）", duration: 273 },
      { name: "Lake Glass（湖的玻璃）", duration: 267 }, { name: "Diamond Rust（钻石的锈迹）", duration: 125 } ] },
    { name: "Pond Mirrors", type: "专辑", date: "2032-05-09", songs: [
      { name: "Pond Mirrors（池塘的镜子）", duration: 142 }, { name: "Garden Signal（花园的信号）", duration: 209 }, { name: "Asphalt Mirrors（柏油的镜子）", duration: 209 },
      { name: "Vapor Midnight（雾霭的午夜）", duration: 228 }, { name: "Nightfall Sky（夜幕的天空）", duration: 228 }, { name: "Salt Quartz（盐的石英）", duration: 216 },
      { name: "Petal Silence（花瓣的沉寂）", duration: 237 }, { name: "Shell Signal（贝壳的信号）", duration: 180 } ] },
    { name: "Asphalt Nest", type: "EP", date: "2033-03-10", songs: [
      { name: "Asphalt Nest（柏油的巢）", duration: 217 }, { name: "Rust Anchor（锈迹的锚）", duration: 400 }, { name: "Crescent Sundown（新月的日落）", duration: 168 },
      { name: "Ballet Flame（芭蕾的火焰）", duration: 208 }, { name: "Coral Feather（珊瑚的羽毛）", duration: 209 }, { name: "Glass Moon（玻璃的月亮）", duration: 309 } ] },
    { name: "Motion Flood", type: "专辑", date: "2034-04-04", songs: [
      { name: "Motion Flood（律动的洪流）", duration: 226 }, { name: "Veil Stone（帷幕的石头）", duration: 258 }, { name: "Shell Twilight（贝壳的暮色）", duration: 231 },
      { name: "Frost Wood（霜的树林）", duration: 228 }, { name: "Marrow Desert（骨髓的荒原）", duration: 197 }, { name: "Wires Lake（电线的湖）", duration: 354 },
      { name: "Ivory Ashes（象牙的灰烬）", duration: 302 }, { name: "Storm Field（风暴的原野）", duration: 259 } ] },
    { name: "Shell Tree", type: "专辑", date: "2035-02-04", songs: [
      { name: "Shell Tree（贝壳的树）", duration: 216 }, { name: "Veil Pine（帷幕的松）", duration: 214 }, { name: "Harbor Path（港湾的小径）", duration: 205 },
      { name: "Steam Spark（蒸汽的火花）", duration: 203 }, { name: "Quiet Winter（寂静的冬天）", duration: 177 }, { name: "Loam Crystal（沃土的水晶）", duration: 392 },
      { name: "Beacon Kite（灯塔的风筝）", duration: 239 }, { name: "Nest Ocean（巢的海洋）", duration: 240 } ] },
    { name: "Nest Carousel", type: "专辑", date: "2036-02-17", songs: [
      { name: "Nest Carousel（巢的旋转木马）", duration: 202 }, { name: "Thunder Ashes（雷的灰烬）", duration: 186 }, { name: "Storm Petal（风暴的花瓣）", duration: 222 },
      { name: "Breeze Echo（微风的回声）", duration: 243 }, { name: "Haze Path（轻雾的小径）", duration: 225 }, { name: "Sundown Forest（日落的森林）", duration: 209 },
      { name: "Amber Motion（琥珀的律动）", duration: 205 }, { name: "Valley Moon（山谷的月亮）", duration: 218 }, { name: "Static Grain（静电的颗粒）", duration: 231 } ] },
    { name: "Wind Plain", type: "单曲", date: "2037-01-29", songs: [
      { name: "Wind Plain（风的平原）", duration: 259 } ] },
    { name: "Satellite Nest", type: "专辑", date: "2037-12-09", songs: [
      { name: "Satellite Nest（卫星的巢）", duration: 234 }, { name: "Glimmer Glow（微光的辉光）", duration: 144 }, { name: "Song Journey（歌的旅程）", duration: 212 },
      { name: "Neon Ember（霓虹的余烬）", duration: 136 }, { name: "Silk Sundown（丝绸的日落）", duration: 202 }, { name: "Daybreak Tower（黎明的塔）", duration: 213 },
      { name: "Shore Gravel（岸边的砾石）", duration: 242 }, { name: "Steam Signal（蒸汽的信号）", duration: 224 }, { name: "Desert Marrow（荒原的骨髓）", duration: 129 },
      { name: "Quiet Glass（寂静的玻璃）", duration: 214 } ] },
    { name: "Paperplane Cliff", type: "单曲", date: "2038-11-30", songs: [
      { name: "Paperplane Cliff（纸飞机的断崖）", duration: 244 } ] },
    { name: "Moss Trail", type: "专辑", date: "2039-12-14", songs: [
      { name: "Moss Trail（青苔的足迹）", duration: 224 }, { name: "Velvet Ridge（天鹅绒的山脊）", duration: 236 }, { name: "Glass Pebble（玻璃的卵石）", duration: 158 },
      { name: "Salt Motion（盐的律动）", duration: 193 }, { name: "Flame Cliff（火焰的断崖）", duration: 210 }, { name: "Stream Wires（溪流的电线）", duration: 211 },
      { name: "Whisper Ice（低语的冰）", duration: 192 }, { name: "Star Midnight（星的午夜）", duration: 245 }, { name: "Nest Cinder（巢的炭烬）", duration: 222 } ] },
    { name: "Salt Heart", type: "单曲", date: "2040-11-19", songs: [
      { name: "Salt Heart（盐的心）", duration: 233 } ] },
    { name: "Orbit Tide", type: "EP", date: "2041-10-31", songs: [
      { name: "Orbit Tide（轨道的潮汐）", duration: 239 }, { name: "Sundown Amber（日落的琥珀）", duration: 218 }, { name: "Thunder Slope（雷的斜坡）", duration: 411 },
      { name: "Satellite Ice（卫星的冰）", duration: 199 }, { name: "Ember Velvet（余烬的天鹅绒）", duration: 237 }, { name: "Lake Pebble（湖的卵石）", duration: 185 } ] },
    { name: "Wish Soil", type: "单曲", date: "2042-11-16", songs: [
      { name: "Wish Soil（愿望的土壤）", duration: 364 } ] },
    { name: "Crescent Path", type: "单曲", date: "2043-09-13", songs: [
      { name: "Crescent Path（新月的小径）", duration: 232 } ] },
    { name: "Shore Snow", type: "EP", date: "2044-10-08", songs: [
      { name: "Shore Snow（岸边的雪）", duration: 180 }, { name: "Golden Halo（金色的光晕）", duration: 207 }, { name: "Path Broken（小径的破碎）", duration: 234 },
      { name: "Nightfall Fleet（夜幕的舰队）", duration: 225 }, { name: "Soil Twilight（土壤的暮色）", duration: 143 }, { name: "Anchor Meridian（锚的子午线）", duration: 227 } ] },
    { name: "Stream Sky", type: "单曲", date: "2045-10-12", songs: [
      { name: "Stream Sky（溪流的天空）", duration: 213 } ] },
    { name: "Tide Overcast", type: "EP", date: "2046-09-16", songs: [
      { name: "Tide Overcast（潮汐的阴云）", duration: 243 }, { name: "Wires Wood（电线的树林）", duration: 223 }, { name: "Beacon Ballet（灯塔的芭蕾）", duration: 212 },
      { name: "Stone Undertow（石头的暗流）", duration: 357 }, { name: "Void Marrow（虚空的骨髓）", duration: 202 } ] },
    { name: "Faded Garden", type: "单曲", date: "2047-07-24", songs: [
      { name: "Faded Garden（褪色的花园）", duration: 293 } ] },
    { name: "Tower Sand", type: "专辑", date: "2048-06-26", songs: [
      { name: "Tower Sand（塔的沙）", duration: 241 }, { name: "Shell Shore（贝壳的岸边）", duration: 165 }, { name: "Salt Garden（盐的花园）", duration: 208 },
      { name: "Compass Wind（罗盘的风）", duration: 191 }, { name: "Stream Blanket（溪流的绒毯）", duration: 240 }, { name: "Tower Echo（塔的回声）", duration: 176 },
      { name: "Highway Star（公路的星）", duration: 202 } ] },
    { name: "Sun Lantern", type: "专辑", date: "2049-07-16", songs: [
      { name: "Sun Lantern（太阳的灯笼）", duration: 226 }, { name: "River Halo（河流的光晕）", duration: 213 }, { name: "Sea Twilight（海的暮色）", duration: 158 },
      { name: "Salt Blanket（盐的绒毯）", duration: 201 }, { name: "Feather Vapor（羽毛的雾霭）", duration: 212 }, { name: "Midnight Pebble（午夜的卵石）", duration: 422 },
      { name: "Daylight Crystal（日光的水晶）", duration: 206 }, { name: "Soil Midnight（土壤的午夜）", duration: 239 }, { name: "Snow Pond（雪的池塘）", duration: 242 },
      { name: "Dawn Shell（黎明的贝壳）", duration: 228 }, { name: "Static Faded（静电的褪色）", duration: 238 } ] },
    { name: "Summer Fable", type: "EP", date: "2050-06-06", songs: [
      { name: "Summer Fable（夏天的寓言）", duration: 352 }, { name: "Motion Dawn（律动的黎明）", duration: 219 }, { name: "Thunder Veil（雷的帷幕）", duration: 301 },
      { name: "Sun Blanket（太阳的绒毯）", duration: 219 } ] },
    ],
  "Poppin'Party": [
    { name: "Poppin'on!", type: "专辑", date: "2019-01-30", songs: [
       { name: "Yes! BanG_Dream!", duration: 235 }, { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", duration: 240 },
       { name: "走り始めたばかりのキミに（致刚起跑的你）", duration: 225 }, { name: "ティアドロップス（泪滴）", duration: 238 },
       { name: "ときめきエクスペリエンス!（心动体验！）", duration: 230 }, { name: "前へススメ!（向前进！）", duration: 228 },
       { name: "Time Lapse", duration: 245 }, { name: "二重の虹（双重彩虹）", duration: 236 },
       { name: "最高（最棒）", duration: 220 }, { name: "Returns", duration: 250 } ] },
    { name: "Yes! BanG_Dream!", type: "单曲", date: "2016-02-24", songs: [ { name: "Yes! BanG_Dream!", duration: 235 } ] },
    { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", type: "单曲", date: "2016-08-03", songs: [ { name: "STAR BEAT!〜ホシノコドウ〜（星之鼓动）", duration: 240 } ] },
    { name: "ティアドロップス（泪滴）", type: "单曲", date: "2016-12-07", songs: [ { name: "ティアドロップス（泪滴）", duration: 238 } ] },
    { name: "ときめきエクスペリエンス!（心动体验！）", type: "单曲", date: "2017-02-01", songs: [ { name: "ときめきエクスペリエンス!（心动体验！）", duration: 230 } ] },
    { name: "前へススメ!（向前进！）", type: "单曲", date: "2017-08-09", songs: [ { name: "前へススメ!（向前进！）", duration: 228 } ] },
    { name: "Time Lapse", type: "单曲", date: "2018-01-17", songs: [ { name: "Time Lapse", duration: 245 } ] },
    { name: "二重の虹（双重彩虹）", type: "单曲", date: "2018-04-18", songs: [ { name: "二重の虹（双重彩虹）", duration: 236 } ] },
    { name: "キズナミュージック♪（羁绊音乐♪）", type: "单曲", date: "2019-05-15", songs: [ { name: "キズナミュージック♪（羁绊音乐♪）", duration: 240 } ] },
      { name: "虹の約束", type: "EP", date: "2026-05-21", songs: [
      { name: "虹の約束（彩虹之约定）", duration: 228 }, { name: "心音の浴衣（心跳之浴衣）", duration: 263 }, { name: "若葉の窓（新叶之窗）", duration: 239 },
      { name: "雲の文化祭（云之文化祭）", duration: 325 }, { name: "霧の夏休み（雾之暑假）", duration: 213 } ] },
    { name: "夜風の制服", type: "专辑", date: "2027-06-25", songs: [
      { name: "夜風の制服（夜风之制服）", duration: 239 }, { name: "波の暁（波之拂晓）", duration: 213 }, { name: "帰り道の残照（归途之残照）", duration: 420 },
      { name: "星空の夜風（星空之夜风）", duration: 243 }, { name: "波音の雪化粧（潮声之银装素裹）", duration: 243 }, { name: "障子の川（障子之河）", duration: 231 },
      { name: "帰り道の旋律（归途之旋律）", duration: 191 }, { name: "岸の修学旅行（岸之修学旅行）", duration: 255 }, { name: "空の流星（天空之流星）", duration: 213 },
      { name: "歌の葉（歌之叶）", duration: 226 }, { name: "黄昏の自転車（黄昏之单车）", duration: 213 } ] },
    { name: "旋律の卒業", type: "专辑", date: "2028-06-06", songs: [
      { name: "旋律の卒業（旋律之毕业）", duration: 282 }, { name: "島の落ち葉（岛之落叶）", duration: 244 }, { name: "雨音の畳（雨声之榻榻米）", duration: 250 },
      { name: "実の虹（果实之彩虹）", duration: 256 }, { name: "残響の真夏（残响之盛夏）", duration: 215 }, { name: "木漏れ日の卒業（林间光斑之毕业）", duration: 253 },
      { name: "夜の冬休み（夜之寒假）", duration: 241 }, { name: "湖の浜（湖之海滨）", duration: 238 }, { name: "詩の星空（诗之星空）", duration: 228 } ] },
    { name: "屋上の心", type: "单曲", date: "2029-04-16", songs: [
      { name: "屋上の心（天台之心）", duration: 249 } ] },
    { name: "紅葉の若葉", type: "专辑", date: "2030-06-05", songs: [
      { name: "紅葉の若葉（红叶之新叶）", duration: 220 }, { name: "青いの霜（湛蓝霜）", duration: 249 }, { name: "月の影（月之影）", duration: 249 },
      { name: "島の蕾（岛之花苞）", duration: 158 }, { name: "岩の透明（透明的岩石）", duration: 187 }, { name: "畳の滝（榻榻米之瀑布）", duration: 232 },
      { name: "蝉の波（蝉之波）", duration: 262 }, { name: "文化祭の波音（文化祭之潮声）", duration: 238 }, { name: "青空の海辺（青空之海边）", duration: 216 },
      { name: "木漏れ日の冬休み（林间光斑之寒假）", duration: 218 } ] },
    { name: "蛍の調べ", type: "专辑", date: "2031-03-13", songs: [
      { name: "蛍の調べ（萤火虫之曲调）", duration: 240 }, { name: "残響の優しい（温柔的残响）", duration: 267 }, { name: "波の詩（波之诗）", duration: 407 },
      { name: "夜風の白い（纯白的的夜风）", duration: 280 }, { name: "朝霧の流れ星（晨雾之流星）", duration: 249 }, { name: "冬晴れの夏休み（冬日晴空之暑假）", duration: 215 },
      { name: "冬休みの島（寒假之岛）", duration: 248 }, { name: "約束の唄（约定之歌谣）", duration: 259 }, { name: "花火の灯り（花火之灯火）", duration: 232 },
      { name: "縁側の虹（檐廊之彩虹）", duration: 248 } ] },
    { name: "星屑の実", type: "专辑", date: "2032-03-07", songs: [
      { name: "星屑の実（星屑之果实）", duration: 231 }, { name: "白いの畳（纯白的榻榻米）", duration: 248 }, { name: "岸の障子（岸之障子）", duration: 216 },
      { name: "夏休みの白い（纯白的的暑假）", duration: 407 }, { name: "向日葵の浴衣（向日葵之浴衣）", duration: 255 }, { name: "氷の木漏れ日（冰之林间光斑）", duration: 244 },
      { name: "夢の放課後（梦之放学后）", duration: 214 }, { name: "花の岩（花之岩石）", duration: 239 }, { name: "夕霧の空（暮霭之天空）", duration: 243 },
      { name: "花の陽だまり（花之暖阳）", duration: 249 }, { name: "波の浴衣（波之浴衣）", duration: 217 } ] },
    { name: "朧月の満月", type: "专辑", date: "2033-04-02", songs: [
      { name: "朧月の満月（胧月之满月）", duration: 236 }, { name: "追憶の秋風（追忆之秋风）", duration: 195 }, { name: "影の蝉（影之蝉）", duration: 213 },
      { name: "水面の土（水面之土）", duration: 216 }, { name: "実の月光（果实之月光）", duration: 249 }, { name: "放課後の帰り道（放学后之归途）", duration: 268 },
      { name: "蕾の調べ（花苞之曲调）", duration: 244 }, { name: "潮騒の霜（潮鸣之霜）", duration: 195 }, { name: "詩の風（诗之风）", duration: 222 },
      { name: "静かの夜風（静谧夜风）", duration: 135 } ] },
    { name: "風鈴の紅葉", type: "EP", date: "2034-04-07", songs: [
      { name: "風鈴の紅葉（风铃之红叶）", duration: 235 }, { name: "恋の月（恋之月）", duration: 254 }, { name: "歌の渓（歌之溪）", duration: 261 },
      { name: "陽だまりの木漏れ日（暖阳之林间光斑）", duration: 144 }, { name: "根の夏休み（根之暑假）", duration: 240 } ] },
    { name: "冬休みの川", type: "单曲", date: "2035-04-01", songs: [
      { name: "冬休みの川（寒假之河）", duration: 245 } ] },
    { name: "花の根", type: "单曲", date: "2036-01-21", songs: [
      { name: "花の根（花之根）", duration: 232 } ] },
    { name: "島の氷", type: "单曲", date: "2037-01-29", songs: [
      { name: "島の氷（岛之冰）", duration: 357 } ] },
    { name: "風の霧", type: "专辑", date: "2038-02-04", songs: [
      { name: "風の霧（风之雾）", duration: 232 }, { name: "月光の音色（月光之音色）", duration: 240 }, { name: "冬晴れの雨音（冬日晴空之雨声）", duration: 227 },
      { name: "朧月の海辺（胧月之海边）", duration: 265 }, { name: "星屑の月（星屑之月）", duration: 434 }, { name: "帰り道の月光（归途之月光）", duration: 320 },
      { name: "制服の障子（制服之障子）", duration: 246 }, { name: "影の風鈴（影之风铃）", duration: 239 }, { name: "花火の残照（花火之残照）", duration: 276 },
      { name: "旋律の木漏れ日（旋律之林间光斑）", duration: 172 }, { name: "夕霧の心音（暮霭之心跳）", duration: 259 } ] },
    { name: "枝の虹", type: "专辑", date: "2039-02-01", songs: [
      { name: "枝の虹（枝之彩虹）", duration: 248 }, { name: "葉の遠い（遥远的叶）", duration: 190 }, { name: "陽だまりの声（暖阳之声）", duration: 400 },
      { name: "春風の星屑（春风之星屑）", duration: 244 }, { name: "銀河の唄（银河之歌谣）", duration: 236 }, { name: "蛍の旋律（萤火虫之旋律）", duration: 232 },
      { name: "夢の蕾（梦之花苞）", duration: 246 }, { name: "記憶の障子（记忆之障子）", duration: 186 }, { name: "自転車の卒業（单车之毕业）", duration: 245 } ] },
    { name: "遠いの歌", type: "专辑", date: "2039-12-19", songs: [
      { name: "遠いの歌（遥远歌）", duration: 390 }, { name: "自転車の波音（单车之潮声）", duration: 216 }, { name: "声の追憶（声之追忆）", duration: 198 },
      { name: "岸の砂（岸之沙）", duration: 217 }, { name: "放課後の記憶（放学后之记忆）", duration: 218 }, { name: "縁側の残照（檐廊之残照）", duration: 252 },
      { name: "放課後の雨音（放学后之雨声）", duration: 235 }, { name: "残照の修学旅行（残照之修学旅行）", duration: 251 } ] },
    { name: "追憶の凪", type: "单曲", date: "2040-11-11", songs: [
      { name: "追憶の凪（追忆之风平浪静）", duration: 248 } ] },
    { name: "調べの春休み", type: "单曲", date: "2041-10-30", songs: [
      { name: "調べの春休み（曲调之春假）", duration: 254 } ] },
    { name: "体育祭の岩", type: "专辑", date: "2042-12-09", songs: [
      { name: "体育祭の岩（体育祭之岩石）", duration: 246 }, { name: "潮騒の残響（潮鸣之残响）", duration: 209 }, { name: "静かの旋律（静谧旋律）", duration: 241 },
      { name: "星雲の海辺（星云之海边）", duration: 323 }, { name: "潮騒の木漏れ日（潮鸣之林间光斑）", duration: 151 }, { name: "修学旅行の滝（修学旅行之瀑布）", duration: 170 },
      { name: "波の海（波之海）", duration: 210 }, { name: "波の島（波之岛）", duration: 185 }, { name: "帰り道の凪（归途之风平浪静）", duration: 250 } ] },
    { name: "霜の夕霧", type: "单曲", date: "2043-11-27", songs: [
      { name: "霜の夕霧（霜之暮霭）", duration: 228 } ] },
    { name: "約束の向日葵", type: "专辑", date: "2044-11-01", songs: [
      { name: "約束の向日葵（约定之向日葵）", duration: 230 }, { name: "若葉の残照（新叶之残照）", duration: 256 }, { name: "星空の残照（星空之残照）", duration: 251 },
      { name: "修学旅行の夕焼け（修学旅行之晚霞）", duration: 218 }, { name: "銀河の湖（银河之湖）", duration: 240 }, { name: "水面の朝（水面之晨）", duration: 138 },
      { name: "残照の心音（残照之心跳）", duration: 283 }, { name: "葉の屋上（叶之天台）", duration: 216 } ] },
    { name: "蛍の唄", type: "专辑", date: "2045-09-25", songs: [
      { name: "蛍の唄（萤火虫之歌谣）", duration: 188 }, { name: "夜の響き（夜之回响）", duration: 243 }, { name: "放課後の体育祭（放学后之体育祭）", duration: 246 },
      { name: "泉の夕暮れ（泉之黄昏）", duration: 187 }, { name: "屋上の凪（天台之风平浪静）", duration: 255 }, { name: "修学旅行の灯り（修学旅行之灯火）", duration: 188 },
      { name: "言葉の星屑（言语之星屑）", duration: 232 }, { name: "残照の恋（残照之恋）", duration: 283 }, { name: "銀河の空（银河之天空）", duration: 241 },
      { name: "街の給食（街之午餐）", duration: 252 }, { name: "透明の制服（透明制服）", duration: 244 } ] },
    { name: "遠いの渓", type: "专辑", date: "2046-09-29", songs: [
      { name: "遠いの渓（遥远溪）", duration: 215 }, { name: "障子の葉（障子之叶）", duration: 270 }, { name: "星屑の優しい（温柔的星屑）", duration: 433 },
      { name: "冬休みの時（寒假之时光）", duration: 276 }, { name: "土の根（土之根）", duration: 378 }, { name: "黒板の砂（黑板之沙）", duration: 237 },
      { name: "星の帰り道（星之归途）", duration: 248 }, { name: "卒業の黒板（毕业之黑板）", duration: 222 } ] },
    { name: "恋の心音", type: "单曲", date: "2047-10-01", songs: [
      { name: "恋の心音（恋之心跳）", duration: 147 } ] },
    { name: "想いの春休み", type: "EP", date: "2048-08-10", songs: [
      { name: "想いの春休み（思念之春假）", duration: 438 }, { name: "朝霧の星雲（晨雾之星云）", duration: 243 }, { name: "黄昏の渓（黄昏之溪）", duration: 257 } ] },
    { name: "心音の教室", type: "专辑", date: "2049-06-30", songs: [
      { name: "心音の教室（心跳之教室）", duration: 231 }, { name: "流れ星の桜（流星之樱花）", duration: 326 }, { name: "暁の時（拂晓之时光）", duration: 202 },
      { name: "雪化粧の風鈴（银装素裹之风铃）", duration: 219 }, { name: "海辺の空（海边之天空）", duration: 245 }, { name: "冬休みの浜（寒假之海滨）", duration: 435 },
      { name: "根の障子（根之障子）", duration: 220 }, { name: "黄昏の浴衣（黄昏之浴衣）", duration: 274 }, { name: "春休みの心（春假之心）", duration: 244 },
      { name: "冬休みの陽だまり（寒假之暖阳）", duration: 218 }, { name: "海辺の蝉（海边之蝉）", duration: 214 } ] },
    { name: "給食の夢", type: "专辑", date: "2050-07-10", songs: [
      { name: "給食の夢（午餐之梦）", duration: 269 }, { name: "音色の蛍（音色之萤火虫）", duration: 205 }, { name: "星の教室（星之教室）", duration: 195 },
      { name: "海の調べ（海之曲调）", duration: 232 }, { name: "暁の涙（拂晓之泪）", duration: 214 }, { name: "星雲の放課後（星云之放学后）", duration: 185 },
      { name: "花の朝（花之晨）", duration: 253 }, { name: "霞の渓（霞之溪）", duration: 246 }, { name: "夜風の街（夜风之街）", duration: 164 },
      { name: "透明の言葉（透明言语）", duration: 190 } ] },
    ],
  "Roselia": [
    { name: "Anfang", type: "专辑", date: "2019-04-24", songs: [
       { name: "BLACK SHOUT", duration: 245 }, { name: "Re:birth day", duration: 238 },
       { name: "熱色スターマイン（热色星火）", duration: 230 }, { name: "ONENESS", duration: 242 },
       { name: "Determination Symphony", duration: 250 }, { name: "陽だまりロードナイト（暖阳骑士）", duration: 246 },
       { name: "Neo-Aspect", duration: 235 }, { name: "Ringing Bloom", duration: 240 },
       { name: "FIRE BIRD", duration: 255 }, { name: "LOUDER", duration: 235 } ] },
    { name: "BLACK SHOUT", type: "单曲", date: "2017-04-19", songs: [ { name: "BLACK SHOUT", duration: 245 } ] },
    { name: "Re:birth day", type: "单曲", date: "2017-06-28", songs: [ { name: "Re:birth day", duration: 238 } ] },
    { name: "熱色スターマイン（热色星火）", type: "单曲", date: "2017-08-30", songs: [ { name: "熱色スターマイン（热色星火）", duration: 230 } ] },
    { name: "ONENESS", type: "单曲", date: "2017-11-15", songs: [ { name: "ONENESS", duration: 242 } ] },
    { name: "Neo-Aspect", type: "单曲", date: "2018-03-21", songs: [ { name: "Neo-Aspect", duration: 235 } ] },
    { name: "R", type: "单曲", date: "2018-06-27", songs: [ { name: "R", duration: 232 } ] },
    { name: "Brave Jewel", type: "单曲", date: "2018-12-12", songs: [ { name: "Brave Jewel", duration: 240 } ] },
    { name: "FIRE BIRD", type: "单曲", date: "2019-03-20", songs: [ { name: "FIRE BIRD", duration: 255 } ] },
    { name: "LOUDER", type: "单曲", date: "2018-08-22", songs: [ { name: "LOUDER", duration: 235 } ] },
      { name: "Steam Leaf", type: "专辑", date: "2026-05-22", songs: [
      { name: "Steam Leaf（蒸汽的叶）", duration: 230 }, { name: "Asphalt Golden（柏油的金色）", duration: 315 }, { name: "Veil Mirrors（帷幕的镜子）", duration: 261 },
      { name: "Vine Forest（藤蔓的森林）", duration: 244 }, { name: "Shell Silence（贝壳的沉寂）", duration: 262 }, { name: "Static Twilight（静电的暮色）", duration: 233 },
      { name: "Frost Valley（霜的山谷）", duration: 252 }, { name: "Twilight Sky（暮色的天空）", duration: 248 }, { name: "Mist Thaw（薄雾的融雪）", duration: 236 },
      { name: "Neon Halo（霓虹的光晕）", duration: 230 } ] },
    { name: "Signal Lantern", type: "单曲", date: "2027-05-30", songs: [
      { name: "Signal Lantern（信号的灯笼）", duration: 227 } ] },
    { name: "Ember Star", type: "单曲", date: "2028-05-30", songs: [
      { name: "Ember Star（余烬的星）", duration: 253 } ] },
    { name: "Loam Dusk", type: "EP", date: "2029-03-31", songs: [
      { name: "Loam Dusk（沃土的薄暮）", duration: 292 }, { name: "Diamond Bloom（钻石的绽放）", duration: 230 }, { name: "Plain Circle（平原的圆圈）", duration: 220 },
      { name: "Crystal Path（水晶的小径）", duration: 185 } ] },
    { name: "Rust Path", type: "专辑", date: "2030-04-25", songs: [
      { name: "Rust Path（锈迹的小径）", duration: 226 }, { name: "Veil Sea（帷幕的海）", duration: 223 }, { name: "Crystal Veil（水晶的帷幕）", duration: 208 },
      { name: "Nest Twilight（巢的暮色）", duration: 225 }, { name: "Kite Diamond（风筝的钻石）", duration: 243 }, { name: "Rain Amber（雨的琥珀）", duration: 264 },
      { name: "Anchor Velvet（锚的天鹅绒）", duration: 236 } ] },
    { name: "Ridge Silence", type: "EP", date: "2031-04-12", songs: [
      { name: "Ridge Silence（山脊的沉寂）", duration: 217 }, { name: "Broken Wood（破碎的树林）", duration: 210 }, { name: "Gravel Cinder（砾石的炭烬）", duration: 263 },
      { name: "Trail Velvet（足迹的天鹅绒）", duration: 259 }, { name: "Ocean Nightfall（海洋的夜幕）", duration: 263 }, { name: "Slope Steam（斜坡的蒸汽）", duration: 258 } ] },
    { name: "Rust Garden", type: "专辑", date: "2032-03-28", songs: [
      { name: "Rust Garden（锈迹的花园）", duration: 218 }, { name: "Wave Ivory（波浪的象牙）", duration: 410 }, { name: "Glow Spark（辉光的火花）", duration: 256 },
      { name: "Storm Overcast（风暴的阴云）", duration: 243 }, { name: "Star Mirrors（星的镜子）", duration: 243 }, { name: "Signal Velvet（信号的天鹅绒）", duration: 190 },
      { name: "Silver Leaf（银色的叶）", duration: 330 }, { name: "Thaw Daybreak（融雪的黎明）", duration: 242 }, { name: "Fleet Pulse（舰队的脉冲）", duration: 157 },
      { name: "Echo Fable（回声的寓言）", duration: 249 }, { name: "Sundown River（日落的河流）", duration: 263 } ] },
    { name: "Overcast Heart", type: "专辑", date: "2033-03-19", songs: [
      { name: "Overcast Heart（阴云的心）", duration: 373 }, { name: "Concrete Quartz（水泥的石英）", duration: 188 }, { name: "Undertow Forest（暗流的森林）", duration: 250 },
      { name: "Coral Cliff（珊瑚的断崖）", duration: 269 }, { name: "Snow Hollow（雪的空洞）", duration: 231 }, { name: "Slope Nest（斜坡的巢）", duration: 228 },
      { name: "Iron Daylight（铁的日光）", duration: 219 } ] },
    { name: "Shore Summer", type: "专辑", date: "2034-02-01", songs: [
      { name: "Shore Summer（岸边的夏天）", duration: 241 }, { name: "Flame Glow（火焰的辉光）", duration: 144 }, { name: "Ridge Thunder（山脊的雷）", duration: 252 },
      { name: "Signal Salt（信号的盐）", duration: 251 }, { name: "Mirrors Moss（镜子的青苔）", duration: 209 }, { name: "Cinder Thaw（炭烬的融雪）", duration: 228 },
      { name: "Highway Valley（公路的山谷）", duration: 264 }, { name: "Star Overcast（星的阴云）", duration: 282 } ] },
    { name: "Shell Thaw", type: "EP", date: "2035-03-29", songs: [
      { name: "Shell Thaw（贝壳的融雪）", duration: 215 }, { name: "Smoke Path（烟雾的小径）", duration: 262 }, { name: "Sundown Glow（日落的辉光）", duration: 225 },
      { name: "Frost Star（霜的星）", duration: 191 }, { name: "Marrow Satellite（骨髓的卫星）", duration: 231 } ] },
    { name: "Tower Cloud", type: "专辑", date: "2036-01-20", songs: [
      { name: "Tower Cloud（塔的云）", duration: 208 }, { name: "Pulse Circle（脉冲的圆圈）", duration: 219 }, { name: "Concrete Whisper（水泥的低语）", duration: 217 },
      { name: "Lantern Ember（灯笼的余烬）", duration: 221 }, { name: "Faded Path（褪色的小径）", duration: 224 }, { name: "Moss Stone（青苔的石头）", duration: 264 },
      { name: "Garden Kite（花园的风筝）", duration: 217 }, { name: "Silence Static（沉寂的静电）", duration: 253 }, { name: "Undertow Beacon（暗流的灯塔）", duration: 262 },
      { name: "Tree Flame（树的火焰）", duration: 234 } ] },
    { name: "Frost Midnight", type: "专辑", date: "2037-02-01", songs: [
      { name: "Frost Midnight（霜的午夜）", duration: 252 }, { name: "Void Crescent（虚空的新月）", duration: 208 }, { name: "Trail Fleet（足迹的舰队）", duration: 249 },
      { name: "Lake Lantern（湖的灯笼）", duration: 256 }, { name: "Blanket Field（绒毯的原野）", duration: 147 }, { name: "Trail Anchor（足迹的锚）", duration: 240 },
      { name: "Lake Paperplane（湖的纸飞机）", duration: 233 }, { name: "Song Salt（歌的盐）", duration: 218 } ] },
    { name: "Orbit Haze", type: "EP", date: "2038-01-19", songs: [
      { name: "Orbit Haze（轨道的轻雾）", duration: 286 }, { name: "Meadow Beacon（草地的灯塔）", duration: 249 }, { name: "Soil Carousel（土壤的旋转木马）", duration: 228 } ] },
    { name: "Glimmer Glass", type: "专辑", date: "2038-12-28", songs: [
      { name: "Glimmer Glass（微光的玻璃）", duration: 218 }, { name: "Roof Spark（屋顶的火花）", duration: 275 }, { name: "Halo Forest（光晕的森林）", duration: 177 },
      { name: "Static Anchor（静电的锚）", duration: 220 }, { name: "Vapor Shadow（雾霭的影子）", duration: 247 }, { name: "Fleet Glass（舰队的玻璃）", duration: 227 },
      { name: "Faded Undertow（褪色的暗流）", duration: 277 }, { name: "Trail Veil（足迹的帷幕）", duration: 230 } ] },
    { name: "Sea Veil", type: "单曲", date: "2039-11-24", songs: [
      { name: "Sea Veil（海的帷幕）", duration: 221 } ] },
    { name: "Circle", type: "EP", date: "2040-10-27", songs: [
      { name: "Circle（圆圈）", duration: 227 }, { name: "Drift Frost（漂流的霜）", duration: 230 }, { name: "Song Star（歌的星）", duration: 445 },
      { name: "Void Forest（虚空的森林）", duration: 253 } ] },
    { name: "Soil Nest", type: "专辑", date: "2041-10-07", songs: [
      { name: "Soil Nest（土壤的巢）", duration: 138 }, { name: "Fog Signal（雾的信号）", duration: 264 }, { name: "Flame Anchor（火焰的锚）", duration: 454 },
      { name: "Kite Compass（风筝的罗盘）", duration: 186 }, { name: "Anchor Broken（锚的破碎）", duration: 237 }, { name: "Vine Orbit（藤蔓的轨道）", duration: 235 },
      { name: "Flame Harbor（火焰的港湾）", duration: 237 }, { name: "Storm Circle（风暴的圆圈）", duration: 149 } ] },
    { name: "Harbor Pebble", type: "专辑", date: "2042-10-09", songs: [
      { name: "Harbor Pebble（港湾的卵石）", duration: 223 }, { name: "Flood Ember（洪流的余烬）", duration: 233 }, { name: "Highway Glow（公路的辉光）", duration: 218 },
      { name: "Steam Ocean（蒸汽的海洋）", duration: 291 }, { name: "Satellite Bloom（卫星的绽放）", duration: 178 }, { name: "Tide Garden（潮汐的花园）", duration: 195 },
      { name: "Whisper Diamond（低语的钻石）", duration: 247 }, { name: "Snow Lake（雪的湖）", duration: 219 }, { name: "Smoke Storm（烟雾的风暴）", duration: 281 },
      { name: "Shell Fog（贝壳的雾）", duration: 233 } ] },
    { name: "Grain Drift", type: "EP", date: "2043-10-11", songs: [
      { name: "Grain Drift（颗粒的漂流）", duration: 255 }, { name: "Dawn Moss（黎明的青苔）", duration: 285 }, { name: "Ridge Blanket（山脊的绒毯）", duration: 251 },
      { name: "Blanket Dusk（绒毯的薄暮）", duration: 258 } ] },
    { name: "Snow Vapor", type: "专辑", date: "2044-08-28", songs: [
      { name: "Snow Vapor（雪的雾霭）", duration: 349 }, { name: "Haze Smoke（轻雾的烟雾）", duration: 252 }, { name: "Flame Moss（火焰的青苔）", duration: 256 },
      { name: "Crescent Sun（新月的太阳）", duration: 241 }, { name: "Wood Asphalt（树林的柏油）", duration: 271 }, { name: "Midnight Veil（午夜的帷幕）", duration: 236 },
      { name: "Shallow Quartz（浅滩的石英）", duration: 251 }, { name: "Diamond Midnight（钻石的午夜）", duration: 255 }, { name: "Dust Crescent（尘埃的新月）", duration: 247 } ] },
    { name: "Hill Desert", type: "EP", date: "2045-08-25", songs: [
      { name: "Hill Desert（山丘的荒原）", duration: 286 }, { name: "Storm Compass（风暴的罗盘）", duration: 188 }, { name: "Moon Coral（月亮的珊瑚）", duration: 197 },
      { name: "Coral Amber（珊瑚的琥珀）", duration: 136 }, { name: "Star Dawn（星的黎明）", duration: 285 }, { name: "Road Lake（道路的湖）", duration: 251 } ] },
    { name: "Trail Wave", type: "单曲", date: "2046-08-08", songs: [
      { name: "Trail Wave（足迹的波浪）", duration: 225 } ] },
    { name: "Trail Halo", type: "专辑", date: "2047-07-17", songs: [
      { name: "Trail Halo（足迹的光晕）", duration: 224 }, { name: "Shore Leaf（岸边的叶）", duration: 208 }, { name: "Ashes Tower（灰烬的塔）", duration: 214 },
      { name: "Blanket Lake（绒毯的湖）", duration: 259 }, { name: "Glow Plain（辉光的平原）", duration: 272 }, { name: "Breeze Neon（微风的霓虹）", duration: 257 },
      { name: "Compass Rain（罗盘的雨）", duration: 226 }, { name: "Dust Broken（尘埃的破碎）", duration: 433 }, { name: "Echo Silence（回声的沉寂）", duration: 253 } ] },
    { name: "Circle Steam", type: "单曲", date: "2048-09-16", songs: [
      { name: "Circle Steam（圆圈的蒸汽）", duration: 231 } ] },
    { name: "Blossom Ashes", type: "单曲", date: "2049-08-22", songs: [
      { name: "Blossom Ashes（花开的灰烬）", duration: 233 } ] },
    { name: "Crystal Smoke", type: "EP", date: "2050-08-10", songs: [
      { name: "Crystal Smoke（水晶的烟雾）", duration: 182 }, { name: "Leaf Circle（叶的圆圈）", duration: 277 }, { name: "Silk Faded（丝绸的褪色）", duration: 267 },
      { name: "Crystal Signal（水晶的信号）", duration: 220 }, { name: "Song Glow（歌的辉光）", duration: 229 } ] },
    ],
  "Afterglow": [
    { name: "ONE OF US", type: "专辑", date: "2019-09-18", songs: [
       { name: "That Is How I Roll!", duration: 220 }, { name: "True color", duration: 228 },
       { name: "Hey-day狂騒曲（Hey-day狂骚曲）", duration: 215 }, { name: "Scarlet Sky", duration: 230 },
       { name: "COMIC PANIC!!!", duration: 210 }, { name: "Sasanqua", duration: 235 },
       { name: "Jamboree!", duration: 218 }, { name: "ON YOUR MARK", duration: 225 }, { name: "Y.O.L.O!!!!!", duration: 215 } ] },
    { name: "That Is How I Roll!", type: "单曲", date: "2017-04-19", songs: [ { name: "That Is How I Roll!", duration: 220 } ] },
    { name: "True color", type: "单曲", date: "2017-08-30", songs: [ { name: "True color", duration: 228 } ] },
    { name: "Hey-day狂騒曲（Hey-day狂骚曲）", type: "单曲", date: "2017-11-15", songs: [ { name: "Hey-day狂騒曲（Hey-day狂骚曲）", duration: 215 } ] },
    { name: "Scarlet Sky", type: "单曲", date: "2018-02-14", songs: [ { name: "Scarlet Sky", duration: 230 } ] },
    { name: "COMIC PANIC!!!", type: "单曲", date: "2018-06-20", songs: [ { name: "COMIC PANIC!!!", duration: 210 } ] },
    { name: "Sasanqua", type: "单曲", date: "2018-10-10", songs: [ { name: "Sasanqua", duration: 235 } ] },
    { name: "Jamboree!", type: "单曲", date: "2019-02-13", songs: [ { name: "Jamboree!", duration: 218 } ] },
      { name: "Wood Frost", type: "单曲", date: "2026-07-23", songs: [
      { name: "Wood Frost（树林的霜）", duration: 178 } ] },
    { name: "Haze Pebble", type: "EP", date: "2027-06-19", songs: [
      { name: "Haze Pebble（轻雾的卵石）", duration: 136 }, { name: "Quiet Haze（寂静的轻雾）", duration: 202 }, { name: "Shell Dawn（贝壳的黎明）", duration: 229 },
      { name: "Wood Coral（树林的珊瑚）", duration: 224 }, { name: "Hollow Undertow（空洞的暗流）", duration: 226 }, { name: "Ocean Iron（海洋的铁）", duration: 224 } ] },
    { name: "Valley Window", type: "EP", date: "2028-06-25", songs: [
      { name: "Valley Window（山谷的窗）", duration: 217 }, { name: "Road Ocean（道路的海洋）", duration: 224 }, { name: "Vapor Broken（雾霭的破碎）", duration: 234 },
      { name: "Glass Loam（玻璃的沃土）", duration: 221 } ] },
    { name: "Summer Dawn", type: "专辑", date: "2029-06-22", songs: [
      { name: "Summer Dawn（夏天的黎明）", duration: 311 }, { name: "Halo Lantern（光晕的灯笼）", duration: 233 }, { name: "Wish Smoke（愿望的烟雾）", duration: 192 },
      { name: "Twilight Pond（暮色的池塘）", duration: 239 }, { name: "Harbor Loam（港湾的沃土）", duration: 185 }, { name: "Star Coral（星的珊瑚）", duration: 147 },
      { name: "Sand Cloud（沙的云）", duration: 363 }, { name: "Compass Soil（罗盘的土壤）", duration: 217 }, { name: "Veil Signal（帷幕的信号）", duration: 229 },
      { name: "Silk Fog（丝绸的雾）", duration: 358 } ] },
    { name: "Wish Silver", type: "专辑", date: "2030-04-01", songs: [
      { name: "Wish Silver（愿望的银色）", duration: 205 }, { name: "Diamond Wires（钻石的电线）", duration: 135 }, { name: "Tree Anchor（树的锚）", duration: 210 },
      { name: "Wave Mirrors（波浪的镜子）", duration: 224 }, { name: "Overcast Thunder（阴云的雷）", duration: 149 }, { name: "Iron Tree（铁的树）", duration: 233 },
      { name: "Plain Silver（平原的银色）", duration: 148 } ] },
    { name: "Static Velvet", type: "单曲", date: "2031-03-19", songs: [
      { name: "Static Velvet（静电的天鹅绒）", duration: 160 } ] },
    { name: "Crescent Marrow", type: "EP", date: "2032-05-07", songs: [
      { name: "Crescent Marrow（新月的骨髓）", duration: 414 }, { name: "Winter Amber（冬天的琥珀）", duration: 203 }, { name: "Fable Moss（寓言的青苔）", duration: 187 },
      { name: "Sea Ember（海的余烬）", duration: 224 }, { name: "Valley Summer（山谷的夏天）", duration: 229 } ] },
    { name: "Summer Silk", type: "专辑", date: "2033-04-11", songs: [
      { name: "Summer Silk（夏天的丝绸）", duration: 215 }, { name: "Anchor Sundown（锚的日落）", duration: 167 }, { name: "Feather Sea（羽毛的海）", duration: 208 },
      { name: "Flood Veil（洪流的帷幕）", duration: 218 }, { name: "Plain Frost（平原的霜）", duration: 154 }, { name: "Valley Pond（山谷的池塘）", duration: 195 },
      { name: "Bloom Flood（绽放的洪流）", duration: 180 }, { name: "Cliff Steam（断崖的蒸汽）", duration: 343 }, { name: "Signal Asphalt（信号的柏油）", duration: 220 } ] },
    { name: "Gravel Ridge", type: "专辑", date: "2034-01-21", songs: [
      { name: "Gravel Ridge（砾石的山脊）", duration: 217 }, { name: "Storm Tree（风暴的树）", duration: 201 }, { name: "Motion Amber（律动的琥珀）", duration: 208 },
      { name: "Static Journey（静电的旅程）", duration: 237 }, { name: "Moss Wind（青苔的风）", duration: 238 }, { name: "Wind Anchor（风的锚）", duration: 206 },
      { name: "Golden Flood（金色的洪流）", duration: 238 }, { name: "Breeze Smoke（微风的烟雾）", duration: 245 }, { name: "Winter Meridian（冬天的子午线）", duration: 268 },
      { name: "Fable Stone（寓言的石头）", duration: 219 } ] },
    { name: "Marrow Garden", type: "专辑", date: "2035-03-22", songs: [
      { name: "Marrow Garden（骨髓的花园）", duration: 239 }, { name: "Paperplane Wood（纸飞机的树林）", duration: 349 }, { name: "Rust Compass（锈迹的罗盘）", duration: 182 },
      { name: "Harbor Frost（港湾的霜）", duration: 147 }, { name: "Hill Leaf（山丘的叶）", duration: 202 }, { name: "Forest Loam（森林的沃土）", duration: 392 },
      { name: "Ice Moss（冰的青苔）", duration: 143 }, { name: "Heart Lake（心的湖）", duration: 237 }, { name: "Mist Vapor（薄雾的雾霭）", duration: 222 },
      { name: "Paperplane Quiet（纸飞机的寂静）", duration: 240 } ] },
    { name: "Lantern Loam", type: "EP", date: "2036-01-19", songs: [
      { name: "Lantern Loam（灯笼的沃土）", duration: 225 }, { name: "Forest Lake（森林的湖）", duration: 355 }, { name: "Soil Crescent（土壤的新月）", duration: 234 },
      { name: "Coral Soil（珊瑚的土壤）", duration: 411 } ] },
    { name: "Cloud Flood", type: "专辑", date: "2037-02-06", songs: [
      { name: "Cloud Flood（云的洪流）", duration: 140 }, { name: "Quiet Silver（寂静的银色）", duration: 232 }, { name: "Ridge Sea（山脊的海）", duration: 232 },
      { name: "Ember Petal（余烬的花瓣）", duration: 204 }, { name: "Ballet Spark（芭蕾的火花）", duration: 234 }, { name: "Veil Blossom（帷幕的花开）", duration: 232 },
      { name: "Faded Bloom（褪色的绽放）", duration: 216 }, { name: "Dust Moon（尘埃的月亮）", duration: 221 }, { name: "Sun Coral（太阳的珊瑚）", duration: 233 },
      { name: "Leaf Overcast（叶的阴云）", duration: 228 }, { name: "Petal Golden（花瓣的金色）", duration: 256 } ] },
    { name: "Wind Sea", type: "EP", date: "2038-01-30", songs: [
      { name: "Wind Sea（风的海）", duration: 351 }, { name: "Silk Mirrors（丝绸的镜子）", duration: 183 }, { name: "Plain Cliff（平原的断崖）", duration: 224 },
      { name: "Cinder Star（炭烬的星）", duration: 221 }, { name: "Breeze Pebble（微风的卵石）", duration: 235 }, { name: "Asphalt Gravel（柏油的砾石）", duration: 204 } ] },
    { name: "Circle Carousel", type: "EP", date: "2038-12-18", songs: [
      { name: "Circle Carousel（圆圈的旋转木马）", duration: 222 }, { name: "Iron Feather（铁的羽毛）", duration: 213 }, { name: "Sky Broken（天空的破碎）", duration: 190 },
      { name: "Star Frost（星的霜）", duration: 212 }, { name: "Flood Smoke（洪流的烟雾）", duration: 238 } ] },
    { name: "Haze Blanket", type: "EP", date: "2040-01-04", songs: [
      { name: "Haze Blanket（轻雾的绒毯）", duration: 243 }, { name: "Static Haze（静电的轻雾）", duration: 160 }, { name: "Quiet Shallow（寂静的浅滩）", duration: 218 },
      { name: "Daylight Concrete（日光的水泥）", duration: 389 }, { name: "Dust Shore（尘埃的岸边）", duration: 201 }, { name: "Path Midnight（小径的午夜）", duration: 202 } ] },
    { name: "Overcast Pebble", type: "单曲", date: "2040-11-24", songs: [
      { name: "Overcast Pebble（阴云的卵石）", duration: 208 } ] },
    { name: "Veil Dust", type: "EP", date: "2041-10-29", songs: [
      { name: "Veil Dust（帷幕的尘埃）", duration: 208 }, { name: "Wish Window（愿望的窗）", duration: 221 }, { name: "Spark Hollow（火花的空洞）", duration: 216 },
      { name: "Motion Snow（律动的雪）", duration: 242 }, { name: "Crystal Breeze（水晶的微风）", duration: 209 }, { name: "Pond Static（池塘的静电）", duration: 205 } ] },
    { name: "Ballet Winter", type: "EP", date: "2042-11-12", songs: [
      { name: "Ballet Winter（芭蕾的冬天）", duration: 248 }, { name: "Feather Signal（羽毛的信号）", duration: 240 }, { name: "Sand Meridian（沙的子午线）", duration: 203 },
      { name: "Whisper Dust（低语的尘埃）", duration: 263 }, { name: "Meadow Pebble（草地的卵石）", duration: 232 }, { name: "Tower Desert（塔的荒原）", duration: 213 } ] },
    { name: "Ivory Stream", type: "单曲", date: "2043-10-14", songs: [
      { name: "Ivory Stream（象牙的溪流）", duration: 180 } ] },
    { name: "Silence Grain", type: "专辑", date: "2044-10-29", songs: [
      { name: "Silence Grain（沉寂的颗粒）", duration: 236 }, { name: "Slope Storm（斜坡的风暴）", duration: 229 }, { name: "Soil Circle（土壤的圆圈）", duration: 270 },
      { name: "Lake Cloud（湖的云）", duration: 237 }, { name: "Storm Harbor（风暴的港湾）", duration: 242 }, { name: "Velvet Dust（天鹅绒的尘埃）", duration: 234 },
      { name: "Veil Fleet（帷幕的舰队）", duration: 232 }, { name: "Journey Vine（旅程的藤蔓）", duration: 190 }, { name: "Drift Journey（漂流的旅程）", duration: 211 } ] },
    { name: "Asphalt Pulse", type: "专辑", date: "2045-10-08", songs: [
      { name: "Asphalt Pulse（柏油的脉冲）", duration: 167 }, { name: "Fleet Silver（舰队的银色）", duration: 244 }, { name: "Meadow Wish（草地的愿望）", duration: 240 },
      { name: "Rain Soil（雨的土壤）", duration: 202 }, { name: "Highway Dawn（公路的黎明）", duration: 237 }, { name: "Nest Storm（巢的风暴）", duration: 217 },
      { name: "Signal Wish（信号的愿望）", duration: 146 }, { name: "Harbor Cinder（港湾的炭烬）", duration: 139 }, { name: "Breeze Snow（微风的雪）", duration: 205 },
      { name: "Motel Plain（汽车旅馆的平原）", duration: 368 } ] },
    { name: "Coral Pond", type: "EP", date: "2046-09-01", songs: [
      { name: "Coral Pond（珊瑚的池塘）", duration: 232 }, { name: "Faded Ember（褪色的余烬）", duration: 229 }, { name: "Stream Overcast（溪流的阴云）", duration: 232 },
      { name: "Salt Meridian（盐的子午线）", duration: 234 }, { name: "Smoke Drift（烟雾的漂流）", duration: 270 } ] },
    { name: "Vine Thaw", type: "单曲", date: "2047-08-10", songs: [
      { name: "Vine Thaw（藤蔓的融雪）", duration: 238 } ] },
    { name: "Plain Nest", type: "EP", date: "2048-07-15", songs: [
      { name: "Plain Nest（平原的巢）", duration: 203 }, { name: "Compass Song（罗盘的歌）", duration: 243 }, { name: "Fleet Ocean（舰队的海洋）", duration: 258 },
      { name: "Wood Star（树林的星）", duration: 202 }, { name: "Orbit Fable（轨道的寓言）", duration: 211 } ] },
    { name: "Smoke Marrow", type: "单曲", date: "2049-08-26", songs: [
      { name: "Smoke Marrow（烟雾的骨髓）", duration: 216 } ] },
    { name: "Coral Vapor", type: "EP", date: "2050-06-06", songs: [
      { name: "Coral Vapor（珊瑚的雾霭）", duration: 215 }, { name: "Sun Tower（太阳的塔）", duration: 256 }, { name: "Faded Tree（褪色的树）", duration: 144 },
      { name: "Flame Cloud（火焰的云）", duration: 210 }, { name: "Undertow Flood（暗流的洪流）", duration: 179 } ] },
    ],
  "Pastel*Palettes": [
    { name: "TITLE IDOL", type: "专辑", date: "2018-09-19", songs: [
       { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", duration: 220 }, { name: "パスパレボリューションず☆（Pastel Revolution☆）", duration: 215 },
       { name: "ゆら・ゆらRing-Dong-Dance", duration: 225 }, { name: "はなまる♡デイズ（花丸♡Days）", duration: 218 },
       { name: "す、好きなんかじゃない!（才、才不是喜欢呢！）", duration: 210 }, { name: "天下トーイツA to Z☆（天下统一A to Z☆）", duration: 222 },
       { name: "Wonderland Girl", duration: 216 }, { name: "きゅ〜まい＊flower（Q-mai＊flower）", duration: 214 } ] },
    { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", type: "单曲", date: "2017-05-17", songs: [ { name: "しゅわりん☆どり〜みん（Shuwarin☆Dreaming）", duration: 220 } ] },
    { name: "パスパレボリューションず☆（Pastel Revolution☆）", type: "单曲", date: "2017-08-30", songs: [ { name: "パスパレボリューションず☆（Pastel Revolution☆）", duration: 215 } ] },
    { name: "はなまる♡デイズ（花丸♡Days）", type: "单曲", date: "2017-11-15", songs: [ { name: "はなまる♡デイズ（花丸♡Days）", duration: 218 } ] },
    { name: "天下トーイツA to Z☆（天下统一A to Z☆）", type: "单曲", date: "2018-02-14", songs: [ { name: "天下トーイツA to Z☆（天下统一A to Z☆）", duration: 222 } ] },
    { name: "Wonderland Girl", type: "单曲", date: "2018-06-20", songs: [ { name: "Wonderland Girl", duration: 216 } ] },
      { name: "桜の春休み", type: "专辑", date: "2026-05-30", songs: [
      { name: "桜の春休み（樱花之春假）", duration: 198 }, { name: "青空の水面（青空之水面）", duration: 232 }, { name: "黄昏の風鈴（黄昏之风铃）", duration: 222 },
      { name: "水面の夕霧（水面之暮霭）", duration: 211 }, { name: "星の詩（星之诗）", duration: 312 }, { name: "星屑の葉（星屑之叶）", duration: 261 },
      { name: "夕暮れの青空（黄昏之青空）", duration: 223 }, { name: "岬の星（海角之星）", duration: 203 }, { name: "石の眩しい（耀眼的石）", duration: 211 },
      { name: "障子の歌（障子之歌）", duration: 179 }, { name: "卒業の唄（毕业之歌谣）", duration: 227 } ] },
    { name: "木霊の夕焼け", type: "EP", date: "2027-05-03", songs: [
      { name: "木霊の夕焼け（树魂之晚霞）", duration: 232 }, { name: "想いの響き（思念之回响）", duration: 226 }, { name: "涙の部活（泪之社团）", duration: 197 },
      { name: "泉の残照（泉之残照）", duration: 213 }, { name: "虹の波音（彩虹之潮声）", duration: 207 }, { name: "岩の星空（岩石之星空）", duration: 233 } ] },
    { name: "調べの夜明け", type: "EP", date: "2028-05-31", songs: [
      { name: "調べの夜明け（曲调之黎明）", duration: 234 }, { name: "潮騒の夜風（潮鸣之夜风）", duration: 239 }, { name: "静かの枝（静谧枝）", duration: 179 },
      { name: "朝霧の影（晨雾之影）", duration: 222 }, { name: "追憶の制服（追忆之制服）", duration: 186 }, { name: "恋の遠い（遥远的恋）", duration: 250 } ] },
    { name: "屋上の夏休み", type: "专辑", date: "2029-05-23", songs: [
      { name: "屋上の夏休み（天台之暑假）", duration: 154 }, { name: "残照の夕暮れ（残照之黄昏）", duration: 220 }, { name: "雪の霧（雪之雾）", duration: 193 },
      { name: "流れ星の砂（流星之沙）", duration: 204 }, { name: "黄昏の岩（黄昏之岩石）", duration: 226 }, { name: "虹の文化祭（彩虹之文化祭）", duration: 150 },
      { name: "春休みの唄（春假之歌谣）", duration: 232 }, { name: "声の風（声之风）", duration: 222 }, { name: "体育祭の波音（体育祭之潮声）", duration: 213 },
      { name: "若葉の湖（新叶之湖）", duration: 258 }, { name: "文化祭の冬晴れ（文化祭之冬日晴空）", duration: 225 } ] },
    { name: "流れ星の影", type: "专辑", date: "2030-04-08", songs: [
      { name: "流れ星の影（流星之影）", duration: 227 }, { name: "星屑の岸（星屑之岸）", duration: 228 }, { name: "想いの放課後（思念之放学后）", duration: 253 },
      { name: "夢の浜（梦之海滨）", duration: 122 }, { name: "残響の月（残响之月）", duration: 209 }, { name: "響きの黄昏（回响之黄昏）", duration: 136 },
      { name: "月光の制服（月光之制服）", duration: 183 }, { name: "放課後の土（放学后之土）", duration: 201 }, { name: "雪の石（雪之石）", duration: 226 },
      { name: "冬晴れの自転車（冬日晴空之单车）", duration: 204 } ] },
    { name: "湖の流れ星", type: "单曲", date: "2031-04-19", songs: [
      { name: "湖の流れ星（湖之流星）", duration: 228 } ] },
    { name: "水面の月光", type: "专辑", date: "2032-02-23", songs: [
      { name: "水面の月光（水面之月光）", duration: 210 }, { name: "影の潮騒（影之潮鸣）", duration: 198 }, { name: "記憶の霞（记忆之霞）", duration: 227 },
      { name: "島の障子（岛之障子）", duration: 232 }, { name: "滝の時（瀑布之时光）", duration: 229 }, { name: "微笑の月光（微笑之月光）", duration: 239 },
      { name: "岸の夜（岸之夜）", duration: 130 }, { name: "静かの滝（静谧瀑布）", duration: 236 }, { name: "枝の畳（枝之榻榻米）", duration: 178 },
      { name: "流れ星の灯り（流星之灯火）", duration: 238 } ] },
    { name: "春休みの星屑", type: "单曲", date: "2033-04-30", songs: [
      { name: "春休みの星屑（春假之星屑）", duration: 164 } ] },
    { name: "葉の三日月", type: "专辑", date: "2034-04-09", songs: [
      { name: "葉の三日月（叶之新月）", duration: 229 }, { name: "涙の残響（泪之残响）", duration: 380 }, { name: "蕾の蝉（花苞之蝉）", duration: 226 },
      { name: "若葉の夏祭り（新叶之夏日祭）", duration: 196 }, { name: "文化祭の制服（文化祭之制服）", duration: 140 }, { name: "帰り道の朝霧（归途之晨雾）", duration: 239 },
      { name: "流星の空（流星之天空）", duration: 225 }, { name: "満月の風鈴（满月之风铃）", duration: 200 }, { name: "凪の屋上（风平浪静之天台）", duration: 134 },
      { name: "朧月の部活（胧月之社团）", duration: 214 } ] },
    { name: "教室の雲", type: "专辑", date: "2035-02-21", songs: [
      { name: "教室の雲（教室之云）", duration: 213 }, { name: "銀河の優しい（温柔的银河）", duration: 198 }, { name: "白いの波音（纯白的潮声）", duration: 218 },
      { name: "流れ星の優しい（温柔的流星）", duration: 364 }, { name: "夏祭りの泉（夏日祭之泉）", duration: 237 }, { name: "凪の木霊（风平浪静之树魂）", duration: 215 },
      { name: "追憶の残響（追忆之残响）", duration: 404 }, { name: "心の調べ（心之曲调）", duration: 229 }, { name: "雪の歌（雪之歌）", duration: 206 },
      { name: "想いの小さな（微小的的思念）", duration: 206 } ] },
    { name: "教室の霧", type: "专辑", date: "2036-01-15", songs: [
      { name: "教室の霧（教室之雾）", duration: 202 }, { name: "滝の陽だまり（瀑布之暖阳）", duration: 234 }, { name: "満月の虹（满月之彩虹）", duration: 203 },
      { name: "暁の虹（拂晓之彩虹）", duration: 151 }, { name: "朝霧の潮騒（晨雾之潮鸣）", duration: 320 }, { name: "黄昏の海辺（黄昏之海边）", duration: 172 },
      { name: "石の海辺（石之海边）", duration: 220 }, { name: "青いの光景（湛蓝光景）", duration: 215 }, { name: "旋律の土（旋律之土）", duration: 156 },
      { name: "歌の文化祭（歌之文化祭）", duration: 237 } ] },
    { name: "波の優しい", type: "专辑", date: "2037-01-07", songs: [
      { name: "波の優しい（温柔的波）", duration: 220 }, { name: "季節の恋（季节之恋）", duration: 265 }, { name: "優しいの暁（温柔拂晓）", duration: 229 },
      { name: "朝霧の夏休み（晨雾之暑假）", duration: 169 }, { name: "静かの冬休み（静谧寒假）", duration: 235 }, { name: "海の追憶（海之追忆）", duration: 227 },
      { name: "陽だまりの島（暖阳之岛）", duration: 235 }, { name: "星屑の青空（星屑之青空）", duration: 224 }, { name: "時の眩しい（耀眼的时光）", duration: 406 },
      { name: "花の波（花之波）", duration: 217 }, { name: "花火の陽だまり（花火之暖阳）", duration: 230 } ] },
    { name: "雨の季節", type: "单曲", date: "2038-01-23", songs: [
      { name: "雨の季節（雨之季节）", duration: 208 } ] },
    { name: "遠いの雲", type: "专辑", date: "2039-01-16", songs: [
      { name: "遠いの雲（遥远云）", duration: 170 }, { name: "秋風の川（秋风之河）", duration: 205 }, { name: "湖の枝（湖之枝）", duration: 234 },
      { name: "氷の心（冰之心）", duration: 213 }, { name: "涙の文化祭（泪之文化祭）", duration: 237 }, { name: "夢の春休み（梦之春假）", duration: 221 },
      { name: "紅葉の自転車（红叶之单车）", duration: 252 }, { name: "影の畳（影之榻榻米）", duration: 253 }, { name: "縁側の黒板（檐廊之黑板）", duration: 214 } ] },
    { name: "文化祭の湖", type: "单曲", date: "2039-12-09", songs: [
      { name: "文化祭の湖（文化祭之湖）", duration: 232 } ] },
    { name: "蛍の畳", type: "专辑", date: "2040-10-14", songs: [
      { name: "蛍の畳（萤火虫之榻榻米）", duration: 214 }, { name: "障子の蝉（障子之蝉）", duration: 239 }, { name: "星の月（星之月）", duration: 230 },
      { name: "夜の風鈴（夜之风铃）", duration: 214 }, { name: "蝉の影（蝉之影）", duration: 227 }, { name: "恋の雨（恋之雨）", duration: 223 },
      { name: "風の心（风之心）", duration: 199 } ] },
    { name: "光の蛍", type: "专辑", date: "2041-11-11", songs: [
      { name: "光の蛍（光之萤火虫）", duration: 207 }, { name: "声の調べ（声之曲调）", duration: 236 }, { name: "秋風の月光（秋风之月光）", duration: 301 },
      { name: "夜明けの約束（黎明之约定）", duration: 199 }, { name: "風の帰り道（风之归途）", duration: 225 }, { name: "残照の波（残照之波）", duration: 325 },
      { name: "流れ星の教室（流星之教室）", duration: 394 }, { name: "響きの涙（回响之泪）", duration: 339 }, { name: "星屑の木漏れ日（星屑之林间光斑）", duration: 227 } ] },
    { name: "恋の雨音", type: "专辑", date: "2042-11-15", songs: [
      { name: "恋の雨音（恋之雨声）", duration: 237 }, { name: "給食の夏休み（午餐之暑假）", duration: 236 }, { name: "想いの暁（思念之拂晓）", duration: 233 },
      { name: "雪の唄（雪之歌谣）", duration: 209 }, { name: "冬休みの約束（寒假之约定）", duration: 218 }, { name: "実の時（果实之时光）", duration: 173 },
      { name: "岩の若葉（岩石之新叶）", duration: 235 }, { name: "白いの島（纯白的岛）", duration: 242 }, { name: "小さなの約束（微小的约定）", duration: 158 } ] },
    { name: "川の月光", type: "专辑", date: "2043-11-24", songs: [
      { name: "川の月光（河之月光）", duration: 222 }, { name: "花火の声（花火之声）", duration: 363 }, { name: "秋風の島（秋风之岛）", duration: 219 },
      { name: "光景の季節（光景之季节）", duration: 210 }, { name: "雲の言葉（云之言语）", duration: 227 }, { name: "朝焼けの体育祭（朝霞之体育祭）", duration: 237 },
      { name: "影の街（影之街）", duration: 239 }, { name: "湖の冬晴れ（湖之冬日晴空）", duration: 235 } ] },
    { name: "音色の渓", type: "EP", date: "2044-09-12", songs: [
      { name: "音色の渓（音色之溪）", duration: 208 }, { name: "風鈴の音色（风铃之音色）", duration: 213 }, { name: "夜明けの浜（黎明之海滨）", duration: 211 },
      { name: "優しいの修学旅行（温柔修学旅行）", duration: 218 }, { name: "星雲の歌（星云之歌）", duration: 215 } ] },
    { name: "霧の静か", type: "专辑", date: "2045-10-28", songs: [
      { name: "霧の静か（静谧的雾）", duration: 122 }, { name: "給食の夜明け（午餐之黎明）", duration: 224 }, { name: "紅葉の時（红叶之时光）", duration: 244 },
      { name: "縁側の冬休み（檐廊之寒假）", duration: 217 }, { name: "放課後の雪化粧（放学后之银装素裹）", duration: 229 }, { name: "銀河の氷（银河之冰）", duration: 236 },
      { name: "追憶の桜（追忆之樱花）", duration: 258 }, { name: "岬の想い（海角之思念）", duration: 238 }, { name: "朧月の調べ（胧月之曲调）", duration: 231 },
      { name: "心音の夕霧（心跳之暮霭）", duration: 211 } ] },
    { name: "夕焼けの歌", type: "专辑", date: "2046-09-02", songs: [
      { name: "夕焼けの歌（晚霞之歌）", duration: 234 }, { name: "屋上の木霊（天台之树魂）", duration: 144 }, { name: "黄昏の三日月（黄昏之新月）", duration: 297 },
      { name: "星雲の流れ星（星云之流星）", duration: 160 }, { name: "氷の光（冰之光）", duration: 223 }, { name: "自転車の星雲（单车之星云）", duration: 186 },
      { name: "蕾の雲（花苞之云）", duration: 209 } ] },
    { name: "屋上の空", type: "专辑", date: "2047-07-08", songs: [
      { name: "屋上の空（天台之天空）", duration: 123 }, { name: "三日月の朧月（新月之胧月）", duration: 202 }, { name: "岸の星（岸之星）", duration: 257 },
      { name: "朝霧の文化祭（晨雾之文化祭）", duration: 229 }, { name: "声の詩（声之诗）", duration: 226 }, { name: "心音の透明（透明的心跳）", duration: 228 },
      { name: "波音の旋律（潮声之旋律）", duration: 199 }, { name: "雲の土（云之土）", duration: 211 }, { name: "心の花火（心之花火）", duration: 221 } ] },
    { name: "制服の放課後", type: "专辑", date: "2048-08-05", songs: [
      { name: "制服の放課後（制服之放学后）", duration: 214 }, { name: "銀河の時（银河之时光）", duration: 197 }, { name: "黄昏の花火（黄昏之花火）", duration: 197 },
      { name: "雪の心音（雪之心跳）", duration: 159 }, { name: "蛍の制服（萤火虫之制服）", duration: 200 }, { name: "春休みの浴衣（春假之浴衣）", duration: 213 },
      { name: "若葉の言葉（新叶之言语）", duration: 196 }, { name: "星屑の夏休み（星屑之暑假）", duration: 189 } ] },
    { name: "黒板の旋律", type: "专辑", date: "2049-07-10", songs: [
      { name: "黒板の旋律（黑板之旋律）", duration: 200 }, { name: "追憶の屋上（追忆之天台）", duration: 225 }, { name: "音色の浜（音色之海滨）", duration: 205 },
      { name: "雪の想い（雪之思念）", duration: 175 }, { name: "春風の優しい（温柔的春风）", duration: 237 }, { name: "波の心（波之心）", duration: 208 },
      { name: "若葉の星空（新叶之星空）", duration: 218 }, { name: "調べの黒板（曲调之黑板）", duration: 217 }, { name: "蛍の優しい（温柔的萤火虫）", duration: 181 },
      { name: "雪化粧の花火（银装素裹之花火）", duration: 228 } ] },
    { name: "雨音の冬晴れ", type: "专辑", date: "2050-05-30", songs: [
      { name: "雨音の冬晴れ（雨声之冬日晴空）", duration: 289 }, { name: "夜の水面（夜之水面）", duration: 211 }, { name: "透明の三日月（透明新月）", duration: 187 },
      { name: "夢の夜（梦之夜）", duration: 238 }, { name: "風の根（风之根）", duration: 175 }, { name: "夕霧の歌（暮霭之歌）", duration: 201 },
      { name: "蕾の影（花苞之影）", duration: 215 }, { name: "自転車の霜（单车之霜）", duration: 210 }, { name: "満月の旋律（满月之旋律）", duration: 218 },
      { name: "部活の光景（社团之光景）", duration: 198 }, { name: "花の実（花之果实）", duration: 199 } ] },
    ],
  "Hello, Happy World!": [
    { name: "えがおのオーケストラっ!（笑容管弦乐！）", type: "单曲", date: "2017-05-17", songs: [ { name: "えがおのオーケストラっ!（笑容管弦乐！）", duration: 225 } ] },
    { name: "ハッピーシンセサイザ（Happy Synthesizer）", type: "单曲", date: "2017-08-30", songs: [ { name: "ハッピーシンセサイザ（Happy Synthesizer）", duration: 230 } ] },
    { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", type: "单曲", date: "2017-11-15", songs: [ { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", duration: 220 } ] },
    { name: "せかいのっびのびトラベル（世界的悠闲旅行）", type: "单曲", date: "2018-02-14", songs: [ { name: "せかいのっびのびトラベル（世界的悠闲旅行）", duration: 225 } ] },
    { name: "キラキラ☆Festa Day!", type: "单曲", date: "2018-06-20", songs: [ { name: "キラキラ☆Festa Day!", duration: 218 } ] },
    { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", type: "单曲", date: "2018-10-10", songs: [ { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", duration: 212 } ] },
      { name: "夏休みの落ち葉", type: "专辑", date: "2026-06-20", songs: [
      { name: "夏休みの落ち葉（暑假之落叶）", duration: 218 }, { name: "波の調べ（波之曲调）", duration: 240 }, { name: "木漏れ日の街（林间光斑之街）", duration: 269 },
      { name: "音色の夜（音色之夜）", duration: 330 }, { name: "自転車の朝焼け（单车之朝霞）", duration: 200 }, { name: "小さなの冬晴れ（微小的冬日晴空）", duration: 210 },
      { name: "優しいの岬（温柔海角）", duration: 206 }, { name: "時の流星（时光之流星）", duration: 255 } ] },
    { name: "霞の遠い", type: "专辑", date: "2027-06-18", songs: [
      { name: "霞の遠い（遥远的霞）", duration: 175 }, { name: "光景の雪（光景之雪）", duration: 411 }, { name: "光の土（光之土）", duration: 237 },
      { name: "黒板の響き（黑板之回响）", duration: 226 }, { name: "実の自転車（果实之单车）", duration: 160 }, { name: "季節の海（季节之海）", duration: 209 },
      { name: "夕暮れの透明（透明的黄昏）", duration: 202 }, { name: "帰り道の恋（归途之恋）", duration: 202 }, { name: "障子の朝霧（障子之晨雾）", duration: 197 },
      { name: "星雲の夢（星云之梦）", duration: 221 } ] },
    { name: "泉の凪", type: "专辑", date: "2028-05-20", songs: [
      { name: "泉の凪（泉之风平浪静）", duration: 249 }, { name: "蛍の空（萤火虫之天空）", duration: 229 }, { name: "泉の夕霧（泉之暮霭）", duration: 224 },
      { name: "秋風の紅葉（秋风之红叶）", duration: 201 }, { name: "三日月の泉（新月之泉）", duration: 130 }, { name: "青いの満月（湛蓝满月）", duration: 227 },
      { name: "残響の落ち葉（残响之落叶）", duration: 218 }, { name: "春休みの青い（湛蓝的春假）", duration: 221 }, { name: "銀河の言葉（银河之言语）", duration: 229 } ] },
    { name: "氷の青い", type: "专辑", date: "2029-05-23", songs: [
      { name: "氷の青い（湛蓝的冰）", duration: 222 }, { name: "夜の土（夜之土）", duration: 210 }, { name: "空の朝霧（天空之晨雾）", duration: 206 },
      { name: "恋の心（恋之心）", duration: 221 }, { name: "小さなの雪（微小的雪）", duration: 210 }, { name: "響きの砂（回响之沙）", duration: 227 },
      { name: "眩しいの霜（耀眼霜）", duration: 230 }, { name: "旋律の朧月（旋律之胧月）", duration: 186 }, { name: "遠いの縁側（遥远檐廊）", duration: 221 },
      { name: "木霊の蝉（树魂之蝉）", duration: 164 }, { name: "文化祭の唄（文化祭之歌谣）", duration: 192 } ] },
    { name: "窓の涙", type: "单曲", date: "2030-03-24", songs: [
      { name: "窓の涙（窗之泪）", duration: 187 } ] },
    { name: "朝霧の詩", type: "专辑", date: "2031-03-26", songs: [
      { name: "朝霧の詩（晨雾之诗）", duration: 222 }, { name: "波の遠い（遥远的波）", duration: 208 }, { name: "白いの朝霧（纯白的晨雾）", duration: 226 },
      { name: "風鈴の岸（风铃之岸）", duration: 139 }, { name: "恋の土（恋之土）", duration: 199 }, { name: "透明の春休み（透明春假）", duration: 228 },
      { name: "星空の影（星空之影）", duration: 209 }, { name: "縁側の若葉（檐廊之新叶）", duration: 213 }, { name: "雨の灯り（雨之灯火）", duration: 235 },
      { name: "風鈴の桜（风铃之樱花）", duration: 224 } ] },
    { name: "優しいの夜明け", type: "EP", date: "2032-04-19", songs: [
      { name: "優しいの夜明け（温柔黎明）", duration: 209 }, { name: "土の風鈴（土之风铃）", duration: 263 }, { name: "優しいの島（温柔岛）", duration: 228 },
      { name: "声の岩（声之岩石）", duration: 227 }, { name: "音色の青い（湛蓝的音色）", duration: 217 }, { name: "花火の花（花火之花）", duration: 234 } ] },
    { name: "影の霞", type: "专辑", date: "2033-02-12", songs: [
      { name: "影の霞（影之霞）", duration: 207 }, { name: "夜の給食（夜之午餐）", duration: 140 }, { name: "響きの波音（回响之潮声）", duration: 237 },
      { name: "土の微笑（土之微笑）", duration: 232 }, { name: "窓の冬晴れ（窗之冬日晴空）", duration: 231 }, { name: "水面の海辺（水面之海边）", duration: 184 },
      { name: "凪の泉（风平浪静之泉）", duration: 413 }, { name: "春休みの土（春假之土）", duration: 229 }, { name: "雪化粧の木霊（银装素裹之树魂）", duration: 232 },
      { name: "想いの星空（思念之星空）", duration: 266 }, { name: "制服の海（制服之海）", duration: 125 } ] },
    { name: "向日葵の遠い", type: "专辑", date: "2034-02-06", songs: [
      { name: "向日葵の遠い（遥远的向日葵）", duration: 208 }, { name: "夕霧の渓（暮霭之溪）", duration: 221 }, { name: "滝の夏祭り（瀑布之夏日祭）", duration: 203 },
      { name: "追憶の唄（追忆之歌谣）", duration: 260 }, { name: "眩しいの落ち葉（耀眼落叶）", duration: 313 }, { name: "雪化粧の歌（银装素裹之歌）", duration: 225 },
      { name: "枝の雲（枝之云）", duration: 209 }, { name: "蝉の涙（蝉之泪）", duration: 246 }, { name: "星屑の枝（星屑之枝）", duration: 155 } ] },
    { name: "渓の砂", type: "EP", date: "2035-02-07", songs: [
      { name: "渓の砂（溪之沙）", duration: 222 }, { name: "月光の朝霧（月光之晨雾）", duration: 247 }, { name: "根の光（根之光）", duration: 227 },
      { name: "言葉の記憶（言语之记忆）", duration: 220 } ] },
    { name: "落ち葉の約束", type: "单曲", date: "2036-02-18", songs: [
      { name: "落ち葉の約束（落叶之约定）", duration: 201 } ] },
    { name: "夏祭りの体育祭", type: "专辑", date: "2037-02-13", songs: [
      { name: "夏祭りの体育祭（夏日祭之体育祭）", duration: 211 }, { name: "三日月の給食（新月之午餐）", duration: 394 }, { name: "岸の黒板（岸之黑板）", duration: 226 },
      { name: "修学旅行の秋風（修学旅行之秋风）", duration: 227 }, { name: "遠いの波音（遥远潮声）", duration: 178 }, { name: "夜の詩（夜之诗）", duration: 218 },
      { name: "青空の落ち葉（青空之落叶）", duration: 229 } ] },
    { name: "涙の恋", type: "单曲", date: "2037-11-30", songs: [
      { name: "涙の恋（泪之恋）", duration: 223 } ] },
    { name: "眩しいの春休み", type: "专辑", date: "2039-01-26", songs: [
      { name: "眩しいの春休み（耀眼春假）", duration: 223 }, { name: "障子の滝（障子之瀑布）", duration: 179 }, { name: "風の滝（风之瀑布）", duration: 134 },
      { name: "海辺の眩しい（耀眼的海边）", duration: 202 }, { name: "岸の渓（岸之溪）", duration: 222 }, { name: "渓の石（溪之石）", duration: 253 },
      { name: "蕾の季節（花苞之季节）", duration: 184 }, { name: "木漏れ日の静か（静谧的林间光斑）", duration: 203 } ] },
    { name: "石の岬", type: "专辑", date: "2039-11-29", songs: [
      { name: "石の岬（石之海角）", duration: 166 }, { name: "霧の雪化粧（雾之银装素裹）", duration: 209 }, { name: "旋律の三日月（旋律之新月）", duration: 232 },
      { name: "心音の霞（心跳之霞）", duration: 228 }, { name: "岩の実（岩石之果实）", duration: 218 }, { name: "月光の部活（月光之社团）", duration: 240 },
      { name: "唄の灯り（歌谣之灯火）", duration: 221 }, { name: "実の言葉（果实之言语）", duration: 201 }, { name: "記憶の夜（记忆之夜）", duration: 131 },
      { name: "海辺の月光（海边之月光）", duration: 203 }, { name: "言葉の街（言语之街）", duration: 223 } ] },
    { name: "星雲の星", type: "专辑", date: "2040-12-05", songs: [
      { name: "星雲の星（星云之星）", duration: 210 }, { name: "月光の歌（月光之歌）", duration: 122 }, { name: "約束の空（约定之天空）", duration: 206 },
      { name: "夕霧の灯り（暮霭之灯火）", duration: 235 }, { name: "向日葵の帰り道（向日葵之归途）", duration: 149 }, { name: "雪の土（雪之土）", duration: 231 },
      { name: "夏祭りの氷（夏日祭之冰）", duration: 205 } ] },
    { name: "畳の白い", type: "专辑", date: "2041-10-24", songs: [
      { name: "畳の白い（纯白的的榻榻米）", duration: 204 }, { name: "凪の蛍（风平浪静之萤火虫）", duration: 257 }, { name: "蝉の旋律（蝉之旋律）", duration: 253 },
      { name: "若葉の黄昏（新叶之黄昏）", duration: 208 }, { name: "風鈴の小さな（微小的的风铃）", duration: 195 }, { name: "黄昏の微笑（黄昏之微笑）", duration: 230 },
      { name: "岸の卒業（岸之毕业）", duration: 265 }, { name: "暁の木霊（拂晓之树魂）", duration: 210 } ] },
    { name: "月光の落ち葉", type: "EP", date: "2042-10-09", songs: [
      { name: "月光の落ち葉（月光之落叶）", duration: 219 }, { name: "残響の朧月（残响之胧月）", duration: 246 }, { name: "夕霧の遠い（遥远的暮霭）", duration: 237 },
      { name: "木霊の花火（树魂之花火）", duration: 218 }, { name: "滝の夏休み（瀑布之暑假）", duration: 133 }, { name: "枝の岩（枝之岩石）", duration: 210 } ] },
    { name: "修学旅行の蛍", type: "专辑", date: "2043-11-15", songs: [
      { name: "修学旅行の蛍（修学旅行之萤火虫）", duration: 218 }, { name: "光景の夕霧（光景之暮霭）", duration: 236 }, { name: "約束の木漏れ日（约定之林间光斑）", duration: 228 },
      { name: "教室の詩（教室之诗）", duration: 241 }, { name: "波音の心（潮声之心）", duration: 158 }, { name: "体育祭の青い（湛蓝的体育祭）", duration: 218 },
      { name: "夏祭りの教室（夏日祭之教室）", duration: 187 } ] },
    { name: "光景の秋風", type: "专辑", date: "2044-11-03", songs: [
      { name: "光景の秋風（光景之秋风）", duration: 176 }, { name: "屋上の光（天台之光）", duration: 243 }, { name: "花の心音（花之心跳）", duration: 206 },
      { name: "根の恋（根之恋）", duration: 224 }, { name: "花火の秋風（花火之秋风）", duration: 151 }, { name: "透明の星空（透明星空）", duration: 180 },
      { name: "記憶の詩（记忆之诗）", duration: 176 }, { name: "教室の恋（教室之恋）", duration: 246 }, { name: "流星の季節（流星之季节）", duration: 183 },
      { name: "泉の枝（泉之枝）", duration: 235 }, { name: "街の満月（街之满月）", duration: 150 } ] },
    { name: "心の屋上", type: "专辑", date: "2045-09-22", songs: [
      { name: "心の屋上（心之天台）", duration: 239 }, { name: "旋律の雲（旋律之云）", duration: 213 }, { name: "海辺の心音（海边之心跳）", duration: 241 },
      { name: "心の詩（心之诗）", duration: 205 }, { name: "月光の時（月光之时光）", duration: 202 }, { name: "夜明けの氷（黎明之冰）", duration: 171 },
      { name: "青いの岬（湛蓝海角）", duration: 168 }, { name: "心音の静か（静谧的心跳）", duration: 181 }, { name: "青空の冬休み（青空之寒假）", duration: 269 },
      { name: "波音の街（潮声之街）", duration: 207 }, { name: "春休みの静か（静谧的春假）", duration: 168 } ] },
    { name: "灯りの修学旅行", type: "专辑", date: "2046-07-25", songs: [
      { name: "灯りの修学旅行（灯火之修学旅行）", duration: 137 }, { name: "春休みの畳（春假之榻榻米）", duration: 236 }, { name: "月の向日葵（月之向日葵）", duration: 301 },
      { name: "湖の土（湖之土）", duration: 210 }, { name: "体育祭の黒板（体育祭之黑板）", duration: 421 }, { name: "給食の雪（午餐之雪）", duration: 148 },
      { name: "泉の約束（泉之约定）", duration: 240 }, { name: "約束の調べ（约定之曲调）", duration: 229 }, { name: "畳の光（榻榻米之光）", duration: 222 },
      { name: "卒業の制服（毕业之制服）", duration: 217 } ] },
    { name: "心の空", type: "单曲", date: "2047-07-16", songs: [
      { name: "心の空（心之天空）", duration: 200 } ] },
    { name: "想いの畳", type: "EP", date: "2048-09-17", songs: [
      { name: "想いの畳（思念之榻榻米）", duration: 240 }, { name: "実の障子（果实之障子）", duration: 224 }, { name: "夢の銀河（梦之银河）", duration: 211 },
      { name: "星屑の給食（星屑之午餐）", duration: 299 }, { name: "紅葉の優しい（温柔的红叶）", duration: 228 }, { name: "流星の透明（透明的流星）", duration: 174 } ] },
    { name: "残照の青空", type: "单曲", date: "2049-07-16", songs: [
      { name: "残照の青空（残照之青空）", duration: 216 } ] },
    { name: "朝焼けの残照", type: "专辑", date: "2050-06-04", songs: [
      { name: "朝焼けの残照（朝霞之残照）", duration: 206 }, { name: "文化祭の光景（文化祭之光景）", duration: 148 }, { name: "実の島（果实之岛）", duration: 177 },
      { name: "朝霧の蛍（晨雾之萤火虫）", duration: 223 }, { name: "三日月の障子（新月之障子）", duration: 243 }, { name: "渓の残照（溪之残照）", duration: 176 },
      { name: "霧の冬晴れ（雾之冬日晴空）", duration: 225 }, { name: "想いの街（思念之街）", duration: 214 }, { name: "花の影（花之影）", duration: 154 },
      { name: "向日葵の青空（向日葵之青空）", duration: 251 }, { name: "縁側の放課後（檐廊之放学后）", duration: 186 } ] },
    ],
  "Morfonica": [
    { name: "Daylight -デイライト-（Daylight）", type: "单曲", date: "2020-05-27", songs: [ { name: "Daylight -デイライト-（Daylight）", duration: 240 } ] },
    { name: "ブルームブルーム（Bloom Bloom）", type: "单曲", date: "2020-08-26", songs: [ { name: "ブルームブルーム（Bloom Bloom）", duration: 235 } ] },
    { name: "開幕ゼノン（开幕Zenon）", type: "单曲", date: "2020-12-16", songs: [ { name: "開幕ゼノン（开幕Zenon）", duration: 230 } ] },
    { name: "はれるや（晴れるや）", type: "单曲", date: "2021-04-28", songs: [ { name: "はれるや（晴れるや）", duration: 228 } ] },
    { name: "The Circle Of...", type: "单曲", date: "2021-08-25", songs: [ { name: "The Circle Of...", duration: 242 } ] },
    { name: "Ever Sky Blue", type: "单曲", date: "2022-01-26", songs: [ { name: "Ever Sky Blue", duration: 238 } ] },
      { name: "海辺の白い", type: "EP", date: "2026-07-06", songs: [
      { name: "海辺の白い（纯白的的海边）", duration: 157 }, { name: "紅葉の蝉（红叶之蝉）", duration: 215 }, { name: "暁の桜（拂晓之樱花）", duration: 215 },
      { name: "白いの青い（纯白的湛蓝）", duration: 234 }, { name: "残照の波音（残照之潮声）", duration: 258 }, { name: "桜の向日葵（樱花之向日葵）", duration: 277 } ] },
    { name: "蝉の声", type: "EP", date: "2027-06-05", songs: [
      { name: "蝉の声（蝉之声）", duration: 236 }, { name: "帰り道の雪化粧（归途之银装素裹）", duration: 247 }, { name: "朝の秋風（晨之秋风）", duration: 178 },
      { name: "蝉の文化祭（蝉之文化祭）", duration: 222 } ] },
    { name: "透明の旋律", type: "专辑", date: "2028-06-06", songs: [
      { name: "透明の旋律（透明旋律）", duration: 253 }, { name: "季節の霧（季节之雾）", duration: 181 }, { name: "恋の自転車（恋之单车）", duration: 217 },
      { name: "春休みの星（春假之星）", duration: 424 }, { name: "歌の虹（歌之彩虹）", duration: 219 }, { name: "風の光景（风之光景）", duration: 178 },
      { name: "響きの陽だまり（回响之暖阳）", duration: 253 } ] },
    { name: "春風の雲", type: "专辑", date: "2029-05-15", songs: [
      { name: "春風の雲（春风之云）", duration: 173 }, { name: "流れ星の透明（透明的流星）", duration: 258 }, { name: "灯りの木漏れ日（灯火之林间光斑）", duration: 228 },
      { name: "渓の光景（溪之光景）", duration: 157 }, { name: "砂の文化祭（沙之文化祭）", duration: 148 }, { name: "蕾の氷（花苞之冰）", duration: 272 },
      { name: "涙の教室（泪之教室）", duration: 247 }, { name: "浴衣の霧（浴衣之雾）", duration: 254 } ] },
    { name: "夜明けの心", type: "专辑", date: "2030-03-22", songs: [
      { name: "夜明けの心（黎明之心）", duration: 221 }, { name: "光景の空（光景之天空）", duration: 255 }, { name: "雲の湖（云之湖）", duration: 215 },
      { name: "枝の水面（枝之水面）", duration: 201 }, { name: "葉の夕霧（叶之暮霭）", duration: 187 }, { name: "向日葵の約束（向日葵之约定）", duration: 324 },
      { name: "青いの朧月（湛蓝胧月）", duration: 246 }, { name: "記憶の風鈴（记忆之风铃）", duration: 239 }, { name: "青空の実（青空之果实）", duration: 250 },
      { name: "眩しいの冬休み（耀眼寒假）", duration: 237 }, { name: "放課後の花火（放学后之花火）", duration: 222 } ] },
    { name: "屋上の影", type: "专辑", date: "2031-03-16", songs: [
      { name: "屋上の影（天台之影）", duration: 237 }, { name: "心の実（心之果实）", duration: 238 }, { name: "詩の岩（诗之岩石）", duration: 196 },
      { name: "春休みの追憶（春假之追忆）", duration: 244 }, { name: "川の恋（河之恋）", duration: 236 }, { name: "潮騒の旋律（潮鸣之旋律）", duration: 242 },
      { name: "蝉の雨音（蝉之雨声）", duration: 254 }, { name: "夏祭りの夜明け（夏日祭之黎明）", duration: 151 }, { name: "畳の凪（榻榻米之风平浪静）", duration: 247 },
      { name: "葉の潮騒（叶之潮鸣）", duration: 207 }, { name: "枝の葉（枝之叶）", duration: 177 } ] },
    { name: "星雲の夕焼け", type: "EP", date: "2032-02-27", songs: [
      { name: "星雲の夕焼け（星云之晚霞）", duration: 229 }, { name: "氷の根（冰之根）", duration: 257 }, { name: "体育祭の帰り道（体育祭之归途）", duration: 214 },
      { name: "夏祭りの時（夏日祭之时光）", duration: 217 }, { name: "唄の夜（歌谣之夜）", duration: 254 } ] },
    { name: "朝の冬晴れ", type: "专辑", date: "2033-02-05", songs: [
      { name: "朝の冬晴れ（晨之冬日晴空）", duration: 217 }, { name: "朧月の給食（胧月之午餐）", duration: 247 }, { name: "銀河の灯り（银河之灯火）", duration: 222 },
      { name: "調べの追憶（曲调之追忆）", duration: 242 }, { name: "星屑の残照（星屑之残照）", duration: 251 }, { name: "銀河の花火（银河之花火）", duration: 225 },
      { name: "島の唄（岛之歌谣）", duration: 239 }, { name: "夏休みの向日葵（暑假之向日葵）", duration: 238 } ] },
    { name: "実の根", type: "单曲", date: "2034-02-04", songs: [
      { name: "実の根（果实之根）", duration: 252 } ] },
    { name: "岸の時", type: "EP", date: "2035-01-23", songs: [
      { name: "岸の時（岸之时光）", duration: 229 }, { name: "雲の蛍（云之萤火虫）", duration: 243 }, { name: "蛍の風鈴（萤火虫之风铃）", duration: 232 },
      { name: "残照の調べ（残照之曲调）", duration: 160 }, { name: "歌の岬（歌之海角）", duration: 232 }, { name: "夜風の蕾（夜风之花苞）", duration: 249 } ] },
    { name: "蝉の滝", type: "EP", date: "2036-03-09", songs: [
      { name: "蝉の滝（蝉之瀑布）", duration: 197 }, { name: "青いの涙（湛蓝泪）", duration: 256 }, { name: "虹の畳（彩虹之榻榻米）", duration: 258 } ] },
    { name: "夜風の霜", type: "EP", date: "2036-12-27", songs: [
      { name: "夜風の霜（夜风之霜）", duration: 246 }, { name: "障子の土（障子之土）", duration: 250 }, { name: "眩しいの旋律（耀眼旋律）", duration: 255 } ] },
    { name: "根の歌", type: "专辑", date: "2038-01-18", songs: [
      { name: "根の歌（根之歌）", duration: 272 }, { name: "星屑の卒業（星屑之毕业）", duration: 281 }, { name: "調べの岸（曲调之岸）", duration: 427 },
      { name: "蝉の心音（蝉之心跳）", duration: 227 }, { name: "障子の夜明け（障子之黎明）", duration: 258 }, { name: "光景の木霊（光景之树魂）", duration: 315 },
      { name: "月光の満月（月光之满月）", duration: 227 }, { name: "落ち葉の満月（落叶之满月）", duration: 259 }, { name: "夢の石（梦之石）", duration: 246 },
      { name: "想いの満月（思念之满月）", duration: 230 } ] },
    { name: "遠いの黄昏", type: "EP", date: "2038-11-23", songs: [
      { name: "遠いの黄昏（遥远黄昏）", duration: 146 }, { name: "枝の黒板（枝之黑板）", duration: 244 }, { name: "渓の黒板（溪之黑板）", duration: 256 },
      { name: "残響の霞（残响之霞）", duration: 253 }, { name: "海の音色（海之音色）", duration: 230 }, { name: "給食の石（午餐之石）", duration: 225 } ] },
    { name: "滝の岬", type: "EP", date: "2040-01-09", songs: [
      { name: "滝の岬（瀑布之海角）", duration: 255 }, { name: "桜の旋律（樱花之旋律）", duration: 227 }, { name: "夜の星（夜之星）", duration: 223 },
      { name: "氷の春休み（冰之春假）", duration: 433 } ] },
    { name: "潮騒の自転車", type: "EP", date: "2040-10-20", songs: [
      { name: "潮騒の自転車（潮鸣之单车）", duration: 278 }, { name: "教室の暁（教室之拂晓）", duration: 200 }, { name: "氷の街（冰之街）", duration: 217 } ] },
    { name: "声の枝", type: "单曲", date: "2041-11-26", songs: [
      { name: "声の枝（声之枝）", duration: 224 } ] },
    { name: "砂の朝焼け", type: "EP", date: "2042-10-17", songs: [
      { name: "砂の朝焼け（沙之朝霞）", duration: 254 }, { name: "卒業の岸（毕业之岸）", duration: 254 }, { name: "部活の風（社团之风）", duration: 240 } ] },
    { name: "湖の秋風", type: "专辑", date: "2043-11-01", songs: [
      { name: "湖の秋風（湖之秋风）", duration: 249 }, { name: "紅葉の調べ（红叶之曲调）", duration: 235 }, { name: "桜の恋（樱花之恋）", duration: 217 },
      { name: "暁の夕暮れ（拂晓之黄昏）", duration: 248 }, { name: "白いの透明（纯白的透明）", duration: 266 }, { name: "教室の微笑（教室之微笑）", duration: 238 },
      { name: "夕霧の冬晴れ（暮霭之冬日晴空）", duration: 359 }, { name: "夜風の木漏れ日（夜风之林间光斑）", duration: 220 } ] },
    { name: "満月の流れ星", type: "EP", date: "2044-10-03", songs: [
      { name: "満月の流れ星（满月之流星）", duration: 244 }, { name: "言葉の月（言语之月）", duration: 213 }, { name: "心の浴衣（心之浴衣）", duration: 218 },
      { name: "響きの月（回响之月）", duration: 239 }, { name: "桜の根（樱花之根）", duration: 235 }, { name: "静かの雨（静谧雨）", duration: 248 } ] },
    { name: "木漏れ日の秋風", type: "单曲", date: "2045-10-11", songs: [
      { name: "木漏れ日の秋風（林间光斑之秋风）", duration: 190 } ] },
    { name: "葉の実", type: "EP", date: "2046-07-24", songs: [
      { name: "葉の実（叶之果实）", duration: 240 }, { name: "渓の桜（溪之樱花）", duration: 229 }, { name: "言葉の残照（言语之残照）", duration: 227 },
      { name: "夕暮れの微笑（黄昏之微笑）", duration: 186 } ] },
    { name: "屋上の朧月", type: "EP", date: "2047-09-05", songs: [
      { name: "屋上の朧月（天台之胧月）", duration: 207 }, { name: "縁側の渓（檐廊之溪）", duration: 230 }, { name: "木霊の障子（树魂之障子）", duration: 399 },
      { name: "卒業の光（毕业之光）", duration: 234 }, { name: "虹の流星（彩虹之流星）", duration: 246 }, { name: "海の氷（海之冰）", duration: 314 } ] },
    { name: "春風の潮騒", type: "EP", date: "2048-07-05", songs: [
      { name: "春風の潮騒（春风之潮鸣）", duration: 209 }, { name: "雨の夕霧（雨之暮霭）", duration: 151 }, { name: "自転車の冬休み（单车之寒假）", duration: 197 },
      { name: "花火の黄昏（花火之黄昏）", duration: 233 }, { name: "実の白い（纯白的的果实）", duration: 226 }, { name: "霧の追憶（雾之追忆）", duration: 204 } ] },
    { name: "岬の修学旅行", type: "专辑", date: "2049-08-17", songs: [
      { name: "岬の修学旅行（海角之修学旅行）", duration: 232 }, { name: "島の秋風（岛之秋风）", duration: 257 }, { name: "体育祭の若葉（体育祭之新叶）", duration: 201 },
      { name: "暁の雪化粧（拂晓之银装素裹）", duration: 235 }, { name: "若葉の陽だまり（新叶之暖阳）", duration: 148 }, { name: "月光の夕焼け（月光之晚霞）", duration: 225 },
      { name: "暁の帰り道（拂晓之归途）", duration: 242 }, { name: "落ち葉の岬（落叶之海角）", duration: 232 }, { name: "秋風の根（秋风之根）", duration: 235 } ] },
    { name: "砂の声", type: "单曲", date: "2050-06-06", songs: [
      { name: "砂の声（沙之声）", duration: 261 } ] },
    ],
  "RAISE A SUILEN": [
    { name: "ERA", type: "专辑", date: "2020-03-18", songs: [
       { name: "A Declaration of ×××", duration: 235 }, { name: "Invincible Fighter", duration: 240 },
       { name: "EXPOSE 'Burn Out!!!'", duration: 230 }, { name: "Beautiful Birthday", duration: 228 },
       { name: "HELL! or HELL?", duration: 245 }, { name: "R.I.O.T", duration: 232 },
       { name: "CORUSCATE -DNA-", duration: 238 }, { name: "SOUL SOLDIER", duration: 236 } ] },
    { name: "A Declaration of ×××", type: "单曲", date: "2018-12-12", songs: [ { name: "A Declaration of ×××", duration: 235 } ] },
    { name: "Invincible Fighter", type: "单曲", date: "2019-03-20", songs: [ { name: "Invincible Fighter", duration: 240 } ] },
    { name: "EXPOSE 'Burn Out!!!'", type: "单曲", date: "2019-06-19", songs: [ { name: "EXPOSE 'Burn Out!!!'", duration: 230 } ] },
    { name: "HELL! or HELL?", type: "单曲", date: "2019-09-18", songs: [ { name: "HELL! or HELL?", duration: 245 } ] },
    { name: "R.I.O.T", type: "单曲", date: "2020-01-22", songs: [ { name: "R.I.O.T", duration: 232 } ] },
    { name: "Sacred world", type: "单曲", date: "2020-10-21", songs: [ { name: "Sacred world", duration: 236 } ] },
      { name: "Dust Paperplane", type: "专辑", date: "2026-07-04", songs: [
      { name: "Dust Paperplane（尘埃的纸飞机）", duration: 215 }, { name: "Velvet Twilight（天鹅绒的暮色）", duration: 271 }, { name: "Circle Quiet（圆圈的寂静）", duration: 153 },
      { name: "Circle Asphalt（圆圈的柏油）", duration: 228 }, { name: "Flame Twilight（火焰的暮色）", duration: 182 }, { name: "Wave Shadow（波浪的影子）", duration: 248 },
      { name: "Dust Circle（尘埃的圆圈）", duration: 233 } ] },
    { name: "Plain Meridian", type: "专辑", date: "2027-05-09", songs: [
      { name: "Plain Meridian（平原的子午线）", duration: 142 }, { name: "Ice Field（冰的原野）", duration: 248 }, { name: "Canvas Amber（画布的琥珀）", duration: 242 },
      { name: "Star Iron（星的铁）", duration: 228 }, { name: "Haze Glow（轻雾的辉光）", duration: 239 }, { name: "Tree Ridge（树的山脊）", duration: 217 },
      { name: "Golden Winter（金色的冬天）", duration: 258 }, { name: "Cinder Anchor（炭烬的锚）", duration: 249 }, { name: "Leaf Tree（叶的树）", duration: 213 },
      { name: "Forest Overcast（森林的阴云）", duration: 239 } ] },
    { name: "Paperplane Journey", type: "单曲", date: "2028-04-29", songs: [
      { name: "Paperplane Journey（纸飞机的旅程）", duration: 258 } ] },
    { name: "Ice Pulse", type: "专辑", date: "2029-06-26", songs: [
      { name: "Ice Pulse（冰的脉冲）", duration: 283 }, { name: "Smoke Ocean（烟雾的海洋）", duration: 198 }, { name: "Lantern Gravel（灯笼的砾石）", duration: 276 },
      { name: "Paperplane Marrow（纸飞机的骨髓）", duration: 247 }, { name: "Ember Carousel（余烬的旋转木马）", duration: 219 }, { name: "Ballet Rust（芭蕾的锈迹）", duration: 226 },
      { name: "Storm Journey（风暴的旅程）", duration: 413 }, { name: "Wood Lantern（树林的灯笼）", duration: 245 } ] },
    { name: "Field Tree", type: "EP", date: "2030-03-20", songs: [
      { name: "Field Tree（原野的树）", duration: 253 }, { name: "Ocean Valley（海洋的山谷）", duration: 240 }, { name: "Velvet Drift（天鹅绒的漂流）", duration: 250 },
      { name: "Tide Tree（潮汐的树）", duration: 230 } ] },
    { name: "Tower Grain", type: "EP", date: "2031-04-16", songs: [
      { name: "Tower Grain（塔的颗粒）", duration: 225 }, { name: "Ember Forest（余烬的森林）", duration: 259 }, { name: "Mist Pebble（薄雾的卵石）", duration: 258 },
      { name: "River Cinder（河流的炭烬）", duration: 444 }, { name: "Highway River（公路的河流）", duration: 213 }, { name: "Plain Dawn（平原的黎明）", duration: 222 } ] },
    { name: "Ember Motion", type: "专辑", date: "2032-02-18", songs: [
      { name: "Ember Motion（余烬的律动）", duration: 234 }, { name: "Stone Drift（石头的漂流）", duration: 442 }, { name: "Storm Ashes（风暴的灰烬）", duration: 234 },
      { name: "Overcast Cliff（阴云的断崖）", duration: 241 }, { name: "Velvet Shore（天鹅绒的岸边）", duration: 226 }, { name: "Veil Fog（帷幕的雾）", duration: 285 },
      { name: "Iron Paperplane（铁的纸飞机）", duration: 243 }, { name: "Echo Quartz（回声的石英）", duration: 201 }, { name: "Pond Motion（池塘的律动）", duration: 241 } ] },
    { name: "Bloom Sea", type: "EP", date: "2033-04-02", songs: [
      { name: "Bloom Sea（绽放的海）", duration: 282 }, { name: "Golden Concrete（金色的水泥）", duration: 258 }, { name: "Sun Nest（太阳的巢）", duration: 251 },
      { name: "Pebble Beacon（卵石的灯塔）", duration: 210 }, { name: "Hollow Grain（空洞的颗粒）", duration: 243 }, { name: "Vapor Faded（雾霭的褪色）", duration: 239 } ] },
    { name: "Pulse Stream", type: "单曲", date: "2034-01-22", songs: [
      { name: "Pulse Stream（脉冲的溪流）", duration: 221 } ] },
    { name: "Highway Trail", type: "EP", date: "2035-01-26", songs: [
      { name: "Highway Trail（公路的足迹）", duration: 200 }, { name: "Mist Quartz（薄雾的石英）", duration: 232 }, { name: "Dawn Soil（黎明的土壤）", duration: 214 },
      { name: "Ivory Journey（象牙的旅程）", duration: 146 }, { name: "Slope Flood（斜坡的洪流）", duration: 221 } ] },
    { name: "Golden Ashes", type: "EP", date: "2036-02-09", songs: [
      { name: "Golden Ashes（金色的灰烬）", duration: 131 }, { name: "Glass Fable（玻璃的寓言）", duration: 244 }, { name: "Sundown Storm（日落的风暴）", duration: 229 },
      { name: "Thaw Tree（融雪的树）", duration: 221 }, { name: "Crescent Snow（新月的雪）", duration: 252 }, { name: "Pond Grain（池塘的颗粒）", duration: 273 } ] },
    { name: "Song Ocean", type: "专辑", date: "2037-01-12", songs: [
      { name: "Song Ocean（歌的海洋）", duration: 242 }, { name: "Soil Flood（土壤的洪流）", duration: 272 }, { name: "Trail Slope（足迹的斜坡）", duration: 247 },
      { name: "Fable Blossom（寓言的花开）", duration: 233 }, { name: "Silver Glass（银色的玻璃）", duration: 175 }, { name: "Daybreak Rain（黎明的雨）", duration: 213 },
      { name: "Sky Valley（天空的山谷）", duration: 221 }, { name: "Quartz Void（石英的虚空）", duration: 196 }, { name: "Compass Coral（罗盘的珊瑚）", duration: 246 },
      { name: "Vine Canvas（藤蔓的画布）", duration: 229 } ] },
    { name: "Dust Amber", type: "单曲", date: "2037-12-30", songs: [
      { name: "Dust Amber（尘埃的琥珀）", duration: 228 } ] },
    { name: "Snow Gravel", type: "EP", date: "2039-01-10", songs: [
      { name: "Snow Gravel（雪的砾石）", duration: 253 }, { name: "Meadow Dawn（草地的黎明）", duration: 248 }, { name: "Grain Mist（颗粒的薄雾）", duration: 215 },
      { name: "Mirrors Static（镜子的静电）", duration: 241 }, { name: "Winter Tide（冬天的潮汐）", duration: 240 }, { name: "Pulse Journey（脉冲的旅程）", duration: 268 } ] },
    { name: "Hollow Meadow", type: "EP", date: "2040-01-17", songs: [
      { name: "Hollow Meadow（空洞的草地）", duration: 239 }, { name: "Wind Ice（风的冰）", duration: 252 }, { name: "Pebble Halo（卵石的光晕）", duration: 221 } ] },
    { name: "Dusk Winter", type: "EP", date: "2040-11-10", songs: [
      { name: "Dusk Winter（薄暮的冬天）", duration: 220 }, { name: "Golden Sea（金色的海）", duration: 226 }, { name: "Desert Ashes（荒原的灰烬）", duration: 239 } ] },
    { name: "Ballet Song", type: "EP", date: "2041-12-09", songs: [
      { name: "Ballet Song（芭蕾的歌）", duration: 210 }, { name: "Feather Overcast（羽毛的阴云）", duration: 373 }, { name: "Anchor Soil（锚的土壤）", duration: 150 },
      { name: "Fleet Iron（舰队的铁）", duration: 213 }, { name: "Ballet Trail（芭蕾的足迹）", duration: 253 } ] },
    { name: "Ballet Beacon", type: "EP", date: "2042-09-26", songs: [
      { name: "Ballet Beacon（芭蕾的灯塔）", duration: 194 }, { name: "Dust Blanket（尘埃的绒毯）", duration: 202 }, { name: "Shadow Breeze（影子的微风）", duration: 228 },
      { name: "Field Paperplane（原野的纸飞机）", duration: 231 } ] },
    { name: "Spark Vine", type: "专辑", date: "2043-11-24", songs: [
      { name: "Spark Vine（火花的藤蔓）", duration: 258 }, { name: "Slope Orbit（斜坡的轨道）", duration: 235 }, { name: "Wood Mist（树林的薄雾）", duration: 255 },
      { name: "Blanket Moon（绒毯的月亮）", duration: 219 }, { name: "Neon Roof（霓虹的屋顶）", duration: 236 }, { name: "Whisper River（低语的河流）", duration: 215 },
      { name: "Cliff Trail（断崖的足迹）", duration: 151 } ] },
    { name: "Daybreak Lake", type: "EP", date: "2044-08-18", songs: [
      { name: "Daybreak Lake（黎明的湖）", duration: 141 }, { name: "Glimmer Vine（微光的藤蔓）", duration: 255 }, { name: "Forest Sea（森林的海）", duration: 230 },
      { name: "Midnight Blanket（午夜的绒毯）", duration: 283 } ] },
    { name: "Lake Summer", type: "专辑", date: "2045-10-22", songs: [
      { name: "Lake Summer（湖的夏天）", duration: 249 }, { name: "Kite Road（风筝的道路）", duration: 239 }, { name: "Amber Glimmer（琥珀的微光）", duration: 174 },
      { name: "Breeze Dawn（微风的黎明）", duration: 250 }, { name: "Pine River（松的河流）", duration: 257 }, { name: "Harbor Whisper（港湾的低语）", duration: 259 },
      { name: "Soil Crystal（土壤的水晶）", duration: 230 }, { name: "Flame Coral（火焰的珊瑚）", duration: 219 }, { name: "Carousel Harbor（旋转木马的港湾）", duration: 216 } ] },
    { name: "Shell Glass", type: "专辑", date: "2046-07-30", songs: [
      { name: "Shell Glass（贝壳的玻璃）", duration: 255 }, { name: "Flame Sand（火焰的沙）", duration: 225 }, { name: "Iron Haze（铁的轻雾）", duration: 243 },
      { name: "Silk Spark（丝绸的火花）", duration: 249 }, { name: "Quartz Dawn（石英的黎明）", duration: 244 }, { name: "Ivory Plain（象牙的平原）", duration: 195 },
      { name: "Neon Harbor（霓虹的港湾）", duration: 233 }, { name: "Marrow Silver（骨髓的银色）", duration: 187 }, { name: "Meadow Pond（草地的池塘）", duration: 214 },
      { name: "Soil Vapor（土壤的雾霭）", duration: 251 } ] },
    { name: "Cinder Ember", type: "单曲", date: "2047-07-29", songs: [
      { name: "Cinder Ember（炭烬的余烬）", duration: 251 } ] },
    { name: "Veil Leaf", type: "专辑", date: "2048-08-28", songs: [
      { name: "Veil Leaf（帷幕的叶）", duration: 212 }, { name: "Vine Salt（藤蔓的盐）", duration: 192 }, { name: "Wood Overcast（树林的阴云）", duration: 225 },
      { name: "Whisper Iron（低语的铁）", duration: 316 }, { name: "Grain Motel（颗粒的汽车旅馆）", duration: 259 }, { name: "Soil Neon（土壤的霓虹）", duration: 229 },
      { name: "Beacon Quartz（灯塔的石英）", duration: 259 }, { name: "Shore Satellite（岸边的卫星）", duration: 228 }, { name: "Circle Anchor（圆圈的锚）", duration: 259 },
      { name: "Compass Fleet（罗盘的舰队）", duration: 329 } ] },
    { name: "Neon Compass", type: "专辑", date: "2049-07-19", songs: [
      { name: "Neon Compass（霓虹的罗盘）", duration: 219 }, { name: "Sea Meridian（海的子午线）", duration: 188 }, { name: "Storm Cloud（风暴的云）", duration: 203 },
      { name: "Shallow River（浅滩的河流）", duration: 237 }, { name: "Paperplane Bloom（纸飞机的绽放）", duration: 189 }, { name: "Crystal Tree（水晶的树）", duration: 218 },
      { name: "Meadow Song（草地的歌）", duration: 244 }, { name: "Dusk Ivory（薄暮的象牙）", duration: 218 }, { name: "Thunder Orbit（雷的轨道）", duration: 254 },
      { name: "Flame Frost（火焰的霜）", duration: 214 }, { name: "Nightfall Hollow（夜幕的空洞）", duration: 255 } ] },
    { name: "Leaf Steam", type: "单曲", date: "2050-07-18", songs: [
      { name: "Leaf Steam（叶的蒸汽）", duration: 256 } ] },
    ],
  "Ave Mujica": [
    { name: "KiLLKiSS", type: "专辑", date: "2025-01-15", songs: [
       { name: "黒のバースデイ（黑色生日）", duration: 245 }, { name: "ふたつの月（两个月亮）", duration: 238 },
       { name: "Choir 'S' Choir", duration: 252 }, { name: "Mas?uerade Rhapsody Re?uest", duration: 248 },
       { name: "素晴らしき世界 でも どこにもない場所（美好的世界 却无处可寻）", duration: 242 },
       { name: "Angles", duration: 235 }, { name: "Ave Mujica", duration: 240 },
       { name: "顔（脸）", duration: 230 }, { name: "蝕（蚀）", duration: 246 }, { name: "堕天（堕天）", duration: 250 } ] },
    { name: "黒のバースデイ（黑色生日）", type: "单曲", date: "2023-04-26", songs: [ { name: "黒のバースデイ（黑色生日）", duration: 245 } ] },
    { name: "ふたつの月（两个月亮）", type: "单曲", date: "2023-06-14", songs: [ { name: "ふたつの月（两个月亮）", duration: 238 } ] },
    { name: "Choir 'S' Choir", type: "单曲", date: "2023-08-16", songs: [ { name: "Choir 'S' Choir", duration: 252 } ] },
    { name: "Mas?uerade Rhapsody Re?uest", type: "单曲", date: "2023-10-18", songs: [ { name: "Mas?uerade Rhapsody Re?uest", duration: 248 } ] },
    { name: "Angles", type: "单曲", date: "2024-01-24", songs: [ { name: "Angles", duration: 235 } ] },
    { name: "Ave Mujica", type: "单曲", date: "2024-04-24", songs: [ { name: "Ave Mujica", duration: 240 } ] },
    { name: "堕天（堕天）", type: "单曲", date: "2024-08-21", songs: [ { name: "堕天（堕天）", duration: 250 } ] },
      { name: "波音の優しい", type: "EP", date: "2026-07-07", songs: [
      { name: "波音の優しい（温柔的潮声）", duration: 189 }, { name: "優しいの微笑（温柔微笑）", duration: 261 }, { name: "泉の岩（泉之岩石）", duration: 210 } ] },
    { name: "石の蛍", type: "EP", date: "2027-06-28", songs: [
      { name: "石の蛍（石之萤火虫）", duration: 161 }, { name: "雲の雪（云之雪）", duration: 237 }, { name: "水面の光景（水面之光景）", duration: 229 },
      { name: "葉の白い（纯白的的叶）", duration: 197 } ] },
    { name: "葉の春風", type: "单曲", date: "2028-06-20", songs: [
      { name: "葉の春風（叶之春风）", duration: 240 } ] },
    { name: "暁の約束", type: "专辑", date: "2029-06-07", songs: [
      { name: "暁の約束（拂晓之约定）", duration: 196 }, { name: "部活の凪（社团之风平浪静）", duration: 252 }, { name: "影の根（影之根）", duration: 248 },
      { name: "修学旅行の教室（修学旅行之教室）", duration: 256 }, { name: "雪の冬晴れ（雪之冬日晴空）", duration: 247 }, { name: "月の優しい（温柔的月）", duration: 241 },
      { name: "三日月の水面（新月之水面）", duration: 209 }, { name: "白いの砂（纯白的沙）", duration: 234 }, { name: "季節の白い（纯白的的季节）", duration: 263 },
      { name: "優しいの言葉（温柔言语）", duration: 288 }, { name: "夜風の小さな（微小的的夜风）", duration: 148 } ] },
    { name: "木漏れ日の時", type: "EP", date: "2030-06-01", songs: [
      { name: "木漏れ日の時（林间光斑之时光）", duration: 450 }, { name: "透明の夏祭り（透明夏日祭）", duration: 250 }, { name: "夜明けの光景（黎明之光景）", duration: 168 },
      { name: "体育祭の光景（体育祭之光景）", duration: 220 }, { name: "雪化粧の青空（银装素裹之青空）", duration: 253 } ] },
    { name: "枝の給食", type: "EP", date: "2031-04-06", songs: [
      { name: "枝の給食（枝之午餐）", duration: 257 }, { name: "雨の石（雨之石）", duration: 233 }, { name: "川の眩しい（耀眼的河）", duration: 262 } ] },
    { name: "木漏れ日の優しい", type: "单曲", date: "2032-03-06", songs: [
      { name: "木漏れ日の優しい（温柔的林间光斑）", duration: 190 } ] },
    { name: "滝の落ち葉", type: "专辑", date: "2033-03-06", songs: [
      { name: "滝の落ち葉（瀑布之落叶）", duration: 245 }, { name: "根の陽だまり（根之暖阳）", duration: 229 }, { name: "川の涙（河之泪）", duration: 261 },
      { name: "心音の残響（心跳之残响）", duration: 408 }, { name: "朧月の星（胧月之星）", duration: 137 }, { name: "夏祭りの秋風（夏日祭之秋风）", duration: 205 },
      { name: "歌の障子（歌之障子）", duration: 255 }, { name: "涙の障子（泪之障子）", duration: 226 }, { name: "蕾の滝（花苞之瀑布）", duration: 238 },
      { name: "朝の光景（晨之光景）", duration: 247 } ] },
    { name: "恋の真夏", type: "单曲", date: "2034-02-07", songs: [
      { name: "恋の真夏（恋之盛夏）", duration: 241 } ] },
    { name: "夜の縁側", type: "专辑", date: "2035-02-16", songs: [
      { name: "夜の縁側（夜之檐廊）", duration: 238 }, { name: "蝉の氷（蝉之冰）", duration: 260 }, { name: "夏祭りの岸（夏日祭之岸）", duration: 280 },
      { name: "涙の潮騒（泪之潮鸣）", duration: 163 }, { name: "実の畳（果实之榻榻米）", duration: 242 }, { name: "花火の月（花火之月）", duration: 424 },
      { name: "霞の川（霞之河）", duration: 261 }, { name: "屋上の岩（天台之岩石）", duration: 250 }, { name: "夢の障子（梦之障子）", duration: 242 } ] },
    { name: "窓の蕾", type: "专辑", date: "2036-01-04", songs: [
      { name: "窓の蕾（窗之花苞）", duration: 152 }, { name: "虹の時（彩虹之时光）", duration: 248 }, { name: "声の涙（声之泪）", duration: 250 },
      { name: "石の滝（石之瀑布）", duration: 242 }, { name: "微笑の浜（微笑之海滨）", duration: 220 }, { name: "星屑の約束（星屑之约定）", duration: 296 },
      { name: "実の水面（果实之水面）", duration: 260 }, { name: "風鈴の冬晴れ（风铃之冬日晴空）", duration: 232 }, { name: "岩の月（岩石之月）", duration: 403 },
      { name: "浴衣の夕焼け（浴衣之晚霞）", duration: 245 }, { name: "土の恋（土之恋）", duration: 261 } ] },
    { name: "雪化粧の言葉", type: "专辑", date: "2037-01-31", songs: [
      { name: "雪化粧の言葉（银装素裹之言语）", duration: 240 }, { name: "霧の声（雾之声）", duration: 234 }, { name: "実の朧月（果实之胧月）", duration: 197 },
      { name: "街の星屑（街之星屑）", duration: 198 }, { name: "文化祭の詩（文化祭之诗）", duration: 221 }, { name: "屋上の葉（天台之叶）", duration: 255 },
      { name: "青空の給食（青空之午餐）", duration: 237 }, { name: "縁側の朝焼け（檐廊之朝霞）", duration: 224 }, { name: "春風の卒業（春风之毕业）", duration: 252 } ] },
    { name: "暁の滝", type: "专辑", date: "2038-01-31", songs: [
      { name: "暁の滝（拂晓之瀑布）", duration: 294 }, { name: "岸の残照（岸之残照）", duration: 231 }, { name: "波の陽だまり（波之暖阳）", duration: 256 },
      { name: "潮騒の夏祭り（潮鸣之夏日祭）", duration: 238 }, { name: "銀河の青空（银河之青空）", duration: 267 }, { name: "光の陽だまり（光之暖阳）", duration: 294 },
      { name: "桜の眩しい（耀眼的樱花）", duration: 322 } ] },
    { name: "花の銀河", type: "EP", date: "2038-12-08", songs: [
      { name: "花の銀河（花之银河）", duration: 232 }, { name: "声の泉（声之泉）", duration: 280 }, { name: "木漏れ日の障子（林间光斑之障子）", duration: 249 },
      { name: "霧の旋律（雾之旋律）", duration: 258 } ] },
    { name: "縁側の流星", type: "EP", date: "2039-11-14", songs: [
      { name: "縁側の流星（檐廊之流星）", duration: 257 }, { name: "卒業の風鈴（毕业之风铃）", duration: 229 }, { name: "枝の風（枝之风）", duration: 288 },
      { name: "夕焼けの銀河（晚霞之银河）", duration: 230 }, { name: "文化祭の桜（文化祭之樱花）", duration: 266 }, { name: "灯りの微笑（灯火之微笑）", duration: 256 } ] },
    { name: "浜の朧月", type: "专辑", date: "2040-10-24", songs: [
      { name: "浜の朧月（海滨之胧月）", duration: 266 }, { name: "教室の夏祭り（教室之夏日祭）", duration: 239 }, { name: "銀河の渓（银河之溪）", duration: 241 },
      { name: "言葉の波（言语之波）", duration: 226 }, { name: "木霊の向日葵（树魂之向日葵）", duration: 234 }, { name: "追憶の海辺（追忆之海边）", duration: 280 },
      { name: "夜風の夏休み（夜风之暑假）", duration: 255 }, { name: "街の縁側（街之檐廊）", duration: 181 }, { name: "声の木霊（声之树魂）", duration: 231 } ] },
    { name: "教室の卒業", type: "EP", date: "2041-11-23", songs: [
      { name: "教室の卒業（教室之毕业）", duration: 224 }, { name: "朝の紅葉（晨之红叶）", duration: 215 }, { name: "冬晴れの砂（冬日晴空之沙）", duration: 234 },
      { name: "岩の小さな（微小的的岩石）", duration: 253 }, { name: "虹の体育祭（彩虹之体育祭）", duration: 253 }, { name: "雨音の夏祭り（雨声之夏日祭）", duration: 252 } ] },
    { name: "島の流星", type: "单曲", date: "2042-11-29", songs: [
      { name: "島の流星（岛之流星）", duration: 230 } ] },
    { name: "雲の涙", type: "专辑", date: "2043-09-21", songs: [
      { name: "雲の涙（云之泪）", duration: 263 }, { name: "銀河の朝（银河之晨）", duration: 261 }, { name: "石の夕霧（石之暮霭）", duration: 242 },
      { name: "土の実（土之果实）", duration: 245 }, { name: "湖の岸（湖之岸）", duration: 230 }, { name: "記憶の遠い（遥远的记忆）", duration: 229 },
      { name: "文化祭の石（文化祭之石）", duration: 193 }, { name: "声の心音（声之心跳）", duration: 277 } ] },
    { name: "風の砂", type: "专辑", date: "2044-08-22", songs: [
      { name: "風の砂（风之沙）", duration: 220 }, { name: "雲の月（云之月）", duration: 230 }, { name: "蛍の虹（萤火虫之彩虹）", duration: 143 },
      { name: "冬休みの向日葵（寒假之向日葵）", duration: 267 }, { name: "銀河の記憶（银河之记忆）", duration: 248 }, { name: "青いの詩（湛蓝诗）", duration: 223 },
      { name: "冬晴れの流れ星（冬日晴空之流星）", duration: 245 }, { name: "根の秋風（根之秋风）", duration: 254 }, { name: "音色の街（音色之街）", duration: 196 } ] },
    { name: "夕暮れの障子", type: "EP", date: "2045-09-19", songs: [
      { name: "夕暮れの障子（黄昏之障子）", duration: 222 }, { name: "残照の流れ星（残照之流星）", duration: 248 }, { name: "言葉の給食（言语之午餐）", duration: 240 } ] },
    { name: "部活の旋律", type: "EP", date: "2046-10-01", songs: [
      { name: "部活の旋律（社团之旋律）", duration: 251 }, { name: "土の音色（土之音色）", duration: 231 }, { name: "砂の記憶（沙之记忆）", duration: 227 },
      { name: "波音の恋（潮声之恋）", duration: 222 }, { name: "石の紅葉（石之红叶）", duration: 290 } ] },
    { name: "旋律の季節", type: "专辑", date: "2047-09-14", songs: [
      { name: "旋律の季節（旋律之季节）", duration: 282 }, { name: "若葉の月（新叶之月）", duration: 267 }, { name: "黒板の記憶（黑板之记忆）", duration: 249 },
      { name: "落ち葉の想い（落叶之思念）", duration: 141 }, { name: "朝の季節（晨之季节）", duration: 222 }, { name: "石の陽だまり（石之暖阳）", duration: 155 },
      { name: "眩しいの夜（耀眼夜）", duration: 284 }, { name: "波の自転車（波之单车）", duration: 150 }, { name: "蝉の放課後（蝉之放学后）", duration: 153 },
      { name: "修学旅行の言葉（修学旅行之言语）", duration: 226 } ] },
    { name: "水面の泉", type: "专辑", date: "2048-07-14", songs: [
      { name: "水面の泉（水面之泉）", duration: 198 }, { name: "秋風の青い（湛蓝的秋风）", duration: 250 }, { name: "星空の青空（星空之青空）", duration: 179 },
      { name: "花火の縁側（花火之檐廊）", duration: 231 }, { name: "夜明けの残響（黎明之残响）", duration: 265 }, { name: "黒板の約束（黑板之约定）", duration: 145 },
      { name: "夜風の桜（夜风之樱花）", duration: 408 }, { name: "海辺の遠い（遥远的海边）", duration: 227 }, { name: "帰り道の島（归途之岛）", duration: 251 } ] },
    { name: "若葉の声", type: "专辑", date: "2049-08-05", songs: [
      { name: "若葉の声（新叶之声）", duration: 232 }, { name: "砂の島（沙之岛）", duration: 262 }, { name: "浴衣の泉（浴衣之泉）", duration: 221 },
      { name: "音色の眩しい（耀眼的音色）", duration: 226 }, { name: "月光の銀河（月光之银河）", duration: 233 }, { name: "小さなの夕焼け（微小的晚霞）", duration: 228 },
      { name: "若葉の枝（新叶之枝）", duration: 256 }, { name: "小さなの放課後（微小的放学后）", duration: 225 }, { name: "朝の夜風（晨之夜风）", duration: 173 },
      { name: "心の湖（心之湖）", duration: 260 }, { name: "星雲の実（星云之果实）", duration: 341 } ] },
    { name: "部活の木漏れ日", type: "专辑", date: "2050-06-08", songs: [
      { name: "部活の木漏れ日（社团之林间光斑）", duration: 144 }, { name: "屋上の浴衣（天台之浴衣）", duration: 248 }, { name: "霞の白い（纯白的的霞）", duration: 267 },
      { name: "教室の朝（教室之晨）", duration: 270 }, { name: "記憶の夕焼け（记忆之晚霞）", duration: 201 }, { name: "修学旅行の春休み（修学旅行之春假）", duration: 171 },
      { name: "灯りの遠い（遥远的灯火）", duration: 431 }, { name: "三日月の土（新月之土）", duration: 264 }, { name: "朧月の蝉（胧月之蝉）", duration: 221 },
      { name: "砂の星空（沙之星空）", duration: 289 }, { name: "実の流星（果实之流星）", duration: 258 } ] },
    ],
  "回春丹": [
    { name: "耳鬼出风", type: "专辑", date: "2021-10-22", songs: [
       { name: "耳鬼出风", duration: 235 }, { name: "花桥", duration: 240 },
       { name: "正义", duration: 250 }, { name: "梦特别娇", duration: 258 },
       { name: "红心番石榴", duration: 232 }, { name: "大地雷公", duration: 230 },
       { name: "五彩斑斓的黑", duration: 245 }, { name: "分分钟需要你", duration: 228 },
       { name: "兴奋到死的东西", duration: 236 } ] },
    { name: "大把时间璀璨", type: "专辑", date: "2025-08-29", songs: [
       { name: "降临", duration: 230 }, { name: "骑士", duration: 245 }, { name: "梦蝶", duration: 240 },
       { name: "喝彩", duration: 235 }, { name: "福寿螺", duration: 225 }, { name: "大力出奇迹", duration: 220 },
       { name: "宝藏", duration: 238 }, { name: "松绑", duration: 232 }, { name: "染春", duration: 245 },
       { name: "鲜花 (I'm Going To Remember U)", duration: 341 } ] },
    { name: "艾蜜莉", type: "单曲", date: "2020-01-01", songs: [ { name: "艾蜜莉", duration: 240 } ] },
    { name: "珍珠走廊", type: "EP", date: "2022-01-01", songs: [
       { name: "珍珠走廊", duration: 235 }, { name: "断气", duration: 220 }, { name: "大地雷公", duration: 230 } ] },
    { name: "蜜虫", type: "EP", date: "2023-01-01", songs: [
       { name: "蜜虫", duration: 225 }, { name: "丘丘", duration: 230 }, { name: "相思病", duration: 235 } ] },
    { name: "鲜花", type: "单曲", date: "2023-09-30", songs: [ { name: "鲜花", duration: 341 } ] },
    { name: "初恋", type: "单曲", date: "2021-01-01", songs: [ { name: "初恋", duration: 222 } ] },
    { name: "亮闪闪", type: "单曲", date: "2024-01-01", songs: [ { name: "亮闪闪", duration: 210 } ] },
    { name: "喝彩", type: "单曲", date: "2025-01-01", songs: [ { name: "喝彩", duration: 235 } ] },
      { name: "漫长的高墙", type: "单曲", date: "2026-12-22", songs: [
      { name: "漫长的高墙", duration: 190 } ] },
    { name: "暗涌初晴", type: "EP", date: "2029-05-06", songs: [
      { name: "暗涌初晴", duration: 237 }, { name: "深巷白墙", duration: 266 }, { name: "逆光裂痕", duration: 151 },
      { name: "无名的铁门", duration: 261 }, { name: "走廊车窗", duration: 275 }, { name: "疾风走廊", duration: 348 } ] },
    { name: "公路高架", type: "EP", date: "2031-07-11", songs: [
      { name: "公路高架", duration: 228 }, { name: "遥远的寒潮", duration: 219 }, { name: "荒岛暗号", duration: 246 },
      { name: "长风暴雨", duration: 241 } ] },
    { name: "漫长的风筝", type: "专辑", date: "2033-02-28", songs: [
      { name: "漫长的风筝", duration: 222 }, { name: "孤岛天台", duration: 262 }, { name: "深夜的废墟", duration: 229 },
      { name: "久违的天桥", duration: 256 }, { name: "白墙巷子", duration: 216 }, { name: "深夜的杂草", duration: 191 },
      { name: "深夜的边界", duration: 236 }, { name: "无名的岔路", duration: 259 }, { name: "楼顶夜班", duration: 236 },
      { name: "沉默的锈迹", duration: 219 }, { name: "旧梦铁道", duration: 203 } ] },
    { name: "深夜的匝道", type: "EP", date: "2035-04-01", songs: [
      { name: "深夜的匝道", duration: 230 }, { name: "回声壁暴雨", duration: 249 }, { name: "风筝初晴", duration: 399 },
      { name: "光年荒径", duration: 257 } ] },
    { name: "漫长的长风", type: "专辑", date: "2037-06-23", songs: [
      { name: "漫长的长风", duration: 291 }, { name: "迷途尘埃", duration: 261 }, { name: "夜车信号", duration: 369 },
      { name: "夜车骤雨", duration: 265 }, { name: "无名的灰墙", duration: 254 }, { name: "断线白墙", duration: 440 },
      { name: "沉默的荒岛", duration: 260 }, { name: "高墙晨雾", duration: 232 }, { name: "夜雾涂鸦", duration: 234 },
      { name: "车窗静默", duration: 236 }, { name: "沉默的疾风", duration: 246 } ] },
    { name: "暴雨暗涌", type: "专辑", date: "2039-09-22", songs: [
      { name: "暴雨暗涌", duration: 218 }, { name: "街灯晴天", duration: 269 }, { name: "晚钟归途", duration: 202 },
      { name: "沉默的废楼", duration: 347 }, { name: "曦光逆流", duration: 376 }, { name: "落雪楼顶", duration: 230 },
      { name: "巷子候鸟", duration: 241 }, { name: "深夜的夜车", duration: 235 } ] },
    { name: "荒岛电线", type: "单曲", date: "2041-08-23", songs: [
      { name: "荒岛电线", duration: 229 } ] },
    { name: "孤岛残响", type: "单曲", date: "2043-09-19", songs: [
      { name: "孤岛残响", duration: 217 } ] },
    { name: "归途夜航", type: "EP", date: "2045-10-23", songs: [
      { name: "归途夜航", duration: 393 }, { name: "暮色疾风", duration: 275 }, { name: "漫长的岔路", duration: 211 },
      { name: "深巷游园", duration: 191 } ] },
    { name: "久违的边界", type: "单曲", date: "2047-11-13", songs: [
      { name: "久违的边界", duration: 252 } ] },
    { name: "阁楼碎片", type: "单曲", date: "2050-03-07", songs: [
      { name: "阁楼碎片", duration: 249 } ] },
    ],
  "Chinese Football": [
    { name: "Chinese Football", type: "专辑", date: "2015-09-12", songs: [
       { name: "游戏开始 (Intro)", duration: 122 }, { name: "守门员", duration: 251 },
       { name: "飞鱼转身", duration: 384 }, { name: "400米操场", duration: 270 },
       { name: "不是人人都能穿十号球衣", duration: 347 }, { name: "世界悲", duration: 386 },
       { name: "游戏暂停 (Interlude)", duration: 76 }, { name: "地球上最后一个EMO男孩", duration: 300 },
       { name: "红牌罚下", duration: 280 }, { name: "帽子戏法", duration: 285 },
       { name: "再见米卢", duration: 300 }, { name: "盲人摸象", duration: 320 }, { name: "游戏结束 (Outro)", duration: 200 } ] },
    { name: "Here Comes a New Challenger!", type: "EP", date: "2017-03-03", songs: [
       { name: "电动少女", duration: 300 }, { name: "清醒白日梦", duration: 280 },
       { name: "晴天霹雳", duration: 290 }, { name: "盒子", duration: 260 } ] },
    { name: "Continue?", type: "EP", date: "2019-03-01", songs: [
       { name: "游戏继续", duration: 270 }, { name: "漂流人间", duration: 300 },
       { name: "冒险岛", duration: 280 }, { name: "家犬日记", duration: 260 }, { name: "怪兽", duration: 290 } ] },
    { name: "Win&Lose", type: "专辑", date: "2022-12-30", songs: [
       { name: "游戏胜利", duration: 240 }, { name: "四月物语", duration: 260 },
       { name: "夏日限定女朋友", duration: 250 }, { name: "人生游乐场", duration: 270 },
       { name: "世界一分为二", duration: 280 }, { name: "单向列车号", duration: 300 },
       { name: "游戏失败", duration: 240 }, { name: "人间失格", duration: 290 },
       { name: "恐龙最后还是毁灭了", duration: 280 }, { name: "植物人", duration: 270 },
       { name: "武汉", duration: 320 }, { name: "Good bye", duration: 250 } ] },
    { name: "电动少女 (8-Bit Remix)", type: "单曲", date: "2018-03-01", songs: [ { name: "电动少女 (8-Bit Remix)", duration: 280 } ] },
    { name: "Naive", type: "单曲", date: "2017-10-01", songs: [ { name: "Naive", duration: 270 } ] },
    { name: "Dog's Diary", type: "单曲", date: "2017-11-01", songs: [ { name: "Dog's Diary", duration: 265 } ] },
      { name: "暗巷冷月", type: "专辑", date: "2026-11-30", songs: [
      { name: "暗巷冷月", duration: 418 }, { name: "天光深夜", duration: 314 }, { name: "深夜的逆流", duration: 240 },
      { name: "无名的野火", duration: 273 }, { name: "灰烬夜雾", duration: 267 }, { name: "迷途水岸", duration: 265 },
      { name: "站台白墙", duration: 223 }, { name: "雨夜旧巷", duration: 290 }, { name: "夜航归途", duration: 220 },
      { name: "晨雾阁楼", duration: 252 } ] },
    { name: "漫长的铁轨", type: "单曲", date: "2029-01-14", songs: [
      { name: "漫长的铁轨", duration: 261 } ] },
    { name: "铁桥孤岛", type: "单曲", date: "2031-01-28", songs: [
      { name: "铁桥孤岛", duration: 162 } ] },
    { name: "旧梦深夜", type: "专辑", date: "2033-04-14", songs: [
      { name: "旧梦深夜", duration: 284 }, { name: "沉默的岔路", duration: 254 }, { name: "碎片高架", duration: 264 },
      { name: "雨夜暗巷", duration: 163 }, { name: "巷子空城", duration: 298 }, { name: "深巷静默", duration: 227 },
      { name: "影中人倒影", duration: 255 }, { name: "屋顶潮间带", duration: 269 }, { name: "深夜的归途", duration: 331 },
      { name: "逆旅疾风", duration: 241 }, { name: "远方停电", duration: 250 } ] },
    { name: "深夜的落雪", type: "单曲", date: "2035-05-24", songs: [
      { name: "深夜的落雪", duration: 314 } ] },
    { name: "深夜的汽笛", type: "单曲", date: "2037-03-16", songs: [
      { name: "深夜的汽笛", duration: 257 } ] },
    { name: "荒径长风", type: "专辑", date: "2039-06-12", songs: [
      { name: "荒径长风", duration: 206 }, { name: "岔路寒潮", duration: 202 }, { name: "断线镜面", duration: 234 },
      { name: "信号灯电塔", duration: 275 }, { name: "电塔台阶", duration: 297 }, { name: "潮间带夜潮", duration: 278 },
      { name: "遥远的楼顶", duration: 265 } ] },
    { name: "沉默的野猫", type: "专辑", date: "2041-08-23", songs: [
      { name: "沉默的野猫", duration: 297 }, { name: "风铃屋顶", duration: 236 }, { name: "久违的风铃", duration: 247 },
      { name: "归途霜降", duration: 295 }, { name: "甲板沙丘", duration: 295 }, { name: "渡轮夜潮", duration: 249 },
      { name: "残阳荒岛", duration: 292 }, { name: "废墟野火", duration: 189 }, { name: "灯塔码头", duration: 266 },
      { name: "夜潮夜雾", duration: 217 }, { name: "归途站台", duration: 296 } ] },
    { name: "初晴渡轮", type: "单曲", date: "2043-07-28", songs: [
      { name: "初晴渡轮", duration: 282 } ] },
    { name: "沉默的信号", type: "EP", date: "2045-07-13", songs: [
      { name: "沉默的信号", duration: 275 }, { name: "沉默的阁楼", duration: 295 }, { name: "遥远的匝道", duration: 267 },
      { name: "归途铁笼", duration: 218 }, { name: "沉默的镜面", duration: 285 }, { name: "旧巷冷月", duration: 248 } ] },
    { name: "深夜阁楼", type: "单曲", date: "2047-09-06", songs: [
      { name: "深夜阁楼", duration: 281 } ] },
    { name: "站台走廊", type: "单曲", date: "2049-11-08", songs: [
      { name: "站台走廊", duration: 277 } ] },
    ],
  "犬儒": [
    { name: "犬儒", type: "EP", date: "2022-12-10", songs: [
       { name: "志铭", duration: 306 }, { name: "皮囊", duration: 234 },
       { name: "病", duration: 226 }, { name: "圈", duration: 350 }, { name: "蔡家关", duration: 117 } ] },
    { name: "天才艺术家", type: "专辑", date: "2023-05-23", songs: [
       { name: "天才艺术家", duration: 218 }, { name: "阶梯", duration: 239 }, { name: "烂苹果", duration: 245 },
       { name: "脏", duration: 238 }, { name: "皂角井", duration: 250 }, { name: "苍蝇", duration: 230 },
       { name: "褪色", duration: 225 }, { name: "栋青南", duration: 240 }, { name: "喂", duration: 235 } ] },
    { name: "心房", type: "专辑", date: "2025-09-20", songs: [
       { name: "花丘", duration: 380 }, { name: "上杉朗", duration: 360 }, { name: "妈妈告诉我", duration: 350 },
       { name: "心房", duration: 390 }, { name: "边云里", duration: 340 }, { name: "送给未来的你", duration: 370 },
       { name: "I Want Your Love", duration: 330 }, { name: "就算", duration: 345 }, { name: "二楼", duration: 355 },
       { name: "白鸟", duration: 365 }, { name: "给我", duration: 340 }, { name: "再见了朋友我们终会再相逢", duration: 400 } ] },
    { name: "旧情歌", type: "单曲", date: "2023-01-01", songs: [ { name: "旧情歌", duration: 250 } ] },
    { name: "河边的想象", type: "单曲", date: "2023-01-01", songs: [ { name: "河边的想象", duration: 260 } ] },
      { name: "站台废楼", type: "单曲", date: "2027-02-14", songs: [
      { name: "站台废楼", duration: 312 } ] },
    { name: "逆流潮汐", type: "单曲", date: "2029-07-09", songs: [
      { name: "逆流潮汐", duration: 297 } ] },
    { name: "水岸静默", type: "专辑", date: "2031-06-03", songs: [
      { name: "水岸静默", duration: 310 }, { name: "久违的深夜", duration: 240 }, { name: "游园台阶", duration: 287 },
      { name: "阁楼雨篷", duration: 245 }, { name: "暮色巷子", duration: 309 }, { name: "遥远的逆光", duration: 279 },
      { name: "信号灯黑巷", duration: 317 }, { name: "野火暮光", duration: 309 }, { name: "惊雷出口", duration: 273 } ] },
    { name: "无名的环流", type: "单曲", date: "2033-04-17", songs: [
      { name: "无名的环流", duration: 168 } ] },
    { name: "遥远的霜降", type: "单曲", date: "2035-09-28", songs: [
      { name: "遥远的霜降", duration: 230 } ] },
    { name: "沉默的暴雨", type: "单曲", date: "2037-08-25", songs: [
      { name: "沉默的暴雨", duration: 303 } ] },
    { name: "逆旅断层", type: "专辑", date: "2039-10-27", songs: [
      { name: "逆旅断层", duration: 272 }, { name: "路口远方", duration: 461 }, { name: "深夜的风铃", duration: 295 },
      { name: "游园天台", duration: 288 }, { name: "铁门晚风", duration: 266 }, { name: "晨雾暴雨", duration: 272 },
      { name: "沉默的断层", duration: 268 }, { name: "旧城光年", duration: 278 }, { name: "归途荒径", duration: 269 } ] },
    { name: "闪电夜航", type: "单曲", date: "2041-08-31", songs: [
      { name: "闪电夜航", duration: 303 } ] },
    { name: "深夜的阁楼", type: "单曲", date: "2043-08-05", songs: [
      { name: "深夜的阁楼", duration: 298 } ] },
    { name: "电线夜潮", type: "专辑", date: "2045-11-02", songs: [
      { name: "电线夜潮", duration: 305 }, { name: "深夜的夜班", duration: 314 }, { name: "极夜夜班", duration: 265 },
      { name: "沉默的潮间带", duration: 287 }, { name: "码头长风", duration: 268 }, { name: "沉默的末班车", duration: 315 },
      { name: "灰墙光年", duration: 222 } ] },
    { name: "归途岔路", type: "专辑", date: "2047-10-18", songs: [
      { name: "归途岔路", duration: 231 }, { name: "光年暮光", duration: 280 }, { name: "荒岛闪电", duration: 292 },
      { name: "旧城匝道", duration: 230 }, { name: "黑巷空城", duration: 230 }, { name: "漫长的车窗", duration: 309 },
      { name: "游园隧道", duration: 293 }, { name: "漫长的星光", duration: 259 }, { name: "码头白墙", duration: 163 },
      { name: "风筝逆旅", duration: 274 } ] },
    { name: "久违的站台", type: "单曲", date: "2049-11-30", songs: [
      { name: "久违的站台", duration: 285 } ] },
    ],
  "发光曲线": [
    { name: "Glow Curve", type: "专辑", date: "2011-01-01", songs: [
       { name: "On", duration: 300 }, { name: "迷航", duration: 380 }, { name: "无法命名的时刻", duration: 360 },
       { name: "鲜花圣母", duration: 360 }, { name: "银河革命计划", duration: 340 }, { name: "不安门", duration: 320 } ] },
    { name: "迷航 (DEDICATE TO MIND)", type: "专辑", date: "2013-09-26", songs: [
       { name: "On", duration: 300 }, { name: "午夜快车", duration: 358 }, { name: "迷航", duration: 390 },
       { name: "重影", duration: 340 }, { name: "鲜花圣母", duration: 380 }, { name: "银河革命计划", duration: 330 },
       { name: "防火墙", duration: 320 }, { name: "醉鸟启示录", duration: 360 }, { name: "Off", duration: 200 } ] },
    { name: "荒野星", type: "专辑", date: "2019-10-01", songs: [
       { name: "灰烬霓虹", duration: 310 }, { name: "金钱不眠", duration: 423 },
       { name: "今夜我不关心人类", duration: 374 }, { name: "荒野星", duration: 377 },
       { name: "来临", duration: 205 }, { name: "无限引擎", duration: 503 },
       { name: "银盐之梦", duration: 403 }, { name: "假寐史", duration: 361 } ] },
    { name: "灰烬霓虹 (Invisible History)", type: "专辑", date: "2019-12-27", songs: [
       { name: "灰烬霓虹", duration: 310 }, { name: "金钱不眠", duration: 423 }, { name: "今夜我不关心人类", duration: 374 },
       { name: "荒野星", duration: 377 }, { name: "来临", duration: 205 }, { name: "无限引擎", duration: 503 },
       { name: "午夜快车", duration: 358 }, { name: "银盐之梦", duration: 403 }, { name: "假寐史", duration: 361 }, { name: "鲜花圣母", duration: 409 } ] },
    { name: "但愿人长久 (Life is a Moracle)", type: "专辑", date: "2023-06-01", songs: [
       { name: "起源", duration: 285 }, { name: "狩猎", duration: 326 }, { name: "哇噻考", duration: 304 },
       { name: "千高原", duration: 275 }, { name: "起源：残响 (feat.梅志勇)", duration: 259 },
       { name: "太阳之夜", duration: 331 }, { name: "筋疲力尽", duration: 294 }, { name: "卧游", duration: 341 } ] },
      { name: "久违的悬浮", type: "专辑", date: "2027-10-30", songs: [
      { name: "久违的悬浮", duration: 325 }, { name: "低语冰川", duration: 360 }, { name: "回旋星云", duration: 353 },
      { name: "引力波纹", duration: 375 }, { name: "无名的雾霭", duration: 347 }, { name: "暗流倒影", duration: 377 },
      { name: "山脉潮汐", duration: 377 } ] },
    { name: "深夜的透明", type: "专辑", date: "2030-07-29", songs: [
      { name: "深夜的透明", duration: 360 }, { name: "晨光薄雾", duration: 334 }, { name: "深海静止", duration: 370 },
      { name: "地平线尘埃", duration: 498 }, { name: "沉默的光晕", duration: 362 }, { name: "久违的陨石", duration: 401 },
      { name: "深夜的回声", duration: 347 }, { name: "无名的星尘", duration: 309 } ] },
    { name: "极地折射", type: "专辑", date: "2033-12-12", songs: [
      { name: "极地折射", duration: 354 }, { name: "遥远的波纹", duration: 311 }, { name: "深夜的沙漏", duration: 331 },
      { name: "暗流尘埃", duration: 365 }, { name: "久违的虚焦", duration: 414 }, { name: "低语光栅", duration: 407 },
      { name: "极昼灰白", duration: 328 }, { name: "慢门回声", duration: 329 }, { name: "无名的轨迹", duration: 560 },
      { name: "折线晨光", duration: 365 }, { name: "水痕潮间带", duration: 376 } ] },
    { name: "极夜水痕", type: "专辑", date: "2037-01-28", songs: [
      { name: "极夜水痕", duration: 376 }, { name: "慢门极地", duration: 322 }, { name: "蓝鲸轨迹", duration: 372 },
      { name: "低语无声", duration: 281 }, { name: "沉默的蓝鲸", duration: 353 }, { name: "漫长的暗流", duration: 290 },
      { name: "星际潮声", duration: 254 }, { name: "经纬深渊", duration: 340 }, { name: "遥远的退潮", duration: 379 },
      { name: "无名的光斑", duration: 346 } ] },
    { name: "静默虚空", type: "专辑", date: "2039-10-17", songs: [
      { name: "静默虚空", duration: 244 }, { name: "空镜静止", duration: 245 }, { name: "深海水痕", duration: 332 },
      { name: "引力静默", duration: 406 }, { name: "低频深海", duration: 363 }, { name: "薄雾水痕", duration: 560 },
      { name: "无名的蓝鲸", duration: 325 }, { name: "光栅雪线", duration: 260 }, { name: "深夜的极地", duration: 316 } ] },
    { name: "星尘星际", type: "专辑", date: "2043-03-23", songs: [
      { name: "星尘星际", duration: 330 }, { name: "漫长的蓝鲸", duration: 332 }, { name: "空谷旷野", duration: 382 },
      { name: "螺旋漂移", duration: 316 }, { name: "深渊折线", duration: 344 }, { name: "遥远的雾霭", duration: 374 },
      { name: "星际", duration: 482 }, { name: "无名的晨光", duration: 259 }, { name: "久违的静水", duration: 351 },
      { name: "环带环流", duration: 371 } ] },
    { name: "蓝鲸极夜", type: "专辑", date: "2046-02-10", songs: [
      { name: "蓝鲸极夜", duration: 318 }, { name: "无声退潮", duration: 345 }, { name: "深夜的断层", duration: 373 },
      { name: "沉默的旷野", duration: 362 }, { name: "慢门折线", duration: 322 }, { name: "水痕悬浮", duration: 333 },
      { name: "折返轨迹", duration: 353 }, { name: "遥远的星轨", duration: 277 }, { name: "碎光星际", duration: 333 },
      { name: "漫长的星云", duration: 344 } ] },
    { name: "深空雪线", type: "专辑", date: "2049-03-22", songs: [
      { name: "深空雪线", duration: 350 }, { name: "潮声缓慢", duration: 338 }, { name: "漫长的静止", duration: 351 },
      { name: "空镜极光", duration: 342 }, { name: "沉默的暗流", duration: 357 }, { name: "沉默的慢门", duration: 376 },
      { name: "潮间带深海", duration: 328 }, { name: "光栅引力", duration: 472 }, { name: "沉默的悬浮", duration: 395 },
      { name: "雪线灰白", duration: 332 } ] },
    ],
  "文雀": [
    { name: "First EP", type: "EP", date: "2010-02-01", songs: [
       { name: "大雁", duration: 390 }, { name: "南方", duration: 318 },
       { name: "看风景的人", duration: 360 }, { name: "谁也别管谁", duration: 330 } ] },
    { name: "彩虹山", type: "专辑", date: "2012-12-07", songs: [
       { name: "彩虹山 Rainbow Mountain", duration: 479 }, { name: "本星", duration: 360 },
       { name: "Double Treble", duration: 340 } ] },
    { name: "看风景的人", type: "EP", date: "2015-05-18", songs: [
       { name: "大雁", duration: 390 }, { name: "南方", duration: 318 }, { name: "看风景的人", duration: 360 },
       { name: "谁也别管谁", duration: 330 }, { name: "寒心寺", duration: 345 } ] },
    { name: "迷路记 Lost Mind", type: "EP", date: "2017-08-20", songs: [
       { name: "迷路记", duration: 360 }, { name: "归途", duration: 350 } ] },
    { name: "庙雨连珠", type: "专辑", date: "2018-09-20", songs: [
       { name: "春分", duration: 406 }, { name: "浮生若梦", duration: 467 }, { name: "一个人的快乐", duration: 309 },
       { name: "我长话短说", duration: 375 }, { name: "Double", duration: 268 } ] },
    { name: "儿戏", type: "专辑", date: "2021-03-19", songs: [
       { name: "伏", duration: 446 }, { name: "儿戏", duration: 392 }, { name: "落梦池", duration: 414 },
       { name: "不回去了", duration: 427 }, { name: "希望像星星一样闪烁", duration: 515 } ] },
    { name: "某", type: "EP", date: "2024-03-01", songs: [
       { name: "某时", duration: 360 }, { name: "某日", duration: 340 }, { name: "某月", duration: 350 } ] },
    { name: "两语", type: "专辑", date: "2026-03-20", songs: [
       { name: "银湾", duration: 380 }, { name: "天目山路", duration: 360 }, { name: "流", duration: 350 },
       { name: "幻季", duration: 340 }, { name: "神游夜话", duration: 400 } ] },
    { name: "大雁", type: "单曲", date: "2015-05-18", songs: [ { name: "大雁", duration: 390 } ] },
    { name: "我长话短说", type: "单曲", date: "2018-09-10", songs: [ { name: "我长话短说", duration: 375 } ] },
    { name: "A Letter Buried in Time", type: "EP", date: "2025-05-01", songs: [
       { name: "A Letter Buried in Time", duration: 326 }, { name: "dizzy", duration: 277 } ] },
      { name: "静默深海", type: "单曲", date: "2027-11-02", songs: [
      { name: "静默深海", duration: 403 } ] },
    { name: "久违的螺旋", type: "EP", date: "2029-06-29", songs: [
      { name: "久违的螺旋", duration: 357 }, { name: "无声陨石", duration: 394 }, { name: "沉默的低语", duration: 406 } ] },
    { name: "缓慢暗流", type: "专辑", date: "2031-08-30", songs: [
      { name: "缓慢暗流", duration: 353 }, { name: "尘埃静水", duration: 336 }, { name: "水银光年", duration: 293 },
      { name: "遥远的遥远", duration: 560 }, { name: "寒潮深海", duration: 264 }, { name: "光晕沙漏", duration: 560 },
      { name: "深夜的低语", duration: 375 }, { name: "沉默的虚空", duration: 375 }, { name: "无名的低语", duration: 361 },
      { name: "折射光斑", duration: 350 } ] },
    { name: "寂静潮声", type: "专辑", date: "2033-11-07", songs: [
      { name: "寂静潮声", duration: 306 }, { name: "经纬漂移", duration: 366 }, { name: "暮色深渊", duration: 311 },
      { name: "环流虚空", duration: 356 }, { name: "月相潮声", duration: 258 }, { name: "轨迹光晕", duration: 375 },
      { name: "悬浮纹理", duration: 281 }, { name: "久违的涟漪", duration: 312 }, { name: "深夜的寒潮", duration: 396 } ] },
    { name: "极光潮间带", type: "EP", date: "2036-01-21", songs: [
      { name: "极光潮间带", duration: 560 }, { name: "遥远的虚焦", duration: 339 }, { name: "旷野薄雾", duration: 363 },
      { name: "久违的余温", duration: 383 }, { name: "沉默的遥远", duration: 400 } ] },
    { name: "山脉光栅", type: "EP", date: "2037-10-09", songs: [
      { name: "山脉光栅", duration: 336 }, { name: "静水倒影", duration: 283 }, { name: "遥远的蓝鲸", duration: 408 },
      { name: "沉默的余温", duration: 397 }, { name: "暗流潮间带", duration: 401 }, { name: "波纹蓝鲸", duration: 347 } ] },
    { name: "无名的潮声", type: "专辑", date: "2039-08-28", songs: [
      { name: "无名的潮声", duration: 309 }, { name: "冰川悬浮", duration: 354 }, { name: "深夜的折返", duration: 560 },
      { name: "山脉雪线", duration: 391 }, { name: "山脉地平线", duration: 404 }, { name: "旷野深渊", duration: 351 },
      { name: "无名的寂静", duration: 341 }, { name: "沙漏折返", duration: 383 }, { name: "折射纹理", duration: 311 } ] },
    { name: "极夜缓慢", type: "专辑", date: "2041-12-21", songs: [
      { name: "极夜缓慢", duration: 336 }, { name: "旷野静默", duration: 379 }, { name: "薄雾折线", duration: 310 },
      { name: "遥远的陨石", duration: 343 }, { name: "薄雾暮色", duration: 352 }, { name: "星轨螺旋", duration: 400 },
      { name: "薄雾深渊", duration: 304 }, { name: "无名的光晕", duration: 389 }, { name: "无名的波纹", duration: 376 } ] },
    { name: "经纬轨迹", type: "专辑", date: "2044-02-27", songs: [
      { name: "经纬轨迹", duration: 443 }, { name: "深夜的水痕", duration: 391 }, { name: "漫长的薄雾", duration: 346 },
      { name: "折线碎光", duration: 352 }, { name: "沙漏山脉", duration: 289 }, { name: "薄雾水银", duration: 333 },
      { name: "星际山脉", duration: 340 }, { name: "漫长的遥远", duration: 434 }, { name: "光年旷野", duration: 397 },
      { name: "悬浮远山", duration: 362 } ] },
    { name: "无名的星际", type: "EP", date: "2045-12-13", songs: [
      { name: "无名的星际", duration: 370 }, { name: "环带漂移", duration: 368 }, { name: "深夜的折射", duration: 284 },
      { name: "河床低频", duration: 364 } ] },
    { name: "无名的水银", type: "专辑", date: "2048-03-07", songs: [
      { name: "无名的水银", duration: 254 }, { name: "沉默的地平线", duration: 337 }, { name: "地平线静水", duration: 336 },
      { name: "极夜光晕", duration: 359 }, { name: "边缘极夜", duration: 560 }, { name: "星云深渊", duration: 560 },
      { name: "深夜的纹理", duration: 389 }, { name: "余温退潮", duration: 393 }, { name: "深海尘埃", duration: 531 },
      { name: "静止倒影", duration: 365 } ] },
    { name: "光斑薄雾", type: "单曲", date: "2049-11-12", songs: [
      { name: "光斑薄雾", duration: 431 } ] },
    ],
};
