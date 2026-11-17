# Themes

Pick before you draw. **A theme is a material, nothing else** — paper, ink, faces, accent, surfaces, texture, motion, voice. It never says what the page contains or in what order. Choose the skeletons separately from `layout-skeletons.md`.

## Selector

| Theme | Choose when the content is… | Signature move | Forbids |
|---|---|---|---|
| `almanac` | reference data, research, a spec, a directory | pale printed sheet holding the one real table | cards, pills, shadows, capitals |
| `arcade` | a game, an indie studio, a launch night | display caps with a split RGB edge | bounce, a third signal, soft shadows |
| `atelier` | fashion, craft, fragrance, an interior | matted print on limewash with pressed type | rounded corners, gradients, stock interiors |
| `bloom` | hardware, a mechanism, a crafted object | two terracotta forms anchoring hero and close | saturated gradients, dark grounds |
| `blueprint` | infrastructure, a system drawing, hardware | dimension strings and double keylines | fills, shadows, colour photographs |
| `broadside` | an announcement, an event, a notice | 5pt rule above wood capitals | rounded corners, wide body copy, colour photos |
| `brutal` | builders, anti-marketing, a raw tool | 3px ruled cells with zero radius | soft shadows, rounded corners, a second accent |
| `carnival` | a festival, a lineup, a party | hard 4px offset shadow under every block | blurred shadows, a quiet hero |
| `cobalt` | a devtool, an API, an integration | one cut corner on every panel | fully rounded cards, gradients |
| `console` | instruments, telemetry, operations | amber for a person, blue for an instrument | bold display, white panels, a third colour |
| `coral` | billing, invoicing, a small business | letterpress edge on cotton stock | dark grounds, heavy shadows |
| `darkroom` | photography, film, a portfolio | prints darker than the ground | glow, colour photographs, gradients |
| `dose` | a routine, medication, daily care | translucent tinted panel over the paper | saturated colour, sharp corners |
| `dusk` | software at the end of a day | a real dusk landscape behind the hero | gradient skies, glow, illustrations |
| `editorial` | a document, a story, a publication | the 6px rule / hairline / text ladder | cards, pills, gradients |
| `formwork` | construction, hardware, an industrial product | cast edge with a 3px unblurred shadow | rounded corners, colour photographs |
| `furrow` | farming, land, field records | a survey map drawn from real data | soft shadows, saturated photography |
| `garden` | growing, seasons, food, a garden | old-style figures at display size | dark grounds, mono labels |
| `grid` | comparison, standards, a structured service | flat ultramarine fields, no strokes | strokes, shadows, a second red |
| `halftone` | food, events, a local shop | one ink printed solid and through a screen | soft shadows, thin display weights |
| `hedgerow` | plants, drink, a small producer | inverted surface, never a white card | white surfaces, glows, drop shadows |
| `hum` | a friendly app, a community, onboarding | torn paper edge with a pale fibre core | flat corners, gradient fills |
| `ink` | a utility, a spec, a focused tool | the teal that means exactly one thing | a second colour, texture, shadows |
| `kiln` | ceramics, heat, a fired material | a heat ramp that only marks temperature | glow, white surfaces, colour photos |
| `loom` | textiles, fit, a made object | cloth cropped so the weave is the image | white cards, a second serif |
| `lumen` | infrastructure, a considered system | lowercase serif head with one rose verb | uppercase heads, glow, gradients |
| `manifesto` | a position, a movement, a founding text | heavy ink bar over poster capitals | gradients, rounded corners, italic |
| `midnight` | scale, calm infrastructure, a platform | depth by lightness on one blue | glow, borders, white cards |
| `newsprint` | reporting, listings, a local paper | justified columns under column rules | centred hero, cards, colour photos |
| `overprint` | culture, opinion, a zine | two inks printing a third where they cross | tints, gradients, a third ink |
| `paste-up` | a gig, a notice, a raw launch | rotated copy-paper stuck on kraft | soft shadows, gradients |
| `piste` | sport, conditions, a season | one cobalt band carrying the key sentence | rounded corners, warm greys |
| `refract` | water, light, an outdoor place | live caustics under a clear panel | dark grounds, grey shadows |
| `ribbon` | sleep, routine, time of day | the hour drawn as light on a canvas | bright accents, hard shadows |
| `rim` | terrain, survey, an outdoor product | straight-down earth with mono measurements | rounded corners, shadow, colour grade |
| `riso` | indie, music, a local project | misregistration of exactly two inks | black, gradients, a third ink |
| `solstice` | hospitality, an occasion, a place | 2px cut-paper shadow on cream | cool greys, blurred shadows |
| `specimen` | type, a font, a technical spec | the blue metric guide behind the letter | fills, shadows, bold body text |
| `spore` | wellness, a ritual, a slow product | grained wells lit by one lamp | glow, white surfaces, cool greys |
| `sport` | results, timing, a league | the mono results column | rounded corners, colour photographs |
| `squeeze` | food, drink, a fresh product | depth by lightness on one green | white surfaces, shadows, rules |
| `sticker` | a playful launch, merch, a club | white die-cut edge on a solid shadow | soft shadows, gradients, a fourth colour |
| `studio` | a portfolio, a studio, an artist | crop marks on every piece | shadows, gradients, centred hero |
| `terminal` | software, a CLI, a developer tool | pictures printed in the page's own glyphs | glow, RGB split, scanlines over text |
| `terrazzo` | surfaces, materials, interiors | 3px hard offset under a ruled card | soft shadows, gradients, rounded cards |
| `ultraviolet` | a modern app, a subscription | one hue in two strengths | uppercase display, a second hue |
| `vantage` | scanning, survey, spatial data | a lit point cloud as the hero's light | glow, halos, stock photography |
| `vellum` | records, a recipe, an old institution | double rule and a fibre wash | colour photographs, rounded corners |
| `wayfind` | a directory, wayfinding, a venue | ink plates with amber figures | serif, rounded corners, shadows |
| `werkstatt` | parts, tools, a workshop | filled cells inside a ruled table | rounded corners, tints of the primaries |

Detail for each: `reference/themes/<name>.md`. Open exactly one.

## How to choose

1. Read the content, not the category. "A landing page for a PDF tool" is a document about a tool — `editorial` or `specimen`, not "SaaS".
2. Match the material to what the page must show: a photograph, a table of figures, a product surface, or type alone.
3. If two fit, prefer the one that changes the *surface*, not just the colour. A new accent on the same surfaces is not a new theme.
4. If nothing fits, combine two materials and name the combination in the contract. Three is a mood board, not a theme.

## Rotation rule

Do not use the same theme twice in a row for the same project, even if it worked.

- Check `docs/PROJECT.md` or the last screen you built.
- If the project's only history is "minimal", the next screen must earn it explicitly or use another theme.
- Repeating a theme is allowed only when the page is a sibling of the previous one (pricing beside landing). Say so in the contract.
- Mirror test: would a neighbouring prompt in this same category get this exact combination of theme, skeleton, and hero posture? If yes, change one decision and name which.
- Three waivers on one screen mean the project has a house style, not an exception — record it and stop waiving (see `audit.md`).

## Failure test

Show the screen to someone who has not seen the brief. Ask: "Describe this in three words." If the answer is "clean, modern, minimal" or any synonym, the material did not land — change the surfaces, not the accent.
