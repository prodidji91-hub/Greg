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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-stretch">
          {(t.places as readonly NearbyPlace[]).filter((p) => p.id !== '51-fun-things').map((place: NearbyPlace) => {
            if (place.id === 'monkey-island') {
              return (
                <div
                  key={place.id}
                  id={place.id}
                  className="p-7 transition-all flex flex-col justify-between group relative bg-white border border-[#1B3022]/10 hover:border-[#C5A059] shadow-sm hover:shadow-md col-span-1 md:col-span-2 lg:col-span-2"
                >
                  <div>
                    {/* Card Top: Icon & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#F5F2ED] border border-[#1B3022]/10 group-hover:border-[#C5A059] transition-colors">
                        <Ship className="w-5 h-5 text-[#C5A059]" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 text-[#8C583E] bg-[#EDEAE4]">
                        {lang === 'fr' ? 'Excursion Nature' : lang === 'de' ? 'Naturausflug' : lang === 'es' ? 'Excursión de Naturaleza' : 'Rainforest Excursion'}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1B3022] leading-snug">
                        {lang === 'fr' ? "Tour Nature de l'Île aux Singes en Bateau Privé" : lang === 'de' ? 'Affeninsel-Naturtour im Privatboot' : lang === 'es' ? 'Tour de Naturaleza a la Isla de Monos en Bote Privado' : 'Monkey Island Nature Tour by Private Boat'}
                      </h3>
                      <p className="text-sm text-[#8C583E] italic mt-0.5 font-serif">
                        {lang === 'fr' ? "avec Roberto, l'ami de Greg" : lang === 'de' ? 'mit Gregs Freund Roberto' : lang === 'es' ? 'con Roberto, el amigo de Greg' : 'with Greg’s friend Roberto'}
                      </p>
                    </div>

                    {/* Location / Launch Info */}
                    <div className="flex flex-col gap-1.5 mb-5 p-3 border bg-[#FAF8F5] border-[#C5A059]/20">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1B3022]">
                        <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{lang === 'fr' ? 'Départ de chez Greg vers Gamboa (40 minutes)' : lang === 'de' ? "Abfahrt von Greg's Place nach Gamboa (40 Minuten)" : lang === 'es' ? 'Salida de Greg’s Place hacia Gamboa (40 minutos)' : "Leaves from Greg's Place to Gamboa (40 minutes)"}</span>
                      </div>
                    </div>

                    {/* Detailed Narrative Paragraphs */}
                    <div className="text-xs sm:text-[13px] text-[#1B3022]/85 leading-relaxed space-y-3 font-normal mb-6">
                      <p>
                        {lang === 'fr'
                          ? "C'est un voyage magnifique car vous embarquerez à bord d'un petit bateau depuis la zone de forêt tropicale de Gamboa dans la rivière Chagres. Vous serez juste à côté des navires géants qui viennent de sortir des écluses de Pedro Miguel alors qu'ils continuent vers le lac Gatun."
                          : lang === 'de'
                          ? "Dies ist ein wunderbarer Ausflug, da Sie mit einem kleinen Boot vom Regenwaldgebiet Gamboa aus in den Chagres-Fluss starten. Sie befinden sich direkt neben den riesigen Schiffen, die gerade die Pedro-Miguel-Schleusen verlassen haben und ihre Fahrt zum Gatun-See fortsetzen."
                          : lang === 'es'
                          ? "Este es un viaje maravilloso, ya que zarpará en un pequeño bote desde el área de la selva tropical de Gamboa hacia el río Chagres. Estará justo al lado de los barcos gigantes que acaban de salir de las esclusas de Pedro Miguel mientras continúan hacia el Lago Gatún."
                          : "This is a wonderful trip as you will launch in a small boat from the Gamboa rainforest area into the Chagres River. You will be right next to the giant ships that have just exited the Pedro Miguel locks as they continue on to Gatun Lake."}
                      </p>

                      {/* Chagres National Park Photo Feature */}
                      <div className="my-4 overflow-hidden border border-[#1B3022]/15 bg-[#FAF8F5] shadow-xs rounded-[2px]">
                        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                          <img
                            src="/pictures/natpark.jpg"
                            alt="Chagres National Park and Chagres River in Panama"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2.5 sm:p-3 bg-[#FAF8F5] border-t border-[#1B3022]/10 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Trees className="w-4 h-4 text-[#C5A059] shrink-0" />
                            <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#1B3022]">
                              Chagres National Park
                            </h4>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8C583E] bg-[#EDEAE4] px-2 py-0.5 rounded-xs font-medium shrink-0">
                            Chagres River
                          </span>
                        </div>
                      </div>

                      <p>
                        {lang === 'fr'
                          ? "Roberto part tôt pour que son bateau soit le premier sur place, les singes ont donc faim. De plus, vous entendrez les singes hurleurs retentir tôt le matin. Roberto peut généralement trouver au moins 3 espèces de singes différentes (ils ne sont pas tous sur l'île !). Il y a aussi beaucoup d'oiseaux aquatiques intéressants. Roberto peut généralement trouver un crocodile marin aussi."
                          : lang === 'de'
                          ? "Roberto fährt früh los, so dass sein Boot das erste vor Ort ist und die Affen hungrig sind. Außerdem werden Sie am frühen Morgen das Heulen der Brüllaffen hören. Roberto kann normalerweise mindestens 3 verschiedene Affenarten finden (sie sind nicht alle auf der Insel!). Es gibt auch viele interessante Wasservögel. Roberto kann normalerweise auch ein Salzwasserkrokodil finden."
                          : lang === 'es'
                          ? "Roberto sale temprano para que su bote sea el primero en llegar y los monos tengan hambre. Además, escuchará a los monos aulladores cantar temprano en la mañana. Roberto suele encontrar al menos 3 especies diferentes de monos (¡no todos están en la isla!). También hay muchas aves acuáticas interesantes. Roberto suele encontrar un cocodrilo de agua salada también."
                          : "Roberto leaves early so his boat will be the first one out there so the monkeys are will be hungry. Plus, you will hear the early morning howler monkeys going off. Roberto can usually find at least 3 different species of monkeys (they are not all on the island!). There’s lots of interesting waterfowl too. Roberto can usually find a saltwater crocodile too."}
                      </p>
                    </div>

                    {/* Optional Experiences Subsection */}
                    <div className="mb-6 pt-5 border-t border-[#1B3022]/10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#8C583E] px-2.5 py-1 bg-[#FAF8F5] border border-[#8C583E]/20">
                          {lang === 'fr' ? 'Expériences Optionnelles' : lang === 'de' ? 'Optionale Erlebnisse' : lang === 'es' ? 'Experiencias Opcionales' : 'OPTIONAL EXPERIENCES'}
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-[13px] text-[#1B3022]">
                        <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-[#C5A059] space-y-3">
                          <div className="overflow-hidden border border-[#1B3022]/15 bg-white shadow-xs rounded-[2px]">
                            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                              <img
                                src="/pictures/basss.jpg"
                                alt="Peacock Bass caught while fishing in Gatun Lake, Panama"
                                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1B3022]">
                              {lang === 'fr'
                                ? 'Pêche au bar-paon dans le lac Gatun'
                                : lang === 'de'
                                ? 'Angeln auf Pfauenbarsch im Gatun-See'
                                : lang === 'es'
                                ? 'Pesca de sargento en el Lago Gatún'
                                : 'Fishing in Gatun Lake for Peacock Bass'}
                            </p>
                            <p className="text-[#1B3022]/80 font-light mt-0.5">
                              {lang === 'fr'
                                ? "suivie d'un barbecue de poisson chez Greg."
                                : lang === 'de'
                                ? 'gefolgt von einem Fisch-Grillabend bei Greg.'
                                : lang === 'es'
                                ? 'seguida de un asado de pescado en Greg’s Place.'
                                : 'followed by a fish barbecue at Greg’s Place'}
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-[#8C583E] space-y-3">
                          <div className="overflow-hidden border border-[#1B3022]/15 bg-white shadow-xs rounded-[2px]">
                            <div className="relative aspect-[16/9] w-full overflow-hidden">
                              <img
                                src="/pictures/own.jpg"
                                alt="Soberanía National Park Zoo experience in Panama"
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1B3022]">
                              {lang === 'fr'
                                ? 'Visite du zoo du parc national Soberanía'
                                : lang === 'de'
                                ? 'Besuch des Soberanía-Nationalpark-Zoos'
                                : lang === 'es'
                                ? 'Visita al Zoológico del Parque Nacional Soberanía'
                                : 'Visit the Soberanía National Park Zoo'}
                            </p>
                            <p className="text-[#1B3022]/80 font-light mt-0.5">
                              {lang === 'fr'
                                ? 'sur le chemin du retour depuis Gamboa.'
                                : lang === 'de'
                                ? 'auf dem Rückweg von Gamboa.'
                                : lang === 'es'
                                ? 'en el camino de regreso desde Gamboa.'
                                : 'on the way back from Gamboa.'}
                            </p>
                            <p className="text-[#8C583E] font-medium text-xs mt-1 italic">
                              {lang === 'fr'
                                ? "Ne manquez pas l'exposition sur l'Aigle Harpie (Harpe Eagle)."
                                : lang === 'de'
                                ? 'Verpassen Sie nicht die Harpe Eagle-Ausstellung.'
                                : lang === 'es'
                                ? 'No se pierda la exhibición del Harpe Eagle.'
                                : 'Don’t miss the Harpe Eagle exhibit.'}
                            </p>

                            {/* Zoo Price visually connected */}
                            <div className="mt-3 pt-2.5 border-t border-[#8C583E]/20 flex flex-wrap items-center justify-between gap-1 text-xs">
                              <span className="font-semibold text-[#1B3022]">
                                {lang === 'fr' ? 'Zoo du parc national Soberanía' : lang === 'de' ? 'Soberanía Nationalpark-Zoo' : lang === 'es' ? 'Zoológico Parque Nacional Soberanía' : 'Soberanía National Park Zoo'}
                              </span>
                              <span className="font-bold text-[#8C583E]">$25 {lang === 'fr' ? 'par personne' : lang === 'de' ? 'pro Person' : lang === 'es' ? 'por persona' : 'per person'}</span>
                              <p className="w-full text-[11px] text-[#1B3022]/70 italic mt-0.5">
                                {lang === 'fr' ? "Comprend les frais d'entrée au zoo." : lang === 'de' ? 'Inklusive Zoo-Eintrittsgebühren.' : lang === 'es' ? 'Incluye la entrada al zoológico.' : 'Includes the Zoo entrance fees.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="mb-6 pt-5 border-t border-[#1B3022]/10 space-y-4">
                      {/* Pricing Block 1 */}
                      <div className="bg-[#FAF8F5] p-4 border border-[#1B3022]/10">
                        <h4 className="font-serif text-base font-semibold text-[#1B3022] mb-3">
                          {lang === 'fr' ? "Tour Nature de l'Île aux Singes en Bateau" : lang === 'de' ? 'Affeninsel-Naturtour im Boot' : lang === 'es' ? 'Tour de Naturaleza a la Isla de Monos en Bote' : 'Monkey Island Nature Boat Tour'}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">1 or 2 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$220</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">3 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$285</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">4 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$360</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">5 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$470</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Block 2 */}
                      <div className="bg-[#FAF8F5] p-4 border border-[#C5A059]/30">
                        <h4 className="font-serif text-base font-semibold text-[#1B3022] mb-3 leading-tight">
                          {lang === 'fr'
                            ? "Tour Île aux Singes ET Pêche au Bar-Paon ET Barbecue de Poisson"
                            : lang === 'de'
                            ? 'Affeninsel-Tour UND Pfauenbarsch-Angeln UND Fisch-BBQ'
                            : lang === 'es'
                            ? 'Tour Isla de Monos Y Pesca de Sargento Y Asado de Pescado'
                            : 'Monkey Island Nature Boat Tour AND Peacock Bass Fishing AND Fish BBQ'}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">1 or 2 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$295</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">3 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$395</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">4 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$445</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center">
                            <span className="block text-[#1B3022]/70 text-[11px]">5 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$570</span>
                          </div>
                          <div className="bg-white p-2 border border-[#1B3022]/10 text-center col-span-2 sm:col-span-1">
                            <span className="block text-[#1B3022]/70 text-[11px]">6 {lang === 'fr' ? 'pers.' : lang === 'de' ? 'Pers.' : lang === 'es' ? 'pers.' : 'persons'}</span>
                            <span className="font-bold text-[#1B3022] text-sm">$645</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact WhatsApp CTA */}
                  <div className="pt-4 border-t border-[#1B3022]/10 mt-4">
                    <a
                      href="https://wa.me/50765037828?text=Hello%20Greg,%20I'm%20interested%20in%20the%20Monkey%20Island%20Nature%20Tour%20with%20Roberto.%20Could%20you%20please%20send%20me%20more%20information%20and%20help%20me%20make%20a%20reservation%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
                    >
                      <span>{lang === 'fr' ? 'Contacter Greg pour les réservations' : lang === 'de' ? 'Greg für Reservierungen kontaktieren' : lang === 'es' ? 'Contactar a Greg para Reservaciones' : 'Contact Greg for Reservations'}</span>
                    </a>
                  </div>
                </div>
              );
            }

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
                        const text = highlight.trim();
                        const urlRegex = /(https?:\/\/[^\s]+)/g;

                        const renderTextWithLinks = (contentStr: string) => {
                          if (!contentStr.match(urlRegex)) return contentStr;
                          const parts = contentStr.split(urlRegex);
                          return parts.map((part: string, i: number) => {
                            if (part.match(urlRegex)) {
                              return (
                                <a
                                  key={i}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-[#8C583E] hover:text-[#C5A059] font-medium transition-colors break-all inline-block mt-0.5"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          });
                        };

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
                            <span className="whitespace-pre-line">{renderTextWithLinks(text)}</span>
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

        {/* Location Map & 51+ Fun Things Card Row */}
        {(() => {
          const funThingsPlace = (t.places as readonly NearbyPlace[]).find((p) => p.id === '51-fun-things');
          if (!funThingsPlace) return null;

          const isClickable = Boolean(funThingsPlace.linkUrl);
          const CardElement = isClickable ? 'a' : 'div';
          const linkProps = isClickable
            ? {
                href: funThingsPlace.linkUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': funThingsPlace.name,
              }
            : {};

          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
              {/* Left: Location Map */}
              <div className="lg:col-span-7 bg-white p-7 border border-[#1B3022]/10 shadow-sm flex flex-col justify-between h-full group relative hover:border-[#C5A059] transition-all">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#8C583E] uppercase tracking-wider font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{lang === 'fr' ? 'Localisation interactive' : lang === 'de' ? 'Interaktive Karte' : lang === 'es' ? 'Ubicación de Greg’s Place' : 'Interactive Location Map'}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#1B3022]/5 text-[#1B3022] font-semibold">
                      Albrook Oasis
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1B3022] mb-1">
                    {lang === 'fr' ? 'Greg’s Place à Albrook' : lang === 'de' ? 'Greg’s Place in Albrook' : lang === 'es' ? 'Greg’s Place en Albrook' : 'Greg’s Place in Albrook'}
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
                <CardElement
                  key={funThingsPlace.id}
                  id={funThingsPlace.id}
                  {...linkProps}
                  className="p-7 h-full transition-all flex flex-col justify-between group relative bg-gradient-to-b from-red-50/90 via-white to-red-50/40 border-2 border-red-600 shadow-xl ring-4 ring-red-500/15 hover:border-red-700 hover:shadow-2xl cursor-pointer hover:-translate-y-1 block"
                >
                  {/* Red highlight badge */}
                  <div className="absolute -top-3.5 left-6 bg-red-600 text-white text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 shadow-md flex items-center gap-1.5">
                    <span>★</span>
                    <span>{lang === 'fr' ? 'À ne pas manquer' : lang === 'de' ? 'Must-Do Empfehlung' : lang === 'es' ? 'Imperdible' : 'Must-Do Guide'}</span>
                  </div>

                  <div>
                    {/* Card Top: Icon & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center transition-colors bg-blue-50/70 border border-blue-200 group-hover:border-blue-400">
                        {getPlaceIcon(funThingsPlace.iconType, true)}
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
                  <div className="pt-3 border-t border-blue-200 text-[#0284C7] group-hover:text-[#0369A1] flex items-center justify-between gap-2 text-xs sm:text-[13px] font-semibold transition-colors mt-2">
                    <span className="underline underline-offset-4 decoration-[#0284C7] font-bold">
                      {lang === 'fr' ? 'Voir 51+ activités sur tourscanner.com' : lang === 'de' ? '51+ Aktivitäten auf tourscanner.com ansehen' : lang === 'en' ? 'tourscanner.com/things-to-do-in-panama-city-panama' : 'Ver 51+ actividades en tourscanner.com'}
                    </span>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0284C7]" />
                  </div>
                </CardElement>
              </div>
            </div>
          );
        })()}

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
