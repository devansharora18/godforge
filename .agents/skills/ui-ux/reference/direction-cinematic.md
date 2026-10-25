# Direction — Cinematic

**Content fit:** film, music, hardware launches, games, immersive products with one hero asset.
**Not when:** the page must explain a workflow or compare plans above the fold.

## Skeleton

```
┌──────────────────────────────────────────┐
│ ███ full-viewport media, dark scrim ███  │
│                                          │
│            CENTERED STATEMENT            │
│            one action                    │
│                                          │
├──────────────────────────────────────────┤
│  scene 02: still │ scene 02: copy         │
├──────────────────────────────────────────┤
│  scene 03: full-bleed again              │
└──────────────────────────────────────────┘
```

Sections behave as scenes: full-bleed media, one line per scene, a single action. Chrome is minimal and monochrome.

## Type

- Display: wide-tracked caps (0.08em) or a large serif, 56–120px. One line, never three.
- Body: a small neutral sans, 14–15px, low contrast against the dark field (but still AA).
- Labels: 10px caps, 0.24em tracking, used for scene numbers.

## Color

- The media provides colour; the interface is black, bone, or a single extracted tone.
- Scrims are real gradients over media, not decorative blobs.
- One accent for interactive state only.

## Texture

Film grain over media (2–5%), letterboxing, scene numbering, a thin progress rule. No cards on top of the hero.

## Motion

The only direction where large motion is justified: one scroll-linked scene change, slow crossfades of 600–900ms, no pinning longer than one viewport. `prefers-reduced-motion` replaces media motion with stills.

## Signature

A real hero asset treated like a film frame, with type that respects it — not a screenshot floating on a gradient.

## Avoid

Card grids above the fold, multiple CTAs, busy navigation, autoplay audio, decorative particles, stock footage of "innovation".
