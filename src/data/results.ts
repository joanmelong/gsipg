export const resultsHero = {
  title: 'Nos Résultats',
  subtitle:
    "Le GSIPG affiche des résultats solides aux examens nationaux, reflet de notre engagement pour l'excellence académique et l'accompagnement personnalisé de chaque élève.",
  image: {
    src: '/images/resultats/resultat.jpg',
    alt: 'Élèves du GSIPG en tenue de cérémonie, fierté des résultats scolaires',
  },
} as const;

export const resultsIntro = resultsHero.subtitle;

export const stats = [
  { label: 'Taux de réussite 6ème', value: '98%', detail: 'Année scolaire 2024-2025' },
  { label: 'Taux de réussite CEP', value: '96%', detail: 'Année scolaire 2024-2025' },
  { label: 'Moyenne générale', value: '14,2/20', detail: 'Cycle primaire' },
  { label: 'Mentions Bien et Très Bien', value: '72%', detail: 'Examens CEP' },
  { label: 'Progression bilingue', value: '+35%', detail: 'Niveau anglais (tests internes)' },
  { label: 'Satisfaction parents', value: '94%', detail: 'Enquête annuelle 2025' },
] as const;

export const examResults = [
  { level: 'CM2 — CEP', admitted: 48, total: 50, rate: '96%' },
  { level: '6ème — Entrée secondaire', admitted: 45, total: 46, rate: '98%' },
  { level: 'CEPE — Mention Bien+', admitted: 34, total: 48, rate: '71%' },
] as const;

export const conclusion =
  "L'année 2024-2025 confirme la trajectoire du GSIPG : des fondations solides, une pédagogie innovante et des élèves confiants, prêts pour la suite de leur parcours scolaire.";

export const resultsConclusion = {
  title: "Bilan de l'année",
  text: conclusion,
  image: {
    src: '/images/resultats/recap.jpg',
    alt: 'Tableau récapitulatif des résultats aux examens affiché au GSIPG',
  },
  button: {
    label: 'Inscrire mon enfant',
    href: '/admissions',
  },
} as const;
