import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const t = content[lang].reviews;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? t.items.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === t.items.length - 1 ? 0 : prev + 1));
  };

  const current = t.items[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold">
                {t.tag}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
              {t.title}
            </h2>

            <p className="text-[#C5A059] text-lg font-serif italic">
              {t.subtitle}
            </p>
          </div>

          {/* Rating Summary Capsule */}
          <div className="p-4 bg-white border border-[#1B3022]/10 shadow-sm flex items-center gap-4">
            <div className="flex items-center gap-1 text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
              ))}
            </div>
            <div className="border-l border-[#1B3022]/10 pl-4">
              <span className="text-xs font-bold text-[#1B3022] block">
                {t.ratingSummary}
              </span>
              <span className="text-[11px] text-[#C5A059] flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3 h-3" />
                <span>{t.verifiedTag}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Testimonial Container */}
        <div className="relative bg-white p-8 sm:p-12 lg:p-16 border border-[#1B3022]/10 shadow-sm mb-8 overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-1 text-[#C5A059] mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
                <span className="ml-3 text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                  {current.highlight}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1B3022] mb-4">
                &ldquo;{current.title}&rdquo;
              </h3>

              <p className="font-serif text-base sm:text-lg md:text-xl text-[#1B3022]/85 leading-relaxed italic mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#1B3022]/10">
              <div>
                <span className="font-serif text-lg font-medium text-[#1B3022] block">
                  {current.guest}
                </span>
                <span className="text-xs text-[#1B3022]/60">
                  {current.country} · {current.date}
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  aria-label={
                    lang === 'fr'
                      ? 'Avis précédent'
                      : lang === 'de'
                      ? 'Vorherige Bewertung'
                      : lang === 'es'
                      ? 'Reseña anterior'
                      : 'Previous review'
                  }
                  className="p-3 bg-[#F5F2ED] hover:bg-[#EDEAE4] border border-[#1B3022]/15 text-[#1B3022] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono text-[#C5A059] font-bold px-2">
                  {currentIndex + 1} / {t.items.length}
                </div>
                <button
                  onClick={nextReview}
                  aria-label={
                    lang === 'fr'
                      ? 'Avis suivant'
                      : lang === 'de'
                      ? 'Nächste Bewertung'
                      : lang === 'es'
                      ? 'Siguiente reseña'
                      : 'Next review'
                  }
                  className="p-3 bg-[#F5F2ED] hover:bg-[#EDEAE4] border border-[#1B3022]/15 text-[#1B3022] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-review miniature grid preview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 text-left transition-all border ${
                currentIndex === idx
                  ? 'bg-white border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                  : 'bg-white/60 border-[#1B3022]/10 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-0.5 text-[#C5A059] mb-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs font-medium text-[#1B3022] truncate">
                {item.title}
              </p>
              <p className="text-[11px] text-[#1B3022]/60 truncate">
                {item.guest} ({item.country})
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
