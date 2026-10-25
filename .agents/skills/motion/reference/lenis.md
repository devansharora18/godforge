# Lenis

Smooth scroll is optional. It is justified on long marketing pages with scroll-linked motion; it is not a default for app UI or dashboards.

## Setup with GSAP

```ts
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

lenis.on('scroll', ScrollTrigger.update)
const raf = (time: number) => lenis.raf(time * 1000)
gsap.ticker.add(raf)
gsap.ticker.lagSmoothing(0)

return () => {
  gsap.ticker.remove(raf)
  lenis.destroy()
}
```

`ScrollTrigger.update` must run on every Lenis scroll or triggers drift. Do not create a second RAF loop.

## Anchors

```ts
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href')!)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -80 })  // sticky header height
  })
})
```

Also set `scroll-padding-top` so native anchor jumps and focus scrolling clear the header.

## Locking

- Modal or menu open: `lenis.stop()`, then `lenis.start()` on close. Restore focus to the trigger.
- Inner scroll areas: `data-lenis-prevent` on the element.
- Never leave the page stopped after a route change or an error.

## Reduced motion

```ts
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const lenis = reduced ? null : new Lenis(...)
```

Do not instantiate Lenis when reduced motion is requested. Native scrolling remains, and ScrollTrigger works without Lenis.

## Problems it causes

| Symptom | Fix |
|---|---|
| Anchor lands under the header | `offset` + `scroll-padding-top` |
| ScrollTrigger fires late/early | wire `lenis.on('scroll', ScrollTrigger.update)` |
| Two scroll speeds after remount | destroy the old instance and remove the ticker callback |
| Page cannot scroll on mobile | `smoothTouch` should stay off by default |
| Focused input scrolls under the fold | `lenis.scrollTo(el, { offset: -120 })` on focus, or disable on forms |

## When to skip it

Dashboards, editors, checkout, and anything with nested scroll. Native scroll is a feature.
