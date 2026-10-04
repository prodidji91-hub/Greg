import React from 'react';
import { Coffee, Feather, Check, ArrowRight, Sparkles, Calendar, HeartHandshake, ExternalLink, AlertCircle, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LocalImage } from './LocalImage';

interface BirdingBreakfastProps {
  lang: Language;
  onExploreWildlife: () => void;
  onReserveBirding: (offerId?: 'visitor' | 'guest') => void;
}

export const BirdingBreakfast: React.FC<BirdingBreakfastProps> = ({
  lang,
  onExploreWildlife,
  onReserveBirding,
}) => {
  const t = content[lang].birdingBreakfast;

  return (
    <section id="birding-breakfast" className="py-24 bg-[#1B3022] text-white relative overflow-hidden">
      {/* Subtle organic botanical backdrop decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A4533]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-3">
            {t.title}
          </h2>

          <p className="text-[#C5A059] text-xl sm:text-2xl font-serif italic mb-6">
            “{t.subtitle}”
          </p>

          <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-6">
            {t.lead}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-block px-5 py-2 bg-white/5 border border-[#C5A059]/30 text-xs sm:text-sm text-[#C5A059]">
              {t.experienceNote}
            </div>

            {t.airbnbExperienceRef && (
              <a
                href={t.airbnbExperienceRef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white uppercase tracking-wider font-mono transition-colors"
              >
                <span>{lang === 'fr' ? 'Expérience Airbnb #635171' : lang === 'de' ? 'Airbnb-Erlebnis #635171' : lang === 'en' ? 'Airbnb Experience #635171' : 'Experiencia Airbnb #635171'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            )}
          </div>
        </div>

        {/* 3 Core Experience Pillars (Birding + Breakfast + Critters) */}
        {t.experiencePillars && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {t.experiencePillars.map((pillar, pIdx) => {
              const isBirdWatching = pIdx === 0 || pillar.title.toLowerCase().includes('bird') || pillar.title.toLowerCase().includes('observación') || pillar.title.toLowerCase().includes('aves');
              const isTropicalBreakfast = pIdx === 1 || pillar.title.toLowerCase().includes('breakfast') || pillar.title.toLowerCase().includes('desayuno');
              const isWildlifeCritters = pIdx === 2 || pillar.title.toLowerCase().includes('critter') || pillar.title.toLowerCase().includes('fauna') || pillar.title.toLowerCase().includes('animales') || pillar.title.toLowerCase().includes('wildlife');
              const pillarImg = isBirdWatching
                ? localPictures.birdWatching
                : isTropicalBreakfast 
                ? '/pictures/bbc1.jpg' 
                : isWildlifeCritters 
                ? '/pictures/Gemini_Generated_Image_pjm5bgpjm5bgpjm5.jpg' 
                : null;
              const imgClassName = isBirdWatching ? 'object-center' : '';

              return (
                <div 
                  key={pIdx}
                  className="bg-white/5 border border-white/10 hover:border-[#C5A059]/60 transition-all text-center flex flex-col overflow-hidden shadow-lg"
                >
                  {pillarImg && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#14231B]">
                      <img
                        src={pillarImg}
                        alt={pillar.title}
                        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${imgClassName}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      {isBirdWatching && (
                        <div className="absolute bottom-2 left-2 right-2 z-20 pointer-events-none">
                          <span className="block px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium text-center shadow-xs">
                            Red-legged Honeycreepers visit Greg’s Place every day
                          </span>
                        </div>
                      )}
                      {isWildlifeCritters && (
                        <div className="absolute bottom-2 left-2 right-2 z-20 pointer-events-none">
                          <span className="block px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium text-center shadow-xs">
                            White-nosed Coatimundis visit Greg’s Place every day
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                      {pIdx === 0 && <Feather className="w-5 h-5" />}
                      {pIdx === 1 && <Coffee className="w-5 h-5" />}
                      {pIdx === 2 && <Sparkles className="w-5 h-5" />}
                    </div>
                    <h4 className="font-serif text-lg font-light text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-white/75 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Visual Showcase: Breakfast in Nature & Bird Watching */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="relative overflow-hidden shadow-2xl border border-white/20">
              <LocalImage
                src={localPictures.breakfast}
                alt="Birding & Breakfast on the screened patio at Greg's Place in Albrook"
                aspectRatio="aspect-[16/10]"
                title={lang === 'fr' ? "Petit-déjeuner dans la véranda moustiquaire" : lang === 'de' ? "Frühstück auf der Veranda" : lang === 'en' ? "Screened Patio Breakfast" : "Desayuno en el Patio con Malla"}
                subtitle={lang === 'fr' ? "Dégustez des fruits tropicaux et du café bercé par le chant des oiseaux" : lang === 'de' ? "Genießen Sie Tropenfrüchte und Kaffee umgeben von Vogelgesang" : lang === 'en' ? "Enjoy tropical fruits & coffee surrounded by bird songs" : "Frutas tropicales y café rodeados del canto de las aves"}
                containerClassName="rounded-none shadow-none"
              />
            </div>
            
            {/* Quote banner */}
            <div className="bg-white/5 p-4 sm:p-5 border-l-2 border-[#C5A059] flex items-start gap-4">
              <div className="w-10 h-10 bg-[#122218] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                <Coffee className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed font-serif">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden shadow-2xl border border-white/20">
              <LocalImage
                src={localPictures.birding}
                alt="Tropical bird watching from Greg's Place in Albrook"
                aspectRatio="aspect-[4/3]"
                title={lang === 'fr' ? "Observation des oiseaux tropicaux et de la faune" : lang === 'de' ? "Vogel- und Tierbeobachtung" : lang === 'en' ? "Tropical Bird & Wildlife Watching" : "Observación de Aves y Fauna Tropical"}
                subtitle={lang === 'fr' ? "Toucans à carène, tangaras et Rocky le coati" : lang === 'de' ? "Fischertukane, Tangaren & Rocky das Nasenbärchen" : lang === 'en' ? "Keel-billed Toucans, Tanagers & Rocky the Coati" : "Tucanes pico iris, tángaras y Rocky el coatí"}
                containerClassName="rounded-none shadow-none"
                className="object-honeycreeper-pos"
              />
            </div>

            <div className="bg-white/5 p-6 border border-[#C5A059]/30">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Feather className="w-4 h-4" />
                <h4 className="font-serif text-base text-white font-normal">
                  {lang === 'fr' ? "Un havre matinal intime et sans insectes" : lang === 'de' ? "Intimer, insektenfreier Rückzugsort am Morgen" : lang === 'en' ? "Intimate, Bug-Free Morning Retreat" : "Mañanas Íntimas y Libres de Insectos"}
                </h4>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                {lang === 'fr'
                  ? "Notre véranda moustiquaire vous permet de profiter de la brise matinale et du chant des oiseaux dans un confort absolu et sans aucun insecte. Dégustez un café panaméen fraîchement moulu tout en observant les oiseaux tropicaux et les animaux visiteurs comme Rocky le coati et les agoutis."
                  : lang === 'de'
                  ? "Unsere geschützte Veranda ermöglicht es Ihnen, die morgendliche Brise und den Vogelgesang ohne lästige Insekten zu genießen. Trinken Sie frischen Panama-Kaffee, während Sie wilde Tropenvögel und Gartenbesucher wie Nasenbär Rocky und Agutis beobachten."
                  : lang === 'en'
                  ? "Our screened garden patio allows you to soak in early morning breezes and bird calls in total comfort with zero insects. Sip fresh Panama coffee while observing wild tropical species and visiting critters like Rocky the coati and agoutis."
                  : "Nuestro patio con malla le permite disfrutar de la brisa matutina y el canto de las aves con total comodidad y sin insectos. Saboree café recién colado mientras observa especies tropicales y fauna como Rocky el coatí y ñeques."}
              </p>
            </div>
          </div>
        </div>

        {/* TWO DEDICATED OFFERS / PRICING CARDS */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
              {lang === 'fr' ? 'Choisissez votre expérience : Oiseaux, Petit-déjeuner & Faune' : lang === 'de' ? 'Wählen Sie Ihr Erlebnis: Vogelbeobachtung, Frühstück & Tierwelt' : lang === 'en' ? 'Choose Your Birding, Breakfast & Critters Experience' : 'Elija Su Experiencia de Aves, Desayuno y Fauna'}
            </h3>
            <p className="text-xs sm:text-sm text-[#C5A059] uppercase tracking-wider font-mono">
              {lang === 'fr' ? 'Disponible pour les visiteurs extérieurs et les hôtes résidents' : lang === 'de' ? 'Verfügbar für Tagesbesucher und Übernachtungsgäste' : lang === 'en' ? 'Available for both non-staying visitors and overnight guests' : 'Disponible para visitantes y huéspedes alojados'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.offers.map((offer) => {
              const isHighlight = offer.highlighted;
              return (
                <div
                  key={offer.id}
                  className={`relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                    isHighlight
                      ? 'bg-gradient-to-b from-[#243B2E] to-[#172A1E] border-2 border-[#C5A059]'
                      : 'bg-white/5 border border-white/20 hover:border-[#C5A059]/60'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold ${
                          isHighlight
                            ? 'bg-[#C5A059] text-black'
                            : 'bg-white/10 text-[#C5A059] border border-[#C5A059]/40'
                        }`}
                      >
                        {offer.badge}
                      </span>

                      {isHighlight && (
                        <span className="text-[11px] text-[#C5A059] flex items-center gap-1 font-sans">
                          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>{lang === 'fr' ? 'Tarif Résident' : lang === 'de' ? 'Tarif für Hausgäste' : lang === 'en' ? 'Staying Guest Rate' : 'Tarifa Huésped'}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div className="mb-6">
                      <h4 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                        {offer.title}
                      </h4>
                      <p className="text-xs text-[#C5A059] font-medium tracking-wide uppercase font-mono">
                        {offer.tagline}
                      </p>
                    </div>

                    {/* Pricing Display */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-serif font-light text-white">
                          ${offer.price}
                        </span>
                        <span className="text-xs sm:text-sm text-white/70 font-light">
                          {lang === 'fr' ? 'USD / personne' : lang === 'de' ? 'USD / Person' : lang === 'en' ? 'USD / person' : 'USD / persona'}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60 mt-1 font-light">
                        {offer.priceNote}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light mb-6">
                      {offer.description}
                    </p>

                    {/* Feature Checkpoints */}
                    <ul className="space-y-3 mb-6">
                      {offer.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 font-light">
                          <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#C5A059]">
                            <Check className="w-3 h-3 text-[#C5A059]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Prominent Cash Policy Banner for staying guests */}
                    {isHighlight && t.importantNotice && (
                      <div className="mb-6 p-4 bg-black/40 border-l-3 border-[#C5A059] flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
                          {t.importantNotice}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action CTA Button */}
                  <div className="space-y-2 pt-4">
                    <button
                      onClick={() => onReserveBirding(offer.id as 'visitor' | 'guest')}
                      className={`w-full py-4 px-6 inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl ${
                        isHighlight
                          ? 'bg-[#C5A059] hover:bg-[#A68648] text-white'
                          : 'bg-white text-[#1B3022] hover:bg-[#EDEAE4]'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{offer.cta}</span>
                    </button>
                    
                    <a
                      href="https://wa.me/50765037828?text=Hello%20Greg,%20I%20would%20like%20to%20arrange%20the%20Birding,%20Breakfast%20%26%20Critters%20experience"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 inline-flex items-center justify-center gap-2 text-[10px] text-white/70 hover:text-white uppercase tracking-wider font-mono transition-colors"
                    >
                      <span>{lang === 'fr' ? 'Ou contactez directement Greg par WhatsApp (+507 6503-7828)' : lang === 'de' ? 'Oder WhatsApp direkt an Greg (+507 6503-7828)' : lang === 'en' ? 'Or WhatsApp Greg directly (+507 6503-7828)' : 'O por WhatsApp con Greg (+507 6503-7828)'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Core Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {t.bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-5 border border-white/10 hover:border-[#C5A059]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#C5A059] block mb-2 font-bold">0{idx + 1}</span>
                <h4 className="font-serif text-base text-white font-normal mb-2">
                  {bullet.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {bullet.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explore Wildlife CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onExploreWildlife}
            className="inline-flex items-center gap-2.5 text-xs text-white/80 hover:text-[#C5A059] uppercase tracking-widest font-mono transition-colors"
          >
            <span>{lang === 'fr' ? 'Découvrez les espèces animales autour de la propriété' : lang === 'de' ? 'Erfahren Sie mehr über die Tierarten auf dem Anwesen' : lang === 'en' ? 'Learn About Wildlife Species Around the Property' : 'Conozca las Especies de Fauna Alrededor de la Casa'}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </section>
  );
};

