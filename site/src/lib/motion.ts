import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * One entrance for the hero, then reveals on section heads only.
 * Skipped entirely under prefers-reduced-motion, which leaves the
 * content in its natural, fully visible state.
 */
export function usePageMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 18,
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    })

    document.fonts.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [])
}
