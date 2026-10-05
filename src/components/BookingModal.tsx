import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink, Phone, CheckCircle2, Coffee } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedRoomId?: string;
  initialTab?: 'lodgify' | 'birding';
  initialBirdingOffer?: 'visitor' | 'guest';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedRoomId,
  initialTab = 'lodgify',
  initialBirdingOffer = 'visitor',
}) => {
  const t = content[lang].booking;

  const [activeTab, setActiveTab] = useState<'lodgify' | 'birding'>(initialTab);

  // Birding Breakfast form state
  const [birdingOffer, setBirdingOffer] = useState<'visitor' | 'guest'>(initialBirdingOffer);
  const [birdingDate, setBirdingDate] = useState('');
  const [birdingGuests, setBirdingGuests] = useState('2');
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (initialBirdingOffer) setBirdingOffer(initialBirdingOffer);
  }, [initialBirdingOffer]);

  if (!isOpen) return null;

  const handleLodgifyRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = 'https://gregsplaceinalbrook.com/en/gregs-place-in-albrook';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleBirdingWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const experienceType = birdingOffer === 'visitor' ? 'Visitor Breakfast ($39/person)' : 'Staying Guest Breakfast ($25/person)';
    const textMsg = `Hello Greg! I would like to reserve the Birding & Breakfast experience at Greg's Place in Albrook.%0A%0AExperience: ${experienceType}%0APreferred Date: ${birdingDate || 'Flexible'}%0ANumber of Guests: ${birdingGuests}%0AName: ${guestName || 'Guest'}`;
    
    const targetUrl = `https://wa.me/50765037828?text=${textMsg}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#F5F2ED] text-[#1B3022] shadow-2xl border border-[#1B3022]/20 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="bg-[#1B3022] text-white p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-5 bg-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Greg&apos;s Place in Albrook
              </span>
            </div>
            <h3 id="booking-modal-title" className="font-serif text-2xl font-light text-white">
              Reserve with Greg&apos;s Place in Albrook
            </h3>
            <p className="text-xs text-white/80 mt-1.5 font-light leading-relaxed">
              {activeTab === 'lodgify' 
                ? "Check current availability and reserve your stay securely through our official Lodgify booking system."
                : t.birdingLead}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.cancelBtn}
            className="p-1.5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 bg-[#EDEAE4] border-b border-[#1B3022]/15 text-xs font-bold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('lodgify')}
            className={`py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'lodgify'
                ? 'bg-[#F5F2ED] text-[#1B3022] border-b-2 border-[#C5A059]'
                : 'text-[#1B3022]/60 hover:text-[#1B3022]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>{t.tabLodgify}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('birding')}
            className={`py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'birding'
                ? 'bg-[#F5F2ED] text-[#1B3022] border-b-2 border-[#C5A059]'
                : 'text-[#1B3022]/60 hover:text-[#1B3022]'
            }`}
          >
            <Coffee className="w-4 h-4 text-[#C5A059]" />
            <span>{t.tabBirding}</span>
          </button>
        </div>

        {/* Lodgify Room Booking Form */}
        {activeTab === 'lodgify' && (
          <form onSubmit={handleLodgifyRedirect} className="p-6 space-y-6">
            {/* Note on availability */}
            <div className="bg-white p-4 border-l-2 border-[#C5A059] shadow-sm space-y-1.5 text-xs text-[#1B3022]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-light leading-relaxed">
                  {lang === 'fr'
                    ? 'Réservations officielles gérées directement via le système Lodgify'
                    : lang === 'de'
                    ? 'Offizielle Reservierungen direkt über das Lodgify-Buchungssystem'
                    : lang === 'en'
                    ? 'Official reservations managed through Lodgify direct booking'
                    : 'Reservas oficiales gestionadas a través del sistema directo de Lodgify'}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-grow inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C5A059] hover:bg-[#A68648] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <span>CHECK AVAILABILITY ON LODGIFY</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-4 border border-[#1B3022]/20 hover:bg-white text-[#1B3022] text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {t.cancelBtn}
              </button>
            </div>
          </form>
        )}

        {/* Birding Breakfast Reservation Form */}
        {activeTab === 'birding' && (
          <form onSubmit={handleBirdingWhatsApp} className="p-6 space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1.5">
                {lang === 'fr' ? 'Sélectionnez l\'option Petit-déjeuner & Oiseaux' : lang === 'de' ? 'Option für Vogelbeobachtung & Frühstück wählen' : lang === 'en' ? 'Select Birding Breakfast Option' : 'Seleccione la Opción de Desayuno'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBirdingOffer('visitor')}
                  className={`p-3 text-left border transition-all ${
                    birdingOffer === 'visitor'
                      ? 'bg-white border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                      : 'bg-white/50 border-[#1B3022]/15 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C583E]">
                      {lang === 'fr' ? 'Visiteurs' : lang === 'de' ? 'Tagesbesucher' : lang === 'en' ? 'Visitors' : 'Visitantes'}
                    </span>
                    <span className="text-sm font-serif font-bold text-[#1B3022]">$39</span>
                  </div>
                  <p className="text-[11px] text-[#1B3022]/80 leading-snug">
                    {lang === 'fr' ? 'Pour les visiteurs sans hébergement' : lang === 'de' ? 'Für Besucher ohne Übernachtung' : lang === 'en' ? 'For visitors not staying overnight' : 'Para visitantes sin alojamiento'}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setBirdingOffer('guest')}
                  className={`p-3 text-left border transition-all ${
                    birdingOffer === 'guest'
                      ? 'bg-white border-[#C5A059] shadow-sm ring-1 ring-[#C5A059]'
                      : 'bg-white/50 border-[#1B3022]/15 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      {lang === 'fr' ? 'Hôtes Résidents' : lang === 'de' ? 'Übernachtungsgäste' : lang === 'en' ? 'Staying Guests' : 'Huéspedes Alojados'}
                    </span>
                    <span className="text-sm font-serif font-bold text-[#1B3022]">$25</span>
                  </div>
                  <p className="text-[11px] text-[#1B3022]/80 leading-snug">
                    {lang === 'fr' ? 'Tarif préférentiel exclusif pour nos hôtes' : lang === 'de' ? 'Bevorzugter Sondertarif für unsere Gäste' : lang === 'en' ? 'Special preferred rate for our guests' : 'Tarifa preferencial para huéspedes'}
                  </p>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                  {lang === 'fr' ? 'Date matinale souhaitée' : lang === 'de' ? 'Bevorzugtes Morgendatum' : lang === 'en' ? 'Preferred Morning Date' : 'Fecha Matutina'}
                </label>
                <input
                  type="date"
                  value={birdingDate}
                  onChange={(e) => setBirdingDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1B3022]/15 text-xs text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                  {lang === 'fr' ? 'Nombre de personnes' : lang === 'de' ? 'Anzahl der Personen' : lang === 'en' ? 'Number of Guests' : 'Nombre de Huéspedes'}
                </label>
                <select
                  value={birdingGuests}
                  onChange={(e) => setBirdingGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1B3022]/15 text-xs text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="1">1 {lang === 'fr' ? 'Personne' : lang === 'de' ? 'Person' : lang === 'en' ? 'Person' : 'Persona'}</option>
                  <option value="2">2 {lang === 'fr' ? 'Personnes' : lang === 'de' ? 'Personen' : lang === 'en' ? 'Persons' : 'Personas'}</option>
                  <option value="3">3 {lang === 'fr' ? 'Personnes' : lang === 'de' ? 'Personen' : lang === 'en' ? 'Persons' : 'Personas'}</option>
                  <option value="4">4+ {lang === 'fr' ? 'Personnes' : lang === 'de' ? 'Personen' : lang === 'en' ? 'Persons' : 'Personas'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                {lang === 'fr' ? 'Votre Nom' : lang === 'de' ? 'Ihr Name' : lang === 'en' ? 'Your Name' : 'Su Nombre'}
              </label>
              <input
                type="text"
                placeholder={lang === 'fr' ? 'ex. Marie Dupont' : lang === 'de' ? 'z. B. Maria Gonzalez' : lang === 'en' ? 'e.g. Maria Gonzalez' : 'ej. María González'}
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#1B3022]/15 text-xs text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-grow inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <span>{t.reserveBirdingBtn}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3.5 border border-[#1B3022]/20 hover:bg-white text-[#1B3022] text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                {t.cancelBtn}
              </button>
            </div>
          </form>
        )}

        {/* Direct phone / whatsapp footer */}
        <div className="text-center p-4 bg-[#F5F2EC] border-t border-[#1B3022]/10">
          <a
            href="https://wa.me/50765037828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#1B3022] hover:text-[#C5A059] font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'fr' ? 'Contacter Greg directement sur WhatsApp : +507 6503-7828' : lang === 'de' ? 'Greg direkt per WhatsApp kontaktieren: +507 6503-7828' : lang === 'en' ? 'WhatsApp Greg directly: +507 6503-7828' : 'WhatsApp directo con Greg: +507 6503-7828'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
