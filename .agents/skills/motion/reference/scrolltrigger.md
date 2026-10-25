# ScrollTrigger

## Basics

```ts
gsap.from(el, {
  y: 24,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: el,
    start: 'top 88%',   // element top hits 88% of viewport
    once: true,         // reveals should not replay
  },
})
```

- `trigger` is the element that defines the position; the animation target can be different.
- `start` / `end` accept `'top bottom'`, `'center center'`, `'+=400'`, or a function returning a value.
- Use `once: true` for reveals. Leave it off only for scrubbed sequences.

## Pinning

```ts
ScrollTrigger.create({
  trigger: section,
  start: 'top top',
  end: '+=100vh',
  pin: true,
  anticipatePin: 1,
  scrub: 0.5,
  invalidateOnRefresh: true,
})
```

- Pin the section, never `body`.
- One pinned scene per page, and only when the direction is `cinematic`.
- Mobile address-bar resize breaks `100vh`; use `dvh` and `invalidateOnRefresh`.
- Always provide a non-pinned layout under `prefers-reduced-motion` and below `md` if pinning causes overflow.

## Scrubbed sequences

- `scrub: true` locks to the scrollbar; `scrub: 0.5` adds smoothing.
- Never scrub type reading — scrub position, scale, or image sequences.
- `invalidateOnRefresh: true` recomputes start/end from the current layout.

## Lists and batches

```ts
ScrollTrigger.batch('[data-row]', {
  start: 'top 90%',
  once: true,
  onEnter: (batch) => gsap.from(batch, { y: 16, opacity: 0, stagger: 0.06 }),
})
```

Prefer one trigger per section over one per row when there are more than ~20 rows.

## Refresh

- Call `ScrollTrigger.refresh()` after fonts load and after images with unknown dimensions load.
- `ScrollTrigger.config({ ignoreMobileResize: true })` avoids re-layout on mobile chrome show/hide.
- A layout change without refresh leaves triggers at stale positions.

## Breakpoints

```ts
ScrollTrigger.matchMedia({
  '(min-width: 1024px)': () => { /* pin */ },
  '(max-width: 1023px)': () => { /* static */ },
})
```

Or guard in `useGSAP` / `gsap.matchMedia()` and revert on change.

## Cleanup

Inside `gsap.context`, triggers created in the callback are reverted automatically. Triggers created outside need:

```ts
ScrollTrigger.getAll().forEach((t) => t.kill())
```

## Checks

- Anchor links still land correctly (`scroll-padding-top`).
- Keyboard End/Home still work.
- Resizing from 1440 to 360 does not leave pinned gaps.
- Reduced motion: no pin, no scrub, content visible.
