export type GalleryCategory = 'Tous' | 'Vie scolaire' | 'Parcs éducatifs' | 'Événements' | 'Sport';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'Tous'>;
  caption: string;
}

export const galleryCategories: GalleryCategory[] = [
  'Tous',
  'Vie scolaire',
  'Parcs éducatifs',
  'Événements',
  'Sport',
];

export const galleryImages: GalleryImage[] = [
  { id: 'g01', src: '/images/gallery/gallery-01.svg', alt: 'Cour de récréation animée du GSIPG', category: 'Vie scolaire', caption: 'Récréation en maternelle' },
  { id: 'g02', src: '/images/gallery/gallery-02.svg', alt: 'Atelier scientifique au parc éducatif', category: 'Parcs éducatifs', caption: 'Laboratoire des curieux' },
  { id: 'g03', src: '/images/gallery/gallery-03.svg', alt: 'Cérémonie de remise des prix', category: 'Événements', caption: 'Remise des prix 2025' },
  { id: 'g04', src: '/images/gallery/gallery-04.svg', alt: 'Match de football inter-classes', category: 'Sport', caption: 'Tournoi de football' },
  { id: 'g05', src: '/images/gallery/gallery-05.svg', alt: 'Classe bilingue en activité', category: 'Vie scolaire', caption: 'Cours d\'anglais interactif' },
  { id: 'g06', src: '/images/gallery/gallery-06.svg', alt: 'Parcours aventure éducatif', category: 'Parcs éducatifs', caption: 'Parcours sensoriel' },
  { id: 'g07', src: '/images/gallery/gallery-07.svg', alt: 'Spectacle de fin d\'année', category: 'Événements', caption: 'Spectacle bilingue' },
  { id: 'g08', src: '/images/gallery/gallery-08.svg', alt: 'Course de relais sur le terrain', category: 'Sport', caption: 'Journée athlétisme' },
  { id: 'g09', src: '/images/gallery/gallery-09.svg', alt: 'Cantine et pause déjeuner', category: 'Vie scolaire', caption: 'Pause méridienne' },
  { id: 'g10', src: '/images/gallery/gallery-10.svg', alt: 'Structure ludique du parc éducatif', category: 'Parcs éducatifs', caption: 'Aire de découverte' },
  { id: 'g11', src: '/images/gallery/gallery-11.svg', alt: 'Portes ouvertes du GSIPG', category: 'Événements', caption: 'Journée portes ouvertes' },
  { id: 'g12', src: '/images/gallery/gallery-12.svg', alt: 'Initiation au basketball', category: 'Sport', caption: 'Club basketball' },
];
