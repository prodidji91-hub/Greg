import React from 'react';
import { Trees, Leaf, Wind, ShieldCheck, Bird, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface WhyAlbrookProps {
  lang: Language;
  onExploreExperience: () => void;
}

export const WhyAlbrook: React.FC<WhyAlbrookProps> = ({ lang, onExploreExperience }) => {
  const t = content[lang].whyAlbrook;

  const getIcon = (id: string) => {
    switch (id) {
      case 'jungle':
        return <Trees className="w-5 h-5 text-[#C5A059]" />;
      case 'surrounded-nature':
        return <Leaf className="w-5 h-5 text-[#C5A059]" />;
      case 'clean-air':
        return <Wind className="w-5 h-5 text-[#C5A059]" />;
      case 'peace-safety':
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'birdlife-sound':
        return <Bird className="w-5 h-5 text-[#C5A059]" />;
      case 'accessible-harmony':
        return <Compass className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="why-albrook" className="py-24 bg-[#14231B] text-white relative overflow-hidden">
      {/* Subtle organic light reflections */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2A4533]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase tracking-[0.35em] text-[10px] font-bold">
              {t.tag}
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
            {t.title}
          </h2>

          <p className="text-[#C5A059] text-lg sm:text-xl font-serif italic mb-6">
            {t.subtitle}
          </p>

          <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-4">
            {t.lead}
          </p>

          <div className="inline-block px-5 py-2.5 bg-white/5 border border-[#C5A059]/30 text-xs sm:text-sm text-[#C5A059]">
            {t.contrastNotice}
          </div>
        </div>

        {/* 6 Striking Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.pillars.map((pillar: any) => (
            <div
              key={pillar.id}
              className="bg-[#1B3022]/80 backdrop-blur-sm border border-white/10 hover:border-[#C5A059] transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Photo banner if pillar has an image (e.g., Close to the Jungle) */}
                {pillar.image && (
                  <div className="relative overflow-hidden">
                    <LocalImage
                      src={pillar.image}
                      alt={pillar.title}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover"
                      containerClassName="rounded-none border-b border-white/10"
                      title={pillar.title}
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <div className="w-10 h-10 bg-black/80 backdrop-blur-md border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] shadow-lg">
                        {getIcon(pillar.id)}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-7">
                  {!pillar.image && (
                    <div className="w-12 h-12 bg-black/40 border border-[#C5A059]/30 flex items-center justify-center mb-5 group-hover:border-[#C5A059] transition-colors">
                      {getIcon(pillar.id)}
                    </div>
                  )}

                  <h3 className="font-serif text-xl font-normal text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7">
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>{lang === 'fr' ? 'Caractéristique authentique d\'Albrook' : lang === 'de' ? 'Authentisches Albrook-Merkmal' : lang === 'en' ? 'Authentic Albrook Feature' : 'Carácter Auténtico de Albrook'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intriguing Quote Block & Visual Backdrop */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#1B3022] via-[#243B2F] to-[#1B3022] border border-[#C5A059]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-serif text-2xl sm:text-3xl text-white italic font-light mb-3">
              {t.quote}
            </p>
            <p className="text-xs text-[#C5A059] uppercase tracking-widest font-mono">
              {t.quoteAttribution}
            </p>
          </div>

          <button
            onClick={onExploreExperience}
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
