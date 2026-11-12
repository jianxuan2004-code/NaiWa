# 我的奶蛙 3D

**▶ 在线试玩 / Play online: https://jianxuan2004-code.github.io/NaiWa/**

A portrait 3D virtual-pet web game (Talking-Tom style) with two characters you can switch between (top-right buttons): 奶蛙 (rigged frog) and 奶蛋 (an egg who only says "安~迪！" and laughs). Poke the head, rub the belly, feed, repeat your voice (奶蛙), play and sleep. Best on a phone (portrait) — use "Add to Home Screen" for full screen. The 复读 (voice repeat) feature needs microphone permission.

## Run locally
- Open `index.html` directly (works from `file://`), or run `node serve.js` and visit http://localhost:8765
- Source: `src/` · rebuild with `npm install && npm run build` (esbuild bundles to `bundle.js`)
- `node tools/mkassets.cjs` regenerates `assets.js` (model, textures, voice clips) from `assets/`

## Gameplay
- Six characters (tap the round button at the top right): 🐸 奶蛙, 🥚 奶蛋, 🐟 奶鱼, 🐱 奶猫, 🐭 奶鼠, 💩 奶屎. Each has its own look, voice line and outfit.
- 👗 换装 (dress-up): buy hats, glasses and neckwear with coins (13 items, each character keeps its own outfit).
- 🧺 接接乐: 30-second catch game — slide your pet left/right to catch food, dodge chili peppers and bombs, earn coins.
- Poke / rub / feed / play / sleep as before.
- 🚪 出门: take your pet out to the 公园 / 海边 / 雪地 for 45 seconds (costs 10 energy). Tap the emoji that pop up around the pet to collect them for coins; a rare 🎁 gives a free accessory. Tap 🏠 回家 any time to go back.
