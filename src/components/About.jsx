import { aboutHighlights, profile } from '../data/profile'
import Decor from './Decor'
import Icon from './Icon'

export default function About() {
  return (
    <section id="a-propos" className="section about" aria-labelledby="about-title">
      <Decor shape="stroke" className="about__stroke" />
      <div className="container about__grid">
        <div className="about__visual" data-reveal="left">
          <img
            className="about__photo"
            src="./images/about-photo.webp"
            alt="Ousmane Mohamed ALHOUSSEINI dans les locaux de SMS CI"
            width="820"
            height="941"
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <span className="kicker" data-reveal>
            À propos de moi
          </span>
          <h2 id="about-title" data-reveal>
            Entre développement web et systèmes d’information
          </h2>
          <p data-reveal>
            Titulaire d’un Master en Développement d’Applications et Systèmes d’Information (ITA, Abidjan), j’ai
            construit mon parcours entre le développement web et mobile — étudié à Casablanca — et le terrain des
            systèmes d’information. Depuis mars 2025, j’occupe le poste d’Assistant à la Direction des Systèmes
            d’Information de SMS CI en CDI.
          </p>
          <p data-reveal>
            Mon quotidien associe la conception d’applications, l’administration des environnements informatiques —
            notamment Active Directory pour SMS CI et Azalai Hotels — et la conduite de projets, comme la mise en
            place d’une solution SIRH.
          </p>

          <ul className="about__list" data-reveal>
            {aboutHighlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={16} />
                {h}
              </li>
            ))}
          </ul>

          <dl className="about__facts" data-reveal>
            <div>
              <dt>Localisation</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Langues</dt>
              <dd>{profile.languages.join(' · ')}</dd>
            </div>
            <div>
              <dt>Personnalité</dt>
              <dd>{profile.qualities.join(' · ')}</dd>
            </div>
          </dl>

          <div className="about__actions" data-reveal>
            <a href="#contact" className="btn btn--primary">
              Me contacter
            </a>
            <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn--outline">
              <Icon name="download" size={18} /> Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
