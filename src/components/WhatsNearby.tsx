import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Ship,
  Trees,
  Landmark,
  Compass,
  Mountain,
  Building2,
  Clock,
  MapPin,
  UtensilsCrossed,
  CheckCircle2,
  Moon,
  ExternalLink,
  Store,
  Train,
  X,
  Maximize2
} from 'lucide-react';
import { Language, NearbyPlace, FacilityItem } from '../types';
import { content } from '../data/content';

interface NearbyCardPhoto {
  src: string;
  alt: string;
  title?: string;
}

const nearbyCardPhotos: Record<string, { src: string; defaultAlt: string; defaultTitle: string }> = {
  'multiplaza-mall': {
    src: '/pictures/Mujltiplaza.jpg',
    defaultAlt: 'Multiplaza Mall in Panama City',
    defaultTitle: 'Multiplaza Mall',
  },
  'metro': {
    src: '/pictures/metro.jpeg',
    defaultAlt: 'Albrook Metro Station',
    defaultTitle: 'Albrook Metro Station',
  },
  'albrook-bus-terminal': {
    src: '/pictures/bus.jpg',
    defaultAlt: 'Albrook Bus Terminal (Gran Terminal Nacional de Transporte Albrook)',
    defaultTitle: 'Albrook Bus Terminal',
  },
  'albrook-mall': {
    src: '/pictures/Albrook Mall.jpg',
    defaultAlt: 'Albrook Mall in Panama',
    defaultTitle: 'Albrook Mall',
  },
  'albrook-swimming-pool': {
    src: '/pictures/Albrook Pool.jpg',
    defaultAlt: 'Albrook Swimming Pool (Piscina de Albrook)',
    defaultTitle: 'Albrook Swimming Pool (Piscina de Albrook)',
  },
  'amador-causeway': {
    src: '/pictures/Amador Causeway.jpg',
    defaultAlt: 'Amador Causeway in Panama City',
    defaultTitle: 'Amador Causeway',
  },
  'cerro-ancon': {
    src: '/pictures/Ancon Hill.jpeg',
    defaultAlt: 'Ancon Hill (Cerró Ancon) in Panama City',
    defaultTitle: 'Ancon Hill (Cerró Ancon)',
  },
  'casco-viejo': {
    src: '/pictures/Casco Viejo Alternate.jpg',
    defaultAlt: 'Casco Viejo (Historic Old Town) in Panama City',
    defaultTitle: 'Casco Viejo',
  },
  'biomuseo': {
    src: '/pictures/Biomuseo.jpg',
    defaultAlt: 'Biomuseo (Museum of Biodiversity) in Panama City',
    defaultTitle: 'Biomuseo',
  },
  'panama-city-base': {
    src: '/pictures/Panama City.jpg',
    defaultAlt: 'Panama City skyline and urban exploration',
    defaultTitle: 'Panama City',
  },
  'parque-metropolitano': {
    src: '/pictures/PARQUE-METROPOLITANO.jpg',
    defaultAlt: 'Parque Natural Metropolitano (Metropolitan Natural Park) in Panama City',
    defaultTitle: 'Metropolitan Natural Park',
  },
  'walk-neighborhood': {
    src: '/pictures/Neighborhood Walk 1.jpg',
    defaultAlt: 'Walk and Explore the Neighborhood in Albrook, Panama City',
    defaultTitle: 'Walk and Explore the Neighborhood',
  },
  'artesan-center': {
    src: '/pictures/Artisan Center.jpg',
    defaultAlt: 'Artisan Center in Panama City',
    defaultTitle: 'Artisan Center',
  },
  'cinta-costera': {
    src: '/pictures/Cinta Costera Alt 2.jpg',
    defaultAlt: 'Cinta Costera (Coastal Ribbon) in Panama City',
    defaultTitle: 'Cinta Costera (Coastal Ribbon)',
  },
  'panama-canal': {
    src: '/pictures/PanamaCanalss.jpg',
    defaultAlt: 'Panama Canal – Miraflores Locks Visitor Center',
    defaultTitle: 'Panama Canal – Miraflores Locks',
  },
  'kotowa-coffee-house': {
    src: '/pictures/kotowa coffee shop.jpg',
    defaultAlt: 'Kotowa Coffee House in Panama',
    defaultTitle: 'Kotowa Coffee House',
  },
  'punta-culebra': {
    src: '/pictures/PuntaCulebraNaturefrog.jpg',
    defaultAlt: 'Punta Culebra Nature Center (Smithsonian Tropical Research Institute)',
    defaultTitle: 'Punta Culebra Nature Center',
  },
  'panama-nature-center': {
    src: '/pictures/panama nature center.jpg',
    defaultAlt: 'Panama Nature Center (APPC) and Tamandua sanctuary',
    defaultTitle: 'Panama Nature Center',
  },
  'panama-canal-railway': {
    src: '/pictures/panpanamarailway.jpg',
    defaultAlt: 'Panama Canal Railway',
    defaultTitle: 'Panama Canal Railway',
  },
  'night-walk': {
    src: '/pictures/paca.jpg',
    defaultAlt: 'Night Walk & Nocturnal Wildlife in Albrook',
    defaultTitle: 'Night Walk',
  },
};

interface WhatsNearbyProps {
  lang: Language;
}

export const WhatsNearby: React.FC<WhatsNearbyProps> = ({ lang }) => {
  const t = content[lang].whatsNearby;
  const [lightboxImage, setLightboxImage] = useState<NearbyCardPhoto | null>(null);

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

  const getPlaceIcon = (iconType?: string, isRed?: boolean) => {
    const iconColor = isRed ? 'text-[#1E3A8A]' : 'text-[#C5A059]';
    switch (iconType) {
      case 'shopping':
      case 'crafts':
        return <ShoppingBag className={`w-5 h-5 ${iconColor}`} />;
      case 'canal':
        return <Ship className={`w-5 h-5 ${iconColor}`} />;
      case 'nature':
        return <Trees className={`w-5 h-5 ${iconColor}`} />;
      case 'night':
        return <Moon className={`w-5 h-5 ${iconColor}`} />;
      case 'heritage':
        return <Landmark className={`w-5 h-5 ${iconColor}`} />;
      case 'mountain':
        return <Mountain className={`w-5 h-5 ${iconColor}`} />;
      case 'city':
        return <Building2 className={`w-5 h-5 ${iconColor}`} />;
      case 'services':
        return <Store className={`w-5 h-5 ${iconColor}`} />;
      case 'train':
        return <Train className={`w-5 h-5 ${iconColor}`} />;
      case 'link':
        return <ExternalLink className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <Compass className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  return (
    <section
      id="whats-nearby"
      className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
            {t.title}
          </h2>

          <div className="mb-4">
            <p className="text-[#8C583E] text-lg sm:text-xl font-serif italic">
              {t.subtitle}
            </p>
            {t.subtitleNote && (
              <p className="text-[#8C583E] text-lg sm:text-xl font-serif italic mt-0.5">
                {t.subtitleNote}
              </p>
            )}
          </div>

          <p className="text-sm sm:text-base text-[#1B3022]/80 leading-relaxed">
            {t.lead}
          </p>
        </div>

        {/* Walkable Dining Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 bg-gradient-to-r from-[#1B3022] via-[#243B2F] to-[#1B3022] text-[#F5F2ED] border border-[#C5A059]/40 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-none bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] font-bold block mb-1">
                  {lang === 'fr' ? 'Restauration dans le Quartier' : lang === 'de' ? 'Gastronomie im Viertel' : lang === 'en' ? 'Neighborhood Dining' : 'Gastronomía en el Vecindario'}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-normal">
                  {t.diningCallout?.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed max-w-3xl font-normal">
                  {t.diningCallout?.description}
                </p>
              </div>
            </div>
            <div className="shrink-0 self-stretch md:self-center flex md:flex-col items-center justify-center px-4 py-2 bg-white/5 border border-[#C5A059]/30 text-center">
              <span className="font-serif text-2xl font-light text-[#C5A059]">&gt;15</span>
              <span className="text-[10px] uppercase tracking-wider text-white/85 font-mono font-medium">
                {lang === 'fr' ? 'Lieux accessibles à pied' : lang === 'de' ? 'Zu Fuß erreichbar' : lang === 'en' ? 'Walkable Spots' : 'Lugares a Pie'}
              </span>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-stretch">
          {(t.places as readonly NearbyPlace[]).filter(p => p.id !== '51-fun-things').map((place: NearbyPlace) => {
            const isClickable = Boolean(place.linkUrl);
            const isRedHighlight = false;
            const cardPhotoConfig = nearbyCardPhotos[place.id];
            const cardPhoto: NearbyCardPhoto | undefined = place.image
              ? {
                  src: place.image,
                  alt: place.imageAlt || place.name.split('\n')[0],
                  title: place.name.split('\n')[0],
                }
              : cardPhotoConfig
              ? {
                  src: cardPhotoConfig.src,
                  alt: `${place.name.split('\n')[0]} · Greg's Place Albrook`,
                  title: place.name.split('\n')[0],
                }
              : undefined;

            return (
              <div
                key={place.id}
                id={place.id}
                className={`p-7 transition-all flex flex-col justify-between group relative ${
                  isRedHighlight
                    ? 'bg-gradient-to-b from-red-50/90 via-white to-red-50/40 border-2 border-red-600 shadow-xl ring-4 ring-red-500/15 hover:border-red-700 hover:shadow-2xl'
                    : 'bg-white border border-[#1B3022]/10 hover:border-[#C5A059] shadow-sm hover:shadow-md'
                } ${isClickable ? 'cursor-pointer hover:-translate-y-1 block' : ''}`}
                onClick={(e) => {
                  if (isClickable && place.linkUrl) {
                    if ((e.target as HTMLElement).closest('a')) return;
                    window.open(place.linkUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {/* Red highlight badge */}
                {isRedHighlight && (
                  <div className="absolute -top-3.5 left-6 bg-red-600 text-white text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 shadow-md flex items-center gap-1.5">
                    <span>★</span>
                    <span>{lang === 'fr' ? 'À ne pas manquer' : lang === 'de' ? 'Must-Do Empfehlung' : lang === 'es' ? 'Imperdible' : 'Must-Do Guide'}</span>
                  </div>
                )}
                <div>
                  {/* Card Top: Icon & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center transition-colors ${
                      isRedHighlight
                        ? 'bg-blue-50/70 border border-blue-200 group-hover:border-blue-400'
                        : 'bg-[#F5F2ED] border border-[#1B3022]/10 group-hover:border-[#C5A059]'
                    }`}>
                      {getPlaceIcon(place.iconType, isRedHighlight)}
                    </div>
                    <span className={`text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 ${
                      isRedHighlight
                        ? 'text-white bg-red-600'
                        : 'text-[#8C583E] bg-[#EDEAE4]'
                    }`}>
                      {place.category}
                    </span>
                  </div>

                  {/* Place Name or Prominently Formatted Title */}
                  {place.prominentTitleLines ? (
                    <div className={`mb-4 p-5 text-center transition-all ${
                      isRedHighlight
                        ? 'bg-blue-50/30 border-2 border-[#1E3A8A]/30 group-hover:border-[#1E3A8A]/50 group-hover:bg-blue-50/50 shadow-md'
                        : 'bg-[#FAF8F5] border border-[#C5A059]/30 group-hover:border-[#C5A059] group-hover:bg-[#F5F2ED] shadow-sm'
                    }`}>
                      <div className={`font-serif text-2xl sm:text-3xl font-bold leading-tight ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#1B3022]'}`}>
                        {place.prominentTitleLines[0]}
                      </div>
                      <div className={`text-[11px] uppercase font-mono tracking-[0.25em] font-bold my-1.5 ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#C5A059]'}`}>
                        {place.prominentTitleLines[1]}
                      </div>
                      <div className={`font-serif text-xl sm:text-2xl font-medium leading-tight ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#8C583E]'}`}>
                        {place.prominentTitleLines[2]}
                      </div>
                      <div className={`text-[11px] uppercase font-mono tracking-[0.25em] font-bold my-1.5 ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#C5A059]'}`}>
                        {place.prominentTitleLines[3]}
                      </div>
                      <div className={`font-serif text-2xl sm:text-3xl font-bold leading-tight ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#1B3022]'}`}>
                        {place.prominentTitleLines[4]}
                      </div>
                    </div>
                  ) : place.name.includes('\n') ? (
                    <div className="mb-3 leading-snug">
                      <h3 className="font-serif text-xl font-medium text-[#1B3022]">
                        {place.name.split('\n')[0]}
                      </h3>
                      <div className="font-serif text-sm sm:text-base text-[#8C583E] italic mt-0.5">
                        {place.name.split('\n')[1]}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3 leading-snug">
                      <h3 className="font-serif text-xl font-medium text-[#1B3022]">
                        {place.name}
                      </h3>
                      {place.organization && (
                        <div className="font-serif text-sm text-[#8C583E] italic mt-0.5 font-medium">
                          {place.organization}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Distance & Drive Time Pill */}
                  {(place.distance || place.driveTime) && (
                    <div className={`flex flex-col gap-1.5 mb-4 p-2.5 border ${
                      isRedHighlight
                        ? 'bg-blue-50/60 border-blue-200'
                        : 'bg-[#FAF8F5] border-[#C5A059]/20'
                    }`}>
                      {place.distance && (
                        <div className={`flex items-center gap-1.5 text-sm font-semibold ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#1B3022]'}`}>
                          <MapPin className={`w-4 h-4 shrink-0 ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#C5A059]'}`} />
                          <span>{place.distance}</span>
                        </div>
                      )}
                      {place.driveTime && (
                        <div className={`flex items-center gap-1.5 text-xs font-medium ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#8C583E]'}`}>
                          <Clock className={`w-4 h-4 shrink-0 ${isRedHighlight ? 'text-[#1E3A8A]' : 'text-[#C5A059]'}`} />
                          <span>{place.driveTime}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Small Landscape Photo Feature with Click-to-Expand Lightbox */}
                  {cardPhoto && (
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setLightboxImage(cardPhoto);
                        }}
                        className="w-full text-left group/photo focus:outline-none focus:ring-2 focus:ring-[#C5A059]/60 cursor-pointer block rounded-[2px]"
                        aria-label={`${lang === 'fr' ? 'Agrandir la photo de' : lang === 'de' ? 'Foto vergrößern von' : lang === 'es' ? 'Ampliar foto de' : 'Expand photo of'} ${cardPhoto.title || place.name.split('\n')[0]}`}
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#1B3022]/15 bg-[#FAF8F5] shadow-xs group-hover/photo:border-[#C5A059] group-hover/photo:shadow-md transition-all duration-300">
                          <img
                            src={encodeURI(cardPhoto.src)}
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
                    </div>
                  )}

                  {/* Description */}
                  {place.description && (
                    <div className="text-sm sm:text-[15px] text-[#1B3022]/90 leading-relaxed mb-4 font-normal whitespace-pre-line">
                      {(() => {
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        if (!place.description.match(urlRegex)) {
                          return place.description;
                        }
                        const parts = place.description.split(urlRegex);
                        return parts.map((part: string, i: number) => {
                          if (part.match(urlRegex)) {
                            return (
                              <a
                                key={i}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#8C583E] hover:text-[#C5A059] font-medium transition-colors break-all"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {part}
                              </a>
                            );
                          }
                          return part;
                        });
                      })()}
                    </div>
                  )}

                  {/* Local Note Footer (Host Note) - Positioned immediately after description globally */}
                  {place.futureNote && (
                    <div className="mb-4 pt-3 pb-3 border-t border-b border-[#1B3022]/10 space-y-1.5 text-xs sm:text-[12.5px] text-[#1B3022]/85 bg-[#FAF8F5]/60 p-3">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#C5A059] uppercase tracking-wider font-bold">
                        <span>{lang === 'fr' ? 'Note de l\'hôte' : lang === 'de' ? 'Hinweis des Gastgebers' : lang === 'en' ? 'Host Note' : 'Nota Local'}</span>
                      </div>
                      <div className="italic leading-relaxed whitespace-pre-line font-medium break-words text-[#1B3022]/90">
                        {(() => {
                          const urlRegex = /(https?:\/\/[^\s]+)/g;
                          if (!place.futureNote.match(urlRegex)) {
                            return place.futureNote;
                          }
                          const parts = place.futureNote.split(urlRegex);
                          return parts.map((part: string, i: number) => {
                            if (part.match(urlRegex)) {
                              return (
                                <a
                                  key={i}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-[#8C583E] hover:text-[#C5A059] break-all not-italic font-semibold transition-colors inline-block mt-1"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          });
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Additional Links */}
                  {place.additionalLinks && place.additionalLinks.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-[#1B3022]/10 space-y-2">
                      {place.additionalLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 text-xs sm:text-[13px] font-semibold text-[#8C583E] hover:text-[#C5A059] transition-colors p-2.5 bg-[#FAF8F5] border border-[#1B3022]/10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="underline underline-offset-4 decoration-[#C5A059]/40">{link.label}</span>
                          <ExternalLink className="w-4 h-4 shrink-0 text-[#C5A059]" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Highlights List */}
                  {place.highlights && place.highlights.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-[#1B3022]/10 space-y-2">
                      {place.highlights.map((highlight: string, idx: number) => {
                        const isSubItem = highlight.startsWith('  ') || highlight.startsWith('\t');
                        const text = highlight.trim();
                        const urlRegex = /(https?:\/\/[^\s]+)/g;

                        const renderTextWithLinks = (contentStr: string) => {
                          if (!contentStr.match(urlRegex)) return contentStr;
                          const parts = contentStr.split(urlRegex);
                          return parts.map((part: string, i: number) => {
                            if (part.match(urlRegex)) {
                              return (
                                <a
                                  key={i}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-[#8C583E] hover:text-[#C5A059] font-medium transition-colors break-all inline-block mt-0.5"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          });
                        };

                        return (
                          <div
                            key={idx}
                            className={`flex items-start gap-2 text-xs sm:text-[13px] ${
                              isSubItem
                                ? 'ml-4 pl-1.5 text-[11.5px] sm:text-xs text-[#1B3022]/80 font-normal'
                                : 'text-[#1B3022]/85 font-medium'
                            }`}
                          >
                            {isSubItem ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                            )}
                            <span className="whitespace-pre-line">{renderTextWithLinks(text)}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Facilities List (for Stores & Facilities) */}
                  {place.facilities && place.facilities.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-[#1B3022]/10 space-y-2.5 max-h-[420px] overflow-y-auto pr-1.5 divide-y divide-[#1B3022]/5">
                      {place.facilities.map((facility: FacilityItem, idx: number) => (
                        <div key={idx} className="pt-2 first:pt-0">
                          <div className="text-sm sm:text-[14.5px] font-semibold text-[#1B3022]">
                            {facility.name}
                          </div>
                          {facility.note && (
                            <div className="text-xs text-[#1B3022]/75 italic mt-0.5">
                              {facility.note}
                            </div>
                          )}
                          <div className="text-xs sm:text-[12.5px] text-[#8C583E] font-medium flex items-center gap-1.5 mt-0.5">
                            <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span>{facility.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Clickable Card Link Indicator */}
                  {place.linkUrl && (
                    <a
                      href={place.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`pt-3 border-t flex items-center justify-between gap-2 text-xs sm:text-[13px] font-semibold transition-colors mt-2 ${
                        isRedHighlight
                          ? 'border-blue-200 text-[#0284C7] group-hover:text-[#0369A1]'
                          : 'border-[#1B3022]/10 text-[#8C583E] group-hover:text-[#C5A059]'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className={`underline underline-offset-4 ${isRedHighlight ? 'decoration-[#0284C7] font-bold text-[#0284C7]' : 'decoration-[#C5A059]/40'}`}>
                        {place.linkText || (lang === 'fr' ? 'Voir 51+ activités sur tourscanner.com' : lang === 'de' ? '51+ Aktivitäten auf tourscanner.com ansehen' : lang === 'en' ? 'tourscanner.com/things-to-do-in-panama-city-panama' : 'Ver 51+ actividades en tourscanner.com')}
                      </span>
                      <ExternalLink className={`w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRedHighlight ? 'text-[#0284C7]' : 'text-[#C5A059]'}`} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Map & 51+ Fun Things Card Row */}
        {(() => {
          const funThingsPlace = (t.places as readonly NearbyPlace[]).find((p) => p.id === '51-fun-things');
          if (!funThingsPlace) return null;

          const isClickable = Boolean(funThingsPlace.linkUrl);

          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
              {/* Left: Location Map */}
              <div className="lg:col-span-7 bg-white p-7 border border-[#1B3022]/10 shadow-sm flex flex-col justify-between h-full group relative hover:border-[#C5A059] transition-all">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#8C583E] uppercase tracking-wider font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{lang === 'fr' ? 'Localisation interactive' : lang === 'de' ? 'Interaktive Karte' : lang === 'es' ? 'Ubicación de Greg’s Place' : 'Interactive Location Map'}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#1B3022]/5 text-[#1B3022] font-semibold">
                      Albrook Oasis
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1B3022] mb-1">
                    {lang === 'fr' ? 'Greg’s Place à Albrook' : lang === 'de' ? 'Greg’s Place in Albrook' : lang === 'es' ? 'Greg’s Place en Albrook' : 'Greg’s Place in Albrook'}
                  </h3>
                  <p className="text-xs text-[#8C583E] italic">
                    Calle Los Guayacanes 247, Albrook, Panama City, Panama
                  </p>
                </div>

                <div className="flex-grow min-h-[350px] relative rounded-xs overflow-hidden border border-[#1B3022]/10 shadow-inner">
                  <iframe
                    title="Interactive Location Map of Greg's Place in Albrook"
                    src="https://maps.google.com/maps?q=Calle%20Los%20Guayacanes%20247,%20Albrook,%20Panama%20City,%20Panama&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Right: 51+ Card */}
              <div className="lg:col-span-5 flex flex-col h-full justify-between">
                <div
                  key={funThingsPlace.id}
                  id={funThingsPlace.id}
                  className="p-7 h-full transition-all flex flex-col justify-between group relative bg-white border-2 border-red-600 shadow-xl ring-4 ring-red-500/15 hover:border-red-700 hover:shadow-2xl cursor-pointer hover:-translate-y-1 block"
                  onClick={(e) => {
                    if (funThingsPlace.linkUrl) {
                      if ((e.target as HTMLElement).closest('a')) return;
                      window.open(funThingsPlace.linkUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  {/* Red highlight badge */}
                  <div className="absolute -top-3.5 left-6 bg-red-600 text-white text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 shadow-md flex items-center gap-1.5">
                    <span>★</span>
                    <span>{lang === 'fr' ? 'À ne pas manquer' : lang === 'de' ? 'Must-Do Empfehlung' : lang === 'es' ? 'Imperdible' : 'Must-Do Guide'}</span>
                  </div>

                  <div>
                    {/* Card Top: Icon & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center transition-colors bg-blue-50/70 border border-blue-200 group-hover:border-blue-400">
                        {getPlaceIcon(funThingsPlace.iconType, true)}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 text-white bg-red-600">
                        {funThingsPlace.category}
                      </span>
                    </div>

                    {/* Prominently Formatted Title */}
                    {funThingsPlace.prominentTitleLines && (
                      <div className="mb-4 p-5 text-center transition-all bg-blue-50/30 border-2 border-[#1E3A8A]/30 group-hover:border-[#1E3A8A]/50 group-hover:bg-blue-50/50 shadow-md">
                        <div className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#1E3A8A]">
                          {funThingsPlace.prominentTitleLines[0]}
                        </div>
                        <div className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold my-1.5 text-[#1E3A8A]">
                          {funThingsPlace.prominentTitleLines[1]}
                        </div>
                        <div className="font-serif text-xl sm:text-2xl font-medium leading-tight text-[#1E3A8A]">
                          {funThingsPlace.prominentTitleLines[2]}
                        </div>
                        <div className="text-[11px] uppercase font-mono tracking-[0.25em] font-bold my-1.5 text-[#1E3A8A]">
                          {funThingsPlace.prominentTitleLines[3]}
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#1E3A8A]">
                          {funThingsPlace.prominentTitleLines[4]}
                        </div>
                      </div>
                    )}

                    {/* Distance / Details Pill */}
                    <div className="flex flex-col gap-1.5 mb-4 p-2.5 border bg-blue-50/60 border-blue-200">
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A]">
                        <MapPin className="w-4 h-4 shrink-0 text-[#1E3A8A]" />
                        <span>{funThingsPlace.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#1E3A8A]">
                        <Clock className="w-4 h-4 shrink-0 text-[#1E3A8A]" />
                        <span>{funThingsPlace.driveTime}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-sm sm:text-[15px] text-[#1B3022]/90 leading-relaxed mb-4 font-normal">
                      {funThingsPlace.description}
                    </div>
                  </div>

                  {/* Link indicator */}
                  <a
                    href={funThingsPlace.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 border-t border-blue-200 text-[#0284C7] group-hover:text-[#0369A1] flex items-center justify-between gap-2 text-xs sm:text-[13px] font-semibold transition-colors mt-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="underline underline-offset-4 decoration-[#0284C7] font-bold">
                      {lang === 'fr' ? 'Voir 51+ activités sur tourscanner.com' : lang === 'de' ? '51+ Aktivitäten auf tourscanner.com ansehen' : lang === 'en' ? 'tourscanner.com/things-to-do-in-panama-city-panama' : 'Ver 51+ actividades en tourscanner.com'}
                    </span>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0284C7]" />
                  </a>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Host Guidance Banner */}
        <div className="p-6 bg-white border-l-4 border-[#C5A059] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm sm:text-[15px] text-[#1B3022]/90">
          <p className="leading-relaxed font-normal">
            {t.expandHint}
          </p>
          <span className="shrink-0 text-[11px] font-mono text-[#8C583E] uppercase tracking-wider font-bold px-3 py-1 bg-[#F5F2ED] border border-[#C5A059]/30">
            {lang === 'fr' ? 'Conseils personnalisés de Greg' : lang === 'de' ? 'Persönliche Empfehlungen von Greg' : lang === 'en' ? 'Personal Host Guidance' : 'Orientación Personal de Greg'}
          </span>
        </div>
      </div>

      {/* Reusable Lightbox Modal for What's Nearby Photos */}
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
                src={encodeURI(lightboxImage.src)}
                alt={lightboxImage.alt}
                className="max-h-[75vh] sm:max-h-[80vh] max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl w-auto h-auto object-contain block select-none"
              />
              {lightboxImage.title && (
                <div className="py-2.5 px-4 bg-[#1B3022] border-t border-[#C5A059]/30 flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <span className="font-serif text-[#FAF8F5] font-light truncate">
                    {lightboxImage.title}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] shrink-0">
                    Greg&apos;s Place · Albrook
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
