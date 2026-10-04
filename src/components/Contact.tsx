import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, Calendar, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface ContactProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang].contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    // In production, sends email or webhook to host
  };

  const whatsappUrl = 'https://wa.me/50765037828?text=Hello%20Greg,%20I%20am%20inquiring%20about%20staying%20at%20Greg%27s%20Place%20in%20Albrook';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Calle+Los+Guayacanes+247+Albrook+Panama+City+Panama';

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
            {t.title}
          </h2>

          <p className="text-[#C5A059] text-lg font-serif italic mb-4">
            {t.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed">
            {t.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Direct Host CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#1B3022]/10 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.addressHeading}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#1B3022]">
                  Greg&apos;s Place in Albrook
                </h3>
                <p className="text-sm text-[#1B3022]/80 mt-1 font-light">
                  Calle Los Guayacanes 247, Albrook, Panama City, Panama
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B3022]/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.phoneHeading}
                </span>
                <a
                  href="tel:+50765037828"
                  className="font-serif text-2xl text-[#1B3022] hover:text-[#C5A059] transition-colors block"
                >
                  +507 6503-7828
                </a>
                <span className="text-xs text-[#1B3022]/70 font-light">
                  {lang === 'fr'
                    ? 'Appel direct & WhatsApp : +507 6503-7828'
                    : lang === 'de'
                    ? 'Direkter Anruf & WhatsApp: +507 6503-7828'
                    : lang === 'en'
                    ? 'Direct call & WhatsApp: +507 6503-7828'
                    : 'Llamada directa y WhatsApp: +507 6503-7828'}
                </span>
              </div>

              <div className="pt-4 border-t border-[#1B3022]/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.hoursHeading}
                </span>
                <p className="text-xs text-[#1B3022]/80 font-light">
                  {t.hoursText}
                </p>
              </div>
            </div>

            {/* Quick Action Direct CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{t.phoneCTA}</span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1B3022]/20 bg-white hover:bg-[#EDEAE4] text-[#1B3022] text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{t.directionsCTA}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{t.bookingCTA}</span>
              </button>
            </div>
          </div>

          {/* Bilingual Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#1B3022]/10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#1B3022]/10 text-[#1B3022] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1B3022] mb-2 font-light">
                  Message Sent
                </h3>
                <p className="text-sm text-[#1B3022]/80 max-w-md mb-6 font-light">
                  {t.successMsg}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 border border-[#1B3022]/20 text-[11px] font-bold uppercase tracking-widest text-[#1B3022] hover:bg-[#EDEAE4]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>{t.sendBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
