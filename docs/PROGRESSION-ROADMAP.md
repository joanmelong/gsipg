# Progression GSIPG vs Roadmap

**Date d'audit :** 16 juin 2026  
**Stack :** Astro 6 + React 19 + Tailwind 4

---

## Synthèse globale

| Jour | Thème | Avancement estimé | Statut |
|------|-------|-------------------|--------|
| **J1** | Foundation & Architecture | **~95 %** | Quasi complet |
| **J2** | Pages statiques & contenu | **~75 %** | En cours |
| **J3** | Formulaires & interactivité | **~40 %** | Partiel |
| **J4** | Intégration (SEO, parcs, i18n) | **~5 %** | Non démarré |
| **J5** | Lancement production | **0 %** | Non démarré |

**Maturité globale du projet : ~82 %** (après complétion J2/J3 partielle — 16 juin 2026)

---

## JOUR 1 — Foundation & Architecture

| Tâche | Statut | Détail |
|-------|--------|--------|
| Projet Astro + structure | ✅ | `src/components`, `layouts`, `data`, `config` |
| Tailwind + palette GSIPG | ✅ | Primary `#71D7F7`, PostCSS v4 |
| BaseLayout + SEO | ✅ | OG, canonical, JSON-LD School |
| Header sticky + mobile | ✅ | Hamburger, aria, skip link |
| Footer multi-colonnes | ✅ | 5 colonnes, réseaux, newsletter UI |
| Composants atomiques | ✅ | Button, Card, Container, Section + UI étendus |
| Git | ✅ | Commits locaux |
| Vercel | ⚠️ | `vercel.json` prêt, déploiement non connecté |
| Build + Lighthouse | ✅ build / ⚠️ Lighthouse non mesuré en CI |

---

## JOUR 2 — Pages statiques & contenu

| Tâche | Statut | Détail |
|-------|--------|--------|
| Accueil complète | ⚠️ | Hero, vision, cursus, vie scolaire preview — manquaient témoignages, CTA, newsletter, trust banner, key stats |
| Qui sommes-nous | ⚠️ | Hero, directrice, équipe, contact — valeurs & certifications en data non rendues |
| Vie scolaire | ✅ | Hero + 4 sections thématiques (accordéons remplacés par sections pleine page) |
| Actualités | ⚠️ | 9 articles, filtres — pagination et 12 articles manquants |
| Résultats | ✅ | Hero, stats, tableau, conclusion |
| Galerie | ✅ | Dôme 3D React (~50 photos + 16 vidéos) |
| Optimisation images | ⚠️ | Photos réelles JPG, articles en SVG placeholder, pas de WebP systématique |
| Tests QA J2 | ⚠️ | Navigation OK, Lighthouse non validé |

**Pages stub restantes :** `admissions`, `niveaux`, `mentions-legales`, `confidentialite`

---

## JOUR 3 — Formulaires & interactivité

| Tâche | Statut | Détail |
|-------|--------|--------|
| Formulaire contact | ⚠️ | Présent, validation basique, `mailto:` — pas de honeypot |
| Formulaire inscription | ❌ | Page admissions stub |
| Formulaire partenariat | ❌ | Non créé |
| Carrousel témoignages | ❌ | `TestimonialCard` orphelin |
| Google Maps lazy-load | ⚠️ | `loading="lazy"` iframe — pas d'IntersectionObserver |
| Newsletter | ⚠️ | UI footer + section orpheline, pas de validation JS |
| Performance J3 | ⚠️ | Fonts preload partiel, pas d'audit LCP/FID documenté |

---

## Composants orphelins (avant complétion)

| Composant | Prévu pour |
|-----------|------------|
| `TrustBanner` | Accueil |
| `KeyStatsSection` | Accueil |
| `NewsletterSection` | Accueil |
| `CtaSection` | Accueil |
| `TestimonialCard` | Carrousel témoignages |
| `Pagination` | Actualités |
| `Accordion` | Vie scolaire (optionnel) |
| `GalleryGrid` | Galerie alternative (remplacé par dôme 3D) |

---

## Métriques roadmap vs réalisé

| Métrique | J1 cible | J2 cible | Réalisé (est.) |
|----------|----------|----------|----------------|
| Pages | 8 setup | 6 complètes | 11 routes, 6 riches + 4 stubs |
| Composants | 6 | 6 | 31+ |
| Bundle CSS | < 50 Ko | — | ~19 Ko |
| Bundle dist | < 200 Ko | 600–800 Ko | ~134 Ko (sans médias) |
| Formulaires | 0 | 0 | 1 (contact mailto) |
| Lighthouse | 50+ | 85–90 | Non mesuré |

---

## Prochaines priorités

1. Brancher sections orphelines sur l'accueil
2. Compléter admissions, niveaux, pages légales
3. Carrousel témoignages + pagination actualités (12 articles)
4. Formulaires inscription/partenariat avec validation + honeypot
5. Animations React Bits (voir `ANIMATIONS-REACTBITS.md`)
6. J4 : i18n, blog dynamique, SEO avancé, parcs d'attractions
