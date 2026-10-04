import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

interface LocalImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  title?: string;
  subtitle?: string;
  overlay?: boolean;
  hoverZoom?: boolean;
  showPlaceholderText?: boolean;
}

export const LocalImage: React.FC<LocalImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false,
  title,
  subtitle,
  overlay = false,
  hoverZoom = true,
  showPlaceholderText = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#243B2F] rounded-xl border border-[#C5A880]/20 shadow-sm ${aspectRatio} ${containerClassName} group`}
    >
      {/* Editorial placeholder background - visible while loading or before user drops in their photo */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1F3529] to-[#14231B] text-[#FAF8F5]">
          {showPlaceholderText && (
            <>
              <div className="w-12 h-12 rounded-full bg-[#2D4A3E]/80 border border-[#C5A880]/30 flex items-center justify-center mb-3 text-[#C5A880] shadow-inner">
                <Camera className="w-5 h-5 opacity-90" />
              </div>
              {title && (
                <h4 className="font-serif text-lg tracking-wide text-[#FAF8F5] mb-1 font-medium">
                  {title}
                </h4>
              )}
              <p className="text-xs text-[#FAF8F5]/70 max-w-[280px] leading-relaxed line-clamp-2 mb-3">
                {alt}
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#122419]/90 border border-[#C5A880]/40 text-[10px] font-mono text-[#E4C89F] tracking-tight">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>{src}</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* The actual local image element */}
      <img
        src={encodeURI(src)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          hoverZoom ? 'group-hover:scale-105' : ''
        } ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'} ${className}`}
      />

      {/* Subtle luxury vignette / overlay if requested */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      )}

      {/* Subtitle tag if provided */}
      {subtitle && isLoaded && (
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white">
          {subtitle}
        </div>
      )}
    </div>
  );
};
