import { useEffect } from 'react'

// Ajoute la classe .is-visible aux éléments [data-reveal] lorsqu'ils entrent dans l'écran.
// Un délai peut être fourni via data-reveal-delay (ms).
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const delay = el.dataset.revealDelay
          if (delay) el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-visible')
          io.unobserve(el)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
