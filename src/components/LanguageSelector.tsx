import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Language, LanguageOption } from '../types';

export type { LanguageOption };

/**
 * United States Flag (SVG)
 * Official proportions & colors: Old Glory Red (#BF0D3E), Old Glory Blue (#002868), White (#FFFFFF)
 */
export const UsFlag: React.FC<{ className?: string }> = ({
  className = 'w-[20px] h-[13.5px]',
}) => (
  <svg
    viewBox="0 0 24 16"
    className={`inline-block shrink-0 rounded-[2px] shadow-xs border border-black/20 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="16" fill="#FFFFFF" />
    <rect y="0.00" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="2.46" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="4.92" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="7.38" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="9.85" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="12.31" width="24" height="1.23" fill="#BF0D3E" />
    <rect y="14.77" width="24" height="1.23" fill="#BF0D3E" />
    <rect x="0" y="0" width="10" height="8.62" fill="#002868" />
    <polygon points="2.20,1.15 2.36,1.58 2.82,1.60 2.46,1.88 2.58,2.33 2.20,2.07 1.82,2.33 1.94,1.88 1.58,1.60 2.04,1.58" fill="#FFFFFF" />
    <polygon points="5.00,1.15 5.16,1.58 5.62,1.60 5.26,1.88 5.38,2.33 5.00,2.07 4.62,2.33 4.74,1.88 4.38,1.60 4.84,1.58" fill="#FFFFFF" />
    <polygon points="7.80,1.15 7.96,1.58 8.42,1.60 8.06,1.88 8.18,2.33 7.80,2.07 7.42,2.33 7.54,1.88 7.18,1.60 7.64,1.58" fill="#FFFFFF" />
    <polygon points="3.60,2.85 3.76,3.28 4.22,3.30 3.86,3.58 3.98,4.03 3.60,3.77 3.22,4.03 3.34,3.58 2.98,3.30 3.44,3.28" fill="#FFFFFF" />
    <polygon points="6.40,2.85 6.56,3.28 7.02,3.30 6.66,3.58 6.78,4.03 6.40,3.77 6.02,4.03 6.14,3.58 5.78,3.30 6.24,3.28" fill="#FFFFFF" />
    <polygon points="2.20,4.55 2.36,4.98 2.82,5.00 2.46,5.28 2.58,5.73 2.20,5.47 1.82,5.73 1.94,5.28 1.58,5.00 2.04,4.98" fill="#FFFFFF" />
    <polygon points="5.00,4.55 5.16,4.98 5.62,5.00 5.26,5.28 5.38,5.73 5.00,5.47 4.62,5.73 4.74,5.28 4.38,5.00 4.84,4.98" fill="#FFFFFF" />
    <polygon points="7.80,4.55 7.96,4.98 8.42,5.00 8.06,5.28 8.18,5.73 7.80,5.47 7.42,5.73 7.54,5.28 7.18,5.00 7.64,4.98" fill="#FFFFFF" />
    <polygon points="3.60,6.25 3.76,6.68 4.22,6.70 3.86,6.98 3.98,7.43 3.60,7.17 3.22,7.43 3.34,6.98 2.98,6.70 3.44,6.68" fill="#FFFFFF" />
    <polygon points="6.40,6.25 6.56,6.68 7.02,6.70 6.66,6.98 6.78,7.43 6.40,7.17 6.02,7.43 6.14,6.98 5.78,6.70 6.24,6.68" fill="#FFFFFF" />
  </svg>
);

/**
 * Spain Flag (SVG)
 * Official colours: Red (#AA151B), Gold Yellow (#F1BF00)
 */
export const SpainFlag: React.FC<{ className?: string }> = ({
  className = 'w-[20px] h-[13.5px]',
}) => (
  <svg
    viewBox="0 0 24 16"
    className={`inline-block shrink-0 rounded-[2px] shadow-xs border border-black/20 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="4" y="0" fill="#AA151B" />
    <rect width="24" height="8" y="4" fill="#F1BF00" />
    <rect width="24" height="4" y="12" fill="#AA151B" />
  </svg>
);

/**
 * Germany Flag (SVG)
 * Official tricolour: Black (#000000), Red (#DD0000), Gold (#FFCE00)
 */
export const GermanyFlag: React.FC<{ className?: string }> = ({
  className = 'w-[20px] h-[13.5px]',
}) => (
  <svg
    viewBox="0 0 24 16"
    className={`inline-block shrink-0 rounded-[2px] shadow-xs border border-black/20 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="5.33" y="0" fill="#000000" />
    <rect width="24" height="5.34" y="5.33" fill="#DD0000" />
    <rect width="24" height="5.33" y="10.67" fill="#FFCE00" />
  </svg>
);

/**
 * France Flag (SVG)
 * Official French Tricolore: Blue (#002654), White (#FFFFFF), Red (#ED2939)
 */
export const FranceFlag: React.FC<{ className?: string }> = ({
  className = 'w-[20px] h-[13.5px]',
}) => (
  <svg
    viewBox="0 0 24 16"
    className={`inline-block shrink-0 rounded-[2px] shadow-xs border border-black/20 ${className}`}
    aria-hidden="true"
  >
    <rect width="8" height="16" x="0" fill="#002654" />
    <rect width="8" height="16" x="8" fill="#FFFFFF" />
    <rect width="8" height="16" x="16" fill="#ED2939" />
  </svg>
);

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    label: 'English',
    regionCode: 'US',
    nativeTitle: 'English (US)',
    flag: UsFlag,
  },
  {
    code: 'es',
    label: 'Español',
    regionCode: 'ES',
    nativeTitle: 'Español (ES)',
    flag: SpainFlag,
  },
  {
    code: 'de',
    label: 'Deutsch',
    regionCode: 'DE',
    nativeTitle: 'Deutsch (DE)',
    flag: GermanyFlag,
  },
  {
    code: 'fr',
    label: 'Français',
    regionCode: 'FR',
    nativeTitle: 'Français (FR)',
    flag: FranceFlag,
  },
];

interface LanguageSelectorProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  scrolled?: boolean;
  dropUp?: boolean;
  className?: string;
  id?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  lang,
  onLanguageChange,
  scrolled = false,
  dropUp = false,
  className = '',
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const currentOption = LANGUAGES.find((opt) => opt.code === lang) || LANGUAGES[0];
  const CurrentFlag = currentOption.flag;

  return (
    <div
      id={id}
      ref={containerRef}
      className={`relative inline-block text-left ${className}`}
    >
      {/* Compact Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current language: ${currentOption.nativeTitle}. Click to change language.`}
        className={`group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
          scrolled
            ? 'bg-white/90 hover:bg-white text-[#1B3022] border border-[#1B3022]/15 shadow-2xs'
            : 'bg-black/35 hover:bg-black/50 text-white border border-white/25 backdrop-blur-xs shadow-xs'
        }`}
      >
        <CurrentFlag className="w-[18px] h-[12px] rounded-[2px]" />
        <span className="text-[11px] font-mono font-semibold tracking-wider uppercase">
          {currentOption.regionCode}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 opacity-70 group-hover:opacity-100 ${
            isOpen ? 'rotate-180 text-[#C5A059]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className={`absolute right-0 w-44 py-1 bg-[#FAF8F5] border border-[#C5A059]/40 shadow-xl rounded-sm z-50 animate-in fade-in zoom-in-95 duration-150 ${
            dropUp ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
          }`}
        >
          {LANGUAGES.map((option) => {
            const isSelected = option.code === lang;
            const FlagComponent = option.flag;

            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onLanguageChange(option.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left ${
                  isSelected
                    ? 'bg-[#C5A059]/15 text-[#1B3022] font-semibold border-l-2 border-[#C5A059]'
                    : 'text-[#1B3022]/85 hover:bg-[#1B3022]/5 hover:text-[#1B3022]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FlagComponent className="w-[19px] h-[12.7px] rounded-[2px]" />
                  <span className="font-sans text-[12px]">{option.nativeTitle}</span>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
