# Motion signatures

One row per register. The `ui-ux` theme file states the register in its Motion line; read that, take the pattern, write it in the contract. The failure this prevents is every project shipping the same 20px fade.

| Register | Themes | Entrance | Signature | Never |
|---|---|---|---|---|
| Still | brutal, grid, ink, newsprint, manifesto, specimen, riso, overprint, blueprint, vellum, piste, wayfind, werkstatt | none | state change only, instant | an entrance added to buy interest |
| Document | almanac, editorial, loom, atelier, studio, solstice | masked line rise, 600–800ms | display type revealed by a mask, not a fade | parallax, bounce, counters |
| Quiet | garden, bloom, spore, coral, dose, dusk, hedgerow, kiln, midnight, darkroom, terrazzo | opacity with a 2–8px rise, 240–400ms | one section head rising, once | loops, drift, scroll-linked type |
| Crisp | console, cobalt, sport, furrow, vantage, ultraviolet | colour or rule change, 120–200ms | state read as a change of ink, no movement | fades across large areas |
| Press | halftone, paste-up, sticker, hum, arcade, carnival, squeeze | 2px transform, 90–180ms | the control presses into its own shadow | soft easing, overshoot on text |
| Live | refract, ribbon, vantage, terminal, dusk | one continuous element, 2–30s, paused under reduced motion | caustics, a sweep, the hour, a blinking cursor | a second live element |

## Choosing

- The theme decides the *register*; the content decides *where* it is used.
- One signature repeated with intent beats five effects used once each.
- If the page has no hero asset and no state change, the correct amount of motion may be none. Still-register themes need none.

## Escalation ladder

1. **None** — static type and layout. Always acceptable.
2. **State** — hover, focus, press. 120–200ms.
3. **Entrance** — one sequence on load. 500–800ms.
4. **Reveal** — section heads only, once.
5. **Scroll-linked** — one section, scrubbed, with a reduced-motion fallback.
6. **Pinned scene** — maximum one per page, and only in the Live register (`dusk`, `darkroom`).

Stop at the lowest rung that serves the theme. Most pages stop at 3.

## Contract line

```
Motion: <signature> — <duration> — <ease> — reduced-motion: <what replaces it>
```

Example: `Motion: masked line rise — 650ms — power2.out — reduced-motion: static type`.
