import { useCallback, useMemo, useRef, useState } from 'react';

import CircularGallery, { type CircularGalleryItem } from './CircularGallery';
import GalleryDomeView from './GalleryDomeView';
import type {
  GalleryCategoryDefinition,
  GalleryCategoryId,
  GalleryDomeMedia,
} from '../../data/gallery';

type GalleryCategoryExperienceProps = {
  categories: GalleryCategoryDefinition[];
  circularItems: CircularGalleryItem[];
  mediaByCategory: Record<GalleryCategoryId, GalleryDomeMedia[]>;
};

export default function GalleryCategoryExperience({
  categories,
  circularItems,
  mediaByCategory,
}: GalleryCategoryExperienceProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<GalleryCategoryId | null>(null);
  const domeRef = useRef<HTMLDivElement>(null);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.id === selectedCategoryId) ?? null,
    [categories, selectedCategoryId],
  );

  const selectedMedia = selectedCategoryId ? mediaByCategory[selectedCategoryId] ?? [] : [];

  const handleSelect = useCallback((item: CircularGalleryItem) => {
    setSelectedCategoryId(item.id as GalleryCategoryId);
    window.setTimeout(() => {
      domeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }, []);

  return (
    <div className="w-full">
      <div className="relative mx-auto h-[520px] max-w-7xl px-1 sm:h-[600px] sm:px-4">
        <CircularGallery
          items={circularItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.18}
          scrollEase={0.07}
          fontUrl=""
          font="bold 30px Montserrat"
          scrollSpeed={2}
          onItemSelect={handleSelect}
        />
      </div>

      <div className="mx-auto mt-3 flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8">
        {categories.map((category) => {
          const isActive = category.id === selectedCategoryId;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleSelect({ id: category.id, text: category.label, image: category.previewImage })}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                isActive
                  ? 'bg-secondary text-white'
                  : 'bg-white text-secondary shadow-sm ring-1 ring-border hover:bg-primary/20'
              }`}
              aria-pressed={isActive}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div ref={domeRef} className="scroll-mt-24">
        {selectedCategory ? (
          <div className="mt-10 border-t border-border pt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-center font-subheading text-3xl font-bold normal-case tracking-normal text-secondary sm:text-4xl">
                {selectedCategory.label}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-neutral-text sm:text-base">
                Faites glisser le dôme pour explorer cette catégorie. Cliquez sur une photo ou une vidéo pour l'agrandir.
              </p>
            </div>

            <div className="relative mx-auto mt-5 h-[85vh] min-h-[520px] max-h-[900px] w-full px-1 sm:h-[80vh] sm:min-h-[640px] sm:px-4">
              <GalleryDomeView images={selectedMedia} />
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-7xl px-4 text-center text-sm text-neutral-text sm:px-6 sm:text-base lg:px-8">
            Selectionnez une categorie pour ouvrir son dome photo.
          </div>
        )}
      </div>
    </div>
  );
}
