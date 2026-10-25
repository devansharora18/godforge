# Color

The convergence tells are specific: purple-to-blue gradients, warm-cream "editorial" by default, near-black plus a neon accent, and one saturated blue nowhere near the subject.

## Commitment tier — choose before swatches

- **Restrained** — tinted neutrals plus one accent on ≤10% of the surface. Product UI.
- **Committed** — one saturated hue carries 30–60% of the surface. Identity pages; the most underused tier.
- **Full palette** — three or four named roles used deliberately. Campaigns, data.
- **Drenched** — the surface is the colour. Launch pages, cinema scenes.

Write the tier in the direction contract. "Neutral plus accent" is not a decision until the tier is named.

## Build the palette

1. Take the hue from the subject: the material, the place, the print stock, the product itself. Not from a palette generator.
2. Tint neutrals toward that hue (chroma 0.005–0.015). A default warm gray is a tell.
3. Assign roles, never colors: `field`, `ink`, `muted`, `rule`, `accent`, `focus`, `success`, `warn`, `danger`.
4. Tokens as CSS variables. Components never hold hex.

## Contrast, measured

| Pair | Minimum |
|---|---|
| body text on field | 4.5:1 |
| large text, icons, borders that carry meaning | 3:1 |
| focus ring against its surroundings | 3:1 |
| placeholder text | 4.5:1 |
| disabled text | no minimum, but must remain legible |

Check the actual pairs. Colored text on colored ground should use a darker shade of the ground's own hue, or text color at reduced alpha — not gray.

## Accent discipline

- One accent. It marks the action, the active state, and the thing you want clicked.
- Accent on headings, icons, borders, badges, and links at once means no accent.
- Semantic state colors are separate from the brand accent. Do not use red as decoration.

## Bans and replacements

| Ban | Replace with |
|---|---|
| purple→blue gradient on white | one hue, no gradient, or a real material |
| warm cream chosen "because editorial" | a hue from the scene, or plain white |
| pure `#000` with a saturated accent | near-black (L ≈ 0.05–0.1) and a re-tuned accent |
| gray text on a colored panel | darker shade of that panel's hue |
| gradient text | weight, size, or a single committed color |
| neon glow as depth | a real shadow, or nothing |
| three gradients on one page | none |

## Dark mode

- Not an inversion. Remap neutrals and re-check contrast; accents usually need desaturating.
- Shadows stop reading on dark: use hairlines or a lighter surface for elevation.
- Keep the same semantic tokens; do not fork components.

## Verify

Screenshot both themes at 360 and 1440. Grayscale the screenshot: if the hierarchy collapses, the palette was carrying structure it should not.
