# natural-food-photographer-skill

An AI agent skill for `SKILL.md`-compatible agents such as Claude Code. It turns a dish name or a raw phone photo into a clean, appetizing, realistic food photo, and refuses the glossy AI-generated look.

Built for the photos that actually get used: GoFood, GrabFood, and ShopeeFood menu tiles, plus promo banners and WhatsApp status images.

## Install

Into the current project (`.claude/skills/natural-food-photographer`):

```bash
npx natural-food-photographer-skill init
```

Into your user directory (`~/.claude/skills/natural-food-photographer`), available in every project:

```bash
npx natural-food-photographer-skill init --global
```

## What it does

**One question first.** If you have not said where the image goes, it asks: menu tile, or promo banner. That choice sets the preset.

| Preset | Use | Rules |
| :--- | :--- | :--- |
| A | Online menu (GoFood, GrabFood, ShopeeFood) | Pure photo, zero text, no logos or promo badges. 1:1 or 4:3 with breathing room so the app crop does not cut the food. |
| B | Promo banner, spanduk, WhatsApp status, IG | Clean negative space for title and price, legible type, natural effects only (subtle steam, rich chili oil, faint warm glow). |

**Two modes.** Mode 1 upgrades an uploaded phone photo: the food's shape, portion, and ingredients stay exactly as they are, and only lighting, table surface, background clutter, and depth of field change. Mode 2 generates from scratch, and never passes a local dish name straight to the image model.

**Physical Translation Protocol.** Before generating, the dish is deconstructed into visible components, then into physical properties: loose irregular micro-textures instead of repeating clusters, real moisture per element (matte fried batter, moist steamed rice, translucent chili oil), natural micro-flaws like uneven char and stray crumbs.

**Context-adaptive plating.** The vessel, garnish, and table surface follow the dish's real serving context, street food or cafe. Garnish is limited to what is actually served with that dish. One hero dish, at most two supporting props.

**Optical constraints.** 35mm to 50mm at f/2.8, a 45-degree dining angle or a clean 90-degree flat-lay, soft diffused side-window daylight, neutral-warm temperature.

**Anti-slop guardrails.** Banned prompt words include `8k`, `ultra-detailed`, `hyper-realistic`, `HDR`, `cinematic`, `glowing`, `vibrant`, `mouth-watering`, `masterpiece`, `epic`, `bursting with flavor`. If you ask for them anyway, the skill strips the buzzwords and translates the intent into natural food cues. A menu-tile request with text gets the zero-text rule and one short note explaining why.

## Usage in Claude Code

```
"Use natural-food-photographer for a GoFood menu photo of nasi goreng"
"Use natural-food-photographer to turn this phone photo into a promo banner"
"Use natural-food-photographer and give me only the prompt for sate ayam"
```

## Repo layout

```
bin/cli.js                                installer
skills/natural-food-photographer/SKILL.md  the skill
```

## License

MIT
