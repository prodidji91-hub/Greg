import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Camera, 
  Sparkles, 
  Home, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Compass,
  Bed,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Language } from '../types';
import { propertyGalleryCategories, PropertyGalleryCategory } from '../data/propertyGalleries';
import { normalizeImagePath } from '../data/roomGalleries';
import { RoomGallery } from './RoomGallery';

interface PhotoGalleryPageProps {
  lang: Language;
  initialCategoryId?: string;
  onSelectCategory?: (categoryId?: string) => void;
  onBackToHome: (sectionId?: string) => void;
  onOpenBooking: () => void;
  onSelectRoom?: (roomId: string) => void;
}

export const PhotoGalleryPage: React.FC<PhotoGalleryPageProps> = ({
  lang,
  initialCategoryId,
  onSelectCategory,
  onBackToHome,
  onOpenBooking,
  onSelectRoom,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>(initialCategoryId);

  useEffect(() => {
    setActiveCategoryId(initialCategoryId);
  }, [initialCategoryId]);

  // If activeCategoryId is provided and valid, we are in Dedicated Gallery Mode
  const isDedicatedMode = Boolean(
    activeCategoryId && propertyGalleryCategories.some((c) => c.id === activeCategoryId)
  );

  const activeCategory: PropertyGalleryCategory =
    (activeCategoryId && propertyGalleryCategories.find((c) => c.id === activeCategoryId)) ||
    propertyGalleryCategories[0];

  const isSpanish = lang === 'es';
  const isGerman = lang === 'de';
  const isFrench = lang === 'fr';

  const getCatTitle = (cat: typeof propertyGalleryCategories[0]) =>
    isFrench
      ? (cat.titleFr || cat.titleEn)
      : isGerman
      ? (cat.titleDe || cat.titleEn)
      : isSpanish
      ? cat.titleEs
      : cat.titleEn;
  const getCatBadge = (cat: typeof propertyGalleryCategories[0]) =>
    isFrench
      ? (cat.badgeFr || cat.badgeEn)
      : isGerman
      ? (cat.badgeDe || cat.badgeEn)
      : isSpanish
      ? cat.badgeEs
      : cat.badgeEn;
  const getCatSubtitle = (cat: typeof propertyGalleryCategories[0]) =>
    isFrench
      ? (cat.subtitleFr || cat.subtitleEn)
      : isGerman
      ? (cat.subtitleDe || cat.subtitleEn)
      : isSpanish
      ? cat.subtitleEs
      : cat.subtitleEn;
  const getCatDescription = (cat: typeof propertyGalleryCategories[0]) =>
    isFrench
      ? (cat.descriptionFr || cat.descriptionEn)
      : isGerman
      ? (cat.descriptionDe || cat.descriptionEn)
      : isSpanish
      ? cat.descriptionEs
      : cat.descriptionEn;
  const getCatFeatures = (cat: typeof propertyGalleryCategories[0]) =>
    isFrench
      ? (cat.featuresFr || cat.featuresEn)
      : isGerman
      ? (cat.featuresDe || cat.featuresEn)
      : isSpanish
      ? cat.featuresEs
      : cat.featuresEn;

  const handleOpenCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const el = document.getElementById('photo-gallery');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleBackToGalleryHub = () => {
    setActiveCategoryId(undefined);
    if (onSelectCategory) {
      onSelectCategory(undefined);
    }
    const el = document.getElementById('photo-gallery');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="photo-gallery" className="py-24 bg-[#FAF8F5] text-[#1B3022] border-b border-[#1B3022]/10 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* DEDICATED GALLERY MODE: /gallery/[category-id]                             */}
        {/* ========================================================================= */}
        {isDedicatedMode ? (
          <div>
            {/* Top Navigation & Breadcrumbs Bar */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#1B3022]/10 pb-4 sm:pb-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBackToGalleryHub}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 min-h-[44px] bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 active:scale-[0.98]"
                  id="btn-back-to-gallery-hub"
                >
                  <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform shrink-0" />
                  <span>{isFrench ? 'Retour à la Galerie Photos' : isGerman ? 'Zurück zur Fotogalerie' : isSpanish ? 'Volver a la Galería de Fotos' : 'Back to Photo Gallery'}</span>
                </button>
              </div>

              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] sm:text-xs text-[#1B3022]/60 font-medium pl-1 sm:pl-0">
                <button
                  type="button"
                  onClick={() => onBackToHome()}
                  className="hover:text-[#1B3022] hover:underline transition-colors focus:outline-none"
                >
                  {isFrench ? 'Accueil' : isGerman ? 'Startseite' : isSpanish ? 'Inicio' : 'Home'}
                </button>
                <span className="text-[#1B3022]/30">/</span>
                <button
                  type="button"
                  onClick={handleBackToGalleryHub}
                  className="hover:text-[#1B3022] hover:underline transition-colors focus:outline-none"
                >
                  {isFrench ? 'Galerie Photos' : isGerman ? 'Fotogalerie' : isSpanish ? 'Galería de Fotos' : 'Photo Gallery'}
                </button>
                <span className="text-[#1B3022]/30">/</span>
                <span className="text-[#1B3022] font-semibold truncate max-w-[200px] sm:max-w-none">
                  {getCatTitle(activeCategory)}
                </span>
              </nav>
            </div>

            {/* Dedicated Gallery Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#FAF8F5] border border-[#C5A059]/40 px-3 py-1">
                    {getCatBadge(activeCategory)}
                  </span>

                  {activeCategory.id === 'upstairs-guest-bathroom' && (
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white bg-[#8C583E] px-3 py-1 shadow-xs flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 shrink-0" />
                      <span>{isFrench ? 'Spécifique aux chambres Coati & Owl' : isGerman ? 'Speziell für Coati & Owl Rooms' : isSpanish ? 'Específico para Coati y Owl Rooms' : 'Specifically for Coati and Owl Rooms'}</span>
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight">
                  {getCatTitle(activeCategory)}
                </h1>
                
                <p className="text-sm sm:text-base text-[#C5A059] font-serif italic mt-1.5">
                  {getCatSubtitle(activeCategory)}
                </p>
              </div>

              {/* Photo Counter Pill */}
              <div className="self-start md:self-auto shrink-0">
                <span className="text-xs font-mono font-medium px-3.5 py-1.5 bg-white border border-[#1B3022]/15 text-[#1B3022]/80 flex items-center gap-2 shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>
                    {activeCategory.images.length}{' '}
                    {isFrench ? 'Photos' : isGerman ? 'Fotos' : isSpanish ? 'Fotografías' : 'Photographs'}
                  </span>
                </span>
              </div>
            </div>

            {/* Special Callout specifically for the Upstairs Guest Bathroom */}
            {activeCategory.id === 'upstairs-guest-bathroom' && (
              <div className="mb-8 p-5 sm:p-6 bg-white border-l-4 border-[#8C583E] border-y border-r border-[#1B3022]/10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#8C583E]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Bed className="w-5 h-5 text-[#8C583E]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#1B3022] uppercase tracking-wider">
                      {isFrench ? 'Configuration Exclusive de la Salle de Bain à l\'Étage' : isGerman ? 'Exklusive Badezimmerkonfiguration im Obergeschoss' : isSpanish ? 'Configuración Exclusiva del Baño en Planta Alta' : 'Dedicated Upstairs Bathroom Configuration'}
                    </p>
                    <p className="text-xs sm:text-sm text-[#1B3022]/80 mt-1 leading-relaxed max-w-2xl">
                      {isFrench
                        ? 'Cette salle de bain est réservée exclusivement aux hôtes des chambres Coati et Owl. La Master Bedroom et la chambre Cayuca disposent chacune de leur propre salle de bain privée attenante.'
                        : isGerman
                        ? 'Dieses Gästebad steht ausschließlich den Gästen der Zimmer Coati und Owl zur Verfügung. Das Master Bedroom und das Cayuca Room verfügen jeweils über ein eigenes privates En-Suite-Badezimmer.'
                        : isSpanish
                        ? 'Este baño para huéspedes está dedicado exclusivamente a las personas alojadas en las habitaciones Coati Room y Owl Room. La Master Bedroom y la Cayuca Room cuentan con sus propios baños privados en suite.'
                        : 'This guest bathroom is dedicated exclusively for visitors staying in the Coati Room and Owl Room. The Master Bedroom and Cayuca Room each feature their own independent private en-suite bathrooms.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectRoom ? onSelectRoom('coati-room') : onBackToHome('rooms')}
                    className="px-3.5 py-2 bg-[#FAF8F5] hover:bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[11px] font-bold uppercase tracking-wider text-[#1B3022] transition-all shadow-2xs"
                  >
                    {isFrench ? 'Voir Coati Room' : isGerman ? 'Coati Room ansehen' : isSpanish ? 'Ver Coati Room' : 'View Coati Room'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectRoom ? onSelectRoom('owl-room') : onBackToHome('rooms')}
                    className="px-3.5 py-2 bg-[#FAF8F5] hover:bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[11px] font-bold uppercase tracking-wider text-[#1B3022] transition-all shadow-2xs"
                  >
                    {isFrench ? 'Voir Owl Room' : isGerman ? 'Owl Room ansehen' : isSpanish ? 'Ver Owl Room' : 'View Owl Room'}
                  </button>
                </div>
              </div>
            )}

            {/* SECTION A: Large Photo Gallery (Centerpiece) */}
            <div className="mb-10">
              <RoomGallery
                images={activeCategory.images}
                title={getCatTitle(activeCategory)}
                subtitle={getCatSubtitle(activeCategory)}
                emptyTitle={getCatTitle(activeCategory)}
                emptySubtitle={
                  isFrench
                    ? 'Les photographies locales de cet espace apparaîtront ici.'
                    : isGerman
                    ? 'Lokale Fotos dieses Raumes werden hier angezeigt.'
                    : isSpanish
                    ? 'Las fotografías locales de este espacio se mostrarán aquí una vez colocadas en su carpeta.'
                    : 'Local photographs for this space will appear here once placed into their folder.'
                }
                lang={lang}
                galleryId={`dedicated-gallery-${activeCategory.id}`}
              />
            </div>

            {/* SECTION B: Architectural Details & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
              
              {/* Left 2 Cols: Description & Historic Heritage */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 sm:p-8 border border-solid border-[#1B3022]/10 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-3 text-[#C5A059]">
                    <Building className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-widest font-bold">
                      {isFrench ? 'À propos de cet espace' : isGerman ? 'Über diesen Bereich' : isSpanish ? 'Sobre este Espacio' : 'About This Space'}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-[#1B3022] mb-3">
                    {getCatTitle(activeCategory)}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed">
                    {getCatDescription(activeCategory)}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#1B3022]/10 flex items-center gap-2.5 text-xs text-[#1B3022]/70">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>
                      {isFrench
                        ? 'Fait partie des logements historiques d\'officiers de la Zone du Canal (plus de 80 ans) à Greg\'s Place à Albrook.'
                        : isGerman
                        ? 'Teil der historischen Offiziersunterkünfte der Kanalzone (über 80 Jahre alt) bei Greg\'s Place in Albrook.'
                        : isSpanish
                        ? 'Parte de las históricas viviendas de oficiales de la Zona del Canal (más de 80 años de antigüedad) en Albrook.'
                        : "Part of the historic Canal Zone Officers Quarters (built over 80 years ago) at Greg's Place in Albrook."}
                    </span>
                  </div>
                </div>

                {/* Features & Amenities */}
                {activeCategory.featuresEn && activeCategory.featuresEn.length > 0 && (
                  <div className="bg-white p-6 sm:p-8 border border-solid border-[#1B3022]/10 shadow-xs">
                    <h4 className="font-serif text-xl font-light text-[#1B3022] mb-4">
                      {isFrench ? 'Équipements & Caractéristiques' : isGerman ? 'Ausstattung & Besonderheiten' : isSpanish ? 'Características y Comodidades' : 'Features & Amenities'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {getCatFeatures(activeCategory)?.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1B3022]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="whitespace-pre-line">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Col: Quick Category Switcher & Reservation */}
              <div className="space-y-6">
                
                {/* Switch to other Photo Gallery categories */}
                <div className="bg-white p-6 border border-solid border-[#1B3022]/10 shadow-xs">
                  <h4 className="font-serif text-lg font-medium text-[#1B3022] mb-1">
                    {isFrench ? 'Autres Espaces du Domaine' : isGerman ? 'Weitere Bereiche des Anwesens' : isSpanish ? 'Otras Áreas de la Propiedad' : 'Other Property Areas'}
                  </h4>
                  <p className="text-xs text-[#1B3022]/60 mb-4">
                    {isFrench ? 'Découvrez les autres galeries photos' : isGerman ? 'Erkunden Sie die weiteren Fotogalerien' : isSpanish ? 'Explore las demás galerías' : 'Explore the other photo galleries'}
                  </p>

                  <div className="space-y-2">
                    {propertyGalleryCategories.map((cat) => {
                      const isCurrent = cat.id === activeCategory.id;
                      const title = getCatTitle(cat);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleOpenCategory(cat.id)}
                          className={`w-full text-left p-2.5 transition-all flex items-center justify-between border ${
                            isCurrent
                              ? 'bg-[#1B3022] text-[#C5A059] border-[#C5A059] shadow-xs'
                              : 'bg-[#FAF8F5] text-[#1B3022] border-[#1B3022]/10 hover:border-[#C5A059] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Camera className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-[#C5A059]' : 'text-[#1B3022]/50'}`} />
                            <span className="text-xs font-medium truncate">{title}</span>
                          </div>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 ${
                            isCurrent ? 'text-[#C5A059]' : 'text-[#1B3022]/60'
                          }`}>
                            {cat.images.length}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleBackToGalleryHub}
                    className="mt-4 w-full py-2 bg-transparent hover:bg-[#FAF8F5] border border-solid border-[#1B3022]/20 text-[11px] uppercase tracking-wider font-semibold text-[#1B3022]/80 text-center transition-colors block"
                  >
                    {isFrench ? 'Voir les 5 catégories' : isGerman ? 'Alle 5 Kategorien ansehen' : isSpanish ? 'Ver Todas las 5 Categorías' : 'View All 5 Categories'}
                  </button>
                </div>

                {/* Stay at Greg's Place Box */}
                <div className="bg-[#1B3022] p-6 text-white border border-[#C5A059]/40 shadow-md text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                    {isFrench ? 'Réserver Votre Séjour' : isGerman ? 'Aufenthalt Buchen' : isSpanish ? 'Reserva de Estadía' : 'Reserve Your Stay'}
                  </span>
                  <h4 className="font-serif text-xl font-light mb-2">
                    {isFrench ? "Vivez l'expérience Greg's Place" : isGerman ? "Erleben Sie Greg's Place" : isSpanish ? "Viva la Experiencia en Greg's Place" : "Experience Greg's Place"}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed mb-4 font-light">
                    {isFrench
                      ? 'Profitez de tous ces espaces partagés lors de votre séjour chez nous à Albrook.'
                      : isGerman
                      ? 'Genießen Sie alle diese Gemeinschaftsbereiche während Ihres Aufenthalts bei uns in Albrook.'
                      : isSpanish
                      ? 'Disfrute de estas áreas comunes durante su estancia con nosotros en Albrook.'
                      : 'Enjoy all of these shared spaces during your personal stay with us in Albrook.'}
                  </p>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-3 bg-[#C5A059] hover:bg-[#A68648] text-white font-bold text-xs uppercase tracking-widest transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isFrench ? 'Vérifier la Disponibilité' : isGerman ? 'Verfügbarkeit Prüfen' : isSpanish ? 'Ver Disponibilidad' : 'Check Availability'}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Navigation: Back to Photo Gallery Button */}
            <div className="pt-8 border-t border-[#1B3022]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBackToGalleryHub}
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 min-h-[44px] bg-white border border-[#1B3022]/20 hover:border-[#C5A059] text-[#1B3022] hover:text-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 active:scale-[0.98]"
                id="btn-back-to-gallery-hub-bottom"
              >
                <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform shrink-0" />
                <span>{isFrench ? 'Retour à la Galerie Photos' : isGerman ? 'Zurück zur Fotogalerie' : isSpanish ? 'Volver a la Galería de Fotos' : 'Back to Photo Gallery'}</span>
              </button>

              <button
                type="button"
                onClick={handleBackToGalleryHub}
                className="text-xs text-[#1B3022]/60 hover:text-[#C5A059] font-medium transition-colors hidden sm:block"
              >
                ↑ {isFrench ? 'Retour en haut de la galerie' : isGerman ? 'Zurück zur Galerieübersicht' : isSpanish ? 'Volver al inicio de la galería' : 'Back to main gallery overview'}
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MAIN PHOTO GALLERY HUB: Homepage Section View                              */
          /* ========================================================================= */
          <div>

            {/* Header Section */}
            <div className="mb-10 text-left max-w-4xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-[#C5A059]" />
                <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] sm:text-[11px] font-bold">
                  {isFrench
                    ? 'Visite Visuelle du Domaine & des Espaces Communs'
                    : isGerman
                    ? 'Visuelle Tour durch das Haus & Gemeinschaftsbereiche'
                    : isSpanish
                    ? 'Recorrido Visual de la Propiedad'
                    : 'Property & Shared Spaces Visual Tour'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
                {isFrench ? 'Galerie Photos' : isGerman ? 'Fotogalerie' : isSpanish ? 'Galería de Fotos' : 'Photo Gallery'}
              </h1>

              <p className="text-[#C5A059] text-base sm:text-lg font-serif italic mb-4">
                {isFrench
                  ? 'Espaces communs, architecture historique de la Zone du Canal et nature tropicale luxuriante à Albrook'
                  : isGerman
                  ? 'Gemeinschaftsbereiche, historische Architektur der Kanalzone und üppige Tropennatur in Albrook'
                  : isSpanish
                  ? 'Espacios compartidos, arquitectura histórica de la Zona del Canal y exuberante naturaleza en Albrook'
                  : 'Shared spaces, Canal Zone historic architecture, and lush tropical nature in Albrook'}
              </p>

              <p className="text-sm sm:text-base text-[#1B3022]/80 leading-relaxed max-w-3xl">
                {isFrench
                  ? 'Cliquez sur l\'une des cinq catégories ci-dessous pour ouvrir sa galerie dédiée avec visionneuse haute résolution, miniatures et mode plein écran.'
                  : isGerman
                  ? 'Klicken Sie auf eine der fünf Kategorien, um die Fotogalerie mit hochauflösendem Bildbetrachter, Vorschaubildern und Vollbildansicht zu öffnen.'
                  : isSpanish
                  ? 'Haga clic en cualquiera de las 5 categorías a continuación para abrir su galería individual dedicada con visor de fotos, miniaturas y vista ampliada a pantalla completa.'
                  : 'Click on any of the five categories below to open its dedicated individual gallery page with high-resolution photo viewer, thumbnails, and full-screen lightbox.'}
              </p>
            </div>

            {/* Quick Category Tab Navigation */}
            <div className="mb-10 overflow-x-auto pb-2 scrollbar-thin no-scrollbar" role="tablist">
              <div className="flex items-center gap-2 sm:gap-3 min-w-max">
                {propertyGalleryCategories.map((cat) => {
                  const title = getCatTitle(cat);
                  const isUpstairsBathroom = cat.id === 'upstairs-guest-bathroom';

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleOpenCategory(cat.id)}
                      className="group relative flex items-center gap-2 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide bg-white hover:bg-[#1B3022] text-[#1B3022] hover:text-[#C5A059] border border-[#1B3022]/15 hover:border-[#C5A059] shadow-xs transition-all"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{title}</span>
                      {isUpstairsBathroom && (
                        <span className="text-[9px] px-1.5 py-0.5 uppercase tracking-wider font-bold bg-[#8C583E] text-white">
                          {isGerman ? 'Coati & Owl' : isSpanish ? 'Coati y Owl' : 'Coati & Owl'}
                        </span>
                      )}
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full font-mono bg-[#FAF8F5] text-[#1B3022]/70 group-hover:bg-[#C5A059]/20 group-hover:text-[#C5A059]">
                        {cat.images.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5 Categories Grid */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {propertyGalleryCategories.map((cat) => {
                  const title = getCatTitle(cat);
                  const subtitle = getCatSubtitle(cat);
                  const isUpstairsBathroom = cat.id === 'upstairs-guest-bathroom';
                  const photoCount = cat.images.length;
                  const coverSrc = normalizeImagePath(cat.coverImage);

                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleOpenCategory(cat.id)}
                      className="bg-white border border-[#1B3022]/10 hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1"
                    >
                      <div>
                        {/* Cover Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#14231B]">
                          <img
                            src={coverSrc}
                            alt={title}
                            className={`w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-300 ${
                              isUpstairsBathroom || coverSrc.includes('bano1')
                                ? 'object-[center_12%]'
                                : 'object-center'
                            }`}
                            loading="lazy"
                            onError={(e) => {
                              // Hide broken image and let parent background with icon show
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />

                          {/* Fallback under image */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#14231B] -z-1 pointer-events-none">
                            <Camera className="w-8 h-8 text-[#C5A059] mb-2 opacity-80" />
                            <span className="text-xs text-[#FAF8F5]/80 font-serif">
                              {title}
                            </span>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none z-10">
                            <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-wider font-semibold">
                              {getCatBadge(cat)}
                            </span>

                            <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono">
                              {photoCount} {isFrench ? 'Photos' : isGerman ? 'Fotos' : isSpanish ? 'Fotos' : 'Photos'}
                            </span>
                          </div>

                          {/* Upstairs bathroom notification */}
                          {isUpstairsBathroom && (
                            <div className="absolute bottom-3 left-3 right-3 z-10">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8C583E]/95 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold border border-white/20 shadow">
                                <Info className="w-3 h-3 text-[#C5A059]" />
                                <span>{isFrench ? 'Pour Chambres Coati & Owl' : isGerman ? 'Für Coati & Owl Rooms' : isSpanish ? 'Para Coati y Owl Rooms' : 'For Coati & Owl Rooms'}</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1B3022] group-hover:text-[#C5A059] transition-colors mb-2">
                            {title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#1B3022]/75 leading-relaxed">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom CTA */}
                      <div className="px-6 pb-6 pt-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenCategory(cat.id);
                          }}
                          className="w-full py-3 px-4 text-xs font-bold uppercase tracking-widest bg-[#FAF8F5] text-[#1B3022] border border-[#1B3022]/15 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all flex items-center justify-center gap-2 shadow-2xs"
                        >
                          <span>{isFrench ? 'Voir la Galerie Dédiée' : isGerman ? 'Galerie Öffnen' : isSpanish ? 'Abrir Galería Dedicada' : 'View Dedicated Gallery'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Accommodations & Booking Editorial Card */}
        <div className="bg-[#1B3022] p-8 sm:p-12 text-white border border-[#C5A059]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-1 font-bold">
              {isFrench ? 'Séjour à Albrook, Panama City' : isGerman ? 'Aufenthalt in Albrook, Panama-Stadt' : isSpanish ? 'Estadía en Albrook, Ciudad de Panamá' : 'Stay in Albrook, Panama City'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light">
              {isFrench
                ? 'Découvrez le rythme paisible d\'une demeure historique de plus de 80 ans.'
                : isGerman
                ? 'Entdecken Sie die Ruhe eines Hauses mit über 80 Jahren Geschichte.'
                : isSpanish
                ? 'Descubra la tranquilidad de una casa con 80 años de historia.'
                : 'Experience the peaceful rhythm of an 80-year-old historic home.'}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-2.5 font-light leading-relaxed">
              {isFrench
                ? 'Seulement 4 chambres d\'hôtes pour garantir un séjour intime, spacieux et préservé de la foule. Éveillez-vous au cœur d\'une nature tropicale protégée à quelques minutes du centre-ville.'
                : isGerman
                ? 'Nur 4 Gästezimmer werden vermietet, um einen entspannten, geräumigen und intimen Aufenthalt zu garantieren. Eingebettet in geschützte Tropennatur, nur wenige Minuten vom Stadtzentrum entfernt.'
                : isSpanish
                ? 'Solo 4 habitaciones para huéspedes disponibles para garantizar un ambiente relajado, espacioso y sin aglomeraciones. Conecte con la naturaleza en Albrook.'
                : 'Only 4 guest rooms offered to ensure an uncrowded, serene, and intimate stay. Step into protected tropical greenery just minutes from the city center.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onBackToHome('rooms')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-[#C5A059] text-white font-bold text-[11px] tracking-widest uppercase transition-all flex items-center justify-center gap-2"
            >
              <Bed className="w-4 h-4 text-[#C5A059]" />
              <span>{isFrench ? 'Voir les Chambres' : isGerman ? 'Zimmer Ansehen' : isSpanish ? 'Ver Habitaciones' : 'View Guest Rooms'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-white font-bold text-[11px] tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{isFrench ? 'Réserver Votre Séjour' : isGerman ? 'Aufenthalt Buchen' : isSpanish ? 'Ver Disponibilidad' : 'Book Your Stay'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
