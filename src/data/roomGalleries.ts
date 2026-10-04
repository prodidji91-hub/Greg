/**
 * Room Gallery Image Lists for Greg's Place in Albrook
 * 
 * Central configuration for room photographs.
 * 
 * TO ADD MORE PHOTOS TO ANY ROOM:
 * 1. Place your .jpg photo into the room's folder:
 *    - Master Bedroom: /pictures/rooms/master-bedroom/
 *    - Cayuca Room:    /pictures/rooms/cayuca-room/
 *    - Coati Room:     /pictures/rooms/coati-room/
 *    - Owl Room:       /pictures/rooms/owl-room/
 * 
 * 2. Add the path to the corresponding array below:
 *    e.g. "/pictures/rooms/master-bedroom/master-4.jpg"
 * 
 * The gallery component handles 10–20+ photos automatically with thumbnails,
 * lightbox, keyboard navigation, and mobile touch swipe.
 */

export interface RoomGalleryConfig {
  [roomId: string]: string[];
}

export const roomGalleries: RoomGalleryConfig = {
  'master-bedroom': [
    '/pictures/rooms/master-bedroom/master1.jpg',
    '/pictures/rooms/master-bedroom/master2.jpg',
    '/pictures/rooms/master-bedroom/master3.jpg',
    '/pictures/rooms/master-bedroom/master4.jpg',
    '/pictures/rooms/master-bedroom/master5.jpg',
    '/pictures/rooms/master-bedroom/master6.jpg',
    '/pictures/rooms/master-bedroom/master7.jpg',
    '/pictures/rooms/master-bedroom/master8.jpg',
  ],
  'cayuca-room': [
    '/pictures/rooms/cayuca-room/cayuca1.jpg',
    '/pictures/rooms/cayuca-room/cayuca2.jpg',
    '/pictures/rooms/cayuca-room/cayuca3.jpg',
    '/pictures/rooms/cayuca-room/cayuca4.jpg',
    '/pictures/rooms/cayuca-room/cayuca5.jpg',
    '/pictures/rooms/cayuca-room/cayuca6.jpg',
    '/pictures/rooms/cayuca-room/cayuca7.jpg',
  ],
  'coati-room': [
    '/pictures/rooms/coati-room/cayu1.jpg',
    '/pictures/rooms/coati-room/cayu2.jpg',
    '/pictures/rooms/coati-room/cayu3.jpg',
    '/pictures/rooms/coati-room/cayu4.jpg',
    '/pictures/rooms/coati-room/cayu5.jpg',
  ],
  'owl-room': [
    '/pictures/rooms/owl-room/o1.jpg',
    '/pictures/rooms/owl-room/o2.jpg',
    '/pictures/rooms/owl-room/o3.jpg',
    '/pictures/rooms/owl-room/o4.jpg',
    '/pictures/rooms/owl-room/o5.jpg',
    '/pictures/rooms/owl-room/o6.jpg',
    '/pictures/rooms/owl-room/o7.jpg',
  ],
};

/**
 * Helper to ensure local paths always start with a leading slash for Vite static serving.
 */
export function normalizeImagePath(path: string): string {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
}
