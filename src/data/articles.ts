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
  /** Photos additionnelles affichées en bas de l'article */
  photos?: string[];
  /** Note affichée sous les photos (ex: lien vers la galerie) */
  galleryNote?: string;
}

export const articles: Article[] = [
  {
    slug: 'decoration-noel',
    title: 'Décoration de l\'école à l\'occasion de la fête de Noël',
    excerpt:
      'La Petite Gloria se pare de ses plus beaux atours pour célébrer Noël ! Élèves et encadrants ont uni leurs talents pour transformer l\'école en un véritable décor de fête.',
    date: '2025-12-03',
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-25 at 11.30.50 (1).jpeg',
    imageAlt: 'Décoration de Noël à l\'école La Petite Gloria',
    category: 'Événements',
    author: 'Équipe éducative GSIPG',
    body: [
      'À l\'approche des fêtes de fin d\'année, toute la communauté du Groupe Scolaire International La Petite Gloria s\'est mobilisée pour décorer l\'établissement. Guirlandes colorées, sapins ornés, étoiles suspendues et messages de vœux ont envahi les couloirs et les salles de classe, créant une atmosphère chaleureuse et festive.',
      'Cette activité, organisée par les instituteurs en collaboration avec les élèves, a bien plus qu\'une vocation décorative. Elle s\'inscrit dans notre démarche pédagogique : développer la créativité, la coopération et le sens de l\'esthétique chez les enfants. Chaque classe a eu la responsabilité de décorer un espace de l\'école, permettant à chaque élève de s\'exprimer librement.',
      '« Voir les enfants aussi impliqués et fiers de leur travail, c\'est exactement ce que nous cherchons à cultiver ici », confie une institutrice du cycle primaire. « La fête de Noël est un moment magique que nous aimons partager avec toute la famille de l\'école. »',
      'Les familles sont invitées à découvrir ces décorations lors de la cérémonie de fin d\'année prévue à la mi-décembre. Un spectacle de chants et de saynètes bilingues viendra clôturer cette belle période de l\'année scolaire.',
    ],
    photos: [
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-25 at 11.30.50 (1).jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-25 at 11.30.50.jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-25 at 11.30.48.jpeg',
    ],
  },
  {
    slug: 'balais-et-defile-de-mode',
    title: 'Balais et défilé de mode',
    excerpt:
      'Les élèves de La Petite Gloria ont enfilé leurs plus beaux costumes pour un défilé de mode haut en couleurs, mêlant créativité, élégance et bonne humeur.',
    date: '2026-02-11',
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 09.00.56.jpeg',
    imageAlt: 'Élèves du GSIPG lors du défilé de mode',
    category: 'Événements',
    author: 'Équipe éducative GSIPG',
    body: [
      'Dans le cadre des activités périscolaires, le GSIPG a organisé un balais et défilé de mode qui a fait sensation. Habillés de tenues soigneusement préparées, les élèves ont défilé avec fierté et assurance devant leurs camarades, leurs instituteurs et leurs familles réunies pour l\'occasion.',
      'Au-delà du spectacle, cette activité poursuit des objectifs pédagogiques concrets : renforcer la confiance en soi, développer l\'expression corporelle, apprendre à se présenter devant un public et valoriser la créativité de chaque enfant. Chaque élève a pu briller à sa façon, dans une ambiance bienveillante et festive.',
      '« Voir nos élèves marcher avec autant d\'assurance et de sourire, c\'est exactement ce que nous cherchons à cultiver », confie un membre de l\'équipe éducative. « Ces moments hors classe sont aussi formateurs que les heures en salle. »',
      'Cet événement a rappelé combien la vie scolaire au GSIPG est riche et diversifiée. Félicitations à tous les élèves pour leur participation et leur enthousiasme !',
    ],
    photos: [
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.44.56.jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.44.57.jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.44.58 (1).jpeg',
    ],
    galleryNote: 'Retrouvez la suite dans notre galerie',
  },
  {
    slug: 'projet-scolaire-sante',
    title: 'Projet scolaire : à la découverte du monde médical',
    excerpt:
      'Dans le cadre de leur projet scolaire, les élèves ont fabriqué des seringues en carton pour explorer le monde de la santé et des soins de manière ludique et créative.',
    date: '2025-11-14',
    image: '/images/gallery/projets-scolaires/WhatsApp Image 2026-06-30 at 09.29.36.jpeg',
    imageAlt: 'Élèves du GSIPG fabriquant des seringues en carton lors d\'un projet scolaire',
    category: 'Primaire',
    author: 'Équipe pédagogique GSIPG',
    body: [
      'Dans le cadre de la Journée mondiale de la santé, les élèves du GSIPG ont réalisé un projet manuel autour du monde médical. Guidés par leurs instituteurs, ils ont fabriqué des seringues en carton, reproduisant ainsi des outils utilisés par les professionnels de santé.',
      'Cette activité, à la fois ludique et éducative, avait pour objectif de démystifier le matériel médical souvent source d\'appréhension chez les jeunes enfants. En manipulant eux-mêmes ces répliques en carton, les élèves ont pu poser des questions, comprendre le rôle des soignants et dépasser leurs peurs en toute sérénité.',
      '« Quand un enfant fabrique lui-même un objet qui lui fait peur, il reprend le contrôle », explique un instituteur porteur du projet. « Plusieurs élèves ont dit qu\'ils n\'auraient plus aussi peur des piqûres après ça. C\'est exactement l\'effet recherché. »',
      'Ce type de projet interdisciplinaire mêle arts plastiques, éveil scientifique et éducation à la santé. Il illustre parfaitement la pédagogie du GSIPG : apprendre en faisant, en questionnant et en créant.',
    ],
    photos: [
      '/images/gallery/projets-scolaires/WhatsApp Image 2026-06-30 at 09.29.38.jpeg',
      '/images/gallery/projets-scolaires/WhatsApp Image 2026-06-30 at 09.30.09.jpeg',
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
    slug: 'inauguration-manege-gonflable',
    title: 'Inauguration du manège gonflable',
    excerpt:
      'Un nouveau manège gonflable fait son entrée au GSIPG ! Une attraction attendue qui enrichit encore davantage les moments de récréation et d\'activités physiques des élèves.',
    date: '2025-04-15',
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.58.46 (1).jpeg',
    imageAlt: 'Inauguration du manège gonflable au GSIPG',
    category: 'Événements',
    author: 'Direction GSIPG',
    body: [
      'C\'est avec une joie immense que le Groupe Scolaire International La Petite Gloria a inauguré son tout nouveau manège gonflable. Accueilli par des cris de joie et des applaudissements des élèves, cet équipement ludique vient enrichir les espaces de jeux et d\'activités physiques de l\'établissement.',
      'Pensé pour favoriser le développement moteur, la coordination et le plaisir du jeu, le manège gonflable est accessible à tous les niveaux — de la maternelle au primaire — dans le respect des règles de sécurité mises en place par l\'équipe encadrante.',
      '« Nous souhaitons offrir à nos élèves un cadre où l\'apprentissage rime avec plaisir », déclare la directrice. « Ce type d\'équipement contribue au bien-être des enfants et à leur épanouissement global, en dehors des heures de classe. »',
      'Cette inauguration s\'inscrit dans la dynamique d\'amélioration continue des infrastructures du GSIPG. D\'autres équipements sont prévus dans les prochains mois pour continuer d\'enrichir la vie scolaire de nos élèves.',
    ],
    photos: [
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.58.43 (1).jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.58.46.jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.58.39 (1).jpeg',
    ],
  },
  {
    slug: 'sortie-scolaire',
    title: 'Sortie scolaire : découverte et apprentissage hors les murs',
    excerpt:
      'Nos élèves ont quitté les salles de classe pour une journée de découverte en plein air. Une sortie riche en émotions, en observations et en souvenirs inoubliables.',
    date: '2025-05-20',
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 09.00.55.jpeg',
    imageAlt: 'Élèves du GSIPG lors d\'une sortie scolaire',
    category: 'Événements',
    author: 'Équipe éducative GSIPG',
    body: [
      'Dans le cadre des activités pédagogiques hors classe, les élèves du GSIPG ont participé à une sortie scolaire soigneusement préparée par l\'équipe enseignante. Objectif : confronter les apprentissages du quotidien au monde réel, stimuler la curiosité et renforcer les liens entre camarades.',
      'Encadrés par leurs instituteurs et des accompagnateurs, les enfants ont exploré leur environnement avec enthousiasme, posant des questions, observant, dessinant et échangeant entre eux. Chaque étape de la journée avait été pensée pour s\'inscrire dans les objectifs pédagogiques du trimestre.',
      '« Sortir de l\'école, c\'est aussi entrer dans une autre salle de classe — celle du monde », explique un instituteur organisateur. « Les enfants apprennent différemment dehors : ils sont plus attentifs, plus curieux et plus autonomes. »',
      'Cette sortie a également été l\'occasion de renforcer la cohésion du groupe, la responsabilité individuelle et le respect des règles de vie collective. Une belle journée qui restera gravée dans les mémoires, et dont les apprentissages continueront de résonner en classe dans les semaines à venir.',
    ],
  },
  {
    slug: 'journee-culturelle',
    title: 'Journée culturelle au GSIPG',
    excerpt:
      'Chants, danses traditionnelles et instruments de musique : les élèves de La Petite Gloria ont célébré la richesse des cultures camerounaises lors d\'une journée haute en couleurs.',
    date: '2025-04-08',
    image: '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.55.30.jpeg',
    imageAlt: 'Élèves du GSIPG lors de la journée culturelle',
    category: 'Événements',
    author: 'Équipe éducative GSIPG',
    body: [
      'La journée culturelle du GSIPG a été l\'occasion pour les élèves de célébrer la diversité et la richesse du patrimoine camerounais. Habillés en tenues traditionnelles, les enfants ont présenté des danses, des chants et des démonstrations d\'instruments de musique traditionnels devant leurs camarades et leurs familles.',
      'Au cœur de l\'événement : le balafon, instrument emblématique de l\'Afrique centrale, que certains élèves ont eu la chance de découvrir et de jouer pour la première fois. Cette initiation musicale a suscité curiosité et enthousiasme chez tous les participants, petits et grands.',
      '« Cette journée nous permet de rappeler à nos élèves d\'où ils viennent, de valoriser leur identité culturelle tout en s\'ouvrant à la diversité », explique un membre de l\'équipe pédagogique. « L\'éducation interculturelle fait partie intégrante de notre projet d\'établissement. »',
      'Parents et familles ont répondu présents en grand nombre pour partager ce moment de fierté et de convivialité. La journée culturelle s\'est conclue dans une ambiance festive, avec des échanges chaleureux entre générations autour des traditions locales.',
    ],
    photos: [
      '/images/gallery/activites-post-et-peri-scolaires/WhatsApp Image 2026-06-30 at 08.55.31.jpeg',
      '/images/gallery/activites-post-et-peri-scolaires/balafons1.png',
      '/images/gallery/activites-post-et-peri-scolaires/balafons2.png',
      '/images/gallery/activites-post-et-peri-scolaires/danse1.png',
    ],
  },
  {
    slug: 'atelier-robotique-maternelle',
    title: 'Atelier robotique en maternelle',
    excerpt:
      'Initiation ludique à la programmation dès la grande section. Les plus petits manipulent des robots éducatifs pour développer logique et créativité.',
    date: '2024-10-30',
    image: '/images/gallery/apprentissage/IMG-20240518-WA0002-600x300.jpg',
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
    image: '/images/gallery/remise-des-bulletins/IMG-20240518-WA0007-600x300.jpg',
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
    image: '/images/gallery/activites-post-et-peri-scolaires/IMG-20240518-WA0010-600x300.jpg',
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
    image: '/images/gallery/remise-des-bulletins/IMG-20240516-WA0009-600x300.jpg',
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
