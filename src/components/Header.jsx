import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import useScrollSpy from '../hooks/useScrollSpy'
import Icon from './Icon'
import Logo from './Logo'

const ids = navLinks.map((l) => l.id)

export default function Header() {
  const { active, scrolled } = useScrollSpy(ids)
  const [open, setOpen] = useState(false)

  // Menu mobile : bloque le scroll de la page et se ferme avec Échap
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Le scroll de la page est bloqué tant que le menu est ouvert : on le débloque
  // avant de rejoindre la section, sinon le saut d'ancre est ignoré sur mobile.
  const goTo = (e, id) => {
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    setOpen(false)
    document.body.classList.remove('menu-open')
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
    history.replaceState(null, '', `#${id}`)
  }

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1041px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header__inner">
        <a href="#accueil" className="header__logo" aria-label="OUSMANE.DEV — retour à l’accueil" onClick={(e) => goTo(e, 'accueil')}>
          <Logo />
        </a>

        <nav id="main-nav" className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            {navLinks.map((link, i) => (
              <li key={link.id} style={{ '--i': i }}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link${active === link.id ? ' is-active' : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={(e) => goTo(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline nav__cv-mobile" href={profile.cvUrl} download={profile.cvFileName}>
            <Icon name="download" size={18} /> Télécharger mon CV
          </a>
        </nav>

        <a className="btn btn--outline header__cv" href={profile.cvUrl} download={profile.cvFileName}>
          Télécharger mon CV
        </a>

        <button
          type="button"
          className="header__burger"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
      <div className="header__backdrop" aria-hidden="true" onClick={() => setOpen(false)} />
    </header>
  )
}
