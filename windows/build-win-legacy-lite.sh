#!/bin/bash
# 兼容版分发：主包（不含背景音乐）+ 音乐包，两者解压到同一目录即可合并
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
GAME="$(cd "$ROOT/.." && pwd)"
SRC="$ROOT/build-legacy/BandLife"
OUT="$ROOT/build-legacy-lite/BandLife"
VERSION=$(node -p "require('$ROOT/package.json').version")

[ -d "$SRC" ] || { echo "请先执行 build-win-legacy.sh"; exit 1; }

LITE_ROOT="$ROOT/build-legacy-lite"
[ -d "$LITE_ROOT" ] && rm -rf "$LITE_ROOT"
mkdir -p "$LITE_ROOT"
cp -r "$SRC" "$OUT"
rm -rf "$OUT/resources/app/music"

python3 - "$LITE_ROOT" "$GAME/BandLife-$VERSION-windows-legacy.zip" <<'PY'
import os, sys, zipfile
src, dst = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for base, dirs, files in os.walk(src):
        for f in files:
            full = os.path.join(base, f)
            z.write(full, os.path.relpath(full, src))
print("主包:", os.path.basename(dst), round(os.path.getsize(dst) / 1048576, 1), "MB")
PY

python3 - "$GAME" "$GAME/BandLife-$VERSION-windows-legacy-music.zip" <<'PY'
import os, sys, zipfile
game, dst = sys.argv[1], sys.argv[2]
music = os.path.join(game, "music")
with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for base, dirs, files in os.walk(music):
        for f in files:
            full = os.path.join(base, f)
            # 解压后落在 BandLife/resources/app/music 下，与主包合并
            arc = os.path.join("BandLife", "resources", "app", os.path.relpath(full, game))
            z.write(full, arc)
print("音乐包:", os.path.basename(dst), round(os.path.getsize(dst) / 1048576, 1), "MB")
PY
