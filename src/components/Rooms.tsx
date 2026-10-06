import React, { useState } from 'react';
import { 
  Bed, 
  Wind, 
  Check, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Tv, 
  Wifi, 
  Laptop, 
  Shirt, 
  ExternalLink, 
  Clock, 
  DollarSign, 
  Percent, 
  Layers, 
  CheckCircle2, 
  MessageCircle,
  HelpCircle,
  Maximize2,
  Camera
} from 'lucide-react';
import { Language, Room } from '../types';
import { content } from '../data/content';
import { LocalImage } from './LocalImage';
import { RoomMark } from './RoomMark';
import { roomGalleries } from '../data/roomGalleries';

interface RoomsProps {
  lang: Language;
  onBookRoom: (roomId?: string) => void;
  onSelectRoom?: (roomId: string) => void;
  onOpenPhotoGallery?: (categoryId?: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ 
  lang, 
  onBookRoom, 
  onSelectRoom,
  onOpenPhotoGallery,
}) => {
  const t = content[lang].rooms;
  const [activeRoomDetail, setActiveRoomDetail] = useState<Room | null>(null);

  // Dynamic photo count for room (automatically updates as photos are added)
  const getRoomPhotoCount = (room: Room): number => {
    if (roomGalleries[room.id] && Array.isArray(roomGalleries[room.id])) {
      return roomGalleries[room.id].length;
    }
    if (Array.isArray((room as any).images) && (room as any).images.length > 0) {
      return (room as any).images.length;
    }
    return room.image ? 1 : 0;
  };

  const getPhotoText = (count: number) => {
    if (lang === 'fr') return count === 1 ? 'Photo' : 'Photos';
    if (lang === 'de') return count === 1 ? 'Foto' : 'Fotos';
    if (lang === 'es') return count === 1 ? 'Foto' : 'Fotos';
    return count === 1 ? 'Photo' : 'Photos';
  };

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
    <section id="rooms" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
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

            <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed">
              {renderWithBoldNetflix(t.lead)}
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            {onOpenPhotoGallery && (
              <button
                type="button"
                onClick={() => onOpenPhotoGallery()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-[11px] font-bold uppercase tracking-widest transition-all shadow-xs"
                id="btn-rooms-open-gallery"
              >
                <Camera className="w-4 h-4 text-[#C5A059]" />
                <span>{lang === 'fr' ? 'Galerie Photos' : lang === 'de' ? 'Fotogalerie' : lang === 'en' ? 'Photo Gallery' : 'Galería de Fotos'}</span>
              </button>
            )}

            <button
              onClick={() => onBookRoom()}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{t.ctaCheckAvailability || 'Check Availability'}</span>
            </button>
          </div>
        </div>

        {/* Clarification Notice Banner */}
        <div className="mb-12 p-4 sm:p-5 bg-white border-l-4 border-[#C5A059] shadow-sm flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <p className="text-xs sm:text-sm text-[#1B3022]/85">
              <span className="font-semibold text-[#1B3022]">
                {lang === 'fr'
                  ? 'Configuration de Location : '
                  : lang === 'de'
                  ? 'Mietkonfiguration: '
                  : lang === 'en'
                  ? 'Rental Configuration: '
                  : 'Configuración de Alquiler: '}
              </span>
              {lang === 'fr'
                ? 'Bien que la maison dispose de 6 chambres et 4 salles de bain, seules 4 chambres et 3 salles de bain sont proposées à la location, garantissant un séjour calme, intime et sans foule.'
                : lang === 'de'
                ? 'Obwohl das Haus über 6 Schlafzimmer und 4 Badezimmer verfügt, stehen nur 4 Zimmer und 3 Bäder zur Vermietung bereit – dies garantiert einen ruhigen und ungestörten Aufenthalt.'
                : lang === 'en'
                ? 'While the home has 6 bedrooms and 4 bathrooms, only 4 rooms and 3 bathrooms are available to rent, guaranteeing a quiet, uncrowded, and authentic stay.'
                : 'Aunque la casa cuenta con 6 dormitorios y 4 baños, solo 4 habitaciones y 3 baños están disponibles para alquilar, garantizando una estadía tranquila, sin aglomeraciones y auténtica.'}
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono text-[#8C583E] uppercase tracking-wider font-bold hidden sm:inline-block">
            {lang === 'fr'
              ? '4 Chambres · 3 Salles de Bain'
              : lang === 'de'
              ? '4 Zimmer · 3 Bäder'
              : lang === 'en'
              ? '4 Rooms · 3 Bathrooms'
              : '4 Cuartos · 3 Baños'}
          </span>
        </div>

        {/* 1. Accommodations Grid - 4 Guest Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.items.map((room) => {
            const photoCount = getRoomPhotoCount(room);
            const photoLabel = getPhotoText(photoCount);
            const rId = room.id;

            return (
              <div
                key={rId}
                onClick={() => {
                  if (onSelectRoom) {
                    onSelectRoom(rId);
                  } else {
                    setActiveRoomDetail(room);
                  }
                }}
                className="bg-white overflow-hidden border border-[#1B3022]/10 hover:border-[#C5A059] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Room Image */}
                  <div className="relative overflow-hidden">
                    <LocalImage
                      src={room.image}
                      alt={room.name}
                      aspectRatio="aspect-[16/11]"
                      title={room.name}
                      hoverZoom={true}
                      containerClassName="rounded-none border-b border-[#1B3022]/10"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

                    {/* Top-Left Elegant Room Mark (e.g. Cayuca Room canoe emblem) */}
                    <div className="absolute top-3 left-3 z-20 pointer-events-none">
                      <RoomMark roomId={room.id} />
                    </div>

                    {/* Top-Right Elegant Photo Count Indicator */}
                    {photoCount > 0 && (
                      <div className="absolute top-3 right-3 z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono shadow-xs">
                          <Camera className="w-3 h-3 text-[#C5A059] shrink-0" />
                          <span>{photoCount} {photoLabel}</span>
                        </span>
                      </div>
                    )}

                    {/* Bed & House Location Badges */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white z-20 pointer-events-none">
                      <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider font-semibold">
                        {room.bed}
                      </span>
                      <span className="px-2.5 py-1 bg-[#1B3022]/90 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-wider font-semibold">
                        {room.locationInHouse}
                      </span>
                    </div>
                  </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-2xl font-light text-[#1B3022] group-hover:text-[#C5A059] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  
                  <p className="text-[10px] text-[#8C583E] uppercase tracking-widest font-bold mb-3">
                    {room.subtitle}
                  </p>

                  <p className="text-xs text-[#1B3022]/80 leading-relaxed mb-4 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Pricing Pill */}
                  <div className="bg-[#FAF8F5] p-3 border border-[#1B3022]/10 mb-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-serif font-medium text-[#1B3022]">
                        ${room.nightlyPrice}
                      </span>
                      <span className="text-[11px] text-[#1B3022]/60 ml-1">
                        {lang === 'fr' ? '/ nuit' : lang === 'de' ? '/ Nacht' : lang === 'en' ? '/ night' : '/ noche'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#8C583E] font-medium block">
                        +${room.cleaningFee} {lang === 'fr' ? 'frais uniques' : lang === 'de' ? 'einmalig' : lang === 'en' ? 'one-time' : 'tarifa única'}
                      </span>
                      <span className="text-[9px] text-[#1B3022]/60 uppercase tracking-wider">
                        {lang === 'fr' ? 'Frais de ménage' : lang === 'de' ? 'Endreinigung' : lang === 'en' ? 'Cleaning Fee' : 'Limpieza'}
                      </span>
                    </div>
                  </div>

                  {/* Bathroom Arrangement Notice */}
                  <div className="mb-4 pb-3 border-b border-[#1B3022]/10">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#8C583E] block mb-1">
                      {lang === 'fr' ? 'Disposition de la Salle de Bain' : lang === 'de' ? 'Badezimmer-Anordnung' : lang === 'en' ? 'Bathroom Arrangement' : 'Disposición del Baño'}
                    </span>
                    <p className="text-[11px] text-[#1B3022]/85 leading-snug">
                      {room.bathroomArrangement}
                    </p>
                  </div>

                  {/* Room Features checklist */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[9px] font-bold text-[#1B3022] uppercase tracking-widest block mb-1">
                      {lang === 'fr' ? 'Points Clés' : lang === 'de' ? 'Besondere Merkmale' : lang === 'en' ? 'Key Features' : 'Características'}
                    </span>
                    {room.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#1B3022]/80">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Airbnb reference note */}
                  {room.airbnbRef && (
                    <div className="pt-2 border-t border-[#1B3022]/10">
                      <a
                        href={room.airbnbRef}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-[10px] text-[#1B3022]/60 hover:text-[#C5A059] transition-colors"
                        title="External Airbnb Room Reference"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{lang === 'fr' ? 'Référence annonce Airbnb' : lang === 'de' ? 'Airbnb-Inseratsreferenz' : lang === 'en' ? 'Airbnb room listing reference' : 'Referencia de publicación en Airbnb'}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Action bar */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectRoom) {
                      onSelectRoom(room.id);
                    } else {
                      setActiveRoomDetail(room);
                    }
                  }}
                  className="flex-1 py-3 px-3 border border-[#1B3022]/20 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white text-[10px] uppercase tracking-widest font-bold text-[#1B3022] transition-colors text-center flex items-center justify-center gap-1"
                >
                  <span>{t.ctaView}</span>
                  <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
                 {rId === 'coati-room' ? (
                  <button
                    type="button"
                    disabled
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-3 px-3 bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-1"
                  >
                    <span>
                      {lang === 'fr' 
                        ? 'Indisponible' 
                        : lang === 'de' 
                        ? 'Nicht verfügbar' 
                        : lang === 'en' 
                        ? 'UNAVAILABLE' 
                        : 'No disponible'}
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
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
                    className="flex-1 py-3 px-3 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3 h-3 text-[#C5A059]" />
                    <span>{lang === 'fr' ? 'Réserver' : lang === 'de' ? 'Anfragen' : lang === 'en' ? 'REQUEST' : 'Consultar'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
        </div>

        {/* Photo Gallery Access Banner for Shared Spaces */}
        {onOpenPhotoGallery && (
          <div className="mb-16 -mt-6 p-6 sm:p-7 bg-white border border-[#1B3022]/15 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-[#1B3022]">
                  {lang === 'fr'
                    ? 'Découvrez la Galerie Photos Complète de la Propriété'
                    : lang === 'de'
                    ? 'Erkunden Sie die vollständige Fotogalerie des Anwesens'
                    : lang === 'en'
                    ? 'Explore the Full Property Photo Gallery'
                    : 'Explore la Galería de Fotos Completa de la Propiedad'}
                </h4>
                <p className="text-xs sm:text-sm text-[#1B3022]/75 mt-1 leading-relaxed">
                  {lang === 'fr'
                    ? 'Photographies du salon et lounge partagés, de la cuisine, de la salle de bain du haut (chambres Coati & Owl), de la véranda moustiquaire et des extérieurs.'
                    : lang === 'de'
                    ? 'Fotos des Gemeinschaftswohnzimmers, der Küche, des Gästebads im Obergeschoss (Coati & Owl), der Veranda und des Außengeländes.'
                    : lang === 'en'
                    ? 'Photographs of the Shared Living Room and Lounge, Guest Kitchen, Upstairs Guest Bathroom (Coati & Owl Rooms), Screen Room, and Grounds.'
                    : 'Fotografías de la Sala de Estar y Salón Compartido, Cocina de Huéspedes, Baño en Planta Alta (Habitaciones Coati y Owl), Terraza con Malla y Jardines.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenPhotoGallery()}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow active:scale-[0.99]"
              id="btn-rooms-view-gallery-banner"
            >
              <span>
                {lang === 'fr'
                  ? 'Ouvrir la Galerie Photos'
                  : lang === 'de'
                  ? 'Fotogalerie Öffnen'
                  : lang === 'en'
                  ? 'Open Photo Gallery'
                  : 'Abrir Galería de Fotos'}
              </span>
              <span className="text-[#C5A059]">→</span>
            </button>
          </div>
        )}

        {/* 2. Shared Room Amenities Area ("Every Room Includes") */}
        <div className="mb-16 bg-white p-8 sm:p-10 border border-[#1B3022]/10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-[#8C583E] mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C583E]">
                {t.sharedAmenitiesTitle || 'Every Room Includes'}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1B3022] font-light mb-2">
              {t.sharedAmenitiesSubtitle || 'Standard Comforts Across All Four Guest Rooms'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed">
              {lang === 'fr'
                ? 'Que vous séjourniez dans la Master Bedroom ou dans l\'une de nos agréables chambres côté jardin, chaque hébergement est équipé de tout le nécessaire pour le travail et la détente.'
                : lang === 'de'
                ? 'Ob im Master Bedroom oder in einem unserer gemütlichen Gartenzimmer – jede Unterkunft bietet alles für Arbeit und erholsame Entspannung.'
                : lang === 'en'
                ? 'Whether you stay in the Master Bedroom or one of our cozy garden rooms, each accommodation has been equipped with everything needed for work and peaceful relaxation.'
                : 'Ya sea que se aloje en la Master Bedroom o en una de nuestras acogedoras habitaciones con vista al jardín, cada espacio está equipado con lo necesario para el trabajo y un descanso óptimo.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.sharedAmenities.map((amenity, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-[#FAF8F5] border border-[#1B3022]/10 flex items-start gap-3 hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#1B3022]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B3022]">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
                <span className="text-xs text-[#1B3022] font-medium leading-relaxed">
                  {renderWithBoldNetflix(amenity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Pricing Presentation & Direct Booking Benefit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Transparent Rate Table */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#1B3022]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#8C583E] mb-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C583E]">
                  {t.pricingTableTitle || 'Room Rates & Cleaning Fees'}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1B3022] font-light mb-2">
                {t.pricingTableSubtitle || 'Transparent, Simple Pricing'}
              </h3>
              <p className="text-xs text-[#1B3022]/75 mb-6">
                {lang === 'fr'
                  ? 'Tous les tarifs distinguent clairement le prix à la nuitée du coût unique de ménage. Aucune commission cachée ni frais supplémentaires.'
                  : lang === 'de'
                  ? 'Alle Zimmerpreise trennen klar zwischen Übernachtungstarif und einmaliger Reinigungsgebühr – ohne versteckte Servicegebühren.'
                  : lang === 'en'
                  ? 'All room pricing clearly distinguishes the nightly rate from the one-time cleaning fee. No hidden service charges or platform markups.'
                  : 'Todas las tarifas distinguen claramente el precio por noche del costo único de limpieza, sin comisiones ocultas.'}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#1B3022]/10 text-[10px] uppercase tracking-wider text-[#1B3022]">
                      <th className="py-3 px-3">{lang === 'fr' ? 'Chambre' : lang === 'de' ? 'Zimmer' : lang === 'en' ? 'Room' : 'Habitación'}</th>
                      <th className="py-3 px-3 text-right">{lang === 'fr' ? 'Par Nuit' : lang === 'de' ? 'Pro Nacht' : lang === 'en' ? 'Nightly Rate' : 'Por Noche'}</th>
                      <th className="py-3 px-3 text-right">{lang === 'fr' ? 'Frais Ménage' : lang === 'de' ? 'Endreinigung' : lang === 'en' ? 'Cleaning Fee' : 'Tarifa Limpieza'}</th>
                      <th className="py-3 px-3 text-right">{lang === 'fr' ? 'Action' : lang === 'de' ? 'Aktion' : lang === 'en' ? 'Action' : 'Acción'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1B3022]/10 text-xs">
                    {t.items.map((r: any) => (
                      <tr key={r.id} className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="py-3.5 px-3">
                          <span className="font-medium text-[#1B3022] block">{r.name}</span>
                          <span className="text-[10px] text-[#1B3022]/60">{r.bed} · {r.locationInHouse}</span>
                        </td>
                        <td className="py-3.5 px-3 text-right font-serif text-base font-semibold text-[#1B3022]">
                          ${r.nightlyPrice}
                          <span className="text-[10px] font-sans font-normal text-[#1B3022]/60"> {lang === 'fr' ? '/ nuit' : lang === 'de' ? '/ Nacht' : lang === 'en' ? '/ nt' : '/ noche'}</span>
                        </td>
                        <td className="py-3.5 px-3 text-right text-xs font-medium text-[#8C583E]">
                          ${r.cleaningFee} <span className="text-[10px] text-[#1B3022]/60">{lang === 'fr' ? 'unique' : lang === 'de' ? 'einmalig' : lang === 'en' ? 'one-time' : 'única'}</span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          {r.id === 'coati-room' ? (
                            <button
                              type="button"
                              disabled
                              onClick={(e) => e.stopPropagation()}
                              className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 bg-gray-200 text-gray-500 cursor-not-allowed"
                            >
                              {lang === 'fr' ? 'INDISPONIBLE' : lang === 'de' ? 'NICHT VERFÜGBAR' : lang === 'en' ? 'UNAVAILABLE' : 'NO DISPONIBLE'}
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (r.id === 'master-bedroom') {
                                  window.open('https://gregsplaceinalbrook.com/en/special-tropical-home---master-bedroom', '_blank', 'noopener,noreferrer');
                                } else if (r.id === 'cayuca-room') {
                                  window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---cayuca-room', '_blank', 'noopener,noreferrer');
                                } else if (r.id === 'owl-room') {
                                  window.open('https://gregsplaceinalbrook.com/en/a-special-tropical-home---owl-room', '_blank', 'noopener,noreferrer');
                                } else {
                                  onBookRoom(r.id);
                                }
                              }}
                              className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 bg-[#C5A059] hover:bg-[#A68648] text-white transition-colors"
                            >
                              {lang === 'fr' ? 'Réserver' : lang === 'de' ? 'Anfragen' : lang === 'en' ? 'REQUEST' : 'Reservar'}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Book Direct & Save Message Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1B3022] to-[#254230] p-6 sm:p-8 text-white shadow-md flex flex-col justify-between border border-[#C5A059]/30">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-mono uppercase tracking-widest font-bold mb-4">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span>{t.bookDirectTitle || 'Book Here Direct and Save'}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3">
                {t.bookDirectTitle}
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 font-light whitespace-pre-line">
                {t.bookDirectBody}
              </p>

              <div className="p-4 bg-white/5 border-l-2 border-[#C5A059] mb-6 space-y-2 text-xs text-white/80 font-light">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Communication directe avec Greg pour dates et conseils'
                      : lang === 'de'
                      ? 'Direkte Kommunikation mit Greg für Termine & Beratung'
                      : lang === 'en'
                      ? 'Direct communication with Greg for dates & advice'
                      : 'Comunicación directa con Greg sobre fechas y asesoría'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Élimine les frais de service des plateformes tierces'
                      : lang === 'de'
                      ? 'Keine Buchungsgebühren durch Drittplattformen'
                      : lang === 'en'
                      ? 'Eliminates third-party guest service fees'
                      : 'Elimina comisiones y recargos de intermediarios'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Réponse personnalisée immédiate par WhatsApp ou appel'
                      : lang === 'de'
                      ? 'Sofortige persönliche Antwort per WhatsApp oder Anruf'
                      : lang === 'en'
                      ? 'Instant personalized response via WhatsApp or call'
                      : 'Respuesta inmediata y personalizada por WhatsApp o llamada'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onBookRoom()}
                className="w-full py-3.5 px-6 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.ctaAskAvailability || 'Ask About Availability'}</span>
              </button>

              <a
                href="https://wa.me/50765037828?text=Hello%20Greg,%20I%20would%20like%20to%20check%20availability%20for%20a%20room%20at%20Greg's%20Place"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +507 6503-7828</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4. Long-Stay Discounts Section */}
        <div className="mb-16 bg-white p-8 sm:p-10 border border-[#1B3022]/10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-[#8C583E] mb-2">
              <Percent className="w-4 h-4 text-[#8C583E]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C583E]">
                {t.longStayTitle || 'Long-Stay Discounts'}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1B3022] font-light mb-2">
              {t.longStaySubtitle || 'Extended Stays Enjoy Progressive Discounts'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed">
              {lang === 'fr'
                ? 'Vous planifiez un séjour prolongé au Panama pour des projets liés au canal, l\'observation ornithologique ou une année sabbatique ? Nous appliquons des remises dégressives automatiques.'
                : lang === 'de'
                ? 'Planen Sie einen längeren Aufenthalt für Kanalprojekte, Vogelbeobachtung oder ein Sabbatical? Wir bieten gestaffelte Rabatte für längere Buchungen.'
                : lang === 'en'
                ? 'Planning a longer visit to Panama for canal projects, birding, or a peaceful sabbatical? We offer structured multi-tier discounts automatically applied to extended reservations.'
                : '¿Planea una estancia prolongada en Panamá para proyectos, avistamiento o un retiro sabático? Ofrecemos descuentos progresivos estructurados para estadías extendidas.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.longStayDiscounts.map((disc, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#FAF8F5] border border-[#1B3022]/10 hover:border-[#C5A059] transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1B3022]">
                      {disc.tier}
                    </span>
                    <span className="px-2.5 py-1 bg-[#1B3022] text-[#C5A059] text-xs font-bold font-mono">
                      {disc.discount}
                    </span>
                  </div>
                  <p className="text-xs text-[#1B3022]/80 leading-relaxed mb-4">
                    {disc.note}
                  </p>
                </div>
                <div className="text-[10px] text-[#8C583E] font-medium pt-3 border-t border-[#1B3022]/10">
                  {lang === 'fr'
                    ? 'Éligible en Réservation Directe'
                    : lang === 'de'
                    ? 'Gültig bei Direktbuchung'
                    : lang === 'en'
                    ? 'Direct Booking Eligible'
                    : 'Aplicable en Reserva Directa'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Monthly Rates Section (with prominent Six-Month Minimum) */}
        <div className="mb-16 bg-[#F5F2EC] p-8 sm:p-10 border border-[#1B3022]/15 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#8C583E] mb-2">
                <Clock className="w-4 h-4 text-[#8C583E]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C583E]">
                  {t.monthlyRatesTitle || 'Monthly Rates'}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1B3022] font-light mb-2">
                {t.monthlyRatesSubtitle || 'Long-Term Extended Residency Options'}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed">
                {lang === 'fr'
                  ? 'Pour nomades numériques, chercheurs et résidents saisonniers en quête d\'un havre paisible à Panama City.'
                  : lang === 'de'
                  ? 'Für digitale Nomaden, Forscher und Langzeitgäste, die eine ruhige Oase in Panama-Stadt suchen.'
                  : lang === 'en'
                  ? 'For digital nomads, researchers, and seasonal residents seeking a peaceful home base in Panama City.'
                  : 'Para nómadas digitales, investigadores y residentes de temporada que buscan un hogar tranquilo en la Ciudad de Panamá.'}
              </p>
            </div>

            {/* Highly Visible Six-Month Minimum Notice */}
            <div className="px-5 py-3 bg-[#8C583E] text-white shadow-md border border-[#8C583E]/80 shrink-0">
              <div className="text-[11px] uppercase tracking-widest font-mono font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FAF8F5]" />
                <span>{t.monthlyNotice}</span>
              </div>
              <span className="text-[10px] text-white/80 block mt-0.5">
                {t.monthlyNoticeSub}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.monthlyRates.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border border-[#1B3022]/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-xl font-light text-[#1B3022] mb-1">
                    {item.roomName}
                  </h4>
                  <p className="text-[10px] text-[#8C583E] uppercase tracking-wider font-semibold mb-4">
                    {item.location}
                  </p>
                  <div className="mb-4 pb-4 border-b border-[#1B3022]/10">
                    <span className="text-3xl font-serif font-light text-[#1B3022]">
                      ${item.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#1B3022]/70 ml-1">
                      {lang === 'fr' ? '/ mois' : lang === 'de' ? '/ Monat' : lang === 'en' ? '/ month' : '/ mes'}
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/50765037828?text=Hello%20Greg,%20I'm%20interested%20in%20a%20long-term%20stay%20at%20Greg's%20Place%20in%20Albrook.%20Could%20you%20please%20tell%20me%20about%20availability%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 border border-[#1B3022]/20 hover:bg-[#1B3022] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-center block"
                >
                  {lang === 'fr' ? 'Demande Long Séjour' : lang === 'de' ? 'Langzeitaufenthalt Anfragen' : lang === 'en' ? 'Inquire for Long Term' : 'Consultar Larga Estadía'}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Guest Laundry Services Section */}
        <div className="bg-white p-8 sm:p-10 border border-[#1B3022]/10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Shirt className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                  {t.laundryTitle || 'Guest Laundry Services'}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1B3022] font-light mb-2">
                {t.laundrySubtitle || 'On-Site Laundry Facilities for Guests'}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3022]/80 leading-relaxed">
                {lang === 'fr'
                  ? "Greg's Place met à disposition de ses hôtes des équipements pratiques de lavage et de séchage sur place."
                  : lang === 'de'
                  ? 'Greg\'s Place bietet bequeme Wasch- und Trockenmöglichkeiten direkt auf dem Anwesen.'
                  : lang === 'en'
                  ? "Greg's Place provides convenient on-premises washing and drying amenities for all overnight guests."
                  : 'Greg’s Place pone a disposición de sus huéspedes cómodas instalaciones de lavado y secado en la misma propiedad.'}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="px-3.5 py-1.5 bg-[#FAF8F5] border border-[#1B3022]/15 text-[#1B3022] text-xs font-mono font-bold inline-block">
                {t.laundryEquipment}
              </span>
              <span className="text-[10px] text-[#8C583E] block mt-1">
                {t.laundryNote}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.laundryOptions.map((opt, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#FAF8F5] border border-[#1B3022]/10 hover:border-[#C5A059] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 bg-[#1B3022]/10 text-[#1B3022] font-bold">
                      {opt.badge}
                    </span>
                    <span className="text-xl font-serif font-medium text-[#1B3022]">
                      {opt.price}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-light text-[#1B3022] mb-2">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-[#1B3022]/80 leading-relaxed mb-4">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1B3022]/10 text-[10px] text-[#1B3022]/60">
                  {lang === 'fr'
                    ? 'Disponible sur demande durant le séjour'
                    : lang === 'de'
                    ? 'Auf Anfrage während des Aufenthalts verfügbar'
                    : lang === 'en'
                    ? 'Available upon request during stay'
                    : 'Disponible previa solicitud durante su estadía'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Detail Modal for viewing full verified specifications */}
        {activeRoomDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-2xl bg-[#FAF8F5] shadow-2xl border border-[#C5A059]/40 overflow-hidden max-h-[90vh] flex flex-col">
              <div className="relative h-64 sm:h-72 shrink-0">
                <LocalImage
                  src={activeRoomDetail.image}
                  alt={activeRoomDetail.name}
                  aspectRatio="h-full w-full"
                  containerClassName="w-full h-full rounded-none"
                  title={activeRoomDetail.name}
                />
                <button
                  onClick={() => setActiveRoomDetail(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-black/70 text-white hover:bg-black transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white text-xs font-semibold">
                  {activeRoomDetail.bed} · {activeRoomDetail.locationInHouse}
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1B3022]">
                    {activeRoomDetail.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-2xl font-serif text-[#1B3022] font-medium">${activeRoomDetail.nightlyPrice}</span>
                    <span className="text-xs text-[#1B3022]/60 ml-1">
                      {lang === 'fr' ? '/ nuit' : lang === 'de' ? '/ Nacht' : lang === 'en' ? '/ night' : '/ noche'}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mb-4">
                  {activeRoomDetail.subtitle} · +${activeRoomDetail.cleaningFee}{' '}
                  {lang === 'fr'
                    ? 'frais de ménage uniques'
                    : lang === 'de'
                    ? 'einmalige Reinigungsgebühr'
                    : lang === 'en'
                    ? 'one-time cleaning fee'
                    : 'tarifa única de limpieza'}
                </p>

                <p className="text-sm text-[#1B3022]/85 leading-relaxed mb-6 font-normal">
                  {activeRoomDetail.description}
                </p>

                {/* Bathroom Arrangement Detail */}
                <div className="p-4 bg-white border-l-3 border-[#C5A059] mb-6">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C583E] block mb-1">
                    {lang === 'fr'
                      ? 'Disposition de la Salle de Bain :'
                      : lang === 'de'
                      ? 'Badezimmer-Anordnung:'
                      : lang === 'en'
                      ? 'Bathroom Arrangement:'
                      : 'Disposición del Baño:'}
                  </span>
                  <p className="text-xs text-[#1B3022]/90">
                    {activeRoomDetail.bathroomArrangement}
                  </p>
                </div>

                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1B3022] mb-3">
                  {lang === 'fr'
                    ? 'Équipements & Caractéristiques :'
                    : lang === 'de'
                    ? 'Ausstattung & Besonderheiten:'
                    : lang === 'en'
                    ? 'Room Features & Amenities:'
                    : 'Características y Comodidades:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {activeRoomDetail.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1B3022]">
                      <Check className="w-4 h-4 text-[#C5A059]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Airbnb ref link if present */}
                {activeRoomDetail.airbnbRef && (
                  <div className="mb-6 p-3 bg-white border border-[#1B3022]/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#1B3022]/70">
                      {lang === 'fr'
                        ? 'Référence Officielle Airbnb'
                        : lang === 'de'
                        ? 'Offizielle Airbnb-Inseratsreferenz'
                        : lang === 'en'
                        ? 'Official Airbnb Room Reference'
                        : 'Referencia Oficial en Airbnb'}
                    </span>
                    <a
                      href={activeRoomDetail.airbnbRef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#C5A059] hover:underline font-medium"
                    >
                      <span>
                        {lang === 'fr'
                          ? "Voir l'Annonce Airbnb"
                          : lang === 'de'
                          ? 'Airbnb-Inserat ansehen'
                          : lang === 'en'
                          ? 'View Airbnb Listing'
                          : 'Ver Anuncio en Airbnb'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#1B3022]/10">
                  <button
                    onClick={() => {
                      const id = activeRoomDetail.id;
                      setActiveRoomDetail(null);
                      onBookRoom(id);
                    }}
                    className="flex-1 py-3.5 px-6 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow text-center"
                  >
                    {lang === 'fr'
                      ? 'Vérifier la Disponibilité / Réserver'
                      : lang === 'de'
                      ? 'Verfügbarkeit prüfen / Direkt buchen'
                      : lang === 'en'
                      ? 'Check Availability / Book Direct'
                      : 'Consultar Disponibilidad / Reservar'}
                  </button>
                  <button
                    onClick={() => setActiveRoomDetail(null)}
                    className="py-3 px-6 border border-[#1B3022]/20 hover:bg-white text-[11px] font-bold uppercase tracking-wider text-[#1B3022]"
                  >
                    {lang === 'fr' ? 'Fermer' : lang === 'de' ? 'Schließen' : lang === 'en' ? 'Close' : 'Cerrar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
