import { experiences } from '../data/profile'
import Decor from './Decor'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experiences" className="section experience" aria-labelledby="exp-title">
      <Decor shape="spiral" className="experience__spiral" />
      <div className="container">
        <SectionHeading
          id="exp-title"
          kicker="Parcours professionnel"
          title="Mes expériences"
          text="De mes stages d’assistant IT à la Direction des Systèmes d’Information de SMS CI."
        />
        <ol className="timeline">
          {experiences.map((e, i) => (
            <li key={`${e.period}-${e.role}`} className={`timeline__item${e.current ? ' is-current' : ''}`}>
              <span className="timeline__dot" aria-hidden="true">
                <Icon name="briefcase" size={16} />
              </span>
              <article className="timeline__card" data-reveal={i % 2 ? 'right' : 'left'}>
                <div className="timeline__meta">
                  <span className="timeline__period">
                    <Icon name="clock" size={14} /> {e.period}
                  </span>
                  <span className={`tag tag--${e.type === 'CDI' ? 'orange' : e.type === 'Stage' ? 'green' : 'purple'}`}>
                    {e.type}
                  </span>
                </div>
                <h3>{e.role}</h3>
                <p>{e.org}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
