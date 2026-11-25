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
      { name: "战车", type: "专辑", date: "2027-08-25", songs: [
      { name: "战车", duration: 282 }, { name: "深夜的铁血", duration: 333 }, { name: "黑日烈焰", duration: 338 },
      { name: "钢铁", duration: 470 }, { name: "铁塔亡魂", duration: 226 }, { name: "破碎", duration: 375 },
      { name: "暗狱", duration: 399 }, { name: "破碎圣坛", duration: 340 }, { name: "铁蹄", duration: 325 },
      { name: "狂暴崩裂", duration: 358 }, { name: "怒吼", duration: 427 } ] },
    { name: "审判", type: "专辑", date: "2032-04-11", songs: [
      { name: "审判", duration: 560 }, { name: "深夜的铁幕", duration: 341 }, { name: "绝境", duration: 367 },
      { name: "狂暴苍穹", duration: 330 }, { name: "寒霜", duration: 294 }, { name: "极北钢铁", duration: 329 },
      { name: "铁轨", duration: 336 }, { name: "雷鸣", duration: 334 } ] },
    { name: "深夜的怒吼", type: "专辑", date: "2036-10-29", songs: [
      { name: "深夜的怒吼", duration: 365 }, { name: "深渊", duration: 349 }, { name: "铁塔", duration: 278 },
      { name: "铁翼雷霆", duration: 354 }, { name: "狂暴", duration: 389 }, { name: "寒夜", duration: 423 },
      { name: "冰川", duration: 215 }, { name: "血誓", duration: 318 }, { name: "高原", duration: 560 } ] },
    { name: "巨浪", type: "专辑", date: "2041-01-21", songs: [
      { name: "巨浪", duration: 358 }, { name: "黑潮", duration: 385 }, { name: "寒霜狂暴", duration: 243 },
      { name: "怒吼铁骑", duration: 343 }, { name: "狂暴战车", duration: 374 }, { name: "深夜的苍穹", duration: 385 },
      { name: "雷霆", duration: 390 }, { name: "深夜的审判", duration: 366 } ] },
    { name: "荒岭", type: "专辑", date: "2045-02-26", songs: [
      { name: "荒岭", duration: 357 }, { name: "深夜的冰川", duration: 316 }, { name: "黑潮暗狱", duration: 264 },
      { name: "灰烬", duration: 322 }, { name: "火海", duration: 327 }, { name: "铁幕", duration: 354 },
      { name: "深夜的深渊", duration: 375 }, { name: "深夜的王座", duration: 368 }, { name: "铁冠", duration: 335 },
      { name: "深夜的长矛", duration: 323 } ] },
    { name: "燃烧", type: "专辑", date: "2048-08-26", songs: [
      { name: "燃烧", duration: 295 }, { name: "铁冠暗狱", duration: 342 }, { name: "深夜的灰烬", duration: 344 },
      { name: "铁血", duration: 325 }, { name: "圣坛战旗", duration: 370 }, { name: "极昼荒岭", duration: 560 },
      { name: "血月巨浪", duration: 347 } ] },
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
      { name: "星光", type: "专辑", date: "2027-07-23", songs: [
      { name: "星光", duration: 208 }, { name: "天台", duration: 269 }, { name: "暴雨", duration: 202 },
      { name: "空城", duration: 179 }, { name: "站台", duration: 252 }, { name: "暗号", duration: 261 },
      { name: "夜班", duration: 525 }, { name: "深夜的余烬", duration: 290 }, { name: "深夜", duration: 189 } ] },
    { name: "荒原", type: "专辑", date: "2031-05-29", songs: [
      { name: "荒原", duration: 211 }, { name: "信号废墟", duration: 255 }, { name: "灰烬", duration: 293 },
      { name: "路口", duration: 194 }, { name: "废墟", duration: 287 }, { name: "风铃", duration: 251 },
      { name: "废墟高墙", duration: 296 }, { name: "霓虹", duration: 261 }, { name: "深夜的暗涌", duration: 260 },
      { name: "楼顶", duration: 306 }, { name: "残响", duration: 210 } ] },
    { name: "暗涌", type: "专辑", date: "2035-04-24", songs: [
      { name: "暗涌", duration: 304 }, { name: "逆光", duration: 293 }, { name: "斑马线", duration: 283 },
      { name: "出口", duration: 282 }, { name: "甲板风铃", duration: 306 }, { name: "停电", duration: 263 },
      { name: "野火", duration: 206 }, { name: "甲板裂痕", duration: 171 }, { name: "深夜的夜航", duration: 262 } ] },
    { name: "深夜的候鸟", type: "EP", date: "2038-11-22", songs: [
      { name: "深夜的候鸟", duration: 263 }, { name: "余烬", duration: 249 }, { name: "汽笛", duration: 278 },
      { name: "楼顶信号", duration: 340 }, { name: "铁轨暴雨", duration: 338 }, { name: "逆流", duration: 272 } ] },
    { name: "候鸟", type: "专辑", date: "2041-10-27", songs: [
      { name: "候鸟", duration: 284 }, { name: "潮声", duration: 334 }, { name: "霓虹路口", duration: 404 },
      { name: "沙丘沙丘", duration: 390 }, { name: "远方", duration: 265 }, { name: "末班车", duration: 232 },
      { name: "长夜废墟", duration: 223 }, { name: "街灯", duration: 232 }, { name: "暗号末班车", duration: 303 },
      { name: "闪电", duration: 278 }, { name: "晚钟", duration: 189 } ] },
    { name: "晴天霓虹", type: "EP", date: "2045-10-20", songs: [
      { name: "晴天霓虹", duration: 263 }, { name: "边界", duration: 258 }, { name: "站台荒岛", duration: 278 },
      { name: "灯塔", duration: 236 }, { name: "断线", duration: 286 }, { name: "深夜的街灯", duration: 293 } ] },
    { name: "雨夜", type: "专辑", date: "2049-08-06", songs: [
      { name: "雨夜", duration: 297 }, { name: "深夜的天台", duration: 183 }, { name: "深夜的断线", duration: 226 },
      { name: "站台晴天", duration: 258 }, { name: "荒岛雨夜", duration: 311 }, { name: "深夜的回声", duration: 262 },
      { name: "深夜的站台", duration: 286 }, { name: "甲板车窗", duration: 273 } ] },
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
      { name: "深夜的晴天", type: "专辑", date: "2027-07-02", songs: [
      { name: "深夜的晴天", duration: 231 }, { name: "教室", duration: 494 }, { name: "晚风", duration: 272 },
      { name: "深夜的风筝", duration: 283 }, { name: "气泡", duration: 265 }, { name: "蓝调", duration: 277 },
      { name: "贝壳", duration: 251 }, { name: "流星", duration: 386 }, { name: "月亮", duration: 301 },
      { name: "汽水", duration: 267 }, { name: "深夜的拥抱", duration: 202 } ] },
    { name: "晴天彩虹", type: "专辑", date: "2029-11-23", songs: [
      { name: "晴天彩虹", duration: 274 }, { name: "海岸", duration: 169 }, { name: "深夜的单车", duration: 261 },
      { name: "蝴蝶结", duration: 284 }, { name: "冰淇淋风筝", duration: 301 }, { name: "初恋", duration: 275 },
      { name: "糖果", duration: 230 }, { name: "深夜的秋千", duration: 258 }, { name: "甜梦沙滩", duration: 291 } ] },
    { name: "深夜的星群", type: "专辑", date: "2032-03-19", songs: [
      { name: "深夜的星群", duration: 296 }, { name: "课桌", duration: 163 }, { name: "甜梦单车", duration: 284 },
      { name: "深夜的音乐盒", duration: 292 }, { name: "许愿", duration: 294 }, { name: "心跳", duration: 304 },
      { name: "微风", duration: 258 }, { name: "软糖", duration: 280 }, { name: "暖阳", duration: 271 } ] },
    { name: "深夜的漫游", type: "专辑", date: "2034-08-07", songs: [
      { name: "深夜的漫游", duration: 363 }, { name: "蜜糖", duration: 286 }, { name: "许愿日落", duration: 282 },
      { name: "深夜的蝴蝶结", duration: 272 }, { name: "拥抱", duration: 337 }, { name: "余光", duration: 258 },
      { name: "柠檬", duration: 402 }, { name: "晴空", duration: 228 } ] },
    { name: "彩虹平行线", type: "专辑", date: "2037-03-20", songs: [
      { name: "彩虹平行线", duration: 293 }, { name: "西瓜拥抱", duration: 304 }, { name: "单车", duration: 279 },
      { name: "沙滩", duration: 242 }, { name: "深夜的冰淇淋", duration: 278 }, { name: "深夜的日落", duration: 196 },
      { name: "风筝拥抱", duration: 305 }, { name: "蝉鸣", duration: 294 }, { name: "深夜的流星", duration: 269 },
      { name: "银河", duration: 259 } ] },
    { name: "盛夏", type: "专辑", date: "2040-01-03", songs: [
      { name: "盛夏", duration: 280 }, { name: "篮球", duration: 290 }, { name: "柠檬蜜糖", duration: 263 },
      { name: "漫游", duration: 174 }, { name: "操场", duration: 302 }, { name: "纸飞机", duration: 278 },
      { name: "星期天花火", duration: 269 }, { name: "晴天", duration: 229 } ] },
    { name: "纸飞机甜梦", type: "专辑", date: "2042-04-22", songs: [
      { name: "纸飞机甜梦", duration: 296 }, { name: "星群微风", duration: 254 }, { name: "深夜的软糖", duration: 263 },
      { name: "琥珀", duration: 240 }, { name: "深夜的海岸", duration: 300 }, { name: "晚风摩天轮", duration: 256 },
      { name: "星群", duration: 272 }, { name: "琥珀微风", duration: 220 } ] },
    { name: "摩天轮", type: "专辑", date: "2044-06-17", songs: [
      { name: "摩天轮", duration: 424 }, { name: "冰淇淋", duration: 194 }, { name: "晴天秋千", duration: 167 },
      { name: "晚霞", duration: 316 }, { name: "深夜的银河", duration: 260 }, { name: "少年", duration: 281 },
      { name: "深夜的月亮", duration: 176 }, { name: "深夜的糖果", duration: 261 }, { name: "深夜的初恋", duration: 223 } ] },
    { name: "彩虹晴空", type: "专辑", date: "2047-02-26", songs: [
      { name: "彩虹晴空", duration: 291 }, { name: "日落", duration: 247 }, { name: "深夜的相片", duration: 228 },
      { name: "秋千", duration: 291 }, { name: "音乐盒", duration: 272 }, { name: "睫毛晚风", duration: 196 },
      { name: "花火", duration: 320 }, { name: "深夜的晚风", duration: 275 }, { name: "风筝", duration: 186 },
      { name: "倒计时", duration: 252 }, { name: "深夜的气泡", duration: 277 } ] },
    { name: "青春相片", type: "专辑", date: "2049-07-31", songs: [
      { name: "青春相片", duration: 298 }, { name: "深夜的晴空", duration: 303 }, { name: "深夜的汽水", duration: 325 },
      { name: "彩虹暖阳", duration: 286 }, { name: "心跳琥珀", duration: 269 }, { name: "青春", duration: 303 },
      { name: "信笺青春", duration: 288 }, { name: "深夜的纸飞机", duration: 377 }, { name: "月亮睫毛", duration: 306 },
      { name: "星期天", duration: 486 }, { name: "深夜的课桌", duration: 271 } ] },
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
      { name: "野火", type: "专辑", date: "2027-04-04", songs: [
      { name: "野火", duration: 333 }, { name: "长夜", duration: 258 }, { name: "深夜的公路", duration: 240 },
      { name: "深夜的归途", duration: 273 }, { name: "候鸟", duration: 260 }, { name: "暗涌", duration: 284 },
      { name: "信号", duration: 191 } ] },
    { name: "出口信号", type: "专辑", date: "2030-12-27", songs: [
      { name: "出口信号", duration: 229 }, { name: "回声", duration: 272 }, { name: "归途", duration: 287 },
      { name: "铁轨旧梦", duration: 303 }, { name: "晴天", duration: 263 }, { name: "荒原暗涌", duration: 296 },
      { name: "旧梦", duration: 205 }, { name: "深夜的荒原", duration: 281 }, { name: "深夜的残响", duration: 302 },
      { name: "星光停电", duration: 266 } ] },
    { name: "星光", type: "专辑", date: "2033-11-12", songs: [
      { name: "星光", duration: 309 }, { name: "闪电", duration: 261 }, { name: "深夜的甲板", duration: 402 },
      { name: "深夜的站牌", duration: 267 }, { name: "深夜的逆流", duration: 284 }, { name: "深夜的晚风", duration: 214 },
      { name: "灯塔", duration: 237 }, { name: "潮汐", duration: 298 }, { name: "旧城街灯", duration: 259 },
      { name: "深夜的灯塔", duration: 292 } ] },
    { name: "汽笛", type: "专辑", date: "2037-04-17", songs: [
      { name: "汽笛", duration: 294 }, { name: "公路", duration: 210 }, { name: "末班车", duration: 260 },
      { name: "深夜的出口", duration: 231 }, { name: "街灯", duration: 189 }, { name: "沙丘", duration: 291 },
      { name: "斑马线", duration: 268 }, { name: "高墙", duration: 293 }, { name: "边界", duration: 455 },
      { name: "归途荒原", duration: 169 } ] },
    { name: "碎片", type: "EP", date: "2040-03-24", songs: [
      { name: "碎片", duration: 306 }, { name: "停电公路", duration: 290 }, { name: "夜班", duration: 300 },
      { name: "逆流", duration: 286 }, { name: "夜班闪电", duration: 271 } ] },
    { name: "夜航断线", type: "专辑", date: "2043-06-12", songs: [
      { name: "夜航断线", duration: 482 }, { name: "旧城", duration: 268 }, { name: "雨夜", duration: 290 },
      { name: "信号沙丘", duration: 224 }, { name: "深夜的疾风", duration: 269 }, { name: "深夜的空城", duration: 296 },
      { name: "野火旧城", duration: 287 }, { name: "夜班回声", duration: 302 }, { name: "深夜", duration: 212 } ] },
    { name: "长夜站牌", type: "专辑", date: "2045-12-12", songs: [
      { name: "长夜站牌", duration: 279 }, { name: "车窗", duration: 300 }, { name: "天台", duration: 304 },
      { name: "深夜的站台", duration: 173 }, { name: "雨夜站台", duration: 293 }, { name: "深夜的闪电", duration: 256 },
      { name: "深夜的废墟", duration: 260 }, { name: "暗号沙丘", duration: 513 }, { name: "晚钟归途", duration: 440 } ] },
    { name: "废墟", type: "专辑", date: "2049-09-05", songs: [
      { name: "废墟", duration: 175 }, { name: "雨夜高墙", duration: 172 }, { name: "晚风", duration: 305 },
      { name: "暮色站牌", duration: 309 }, { name: "站牌", duration: 273 }, { name: "暴雨疾风", duration: 287 },
      { name: "暴雨", duration: 281 }, { name: "站台", duration: 261 } ] },
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
      { name: "边界", type: "专辑", date: "2028-05-30", songs: [
      { name: "边界", duration: 406 }, { name: "铁轨", duration: 348 }, { name: "深夜的站台", duration: 292 },
      { name: "疾风", duration: 479 }, { name: "深夜的碎片", duration: 326 }, { name: "灰烬", duration: 337 },
      { name: "深夜的星光", duration: 288 }, { name: "汽笛疾风", duration: 325 }, { name: "荒原", duration: 290 },
      { name: "晚钟", duration: 344 }, { name: "深夜的汽笛", duration: 347 } ] },
    { name: "停电", type: "专辑", date: "2032-08-06", songs: [
      { name: "停电", duration: 330 }, { name: "潮声", duration: 379 }, { name: "深夜的霓虹", duration: 351 },
      { name: "闪电", duration: 291 }, { name: "深夜的晚钟", duration: 347 }, { name: "裂痕", duration: 330 },
      { name: "余烬", duration: 327 }, { name: "夜航", duration: 328 }, { name: "潮声出口", duration: 309 },
      { name: "长夜斑马线", duration: 311 }, { name: "公路", duration: 332 } ] },
    { name: "暮色", type: "专辑", date: "2036-04-14", songs: [
      { name: "暮色", duration: 318 }, { name: "废墟", duration: 258 }, { name: "归途断线", duration: 355 },
      { name: "深夜的潮声", duration: 344 }, { name: "街灯", duration: 363 }, { name: "路口", duration: 349 },
      { name: "荒岛", duration: 304 }, { name: "深夜的晚风", duration: 324 } ] },
    { name: "深夜的候鸟", type: "专辑", date: "2040-07-30", songs: [
      { name: "深夜的候鸟", duration: 326 }, { name: "深夜的废墟", duration: 327 }, { name: "深夜的暮色", duration: 279 },
      { name: "候鸟甲板", duration: 487 }, { name: "野火潮汐", duration: 354 }, { name: "深夜的隧道", duration: 314 },
      { name: "出口", duration: 311 }, { name: "末班车", duration: 350 } ] },
    { name: "空城", type: "EP", date: "2044-09-14", songs: [
      { name: "空城", duration: 321 }, { name: "长夜疾风", duration: 495 }, { name: "候鸟", duration: 364 },
      { name: "旧梦", duration: 321 } ] },
    { name: "深夜的逆光", type: "专辑", date: "2048-10-09", songs: [
      { name: "深夜的逆光", duration: 309 }, { name: "逆流", duration: 220 }, { name: "远方荒原", duration: 554 },
      { name: "深夜的沙丘", duration: 343 }, { name: "斑马线碎片", duration: 348 }, { name: "深夜的归途", duration: 306 },
      { name: "深夜的天台", duration: 304 }, { name: "甲板", duration: 254 }, { name: "暴雨", duration: 223 },
      { name: "潮汐站牌", duration: 280 }, { name: "天台", duration: 314 } ] },
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
      { name: "深夜的夜航", type: "专辑", date: "2027-09-16", songs: [
      { name: "深夜的夜航", duration: 243 }, { name: "晚钟", duration: 272 }, { name: "出口", duration: 227 },
      { name: "夜班", duration: 280 }, { name: "深夜的街灯", duration: 286 }, { name: "荒原霓虹", duration: 519 },
      { name: "铁轨", duration: 284 } ] },
    { name: "候鸟", type: "专辑", date: "2031-09-26", songs: [
      { name: "候鸟", duration: 161 }, { name: "隧道风铃", duration: 285 }, { name: "潮汐", duration: 271 },
      { name: "深夜的风铃", duration: 261 }, { name: "深夜的裂痕", duration: 284 }, { name: "废墟", duration: 308 },
      { name: "暴雨", duration: 281 } ] },
    { name: "夜航", type: "单曲", date: "2035-11-27", songs: [
      { name: "夜航", duration: 274 } ] },
    { name: "裂痕", type: "专辑", date: "2040-05-15", songs: [
      { name: "裂痕", duration: 245 }, { name: "旧梦", duration: 317 }, { name: "断线", duration: 236 },
      { name: "深夜的站台", duration: 287 }, { name: "灰烬", duration: 231 }, { name: "站台晴天", duration: 279 },
      { name: "残响", duration: 280 }, { name: "楼顶", duration: 440 }, { name: "高墙", duration: 283 },
      { name: "归途", duration: 328 } ] },
    { name: "深夜的疾风", type: "专辑", date: "2045-03-09", songs: [
      { name: "深夜的疾风", duration: 261 }, { name: "逆光", duration: 262 }, { name: "深夜的残响", duration: 303 },
      { name: "雨夜", duration: 295 }, { name: "深夜的暴雨", duration: 266 }, { name: "风铃", duration: 278 },
      { name: "公路潮声", duration: 221 } ] },
    { name: "荒岛", type: "专辑", date: "2049-05-12", songs: [
      { name: "荒岛", duration: 344 }, { name: "深夜的高墙", duration: 286 }, { name: "站牌", duration: 305 },
      { name: "空城", duration: 278 }, { name: "汽笛回声", duration: 309 }, { name: "汽笛", duration: 296 },
      { name: "深夜的逆流", duration: 338 }, { name: "甲板", duration: 312 }, { name: "边界", duration: 167 },
      { name: "灯塔", duration: 212 }, { name: "逆流长夜", duration: 292 } ] },
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
      { name: "齿轮", type: "专辑", date: "2027-12-15", songs: [
      { name: "齿轮", duration: 224 }, { name: "反骨", duration: 215 }, { name: "高音", duration: 200 },
      { name: "破烂", duration: 220 }, { name: "反光", duration: 201 }, { name: "集会弹簧", duration: 137 },
      { name: "深夜的反抗", duration: 212 }, { name: "逆行", duration: 234 }, { name: "电焊", duration: 213 },
      { name: "巷子", duration: 234 }, { name: "逆反", duration: 204 } ] },
    { name: "火花", type: "专辑", date: "2031-10-10", songs: [
      { name: "火花", duration: 184 }, { name: "口号", duration: 241 }, { name: "铁皮", duration: 233 },
      { name: "冲锋油污", duration: 250 }, { name: "深夜的摩托", duration: 205 }, { name: "铁钉断线", duration: 211 },
      { name: "深夜的铁皮", duration: 218 } ] },
    { name: "少年街头", type: "专辑", date: "2035-12-05", songs: [
      { name: "少年街头", duration: 210 }, { name: "深夜的拦截", duration: 217 }, { name: "断线", duration: 178 },
      { name: "静电", duration: 237 }, { name: "拦截", duration: 179 }, { name: "油污", duration: 200 },
      { name: "出逃", duration: 253 }, { name: "电压", duration: 227 }, { name: "深夜的静电", duration: 213 },
      { name: "拉链", duration: 210 } ] },
    { name: "冲锋", type: "专辑", date: "2040-06-28", songs: [
      { name: "冲锋", duration: 224 }, { name: "乱码", duration: 245 }, { name: "白墙", duration: 165 },
      { name: "深夜的呐喊", duration: 217 }, { name: "深夜的炮灰", duration: 256 }, { name: "喇叭", duration: 211 },
      { name: "密电断线", duration: 227 }, { name: "少年", duration: 201 }, { name: "野火", duration: 211 },
      { name: "摩托破洞", duration: 236 }, { name: "深夜的噪点", duration: 196 } ] },
    { name: "快闪", type: "专辑", date: "2045-02-10", songs: [
      { name: "快闪", duration: 222 }, { name: "硝烟弹簧", duration: 217 }, { name: "深夜的快闪", duration: 206 },
      { name: "深夜的破烂", duration: 217 }, { name: "短路", duration: 216 }, { name: "深夜的少年", duration: 202 },
      { name: "深夜的街头", duration: 205 }, { name: "深夜的喇叭", duration: 215 } ] },
    { name: "深夜的硝烟", type: "专辑", date: "2048-10-29", songs: [
      { name: "深夜的硝烟", duration: 236 }, { name: "反抗", duration: 176 }, { name: "断线高音", duration: 196 },
      { name: "摩托", duration: 197 }, { name: "反骨砂纸", duration: 211 }, { name: "电线街头", duration: 189 },
      { name: "硝烟", duration: 224 } ] },
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
      { name: "深夜的山风", type: "专辑", date: "2027-04-09", songs: [
      { name: "深夜的山风", duration: 273 }, { name: "溪边秋千", duration: 249 }, { name: "露水", duration: 215 },
      { name: "车站", duration: 279 }, { name: "旧书", duration: 285 }, { name: "深夜的炊烟", duration: 299 },
      { name: "黄昏", duration: 264 } ] },
    { name: "长椅麦浪", type: "专辑", date: "2029-10-01", songs: [
      { name: "长椅麦浪", duration: 291 }, { name: "深夜的长椅", duration: 281 }, { name: "雨巷", duration: 197 },
      { name: "木桥", duration: 285 }, { name: "青苔", duration: 264 }, { name: "深夜的芦苇", duration: 250 },
      { name: "云边", duration: 263 }, { name: "晨雾", duration: 261 }, { name: "屋檐", duration: 204 } ] },
    { name: "深夜的晨雾", type: "专辑", date: "2032-01-29", songs: [
      { name: "深夜的晨雾", duration: 287 }, { name: "麦田", duration: 322 }, { name: "瓦房", duration: 478 },
      { name: "深夜的云边", duration: 275 }, { name: "晚钟", duration: 283 }, { name: "柳枝", duration: 282 },
      { name: "渡船", duration: 262 }, { name: "旧信", duration: 267 }, { name: "蝉鸣", duration: 287 },
      { name: "河流月台", duration: 287 } ] },
    { name: "篱笆", type: "专辑", date: "2034-07-24", songs: [
      { name: "篱笆", duration: 323 }, { name: "稻田", duration: 245 }, { name: "深夜的渡口", duration: 272 },
      { name: "远方麦浪", duration: 399 }, { name: "麦浪", duration: 236 }, { name: "秋千老树", duration: 283 },
      { name: "立秋蝉鸣", duration: 266 }, { name: "行囊", duration: 290 }, { name: "春分", duration: 416 } ] },
    { name: "长椅田埂", type: "专辑", date: "2037-03-13", songs: [
      { name: "长椅田埂", duration: 444 }, { name: "深夜的石阶", duration: 178 }, { name: "屋檐青梅", duration: 259 },
      { name: "深夜的槐花", duration: 266 }, { name: "故人", duration: 322 }, { name: "秋千渡口", duration: 258 },
      { name: "深夜的露水", duration: 250 } ] },
    { name: "渔火", type: "专辑", date: "2039-08-06", songs: [
      { name: "渔火", duration: 171 }, { name: "老树", duration: 265 }, { name: "麦浪河流", duration: 269 },
      { name: "溪水", duration: 272 }, { name: "石桥灯火", duration: 248 }, { name: "灯火", duration: 262 },
      { name: "深夜的柳枝", duration: 255 } ] },
    { name: "长椅", type: "专辑", date: "2042-05-29", songs: [
      { name: "长椅", duration: 199 }, { name: "芦苇", duration: 191 }, { name: "灯火木桥", duration: 256 },
      { name: "山风", duration: 291 }, { name: "槐花", duration: 242 }, { name: "深夜的渡船", duration: 282 },
      { name: "屋檐巷口", duration: 259 }, { name: "巷口", duration: 267 }, { name: "木舟", duration: 197 },
      { name: "炊烟篱笆", duration: 248 }, { name: "木桥柳枝", duration: 312 } ] },
    { name: "月台", type: "专辑", date: "2044-08-30", songs: [
      { name: "月台", duration: 254 }, { name: "深夜的麦浪", duration: 245 }, { name: "炊烟", duration: 148 },
      { name: "溪水木桥", duration: 244 }, { name: "深夜的秋千", duration: 270 }, { name: "槐花山风", duration: 248 },
      { name: "菜园", duration: 270 }, { name: "青苔白露", duration: 282 }, { name: "远方", duration: 242 },
      { name: "北风", duration: 272 }, { name: "深夜的月台", duration: 289 } ] },
    { name: "深夜的木桥", type: "专辑", date: "2047-05-31", songs: [
      { name: "深夜的木桥", duration: 324 }, { name: "深夜的河流", duration: 258 }, { name: "溪边", duration: 262 },
      { name: "故乡", duration: 228 }, { name: "老树柳枝", duration: 315 }, { name: "菜园乡音", duration: 259 },
      { name: "行囊柳枝", duration: 255 } ] },
    { name: "晨雾白露", type: "专辑", date: "2049-07-13", songs: [
      { name: "晨雾白露", duration: 234 }, { name: "土路", duration: 255 }, { name: "秋千", duration: 274 },
      { name: "槐花乡音", duration: 180 }, { name: "晚霞", duration: 285 }, { name: "深夜的溪水", duration: 254 },
      { name: "田埂", duration: 464 }, { name: "木窗", duration: 280 }, { name: "青梅山岗", duration: 271 },
      { name: "深夜的春分", duration: 292 }, { name: "青梅炊烟", duration: 281 } ] },
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
      { name: "Quiet Marrow（寂静的骨髓）", type: "EP", date: "2027-07-27", songs: [
      { name: "Quiet Marrow（寂静的骨髓）", duration: 343 }, { name: "Canvas Glimmer（画布的微光）", duration: 325 }, { name: "Anchor Nightfall（锚的夜幕）", duration: 319 },
      { name: "Highway（公路）", duration: 348 }, { name: "Undertow（暗流）", duration: 394 }, { name: "Silver（银色）", duration: 346 } ] },
    { name: "Vapor（雾霭）", type: "EP", date: "2031-12-24", songs: [
      { name: "Vapor（雾霭）", duration: 277 }, { name: "Marrow Overcast（骨髓的阴云）", duration: 318 }, { name: "Canvas（画布）", duration: 324 },
      { name: "Silence（沉寂）", duration: 318 }, { name: "Drift（漂流）", duration: 328 } ] },
    { name: "Nightfall Wires（夜幕的电线）", type: "EP", date: "2036-06-30", songs: [
      { name: "Nightfall Wires（夜幕的电线）", duration: 277 }, { name: "Glimmer Overcast（微光的阴云）", duration: 321 }, { name: "Concrete（水泥）", duration: 325 },
      { name: "Carousel（旋转木马）", duration: 309 }, { name: "Quiet（寂静）", duration: 340 } ] },
    { name: "Faded（褪色）", type: "EP", date: "2040-02-29", songs: [
      { name: "Faded（褪色）", duration: 324 }, { name: "Mirrors Undertow（镜子的暗流）", duration: 308 }, { name: "Hollow（空洞）", duration: 295 },
      { name: "Tide Rain（潮汐的雨）", duration: 321 }, { name: "Gravel Drift（砾石的漂流）", duration: 275 } ] },
    { name: "Ember（余烬）", type: "专辑", date: "2045-01-26", songs: [
      { name: "Ember（余烬）", duration: 198 }, { name: "Lantern（灯笼）", duration: 297 }, { name: "Canvas Midnight（画布的午夜）", duration: 338 },
      { name: "Broken（破碎）", duration: 355 }, { name: "Mirrors（镜子）", duration: 297 }, { name: "Iron（铁）", duration: 347 },
      { name: "Meridian（子午线）", duration: 313 }, { name: "Anchor Bloom（锚的绽放）", duration: 240 }, { name: "Whisper（低语）", duration: 353 },
      { name: "Marrow（骨髓）", duration: 346 }, { name: "Vapor Trail（雾霭的足迹）", duration: 326 } ] },
    { name: "Glimmer Daybreak（微光的黎明）", type: "EP", date: "2048-08-09", songs: [
      { name: "Glimmer Daybreak（微光的黎明）", duration: 315 }, { name: "Golden（金色）", duration: 336 }, { name: "Paperplane Neon（纸飞机的霓虹）", duration: 303 },
      { name: "Faded Ashes（褪色的灰烬）", duration: 381 }, { name: "Wires（电线）", duration: 308 } ] },
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
      { name: "站牌旧梦", type: "专辑", date: "2027-10-24", songs: [
      { name: "站牌旧梦", duration: 177 }, { name: "雨夜路口", duration: 177 }, { name: "裂痕", duration: 202 },
      { name: "疾风沙丘", duration: 160 }, { name: "潮汐", duration: 191 }, { name: "信号铁轨", duration: 188 },
      { name: "末班车隧道", duration: 202 }, { name: "残响", duration: 203 }, { name: "暴雨", duration: 188 },
      { name: "高墙", duration: 209 }, { name: "站台闪电", duration: 176 } ] },
    { name: "深夜的路口", type: "专辑", date: "2032-07-08", songs: [
      { name: "深夜的路口", duration: 181 }, { name: "出口", duration: 218 }, { name: "夜航", duration: 228 },
      { name: "风铃", duration: 208 }, { name: "深夜的公路", duration: 189 }, { name: "深夜的残响", duration: 194 },
      { name: "深夜的回声", duration: 180 }, { name: "旧梦", duration: 187 }, { name: "沙丘残响", duration: 210 },
      { name: "旧城暗号", duration: 157 }, { name: "深夜的暗号", duration: 190 } ] },
    { name: "霓虹", type: "专辑", date: "2036-10-07", songs: [
      { name: "霓虹", duration: 256 }, { name: "深夜的信号", duration: 180 }, { name: "甲板", duration: 193 },
      { name: "街灯", duration: 187 }, { name: "候鸟", duration: 153 }, { name: "雨夜野火", duration: 346 },
      { name: "站牌", duration: 183 }, { name: "深夜的楼顶", duration: 203 } ] },
    { name: "潮声", type: "专辑", date: "2040-09-11", songs: [
      { name: "潮声", duration: 176 }, { name: "夜班", duration: 189 }, { name: "旧梦灰烬", duration: 174 },
      { name: "深夜的暗涌", duration: 191 }, { name: "深夜", duration: 203 }, { name: "斑马线闪电", duration: 193 },
      { name: "边界", duration: 273 } ] },
    { name: "深夜的风铃", type: "专辑", date: "2044-10-25", songs: [
      { name: "深夜的风铃", duration: 188 }, { name: "灯塔", duration: 158 }, { name: "晚风", duration: 177 },
      { name: "晴天晚钟", duration: 160 }, { name: "旧梦深夜", duration: 187 }, { name: "深夜的夜班", duration: 111 },
      { name: "候鸟信号", duration: 226 }, { name: "雨夜", duration: 151 }, { name: "信号暴雨", duration: 175 } ] },
    { name: "断线", type: "专辑", date: "2049-03-19", songs: [
      { name: "断线", duration: 210 }, { name: "天台", duration: 179 }, { name: "隧道暗号", duration: 123 },
      { name: "深夜的荒原", duration: 201 }, { name: "旧城", duration: 178 }, { name: "潮汐高墙", duration: 194 },
      { name: "深夜的站台", duration: 185 } ] },
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
      { name: "废墟", type: "专辑", date: "2027-08-01", songs: [
      { name: "废墟", duration: 442 }, { name: "荒岛停电", duration: 245 }, { name: "夜班碎片", duration: 233 },
      { name: "夜航", duration: 223 }, { name: "街灯", duration: 244 }, { name: "甲板", duration: 250 },
      { name: "深夜的碎片", duration: 205 }, { name: "荒原", duration: 258 } ] },
    { name: "停电暗涌", type: "专辑", date: "2032-08-22", songs: [
      { name: "停电暗涌", duration: 224 }, { name: "裂痕", duration: 203 }, { name: "深夜的深夜", duration: 257 },
      { name: "信号", duration: 339 }, { name: "深夜的长夜", duration: 461 }, { name: "暴雨", duration: 277 },
      { name: "站牌", duration: 249 } ] },
    { name: "潮声", type: "专辑", date: "2036-08-18", songs: [
      { name: "潮声", duration: 196 }, { name: "深夜的回声", duration: 301 }, { name: "碎片高墙", duration: 251 },
      { name: "长夜", duration: 263 }, { name: "潮汐霓虹", duration: 249 }, { name: "深夜的暗涌", duration: 243 },
      { name: "疾风", duration: 270 }, { name: "出口末班车", duration: 488 }, { name: "潮汐", duration: 245 },
      { name: "街灯长夜", duration: 281 }, { name: "汽笛", duration: 264 } ] },
    { name: "深夜的高墙", type: "专辑", date: "2040-11-15", songs: [
      { name: "深夜的高墙", duration: 215 }, { name: "末班车", duration: 237 }, { name: "逆流", duration: 268 },
      { name: "断线", duration: 302 }, { name: "出口", duration: 383 }, { name: "深夜的隧道", duration: 257 },
      { name: "深夜的夜航", duration: 270 }, { name: "深夜的晴天", duration: 257 }, { name: "暮色", duration: 262 },
      { name: "深夜的出口", duration: 213 } ] },
    { name: "荒岛", type: "专辑", date: "2044-07-08", songs: [
      { name: "荒岛", duration: 238 }, { name: "边界隧道", duration: 338 }, { name: "深夜的裂痕", duration: 284 },
      { name: "暗涌候鸟", duration: 254 }, { name: "夜班楼顶", duration: 270 }, { name: "隧道", duration: 179 },
      { name: "深夜的晚风", duration: 251 }, { name: "归途", duration: 263 }, { name: "深夜的潮汐", duration: 295 },
      { name: "归途隧道", duration: 248 }, { name: "隧道斑马线", duration: 240 } ] },
    { name: "公路", type: "专辑", date: "2049-02-19", songs: [
      { name: "公路", duration: 278 }, { name: "空城灰烬", duration: 239 }, { name: "候鸟", duration: 438 },
      { name: "甲板深夜", duration: 232 }, { name: "边界", duration: 240 }, { name: "深夜的断线", duration: 211 },
      { name: "野火", duration: 268 } ] },
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
      { name: "Silence Sundown（沉寂的日落）", type: "专辑", date: "2027-12-19", songs: [
      { name: "Silence Sundown（沉寂的日落）", duration: 276 }, { name: "Overcast Drift（阴云的漂流）", duration: 271 }, { name: "Sundown（日落）", duration: 270 },
      { name: "Wires（电线）", duration: 270 }, { name: "Daybreak Echo（黎明的回声）", duration: 244 }, { name: "Mirrors（镜子）", duration: 246 },
      { name: "Silence（沉寂）", duration: 235 }, { name: "Shallow（浅滩）", duration: 281 }, { name: "Concrete（水泥）", duration: 284 } ] },
    { name: "Golden Trail（金色的足迹）", type: "专辑", date: "2032-04-07", songs: [
      { name: "Golden Trail（金色的足迹）", duration: 301 }, { name: "Tide Vapor（潮汐的雾霭）", duration: 269 }, { name: "Satellite（卫星）", duration: 217 },
      { name: "Concrete Signal（水泥的信号）", duration: 171 }, { name: "Anchor（锚）", duration: 274 }, { name: "Iron（铁）", duration: 238 },
      { name: "Rain（雨）", duration: 283 }, { name: "Hollow Quiet（空洞的寂静）", duration: 236 }, { name: "Daylight（日光）", duration: 381 },
      { name: "Lantern（灯笼）", duration: 256 } ] },
    { name: "Trail（足迹）", type: "专辑", date: "2036-08-01", songs: [
      { name: "Trail（足迹）", duration: 240 }, { name: "Concrete Hollow（水泥的空洞）", duration: 247 }, { name: "Satellite Rain（卫星的雨）", duration: 281 },
      { name: "Iron Silence（铁的沉寂）", duration: 281 }, { name: "Gravel（砾石）", duration: 273 }, { name: "Carousel（旋转木马）", duration: 267 },
      { name: "Meridian（子午线）", duration: 276 }, { name: "Highway（公路）", duration: 307 } ] },
    { name: "Tide（潮汐）", type: "专辑", date: "2040-11-25", songs: [
      { name: "Tide（潮汐）", duration: 282 }, { name: "Orbit Static（轨道的静电）", duration: 236 }, { name: "Highway Daylight（公路的日光）", duration: 304 },
      { name: "Static Overcast（静电的阴云）", duration: 163 }, { name: "Ashes（灰烬）", duration: 234 }, { name: "Mirrors Sundown（镜子的日落）", duration: 178 },
      { name: "Vapor Undertow（雾霭的暗流）", duration: 222 }, { name: "Velvet（天鹅绒）", duration: 243 }, { name: "Quiet（寂静）", duration: 280 },
      { name: "Silence Anchor（沉寂的锚）", duration: 235 } ] },
    { name: "Motel Drift（汽车旅馆的漂流）", type: "专辑", date: "2044-05-31", songs: [
      { name: "Motel Drift（汽车旅馆的漂流）", duration: 266 }, { name: "Neon（霓虹）", duration: 458 }, { name: "Overcast Orbit（阴云的轨道）", duration: 282 },
      { name: "Ember（余烬）", duration: 251 }, { name: "Gravel Daybreak（砾石的黎明）", duration: 468 }, { name: "Broken（破碎）", duration: 188 },
      { name: "Faded Sundown（褪色的日落）", duration: 216 } ] },
    { name: "Ember Canvas（余烬的画布）", type: "专辑", date: "2048-09-23", songs: [
      { name: "Ember Canvas（余烬的画布）", duration: 226 }, { name: "Glimmer（微光）", duration: 267 }, { name: "Hollow（空洞）", duration: 442 },
      { name: "Overcast（阴云）", duration: 258 }, { name: "Paperplane（纸飞机）", duration: 269 }, { name: "Rain Sundown（雨的日落）", duration: 295 },
      { name: "Concrete Broken（水泥的破碎）", duration: 351 }, { name: "Marrow（骨髓）", duration: 252 }, { name: "Orbit（轨道）", duration: 312 } ] },
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
      { name: "旧城", type: "专辑", date: "2027-07-17", songs: [
      { name: "旧城", duration: 293 }, { name: "余烬停电", duration: 294 }, { name: "远方", duration: 435 },
      { name: "铁轨", duration: 306 }, { name: "楼顶", duration: 251 }, { name: "深夜的荒原", duration: 328 },
      { name: "风铃", duration: 324 }, { name: "候鸟候鸟", duration: 280 }, { name: "站台", duration: 329 },
      { name: "闪电楼顶", duration: 308 } ] },
    { name: "灯塔", type: "专辑", date: "2031-03-13", songs: [
      { name: "灯塔", duration: 426 }, { name: "夜航", duration: 200 }, { name: "停电", duration: 330 },
      { name: "暴雨", duration: 294 }, { name: "晚钟", duration: 170 }, { name: "迷途", duration: 329 },
      { name: "晚风", duration: 328 }, { name: "回声", duration: 306 }, { name: "沙丘", duration: 488 },
      { name: "车窗暗涌", duration: 183 }, { name: "深夜的暴雨", duration: 276 } ] },
    { name: "旧城公路", type: "专辑", date: "2035-03-07", songs: [
      { name: "旧城公路", duration: 292 }, { name: "断线", duration: 279 }, { name: "闪电", duration: 238 },
      { name: "星光", duration: 330 }, { name: "街灯余烬", duration: 302 }, { name: "末班车", duration: 333 },
      { name: "星光断线", duration: 288 }, { name: "荒岛", duration: 330 }, { name: "荒原", duration: 227 },
      { name: "雨夜", duration: 468 }, { name: "荒原深夜", duration: 250 } ] },
    { name: "公路", type: "专辑", date: "2038-11-29", songs: [
      { name: "公路", duration: 257 }, { name: "深夜的隧道", duration: 209 }, { name: "站牌汽笛", duration: 517 },
      { name: "灯塔夜班", duration: 196 }, { name: "逆光", duration: 298 }, { name: "深夜的废墟", duration: 320 },
      { name: "碎片信号", duration: 321 }, { name: "甲板", duration: 209 }, { name: "疾风", duration: 291 } ] },
    { name: "站牌", type: "专辑", date: "2042-03-12", songs: [
      { name: "站牌", duration: 236 }, { name: "余烬", duration: 321 }, { name: "裂痕归途", duration: 338 },
      { name: "深夜的公路", duration: 326 }, { name: "高墙", duration: 321 }, { name: "深夜的边界", duration: 257 },
      { name: "旧梦", duration: 264 } ] },
    { name: "归途", type: "专辑", date: "2045-05-25", songs: [
      { name: "归途", duration: 360 }, { name: "深夜的逆光", duration: 324 }, { name: "斑马线暗涌", duration: 252 },
      { name: "暴雨荒原", duration: 294 }, { name: "废墟", duration: 275 }, { name: "边界站牌", duration: 301 },
      { name: "野火", duration: 305 }, { name: "深夜的远方", duration: 335 }, { name: "深夜的迷途", duration: 307 } ] },
    { name: "空城闪电", type: "EP", date: "2049-03-07", songs: [
      { name: "空城闪电", duration: 329 }, { name: "深夜的铁轨", duration: 276 }, { name: "深夜的夜航", duration: 308 },
      { name: "裂痕", duration: 312 }, { name: "天台", duration: 335 } ] },
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
      { name: "残响", type: "专辑", date: "2028-05-13", songs: [
      { name: "残响", duration: 406 }, { name: "裂痕斑马线", duration: 377 }, { name: "路口", duration: 397 },
      { name: "汽笛", duration: 320 }, { name: "深夜的潮汐", duration: 359 }, { name: "晚钟", duration: 318 },
      { name: "暗号", duration: 366 }, { name: "夜班", duration: 344 }, { name: "废墟", duration: 292 } ] },
    { name: "空城", type: "专辑", date: "2032-05-03", songs: [
      { name: "空城", duration: 340 }, { name: "站台", duration: 274 }, { name: "晚风", duration: 336 },
      { name: "斑马线逆流", duration: 355 }, { name: "深夜的楼顶", duration: 295 }, { name: "潮声余烬", duration: 412 },
      { name: "余烬", duration: 313 }, { name: "野火", duration: 560 } ] },
    { name: "灯塔暴雨", type: "专辑", date: "2036-06-23", songs: [
      { name: "灯塔暴雨", duration: 295 }, { name: "楼顶", duration: 365 }, { name: "暮色", duration: 247 },
      { name: "荒原", duration: 346 }, { name: "楼顶站牌", duration: 284 }, { name: "末班车", duration: 319 },
      { name: "归途", duration: 475 } ] },
    { name: "夜航碎片", type: "专辑", date: "2040-02-25", songs: [
      { name: "夜航碎片", duration: 398 }, { name: "暗涌潮声", duration: 360 }, { name: "荒岛", duration: 326 },
      { name: "高墙归途", duration: 338 }, { name: "雨夜", duration: 371 }, { name: "汽笛星光", duration: 359 },
      { name: "深夜的暴雨", duration: 379 }, { name: "潮汐", duration: 217 }, { name: "逆流", duration: 347 },
      { name: "深夜的空城", duration: 378 } ] },
    { name: "公路", type: "专辑", date: "2044-09-06", songs: [
      { name: "公路", duration: 369 }, { name: "深夜的野火", duration: 560 }, { name: "停电", duration: 376 },
      { name: "霓虹", duration: 360 }, { name: "裂痕", duration: 374 }, { name: "汽笛余烬", duration: 333 },
      { name: "沙丘", duration: 354 }, { name: "闪电", duration: 376 }, { name: "暗涌", duration: 318 },
      { name: "空城长夜", duration: 286 }, { name: "深夜的暗号", duration: 353 } ] },
    { name: "深夜的出口", type: "专辑", date: "2049-05-15", songs: [
      { name: "深夜的出口", duration: 321 }, { name: "边界", duration: 371 }, { name: "站牌", duration: 356 },
      { name: "风铃", duration: 284 }, { name: "深夜的霓虹", duration: 376 }, { name: "余烬远方", duration: 335 },
      { name: "深夜的车窗", duration: 497 }, { name: "出口晚风", duration: 232 } ] },
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
      { name: "长矛寒夜", type: "专辑", date: "2027-03-20", songs: [
      { name: "长矛寒夜", duration: 274 }, { name: "深夜的审判", duration: 307 }, { name: "深渊", duration: 234 },
      { name: "深夜的灰烬", duration: 231 }, { name: "深夜的铁幕", duration: 253 }, { name: "孤城", duration: 249 },
      { name: "极北狂暴", duration: 247 }, { name: "燃烧黑潮", duration: 261 }, { name: "裂痕烈焰", duration: 256 },
      { name: "铁轨", duration: 279 }, { name: "深夜的石柱", duration: 302 } ] },
    { name: "深夜的圣坛", type: "专辑", date: "2028-12-27", songs: [
      { name: "深夜的圣坛", duration: 259 }, { name: "熔炉", duration: 234 }, { name: "崩裂", duration: 269 },
      { name: "铁幕暗狱", duration: 272 }, { name: "冰川", duration: 239 }, { name: "怒吼", duration: 260 },
      { name: "深夜的铁翼", duration: 232 }, { name: "狂暴", duration: 396 }, { name: "寒夜火山", duration: 271 },
      { name: "长矛", duration: 252 }, { name: "寒夜", duration: 247 } ] },
    { name: "铁翼", type: "专辑", date: "2031-01-02", songs: [
      { name: "铁翼", duration: 264 }, { name: "铁塔", duration: 277 }, { name: "破碎", duration: 189 },
      { name: "雷霆", duration: 238 }, { name: "黑日", duration: 209 }, { name: "暗狱", duration: 257 },
      { name: "熔炉寒夜", duration: 263 }, { name: "苍穹", duration: 164 }, { name: "战车", duration: 158 },
      { name: "王座纪念碑", duration: 205 }, { name: "铁幕", duration: 249 } ] },
    { name: "铁骑", type: "专辑", date: "2033-05-08", songs: [
      { name: "铁骑", duration: 154 }, { name: "雷鸣荒原", duration: 299 }, { name: "巨浪雷鸣", duration: 212 },
      { name: "血誓绝境", duration: 236 }, { name: "寒霜", duration: 297 }, { name: "巅峰", duration: 259 },
      { name: "黑潮", duration: 261 } ] },
    { name: "深夜的钢铁", type: "专辑", date: "2035-03-19", songs: [
      { name: "深夜的钢铁", duration: 175 }, { name: "铁骑铁塔", duration: 250 }, { name: "高原", duration: 243 },
      { name: "深夜的寒夜", duration: 274 }, { name: "绝境", duration: 255 }, { name: "裂痕", duration: 245 },
      { name: "雷鸣", duration: 252 } ] },
    { name: "深夜的巨浪", type: "专辑", date: "2037-08-19", songs: [
      { name: "深夜的巨浪", duration: 274 }, { name: "烈焰", duration: 211 }, { name: "深夜的战旗", duration: 272 },
      { name: "深夜的裂痕", duration: 296 }, { name: "深夜的高原", duration: 265 }, { name: "石柱", duration: 233 },
      { name: "火山钢铁", duration: 280 }, { name: "血誓", duration: 252 }, { name: "深夜的燃烧", duration: 235 } ] },
    { name: "冰川重盾", type: "专辑", date: "2039-07-22", songs: [
      { name: "冰川重盾", duration: 274 }, { name: "铁轨王座", duration: 299 }, { name: "火山", duration: 250 },
      { name: "孤鹰", duration: 205 }, { name: "燃烧", duration: 262 }, { name: "审判", duration: 267 },
      { name: "深夜的雷霆", duration: 277 }, { name: "战鼓", duration: 262 } ] },
    { name: "深夜的破碎", type: "专辑", date: "2041-08-07", songs: [
      { name: "深夜的破碎", duration: 238 }, { name: "深夜的血月", duration: 253 }, { name: "深夜的纪念碑", duration: 235 },
      { name: "亡魂", duration: 243 }, { name: "铁血", duration: 246 }, { name: "铁塔孤鹰", duration: 210 },
      { name: "血月", duration: 243 }, { name: "巨浪", duration: 249 }, { name: "纪念碑", duration: 149 },
      { name: "深夜的极北", duration: 240 }, { name: "深夜的铁血", duration: 243 } ] },
    { name: "极昼", type: "专辑", date: "2043-07-29", songs: [
      { name: "极昼", duration: 231 }, { name: "深夜的铁蹄", duration: 229 }, { name: "血誓炼狱", duration: 260 },
      { name: "深夜的王座", duration: 244 }, { name: "寒霜火山", duration: 262 }, { name: "荒原", duration: 260 },
      { name: "裂痕极昼", duration: 224 }, { name: "冰川钢铁", duration: 269 }, { name: "铁塔崩裂", duration: 234 },
      { name: "圣坛", duration: 345 }, { name: "深夜的血誓", duration: 265 } ] },
    { name: "雷鸣铁血", type: "专辑", date: "2046-01-16", songs: [
      { name: "雷鸣铁血", duration: 186 }, { name: "重盾", duration: 249 }, { name: "炼狱", duration: 238 },
      { name: "亡魂雷霆", duration: 253 }, { name: "火海", duration: 304 }, { name: "灰狼", duration: 265 },
      { name: "血月火海", duration: 243 }, { name: "铁冠铁幕", duration: 481 }, { name: "极北", duration: 166 },
      { name: "火山铁血", duration: 281 }, { name: "铁冠", duration: 242 } ] },
    { name: "深夜的火海", type: "专辑", date: "2047-09-26", songs: [
      { name: "深夜的火海", duration: 258 }, { name: "长矛破碎", duration: 282 }, { name: "深夜的孤城", duration: 265 },
      { name: "炼狱孤鹰", duration: 260 }, { name: "血誓铁幕", duration: 188 }, { name: "火山铁冠", duration: 364 },
      { name: "雷霆怒吼", duration: 282 }, { name: "钢铁", duration: 253 }, { name: "巨浪孤鹰", duration: 359 } ] },
    { name: "荒原高原", type: "专辑", date: "2049-12-15", songs: [
      { name: "荒原高原", duration: 312 }, { name: "灰烬", duration: 273 }, { name: "荒岭深渊", duration: 210 },
      { name: "深夜的孤鹰", duration: 281 }, { name: "石柱血月", duration: 237 }, { name: "深夜的荒原", duration: 237 },
      { name: "铁塔巅峰", duration: 242 } ] },
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
      { name: "燃烧", type: "专辑", date: "2028-02-17", songs: [
      { name: "燃烧", duration: 440 }, { name: "石柱战鼓", duration: 260 }, { name: "冰川", duration: 281 },
      { name: "战鼓", duration: 225 }, { name: "深夜的高原", duration: 251 }, { name: "铁轨巨浪", duration: 139 },
      { name: "战车圣坛", duration: 197 }, { name: "暗狱", duration: 264 }, { name: "圣坛", duration: 243 },
      { name: "深夜的亡魂", duration: 246 } ] },
    { name: "绝境", type: "专辑", date: "2031-05-19", songs: [
      { name: "绝境", duration: 226 }, { name: "烈焰", duration: 240 }, { name: "黑潮", duration: 248 },
      { name: "黑日", duration: 224 }, { name: "铁塔", duration: 286 }, { name: "苍穹", duration: 246 },
      { name: "战车审判", duration: 154 }, { name: "孤鹰铁血", duration: 218 }, { name: "血月铁蹄", duration: 287 },
      { name: "血月熔炉", duration: 321 } ] },
    { name: "深夜的铁蹄", type: "单曲", date: "2034-12-21", songs: [
      { name: "深夜的铁蹄", duration: 248 } ] },
    { name: "铁幕", type: "专辑", date: "2038-06-13", songs: [
      { name: "铁幕", duration: 262 }, { name: "血誓", duration: 274 }, { name: "孤鹰", duration: 168 },
      { name: "火海", duration: 244 }, { name: "深夜的雷霆", duration: 248 }, { name: "长矛", duration: 254 },
      { name: "巅峰", duration: 244 }, { name: "审判", duration: 295 } ] },
    { name: "铁蹄", type: "专辑", date: "2042-01-16", songs: [
      { name: "铁蹄", duration: 232 }, { name: "重盾", duration: 188 }, { name: "寒夜", duration: 208 },
      { name: "纪念碑", duration: 250 }, { name: "深夜的血誓", duration: 215 }, { name: "王座", duration: 257 },
      { name: "深夜的火海", duration: 236 } ] },
    { name: "崩裂", type: "专辑", date: "2045-06-05", songs: [
      { name: "崩裂", duration: 261 }, { name: "雷霆", duration: 263 }, { name: "巅峰炼狱", duration: 256 },
      { name: "灰烬寒夜", duration: 280 }, { name: "深夜的铁塔", duration: 251 }, { name: "战车", duration: 267 },
      { name: "铁骑", duration: 237 }, { name: "深夜的燃烧", duration: 267 } ] },
    { name: "战旗", type: "专辑", date: "2048-10-23", songs: [
      { name: "战旗", duration: 242 }, { name: "怒吼", duration: 229 }, { name: "深夜的崩裂", duration: 233 },
      { name: "狂暴", duration: 436 }, { name: "怒吼苍穹", duration: 255 }, { name: "极昼崩裂", duration: 372 },
      { name: "深夜的荒岭", duration: 331 } ] },
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
      { name: "暗狱", type: "EP", date: "2028-01-22", songs: [
      { name: "暗狱", duration: 262 }, { name: "炼狱", duration: 278 }, { name: "王座", duration: 248 },
      { name: "深夜的战旗", duration: 285 }, { name: "钢铁", duration: 229 } ] },
    { name: "极北", type: "专辑", date: "2031-08-28", songs: [
      { name: "极北", duration: 295 }, { name: "黑潮", duration: 284 }, { name: "深夜的黑潮", duration: 265 },
      { name: "深夜的灰烬", duration: 247 }, { name: "深渊", duration: 290 }, { name: "裂痕", duration: 374 },
      { name: "铁塔崩裂", duration: 307 }, { name: "深夜的王座", duration: 262 }, { name: "孤城炼狱", duration: 486 } ] },
    { name: "战鼓怒吼", type: "专辑", date: "2034-10-03", songs: [
      { name: "战鼓怒吼", duration: 292 }, { name: "审判", duration: 276 }, { name: "深夜的审判", duration: 297 },
      { name: "寒霜", duration: 229 }, { name: "雷鸣王座", duration: 257 }, { name: "黑日", duration: 272 },
      { name: "燃烧", duration: 308 } ] },
    { name: "石柱", type: "专辑", date: "2038-11-26", songs: [
      { name: "石柱", duration: 306 }, { name: "巅峰", duration: 278 }, { name: "深夜的燃烧", duration: 286 },
      { name: "血月", duration: 317 }, { name: "铁骑", duration: 300 }, { name: "巨浪高原", duration: 236 },
      { name: "铁翼荒岭", duration: 329 }, { name: "烈焰", duration: 261 }, { name: "血誓", duration: 298 },
      { name: "极北雷霆", duration: 275 } ] },
    { name: "战车", type: "专辑", date: "2042-03-27", songs: [
      { name: "战车", duration: 260 }, { name: "深夜的铁翼", duration: 329 }, { name: "深夜的荒原", duration: 277 },
      { name: "深夜的极北", duration: 307 }, { name: "火山", duration: 221 }, { name: "圣坛", duration: 259 },
      { name: "极昼", duration: 295 }, { name: "铁血", duration: 299 } ] },
    { name: "燃烧怒吼", type: "专辑", date: "2045-11-06", songs: [
      { name: "燃烧怒吼", duration: 195 }, { name: "怒吼", duration: 297 }, { name: "深夜的钢铁", duration: 466 },
      { name: "炼狱裂痕", duration: 270 }, { name: "寒霜燃烧", duration: 270 }, { name: "战旗", duration: 256 },
      { name: "亡魂", duration: 270 }, { name: "深夜的巨浪", duration: 191 } ] },
    { name: "深夜的绝境", type: "专辑", date: "2048-10-07", songs: [
      { name: "深夜的绝境", duration: 286 }, { name: "荒原", duration: 272 }, { name: "长矛", duration: 296 },
      { name: "寒夜", duration: 259 }, { name: "深夜的高原", duration: 294 }, { name: "破碎", duration: 221 },
      { name: "火海", duration: 270 } ] },
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
      { name: "硝烟", type: "EP", date: "2027-10-28", songs: [
      { name: "硝烟", duration: 187 }, { name: "街头", duration: 216 }, { name: "少年", duration: 209 },
      { name: "深夜的快跑", duration: 221 }, { name: "断线", duration: 228 }, { name: "短路出逃", duration: 224 } ] },
    { name: "电焊", type: "专辑", date: "2032-07-20", songs: [
      { name: "电焊", duration: 187 }, { name: "呐喊", duration: 224 }, { name: "电压", duration: 241 },
      { name: "呐喊反抗", duration: 231 }, { name: "深夜的断电", duration: 234 }, { name: "油污", duration: 246 },
      { name: "炮灰", duration: 258 }, { name: "烂尾", duration: 248 } ] },
    { name: "反骨", type: "专辑", date: "2036-09-08", songs: [
      { name: "反骨", duration: 217 }, { name: "摩托", duration: 246 }, { name: "静电喇叭", duration: 214 },
      { name: "拦截电线", duration: 279 }, { name: "静电", duration: 233 }, { name: "白墙砂纸", duration: 206 },
      { name: "拉链白墙", duration: 375 }, { name: "弹簧", duration: 232 }, { name: "冲锋油污", duration: 245 } ] },
    { name: "推土机", type: "EP", date: "2040-09-12", songs: [
      { name: "推土机", duration: 248 }, { name: "深夜的短路", duration: 217 }, { name: "出逃", duration: 418 },
      { name: "断网", duration: 248 }, { name: "突围", duration: 228 }, { name: "拉链", duration: 197 } ] },
    { name: "深夜的反骨", type: "专辑", date: "2044-03-25", songs: [
      { name: "深夜的反骨", duration: 235 }, { name: "乱码", duration: 255 }, { name: "逆反", duration: 263 },
      { name: "铁链拦截", duration: 236 }, { name: "哨声断线", duration: 224 }, { name: "深夜的火花", duration: 259 },
      { name: "密电破洞", duration: 229 } ] },
    { name: "反抗", type: "专辑", date: "2048-12-08", songs: [
      { name: "反抗", duration: 255 }, { name: "砂纸断线", duration: 214 }, { name: "逆行", duration: 218 },
      { name: "深夜的拦截", duration: 176 }, { name: "深夜的呐喊", duration: 140 }, { name: "高音", duration: 240 },
      { name: "冲锋", duration: 435 } ] },
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
      { name: "Wires（电线）", type: "专辑", date: "2028-03-25", songs: [
      { name: "Wires（电线）", duration: 179 }, { name: "Broken（破碎）", duration: 208 }, { name: "Midnight（午夜）", duration: 195 },
      { name: "Marrow（骨髓）", duration: 193 }, { name: "Carousel Undertow（旋转木马的暗流）", duration: 179 }, { name: "Whisper（低语）", duration: 209 },
      { name: "Rust（锈迹）", duration: 202 } ] },
    { name: "Overcast（阴云）", type: "专辑", date: "2031-10-08", songs: [
      { name: "Overcast（阴云）", duration: 291 }, { name: "Undertow（暗流）", duration: 148 }, { name: "Ember（余烬）", duration: 206 },
      { name: "Gravel（砾石）", duration: 202 }, { name: "Vapor（雾霭）", duration: 200 }, { name: "Ashes（灰烬）", duration: 191 },
      { name: "Neon（霓虹）", duration: 174 } ] },
    { name: "Silver Concrete（银色的水泥）", type: "专辑", date: "2034-11-04", songs: [
      { name: "Silver Concrete（银色的水泥）", duration: 208 }, { name: "Echo（回声）", duration: 199 }, { name: "Concrete Paperplane（水泥的纸飞机）", duration: 157 },
      { name: "Faded（褪色）", duration: 194 }, { name: "Broken Tide（破碎的潮汐）", duration: 174 }, { name: "Meridian（子午线）", duration: 116 },
      { name: "Satellite（卫星）", duration: 173 }, { name: "Lantern（灯笼）", duration: 174 }, { name: "Canvas（画布）", duration: 159 },
      { name: "Bloom（绽放）", duration: 195 } ] },
    { name: "Golden（金色）", type: "专辑", date: "2038-02-09", songs: [
      { name: "Golden（金色）", duration: 298 }, { name: "Ashes Silver（灰烬的银色）", duration: 142 }, { name: "Trail Rain（足迹的雨）", duration: 326 },
      { name: "Carousel（旋转木马）", duration: 186 }, { name: "Velvet Golden（天鹅绒的金色）", duration: 198 }, { name: "Concrete（水泥）", duration: 183 },
      { name: "Drift（漂流）", duration: 200 }, { name: "Daybreak（黎明）", duration: 174 }, { name: "Spark（火花）", duration: 203 } ] },
    { name: "Tide（潮汐）", type: "专辑", date: "2042-02-27", songs: [
      { name: "Tide（潮汐）", duration: 211 }, { name: "Tide Ashes（潮汐的灰烬）", duration: 162 }, { name: "Ember Satellite（余烬的卫星）", duration: 173 },
      { name: "Smoke（烟雾）", duration: 188 }, { name: "Sundown（日落）", duration: 212 }, { name: "Silver（银色）", duration: 175 },
      { name: "Iron（铁）", duration: 221 }, { name: "Anchor Rust（锚的锈迹）", duration: 177 } ] },
    { name: "Midnight Gravel（午夜的砾石）", type: "专辑", date: "2045-10-17", songs: [
      { name: "Midnight Gravel（午夜的砾石）", duration: 111 }, { name: "Daylight（日光）", duration: 201 }, { name: "Hollow（空洞）", duration: 177 },
      { name: "Static Broken（静电的破碎）", duration: 112 }, { name: "Quiet Daylight（寂静的日光）", duration: 195 }, { name: "Rain（雨）", duration: 157 },
      { name: "Motel（汽车旅馆）", duration: 206 }, { name: "Harbor（港湾）", duration: 199 } ] },
    { name: "Quiet（寂静）", type: "专辑", date: "2049-06-11", songs: [
      { name: "Quiet（寂静）", duration: 188 }, { name: "Concrete Marrow（水泥的骨髓）", duration: 200 }, { name: "Neon Meridian（霓虹的子午线）", duration: 196 },
      { name: "Hollow Nightfall（空洞的夜幕）", duration: 204 }, { name: "Faded Highway（褪色的公路）", duration: 166 }, { name: "Orbit（轨道）", duration: 228 },
      { name: "Motel Midnight（汽车旅馆的午夜）", duration: 204 }, { name: "Trail（足迹）", duration: 193 } ] },
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
      { name: "深夜的碎片", type: "专辑", date: "2027-09-01", songs: [
      { name: "深夜的碎片", duration: 245 }, { name: "碎片", duration: 226 }, { name: "信号夜班", duration: 224 },
      { name: "晚钟汽笛", duration: 274 }, { name: "荒岛", duration: 280 }, { name: "雨夜", duration: 455 },
      { name: "深夜的野火", duration: 232 }, { name: "深夜的风铃", duration: 259 } ] },
    { name: "深夜的潮汐", type: "专辑", date: "2030-08-29", songs: [
      { name: "深夜的潮汐", duration: 229 }, { name: "霓虹", duration: 261 }, { name: "末班车逆光", duration: 243 },
      { name: "深夜的晴天", duration: 253 }, { name: "楼顶", duration: 186 }, { name: "潮汐潮声", duration: 201 },
      { name: "断线", duration: 234 }, { name: "站台夜航", duration: 247 }, { name: "雨夜信号", duration: 240 },
      { name: "逆流", duration: 224 }, { name: "远方", duration: 292 } ] },
    { name: "灰烬", type: "专辑", date: "2033-11-01", songs: [
      { name: "灰烬", duration: 424 }, { name: "晴天旧梦", duration: 263 }, { name: "残响", duration: 239 },
      { name: "闪电", duration: 160 }, { name: "晚钟夜航", duration: 254 }, { name: "长夜", duration: 270 },
      { name: "雨夜星光", duration: 251 }, { name: "深夜的回声", duration: 410 } ] },
    { name: "夜航楼顶", type: "专辑", date: "2037-03-16", songs: [
      { name: "夜航楼顶", duration: 229 }, { name: "迷途", duration: 255 }, { name: "暗号潮汐", duration: 251 },
      { name: "疾风余烬", duration: 242 }, { name: "候鸟", duration: 253 }, { name: "深夜的灯塔", duration: 254 },
      { name: "风铃", duration: 219 }, { name: "深夜的废墟", duration: 239 }, { name: "旧城", duration: 247 },
      { name: "深夜的灰烬", duration: 178 } ] },
    { name: "深夜的断线", type: "专辑", date: "2039-11-08", songs: [
      { name: "深夜的断线", duration: 244 }, { name: "深夜的疾风", duration: 253 }, { name: "深夜的闪电", duration: 295 },
      { name: "深夜的车窗", duration: 243 }, { name: "深夜", duration: 223 }, { name: "深夜的空城", duration: 235 },
      { name: "暗号", duration: 251 }, { name: "深夜的夜班", duration: 231 }, { name: "旧梦", duration: 225 },
      { name: "深夜的荒岛", duration: 431 }, { name: "霓虹碎片", duration: 265 } ] },
    { name: "深夜的末班车", type: "专辑", date: "2043-02-03", songs: [
      { name: "深夜的末班车", duration: 258 }, { name: "汽笛", duration: 195 }, { name: "暮色", duration: 221 },
      { name: "晚风", duration: 248 }, { name: "路口潮声", duration: 249 }, { name: "深夜的余烬", duration: 244 },
      { name: "暗涌", duration: 253 }, { name: "旧梦汽笛", duration: 230 }, { name: "暴雨暗号", duration: 237 },
      { name: "信号", duration: 242 }, { name: "潮声", duration: 247 } ] },
    { name: "高墙潮汐", type: "专辑", date: "2046-06-11", songs: [
      { name: "高墙潮汐", duration: 244 }, { name: "晴天站台", duration: 256 }, { name: "逆流逆光", duration: 401 },
      { name: "甲板", duration: 186 }, { name: "深夜的晚钟", duration: 266 }, { name: "疾风", duration: 252 },
      { name: "荒原", duration: 265 }, { name: "天台", duration: 268 }, { name: "站台铁轨", duration: 266 },
      { name: "深夜的晚风", duration: 257 }, { name: "裂痕", duration: 223 } ] },
    { name: "余烬", type: "专辑", date: "2049-03-06", songs: [
      { name: "余烬", duration: 181 }, { name: "深夜的信号", duration: 368 }, { name: "闪电霓虹", duration: 237 },
      { name: "远方暮色", duration: 226 }, { name: "空城", duration: 256 }, { name: "废墟远方", duration: 257 },
      { name: "边界街灯", duration: 248 }, { name: "路口", duration: 163 }, { name: "站台候鸟", duration: 260 },
      { name: "深夜的旧梦", duration: 280 }, { name: "隧道", duration: 224 } ] },
    ],
  "果味VC": [
    { name: "双重生命", type: "专辑", date: "2001-11-11", rating: 7.9, songs: [
       { name: "模糊", duration: 359 }, { name: "超音速列车", duration: 272 }, { name: "年轻人", duration: 286 },
       { name: "Love Me,Girl", duration: 241 }, { name: "基因", duration: 186 }, { name: "北欧洲", duration: 351 },
       { name: "透明（透明）", duration: 272 }, { name: "Big Bang", duration: 214 }, { name: "十四层", duration: 274 },
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
      { name: "灯塔站台", type: "专辑", date: "2027-10-13", songs: [
      { name: "灯塔站台", duration: 260 }, { name: "灯塔裂痕", duration: 290 }, { name: "甲板回声", duration: 207 },
      { name: "楼顶", duration: 258 }, { name: "路口斑马线", duration: 314 }, { name: "出口回声", duration: 250 },
      { name: "深夜的出口", duration: 232 }, { name: "逆光", duration: 269 }, { name: "余烬裂痕", duration: 241 },
      { name: "候鸟街灯", duration: 261 }, { name: "信号", duration: 154 } ] },
    { name: "深夜的站台", type: "专辑", date: "2032-06-02", songs: [
      { name: "深夜的站台", duration: 161 }, { name: "野火甲板", duration: 286 }, { name: "深夜的公路", duration: 209 },
      { name: "候鸟", duration: 283 }, { name: "斑马线", duration: 239 }, { name: "隧道", duration: 302 },
      { name: "深夜的碎片", duration: 170 }, { name: "碎片", duration: 263 }, { name: "空城", duration: 261 } ] },
    { name: "闪电", type: "专辑", date: "2036-06-22", songs: [
      { name: "闪电", duration: 284 }, { name: "甲板荒岛", duration: 226 }, { name: "野火", duration: 290 },
      { name: "站台", duration: 278 }, { name: "废墟", duration: 263 }, { name: "荒岛", duration: 209 },
      { name: "暗号天台", duration: 208 }, { name: "夜班", duration: 247 }, { name: "余烬", duration: 282 },
      { name: "暮色逆流", duration: 274 } ] },
    { name: "高墙", type: "专辑", date: "2040-09-23", songs: [
      { name: "高墙", duration: 240 }, { name: "公路", duration: 472 }, { name: "甲板", duration: 286 },
      { name: "汽笛", duration: 245 }, { name: "深夜的潮汐", duration: 173 }, { name: "路口", duration: 242 },
      { name: "裂痕", duration: 161 }, { name: "车窗潮汐", duration: 455 }, { name: "深夜的灰烬", duration: 267 } ] },
    { name: "深夜的潮声", type: "专辑", date: "2045-02-09", songs: [
      { name: "深夜的潮声", duration: 155 }, { name: "远方", duration: 272 }, { name: "暗涌", duration: 260 },
      { name: "回声", duration: 216 }, { name: "深夜的晚风", duration: 219 }, { name: "隧道天台", duration: 248 },
      { name: "断线高墙", duration: 270 }, { name: "夜航", duration: 268 } ] },
    { name: "晴天", type: "专辑", date: "2048-12-10", songs: [
      { name: "晴天", duration: 306 }, { name: "残响", duration: 285 }, { name: "疾风", duration: 202 },
      { name: "街灯", duration: 287 }, { name: "荒原", duration: 243 }, { name: "深夜的停电", duration: 240 },
      { name: "晚风", duration: 286 }, { name: "深夜", duration: 276 }, { name: "深夜的风铃", duration: 264 },
      { name: "深夜的长夜", duration: 276 }, { name: "深夜的汽笛", duration: 249 } ] },
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
      { name: "极昼", type: "专辑", date: "2027-04-02", songs: [
      { name: "极昼", duration: 364 }, { name: "星轨", duration: 434 }, { name: "极光缓慢", duration: 428 },
      { name: "长夜", duration: 560 }, { name: "折线回旋", duration: 457 }, { name: "边缘", duration: 449 },
      { name: "蓝鲸山脉", duration: 406 }, { name: "银幕", duration: 560 }, { name: "陨石", duration: 399 } ] },
    { name: "断层河床", type: "专辑", date: "2029-05-16", songs: [
      { name: "断层河床", duration: 409 }, { name: "经纬", duration: 560 }, { name: "光年", duration: 405 },
      { name: "涟漪", duration: 454 }, { name: "极光", duration: 434 }, { name: "潮汐冰川", duration: 406 },
      { name: "沙漏", duration: 422 }, { name: "低频尘埃", duration: 461 }, { name: "水银", duration: 388 } ] },
    { name: "长夜雪线", type: "专辑", date: "2031-01-04", songs: [
      { name: "长夜雪线", duration: 368 }, { name: "深夜的深海", duration: 426 }, { name: "深夜的虚空", duration: 453 },
      { name: "经纬极昼", duration: 501 }, { name: "余温", duration: 385 }, { name: "低频星尘", duration: 303 },
      { name: "折射", duration: 472 }, { name: "断层薄雾", duration: 494 }, { name: "低频", duration: 460 },
      { name: "山脉", duration: 428 }, { name: "轨迹", duration: 425 } ] },
    { name: "深夜的灰白", type: "专辑", date: "2033-02-04", songs: [
      { name: "深夜的灰白", duration: 320 }, { name: "深海遥远", duration: 441 }, { name: "深夜的极夜", duration: 406 },
      { name: "极光河床", duration: 496 }, { name: "雪线", duration: 330 }, { name: "波纹", duration: 412 },
      { name: "深夜的无声", duration: 442 }, { name: "蓝鲸", duration: 471 }, { name: "断层", duration: 479 } ] },
    { name: "旷野", type: "专辑", date: "2035-08-20", songs: [
      { name: "旷野", duration: 378 }, { name: "折线", duration: 458 }, { name: "深夜的倒影", duration: 348 },
      { name: "光年沙漏", duration: 332 }, { name: "虚空", duration: 442 }, { name: "引力引力", duration: 347 },
      { name: "深海环流", duration: 453 }, { name: "深夜的寒潮", duration: 477 }, { name: "回声", duration: 455 } ] },
    { name: "环流潮汐", type: "专辑", date: "2037-06-28", songs: [
      { name: "环流潮汐", duration: 438 }, { name: "倒影", duration: 406 }, { name: "地平线极夜", duration: 444 },
      { name: "深夜的河床", duration: 393 }, { name: "尘埃", duration: 429 }, { name: "河床", duration: 443 },
      { name: "环流", duration: 453 }, { name: "深夜的缓慢", duration: 327 }, { name: "回声光年", duration: 301 } ] },
    { name: "深夜的潮汐", type: "专辑", date: "2039-09-24", songs: [
      { name: "深夜的潮汐", duration: 452 }, { name: "深夜的深空", duration: 341 }, { name: "月相", duration: 528 },
      { name: "云层", duration: 346 }, { name: "深夜的遥远", duration: 509 }, { name: "退潮极光", duration: 413 },
      { name: "深夜的云层", duration: 560 }, { name: "低频极夜", duration: 416 }, { name: "缓慢", duration: 560 } ] },
    { name: "遥远雪线", type: "专辑", date: "2041-09-10", songs: [
      { name: "遥远雪线", duration: 560 }, { name: "星轨河床", duration: 397 }, { name: "深夜的极光", duration: 475 },
      { name: "深夜的静默", duration: 467 }, { name: "虚空边缘", duration: 346 }, { name: "深夜的长夜", duration: 469 },
      { name: "无声", duration: 536 }, { name: "深空", duration: 438 }, { name: "静默", duration: 397 },
      { name: "极昼经纬", duration: 471 } ] },
    { name: "潮间带", type: "专辑", date: "2043-06-27", songs: [
      { name: "潮间带", duration: 444 }, { name: "遥远", duration: 292 }, { name: "深夜的环流", duration: 536 },
      { name: "退潮", duration: 560 }, { name: "深夜的退潮", duration: 319 }, { name: "引力尘埃", duration: 466 },
      { name: "长夜虚空", duration: 428 }, { name: "潮间带银幕", duration: 292 }, { name: "深夜的尘埃", duration: 423 },
      { name: "回旋", duration: 456 }, { name: "灰白寒潮", duration: 466 } ] },
    { name: "倒影低频", type: "专辑", date: "2045-11-27", songs: [
      { name: "倒影低频", duration: 467 }, { name: "静止", duration: 285 }, { name: "深夜的陨石", duration: 362 },
      { name: "折射灰白", duration: 426 }, { name: "深夜的引力", duration: 560 }, { name: "折射月相", duration: 373 },
      { name: "退潮薄雾", duration: 457 }, { name: "星尘", duration: 450 } ] },
    { name: "深夜的地平线", type: "专辑", date: "2047-09-30", songs: [
      { name: "深夜的地平线", duration: 278 }, { name: "涟漪薄雾", duration: 345 }, { name: "余温冰川", duration: 482 },
      { name: "深夜的雪线", duration: 464 }, { name: "地平线", duration: 488 }, { name: "薄雾灰白", duration: 442 },
      { name: "深夜的静止", duration: 403 }, { name: "潮汐", duration: 341 }, { name: "引力", duration: 362 } ] },
    { name: "回声灰白", type: "专辑", date: "2050-01-22", songs: [
      { name: "回声灰白", duration: 426 }, { name: "虚空环流", duration: 560 }, { name: "深夜的回声", duration: 510 },
      { name: "余温断层", duration: 413 }, { name: "银幕回旋", duration: 361 }, { name: "雪线余温", duration: 357 },
      { name: "旷野云层", duration: 560 }, { name: "陨石断层", duration: 525 }, { name: "灰白", duration: 398 } ] },
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
      { name: "潮间带", type: "专辑", date: "2027-03-21", songs: [
      { name: "潮间带", duration: 439 }, { name: "光年云层", duration: 560 }, { name: "深海", duration: 559 },
      { name: "潮间带寒潮", duration: 560 }, { name: "回声", duration: 560 }, { name: "深夜的极昼", duration: 560 },
      { name: "星轨", duration: 553 }, { name: "静默", duration: 560 }, { name: "极夜", duration: 560 } ] },
    { name: "深夜的静止", type: "专辑", date: "2028-11-27", songs: [
      { name: "深夜的静止", duration: 560 }, { name: "深海蓝鲸", duration: 560 }, { name: "尘埃", duration: 560 },
      { name: "深夜的遥远", duration: 556 }, { name: "余温旷野", duration: 560 }, { name: "折线", duration: 338 },
      { name: "轨迹星轨", duration: 560 }, { name: "长夜", duration: 560 }, { name: "遥远", duration: 560 },
      { name: "星尘", duration: 560 }, { name: "波纹", duration: 560 } ] },
    { name: "云层", type: "专辑", date: "2031-01-15", songs: [
      { name: "云层", duration: 480 }, { name: "山脉", duration: 489 }, { name: "旷野", duration: 508 },
      { name: "虚空", duration: 366 }, { name: "深夜的波纹", duration: 550 }, { name: "低频", duration: 560 },
      { name: "薄雾", duration: 560 }, { name: "长夜轨迹", duration: 350 }, { name: "深夜的潮汐", duration: 560 },
      { name: "陨石", duration: 552 } ] },
    { name: "倒影", type: "专辑", date: "2033-03-03", songs: [
      { name: "倒影", duration: 560 }, { name: "环流", duration: 560 }, { name: "深夜的地平线", duration: 530 },
      { name: "深夜的极光", duration: 538 }, { name: "寒潮", duration: 480 }, { name: "冰川", duration: 560 },
      { name: "遥远极夜", duration: 560 } ] },
    { name: "深空长夜", type: "专辑", date: "2035-07-30", songs: [
      { name: "深空长夜", duration: 560 }, { name: "深夜的虚空", duration: 560 }, { name: "星尘河床", duration: 560 },
      { name: "星轨经纬", duration: 560 }, { name: "雪线", duration: 560 }, { name: "灰白", duration: 560 },
      { name: "余温银幕", duration: 555 } ] },
    { name: "月相", type: "专辑", date: "2037-07-06", songs: [
      { name: "月相", duration: 560 }, { name: "无声", duration: 560 }, { name: "深夜的缓慢", duration: 382 },
      { name: "水银", duration: 560 }, { name: "轨迹退潮", duration: 436 }, { name: "深夜的深海", duration: 560 },
      { name: "极昼", duration: 560 }, { name: "深夜的星尘", duration: 560 } ] },
    { name: "深夜的潮间带", type: "专辑", date: "2039-04-17", songs: [
      { name: "深夜的潮间带", duration: 560 }, { name: "深夜的银幕", duration: 560 }, { name: "冰川月相", duration: 560 },
      { name: "退潮", duration: 560 }, { name: "潮汐", duration: 462 }, { name: "深海寒潮", duration: 560 },
      { name: "河床", duration: 560 } ] },
    { name: "遥远回声", type: "专辑", date: "2041-08-01", songs: [
      { name: "遥远回声", duration: 560 }, { name: "深夜的山脉", duration: 560 }, { name: "低频极光", duration: 560 },
      { name: "深夜的旷野", duration: 560 }, { name: "余温波纹", duration: 482 }, { name: "深空", duration: 560 },
      { name: "冰川沙漏", duration: 560 }, { name: "深夜的倒影", duration: 560 }, { name: "深夜的寒潮", duration: 560 },
      { name: "余温", duration: 560 } ] },
    { name: "经纬", type: "专辑", date: "2043-08-21", songs: [
      { name: "经纬", duration: 511 }, { name: "折线深海", duration: 560 }, { name: "断层", duration: 560 },
      { name: "银幕", duration: 560 }, { name: "深夜的云层", duration: 560 }, { name: "回旋", duration: 560 },
      { name: "深夜的雪线", duration: 413 } ] },
    { name: "折射边缘", type: "专辑", date: "2045-12-18", songs: [
      { name: "折射边缘", duration: 393 }, { name: "静止", duration: 560 }, { name: "折射", duration: 560 },
      { name: "缓慢", duration: 462 }, { name: "陨石无声", duration: 560 }, { name: "引力回旋", duration: 560 },
      { name: "无声极昼", duration: 560 }, { name: "深夜的退潮", duration: 560 }, { name: "深夜的极夜", duration: 560 },
      { name: "深夜的低频", duration: 560 } ] },
    { name: "雪线潮汐", type: "专辑", date: "2047-09-15", songs: [
      { name: "雪线潮汐", duration: 493 }, { name: "断层地平线", duration: 560 }, { name: "光年", duration: 560 },
      { name: "极光", duration: 560 }, { name: "星尘折线", duration: 465 }, { name: "深夜的边缘", duration: 560 },
      { name: "山脉潮间带", duration: 358 } ] },
    { name: "引力", type: "专辑", date: "2050-01-29", songs: [
      { name: "引力", duration: 560 }, { name: "冰川虚空", duration: 560 }, { name: "深夜的尘埃", duration: 560 },
      { name: "极昼引力", duration: 338 }, { name: "静止潮汐", duration: 560 }, { name: "潮汐深海", duration: 560 },
      { name: "深夜的环流", duration: 560 } ] },
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
      { name: "灰烬", type: "专辑", date: "2026-12-16", songs: [
      { name: "灰烬", duration: 270 }, { name: "晴天", duration: 249 }, { name: "旧梦", duration: 270 },
      { name: "暮色裂痕", duration: 265 }, { name: "深夜的街灯", duration: 278 }, { name: "高墙", duration: 244 },
      { name: "远方", duration: 190 }, { name: "灯塔", duration: 188 }, { name: "余烬隧道", duration: 166 },
      { name: "闪电", duration: 250 }, { name: "站台", duration: 259 } ] },
    { name: "断线潮汐", type: "专辑", date: "2028-12-25", songs: [
      { name: "断线潮汐", duration: 301 }, { name: "潮声", duration: 275 }, { name: "废墟晴天", duration: 247 },
      { name: "裂痕汽笛", duration: 248 }, { name: "潮汐", duration: 237 }, { name: "信号", duration: 247 },
      { name: "荒岛潮声", duration: 230 }, { name: "夜航迷途", duration: 245 }, { name: "暮色", duration: 276 },
      { name: "天台长夜", duration: 160 } ] },
    { name: "碎片晴天", type: "专辑", date: "2030-12-16", songs: [
      { name: "碎片晴天", duration: 253 }, { name: "旧城", duration: 165 }, { name: "晚风潮汐", duration: 348 },
      { name: "路口", duration: 307 }, { name: "回声", duration: 228 }, { name: "深夜的晴天", duration: 285 },
      { name: "深夜的旧城", duration: 243 }, { name: "深夜的逆流", duration: 282 } ] },
    { name: "隧道", type: "专辑", date: "2033-03-29", songs: [
      { name: "隧道", duration: 277 }, { name: "疾风空城", duration: 239 }, { name: "暴雨", duration: 287 },
      { name: "逆光", duration: 314 }, { name: "归途", duration: 265 }, { name: "深夜的斑马线", duration: 271 },
      { name: "暗涌", duration: 283 }, { name: "夜航", duration: 255 }, { name: "荒原", duration: 287 },
      { name: "潮汐疾风", duration: 284 }, { name: "废墟", duration: 218 } ] },
    { name: "深夜的天台", type: "专辑", date: "2035-07-25", songs: [
      { name: "深夜的天台", duration: 278 }, { name: "野火暴雨", duration: 272 }, { name: "深夜的深夜", duration: 161 },
      { name: "深夜", duration: 156 }, { name: "天台风铃", duration: 270 }, { name: "碎片", duration: 263 },
      { name: "深夜的灯塔", duration: 238 } ] },
    { name: "末班车信号", type: "专辑", date: "2037-07-25", songs: [
      { name: "末班车信号", duration: 383 }, { name: "深夜的晚风", duration: 306 }, { name: "荒原长夜", duration: 187 },
      { name: "野火", duration: 259 }, { name: "残响", duration: 285 }, { name: "斑马线", duration: 417 },
      { name: "霓虹隧道", duration: 279 }, { name: "雨夜星光", duration: 237 }, { name: "晚风裂痕", duration: 254 },
      { name: "疾风旧城", duration: 256 } ] },
    { name: "站台斑马线", type: "专辑", date: "2039-08-09", songs: [
      { name: "站台斑马线", duration: 258 }, { name: "野火楼顶", duration: 265 }, { name: "霓虹", duration: 156 },
      { name: "深夜的候鸟", duration: 343 }, { name: "深夜的废墟", duration: 232 }, { name: "荒岛边界", duration: 277 },
      { name: "裂痕星光", duration: 196 }, { name: "深夜的回声", duration: 259 } ] },
    { name: "暮色晴天", type: "专辑", date: "2041-08-27", songs: [
      { name: "暮色晴天", duration: 237 }, { name: "空城星光", duration: 423 }, { name: "深夜的裂痕", duration: 174 },
      { name: "深夜的断线", duration: 225 }, { name: "荒原晴天", duration: 247 }, { name: "晚风信号", duration: 208 },
      { name: "站牌", duration: 238 }, { name: "风铃", duration: 252 }, { name: "长夜", duration: 242 } ] },
    { name: "旧梦碎片", type: "专辑", date: "2043-11-28", songs: [
      { name: "旧梦碎片", duration: 223 }, { name: "深夜的汽笛", duration: 250 }, { name: "信号废墟", duration: 274 },
      { name: "街灯残响", duration: 303 }, { name: "逆流", duration: 247 }, { name: "裂痕", duration: 269 },
      { name: "深夜的沙丘", duration: 263 } ] },
    { name: "沙丘", type: "专辑", date: "2045-12-01", songs: [
      { name: "沙丘", duration: 194 }, { name: "晚钟", duration: 278 }, { name: "深夜的夜航", duration: 287 },
      { name: "甲板", duration: 282 }, { name: "潮声晴天", duration: 288 }, { name: "深夜的暴雨", duration: 261 },
      { name: "空城", duration: 250 }, { name: "疾风闪电", duration: 277 }, { name: "迷途闪电", duration: 289 },
      { name: "归途潮汐", duration: 231 } ] },
    { name: "逆流边界", type: "专辑", date: "2047-09-28", songs: [
      { name: "逆流边界", duration: 176 }, { name: "汽笛", duration: 222 }, { name: "出口", duration: 243 },
      { name: "边界斑马线", duration: 200 }, { name: "沙丘街灯", duration: 241 }, { name: "车窗", duration: 284 },
      { name: "铁轨雨夜", duration: 239 }, { name: "荒岛", duration: 262 } ] },
    { name: "野火沙丘", type: "专辑", date: "2049-12-01", songs: [
      { name: "野火沙丘", duration: 268 }, { name: "高墙余烬", duration: 422 }, { name: "深夜的风铃", duration: 212 },
      { name: "归途疾风", duration: 305 }, { name: "雨夜", duration: 264 }, { name: "深夜的暮色", duration: 282 },
      { name: "暗号长夜", duration: 398 }, { name: "余烬", duration: 238 }, { name: "天台", duration: 261 } ] },
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
      { name: "流星", type: "专辑", date: "2028-04-13", songs: [
      { name: "流星", duration: 315 }, { name: "拥抱", duration: 255 }, { name: "月亮", duration: 253 },
      { name: "余光樱花", duration: 275 }, { name: "深夜的纸飞机", duration: 255 }, { name: "深夜的晴空", duration: 253 },
      { name: "冰淇淋晴天", duration: 242 }, { name: "许愿", duration: 489 }, { name: "深夜的西瓜", duration: 254 },
      { name: "音乐盒", duration: 190 } ] },
    { name: "冰淇淋", type: "专辑", date: "2032-01-01", songs: [
      { name: "冰淇淋", duration: 294 }, { name: "樱花", duration: 253 }, { name: "琥珀余光", duration: 255 },
      { name: "心跳贝壳", duration: 258 }, { name: "糖果", duration: 277 }, { name: "秋千纸飞机", duration: 323 },
      { name: "晴空", duration: 306 }, { name: "漫游", duration: 272 }, { name: "晴天信笺", duration: 285 } ] },
    { name: "西瓜", type: "EP", date: "2036-02-25", songs: [
      { name: "西瓜", duration: 304 }, { name: "气球", duration: 299 }, { name: "深夜的蝉鸣", duration: 297 },
      { name: "少年蝴蝶结", duration: 323 }, { name: "倒计时星群", duration: 302 } ] },
    { name: "微风", type: "EP", date: "2040-08-15", songs: [
      { name: "微风", duration: 239 }, { name: "青春", duration: 285 }, { name: "深夜的日落", duration: 305 },
      { name: "沙滩信笺", duration: 246 } ] },
    { name: "晚风", type: "EP", date: "2045-03-26", songs: [
      { name: "晚风", duration: 369 }, { name: "许愿信笺", duration: 291 }, { name: "心跳蝴蝶结", duration: 479 },
      { name: "深夜的拥抱", duration: 259 }, { name: "深夜的睫毛", duration: 383 } ] },
    { name: "暖阳", type: "EP", date: "2049-05-31", songs: [
      { name: "暖阳", duration: 299 }, { name: "蝉鸣", duration: 248 }, { name: "花火星期天", duration: 292 },
      { name: "晴空琥珀", duration: 255 } ] },
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
      { name: "废墟迷途", type: "专辑", date: "2027-07-20", songs: [
      { name: "废墟迷途", duration: 257 }, { name: "边界出口", duration: 165 }, { name: "边界", duration: 282 },
      { name: "天台", duration: 167 }, { name: "疾风", duration: 300 }, { name: "深夜的夜班", duration: 215 },
      { name: "霓虹", duration: 336 }, { name: "隧道", duration: 289 } ] },
    { name: "路口", type: "专辑", date: "2030-01-14", songs: [
      { name: "路口", duration: 297 }, { name: "夜班荒原", duration: 493 }, { name: "裂痕", duration: 179 },
      { name: "逆流", duration: 253 }, { name: "逆光", duration: 304 }, { name: "街灯", duration: 264 },
      { name: "星光逆流", duration: 281 }, { name: "深夜的灰烬", duration: 334 }, { name: "晚钟暗号", duration: 287 } ] },
    { name: "空城", type: "专辑", date: "2033-01-29", songs: [
      { name: "空城", duration: 193 }, { name: "深夜的闪电", duration: 254 }, { name: "深夜", duration: 304 },
      { name: "荒原", duration: 366 }, { name: "深夜的斑马线", duration: 301 }, { name: "铁轨", duration: 260 },
      { name: "闪电", duration: 220 }, { name: "荒岛", duration: 256 } ] },
    { name: "深夜的逆流", type: "专辑", date: "2035-07-11", songs: [
      { name: "深夜的逆流", duration: 301 }, { name: "雨夜余烬", duration: 271 }, { name: "裂痕闪电", duration: 312 },
      { name: "碎片断线", duration: 242 }, { name: "迷途", duration: 288 }, { name: "深夜的长夜", duration: 282 },
      { name: "晚风荒岛", duration: 305 }, { name: "路口停电", duration: 289 } ] },
    { name: "残响", type: "专辑", date: "2038-03-22", songs: [
      { name: "残响", duration: 280 }, { name: "深夜的晴天", duration: 257 }, { name: "出口楼顶", duration: 164 },
      { name: "深夜的迷途", duration: 286 }, { name: "楼顶荒岛", duration: 256 }, { name: "废墟", duration: 292 },
      { name: "站牌", duration: 255 }, { name: "甲板疾风", duration: 267 }, { name: "出口", duration: 290 } ] },
    { name: "信号", type: "专辑", date: "2041-05-14", songs: [
      { name: "信号", duration: 203 }, { name: "深夜的归途", duration: 261 }, { name: "星光", duration: 286 },
      { name: "暴雨", duration: 260 }, { name: "灰烬", duration: 273 }, { name: "天台汽笛", duration: 199 },
      { name: "旧城", duration: 502 }, { name: "夜班", duration: 264 } ] },
    { name: "深夜的沙丘", type: "专辑", date: "2043-11-22", songs: [
      { name: "深夜的沙丘", duration: 260 }, { name: "深夜的潮声", duration: 300 }, { name: "晚风", duration: 292 },
      { name: "暮色", duration: 330 }, { name: "高墙", duration: 317 }, { name: "夜班裂痕", duration: 372 },
      { name: "公路", duration: 306 } ] },
    { name: "隧道荒原", type: "专辑", date: "2046-09-27", songs: [
      { name: "隧道荒原", duration: 161 }, { name: "斑马线", duration: 222 }, { name: "深夜的暴雨", duration: 228 },
      { name: "碎片", duration: 174 }, { name: "荒岛潮汐", duration: 196 }, { name: "深夜的公路", duration: 265 },
      { name: "深夜的出口", duration: 265 }, { name: "汽笛暴雨", duration: 235 } ] },
    { name: "深夜的路口", type: "专辑", date: "2049-07-06", songs: [
      { name: "深夜的路口", duration: 277 }, { name: "停电", duration: 374 }, { name: "汽笛", duration: 285 },
      { name: "潮汐", duration: 297 }, { name: "深夜的断线", duration: 317 }, { name: "深夜的暮色", duration: 283 },
      { name: "残响空城", duration: 441 }, { name: "断线", duration: 294 } ] },
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
      { name: "深夜的极昼", type: "专辑", date: "2028-04-28", songs: [
      { name: "深夜的极昼", duration: 309 }, { name: "石柱", duration: 294 }, { name: "极北", duration: 408 },
      { name: "血誓", duration: 304 }, { name: "绝境铁血", duration: 209 }, { name: "钢铁黑日", duration: 294 },
      { name: "战旗裂痕", duration: 282 }, { name: "深夜的血誓", duration: 298 }, { name: "亡魂", duration: 269 },
      { name: "熔炉石柱", duration: 284 } ] },
    { name: "深夜的铁血", type: "专辑", date: "2032-01-11", songs: [
      { name: "深夜的铁血", duration: 315 }, { name: "寒霜", duration: 508 }, { name: "黑潮", duration: 294 },
      { name: "燃烧", duration: 290 }, { name: "火山战旗", duration: 176 }, { name: "孤鹰", duration: 281 },
      { name: "怒吼纪念碑", duration: 300 }, { name: "极北纪念碑", duration: 305 }, { name: "石柱孤鹰", duration: 202 } ] },
    { name: "寒夜", type: "专辑", date: "2036-02-10", songs: [
      { name: "寒夜", duration: 286 }, { name: "炼狱", duration: 288 }, { name: "寒霜深渊", duration: 359 },
      { name: "火海", duration: 291 }, { name: "巅峰", duration: 350 }, { name: "钢铁", duration: 271 },
      { name: "铁塔", duration: 268 }, { name: "灰烬", duration: 281 } ] },
    { name: "荒岭", type: "专辑", date: "2040-05-19", songs: [
      { name: "荒岭", duration: 239 }, { name: "深夜的长矛", duration: 226 }, { name: "怒吼寒夜", duration: 318 },
      { name: "深夜的极北", duration: 272 }, { name: "极北巨浪", duration: 177 }, { name: "崩裂", duration: 171 },
      { name: "重盾雷霆", duration: 309 }, { name: "深渊冰川", duration: 354 } ] },
    { name: "铁蹄", type: "专辑", date: "2044-06-07", songs: [
      { name: "铁蹄", duration: 292 }, { name: "深夜的铁轨", duration: 215 }, { name: "铁骑", duration: 281 },
      { name: "铁翼", duration: 324 }, { name: "重盾", duration: 280 }, { name: "审判寒霜", duration: 312 },
      { name: "深夜的审判", duration: 239 } ] },
    { name: "苍穹铁血", type: "专辑", date: "2049-02-02", songs: [
      { name: "苍穹铁血", duration: 326 }, { name: "长矛", duration: 280 }, { name: "深夜的铁幕", duration: 223 },
      { name: "暗狱", duration: 292 }, { name: "火山烈焰", duration: 332 }, { name: "巨浪", duration: 272 },
      { name: "纪念碑", duration: 272 }, { name: "烈焰", duration: 171 }, { name: "怒吼", duration: 450 },
      { name: "战鼓铁幕", duration: 311 }, { name: "深夜的战鼓", duration: 298 } ] },
    ],
  "窒息乐队": [
    { name: "窒息", type: "专辑", date: "2004-01-01", songs: [
      { name: "窒息", duration: 280 }, { name: "极限", duration: 270 } ] },
    { name: "无界", type: "专辑", date: "2020-07-27", songs: [
       { name: "Intro", duration: 111 }, { name: "衣锦寒", duration: 300 }, { name: "亚特兰蒂斯", duration: 262 },
       { name: "归航", duration: 301 }, { name: "巨鲸落", duration: 334 }, { name: "黎明之下", duration: 318 } ] },
      { name: "寒霜", type: "专辑", date: "2028-06-16", songs: [
      { name: "寒霜", duration: 201 }, { name: "铁骑", duration: 232 }, { name: "铁蹄", duration: 227 },
      { name: "孤鹰", duration: 281 }, { name: "长矛", duration: 261 }, { name: "火山", duration: 293 },
      { name: "炼狱", duration: 263 }, { name: "亡魂", duration: 267 }, { name: "战鼓", duration: 266 },
      { name: "钢铁灰烬", duration: 274 } ] },
    { name: "黑潮", type: "专辑", date: "2032-02-22", songs: [
      { name: "黑潮", duration: 205 }, { name: "烈焰", duration: 275 }, { name: "铁轨", duration: 241 },
      { name: "铁冠", duration: 242 }, { name: "极北", duration: 164 }, { name: "火海", duration: 273 },
      { name: "铁幕", duration: 265 }, { name: "雷鸣荒岭", duration: 269 }, { name: "极北铁幕", duration: 170 } ] },
    { name: "深夜的王座", type: "专辑", date: "2036-02-18", songs: [
      { name: "深夜的王座", duration: 261 }, { name: "铁幕纪念碑", duration: 228 }, { name: "裂痕", duration: 224 },
      { name: "高原", duration: 255 }, { name: "孤城黑潮", duration: 195 }, { name: "巅峰", duration: 218 },
      { name: "深夜的铁骑", duration: 301 }, { name: "铁冠绝境", duration: 278 }, { name: "铁塔荒原", duration: 266 },
      { name: "高原铁塔", duration: 218 } ] },
    { name: "铁轨铁冠", type: "专辑", date: "2040-07-13", songs: [
      { name: "铁轨铁冠", duration: 245 }, { name: "孤城", duration: 244 }, { name: "血月", duration: 228 },
      { name: "巨浪", duration: 260 }, { name: "崩裂", duration: 280 }, { name: "铁骑巅峰", duration: 287 },
      { name: "钢铁", duration: 270 }, { name: "审判", duration: 283 }, { name: "燃烧", duration: 504 } ] },
    { name: "血月孤城", type: "专辑", date: "2044-09-02", songs: [
      { name: "血月孤城", duration: 291 }, { name: "绝境", duration: 323 }, { name: "深夜的审判", duration: 251 },
      { name: "孤城破碎", duration: 384 }, { name: "铁塔", duration: 258 }, { name: "战旗", duration: 261 },
      { name: "绝境烈焰", duration: 251 }, { name: "雷霆", duration: 209 }, { name: "深渊", duration: 249 } ] },
    { name: "熔炉", type: "专辑", date: "2049-02-09", songs: [
      { name: "熔炉", duration: 297 }, { name: "王座", duration: 286 }, { name: "深夜的铁塔", duration: 254 },
      { name: "深夜的荒原", duration: 227 }, { name: "苍穹荒原", duration: 325 }, { name: "深夜的燃烧", duration: 153 },
      { name: "深夜的铁冠", duration: 263 }, { name: "破碎", duration: 406 }, { name: "灰烬巅峰", duration: 506 },
      { name: "深夜的灰狼", duration: 286 }, { name: "荒岭", duration: 151 } ] },
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
      { name: "绝境", type: "EP", date: "2028-03-27", songs: [
      { name: "绝境", duration: 326 }, { name: "深夜的亡魂", duration: 560 }, { name: "铁轨", duration: 303 } ] },
    { name: "钢铁", type: "专辑", date: "2032-06-17", songs: [
      { name: "钢铁", duration: 286 }, { name: "高原", duration: 297 }, { name: "深夜的铁骑", duration: 480 },
      { name: "深夜的巅峰", duration: 317 }, { name: "雷鸣石柱", duration: 238 }, { name: "火山", duration: 292 },
      { name: "狂暴", duration: 264 } ] },
    { name: "王座", type: "EP", date: "2036-11-05", songs: [
      { name: "王座", duration: 513 }, { name: "破碎", duration: 318 }, { name: "烈焰", duration: 328 },
      { name: "深夜的荒岭", duration: 326 } ] },
    { name: "冰川", type: "专辑", date: "2040-07-23", songs: [
      { name: "冰川", duration: 226 }, { name: "燃烧", duration: 231 }, { name: "深夜的孤鹰", duration: 316 },
      { name: "火山战鼓", duration: 331 }, { name: "铁幕", duration: 294 }, { name: "深渊", duration: 214 },
      { name: "亡魂", duration: 312 } ] },
    { name: "雷鸣寒夜", type: "专辑", date: "2044-07-17", songs: [
      { name: "雷鸣寒夜", duration: 332 }, { name: "血誓", duration: 285 }, { name: "黑日", duration: 331 },
      { name: "战鼓", duration: 329 }, { name: "寒霜", duration: 285 }, { name: "深夜的石柱", duration: 288 },
      { name: "铁蹄孤城", duration: 328 } ] },
    { name: "深夜的极昼", type: "专辑", date: "2049-01-28", songs: [
      { name: "深夜的极昼", duration: 288 }, { name: "深夜的巨浪", duration: 316 }, { name: "战车", duration: 363 },
      { name: "暗狱", duration: 283 }, { name: "深夜的极北", duration: 249 }, { name: "战鼓铁血", duration: 256 },
      { name: "荒岭", duration: 335 } ] },
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
      { name: "余烬", type: "专辑", date: "2027-12-19", songs: [
      { name: "余烬", duration: 365 }, { name: "甲板", duration: 372 }, { name: "深夜的风铃", duration: 378 },
      { name: "断线", duration: 427 }, { name: "站牌", duration: 432 }, { name: "沙丘出口", duration: 433 },
      { name: "荒原", duration: 282 }, { name: "逆光甲板", duration: 413 } ] },
    { name: "旧城", type: "专辑", date: "2032-07-05", songs: [
      { name: "旧城", duration: 401 }, { name: "深夜的碎片", duration: 560 }, { name: "铁轨暗号", duration: 235 },
      { name: "斑马线晚钟", duration: 379 }, { name: "深夜的闪电", duration: 397 }, { name: "楼顶", duration: 405 },
      { name: "晚风", duration: 372 } ] },
    { name: "深夜的灰烬", type: "专辑", date: "2036-11-25", songs: [
      { name: "深夜的灰烬", duration: 560 }, { name: "暴雨", duration: 343 }, { name: "野火", duration: 400 },
      { name: "高墙", duration: 232 }, { name: "闪电", duration: 425 }, { name: "远方", duration: 430 },
      { name: "候鸟", duration: 492 }, { name: "街灯", duration: 321 }, { name: "潮汐野火", duration: 560 },
      { name: "隧道", duration: 462 }, { name: "深夜的迷途", duration: 560 } ] },
    { name: "旧城车窗", type: "专辑", date: "2040-12-28", songs: [
      { name: "旧城车窗", duration: 389 }, { name: "停电", duration: 465 }, { name: "信号", duration: 445 },
      { name: "碎片", duration: 369 }, { name: "夜航", duration: 369 }, { name: "晚钟", duration: 379 },
      { name: "闪电晚风", duration: 353 }, { name: "路口", duration: 427 } ] },
    { name: "逆光", type: "专辑", date: "2044-11-27", songs: [
      { name: "逆光", duration: 362 }, { name: "出口", duration: 427 }, { name: "霓虹", duration: 377 },
      { name: "深夜的回声", duration: 268 }, { name: "星光", duration: 428 }, { name: "逆流", duration: 444 },
      { name: "废墟", duration: 362 }, { name: "深夜的空城", duration: 433 }, { name: "深夜的楼顶", duration: 347 },
      { name: "灯塔", duration: 444 }, { name: "归途街灯", duration: 444 } ] },
    { name: "深夜的沙丘", type: "专辑", date: "2048-11-29", songs: [
      { name: "深夜的沙丘", duration: 426 }, { name: "风铃", duration: 419 }, { name: "深夜的暗涌", duration: 386 },
      { name: "深夜的断线", duration: 493 }, { name: "空城公路", duration: 441 }, { name: "路口逆流", duration: 425 },
      { name: "旧城边界", duration: 443 }, { name: "站台高墙", duration: 394 }, { name: "暗号", duration: 375 },
      { name: "旧梦", duration: 344 }, { name: "深夜", duration: 394 } ] },
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
      { name: "Paperplane（纸飞机）", type: "EP", date: "2027-01-12", songs: [
      { name: "Paperplane（纸飞机）", duration: 344 }, { name: "Carousel Sundown（旋转木马的日落）", duration: 322 }, { name: "Satellite（卫星）", duration: 293 } ] },
    { name: "Drift（漂流）", type: "专辑", date: "2029-07-13", songs: [
      { name: "Drift（漂流）", duration: 294 }, { name: "Meridian Silence（子午线的沉寂）", duration: 268 }, { name: "Faded（褪色）", duration: 331 },
      { name: "Bloom（绽放）", duration: 293 }, { name: "Overcast Smoke（阴云的烟雾）", duration: 213 }, { name: "Anchor Daylight（锚的日光）", duration: 318 },
      { name: "Vapor（雾霭）", duration: 302 }, { name: "Harbor Highway（港湾的公路）", duration: 383 }, { name: "Quiet Undertow（寂静的暗流）", duration: 356 },
      { name: "Anchor Mirrors（锚的镜子）", duration: 445 }, { name: "Iron（铁）", duration: 218 } ] },
    { name: "Tide（潮汐）", type: "专辑", date: "2032-01-02", songs: [
      { name: "Tide（潮汐）", duration: 272 }, { name: "Ember（余烬）", duration: 330 }, { name: "Wires Lantern（电线的灯笼）", duration: 309 },
      { name: "Echo Wires（回声的电线）", duration: 324 }, { name: "Orbit Anchor（轨道的锚）", duration: 333 }, { name: "Marrow（骨髓）", duration: 302 },
      { name: "Concrete Hollow（水泥的空洞）", duration: 296 }, { name: "Gravel（砾石）", duration: 313 }, { name: "Quiet Sundown（寂静的日落）", duration: 318 } ] },
    { name: "Quiet（寂静）", type: "专辑", date: "2034-10-26", songs: [
      { name: "Quiet（寂静）", duration: 359 }, { name: "Spark（火花）", duration: 344 }, { name: "Daybreak Mirrors（黎明的镜子）", duration: 308 },
      { name: "Concrete（水泥）", duration: 350 }, { name: "Sundown Neon（日落的霓虹）", duration: 332 }, { name: "Rust（锈迹）", duration: 208 },
      { name: "Concrete Golden（水泥的金色）", duration: 316 } ] },
    { name: "Glimmer Anchor（微光的锚）", type: "EP", date: "2037-03-25", songs: [
      { name: "Glimmer Anchor（微光的锚）", duration: 353 }, { name: "Canvas Static（画布的静电）", duration: 256 }, { name: "Carousel（旋转木马）", duration: 301 },
      { name: "Meridian（子午线）", duration: 342 }, { name: "Golden（金色）", duration: 324 }, { name: "Broken（破碎）", duration: 346 } ] },
    { name: "Rain Iron（雨的铁）", type: "EP", date: "2039-09-29", songs: [
      { name: "Rain Iron（雨的铁）", duration: 314 }, { name: "Overcast（阴云）", duration: 343 }, { name: "Silver（银色）", duration: 316 },
      { name: "Glimmer（微光）", duration: 345 }, { name: "Anchor（锚）", duration: 340 } ] },
    { name: "Motel（汽车旅馆）", type: "EP", date: "2042-05-30", songs: [
      { name: "Motel（汽车旅馆）", duration: 337 }, { name: "Concrete Rust（水泥的锈迹）", duration: 352 }, { name: "Daybreak（黎明）", duration: 427 },
      { name: "Canvas（画布）", duration: 341 }, { name: "Lantern（灯笼）", duration: 345 }, { name: "Midnight（午夜）", duration: 333 } ] },
    { name: "Silence（沉寂）", type: "专辑", date: "2044-12-20", songs: [
      { name: "Silence（沉寂）", duration: 308 }, { name: "Wires（电线）", duration: 331 }, { name: "Mirrors（镜子）", duration: 337 },
      { name: "Undertow（暗流）", duration: 370 }, { name: "Velvet Rain（天鹅绒的雨）", duration: 213 }, { name: "Anchor Concrete（锚的水泥）", duration: 272 },
      { name: "Motel Canvas（汽车旅馆的画布）", duration: 479 }, { name: "Shallow Harbor（浅滩的港湾）", duration: 260 }, { name: "Neon（霓虹）", duration: 195 } ] },
    { name: "Velvet（天鹅绒）", type: "EP", date: "2047-04-14", songs: [
      { name: "Velvet（天鹅绒）", duration: 317 }, { name: "Silver Broken（银色的破碎）", duration: 284 }, { name: "Harbor Trail（港湾的足迹）", duration: 191 },
      { name: "Sundown（日落）", duration: 302 } ] },
    { name: "Highway（公路）", type: "EP", date: "2049-07-10", songs: [
      { name: "Highway（公路）", duration: 292 }, { name: "Signal Daybreak（信号的黎明）", duration: 311 }, { name: "Quiet Glimmer（寂静的微光）", duration: 313 } ] },
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
      { name: "Echo（回声）", type: "专辑", date: "2026-12-07", songs: [
      { name: "Echo（回声）", duration: 171 }, { name: "Highway Drift（公路的漂流）", duration: 275 }, { name: "Tide（潮汐）", duration: 250 },
      { name: "Wires Static（电线的静电）", duration: 306 }, { name: "Static（静电）", duration: 251 }, { name: "Carousel（旋转木马）", duration: 281 },
      { name: "Echo Sundown（回声的日落）", duration: 309 }, { name: "Rain（雨）", duration: 313 }, { name: "Motel（汽车旅馆）", duration: 267 },
      { name: "Glimmer（微光）", duration: 278 }, { name: "Signal（信号）", duration: 241 } ] },
    { name: "Daybreak（黎明）", type: "专辑", date: "2029-01-19", songs: [
      { name: "Daybreak（黎明）", duration: 300 }, { name: "Vapor（雾霭）", duration: 283 }, { name: "Hollow Silence（空洞的沉寂）", duration: 241 },
      { name: "Hollow（空洞）", duration: 237 }, { name: "Neon Golden（霓虹的金色）", duration: 254 }, { name: "Hollow Wires（空洞的电线）", duration: 267 },
      { name: "Harbor Satellite（港湾的卫星）", duration: 278 }, { name: "Concrete（水泥）", duration: 291 }, { name: "Nightfall（夜幕）", duration: 264 } ] },
    { name: "Meridian（子午线）", type: "专辑", date: "2030-12-29", songs: [
      { name: "Meridian（子午线）", duration: 236 }, { name: "Whisper Golden（低语的金色）", duration: 245 }, { name: "Paperplane（纸飞机）", duration: 272 },
      { name: "Harbor（港湾）", duration: 266 }, { name: "Velvet Anchor（天鹅绒的锚）", duration: 243 }, { name: "Quiet Mirrors（寂静的镜子）", duration: 251 },
      { name: "Orbit（轨道）", duration: 245 }, { name: "Sundown（日落）", duration: 276 } ] },
    { name: "Quiet Overcast（寂静的阴云）", type: "专辑", date: "2033-02-07", songs: [
      { name: "Quiet Overcast（寂静的阴云）", duration: 223 }, { name: "Gravel Mirrors（砾石的镜子）", duration: 275 }, { name: "Bloom Orbit（绽放的轨道）", duration: 263 },
      { name: "Midnight（午夜）", duration: 465 }, { name: "Silence Faded（沉寂的褪色）", duration: 239 }, { name: "Faded（褪色）", duration: 243 },
      { name: "Bloom（绽放）", duration: 164 } ] },
    { name: "Rust（锈迹）", type: "专辑", date: "2035-03-08", songs: [
      { name: "Rust（锈迹）", duration: 292 }, { name: "Golden Motel（金色的汽车旅馆）", duration: 152 }, { name: "Anchor Neon（锚的霓虹）", duration: 277 },
      { name: "Smoke Whisper（烟雾的低语）", duration: 267 }, { name: "Broken（破碎）", duration: 278 }, { name: "Iron Vapor（铁的雾霭）", duration: 287 },
      { name: "Ashes Daylight（灰烬的日光）", duration: 210 }, { name: "Lantern（灯笼）", duration: 242 }, { name: "Ashes Nightfall（灰烬的夜幕）", duration: 284 } ] },
    { name: "Overcast（阴云）", type: "专辑", date: "2037-05-13", songs: [
      { name: "Overcast（阴云）", duration: 253 }, { name: "Meridian Paperplane（子午线的纸飞机）", duration: 284 }, { name: "Ember Motel（余烬的汽车旅馆）", duration: 241 },
      { name: "Highway（公路）", duration: 237 }, { name: "Ember（余烬）", duration: 253 }, { name: "Motel Signal（汽车旅馆的信号）", duration: 233 },
      { name: "Silver（银色）", duration: 273 }, { name: "Rain Spark（雨的火花）", duration: 243 } ] },
    { name: "Echo Silver（回声的银色）", type: "专辑", date: "2039-10-13", songs: [
      { name: "Echo Silver（回声的银色）", duration: 276 }, { name: "Rain Nightfall（雨的夜幕）", duration: 437 }, { name: "Midnight Marrow（午夜的骨髓）", duration: 248 },
      { name: "Bloom Carousel（绽放的旋转木马）", duration: 253 }, { name: "Spark（火花）", duration: 239 }, { name: "Anchor（锚）", duration: 310 },
      { name: "Undertow（暗流）", duration: 417 } ] },
    { name: "Rust Gravel（锈迹的砾石）", type: "专辑", date: "2041-07-17", songs: [
      { name: "Rust Gravel（锈迹的砾石）", duration: 274 }, { name: "Mirrors（镜子）", duration: 254 }, { name: "Golden（金色）", duration: 258 },
      { name: "Marrow（骨髓）", duration: 222 }, { name: "Sundown Silence（日落的沉寂）", duration: 260 }, { name: "Daybreak Velvet（黎明的天鹅绒）", duration: 181 },
      { name: "Vapor Shallow（雾霭的浅滩）", duration: 262 }, { name: "Iron（铁）", duration: 240 } ] },
    { name: "Iron Quiet（铁的寂静）", type: "专辑", date: "2043-07-22", songs: [
      { name: "Iron Quiet（铁的寂静）", duration: 250 }, { name: "Paperplane Velvet（纸飞机的天鹅绒）", duration: 262 }, { name: "Nightfall Vapor（夜幕的雾霭）", duration: 277 },
      { name: "Daylight Mirrors（日光的镜子）", duration: 207 }, { name: "Shallow（浅滩）", duration: 344 }, { name: "Gravel Shallow（砾石的浅滩）", duration: 252 },
      { name: "Wires（电线）", duration: 143 }, { name: "Marrow Anchor（骨髓的锚）", duration: 268 } ] },
    { name: "Neon（霓虹）", type: "专辑", date: "2045-12-05", songs: [
      { name: "Neon（霓虹）", duration: 300 }, { name: "Bloom Wires（绽放的电线）", duration: 284 }, { name: "Smoke（烟雾）", duration: 247 },
      { name: "Gravel Echo（砾石的回声）", duration: 266 }, { name: "Meridian Daylight（子午线的日光）", duration: 264 }, { name: "Whisper（低语）", duration: 352 },
      { name: "Lantern Neon（灯笼的霓虹）", duration: 424 }, { name: "Anchor Signal（锚的信号）", duration: 269 }, { name: "Gravel（砾石）", duration: 261 },
      { name: "Quiet（寂静）", duration: 281 }, { name: "Neon Silver（霓虹的银色）", duration: 276 } ] },
    { name: "Echo Broken（回声的破碎）", type: "专辑", date: "2047-10-05", songs: [
      { name: "Echo Broken（回声的破碎）", duration: 234 }, { name: "Ashes（灰烬）", duration: 245 }, { name: "Tide Trail（潮汐的足迹）", duration: 389 },
      { name: "Signal Concrete（信号的水泥）", duration: 271 }, { name: "Daylight（日光）", duration: 343 }, { name: "Static Whisper（静电的低语）", duration: 285 },
      { name: "Satellite（卫星）", duration: 255 }, { name: "Broken Ember（破碎的余烬）", duration: 235 } ] },
    { name: "Drift（漂流）", type: "专辑", date: "2050-03-17", songs: [
      { name: "Drift（漂流）", duration: 148 }, { name: "Wires Rust（电线的锈迹）", duration: 283 }, { name: "Velvet（天鹅绒）", duration: 264 },
      { name: "Marrow Vapor（骨髓的雾霭）", duration: 253 }, { name: "Harbor Faded（港湾的褪色）", duration: 251 }, { name: "Velvet Canvas（天鹅绒的画布）", duration: 236 },
      { name: "Iron Orbit（铁的轨道）", duration: 258 }, { name: "Concrete Static（水泥的静电）", duration: 238 }, { name: "Static Hollow（静电的空洞）", duration: 282 },
      { name: "Nightfall Marrow（夜幕的骨髓）", duration: 256 } ] },
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
      { name: "乡音", type: "专辑", date: "2026-10-21", songs: [
      { name: "乡音", duration: 246 }, { name: "竹影", duration: 282 }, { name: "田埂黄昏", duration: 260 },
      { name: "石桥", duration: 272 }, { name: "车站", duration: 262 }, { name: "深夜的屋檐", duration: 213 },
      { name: "山风土路", duration: 283 }, { name: "山风", duration: 253 } ] },
    { name: "北风", type: "专辑", date: "2028-12-21", songs: [
      { name: "北风", duration: 222 }, { name: "木桥", duration: 262 }, { name: "土路行囊", duration: 260 },
      { name: "青梅", duration: 280 }, { name: "稻田", duration: 215 }, { name: "田埂", duration: 158 },
      { name: "深夜的蝉鸣", duration: 167 }, { name: "老树", duration: 256 }, { name: "深夜的北风", duration: 275 },
      { name: "炊烟", duration: 245 }, { name: "立秋炊烟", duration: 398 } ] },
    { name: "炊烟行囊", type: "专辑", date: "2031-02-10", songs: [
      { name: "炊烟行囊", duration: 269 }, { name: "故乡", duration: 211 }, { name: "木桥车站", duration: 306 },
      { name: "旧信", duration: 241 }, { name: "霜降行囊", duration: 186 }, { name: "蝉鸣", duration: 308 },
      { name: "山岗石桥", duration: 399 }, { name: "故乡溪边", duration: 264 } ] },
    { name: "雨巷山岗", type: "专辑", date: "2033-06-28", songs: [
      { name: "雨巷山岗", duration: 245 }, { name: "溪水蝉鸣", duration: 278 }, { name: "渡口晚钟", duration: 290 },
      { name: "土路秋千", duration: 220 }, { name: "篱笆溪边", duration: 162 }, { name: "雨巷行囊", duration: 225 },
      { name: "屋檐", duration: 259 }, { name: "石阶车站", duration: 264 } ] },
    { name: "老树行囊", type: "专辑", date: "2035-08-14", songs: [
      { name: "老树行囊", duration: 248 }, { name: "深夜的露水", duration: 264 }, { name: "长椅", duration: 239 },
      { name: "深夜的旧信", duration: 248 }, { name: "柳枝屋檐", duration: 248 }, { name: "渔火", duration: 248 },
      { name: "石阶", duration: 260 }, { name: "露水", duration: 253 }, { name: "石桥旧信", duration: 253 } ] },
    { name: "深夜的老树", type: "专辑", date: "2037-07-13", songs: [
      { name: "深夜的老树", duration: 287 }, { name: "行囊", duration: 259 }, { name: "渡口", duration: 289 },
      { name: "深夜的行囊", duration: 249 }, { name: "芦苇", duration: 489 }, { name: "深夜的月台", duration: 249 },
      { name: "土路", duration: 257 }, { name: "霜降长椅", duration: 436 }, { name: "土路北风", duration: 282 } ] },
    { name: "黄昏", type: "专辑", date: "2039-05-17", songs: [
      { name: "黄昏", duration: 194 }, { name: "木舟", duration: 275 }, { name: "深夜的旧书", duration: 262 },
      { name: "春分", duration: 193 }, { name: "邮局", duration: 247 }, { name: "青梅车站", duration: 216 },
      { name: "深夜的篱笆", duration: 288 }, { name: "深夜的木舟", duration: 253 }, { name: "故人黄昏", duration: 288 } ] },
    { name: "霜降石桥", type: "专辑", date: "2041-06-18", songs: [
      { name: "霜降石桥", duration: 263 }, { name: "霜降", duration: 279 }, { name: "晚钟", duration: 281 },
      { name: "麦浪", duration: 251 }, { name: "麦田春分", duration: 287 }, { name: "深夜的秋千", duration: 214 },
      { name: "深夜的麦浪", duration: 488 }, { name: "土路霜降", duration: 313 }, { name: "河岸远方", duration: 260 } ] },
    { name: "巷口", type: "专辑", date: "2043-12-06", songs: [
      { name: "巷口", duration: 264 }, { name: "露水秋千", duration: 259 }, { name: "深夜的山岗", duration: 270 },
      { name: "槐花", duration: 322 }, { name: "土路春分", duration: 270 }, { name: "旧书篱笆", duration: 284 },
      { name: "溪边", duration: 272 }, { name: "深夜的远方", duration: 311 }, { name: "渡口行囊", duration: 268 },
      { name: "白露", duration: 255 } ] },
    { name: "旧书", type: "专辑", date: "2045-11-21", songs: [
      { name: "旧书", duration: 244 }, { name: "石阶麦田", duration: 398 }, { name: "晚钟蝉鸣", duration: 449 },
      { name: "麦田", duration: 264 }, { name: "深夜的渡口", duration: 245 }, { name: "谷雨", duration: 256 },
      { name: "晚钟渡船", duration: 259 }, { name: "雨巷", duration: 287 }, { name: "月台", duration: 324 },
      { name: "深夜的巷口", duration: 244 }, { name: "深夜的晨雾", duration: 196 } ] },
    { name: "车站麦田", type: "专辑", date: "2048-01-27", songs: [
      { name: "车站麦田", duration: 173 }, { name: "霜降山岗", duration: 240 }, { name: "溪水", duration: 286 },
      { name: "远方", duration: 275 }, { name: "土路溪水", duration: 265 }, { name: "溪水石榴", duration: 150 },
      { name: "行囊旧书", duration: 285 }, { name: "霜降故乡", duration: 225 }, { name: "秋千", duration: 271 } ] },
    { name: "田埂月台", type: "专辑", date: "2049-10-25", songs: [
      { name: "田埂月台", duration: 244 }, { name: "故人", duration: 248 }, { name: "深夜的谷雨", duration: 415 },
      { name: "深夜的瓦房", duration: 282 }, { name: "渡船河流", duration: 277 }, { name: "晨雾", duration: 274 },
      { name: "麦田木桥", duration: 268 }, { name: "河岸灯火", duration: 151 }, { name: "山岗乡音", duration: 249 } ] },
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
      { name: "土路木窗", type: "专辑", date: "2027-01-05", songs: [
      { name: "土路木窗", duration: 318 }, { name: "麦浪木桥", duration: 295 }, { name: "麦浪邮局", duration: 283 },
      { name: "木舟", duration: 303 }, { name: "深夜的石桥", duration: 364 }, { name: "瓦房", duration: 265 },
      { name: "深夜的老树", duration: 275 }, { name: "木桥", duration: 253 } ] },
    { name: "石榴", type: "专辑", date: "2029-08-27", songs: [
      { name: "石榴", duration: 154 }, { name: "黄昏", duration: 271 }, { name: "深夜的旧信", duration: 303 },
      { name: "石阶", duration: 253 }, { name: "木窗", duration: 185 }, { name: "晚霞", duration: 233 },
      { name: "槐花", duration: 275 }, { name: "芦苇", duration: 316 } ] },
    { name: "屋檐", type: "专辑", date: "2031-11-23", songs: [
      { name: "屋檐", duration: 272 }, { name: "柳枝石榴", duration: 258 }, { name: "雨巷", duration: 475 },
      { name: "青梅", duration: 254 }, { name: "麦浪旧信", duration: 230 }, { name: "瓦房车站", duration: 262 },
      { name: "深夜的长椅", duration: 256 }, { name: "月台", duration: 294 } ] },
    { name: "深夜的月台", type: "专辑", date: "2034-01-11", songs: [
      { name: "深夜的月台", duration: 299 }, { name: "篱笆", duration: 524 }, { name: "芦苇立秋", duration: 285 },
      { name: "乡音竹影", duration: 258 }, { name: "山岗", duration: 251 }, { name: "深夜的竹影", duration: 303 },
      { name: "灯火石榴", duration: 276 }, { name: "长椅邮局", duration: 222 }, { name: "青梅土路", duration: 251 } ] },
    { name: "乡音", type: "专辑", date: "2036-01-31", songs: [
      { name: "乡音", duration: 261 }, { name: "晨雾", duration: 272 }, { name: "晚钟", duration: 271 },
      { name: "霜降石桥", duration: 254 }, { name: "长椅", duration: 268 }, { name: "立秋石阶", duration: 250 },
      { name: "渡口", duration: 266 }, { name: "车站", duration: 252 }, { name: "溪边溪边", duration: 301 },
      { name: "白露", duration: 298 }, { name: "土路", duration: 280 } ] },
    { name: "溪边", type: "专辑", date: "2038-06-25", songs: [
      { name: "溪边", duration: 253 }, { name: "谷雨", duration: 249 }, { name: "老树芦苇", duration: 299 },
      { name: "白露蝉鸣", duration: 292 }, { name: "竹影", duration: 301 }, { name: "麦田灯火", duration: 235 },
      { name: "深夜的河岸", duration: 179 } ] },
    { name: "渔火", type: "专辑", date: "2040-07-06", songs: [
      { name: "渔火", duration: 336 }, { name: "巷口故人", duration: 283 }, { name: "旧信", duration: 277 },
      { name: "深夜的故乡", duration: 281 }, { name: "故乡", duration: 241 }, { name: "老树", duration: 256 },
      { name: "渡船渡船", duration: 510 }, { name: "北风", duration: 252 }, { name: "麦田", duration: 270 } ] },
    { name: "菜园", type: "专辑", date: "2043-01-04", songs: [
      { name: "菜园", duration: 228 }, { name: "蝉鸣", duration: 269 }, { name: "稻田", duration: 298 },
      { name: "巷口", duration: 294 }, { name: "渡船", duration: 224 }, { name: "车站河流", duration: 252 },
      { name: "行囊", duration: 298 } ] },
    { name: "柳枝瓦房", type: "专辑", date: "2045-07-02", songs: [
      { name: "柳枝瓦房", duration: 423 }, { name: "立秋", duration: 293 }, { name: "深夜的渔火", duration: 298 },
      { name: "竹影芦苇", duration: 270 }, { name: "土路乡音", duration: 299 }, { name: "稻田槐花", duration: 261 },
      { name: "旧信田埂", duration: 158 }, { name: "黄昏山风", duration: 158 }, { name: "秋千", duration: 257 } ] },
    { name: "深夜的云边", type: "专辑", date: "2047-10-24", songs: [
      { name: "深夜的云边", duration: 219 }, { name: "青梅瓦房", duration: 500 }, { name: "深夜的篱笆", duration: 310 },
      { name: "云边石桥", duration: 249 }, { name: "石桥", duration: 260 }, { name: "深夜的立秋", duration: 319 },
      { name: "云边", duration: 295 }, { name: "河流", duration: 269 }, { name: "田埂", duration: 252 },
      { name: "霜降", duration: 297 }, { name: "深夜的邮局", duration: 279 } ] },
    { name: "深夜的乡音", type: "专辑", date: "2049-09-06", songs: [
      { name: "深夜的乡音", duration: 278 }, { name: "深夜的青苔", duration: 328 }, { name: "深夜的山风", duration: 253 },
      { name: "露水", duration: 297 }, { name: "谷雨河流", duration: 266 }, { name: "柳枝", duration: 229 },
      { name: "山风", duration: 279 }, { name: "山风石阶", duration: 302 }, { name: "柳枝菜园", duration: 301 },
      { name: "深夜的麦浪", duration: 303 }, { name: "青苔", duration: 262 } ] },
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
      { name: "远方", type: "专辑", date: "2027-04-29", songs: [
      { name: "远方", duration: 286 }, { name: "深夜的车站", duration: 380 }, { name: "炊烟", duration: 243 },
      { name: "木窗", duration: 300 }, { name: "露水石桥", duration: 413 }, { name: "菜园", duration: 302 },
      { name: "故乡", duration: 284 }, { name: "霜降河岸", duration: 262 }, { name: "石榴", duration: 310 } ] },
    { name: "深夜的石榴", type: "专辑", date: "2029-04-20", songs: [
      { name: "深夜的石榴", duration: 252 }, { name: "麦田", duration: 250 }, { name: "晨雾", duration: 261 },
      { name: "渡船", duration: 297 }, { name: "旧信槐花", duration: 421 }, { name: "土路春分", duration: 310 },
      { name: "竹影", duration: 271 } ] },
    { name: "蝉鸣", type: "专辑", date: "2031-10-16", songs: [
      { name: "蝉鸣", duration: 254 }, { name: "故人", duration: 334 }, { name: "北风", duration: 283 },
      { name: "春分", duration: 531 }, { name: "稻田竹影", duration: 273 }, { name: "菜园屋檐", duration: 297 },
      { name: "秋千石阶", duration: 268 }, { name: "深夜的故乡", duration: 275 }, { name: "深夜的石桥", duration: 325 } ] },
    { name: "深夜的渔火", type: "专辑", date: "2033-09-23", songs: [
      { name: "深夜的渔火", duration: 227 }, { name: "深夜的春分", duration: 262 }, { name: "麦田邮局", duration: 270 },
      { name: "深夜的月台", duration: 181 }, { name: "旧书", duration: 342 }, { name: "青苔", duration: 425 },
      { name: "河岸", duration: 325 }, { name: "深夜的瓦房", duration: 265 }, { name: "篱笆霜降", duration: 265 },
      { name: "土路", duration: 251 }, { name: "渡口", duration: 277 } ] },
    { name: "长椅", type: "EP", date: "2036-01-11", songs: [
      { name: "长椅", duration: 278 }, { name: "云边", duration: 238 }, { name: "篱笆", duration: 219 },
      { name: "深夜的黄昏", duration: 309 }, { name: "云边土路", duration: 294 }, { name: "深夜的石阶", duration: 228 } ] },
    { name: "稻田", type: "专辑", date: "2038-08-19", songs: [
      { name: "稻田", duration: 231 }, { name: "深夜的河岸", duration: 338 }, { name: "露水", duration: 287 },
      { name: "木桥稻田", duration: 248 }, { name: "月台", duration: 169 }, { name: "麦田炊烟", duration: 200 },
      { name: "渡口石桥", duration: 276 }, { name: "土路北风", duration: 278 }, { name: "山岗", duration: 262 },
      { name: "芦苇", duration: 265 }, { name: "河流", duration: 265 } ] },
    { name: "雨巷稻田", type: "EP", date: "2040-07-28", songs: [
      { name: "雨巷稻田", duration: 308 }, { name: "深夜的篱笆", duration: 313 }, { name: "瓦房", duration: 322 } ] },
    { name: "深夜的麦浪", type: "专辑", date: "2043-02-02", songs: [
      { name: "深夜的麦浪", duration: 321 }, { name: "巷口篱笆", duration: 292 }, { name: "晚霞", duration: 308 },
      { name: "深夜的旧书", duration: 294 }, { name: "霜降", duration: 306 }, { name: "田埂", duration: 244 },
      { name: "深夜的秋千", duration: 290 } ] },
    { name: "灯火", type: "EP", date: "2045-05-29", songs: [
      { name: "灯火", duration: 288 }, { name: "石桥", duration: 294 }, { name: "木桥", duration: 525 },
      { name: "溪水", duration: 247 }, { name: "霜降白露", duration: 239 }, { name: "深夜的田埂", duration: 282 } ] },
    { name: "长椅蝉鸣", type: "专辑", date: "2047-08-01", songs: [
      { name: "长椅蝉鸣", duration: 238 }, { name: "炊烟麦浪", duration: 291 }, { name: "木舟", duration: 504 },
      { name: "长椅麦田", duration: 290 }, { name: "深夜的长椅", duration: 309 }, { name: "旧信", duration: 286 },
      { name: "车站", duration: 261 }, { name: "巷口", duration: 280 }, { name: "谷雨", duration: 202 } ] },
    { name: "深夜的渡口", type: "EP", date: "2049-09-13", songs: [
      { name: "深夜的渡口", duration: 231 }, { name: "深夜的行囊", duration: 182 }, { name: "河岸木窗", duration: 275 },
      { name: "深夜的山岗", duration: 340 }, { name: "深夜的木舟", duration: 236 } ] },
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
      { name: "石桥青梅", type: "EP", date: "2027-11-24", songs: [
      { name: "石桥青梅", duration: 256 }, { name: "深夜的霜降", duration: 261 }, { name: "深夜的稻田", duration: 283 },
      { name: "麦浪", duration: 291 } ] },
    { name: "晚霞", type: "专辑", date: "2030-06-18", songs: [
      { name: "晚霞", duration: 273 }, { name: "长椅", duration: 158 }, { name: "青苔", duration: 255 },
      { name: "渡口", duration: 275 }, { name: "石桥", duration: 190 }, { name: "露水稻田", duration: 257 },
      { name: "北风", duration: 175 }, { name: "石阶山岗", duration: 289 } ] },
    { name: "深夜的邮局", type: "专辑", date: "2033-08-09", songs: [
      { name: "深夜的邮局", duration: 289 }, { name: "长椅山岗", duration: 289 }, { name: "菜园", duration: 294 },
      { name: "雨巷", duration: 295 }, { name: "邮局山风", duration: 288 }, { name: "旧信", duration: 272 },
      { name: "瓦房溪水", duration: 294 }, { name: "芦苇", duration: 284 }, { name: "行囊北风", duration: 284 },
      { name: "谷雨", duration: 516 }, { name: "黄昏", duration: 318 } ] },
    { name: "山风", type: "专辑", date: "2036-12-23", songs: [
      { name: "山风", duration: 279 }, { name: "渔火", duration: 301 }, { name: "深夜的柳枝", duration: 301 },
      { name: "山风月台", duration: 293 }, { name: "深夜的雨巷", duration: 207 }, { name: "溪边", duration: 305 },
      { name: "晚钟", duration: 246 } ] },
    { name: "深夜的青苔", type: "EP", date: "2039-12-30", songs: [
      { name: "深夜的青苔", duration: 479 }, { name: "溪水", duration: 251 }, { name: "深夜的黄昏", duration: 274 },
      { name: "远方青梅", duration: 270 }, { name: "灯火", duration: 249 }, { name: "河岸晨雾", duration: 265 } ] },
    { name: "深夜的屋檐", type: "EP", date: "2043-03-08", songs: [
      { name: "深夜的屋檐", duration: 320 }, { name: "云边", duration: 286 }, { name: "石阶立秋", duration: 425 } ] },
    { name: "篱笆", type: "专辑", date: "2046-08-02", songs: [
      { name: "篱笆", duration: 250 }, { name: "深夜的车站", duration: 297 }, { name: "春分", duration: 290 },
      { name: "竹影", duration: 277 }, { name: "稻田", duration: 295 }, { name: "行囊云边", duration: 262 },
      { name: "山岗", duration: 212 }, { name: "秋千", duration: 217 }, { name: "霜降", duration: 264 },
      { name: "青梅", duration: 297 }, { name: "深夜的灯火", duration: 250 } ] },
    { name: "麦浪土路", type: "专辑", date: "2049-03-02", songs: [
      { name: "麦浪土路", duration: 294 }, { name: "立秋", duration: 271 }, { name: "巷口邮局", duration: 285 },
      { name: "柳枝", duration: 299 }, { name: "槐花", duration: 251 }, { name: "旧书", duration: 253 },
      { name: "河流", duration: 325 }, { name: "渡船", duration: 255 } ] },
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
      { name: "甜梦", type: "专辑", date: "2027-03-10", songs: [
      { name: "甜梦", duration: 161 }, { name: "银河", duration: 294 }, { name: "晴空", duration: 179 },
      { name: "糖分", duration: 239 }, { name: "糖果", duration: 266 }, { name: "冰淇淋晴天", duration: 211 },
      { name: "初恋", duration: 246 }, { name: "深夜的西瓜", duration: 234 }, { name: "摩天轮", duration: 270 },
      { name: "软糖", duration: 254 } ] },
    { name: "深夜的睫毛", type: "专辑", date: "2029-04-05", songs: [
      { name: "深夜的睫毛", duration: 226 }, { name: "深夜的操场", duration: 187 }, { name: "晚风", duration: 238 },
      { name: "相片", duration: 277 }, { name: "琥珀", duration: 256 }, { name: "深夜的日落", duration: 241 },
      { name: "蝴蝶结", duration: 279 } ] },
    { name: "教室", type: "专辑", date: "2031-03-11", songs: [
      { name: "教室", duration: 276 }, { name: "深夜的拥抱", duration: 230 }, { name: "星期天", duration: 267 },
      { name: "操场", duration: 271 }, { name: "花火", duration: 161 }, { name: "深夜的青春", duration: 241 },
      { name: "贝壳", duration: 266 }, { name: "蓝调音乐盒", duration: 374 }, { name: "篮球蜜糖", duration: 297 } ] },
    { name: "流星", type: "专辑", date: "2033-06-15", songs: [
      { name: "流星", duration: 145 }, { name: "晴天", duration: 239 }, { name: "蝉鸣", duration: 235 },
      { name: "银河沙滩", duration: 256 }, { name: "单车星光", duration: 302 }, { name: "冰淇淋", duration: 289 },
      { name: "气泡", duration: 234 } ] },
    { name: "深夜的晴天", type: "专辑", date: "2035-04-01", songs: [
      { name: "深夜的晴天", duration: 264 }, { name: "日落", duration: 252 }, { name: "平行线", duration: 256 },
      { name: "蜜糖汽水", duration: 267 }, { name: "许愿", duration: 178 }, { name: "漫游", duration: 270 },
      { name: "音乐盒", duration: 418 }, { name: "蓝调", duration: 272 }, { name: "深夜的初恋", duration: 252 },
      { name: "余光冰淇淋", duration: 267 }, { name: "微风", duration: 273 } ] },
    { name: "少年", type: "专辑", date: "2037-05-16", songs: [
      { name: "少年", duration: 238 }, { name: "课桌", duration: 274 }, { name: "深夜的彩虹", duration: 240 },
      { name: "深夜的教室", duration: 272 }, { name: "星群青春", duration: 251 }, { name: "星光", duration: 270 },
      { name: "深夜的余光", duration: 202 }, { name: "倒计时", duration: 180 }, { name: "深夜的许愿", duration: 153 },
      { name: "心跳", duration: 245 } ] },
    { name: "星期天气球", type: "专辑", date: "2039-05-10", songs: [
      { name: "星期天气球", duration: 270 }, { name: "晚风海岸", duration: 275 }, { name: "拥抱", duration: 194 },
      { name: "汽水", duration: 288 }, { name: "少年星群", duration: 250 }, { name: "海岸许愿", duration: 273 },
      { name: "秋千平行线", duration: 279 } ] },
    { name: "柠檬", type: "专辑", date: "2041-05-18", songs: [
      { name: "柠檬", duration: 271 }, { name: "蜜糖", duration: 453 }, { name: "篮球余光", duration: 227 },
      { name: "拥抱海岸", duration: 215 }, { name: "深夜的课桌", duration: 234 }, { name: "琥珀摩天轮", duration: 238 },
      { name: "深夜的漫游", duration: 272 }, { name: "深夜的信笺", duration: 274 }, { name: "晚风西瓜", duration: 257 },
      { name: "沙滩", duration: 266 }, { name: "纸飞机", duration: 274 } ] },
    { name: "深夜的盛夏", type: "专辑", date: "2043-09-06", songs: [
      { name: "深夜的盛夏", duration: 255 }, { name: "微风课桌", duration: 238 }, { name: "深夜的倒计时", duration: 268 },
      { name: "深夜的心跳", duration: 270 }, { name: "月亮", duration: 276 }, { name: "西瓜", duration: 265 },
      { name: "单车", duration: 434 }, { name: "气泡星期天", duration: 245 }, { name: "少年西瓜", duration: 306 },
      { name: "冰淇淋星期天", duration: 269 }, { name: "彩虹", duration: 146 } ] },
    { name: "深夜的篮球", type: "专辑", date: "2045-11-12", songs: [
      { name: "深夜的篮球", duration: 245 }, { name: "风筝彩虹", duration: 161 }, { name: "深夜的柠檬", duration: 248 },
      { name: "深夜的摩天轮", duration: 234 }, { name: "贝壳日落", duration: 263 }, { name: "海岸", duration: 191 },
      { name: "深夜的星光", duration: 231 }, { name: "睫毛音乐盒", duration: 432 }, { name: "柠檬流星", duration: 242 } ] },
    { name: "睫毛", type: "专辑", date: "2047-09-04", songs: [
      { name: "睫毛", duration: 276 }, { name: "信笺", duration: 163 }, { name: "青春", duration: 273 },
      { name: "深夜的冰淇淋", duration: 200 }, { name: "余光", duration: 277 }, { name: "气球", duration: 141 },
      { name: "深夜的气泡", duration: 235 }, { name: "琥珀操场", duration: 271 }, { name: "暖阳", duration: 264 },
      { name: "蝉鸣糖分", duration: 185 }, { name: "秋千琥珀", duration: 266 } ] },
    { name: "琥珀甜梦", type: "专辑", date: "2049-11-04", songs: [
      { name: "琥珀甜梦", duration: 269 }, { name: "深夜的平行线", duration: 215 }, { name: "星群", duration: 285 },
      { name: "柠檬海岸", duration: 182 }, { name: "流星樱花", duration: 271 }, { name: "冰淇淋暖阳", duration: 275 },
      { name: "倒计时睫毛", duration: 254 }, { name: "篮球", duration: 260 }, { name: "盛夏", duration: 297 },
      { name: "漫游蝉鸣", duration: 273 } ] },
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
      { name: "Signal Echo（信号的回声）", type: "专辑", date: "2027-06-15", songs: [
      { name: "Signal Echo（信号的回声）", duration: 226 }, { name: "Wires（电线）", duration: 129 }, { name: "Signal Marrow（信号的骨髓）", duration: 202 },
      { name: "Ashes（灰烬）", duration: 337 }, { name: "Orbit（轨道）", duration: 255 }, { name: "Vapor（雾霭）", duration: 171 },
      { name: "Drift（漂流）", duration: 228 }, { name: "Undertow（暗流）", duration: 230 } ] },
    { name: "Midnight（午夜）", type: "专辑", date: "2030-01-10", songs: [
      { name: "Midnight（午夜）", duration: 233 }, { name: "Satellite Concrete（卫星的水泥）", duration: 198 }, { name: "Vapor Paperplane（雾霭的纸飞机）", duration: 226 },
      { name: "Harbor（港湾）", duration: 236 }, { name: "Echo（回声）", duration: 231 }, { name: "Smoke Faded（烟雾的褪色）", duration: 211 },
      { name: "Neon（霓虹）", duration: 126 }, { name: "Concrete（水泥）", duration: 213 }, { name: "Smoke Paperplane（烟雾的纸飞机）", duration: 408 } ] },
    { name: "Trail（足迹）", type: "EP", date: "2032-10-25", songs: [
      { name: "Trail（足迹）", duration: 198 }, { name: "Broken（破碎）", duration: 232 }, { name: "Tide Silver（潮汐的银色）", duration: 227 } ] },
    { name: "Satellite（卫星）", type: "专辑", date: "2035-10-29", songs: [
      { name: "Satellite（卫星）", duration: 219 }, { name: "Overcast（阴云）", duration: 224 }, { name: "Ember Golden（余烬的金色）", duration: 222 },
      { name: "Satellite Midnight（卫星的午夜）", duration: 220 }, { name: "Mirrors（镜子）", duration: 231 }, { name: "Carousel（旋转木马）", duration: 215 },
      { name: "Smoke（烟雾）", duration: 224 }, { name: "Drift Static（漂流的静电）", duration: 220 }, { name: "Nightfall Anchor（夜幕的锚）", duration: 220 },
      { name: "Static（静电）", duration: 340 } ] },
    { name: "Silver Carousel（银色的旋转木马）", type: "专辑", date: "2038-05-20", songs: [
      { name: "Silver Carousel（银色的旋转木马）", duration: 209 }, { name: "Meridian（子午线）", duration: 215 }, { name: "Whisper（低语）", duration: 221 },
      { name: "Golden（金色）", duration: 244 }, { name: "Static Canvas（静电的画布）", duration: 228 }, { name: "Drift Undertow（漂流的暗流）", duration: 211 },
      { name: "Quiet（寂静）", duration: 254 } ] },
    { name: "Nightfall（夜幕）", type: "专辑", date: "2041-04-12", songs: [
      { name: "Nightfall（夜幕）", duration: 234 }, { name: "Lantern（灯笼）", duration: 196 }, { name: "Silver（银色）", duration: 236 },
      { name: "Bloom Whisper（绽放的低语）", duration: 200 }, { name: "Rain Ember（雨的余烬）", duration: 231 }, { name: "Glimmer Marrow（微光的骨髓）", duration: 197 },
      { name: "Gravel（砾石）", duration: 199 }, { name: "Motel（汽车旅馆）", duration: 210 }, { name: "Motel Silence（汽车旅馆的沉寂）", duration: 395 },
      { name: "Silence（沉寂）", duration: 229 } ] },
    { name: "Faded（褪色）", type: "专辑", date: "2043-11-24", songs: [
      { name: "Faded（褪色）", duration: 225 }, { name: "Highway（公路）", duration: 230 }, { name: "Sundown（日落）", duration: 248 },
      { name: "Bloom（绽放）", duration: 202 }, { name: "Hollow（空洞）", duration: 224 }, { name: "Silence Paperplane（沉寂的纸飞机）", duration: 232 },
      { name: "Shallow（浅滩）", duration: 342 }, { name: "Marrow（骨髓）", duration: 225 }, { name: "Signal（信号）", duration: 216 } ] },
    { name: "Neon Quiet（霓虹的寂静）", type: "专辑", date: "2046-10-18", songs: [
      { name: "Neon Quiet（霓虹的寂静）", duration: 293 }, { name: "Tide（潮汐）", duration: 229 }, { name: "Marrow Nightfall（骨髓的夜幕）", duration: 234 },
      { name: "Canvas（画布）", duration: 236 }, { name: "Iron Ashes（铁的灰烬）", duration: 163 }, { name: "Ember（余烬）", duration: 216 },
      { name: "Glimmer Sundown（微光的日落）", duration: 197 }, { name: "Marrow Iron（骨髓的铁）", duration: 214 } ] },
    { name: "Rain Golden（雨的金色）", type: "专辑", date: "2049-12-08", songs: [
      { name: "Rain Golden（雨的金色）", duration: 297 }, { name: "Anchor（锚）", duration: 176 }, { name: "Motel Anchor（汽车旅馆的锚）", duration: 262 },
      { name: "Iron（铁）", duration: 220 }, { name: "Lantern Ember（灯笼的余烬）", duration: 212 }, { name: "Broken Signal（破碎的信号）", duration: 341 },
      { name: "Faded Highway（褪色的公路）", duration: 205 } ] },
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
      { name: "废墟", type: "专辑", date: "2027-12-31", songs: [
      { name: "废墟", duration: 304 }, { name: "闪电", duration: 280 }, { name: "天台夜航", duration: 309 },
      { name: "候鸟", duration: 297 }, { name: "甲板信号", duration: 290 }, { name: "深夜的沙丘", duration: 313 },
      { name: "深夜的余烬", duration: 299 }, { name: "楼顶", duration: 309 }, { name: "站牌", duration: 302 },
      { name: "末班车", duration: 289 } ] },
    { name: "疾风", type: "专辑", date: "2032-09-16", songs: [
      { name: "疾风", duration: 355 }, { name: "楼顶暗涌", duration: 270 }, { name: "深夜的疾风", duration: 276 },
      { name: "雨夜", duration: 322 }, { name: "迷途疾风", duration: 309 }, { name: "站牌野火", duration: 321 },
      { name: "灯塔", duration: 185 } ] },
    { name: "夜班", type: "专辑", date: "2036-01-23", songs: [
      { name: "夜班", duration: 245 }, { name: "晴天", duration: 280 }, { name: "暗涌", duration: 338 },
      { name: "野火甲板", duration: 432 }, { name: "深夜的闪电", duration: 489 }, { name: "残响", duration: 310 },
      { name: "停电", duration: 320 }, { name: "天台", duration: 252 }, { name: "信号霓虹", duration: 318 },
      { name: "灰烬斑马线", duration: 270 } ] },
    { name: "潮声回声", type: "专辑", date: "2041-01-11", songs: [
      { name: "潮声回声", duration: 275 }, { name: "深夜的风铃", duration: 313 }, { name: "街灯", duration: 288 },
      { name: "出口潮汐", duration: 302 }, { name: "高墙路口", duration: 179 }, { name: "车窗", duration: 365 },
      { name: "潮汐", duration: 314 }, { name: "铁轨", duration: 272 }, { name: "隧道", duration: 299 },
      { name: "裂痕", duration: 250 } ] },
    { name: "暗号荒岛", type: "专辑", date: "2045-02-21", songs: [
      { name: "暗号荒岛", duration: 319 }, { name: "斑马线", duration: 312 }, { name: "沙丘", duration: 279 },
      { name: "长夜", duration: 274 }, { name: "疾风余烬", duration: 306 }, { name: "暗号风铃", duration: 328 },
      { name: "回声远方", duration: 289 }, { name: "迷途街灯", duration: 318 } ] },
    { name: "回声", type: "专辑", date: "2049-02-24", songs: [
      { name: "回声", duration: 329 }, { name: "高墙", duration: 312 }, { name: "出口", duration: 345 },
      { name: "迷途", duration: 205 }, { name: "风铃", duration: 300 }, { name: "晚风", duration: 259 },
      { name: "逆流", duration: 276 }, { name: "深夜的潮汐", duration: 237 }, { name: "站台", duration: 431 },
      { name: "深夜的霓虹", duration: 298 }, { name: "深夜的斑马线", duration: 232 } ] },
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
      { name: "海辺（海边）", type: "单曲", date: "2026-11-15", songs: [
      { name: "海辺（海边）", duration: 237 } ] },
    { name: "月の涙（月之泪）", type: "单曲", date: "2029-04-06", songs: [
      { name: "月の涙（月之泪）", duration: 211 } ] },
    { name: "微笑の遠い（遥远的微笑）", type: "单曲", date: "2031-05-06", songs: [
      { name: "微笑の遠い（遥远的微笑）", duration: 270 } ] },
    { name: "青空の声（青空之声）", type: "单曲", date: "2033-01-13", songs: [
      { name: "青空の声（青空之声）", duration: 218 } ] },
    { name: "冬晴れ（冬日晴空）", type: "单曲", date: "2035-03-06", songs: [
      { name: "冬晴れ（冬日晴空）", duration: 236 } ] },
    { name: "風鈴（风铃）", type: "单曲", date: "2037-04-12", songs: [
      { name: "風鈴（风铃）", duration: 245 } ] },
    { name: "透明（透明）", type: "单曲", date: "2039-04-25", songs: [
      { name: "透明（透明）", duration: 241 } ] },
    { name: "風鈴の青空（风铃之青空）", type: "专辑", date: "2041-10-20", songs: [
      { name: "風鈴の青空（风铃之青空）", duration: 179 }, { name: "夜明けの夕焼け（黎明之晚霞）", duration: 231 }, { name: "月光の波（月光之波）", duration: 307 },
      { name: "春風の風鈴（春风之风铃）", duration: 151 }, { name: "微笑の夜（微笑之夜）", duration: 226 }, { name: "優しいの雨（温柔雨）", duration: 197 },
      { name: "朝焼けの想い（朝霞之思念）", duration: 244 }, { name: "夕焼け（晚霞）", duration: 244 }, { name: "帰り道の夕焼け（归途之晚霞）", duration: 227 },
      { name: "時の透明（透明的时光）", duration: 205 } ] },
    { name: "恋の街（恋之街）", type: "单曲", date: "2043-06-30", songs: [
      { name: "恋の街（恋之街）", duration: 183 } ] },
    { name: "屋上（天台）", type: "单曲", date: "2045-09-25", songs: [
      { name: "屋上（天台）", duration: 224 } ] },
    { name: "潮騒の時（潮鸣之时光）", type: "单曲", date: "2047-12-31", songs: [
      { name: "潮騒の時（潮鸣之时光）", duration: 213 } ] },
    { name: "雲の放課後（云之放学后）", type: "单曲", date: "2050-02-20", songs: [
      { name: "雲の放課後（云之放学后）", duration: 221 } ] },
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
      { name: "優しい（温柔）", type: "单曲", date: "2027-02-09", songs: [
      { name: "優しい（温柔）", duration: 216 } ] },
    { name: "青空（青空）", type: "单曲", date: "2029-03-27", songs: [
      { name: "青空（青空）", duration: 194 } ] },
    { name: "桜の星屑（樱花之星屑）", type: "专辑", date: "2030-12-18", songs: [
      { name: "桜の星屑（樱花之星屑）", duration: 150 }, { name: "月光（月光）", duration: 259 }, { name: "雪の夜明け（雪之黎明）", duration: 232 },
      { name: "白いの月（纯白的月）", duration: 197 }, { name: "潮騒（潮鸣）", duration: 255 }, { name: "自転車（单车）", duration: 213 },
      { name: "虹の記憶（彩虹之记忆）", duration: 259 }, { name: "恋の帰り道（恋之归途）", duration: 256 }, { name: "放課後（放学后）", duration: 231 } ] },
    { name: "波音の波（潮声之波）", type: "单曲", date: "2033-02-07", songs: [
      { name: "波音の波（潮声之波）", duration: 135 } ] },
    { name: "海辺（海边）", type: "单曲", date: "2035-06-13", songs: [
      { name: "海辺（海边）", duration: 189 } ] },
    { name: "風鈴の影（风铃之影）", type: "单曲", date: "2037-04-27", songs: [
      { name: "風鈴の影（风铃之影）", duration: 191 } ] },
    { name: "花の青い（湛蓝的花）", type: "单曲", date: "2039-07-14", songs: [
      { name: "花の青い（湛蓝的花）", duration: 369 } ] },
    { name: "風の桜（风之樱花）", type: "单曲", date: "2041-05-29", songs: [
      { name: "風の桜（风之樱花）", duration: 245 } ] },
    { name: "月光の屋上（月光之天台）", type: "单曲", date: "2043-11-14", songs: [
      { name: "月光の屋上（月光之天台）", duration: 202 } ] },
    { name: "帰り道の雨音（归途之雨声）", type: "单曲", date: "2045-12-15", songs: [
      { name: "帰り道の雨音（归途之雨声）", duration: 244 } ] },
    { name: "夕焼けの心（晚霞之心）", type: "专辑", date: "2047-11-30", songs: [
      { name: "夕焼けの心（晚霞之心）", duration: 226 }, { name: "静か（静谧）", duration: 221 }, { name: "小さなの朝（微小的晨）", duration: 221 },
      { name: "花の街（花之街）", duration: 230 }, { name: "陽だまり（暖阳）", duration: 146 }, { name: "窓の夕焼け（窗之晚霞）", duration: 194 },
      { name: "夜明けの雨（黎明之雨）", duration: 250 }, { name: "白い（纯白的）", duration: 142 }, { name: "秋風の冬晴れ（秋风之冬日晴空）", duration: 226 },
      { name: "雨音の雪（雨声之雪）", duration: 219 } ] },
    { name: "朝焼けの空（朝霞之天空）", type: "单曲", date: "2050-02-02", songs: [
      { name: "朝焼けの空（朝霞之天空）", duration: 422 } ] },
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
      { name: "雲の時（云之时光）", type: "单曲", date: "2027-02-23", songs: [
      { name: "雲の時（云之时光）", duration: 218 } ] },
    { name: "微笑の声（微笑之声）", type: "单曲", date: "2029-04-23", songs: [
      { name: "微笑の声（微笑之声）", duration: 186 } ] },
    { name: "想い（思念）", type: "单曲", date: "2031-06-01", songs: [
      { name: "想い（思念）", duration: 227 } ] },
    { name: "青空の夕焼け（青空之晚霞）", type: "单曲", date: "2033-05-12", songs: [
      { name: "青空の夕焼け（青空之晚霞）", duration: 208 } ] },
    { name: "自転車の心（单车之心）", type: "单曲", date: "2035-06-06", songs: [
      { name: "自転車の心（单车之心）", duration: 223 } ] },
    { name: "風鈴（风铃）", type: "单曲", date: "2037-04-26", songs: [
      { name: "風鈴（风铃）", duration: 252 } ] },
    { name: "夕焼けの透明（透明的晚霞）", type: "专辑", date: "2039-08-18", songs: [
      { name: "夕焼けの透明（透明的晚霞）", duration: 210 }, { name: "眩しい（耀眼）", duration: 209 }, { name: "放課後の海（放学后之海）", duration: 254 },
      { name: "夏祭りの星（夏日祭之星）", duration: 230 }, { name: "白い（纯白的）", duration: 195 }, { name: "冬晴れ（冬日晴空）", duration: 238 },
      { name: "帰り道（归途）", duration: 226 }, { name: "静か（静谧）", duration: 197 }, { name: "向日葵の心（向日葵之心）", duration: 243 },
      { name: "月光の記憶（月光之记忆）", duration: 223 } ] },
    { name: "星屑（星屑）", type: "单曲", date: "2041-08-13", songs: [
      { name: "星屑（星屑）", duration: 219 } ] },
    { name: "真夏（盛夏）", type: "单曲", date: "2043-11-06", songs: [
      { name: "真夏（盛夏）", duration: 212 } ] },
    { name: "朝焼け（朝霞）", type: "单曲", date: "2045-11-20", songs: [
      { name: "朝焼け（朝霞）", duration: 233 } ] },
    { name: "帰り道の波（归途之波）", type: "单曲", date: "2048-01-10", songs: [
      { name: "帰り道の波（归途之波）", duration: 250 } ] },
    { name: "窓の波（窗之波）", type: "单曲", date: "2049-10-06", songs: [
      { name: "窓の波（窗之波）", duration: 247 } ] },
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
      { name: "雨の星（雨之星）", type: "单曲", date: "2027-03-22", songs: [
      { name: "雨の星（雨之星）", duration: 335 } ] },
    { name: "朝焼けの月（朝霞之月）", type: "单曲", date: "2029-05-18", songs: [
      { name: "朝焼けの月（朝霞之月）", duration: 256 } ] },
    { name: "透明の声（透明声）", type: "单曲", date: "2031-02-26", songs: [
      { name: "透明の声（透明声）", duration: 258 } ] },
    { name: "帰り道（归途）", type: "单曲", date: "2033-04-17", songs: [
      { name: "帰り道（归途）", duration: 203 } ] },
    { name: "海辺（海边）", type: "单曲", date: "2035-04-04", songs: [
      { name: "海辺（海边）", duration: 341 } ] },
    { name: "雨音の桜（雨声之樱花）", type: "专辑", date: "2037-04-24", songs: [
      { name: "雨音の桜（雨声之樱花）", duration: 253 }, { name: "波音の秋風（潮声之秋风）", duration: 220 }, { name: "放課後（放学后）", duration: 240 },
      { name: "光の星屑（光之星屑）", duration: 218 }, { name: "朝焼け（朝霞）", duration: 194 }, { name: "声の微笑（声之微笑）", duration: 216 },
      { name: "真夏の花（盛夏之花）", duration: 248 } ] },
    { name: "月光（月光）", type: "单曲", date: "2039-08-01", songs: [
      { name: "月光（月光）", duration: 244 } ] },
    { name: "夏祭り（夏日祭）", type: "单曲", date: "2041-08-18", songs: [
      { name: "夏祭り（夏日祭）", duration: 215 } ] },
    { name: "遠いの夕焼け（遥远晚霞）", type: "单曲", date: "2043-08-26", songs: [
      { name: "遠いの夕焼け（遥远晚霞）", duration: 246 } ] },
    { name: "涙の静か（静谧的泪）", type: "专辑", date: "2045-12-28", songs: [
      { name: "涙の静か（静谧的泪）", duration: 244 }, { name: "窓の風鈴（窗之风铃）", duration: 237 }, { name: "星の透明（透明的星）", duration: 322 },
      { name: "風の放課後（风之放学后）", duration: 201 }, { name: "波の光（波之光）", duration: 250 }, { name: "夜の夜明け（夜之黎明）", duration: 213 },
      { name: "風鈴の夢（风铃之梦）", duration: 433 }, { name: "自転車（单车）", duration: 215 }, { name: "冬晴れの恋（冬日晴空之恋）", duration: 248 } ] },
    { name: "遠いの自転車（遥远单车）", type: "单曲", date: "2047-08-29", songs: [
      { name: "遠いの自転車（遥远单车）", duration: 260 } ] },
    { name: "記憶（记忆）", type: "专辑", date: "2050-02-19", songs: [
      { name: "記憶（记忆）", duration: 224 }, { name: "海の屋上（海之天台）", duration: 254 }, { name: "静か（静谧）", duration: 261 },
      { name: "海の向日葵（海之向日葵）", duration: 246 }, { name: "波の微笑（波之微笑）", duration: 253 }, { name: "白い（纯白的）", duration: 218 },
      { name: "自転車の星空（单车之星空）", duration: 253 }, { name: "陽だまり（暖阳）", duration: 233 }, { name: "波音の恋（潮声之恋）", duration: 234 } ] },
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
      { name: "朝焼け（朝霞）", type: "专辑", date: "2027-06-07", songs: [
      { name: "朝焼け（朝霞）", duration: 226 }, { name: "冬晴れ（冬日晴空）", duration: 234 }, { name: "夏祭り（夏日祭）", duration: 228 },
      { name: "陽だまり（暖阳）", duration: 208 }, { name: "風鈴の潮騒（风铃之潮鸣）", duration: 207 }, { name: "春風（春风）", duration: 413 },
      { name: "青い（湛蓝）", duration: 183 }, { name: "記憶（记忆）", duration: 250 } ] },
    { name: "時の春風（时光之春风）", type: "单曲", date: "2029-04-08", songs: [
      { name: "時の春風（时光之春风）", duration: 200 } ] },
    { name: "雨の陽だまり（雨之暖阳）", type: "单曲", date: "2031-09-27", songs: [
      { name: "雨の陽だまり（雨之暖阳）", duration: 208 } ] },
    { name: "屋上（天台）", type: "单曲", date: "2033-08-19", songs: [
      { name: "屋上（天台）", duration: 175 } ] },
    { name: "自転車（单车）", type: "单曲", date: "2035-06-12", songs: [
      { name: "自転車（单车）", duration: 222 } ] },
    { name: "声の海（声之海）", type: "专辑", date: "2037-08-27", songs: [
      { name: "声の海（声之海）", duration: 226 }, { name: "街の星屑（街之星屑）", duration: 231 }, { name: "星空（星空）", duration: 235 },
      { name: "約束（约定）", duration: 229 }, { name: "想い（思念）", duration: 232 }, { name: "約束の青い（湛蓝的约定）", duration: 215 },
      { name: "月光（月光）", duration: 200 }, { name: "桜の白い（纯白的的樱花）", duration: 220 } ] },
    { name: "陽だまりの陽だまり（暖阳之暖阳）", type: "专辑", date: "2039-07-09", songs: [
      { name: "陽だまりの陽だまり（暖阳之暖阳）", duration: 214 }, { name: "小さなの心（微小的心）", duration: 216 }, { name: "桜の冬晴れ（樱花之冬日晴空）", duration: 212 },
      { name: "静かの海（静谧海）", duration: 247 }, { name: "春風の屋上（春风之天台）", duration: 151 }, { name: "朝の雨（晨之雨）", duration: 290 },
      { name: "静かの春風（静谧春风）", duration: 203 }, { name: "風の風（风之风）", duration: 202 }, { name: "窓の影（窗之影）", duration: 225 },
      { name: "月の心（月之心）", duration: 228 } ] },
    { name: "時の涙（时光之泪）", type: "单曲", date: "2041-11-18", songs: [
      { name: "時の涙（时光之泪）", duration: 203 } ] },
    { name: "時の星（时光之星）", type: "单曲", date: "2043-09-09", songs: [
      { name: "時の星（时光之星）", duration: 121 } ] },
    { name: "白いの記憶（纯白的记忆）", type: "单曲", date: "2045-11-24", songs: [
      { name: "白いの記憶（纯白的记忆）", duration: 240 } ] },
    { name: "星屑の夜明け（星屑之黎明）", type: "EP", date: "2047-10-12", songs: [
      { name: "星屑の夜明け（星屑之黎明）", duration: 122 }, { name: "小さな（微小的）", duration: 228 }, { name: "雨音（雨声）", duration: 175 },
      { name: "波音（潮声）", duration: 220 }, { name: "時の雪（时光之雪）", duration: 212 } ] },
    { name: "優しい（温柔）", type: "单曲", date: "2049-12-01", songs: [
      { name: "優しい（温柔）", duration: 228 } ] },
    ],
  "Black Stones": [
    { name: "BLAST", type: "专辑", date: "2006-06-21", songs: [
       { name: "Rose", duration: 240 }, { name: "黒い涙（黑色的泪）", duration: 265 },
       { name: "Zero", duration: 210 }, { name: "Lucy", duration: 225 }, { name: "Shadow of the Sun", duration: 250 } ] },
    { name: "Rose", type: "单曲", date: "2006-01-01", songs: [ { name: "Rose", duration: 240 } ] },
    { name: "黒い涙（黑色的泪）", type: "单曲", date: "2006-03-22", songs: [ { name: "黒い涙（黑色的泪）", duration: 265 } ] },
      { name: "Iron（铁）", type: "单曲", date: "2027-01-18", songs: [
      { name: "Iron（铁）", duration: 223 } ] },
    { name: "Daylight Paperplane（日光的纸飞机）", type: "单曲", date: "2028-12-27", songs: [
      { name: "Daylight Paperplane（日光的纸飞机）", duration: 254 } ] },
    { name: "Anchor Orbit（锚的轨道）", type: "专辑", date: "2031-02-14", songs: [
      { name: "Anchor Orbit（锚的轨道）", duration: 247 }, { name: "Smoke（烟雾）", duration: 242 }, { name: "Harbor（港湾）", duration: 264 },
      { name: "Marrow Hollow（骨髓的空洞）", duration: 263 }, { name: "Wires（电线）", duration: 258 }, { name: "Paperplane（纸飞机）", duration: 202 },
      { name: "Silence Harbor（沉寂的港湾）", duration: 262 }, { name: "Tide Motel（潮汐的汽车旅馆）", duration: 277 }, { name: "Broken（破碎）", duration: 231 },
      { name: "Shallow（浅滩）", duration: 200 } ] },
    { name: "Daybreak（黎明）", type: "专辑", date: "2033-07-07", songs: [
      { name: "Daybreak（黎明）", duration: 259 }, { name: "Neon（霓虹）", duration: 226 }, { name: "Vapor（雾霭）", duration: 221 },
      { name: "Undertow（暗流）", duration: 215 }, { name: "Whisper（低语）", duration: 241 }, { name: "Vapor Marrow（雾霭的骨髓）", duration: 245 },
      { name: "Ashes（灰烬）", duration: 165 }, { name: "Overcast Hollow（阴云的空洞）", duration: 262 }, { name: "Overcast（阴云）", duration: 248 },
      { name: "Silence（沉寂）", duration: 235 } ] },
    { name: "Drift（漂流）", type: "单曲", date: "2035-04-26", songs: [
      { name: "Drift（漂流）", duration: 226 } ] },
    { name: "Faded（褪色）", type: "单曲", date: "2037-07-09", songs: [
      { name: "Faded（褪色）", duration: 200 } ] },
    { name: "Ember（余烬）", type: "专辑", date: "2039-07-23", songs: [
      { name: "Ember（余烬）", duration: 327 }, { name: "Signal（信号）", duration: 258 }, { name: "Lantern（灯笼）", duration: 219 },
      { name: "Static（静电）", duration: 219 }, { name: "Rust（锈迹）", duration: 209 }, { name: "Iron Whisper（铁的低语）", duration: 251 },
      { name: "Rain（雨）", duration: 200 }, { name: "Sundown（日落）", duration: 221 }, { name: "Carousel（旋转木马）", duration: 263 },
      { name: "Trail（足迹）", duration: 247 } ] },
    { name: "Rain Canvas（雨的画布）", type: "单曲", date: "2041-07-12", songs: [
      { name: "Rain Canvas（雨的画布）", duration: 220 } ] },
    { name: "Neon Quiet（霓虹的寂静）", type: "单曲", date: "2043-10-11", songs: [
      { name: "Neon Quiet（霓虹的寂静）", duration: 382 } ] },
    { name: "Mirrors（镜子）", type: "专辑", date: "2045-12-28", songs: [
      { name: "Mirrors（镜子）", duration: 263 }, { name: "Broken Faded（破碎的褪色）", duration: 246 }, { name: "Highway（公路）", duration: 246 },
      { name: "Tide Concrete（潮汐的水泥）", duration: 205 }, { name: "Rain Anchor（雨的锚）", duration: 225 }, { name: "Golden（金色）", duration: 333 },
      { name: "Golden Wires（金色的电线）", duration: 147 } ] },
    { name: "Quiet（寂静）", type: "专辑", date: "2047-10-22", songs: [
      { name: "Quiet（寂静）", duration: 401 }, { name: "Glimmer Spark（微光的火花）", duration: 232 }, { name: "Glimmer（微光）", duration: 260 },
      { name: "Paperplane Nightfall（纸飞机的夜幕）", duration: 242 }, { name: "Mirrors Whisper（镜子的低语）", duration: 226 }, { name: "Neon Velvet（霓虹的天鹅绒）", duration: 201 },
      { name: "Trail Silence（足迹的沉寂）", duration: 253 } ] },
    { name: "Vapor Harbor（雾霭的港湾）", type: "专辑", date: "2049-12-18", songs: [
      { name: "Vapor Harbor（雾霭的港湾）", duration: 241 }, { name: "Silver（银色）", duration: 245 }, { name: "Harbor Golden（港湾的金色）", duration: 237 },
      { name: "Satellite Signal（卫星的信号）", duration: 222 }, { name: "Gravel Broken（砾石的破碎）", duration: 135 }, { name: "Whisper Smoke（低语的烟雾）", duration: 220 },
      { name: "Marrow Mirrors（骨髓的镜子）", duration: 165 }, { name: "Orbit Harbor（轨道的港湾）", duration: 357 }, { name: "Bloom Undertow（绽放的暗流）", duration: 241 },
      { name: "Golden Meridian（金色的子午线）", duration: 198 } ] },
    ],
  "Trapnest": [
    { name: "Trapnest", type: "专辑", date: "2005-11-16", songs: [
       { name: "Glamorous Sky", duration: 258 }, { name: "Trust", duration: 235 },
       { name: "Wish", duration: 240 }, { name: "Starless Night", duration: 250 }, { name: "Let's Dance", duration: 220 } ] },
    { name: "Glamorous Sky", type: "单曲", date: "2005-09-07", songs: [ { name: "Glamorous Sky", duration: 258 } ] },
      { name: "Smoke（烟雾）", type: "专辑", date: "2027-02-20", songs: [
      { name: "Smoke（烟雾）", duration: 247 }, { name: "Glimmer（微光）", duration: 210 }, { name: "Nightfall（夜幕）", duration: 250 },
      { name: "Gravel Static（砾石的静电）", duration: 245 }, { name: "Static（静电）", duration: 238 }, { name: "Vapor（雾霭）", duration: 141 },
      { name: "Drift（漂流）", duration: 245 }, { name: "Iron（铁）", duration: 168 }, { name: "Orbit（轨道）", duration: 229 } ] },
    { name: "Faded（褪色）", type: "单曲", date: "2028-12-23", songs: [
      { name: "Faded（褪色）", duration: 192 } ] },
    { name: "Concrete（水泥）", type: "专辑", date: "2031-05-31", songs: [
      { name: "Concrete（水泥）", duration: 239 }, { name: "Neon（霓虹）", duration: 246 }, { name: "Silver（银色）", duration: 266 },
      { name: "Golden（金色）", duration: 254 }, { name: "Wires（电线）", duration: 224 }, { name: "Meridian（子午线）", duration: 191 },
      { name: "Ashes（灰烬）", duration: 195 }, { name: "Spark Concrete（火花的水泥）", duration: 214 }, { name: "Echo Motel（回声的汽车旅馆）", duration: 266 },
      { name: "Daybreak Overcast（黎明的阴云）", duration: 276 }, { name: "Paperplane Rust（纸飞机的锈迹）", duration: 457 } ] },
    { name: "Broken（破碎）", type: "专辑", date: "2033-04-21", songs: [
      { name: "Broken（破碎）", duration: 213 }, { name: "Shallow（浅滩）", duration: 252 }, { name: "Rust Midnight（锈迹的午夜）", duration: 236 },
      { name: "Ember Motel（余烬的汽车旅馆）", duration: 264 }, { name: "Rain（雨）", duration: 237 }, { name: "Satellite（卫星）", duration: 246 },
      { name: "Echo（回声）", duration: 234 }, { name: "Motel（汽车旅馆）", duration: 236 }, { name: "Trail（足迹）", duration: 240 } ] },
    { name: "Mirrors（镜子）", type: "专辑", date: "2035-03-09", songs: [
      { name: "Mirrors（镜子）", duration: 251 }, { name: "Marrow（骨髓）", duration: 395 }, { name: "Sundown（日落）", duration: 222 },
      { name: "Iron Midnight（铁的午夜）", duration: 251 }, { name: "Hollow（空洞）", duration: 288 }, { name: "Carousel Daylight（旋转木马的日光）", duration: 258 },
      { name: "Anchor（锚）", duration: 222 } ] },
    { name: "Canvas Harbor（画布的港湾）", type: "专辑", date: "2037-05-25", songs: [
      { name: "Canvas Harbor（画布的港湾）", duration: 255 }, { name: "Whisper（低语）", duration: 223 }, { name: "Ember（余烬）", duration: 280 },
      { name: "Mirrors Carousel（镜子的旋转木马）", duration: 255 }, { name: "Faded Drift（褪色的漂流）", duration: 291 }, { name: "Signal（信号）", duration: 239 },
      { name: "Paperplane Gravel（纸飞机的砾石）", duration: 260 }, { name: "Rust（锈迹）", duration: 226 }, { name: "Carousel（旋转木马）", duration: 281 } ] },
    { name: "Concrete Signal（水泥的信号）", type: "专辑", date: "2039-05-19", songs: [
      { name: "Concrete Signal（水泥的信号）", duration: 224 }, { name: "Canvas Orbit（画布的轨道）", duration: 237 }, { name: "Harbor Faded（港湾的褪色）", duration: 178 },
      { name: "Iron Daybreak（铁的黎明）", duration: 227 }, { name: "Anchor Daylight（锚的日光）", duration: 232 }, { name: "Highway（公路）", duration: 262 },
      { name: "Lantern（灯笼）", duration: 248 } ] },
    { name: "Daybreak Smoke（黎明的烟雾）", type: "专辑", date: "2041-09-29", songs: [
      { name: "Daybreak Smoke（黎明的烟雾）", duration: 283 }, { name: "Mirrors Satellite（镜子的卫星）", duration: 249 }, { name: "Echo Satellite（回声的卫星）", duration: 219 },
      { name: "Quiet（寂静）", duration: 197 }, { name: "Motel Neon（汽车旅馆的霓虹）", duration: 265 }, { name: "Neon Mirrors（霓虹的镜子）", duration: 240 },
      { name: "Velvet Harbor（天鹅绒的港湾）", duration: 247 }, { name: "Undertow（暗流）", duration: 248 }, { name: "Vapor Sundown（雾霭的日落）", duration: 231 },
      { name: "Harbor（港湾）", duration: 251 }, { name: "Spark Paperplane（火花的纸飞机）", duration: 245 } ] },
    { name: "Paperplane Ashes（纸飞机的灰烬）", type: "单曲", date: "2043-08-11", songs: [
      { name: "Paperplane Ashes（纸飞机的灰烬）", duration: 233 } ] },
    { name: "Nightfall Shallow（夜幕的浅滩）", type: "专辑", date: "2045-11-28", songs: [
      { name: "Nightfall Shallow（夜幕的浅滩）", duration: 215 }, { name: "Midnight（午夜）", duration: 241 }, { name: "Quiet Concrete（寂静的水泥）", duration: 231 },
      { name: "Velvet Static（天鹅绒的静电）", duration: 203 }, { name: "Paperplane（纸飞机）", duration: 169 }, { name: "Overcast（阴云）", duration: 161 },
      { name: "Ashes Silver（灰烬的银色）", duration: 281 }, { name: "Paperplane Concrete（纸飞机的水泥）", duration: 264 }, { name: "Nightfall Ashes（夜幕的灰烬）", duration: 232 } ] },
    { name: "Silence Velvet（沉寂的天鹅绒）", type: "专辑", date: "2047-08-26", songs: [
      { name: "Silence Velvet（沉寂的天鹅绒）", duration: 229 }, { name: "Paperplane Harbor（纸飞机的港湾）", duration: 232 }, { name: "Carousel Ember（旋转木马的余烬）", duration: 249 },
      { name: "Daybreak Ember（黎明的余烬）", duration: 216 }, { name: "Static Tide（静电的潮汐）", duration: 279 }, { name: "Satellite Concrete（卫星的水泥）", duration: 225 },
      { name: "Canvas（画布）", duration: 254 }, { name: "Mirrors Broken（镜子的破碎）", duration: 274 } ] },
    { name: "Static Whisper（静电的低语）", type: "专辑", date: "2049-12-15", songs: [
      { name: "Static Whisper（静电的低语）", duration: 257 }, { name: "Tide Mirrors（潮汐的镜子）", duration: 154 }, { name: "Silence（沉寂）", duration: 260 },
      { name: "Marrow Midnight（骨髓的午夜）", duration: 203 }, { name: "Daybreak Satellite（黎明的卫星）", duration: 405 }, { name: "Concrete Gravel（水泥的砾石）", duration: 264 },
      { name: "Tide（潮汐）", duration: 254 }, { name: "Tide Daylight（潮汐的日光）", duration: 264 }, { name: "Rain Sundown（雨的日落）", duration: 232 },
      { name: "Whisper Golden（低语的金色）", duration: 288 } ] },
    ],
  "Plasmagica": [
    { name: "Plasmagica", type: "专辑", date: "2015-08-26", songs: [
       { name: "Seabreeze", duration: 230 }, { name: "Music Start!（音乐开始！）", duration: 220 },
       { name: "愛を教えて（教会我爱）", duration: 215 } ] },
    { name: "Seabreeze", type: "单曲", date: "2015-04-22", songs: [ { name: "Seabreeze", duration: 230 } ] },
      { name: "Nightfall Silence（夜幕的沉寂）", type: "专辑", date: "2027-04-03", songs: [
      { name: "Nightfall Silence（夜幕的沉寂）", duration: 244 }, { name: "Tide（潮汐）", duration: 203 }, { name: "Carousel（旋转木马）", duration: 225 },
      { name: "Glimmer（微光）", duration: 228 }, { name: "Motel Echo（汽车旅馆的回声）", duration: 224 }, { name: "Quiet Midnight（寂静的午夜）", duration: 142 },
      { name: "Motel（汽车旅馆）", duration: 206 }, { name: "Sundown（日落）", duration: 219 }, { name: "Harbor（港湾）", duration: 208 },
      { name: "Overcast Silver（阴云的银色）", duration: 221 } ] },
    { name: "Neon（霓虹）", type: "单曲", date: "2028-11-24", songs: [
      { name: "Neon（霓虹）", duration: 267 } ] },
    { name: "Golden（金色）", type: "专辑", date: "2031-01-04", songs: [
      { name: "Golden（金色）", duration: 367 }, { name: "Paperplane（纸飞机）", duration: 152 }, { name: "Anchor（锚）", duration: 190 },
      { name: "Vapor（雾霭）", duration: 248 }, { name: "Velvet（天鹅绒）", duration: 234 }, { name: "Whisper（低语）", duration: 214 },
      { name: "Mirrors Nightfall（镜子的夜幕）", duration: 261 }, { name: "Static（静电）", duration: 215 }, { name: "Silence Neon（沉寂的霓虹）", duration: 256 },
      { name: "Motel Quiet（汽车旅馆的寂静）", duration: 240 } ] },
    { name: "Meridian（子午线）", type: "单曲", date: "2033-04-12", songs: [
      { name: "Meridian（子午线）", duration: 219 } ] },
    { name: "Signal（信号）", type: "专辑", date: "2035-08-14", songs: [
      { name: "Signal（信号）", duration: 348 }, { name: "Lantern Daybreak（灯笼的黎明）", duration: 233 }, { name: "Nightfall（夜幕）", duration: 222 },
      { name: "Whisper Orbit（低语的轨道）", duration: 233 }, { name: "Mirrors（镜子）", duration: 212 }, { name: "Concrete（水泥）", duration: 361 },
      { name: "Bloom（绽放）", duration: 209 }, { name: "Faded（褪色）", duration: 147 } ] },
    { name: "Canvas Ashes（画布的灰烬）", type: "专辑", date: "2037-04-16", songs: [
      { name: "Canvas Ashes（画布的灰烬）", duration: 234 }, { name: "Lantern（灯笼）", duration: 231 }, { name: "Highway Overcast（公路的阴云）", duration: 225 },
      { name: "Iron Motel（铁的汽车旅馆）", duration: 376 }, { name: "Trail Lantern（足迹的灯笼）", duration: 181 }, { name: "Quiet（寂静）", duration: 203 },
      { name: "Whisper Concrete（低语的水泥）", duration: 162 }, { name: "Smoke Rain（烟雾的雨）", duration: 398 }, { name: "Shallow（浅滩）", duration: 234 } ] },
    { name: "Motel Neon（汽车旅馆的霓虹）", type: "专辑", date: "2039-06-22", songs: [
      { name: "Motel Neon（汽车旅馆的霓虹）", duration: 155 }, { name: "Daylight（日光）", duration: 210 }, { name: "Highway（公路）", duration: 258 },
      { name: "Overcast（阴云）", duration: 234 }, { name: "Daybreak（黎明）", duration: 240 }, { name: "Signal Silence（信号的沉寂）", duration: 219 },
      { name: "Drift Carousel（漂流的旋转木马）", duration: 216 }, { name: "Midnight（午夜）", duration: 192 }, { name: "Gravel Ember（砾石的余烬）", duration: 242 } ] },
    { name: "Canvas Lantern（画布的灯笼）", type: "单曲", date: "2041-07-26", songs: [
      { name: "Canvas Lantern（画布的灯笼）", duration: 207 } ] },
    { name: "Silver（银色）", type: "单曲", date: "2043-11-16", songs: [
      { name: "Silver（银色）", duration: 326 } ] },
    { name: "Harbor Ashes（港湾的灰烬）", type: "专辑", date: "2045-11-01", songs: [
      { name: "Harbor Ashes（港湾的灰烬）", duration: 201 }, { name: "Concrete Signal（水泥的信号）", duration: 208 }, { name: "Smoke Ember（烟雾的余烬）", duration: 224 },
      { name: "Ashes（灰烬）", duration: 214 }, { name: "Hollow Spark（空洞的火花）", duration: 162 }, { name: "Undertow（暗流）", duration: 231 },
      { name: "Daylight Daybreak（日光的黎明）", duration: 205 }, { name: "Broken（破碎）", duration: 229 }, { name: "Rust（锈迹）", duration: 223 },
      { name: "Meridian Drift（子午线的漂流）", duration: 240 }, { name: "Rain Canvas（雨的画布）", duration: 181 } ] },
    { name: "Trail（足迹）", type: "专辑", date: "2047-12-10", songs: [
      { name: "Trail（足迹）", duration: 264 }, { name: "Wires Undertow（电线的暗流）", duration: 408 }, { name: "Signal Neon（信号的霓虹）", duration: 179 },
      { name: "Iron Sundown（铁的日落）", duration: 242 }, { name: "Overcast Marrow（阴云的骨髓）", duration: 224 }, { name: "Iron（铁）", duration: 239 },
      { name: "Silence Glimmer（沉寂的微光）", duration: 234 }, { name: "Hollow Drift（空洞的漂流）", duration: 216 } ] },
    { name: "Velvet Anchor（天鹅绒的锚）", type: "专辑", date: "2050-02-05", songs: [
      { name: "Velvet Anchor（天鹅绒的锚）", duration: 204 }, { name: "Glimmer Anchor（微光的锚）", duration: 206 }, { name: "Ember（余烬）", duration: 257 },
      { name: "Smoke（烟雾）", duration: 238 }, { name: "Gravel（砾石）", duration: 254 }, { name: "Hollow（空洞）", duration: 220 },
      { name: "Orbit（轨道）", duration: 243 }, { name: "Wires（电线）", duration: 213 }, { name: "Rain Highway（雨的公路）", duration: 123 },
      { name: "Iron Neon（铁的霓虹）", duration: 244 }, { name: "Meridian Motel（子午线的汽车旅馆）", duration: 219 } ] },
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
      { name: "風鈴の青い（湛蓝的风铃）", type: "单曲", date: "2026-12-05", songs: [
      { name: "風鈴の青い（湛蓝的风铃）", duration: 231 } ] },
    { name: "雨音（雨声）", type: "单曲", date: "2029-04-21", songs: [
      { name: "雨音（雨声）", duration: 218 } ] },
    { name: "雲の微笑（云之微笑）", type: "单曲", date: "2031-03-26", songs: [
      { name: "雲の微笑（云之微笑）", duration: 234 } ] },
    { name: "潮騒の小さな（微小的的潮鸣）", type: "单曲", date: "2033-06-12", songs: [
      { name: "潮騒の小さな（微小的的潮鸣）", duration: 243 } ] },
    { name: "小さなの月光（微小的月光）", type: "单曲", date: "2035-06-21", songs: [
      { name: "小さなの月光（微小的月光）", duration: 234 } ] },
    { name: "星屑の波音（星屑之潮声）", type: "单曲", date: "2037-04-09", songs: [
      { name: "星屑の波音（星屑之潮声）", duration: 256 } ] },
    { name: "放課後（放学后）", type: "单曲", date: "2039-09-17", songs: [
      { name: "放課後（放学后）", duration: 225 } ] },
    { name: "小さなの花（微小的花）", type: "专辑", date: "2041-05-17", songs: [
      { name: "小さなの花（微小的花）", duration: 144 }, { name: "小さな（微小的）", duration: 442 }, { name: "窓の虹（窗之彩虹）", duration: 214 },
      { name: "恋の声（恋之声）", duration: 270 }, { name: "時の涙（时光之泪）", duration: 265 }, { name: "波の陽だまり（波之暖阳）", duration: 198 },
      { name: "春風（春风）", duration: 227 }, { name: "心の潮騒（心之潮鸣）", duration: 250 }, { name: "陽だまり（暖阳）", duration: 172 } ] },
    { name: "星空の自転車（星空之单车）", type: "专辑", date: "2043-08-18", songs: [
      { name: "星空の自転車（星空之单车）", duration: 215 }, { name: "青いの光（湛蓝光）", duration: 214 }, { name: "透明（透明）", duration: 223 },
      { name: "約束（约定）", duration: 210 }, { name: "屋上（天台）", duration: 185 }, { name: "星空（星空）", duration: 228 },
      { name: "自転車（单车）", duration: 215 }, { name: "声の小さな（微小的的声）", duration: 233 }, { name: "星屑（星屑）", duration: 278 },
      { name: "遠いの潮騒（遥远潮鸣）", duration: 315 } ] },
    { name: "影の星（影之星）", type: "单曲", date: "2045-08-22", songs: [
      { name: "影の星（影之星）", duration: 254 } ] },
    { name: "海の自転車（海之单车）", type: "专辑", date: "2047-08-26", songs: [
      { name: "海の自転車（海之单车）", duration: 227 }, { name: "虹の風（彩虹之风）", duration: 232 }, { name: "優しい（温柔）", duration: 241 },
      { name: "窓の陽だまり（窗之暖阳）", duration: 134 }, { name: "雨音の白い（纯白的的雨声）", duration: 225 }, { name: "春風の恋（春风之恋）", duration: 202 },
      { name: "潮騒の遠い（遥远的潮鸣）", duration: 254 } ] },
    { name: "優しいの夢（温柔梦）", type: "专辑", date: "2049-11-09", songs: [
      { name: "優しいの夢（温柔梦）", duration: 224 }, { name: "陽だまりの静か（静谧的暖阳）", duration: 135 }, { name: "朝焼け（朝霞）", duration: 175 },
      { name: "帰り道（归途）", duration: 175 }, { name: "夕焼け（晚霞）", duration: 218 }, { name: "風の影（风之影）", duration: 231 },
      { name: "夜明け（黎明）", duration: 217 }, { name: "白いの優しい（纯白的温柔）", duration: 255 } ] },
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
      { name: "Rust（锈迹）", type: "单曲", date: "2027-01-10", songs: [
      { name: "Rust（锈迹）", duration: 188 } ] },
    { name: "Vapor（雾霭）", type: "单曲", date: "2029-02-20", songs: [
      { name: "Vapor（雾霭）", duration: 248 } ] },
    { name: "Bloom Tide（绽放的潮汐）", type: "单曲", date: "2031-06-01", songs: [
      { name: "Bloom Tide（绽放的潮汐）", duration: 232 } ] },
    { name: "Sundown（日落）", type: "专辑", date: "2033-02-26", songs: [
      { name: "Sundown（日落）", duration: 263 }, { name: "Echo（回声）", duration: 258 }, { name: "Bloom（绽放）", duration: 224 },
      { name: "Ashes Ember（灰烬的余烬）", duration: 273 }, { name: "Hollow（空洞）", duration: 226 }, { name: "Motel Spark（汽车旅馆的火花）", duration: 262 },
      { name: "Overcast（阴云）", duration: 190 }, { name: "Nightfall（夜幕）", duration: 211 } ] },
    { name: "Highway（公路）", type: "专辑", date: "2035-03-17", songs: [
      { name: "Highway（公路）", duration: 198 }, { name: "Bloom Concrete（绽放的水泥）", duration: 246 }, { name: "Ember Trail（余烬的足迹）", duration: 173 },
      { name: "Undertow（暗流）", duration: 239 }, { name: "Lantern（灯笼）", duration: 245 }, { name: "Mirrors（镜子）", duration: 338 },
      { name: "Paperplane（纸飞机）", duration: 241 }, { name: "Lantern Static（灯笼的静电）", duration: 177 }, { name: "Static Undertow（静电的暗流）", duration: 248 } ] },
    { name: "Glimmer（微光）", type: "单曲", date: "2037-09-10", songs: [
      { name: "Glimmer（微光）", duration: 253 } ] },
    { name: "Velvet（天鹅绒）", type: "单曲", date: "2039-07-14", songs: [
      { name: "Velvet（天鹅绒）", duration: 235 } ] },
    { name: "Daybreak（黎明）", type: "专辑", date: "2041-05-31", songs: [
      { name: "Daybreak（黎明）", duration: 217 }, { name: "Neon Carousel（霓虹的旋转木马）", duration: 261 }, { name: "Neon Concrete（霓虹的水泥）", duration: 166 },
      { name: "Silence（沉寂）", duration: 250 }, { name: "Rain（雨）", duration: 271 }, { name: "Quiet（寂静）", duration: 286 },
      { name: "Satellite（卫星）", duration: 198 }, { name: "Signal（信号）", duration: 227 }, { name: "Shallow（浅滩）", duration: 231 } ] },
    { name: "Concrete（水泥）", type: "单曲", date: "2043-11-30", songs: [
      { name: "Concrete（水泥）", duration: 201 } ] },
    { name: "Signal Undertow（信号的暗流）", type: "单曲", date: "2045-09-22", songs: [
      { name: "Signal Undertow（信号的暗流）", duration: 259 } ] },
    { name: "Spark（火花）", type: "单曲", date: "2047-12-07", songs: [
      { name: "Spark（火花）", duration: 262 } ] },
    { name: "Faded Motel（褪色的汽车旅馆）", type: "单曲", date: "2050-02-14", songs: [
      { name: "Faded Motel（褪色的汽车旅馆）", duration: 233 } ] },
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
      { name: "Sundown Concrete（日落的水泥）", type: "单曲", date: "2027-01-27", songs: [
      { name: "Sundown Concrete（日落的水泥）", duration: 239 } ] },
    { name: "Glimmer（微光）", type: "单曲", date: "2028-11-22", songs: [
      { name: "Glimmer（微光）", duration: 202 } ] },
    { name: "Spark Silence（火花的沉寂）", type: "单曲", date: "2031-03-16", songs: [
      { name: "Spark Silence（火花的沉寂）", duration: 224 } ] },
    { name: "Anchor（锚）", type: "单曲", date: "2033-01-24", songs: [
      { name: "Anchor（锚）", duration: 232 } ] },
    { name: "Concrete（水泥）", type: "单曲", date: "2035-03-02", songs: [
      { name: "Concrete（水泥）", duration: 236 } ] },
    { name: "Trail（足迹）", type: "单曲", date: "2037-06-08", songs: [
      { name: "Trail（足迹）", duration: 238 } ] },
    { name: "Neon（霓虹）", type: "单曲", date: "2039-09-15", songs: [
      { name: "Neon（霓虹）", duration: 181 } ] },
    { name: "Velvet（天鹅绒）", type: "单曲", date: "2041-06-13", songs: [
      { name: "Velvet（天鹅绒）", duration: 226 } ] },
    { name: "Vapor Quiet（雾霭的寂静）", type: "单曲", date: "2043-07-29", songs: [
      { name: "Vapor Quiet（雾霭的寂静）", duration: 239 } ] },
    { name: "Faded（褪色）", type: "单曲", date: "2045-07-30", songs: [
      { name: "Faded（褪色）", duration: 241 } ] },
    { name: "Hollow Faded（空洞的褪色）", type: "单曲", date: "2047-12-22", songs: [
      { name: "Hollow Faded（空洞的褪色）", duration: 224 } ] },
    { name: "Spark（火花）", type: "专辑", date: "2050-03-16", songs: [
      { name: "Spark（火花）", duration: 240 }, { name: "Signal Quiet（信号的寂静）", duration: 338 }, { name: "Tide（潮汐）", duration: 220 },
      { name: "Daybreak Glimmer（黎明的微光）", duration: 241 }, { name: "Sundown（日落）", duration: 225 }, { name: "Whisper（低语）", duration: 211 },
      { name: "Quiet（寂静）", duration: 216 }, { name: "Mirrors（镜子）", duration: 240 }, { name: "Paperplane（纸飞机）", duration: 226 } ] },
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
      { name: "影の白い（纯白的的影）", type: "单曲", date: "2026-10-20", songs: [
      { name: "影の白い（纯白的的影）", duration: 214 } ] },
    { name: "夏祭りの波音（夏日祭之潮声）", type: "专辑", date: "2029-01-06", songs: [
      { name: "夏祭りの波音（夏日祭之潮声）", duration: 197 }, { name: "屋上（天台）", duration: 174 }, { name: "小さな（微小的）", duration: 209 },
      { name: "光の雨（光之雨）", duration: 388 }, { name: "秋風（秋风）", duration: 216 }, { name: "星屑（星屑）", duration: 207 },
      { name: "静か（静谧）", duration: 185 }, { name: "放課後の想い（放学后之思念）", duration: 346 } ] },
    { name: "向日葵（向日葵）", type: "单曲", date: "2031-01-08", songs: [
      { name: "向日葵（向日葵）", duration: 208 } ] },
    { name: "小さなの想い（微小的思念）", type: "单曲", date: "2033-06-04", songs: [
      { name: "小さなの想い（微小的思念）", duration: 220 } ] },
    { name: "涙の空（泪之天空）", type: "单曲", date: "2035-06-26", songs: [
      { name: "涙の空（泪之天空）", duration: 235 } ] },
    { name: "風鈴の陽だまり（风铃之暖阳）", type: "单曲", date: "2037-08-12", songs: [
      { name: "風鈴の陽だまり（风铃之暖阳）", duration: 127 } ] },
    { name: "春風（春风）", type: "单曲", date: "2039-05-01", songs: [
      { name: "春風（春风）", duration: 340 } ] },
    { name: "記憶（记忆）", type: "单曲", date: "2041-10-31", songs: [
      { name: "記憶（记忆）", duration: 232 } ] },
    { name: "波音の微笑（潮声之微笑）", type: "专辑", date: "2043-09-05", songs: [
      { name: "波音の微笑（潮声之微笑）", duration: 219 }, { name: "真夏（盛夏）", duration: 229 }, { name: "潮騒の青い（湛蓝的潮鸣）", duration: 203 },
      { name: "青いの遠い（湛蓝遥远）", duration: 206 }, { name: "潮騒（潮鸣）", duration: 219 }, { name: "春風の海辺（春风之海边）", duration: 209 },
      { name: "雪の青い（湛蓝的雪）", duration: 227 }, { name: "海辺（海边）", duration: 195 } ] },
    { name: "透明（透明）", type: "单曲", date: "2045-10-09", songs: [
      { name: "透明（透明）", duration: 218 } ] },
    { name: "約束の帰り道（约定之归途）", type: "单曲", date: "2047-10-01", songs: [
      { name: "約束の帰り道（约定之归途）", duration: 200 } ] },
    { name: "月光（月光）", type: "单曲", date: "2049-12-11", songs: [
      { name: "月光（月光）", duration: 127 } ] },
    ],
  "Hello, Happy World!": [
    { name: "えがおのオーケストラっ!（笑容管弦乐！）", type: "单曲", date: "2017-05-17", songs: [ { name: "えがおのオーケストラっ!（笑容管弦乐！）", duration: 225 } ] },
    { name: "ハッピーシンセサイザ（Happy Synthesizer）", type: "单曲", date: "2017-08-30", songs: [ { name: "ハッピーシンセサイザ（Happy Synthesizer）", duration: 230 } ] },
    { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", type: "单曲", date: "2017-11-15", songs: [ { name: "ゴーカ!ごーかい!?ファントムシーフ!（豪华！豪快！？Phantom Thief！）", duration: 220 } ] },
    { name: "せかいのっびのびトラベル（世界的悠闲旅行）", type: "单曲", date: "2018-02-14", songs: [ { name: "せかいのっびのびトラベル（世界的悠闲旅行）", duration: 225 } ] },
    { name: "キラキラ☆Festa Day!", type: "单曲", date: "2018-06-20", songs: [ { name: "キラキラ☆Festa Day!", duration: 218 } ] },
    { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", type: "单曲", date: "2018-10-10", songs: [ { name: "わちゃ・もちゃ・ぺったん行進曲（Wacha Mocha Pettan 进行曲）", duration: 212 } ] },
      { name: "放課後の波音（放学后之潮声）", type: "单曲", date: "2026-10-22", songs: [
      { name: "放課後の波音（放学后之潮声）", duration: 211 } ] },
    { name: "遠いの向日葵（遥远向日葵）", type: "单曲", date: "2029-03-19", songs: [
      { name: "遠いの向日葵（遥远向日葵）", duration: 354 } ] },
    { name: "想いの夕焼け（思念之晚霞）", type: "单曲", date: "2031-02-09", songs: [
      { name: "想いの夕焼け（思念之晚霞）", duration: 213 } ] },
    { name: "眩しい（耀眼）", type: "单曲", date: "2033-02-10", songs: [
      { name: "眩しい（耀眼）", duration: 245 } ] },
    { name: "朝焼け（朝霞）", type: "单曲", date: "2035-07-25", songs: [
      { name: "朝焼け（朝霞）", duration: 241 } ] },
    { name: "潮騒（潮鸣）", type: "单曲", date: "2037-03-28", songs: [
      { name: "潮騒（潮鸣）", duration: 195 } ] },
    { name: "帰り道の桜（归途之樱花）", type: "单曲", date: "2039-08-26", songs: [
      { name: "帰り道の桜（归途之樱花）", duration: 208 } ] },
    { name: "海の屋上（海之天台）", type: "单曲", date: "2041-07-02", songs: [
      { name: "海の屋上（海之天台）", duration: 241 } ] },
    { name: "青いの夢（湛蓝梦）", type: "单曲", date: "2043-06-15", songs: [
      { name: "青いの夢（湛蓝梦）", duration: 237 } ] },
    { name: "記憶（记忆）", type: "单曲", date: "2045-11-24", songs: [
      { name: "記憶（记忆）", duration: 300 } ] },
    { name: "想いの波音（思念之潮声）", type: "单曲", date: "2048-01-24", songs: [
      { name: "想いの波音（思念之潮声）", duration: 233 } ] },
    { name: "青い（湛蓝）", type: "单曲", date: "2049-12-25", songs: [
      { name: "青い（湛蓝）", duration: 240 } ] },
    ],
  "Morfonica": [
    { name: "Daylight -デイライト-（Daylight）", type: "单曲", date: "2020-05-27", songs: [ { name: "Daylight -デイライト-（Daylight）", duration: 240 } ] },
    { name: "ブルームブルーム（Bloom Bloom）", type: "单曲", date: "2020-08-26", songs: [ { name: "ブルームブルーム（Bloom Bloom）", duration: 235 } ] },
    { name: "開幕ゼノン（开幕Zenon）", type: "单曲", date: "2020-12-16", songs: [ { name: "開幕ゼノン（开幕Zenon）", duration: 230 } ] },
    { name: "はれるや（晴れるや）", type: "单曲", date: "2021-04-28", songs: [ { name: "はれるや（晴れるや）", duration: 228 } ] },
    { name: "The Circle Of...", type: "单曲", date: "2021-08-25", songs: [ { name: "The Circle Of...", duration: 242 } ] },
    { name: "Ever Sky Blue", type: "单曲", date: "2022-01-26", songs: [ { name: "Ever Sky Blue", duration: 238 } ] },
      { name: "優しいの風（温柔风）", type: "单曲", date: "2027-01-04", songs: [
      { name: "優しいの風（温柔风）", duration: 379 } ] },
    { name: "約束の陽だまり（约定之暖阳）", type: "单曲", date: "2029-04-04", songs: [
      { name: "約束の陽だまり（约定之暖阳）", duration: 229 } ] },
    { name: "秋風の桜（秋风之樱花）", type: "单曲", date: "2031-02-11", songs: [
      { name: "秋風の桜（秋风之樱花）", duration: 236 } ] },
    { name: "屋上（天台）", type: "单曲", date: "2033-04-28", songs: [
      { name: "屋上（天台）", duration: 249 } ] },
    { name: "波音の星空（潮声之星空）", type: "单曲", date: "2035-03-05", songs: [
      { name: "波音の星空（潮声之星空）", duration: 237 } ] },
    { name: "真夏（盛夏）", type: "单曲", date: "2037-05-19", songs: [
      { name: "真夏（盛夏）", duration: 237 } ] },
    { name: "春風（春风）", type: "单曲", date: "2039-05-28", songs: [
      { name: "春風（春风）", duration: 255 } ] },
    { name: "優しいの心（温柔心）", type: "单曲", date: "2041-06-08", songs: [
      { name: "優しいの心（温柔心）", duration: 229 } ] },
    { name: "遠いの朝（遥远晨）", type: "单曲", date: "2043-09-20", songs: [
      { name: "遠いの朝（遥远晨）", duration: 246 } ] },
    { name: "海辺の風鈴（海边之风铃）", type: "单曲", date: "2045-07-31", songs: [
      { name: "海辺の風鈴（海边之风铃）", duration: 239 } ] },
    { name: "雲の朝焼け（云之朝霞）", type: "单曲", date: "2047-09-11", songs: [
      { name: "雲の朝焼け（云之朝霞）", duration: 286 } ] },
    { name: "白いの陽だまり（纯白的暖阳）", type: "单曲", date: "2050-01-12", songs: [
      { name: "白いの陽だまり（纯白的暖阳）", duration: 214 } ] },
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
      { name: "Canvas（画布）", type: "专辑", date: "2027-01-30", songs: [
      { name: "Canvas（画布）", duration: 250 }, { name: "Harbor Velvet（港湾的天鹅绒）", duration: 145 }, { name: "Neon（霓虹）", duration: 212 },
      { name: "Hollow Iron（空洞的铁）", duration: 252 }, { name: "Broken（破碎）", duration: 256 }, { name: "Silver Orbit（银色的轨道）", duration: 324 },
      { name: "Daylight（日光）", duration: 396 }, { name: "Golden（金色）", duration: 185 } ] },
    { name: "Ember（余烬）", type: "专辑", date: "2029-01-04", songs: [
      { name: "Ember（余烬）", duration: 242 }, { name: "Undertow（暗流）", duration: 229 }, { name: "Trail Drift（足迹的漂流）", duration: 151 },
      { name: "Meridian（子午线）", duration: 225 }, { name: "Sundown（日落）", duration: 225 }, { name: "Tide（潮汐）", duration: 190 },
      { name: "Highway（公路）", duration: 222 }, { name: "Rain（雨）", duration: 276 }, { name: "Mirrors（镜子）", duration: 227 } ] },
    { name: "Orbit（轨道）", type: "单曲", date: "2031-01-27", songs: [
      { name: "Orbit（轨道）", duration: 246 } ] },
    { name: "Concrete Vapor（水泥的雾霭）", type: "专辑", date: "2033-01-24", songs: [
      { name: "Concrete Vapor（水泥的雾霭）", duration: 231 }, { name: "Vapor Lantern（雾霭的灯笼）", duration: 188 }, { name: "Whisper（低语）", duration: 243 },
      { name: "Bloom（绽放）", duration: 190 }, { name: "Bloom Wires（绽放的电线）", duration: 223 }, { name: "Trail（足迹）", duration: 240 },
      { name: "Silence（沉寂）", duration: 253 }, { name: "Carousel Signal（旋转木马的信号）", duration: 226 }, { name: "Satellite（卫星）", duration: 276 },
      { name: "Nightfall（夜幕）", duration: 245 } ] },
    { name: "Daybreak Motel（黎明的汽车旅馆）", type: "单曲", date: "2035-06-26", songs: [
      { name: "Daybreak Motel（黎明的汽车旅馆）", duration: 255 } ] },
    { name: "Motel（汽车旅馆）", type: "单曲", date: "2037-09-14", songs: [
      { name: "Motel（汽车旅馆）", duration: 220 } ] },
    { name: "Gravel（砾石）", type: "单曲", date: "2039-10-05", songs: [
      { name: "Gravel（砾石）", duration: 192 } ] },
    { name: "Spark（火花）", type: "单曲", date: "2041-05-13", songs: [
      { name: "Spark（火花）", duration: 241 } ] },
    { name: "Quiet（寂静）", type: "单曲", date: "2043-09-18", songs: [
      { name: "Quiet（寂静）", duration: 219 } ] },
    { name: "Shallow（浅滩）", type: "单曲", date: "2045-11-04", songs: [
      { name: "Shallow（浅滩）", duration: 213 } ] },
    { name: "Marrow（骨髓）", type: "单曲", date: "2048-01-12", songs: [
      { name: "Marrow（骨髓）", duration: 247 } ] },
    { name: "Meridian Faded（子午线的褪色）", type: "专辑", date: "2050-01-19", songs: [
      { name: "Meridian Faded（子午线的褪色）", duration: 239 }, { name: "Ashes（灰烬）", duration: 177 }, { name: "Rust Ashes（锈迹的灰烬）", duration: 234 },
      { name: "Paperplane（纸飞机）", duration: 279 }, { name: "Signal（信号）", duration: 337 }, { name: "Canvas Gravel（画布的砾石）", duration: 147 },
      { name: "Glimmer（微光）", duration: 439 }, { name: "Glimmer Faded（微光的褪色）", duration: 235 } ] },
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
      { name: "風鈴（风铃）", type: "单曲", date: "2027-03-31", songs: [
      { name: "風鈴（风铃）", duration: 263 } ] },
    { name: "冬晴れの海（冬日晴空之海）", type: "单曲", date: "2028-12-01", songs: [
      { name: "冬晴れの海（冬日晴空之海）", duration: 245 } ] },
    { name: "遠い（遥远）", type: "单曲", date: "2030-12-16", songs: [
      { name: "遠い（遥远）", duration: 223 } ] },
    { name: "朝の春風（晨之春风）", type: "单曲", date: "2033-06-28", songs: [
      { name: "朝の春風（晨之春风）", duration: 247 } ] },
    { name: "透明の真夏（透明盛夏）", type: "单曲", date: "2035-05-06", songs: [
      { name: "透明の真夏（透明盛夏）", duration: 261 } ] },
    { name: "白い（纯白的）", type: "单曲", date: "2037-04-21", songs: [
      { name: "白い（纯白的）", duration: 238 } ] },
    { name: "青いの眩しい（湛蓝耀眼）", type: "单曲", date: "2039-09-30", songs: [
      { name: "青いの眩しい（湛蓝耀眼）", duration: 240 } ] },
    { name: "真夏の波音（盛夏之潮声）", type: "单曲", date: "2041-09-26", songs: [
      { name: "真夏の波音（盛夏之潮声）", duration: 261 } ] },
    { name: "記憶の星屑（记忆之星屑）", type: "单曲", date: "2043-08-02", songs: [
      { name: "記憶の星屑（记忆之星屑）", duration: 245 } ] },
    { name: "静かの星屑（静谧星屑）", type: "单曲", date: "2046-01-09", songs: [
      { name: "静かの星屑（静谧星屑）", duration: 243 } ] },
    { name: "朝焼け（朝霞）", type: "单曲", date: "2048-01-28", songs: [
      { name: "朝焼け（朝霞）", duration: 232 } ] },
    { name: "時の陽だまり（时光之暖阳）", type: "专辑", date: "2049-10-14", songs: [
      { name: "時の陽だまり（时光之暖阳）", duration: 205 }, { name: "月の向日葵（月之向日葵）", duration: 280 }, { name: "優しいの向日葵（温柔向日葵）", duration: 247 },
      { name: "向日葵の夜（向日葵之夜）", duration: 222 }, { name: "夕焼け（晚霞）", duration: 260 }, { name: "青いの夢（湛蓝梦）", duration: 254 },
      { name: "潮騒（潮鸣）", duration: 271 }, { name: "青い（湛蓝）", duration: 232 }, { name: "自転車（单车）", duration: 221 },
      { name: "光の春風（光之春风）", duration: 264 }, { name: "記憶（记忆）", duration: 151 } ] },
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
      { name: "深夜的夜航", type: "EP", date: "2027-01-06", songs: [
      { name: "深夜的夜航", duration: 218 }, { name: "裂痕街灯", duration: 231 }, { name: "站台", duration: 162 },
      { name: "暗号", duration: 253 } ] },
    { name: "灯塔", type: "单曲", date: "2029-03-24", songs: [
      { name: "灯塔", duration: 253 } ] },
    { name: "深夜的雨夜", type: "单曲", date: "2031-05-29", songs: [
      { name: "深夜的雨夜", duration: 203 } ] },
    { name: "深夜的出口", type: "EP", date: "2033-05-12", songs: [
      { name: "深夜的出口", duration: 219 }, { name: "逆流边界", duration: 248 }, { name: "废墟", duration: 242 },
      { name: "风铃断线", duration: 244 }, { name: "深夜的晴天", duration: 195 } ] },
    { name: "残响", type: "EP", date: "2035-03-23", songs: [
      { name: "残响", duration: 222 }, { name: "归途", duration: 238 }, { name: "灰烬铁轨", duration: 258 } ] },
    { name: "深夜的公路", type: "单曲", date: "2037-10-07", songs: [
      { name: "深夜的公路", duration: 221 } ] },
    { name: "街灯潮声", type: "专辑", date: "2039-11-09", songs: [
      { name: "街灯潮声", duration: 197 }, { name: "深夜的候鸟", duration: 243 }, { name: "回声暮色", duration: 231 },
      { name: "暗涌荒岛", duration: 228 }, { name: "疾风斑马线", duration: 261 }, { name: "站牌", duration: 164 },
      { name: "铁轨", duration: 231 }, { name: "深夜的裂痕", duration: 186 }, { name: "深夜的闪电", duration: 257 } ] },
    { name: "余烬", type: "专辑", date: "2041-09-22", songs: [
      { name: "余烬", duration: 267 }, { name: "出口", duration: 222 }, { name: "沙丘", duration: 190 },
      { name: "深夜的逆光", duration: 238 }, { name: "夜航", duration: 292 }, { name: "归途废墟", duration: 247 },
      { name: "野火", duration: 246 }, { name: "潮声", duration: 221 }, { name: "公路站台", duration: 262 } ] },
    { name: "街灯", type: "单曲", date: "2043-09-05", songs: [
      { name: "街灯", duration: 380 } ] },
    { name: "闪电", type: "单曲", date: "2045-10-09", songs: [
      { name: "闪电", duration: 260 } ] },
    { name: "深夜的霓虹", type: "单曲", date: "2047-12-02", songs: [
      { name: "深夜的霓虹", duration: 205 } ] },
    { name: "斑马线", type: "单曲", date: "2049-11-05", songs: [
      { name: "斑马线", duration: 316 } ] },
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
      { name: "深夜的末班车", type: "专辑", date: "2026-10-23", songs: [
      { name: "深夜的末班车", duration: 231 }, { name: "深夜的甲板", duration: 248 }, { name: "末班车", duration: 229 },
      { name: "灰烬", duration: 325 }, { name: "空城", duration: 262 }, { name: "隧道", duration: 233 },
      { name: "出口", duration: 251 }, { name: "深夜的远方", duration: 329 } ] },
    { name: "路口", type: "EP", date: "2029-05-18", songs: [
      { name: "路口", duration: 157 }, { name: "远方出口", duration: 287 }, { name: "风铃", duration: 233 },
      { name: "车窗残响", duration: 208 } ] },
    { name: "深夜的疾风", type: "EP", date: "2031-02-28", songs: [
      { name: "深夜的疾风", duration: 471 }, { name: "旧城风铃", duration: 248 }, { name: "车窗", duration: 217 } ] },
    { name: "暗涌", type: "专辑", date: "2033-06-19", songs: [
      { name: "暗涌", duration: 333 }, { name: "残响裂痕", duration: 280 }, { name: "楼顶", duration: 332 },
      { name: "深夜的断线", duration: 284 }, { name: "公路", duration: 289 }, { name: "断线", duration: 199 },
      { name: "深夜的深夜", duration: 160 }, { name: "夜航", duration: 204 }, { name: "星光", duration: 290 } ] },
    { name: "逆流荒岛", type: "EP", date: "2035-04-02", songs: [
      { name: "逆流荒岛", duration: 246 }, { name: "深夜的长夜", duration: 293 }, { name: "荒原", duration: 328 },
      { name: "灯塔", duration: 247 } ] },
    { name: "闪电", type: "EP", date: "2037-04-05", songs: [
      { name: "闪电", duration: 253 }, { name: "高墙", duration: 273 }, { name: "隧道深夜", duration: 253 },
      { name: "夜班旧城", duration: 218 }, { name: "候鸟", duration: 383 } ] },
    { name: "深夜的裂痕", type: "单曲", date: "2039-05-27", songs: [
      { name: "深夜的裂痕", duration: 299 } ] },
    { name: "斑马线", type: "专辑", date: "2041-06-27", songs: [
      { name: "斑马线", duration: 291 }, { name: "天台", duration: 277 }, { name: "深夜的潮汐", duration: 288 },
      { name: "深夜的暮色", duration: 257 }, { name: "断线天台", duration: 252 }, { name: "旧梦", duration: 263 },
      { name: "野火", duration: 290 } ] },
    { name: "深夜的沙丘", type: "EP", date: "2043-09-02", songs: [
      { name: "深夜的沙丘", duration: 269 }, { name: "碎片高墙", duration: 289 }, { name: "暮色", duration: 291 },
      { name: "回声", duration: 265 } ] },
    { name: "逆流", type: "单曲", date: "2045-08-22", songs: [
      { name: "逆流", duration: 429 } ] },
    { name: "霓虹", type: "EP", date: "2047-10-13", songs: [
      { name: "霓虹", duration: 272 }, { name: "沙丘裂痕", duration: 301 }, { name: "深夜的出口", duration: 327 } ] },
    { name: "雨夜暴雨", type: "EP", date: "2049-12-06", songs: [
      { name: "雨夜暴雨", duration: 281 }, { name: "深夜的暗涌", duration: 257 }, { name: "深夜夜班", duration: 236 },
      { name: "晴天", duration: 285 } ] },
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
      { name: "霓虹", type: "单曲", date: "2027-03-24", songs: [
      { name: "霓虹", duration: 501 } ] },
    { name: "迷途", type: "专辑", date: "2029-04-04", songs: [
      { name: "迷途", duration: 264 }, { name: "荒原", duration: 289 }, { name: "夜航", duration: 300 },
      { name: "残响", duration: 266 }, { name: "晚钟", duration: 283 }, { name: "长夜", duration: 286 },
      { name: "路口归途", duration: 322 }, { name: "暗涌", duration: 219 }, { name: "深夜的晚风", duration: 314 },
      { name: "深夜的空城", duration: 286 }, { name: "公路野火", duration: 318 } ] },
    { name: "末班车荒岛", type: "专辑", date: "2031-02-27", songs: [
      { name: "末班车荒岛", duration: 266 }, { name: "荒岛停电", duration: 289 }, { name: "斑马线", duration: 287 },
      { name: "深夜的潮汐", duration: 283 }, { name: "楼顶", duration: 346 }, { name: "疾风", duration: 321 },
      { name: "深夜的暗号", duration: 178 }, { name: "回声", duration: 303 } ] },
    { name: "晴天末班车", type: "单曲", date: "2033-05-22", songs: [
      { name: "晴天末班车", duration: 276 } ] },
    { name: "站牌暴雨", type: "EP", date: "2035-09-20", songs: [
      { name: "站牌暴雨", duration: 191 }, { name: "逆流", duration: 297 }, { name: "风铃", duration: 235 },
      { name: "旧梦", duration: 299 }, { name: "站台残响", duration: 317 }, { name: "深夜的边界", duration: 283 } ] },
    { name: "晚风", type: "单曲", date: "2037-08-31", songs: [
      { name: "晚风", duration: 274 } ] },
    { name: "末班车", type: "单曲", date: "2039-09-11", songs: [
      { name: "末班车", duration: 509 } ] },
    { name: "深夜的暗涌", type: "单曲", date: "2041-08-26", songs: [
      { name: "深夜的暗涌", duration: 292 } ] },
    { name: "站台", type: "专辑", date: "2044-01-10", songs: [
      { name: "站台", duration: 192 }, { name: "余烬末班车", duration: 272 }, { name: "潮汐", duration: 303 },
      { name: "晴天", duration: 186 }, { name: "停电", duration: 291 }, { name: "深夜的楼顶", duration: 281 },
      { name: "旧城", duration: 196 }, { name: "暴雨", duration: 269 }, { name: "铁轨", duration: 347 } ] },
    { name: "荒原天台", type: "专辑", date: "2045-08-19", songs: [
      { name: "荒原天台", duration: 334 }, { name: "深夜", duration: 277 }, { name: "街灯", duration: 457 },
      { name: "旧梦街灯", duration: 277 }, { name: "碎片闪电", duration: 282 }, { name: "碎片潮声", duration: 278 },
      { name: "暗号", duration: 290 }, { name: "深夜的荒岛", duration: 250 }, { name: "深夜的末班车", duration: 502 } ] },
    { name: "闪电信号", type: "专辑", date: "2047-11-25", songs: [
      { name: "闪电信号", duration: 265 }, { name: "野火夜班", duration: 288 }, { name: "夜班", duration: 272 },
      { name: "深夜的出口", duration: 294 }, { name: "雨夜", duration: 309 }, { name: "沙丘", duration: 281 },
      { name: "暗号天台", duration: 294 }, { name: "野火霓虹", duration: 294 }, { name: "暗涌残响", duration: 307 },
      { name: "余烬", duration: 283 } ] },
    { name: "逆光风铃", type: "单曲", date: "2050-01-18", songs: [
      { name: "逆光风铃", duration: 266 } ] },
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
      { name: "断层涟漪", type: "专辑", date: "2027-07-30", songs: [
      { name: "断层涟漪", duration: 345 }, { name: "深夜的银幕", duration: 370 }, { name: "潮间带", duration: 334 },
      { name: "灰白", duration: 310 }, { name: "旷野虚空", duration: 449 }, { name: "银幕", duration: 387 },
      { name: "河床静止", duration: 414 } ] },
    { name: "深夜的经纬", type: "专辑", date: "2030-11-12", songs: [
      { name: "深夜的经纬", duration: 375 }, { name: "边缘", duration: 365 }, { name: "旷野", duration: 347 },
      { name: "云层", duration: 318 }, { name: "水银", duration: 393 }, { name: "断层", duration: 323 },
      { name: "水银潮汐", duration: 196 }, { name: "深夜的极昼", duration: 322 } ] },
    { name: "深夜的地平线", type: "专辑", date: "2033-12-02", songs: [
      { name: "深夜的地平线", duration: 376 }, { name: "尘埃", duration: 351 }, { name: "倒影", duration: 281 },
      { name: "深夜的星轨", duration: 317 }, { name: "环流银幕", duration: 418 }, { name: "缓慢折射", duration: 378 },
      { name: "遥远", duration: 354 }, { name: "深夜的薄雾", duration: 330 }, { name: "回旋", duration: 282 },
      { name: "极光", duration: 345 }, { name: "河床", duration: 368 } ] },
    { name: "深夜的寒潮", type: "专辑", date: "2037-04-12", songs: [
      { name: "深夜的寒潮", duration: 345 }, { name: "深夜的河床", duration: 351 }, { name: "涟漪", duration: 273 },
      { name: "雪线", duration: 450 }, { name: "极昼", duration: 293 }, { name: "尘埃潮间带", duration: 342 },
      { name: "低频", duration: 276 }, { name: "深夜的深海", duration: 325 }, { name: "深夜的波纹", duration: 316 },
      { name: "蓝鲸", duration: 376 } ] },
    { name: "陨石余温", type: "专辑", date: "2040-05-30", songs: [
      { name: "陨石余温", duration: 372 }, { name: "虚空薄雾", duration: 313 }, { name: "深夜的静止", duration: 416 },
      { name: "环流", duration: 350 }, { name: "深夜的光年", duration: 330 }, { name: "深空", duration: 379 },
      { name: "星尘", duration: 560 }, { name: "深夜的涟漪", duration: 331 }, { name: "薄雾光年", duration: 365 } ] },
    { name: "月相", type: "专辑", date: "2042-12-26", songs: [
      { name: "月相", duration: 371 }, { name: "折射", duration: 363 }, { name: "云层陨石", duration: 377 },
      { name: "折线", duration: 367 }, { name: "冰川", duration: 560 }, { name: "光年", duration: 342 },
      { name: "无声", duration: 312 }, { name: "退潮回声", duration: 356 }, { name: "余温", duration: 329 },
      { name: "波纹回声", duration: 344 } ] },
    { name: "地平线云层", type: "专辑", date: "2046-01-06", songs: [
      { name: "地平线云层", duration: 240 }, { name: "经纬", duration: 338 }, { name: "波纹", duration: 410 },
      { name: "山脉", duration: 277 }, { name: "遥远潮汐", duration: 378 }, { name: "深夜的蓝鲸", duration: 329 },
      { name: "深夜的虚空", duration: 310 }, { name: "轨迹", duration: 530 }, { name: "遥远环流", duration: 250 },
      { name: "遥远光年", duration: 360 }, { name: "深夜的长夜", duration: 350 } ] },
    { name: "深夜的折线", type: "专辑", date: "2049-03-16", songs: [
      { name: "深夜的折线", duration: 375 }, { name: "涟漪静止", duration: 347 }, { name: "深夜的深空", duration: 367 },
      { name: "尘埃蓝鲸", duration: 347 }, { name: "引力", duration: 336 }, { name: "深空星轨", duration: 321 },
      { name: "深夜的雪线", duration: 322 } ] },
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
      { name: "涟漪", type: "EP", date: "2027-07-25", songs: [
      { name: "涟漪", duration: 362 }, { name: "深夜的光年", duration: 303 }, { name: "深空", duration: 431 } ] },
    { name: "银幕", type: "EP", date: "2029-11-14", songs: [
      { name: "银幕", duration: 365 }, { name: "冰川", duration: 376 }, { name: "雪线", duration: 334 },
      { name: "蓝鲸缓慢", duration: 342 }, { name: "深夜的山脉", duration: 346 } ] },
    { name: "环流", type: "EP", date: "2031-07-25", songs: [
      { name: "环流", duration: 243 }, { name: "深夜的长夜", duration: 245 }, { name: "低频", duration: 392 },
      { name: "折线", duration: 342 }, { name: "深夜的深空", duration: 397 }, { name: "极夜", duration: 348 } ] },
    { name: "深海", type: "EP", date: "2033-09-08", songs: [
      { name: "深海", duration: 379 }, { name: "深夜的旷野", duration: 244 }, { name: "回声", duration: 376 },
      { name: "深夜的陨石", duration: 360 }, { name: "深夜的断层", duration: 306 } ] },
    { name: "缓慢", type: "单曲", date: "2035-09-27", songs: [
      { name: "缓慢", duration: 336 } ] },
    { name: "薄雾", type: "EP", date: "2037-08-03", songs: [
      { name: "薄雾", duration: 226 }, { name: "经纬", duration: 398 }, { name: "潮汐", duration: 345 } ] },
    { name: "静默", type: "专辑", date: "2039-10-16", songs: [
      { name: "静默", duration: 367 }, { name: "山脉", duration: 340 }, { name: "星尘", duration: 377 },
      { name: "深夜的边缘", duration: 417 }, { name: "折射", duration: 449 }, { name: "旷野薄雾", duration: 403 },
      { name: "边缘", duration: 396 }, { name: "倒影回声", duration: 391 } ] },
    { name: "静默长夜", type: "EP", date: "2041-11-29", songs: [
      { name: "静默长夜", duration: 242 }, { name: "深夜的地平线", duration: 422 }, { name: "深夜的极昼", duration: 336 },
      { name: "深夜的沙漏", duration: 405 }, { name: "潮汐沙漏", duration: 385 }, { name: "深夜的回声", duration: 425 } ] },
    { name: "银幕低频", type: "专辑", date: "2043-12-10", songs: [
      { name: "银幕低频", duration: 391 }, { name: "深夜的遥远", duration: 364 }, { name: "沙漏极昼", duration: 385 },
      { name: "深夜的折射", duration: 440 }, { name: "星轨", duration: 335 }, { name: "深夜的星尘", duration: 383 },
      { name: "寒潮", duration: 266 }, { name: "旷野", duration: 390 }, { name: "轨迹河床", duration: 382 },
      { name: "深夜的无声", duration: 300 }, { name: "尘埃", duration: 319 } ] },
    { name: "虚空", type: "EP", date: "2045-12-14", songs: [
      { name: "虚空", duration: 360 }, { name: "轨迹", duration: 395 }, { name: "引力", duration: 335 },
      { name: "水银", duration: 358 }, { name: "深夜的涟漪", duration: 448 }, { name: "退潮", duration: 444 } ] },
    { name: "深夜的极夜", type: "专辑", date: "2048-03-10", songs: [
      { name: "深夜的极夜", duration: 351 }, { name: "灰白", duration: 350 }, { name: "光年", duration: 376 },
      { name: "余温", duration: 371 }, { name: "回旋", duration: 394 }, { name: "灰白边缘", duration: 560 },
      { name: "深夜的余温", duration: 341 }, { name: "深夜的寒潮", duration: 379 }, { name: "河床冰川", duration: 259 },
      { name: "深夜的退潮", duration: 335 }, { name: "深夜的经纬", duration: 317 } ] },
    { name: "断层薄雾", type: "EP", date: "2050-03-17", songs: [
      { name: "断层薄雾", duration: 361 }, { name: "虚空轨迹", duration: 366 }, { name: "深空潮间带", duration: 290 },
      { name: "潮间带倒影", duration: 408 }, { name: "水银折线", duration: 306 } ] },
    ],
};
