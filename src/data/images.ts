/**
 * Centralized Image Architecture for Greg's Place in Albrook.
 * 
 * ALL website images MUST reference local files in /pictures/.
 * To update any photograph, place your image in /pictures/ with the matching filename.
 * No component modifications are necessary.
 */

export const localPictures = {
  greg: '/pictures/gregfish.jpg',
  hero: '/pictures/Tucannn.jpg',
  toucan: '/pictures/Tucannn.jpg',
  coatimundi: '/pictures/Gemini_Generated_Image_pjm5bgpjm5bgpjm5.jpg',
  agouti: '/pictures/agoutinew.jpg',
  monkey: '/pictures/tamarin.jpeg',
  sloth: '/pictures/sloth.jpeg',
  iguana: '/pictures/iguanaaa.jpg',
  chachalaca: '/pictures/chachalacanew.jpg',
  yellowBackedOriole: '/pictures/15-yellow-backed-oriole-yelling.jpg',
  orangeChinnedParakeet: "/pictures/16-orange-chinned parakeet at Greg's.jpg",
  barredAntshrike: '/pictures/7-barred antshrike female full-1.jpg',
  barredAntshrikeMale: '/pictures/male barred.jpg',
  blueGrayTanager: '/pictures/22-blue-gray-tanager-on-wire.jpg',
  crimsonBackedTanager: '/pictures/redbird.jpeg',
  variegatedSquirrel: '/pictures/jumpsquirel.jpg',
  greenHoneycreeper: '/pictures/green honeycreeper11.jpg',
  rustyMarginedFlycatcher: '/pictures/rustyyyyy.jpg',
  tropicalBirds: '/pictures/tropical-birds.jpg',
  hummingbird: '/pictures/hummingbird.jpg',
  crocodileCreek: '/pictures/crocodile-creek.jpg',
  tropicalNature: '/pictures/tropical-nature.jpg',
  cleanAir: '/pictures/nature.jpg',
  peacefulSafety: '/pictures/neighhouse.jpg',
  abundantBirdlife: '/pictures/a lot of birds.jpg',
  historyNatureCity: '/pictures/history.jpg',
  exterior: '/pictures/yard-1.jpg',
  garden: '/pictures/garden.jpg',
  room1: '/pictures/room-1.jpg',
  room2: '/pictures/room-2.jpg',
  room3: '/pictures/room-3.jpg',
  breakfast: '/pictures/bbc2.jpeg',
  tropicalBreakfast: '/pictures/bbc1.jpg',
  birdWatching: '/pictures/red legged.jpg',
  wildlifeCritters: '/pictures/Gemini_Generated_Image_pjm5bgpjm5bgpjm5.jpg',
  birding: '/pictures/green honeycreeper11.jpg',
  wildlife: '/pictures/geoffry tamaron.jpg',
  wildcat: '/pictures/tropical-nature.jpg',
  coalie: '/pictures/coalie.jpeg',
  patio: '/pictures/patio.jpg',
  livingRoom: '/pictures/living1.jpg',
  kitchen: '/pictures/kiitchen2.jpg',
  location: '/pictures/location.jpg',
  logo: '/pictures/greg-bird-logo.png',
  gregBirdLogo: '/pictures/greg-bird-logo.png',
} as const;

export type ImageKey = keyof typeof localPictures;
