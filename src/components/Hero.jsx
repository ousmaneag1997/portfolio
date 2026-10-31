import { profile } from '../data/profile'
import { floatingTech, logos } from '../data/logos'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <img className="hero__wash hero__wash--tr" src="./images/watercolor-tr.webp" alt="" aria-hidden="true" />
      <img className="hero__wash hero__wash--bl" src="./images/watercolor-bl.webp" alt="" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__hello anim-up" style={{ '--d': '.15s' }}>
              Bonjour, je suis
            </span>
            <span className="hero__name anim-up" style={{ '--d': '.3s' }}>
              {profile.firstName}
            </span>
          </h1>
          <p className="hero__role anim-up" style={{ '--d': '.45s' }}>
            <span className="c-green">Développeur Web</span> &amp; Professionnel des{' '}
            <span className="c-purple">Systèmes d’Information</span>
          </p>
          <p className="hero__text anim-up" style={{ '--d': '.6s' }}>
            Passionné par les technologies numériques, le développement d’applications et l’administration des
            systèmes d’information, je conçois des solutions informatiques et contribue à l’amélioration des
            infrastructures et des processus numériques des organisations.
          </p>
          <div className="hero__actions anim-up" style={{ '--d': '.75s' }}>
            <a href="#a-propos" className="btn btn--primary">
              Découvrir mon profil
            </a>
            <ul className="hero__quick" aria-label="Contact rapide">
              <li>
                <a href={`mailto:${profile.email}`} aria-label={`Écrire à ${profile.email}`} title={profile.email}>
                  <Icon name="mail" size={17} />
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} aria-label={`Appeler le ${profile.phone}`} title={profile.phone}>
                  <Icon name="phone" size={17} />
                </a>
              </li>
              <li>
                <a href={profile.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${profile.location} — ouvrir dans Google Maps`} title={profile.location}>
                  <Icon name="pin" size={17} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait">
            <img className="hero__brush" src="./images/brush-gray.webp" alt="" aria-hidden="true" />
            <img
              className="hero__photo"
              src="./images/portrait-hero.webp"
              alt="Portrait d’Ousmane Mohamed ALHOUSSEINI en costume"
              width="760"
              height="890"
              fetchPriority="high"
            />
            <ul className="tech-cloud" aria-label="Technologies et outils d’intelligence artificielle utilisés">
              {floatingTech.map((t, i) => (
                <li key={t.id} className={`tech tech--${t.id}`} style={{ '--i': i }}>
                  <span className="tech__card" title={t.label}>
                    <img src={logos[t.id]} alt={t.label} width="30" height="30" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a href="#a-propos" className="hero__scroll" aria-label="Faire défiler vers la section À propos">
        <span className="hero__mouse" aria-hidden="true">
          <span />
        </span>
      </a>
    </section>
  )
}
