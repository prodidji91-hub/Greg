import React from 'react';
import { Compass, Waves, Palmtree, ExternalLink, Info } from 'lucide-react';
import { Language } from '../types';

interface GunaYalaPromoCardProps {
  lang: Language;
}

/**
 * Verified external destination URL for Petra's Guna Yala Panama Travel website.
 */
const VERIFIED_GUNA_YALA_URL: string | undefined = 'https://gunayalapanama.com/';

const COPY: Record<
  Language,
  {
    partnerBadge: string;
    categoryBadge: string;
    businessName: string;
    headline: string;
    hostSubtitle: string;
    intro: string;
    complementNote: string;
    highlightsTitle: string;
    highlights: readonly string[];
    separateOperatorNotice: string;
    ctaLabel: string;
    urlPendingNote: string;
  }
> = {
  en: {
    partnerBadge: 'Independent Travel Offering · Operated by Petra',
    categoryBadge: 'Guna Yala / San Blas Islands',
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
    ctaLabel: 'Explore Guna Yala Tours',
    urlPendingNote:
      'Independent excursion partner — Petra’s direct Guna Yala Panama Travel website link will be added soon.',
  },
  es: {
    partnerBadge: 'Oferta Turística Independiente · Operada por Petra',
    categoryBadge: 'Islas de Guna Yala / San Blas',
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
    ctaLabel: 'Explorar Tours a Guna Yala',
    urlPendingNote:
      'Operador independiente de excursiones — el enlace directo de Guna Yala Panama Travel de Petra se agregará próximamente.',
  },
  de: {
    partnerBadge: 'Unabhängiges Reiseangebot · Geführt von Petra',
    categoryBadge: 'Guna Yala / San-Blas-Inseln',
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
    ctaLabel: 'Guna Yala Touren Entdecken',
    urlPendingNote:
      'Unabhängiger Ausflugspartner — der direkte Website-Link von Petras Guna Yala Panama Travel folgt in Kürze.',
  },
  fr: {
    partnerBadge: 'Offre Touristique Indépendante · Gérée par Petra',
    categoryBadge: 'Îles de Guna Yala / San Blas',
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
    ctaLabel: 'Découvrir les Excursions Guna Yala',
    urlPendingNote:
      'Partenaire d’excursions indépendant — le lien officiel de Guna Yala Panama Travel de Petra sera ajouté prochainement.',
  },
};

export const GunaYalaPromoCard: React.FC<GunaYalaPromoCardProps> = ({ lang }) => {
  const c = COPY[lang];

  return (
    <div
      id="guna-yala-panama-travel"
      className="mt-6 mb-6 bg-white border-2 border-[#C5A059]/60 shadow-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-stretch">
        {/* Left Column: Independent Business Introduction, Distinction & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-[#F5F2ED] border border-[#C5A059]/50 flex items-center justify-center shrink-0">
                  <Palmtree className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] font-bold text-[#8C583E]">
                  {c.partnerBadge}
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 bg-[#EDEAE4] text-[#1B3022] border border-[#1B3022]/10">
                {c.categoryBadge}
              </span>
            </div>

            {/* Business Name & Headline */}
            <div className="mb-1 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#C5A059] font-bold">
              {c.businessName}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#1B3022] tracking-tight leading-snug mb-2">
              {c.headline}
            </h3>
            <p className="text-sm sm:text-[15px] font-serif italic text-[#8C583E] mb-4">
              {c.hostSubtitle}
            </p>

            {/* Narrative */}
            <div className="space-y-3 text-sm sm:text-[15.5px] text-[#1B3022]/90 leading-relaxed font-normal">
              <p>{c.intro}</p>
              <p className="text-[#1B3022]/80 text-sm">{c.complementNote}</p>
            </div>
          </div>

          {/* Separate Operator Clarification + Prominent CTA */}
          <div className="space-y-4 pt-2">
            <div className="p-3.5 bg-[#FAF8F5] border-l-3 border-[#8C583E] flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1B3022]/90 leading-relaxed">
              <Info className="w-4 h-4 text-[#8C583E] shrink-0 mt-0.5" />
              <span>{c.separateOperatorNotice}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {VERIFIED_GUNA_YALA_URL ? (
                <a
                  href={VERIFIED_GUNA_YALA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1B3022] hover:bg-[#243B2F] text-white border border-[#C5A059] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 transition-all cursor-pointer"
                >
                  <span>{c.ctaLabel}</span>
                  <ExternalLink className="w-4 h-4 text-[#C5A059] shrink-0" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1B3022]/90 text-[#FAF8F5] border border-[#C5A059]/70 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] shadow-sm cursor-default select-none"
                >
                  <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{c.ctaLabel}</span>
                </button>
              )}

              {!VERIFIED_GUNA_YALA_URL && (
                <p className="text-xs text-[#8C583E] italic leading-snug max-w-md">
                  {c.urlPendingNote}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Coastal Highlights Panel (no unrelated photos substituted) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#F5F2ED] via-[#FAF8F5] to-[#EDEAE4] border border-[#C5A059]/40 p-6 sm:p-7 flex flex-col justify-between space-y-5">
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

            <ul className="space-y-3">
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

          <div className="pt-4 border-t border-[#1B3022]/10 flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#1B3022]/75">
            <span className="font-bold text-[#1B3022]">{c.businessName}</span>
            <span className="text-[#8C583E]">Petra · Guna Yala</span>
          </div>
        </div>
      </div>
    </div>
  );
};
