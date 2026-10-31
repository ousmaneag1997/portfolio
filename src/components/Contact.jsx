import { useState } from 'react'
import { profile } from '../data/profile'
import Decor from './Decor'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

// Envoi réel via Web3Forms si une clé est configurée (voir .env.example).
// Sinon, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli : rien n'est simulé.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const initial = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Veuillez indiquer votre nom.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Veuillez saisir une adresse e-mail valide.'
  if (v.subject.trim().length < 3) e.subject = 'Veuillez préciser le sujet de votre message.'
  if (v.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.'
  return e
}

const infos = [
  { icon: 'pin', tone: 'orange', label: 'Localisation', value: profile.location, href: profile.mapsUrl, external: true },
  { icon: 'mail', tone: 'green', label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', tone: 'purple', label: 'Téléphone', value: profile.phone, href: profile.phoneHref },
]

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name]) setErrors(validate(next))
  }
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errs).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus()
      return
    }
    if (e.currentTarget.botcheck?.checked) return // piège anti-robots

    if (!ACCESS_KEY) {
      const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
      setStatus({
        state: 'info',
        message: 'Votre messagerie a été ouverte avec le message pré-rempli : il ne vous reste qu’à l’envoyer.',
      })
      return
    }

    setStatus({ state: 'sending', message: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Portfolio OUSMANE.DEV',
          subject: `[Portfolio] ${values.subject.trim()}`,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) throw new Error(data.message || `Erreur ${res.status}`)
      setStatus({ state: 'success', message: 'Merci ! Votre message a bien été envoyé. Je vous répondrai rapidement.' })
      setValues(initial)
      setTouched({})
    } catch {
      setStatus({
        state: 'error',
        message: `L’envoi a échoué. Réessayez ou écrivez-moi directement à ${profile.email}.`,
      })
    }
  }

  const field = (name, label, props = {}) => {
    const Tag = props.as || 'input'
    const err = touched[name] && errors[name]
    return (
      <div className={`field${props.full ? ' field--full' : ''}${err ? ' has-error' : ''}`}>
        <label htmlFor={`f-${name}`}>{label}</label>
        <Tag
          id={`f-${name}`}
          name={name}
          type={props.type || (Tag === 'input' ? 'text' : undefined)}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={props.autoComplete}
          rows={props.rows}
          maxLength={props.maxLength}
          aria-invalid={err ? 'true' : 'false'}
          aria-describedby={err ? `e-${name}` : undefined}
          placeholder={props.placeholder}
          required
        />
        {err && (
          <span id={`e-${name}`} className="field__error">
            {err}
          </span>
        )}
      </div>
    )
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <Decor shape="spiral" className="contact__spiral" />
      <div className="container">
        <SectionHeading
          id="contact-title"
          kicker="Contact"
          title="Travaillons ensemble"
          text="Un projet, une opportunité ou une question ? Remplissez le formulaire ou contactez-moi directement."
        />
        <div className="contact__grid">
          <div className="contact__info" data-reveal="left">
            <p className="contact__name">{profile.fullName}</p>
            <ul>
              {infos.map((it) => (
                <li key={it.label}>
                  <a
                    className={`info tone-${it.tone}`}
                    href={it.href}
                    {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="info__icon">
                      <Icon name={it.icon} size={20} />
                    </span>
                    <span>
                      <strong>{it.label}</strong>
                      <span>{it.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> M’écrire directement
            </a>
          </div>

          <form className="contact__form" onSubmit={onSubmit} noValidate data-reveal="right">
            <div className="form-grid">
              {field('name', 'Nom', { autoComplete: 'name', placeholder: 'Votre nom', maxLength: 80 })}
              {field('email', 'E-mail', { type: 'email', autoComplete: 'email', placeholder: 'Votre e-mail', maxLength: 120 })}
              {field('subject', 'Sujet', { full: true, placeholder: 'Objet de votre message', maxLength: 120 })}
              {field('message', 'Message', { as: 'textarea', full: true, rows: 6, placeholder: 'Écrivez votre message ici', maxLength: 3000 })}
            </div>
            <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="contact__submit">
              <button type="submit" className="btn btn--primary" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Envoi en cours…' : ACCESS_KEY ? 'Envoyer le message' : 'Envoyer via ma messagerie'}
                <Icon name="send" size={17} />
              </button>
              {!ACCESS_KEY && (
                <small>Le bouton ouvre votre application de messagerie avec le message pré-rempli.</small>
              )}
            </div>
            <p className={`form-status form-status--${status.state}`} role="status" aria-live="polite">
              {status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
