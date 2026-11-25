import React, { useState, useEffect } from 'react';
import { Compass, Waves, Palmtree, ExternalLink, Info, Maximize2, X } from 'lucide-react';
import { Language } from '../types';

interface GunaYalaPromoCardProps {
  lang: Language;
}

interface PromoPhoto {
  src: string;
  alt: string;
  captionTitle: string;
  captionSubtitle: string;
  objectPositionClass: string;
}

/**
 * Verified external destination URL for Petra's Guna Yala Panama Travel website.
 */
const VERIFIED_GUNA_YALA_URL = 'https://gunayalapanama.com/';

const COPY: Record<
  Language,
  {
    partnerBadge: string;
    categoryBadge: string;
    sectionHeading: string;
    businessName: string;
    headline: string;
    hostSubtitle: string;
    intro: string;
    complementNote: string;
    highlightsTitle: string;
    highlights: readonly string[];
    separateOperatorNotice: string;
    ctaLabel: string;
    expandLabel: string;
    galleryHint: string;
    closePreviewLabel: string;
    photos: readonly [PromoPhoto, PromoPhoto];
  }
> = {
  en: {
    partnerBadge: 'Independent Travel Offering · Operated by Petra',
    categoryBadge: 'Guna Yala / San Blas Islands',
    sectionHeading: 'Experience the Magic of Guna Yala',
    businessName: 'Guna Yala Panama Travel',
    headline: 'Discover the Guna Yala (San Blas) Islands with Petra',
    hostSubtitle: 'Separate Caribbean island excursion partner — distinct from Greg’s Place & Roberto’s lake tours',
    intro:
      'If you would like to extend your Panama stay beyond the rainforest and Panama Canal into the Caribbean Sea, Petra’s Guna Yala Panama Travel introduces travelers to excursions in the Guna Yala (San Blas) archipelago—famed for palm-fringed coral islands, clear turquoise waters, and living Guna island culture.',
    complementNote:
      'Whereas Roberto’s private boat tour explores the Chagres River and Gatun Lake near Albrook and Gamboa, Petra’s Guna Yala Panama Travel focuses separately on Caribbean coastal and island excursions in the San Blas region.',
    highlightsTitle: 'What Draws Visitors to Guna Yala / San Blas',
    highlights: [
      'Hundreds of coral cays and white-sand islands across the Caribbean archipelago',
      'Snorkeling in calm, crystal-clear turquoise waters and untouched reefs',
      'Authentic encounters with indigenous Guna heritage, traditions, and handcrafted molas',
      'Operated independently by Petra’s Guna Yala Panama Travel as its own travel service',
    ],
    separateOperatorNotice:
      'Important distinction: Guna Yala Panama Travel is an independent travel company run by Petra and is booked directly with Petra—not through Greg’s Place or Roberto’s Monkey Island tour.',
    ctaLabel: 'Explore Guna Yala',
    expandLabel: 'Expand',
    galleryHint: 'Click either photograph to view in full resolution',
    closePreviewLabel: 'Close image preview',
    photos: [
      {
        src: '/pictures/guna1.jpg.png',
        alt: 'Two indigenous Guna women in traditional attire hand-sewing colorful molas in Guna Yala, Panama',
        captionTitle: 'Living Guna Culture & Handcrafted Molas',
        captionSubtitle: 'Traditional textile artistry and daily island heritage shared by the Guna community.',
        objectPositionClass: 'object-[center_18%]',
      },
      {
        src: '/pictures/guna2.jpg.png',
        alt: 'Palm-fringed white-sand island shore and calm turquoise Caribbean waters in Guna Yala (San Blas), Panama',
        captionTitle: 'Palm-Fringed Caribbean Islands & Turquoise Waters',
        captionSubtitle: 'Serene coral beaches and crystal-clear lagoons across the San Blas archipelago.',
        objectPositionClass: 'object-[center_78%]',
      },
    ],
  },
  es: {
    partnerBadge: 'Oferta Turística Independiente · Operada por Petra',
    categoryBadge: 'Islas de Guna Yala / San Blas',
    sectionHeading: 'Viva la Magia de Guna Yala',
    businessName: 'Guna Yala Panama Travel',
    headline: 'Descubra las Islas de Guna Yala (San Blas) con Petra',
    hostSubtitle: 'Operador independiente de excursiones caribeñas — independiente de Greg’s Place y del tour de Roberto',
    intro:
      'Si desea complementar su estadía entre la selva y el Canal de Panamá con el mar Caribe, Guna Yala Panama Travel de Petra ofrece excursiones al archipiélago de Guna Yala (San Blas), célebre por sus islas coralinas con palmeras, aguas turquesas cristalinas y la cultura viva del pueblo Guna.',
    complementNote:
      'Mientras que el recorrido privado en bote de Roberto explora el río Chagres y el Lago Gatún cerca de Albrook y Gamboa, Guna Yala Panama Travel de Petra se dedica de manera independiente a las islas y costas caribeñas de San Blas.',
    highlightsTitle: 'Atractivos de Guna Yala / San Blas',
    highlights: [
      'Cientos de cayos coralinos e islas de arena blanca en el Caribe panameño',
      'Snorkel y baño en aguas turquesas transparentes y arrecifes naturales',
      'Contacto respetuoso con la cultura indígena Guna, sus tradiciones y sus molas artesanales',
      'Servicio turístico independiente gestionado por Petra a través de Guna Yala Panama Travel',
    ],
    separateOperatorNotice:
      'Nota importante: Guna Yala Panama Travel es una empresa independiente dirigida por Petra y sus excursiones se gestionan por separado de Greg’s Place y del tour a la Isla de Monos de Roberto.',
    ctaLabel: 'Explorar Guna Yala',
    expandLabel: 'Ampliar',
    galleryHint: 'Haga clic en cualquier fotografía para verla en su proporción original',
    closePreviewLabel: 'Cerrar vista previa de imagen',
    photos: [
      {
        src: '/pictures/guna1.jpg.png',
        alt: 'Dos mujeres indígenas guna con vestimenta tradicional confeccionando molas a mano en Guna Yala, Panamá',
        captionTitle: 'Cultura Viva Guna y Molas Artesanales',
        captionSubtitle: 'Arte textil tradicional y herencia cotidiana preservada por la comunidad guna.',
        objectPositionClass: 'object-[center_18%]',
      },
      {
        src: '/pictures/guna2.jpg.png',
        alt: 'Playa de arena blanca rodeada de palmeras y aguas turquesas del Caribe en Guna Yala (San Blas), Panamá',
        captionTitle: 'Islas Caribeñas con Palmeras y Aguas Turquesas',
        captionSubtitle: 'Tranquilas playas coralinas y lagunas cristalinas en el archipiélago de San Blas.',
        objectPositionClass: 'object-[center_78%]',
      },
    ],
  },
  de: {
    partnerBadge: 'Unabhängiges Reiseangebot · Geführt von Petra',
    categoryBadge: 'Guna Yala / San-Blas-Inseln',
    sectionHeading: 'Erleben Sie die Magie von Guna Yala',
    businessName: 'Guna Yala Panama Travel',
    headline: 'Entdecken Sie die Guna-Yala-Inseln (San Blas) mit Petra',
    hostSubtitle: 'Eigenständiger Anbieter für Karibik-Ausflüge — getrennt von Greg’s Place & Robertos Bootstouren',
    intro:
      'Wenn Sie Ihren Aufenthalt zwischen Regenwald und Panamakanal um die Karibikküste ergänzen möchten, stellt Petras Guna Yala Panama Travel Ausflüge in das Archipel von Guna Yala (San Blas) vor – bekannt für palmengesäumte Koralleninseln, klares türkisfarbenes Wasser und die lebendige Kultur der Guna.',
    complementNote:
      'Während Robertos Privatboot-Tour den Chagres-Fluss und den Gatun-See nahe Albrook und Gamboa erkundet, konzentriert sich Petras Guna Yala Panama Travel eigenständig auf Inselausflüge in der Karibikregion San Blas.',
    highlightsTitle: 'Höhepunkte von Guna Yala / San Blas',
    highlights: [
      'Hunderte kleine Koralleninseln und weiße Sandstrände im panamaischen Karibischen Meer',
      'Schwimmen und Schnorcheln in ruhigem, kristallklarem türkisem Wasser',
      'Authentische Einblicke in Kultur, Lebensweise und traditionelle Molas der Guna-Gemeinschaft',
      'Eigenständiges Reiseangebot von Petras Guna Yala Panama Travel',
    ],
    separateOperatorNotice:
      'Wichtiger Hinweis: Guna Yala Panama Travel ist ein unabhängiger Reiseanbieter von Petra und steht organisatorisch getrennt von Greg’s Place sowie Robertos Affeninsel-Naturtour.',
    ctaLabel: 'Guna Yala Entdecken',
    expandLabel: 'Vergrößern',
    galleryHint: 'Klicken Sie auf ein Foto, um es im Originalformat anzuzeigen',
    closePreviewLabel: 'Bildvorschau schließen',
    photos: [
      {
        src: '/pictures/guna1.jpg.png',
        alt: 'Zwei Guna-Frauen in traditioneller Kleidung bei der Handarbeit an bunten Molas in Guna Yala, Panama',
        captionTitle: 'Lebendige Guna-Kultur & Handgefertigte Molas',
        captionSubtitle: 'Traditionelle Textilkunst und gelebtes kulturelles Erbe der Guna-Gemeinschaft.',
        objectPositionClass: 'object-[center_18%]',
      },
      {
        src: '/pictures/guna2.jpg.png',
        alt: 'Palmengesäumter weißer Sandstrand und ruhiges türkisfarbenes Karibikwasser in Guna Yala (San Blas), Panama',
        captionTitle: 'Palmengesäumte Inseln & Türkisfarbenes Meer',
        captionSubtitle: 'Idyllische Korallenstrände und glasklare Lagunen im San-Blas-Archipel.',
        objectPositionClass: 'object-[center_78%]',
      },
    ],
  },
  fr: {
    partnerBadge: 'Offre Touristique Indépendante · Gérée par Petra',
    categoryBadge: 'Îles de Guna Yala / San Blas',
    sectionHeading: 'Vivez la Magie de Guna Yala',
    businessName: 'Guna Yala Panama Travel',
    headline: 'Découvrez les Îles de Guna Yala (San Blas) avec Petra',
    hostSubtitle: 'Partenaire indépendant d’excursions caribéennes — distinct de Greg’s Place et des sorties de Roberto',
    intro:
      'Si vous souhaitez prolonger votre séjour entre forêt tropicale et canal de Panama vers la mer des Caraïbes, Guna Yala Panama Travel de Petra propose des excursions dans l’archipel de Guna Yala (San Blas), réputé pour ses îles coralliennes bordées de palmiers, ses eaux turquoise et la culture vivante Guna.',
    complementNote:
      'Alors que l’excursion privée en bateau de Roberto explore le fleuve Chagres et le lac Gatún près d’Albrook et de Gamboa, Guna Yala Panama Travel de Petra est une offre séparée dédiée aux îles caribéennes de San Blas.',
    highlightsTitle: 'L’Essentiel de Guna Yala / San Blas',
    highlights: [
      'Des centaines d’îlots coralliens et de plages de sable blanc dans les Caraïbes panaméennes',
      'Baignade et snorkeling dans des eaux turquoise limpides et des récifs préservés',
      'Découverte authentique de la culture autochtone Guna et de l’artisanat des molas',
      'Service touristique indépendant géré directement par Petra via Guna Yala Panama Travel',
    ],
    separateOperatorNotice:
      'Précision importante : Guna Yala Panama Travel est une agence indépendante dirigée par Petra, entièrement distincte de l’hébergement Greg’s Place et du tour de Roberto à l’Île aux Singes.',
    ctaLabel: 'Découvrir Guna Yala',
    expandLabel: 'Agrandir',
    galleryHint: 'Cliquez sur une photographie pour l’afficher en grand format',
    closePreviewLabel: 'Fermer l’aperçu de l’image',
    photos: [
      {
        src: '/pictures/guna1.jpg.png',
        alt: 'Deux femmes autochtones guna en tenue traditionnelle cousant des molas à la main à Guna Yala, Panama',
        captionTitle: 'Culture Vivante Guna & Molas Artisanales',
        captionSubtitle: 'Savoir-faire textile traditionnel et patrimoine vivant de la communauté Guna.',
        objectPositionClass: 'object-[center_18%]',
      },
      {
        src: '/pictures/guna2.jpg.png',
        alt: 'Plage de sable blanc bordée de palmiers et eaux turquoise des Caraïbes à Guna Yala (San Blas), Panama',
        captionTitle: 'Îles Bordées de Palmiers & Eaux Turquoise',
        captionSubtitle: 'Plages coralliennes paisibles et lagons cristallins au cœur de l’archipel de San Blas.',
        objectPositionClass: 'object-[center_78%]',
      },
    ],
  },
};

export const GunaYalaPromoCard: React.FC<GunaYalaPromoCardProps> = ({ lang }) => {
  const c = COPY[lang];
  const [lightboxPhoto, setLightboxPhoto] = useState<PromoPhoto | null>(null);

  useEffect(() => {
    if (!lightboxPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxPhoto]);

  return (
    <>
      <div
        id="guna-yala-panama-travel"
        className="mt-8 mb-6 bg-[#FAF8F5] text-[#1B3022] border border-[#C5A059]/50 shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden"
      >
        {/* Top Meta Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#1B3022]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-white border border-[#C5A059]/50 flex items-center justify-center shrink-0">
              <Palmtree className="w-4 h-4 text-[#C5A059]" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] font-bold text-[#8C583E]">
              {c.partnerBadge}
            </span>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-1 bg-white text-[#1B3022] border border-[#C5A059]/35">
            {c.categoryBadge}
          </span>
        </div>

        {/* Centered Editorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-9 sm:mb-10">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-[#1B3022] tracking-tight leading-tight">
            {c.sectionHeading}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm font-mono uppercase tracking-[0.26em] text-[#8C583E] font-bold">
            {c.businessName}
          </p>

          {/* Subtle Decorative Gold Divider */}
          <div className="flex items-center justify-center gap-3 my-5" aria-hidden="true">
            <div className="h-[1px] w-14 sm:w-20 bg-[#C5A059]/70" />
            <span className="w-2 h-2 rotate-45 border border-[#C5A059] bg-[#C5A059]/25 block" />
            <div className="h-[1px] w-14 sm:w-20 bg-[#C5A059]/70" />
          </div>

          <p className="font-serif text-lg sm:text-xl text-[#1B3022] font-normal mb-1.5">
            {c.headline}
          </p>
          <p className="text-xs sm:text-sm font-serif italic text-[#8C583E]">
            {c.hostSubtitle}
          </p>
        </div>

        {/* Centered Two-Photo Gallery (95-100% content width, 4:3, stacked on mobile, side-by-side on tablet/desktop) */}
        <div className="w-full lg:w-[96%] mx-auto mb-9 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {c.photos.map((photo, idx) => (
              <figure key={idx} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setLightboxPhoto(photo)}
                  className="w-full text-left group/photo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] cursor-pointer block rounded-[2px]"
                  aria-label={`${c.expandLabel}: ${photo.captionTitle}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#C5A059]/40 bg-[#EDEAE4] shadow-md group-hover/photo:border-[#C5A059] group-hover/photo:shadow-xl transition-all duration-300">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`w-full h-full object-cover ${photo.objectPositionClass} transition-transform duration-500 ease-out group-hover/photo:scale-[1.025]`}
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-[#1B3022]/85 group-hover/photo:bg-[#1B3022] backdrop-blur-xs text-[#FAF8F5] text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[2px] border border-[#C5A059]/50 flex items-center gap-1.5 shadow-sm transition-colors">
                      <Maximize2 className="w-3 h-3 text-[#C5A059]" />
                      <span>{c.expandLabel}</span>
                    </div>
                  </div>
                </button>
                <figcaption className="mt-3.5 px-1 text-center">
                  <div className="font-serif text-base sm:text-lg font-medium text-[#1B3022] leading-snug">
                    {photo.captionTitle}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#1B3022]/75 leading-relaxed">
                    {photo.captionSubtitle}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-mono text-[#8C583E]/85 text-center">
            {c.galleryHint}
          </p>
        </div>

        {/* Preserved Editorial Copy, Highlights & Independent Partner Distinction */}
        <div className="w-full lg:w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start pt-7 border-t border-[#1B3022]/10">
          {/* Left: Narrative & Independent Operator Notice */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-3 text-sm sm:text-[15.5px] text-[#1B3022]/90 leading-relaxed font-normal">
              <p>{c.intro}</p>
              <p className="text-[#1B3022]/80 text-sm">{c.complementNote}</p>
            </div>

            <div className="p-4 bg-white border-l-3 border-[#C5A059] shadow-2xs flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1B3022]/90 leading-relaxed">
              <Info className="w-4 h-4 text-[#8C583E] shrink-0 mt-0.5" />
              <span>{c.separateOperatorNotice}</span>
            </div>
          </div>

          {/* Right: Highlights Panel */}
          <div className="lg:col-span-5 bg-white border border-[#C5A059]/35 p-6 shadow-xs flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#1B3022]/10">
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-[#8C583E] shrink-0" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] font-bold text-[#8C583E]">
                    {c.highlightsTitle}
                  </span>
                </div>
                <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
              </div>

              <ul className="space-y-2.5">
                {c.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#1B3022]/90 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#1B3022]/10 flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#1B3022]/75">
              <span className="font-bold text-[#1B3022]">{c.businessName}</span>
              <span className="text-[#8C583E]">Petra · Guna Yala</span>
            </div>
          </div>
        </div>

        {/* Centered Forest-Green CTA */}
        <div className="mt-8 pt-6 border-t border-[#1B3022]/10 flex justify-center">
          <a
            href={VERIFIED_GUNA_YALA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1B3022] hover:bg-[#243B2F] text-[#FAF8F5] border border-[#C5A059] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] transition-all cursor-pointer"
          >
            <span>{c.ctaLabel}</span>
            <ExternalLink className="w-4 h-4 text-[#C5A059] shrink-0" />
          </a>
        </div>
      </div>

      {/* Original-Aspect-Ratio Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.captionTitle}
        >
          <button
            type="button"
            onClick={() => setLightboxPhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 text-white/90 hover:text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/25 transition-all shadow-lg hover:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] cursor-pointer"
            aria-label={c.closePreviewLabel}
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-black/75 border border-[#C5A059]/50 shadow-2xl rounded-[2px] flex flex-col items-center">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl w-auto h-auto object-contain block select-none"
              />
              <div className="w-full py-3 px-4 bg-[#1B3022] border-t border-[#C5A059]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 text-xs sm:text-sm">
                <span className="font-serif text-[#FAF8F5] font-light">
                  {lightboxPhoto.captionTitle}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] shrink-0">
                  {c.businessName}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
