# Theme — Console

**Material:** graphite ground in three lightness steps; pale ink; hairline panels cut from one surface; Host Grotesk 500 for reading and Atkinson Hyperlegible Mono for what was measured; amber for a person, cool blue for an instrument.
**Not when:** the page is a landing page for a consumer product, or the audience reads in bright sun.

## Tokens

```
paper      oklch(24% 0.010 250)     paper-2   oklch(29% 0.010 250)   paper-3  oklch(20% 0.012 250)
ink        oklch(94% 0.006 250)     muted     oklch(72% 0.012 250)
person     amber 80 · chroma 0.13    instrument  cool 240 · chroma 0.10
edges      radius 4px · depth none · rules 1px hairline at 12% ink
```

## Type

- Display: Host Grotesk 500 at 32–64px, leading 1.08, sentence case. Never bolder than 500.
- Body: Host Grotesk 400 at 16px / 1.6, 54–64ch.
- Measurements: Atkinson Hyperlegible Mono 400 at 13px, tabular, for every figure.
- Labels: body face a step smaller, sentence case, untracked.

## Surfaces

- Panels are cut from the same graphite, one step lighter, 4px radius, 1px hairline.
- Amber is a person's input; blue is a measured value. Never decorative, never swapped.
- No shadows, no gradients; the ground has three steps and that is the depth.
- Photographs are desaturated to graphite, one per page at most.

## Range

- A live table: time, value, state — mono figures, hairline rows.
- A control panel: inputs on the left, results on the right, both in panels.
- A single reading at 64px with its unit in the body face.

## Motion

Minimal: 120ms colour change on state, 200ms opacity on panel load. Nothing translates.

## Voice

Operational, exact, unexcited. Say the value, the unit, the time.

## Signature

Two colours with two jobs: amber marks what a person did, blue marks what an instrument read — the page's whole legend in two hues.

## Avoid

Bold display, white panels, glow, gradients, a third colour, rounded pills, centred hero.

## Pairs with

Console / table · Asymmetric split · Full-bleed band
