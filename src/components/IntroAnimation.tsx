import React, { useState, useEffect } from 'react';

export const IntroAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenIntro = sessionStorage.getItem('gregs_place_intro_seen');
    if (!hasSeenIntro) {
      setIsVisible(true);
      sessionStorage.setItem('gregs_place_intro_seen', 'true');

      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 1200);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1800);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center bg-[#122218] transition-opacity duration-700 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4 space-y-3 transform transition-all duration-700">
        <div className="w-14 h-14 mx-auto rounded-sm border border-[#C5A059]/40 bg-[#FAF8F5]/10 flex items-center justify-center text-[#C5A059] shadow-lg">
          <span className="font-serif text-2xl font-bold">G</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl text-white tracking-wide font-normal">
          Greg's Place in Albrook
        </h1>
        <p className="text-xs font-mono tracking-widest uppercase text-[#C5A059]">
          Stay in History · Wake Up to Nature
        </p>
      </div>
    </div>
  );
};
