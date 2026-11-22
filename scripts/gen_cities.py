# -*- coding: utf-8 -*-
# 生成 js/data/cities.js：省 -> 地级市 -> 县级市/区
import json, sys
sys.path.insert(0, 'scripts')
from provinces import PROVINCES, PREFECTURE_SHORT, city_short
from city_ends import PROV_CITY_ENDS

def main():
    raw = json.load(open('scripts/_counties_raw.json', encoding='utf-8'))
    prov_counties = raw['prov_counties']

    regions = []
    errors = []
    for pname, cities in PROVINCES.items():
        pc = prov_counties[pname]
        ends = PROV_CITY_ENDS[pname]
        # 切分到地级市
        city_list = []
        idx = 0
        for cname in cities:
            end_mark = ends[cname]
            districts = []
            while idx < len(pc):
                item = pc[idx]
                districts.append(item)
                idx += 1
                if item == end_mark:
                    break
            city_list.append({"name": cname, "districts": districts})
        # 校验
        total = sum(len(c['districts']) for c in city_list)
        if total != len(pc):
            errors.append(f"{pname}: 切分后 {total} != 原始 {len(pc)}")
        regions.append({
            "province": pname,
            "cities": city_list,
        })

    if errors:
        print("切分错误：")
        for e in errors:
            print(" ", e)
        return

    total_cities = sum(len(r['cities']) for r in regions)
    total_districts = sum(len(c['districts']) for r in regions for c in r['cities'])
    print(f"省份 {len(regions)} 个，地级市 {total_cities} 个，县级行政区 {total_districts} 个")

    # 生成 JS
    lines = []
    lines.append("// 中国行政区划：省 -> 地级市 -> 县级市/区（依据附件《猜盐.xlsx》整理）")
    lines.append("// 自动生成，请勿手动编辑")
    lines.append("window.CHINA_REGIONS = [")
    for r in regions:
        lines.append(f'  {{ province: "{r["province"]}", cities: [')
        for c in r['cities']:
            d = '", "'.join(c['districts'])
            lines.append(f'    {{ name: "{c["name"]}", districts: ["{d}"] }},')
        lines.append('  ] },')
    lines.append('];')

    # 生成地级市简称映射
    lines.append('')
    lines.append('window.CITY_SHORT = {')
    all_cities = []
    for r in regions:
        for c in r['cities']:
            all_cities.append(c['name'])
    for cn in all_cities:
        lines.append(f'  "{cn}": "{city_short(cn)}",')
    lines.append('};')

    out = '\n'.join(lines) + '\n'
    open('js/data/cities.js', 'w', encoding='utf-8').write(out)
    print("已生成 js/data/cities.js")

if __name__ == '__main__':
    main()
