export const parcsHero = {
  tag: 'Loisirs & Activités',
  title: 'Une école où l\'on apprend autrement',
  subtitle:
    'Au-delà des programmes scolaires, La Petite Gloria offre à chaque élève un éventail d\'activités riches et variées pour s\'épanouir, créer, bouger et découvrir le monde.',
  image: {
    src: '/images/gallery/activites-post-et-peri-scolaires/IMG-20240518-WA0001-600x300.jpg',
    alt: 'Élèves du GSIPG en activités',
  },
} as const;

export interface LoisirsTheme {
  id: string;
  tag: string;
  title: string;
  description: string;
  activities: string[];
  image: string;
  imageAlt: string;
}

export const loisirsThemes: LoisirsTheme[] = [
  {
    id: 'vie-culturelle',
    tag: 'Culture & Fête',
    title: 'Vie culturelle & festive',
    description:
      'L\'année scolaire est rythmée par des temps forts culturels qui célèbrent la diversité, le bilinguisme et le patrimoine camerounais. Ces événements forgent l\'identité des élèves tout en les ouvrant au monde.',
    activities: [
      'Kermesses à thème',
      'Semaine de la jeunesse',
      'Semaine du bilinguisme (français/anglais)',
      'Semaine de la culture nationale',
      'Danses traditionnelles',
      'Expression en langues nationales',
      'Réalisation de mets traditionnels',
      'Initiation aux medzang',
      'Apprentissage des jeux traditionnels',
    ],
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.55.30.jpeg',
    imageAlt: 'Élèves du GSIPG lors de la journée culturelle',
  },
  {
    id: 'sport-plein-air',
    tag: 'Sport & Nature',
    title: 'Sport, plein air & découverte',
    description:
      'Le corps et le mouvement sont au cœur de notre projet éducatif. Des activités sportives variées aux sorties en plein air, chaque élève est encouragé à se dépasser, à coopérer et à respecter l\'environnement.',
    activities: [
      'Activités sportives en tout genre',
      'Création et entretien du jardin scolaire',
      'Excursions scolaires',
      'Jeux collectifs et esprit d\'équipe',
    ],
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 09.00.55.jpeg',
    imageAlt: 'Élèves du GSIPG lors d\'une sortie scolaire',
  },
  {
    id: 'numerique-savoir',
    tag: 'Numérique & Savoir',
    title: 'Numérique, technologie & lecture',
    description:
      'La Petite Gloria investit dans des équipements modernes pour préparer les élèves au monde de demain. Informatique, outils interactifs et bibliothèque sont autant de portes ouvertes sur la connaissance.',
    activities: [
      'Salle informatique avec de nombreux ordinateurs',
      'Salle digitale et interactive avec vidéoprojecteur',
      'Bibliothèque riche et conviviale',
      'Initiation à la passion de la lecture',
    ],
    image: '/images/gallery/Group 18.png',
    imageAlt: 'Élèves en atelier numérique au GSIPG',
  },
  {
    id: 'citoyennete-pratique',
    tag: 'Citoyenneté & Vie pratique',
    title: 'Citoyenneté, autonomie & vie pratique',
    description:
      'Former des citoyens responsables, autonomes et engagés : c\'est l\'ambition de nos activités de vie pratique et citoyenne. De l\'approche Montessori au gouvernement scolaire, chaque élève apprend à prendre sa place dans la société.',
    activities: [
      'Initiation aux tâches domestiques (ménage, pliage, lessive, propreté)',
      'Approche Montessori et apprentissage par le jeu',
      'Initiation au débat contradictoire',
      'Initiation au journalisme',
      'Campagne électorale et vote du gouvernement scolaire',
      'Pratiques citoyennes',
    ],
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.44.56.jpeg',
    imageAlt: 'Élèves du GSIPG en activité citoyenne',
  },
];

export const parcsCta = {
  title: 'Venez découvrir La Petite Gloria',
  description:
    'Planifiez une visite de l\'établissement et rencontrez notre équipe. Les inscriptions pour la prochaine rentrée sont ouvertes.',
  buttonLabel: 'Prendre rendez-vous',
  buttonHref: '/qui-sommes-nous#contact',
} as const;
