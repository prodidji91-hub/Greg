import React from 'react';
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
  Train
} from 'lucide-react';
import { Language, NearbyPlace, FacilityItem } from '../types';
import { content } from '../data/content';

interface WhatsNearbyProps {
  lang: Language;
}

export const WhatsNearby: React.FC<WhatsNearbyProps> = ({ lang }) => {
  const t = content[lang].whatsNearby;

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
                  {t.diningCallout.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed max-w-3xl font-normal">
                  {t.diningCallout.description}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {(t.places as readonly NearbyPlace[]).map((place: NearbyPlace) => {
            const isClickable = Boolean(place.linkUrl);
            const isRedHighlight = place.id === '51-fun-things';
            const CardElement = isClickable ? 'a' : 'div';
            const linkProps = isClickable
              ? {
                  href: place.linkUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': place.name,
                }
              : {};

            return (
              <CardElement
                key={place.id}
                id={place.id}
                {...linkProps}
                className={`p-7 transition-all flex flex-col justify-between group relative ${
                  isRedHighlight
                    ? 'bg-gradient-to-b from-red-50/90 via-white to-red-50/40 border-2 border-red-600 shadow-xl ring-4 ring-red-500/15 hover:border-red-700 hover:shadow-2xl'
                    : 'bg-white border border-[#1B3022]/10 hover:border-[#C5A059] shadow-sm hover:shadow-md'
                } ${isClickable ? 'cursor-pointer hover:-translate-y-1 block' : ''}`}
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
                    <h3 className="font-serif text-xl font-medium text-[#1B3022] mb-3 leading-snug">
                      {place.name}
                    </h3>
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

                  {/* Highlights List */}
                  {place.highlights && place.highlights.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-[#1B3022]/10 space-y-2">
                      {place.highlights.map((highlight: string, idx: number) => {
                        const isSubItem = highlight.startsWith('  ') || highlight.startsWith('\t');
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
                            <span>{highlight.trim()}</span>
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
                    <div className={`pt-3 border-t flex items-center justify-between gap-2 text-xs sm:text-[13px] font-semibold transition-colors mt-2 ${
                      isRedHighlight
                        ? 'border-blue-200 text-[#0284C7] group-hover:text-[#0369A1]'
                        : 'border-[#1B3022]/10 text-[#8C583E] group-hover:text-[#C5A059]'
                    }`}>
                      <span className={`underline underline-offset-4 ${isRedHighlight ? 'decoration-[#0284C7] font-bold text-[#0284C7]' : 'decoration-[#C5A059]/40'}`}>
                        {lang === 'fr' ? 'Voir 51+ activités sur tourscanner.com' : lang === 'de' ? '51+ Aktivitäten auf tourscanner.com ansehen' : lang === 'en' ? 'tourscanner.com/things-to-do-in-panama-city-panama' : 'Ver 51+ actividades en tourscanner.com'}
                      </span>
                      <ExternalLink className={`w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRedHighlight ? 'text-[#0284C7]' : 'text-[#C5A059]'}`} />
                    </div>
                  )}
                </div>

                {/* Local Note Footer */}
                {place.futureNote && (
                  <div className="pt-3 border-t border-[#1B3022]/10 space-y-1.5 text-xs sm:text-[12.5px] text-[#1B3022]/85 mt-2">
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
              </CardElement>
            );
          })}
        </div>

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
    </section>
  );
};
