// ─────────────────────────────────────────────────────────────────────────────
// PROJETS — à compléter avec vos vraies réalisations.
//
// Pour ajouter un projet réel :
//   1. déposez une image dans /public/images/projets/ (ex. mon-projet.webp, ratio 4:3)
//   2. ajoutez un objet ci-dessous avec placeholder: false
//
// {
//   id: 'mon-projet',
//   category: 'web',                       // 'web' | 'si' | 'app' (voir projectCategories)
//   title: 'Nom du projet',
//   description: 'Ce que fait le projet, pour qui, et votre rôle.',
//   technologies: ['React', 'PHP', 'SQL Server'],
//   image: './images/projets/mon-projet.webp',
//   link: 'https://…',                     // facultatif : URL publique ou dépôt GitHub
//   placeholder: false,
// }
//
// Les entrées « placeholder: true » sont des emplacements PROVISOIRES, clairement
// signalés comme tels sur le site. Supprimez-les dès que vos projets sont ajoutés.
// ─────────────────────────────────────────────────────────────────────────────

export const projectCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Développement web' },
  { id: 'si', label: 'Systèmes d’information' },
  { id: 'app', label: 'Applications' },
]

export const projects = [
  {
    id: 'ecommerce-maillots',
    category: 'web',
    title: 'Site e-commerce — maillots et accessoires de football',
    description: 'Conception et mise en place d’un site de vente en ligne de maillots de football et d’accessoires de foot.',
    technologies: ['E-commerce'],
    art: 'sunset',
    placeholder: false,
  },
  {
    id: 'agirh-sms-ci',
    category: 'si',
    title: 'AGIRH — application web SIRH',
    description:
      'Mise en place de l’application web AGIRH au sein de SMS CI, en collaboration avec le groupe Inetum. Rôle : chef de projet (décembre 2024).',
    technologies: ['SIRH', 'Gestion de projet', 'Inetum'],
    art: 'ocean',
    placeholder: false,
  },
  {
    id: 'papsone-photographie',
    category: 'app',
    title: 'Papsone Photographie — réservation de shootings',
    description:
      'Application web développée pour un photographe particulier, permettant de gérer les réservations de shootings photo.',
    technologies: ['Application web', 'Réservations'],
    art: 'peach',
    placeholder: false,
  },
]
