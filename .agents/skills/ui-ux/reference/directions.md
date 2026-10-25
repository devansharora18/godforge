# Directions

Pick before you draw. One direction per deliverable unless you name a deliberate combination.

## Selector

| Direction | Choose when the content is… | Signature move | Forbids |
|---|---|---|---|
| `editorial` | a document, manifesto, essay, or archive | numbered ledger, dotted leaders, hairline rules | cards, pills, glows, stock photos |
| `swiss` | structured, comparative, sober, informational | visible grid, oversized numerals, flush-left type | centered hero, decorative serif, shadows |
| `brutalist` | built by builders, anti-marketing, raw | exposed borders, mono labels, unstyled links | rounded corners, gradients, soft shadows |
| `luxury` | expensive, sparse, craft, few words | full-bleed image, huge serif, vast margins | badges, discount energy, more than two colors |
| `technical` | an API, infra, a devtool, a spec | terminal output, data tables, ASCII, dark field | stock photography, hero illustration, emoji |
| `retro-print` | culture, food, events, indie, music | halftone, offset registration, stamps, condensed caps | glassmorphism, neon, frosted cards |
| `collage` | a studio, community, portfolio, zine | overlapping layers, rotation, mixed type | strict symmetry, a single grid, restraint as a goal |
| `soft-product` | a consumer app, onboarding, friendly utility | warm neutrals, rounded geometry, one illustration | all-caps mono, brutalist edges, dense tables |
| `cinematic` | media, hardware, film, a launch | full-viewport media, huge centered type, chrome removed | card grids above the fold, busy nav |
| `playful-geometric` | education, kids, creative tools, games | bright blocks, Bauhaus shapes, chunky type | muted palettes, thin serifs, corporate gradients |
| `apple` | native, calm, premium app feel | real surface, grouped rows, one fluid interaction | cards, gradients, mono labels, decorative depth |

Detail for each: `reference/direction-<name>.md`.

Files: `direction-editorial.md` · `direction-swiss.md` · `direction-brutalist.md` · `direction-luxury.md` · `direction-technical.md` · `direction-retro-print.md` · `direction-collage.md` · `direction-soft-product.md` · `direction-cinematic.md` · `direction-playful-geometric.md` · `direction-apple.md`

## How to choose

1. Read the content, not the category. "A landing page for a PDF tool" is a document about a tool — editorial or technical, not "SaaS".
2. Match the audience's expectation, then break exactly one of them.
3. If two fit, prefer the one that changes the *skeleton*. A new palette on the same layout is not a new direction.
4. If nothing fits, combine two and name the combination. A combination of three is a mood board, not a direction.

## Rotation rule

Do not use the same direction twice in a row for the same project, even if it worked.

- Check `docs/PROJECT.md` or the last screen you built.
- If the project's only history is "minimal", the next screen must earn minimal explicitly or use another direction.
- Repeating a direction is allowed only when the page is a sibling of the previous one (pricing beside landing). Say so in the contract.

## Contract

Write this in the response before the code, max seven lines:

```
Direction: editorial
Because:   the product is a specification, and readers compare versions
Skeleton:  ledger hero + asymmetric law spread + 3-step rite + full-bleed close
Type:      Instrument Serif / Instrument Sans / JetBrains Mono
Palette:   paper + ink + one ember accent, hairline rules
Signature: numbered skill ledger with dotted leaders and inline frontmatter
Not doing: cards, pill buttons, gradient atmosphere, fake logos
```

## Failure test

Show the screen to someone who has not seen the brief. Ask: "Describe this in three words." If the answer is "clean, modern, minimal" or any synonym, the direction failed — rebuild the skeleton, do not restyle it.
