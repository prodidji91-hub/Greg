import React from 'react';

interface RoomMarkProps {
  roomId: string;
  className?: string;
}

/**
 * Elegant minimalist room marks for Greg's Place in Albrook.
 * Designed with a luxury hospitality aesthetic:
 * - Cayuca Room: Refined minimalist wooden canoe / cayuca silhouette with paddle stroke
 * - Owl Room: Clean minimalist owl silhouette mark
 * - Coati Room: Clean minimalist coati silhouette mark
 * - Master Bedroom: Elegant villa / sanctuary mark
 */
export const RoomMark: React.FC<RoomMarkProps> = ({ roomId, className = '' }) => {
  // Only render dedicated emblems per design system
  if (roomId === 'cayuca-room') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md border border-[#C5A059]/50 text-[#FAF8F5] shadow-xs select-none pointer-events-none ${className}`}
        title="Cayuca Room"
        aria-label="Cayuca Room emblem"
      >
        {/* Minimalist wooden cayuca / canoe line art icon */}
        <svg
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-3 text-[#C5A059] shrink-0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Canoe hull: curved bottom canoe profile tapering at prow and stern */}
          <path d="M2 5.5 C7 11.5, 25 11.5, 30 5.5 C25 8, 7 8, 2 5.5 Z" fill="currentColor" fillOpacity="0.2" />
          {/* Subtle interior ribbing / gunwale line */}
          <path d="M4 6 Q16 8.5 28 6" strokeWidth="1.2" strokeOpacity="0.8" />
          {/* Slender paddle angled gracefully across */}
          <line x1="11" y1="2" x2="21" y2="14" strokeWidth="1.2" />
          <path d="M19.5 12 L22.5 15.5" strokeWidth="2" />
        </svg>
        <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#FAF8F5]/90">
          Cayuca
        </span>
      </div>
    );
  }

  if (roomId === 'coati-room') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md border border-[#C5A059]/50 text-[#FAF8F5] shadow-xs select-none pointer-events-none ${className}`}
        title="Coati Room"
        aria-label="Coati Room emblem"
      >
        {/* Minimalist illustrated white-nosed coati line art icon */}
        <svg
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-3 text-[#C5A059] shrink-0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Coati body profile with long snout, small ears, and legs */}
          <path
            d="M4 9.5 C5.5 8.2, 7.5 7.5, 8.5 7.5 C9 6, 10.5 6, 11 7.2 C13.5 6.8, 17 6.2, 19.5 6.5 C20.5 8, 20.8 11, 20 14 L18 14 C18.5 11.5, 17.5 10.8, 15 10.8 C13.5 10.8, 13 11.8, 12 14 L10 14 C10.8 11.2, 9.8 9.8, 7.5 9.8 L4 9.5 Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          {/* Long upright tail with forward curved tip */}
          <path
            d="M19.5 6.5 C21.5 5.5, 24.5 4, 24 1.8 C23.6 1.1, 22.4 1.2, 21.8 2 C21.2 3.8, 20 5.2, 18.5 6.5"
            strokeWidth="1.3"
            fill="currentColor"
            fillOpacity="0.2"
          />
          {/* Tail ring markings */}
          <line x1="22.2" y1="3.2" x2="23.6" y2="3.5" strokeWidth="1" />
          <line x1="21" y1="4.8" x2="22.5" y2="5.1" strokeWidth="1" />
          {/* White-nosed snout detail & small eye */}
          <circle cx="8.5" cy="7.8" r="0.6" fill="currentColor" />
          <line x1="5.5" y1="8.6" x2="6" y2="9.8" strokeWidth="1" />
        </svg>
        <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#FAF8F5]/90">
          Coati
        </span>
      </div>
    );
  }

  if (roomId === 'owl-room') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md border border-[#C5A059]/50 text-[#FAF8F5] shadow-xs select-none pointer-events-none ${className}`}
        title="Owl Room"
        aria-label="Owl Room emblem"
      >
        {/* Minimalist illustrated owl line art icon */}
        <svg
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-3 text-[#C5A059] shrink-0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Branch perch */}
          <line x1="7" y1="14.5" x2="25" y2="14.5" strokeWidth="1.2" strokeOpacity="0.8" />
          {/* Owl body outline with ear tufts */}
          <path
            d="M11 3 Q16 4.8 21 3 Q23 7.8 21 13.5 Q16 14.5 11 13.5 Q9 7.8 11 3 Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          {/* Large recognizable eyes */}
          <circle cx="13" cy="7.5" r="2.2" strokeWidth="1.2" />
          <circle cx="13" cy="7.5" r="0.8" fill="currentColor" />
          <circle cx="19" cy="7.5" r="2.2" strokeWidth="1.2" />
          <circle cx="19" cy="7.5" r="0.8" fill="currentColor" />
          {/* Cute downward beak */}
          <path d="M15 8.5 L17 8.5 L16 10.6 Z" fill="currentColor" strokeWidth="0.8" />
          {/* Wing folds */}
          <path d="M10 8 C9.5 10.5, 11 12.2, 12.5 13" strokeWidth="1.1" />
          <path d="M22 8 C22.5 10.5, 21 12.2, 19.5 13" strokeWidth="1.1" />
          {/* Talons grasping perch */}
          <line x1="12.5" y1="13.5" x2="12.5" y2="14.5" strokeWidth="1.2" />
          <line x1="13.5" y1="13.5" x2="13.5" y2="14.5" strokeWidth="1.2" />
          <line x1="18.5" y1="13.5" x2="18.5" y2="14.5" strokeWidth="1.2" />
          <line x1="19.5" y1="13.5" x2="19.5" y2="14.5" strokeWidth="1.2" />
        </svg>
        <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#FAF8F5]/90">
          Owl
        </span>
      </div>
    );
  }

  if (roomId === 'master-bedroom') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md border border-[#C5A059]/50 text-[#FAF8F5] shadow-xs select-none pointer-events-none ${className}`}
        title="Master Bedroom"
        aria-label="Master Bedroom emblem"
      >
        {/* Minimalist illustrated bedroom / bed line art icon */}
        <svg
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-3 text-[#C5A059] shrink-0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Tall headboard on left */}
          <line x1="4" y1="2.5" x2="4" y2="14" strokeWidth="1.6" />
          <path d="M4 3.5 C5.5 2.5, 7.5 2.5, 9 3.5 L9 11 L4 11" strokeWidth="1.1" fill="currentColor" fillOpacity="0.2" />
          {/* Footboard post on right */}
          <line x1="28" y1="7.5" x2="28" y2="14" strokeWidth="1.6" />
          {/* Sturdy base rail */}
          <line x1="4" y1="11" x2="28" y2="11" strokeWidth="1.3" />
          {/* Cozy pillows */}
          <path d="M7 6.5 C7 5.2, 12 5.2, 12 6.5 C12 7.8, 7 7.8, 7 6.5 Z" strokeWidth="1.1" fill="currentColor" fillOpacity="0.3" />
          {/* Plush turned-down duvet and bedspread */}
          <path d="M12.5 7.5 C16 7, 23 7, 27.5 8 L27.5 11 L13 11 Z" fill="currentColor" fillOpacity="0.2" />
          {/* Folded top sheet edge */}
          <line x1="12.5" y1="7.5" x2="13.5" y2="11" strokeWidth="1.2" />
          {/* Soft mattress crease */}
          <path d="M15 9.2 Q20 8.7 26 9.4" strokeWidth="0.9" strokeOpacity="0.7" />
        </svg>
        <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#FAF8F5]/90">
          Master
        </span>
      </div>
    );
  }

  return null;
};
