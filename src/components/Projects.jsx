import { useState } from 'react'
import { projectCategories, projects } from '../data/projects'
import Decor from './Decor'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  // les réalisations réelles s'affichent avant les emplacements provisoires
  const ordered = [...projects].sort((a, b) => Number(!!a.placeholder) - Number(!!b.placeholder))
  const visible = filter === 'all' ? ordered : ordered.filter((p) => p.category === filter)
  const hasPlaceholders = projects.some((p) => p.placeholder)

  return (
    <section id="projets" className="section projects" aria-labelledby="projects-title">
      <Decor shape="zigzag" className="projects__zigzag" />
      <div className="container">
        <SectionHeading
          id="projects-title"
          kicker="Projets"
          title="Mes réalisations"
          text="Une sélection de projets en développement web, applications et systèmes d’information."
        />

        {hasPlaceholders && (
          <p className="projects__notice" role="note" data-reveal>
            <Icon name="clock" size={16} /> Galerie en cours de constitution : les cartes marquées « Contenu
            provisoire » sont des emplacements réservés à mes prochains projets.
          </p>
        )}

        <div className="filters" role="group" aria-label="Filtrer les projets" data-reveal>
          {projectCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`filters__btn${filter === c.id ? ' is-active' : ''}`}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="projects__grid">
          {visible.map((p) => (
            <li key={p.id} className={`project${p.placeholder ? ' is-placeholder' : ''}`}>
              <div className="project__media">
                {p.image ? (
                  <img src={p.image} alt={`Aperçu du projet ${p.title}`} loading="lazy" />
                ) : (
                  <div className={`project__art art--${p.art}`} aria-hidden="true" />
                )}
                {p.placeholder && <span className="project__flag">Contenu provisoire</span>}
              </div>
              <div className="project__body">
                <span className="project__cat">{projectCategories.find((c) => c.id === p.category)?.label}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.technologies.length > 0 && (
                  <ul className="chips chips--sm" aria-label="Technologies utilisées">
                    {p.technologies.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {p.link ? (
                  <a className="btn btn--sm btn--primary" href={p.link} target="_blank" rel="noopener noreferrer">
                    Voir le projet <Icon name="external" size={15} />
                  </a>
                ) : (
                  p.placeholder && (
                    <button type="button" className="btn btn--sm btn--ghost" disabled>
                      Bientôt disponible
                    </button>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
        {visible.length === 0 && <p className="projects__empty">Aucun projet dans cette catégorie pour le moment.</p>}
      </div>
    </section>
  )
}
