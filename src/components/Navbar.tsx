import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { Language, NavItem } from '../types';
import { content } from '../data/content';
import { localPictures } from '../data/images';
import { LANGUAGES } from './LanguageSelector';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  onOpenPhotoGallery?: (categoryId?: string) => void;
  isPhotoGalleryActive?: boolean;
  solidBackground?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
  onNavigateHome,
  onOpenPhotoGallery,
  isPhotoGalleryActive = false,
  solidBackground = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const effectiveScrolled = isScrolled || solidBackground;

  // Single horizontal row navigation items from content
  const navItems: readonly NavItem[] = t.nav;

  // Retrieve existing TourScanner URL from What's Nearby section content
  const tourScannerUrl =
    (t.whatsNearby?.places as readonly { id?: string; linkUrl?: string }[] | undefined)?.find(
      (p) => p.id === 'tourscanner' || (p.linkUrl && p.linkUrl.includes('tourscanner'))
    )?.linkUrl || 'https://tourscanner.com/things-to-do-in-panama-city-panama';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    let element = document.getElementById(id);
    if (!element && (id === '51-fun-things' || id === '51-things')) {
      element = document.getElementById('whats-nearby');
    }
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
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        effectiveScrolled
          ? 'bg-[#F5F2ED]/98 backdrop-blur-md shadow-sm border-b border-[#C5A059]/20 py-1.5 sm:py-2'
          : 'bg-gradient-to-b from-[#1B3022]/85 via-[#1B3022]/45 to-transparent py-2 sm:py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 flex items-center justify-between gap-2 xl:gap-4">
        {/* Brand Logo: Mr. Greg & Bird Photographic Cutout */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center text-left group focus:outline-none select-none relative shrink-0"
          aria-label="Greg's Place - Home"
        >
          <img
            src={localPictures.gregBirdLogo}
            alt="Mr. Greg with bird on shoulder - Greg's Place"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 shrink-0 ${
              effectiveScrolled
                ? 'h-[52px] sm:h-[66px] lg:h-[72px] xl:h-[86px]'
                : 'h-[62px] sm:h-[78px] lg:h-[84px] xl:h-[100px]'
            }`}
          />
        </button>

        {/* Desktop Navigation Links - Kept strictly as ONE single horizontal row */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5 flex-nowrap shrink">
          {navItems.map((item) => {
            const isActive = isPhotoGalleryActive && item.id === 'photo-gallery';

            // Special Compact Two-Line Button: 51+ FUN THINGS TO DO IN PANAMA
            // Bold text, bright red text, subtle box/border around the button
            if (item.id === '51-fun-things' || item.id === '51-things') {
              return (
                <a
                  key={item.id}
                  href={tourScannerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex flex-col items-center justify-center text-center px-1.5 sm:px-2 py-0.5 rounded-[3px] font-bold text-[9.5px] xl:text-[10px] 2xl:text-[10.5px] leading-[1.1] tracking-wide transition-all border shrink-0 ${
                    effectiveScrolled
                      ? 'text-[#DC2626] border-[#DC2626]/40 hover:border-[#DC2626] hover:bg-red-50/70 shadow-2xs'
                      : 'text-[#FF4D4D] border-[#FF4D4D]/50 hover:border-[#FF4D4D] hover:bg-black/35 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]'
                  }`}
                  aria-label="51+ Fun Things to Do in Panama"
                >
                  <span className="font-bold whitespace-nowrap">51+ FUN THINGS</span>
                  <span className="font-bold whitespace-nowrap">TO DO IN PANAMA</span>
                </a>
              );
            }

            // Special Compact Two-Line Button: BIRDING, BREAKFAST AND CRITTERS
            // Bold text, bright blue text, subtle box/border around the button
            if (item.id === 'birding-breakfast') {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`inline-flex flex-col items-center justify-center text-center px-1.5 sm:px-2 py-0.5 rounded-[3px] font-bold text-[9.5px] xl:text-[10px] 2xl:text-[10.5px] leading-[1.1] tracking-wide transition-all border shrink-0 ${
                    effectiveScrolled
                      ? 'text-[#0284C7] border-[#0284C7]/40 hover:border-[#0284C7] hover:bg-sky-50/70 shadow-2xs'
                      : 'text-[#38BDF8] border-[#38BDF8]/50 hover:border-[#38BDF8] hover:bg-black/35 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]'
                  }`}
                  aria-label="Birding, Breakfast & Critters"
                >
                  <span className="font-bold whitespace-nowrap">BIRDING</span>
                  <span className="font-bold whitespace-nowrap">BREAKFAST & CRITTERS</span>
                </button>
              );
            }

            // Standard Single-Line Navigation Items
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[10.5px] xl:text-[11px] 2xl:text-[11.5px] uppercase tracking-wider font-medium transition-all py-1 border-b shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'text-[#C5A059] border-[#C5A059] font-bold'
                    : effectiveScrolled
                    ? 'text-[#1B3022]/90 hover:text-[#C5A059] border-transparent hover:border-[#C5A059]'
                    : 'text-white/90 hover:text-[#C5A059] border-transparent hover:border-[#C5A059] drop-shadow'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Utility: Four Horizontal Language Flags directly above Book Now button */}
        <div className="hidden lg:flex flex-col items-end justify-center shrink-0 gap-1.5">
          {/* Four Language Flags Horizontal on One Line: 🇺🇸 English, 🇪🇸 Spanish, 🇩🇪 German, 🇫🇷 French */}
          <div
            className="flex items-center gap-1.5"
            role="group"
            aria-label="Language selection: English, Spanish, German, French"
          >
            {LANGUAGES.map((option) => {
              const isSelected = lang === option.code;
              const FlagComp = option.flag;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onLanguageChange(option.code)}
                  aria-label={`Switch language to ${option.nativeTitle}`}
                  title={option.nativeTitle}
                  className={`p-1 rounded-[3px] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                    isSelected
                      ? 'ring-2 ring-[#C5A059] shadow-xs scale-110 opacity-100'
                      : 'opacity-75 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <FlagComp className="w-[26px] h-[18px] rounded-[2px] shadow-2xs" />
                </button>
              );
            })}
          </div>

          {/* Book Now Button */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 xl:py-2 bg-[#C5A059] hover:bg-[#A68648] text-white text-[10.5px] xl:text-[11px] font-semibold uppercase tracking-widest shadow-md hover:shadow-xl transition-all rounded-xs"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{t.hero.primaryCta}</span>
          </button>
        </div>

        {/* Mobile / Tablet Controls (Screens < lg) */}
        <div className="flex lg:hidden items-center gap-2.5 shrink-0">
          {/* Four horizontal flags on small screens */}
          <div className="flex items-center gap-1.5" role="group" aria-label="Language selection">
            {LANGUAGES.map((option) => {
              const isSelected = lang === option.code;
              const FlagComp = option.flag;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onLanguageChange(option.code)}
                  aria-label={`Switch language to ${option.nativeTitle}`}
                  title={option.nativeTitle}
                  className={`p-1 rounded-[3px] transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-[#C5A059] shadow-xs scale-110 opacity-100'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <FlagComp className="w-[23px] h-[15.5px] rounded-[1.5px] shadow-2xs" />
                </button>
              );
            })}
          </div>

          {/* Book Now button on medium screens */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-[#C5A059] hover:bg-[#A68648] text-white text-[10px] font-semibold uppercase tracking-widest shadow transition-all"
          >
            <Calendar className="w-3 h-3" />
            <span>{t.hero.primaryCta}</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
              effectiveScrolled ? 'text-[#1B3022]' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2ED] border-b border-[#C5A059]/30 shadow-xl px-5 py-5 transition-all animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          {/* Mobile Four Language Flags Horizontal Bar */}
          <div className="pb-3 mb-3 border-b border-[#1B3022]/10 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1B3022]/70 font-semibold">
              {lang === 'fr' ? 'Langue' : lang === 'de' ? 'Sprache' : lang === 'es' ? 'Idioma' : 'Language'}
            </span>
            <div className="flex items-center gap-2">
              {LANGUAGES.map((option) => {
                const isSelected = lang === option.code;
                const FlagComp = option.flag;
                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(option.code);
                    }}
                    className={`flex items-center gap-1 px-1.5 py-1 rounded-[3px] transition-all text-xs font-mono ${
                      isSelected
                        ? 'ring-2 ring-[#C5A059] bg-[#C5A059]/20 font-bold text-[#1B3022]'
                        : 'opacity-70 hover:opacity-100 text-[#1B3022]/80'
                    }`}
                  >
                    <FlagComp className="w-[18px] h-[12px] rounded-[1px]" />
                    <span>{option.regionCode}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = isPhotoGalleryActive && item.id === 'photo-gallery';

              // Mobile 51+ Fun Things
              if (item.id === '51-fun-things' || item.id === '51-things') {
                return (
                  <a
                    key={item.id}
                    href={tourScannerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-xs uppercase tracking-wider font-bold py-2 border-b border-[#1B3022]/10 transition-colors text-[#DC2626] flex items-center justify-between"
                  >
                    <div className="flex flex-col leading-tight">
                      <span>51+ FUN THINGS</span>
                      <span className="text-[10px] opacity-90">TO DO IN PANAMA</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 border border-[#DC2626]/40 rounded-xs text-[#DC2626]">
                      PANAMA
                    </span>
                  </a>
                );
              }

              // Mobile Birding Breakfast
              if (item.id === 'birding-breakfast') {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-xs uppercase tracking-wider font-bold py-2 border-b border-[#1B3022]/10 transition-colors text-[#0284C7] flex items-center justify-between"
                  >
                    <div className="flex flex-col leading-tight">
                      <span>BIRDING</span>
                      <span className="text-[10px] opacity-90">BREAKFAST & CRITTERS</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 border border-[#0284C7]/40 rounded-xs text-[#0284C7]">
                      EXPERIENCE
                    </span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-xs uppercase tracking-wider font-medium py-2 border-b border-[#1B3022]/10 transition-colors ${
                    isActive
                      ? 'text-[#C5A059] font-bold border-b-[#C5A059]'
                      : 'text-[#1B3022] hover:text-[#C5A059]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest bg-[#C5A059] hover:bg-[#A68648] text-white shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.primaryCta}</span>
              </button>

              <a
                href="tel:+50765037828"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#1B3022] border border-[#1B3022]/20 bg-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C583E]" />
                <span>+507 6503-7828</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
