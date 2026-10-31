// Toutes les informations ci-dessous proviennent du CV d'Ousmane Mohamed ALHOUSSEINI.
// Modifier ce fichier suffit pour mettre à jour le contenu du site.

export const profile = {
  firstName: 'Ousmane Mohamed',
  fullName: 'Ousmane Mohamed ALHOUSSEINI',
  brand: 'OUSMANE',
  brandSuffix: '.DEV',
  title: 'Développeur Web | Responsable des Systèmes d’Information',
  location: 'Marcory, Abidjan, Côte d’Ivoire',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marcory%2C+Abidjan%2C+C%C3%B4te+d%27Ivoire',
  phone: '+225 07 02 59 28 94',
  phoneHref: 'tel:+2250702592894',
  email: 'ousmaneag1997@gmail.com',
  cvUrl: './cv/CV-Ousmane-Mohamed-Alhousseini.pdf',
  cvFileName: 'CV-Ousmane-Mohamed-Alhousseini.pdf',
  languages: ['Français', 'Anglais'],
  qualities: ['Sérieux', 'Créatif', 'Organisé'],
}

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

export const features = [
  {
    icon: 'code',
    tone: 'orange',
    title: 'Développement web',
    text: 'Création de sites web et d’applications, du langage côté serveur (PHP, Java, Python) à l’interface (HTML5, CSS3, JavaScript, React).',
  },
  {
    icon: 'server',
    tone: 'purple',
    title: 'Systèmes d’information',
    text: 'Administration Active Directory, assistance informatique et appui à la Direction des Systèmes d’Information.',
  },
  {
    icon: 'clipboard',
    tone: 'green',
    title: 'Gestion de projets',
    text: 'Chef de projet pour la mise en place d’une solution SIRH chez SMS CI (décembre 2024).',
  },
]

export const aboutHighlights = [
  'Développement d’applications',
  'Administration des systèmes informatiques',
  'Gestion des systèmes d’information',
  'Gestion de projets informatiques',
  'Assistance à la Direction des Systèmes d’Information',
  'Administration Active Directory',
  'Solutions SIRH',
]

export const skillGroups = [
  {
    id: 'programmation',
    icon: 'database',
    tone: 'orange',
    title: 'Programmation',
    text: 'Langages étudiés et pratiqués au cours de mon parcours.',
    items: [{ label: 'Java' }, { label: 'PHP' }, { label: 'SQL Server' }],
  },
  {
    id: 'web',
    icon: 'globe',
    tone: 'purple',
    title: 'Technologies web',
    text: 'Création de sites web et d’interfaces modernes.',
    items: [
      { label: 'HTML5', logo: 'html5' },
      { label: 'CSS3', logo: 'css3' },
      { label: 'JavaScript', logo: 'javascript' },
      { label: 'React', logo: 'react' },
    ],
  },
  {
    id: 'outils',
    icon: 'tool',
    tone: 'green',
    title: 'Outils',
    text: 'Environnements de développement et bureautique.',
    items: [{ label: 'Visual Studio Code', logo: 'vscode' }, { label: 'NetBeans' }, { label: 'Microsoft Office' }],
  },
  {
    id: 'si',
    icon: 'shield',
    tone: 'blue',
    title: 'Systèmes d’information',
    text: 'Administration et accompagnement des environnements informatiques.',
    items: [
      { label: 'Administration Active Directory' },
      { label: 'Assistance informatique' },
      { label: 'Gestion de projets' },
      { label: 'Solutions SIRH' },
      { label: 'Administration des systèmes d’information' },
    ],
  },
]

export const experiences = [
  {
    period: 'Depuis mars 2025',
    role: 'Assistant Direction Système d’Information',
    org: 'SMS CI',
    type: 'CDI',
    current: true,
  },
  {
    period: '2024 – 2026',
    role: 'Administration Active Directory',
    org: 'SMS CI et AZALAI HOTELS',
    type: 'Administration',
  },
  {
    period: 'Décembre 2024',
    role: 'Chef de projet — mise en place d’une solution SIRH',
    org: 'SMS CI',
    type: 'Projet',
  },
  {
    period: 'Mars 2024 – mars 2025',
    role: 'Assistant Direction Système d’Information',
    org: 'SMS CI',
    type: 'CDD',
  },
  {
    period: 'Février – juillet 2023',
    role: 'Stage Assistant IT',
    org: 'AZALAI HOTELS ABIDJAN',
    type: 'Stage',
  },
  {
    period: 'Avril – septembre 2022',
    role: 'Stage Assistant IT',
    org: 'SALAM MANAGEMENT SERVICE',
    type: 'Stage',
  },
  {
    period: 'Janvier 2018',
    role: 'Présentation du projet de bases de données SQL',
    org: 'IFIAG VOCATIONAL SCHOOL — Casablanca, Maroc',
    type: 'Projet académique',
  },
]

export const education = [
  {
    period: '2022 – 2024',
    degree: 'Master Développement d’Applications et Systèmes d’Information',
    school: 'ITA — Marcory, Côte d’Ivoire',
  },
  {
    period: '2019 – 2020',
    degree: 'Master 1 Ingénierie Développement Web et Mobile',
    school: 'ANNE ISGA — Casablanca, Maroc',
  },
  {
    period: '2017 – 2019',
    degree: 'Licence professionnelle Développement et Conception d’Applications Web',
    school: 'IFIAG Vocational School — Casablanca, Maroc',
  },
  {
    period: '2016 – 2017',
    degree: 'Première année Sciences économiques',
    school: 'Faculté des Sciences économiques et juridiques — Mohammedia, Maroc',
  },
  {
    period: '2016',
    degree: 'Baccalauréat option économique',
    school: 'Lycée Classique — Bamako, Mali',
  },
]

export const certifications = [
  { period: 'Janvier 2019', title: 'CCNA 1', issuer: 'CISCO' },
  {
    period: '31 mars 2024',
    title: 'Formation complète développeur Front-End',
    issuer: 'UDEMY',
    details: 'Enzo Ustariz – Web School · 29,5 h',
    url: 'https://ude.my/UC-1e6c98d6-ae90-4333-a028-1471394fe86b',
    tone: 'udemy',
  },
  {
    period: '29 mai 2024',
    title: 'Formation Git et GitHub : de Débutant à Confirmé',
    issuer: 'UDEMY',
    details: 'Arnaud Mercier · 3,5 h',
    url: 'https://ude.my/UC-e8595e38-be19-4b2e-915c-d5a690e4b3e7',
    tone: 'udemy',
  },
]
