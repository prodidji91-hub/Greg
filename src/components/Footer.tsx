import React from 'react';
import { Phone, MapPin, Calendar, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  onOpenPhotoGallery?: (categoryId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
  onNavigateHome,
  onOpenPhotoGallery,
}) => {
  const t = content[lang].footer;
  const navItems = content[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (id === 'photo-gallery') {
      if (onOpenPhotoGallery) {
        onOpenPhotoGallery();
        return;
      }
    }
    if (onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#1B3022] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl tracking-wide font-light text-white">
              {t.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-[#C5A059]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                {t.tagline}
              </p>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm font-light">
              {lang === 'fr'
                ? "Une maison d'hôtes tropicale intimiste et demeure historique de la Zone du Canal à Albrook, Panama City. Accueil personnalisé, formule Oiseaux & Petit-déjeuner et nature paisible."
                : lang === 'de'
                ? 'Ein intimes tropisches Boutique-Gästehaus und historisches Haus der Kanalzone in Albrook, Panama-Stadt. Persönliche Gastfreundschaft, Vogelbeobachtung & Frühstück und friedliche Natur.'
                : lang === 'es'
                ? 'Una íntima casa de huéspedes tropical y residencia histórica de la Zona del Canal en Albrook, Ciudad de Panamá. Atención personalizada, Aves y Desayuno y naturaleza serena.'
                : 'An intimate boutique tropical guesthouse and historic Canal Zone home in Albrook, Panama City. Personal hosting, Birding & Breakfast, and peaceful nature.'}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>{t.bookCta}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-3">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/75 hover:text-[#C5A059] transition-colors py-1 font-light"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-3">
              {lang === 'fr'
                ? 'Emplacement & Contact'
                : lang === 'de'
                ? 'Lage & Kontakt'
                : lang === 'es'
                ? 'Ubicación y Contacto'
                : 'Location & Contact'}
            </span>
            
            <div className="flex items-start gap-2 text-white/85">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="font-light">
                <p>{t.addressLine1}</p>
                <p>{t.addressLine2}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/85 pt-1">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href="tel:+50765037828" className="hover:text-[#C5A059] transition-colors font-mono">
                {t.phone}
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-4 flex items-center">
              <LanguageSelector
                id="footer-language-selector"
                lang={lang}
                onLanguageChange={onLanguageChange}
                scrolled={false}
                dropUp={true}
              />
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <div>
            <span>{t.rights}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#C5A059] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.poweredBy}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#C5A059] transition-colors text-xs"
          >
            <span>
              {lang === 'fr'
                ? 'Haut de page'
                : lang === 'de'
                ? 'Nach oben'
                : lang === 'es'
                ? 'Volver arriba'
                : 'Back to top'}
            </span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
