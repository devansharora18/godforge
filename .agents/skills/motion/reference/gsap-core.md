# GSAP core

## Setup

```ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)   // once, at module scope
```

## Scope and cleanup

Always build inside a context so a remount cannot leave orphan tweens.

```ts
const ctx = gsap.context((self) => {
  gsap.from('[data-hero]', { y: 18, opacity: 0, duration: 0.7, stagger: 0.06 })
}, rootEl)

return () => ctx.revert()
```

React: `useGSAP(() => { ... }, { scope: ref })` from `@gsap/react` handles StrictMode double-invocation. Without it, write the effect so it is idempotent.

## Timelines

```ts
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } })
tl.from('[data-eyebrow]', { opacity: 0 })
  .from('[data-title]', { yPercent: 100, stagger: 0.08 }, '-=0.3')
  .from('[data-cta]', { y: 8, opacity: 0 }, '-=0.4')
```

- Position parameters (`'-=0.3'`, `'<'`, `'>'`, labels) beat chained delays.
- Use `fromTo` when the start state matters; `from` uses the current computed state.
- `immediateRender: false` when a `from` would otherwise hide content that a trigger may never fire.

## Easing

- Entrances: `power2.out`, `power3.out`, `expo.out`.
- UI state: `power1.out` or a spring; 150–250ms.
- Overshoot: `back.out(1.4)` once, never on text.
- `linear` only inside a scrubbed timeline, where the scrollbar is the easing.

## Stagger

```ts
{ stagger: { each: 0.06, from: 'start' } }
{ stagger: { amount: 0.4 } }   // total, regardless of count
```

`amount` is safer for lists whose length changes.

## Set, don't animate, initial state

```ts
gsap.set('[data-hidden]', { autoAlpha: 0 })
```

Prefer CSS for the first paint and GSAP for the transition, so content exists with JS disabled.

## Determinism

- Keep one timeline per page for the entrance; expose it for screenshots: `tl.pause(); tl.seek(0.6)`.
- Avoid `Math.random()`; if you need variation, seed it.
- Kill tweens before re-running an animation on the same element (`gsap.killTweensOf(el)`).

## Common bugs

| Symptom | Cause |
|---|---|
| Flash of unstyled content | `from` applied after paint — set the initial state in CSS |
| Animation runs twice | StrictMode mount, or no context cleanup |
| Element stays invisible | `from` with a trigger that never fires; use `immediateRender: false` or `once` |
| Jank on mobile | animating a layout property or a blur filter |
