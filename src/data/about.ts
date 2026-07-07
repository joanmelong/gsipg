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
  name: 'Mme Kamgain Filomette',
  role: 'Directrice pédagogique',
  portrait: {
    src: '/images/about/directrice.png',
    alt: 'Portrait de Mme Kamgain Filomette, directrice du GSIPG',
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
    src: '/images/gallery/staff-ecole/IMG-20240516-WA0004-600x300.jpg',
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
    { label: 'Ligne secondaire', href: 'tel:+237670677002', display: '(+237) 670 67 70 02' },
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
    { days: 'Lundi – Vendredi', time: '7h à 16h' },
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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.5!2d11.5!3d3.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0000000001%3A0x1!2sMessamendongo%2C+Yaound%C3%A9+IV%2C+Cameroun!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm',
} as const;

export const mission = {
  history: directorSection.schoolDescription,
  mission:
    "Notre mission est d'accompagner chaque enfant vers la réussite scolaire et l'épanouissement personnel, en combinant un enseignement rigoureux et des méthodes pédagogiques innovantes.",
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
    role: 'Coordinateur activités périscolaires',
    image: '/images/team/team-2.svg',
    alt: 'Portrait de Marc Ondoa, coordinateur des activités périscolaires',
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
  { name: 'UNESCO Associated Schools', logo: '/images/certifications/unesco.svg' },
  { name: "Ministère de l'Éducation de base (MINEDUB)", logo: '/images/certifications/mineduc.svg' },
] as const;
