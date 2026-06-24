export const parcsHero = {
  tag: 'Parcs éducatifs',
  title: 'Apprendre en s\'amusant',
  subtitle:
    'Les parcs d\'attractions éducatifs du GSIPG ne sont pas de simples espaces de loisirs : ce sont des laboratoires à ciel ouvert où chaque activité est pensée pour développer la curiosité, la logique et l\'esprit d\'équipe.',
  image: {
    src: '/images/gallery/IMG-20240518-WA0008-600x300.jpg',
    alt: 'Enfants explorant le parc des sciences du GSIPG',
  },
} as const;

export const parcs = [
  {
    id: 'sciences',
    title: 'Parc des sciences',
    description:
      'Expérimentations interactives en physique, chimie et biologie. Les élèves manipulent, observent et tirent des conclusions dans un cadre sécurisé et stimulant.',
    benefits: ['Esprit scientifique', 'Observation', 'Travail en équipe'],
    image: '/images/gallery/IMG-20240518-WA0008-600x300.jpg',
    imageAlt: 'Atelier scientifique au parc des sciences GSIPG',
    ageRange: 'Primaire (CE1 – CM2)',
  },
  {
    id: 'aventure',
    title: 'Parc d\'aventure',
    description:
      'Parcours sportifs, tyroliennes adaptées et défis d\'agilité pour renforcer la confiance en soi, la coordination et le respect des consignes de sécurité.',
    benefits: ['Motricité', 'Confiance', 'Dépassement de soi'],
    image: '/images/gallery/IMG-20240518-WA0010-600x300.jpg',
    imageAlt: 'Parcours d\'aventure éducatif du GSIPG',
    ageRange: 'Maternelle & Primaire',
  },
  {
    id: 'creativite',
    title: 'Espace créativité',
    description:
      'Ateliers arts plastiques, musique, théâtre et robotique. Un espace dédié à l\'expression artistique et à la création libre, en lien avec les projets de classe.',
    benefits: ['Créativité', 'Expression', 'Imagination'],
    image: '/images/gallery/IMG-20240516-WA0004-600x300.jpg',
    imageAlt: 'Atelier créatif au GSIPG',
    ageRange: 'Tous niveaux',
  },
  {
    id: 'nature',
    title: 'Jardin pédagogique',
    description:
      'Découverte du vivant : plantation, observation des insectes, cycle des saisons. Les enfants apprennent le respect de l\'environnement par l\'action.',
    benefits: ['Écologie', 'Patience', 'Responsabilité'],
    image: '/images/home/vision-1.jpg',
    imageAlt: 'Jardin pédagogique du GSIPG',
    ageRange: 'Maternelle & Primaire',
  },
] as const;

export const parcsCta = {
  title: 'Visitez nos parcs éducatifs',
  description:
    'Découvrez nos espaces lors d\'une journée portes ouvertes ou planifiez une visite personnalisée avec notre équipe admissions.',
  buttonLabel: 'Planifier une visite',
  buttonHref: '/admissions',
} as const;
