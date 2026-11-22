# -*- coding: utf-8 -*-
# 读取附件 xlsx，提取县级行政区（sheet1，按省份顺序排列）与地级市（sheet2）
# 用省份"结束标记"切分，生成省->县级行政区映射（保证不串省）
import zipfile, json
from xml.etree import ElementTree as ET

def read_xlsx(path):
    z = zipfile.ZipFile(path)
    ns = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    root = ET.fromstring(z.read('xl/sharedStrings.xml'))
    shared = []
    for si in root.findall('m:si', ns):
        texts = si.findall('.//m:t', ns)
        shared.append(''.join(t.text or '' for t in texts))
    sheets = {}
    for name in ['xl/worksheets/sheet1.xml','xl/worksheets/sheet2.xml']:
        root = ET.fromstring(z.read(name))
        out = []
        for r in root.findall('.//m:row', ns):
            vals = []
            for c in r.findall('m:c', ns):
                t = c.get('t')
                v = c.find('m:v', ns)
                vv = v.text if v is not None else ''
                if t == 's':
                    vv = shared[int(vv)]
                vals.append(vv)
            out.append(vals[0] if vals else '')
        sheets[name] = out
    return sheets

# 省份结束标记（sheet1 中每个省份的最后一个县级行政区，按出现顺序）
PROV_END = [
    "延庆区",          # 北京
    "蓟州区",          # 天津
    "深州市",          # 河北
    "汾阳市",          # 山西
    "额济纳旗",        # 内蒙古
    "兴城市",          # 辽宁
    "安图县",          # 吉林
    "塔河县",          # 黑龙江
    "崇明区",          # 上海
    "泗洪县",          # 江苏
    "龙泉市",          # 浙江
    "广德市",          # 安徽
    "福鼎市",          # 福建
    "德兴市",          # 江西
    "东明县",          # 山东
    "济源市",          # 河南
    "神农架林区",      # 湖北
    "龙山县",          # 湖南
    "罗定市",          # 广东
    "凭祥市",          # 广西
    "琼中黎族苗族自治县", # 海南
    "彭水苗族土家族自治县", # 重庆
    "雷波县",          # 四川
    "三都水族自治县",  # 贵州
    "维西傈僳族自治县", # 云南
    "措勤县",          # 西藏
    "柞水县",          # 陕西
    "夏河县",          # 甘肃
    "大柴旦行政委员会", # 青海
    "海原县",          # 宁夏
    "新星市",          # 新疆
    "香港特别行政区",  # 香港
    "澳门特别行政区",  # 澳门
    "台湾省",          # 台湾
]

PROV_NAMES = [
    "北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省",
    "黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省",
    "山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区",
    "海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省",
    "甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区",
    "香港特别行政区","澳门特别行政区","台湾省",
]

def main():
    sheets = read_xlsx('scripts/猜盐.xlsx')
    sheet1 = sheets['xl/worksheets/sheet1.xml']  # 县级行政区（含标题"县级市"）
    sheet2 = sheets['xl/worksheets/sheet2.xml']  # 地级市（含标题"城市"）
    # 去掉标题
    counties_all = sheet1[1:]  # 县级行政区
    cities_all = sheet2[1:]    # 地级市

    # 按省份结束标记切分县级行政区
    prov_counties = {}
    idx = 0
    for pi, end_mark in enumerate(PROV_END):
        pname = PROV_NAMES[pi]
        lst = []
        while idx < len(counties_all):
            item = counties_all[idx]
            lst.append(item)
            idx += 1
            if item == end_mark:
                break
        prov_counties[pname] = lst

    # 校验
    total = sum(len(v) for v in prov_counties.values())
    print("县级行政区总数:", total, "(应为", len(counties_all), ")")
    print("地级市总数:", len(cities_all))

    json.dump({
        "prov_counties": prov_counties,
        "cities": cities_all,
    }, open('scripts/_counties_raw.json','w',encoding='utf-8'), ensure_ascii=False, indent=0)
    print("已导出 scripts/_counties_raw.json")

if __name__ == '__main__':
    main()
