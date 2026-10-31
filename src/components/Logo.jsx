import { profile } from '../data/profile'

export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path fill="currentColor" d="M16 1.5S4.5 12.6 4.5 20.2a11.5 11.5 0 0 0 23 0C27.5 12.6 16 1.5 16 1.5z" />
        <circle cx="16" cy="20.5" r="5.2" fill="none" stroke="#fff" strokeWidth="3" />
      </svg>
      <span className="logo__text">
        {profile.brand}
        <span>{profile.brandSuffix}</span>
      </span>
    </span>
  )
}
