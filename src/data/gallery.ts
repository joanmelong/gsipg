import { existsSync, readdirSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export type GalleryCategory = 'Tous' | 'Vie scolaire' | 'Parcs éducatifs' | 'Événements' | 'Sport';

export const galleryHero = {
  title: 'Galerie',
  subtitle: 'Revivez les moments forts du GSIPG : apprentissage, jeux, événements et sport.',
  illustration: {
    src: '/images/gallery/student.svg',
    alt: 'Élève du GSIPG tenant des fournitures scolaires',
  },
} as const;

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string;
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

const resolveGalleryDir = () => {
  const candidates = [
    join(process.cwd(), 'public/images/gallery'),
    join(dirname(fileURLToPath(import.meta.url)), '../../public/images/gallery'),
  ];

  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }

  return candidates[0];
};

const GALLERY_DIR = resolveGalleryDir();

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const VIDEO_EXTENSIONS = new Set(['.mp4', '.webm', '.mov', '.m4v', '.3gp', '.mkv', '.avi']);
const VIDEO_DIR_NAMES = ['videos', 'video', 'vidéo', 'Vidéo'];

/** Encode les noms de fichiers (espaces, parenthèses…) pour des URLs valides. */
const publicAsset = (folder: string, file: string) =>
  `/images/gallery/${folder ? `${folder}/` : ''}${encodeURIComponent(file)}`;

const formatDateFromFilename = (filename: string) => {
  const match = filename.match(/(\d{4})(\d{2})(\d{2})/);
  if (!match) return null;
  return `${match[3]}/${match[2]}/${match[1]}`;
};

const inferCategory = (filename: string): Exclude<GalleryCategory, 'Tous'> => {
  if (filename.includes('20240518')) return 'Parcs éducatifs';
  if (filename.includes('20240516')) return 'Événements';
  if (filename.includes('201808')) return 'Vie scolaire';
  return 'Vie scolaire';
};

const inferCaption = (filename: string, index: number, kind: 'image' | 'video') => {
  const label = kind === 'video' ? 'Vidéo GSIPG' : 'Moment GSIPG';
  const formattedDate = formatDateFromFilename(filename);
  if (formattedDate) return `${label} — ${formattedDate}`;
  return `${label} ${index + 1}`;
};

const listFiles = (dir: string, extensions: Set<string>) => {
  if (!existsSync(dir)) return [] as string[];

  return readdirSync(dir)
    .filter((name) => extensions.has(extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'fr'));
};

const resolveVideoDirs = () => {
  const dirs = VIDEO_DIR_NAMES.map((name) => join(GALLERY_DIR, name)).filter((dir) => existsSync(dir));
  return dirs.length > 0 ? dirs : [join(GALLERY_DIR, 'videos')];
};

const loadVideoFiles = () => {
  const fromDirs = resolveVideoDirs().flatMap((dir) => {
    const folderName = basename(dir);
    return listFiles(dir, VIDEO_EXTENSIONS).map((file) => ({
      file,
      publicSrc: publicAsset(folderName, file),
    }));
  });

  const fromGalleryRoot = listFiles(GALLERY_DIR, VIDEO_EXTENSIONS).map((file) => ({
    file,
    publicSrc: publicAsset('', file),
  }));

  const unique = new Map<string, { file: string; publicSrc: string }>();
  for (const entry of [...fromDirs, ...fromGalleryRoot]) {
    unique.set(entry.publicSrc, entry);
  }

  return [...unique.values()].sort((a, b) => a.file.localeCompare(b.file, 'fr'));
};

const imageFiles = listFiles(GALLERY_DIR, IMAGE_EXTENSIONS);
const videoEntries = loadVideoFiles();

const galleryImageItems: GalleryImage[] = imageFiles.map((file, index) => ({
  id: `img-${String(index + 1).padStart(3, '0')}`,
  src: publicAsset('', file),
  alt: `Photo GSIPG — ${basename(file, extname(file))}`,
  category: inferCategory(file),
  caption: inferCaption(file, index, 'image'),
}));

const galleryVideoItems: GalleryImage[] = videoEntries.map(({ file, publicSrc }, index) => ({
  id: `vid-${String(index + 1).padStart(3, '0')}`,
  type: 'video' as const,
  src: publicSrc,
  poster: galleryImageItems[index % Math.max(galleryImageItems.length, 1)]?.src,
  alt: `Vidéo GSIPG — ${basename(file, extname(file))}`,
  category: inferCategory(file),
  caption: inferCaption(file, index, 'video'),
}));

export const galleryImages: GalleryImage[] = [...galleryImageItems, ...galleryVideoItems];

const toDomeMedia = (item: GalleryImage) => ({
  src: item.src,
  alt: item.alt,
  type: item.type ?? ('image' as const),
  poster: item.poster,
});

/** Vidéos en tête du pool pour qu'elles apparaissent clairement sur le dôme. */
export const galleryDomeImages = [
  ...galleryVideoItems.map(toDomeMedia),
  ...galleryImageItems.map(toDomeMedia),
];

export const galleryMediaStats = {
  images: galleryImageItems.length,
  videos: galleryVideoItems.length,
};
