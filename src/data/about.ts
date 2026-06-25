export const aboutHero = {
  title: 'Qui sommes-nous ?',
  subtitle:
    "Découvrez l'histoire, les valeurs et l'équipe dévouée derrière la réussite de vos enfants.",
  background: {
    src: '/images/about/about.jpg',
    alt: 'Bâtiment du Groupe Scolaire International La Petite Gloria à Yaoundé',
  },
} as const;

export const directorSection = {
  name: 'Dr. Aminata Bello',
  role: 'Directrice pédagogique',
  portrait: {
    src: '/images/about/directrice.png',
    alt: 'Portrait de Dr. Aminata Bello, directrice du GSIPG',
  },
  schoolDescription:
    "Fondé à Yaoundé (Messamendongo), le Groupe Scolaire International La Petite Gloria est né d'une vision audacieuse : offrir une éducation internationale d'excellence en sections francophone, anglophone et bilingue Fifty-Fifty, de la crèche au primaire.",
  welcomeQuote:
    "Chers parents, chers visiteurs, bienvenue au GSIPG — un lieu où chaque enfant est accueilli avec bienveillance, stimulé avec exigence et accompagné avec passion.",
  vision:
    "Ma vision est simple : permettre à chaque élève de révéler son potentiel grâce à un encadrement personnalisé, des méthodes innovantes et un environnement d'apprentissage joyeux, sécurisant et ouvert sur le monde.",
} as const;

export const teamSection = {
  badge: 'Personnel Qualifié',
  image: {
    src: '/images/gallery/IMG-20240516-WA0004-600x300.jpg',
    alt: 'Équipe pédagogique et personnel du GSIPG en activité avec les élèves',
  },
  title: 'Notre équipe pédagogique',
  paragraphs: [
    "Derrière chaque réussite scolaire se trouve une équipe engagée : enseignants qualifiés, éducateurs attentifs et personnel administratif dévoué.",
    "Nous remercions chaleureusement l'ensemble de notre personnel pour son professionnalisme, sa disponibilité et son amour du métier. Leur engagement quotidien fait du GSIPG un établissement où l'on apprend, l'on grandit et l'on s'épanouit.",
  ],
} as const;

export const aboutContact = {
  badge: 'Contactez-nous',
  title: 'Contactez-nous et dites-nous comment nous pouvons vous aider.',
  phones: [
    { label: 'Ligne principale', href: 'tel:+237699918562', display: '(+237) 699 91 85 62' },
    { label: 'Ligne secondaire', href: 'tel:+237677242815', display: '(+237) 677 24 28 15' },
  ],
  email: {
    href: 'mailto:admin@education-lms.com',
    display: 'admin@education-lms.com',
    label: 'Adresse email',
    iconSrc: '/images/contact_us/mesage.png',
  },
  phoneLabel: 'Téléphone',
  phoneIconSrc: '/images/contact_us/call.png',
  officeLabel: 'Notre établissement',
  officeIconSrc: '/images/contact_us/pin.png',
  hours: [
    { days: 'Lundi – Vendredi', time: '8h à 17h' },
    { days: 'Samedi', time: '10h à 15h' },
  ],
  address: 'Messamendongo, Yaoundé IV, Cameroun',
  form: {
    firstNameLabel: 'Prénom',
    lastNameLabel: 'Nom',
    messageLabel: 'Message',
    messagePlaceholder: 'Écrivez votre message…',
    submitLabel: 'Envoyer',
  },
  mapsQuery: 'Messamendongo Yaoundé IV, Cameroun',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Messamendongo+Yaound%C3%A9+IV,+Cameroun',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Messamendongo+Yaound%C3%A9+IV,+Cameroun&hl=fr&z=15&output=embed',
} as const;

export const mission = {
  history: directorSection.schoolDescription,
  mission:
    "Notre mission est d'accompagner chaque enfant vers la réussite scolaire et l'épanouissement personnel, en combinant un enseignement rigoureux et des parcs d'attractions éducatifs uniques au Cameroun.",
} as const;

export const values = [
  {
    title: 'Excellence',
    description: 'Viser les plus hauts standards académiques et humains.',
  },
  {
    title: 'Innovation',
    description: "Oser de nouvelles méthodes d'apprentissage par l'expérience.",
  },
  {
    title: 'Bienveillance',
    description: 'Créer un climat de confiance où chaque enfant se sent valorisé.',
  },
  {
    title: 'Ouverture',
    description: 'Cultiver le bilinguisme et la curiosité du monde.',
  },
] as const;

export const team = [
  {
    name: directorSection.name,
    role: directorSection.role,
    image: directorSection.portrait.src,
    alt: directorSection.portrait.alt,
  },
  {
    name: 'Marc Ondoa',
    role: 'Coordinateur parcs éducatifs',
    image: '/images/team/team-2.svg',
    alt: 'Portrait de Marc Ondoa, coordinateur des parcs éducatifs',
  },
  {
    name: 'Claire Nguema',
    role: 'Responsable maternelle',
    image: '/images/team/team-3.svg',
    alt: 'Portrait de Claire Nguema, responsable du cycle maternelle',
  },
  {
    name: 'David Fotsing',
    role: 'Responsable primaire',
    image: '/images/team/team-4.svg',
    alt: 'Portrait de David Fotsing, responsable du cycle primaire',
  },
] as const;

export const certifications = [
  { name: 'Cambridge English', logo: '/images/certifications/cambridge.svg' },
  { name: 'UNESCO Associated Schools', logo: '/images/certifications/unesco.svg' },
  { name: "Ministère de l'Éducation (Cameroun)", logo: '/images/certifications/mineduc.svg' },
] as const;
