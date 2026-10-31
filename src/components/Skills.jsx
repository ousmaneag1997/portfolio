import { skillGroups } from '../data/profile'
import { logos } from '../data/logos'
import Decor from './Decor'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="competences" className="section skills" aria-labelledby="skills-title">
      <Decor shape="dots" className="skills__dots" />
      <div className="container">
        <SectionHeading
          id="skills-title"
          kicker="Compétences"
          title="Mes outils et domaines de compétences"
          text="Une double orientation : le développement d’applications web et l’administration des systèmes d’information."
        />
        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <article key={g.id} className={`skill-card tone-${g.tone}`} data-reveal data-reveal-delay={(i % 2) * 120}>
              <header className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={g.icon} size={24} />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </header>
              <ul className="chips">
                {g.items.map((it) => (
                  <li key={it.label} className="chip">
                    {it.logo && <img src={logos[it.logo]} alt="" width="18" height="18" loading="lazy" />}
                    {it.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
