import { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Empyrean register: a plaque does not move. One 300ms opacity fade on
 * the hero, no translation, and nothing below the fold ever waits for
 * a scroll trigger. Under prefers-reduced-motion nothing runs.
 */
export function usePageMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power1.out',
      })
    })

    return () => ctx.revert()
  }, [])
}
