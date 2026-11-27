#!/bin/bash
# 组装 Windows 轻量版（Neutralino + 系统 WebView2）
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
GAME="$(cd "$ROOT/.." && pwd)"
NEU_ZIP="$GAME/.cache-electron/neu.zip"
OUT="$ROOT/build-neu"
APP="$OUT/BandLife"
VERSION=$(node -p "require('$ROOT/package.json').version")

if [ ! -f "$NEU_ZIP" ]; then
  echo "缺少 Neutralino 包：$NEU_ZIP"
  exit 1
fi

[ -d "$OUT" ] && rm -rf "$OUT"
mkdir -p "$APP/resources"

# 1) 取出 Windows 运行时
unzip -q -o "$NEU_ZIP" neutralino-win_x64.exe -d "$OUT/tmp"
mv -f "$OUT/tmp/neutralino-win_x64.exe" "$APP/BandLife.exe"
rm -rf "$OUT/tmp"

# 2) 配置
cat > "$APP/resources/neutralino.config.json" <<'JSON'
{
  "applicationId": "cc.bandgame.bandlife",
  "version": "1.3.16",
  "defaultMode": "window",
  "port": 38217,
  "documentRoot": "/",
  "url": "/index.html",
  "enableServer": true,
  "enableNativeAPI": true,
  "tokenSecurity": "one-time",
  "logging": { "enabled": false, "writeToLogFile": false },
  "modes": {
    "window": {
      "title": "乐队时代",
      "width": 1366,
      "height": 860,
      "minWidth": 1024,
      "minHeight": 600,
      "fullScreen": false,
      "alwaysOnTop": false,
      "enableInspector": false,
      "borderless": false,
      "maximize": false,
      "hidden": false,
      "resizable": true,
      "exitProcessOnClose": true
    }
  },
  "cli": {
    "binaryName": "BandLife",
    "resourcesPath": "/",
    "clientLibrary": "/js/neutralino.js",
    "binaryVersion": "6.10.0",
    "clientVersion": "6.10.0"
  }
}
JSON

# 3) 游戏资源
cp "$GAME/index.html" "$APP/resources/"
cp -r "$GAME/css" "$GAME/js" "$GAME/music" "$APP/resources/"

# 4) 打包 resources.neu（zip 格式，内部根目录与 documentRoot 对应）
python3 - "$APP" <<'PY'
import os, sys, zipfile
app = sys.argv[1]
neu = os.path.join(app, "resources.neu")
with zipfile.ZipFile(neu, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    base = os.path.join(app, "resources")
    for root, dirs, files in os.walk(base):
        for f in files:
            full = os.path.join(root, f)
            arc = os.path.relpath(full, base)
            z.write(full, arc)
print("resources.neu:", round(os.path.getsize(neu) / 1048576, 1), "MB")
PY

# 5) 资源已封入 .neu，删除散文件
rm -rf "$APP/resources"

# 6) 外层 zip 便于分发
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
