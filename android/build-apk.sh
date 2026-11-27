#!/bin/bash
# 同步游戏资源到 Android assets 并构建 APK
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
GAME="$(cd "$ROOT/.." && pwd)"
ASSETS="$ROOT/app/src/main/assets"

rm -rf "$ASSETS"
mkdir -p "$ASSETS"
cp "$GAME/index.html" "$ASSETS/"
cp -r "$GAME/css" "$GAME/js" "$GAME/music" "$ASSETS/"

# 桌面端排版：固定视口宽度，WebView 整体缩放
sed -i 's|content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"|content="width=1024, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"|' "$ASSETS/index.html"

cd "$ROOT"
JAVA_HOME=/usr/lib/jvm/java-17-openjdk-arm64 \
ANDROID_HOME=/root/android/sdk \
/root/tools/gradle-8.11.1/bin/gradle assembleDebug --no-daemon "$@"

echo ""
echo "APK: $ROOT/app/build/outputs/apk/debug/app-debug.apk"
