# Recommandations React Bits — GSIPG

Bibliothèque : [reactbits.dev](https://www.reactbits.dev) — 130+ composants animés React (variants TS-TW recommandés pour ce projet).

**Installation :**
```bash
npx jsrepo@latest add https://reactbits.dev/r/<Component>-TS-TW
# ou
npx shadcn@latest add https://reactbits.dev/r/<Component>-TS-TW
```

**Intégration Astro :** `client:visible` ou `client:idle` pour limiter le JS initial (roadmap perf J3).

---

## Hero (`Hero.astro`)

| Priorité | Composant React Bits | Usage | Raison |
|----------|---------------------|-------|--------|
| **1** | `BlurText` | Titre principal au chargement | Révélation douce, professionnelle, adaptée école |
| **2** | `SplitText` | Sous-titre ou mot-clé « excellence » | Entrée staggered des mots, impact émotionnel |
| **3** | `FadeContent` | Bloc CTA + paragraphe | Apparition au scroll/mount sans surcharge |
| **4** | `GradualBlur` | Overlay sur slides d'images | Transition cinématique entre photos hero |
| Alt. fond | `Aurora` ou `Waves` (Backgrounds) | Remplacer dégradé statique | Effet premium léger — **à tester perf mobile** |

**Éviter :** `GlitchText`, `DecryptedText` (ton trop tech/hacker pour une école maternelle-primaire).

**Implémentation actuelle :** wrappers légers `BlurText.tsx` + `FadeIn.tsx` dans `src/components/react/`.

---

## Galeries (`GalleryHero`, `GalleryDome`, `GalleryGrid`)

| Priorité | Composant React Bits | Usage | Raison |
|----------|---------------------|-------|--------|
| **1** | `DomeGallery` | Page `/galerie` | **Déjà implémenté** en custom (`DomeGallery.tsx`) — aligné React Bits |
| **2** | `ChromaGrid` | Grille alternative `/galerie` | Révélation couleur au survol, léger |
| **3** | `Masonry` | Vue grille complémentaire | Layout photos responsive avec reflow animé |
| **4** | `GlareHover` | Tuiles galerie | Reflet au survol, subtil et performant |
| **5** | `PixelTransition` | Ouverture lightbox | Transition pixelisée au clic |

**Hero galerie :** `BlurText` sur le titre + `FadeContent` sur l'illustration.

---

## Key Stats (`KeyStatsSection`)

| Priorité | Composant React Bits | Usage | Raison |
|----------|---------------------|-------|--------|
| **1** | `CountUp` | Chiffres 98 %, 96 %, 3, 2 | Compteur animé au scroll — **équivalent natif existant** |
| **2** | `Counter` | Variante avec formatage | Labels + suffixes personnalisables |
| **3** | `AnimatedContent` | Cartes stats en stagger | Entrée décalée des 4 colonnes |
| **4** | `ElectricBorder` | Carte « 98 % réussite » vedette | Mise en avant sans surcharge |
| **5** | `SpotlightCard` | Hover sur chaque stat | Focus lumineux au survol |

**Accessibilité :** respecter `prefers-reduced-motion` — afficher valeur finale immédiatement.

---

## Résultats Hero (`ResultatsHero.astro`)

| Priorité | Composant React Bits | Usage | Raison |
|----------|---------------------|-------|--------|
| **1** | `ScrollReveal` | Titre + sous-titre | Révélation au scroll sur la courbe SVG |
| **2** | `BlurText` | Titre « Nos résultats » | Cohérence avec hero accueil |
| **3** | `FadeContent` | Paragraphe descriptif | Direction `up`, delay 200 ms |
| **4** | `GradualBlur` | Image de fond | Dévoilement progressif de la photo |
| **5** | `ShinyText` | Mot « excellence » ou année | Accent métallique discret sur un mot |

**Page résultats (stats + tableau) :** `CountUp` sur les 6 stats + `AnimatedContent` sur les lignes du tableau.

---

## Vie scolaire (`VieScolaireHero`, `VieScolaireSections`)

| Priorité | Composant React Bits | Usage | Raison |
|----------|---------------------|-------|--------|
| **1** | `BounceCards` | 4 cartes navigation (horaires, resto, bus, inscriptions) | Entrée rebondissante au mount — correspond au chevauchement hero |
| **2** | `FadeContent` | Titre + portrait hero | Entrée gauche/droite alternée |
| **3** | `MagicBento` | Sections thématiques | Grille bento interactive pour les 4 blocs |
| **4** | `Folder` | Accordéons horaires/restauration | Alternative visuelle aux `<details>` |
| **5** | `GlassIcons` | Icônes cartes nav | Style verre dépoli cohérent charte GSIPG |
| **6** | `Magnet` | Cartes nav au survol | Micro-interaction ludique (éducatif) |

**Sections contenu :** `AnimatedContent` alterné image/texte (direction `left` / `right`).

---

## Autres sections recommandées

| Section | React Bits | Notes |
|---------|------------|-------|
| Témoignages | `Carousel` | Autoplay 4 s, pause hover — roadmap J3 |
| Trust banner | `LogoLoop` ou `ScrollVelocity` | Défilement des 4 points forts |
| CTA final | `StarBorder` ou `ElectricBorder` | Encadrement du bouton inscription |
| Newsletter | `GlareHover` | Bouton submit |
| Header nav | `GooeyNav` ou `PillNav` | J4 — polish micro-interactions |
| Cursus (accueil) | `SpotlightCard` | 3 cartes francophone/anglophone/bilingue |

---

## Matrice dépendances & performance

| Composant | Dépendances | Impact perf | Recommandation GSIPG |
|-----------|-------------|-------------|-------------------|
| `BlurText`, `FadeContent`, `CountUp` | Aucune / légère | Faible | ✅ Priorité — `client:visible` |
| `Carousel` | Légère | Moyen | ✅ Témoignages uniquement |
| `DomeGallery` | Three.js / gesture | Élevé | ✅ Déjà isolé page galerie |
| `Aurora`, `LiquidEther` | WebGL | Élevé | ⚠️ Hero uniquement si LCP OK |
| `SplashCursor`, `BlobCursor` | Canvas | Moyen | ❌ Éviter (site institutionnel) |

---

## Plan d'intégration suggéré

### Phase 1 (J2–J3) — animations légères
- `BlurText` → Hero, ResultatsHero, GalleryHero, VieScolaireHero
- `FadeContent` / `FadeIn` → sections scroll
- `CountUp` → KeyStatsSection, page résultats
- `Carousel` → témoignages accueil

### Phase 2 (J4) — polish
- `BounceCards` → VieScolaireHero nav cards
- `SpotlightCard` → cursus accueil
- `GooeyNav` → header (optionnel)

### Phase 3 (J5) — si perf ≥ 90 Lighthouse
- `Aurora` ou `Waves` en fond hero (mobile désactivé)
- `ChromaGrid` en vue alternative galerie

---

## Commandes d'installation par composant

```bash
# Phase 1
npx jsrepo@latest add https://reactbits.dev/r/BlurText-TS-TW
npx jsrepo@latest add https://reactbits.dev/r/FadeContent-TS-TW
npx jsrepo@latest add https://reactbits.dev/r/CountUp-TS-TW
npx jsrepo@latest add https://reactbits.dev/r/Carousel-TS-TW

# Phase 2
npx jsrepo@latest add https://reactbits.dev/r/BounceCards-TS-TW
npx jsrepo@latest add https://reactbits.dev/r/SpotlightCard-TS-TW

# Galerie (déjà custom — option remplacement officiel)
npx jsrepo@latest add https://reactbits.dev/r/DomeGallery-TS-TW
```

**Note :** Des wrappers simplifiés (`FadeIn`, `BlurText`, `CountUp`) sont fournis dans `src/components/react/` en attendant l'installation CLI complète des composants React Bits.
