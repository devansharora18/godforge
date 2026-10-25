# Transitions

Page-level motion should answer "where did I go?", not "watch this".

## View Transitions API (preferred when supported)

```ts
const go = (url: string) => {
  if (!document.startViewTransition) { location.href = url; return }
  document.startViewTransition(async () => {
    const html = await fetch(url).then((r) => r.text())
    // swap the document body with the parsed response
  }).finished.finally(() => { /* focus management */ })
}
```

- Name shared elements: `view-transition-name: hero-image`. Names must be unique per page, or the transition is skipped.
- Duration 200–400ms, ease out. No transition on first load.
- Respect reduced motion with `@media (prefers-reduced-motion: reduce) { ::view-transition-group(*) { animation: none } }`.

## SPA route change

- React: `AnimatePresence` with a short exit, or `layoutId` for a shared element. Keep exit shorter than enter.
- Preserve scroll position or restore it deliberately. A transition that resets scroll loses the user's place.
- Move focus to the new `<h1>` or the main region; announce the route change.

## FLIP for layout changes

```ts
const first = el.getBoundingClientRect()
// re-render / reorder
const last = el.getBoundingClientRect()
gsap.fromTo(el,
  { x: first.left - last.left, y: first.top - last.top },
  { x: 0, y: 0, duration: 0.35, ease: 'power2.out' })
```

- Use FLIP for reorder, expand, and filter. Do not animate the DOM order itself.
- GSAP's `Flip` plugin automates the read/write cycle if available.

## Shared element without View Transitions

Two elements with the same visual identity: hide the destination, animate the source to its bounding box, then swap and show the destination. Clean up both states if interrupted.

## Rules

- One transition style across the app. A different animation per route is indecision.
- Never block navigation on the animation; start the route immediately.
- Exit 120–200ms, enter 250–400ms.
- No transition on back/forward if it hides where the user came from.
- Always test with keyboard navigation and screen-reader focus, and with reduced motion enabled.
