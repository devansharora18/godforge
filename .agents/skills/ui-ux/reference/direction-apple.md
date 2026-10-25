# Direction — Apple restraint (native quiet)

**Content fit:** apps and product pages that should feel native, calm, and expensive without being decorative. "Quiet", "premium", "native", "it should feel like an app".
**Not when:** the page must be expressive, editorial, or culturally loud.

## Skeleton

```
┌──────────────────────────────────────────┐
│ small mark                     one action│
│                                          │
│ Large title, left aligned                │
│ One sentence of support                  │
│                                          │
│ ┌ real interface surface ──────────────┐ │
│ │ actual UI, not a mockup              │ │
│ └──────────────────────────────────────┘ │
├──────────────────────────────────────────┤
│  group title                             │
│  row            value                    │
│  row            value                    │
└──────────────────────────────────────────┘
```

Sections: title → real surface → grouped rows separated by space, not boxes → one closing action. Few borders; grouping comes from spacing.

## Type

- System-native face when the platform is Apple (SF Pro via `-apple-system`), otherwise a neutral grotesk with similar proportions.
- Large title 34–48px, semibold; body 17px/1.47; captions 13px.
- Hierarchy through weight and size. Colour is reserved for interaction and state.

## Color

- Neutral field (system background), one tint for action, semantic red for destructive.
- Materials only over scrolling content: nav bars and sheets, never static cards.
- Dark mode is a first-class remap, not an inversion; use elevated surfaces instead of shadows.

## Texture

Almost none. Real interface surfaces, hairline separators inside groups, generous negative space. Depth comes from layering and blur, not borders and cards.

## Motion

- Springs with velocity, interruptible, 0.35–0.5s for surfaces, 0.2s for state.
- Motion continues the gesture: a sheet follows the drag, a row expands from its own position.
- `prefers-reduced-motion` swaps to a crossfade.
- Nothing animates on scroll except a single, purposeful reveal.

## Signature

One fluid, physical interaction — a sheet that tracks the finger, a card that expands from its own bounds — plus typography confident enough to carry the page alone.

## Avoid

Card grids, gradient atmosphere, mono labels, emoji, hover-only affordances, more than one tint, decorative shadows, centered body copy.
