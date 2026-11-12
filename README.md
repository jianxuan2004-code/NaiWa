# 我的奶蛙 3D

**▶ 在线试玩 / Play online: https://jianxuan2004-code.github.io/NaiWa/**

A portrait 3D virtual-pet web game (Talking-Tom style): poke the head, rub the belly, feed, repeat your voice, play and sleep. Best on a phone (portrait) — use "Add to Home Screen" for full screen. The 复读 (voice repeat) feature needs microphone permission.

## Run locally
- Open `index.html` directly (works from `file://`), or run `node serve.js` and visit http://localhost:8765
- Source: `src/` · rebuild with `npm install && npm run build` (esbuild bundles to `bundle.js`)
- `node tools/mkassets.cjs` regenerates `assets.js` (model, textures, voice clips) from `assets/`
