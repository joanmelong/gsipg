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
  { label: 'Common Entrance & FSLC', value: '100%', detail: 'Année scolaire 2025-2026' },
  { label: 'Taux de réussite CEP', value: '100%', detail: 'Année scolaire 2025-2026' },
  { label: 'Concours entrée en 6ème', value: '90%', detail: 'Année scolaire 2025-2026' },
] as const;

export const examResults = [
  { level: 'Common Entrance', rate: '100%' },
  { level: 'FSLC', rate: '100%' },
  { level: 'CEP', rate: '100%' },
  { level: 'Concours d\'entrée en 6ème', rate: '90%' },
] as const;

export const conclusion =
  "L'année 2025-2026 confirme la trajectoire du GSIPG : des fondations solides, une pédagogie innovante et des élèves confiants, prêts pour la suite de leur parcours scolaire.";

export const resultsConclusion = {
  title: "Bilan de l'année",
  text: conclusion,
  image: {
    src: '/images/resultats/recap.jpg',
    alt: 'Tableau récapitulatif des résultats aux examens affiché au GSIPG',
  },
  button: {
    label: 'Inscrire mon enfant',
    href: '/vie-scolaire#inscriptions',
  },
} as const;
