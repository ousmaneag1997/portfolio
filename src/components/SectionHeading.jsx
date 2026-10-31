export default function SectionHeading({ kicker, title, text, id, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      <span className="kicker">{kicker}</span>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
