import { certifications, education } from '../data/profile'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="formation" className="section education" aria-labelledby="edu-title">
      <div className="container">
        <SectionHeading
          id="edu-title"
          kicker="Formation & certifications"
          title="Mon parcours académique"
          text="Une formation en développement d’applications et systèmes d’information, entre le Maroc et la Côte d’Ivoire."
        />
        <div className="education__grid">
          <ol className="edu-list">
            {education.map((e, i) => (
              <li key={e.degree} className="edu-card" data-reveal data-reveal-delay={i * 80}>
                <span className="edu-card__icon" aria-hidden="true">
                  <Icon name="graduation" size={22} />
                </span>
                <div>
                  <span className="edu-card__period">{e.period}</span>
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="cert" aria-label="Certifications" data-reveal="right">
            <h3 className="cert__title">Certifications</h3>
            {certifications.map((c) => (
              <div key={c.title} className={`cert__card${c.tone ? ` cert__card--${c.tone}` : ''}`}>
                <span className="cert__icon" aria-hidden="true">
                  <Icon name="award" size={30} />
                </span>
                <strong>{c.title}</strong>
                <span>{c.issuer}</span>
                {c.details && <small className="cert__details">{c.details}</small>}
                <span className="cert__date">{c.period}</span>
                {c.url && (
                  <a className="cert__link" href={c.url} target="_blank" rel="noopener noreferrer">
                    Vérifier le certificat <Icon name="external" size={14} />
                  </a>
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
