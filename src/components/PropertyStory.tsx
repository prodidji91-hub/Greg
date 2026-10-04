import React from 'react';
import { ShieldCheck, Trees, Home, Sparkles, Clock, ArrowRight, BedDouble } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface PropertyStoryProps {
  lang: Language;
  onExploreRooms: () => void;
}

export const PropertyStory: React.FC<PropertyStoryProps> = ({ lang, onExploreRooms }) => {
  const t = content[lang].propertyStory;

  return (
    <section id="story" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#8C583E]" />
            <span className="text-[#8C583E] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-[#8C583E] text-lg sm:text-xl font-serif italic mb-6">
            {t.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#1B3022]/90 leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* Story Narrative Grid with Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Rich Narrative Chapters */}
          <div className="lg:col-span-7 space-y-6 text-[#1B3022]/85 text-sm sm:text-base leading-relaxed">
            <div className="p-6 bg-white border-l-4 border-[#C5A059] shadow-sm">
              <div className="flex items-center gap-2 text-[#8C583E] text-xs uppercase font-bold tracking-widest mb-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {lang === 'fr'
                    ? 'PATRIMOINE DE LA ZONE DU CANAL'
                    : lang === 'de'
                    ? 'ERBE DER KANALZONE'
                    : lang === 'en'
                    ? 'CANAL ZONE HERITAGE'
                    : 'PATRIMONIO DE LA ZONA DEL CANAL'}
                </span>
              </div>
              <p className="text-[#1B3022] leading-relaxed">
                {t.narrativeP1}
              </p>
            </div>

            <div className="p-6 bg-white border-l-4 border-[#1B3022] shadow-sm">
              <div className="flex items-center gap-2 text-[#1B3022] text-xs uppercase font-bold tracking-widest mb-2">
                <Home className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {lang === 'fr'
                    ? 'RÉNOVATION SOIGNÉE'
                    : lang === 'de'
                    ? 'SORGFÄLTIGE RESTAURIERUNG'
                    : lang === 'en'
                    ? 'CAREFUL TRANSFORMATION'
                    : 'TRANSFORMACIÓN CUIDADOSA'}
                </span>
              </div>
              <p className="text-[#1B3022] leading-relaxed">
                {t.narrativeP2}
              </p>
            </div>

            <div className="p-6 bg-white border-l-4 border-[#8C583E] shadow-sm">
              <div className="flex items-center gap-2 text-[#8C583E] text-xs uppercase font-bold tracking-widest mb-2">
                <BedDouble className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {lang === 'fr'
                    ? 'HÉBERGEMENT EXCLUSIF'
                    : lang === 'de'
                    ? 'EXKLUSIVES GÄSTEANGEBOT'
                    : lang === 'en'
                    ? 'INTIMATE GUEST OFFERING'
                    : 'ALQUILER EXCLUSIVO PARA HUÉSPEDES'}
                </span>
              </div>
              <p className="text-[#1B3022] leading-relaxed">
                {t.narrativeP3}
              </p>
            </div>

            <div className="p-6 bg-[#F2EFE9] border border-[#C5A059]/30 shadow-sm">
              <div className="flex items-center gap-2 text-[#1B3022] text-xs uppercase font-bold tracking-widest mb-2">
                <Trees className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {lang === 'fr'
                    ? 'ENCLAVE PROTÉGÉE PAR LA LOI'
                    : lang === 'de'
                    ? 'GESETZLICH GESCHÜTZTE ENKLAVE'
                    : lang === 'en'
                    ? 'LEGALLY PROTECTED ENCLAVE'
                    : 'ZONA PROTEGIDA POR LEY'}
                </span>
              </div>
              <p className="text-[#1B3022] leading-relaxed">
                {t.narrativeP4}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C5A059] -z-0" />
              <div className="relative z-10 overflow-hidden shadow-xl border border-[#1B3022]/15 bg-white">
                <LocalImage
                  src="/pictures/sloth.jpeg"
                  alt={
                    lang === 'es'
                      ? 'Otro visitante ocasional en Greg\'s Place – Perezoso de dos dedos'
                      : lang === 'de'
                      ? 'Ein weiterer gelegentlicher Besucher bei Greg\'s Place – Zweifinger-Faultier'
                      : lang === 'fr'
                      ? 'Un autre visiteur occasionnel chez Greg\'s Place – Paresseux à deux doigts'
                      : 'Another occasional visitor at Greg\'s Place - Two-toed Sloth'
                  }
                  aspectRatio="aspect-[4/3]"
                  title={
                    lang === 'es'
                      ? 'Otro visitante ocasional en Greg\'s Place – Perezoso de dos dedos'
                      : lang === 'de'
                      ? 'Ein weiterer gelegentlicher Besucher bei Greg\'s Place – Zweifinger-Faultier'
                      : lang === 'fr'
                      ? 'Un autre visiteur occasionnel chez Greg\'s Place – Paresseux à deux doigts'
                      : 'Another occasional visitor at Greg\'s Place - Two-toed Sloth'
                  }
                  subtitle={
                    lang === 'es'
                      ? 'Otro visitante ocasional en Greg\'s Place – Perezoso de dos dedos'
                      : lang === 'de'
                      ? 'Ein weiterer gelegentlicher Besucher bei Greg\'s Place – Zweifinger-Faultier'
                      : lang === 'fr'
                      ? 'Un autre visiteur occasionnel chez Greg\'s Place – Paresseux à deux doigts'
                      : 'Another occasional visitor at Greg\'s Place - Two-toed Sloth'
                  }
                  containerClassName="rounded-none shadow-none"
                />
                <div className="p-3 bg-[#FAF8F5] border-t border-[#1B3022]/10 text-center">
                  <p className="font-serif italic text-xs sm:text-sm text-[#1B3022]">
                    {lang === 'es'
                      ? 'Búsquelos en los árboles de Cecropia del vecindario'
                      : lang === 'de'
                      ? 'Achten Sie in den Cecropia-Bäumen der Nachbarschaft auf sie'
                      : lang === 'fr'
                      ? 'Cherchez-les dans les arbres Cecropia du quartier'
                      : 'Look for them in Cecropia trees in the neighborhood'}
                  </p>
                </div>
              </div>
            </div>

            {/* Safe Neighborhood Box */}
            <div className="bg-[#1B3022] text-white p-6 shadow-xl border border-[#C5A059]/40">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-normal text-white mb-1.5">
                    {lang === 'fr'
                      ? 'Quartier Sécurisé'
                      : lang === 'de'
                      ? 'Sichere Nachbarschaft'
                      : lang === 'en'
                      ? 'Safe Neighborhood'
                      : 'Barrio Seguro'}
                  </h4>
                  <p className="text-xs text-white/85 leading-relaxed font-light mb-3">
                    {t.disclaimerBadge}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#C5A059] uppercase tracking-wider">
                    <span>
                      {lang === 'fr'
                        ? 'Promenades Sûres · Jour & Nuit · Zone Protégée'
                        : lang === 'de'
                        ? 'Sichere Spaziergänge · Tag & Nacht · Geschütztes Gebiet'
                        : lang === 'en'
                        ? 'Safe Walkability · Day & Night · Protected Area'
                        : 'Caminatas Seguras · Día y Noche · Área Protegida'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Story Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#1B3022]/10 hover:border-[#C5A059] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#8C583E] uppercase tracking-widest font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-[19px] font-normal text-[#1B3022] mb-2">
                  {item.title}
                </h4>
                <p className={`text-xs text-[#1B3022]/75 leading-relaxed font-bold ${idx === 0 ? 'border-solid' : ''}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Explore Rooms */}
        <div className="text-center">
          <button
            onClick={onExploreRooms}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </section>
  );
};
