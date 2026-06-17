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

export const vieScolaireSections = [
  {
    id: 'horaires',
    title: 'Horaires',
    items: [
      {
        subtitle: 'Maternelle',
        content: '7h30 – 13h30',
      },
      {
        subtitle: 'Primaire',
        content: '7h30 – 15h30',
      },
    ],
  },
  {
    id: 'restauration',
    title: 'Restauration',
    items: [
      {
        subtitle: 'Cantine scolaire',
        content:
          'Service disponible, menus équilibrés et hygiène scrupuleuse. Options végétariennes et régimes spéciaux sur demande.',
      },
      {
        subtitle: 'Goûter',
        content:
          'Collation de l\'après-midi incluse pour la maternelle. Goûter optionnel pour le primaire.',
      },
    ],
  },
  {
    id: 'transports',
    title: 'Transports',
    items: [
      {
        subtitle: 'Bus scolaire',
        content:
          'Un car de transport scolaire assure les trajets selon le lieu de résidence. Chauffeurs formés et protocole de sécurité strict.',
      },
    ],
  },
  {
    id: 'inscriptions',
    title: 'Inscriptions',
    items: [
      {
        subtitle: 'Calendrier',
        content:
          'Inscriptions ouvertes toute l\'année selon places disponibles. Rentrée principale en septembre, entrées échelonnées possibles.',
      },
      {
        subtitle: 'Dossier requis',
        content:
          'Acte de naissance, carnet de vaccination, bulletins précédents (si applicable), photo d\'identité et formulaire de demande complété.',
      },
    ],
  },
] as const;
