import React from 'react';
import { 
  Home, 
  Feather, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Coffee, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface WhyStayProps {
  lang: Language;
  onBook: () => void;
}

export const WhyStay: React.FC<WhyStayProps> = ({ lang, onBook }) => {
  const t = content[lang].whyStay;
  const isFrench = lang === 'fr';
  const isGerman = lang === 'de';
  const isSpanish = lang === 'es';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#C5A059]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#C5A059]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C5A059]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="why-stay" className="py-24 bg-[#F5F2ED] border-b border-[#1B3022]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] font-bold block mb-2">
            {t.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B3022] font-normal tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-serif italic text-[#8C583E]">
            {t.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 bg-white border border-[#1B3022]/10 rounded-sm shadow-xs hover:border-[#C5A059] transition-all"
            >
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center mb-4">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="font-serif text-lg text-[#1B3022] font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3022]/75 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            type="button"
            onClick={onBook}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-[#122218] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {isFrench
                ? 'Réservez Votre Séjour à Greg\'s Place'
                : isGerman
                ? 'Buchen Sie Ihren Aufenthalt bei Greg\'s Place'
                : isSpanish
                ? 'Reserve Su Estadía en Greg\'s Place'
                : 'Reserve Your Stay at Greg\'s Place'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
