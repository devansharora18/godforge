# Theme — Terminal

**Material:** a near-black ground with a green cast in three lightness steps; pale phosphor ink; one bright phosphor signal with a dim wash of itself; every glyph Martian Mono, heads wide and text narrow; pictures printed in the page's own glyphs.
**Not when:** the subject is not software, or the reader needs a picture more than an interface.

## Tokens

```
paper      oklch(17% 0.030 150)     paper-2   oklch(22% 0.034 150)   paper-3  oklch(26% 0.036 150)
ink        oklch(90% 0.060 145)     muted     oklch(66% 0.045 145)
accent     phosphor 142 · chroma 0.20 · L 78   accent-ink  oklch(18% 0.04 142)
edges      radius 0 · depth none · rules 1px in the dim phosphor
```

## Type

- Display: Martian Mono 600 at 28–56px, 0.06em wider than body, sentence case.
- Body: Martian Mono 400 at 15px / 1.65, 58–72ch — narrow, one step smaller than the heads.
- Everything is mono: this is the one theme where mono is the material, so mono labels are legal here.
- Figures tabular by default.

## Surfaces

- Three lightness steps of the same green-black; no colour outside the phosphor family.
- The dim wash is the phosphor at 12%, used for wells and rules.
- Photographs are rendered as a grid of characters drawn from the page's own text, bright cells for light.
- No radius, no shadow, no gradient.

## Range

- A command block: the real command, its real output, in the dim wash.
- A log table: time, event, result — ruled in phosphor.
- A glyph-rendered image at full width, with the source line beneath it.

## Motion

A cursor blinks at 1s and stops under `prefers-reduced-motion`. Nothing else moves.

## Voice

Literal, terse, technical. Say the flag, the version, the exit code.

## Signature

Pictures printed in glyphs: a photograph rebuilt from characters taken from the page's own copy, dim for dark and bright for light.

## Avoid

Glow bloom, scanlines over text, RGB split, rounded corners, a second hue, emoji in output blocks.

## Pairs with

Console / table · Full-bleed band · Asymmetric split
