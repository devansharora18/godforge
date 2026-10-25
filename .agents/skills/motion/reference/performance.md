# Performance

Motion is smooth or it is a defect. Most jank comes from three decisions, all avoidable.

## Animate the compositor

- `transform`, `opacity`, and `filter` (with care) can run off the main thread.
- `width`, `height`, `top`, `left`, `margin`, `padding`, `border-radius` force layout every frame. Use a transform instead.
- `box-shadow` and large `blur()` values are expensive to paint; animate a pseudo-element's opacity instead.

## `will-change`

Use it on the element that is about to animate, then remove it. Leaving `will-change: transform` on dozens of nodes creates compositor layers and costs memory, especially on mobile.

```ts
el.style.willChange = 'transform'
// after the tween
gsap.set(el, { clearProps: 'willChange' })
```

## Read and write in phases

Interleaving `getBoundingClientRect()` with style writes forces synchronous layout. Batch all reads, then all writes. GSAP and Flip do this; hand-rolled loops often do not.

## Measure

1. Chrome Performance panel, 4× CPU throttle, mid-range mobile preset.
2. Record a scroll from top to footer. Look for long tasks > 50ms and layout shifts.
3. Check the Layers panel for an explosion of composited layers.
4. Run Lighthouse mobile; do not trust desktop scores.

## Budgets

| Metric | Target |
|---|---|
| Frame time | ≤ 16.7ms (60fps), ≤ 33ms acceptable on low-end |
| Long tasks | 0 over 50ms on the main thread |
| CLS | < 0.1 |
| Entrance JS | < 50ms before first paint of the hero |
| ScrollTrigger count | under ~20 active, kill offscreen |

## Images and media

- Preload the hero image, set width/height, use `fetchpriority="high"`.
- Lazy-load below the fold; never lazy-load the LCP image.
- Pause video when offscreen; do not autoplay with sound.
- Use poster frames so the first paint is not empty.

## Cleanup

- Kill triggers and timelines on unmount.
- Cancel RAF loops and Lenis.
- Remove event listeners for resize and `matchMedia`.

## Checks

- Page works with JS disabled (content visible, links functional).
- 360px, 4× CPU, no dropped frames during the entrance.
- No layout shift when fonts swap.
- Scrolling back up does not replay reveals (`once: true`).
