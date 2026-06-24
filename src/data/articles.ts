export type ArticleCategory = 'Maternelle' | 'Primaire' | 'Événements';

export const ARTICLE_FILTER_CATEGORIES = [
  'Tout',
  'Maternelle',
  'Primaire',
  'Événements',
] as const;

export type ArticleFilter = (typeof ARTICLE_FILTER_CATEGORIES)[number];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  category: ArticleCategory;
}

export const articles: Article[] = [
  {
    slug: 'numerique-cm2',
    title: 'Initiation au numérique en CM2',
    excerpt:
      'Introduction progressive du numérique au primaire : nos élèves de CM2 s\'initient aujourd\'hui au code avec enthousiasme !',
    date: '2026-06-15',
    image: '/images/articles/article-08.svg',
    imageAlt: 'Élèves de CM2 lors d\'un atelier de programmation',
    category: 'Primaire',
  },
  {
    slug: 'theatre-bilingue-maternelle',
    title: 'Atelier théâtre en anglais',
    excerpt:
      'Atelier théâtre en anglais pour la section Bilingue (Fifty-fifty). Une excellente manière de développer la confiance en soi dès la maternelle.',
    date: '2026-06-02',
    image: '/images/articles/article-04.svg',
    imageAlt: 'Enfants de maternelle lors d\'un atelier théâtre en anglais',
    category: 'Maternelle',
  },
  {
    slug: 'semaine-nutrition',
    title: 'Semaine de la nutrition',
    excerpt:
      'Semaine de la nutrition à la restauration scolaire. Nos chefs proposent des menus équilibrés et vitaminés dans le respect strict des règles d\'hygiène.',
    date: '2026-05-25',
    image: '/images/articles/article-03.svg',
    imageAlt: 'Repas équilibré servi à la cantine scolaire',
    category: 'Événements',
  },
  {
    slug: 'rentree-2025',
    title: 'Rentrée scolaire 2025',
    excerpt:
      'Découvrez les temps forts de notre cérémonie de rentrée et les projets pédagogiques de l\'année. Bienvenue aux nouvelles familles de La Petite Gloria !',
    date: '2025-09-05',
    image: '/images/articles/article-01.svg',
    imageAlt: 'Élèves du GSIPG lors de la cérémonie de rentrée 2025',
    category: 'Événements',
  },
  {
    slug: 'parc-sciences',
    title: 'Inauguration du parc des sciences',
    excerpt:
      'Un nouvel espace d\'expérimentation interactive pour les classes de primaire. Nos élèves explorent les sciences de manière ludique et concrète.',
    date: '2025-06-12',
    image: '/images/articles/article-02.svg',
    imageAlt: 'Parc des sciences éducatif du GSIPG',
    category: 'Primaire',
  },
  {
    slug: 'journee-portes-ouvertes',
    title: 'Journée portes ouvertes',
    excerpt:
      'Retour en images sur une journée riche en rencontres et découvertes. Plus de 200 familles ont visité nos espaces pédagogiques et nos parcs éducatifs.',
    date: '2025-05-20',
    image: '/images/articles/article-06.svg',
    imageAlt: 'Familles visitant le GSIPG lors des portes ouvertes',
    category: 'Événements',
  },
  {
    slug: 'concours-lecture',
    title: 'Concours de lecture bilingue',
    excerpt:
      'Nos élèves de CE1 et CE2 brillent lors du concours inter-écoles de Yaoundé. Félicitations à tous les participants pour leur engagement et leur talent.',
    date: '2025-04-08',
    image: '/images/articles/article-05.svg',
    imageAlt: 'Élève participant au concours de lecture bilingue',
    category: 'Primaire',
  },
  {
    slug: 'atelier-robotique-maternelle',
    title: 'Atelier robotique en maternelle',
    excerpt:
      'Initiation ludique à la programmation dès la grande section. Les plus petits manipulent des robots éducatifs pour développer logique et créativité.',
    date: '2024-10-30',
    image: '/images/articles/article-07.svg',
    imageAlt: 'Enfants participant à un atelier robotique en maternelle',
    category: 'Maternelle',
  },
  {
    slug: 'fete-noel',
    title: 'Fête de Noël et spectacle des élèves',
    excerpt:
      'Chants, danses et pièces de théâtre bilingues devant un public conquis. Un moment magique partagé entre élèves, enseignants et familles.',
    date: '2024-12-18',
    image: '/images/articles/article-09.svg',
    imageAlt: 'Spectacle de Noël des élèves du GSIPG',
    category: 'Événements',
  },
  {
    slug: 'sortie-parc-educatif',
    title: 'Sortie au parc éducatif',
    excerpt:
      'Les élèves de CE1 ont exploré le parc des sciences en plein air. Une journée riche en découvertes et en apprentissages expérientiels.',
    date: '2024-11-05',
    image: '/images/articles/article-10.svg',
    imageAlt: 'Élèves lors d\'une sortie au parc éducatif',
    category: 'Primaire',
  },
  {
    slug: 'journee-sportive',
    title: 'Journée sportive inter-classes',
    excerpt:
      'Course, relais et jeux collectifs : nos élèves ont célébré l\'esprit d\'équipe lors de la grande journée sportive annuelle.',
    date: '2024-03-22',
    image: '/images/articles/article-11.svg',
    imageAlt: 'Élèves participant à la journée sportive du GSIPG',
    category: 'Événements',
  },
  {
    slug: 'ceremonie-merite',
    title: 'Cérémonie du mérite scolaire',
    excerpt:
      'Remise des prix d\'excellence aux meilleurs élèves de chaque niveau. Félicitations à tous les lauréats pour leur travail et leur persévérance.',
    date: '2024-07-10',
    image: '/images/articles/article-12.svg',
    imageAlt: 'Remise des prix lors de la cérémonie du mérite',
    category: 'Primaire',
  },
];

export function getSortedArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatArticleDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
