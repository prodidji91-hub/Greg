import React, { useState } from 'react';
import { Compass, Info, Sparkles, Eye, Feather, MapPin } from 'lucide-react';
import { Language, WildlifeAnimal } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface WildlifeProps {
  lang: Language;
}

export const Wildlife: React.FC<WildlifeProps> = ({ lang }) => {
  const t = content[lang].wildlife;
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'birds' | 'mammals' | 'reptiles'>('all');

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
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white p-6 border border-[#1B3022]/10 hover:border-[#C5A059]/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#1B3022]/5 text-[#1B3022] font-semibold">
                    {animal.category}
                  </span>
                  <span className="text-[11px] text-[#8C583E] font-medium italic">
                    {animal.frequency}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1B3022] mb-1">
                  {animal.name}
                </h3>

                <p className="text-[11px] font-serif italic text-[#8C583E] mb-3">
                  {animal.scientificOrLocal}
                </p>

                <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed mb-4">
                  {animal.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1B3022]/10 flex items-center justify-between text-[11px] text-[#1B3022]/70">
                <span className="truncate">Habitat: {animal.habitat}</span>
                <Eye className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
