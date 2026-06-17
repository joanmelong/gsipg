export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
}

export const articles: Article[] = [
  {
    slug: 'rentree-2025',
    title: 'Rentrée scolaire 2025 : bienvenue aux nouveaux élèves',
    excerpt: 'Découvrez les temps forts de notre cérémonie de rentrée et les projets pédagogiques de l\'année.',
    date: '2025-09-05',
    image: '/images/articles/article-01.svg',
    imageAlt: 'Élèves du GSIPG lors de la cérémonie de rentrée 2025',
    category: 'Événements',
  },
  {
    slug: 'parc-sciences',
    title: 'Inauguration du parc des sciences',
    excerpt: 'Un nouvel espace d\'expérimentation interactive pour les classes de primaire.',
    date: '2025-06-12',
    image: '/images/articles/article-02.svg',
    imageAlt: 'Parc des sciences éducatif du GSIPG',
    category: 'Innovation',
  },
  {
    slug: 'journee-portes-ouvertes',
    title: 'Journée portes ouvertes : plus de 200 familles',
    excerpt: 'Retour en images sur une journée riche en rencontres et découvertes.',
    date: '2025-05-20',
    image: '/images/articles/article-03.svg',
    imageAlt: 'Familles visitant le GSIPG lors des portes ouvertes',
    category: 'Événements',
  },
  {
    slug: 'concours-lecture',
    title: 'Concours de lecture bilingue',
    excerpt: 'Nos élèves de CE1 et CE2 brillent lors du concours inter-écoles de Yaoundé.',
    date: '2025-04-08',
    image: '/images/articles/article-04.svg',
    imageAlt: 'Élève participant au concours de lecture bilingue',
    category: 'Réussites',
  },
  {
    slug: 'partenariat-cambridge',
    title: 'Renforcement du partenariat Cambridge',
    excerpt: 'Formation continue de nos enseignants pour l\'excellence linguistique.',
    date: '2025-03-15',
    image: '/images/articles/article-05.svg',
    imageAlt: 'Session de formation Cambridge pour les enseignants GSIPG',
    category: 'Partenariats',
  },
  {
    slug: 'fete-noel',
    title: 'Fête de Noël et spectacle des élèves',
    excerpt: 'Chants, danses et pièces de théâtre bilingues devant un public conquis.',
    date: '2024-12-18',
    image: '/images/articles/article-06.svg',
    imageAlt: 'Spectacle de Noël des élèves du GSIPG',
    category: 'Vie scolaire',
  },
  {
    slug: 'sortie-musee',
    title: 'Sortie pédagogique au Musée National',
    excerpt: 'Les classes de CM1 explorent l\'histoire et la culture camerounaise.',
    date: '2024-11-22',
    image: '/images/articles/article-07.svg',
    imageAlt: 'Élèves en visite au Musée National de Yaoundé',
    category: 'Sorties',
  },
  {
    slug: 'atelier-robotique',
    title: 'Atelier robotique en maternelle',
    excerpt: 'Initiation ludique à la programmation dès la grande section.',
    date: '2024-10-30',
    image: '/images/articles/article-08.svg',
    imageAlt: 'Enfants participant à un atelier robotique en maternelle',
    category: 'Innovation',
  },
  {
    slug: 'journee-sport',
    title: 'Journée sportive inter-classes',
    excerpt: 'Esprit d\'équipe, fair-play et dépassement de soi au programme.',
    date: '2024-10-05',
    image: '/images/articles/article-09.svg',
    imageAlt: 'Élèves participant à la journée sportive du GSIPG',
    category: 'Sport',
  },
  {
    slug: 'forum-parents',
    title: 'Forum parents-enseignants',
    excerpt: 'Un échange constructif sur le suivi scolaire et les projets à venir.',
    date: '2024-09-28',
    image: '/images/articles/article-10.svg',
    imageAlt: 'Forum de rencontre entre parents et enseignants',
    category: 'Communauté',
  },
  {
    slug: 'certification-qualite',
    title: 'Renouvellement de notre certification qualité',
    excerpt: 'Le GSIPG confirme son engagement pour l\'excellence pédagogique.',
    date: '2024-07-10',
    image: '/images/articles/article-11.svg',
    imageAlt: 'Certification qualité renouvelée pour le GSIPG',
    category: 'Institutionnel',
  },
  {
    slug: 'ete-activites',
    title: 'Programme d\'activités d\'été 2024',
    excerpt: 'Stages créatifs, sports et immersion anglaise pour les vacances.',
    date: '2024-06-01',
    image: '/images/articles/article-12.svg',
    imageAlt: 'Activités d\'été proposées par le GSIPG',
    category: 'Vie scolaire',
  },
];

export const ARTICLES_PER_PAGE = 6;

export function formatArticleDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
