import { useEffect, useRef } from 'react'

// Curseur décoratif (point + anneau qui suit avec inertie), comme sur la référence.
// Activé uniquement avec une souris et si l'utilisateur n'a pas demandé de réduire les animations.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!ok) return

    document.documentElement.classList.add('has-cursor')
    const pos = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    let raf = 0

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    }
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      const hit = e.target.closest('a, button, input, textarea, label, [role="tab"]')
      ring.current.classList.toggle('is-hover', !!hit)
      dot.current.classList.toggle('is-hover', !!hit)
    }
    const leave = () => {
      ring.current.classList.add('is-hidden')
      dot.current.classList.add('is-hidden')
    }
    const enter = () => {
      ring.current.classList.remove('is-hidden')
      dot.current.classList.remove('is-hidden')
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
