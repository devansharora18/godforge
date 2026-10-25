# Layout skeletons

Name one per section. Two adjacent sections may not share a skeleton. The centered hero is banned as a default — it is allowed only in `cinematic` and `soft-product`, and only with a real asset, never a gradient.

## 1. Asymmetric split
```
┌───────────────────┬──────────────┐
│ headline 7 cols   │ artifact 5   │
│ body, CTA         │ terminal/img │
└───────────────────┴──────────────┘
```
Use for: a product with one demonstrable artifact. Vary the ratio (5/7, 7/5) per project.

## 2. Oversized type
```
┌──────────────────────────────────┐
│  A headline that fills            │
│  the viewport width               │
│  ─────────────────────            │
│  small body + CTA in one corner   │
└──────────────────────────────────┘
```
Use when the product is one sentence. Type is the image.

## 3. Ledger / index
```
01  entry name ...................... meta
02  entry name ...................... meta
03  entry name ...................... meta
```
Use for lists, skills, features, pricing tiers, changelog. Rows expand instead of cards.

## 4. Full-bleed band
```
██████████████████████████████████████
█  one line of type, no container    █
██████████████████████████████████████
```
Use to interrupt rhythm between two contained sections. One per page.

## 5. Diptych
```
┌─────────────┬─────────────┐
│ image/text  │ text/image  │
└─────────────┴─────────────┘
```
Use for before/after, problem/solution, two audiences. Equal weight is the point.

## 6. Editorial columns
```
┌────────────┬──────────────────────┐
│ margin     │  body 60-75ch        │
│ note, no.  │  pull quote breaks   │
└────────────┴──────────────────────┘
```
Use for narrative, docs, long-form marketing. Margin carries numbers and asides.

## 7. Poster stack
```
┌───────────┐
│  poster   │
└───────────┘
   ┌───────────┐
   │  poster   │  offset, overlapped
   └───────────┘
```
Use for galleries, case studies, events. Rotation ≤ 3°, never random.

## 8. Console / table
```
┌─ header ─────────────────────────┐
│ row │ row │ row │ row │ status   │
│ row │ row │ row │ row │ status   │
└──────────────────────────────────┘
```
Use for data products, devtools, admin. The table is the hero.

## 9. Split-screen scroll
```
┌────────────┬─────────────┐
│ sticky     │ scrolling    │
│ visual     │ copy blocks  │
└────────────┴─────────────┘
```
Use for a sequence of benefits tied to one artifact. Left side must stay meaningful while it sticks.

## 10. Horizontal band sequence
```
[ 01 ] → [ 02 ] → [ 03 ] → [ 04 ]
```
Use for process, timeline, pricing ladder. On mobile it stacks; never scroll-jack.

## 11. Bento (justified only)
```
┌──────┬──────┬──────┐
│ 2x    │ 1x   │ 1x   │
├──────┴──┬───┴──────┤
│ 1x      │ 2x        │
└─────────┴───────────┘
```
Use only when cells have genuinely different weights. If every cell is a feature, it is three cards in a costume.

## 12. Colophon close
```
──────────────────────────────
wordmark   links   license
──────────────────────────────
```
Use as the last section instead of a giant CTA card. The install command or primary action lives here.

## Rhythm rule

A page of four sections uses at least three different skeletons. If you catch yourself repeating `asymmetric split`, change the second one to a band, a ledger, or a diptych — not just the background colour.
