#!/bin/bash
# 兼容版：Electron 22（最后支持 Windows 7 / 8.1 的版本）
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
GAME="$(cd "$ROOT/.." && pwd)"
ZIP_SRC="$GAME/.cache-electron/electron22-win32.zip"
OUT="$ROOT/build-legacy"
APP="$OUT/BandLife"
VERSION=$(node -p "require('$ROOT/package.json').version")

if [ ! -f "$ZIP_SRC" ]; then
  echo "缺少 Electron 22 Windows 包：$ZIP_SRC"
  exit 1
fi

[ -d "$OUT" ] && rm -rf "$OUT"
mkdir -p "$APP"
unzip -q -o "$ZIP_SRC" -d "$APP"
mv -f "$APP/electron.exe" "$APP/BandLife.exe"
rm -f "$APP/resources/default_app.asar"

# 只保留中英文语言包，减小体积
find "$APP/locales" -type f ! -name 'zh-CN.pak' ! -name 'en-US.pak' -delete 2>/dev/null || true

mkdir -p "$APP/resources/app"
cp "$ROOT/main.js" "$ROOT/package.json" "$APP/resources/app/"
cp "$GAME/index.html" "$APP/resources/app/"
cp -r "$GAME/css" "$GAME/js" "$GAME/music" "$APP/resources/app/"

python3 - "$OUT" "$GAME/BandLife-$VERSION-windows-x64-legacy.zip" <<'PY'
import os, sys, zipfile
src, dst = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for base, dirs, files in os.walk(src):
        for f in files:
            full = os.path.join(base, f)
            z.write(full, os.path.relpath(full, src))
print("zip:", dst, round(os.path.getsize(dst) / 1048576, 1), "MB")
PY

echo "兼容版目录: $APP"
echo "启动文件: $APP/BandLife.exe"
