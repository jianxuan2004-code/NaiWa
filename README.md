# 我的奶蛙 3D

A portrait 3D virtual-pet web game (Talking-Tom style): poke the head, rub the belly, feed, repeat your voice, play and sleep.

- Open `index.html` directly (works from `file://`), or run `node serve.js` and visit http://localhost:8765
- Source: `src/` · rebuild with `npm install && npm run build` (esbuild bundles to `bundle.js`)
- `node tools/mkassets.cjs` regenerates `assets.js` (model, textures, voice clips) from `assets/`
