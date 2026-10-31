import { features } from '../data/profile'
import Decor from './Decor'
import Icon from './Icon'

export default function Features() {
  return (
    <section className="features" aria-label="Domaines d’intervention">
      <div className="container features__grid">
        {features.map((f, i) => (
          <article key={f.title} className={`feature tone-${f.tone}`} data-reveal data-reveal-delay={i * 120}>
            <span className="feature__icon">
              <Icon name={f.icon} size={30} />
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
      <Decor shape="swirl" className="features__swirl" />
    </section>
  )
}
