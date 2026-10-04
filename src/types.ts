import type React from 'react';

export type Language = 'en' | 'es' | 'de' | 'fr';

export type NavigationSectionId =
  | 'home'
  | 'rooms'
  | 'photo-gallery'
  | 'story'
  | 'why-albrook'
  | 'birding-breakfast'
  | 'wildlife'
  | 'whats-nearby'
  | '51-fun-things'
  | '51-things'
  | 'reviews'
  | 'contact';

export type Section = NavigationSectionId;
export type NavigationSection = NavigationSectionId;
export type NavSection = NavigationSectionId;

export interface NavItem {
  id: NavigationSectionId;
  label: string;
}

export interface LanguageOption {
  code: Language;
  label: string;
  flag: React.ComponentType<{ className?: string }>;
  regionCode: string;
  nativeTitle: string;
}

export interface Amenity {
  icon?: string;
  title: string;
  description?: string;
  secondaryText?: string;
  points?: readonly string[] | string[];
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  features: readonly string[];
  bed: string;
  view: string;
  capacity: string;
  locationInHouse: string;
  bathroomArrangement: string;
  nightlyPrice: number;
  cleaningFee: number;
  monthlyRate: number;
  airbnbRef?: string;
}

export interface LongStayDiscount {
  tier: string;
  discount: string;
  note: string;
}

export interface MonthlyRoomRate {
  roomName: string;
  monthlyPrice: number;
  location: string;
}

export interface LaundryOption {
  title: string;
  price: string;
  description: string;
  badge?: string;
}

export interface WildlifeAnimal {
  id: string;
  name: string;
  scientificOrLocal: string;
  frequency: string;
  description: string;
  habitat: string;
  category: 'birds' | 'mammals' | 'reptiles';
}

export interface Destination {
  id: string;
  name: string;
  category: string;
  proximity: string;
  description: string;
}

export interface Testimonial {
  id: string;
  guest: string;
  country: string;
  date: string;
  title: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BirdingOffer {
  id: 'visitor' | 'guest';
  title: string;
  badge: string;
  price: number;
  priceNote: string;
  audience: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FacilityItem {
  readonly name: string;
  readonly note?: string;
  readonly time: string;
}

export interface NearbyPlace {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly categoryKey?: 'shopping' | 'canal' | 'history' | 'nature' | 'waterfront' | 'city';
  readonly distance?: string;
  readonly driveTime?: string;
  readonly description?: string;
  readonly futureNote?: string;
  readonly highlights?: readonly string[];
  readonly iconType?: 'shopping' | 'flight' | 'nature' | 'heritage' | 'canal' | 'landmark' | 'mountain' | 'city' | 'night' | 'link' | 'crafts' | 'services' | 'train';
  readonly linkUrl?: string;
  readonly prominentTitleLines?: readonly string[];
  readonly facilities?: readonly FacilityItem[];
}

export interface DistanceItem {
  id: string;
  name: string;
  categoryKey: 'airports' | 'transportation' | 'canal' | 'history' | 'nature' | 'shopping';
  categoryLabel: string;
  distance: string;
  driveTime: string;
  notes: string;
  icon: string;
}

export interface TransitMode {
  id: string;
  title: string;
  summary: string;
  details: string;
  badge: string;
  icon: string;
}

export interface AirportDetail {
  id: string;
  name: string;
  code: string;
  role: string;
  distance: string;
  driveTime: string;
  description: string;
  transferNote: string;
  pricingBadge?: string;
  isPrimary?: boolean;
}
