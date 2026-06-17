export const heroConfig = {
  title: "Offrez à votre enfant une éducation internationale d'excellence.",
  subtitle:
    'Crèche, maternelle et primaire à Yaoundé — sections francophone, anglophone et bilingue Fifty-Fifty.',
  ctaLabel: 'Renseignement',
  ctaHref: '/contact',
  slides: [
    {
      src: '/images/home/hero-slide-1.jpg',
      alt: 'Élève souriant dans la cour de récréation',
    },
    {
      src: '/images/home/hero-slide-2.jpg',
      alt: 'Enfants heureux en activité scolaire',
    },
    {
      src: '/images/home/hero-slide-3.jpg',
      alt: 'Élève concentré en classe',
    },
  ],
} as const;

export const trustBannerItems = [
  '3 Cursus au choix',
  'Section Bilingue "Fifty-Fifty"',
  'Intégration du Numérique',
  'Inscriptions en Juillet',
] as const;

export const curriculumSection = {
  tag: 'Nos cursus',
  title: 'Découvrez nos',
  titleHighlight: 'sections linguistiques',
  frameBg: '#EBF8FF',
} as const;

export const curricula = [
  {
    id: 'anglophone',
    title: 'Section Anglophone',
    subtitle: 'Maternelle à Class 6',
    flag: '🇬🇧',
    description:
      'Tous les cours se déroulent exclusivement en anglais, de la maternelle à la Class 6.',
  },
  {
    id: 'francophone',
    title: 'Section Francophone',
    subtitle: 'Maternelle au CM2',
    flag: '🇫🇷',
    description:
      'Tous les cours sont donnés en français, de la maternelle au CM2.',
  },
  {
    id: 'bilingue',
    title: 'Section Bilingue (Fifty-Fifty)',
    subtitle: 'Deux enseignants par classe',
    flag: '🇫🇷 🇬🇧',
    description:
      'Les cours sont donnés en français ET en anglais, de la maternelle au CM2. Chaque classe a deux enseignants.',
  },
] as const;

export const curriculumPortrait = {
  src: '/images/home/curriculum-portrait.jpg',
  alt: 'Enseignante accompagnant un élève en classe',
} as const;

export const visionContent = {
  tag: 'Notre vision',
  title: 'Notre approche : fondée sur la',
  titleHighlight: 'excellence',
  intro:
    "Notre équipe pédagogique se propose de former et d'accompagner vos enfants afin de les aider à atteindre les objectifs dans les différents apprentissages.",
  stats: [
    { value: '3', label: 'Cursus au choix' },
    { value: '98%', label: 'Taux de réussite' },
  ],
  pillars: [
    {
      title: 'Langues',
      description: "L'apprentissage des langues est mis en place dès la maternelle.",
    },
    {
      title: 'Innovation',
      description:
        "L'intégration progressive du numérique comme outil est effectué en primaire.",
    },
  ],
  photos: [
    {
      src: '/images/home/vision-1.jpg',
      alt: 'Enfants en activités ludiques en classe',
      bg: '#EBF8FF',
    },
    {
      src: '/images/home/vision-2.jpg',
      alt: 'Initiation au numérique en primaire',
      bg: '#71d7f7',
    },
  ],
  cta: {
    label: 'En savoir plus',
    href: '/qui-sommes-nous',
  },
} as const;

export const vieScolairePreview = {
  tag: 'Notre quotidien',
  title: 'Vie scolaire en un coup d\'œil',
  cards: [
    {
      title: 'Horaires & Rythme',
      summary:
        'Maternelle (7h30 – 13h30) | Primaire (7h30 – 15h30). Temps de récréation de 15 min et pause déjeuner d\'1h à midi.',
      href: '/vie-scolaire#horaires',
      icon: 'clock',
    },
    {
      title: 'Restauration',
      summary:
        'Service de restauration avec des menus équilibrés et des conditions d\'hygiène scrupuleusement respectées.',
      href: '/vie-scolaire#restauration',
      icon: 'utensils',
    },
    {
      title: 'Transports',
      summary:
        'Un car scolaire assure le transport des enfants sécurisé, avec des tarifs adaptés selon le lieu de résidence.',
      href: '/vie-scolaire#transports',
      icon: 'bus',
    },
  ],
} as const;

export const keyStats = [
  { value: 98, suffix: '%', label: 'Réussite entrée en 6ème', detail: 'Concours 2024-2025' },
  { value: 96, suffix: '%', label: 'Réussite au CEP', detail: 'Examens 2024-2025' },
  { value: 3, suffix: '', label: 'Sections au choix', detail: 'Francophone, Anglophone, Bilingue' },
  { value: 2, suffix: '', label: 'Enseignants par classe', detail: 'Section Bilingue Fifty-Fifty' },
] as const;

/** @deprecated Utiliser vieScolairePreview.cards */
export const vieScolaireShortcuts = vieScolairePreview.cards.map((card) => ({
  title: card.title,
  icon: '•',
  summary: card.summary,
  href: card.href,
}));

/** @deprecated Utiliser visionContent */
export const visionBlocks = [
  {
    title: visionContent.pillars[0].title,
    description: visionContent.pillars[0].description,
    image: visionContent.photos[0].src,
    imageAlt: visionContent.photos[0].alt,
  },
  {
    title: visionContent.pillars[1].title,
    description: visionContent.pillars[1].description,
    image: visionContent.photos[1].src,
    imageAlt: visionContent.photos[1].alt,
  },
] as const;
