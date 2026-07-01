import { existsSync, readdirSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export type GalleryCategoryId =
  | 'apprentissage'
  | 'remise-des-bulletins'
  | 'activites-post-et-peri-scolaires'
  | 'projets-scolaires'
  | 'staff-ecole';

export interface GalleryCategoryDefinition {
  id: GalleryCategoryId;
  label: string;
  folder: string;
  previewImage: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string;
  category: GalleryCategoryId;
  categoryLabel: string;
  caption: string;
}

export type GalleryDomeMedia = {
  src: string;
  alt: string;
  type: 'image' | 'video';
  poster?: string;
};

export const galleryHero = {
  title: 'Album photo de la Petite Gloria',
  subtitle: 'Revivez les moments forts du GSIPG : apprentissage, jeux, événements et sport.',
} as const;

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

const publicAsset = (folder: string, file: string) =>
  `/images/gallery/${folder}/${encodeURIComponent(file)}`;

const listFiles = (dir: string, extensions: Set<string>) => {
  if (!existsSync(dir)) return [] as string[];

  return readdirSync(dir)
    .filter((name) => extensions.has(extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'fr'));
};

const formatDateFromFilename = (filename: string) => {
  const match = filename.match(/(\d{4})(\d{2})(\d{2})/);
  if (!match) return null;
  return `${match[3]}/${match[2]}/${match[1]}`;
};

const humanizeFilename = (filename: string) =>
  basename(filename, extname(filename))
    .replace(/^WhatsApp\s+(Image|Video)\s+/i, '')
    .replace(/^IMG-?/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const inferCaption = (
  category: GalleryCategoryDefinition,
  filename: string,
  index: number,
  kind: 'image' | 'video',
) => {
  const formattedDate = formatDateFromFilename(filename);
  const label = kind === 'video' ? 'Vidéo' : 'Photo';
  if (formattedDate) return `${category.label} - ${label} du ${formattedDate}`;

  const cleaned = humanizeFilename(filename);
  return cleaned ? `${category.label} - ${cleaned}` : `${category.label} - ${label} ${index + 1}`;
};

const firstExistingImage = (folder: string) => {
  const files = listFiles(join(GALLERY_DIR, folder), IMAGE_EXTENSIONS);
  return files[0] ? publicAsset(folder, files[0]) : '';
};

const fallbackPreview = firstExistingImage('apprentissage');

export const galleryCategoryDefinitions: GalleryCategoryDefinition[] = [
  {
    id: 'apprentissage',
    label: 'Apprentissage',
    folder: 'apprentissage',
    previewImage: firstExistingImage('apprentissage'),
  },
  {
    id: 'remise-des-bulletins',
    label: 'Remise des bulletins',
    folder: 'remise-des-bulletins',
    previewImage: firstExistingImage('remise-des-bulletins'),
  },
  {
    id: 'activites-post-et-peri-scolaires',
    label: 'Activités post et péri scolaires',
    folder: 'activites-post-et-peri-scolaires',
    previewImage: firstExistingImage('activites-post-et-peri-scolaires'),
  },
  {
    id: 'projets-scolaires',
    label: 'Projets scolaires',
    folder: 'projets-scolaires',
    previewImage: firstExistingImage('projets-scolaires') || fallbackPreview,
  },
  {
    id: 'staff-ecole',
    label: 'Staff',
    folder: 'staff-ecole',
    previewImage: firstExistingImage('staff-ecole'),
  },
] as const satisfies GalleryCategoryDefinition[];

const toDomeMedia = (item: GalleryImage): GalleryDomeMedia => ({
  src: item.src,
  alt: item.alt,
  type: item.type ?? 'image',
  poster: item.poster,
});

const loadCategoryMedia = (category: GalleryCategoryDefinition) => {
  const dir = join(GALLERY_DIR, category.folder);
  const imageFiles = listFiles(dir, IMAGE_EXTENSIONS);
  const videoFiles = listFiles(dir, VIDEO_EXTENSIONS);
  const firstPoster =
    imageFiles[0] ? publicAsset(category.folder, imageFiles[0]) : category.previewImage || fallbackPreview;

  const images = imageFiles.map<GalleryImage>((file, index) => ({
    id: `${category.id}-img-${String(index + 1).padStart(3, '0')}`,
    src: publicAsset(category.folder, file),
    alt: `${category.label} au GSIPG - ${humanizeFilename(file) || `photo ${index + 1}`}`,
    category: category.id,
    categoryLabel: category.label,
    caption: inferCaption(category, file, index, 'image'),
  }));

  const videos = videoFiles.map<GalleryImage>((file, index) => ({
    id: `${category.id}-vid-${String(index + 1).padStart(3, '0')}`,
    type: 'video',
    src: publicAsset(category.folder, file),
    poster: firstPoster,
    alt: `${category.label} au GSIPG - ${humanizeFilename(file) || `vidéo ${index + 1}`}`,
    category: category.id,
    categoryLabel: category.label,
    caption: inferCaption(category, file, index, 'video'),
  }));

  return [...images, ...videos];
};

export const galleryImages: GalleryImage[] = galleryCategoryDefinitions.flatMap(loadCategoryMedia);

export const galleryMediaByCategory = galleryCategoryDefinitions.reduce(
  (acc, category) => {
    acc[category.id] = galleryImages
      .filter((item) => item.category === category.id)
      .map(toDomeMedia);
    return acc;
  },
  {} as Record<GalleryCategoryId, GalleryDomeMedia[]>,
);

export const galleryCircularItems = galleryCategoryDefinitions.map((category) => ({
  id: category.id,
  text: category.label,
  image: category.previewImage || fallbackPreview,
}));

export const galleryCategories = ['Tous', ...galleryCategoryDefinitions.map((category) => category.label)] as const;

export const galleryMediaStats = {
  images: galleryImages.filter((item) => item.type !== 'video').length,
  videos: galleryImages.filter((item) => item.type === 'video').length,
};
