---
name: motion
description: Use when adding animation to a marketing page or app UI — GSAP timelines, ScrollTrigger, Lenis, text reveals, page transitions, reduced-motion handling, performance, and cleanup. Ships recipes and a direction-to-motion map so every page does not fade up the same way. Not for choosing the aesthetic (use ui-ux).
---

# Motion

Motion explains a state change or a spatial relationship. Everything else is decoration with a frame budget.

## Router

| File | Open when |
|---|---|
| `reference/motion-signatures.md` | **Always**. Map the direction from the `ui-ux` contract to a motion language. |
| `reference/gsap-core.md` | Building any timeline, easing, or stagger. |
| `reference/scrolltrigger.md` | Scroll-linked, pinned, or batched reveals. |
| `reference/text.md` | Masked lines, split text, counters, terminal output. |
| `reference/transitions.md` | Route changes, shared elements, FLIP. |
| `reference/lenis.md` | Smooth scrolling, anchors, modal locking. |
| `reference/reduced-motion.md` | **Every production build.** Mandatory. |
| `reference/performance.md` | Before shipping, or when it stutters. |

## Decide the language before coding

1. Take the direction from the `ui-ux` contract (`editorial`, `technical`, `apple`, …).
2. Pick one signature from `reference/motion-signatures.md` and write it down:
   `Motion: masked line rise, 600ms, power2.out`.
3. One entrance, then reveals on section heads only. Nothing else animates.

A page with no stated motion language defaults to "everything fades up 20px" — which is the animation equivalent of the centered hero.

## Hard rules

- Animate `transform` and `opacity` only. Never `height`, `top`, `left`, `width`, `margin`.
- Entrances 0.5–0.9s, interactions 0.15–0.25s. Ease out; `linear` only for scrubbed progress.
- One storytelling motion per page. Two competing ones mean neither reads.
- `prefers-reduced-motion` removes motion entirely, and content is fully visible without JS.
- Clean up: `ctx.revert()`, kill ScrollTriggers, cancel Lenis, remove ticker callbacks.
- Never hijack scroll. Anchors, keyboard paging, and focus scrolling must keep working.
- Verify at 360px, at 4× CPU throttle, and with JavaScript disabled.

## Review

- Remove half the animation. If nothing is lost, remove the other half.
- Name the signature without looking at the code. If you cannot, there isn't one.
