# Reduced motion

A production requirement, not a nicety. The rule is **remove**, not shorten.

## Policy

- With `prefers-reduced-motion: reduce`, the page must be fully usable and fully visible.
- No parallax, no Lenis smoothing, no pinned scroll sequences, no auto-playing video with motion.
- Replace movement with an instant state or a short opacity crossfade (≤100ms).
- Content must never depend on an animation to appear.

## CSS

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This covers CSS transitions. It does not stop JS timelines.

## JS

```ts
const query = window.matchMedia('(prefers-reduced-motion: reduce)')
if (query.matches) return          // skip timelines entirely

const onChange = () => { /* re-init or tear down */ }
query.addEventListener('change', onChange)
```

- Skip creating the timeline; do not create it paused at the end, and do not `duration: 0`.
- React: run the check inside the effect, not during render (SSR has no `matchMedia`).
- Lenis: do not instantiate. ScrollTrigger still works on native scroll.

## Content safety

If the initial state is set by JS (`opacity: 0`), reduced motion must reset it. Prefer setting initial states in CSS under a `js-enabled` class, and never leave the page blank when the script fails.

```html
<html class="no-js">
<script>document.documentElement.classList.replace('no-js','js')</script>
```

## Test

```ts
const page = await browser.newPage({ reducedMotion: 'reduce' })
```

Assert: every section visible (`opacity === '1'`), no running timeline, `scroll-behavior` is `auto`, no Lenis instance, and the page still works with keyboard only.

Also test with JavaScript disabled. The static page is the floor of the experience.
