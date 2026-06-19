import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';

type MediaItem =
  | string
  | {
      src: string;
      alt?: string;
      type?: 'image' | 'video';
      poster?: string;
    };

export type DomeGalleryProps = {
  images?: MediaItem[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  grayscale?: boolean;
};

type ItemDef = {
  src: string;
  alt: string;
  type: 'image' | 'video';
  poster?: string;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

type FrameRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35,
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

const VIDEO_EXT = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;

const resolveMediaType = (src: string, type?: 'image' | 'video'): 'image' | 'video' => {
  if (type) return type;
  return VIDEO_EXT.test(src) ? 'video' : 'image';
};

const normalizeMediaItem = (item: MediaItem) => {
  if (typeof item === 'string') {
    return { src: item, alt: '', type: resolveMediaType(item), poster: undefined as string | undefined };
  }
  return {
    src: item.src || '',
    alt: item.alt || '',
    type: resolveMediaType(item.src || '', item.type),
    poster: item.poster,
  };
};

const pauseVideo = (el: Element | null | undefined) => {
  if (el instanceof HTMLVideoElement) {
    el.pause();
    el.currentTime = 0;
  }
};

const appendMediaElement = (
  container: HTMLElement,
  {
    src,
    alt,
    type,
    poster,
    grayscale,
    autoplay = false,
    controls = false,
    objectFit = 'cover',
  }: {
    src: string;
    alt: string;
    type: 'image' | 'video';
    poster?: string;
    grayscale: boolean;
    autoplay?: boolean;
    controls?: boolean;
    objectFit?: 'cover' | 'contain';
  },
) => {
  const filter = grayscale ? 'grayscale(1)' : 'none';
  const mediaStyle = `width: 100%; height: 100%; object-fit: ${objectFit};`;

  if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.style.cssText = mediaStyle;
    video.style.filter = filter;
    video.playsInline = true;
    if (poster) video.poster = poster;
    if (controls) video.controls = true;
    if (autoplay) {
      video.autoplay = true;
      void video.play().catch(() => {});
    } else {
      video.muted = true;
      video.preload = 'metadata';
    }
    container.appendChild(video);
    return video;
  }

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = mediaStyle;
  img.style.filter = filter;
  container.appendChild(img);
  return img;
};

const cloneMediaForClosing = (
  media: Element | null,
  parent: HTMLElement,
  grayscale: boolean,
  objectFit: 'cover' | 'contain' = 'contain',
) => {
  const mediaStyle = `width: 100%; height: 100%; object-fit: ${objectFit};`;

  if (media instanceof HTMLVideoElement) {
    const posterSrc = media.poster || parent.dataset.poster || '';
    if (posterSrc) {
      const img = document.createElement('img');
      img.src = posterSrc;
      img.style.cssText = mediaStyle;
      img.style.filter = grayscale ? 'grayscale(1)' : 'none';
      return img;
    }
    const video = media.cloneNode(true) as HTMLVideoElement;
    video.style.cssText = mediaStyle;
    video.style.filter = grayscale ? 'grayscale(1)' : 'none';
    video.muted = true;
    video.controls = false;
    return video;
  }

  if (media instanceof HTMLImageElement) {
    const img = media.cloneNode() as HTMLImageElement;
    img.style.cssText = mediaStyle;
    return img;
  }

  return null;
};

function buildItems(pool: MediaItem[], seg: number): ItemDef[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map((y) => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map((c) => ({ ...c, src: '', alt: '', type: 'image' as const }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`,
    );
  }

  const normalizedImages = pool.map(normalizeMediaItem);

  const usedImages = Array.from(
    { length: totalSlots },
    (_, i) => normalizedImages[i % normalizedImages.length],
  );

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src && usedImages[i].type === usedImages[i - 1].type) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt,
    type: usedImages[i].type,
    poster: usedImages[i].poster,
  }));
}

function computeItemBaseRotation(
  offsetX: number,
  offsetY: number,
  sizeX: number,
  sizeY: number,
  segments: number,
) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = [],
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#120F17',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '',
  openedImageHeight = '',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = false,
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<FrameRect | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const cancelTapRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const pointerTypeRef = useRef<'mouse' | 'pen' | 'touch'>('mouse');
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);
  const captureGestureRef = useRef(false);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width);
      const h = Math.max(1, cr.height);
      const minDim = Math.min(w, h);
      const maxDim = Math.max(w, h);
      const aspect = w / h;

      let basis: number;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }

      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(6, Math.round(minDim * padFactor));
      const enlargeW = Math.round(Math.min(w * 0.96, 980));
      const enlargeH = Math.round(Math.min(h * 0.88, 860));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--enlarge-max-w', `${enlargeW}px`);
      root.style.setProperty('--enlarge-max-h', `${enlargeH}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement | null;
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = `${centeredLeft}px`;
          enlargedOverlay.style.top = `${centeredTop}px`;
        } else {
          enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
          enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
          enlargedOverlay.style.width = `${frameR.width}px`;
          enlargedOverlay.style.height = `${frameR.height}px`;
        }
      }
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight,
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);

      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(
          rotationRef.current.x - vY / 200,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg,
        );
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };

      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia],
  );

  const openItemFromElement = useCallback(
    (el: HTMLElement) => {
      if (openingRef.current) return;
      openingRef.current = true;
      openStartedAtRef.current = performance.now();
      lockScroll();

      const parent = el.parentElement as HTMLElement;
      focusedElRef.current = el;
      el.setAttribute('data-focused', 'true');

      const offsetX = getDataNumber(parent, 'offsetX', 0);
      const offsetY = getDataNumber(parent, 'offsetY', 0);
      const sizeX = getDataNumber(parent, 'sizeX', 2);
      const sizeY = getDataNumber(parent, 'sizeY', 2);

      const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
      const parentY = normalizeAngle(parentRot.rotateY);
      const globalY = normalizeAngle(rotationRef.current.y);
      let rotY = -(parentY + globalY) % 360;
      if (rotY < -180) rotY += 360;
      const rotX = -parentRot.rotateX - rotationRef.current.x;

      parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
      parent.style.setProperty('--rot-x-delta', `${rotX}deg`);

      const refDiv = document.createElement('div');
      refDiv.className = 'item__image item__image--reference opacity-0';
      refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
      parent.appendChild(refDiv);

      void refDiv.offsetHeight;

      const tileR = refDiv.getBoundingClientRect();
      const mainR = mainRef.current?.getBoundingClientRect();
      const frameR = frameRef.current?.getBoundingClientRect();

      if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
        openingRef.current = false;
        focusedElRef.current = null;
        parent.removeChild(refDiv);
        unlockScroll();
        return;
      }

      originalTilePositionRef.current = {
        left: tileR.left,
        top: tileR.top,
        width: tileR.width,
        height: tileR.height,
      };

      el.style.visibility = 'hidden';
      el.style.zIndex = '0';

      const overlay = document.createElement('div');
      overlay.className = 'enlarge';
      overlay.style.position = 'absolute';
      overlay.style.left = `${frameR.left - mainR.left}px`;
      overlay.style.top = `${frameR.top - mainR.top}px`;
      overlay.style.width = `${frameR.width}px`;
      overlay.style.height = `${frameR.height}px`;
      overlay.style.opacity = '0';
      overlay.style.zIndex = '30';
      overlay.style.willChange = 'transform, opacity';
      overlay.style.transformOrigin = 'top left';
      overlay.style.transition = `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease`;
      overlay.style.borderRadius = openedImageBorderRadius;
      overlay.style.overflow = 'hidden';
      overlay.style.background = '#0f0f0f';
      overlay.style.boxShadow = '0 10px 30px rgba(0,0,0,.35)';

      const rawSrc = parent.dataset.src || '';
      const rawAlt = parent.dataset.alt || '';
      const mediaType = (parent.dataset.mediaType as 'image' | 'video' | undefined) || resolveMediaType(rawSrc);
      const poster = parent.dataset.poster || undefined;

      appendMediaElement(overlay, {
        src: rawSrc,
        alt: rawAlt,
        type: mediaType,
        poster,
        grayscale,
        autoplay: mediaType === 'video',
        controls: mediaType === 'video',
        objectFit: 'contain',
      });
      viewerRef.current?.appendChild(overlay);

      const tx0 = tileR.left - frameR.left;
      const ty0 = tileR.top - frameR.top;
      const sx0 = tileR.width / frameR.width;
      const sy0 = tileR.height / frameR.height;

      const validSx0 = Number.isFinite(sx0) && sx0 > 0 ? sx0 : 1;
      const validSy0 = Number.isFinite(sy0) && sy0 > 0 ? sy0 : 1;

      overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${validSx0}, ${validSy0})`;

      setTimeout(() => {
        if (!overlay.parentElement) return;
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
        rootRef.current?.setAttribute('data-enlarging', 'true');
      }, 16);

      const wantsResize = openedImageWidth || openedImageHeight;
      if (wantsResize) {
        const onFirstEnd = (ev: TransitionEvent) => {
          if (ev.propertyName !== 'transform') return;
          overlay.removeEventListener('transitionend', onFirstEnd);
          const prevTransition = overlay.style.transition;
          overlay.style.transition = 'none';
          const tempWidth = openedImageWidth || `${frameR.width}px`;
          const tempHeight = openedImageHeight || `${frameR.height}px`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
          const newRect = overlay.getBoundingClientRect();
          overlay.style.width = `${frameR.width}px`;
          overlay.style.height = `${frameR.height}px`;
          void overlay.offsetWidth;
          overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
          const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
          requestAnimationFrame(() => {
            overlay.style.left = `${centeredLeft}px`;
            overlay.style.top = `${centeredTop}px`;
            overlay.style.width = tempWidth;
            overlay.style.height = tempHeight;
          });
          const cleanupSecond = () => {
            overlay.removeEventListener('transitionend', cleanupSecond);
            overlay.style.transition = prevTransition;
          };
          overlay.addEventListener('transitionend', cleanupSecond, { once: true });
        };
        overlay.addEventListener('transitionend', onFirstEnd);
      }
    },
    [
      enlargeTransitionMs,
      grayscale,
      lockScroll,
      openedImageBorderRadius,
      openedImageHeight,
      openedImageWidth,
      segments,
      unlockScroll,
    ],
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();

        const evt = event as PointerEvent;
        pointerTypeRef.current = (evt.pointerType as 'mouse' | 'pen' | 'touch') || 'mouse';
        captureGestureRef.current = pointerTypeRef.current !== 'touch';
        draggingRef.current = true;
        cancelTapRef.current = false;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
        tapTargetRef.current =
          (evt.target as Element).closest?.('.item__image') as HTMLElement | null;
      },
      onDrag: ({ event, last, velocity: velArr = [0, 0], direction: dirArr = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;

        const evt = event as PointerEvent;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;

        if (!captureGestureRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 <= 36) {
            if (last) {
              // Tap ou micro-mouvement : laisser le navigateur gérer le scroll vertical.
            } else {
              return;
            }
          } else if (Math.abs(dyTotal) > Math.abs(dxTotal)) {
            draggingRef.current = false;
            if (last) {
              startPosRef.current = null;
              tapTargetRef.current = null;
            }
            return;
          } else {
            captureGestureRef.current = true;
            movedRef.current = true;
          }
        } else if (!movedRef.current) {
          movedRef.current = true;
        }

        if (captureGestureRef.current && pointerTypeRef.current === 'touch') {
          evt.preventDefault();
        }

        if (!captureGestureRef.current && last) {
          draggingRef.current = false;
          let isTap = false;

          if (startPosRef.current) {
            const dx = evt.clientX - startPosRef.current.x;
            const dy = evt.clientY - startPosRef.current.y;
            const dist2 = dx * dx + dy * dy;
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6;
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true;
            }
          }

          if (isTap && tapTargetRef.current && !focusedElRef.current) {
            openItemFromElement(tapTargetRef.current);
          }

          startPosRef.current = null;
          tapTargetRef.current = null;
          captureGestureRef.current = false;
          return;
        }

        if (!captureGestureRef.current) {
          return;
        }

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg,
        );
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity;

        const cur = rotationRef.current;
        if (cur.x !== nextX || cur.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;
          let isTap = false;

          if (startPosRef.current) {
            const dx = evt.clientX - startPosRef.current.x;
            const dy = evt.clientY - startPosRef.current.y;
            const dist2 = dx * dx + dy * dy;
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6;
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true;
            }
          }

          let [vMagX, vMagY] = velArr;
          const [dirX, dirY] = dirArr;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (!isTap && Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = (mx / dragSensitivity) * 0.02;
            vy = (my / dragSensitivity) * 0.02;
          }

          if (!isTap && (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005)) {
            startInertia(vx, vy);
          }
          startPosRef.current = null;
          cancelTapRef.current = !isTap;

          if (isTap && tapTargetRef.current && !focusedElRef.current) {
            openItemFromElement(tapTargetRef.current);
          }
          tapTargetRef.current = null;

          if (cancelTapRef.current) setTimeout(() => (cancelTapRef.current = false), 120);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
          captureGestureRef.current = false;
        }
      },
    },
    { target: mainRef, eventOptions: { passive: false } },
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;

    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement as HTMLElement;
      const overlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement | null;
      if (!overlay) return;

      const refDiv = parent.querySelector('.item__image--reference');

      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        pauseVideo(overlay.querySelector('video'));
        overlay.remove();
        refDiv?.remove();
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        el.style.visibility = '';
        el.style.zIndex = '0';
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        return;
      }

      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current!.getBoundingClientRect();

      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height,
      };

      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height,
      };

      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = `
        position: absolute;
        left: ${overlayRelativeToRoot.left}px;
        top: ${overlayRelativeToRoot.top}px;
        width: ${overlayRelativeToRoot.width}px;
        height: ${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: ${openedImageBorderRadius};
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all ${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: ${grayscale ? 'grayscale(1)' : 'none'};
      `;

      const originalMedia = overlay.querySelector('video, img');
      pauseVideo(originalMedia);
      const clonedMedia = cloneMediaForClosing(originalMedia, parent, grayscale, 'contain');
      if (clonedMedia) {
        animatingOverlay.appendChild(clonedMedia);
      }

      overlay.remove();
      rootRef.current!.appendChild(animatingOverlay);

      void animatingOverlay.getBoundingClientRect();

      requestAnimationFrame(() => {
        animatingOverlay.style.left = `${originalPosRelativeToRoot.left}px`;
        animatingOverlay.style.top = `${originalPosRelativeToRoot.top}px`;
        animatingOverlay.style.width = `${originalPosRelativeToRoot.width}px`;
        animatingOverlay.style.height = `${originalPosRelativeToRoot.height}px`;
        animatingOverlay.style.opacity = '0';
      });

      const cleanup = () => {
        pauseVideo(animatingOverlay.querySelector('video'));
        animatingOverlay.remove();
        originalTilePositionRef.current = null;

        refDiv?.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';

        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');

        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          el.style.zIndex = '0';
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');

          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';

            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true') {
                  document.body.classList.remove('dg-scroll-lock');
                }
              }, 300);
            });
          });
        });
      };

      animatingOverlay.addEventListener('transitionend', cleanup, { once: true });
    };

    scrim.addEventListener('click', close);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, openedImageBorderRadius, grayscale]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  const cssStyles = `
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }

    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }

    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }

    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }

    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg)))
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg)))
                 translateZ(var(--radius));
    }

    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }

    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        width: min(96vw, 980px) !important;
        height: min(72vh, 820px) !important;
      }
    }

    .viewer-frame {
      width: min(96vw, 980px);
      height: min(88vh, 900px);
      max-width: 96vw;
      max-height: 88vh;
      flex-shrink: 0;
    }

    body.dg-scroll-lock {
      overflow: hidden !important;
      touch-action: none !important;
      overscroll-behavior: contain !important;
    }

    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }

    .item__image--video {
      box-shadow: inset 0 0 0 3px rgba(220, 38, 38, 0.9);
    }

    .item__video-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.15) 42%, transparent 100%);
    }

    .item__media-badge {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2;
      display: flex;
      min-width: 54px;
      height: 54px;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background: rgba(220, 38, 38, 0.92);
      color: #fff;
      font-size: 22px;
      line-height: 1;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      pointer-events: none;
    }

    .item__media-label {
      position: absolute;
      left: 10px;
      bottom: 10px;
      z-index: 2;
      border-radius: 9999px;
      padding: 4px 8px;
      background: rgba(0, 0, 0, 0.72);
      color: #fff;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      pointer-events: none;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative h-full w-full"
        style={
          {
            ['--segments-x']: segments,
            ['--segments-y']: segments,
            ['--overlay-blur-color']: overlayBlurColor,
            ['--tile-radius']: imageBorderRadius,
            ['--enlarge-radius']: openedImageBorderRadius,
            ['--image-filter']: grayscale ? 'grayscale(1)' : 'none',
          } as React.CSSProperties
        }
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid select-none place-items-center overflow-hidden bg-transparent"
          style={{
            touchAction: 'pan-y',
            WebkitUserSelect: 'none',
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="sphere-item absolute m-auto"
                  data-src={it.src}
                  data-alt={it.alt}
                  data-media-type={it.type}
                  data-poster={it.poster ?? ''}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={
                    {
                      ['--offset-x']: it.x,
                      ['--offset-y']: it.y,
                      ['--item-size-x']: it.sizeX,
                      ['--item-size-y']: it.sizeY,
                      top: '-999px',
                      bottom: '-999px',
                      left: '-999px',
                      right: '-999px',
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`item__image absolute block cursor-pointer overflow-hidden bg-gray-200 transition-transform duration-300${it.type === 'video' ? ' item__image--video' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      it.alt ||
                      (it.type === 'video' ? 'Lire la vidéo' : "Ouvrir l'image")
                    }
                    onClick={(e) => {
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    onPointerUp={(e) => {
                      if (e.pointerType !== 'touch') return;
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    style={{
                      inset: '10px',
                      borderRadius: `var(--tile-radius, ${imageBorderRadius})`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {it.type === 'video' ? (
                      <>
                        {it.poster ? (
                          <img
                            src={it.poster}
                            draggable={false}
                            alt={it.alt}
                            className="pointer-events-none h-full w-full object-cover"
                            style={{
                              backfaceVisibility: 'hidden',
                              filter: `var(--image-filter, ${grayscale ? 'grayscale(1)' : 'none'})`,
                            }}
                          />
                        ) : (
                          <video
                            src={it.src}
                            muted
                            playsInline
                            preload="metadata"
                            draggable={false}
                            className="pointer-events-none h-full w-full object-cover"
                            style={{
                              backfaceVisibility: 'hidden',
                              filter: `var(--image-filter, ${grayscale ? 'grayscale(1)' : 'none'})`,
                            }}
                          />
                        )}
                        <span className="item__video-overlay" aria-hidden="true" />
                        <span className="item__media-badge" aria-hidden="true">
                          ▶
                        </span>
                        <span className="item__media-label" aria-hidden="true">
                          Vidéo
                        </span>
                      </>
                    ) : (
                      <img
                        src={it.src}
                        draggable={false}
                        alt={it.alt}
                        className="pointer-events-none h-full w-full object-cover"
                        style={{
                          backfaceVisibility: 'hidden',
                          filter: `var(--image-filter, ${grayscale ? 'grayscale(1)' : 'none'})`,
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-[3]"
            style={{
              backgroundImage: `radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, ${overlayBlurColor}) 100%)`,
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-[3]"
            style={{
              WebkitMaskImage: `radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, ${overlayBlurColor}) 90%)`,
              maskImage: `radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, ${overlayBlurColor}) 90%)`,
              backdropFilter: 'blur(3px)',
            }}
          />

          <div
            className="pointer-events-none absolute left-0 right-0 top-0 z-[5] h-[120px] rotate-180"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${overlayBlurColor}))`,
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-[120px]"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${overlayBlurColor}))`,
            }}
          />

          <div
            ref={viewerRef}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
            style={{ padding: 'var(--viewer-pad)' }}
          >
            <div
              ref={scrimRef}
              className="scrim pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(3px)',
              }}
            />
            <div
              ref={frameRef}
              className="viewer-frame flex"
              style={{ borderRadius: `var(--enlarge-radius, ${openedImageBorderRadius})` }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
