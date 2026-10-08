import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyStory } from './components/PropertyStory';
import { WhyAlbrook } from './components/WhyAlbrook';
import { AboutGreg } from './components/AboutGreg';
import { Rooms } from './components/Rooms';
import { RoomDetail } from './components/RoomDetail';
import { BirdingBreakfast } from './components/BirdingBreakfast';
import { Wildlife } from './components/Wildlife';
import { WhatsNearby } from './components/WhatsNearby';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { IntroAnimation } from './components/IntroAnimation';
import { PhotoGalleryPage } from './components/PhotoGalleryPage';

const VALID_ROOM_IDS = ['master-bedroom', 'cayuca-room', 'coati-room', 'owl-room'] as const;

function parseRoomFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/rooms\/([a-z0-9-]+)/i);
  if (match) {
    const id = match[1].toLowerCase();
    if ((VALID_ROOM_IDS as readonly string[]).includes(id)) {
      return id;
    }
  }
  return null;
}

const VALID_GALLERY_CATEGORY_IDS = [
  'shared-living-spaces',
  'shared-kitchen-laundry',
  'upstairs-guest-bathroom',
  'screen-room-bbq',
  'exterior-premises',
] as const;

function parseGalleryFromPath(pathname: string): { isGallery: boolean; categoryId?: string } {
  if (pathname === '/gallery' || pathname === '/gallery/' || pathname === '/photo-gallery' || pathname === '/photo-gallery/') {
    return { isGallery: true };
  }
  const match = pathname.match(/^\/(?:gallery|photo-gallery)\/([a-z0-9-]+)/i);
  if (match) {
    let id = match[1].toLowerCase();
    if (id === 'shared-living') {
      id = 'shared-living-spaces';
    }
    if ((VALID_GALLERY_CATEGORY_IDS as readonly string[]).includes(id)) {
      return { isGallery: true, categoryId: id };
    }
    return { isGallery: true };
  }
  return { isGallery: false };
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [bookingTab, setBookingTab] = useState<'lodgify' | 'birding'>('lodgify');
  const [birdingOffer, setBirdingOffer] = useState<'visitor' | 'guest'>('visitor');
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return parseRoomFromPath(window.location.pathname);
    }
    return null;
  });
  const [galleryCategoryId, setGalleryCategoryId] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      return parseGalleryFromPath(window.location.pathname).categoryId;
    }
    return undefined;
  });

  // Listen for browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const room = parseRoomFromPath(window.location.pathname);
      const galleryInfo = parseGalleryFromPath(window.location.pathname);
      setCurrentRoomId(room);
      setGalleryCategoryId(galleryInfo.categoryId);
      if (galleryInfo.isGallery) {
        setTimeout(() => {
          scrollToSectionById('photo-gallery');
        }, 60);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle direct links to /gallery or /photo-gallery by scrolling down to the Photo Gallery section
  useEffect(() => {
    const galleryInfo = parseGalleryFromPath(window.location.pathname);
    if (galleryInfo.isGallery) {
      setTimeout(() => {
        scrollToSectionById('photo-gallery');
      }, 150);
    }
  }, []);

  // Dynamic SEO Page Titles and Meta Descriptions (English only, per step instructions)
  useEffect(() => {
    const path = window.location.pathname;
    const isGallery = parseGalleryFromPath(path).isGallery;

    let title = "Greg's Place in Albrook | Bed & Breakfast in Panama City";
    let metaDescription = "Stay at Greg's Place in Albrook, a peaceful historic bed and breakfast in Panama City surrounded by tropical nature, wildlife, and Canal Zone history.";

    if (currentRoomId === 'master-bedroom') {
      title = "Master Bedroom | Greg's Place in Albrook, Panama City";
      metaDescription = "Discover the spacious Master Bedroom at Greg's Place in Albrook, featuring a California king-size bed in a peaceful historic home in Panama City.";
    } else if (currentRoomId === 'cayuca-room') {
      title = "Cayuca Room | Greg's Place in Albrook, Panama City";
      metaDescription = "Explore the Cayuca Room at Greg's Place in Albrook, a comfortable queen-size guest room located downstairs in a quiet Panama City setting.";
    } else if (currentRoomId === 'coati-room') {
      title = "Coati Room | Greg's Place in Albrook, Panama City";
      metaDescription = "View the Coati Room at Greg's Place in Albrook, a queen-size room located upstairs in a historic tropical home in Panama City.";
    } else if (currentRoomId === 'owl-room') {
      title = "Owl Room | Greg's Place in Albrook, Panama City";
      metaDescription = "Discover the Owl Room at Greg's Place in Albrook, a peaceful upstairs queen-size guest room surrounded by tropical nature in Panama City.";
    } else if (isGallery) {
      title = "Photo Gallery | Greg's Place in Albrook";
      metaDescription = "Explore the rooms, shared spaces, tropical veranda, historic architecture, gardens, and natural surroundings of Greg's Place in Albrook.";
    }

    document.title = title;
    
    // Safely update or create meta tags to prevent duplicate instances
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      } else {
        el = document.createElement('meta');
        if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute('property', prop);
        } else if (selector.startsWith('meta[name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        }
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
    };

    setMetaTag('meta[name="description"]', 'content', metaDescription);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', metaDescription);
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', metaDescription);
  }, [currentRoomId, galleryCategoryId]);

  const handleSelectRoom = (roomId: string) => {
    const targetPath = `/rooms/${roomId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentRoomId(roomId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPhotoGallery = (categoryId?: string) => {
    if (currentRoomId) {
      setCurrentRoomId(null);
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    }
    setGalleryCategoryId(categoryId);
    setTimeout(() => {
      scrollToSectionById('photo-gallery');
    }, 60);
  };

  const handleBackToRooms = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    setCurrentRoomId(null);
    setTimeout(() => {
      scrollToSectionById('rooms');
    }, 60);
  };

  const handleBackToHome = (sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    setCurrentRoomId(null);
    if (sectionId) {
      setTimeout(() => {
        scrollToSectionById(sectionId);
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavbarNavigateHome = (sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    setCurrentRoomId(null);
    if (sectionId) {
      setTimeout(() => {
        scrollToSectionById(sectionId);
      }, 60);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingTab('lodgify');
    setIsBookingOpen(true);
  };

  const handleReserveBirding = (offerId?: 'visitor' | 'guest') => {
    setBookingTab('birding');
    if (offerId) setBirdingOffer(offerId);
    setIsBookingOpen(true);
  };

  const scrollToSectionById = (id: string) => {
    let el = document.getElementById(id);
    if (!el && (id === '51-fun-things' || id === '51-things')) {
      el = document.getElementById('whats-nearby');
    }
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1B3022] font-sans antialiased">
      {/* Short cinematic intro on initial page load / reload */}
      <IntroAnimation />

      {/* Sticky Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateHome={currentRoomId ? handleNavbarNavigateHome : undefined}
        onOpenPhotoGallery={handleOpenPhotoGallery}
        solidBackground={!!currentRoomId}
      />

      {/* Main Content: Dedicated Room Detail Page OR Main Homepage */}
      <main className="flex-grow">
        {currentRoomId ? (
          <RoomDetail
            roomId={currentRoomId}
            lang={lang}
            onBackToRooms={handleBackToRooms}
            onBookRoom={(roomId) => handleOpenBooking(roomId)}
            onOpenPhotoGallery={handleOpenPhotoGallery}
          />
        ) : (
          <>
            {/* 1. Header / Hero */}
            <Hero
              lang={lang}
              onOpenBooking={() => handleOpenBooking()}
              onExplore={() => scrollToSectionById('why-albrook')}
            />

            {/* 2. Why Albrook: Discover the Side of Panama City Most Visitors Never See */}
            <WhyAlbrook
              lang={lang}
              onExploreExperience={() => scrollToSectionById('birding-breakfast')}
            />

            {/* 3. Rooms: Guest rooms & bathrooms offered for rental */}
            <Rooms
              lang={lang}
              onBookRoom={(roomId) => handleOpenBooking(roomId)}
              onSelectRoom={(roomId) => handleSelectRoom(roomId)}
              onOpenPhotoGallery={(catId) => handleOpenPhotoGallery(catId)}
            />

            {/* 4. Photo Gallery */}
            <PhotoGalleryPage
              lang={lang}
              initialCategoryId={galleryCategoryId}
              onSelectCategory={(catId) => setGalleryCategoryId(catId)}
              onBackToHome={handleBackToHome}
              onOpenBooking={() => handleOpenBooking()}
              onSelectRoom={handleSelectRoom}
            />

            {/* 5. Meet Greg: Personal hosting, local knowledge, authentic care */}
            <AboutGreg
              lang={lang}
              onExploreExperience={() => scrollToSectionById('birding-breakfast')}
            />

            {/* Remaining sections in their existing order */}
            {/* The Home: 80+ Years, U.S. Engineering, Protected Area, Rooms & Bathrooms for rent */}
            <PropertyStory
              lang={lang}
              onExploreRooms={() => scrollToSectionById('rooms')}
            />

            {/* Birding & Breakfast Experience: Visitor & Staying Guest Offers */}
            <BirdingBreakfast
              lang={lang}
              onExploreWildlife={() => scrollToSectionById('wildlife')}
              onReserveBirding={(offerId) => handleReserveBirding(offerId)}
            />

            {/* Wildlife: Natural, unstaged native fauna */}
            <Wildlife
              lang={lang}
            />

            {/* What's Nearby: Explore Albrook & Panama City */}
            <WhatsNearby
              lang={lang}
            />

            {/* Verified Reviews */}
            <Reviews
              lang={lang}
            />

            {/* Contact & Inquiries */}
            <Contact
              lang={lang}
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateHome={currentRoomId ? handleNavbarNavigateHome : undefined}
        onOpenPhotoGallery={handleOpenPhotoGallery}
      />

      {/* Booking Modal (Lodgify Room Stays & Birding Breakfast Reservations) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        selectedRoomId={selectedRoomId}
        initialTab={bookingTab}
        initialBirdingOffer={birdingOffer}
      />
    </div>
  );
}
