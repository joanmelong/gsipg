export const vieScolaireHero = {
  tag: 'Vie scolaire',
  title: 'Le quotidien de votre enfant à La Petite Gloria',
  subtitle:
    'Horaires, restauration, transports et inscriptions : toutes les informations pratiques pour organiser sereinement la scolarité de votre enfant à Yaoundé.',
  portrait: {
    src: '/images/vie-scolaire/children.png',
    alt: 'Enfants de La Petite Gloria',
  },
  navCards: [
    {
      id: 'horaires',
      title: 'Horaires & Rythme',
      description: 'Maternelle et primaire : plages horaires, récréations et pause déjeuner.',
      iconSrc: '/images/vie-scolaire/carrousel/clock.png',
    },
    {
      id: 'restauration',
      title: 'Restauration',
      description: 'Menus équilibrés et conditions d\'hygiène rigoureusement respectées.',
      iconSrc: '/images/vie-scolaire/carrousel/fast-food.png',
    },
    {
      id: 'transports',
      title: 'Transports',
      description: 'Car scolaire sécurisé avec tarifs adaptés selon le lieu de résidence.',
      iconSrc: '/images/vie-scolaire/carrousel/bus.png',
    },
    {
      id: 'inscriptions',
      title: 'Inscriptions',
      description: 'Calendrier, dossiers requis et renseignements à la direction.',
      iconSrc: '/images/vie-scolaire/carrousel/calendar.png',
    },
  ],
} as const;

export type VieScolaireTheme = 'white' | 'primary' | 'secondary' | 'green' | 'orange';

export const vieScolaireContentSections = [
  {
    id: 'horaires',
    theme: 'white' as VieScolaireTheme,
    title: 'Les Horaires & Le Rythme Scolaire',
    badges: [
      { label: 'Maternelle', value: '7h30 – 13h30' },
      { label: 'Primaire', value: '7h30 – 15h30' },
    ],
    note:
      'Des temps de récréation de 15 min sont prévus et la pause déjeuner dure 1h à partir de midi.',
    image: {
      src: '/images/home/vision-1.jpg',
      alt: 'Enfants en activité scolaire',
    },
  },
  {
    id: 'restauration',
    theme: 'primary' as VieScolaireTheme,
    title: 'Un service de restauration équilibré',
    description:
      'Pour les parents qui le souhaitent, un service de restauration est proposé. Les menus sont équilibrés et les conditions d\'hygiène sont scrupuleusement respectées.',
    note:
      'Les conditions d\'inscription sont renseignées directement à la vie scolaire par le responsable de la Restauration.',
    image: {
      src: '/images/home/curriculum-portrait.jpg',
      alt: 'Repas équilibré à la cantine scolaire',
    },
  },
  {
    id: 'transports',
    theme: 'green' as VieScolaireTheme,
    title: 'Des trajets scolaires en toute sérénité',
    description:
      'Un car de transport assure le déplacement des enfants qui ne peuvent pas être accompagnés par leurs parents. Il suffit d\'inscrire l\'enfant au service de transport.',
    note:
      'Les tarifs y sont renseignés à la direction et prennent en compte le lieu de résidence de l\'enfant (Yaoundé IV).',
    image: {
      src: '/images/home/hero-slide-2.jpg',
      alt: 'Transport scolaire sécurisé',
    },
  },
  {
    id: 'inscriptions',
    theme: 'orange' as VieScolaireTheme,
    title: 'Préparez la rentrée de votre enfant',
    highlight: 'Les inscriptions démarrent la deuxième semaine du mois de juillet.',
    description:
      'Tous les renseignements se font à la direction de l\'école. Les frais prennent en compte les frais d\'inscription et les frais de scolarité.',
    bonus: 'Une tenue scolaire est offerte pour chaque enfant à son inscription.',
    image: {
      src: '/images/home/hero-slide-1.jpg',
      alt: 'Élève prêt pour la rentrée',
    },
  },
] as const;

/** @deprecated Utiliser vieScolaireContentSections */
export const vieScolaireSections = vieScolaireContentSections.map((section) => ({
  id: section.id,
  title: section.title,
  items: [
    {
      subtitle: section.title,
      content: section.description ?? section.highlight ?? '',
    },
  ],
}));
