import { navLinks, profile } from '../data/profile'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#accueil" className="footer__logo" aria-label="Retour à l’accueil">
          <Logo />
        </a>
        <nav aria-label="Navigation de bas de page">
          <ul className="footer__nav">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#accueil" className="footer__top" aria-label="Remonter en haut de la page">
          <Icon name="arrowUp" size={18} />
        </a>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.fullName} — {profile.title}
        </p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
      </div>
    </footer>
  )
}
