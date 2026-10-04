import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Camera, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { normalizeImagePath } from '../data/roomGalleries';

export interface RoomGalleryProps {
  images: readonly string[] | string[];
  roomName?: string;
  title?: string;
  subtitle?: string;
  emptyTitle?: string;
  emptySubtitle?: string;
  lang: Language;
  galleryId?: string;
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({
  images,
  roomName = '',
  title,
  subtitle,
  emptyTitle,
  emptySubtitle,
  lang,
  galleryId = 'room-gallery',
}) => {
  const displayName = title || roomName;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const lightboxThumbnailsRef = useRef<HTMLDivElement>(null);

  const totalPhotos = images.length;
  const safeIndex = totalPhotos > 0 ? ((currentIndex % totalPhotos) + totalPhotos) % totalPhotos : 0;
  const currentImageSrc = images[safeIndex] ? normalizeImagePath(images[safeIndex]) : '';
  const isCurrentFailed = currentImageSrc ? !!failedImages[currentImageSrc] : false;

  // Specific lower vertical alignment for master6.jpg, master7.jpg, and bano1.jpg (so the "Baño" sign is clearly visible)
  const checkIsBano1 = (src: string) =>
    src.includes('bano1') ||
    src.includes('bano-1') ||
    src.includes('bano_1');

  const checkIsShiftedLower = (src: string) =>
    src.includes('master6.jpg') ||
    src.includes('master7.jpg') ||
    src.includes('master-6.jpg') ||
    src.includes('master-7.jpg') ||
    checkIsBano1(src);

  const isBano1 = checkIsBano1(currentImageSrc);
  const isShiftedLower = checkIsShiftedLower(currentImageSrc);

  // Accessible labels
  const prevLabel =
    lang === 'fr'
      ? 'Photo précédente'
      : lang === 'de'
      ? 'Vorheriges Foto'
      : lang === 'en'
      ? 'Previous photo'
      : 'Foto anterior';

  const nextLabel =
    lang === 'fr'
      ? 'Photo suivante'
      : lang === 'de'
      ? 'Nächstes Foto'
      : lang === 'en'
      ? 'Next photo'
      : 'Foto siguiente';

  const openLightboxLabel =
    lang === 'fr'
      ? 'Ouvrir la galerie en plein écran'
      : lang === 'de'
      ? 'Vollbildgalerie öffnen'
      : lang === 'en'
      ? 'Open full-screen gallery'
      : 'Abrir galería en pantalla completa';

  const closeLightboxLabel =
    lang === 'fr'
      ? 'Fermer la galerie'
      : lang === 'de'
      ? 'Galerie schließen'
      : lang === 'en'
      ? 'Close gallery'
      : 'Cerrar galería';

  const handlePrev = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  }, [totalPhotos]);

  const handleNext = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  }, [totalPhotos]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const scrollThumbnail = (container: HTMLDivElement | null) => {
      if (!container) return;
      const activeEl = container.children[safeIndex] as HTMLElement;
      if (activeEl) {
        const containerLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const elLeft = activeEl.offsetLeft;
        const elWidth = activeEl.clientWidth;

        if (elLeft < containerLeft || elLeft + elWidth > containerLeft + containerWidth) {
          container.scrollTo({
            left: elLeft - containerWidth / 2 + elWidth / 2,
            behavior: 'smooth',
          });
        }
      }
    };

    scrollThumbnail(thumbnailsRef.current);
    if (isLightboxOpen) {
      scrollThumbnail(lightboxThumbnailsRef.current);
    }
  }, [safeIndex, isLightboxOpen]);

  // Touch swipe handling
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (totalPhotos === 0) {
    return (
      <div className="w-full bg-[#14231B] text-[#FAF8F5] p-10 sm:p-14 text-center border border-[#C5A059]/30 shadow-lg">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1B3022] border border-[#C5A059]/40 flex items-center justify-center">
          <Camera className="w-7 h-7 text-[#C5A059] opacity-90" />
        </div>
        <p className="font-serif text-xl sm:text-2xl text-[#C5A059] mb-1 font-light">
          {emptyTitle ||
            displayName ||
            (lang === 'fr'
              ? 'Galerie Photos'
              : lang === 'de'
              ? 'Fotogalerie'
              : lang === 'en'
              ? 'Photo Gallery'
              : 'Galería Fotográfica')}
        </p>
        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-[#C5A059]/90 mb-3 font-semibold">
            {subtitle}
          </p>
        )}
        <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto leading-relaxed">
          {emptySubtitle ||
            (lang === 'fr'
              ? 'Les photographies de cet espace apparaîtront ici une fois ajoutées.'
              : lang === 'de'
              ? 'Lokale Fotos für diesen Bereich werden hier angezeigt, sobald sie hinzugefügt wurden.'
              : lang === 'en'
              ? 'Local photographs for this area will appear here once added.'
              : 'Las fotografías locales de esta área se mostrarán aquí una vez agregadas.')}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full select-none" id={galleryId}>
      {/* 1. Main Large Showcase Image */}
      <div 
        className="relative w-full aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9] bg-[#14231B] overflow-hidden border border-[#1B3022]/15 shadow-lg group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label={`${displayName} ${
          lang === 'fr'
            ? 'visionneuse de galerie'
            : lang === 'de'
            ? 'Galeriebetrachter'
            : lang === 'en'
            ? 'gallery viewer'
            : 'visor de galería'
        }`}
      >
        {isCurrentFailed ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#14231B] text-[#FAF8F5]">
            <div className="w-14 h-14 rounded-full bg-[#1B3022] border border-[#C5A059]/40 flex items-center justify-center mb-3">
              <Camera className="w-7 h-7 text-[#C5A059]" />
            </div>
            <span className="font-serif text-lg sm:text-xl text-[#C5A059] font-light mb-1">
              {currentImageSrc.split('/').pop()}
            </span>
            <span className="text-[11px] sm:text-xs text-[#FAF8F5]/60 font-mono">
              {currentImageSrc.replace(/^\//, '')}
            </span>
            <span className="text-[10px] sm:text-xs text-[#FAF8F5]/80 mt-2 max-w-sm">
              {lang === 'fr'
                ? 'Emplacement prêt pour le fichier photo'
                : lang === 'de'
                ? 'Bereit für Bilddatei im Ordner'
                : lang === 'en'
                ? 'Ready for photograph file in folder'
                : 'Listo para archivo de fotografía en la carpeta'}
            </span>
          </div>
        ) : (
          <img
            key={currentImageSrc}
            src={currentImageSrc}
            alt={`${displayName} - ${
              lang === 'fr'
                ? 'Photo'
                : lang === 'de'
                ? 'Foto'
                : lang === 'en'
                ? 'Photo'
                : 'Foto'
            } ${safeIndex + 1} ${
              lang === 'fr'
                ? 'sur'
                : lang === 'de'
                ? 'von'
                : lang === 'en'
                ? 'of'
                : 'de'
            } ${totalPhotos} ${
              lang === 'fr'
                ? "à Greg's Place in Albrook"
                : lang === 'de'
                ? "bei Greg's Place in Albrook"
                : lang === 'en'
                ? "at Greg's Place in Albrook"
                : "en Greg's Place en Albrook"
            }`}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              objectPosition: isBano1
                ? 'center 5%'
                : isShiftedLower
                ? 'center 18%'
                : 'center center',
              transform: isBano1
                ? 'translateY(22px) scale(1.06)'
                : isShiftedLower
                ? 'translateY(12px) scale(1.05)'
                : undefined,
            }}
            loading="eager"
            onError={() => setFailedImages((prev) => ({ ...prev, [currentImageSrc]: true }))}
          />
        )}

        {/* Subtle gradient vignette at top & bottom for high contrast controls */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Top Badges: Room / Category Name & Click to Expand hint */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1.5 bg-[#1B3022]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow">
            {displayName}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-white/20 transition-all shadow hover:border-[#C5A059]"
            aria-label={openLightboxLabel}
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden xs:inline">
              {lang === 'fr'
                ? 'Plein Écran'
                : lang === 'de'
                ? 'Vollbild'
                : lang === 'en'
                ? 'Full Screen'
                : 'Pantalla Completa'}
            </span>
          </button>
        </div>

        {/* Bottom Badges: Image Counter & Photo Index */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="px-3 py-1.5 bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-mono tracking-widest flex items-center gap-2 shadow">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{safeIndex + 1} / {totalPhotos}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[11px] text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-white/10">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>
              {lang === 'fr'
                ? 'Cliquez ou glissez pour explorer'
                : lang === 'de'
                ? 'Klicken oder wischen zum Erkunden'
                : lang === 'en'
                ? 'Click or swipe to explore'
                : 'Haga clic o deslice para explorar'}
            </span>
          </div>
        </div>

        {/* Previous Navigation Arrow */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 hover:border-[#C5A059] flex items-center justify-center transition-all shadow-lg active:scale-95 group/btn"
            aria-label={prevLabel}
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Next Navigation Arrow */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 hover:border-[#C5A059] flex items-center justify-center transition-all shadow-lg active:scale-95 group/btn"
            aria-label={nextLabel}
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* 2. Scrollable Thumbnail Strip Underneath */}
      {totalPhotos > 1 && (
        <div className="mt-3 relative">
          <div 
            ref={thumbnailsRef}
            className="flex items-center gap-2.5 overflow-x-auto py-1.5 px-0.5 scrollbar-thin scroll-smooth no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {images.map((img, idx) => {
              const isActive = idx === safeIndex;
              const normalizedSrc = normalizeImagePath(img);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleThumbnailClick(idx)}
                  className={`relative shrink-0 w-20 sm:w-24 md:w-28 aspect-[16/10] overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 shadow-md scale-100 opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#C5A059]/60'
                  }`}
                  aria-label={`${roomName} - ${
                    lang === 'fr'
                      ? 'Voir photo'
                      : lang === 'de'
                      ? 'Foto ansehen'
                      : lang === 'en'
                      ? 'View photo'
                      : 'Ver foto'
                  } ${idx + 1}`}
                >
                  {failedImages[normalizedSrc] ? (
                    <div className="w-full h-full bg-[#14231B] flex flex-col items-center justify-center p-1 text-[#FAF8F5]">
                      <Camera className="w-3.5 h-3.5 text-[#C5A059] opacity-80 mb-0.5" />
                      <span className="text-[8px] font-mono text-[#FAF8F5]/70 truncate max-w-full px-0.5">
                        {normalizedSrc.split('/').pop()?.replace('.jpg', '')}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={normalizedSrc}
                      alt={`${displayName} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: checkIsBano1(normalizedSrc)
                          ? 'center 6%'
                          : checkIsShiftedLower(normalizedSrc)
                          ? 'center 18%'
                          : 'center center',
                      }}
                      loading="lazy"
                      onError={() => setFailedImages((prev) => ({ ...prev, [normalizedSrc]: true }))}
                    />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#C5A059]/15 pointer-events-none" />
                  )}
                  <span className="absolute bottom-0.5 right-1 px-1 bg-black/75 text-[9px] font-mono text-white">
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`${roomName} ${
            lang === 'fr'
              ? 'galerie en plein écran'
              : lang === 'de'
              ? 'Vollbildgalerie'
              : lang === 'en'
              ? 'full-screen gallery'
              : 'galería en pantalla completa'
          }`}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between text-white z-30 pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg sm:text-xl text-[#C5A059] font-light">
                {roomName}
              </span>
              <span className="hidden sm:inline-block text-xs text-white/50">·</span>
              <span className="px-2.5 py-1 bg-white/10 text-white text-xs font-mono tracking-wider">
                {safeIndex + 1} / {totalPhotos}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold border border-white/20 hover:border-[#C5A059] transition-all"
              aria-label={closeLightboxLabel}
            >
              <X className="w-4 h-4 text-[#C5A059]" />
              <span className="hidden xs:inline">
                {lang === 'fr'
                  ? 'Fermer'
                  : lang === 'de'
                  ? 'Schließen'
                  : lang === 'en'
                  ? 'Close'
                  : 'Cerrar'}
              </span>
            </button>
          </div>

          {/* Lightbox Center Image Showcase */}
          <div 
            className="relative flex-grow flex items-center justify-center py-4 my-auto overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center">
              {isCurrentFailed ? (
                <div className="p-8 sm:p-12 text-center bg-[#14231B] border border-[#C5A059]/40 max-w-md mx-auto shadow-2xl">
                  <Camera className="w-12 h-12 text-[#C5A059] mx-auto mb-3" />
                  <p className="font-serif text-xl text-[#FAF8F5] mb-1">
                    {currentImageSrc.split('/').pop()}
                  </p>
                  <p className="text-xs text-[#FAF8F5]/60 font-mono mb-3">
                    {currentImageSrc.replace(/^\//, '')}
                  </p>
                  <p className="text-xs text-[#C5A059]">
                    {lang === 'fr'
                      ? 'Emplacement prêt pour le fichier photo'
                      : lang === 'de'
                      ? 'Bereit für Bilddatei im Ordner'
                      : lang === 'en'
                      ? 'Ready for photograph file in folder'
                      : 'Listo para archivo de fotografía en la carpeta'}
                  </p>
                </div>
              ) : (
                <img
                  src={currentImageSrc}
                  alt={`${displayName} - ${
                    lang === 'fr'
                      ? 'Photo grand format'
                      : lang === 'de'
                      ? 'Vollbild-Foto'
                      : lang === 'en'
                      ? 'Full size photo'
                      : 'Foto completa'
                  } ${safeIndex + 1} ${
                    lang === 'fr'
                      ? 'sur'
                      : lang === 'de'
                      ? 'von'
                      : lang === 'en'
                      ? 'of'
                      : 'de'
                  } ${totalPhotos}`}
                  className="max-h-[72vh] w-auto max-w-full object-contain mx-auto shadow-2xl border border-white/10 transition-transform duration-300"
                  style={{
                    transform: isBano1
                      ? 'translateY(28px)'
                      : isShiftedLower
                      ? 'translateY(24px)'
                      : undefined,
                  }}
                  onError={() => setFailedImages((prev) => ({ ...prev, [currentImageSrc]: true }))}
                />
              )}
            </div>

            {/* Prev Arrow inside Lightbox */}
            {totalPhotos > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-[#C5A059] flex items-center justify-center transition-all shadow-2xl active:scale-95"
                aria-label={prevLabel}
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>
            )}

            {/* Next Arrow inside Lightbox */}
            {totalPhotos > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-[#C5A059] flex items-center justify-center transition-all shadow-2xl active:scale-95"
                aria-label={nextLabel}
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnail Carousel */}
          {totalPhotos > 1 && (
            <div className="shrink-0 pt-3 border-t border-white/10 z-30">
              <div 
                ref={lightboxThumbnailsRef}
                className="flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-thin scroll-smooth no-scrollbar"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {images.map((img, idx) => {
                  const isActive = idx === safeIndex;
                  const normalizedSrc = normalizeImagePath(img);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleThumbnailClick(idx)}
                      className={`relative shrink-0 w-16 sm:w-20 aspect-[16/10] overflow-hidden border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-[#C5A059] ring-2 ring-[#C5A059]/50 opacity-100 scale-105'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                      aria-label={`${roomName} - thumbnail ${idx + 1}`}
                    >
                      {failedImages[normalizedSrc] ? (
                        <div className="w-full h-full bg-[#14231B] flex flex-col items-center justify-center p-0.5 text-[#FAF8F5]">
                          <Camera className="w-3 h-3 text-[#C5A059] opacity-80" />
                          <span className="text-[7px] font-mono text-[#FAF8F5]/70 truncate max-w-full">
                            {idx + 1}
                          </span>
                        </div>
                      ) : (
                        <img
                          src={normalizedSrc}
                          alt=""
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: checkIsBano1(normalizedSrc)
                              ? 'center 6%'
                              : checkIsShiftedLower(normalizedSrc)
                              ? 'center 18%'
                              : 'center center',
                          }}
                          onError={() => setFailedImages((prev) => ({ ...prev, [normalizedSrc]: true }))}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-center text-[10px] text-white/40 mt-2 font-mono hidden sm:block">
                {lang === 'fr'
                  ? 'Utilisez les flèches ← / → ou glissez sur mobile · Échap pour fermer'
                  : lang === 'de'
                  ? 'Verwenden Sie Pfeile ← / → oder wischen Sie auf dem Smartphone · ESC zum Schließen'
                  : lang === 'en'
                  ? 'Use ← / → arrows or swipe on mobile · Press ESC to close'
                  : 'Use flechas ← / → o deslice en móvil · Presione ESC para cerrar'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
