import React from 'react';
import {
  Home,
  Bed,
  Tv,
  Wifi,
  Sparkles,
  Droplets,
  Wind,
  Coffee,
  Sun,
  Dices,
  TreePine,
  Camera,
  Flame,
  Shirt,
  Utensils,
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface ThePlaceProps {
  lang: Language;
  onBook: () => void;
  onOpenPhotoGallery?: () => void;
}

export const ThePlace: React.FC<ThePlaceProps> = ({ lang, onBook, onOpenPhotoGallery }) => {
  const t = content[lang].thePlace;

  const getAmenityIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('bathroom') || lower.includes('baño')) {
      return <Droplets className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('garden') || lower.includes('jardín')) {
      return <TreePine className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('patio')) {
      return <Home className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('terrace') || lower.includes('terraza')) {
      return <Sun className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('kitchen') || lower.includes('cocina')) {
      return <Coffee className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('dining') || lower.includes('comedor')) {
      return <Utensils className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('living room') || lower.includes('sala de estar')) {
      return <Tv className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('board games') || lower.includes('juegos de mesa')) {
      return <Dices className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('internet') || lower.includes('wi-fi') || lower.includes('utilities') || lower.includes('servicios')) {
      return <Wifi className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('barbecue') || lower.includes('barbacoa') || lower.includes('bbq')) {
      return <Flame className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('cleaning') || lower.includes('limpieza')) {
      return <Sparkles className="w-5 h-5 text-[#8C583E]" />;
    }
    if (lower.includes('laundry') || lower.includes('lavandería')) {
      return <Shirt className="w-5 h-5 text-[#8C583E]" />;
    }
    return <Sparkles className="w-5 h-5 text-[#8C583E]" />;
  };

  return (
    <section id="the-place" className="py-24 bg-[#F5F2EC] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
            {t.title}
          </h2>

          <p className="text-[#C5A059] text-lg font-serif italic mb-6">
            {t.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#1B3022] font-normal leading-relaxed mb-4">
            {t.lead}
          </p>

          <p className="text-sm sm:text-base text-[#1B3022]/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Editorial Photo Collage: Exterior, Living Room, Kitchen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div>
            <LocalImage
              src={localPictures.exterior}
              alt="Historic Canal Zone home exterior at Greg's Place in Albrook"
              aspectRatio="aspect-[4/3]"
              title={lang === 'fr' ? "Résidence Historique" : lang === 'de' ? "Historische Residenz" : lang === 'en' ? "Historic Residence" : "Residencia Histórica"}
              subtitle={lang === 'fr' ? "Architecture de la Zone du Canal de plus de 80 ans" : lang === 'de' ? "Über 80 Jahre alte Architektur der Kanalzone" : lang === 'en' ? "80-Year-Old Canal Zone Architecture" : "Arquitectura de la Zona del Canal de Más de 80 Años"}
              containerClassName="border border-[#1B3022]/10 shadow-sm"
            />
          </div>

          <div>
            <LocalImage
              src={localPictures.livingRoom}
              alt="Comfortable remodeled lounge and living room at Greg's Place"
              aspectRatio="aspect-[4/3]"
              title={lang === 'fr' ? "Salon & Espaces de Détente" : lang === 'de' ? "Lounge & Wohnbereiche" : lang === 'en' ? "Lounge & Living Spaces" : "Salas de Estar y Descanso"}
              subtitle={lang === 'fr' ? "Salon aéré, chaleureux & espace jeux" : lang === 'de' ? "Gemütliches, luftiges Wohnzimmer & Spielebereich" : lang === 'en' ? "Relaxed, Airy Living Room & Game Area" : "Espaciosa Sala de Estar y Zona de Juegos"}
              containerClassName="border border-[#1B3022]/10 shadow-sm"
            />
          </div>

          <div>
            <LocalImage
              src={localPictures.kitchen}
              alt="Shared kitchen and dining area at Greg's Place"
              aspectRatio="aspect-[4/3]"
              title={lang === 'fr' ? "Cuisine Partagée pour les Hôtes" : lang === 'de' ? "Gemeinschaftsküche für Gäste" : lang === 'en' ? "Shared Guest Kitchen" : "Cocina Compartida para Huéspedes"}
              subtitle={lang === 'fr' ? "Fruits tropicaux frais & station café" : lang === 'de' ? "Frische Tropenfrüchte & Kaffeestation" : lang === 'en' ? "Fresh Tropical Fruits & Coffee Station" : "Frutas Tropicales Frescas y Café"}
              containerClassName="border border-[#1B3022]/10 shadow-sm"
            />
          </div>
        </div>

        {/* Photo Gallery Navigation Access Point */}
        {onOpenPhotoGallery && (
          <div className="flex justify-center -mt-8 mb-16">
            <button
              type="button"
              onClick={onOpenPhotoGallery}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-xs font-bold uppercase tracking-widest shadow-xs hover:shadow-md transition-all group active:scale-[0.99]"
              id="btn-the-place-open-gallery"
            >
              <Camera className="w-4 h-4 text-[#C5A059]" />
              <span>{lang === 'fr' ? 'Voir la Galerie Photos de la Propriété' : lang === 'de' ? 'Fotogalerie der Unterkunft ansehen' : lang === 'en' ? 'View Property Photo Gallery' : 'Ver Galería de Fotos de la Propiedad'}</span>
              <span className="text-[#C5A059] group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        )}

        {/* Highlighted Amenities Grid (Editorial Cards) */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-light text-[#1B3022] mb-8">
            {t.featuresTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#1B3022]/10 hover:border-[#C5A059]/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-start group"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 bg-[#F5F2ED] border border-[#C5A059]/30 flex items-center justify-center shrink-0 group-hover:border-[#C5A059] transition-colors">
                    {getAmenityIcon(item.title)}
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-medium text-[#1B3022] leading-snug">
                    {item.title}
                  </h4>
                </div>

                {(item as any).description && (
                  <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed font-light mb-2.5">
                    {(item as any).description}
                  </p>
                )}

                {(item as any).secondaryText && (
                  <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed font-light mb-2.5">
                    {(item as any).secondaryText}
                  </p>
                )}

                {(item as any).points && (item as any).points.length > 0 && (
                  <ul className="space-y-1.5 mt-1 text-xs sm:text-sm text-[#1B3022]/85 font-light">
                    {((item as any).points as readonly string[]).map((pt: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sub-banner CTA */}
        <div className="bg-[#1B3022] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#C5A059]/30">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-1 font-bold">
              Authentic Canal Zone History
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-light">
              Experience the peace of a real Panama neighborhood.
            </h4>
            <p className="text-xs sm:text-sm text-white/80 mt-2 font-light">
              Quiet nights, garden songbirds at dawn, and personalized host recommendations.
            </p>
          </div>

          <button
            onClick={onBook}
            className="shrink-0 px-8 py-4 bg-[#C5A059] hover:bg-[#A68648] text-white font-bold text-[11px] tracking-widest uppercase transition-all shadow-md"
          >
            Check Availability
          </button>
        </div>

      </div>
    </section>
  );
};
