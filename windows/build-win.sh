#!/bin/bash
# 组装 Windows 免安装版（Electron win32-x64）
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
GAME="$(cd "$ROOT/.." && pwd)"
ZIP_SRC="$GAME/.cache-electron/electron-win32.zip"
OUT="$ROOT/build"
APP="$OUT/BandLife"
VERSION=$(node -p "require('$ROOT/package.json').version")

if [ ! -f "$ZIP_SRC" ]; then
  echo "缺少 Electron Windows 包：$ZIP_SRC"
  exit 1
fi

[ -d "$OUT" ] && rm -rf "$OUT"
mkdir -p "$APP"
unzip -q -o "$ZIP_SRC" -d "$APP"
mv -f "$APP/electron.exe" "$APP/BandLife.exe"
rm -f "$APP/resources/default_app.asar"

mkdir -p "$APP/resources/app"
cp "$ROOT/main.js" "$ROOT/package.json" "$APP/resources/app/"
cp "$GAME/index.html" "$APP/resources/app/"
cp -r "$GAME/css" "$GAME/js" "$GAME/music" "$APP/resources/app/"

python3 - "$OUT" "$GAME/BandLife-$VERSION-windows-x64.zip" <<'PY'
import os, sys, zipfile
src, dst = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for base, dirs, files in os.walk(src):
        for f in files:
            full = os.path.join(base, f)
            z.write(full, os.path.relpath(full, src))
print("zip:", dst, round(os.path.getsize(dst) / 1048576, 1), "MB")
PY

echo "Windows 版目录: $APP"
echo "启动文件: $APP/BandLife.exe"
