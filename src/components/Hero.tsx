import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExplore?: () => void;
}

interface WildlifeSlide {
  id: string;
  slideIndex: number;
  src: string;
  nameEn: string;
  nameEs: string;
  nameDe?: string;
  nameFr?: string;
  speciesEn: string;
  speciesEs: string;
  tagEn: string;
  tagEs: string;
  descEn: string;
  descEs: string;
  subtitleEn?: string;
  subtitleEs?: string;
  subtitleDe?: string;
  subtitleFr?: string;
  imagePosition?: string;
}

// 10 Total Hero Wildlife Slides
const WILDLIFE_SLIDES: WildlifeSlide[] = [
  {
    id: 'toucan',
    slideIndex: 0,
    src: '/pictures/Tucannn.jpg',
    nameEn: 'Keel-billed Toucan',
    nameEs: 'Tucán Pico Iris',
    nameDe: 'Fischertukan (Keel-billed Toucan)',
    nameFr: 'Toucan à carène',
    speciesEn: 'Ramphastos sulfuratus',
    speciesEs: 'Ramphastos sulfuratus',
    tagEn: 'Garden Canopy',
    tagEs: 'Copa del Jardín',
    descEn: 'Recognized by their rainbow-colored bills, pairs of toucans frequently visit the garden canopy in early mornings and late afternoons.',
    descEs: 'Reconocidos por su pico multicolor, parejas de tucanes frecuentan el dosel de nuestro jardín en las mañanas y al atardecer.',
    subtitleEn: "Live in the neighborhood",
    subtitleEs: "Viven en el vecindario",
    subtitleDe: "Leben in der Nachbarschaft",
    subtitleFr: "Vivent dans le quartier",
    imagePosition: 'object-toucan-pos',
  },
  {
    id: 'coatimundi',
    slideIndex: 1,
    src: '/pictures/Gemini_Generated_Image_pjm5bgpjm5bgpjm5.jpg',
    nameEn: 'Coatimundi',
    nameEs: 'Coatimundi',
    nameDe: 'Weißrüssel-Nasenbär (Coatimundi)',
    nameFr: 'Coati à nez blanc',
    speciesEn: 'Nasua narica',
    speciesEs: 'Nasua narica',
    tagEn: 'Daily Garden Visitor',
    tagEs: 'Visitante Diario',
    descEn: 'Curious and agile relatives of the raccoon that forage along the quiet residential garden edges.',
    descEs: 'Parientes curiosos y ágiles del mapache que recorren los bordes del jardín buscando alimento.',
    subtitleEn: "Visit Greg’s Place multiple times per day",
    subtitleEs: "Visitan Greg’s Place varias veces al día",
    subtitleDe: "Besuchen Greg’s Place mehrmals täglich",
    subtitleFr: "Visitent Greg’s Place plusieurs fois par jour",
    imagePosition: 'object-coatimundi-pos',
  },
  {
    id: 'agouti',
    slideIndex: 2,
    src: '/pictures/agoutinew.jpg',
    nameEn: 'Agouti',
    nameEs: 'Ñeques (Agutí)',
    nameDe: 'Mittelamerikanisches Aguti (Ñeque)',
    nameFr: 'Agouti (Ñeque)',
    speciesEn: 'Dasyprocta punctata',
    speciesEs: 'Dasyprocta punctata',
    tagEn: 'Lawn & Shaded Grounds',
    tagEs: 'Césped y Senderos',
    descEn: 'Gentle, glossy-furred fixtures of our garden lawn, nibbling fallen seeds and entertaining guests during breakfast.',
    descEs: 'Simpáticos roedores de pelaje brillante que visitan a diario el césped durante el desayuno.',
    subtitleEn: "Visit Greg’s Place multiple times per day",
    subtitleEs: "Visitan Greg’s Place varias veces al día",
    subtitleDe: "Besuchen Greg’s Place mehrmals täglich",
    subtitleFr: "Visitent Greg’s Place plusieurs fois par jour",
    imagePosition: 'object-agouti-pos',
  },
  {
    id: 'monkey',
    slideIndex: 3,
    src: '/pictures/tamarin.jpeg',
    nameEn: "Geoffroy's Tamarin",
    nameEs: 'Mono Tití (Geoffroy)',
    nameDe: "Geoffroy-Tamarin",
    nameFr: 'Tamarin de Geoffroy',
    speciesEn: 'Saguinus geoffroyi',
    speciesEs: 'Saguinus geoffroyi',
    tagEn: 'Canopy Corridors',
    tagEs: 'Corredores del Dosel',
    descEn: 'Small, energetic native tamarins occasionally traversing the leafy canopy corridors bordering our property.',
    descEs: 'Pequeños y enérgicos monos tití que se desplazan periódicamente por los corredores arbóreos de Albrook.',
    subtitleEn: "Several visit Greg’s Place multiple times per day almost every day",
    subtitleEs: "Varios visitan Greg’s Place varias veces al día casi todos los días",
    subtitleDe: "Mehrere besuchen Greg’s Place fast jeden Tag mehrmals täglich",
    subtitleFr: "Plusieurs visitent Greg’s Place plusieurs fois par jour presque tous les jours",
  },
  {
    id: 'iguana',
    slideIndex: 4,
    src: '/pictures/iguanaaa.jpg',
    nameEn: 'Iguana',
    nameEs: 'Iguana',
    nameDe: 'Grüner Leguan',
    nameFr: 'Iguane vert',
    speciesEn: 'Iguana iguana & Basiliscus',
    speciesEs: 'Iguana iguana y Basilisco',
    tagEn: 'Sunlit Branches',
    tagEs: 'Ramas Soleadas',
    descEn: 'Basking in sunlit foliage or spotted along quiet waterside rocks just steps from the house.',
    descEs: 'Descansando en las ramas soleadas del dosel o junto a las piedras de la quebrada cercana.',
    subtitleEn: "Visit Greg’s Place multiple times per day",
    subtitleEs: "Visitan Greg’s Place varias veces al día",
    subtitleDe: "Besuchen Greg’s Place mehrmals täglich",
    subtitleFr: "Visitent Greg’s Place plusieurs fois par jour",
  },
  {
    id: 'chachalaca',
    slideIndex: 5,
    src: '/pictures/chachalacanew.jpg',
    nameEn: 'Gray-headed Chachalaca',
    nameEs: 'Chachalaca Cabecigrís',
    nameDe: 'Graukopf-Chachalaca',
    nameFr: 'Chachalaca à tête grise',
    speciesEn: 'Ortalis cinereiceps',
    speciesEs: 'Ortalis cinereiceps',
    tagEn: 'Native Wildlife',
    tagEs: 'Fauna Nativa',
    descEn: 'Gregarious tree-dwelling birds native to Central America known for their lively chorus at dawn and dusk.',
    descEs: 'Aves gregarias nativas de América Central conocidas por su coro animado al amanecer y al atardecer.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-chachalaca-pos',
  },
  {
    id: 'yellow-backed-oriole',
    slideIndex: 6,
    src: '/pictures/15-yellow-backed-oriole-yelling.jpg',
    nameEn: 'Yellow-backed Oriole',
    nameEs: 'Yellow-backed Oriole',
    nameDe: 'Gelbrückentrupial (Yellow-backed Oriole)',
    nameFr: 'Oriole à dos jaune',
    speciesEn: 'Icterus chrysater',
    speciesEs: 'Icterus chrysater',
    tagEn: 'Garden Songbird',
    tagEs: 'Ave Cantora',
    descEn: 'Vibrant yellow and black songbirds that fill the morning canopy with melodious whistles.',
    descEs: 'Aves cantoras de plumaje amarillo y negro vibrante que alegran el dosel con sus silbidos melodiosos.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-oriole-pos',
  },
  {
    id: 'orange-chinned-parakeet',
    slideIndex: 7,
    src: "/pictures/16-orange-chinned parakeet at Greg's.jpg",
    nameEn: 'Orange-chinned Parakeet',
    nameEs: 'Perico Barbinaranja (Orange-chinned Parakeet)',
    nameDe: 'Tovisittich (Orange-chinned Parakeet)',
    nameFr: "Toui à menton d'or",
    speciesEn: 'Brotogeris jugularis',
    speciesEs: 'Brotogeris jugularis',
    tagEn: 'Garden Flock',
    tagEs: 'Bandada del Jardín',
    descEn: 'Playful and vocal parakeets frequently seen chattering in pairs across the Albrook garden trees.',
    descEs: 'Periquitos juguetones y comunicativos que suelen verse en parejas entre los árboles de Albrook.',
    subtitleEn: "Flock of 50+ visit Greg’s Place every day",
    subtitleEs: "Bandada de más de 50 visita Greg’s Place todos los días",
    subtitleDe: "Schwarm von über 50 besucht Greg’s Place jeden Tag",
    subtitleFr: "Une volée de plus de 50 visite Greg’s Place tous les jours",
    imagePosition: 'object-parakeet-pos',
  },
  {
    id: 'barred-antshrike',
    slideIndex: 8,
    src: '/pictures/7-barred antshrike female full-1.jpg',
    nameEn: 'Barred Ant Shrike Female',
    nameEs: 'Barred Ant Shrike Female',
    nameDe: 'Binden-Ameisenwürger (Weibchen)',
    nameFr: 'Batara barré (Femelle)',
    speciesEn: 'Thamnophilus doliatus',
    speciesEs: 'Thamnophilus doliatus',
    tagEn: 'Garden Understory',
    tagEs: 'Sotobosque del Jardín',
    descEn: 'Distinctive tropical birds foraging actively in the low garden shrubbery and hedge perches.',
    descEs: 'Aves tropicales características que buscan alimento activamente entre los arbustos bajos del jardín.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-antshrike-pos',
  },
  {
    id: 'blue-gray-tanager',
    slideIndex: 9,
    src: '/pictures/22-blue-gray-tanager-on-wire.jpg',
    nameEn: 'Blue-gray Tanager',
    nameEs: 'Blue-gray Tanager',
    nameDe: 'Bischofstangare (Blue-gray Tanager)',
    nameFr: 'Tangara évêque',
    speciesEn: 'Thraupis episcopus',
    speciesEs: 'Thraupis episcopus',
    tagEn: 'Canopy & Garden',
    tagEs: 'Dosel y Jardín',
    descEn: 'Graceful songbirds with delicate powder-blue plumage, frequently seen singing from garden perches and open wires.',
    descEs: 'Aves cantoras sociables de delicado plumaje azul pastel, que se aprecian cantando en las ramas y cables del jardín.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-tanager-pos',
  },
  {
    id: 'variegated-squirrel',
    slideIndex: 10,
    src: '/pictures/jumpsquirel.jpg',
    nameEn: 'Variegated Squirrel',
    nameEs: 'Ardilla Variable',
    nameDe: 'Buntmarder-Hörnchen (Variegated Squirrel)',
    nameFr: 'Écureuil varié',
    speciesEn: 'Sciurus variegatoides',
    speciesEs: 'Sciurus variegatoides',
    tagEn: 'Garden Trees',
    tagEs: 'Árboles del Jardín',
    descEn: 'Agile and inquisitive tree squirrels scampering gracefully across tropical garden branches every morning.',
    descEs: 'Ardillas ágiles y vivaces que recorren diariamente las ramas tropicales del jardín de Albrook.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-squirrel-pos',
  },
  {
    id: 'barred-antshrike-12',
    slideIndex: 11,
    src: '/pictures/male barred.jpg',
    nameEn: 'Barred Ant Shrike Male',
    nameEs: 'Barred Ant Shrike Male',
    nameDe: 'Binden-Ameisenwürger (Männchen)',
    nameFr: 'Batara barré (Mâle)',
    speciesEn: 'Thamnophilus doliatus',
    speciesEs: 'Thamnophilus doliatus',
    tagEn: 'Garden Understory',
    tagEs: 'Sotobosque del Jardín',
    descEn: 'Distinctive tropical birds foraging actively in the low garden shrubbery and hedge perches.',
    descEs: 'Aves tropicales características que buscan alimento activamente entre los arbustos bajos del jardín.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-antshrike-male-pos',
  },
  {
    id: 'green-honeycreeper',
    slideIndex: 12,
    src: '/pictures/green honeycreeper11.jpg',
    nameEn: 'Green Honeycreeper',
    nameEs: 'Mielero Verde',
    nameDe: 'Grünnaschvogel (Green Honeycreeper)',
    nameFr: 'Guit-guit émeraude',
    speciesEn: 'Chlorophanes spiza',
    speciesEs: 'Chlorophanes spiza',
    tagEn: 'Tropical Canopy',
    tagEs: 'Dosel Tropical',
    descEn: 'Striking jewel-toned tropical birds that dart among blossoming fruit trees and flowering garden vines.',
    descEs: 'Aves tropicales de brillantes tonos esmeralda que visitan los árboles frutales y enredaderas en flor.',
    subtitleEn: "Visit Greg’s Place occasionally",
    subtitleEs: "Visitan Greg’s Place ocasionalmente",
    subtitleDe: "Besuchen Greg’s Place gelegentlich",
    subtitleFr: "Visitent Greg’s Place occasionnellement",
    imagePosition: 'object-honeycreeper-pos',
  },
  {
    id: 'greg',
    slideIndex: 13,
    src: '/pictures/gregiii.jpg',
    nameEn: 'Greg',
    nameEs: 'Greg',
    nameDe: 'Greg',
    nameFr: 'Greg',
    speciesEn: 'Host & Naturalist',
    speciesEs: 'Anfitrión y Naturalista',
    tagEn: 'Your Host',
    tagEs: 'Tu Anfitrión',
    descEn: 'Lifelong naturalist, passionate birding enthusiast, and hospitable creator of Greg’s Place in Albrook.',
    descEs: 'Naturalista, apasionado de las aves y anfitrión dedicado en Greg’s Place en Albrook.',
    subtitleEn: "Lives at Greg’s Place",
    subtitleEs: "Vive en Greg’s Place",
    subtitleDe: "Lebt bei Greg’s Place",
    subtitleFr: "Vit à Greg’s Place",
    imagePosition: 'object-greg-left',
  },
  {
    id: 'rusty-margined-flycatcher',
    slideIndex: 14,
    src: '/pictures/rustyyyyy.jpg',
    nameEn: 'Rusty-margined Flycatcher',
    nameEs: 'Mosquero Pechiamarillo',
    nameDe: 'Rostflügel-Tyrann (Rusty-margined Flycatcher)',
    nameFr: 'Tyran à ailes rousses',
    speciesEn: 'Myiozetetes cayanensis',
    speciesEs: 'Myiozetetes cayanensis',
    tagEn: 'Garden Perches',
    tagEs: 'Posaderos del Jardín',
    descEn: 'Inquisitive flycatchers perching on sunlit branches, sallying out for insects and calling across the property.',
    descEs: 'Aves curiosas e inquietas que se posan en las ramas soleadas y cazan insectos al vuelo en el jardín.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-flycatcher-pos',
  },
  {
    id: 'crimson-backed-tanager',
    slideIndex: 15,
    src: '/pictures/redbird.jpeg',
    nameEn: 'Crimson-backed Tanager',
    nameEs: 'Crimson-backed Tanager',
    nameDe: 'Scharlachbürzeltangare (Crimson-backed Tanager)',
    nameFr: 'Tangara à dos pourpre',
    speciesEn: 'Ramphocelus dimidiatus',
    speciesEs: 'Ramphocelus dimidiatus',
    tagEn: 'Garden Birds',
    tagEs: 'Aves del Jardín',
    descEn: 'Striking crimson-velvet tanagers that illuminate the tropical foliage and visit the garden foliage every day.',
    descEs: 'Llamativas tangaras carmesí que iluminan la vegetación tropical y visitan el jardín todos los días.',
    subtitleEn: "Visit Greg’s Place every day",
    subtitleEs: "Visitan Greg’s Place todos los días",
    subtitleDe: "Besuchen Greg’s Place jeden Tag",
    subtitleFr: "Visitent Greg’s Place tous les jours",
    imagePosition: 'object-crimson-tanager-pos',
  },
];

// Infinite slide track: prepend clone of last slide (Slide 15), append clone of first slide (Slide 1) (length = 17)
const TRACK_SLIDES = [
  WILDLIFE_SLIDES[WILDLIFE_SLIDES.length - 1],
  ...WILDLIFE_SLIDES,
  WILDLIFE_SLIDES[0],
];

const SLIDE_DURATION = 4000; // exactly 4 seconds per slide
const TRANSITION_DURATION = 1400; // 1.4 seconds smooth glide

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  onExplore,
}) => {
  const t = content[lang].hero;

  const getSlideName = useCallback(
    (slide: WildlifeSlide) => {
      if (lang === 'fr') return slide.nameFr || slide.nameEn;
      if (lang === 'de') return slide.nameDe || slide.nameEn;
      if (lang === 'es') return slide.nameEs;
      return slide.nameEn;
    },
    [lang]
  );

  const getSlideSubtitle = useCallback(
    (slide: WildlifeSlide) => {
      if (lang === 'fr') return slide.subtitleFr || slide.subtitleEn;
      if (lang === 'de') return slide.subtitleDe || slide.subtitleEn;
      if (lang === 'es') return slide.subtitleEs;
      return slide.subtitleEn;
    },
    [lang]
  );

  // Track position in the 17-item track (index 1 is Slide 1 / Toucan)
  const [trackIndex, setTrackIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  // Mobile touch gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Derived real slide index
  const totalSlides = WILDLIFE_SLIDES.length;
  const realIndex =
    trackIndex === totalSlides + 1
      ? 0
      : trackIndex === 0
      ? totalSlides - 1
      : trackIndex - 1;

  // Advance to next slide
  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setTrackIndex((prev) => prev + 1);
  }, []);

  // Move to previous slide
  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setTrackIndex((prev) => prev - 1);
  }, []);

  // Start / restart the automatic slide timer
  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);
  }, [handleNext, isPaused]);

  // Initial timer mount / pause state changes
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      restartTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, restartTimer]);

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Handle transition end for seamless infinite loop reset
  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;
    if (trackIndex === totalSlides + 1) {
      // Reached clone of Slide 1 -> snap immediately to real Slide 1 (index 1)
      setWithTransition(false);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      // Reached clone of last slide -> snap immediately to real last slide (index totalSlides)
      setWithTransition(false);
      setTrackIndex(totalSlides);
    }
  };

  // Re-enable transition after zero-delay snap
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // Manual button / pagination actions (resets 4s timer)
  const handleManualNext = () => {
    handleNext();
    restartTimer();
  };

  const handleManualPrev = () => {
    handlePrev();
    restartTimer();
  };

  const handleGoToSlide = (targetRealIndex: number) => {
    if (isAnimatingRef.current || targetRealIndex === realIndex) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setTrackIndex(targetRealIndex + 1);
    restartTimer();
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (deltaX > minSwipeDistance) {
      handleManualNext();
    } else if (deltaX < -minSwipeDistance) {
      handleManualPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Horizontal Image & Content Slider Track */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex h-full"
          style={{
            width: `${TRACK_SLIDES.length * 100}%`,
            transform: `translateX(-${trackIndex * (100 / TRACK_SLIDES.length)}%)`,
            transition: withTransition
              ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)`
              : 'none',
            willChange: 'transform',
          }}
        >
          {TRACK_SLIDES.map((slide, idx) => {
            const isSlideActive = realIndex === slide.slideIndex;
            const isBookingSlide = slide.slideIndex === 0;

            return (
              <div
                key={`${slide.id}-${idx}`}
                className="h-full shrink-0 relative overflow-hidden flex flex-col justify-center items-center"
                style={{ width: `${100 / TRACK_SLIDES.length}%` }}
              >
                {/* Full-screen Background Photograph */}
                <img
                  src={slide.src}
                  alt={getSlideName(slide)}
                  loading={idx === 1 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    slide.imagePosition || 'object-center'
                  } transform transition-transform ease-out will-change-transform ${
                    isSlideActive
                      ? 'scale-[1.035] duration-[6000ms]'
                      : 'scale-100 duration-1000'
                  }`}
                />

                {isBookingSlide ? (
                  /* SLIDE 1: DEFAULT OPENING / BOOKING SLIDE */
                  <>
                    {/* Subtle localized gradient on top and bottom for text legibility without obscuring toucan */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none z-10" />

                    {/* Slide 1 Conversion Content: Explicit upper / lower layout leaving a wide unobstructed middle view for toucan.jpg */}
                    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20">
                      {/* UPPER SECTION (approx upper 25–35%): Headline & supporting text */}
                      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center pointer-events-auto">
                        {/* Editorial Sub-badge */}
                        <div className="flex items-center gap-3 mb-2 sm:mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                          <div className="h-[1px] w-8 sm:w-14 bg-[#C5A059]" />
                          <span className="text-[#C5A059] uppercase tracking-[0.35em] text-[10px] sm:text-[11px] font-bold">
                            {t.tag}
                          </span>
                          <div className="h-[1px] w-8 sm:w-14 bg-[#C5A059]" />
                        </div>

                        {/* Main Title & Headline */}
                        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                          {t.headline}
                        </h1>
                      </div>

                      {/* MIDDLE SECTION: Substantial open visual expanse across the center showing toucan.jpg */}

                      {/* LOWER SECTION: Keel-billed Toucan title & subtitle directly underneath the toucan photo, and BOOK NOW CTA Button */}
                      <div className="w-full max-w-2xl mx-auto flex flex-col items-center pointer-events-auto pb-4 sm:pb-6 text-center">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mb-1">
                          {getSlideName(slide)}
                        </h2>
                        <p className="text-[15px] sm:text-[22px] md:text-3xl text-[#B7D98B] font-cormorant italic font-bold tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] mb-3 sm:mb-4">
                          <strong className="font-bold">{getSlideSubtitle(slide)}</strong>
                        </p>
                        <button
                          onClick={onOpenBooking}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-[#C5A059] hover:bg-[#A68648] text-white font-bold text-[10px] sm:text-[11px] tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl"
                        >
                          <Calendar className="w-3.5 h-3.5 text-white" />
                          <span>{t.primaryCta}</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* SLIDES 2–10: CINEMATIC WILDLIFE SLIDES (ONLY TITLE, NO DESCRIPTIONS) */
                  <>
                    {/* BOTTOM: Smooth dark gradient transitioning into the lower third */}
                    <div className="absolute inset-x-0 bottom-0 h-3/5 md:h-1/2 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none z-10" />

                    {/* Bottom Information Block: Animal name and optional Book Your Stay button */}
                    <div className="absolute inset-x-0 bottom-0 z-20 px-6 sm:px-12 md:px-16 pb-16 sm:pb-20 pt-8 max-w-5xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left pointer-events-none">
                      {/* Animal Title */}
                      <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                        {getSlideName(slide)}
                      </h2>

                      {/* Animal Description (Light botanical green #B7D98B, editorial italic serif Cormorant Garamond, bold for high visibility) */}
                      {(getSlideSubtitle(slide)) && (() => {
                        const subtitleText = getSlideSubtitle(slide);
                        return (
                          <p className="mt-1 sm:mt-1.5 md:mt-2 text-[15px] sm:text-[22px] md:text-3xl text-[#B7D98B] font-cormorant italic font-bold tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)] max-w-2xl">
                            <strong className="font-bold">{subtitleText}</strong>
                          </p>
                        );
                      })()}

                      {/* Wildlife Slides (slideIndex >= 1): BOOK YOUR STAY CTA (exact same style as header button) */}
                      {slide.slideIndex >= 1 && (
                        <div
                          className="mt-4 sm:mt-5 pointer-events-auto"
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenBooking();
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-semibold uppercase tracking-widest shadow-md hover:shadow-xl transition-all"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{t.primaryCta}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stationary Manual Controls: Left & Right Arrows */}
      <button
        onClick={handleManualPrev}
        aria-label={
          lang === 'fr'
            ? 'Diapositive précédente'
            : lang === 'de'
            ? 'Vorherige Tierwelt-Folie'
            : lang === 'en'
            ? 'Previous wildlife slide'
            : 'Diapositiva anterior'
        }
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/30 hover:bg-black/70 text-white/90 hover:text-white border border-white/25 transition-all backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleManualNext}
        aria-label={
          lang === 'fr'
            ? 'Diapositive suivante'
            : lang === 'de'
            ? 'Nächste Tierwelt-Folie'
            : lang === 'en'
            ? 'Next wildlife slide'
            : 'Siguiente diapositiva'
        }
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/30 hover:bg-black/70 text-white/90 hover:text-white border border-white/25 transition-all backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Stationary 10-Slide Pagination Indicators, Pause/Play Control & Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-2.5 bg-black/40 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
          {/* Subtle Pause / Play Control (44px mobile tap target, visible icon small) */}
          <button
            type="button"
            onClick={togglePause}
            aria-label={
              isPaused
                ? lang === 'fr'
                  ? 'Lancer le diaporama'
                  : lang === 'de'
                  ? 'Diashow abspielen'
                  : lang === 'en'
                  ? 'Play slideshow'
                  : 'Reanudar presentación'
                : lang === 'fr'
                ? 'Mettre en pause le diaporama'
                : lang === 'de'
                ? 'Diashow pausieren'
                : lang === 'en'
                ? 'Pause slideshow'
                : 'Pausar presentación'
            }
            title={
              isPaused
                ? lang === 'fr'
                  ? 'Lancer le diaporama'
                  : lang === 'de'
                  ? 'Diashow abspielen'
                  : lang === 'en'
                  ? 'Play slideshow'
                  : 'Reanudar presentación'
                : lang === 'fr'
                ? 'Mettre en pause le diaporama'
                : lang === 'de'
                ? 'Diashow pausieren'
                : lang === 'en'
                ? 'Pause slideshow'
                : 'Pausar presentación'
            }
            className="group relative -my-2.5 -ml-1 flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-white/75 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 text-[10px] sm:text-[11px] font-mono leading-none transition-all select-none"
              aria-hidden="true"
            >
              {isPaused ? '▶' : 'Ⅱ'}
            </span>
          </button>

          {/* Vertical divider */}
          <span className="w-[1px] h-2.5 bg-white/20" aria-hidden="true" />

          {/* 15 Minimal Pagination Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 pr-0.5">
            {WILDLIFE_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleGoToSlide(idx)}
                aria-label={`Slide ${idx + 1}: ${getSlideName(slide)}`}
                className={`h-1.5 transition-all duration-500 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] ${
                  realIndex === idx
                    ? 'w-4 sm:w-6 bg-[#C5A059] shadow-sm'
                    : 'w-1.5 bg-white/45 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

