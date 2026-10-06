import React from 'react';
import { Heart, Compass, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface AboutGregProps {
  lang: Language;
  onExploreExperience: () => void;
}

export const AboutGreg: React.FC<AboutGregProps> = ({
  lang,
  onExploreExperience,
}) => {
  const t = content[lang].aboutGreg;

  return (
    <section id="about-greg" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photograph Column: STRICTLY /pictures/greg.jpg */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative luxury architectural background offset */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C5A059] -z-0" />
              
              <div className="relative z-10 overflow-hidden shadow-2xl border border-[#1B3022]/10">
                <LocalImage
                  src={localPictures.greg}
                  alt="Greg - Host and guide at Greg's Place in Albrook, Panama City"
                  aspectRatio="aspect-[4/5]"
                  title={
                    lang === 'fr'
                      ? 'Greg · Votre Hôte'
                      : lang === 'de'
                      ? 'Greg · Ihr Gastgeber'
                      : lang === 'es'
                      ? 'Greg · Su Anfitrión'
                      : 'Greg · Your Host'
                  }
                  containerClassName="rounded-none shadow-none"
                />
              </div>

              {/* Host Badge floating card */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-[#1B3022] text-[#F5F2ED] p-5 shadow-2xl border border-[#C5A059]/40 max-w-[240px]">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                  <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    {lang === 'fr'
                      ? 'Accueil Personnalisé'
                      : lang === 'de'
                      ? 'Persönliche Betreuung'
                      : lang === 'es'
                      ? 'Atención Personal'
                      : 'Personal Care'}
                  </span>
                </div>
                <p className="text-xs text-[#F5F2ED]/90 leading-relaxed font-light">
                  &ldquo;
                  {lang === 'fr'
                    ? "Séjournez chez un véritable hôte qui partage les trésors cachés de la nature et de l'histoire du Panama."
                    : lang === 'de'
                    ? 'Wohnen Sie bei einem echten Gastgeber, der die verborgene Natur und Geschichte Panamas mit Ihnen teilt.'
                    : lang === 'es'
                    ? 'Alójese con un anfitrión auténtico que comparte la naturaleza y la historia oculta de Panamá.'
                    : 'Stay with a real host who shares the hidden nature and history of Panama.'}
                  &rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="text-[#8C583E] uppercase tracking-[0.3em] text-[10px] font-bold">
                {t.tag}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-2">
              {t.title}
            </h2>

            <p className="text-[#8C583E] text-lg font-serif italic mb-6">
              {t.subtitle}
            </p>

            <p className="text-base sm:text-lg text-[#1B3022] font-normal leading-relaxed mb-4">
              {t.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#1B3022]/80 leading-relaxed mb-8">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#1B3022]/10 mb-8">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl text-[#1B3022] font-light">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#1B3022]/70 leading-tight mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div>
              <button
                onClick={onExploreExperience}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-semibold uppercase tracking-widest transition-all shadow-md group"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
