# Motion signatures

One row per `ui-ux` direction. Pick one, write it in the contract, build it. The failure mode this prevents is every project shipping the same 20px fade.

| Direction | Motion language | Entrance | Signature | Never |
|---|---|---|---|---|
| editorial | typographic, unhurried | masked line rise, 600–800ms | a line of display type revealed by a mask, not a fade | parallax, bounce, counters |
| swiss | engineered, minimal | two-step rise, 350ms | content snapping to the grid, no drift | scroll-linked type, springs |
| brutalist | abrupt, mechanical | hard cut or 80ms step | instant state changes, no easing theatre | fades, scale, blur |
| luxury | slow, physical | image scale 1.04 → 1 over 900ms | one long crossfade on the hero image | multiple simultaneous moves |
| technical | functional | output lines appearing 40ms apart | real terminal output, line by line | decorative particles, glows |
| retro-print | registered, tactile | 250ms fade + 2px settle | ink registration offset on hover | smooth modern easing |
| collage | physical, layered | cards settle 6px, 60ms stagger | overlaps moving as one plane | infinite marquees of content |
| soft-product | springy, friendly | 400ms spring | a card or button that responds to press | double bounces |
| cinematic | scene-based | 700–900ms crossfade | full-bleed scene change tied to scroll | pinning more than one viewport |
| playful-geometric | bouncy, short | 300ms with one overshoot | shape morph or squash on press | bouncing text |
| apple | gesture-continuous | 350–500ms spring | a sheet or card that follows the drag and can be interrupted | linear easing, decorative motion |

## Choosing

- The direction decides the *character*; the content decides *where* it is used.
- One signature repeated with intent beats five effects used once each.
- If the page has no hero asset and no state change, the correct amount of motion may be none. Swiss and brutalist frequently need none.

## Escalation ladder

1. **None** — static type and layout. Always acceptable.
2. **State** — hover, focus, press. 120–200ms.
3. **Entrance** — one sequence on load. 500–800ms.
4. **Reveal** — section heads only, once.
5. **Scroll-linked** — one section, scrubbed, with a reduced-motion fallback.
6. **Pinned scene** — maximum one per page, and only for `cinematic`.

Stop at the lowest rung that serves the direction. Most pages stop at 3.

## Contract line

```
Motion: <signature> — <duration> — <ease> — reduced-motion: <what replaces it>
```

Example: `Motion: masked line rise — 650ms — power2.out — reduced-motion: static type`.
