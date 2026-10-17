import React, { useState, useEffect, useRef } from 'react';
import { Compass, Info, Sparkles, Eye, Feather, MapPin, X, Maximize2 } from 'lucide-react';
import { Language, WildlifeAnimal } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface WildlifeCardPhoto {
  src: string;
  alt: string;
  title?: string;
}

const wildlifeCardPhotos: Record<string, { src: string; defaultAlt: string; defaultTitle: string; secondarySrc?: string; secondaryAlt?: string; secondaryTitle?: string }> = {
  'tropical-slider-turtle': {
    src: '/pictures/turtles.jpg',
    defaultAlt: 'Tropical Slider Turtle (Trachemys venusta) in Albrook, Panama',
    defaultTitle: 'Tropical Slider Turtle',
  },
  'sloth': {
    src: '/pictures/Slothhhh.jpg',
    defaultAlt: "Two and Three-toed Sloth in tropical tree canopy around Greg's Place",
    defaultTitle: 'Two and Three-toed Sloths',
  },
  'capybara': {
    src: '/pictures/Lesser-Capybaras.jpg',
    defaultAlt: 'Lesser Capybara around Crocodile Creek in Albrook, Panama',
    defaultTitle: 'Capybara',
  },
  'iguana': {
    src: '/pictures/iguanaaa.jpg',
    defaultAlt: "Green Iguana in tropical foliage around Greg's Place",
    defaultTitle: 'Iguana',
  },
  'monkeys': {
    src: '/pictures/Geograys.jpg',
    defaultAlt: "Geoffroy's Tamarin Monkeys around Greg's Place in Albrook, Panama",
    defaultTitle: 'Geoffroy’s Tamarin Monkeys',
  },
  'caiman': {
    src: '/pictures/crocodiles.jpg',
    defaultAlt: "Crocodile and Caiman along Crocodile Creek near Greg's Place",
    defaultTitle: 'Crocodiles (Short Walk)',
  },
  'agouti': {
    src: '/pictures/mouses.jpg',
    defaultAlt: "Central American Agouti (Ñeque) foraging around Greg's Place in Albrook, Panama",
    defaultTitle: 'Central American Agoutis (Ñeques)',
  },
  'jesus-christ-lizard': {
    src: '/pictures/basilik.jpg',
    defaultAlt: "Common Basilisk (Jesus Christ Lizard) along Crocodile Creek near Greg's Place",
    defaultTitle: 'Common Basilisk (Jesus Christ Lizard)',
  },
  'variegated-squirrel': {
    src: '/pictures/squirel3.jpg',
    defaultAlt: "Variegated Squirrel in tropical tree canopy at Greg's Place in Albrook, Panama",
    defaultTitle: 'Variegated Squirrel',
  },
  'toucans': {
    src: '/pictures/Tucannn.jpg',
    defaultAlt: "Keel-billed Toucan perched at Greg's Place in Albrook, Panama",
    defaultTitle: 'Keel-billed Toucans',
  },
  'coatimundi': {
    src: '/pictures/CoatiMundiiiiii.jpg',
    defaultAlt: "White-nosed Coatimundi (Gato Solo) around Greg's Place in Albrook, Panama",
    defaultTitle: 'White-nosed Coatimundis (Gatos Solos)',
  },
  'tropical-birds': {
    src: '/pictures/red woodpecker.jpg',
    defaultAlt: "Crimson-crested Woodpecker and tropical birdlife around Greg's Place in Albrook, Panama",
    defaultTitle: 'Tropical Birds',
    secondarySrc: '/pictures/15-yellow-backed-oriole-yelling.jpg',
    secondaryAlt: "Yellow-backed Oriole (Icterus chrysater) at Greg's Place in Albrook, Panama",
    secondaryTitle: 'Yellow-backed Oriole',
  },
  'paca': {
    src: '/pictures/paca.jpg',
    defaultAlt: 'Paca (Cuniculus paca) in Albrook, Panama',
    defaultTitle: 'Paca',
  },
};

interface WildlifeProps {
  lang: Language;
}

const FlyingBird: React.FC = () => {
  const [isFlying, setIsFlying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let timeoutId: NodeJS.Timeout;
    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const runFlight = () => {
      if (isVisible) {
        setIsFlying(true);
        timeoutId = setTimeout(() => {
          setIsFlying(false);
          timeoutId = setTimeout(runFlight, 9000 + Math.random() * 4000);
        }, 9500);
      } else {
        timeoutId = setTimeout(runFlight, 3000);
      }
    };

    timeoutId = setTimeout(runFlight, 2500);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-20 rounded-[inherit]">
      {isFlying && (
        <div className="absolute top-10 right-[-140px] animate-tropical-flight w-[85px] sm:w-[120px] md:w-[135px] text-[#C5A059] opacity-95 filter drop-shadow-sm">
          <div style={{ transform: 'scaleX(-1)' }} className="w-full h-full">
            <svg viewBox="0 0 120 70" className="w-full h-full fill-current">
              <path d="M40,35 C45,30 55,28 65,30 C75,32 85,25 95,18 C90,28 80,35 70,38 C55,42 45,40 40,35 Z" />
              <path d="M92,18 C102,15 115,20 118,25 C112,28 102,24 92,22 Z" />
              <path d="M50,33 Q70,5 90,20 Q70,35 50,33 Z" className="animate-tropical-wing" />
              <path d="M38,36 L15,42 L35,39 Z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export const Wildlife: React.FC<WildlifeProps> = ({ lang }) => {
  const t = content[lang].wildlife;
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'birds' | 'mammals' | 'reptiles'>('all');
  const [lightboxImage, setLightboxImage] = useState<WildlifeCardPhoto | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxImage]);

  const filteredAnimals = selectedCategory === 'all'
    ? t.animals
    : t.animals.filter(a => a.category === selectedCategory);

  return (
    <section id="wildlife" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#8C583E] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
            {t.title}
          </h2>

          <p className="text-[#8C583E] text-lg font-serif italic mb-4">
            {t.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed mb-4">
            {t.lead}
          </p>

          {/* Sighting Frequency Disclaimer Box */}
          <div className="p-4 bg-white border-l-2 border-[#C5A059] shadow-sm flex items-start gap-3">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <p className="text-xs text-[#1B3022]/80 leading-relaxed italic font-serif">
              {t.disclaimer}
            </p>
          </div>
        </div>

        {/* Feature Wildlife Image: /pictures/geoffry tamaron.jpg */}
        <div className="mt-6 sm:mt-8 mb-16">
          <LocalImage
            src={localPictures.wildlife}
            alt="Authentic wildlife and tamarins around Greg's Place in Albrook, Panama"
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            title="Panama Wildlife at Greg's Place"
            subtitle="Geoffroy’s tamarins, agoutis, toucans, sloths & coatimundis in their authentic tropical habitat"
            containerClassName="border border-[#1B3022]/10 shadow-sm"
            className="object-cover object-center"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-[11px] font-bold text-[#1B3022] uppercase tracking-wider mr-2">
            {lang === 'fr'
              ? 'Filtrer la Faune :'
              : lang === 'de'
              ? 'Fauna filtern:'
              : lang === 'en'
              ? 'Filter Fauna:'
              : 'Filtrar Fauna:'}
          </span>
          {(['all', 'birds', 'mammals', 'reptiles'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1B3022] text-white shadow-sm'
                  : 'bg-white border border-[#1B3022]/15 text-[#1B3022] hover:bg-[#EDEAE4]'
              }`}
            >
              {cat === 'all' &&
                (lang === 'fr'
                  ? 'Toute la Faune'
                  : lang === 'de'
                  ? 'Alle Tierarten'
                  : lang === 'en'
                  ? 'All Wildlife'
                  : 'Toda la Fauna')}
              {cat === 'birds' &&
                (lang === 'fr'
                  ? 'Oiseaux Tropicaux'
                  : lang === 'de'
                  ? 'Tropische Vögel'
                  : lang === 'en'
                  ? 'Tropical Birds'
                  : 'Aves Tropicales')}
              {cat === 'mammals' &&
                (lang === 'fr'
                  ? 'Mammifères (Agoutis, Coatis, Paresseux)'
                  : lang === 'de'
                  ? 'Säugetiere (Agutis, Nasenbären, Faultiere)'
                  : lang === 'en'
                  ? 'Mammals (Ñeques, Coatis, Sloths)'
                  : 'Mamíferos (Ñeques, Coatis, Perezosos)')}
              {cat === 'reptiles' &&
                (lang === 'fr'
                  ? 'Reptiles & Ruisseau (10 Min. à Pied)'
                  : lang === 'de'
                  ? 'Reptilien & Bachlauf (10 Min. zu Fuß)'
                  : lang === 'en'
                  ? 'Reptiles & 10-Min Walk Stream'
                  : 'Reptiles y Quebrada')}
            </button>
          ))}
        </div>

        {/* Wildlife Field Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animalItem) => {
            const animal = animalItem as unknown as WildlifeAnimal;
            const isFullWidth = animal.id === 'tropical-birds' || Boolean(animal.birdSpeciesList);
            const cardPhotoConfig = wildlifeCardPhotos[animal.id];
            const cardPhoto: WildlifeCardPhoto | undefined = animal.image
              ? {
                  src: animal.image,
                  alt: animal.imageAlt || animal.name,
                  title: animal.name,
                }
              : cardPhotoConfig
              ? {
                  src: cardPhotoConfig.src,
                  alt: `${animal.name} · Greg's Place Albrook`,
                  title: animal.name,
                }
              : undefined;

            return (
              <div
                key={animal.id}
                className={`relative bg-white p-6 border border-[#1B3022]/10 hover:border-[#C5A059]/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden ${
                  isFullWidth ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {animal.id === 'tropical-birds' && <FlyingBird />}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#1B3022]/5 text-[#1B3022] font-semibold">
                      {animal.category}
                    </span>
                    <span className="text-[11px] text-[#8C583E] font-medium italic">
                      {animal.frequency}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1B3022] mb-1">
                    {animal.name}
                  </h3>

                  {animal.scientificOrLocal && (
                    <p className="text-xs sm:text-sm font-serif italic text-[#8C583E] mb-3">
                      {animal.scientificOrLocal}
                    </p>
                  )}

                  {/* Small Landscape Photo Feature with Click-to-Expand Lightbox */}
                  {cardPhoto && (
                    <div className="mb-3.5">
                      {cardPhotoConfig?.secondarySrc ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setLightboxImage(cardPhoto);
                            }}
                            className="w-full text-left group/photo focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60 cursor-pointer block rounded-[2px]"
                            aria-label={`${lang === 'fr' ? 'Agrandir la photo de' : lang === 'de' ? 'Foto vergrößern von' : lang === 'es' ? 'Ampliar foto de' : 'Expand photo of'} ${cardPhoto.title || animal.name}`}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#1B3022]/15 bg-[#FAF8F5] shadow-xs group-hover/photo:border-[#C5A059] group-hover/photo:shadow-md transition-all duration-300">
                              <img
                                src={cardPhoto.src}
                                alt={cardPhoto.alt}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/photo:scale-102"
                                loading="lazy"
                              />
                              <div className="absolute bottom-2 right-2 bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs border border-white/20 flex items-center gap-1 opacity-90 group-hover/photo:opacity-100 transition-opacity shadow-xs">
                                <Maximize2 className="w-2.5 h-2.5 text-[#C5A059]" />
                                <span className="hidden sm:inline">{lang === 'fr' ? 'Agrandir' : lang === 'de' ? 'Vergrößern' : lang === 'es' ? 'Ampliar' : 'Expand'}</span>
                              </div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setLightboxImage({
                                src: cardPhotoConfig.secondarySrc!,
                                alt: cardPhotoConfig.secondaryAlt || 'Yellow-backed Oriole',
                                title: cardPhotoConfig.secondaryTitle || 'Yellow-backed Oriole',
                              });
                            }}
                            className="w-full text-left group/photo focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60 cursor-pointer block rounded-[2px]"
                            aria-label={`${lang === 'fr' ? 'Agrandir la photo de' : lang === 'de' ? 'Foto vergrößern von' : lang === 'es' ? 'Ampliar foto de' : 'Expand photo of'} ${cardPhotoConfig.secondaryTitle || 'Yellow-backed Oriole'}`}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#1B3022]/15 bg-[#FAF8F5] shadow-xs group-hover/photo:border-[#C5A059] group-hover/photo:shadow-md transition-all duration-300">
                              <img
                                src={cardPhotoConfig.secondarySrc}
                                alt={cardPhotoConfig.secondaryAlt || 'Yellow-backed Oriole'}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/photo:scale-102"
                                loading="lazy"
                              />
                              <div className="absolute bottom-2 right-2 bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs border border-white/20 flex items-center gap-1 opacity-90 group-hover/photo:opacity-100 transition-opacity shadow-xs">
                                <Maximize2 className="w-2.5 h-2.5 text-[#C5A059]" />
                                <span className="hidden sm:inline">{lang === 'fr' ? 'Agrandir' : lang === 'de' ? 'Vergrößern' : lang === 'es' ? 'Ampliar' : 'Expand'}</span>
                              </div>
                            </div>
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setLightboxImage(cardPhoto);
                          }}
                          className={`w-full ${isFullWidth ? 'max-w-md' : ''} text-left group/photo focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60 cursor-pointer block rounded-[2px]`}
                          aria-label={`${lang === 'fr' ? 'Agrandir la photo de' : lang === 'de' ? 'Foto vergrößern von' : lang === 'es' ? 'Ampliar foto de' : 'Expand photo of'} ${cardPhoto.title || animal.name}`}
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#1B3022]/15 bg-[#FAF8F5] shadow-xs group-hover/photo:border-[#C5A059] group-hover/photo:shadow-md transition-all duration-300">
                            <img
                              src={cardPhoto.src}
                              alt={cardPhoto.alt}
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/photo:scale-102"
                              loading="lazy"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs border border-white/20 flex items-center gap-1 opacity-90 group-hover/photo:opacity-100 transition-opacity shadow-xs">
                              <Maximize2 className="w-2.5 h-2.5 text-[#C5A059]" />
                              <span className="hidden sm:inline">{lang === 'fr' ? 'Agrandir' : lang === 'de' ? 'Vergrößern' : lang === 'es' ? 'Ampliar' : 'Expand'}</span>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#1B3022]/85 leading-relaxed mb-3 font-normal whitespace-pre-line">
                    {animal.description}
                  </p>

                  {/* 18 Bird Species Grid */}
                  {animal.birdSpeciesList && animal.birdSpeciesList.length > 0 && (
                    <div className="my-4 p-4 sm:p-5 bg-[#FAF8F5] border border-[#1B3022]/10 rounded-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {animal.birdSpeciesList.map((bird, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#1B3022] font-medium">
                            <Feather className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span>{bird}</span>
                          </div>
                        ))}
                      </div>
                      {animal.birdFooter && (
                        <p className="text-xs sm:text-sm text-[#8C583E] italic mt-4 pt-3 border-t border-[#1B3022]/10 font-serif font-medium">
                          {animal.birdFooter}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#1B3022]/10 flex items-center justify-between text-[11px] text-[#1B3022]/70">
                  <span className="truncate">
                    {animal.habitat ? `Habitat: ${animal.habitat}` : "Greg's Place · Albrook, Panama"}
                  </span>
                  <Eye className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reusable Lightbox Modal for Wildlife Photos */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title || lightboxImage.alt}
        >
          {/* Close button positioned top-right for easy one-tap access */}
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 text-white/90 hover:text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/25 transition-all shadow-lg hover:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Container: clicking inside prevents backdrop dismiss */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-black/60 border border-[#C5A059]/50 shadow-2xl rounded-[2px] flex flex-col">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-h-[75vh] sm:max-h-[80vh] max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl w-auto h-auto object-contain block select-none"
              />
              {lightboxImage.title && (
                <div className="py-2.5 px-4 bg-[#1B3022] border-t border-[#C5A059]/30 flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="font-serif text-[#FAF8F5] font-light truncate">
                    {lightboxImage.title}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] shrink-0">
                    Greg&apos;s Place · Wildlife
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
