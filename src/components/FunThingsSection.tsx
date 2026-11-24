import React from 'react';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { Language, NearbyPlace } from '../types';
import { content } from '../data/content';

interface FunThingsSectionProps {
  lang: Language;
}

export const FunThingsSection: React.FC<FunThingsSectionProps> = ({ lang }) => {
  const t = content[lang].whatsNearby;
  const funThingsPlace = (t.places as readonly NearbyPlace[]).find((p) => p.id === '51-fun-things');

  if (!funThingsPlace) return null;

  return (
    <section
      id="51-fun-things"
      className="py-20 bg-[#FAF8F5] border-b border-[#1B3022]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Map & 51+ Fun Things Card Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Location Map */}
          <div className="lg:col-span-7 bg-white p-7 border border-[#1B3022]/10 shadow-sm flex flex-col justify-between h-full group relative hover:border-[#C5A059] transition-all">
            <div className="mb-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#8C583E] uppercase tracking-wider font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>
                    {lang === 'fr'
                      ? 'Localisation interactive'
                      : lang === 'de'
                      ? 'Interaktive Karte'
                      : lang === 'es'
                      ? 'Ubicación de Greg’s Place'
                      : 'Interactive Location Map'}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#1B3022]/5 text-[#1B3022] font-semibold">
                  Albrook Oasis
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1B3022] mb-1">
                {lang === 'fr'
                  ? 'Greg’s Place à Albrook'
                  : lang === 'de'
                  ? 'Greg’s Place in Albrook'
                  : lang === 'es'
                  ? 'Greg’s Place en Albrook'
                  : 'Greg’s Place in Albrook'}
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
                <span>
                  {lang === 'fr'
                    ? 'À ne pas manquer'
                    : lang === 'de'
                    ? 'Must-Do Empfehlung'
                    : lang === 'es'
                    ? 'Imperdible'
                    : 'Must-Do Guide'}
                </span>
              </div>

              <div>
                {/* Card Top: Icon & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center transition-colors bg-blue-50/70 border border-blue-200 group-hover:border-blue-400">
                    <ExternalLink className="w-5 h-5 text-[#1E3A8A]" />
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
                  {lang === 'fr'
                    ? 'Voir 51+ activités sur tourscanner.com'
                    : lang === 'de'
                    ? '51+ Aktivitäten auf tourscanner.com ansehen'
                    : lang === 'en'
                    ? 'tourscanner.com/things-to-do-in-panama-city-panama'
                    : 'Ver 51+ actividades en tourscanner.com'}
                </span>
                <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0284C7]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
