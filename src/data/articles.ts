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
  author: string;
  /** Paragraphes du corps de l'article */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'numerique-cm2',
    title: 'Initiation au numérique en CM2',
    excerpt:
      'Introduction progressive du numérique au primaire : nos élèves de CM2 s\'initient aujourd\'hui au code avec enthousiasme !',
    date: '2026-06-15',
    image: '/images/home/vision-2.jpg',
    imageAlt: 'Élèves de CM2 lors d\'un atelier de programmation au GSIPG',
    category: 'Primaire',
    author: 'Équipe pédagogique GSIPG',
    body: [
      'Cette semaine, les élèves de CM2 ont franchi une nouvelle étape dans leur parcours scolaire : l\'initiation au numérique et à la programmation. Dans une salle équipée de tablettes et de kits robotiques, ils ont découvert les bases du code de manière ludique et collaborative.',
      'Sous la guidance de leurs enseignants, les enfants ont appris à donner des instructions simples à un robot éducatif, à résoudre des puzzles logiques et à comprendre comment une série d\'étapes peut produire un résultat concret. Cette approche s\'inscrit pleinement dans notre vision : intégrer progressivement le numérique comme outil d\'apprentissage, et non comme simple divertissement.',
      '« Nos élèves sont curieux et motivés », témoigne Mme Nguema, responsable du cycle primaire. « Le numérique leur permet de développer leur esprit logique tout en s\'amusant. C\'est exactement l\'esprit du GSIPG : apprendre en expérimentant. »',
      'Les familles pourront découvrir les réalisations des élèves lors de la prochaine exposition de fin de trimestre. D\'ici là, les séances se poursuivent chaque mercredi après-midi, avec des projets de plus en plus ambitieux.',
    ],
  },
  {
    slug: 'theatre-bilingue-maternelle',
    title: 'Atelier théâtre en anglais',
    excerpt:
      'Atelier théâtre en anglais pour la section Bilingue (Fifty-fifty). Une excellente manière de développer la confiance en soi dès la maternelle.',
    date: '2026-06-02',
    image: '/images/gallery/IMG-20240516-WA0004-600x300.jpg',
    imageAlt: 'Enfants de maternelle lors d\'un atelier théâtre en anglais',
    category: 'Maternelle',
    author: 'Équipe maternelle GSIPG',
    body: [
      'Les plus jeunes élèves de la section Bilingue Fifty-Fifty ont vécu une expérience inoubliable lors de notre atelier théâtre en anglais. Pendant une semaine, les classes de grande section ont exploré le monde du spectacle : mime, expression corporelle, répétitions et, enfin, représentation devant leurs camarades.',
      'L\'objectif pédagogique était clair : renforcer l\'aisance à l\'oral en anglais dans un contexte joyeux et bienveillant. Les enfants ont mémorisé de courtes scènes, appris des chansons et développé une confiance précieuse pour la suite de leur scolarité bilingue.',
      'Les parents présents à la représentation ont été touchés par l\'assurance des élèves et la qualité de leur prononciation. « Mon fils ose enfin parler anglais à la maison », confie une maman de GS1. « Cet atelier a été un vrai déclic. »',
      'Le théâtre fera partie de notre programmation parascolaire à la rentrée prochaine. Les inscriptions seront ouvertes dès le mois de juillet.',
    ],
  },
  {
    slug: 'semaine-nutrition',
    title: 'Semaine de la nutrition',
    excerpt:
      'Semaine de la nutrition à la restauration scolaire. Nos chefs proposent des menus équilibrés et vitaminés dans le respect strict des règles d\'hygiène.',
    date: '2026-05-25',
    image: '/images/home/vision-1.jpg',
    imageAlt: 'Enfants du GSIPG lors d\'un atelier sur l\'alimentation équilibrée',
    category: 'Événements',
    author: 'Service restauration GSIPG',
    body: [
      'Du 19 au 23 mai, le GSIPG a célébré la Semaine de la Nutrition à la restauration scolaire. Un moment fort pour sensibiliser les élèves — et leurs familles — à l\'importance d\'une alimentation variée, locale et équilibrée.',
      'Chaque jour, un thème différent a été exploré en classe : les fruits et légumes de saison, l\'hydratation, les protéines et les céréales, le petit-déjeuner équilibré. Les menus de la cantine ont été adaptés en conséquence, avec des produits frais sélectionnés auprès de fournisseurs locaux.',
      'Les élèves de maternelle ont participé à un atelier « découverte des couleurs dans mon assiette », tandis que les classes de primaire ont réalisé un projet affiché dans le hall de restauration. Les règles d\'hygiène alimentaire ont également été rappelées à tous les niveaux.',
      '« Manger équilibré, c\'est apprendre mieux », rappelle notre diététicienne référente. La restauration scolaire du GSIPG reste un pilier de notre projet éducatif : bien nourrir le corps pour nourrir l\'esprit.',
    ],
  },
  {
    slug: 'rentree-2025',
    title: 'Rentrée scolaire 2025',
    excerpt:
      'Découvrez les temps forts de notre cérémonie de rentrée et les projets pédagogiques de l\'année. Bienvenue aux nouvelles familles de La Petite Gloria !',
    date: '2025-09-05',
    image: '/images/home/hero-slide-1.jpg',
    imageAlt: 'Élèves du GSIPG lors de la cérémonie de rentrée 2025',
    category: 'Événements',
    author: 'Direction GSIPG',
    body: [
      'La rentrée scolaire 2025-2026 du Groupe Scolaire International La Petite Gloria s\'est déroulée dans une atmosphère festive et chaleureuse. Élèves, parents et enseignants se sont retrouvés dans la cour principale pour célébrer le début d\'une nouvelle année placée sous le signe de l\'excellence et de l\'épanouissement.',
      'Dr. Aminata Bello, directrice pédagogique, a adressé un message d\'accueil aux nouvelles familles et rappelé les trois piliers du GSIPG : rigueur académique, bilinguisme Fifty-Fifty et apprentissage par l\'expérience. Plus de quarante nouveaux élèves ont rejoint nos sections francophone, anglophone et bilingue.',
      'Les projets de l\'année ont été présentés : renforcement du numérique en primaire, nouvelles activités au parc des sciences, concours de lecture inter-classes et journées portes ouvertes trimestrielles. Le calendrier complet est disponible auprès de la vie scolaire.',
      'Nous souhaitons à tous nos élèves une année riche en découvertes, en réussites et en moments partagés. Bienvenue à La Petite Gloria !',
    ],
  },
  {
    slug: 'parc-sciences',
    title: 'Inauguration du parc des sciences',
    excerpt:
      'Un nouvel espace d\'expérimentation interactive pour les classes de primaire. Nos élèves explorent les sciences de manière ludique et concrète.',
    date: '2025-06-12',
    image: '/images/gallery/IMG-20240518-WA0008-600x300.jpg',
    imageAlt: 'Parc des sciences éducatif du GSIPG',
    category: 'Primaire',
    author: 'Coordinateur parcs éducatifs',
    body: [
      'Le GSIPG a inauguré officiellement son parc des sciences, un espace unique à Yaoundé dédié à l\'expérimentation et à la découverte scientifique. Conçu pour les élèves du primaire, ce parc propose des ateliers interactifs sur la physique, la biologie et les sciences de la Terre.',
      'Les enfants peuvent manipuler des instruments, observer des réactions chimiques sécurisées, explorer le cycle de l\'eau ou encore découvrir les bases de l\'astronomie. Chaque zone du parc est pensée pour correspondre aux objectifs du programme scolaire, tout en stimulant la curiosité naturelle des élèves.',
      '« Ce n\'est pas un musée, c\'est un laboratoire de plein air », explique le coordinateur des parcs éducatifs. « Les enfants apprennent en touchant, en observant et en questionnant. C\'est la pédagogie par l\'expérience que nous défendons au GSIPG. »',
      'Le parc est accessible aux élèves inscrits durant les heures de classe et lors des activités parascolaires. Les familles pourront le découvrir lors des prochaines journées portes ouvertes.',
    ],
  },
  {
    slug: 'journee-portes-ouvertes',
    title: 'Journée portes ouvertes',
    excerpt:
      'Retour en images sur une journée riche en rencontres et découvertes. Plus de 200 familles ont visité nos espaces pédagogiques et nos parcs éducatifs.',
    date: '2025-05-20',
    image: '/images/home/hero-slide-2.jpg',
    imageAlt: 'Familles visitant le GSIPG lors des portes ouvertes',
    category: 'Événements',
    author: 'Service admissions GSIPG',
    body: [
      'Plus de 200 familles ont franchi les portes du GSIPG lors de notre journée portes ouvertes annuelle. Un succès qui confirme l\'attractivité de notre offre éducative à Yaoundé : sections francophone, anglophone et bilingue Fifty-Fifty, de la crèche au primaire.',
      'Les visiteurs ont pu visiter les salles de classe, rencontrer l\'équipe pédagogique, découvrir nos parcs éducatifs et assister à des démonstrations d\'activités par les élèves. Des sessions d\'information sur les modalités d\'inscription et les frais de scolarité ont été organisées tout au long de la journée.',
      '« Nous avons été impressionnés par le cadre, la propreté et l\'enthousiasme des enseignants », témoigne un couple de parents en visite. « Notre enfant a adoré le parc des sciences. Nous allons déposer une demande d\'inscription. »',
      'Pour les familles n\'ayant pas pu participer, des visites individuelles sont possibles sur rendez-vous. Contactez notre service admissions au (+237) 699 91 85 62 ou via le formulaire en ligne.',
    ],
  },
  {
    slug: 'concours-lecture',
    title: 'Concours de lecture bilingue',
    excerpt:
      'Nos élèves de CE1 et CE2 brillent lors du concours inter-écoles de Yaoundé. Félicitations à tous les participants pour leur engagement et leur talent.',
    date: '2025-04-08',
    image: '/images/gallery/IMG-20240516-WA0011-600x300.jpg',
    imageAlt: 'Élève participant au concours de lecture bilingue',
    category: 'Primaire',
    author: 'Équipe pédagogique GSIPG',
    body: [
      'Les élèves du GSIPG ont brillé lors du concours de lecture bilingue inter-écoles de Yaoundé, organisé par le réseau des établissements partenaires. Trois de nos représentants ont figuré sur le podium, dont deux lauréats en catégorie CE1 et CE2.',
      'Pendant plusieurs semaines, les candidats ont préparé leurs textes en français et en anglais, travaillant sur l\'expression orale, l\'intonation et la compréhension. Cette préparation rigoureuse a porté ses fruits : fluidité, assurance et plaisir de lire devant un jury exigeant.',
      '« La lecture est le fondement de toute réussite scolaire », rappelle notre enseignante référente langues. « En section bilingue, maîtriser les deux langues à l\'oral est un atout considérable pour la suite du parcours. »',
      'Félicitations à tous les participants et à leurs enseignants pour ce beau résultat. Le GSIPG est fier de ses jeunes lecteurs !',
    ],
  },
  {
    slug: 'atelier-robotique-maternelle',
    title: 'Atelier robotique en maternelle',
    excerpt:
      'Initiation ludique à la programmation dès la grande section. Les plus petits manipulent des robots éducatifs pour développer logique et créativité.',
    date: '2024-10-30',
    image: '/images/gallery/IMG-20240516-WA0020-600x300.jpg',
    imageAlt: 'Enfants participant à un atelier robotique en maternelle',
    category: 'Maternelle',
    author: 'Équipe maternelle GSIPG',
    body: [
      'Qui a dit que la robotique était réservée aux plus grands ? À la maternelle du GSIPG, les élèves de grande section découvrent déjà les joies de la programmation grâce à des robots éducatifs adaptés à leur âge.',
      'L\'atelier propose des défis simples : faire avancer un robot, le faire tourner, éviter des obstacles. Les enfants travaillent en binômes, développant ainsi la coopération, la patience et le raisonnement logique — des compétences essentielles dès le plus jeune âge.',
      'Les enseignants de maternelle ont été formés à ces outils pédagogiques lors d\'une session dédiée en début d\'année. L\'objectif n\'est pas de former des ingénieurs, mais d\'éveiller la curiosité scientifique et de familiariser les enfants avec le monde numérique de manière positive.',
      'Cet atelier hebdomadaire est l\'un des temps forts de notre programmation GS. Les parents sont invités à une démonstration en fin de trimestre.',
    ],
  },
  {
    slug: 'fete-noel',
    title: 'Fête de Noël et spectacle des élèves',
    excerpt:
      'Chants, danses et pièces de théâtre bilingues devant un public conquis. Un moment magique partagé entre élèves, enseignants et familles.',
    date: '2024-12-18',
    image: '/images/gallery/IMG-20180826-WA0028.jpg',
    imageAlt: 'Spectacle de Noël des élèves du GSIPG',
    category: 'Événements',
    author: 'Comité vie scolaire',
    body: [
      'La magie de Noël s\'est installée au GSIPG le 18 décembre lors de notre spectacle annuel. Élèves de la maternelle au CM2 ont présenté chants, danses et saynètes en français et en anglais devant un parterre de parents comblés.',
      'Pendant un mois, les classes ont préparé leurs numéros avec leurs enseignants : répétitions, costumes, décors et chorégraphies. Le résultat a dépassé toutes les attentes : professionnalisme, joie et émotion au rendez-vous.',
      'Le spectacle s\'est conclu par un traditionnel échange de vœux et une collation festive. Les bénéfices de la vente de boissons ont été reversés à une association locale soutenue par l\'établissement.',
      'Merci à toutes les familles pour leur présence et à l\'équipe éducative pour son investissement. Rendez-vous l\'année prochaine pour une nouvelle édition !',
    ],
  },
  {
    slug: 'sortie-parc-educatif',
    title: 'Sortie au parc éducatif',
    excerpt:
      'Les élèves de CE1 ont exploré le parc des sciences en plein air. Une journée riche en découvertes et en apprentissages expérientiels.',
    date: '2024-11-05',
    image: '/images/gallery/IMG-20240518-WA0010-600x300.jpg',
    imageAlt: 'Élèves lors d\'une sortie au parc éducatif',
    category: 'Primaire',
    author: 'Équipe CE1 GSIPG',
    body: [
      'Les élèves de CE1 ont consacré une journée entière à l\'exploration du parc éducatif du GSIPG, dans le cadre de leur projet sciences « Observer et expérimenter ». Accompagnés de leurs enseignants et d\'animateurs spécialisés, ils ont parcouru les différentes zones du parc.',
      'Ateliers sur les plantes, expériences sur la lumière et les ombres, découverte des insectes et construction de petits engins : chaque activité était liée aux objectifs pédagogiques du trimestre. Les enfants ont pris des notes, dessiné leurs observations et présenté leurs découvertes en classe le lendemain.',
      '« Apprendre dehors change tout », confie un enseignant de CE1. « Les enfants sont plus attentifs, plus créatifs. Le parc est un prolongement naturel de nos salles de classe. »',
      'D\'autres sorties pédagogiques sont prévues au cours de l\'année pour les autres niveaux. Le calendrier est communiqué aux parents via le carnet de liaison.',
    ],
  },
  {
    slug: 'journee-sportive',
    title: 'Journée sportive inter-classes',
    excerpt:
      'Course, relais et jeux collectifs : nos élèves ont célébré l\'esprit d\'équipe lors de la grande journée sportive annuelle.',
    date: '2024-03-22',
    image: '/images/gallery/IMG-20240516-WA0009-600x300.jpg',
    imageAlt: 'Élèves participant à la journée sportive du GSIPG',
    category: 'Événements',
    author: 'Éducateur sportif GSIPG',
    body: [
      'Le 22 mars, le stade du GSIPG a vibré au rythme de la grande journée sportive inter-classes. Élèves de maternelle et de primaire se sont affrontés dans un esprit fair-play et convivial, sous le soleil de Yaoundé.',
      'Au programme : courses de vitesse, relais par équipes, saut en longueur adapté aux plus jeunes, et jeux collectifs favorisant la coopération. Chaque classe était représentée par une équipe mixte, capitanée par un élève ambassadeur.',
      'La journée s\'est clôturée par une cérémonie de remise de médailles et un goûter offert à tous les participants. L\'objectif n\'était pas seulement la compétition, mais de valoriser l\'effort, le respect des règles et l\'esprit d\'équipe.',
      '« Le sport fait partie du développement global de l\'enfant », rappelle notre éducateur sportif. « Nous encourageons chaque élève à bouger, à s\'amuser et à dépasser ses limites dans un cadre sécurisé. »',
    ],
  },
  {
    slug: 'ceremonie-merite',
    title: 'Cérémonie du mérite scolaire',
    excerpt:
      'Remise des prix d\'excellence aux meilleurs élèves de chaque niveau. Félicitations à tous les lauréats pour leur travail et leur persévérance.',
    date: '2024-07-10',
    image: '/images/resultats/recap.jpg',
    imageAlt: 'Remise des prix lors de la cérémonie du mérite scolaire',
    category: 'Primaire',
    author: 'Direction GSIPG',
    body: [
      'La cérémonie du mérite scolaire a récompensé les élèves les plus méritants de chaque niveau, à l\'issue de l\'année 2023-2024. Un moment solennel et festif qui met en lumière l\'excellence académique et l\'engagement personnel.',
      'Prix du meilleur élève par classe, trophées de progression, distinctions en langues et en sciences : plus de trente lauréats ont été honorés devant leurs familles, leurs enseignants et l\'ensemble de la communauté scolaire.',
      'Dr. Aminata Bello a salué « le travail acharné, la persévérance et l\'esprit d\'excellence » des élèves récompensés. Elle a également encouragé tous les autres à poursuivre leurs efforts : « Chaque progrès compte, chaque effort mérite d\'être célébré. »',
      'Les résultats aux examens nationaux — 98 % de réussite à l\'entrée en 6ème et 96 % au CEP — confirment la qualité de l\'accompagnement pédagogique du GSIPG. Consultez notre page Résultats pour le détail des performances.',
    ],
  },
];

export function getSortedArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return getSortedArticles().slice(0, limit);

  return getSortedArticles()
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function formatArticleDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
