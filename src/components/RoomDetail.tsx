import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Bed, 
  Tv, 
  Wind, 
  Wifi, 
  Laptop, 
  Sparkles, 
  Check, 
  Calendar, 
  ShieldCheck, 
  ExternalLink, 
  Coffee, 
  Clock, 
  MapPin, 
  Shirt, 
  Info, 
  DollarSign,
  Camera
} from 'lucide-react';
import { Language, Room } from '../types';
import { content } from '../data/content';
import { roomGalleries } from '../data/roomGalleries';
import { RoomGallery } from './RoomGallery';

interface RoomDetailProps {
  roomId: string;
  lang: Language;
  onBackToRooms: () => void;
  onBookRoom: (roomId: string) => void;
  onOpenPhotoGallery?: (categoryId?: string) => void;
}

export const RoomDetail: React.FC<RoomDetailProps> = ({
  roomId,
  lang,
  onBackToRooms,
  onBookRoom,
  onOpenPhotoGallery,
}) => {
  const tRooms = content[lang].rooms;
  const room = tRooms.items.find((r) => r.id === roomId) || tRooms.items[0];
  const rId = room.id;
  const images = roomGalleries[roomId] || [];

  // Scroll to top when room detail mounts or changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [roomId]);

  const backLabel =
    lang === 'fr'
      ? 'Retour aux Chambres'
      : lang === 'de'
      ? 'Zurück zu den Zimmern'
      : lang === 'en'
      ? 'Back to Rooms'
      : 'Volver a Habitaciones';

  const renderWithBoldNetflix = (text: string) => {
    if (!text || !text.includes('Netflix')) return text;
    const parts = text.split(/(Netflix)/g);
    return parts.map((part: string, i: number) =>
      part === 'Netflix' ? (
        <strong key={i} className="font-bold text-[#1B3022]">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1B3022] pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Back Navigation - Highly visible & 44px+ touch target */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#1B3022]/10 pb-4 sm:pb-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToRooms}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 min-h-[44px] bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 active:scale-[0.98]"
              aria-label={backLabel}
              id="btn-back-to-rooms-top"
            >
              <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform shrink-0" />
              <span>{backLabel}</span>
            </button>

            {onOpenPhotoGallery && (
              <button
                type="button"
                onClick={() => onOpenPhotoGallery()}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 min-h-[44px] bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all"
                id="btn-roomdetail-open-gallery"
              >
                <Camera className="w-4 h-4 text-[#C5A059]" />
                <span className="hidden sm:inline">
                  {lang === 'fr'
                    ? 'Galerie Photos'
                    : lang === 'de'
                    ? 'Fotogalerie'
                    : lang === 'en'
                    ? 'Photo Gallery'
                    : 'Galería'}
                </span>
              </button>
            )}
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] sm:text-xs text-[#1B3022]/60 font-medium pl-1 sm:pl-0">
            <button
              type="button"
              onClick={onBackToRooms}
              className="hover:text-[#1B3022] hover:underline transition-colors focus:outline-none"
            >
              {lang === 'fr'
                ? 'Hébergements'
                : lang === 'de'
                ? 'Unterkünfte'
                : lang === 'en'
                ? 'Accommodations'
                : 'Alojamientos'}
            </button>
            <span className="text-[#1B3022]/30">/</span>
            <span className="text-[#C5A059] font-semibold truncate max-w-[200px] sm:max-w-none">{room.name}</span>
          </nav>
        </div>

        {/* SECTION A: Large Photo Gallery (Centerpiece near top) */}
        <div className="mb-10">
          <RoomGallery
            images={images}
            roomName={room.name}
            lang={lang}
          />
        </div>

        {/* SECTION B & C & D: Room Header, Description & Structured Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column (8 cols): Room Info & Amenities */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* SECTION B: Room Name & Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-6 bg-[#C5A059]" />
                <span className="text-[#C5A059] uppercase tracking-[0.25em] text-[10px] font-bold">
                  {room.locationInHouse}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-2">
                {room.name}
              </h1>

              <p className="text-base sm:text-lg text-[#8C583E] font-serif italic mb-4">
                {room.subtitle}
              </p>

              {/* Verified Configuration Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#C5A059]/40 text-[#1B3022] text-xs shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>
                  {lang === 'fr'
                    ? 'Partie de 4 chambres privées et 3 salles de bain dans une demeure de plus de 80 ans de la Zone du Canal'
                    : lang === 'de'
                    ? 'Teil von 4 privaten Gästezimmern & 3 Bädern in einem über 80 Jahre alten Haus der Kanalzone'
                    : lang === 'en'
                    ? 'Part of 4 Private Guest Rooms & 3 Bathrooms in an 80+ Year Old Canal Zone Home'
                    : 'Parte de 4 Habitaciones Privadas y 3 Baños en una Residencia Histórica de la Zona del Canal'}
                </span>
              </div>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 bg-white border border-[#1B3022]/10 shadow-sm">
              <div className="border-r border-[#1B3022]/10 pr-2">
                <span className="text-[10px] uppercase tracking-wider text-[#1B3022]/60 font-medium block">
                  {lang === 'fr' ? 'Type de Lit' : lang === 'de' ? 'Betttyp' : lang === 'en' ? 'Bed Type' : 'Tipo de Cama'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B3022]">
                  {room.bed}
                </span>
              </div>

              <div className="sm:border-r border-[#1B3022]/10 sm:px-2">
                <span className="text-[10px] uppercase tracking-wider text-[#1B3022]/60 font-medium block">
                  {lang === 'fr' ? 'Capacité' : lang === 'de' ? 'Kapazität' : lang === 'en' ? 'Capacity' : 'Capacidad'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B3022]">
                  {room.capacity}
                </span>
              </div>

              <div className="border-r border-[#1B3022]/10 pr-2 sm:px-2">
                <span className="text-[10px] uppercase tracking-wider text-[#1B3022]/60 font-medium block">
                  {lang === 'fr' ? 'Étage' : lang === 'de' ? 'Stockwerk' : lang === 'en' ? 'Floor Level' : 'Ubicación'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B3022]">
                  {room.locationInHouse}
                </span>
              </div>

              <div className="sm:pl-2">
                <span className="text-[10px] uppercase tracking-wider text-[#1B3022]/60 font-medium block">
                  {lang === 'fr' ? 'Vue' : lang === 'de' ? 'Aussicht' : lang === 'en' ? 'View' : 'Vista'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B3022]">
                  {room.view}
                </span>
              </div>
            </div>

            {/* SECTION C: Room Description (EXISTING exact wording, preserved completely) */}
            <div className="bg-white p-6 sm:p-8 border border-[#1B3022]/10 shadow-sm">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-light mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {lang === 'fr'
                    ? 'À Propos de Cette Chambre'
                    : lang === 'de'
                    ? 'Über dieses Zimmer'
                    : lang === 'en'
                    ? 'About This Room'
                    : 'Acerca de Esta Habitación'}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed font-normal">
                {room.description}
              </p>
            </div>

            {/* Bathroom Arrangement Detail */}
            <div className="p-5 sm:p-6 bg-white border-l-4 border-[#C5A059] shadow-sm">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#8C583E] mb-1.5">
                {lang === 'fr'
                  ? 'Configuration de la Salle de Bain'
                  : lang === 'de'
                  ? 'Badezimmer-Aufteilung'
                  : lang === 'en'
                  ? 'Bathroom Arrangement'
                  : 'Disposición del Baño'}
              </h3>
              <p className="text-sm text-[#1B3022]/90 leading-relaxed">
                {room.bathroomArrangement}
              </p>
              {(roomId === 'coati-room' || roomId === 'owl-room') && onOpenPhotoGallery && (
                <div className="mt-3.5 pt-3 border-t border-[#1B3022]/10">
                  <button
                    type="button"
                    onClick={() => onOpenPhotoGallery('upstairs-guest-bathroom')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8C583E] hover:text-[#C5A059] transition-colors"
                    id="btn-roomdetail-open-bathroom-gallery"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>
                      {lang === 'fr'
                        ? "Voir la Salle de Bain des Hôtes à l'Étage dans la Galerie Photos →"
                        : lang === 'de'
                        ? 'Gästebad im Obergeschoss in der Fotogalerie ansehen →'
                        : lang === 'en'
                        ? 'View Upstairs Guest Bathroom in Photo Gallery →'
                        : 'Ver Baño en Planta Alta en la Galería de Fotos →'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* SECTION D: Key Room Features Checklist */}
            <div className="bg-white p-6 sm:p-8 border border-[#1B3022]/10 shadow-sm">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-light mb-5">
                {lang === 'fr'
                  ? 'Caractéristiques Principales'
                  : lang === 'de'
                  ? 'Hauptmerkmale des Zimmers'
                  : lang === 'en'
                  ? 'Room Key Features'
                  : 'Características Principales'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1B3022]/90">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Comforts Included Across Every Room */}
            <div className="bg-white p-6 sm:p-8 border border-[#1B3022]/10 shadow-sm">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                  {tRooms.sharedAmenitiesTitle}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-light">
                  {tRooms.sharedAmenitiesSubtitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {tRooms.sharedAmenities.map((amenity, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-[#FAF8F5] border border-[#1B3022]/10 flex items-start gap-2 text-xs text-[#1B3022]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{renderWithBoldNetflix(amenity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-Stay Discounts Table */}
            <div className="bg-white p-6 sm:p-8 border border-[#1B3022]/10 shadow-sm">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1B3022] font-light mb-2">
                {tRooms.longStayTitle}
              </h2>
              <p className="text-xs text-[#1B3022]/70 mb-4">
                {tRooms.longStaySubtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {tRooms.longStayDiscounts.map((discount, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-[#1B3022]/10 text-center"
                  >
                    <span className="text-xs font-bold text-[#1B3022] block mb-1">
                      {discount.tier}
                    </span>
                    <span className="text-lg font-serif font-semibold text-[#C5A059] block mb-1">
                      {discount.discount}
                    </span>
                    <span className="text-[10px] text-[#1B3022]/60 block leading-tight">
                      {discount.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Airbnb Reference Link if available */}
            {room.airbnbRef && (
              <div className="p-4 bg-white border border-[#1B3022]/10 flex items-center justify-between text-xs shadow-sm">
                <span className="text-xs text-[#1B3022]/80">
                  {lang === 'fr'
                    ? "Référence officielle de l'hébergement sur Airbnb :"
                    : lang === 'de'
                    ? 'Offizielle Airbnb-Inseratsreferenz:'
                    : lang === 'en'
                    ? 'Official Airbnb Room Listing Reference:'
                    : 'Referencia Oficial del Alojamiento en Airbnb:'}
                </span>
                <a
                  href={room.airbnbRef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:underline"
                >
                  <span>
                    {lang === 'fr'
                      ? 'Voir sur Airbnb'
                      : lang === 'de'
                      ? 'Auf Airbnb ansehen'
                      : lang === 'en'
                      ? 'View on Airbnb'
                      : 'Ver en Airbnb'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

          </div>

          {/* Sidebar Column (4 cols): Pricing & Direct Lodgify Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* SECTION E: Booking Card (Preserves existing Lodgify booking) */}
              <div className="bg-white border-2 border-[#C5A059]/40 p-6 sm:p-7 shadow-xl">
                <div className="flex items-baseline justify-between mb-4 border-b border-[#1B3022]/10 pb-4">
                  <div>
                    <span className="text-3xl sm:text-4xl font-serif font-light text-[#1B3022]">
                      ${room.nightlyPrice}
                    </span>
                    <span className="text-xs text-[#1B3022]/60 ml-1">
                      {lang === 'fr'
                        ? '/ nuit'
                        : lang === 'de'
                        ? '/ Nacht'
                        : lang === 'en'
                        ? '/ night'
                        : '/ noche'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#8C583E] block">
                      +${room.cleaningFee}{' '}
                      {lang === 'fr'
                        ? 'frais uniques'
                        : lang === 'de'
                        ? 'einmalig'
                        : lang === 'en'
                        ? 'one-time'
                        : 'tarifa única'}
                    </span>
                    <span className="text-[9px] text-[#1B3022]/50 uppercase tracking-wider">
                      {lang === 'fr'
                        ? 'Frais de ménage'
                        : lang === 'de'
                        ? 'Reinigung'
                        : lang === 'en'
                        ? 'Cleaning Fee'
                        : 'Limpieza'}
                    </span>
                  </div>
                </div>

                {/* Direct Lodgify Booking CTA */}
                {rId === 'coati-room' ? (
                  <div className="space-y-4 mb-6">
                    <div className="py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest text-center">
                      {lang === 'fr' 
                        ? 'ACTUELLEMENT INDISPONIBLE' 
                        : lang === 'de' 
                        ? 'DERZEIT NICHT VERFÜGBAR' 
                        : lang === 'en' 
                        ? 'CURRENTLY UNAVAILABLE' 
                        : 'ACTUALMENTE NO DISPONIBLE'}
                    </div>
                    <p className="text-xs text-[#1B3022]/80 leading-relaxed text-center italic font-serif">
                      {lang === 'fr'
                        ? "Désolé, la chambre Coati n'est pas disponible dans un avenir prévisible car elle est occupée par un client de longue durée."
                        : lang === 'de'
                        ? "Leider ist das Coati-Zimmer auf absehbare Zeit nicht verfügbar, da es von einem Langzeitgast bewohnt wird."
                        : lang === 'en'
                        ? "Sorry, the Coati Room is unavailable for the foreseeable future because it is occupied by a long-term guest."
                        : "Lo sentimos, la habitación Coati no está disponible en el futuro previsible porque está ocupada por un huésped a largo plazo."}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        if (rId === 'master-bedroom') {
                          window.open('https://gregsplaceinalbrook.com/en/special-tropical-home---master-bedroom', '_blank', 'noopener,noreferrer');
                        } else if (rId === 'cayuca-room') {
                          window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---cayuca-room', '_blank', 'noopener,noreferrer');
                        } else if (rId === 'owl-room') {
                          window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---owl-room', '_blank', 'noopener,noreferrer');
                        } else {
                          onBookRoom(rId);
                        }
                      }}
                      className="w-full py-4 px-6 bg-[#C5A059] hover:bg-[#A68648] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-white" />
                      <span>
                        {tRooms.ctaCheckAvailability ||
                          (lang === 'fr'
                            ? 'Vérifier la Disponibilité'
                            : lang === 'de'
                            ? 'Verfügbarkeit Prüfen'
                            : lang === 'en'
                            ? 'Check Availability'
                            : 'Consultar Disponibilidad')}
                      </span>
                    </button>

                    <a
                      href="tel:+50765037828"
                      className="w-full py-3 px-4 border border-[#1B3022]/20 hover:bg-[#FAF8F5] text-[#1B3022] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <span>
                        {lang === 'fr'
                          ? 'Appeler Greg (+507 6503-7828)'
                          : lang === 'de'
                          ? 'Greg anrufen (+507 6503-7828)'
                          : lang === 'en'
                          ? 'Call Greg (+507 6503-7828)'
                          : 'Llamar a Greg (+507 6503-7828)'}
                      </span>
                    </a>
                  </div>
                )}

                {/* Direct Booking Note */}
                <div className="p-3.5 bg-[#FAF8F5] border border-[#1B3022]/10 text-xs text-[#1B3022]/80 space-y-1.5 mb-6">
                  <span className="font-bold text-[#1B3022] block">
                    {tRooms.bookDirectTitle}:
                  </span>
                  <p className="text-[11px] leading-relaxed whitespace-pre-line">
                    {tRooms.bookDirectBody}
                  </p>
                </div>

                {/* Monthly Rate Information */}
                <div className="pt-4 border-t border-[#1B3022]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[#1B3022]">
                      {lang === 'fr'
                        ? 'Tarif Mensuel Long Séjour'
                        : lang === 'de'
                        ? 'Monatlicher Langzeitaufenthalt'
                        : lang === 'en'
                        ? 'Monthly Extended Stay'
                        : 'Tarifa Mensual'}
                    </span>
                    <span className="text-base font-serif font-semibold text-[#1B3022]">
                      ${room.monthlyRate} / mo
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8C583E] block leading-tight">
                    {tRooms.monthlyNotice}: {tRooms.monthlyNoticeSub}
                  </span>
                </div>
              </div>

              {/* Guest Laundry Service Card */}
              <div className="bg-white border border-[#1B3022]/10 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Shirt className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="font-serif text-base text-[#1B3022] font-light">
                    {tRooms.laundryTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#1B3022]/70 mb-3 leading-relaxed">
                  {tRooms.laundryEquipment}. {tRooms.laundryNote}
                </p>
                <div className="space-y-2 text-xs text-[#1B3022]/80">
                  {tRooms.laundryOptions.map((opt, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-[#1B3022]/5">
                      <span>{opt.title}</span>
                      <span className="font-semibold text-[#1B3022]">{opt.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Return to Rooms Button */}
              <button
                type="button"
                onClick={onBackToRooms}
                className="w-full min-h-[44px] py-3 px-4 bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-xs uppercase tracking-wider font-bold text-[#1B3022] hover:text-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-xs group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 active:scale-[0.98]"
                id="btn-back-to-rooms-sidebar"
              >
                <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
                <span>{backLabel}</span>
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-[#1B3022]/10 flex flex-wrap justify-between items-center gap-4">
          <button
            type="button"
            onClick={onBackToRooms}
            className="inline-flex items-center gap-2.5 px-5 py-3 min-h-[44px] bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B3022] hover:text-[#C5A059] transition-all group shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 active:scale-[0.98]"
            aria-label={backLabel}
            id="btn-back-to-rooms-bottom"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
            <span>{backLabel}</span>
          </button>

          {rId === 'coati-room' ? (
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-red-50 border border-red-100 p-3">
              <span className="text-xs font-bold text-red-700 tracking-wider uppercase shrink-0">
                {lang === 'fr' ? 'Indisponible' : lang === 'de' ? 'Nicht verfügbar' : lang === 'en' ? 'Currently Unavailable' : 'No disponible'}
              </span>
              <span className="text-[11px] text-[#1B3022]/70 italic leading-snug">
                {lang === 'fr'
                  ? "Occupée par un client de longue durée."
                  : lang === 'de'
                  ? "Von einem Langzeitgast bewohnt."
                  : lang === 'en'
                  ? "Occupied by a long-term guest."
                  : "Ocupada por un huésped a largo plazo."}
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (rId === 'master-bedroom') {
                  window.open('https://gregsplaceinalbrook.com/en/special-tropical-home---master-bedroom', '_blank', 'noopener,noreferrer');
                } else if (rId === 'cayuca-room') {
                  window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---cayuca-room', '_blank', 'noopener,noreferrer');
                } else if (rId === 'owl-room') {
                  window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---owl-room', '_blank', 'noopener,noreferrer');
                } else {
                  onBookRoom(rId);
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-[#C5A059] hover:bg-[#A68648] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg focus:outline-none"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{tRooms.ctaCheckAvailability || 'Check Availability'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
