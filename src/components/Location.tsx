import React from 'react';
import { 
  MapPin, 
  Plane, 
  Train, 
  Car, 
  Footprints, 
  Phone, 
  ExternalLink, 
  Trees, 
  ShieldCheck, 
  Landmark, 
  Compass, 
  Info,
  CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface LocationProps {
  lang: Language;
}

export const Location: React.FC<LocationProps> = ({ lang }) => {
  const t = content[lang].location;
  const isFrench = lang === 'fr';
  const isGerman = lang === 'de';
  const isSpanish = lang === 'es';

  return (
    <section id="location" className="py-24 bg-[#F5F2ED] border-b border-[#1B3022]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] font-bold block mb-2">
            {t.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B3022] font-normal tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-serif italic text-[#8C583E]">
            {t.subtitle}
          </p>
          <p className="mt-4 text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed font-light">
            {t.lead}
          </p>
        </div>

        {/* The Albrook Advantage Pillars */}
        <div className="mb-16">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-medium mb-6">
            {t.unusualCombination.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.unusualCombination.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 bg-white border border-[#1B3022]/10 rounded-sm shadow-xs"
              >
                <div className="w-8 h-8 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-3">
                  <Trees className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#1B3022] font-semibold mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#1B3022]/75 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Distances at a Glance */}
        <div className="mb-16 bg-white p-6 sm:p-8 border border-[#1B3022]/15 rounded-sm shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] font-bold block mb-1">
                {t.distancesTag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-medium">
                {t.distancesTitle}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.distances.slice(0, 6).map((dist) => (
              <div
                key={dist.id}
                className="p-4 bg-[#FAF8F5] border border-[#1B3022]/10 rounded-sm flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1B3022]">{dist.name}</h4>
                  <span className="text-[11px] text-[#8C583E] block font-mono mt-0.5">{dist.distance} · {dist.driveTime}</span>
                  <p className="text-[11px] text-[#1B3022]/70 mt-1 font-light">{dist.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Around Modes */}
        <div className="mb-16">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-medium mb-6">
            {t.gettingAround.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.gettingAround.modes.map((mode) => (
              <div
                key={mode.id}
                className="p-6 bg-white border border-[#1B3022]/15 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C5A059] bg-[#FAF8F5] px-2.5 py-1 rounded-2xs inline-block mb-3">
                    {mode.badge}
                  </span>
                  <h4 className="font-serif text-lg text-[#1B3022] font-semibold mb-1">
                    {mode.title}
                  </h4>
                  <p className="text-xs text-[#8C583E] font-medium mb-3">{mode.summary}</p>
                  <p className="text-xs text-[#1B3022]/75 font-light leading-relaxed">
                    {mode.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Airport Logistics Distinction */}
        <div className="mb-16 p-6 sm:p-8 bg-[#1B3022] text-white rounded-sm border border-[#C5A059]/40">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A059] font-bold block mb-2">
            {t.airports.tag}
          </span>
          <h3 className="font-serif text-2xl text-white font-medium mb-2">
            {t.airports.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-light mb-8 max-w-2xl">
            {t.airports.lead}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.airports.options.map((apt) => (
              <div
                key={apt.id}
                className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#C5A059] font-bold tracking-wider">
                    {apt.code}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded-2xs">
                    {apt.role}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-medium text-white">{apt.name}</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">{apt.description}</p>
                <div className="pt-2 border-t border-white/10 text-xs text-[#C5A059]">
                  {apt.transferNote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address and Map Link */}
        <div className="bg-white p-6 sm:p-8 border border-[#1B3022]/15 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#1B3022] font-semibold">
                {t.addressTitle}
              </h4>
              <p className="text-xs text-[#1B3022]/80 font-medium mt-0.5">{t.address}</p>
              <p className="text-xs text-[#1B3022]/60 font-light">{t.district}</p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Albrook,+Panama+City,+Panama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B3022] hover:bg-[#122218] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-xs shrink-0"
          >
            <span>{t.ctaDirections}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>
      </div>
    </section>
  );
};
