// Éléments décoratifs « peints à la main » inspirés de la référence (spirales, traits, éclaboussures).
const shapes = {
  swirl: (
    <svg viewBox="0 0 120 140" fill="none">
      <path
        d="M70 12c-30 4-52 34-50 66 2 30 26 50 50 46 22-4 32-28 24-46-8-16-30-20-42-8-10 10-6 28 8 30 12 2 18-10 12-18"
        stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity=".75"
      />
    </svg>
  ),
  spiral: (
    <svg viewBox="0 0 140 140" fill="none">
      <path
        d="M70 70c0-6 8-8 12-4 6 6 2 18-8 20-14 3-24-10-20-24 5-18 26-24 42-14 20 12 20 42 2 56-22 18-56 8-66-18C22 56 40 22 72 18c36-4 58 26 52 58"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".6"
      />
    </svg>
  ),
  stroke: (
    <svg viewBox="0 0 220 60" fill="none">
      <path d="M8 46C60 30 120 18 210 10" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity=".28" />
      <path d="M20 50C70 36 130 26 200 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".35" />
    </svg>
  ),
  zigzag: (
    <svg viewBox="0 0 200 90" fill="none">
      <path d="M6 80c20-6 30-40 46-40s14 30 32 28 22-46 40-50 18 30 34 30 22-20 34-34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 160 160" fill="currentColor">
      {[
        [80, 80, 7], [104, 66, 4], [60, 104, 5], [118, 98, 3], [44, 70, 3], [92, 118, 4], [70, 50, 2.5],
        [130, 60, 2], [32, 112, 2.5], [112, 130, 2], [140, 120, 3], [50, 40, 2], [20, 84, 2], [96, 36, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} opacity={0.35 + (i % 4) * 0.15} />
      ))}
    </svg>
  ),
}

export default function Decor({ shape, className = '' }) {
  return (
    <span className={`decor decor--${shape} ${className}`} aria-hidden="true">
      {shapes[shape]}
    </span>
  )
}
