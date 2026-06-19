import DomeGallery, { type DomeGalleryProps } from './DomeGallery';

type GalleryDomeViewProps = {
  images: DomeGalleryProps['images'];
};

export default function GalleryDomeView({ images }: GalleryDomeViewProps) {
  return (
    <div className="h-full w-full">
      <DomeGallery
        images={images}
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        padFactor={0.04}
        openedImageWidth="min(96vw, 980px)"
        openedImageHeight="min(88vh, 900px)"
        grayscale={false}
        overlayBlurColor="#f8f9fa"
      />
    </div>
  );
}
