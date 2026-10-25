# Direction — Retro print

**Content fit:** events, food, music, culture, festivals, indie products, anything with a date or a place.
**Not when:** the product is a financial or security tool where novelty reduces trust.

## Skeleton

```
┌──────────────────────────────────────────┐
│ ░░ halftone poster ░░   ░░ offset ink ░░ │
│                                          │
│   CONDENSED CAPS HEADLINE                │
│   ──────────────────────────             │
│   ticket stub: date / place / price      │
├──────────────────────────────────────────┤
│  poster    poster    poster              │
└──────────────────────────────────────────┘
```

Sections: poster hero → ticket or stamp detail → stacked poster grid → schedule → colophon.

## Type

- Display: condensed heavy — Anton, Archivo Narrow, Bebas, or a wood-type revival. Tight leading, caps.
- Body: a workhorse serif (Newsreader, Source Serif) or a plain grotesk at 15px.
- Mix widths deliberately: one condensed, one normal. Never both condensed.

## Color

- Two or three spot inks on uncoated stock: mustard, oxblood, teal, cream. Registration is slightly off on purpose (1–2px offset shadow).
- Black is ink-black, not pure `#000`. Paper is warm.

## Texture

Halftone dots, grain, ink bleed at edges, perforation rules, rubber-stamp marks, photocopied type. Texture must be generated (SVG/CSS), not a stock texture pack.

## Motion

Print does not move. Use a 300ms fade and a 2px settle on load, then stop. Hover can shift the registration offset by 1px.

## Signature

A ticket, stamp, or programme grid that carries real information — date, place, edition number — not decoration.

## Avoid

Glassmorphism, neon, perfect symmetry, corporate gradients, thin hairline serifs, emoji.
