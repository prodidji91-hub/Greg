import { Room, WildlifeAnimal, Destination, Testimonial, Benefit, BirdingOffer, NearbyPlace, DistanceItem, TransitMode, AirportDetail } from '../types';
import { contentDe } from './contentDe';
import { contentFr } from './contentFr';

export const content = {
  en: {
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'rooms', label: 'Rooms' },
      { id: 'photo-gallery', label: 'Photo Gallery' },
      { id: 'story', label: 'The Home' },
      { id: 'why-albrook', label: 'Why Albrook?' },
      { id: 'birding-breakfast', label: 'Birding, Breakfast and Critters' },
      { id: 'wildlife', label: 'Wildlife' },
      { id: 'whats-nearby', label: "What's Nearby" },
      { id: '51-fun-things', label: '51+ Fun Things to Do in Panama' },
      { id: 'reviews', label: 'Reviews' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      tag: "Historic Home & Wildlife Experience · Albrook, Panama City",
      title: "Greg's Place in Albrook",
      headline: "Stay in History. Wake Up to Nature.",
      subtitle:
        "An over 80-year-old home in Albrook, surrounded by greenery, birds, and the quiet character of one of Panama City’s hidden gems.",
      primaryCta: "Book Now",
      secondaryCta: "Explore Greg's Place",
      badge: "Historic Architecture · Over 80 Years Old · Birding & Nature",
      availability: {
        title: "Check Availability on Lodgify",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guests: "Guests",
        guestOption1: "1 Guest",
        guestOption2: "2 Guests",
        guestOption3: "3+ Guests",
        checkButton: "Check Availability",
        note: "Direct booking powered securely by Lodgify · Albrook, Panama City"
      }
    },
    propertyStory: {
      tag: "The Home",
      title: "Over 80 Years of Canal Zone History, Surrounded by Nature",
      subtitle: "A living piece of Albrook's heritage, protected greenery, and thoughtful transformation",
      lead: "To stay at Greg's Place is to step into a tranquil chapter of Panama's living history—where timeless architecture meets the tropical canopy.",
      narrativeP1: "The original house was built by the US Army Corps of Engineers over 80 years ago to support the Albrook Air Force base which is now the Marcos A. Gelabert Airport. The whole community design provides for all underground utilities (unusual for Panama), a sewer system (unusual for Panama), a nearby water treatment facility, and flood control. The houses were built to last hundreds of years and include 7-sack concrete walls, tile roofs, and copper plumbing throughout.",
      narrativeP2: "Although most houses in Albrook are duplexes or apartments, this special single-family residence was originally Officers Quarters. Originally a 3-bedroom, 2-bathroom house (including maid’s quarters), the house was professionally remodeled to include 6 bedrooms and 4 bathrooms (retaining maid’s quarters used by the live-in maid). Unlike many remodels, this remodel was designed by an architect and carried out by professionals. The historical character of the house was maintained including original woodwork and brass door hardware.",
      narrativeP3: "Today, to preserve an unhurried, peaceful atmosphere, only 4 rooms and 3 bathrooms are offered for guest rental. This ensures each visitor enjoys generous personal space, calm communal areas, and genuine, attentive hosting.",
      narrativeP4: "Best of all, the birds and wildlife of the entire surrounding area of Albrook are protected by law. Here, towering rain trees, lush tropical flora, native birds and wildlife thrive undisturbed. This provides guests with the rare opportunity to wake up inside a peaceful historic enclave adjacent to the jungle but just minutes from Panama City.",
      highlights: [
        {
          title: "Canal Zone Heritage",
          description: "Built by the US Army Corps of Engineers, you can occasionally hear the deep horn of a large ship as it traverses the nearby Panama Canal."
        },
        {
          title: "Legally Protected Enclave",
          description: "Surrounded by an area where birds and wildlife are protected by law, safeguarding pristine nature."
        },
        {
          title: "Careful Transformation",
          description: "Remodeled by an architect from a 3-bedroom Officers Quarters into 6 bedrooms & 4 bathrooms retaining some of the original woodwork and door hardware."
        },
        {
          title: "Safe Neighborhood",
          description: "You can safely walk around Albrook day and night without worry. Every day you will see people walking or jogging before dawn and after dark throughout the neighborhood."
        }
      ],
      disclaimerBadge: "You can safely walk around Albrook day and night without worry. Every day you will see people walking or jogging before dawn and after dark throughout the neighborhood.",
      cta: "Explore Accommodations"
    },
    whyAlbrook: {
      tag: "Why Albrook",
      title: "Discover the Side of Panama City Most Visitors Never See",
      subtitle: "A hidden gem many visitors don't know about",
      lead: "Most travelers know Panama City only for its glittering glass skyscrapers, bustling financial avenues, and heavy downtown traffic. But just a short ride away lies Albrook—a quiet, jungle adjacent sanctuary where the city gives way to pristine rainforest breezes.",
      contrastNotice: "Unlike dense downtown hotel districts, Albrook offers an atmosphere of genuine calm, clean air, and lush protected green corridors with abundant wildlife throughout the community.",
      pillars: [
        {
          id: 'jungle',
          title: "Close to the Jungle",
          description: "Nestled directly alongside protected tropical green belts, where rainforest foliage borders quiet residential streets.",
          icon: "Trees",
          image: '/pictures/tropical-nature.jpg'
        },
        {
          id: 'surrounded-nature',
          title: "WILDLIFE VISITS THE PROPERTY EVERY DAY",
          description: "Every day White-nosed Coatimundi, Geoffrey’s Tamarin Monkeys, Agouti, Iguana, and Variegated Squirrels visit the backyard.",
          icon: "Leaf",
          image: '/pictures/coalie.jpeg'
        },
        {
          id: 'clean-air',
          title: "Clean Air & Zero Urban Noise",
          description: "Experience little to no urban pollution compared with busier parts of the city—breathe fresh air in deep quiet.",
          icon: "Wind",
          image: '/pictures/nature.jpg'
        },
        {
          id: 'peace-safety',
          title: "Peaceful & Safe Environment",
          description: "One of the most tranquil, safe, and secure residential neighborhoods in the capital, ideal for relaxed morning and evening walks.",
          icon: "ShieldCheck",
          image: '/pictures/neighhouse.jpg'
        },
        {
          id: 'birdlife-sound',
          title: "Abundant Birdlife You Can Hear",
          description: "Guests hear and experience wild birds singing around the property from sunrise through twilight. Toucans, Parrots, Parakeets, Chachalacas, Oropendulas, Orioles, Tanagers, Hummingbirds, Barred Ant Shrikes and over 100 other species live throughout the neighborhood.",
          icon: "Bird",
          image: '/pictures/a lot of birds.jpg'
        },
        {
          id: 'accessible-harmony',
          title: "History, Nature & City Accessibility",
          description: "A one-of-a-kind combination: stay immersed in historic greenery while remaining easily connected to Panama City.",
          icon: "Compass",
          image: '/pictures/history.jpg'
        }
      ],
      quote: "“I didn't know Albrook had a place like this.”",
      quoteAttribution: "A common refrain from guests upon arriving at our gates",
      cta: "Plan Your Visit"
    },
    aboutGreg: {
      tag: "Your Host",
      title: "Meet Greg",
      subtitle: "More Than a Place to Stay",
      lead: "When you step through the doors of Greg's Place, you are not checking into an anonymous hotel room. You are being welcomed into an authentic Panama home by a host who truly cares about your journey.",
      p1: "Greg combines genuine warmth with extensive knowledge of Panama's history, local culture, and hidden natural treasures. From personal tips on the best neighborhood eateries to custom advice on navigating Panama City, Greg ensures every guest feels completely supported and relaxed.",
      p2: "Whether you are here for world-class bird watching, transiting through Albrook, or exploring the Panama Canal, Greg provides personal hospitality that turns a simple trip into an unforgettable memory.",
      cta: "Discover the Experience",
      stats: [
        { value: "80+", label: "Years of Living History" },
        { value: "4 Rooms", label: "Intimate Guest Rental" },
        { value: "100%", label: "Protected Nature Area" },
        { value: "Personal", label: "Hosting with Greg" }
      ]
    },
    thePlace: {
      tag: "The Property & Amenities",
      title: "Built by Engineers, Preserved for Nature",
      subtitle: "The Timeless Charm of Over 80 Years of History with Modern Refinement",
      lead: "Built over 80 years ago by U.S. engineering authorities, Greg's Place stands in the former Canal Zone where the wildlife is protected by law. Originally built as a 3-bedroom single-family home and later expanded to 6 bedrooms and 4 bathrooms, currently 4 rooms and 2 bathrooms are offered for guest rental to preserve an intimate, unhurried atmosphere.",
      description: "We have preserved the architectural soul, generous proportions, and breezy openness of the original home, while introducing quiet modern air conditioning, plush bedding, high-speed internet, dependable utilities and the best water quality in Panama.",
      featuresTitle: "Thoughtfully Curated Spaces",
      amenities: [
        {
          title: "Modern Spotless Bathrooms",
          description: "Three dedicated guest bathrooms featuring excellent water pressure and complimentary toiletries."
        },
        {
          title: "Lush Tropical Garden Views",
          description: "Wake up surrounded by banana and tropical fruit trees, flowering tropical flora, and the chorus of native songbirds."
        },
        {
          title: "Screened-In Patio",
          points: [
            "Dine outdoors without insects",
            "Use your phone or laptop in a beautiful setting with high-speed WiFi",
            "Watch the birds and animals come in to our feeders",
            "Use the hammocks or play ping-pong",
            "Enjoy the book exchange"
          ]
        },
        {
          title: "Sun Terrace",
          points: [
            "Get some sunshine or stay under the large awning for shade",
            "Use our yoga mat",
            "Play with the dogs outdoors"
          ]
        },
        {
          title: "Shared Kitchen & Refreshments",
          description: "Access to a clean, well-equipped kitchen to prepare your own meals.",
          secondaryText: "Two types of delicious fresh coffee are brewed every morning. Many types of tea are also available. Both coffee and tea are offered free to our guests. Chose from dozens of unusual mugs to suit your mood of the day!"
        },
        {
          title: "Formal Dining Room/Game Room",
          description: "Relaxed communal spaces designed for conversation, reading Panama literature, or friendly games. Also, another great place to use your phone or laptop and enjoy the air conditioning."
        },
        {
          title: "Living Room & Game Lounge",
          points: [
            "75” Large Screen TV connected to Netflix and YouTube",
            "Comfortable couch and specialty chair",
            "Game table set up for chess and checkers"
          ]
        },
        {
          title: "Board Games",
          points: [
            "Chess",
            "Checkers",
            "Backgammon",
            "Scrabble",
            "Sequence",
            "Chinese Checkers",
            "Mexican Train"
          ]
        },
        {
          title: "Reliable Utilities & High-Speed Internet",
          description: "Consistent high-speed Wi-Fi throughout the residence and grounds."
        },
        {
          title: "Barbecue Area",
          points: [
            "Large propane BBQ grill ready to run",
            "Large charcoal grill (guest supplies charcoal)",
            "Hear the rain hit the tin roof over the BBQ area!"
          ]
        },
        {
          title: "Cleaning and Maintenance",
          points: [
            "Our live-in maid prepares the rooms, cleans the house daily, and takes care of our two friendly dogs, Bongo and Savvy.",
            "Gardeners maintain the exterior grounds.",
            "Professional repairmen on-call whenever needed."
          ]
        },
        {
          title: "Laundry Facilities",
          description: "We have two washers and two dryers. Prices are posted. One option includes having our maid do your laundry for you."
        }
      ]
    },
    rooms: {
      tag: "Accommodations",
      title: "Peaceful Rooms & Intimate Comfort",
      subtitle: "Four Distinctive Guest Rooms in an 80+ Year Old Canal Zone Home",
      lead: "Each room combines peaceful Albrook residential charm with modern boutique comfort, quiet air conditioning, desk or table with chair, upright fan, high speed internet, large-screen television connected to High-speed WiFi and free access to host's Netflix account.",
      ctaView: "View Accommodation Details",
      ctaBook: "Book Your Stay",
      ctaCheckAvailability: "Check Availability",
      ctaAskAvailability: "Ask About Availability",
      verifiedBadge: "Verified Historic Stay · 4 Rooms & 3 Bathrooms Offered",
      items: [
        {
          id: 'master-bedroom',
          name: "Master Bedroom",
          subtitle: "The Largest & Best Room at Greg's Place",
          image: '/pictures/rooms/master-bedroom/master1.jpg',
          description: "Located upstairs, the Master Bedroom features a small balcony that allows you to relax at a two-person table and watch wildlife in the garden. Geoffrey’s Tamarin Monkeys may jump from the trees onto your balcony railing where you can feed them pieces of banana by hand.",
          features: [
            "California King-size bed",
            "60-inch large-screen TV",
            "Private balcony",
            "Private small refrigerator/freezer",
            "Walk-in closet",
            "Attached large private bathroom"
          ],
          bed: "California King-size Bed",
          view: "Garden & Canopy View",
          capacity: "Up to 2 Guests",
          locationInHouse: "Located upstairs",
          bathroomArrangement: "Attached large private bathroom (Tub/Shower combination)",
          nightlyPrice: 53,
          cleaningFee: 15,
          monthlyRate: 1075,
          airbnbRef: "https://airbnb.com/rooms/51522415"
        },
        {
          id: 'cayuca-room',
          name: "Cayuca Room",
          subtitle: "Downstairs Sanctuary with Teak Cayuca Boat",
          image: '/pictures/rooms/cayuca-room/cayuca1.jpg',
          description: "The Cayuca Room is located downstairs. It features a private bathroom with a private shower, a queen-size bed, 55-inch large-screen TV, and an authentic decorative boat section made from a real teak cayuca.",
          features: [
            "Queen-size bed",
            "55-inch large-screen TV",
            "Private bathroom with shower",
            "Double-door entry",
            "Decorative boat section made from a real teak cayuca",
            "Located downstairs"
          ],
          bed: "Queen-size Bed",
          view: "Garden & Patio View",
          capacity: "Up to 2 Guests",
          locationInHouse: "Located downstairs",
          bathroomArrangement: "Private bathroom with shower",
          nightlyPrice: 44,
          cleaningFee: 15,
          monthlyRate: 875,
          airbnbRef: "https://airbnb.com/rooms/26277990"
        },
        {
          id: 'coati-room',
          name: "Coati Room",
          subtitle: "Upstairs Room with Resident Wildlife Opportunities",
          image: '/pictures/rooms/coati-room/cayu1.jpg',
          description: "The Coati Room is located upstairs. Features a comfortable queen-size bed and uses the large shared guest bathroom with shower located close to the room. Guests may have the opportunity to see Rocky, the resident White-nosed Coatimundi, visiting the property.",
          features: [
            "Queen-size bed",
            "43-inch TV",
            "Located upstairs",
            "Uses the large shared guest bathroom with shower located close to the room",
            "Opportunity to see Rocky, the resident White-nosed Coatimundi, visiting the property"
          ],
          bed: "Queen-size Bed",
          view: "Garden & Tropical Foliage View",
          capacity: "Up to 2 Guests",
          locationInHouse: "Located upstairs",
          bathroomArrangement: "Large shared guest bathroom with shower located close to the room",
          nightlyPrice: 40,
          cleaningFee: 15,
          monthlyRate: 795,
          airbnbRef: "https://airbnb.com/rooms/25668632"
        },
        {
          id: 'owl-room',
          name: "Owl Room",
          subtitle: "Upstairs Room with Double-Door Entry",
          image: '/pictures/rooms/owl-room/o1.jpg',
          description: "The Owl Room is located upstairs. It features an elegant double-door entry, a plush queen-size bed, a 50-inch large-screen TV, and uses the large shared guest bathroom with shower located close to the room.",
          features: [
            "Queen-size bed",
            "50-inch large-screen TV",
            "Double-door entry",
            "Uses the large shared guest bathroom with shower located close to the room",
            "Located upstairs"
          ],
          bed: "Queen-size Bed",
          view: "Canopy & Quiet Residential View",
          capacity: "Up to 2 Guests",
          locationInHouse: "Located upstairs",
          bathroomArrangement: "Large shared guest bathroom with shower located close to the room",
          nightlyPrice: 36,
          cleaningFee: 15,
          monthlyRate: 745,
          airbnbRef: "https://airbnb.com/h/greg-owl"
        }
      ],
      sharedAmenitiesTitle: "Every Room Includes",
      sharedAmenitiesSubtitle: "Standard Comforts Provided Across All Four Guest Rooms",
      sharedAmenities: [
        "Air conditioning",
        "Fan",
        "Table",
        "Chair",
        "Lamp",
        "Workspace suitable for setting up a computer",
        "Large-screen TV",
        "High-speed WiFi connection",
        "Access to free streaming services such as YouTube in high definition",
        "Netflix available through the host's account"
      ],
      pricingTableTitle: "Room Rates & Cleaning Fees",
      pricingTableSubtitle: "Transparent, Simple Pricing with No Hidden Surcharges",
      bookDirectTitle: "Book Here Direct and Save",
      bookDirectBody: "Prices shown here are discounted from the standard online prices shown for these same accommodations on other reservation services such as Airbnb and booking.com. In addition, you avoid paying additional fees such as taxes and booking fees.\n\nHaving trouble getting the dates you want? Contact Greg directly. He may be able to mix and match rooms to meet your desires.",
      longStayTitle: "Long-Stay Discounts",
      longStaySubtitle: "Extended stays at Greg's Place enjoy progressive discounts",
      longStayDiscounts: [
        { tier: "7–14 days", discount: "10% discount", note: "Applied automatically to stays between 7 and 14 days" },
        { tier: "15–30 days", discount: "15% discount", note: "Applied automatically to stays between 15 and 30 days" },
        { tier: "31–45 days", discount: "20% discount", note: "Applied automatically to stays between 31 and 45 days" },
        { tier: "45+ days", discount: "25% discount", note: "Applies to stays of 45 days or more / more than 45 days" }
      ],
      monthlyRatesTitle: "Monthly Rates",
      monthlyRatesSubtitle: "Long-Term Extended Residency Options",
      monthlyNotice: "Six-Month Minimum",
      monthlyNoticeSub: "A six-month minimum stay is strictly required for these monthly rates. They do not apply to short-term monthly rentals.",
      monthlyRates: [
        { roomName: "Master Bedroom", monthlyPrice: 1075, location: "Upstairs · California King Bed · En-suite Bathroom & Balcony" },
        { roomName: "Cayuca Room", monthlyPrice: 875, location: "Downstairs · Queen Bed · Private Bathroom" },
        { roomName: "Coati Room", monthlyPrice: 795, location: "Upstairs · Queen Bed · Large Shared Guest Bathroom" },
        { roomName: "Owl Room", monthlyPrice: 745, location: "Upstairs · Queen Bed · Large Shared Guest Bathroom" }
      ],
      laundryTitle: "Guest Laundry Services",
      laundrySubtitle: "On-Site Laundry Facilities for Guests",
      laundryEquipment: "2 washers & 2 dryers on the premises",
      laundryNote: "Laundry services are not included in the room price.",
      laundryOptions: [
        {
          title: "Self-Service Laundry",
          price: "$7 / load",
          description: "Includes the property's soap and fabric softener.",
          badge: "Supplies Included"
        },
        {
          title: "Self-Service Using Your Own Supplies",
          price: "$5 / load",
          description: "Guest provides their own soap and fabric softener.",
          badge: "BYO Supplies"
        },
        {
          title: "Laundry Service by Maria",
          price: "$10 / load",
          description: "Maria does the laundry using the property's supplies.",
          badge: "Full Service"
        }
      ]
    },
    birdingBreakfast: {
      tag: "Signature Morning Experience",
      title: "Birding, Breakfast & Critters Experience",
      subtitle: "Come for breakfast. Stay for the birds and wildlife.",
      lead: "Guests can enjoy a unique morning experience at Greg's Place combining bird watching, handcrafted breakfast, and wildlife/animal viewing around the property.",
      experienceNote: "An intimate, authentic morning retreat surrounded by lush tropical greenery and soothing morning bird song.",
      airbnbExperienceRef: "https://www.airbnb.com/experiences/635171",
      experiencePillars: [
        { title: "Bird Watching", desc: "Watch and listen to toucans, parakeets, hummingbirds, and over 100 tropical species singing right outside the patio." },
        { title: "Tropical Breakfast", desc: "Freshly brewed Panama coffee, teas, seasonal fruit smoothies, and homemade morning specialties." },
        { title: "Wildlife & Critters Viewing", desc: "Spot agoutis (ñeques), Rocky the coatimundi, sloths, and tropical lizards exploring the garden." }
      ],
      offers: [
        {
          id: 'visitor',
          title: "Outside Visitors",
          badge: "For Non-Staying Visitors",
          price: 39,
          priceNote: "per person · Morning reservation required",
          audience: "For visitors who are not staying at the property",
          tagline: "Breakfast in the middle of nature",
          description: "Join us for a special morning experience in Albrook combining bird watching, fresh tropical breakfast, and wildlife viewing on our screened garden patio.",
          features: [
            "Bird watching with 100+ species active in Albrook canopy",
            "Complete handcrafted tropical breakfast with fresh Panama coffee",
            "Fresh home-grown fruit smoothies & seasonal fruits",
            "Wildlife & critter viewing around the garden grounds",
            "Screened-in garden patio dining — completely bug-free",
            "Greg's neighborhood wildlife guidance and local tips"
          ],
          cta: "Contact Greg to Arrange Experience",
          highlighted: false
        },
        {
          id: 'guest',
          title: "Greg's Place Overnight Guests",
          badge: "Special Overnight Guest Rate",
          price: 25,
          priceNote: "per person · Exclusive guest rate",
          audience: "Exclusive offer for guests staying overnight at the property",
          tagline: "Wake up to nature, step into breakfast",
          description: "Guests staying at Greg's Place enjoy our full birding, breakfast & critters experience at a preferred rate, just steps from their bedroom door.",
          features: [
            "Special preferred rate exclusively for staying guests ($25 vs $39)",
            "Bird watching, breakfast, and wildlife viewing",
            "Freshly prepared breakfast served in the screened garden patio",
            "Panama coffee, teas & fresh fruit smoothies",
            "Important: Overnight guests must let Greg know the night before and pay in cash in US Dollars",
            "Contact Greg to add this to your morning itinerary"
          ],
          cta: "Contact Greg to Arrange Experience",
          highlighted: true
        }
      ],
      importantNotice: "Important: Overnight guests must let Greg know the night before and pay in cash in US Dollars.",
      quote: "Watching birds while sipping fresh Panama coffee in the screened patio is an experience you'll never forget.",
      ctaGeneral: "Reserve Your Birding Breakfast",
      bullets: [
        {
          title: "Screened-In Garden Patio Dining",
          description: "Enjoy your morning meal in a tranquil, insect-free open-air patio completely surrounded by tropical foliage."
        },
        {
          title: "Fresh Smoothies with Home-Grown Fruits",
          description: "Sip refreshing nutrient-rich smoothies crafted from fruits harvested right from the property's garden."
        },
        {
          title: "World-Class Backyard Birding",
          description: "Spot colorful tropical birds, hummingbirds, and songbirds without even leaving your breakfast chair."
        },
        {
          title: "Greg's Curated Wildlife Discovery Map",
          description: "Greg provides a hand-drawn neighborhood map pointing out a secret wildlife stream walking distance from our door."
        },
        {
          title: "Nearby Caimans, Turtles & Basilisk Lizards",
          description: "Take the short walk to see resident caiman crocodiles, tropical slider turtles, and Jesus Christ lizards basking on logs."
        }
      ],
      cta: "Discover Birding & Breakfast"
    },
    wildlife: {
      tag: "Natural Habitat",
      title: "Wildlife at Your Doorstep",
      subtitle: "An authentic, unstaged ecosystem in the heart of Albrook",
      lead: "Because Albrook borders the jungle and protected green belts near Parque Natural Metropolitano, native Panama animals frequently visit our gardens. We respect our wildlife as free, wild creatures in their natural habitat — never captive or staged.",
      disclaimer: "Note on wildlife sightings: Sightings occur naturally and vary by season and time of day. We do not guarantee every species appears every day; rather, every encounter is a genuine moment of discovery.",
      animals: [
        {
          id: 'toucans',
          name: "Keel-billed Toucan & Tropical Birds",
          scientificOrLocal: "Ramphastos sulfuratus · Tucán pico iris",
          frequency: "Frequent daily garden visitors",
          habitat: "Garden tree canopies & fruiting branches",
          category: 'birds',
          description: "Recognized by their rainbow-colored bills, pairs of toucans frequently land in our garden trees during early mornings and late afternoons."
        },
        {
          id: 'coatimundi',
          name: "Coatimundis (Gatos Solos)",
          scientificOrLocal: "Nasua narica · Coati de nariz blanca",
          frequency: "Regularly spotted passing through",
          habitat: "Garden perimeter & ground foraging",
          category: 'mammals',
          description: "Curious and agile relatives of the raccoon, coatimundis use their sensitive snouts and ringed tails to forage along the quiet residential garden edges."
        },
        {
          id: 'agouti',
          name: "Central American Agoutis (Ñeques)",
          scientificOrLocal: "Dasyprocta punctata · Ñeque",
          frequency: "Very common daily visitors",
          habitat: "Lawn and shaded undergrowth",
          category: 'mammals',
          description: "These gentle, glossy-furred creatures are beloved fixtures of the lawn, nibbling fallen seeds and entertaining guests during breakfast."
        },
        {
          id: 'sloth',
          name: "Brown-throated Three-toed Sloths",
          scientificOrLocal: "Bradypus variegatus · Perezoso",
          frequency: "Occasional peaceful sightings",
          habitat: "Cecropia trees & high branches",
          category: 'mammals',
          description: "Occasionally seen moving methodically through the upper canopy of surrounding trees, embodying the relaxed pace of Panama nature."
        },
        {
          id: 'monkeys',
          name: "Geoffroy's Tamarins & Howler Monkeys",
          scientificOrLocal: "Saguinus geoffroyi & Alouatta palliata",
          frequency: "Occasional visitors in tree corridors",
          habitat: "Canopy transit routes across Albrook",
          category: 'mammals',
          description: "Small, energetic Geoffrey's Tamarins and vocal Howler Monkeys occasionally make appearances along the leafy canopy corridors bordering the neighborhood."
        },
        {
          id: 'caiman',
          name: "Spectacled Caimans (Short Walk)",
          scientificOrLocal: "Caiman crocodilus · Babilla",
          frequency: "Reliable at the local wildlife stream",
          habitat: "Natural creek & wetland near the residence",
          category: 'reptiles',
          description: "Located a short stroll from Greg's Place using Greg's wildlife guide map, small caimans can be observed resting quietly on creek banks."
        },
        {
          id: 'jesus-christ-lizard',
          name: "Common Basilisk (Jesus Christ Lizard)",
          scientificOrLocal: "Basiliscus basiliscus · Basilisco",
          frequency: "Common at nearby stream & garden borders",
          habitat: "Stream overhanging branches & waterside rocks",
          category: 'reptiles',
          description: "Famous for their ability to run across the water's surface when startled, these remarkable lizards are easily spotted along the creek."
        }
      ]
    },
    whyStay: {
      tag: "The Core Difference",
      title: "Why Stay at Greg's Place",
      subtitle: "A historic home surrounded by nature in the heart of Albrook",
      benefits: [
        {
          id: 'history',
          title: "Over 80 Years of Living History",
          description: "An authentic historic residence built by U.S. engineering authorities with enduring solid construction in protected Albrook.",
          icon: "Home"
        },
        {
          id: 'nature',
          title: "Wild Nature & Birds You Can Hear",
          description: "Abundant tropical birds, agoutis, and lush flora surround the house, giving you a genuine nature retreat close to the city.",
          icon: "Feather"
        },
        {
          id: 'peace',
          title: "Deep Peace & Clean Air",
          description: "A tranquil residential sanctuary completely shielded from urban noise, heavy traffic, and downtown city pollution.",
          icon: "ShieldCheck"
        },
        {
          id: 'intimacy',
          title: "Intimate 4-Room Guest Rental",
          description: "Only 4 rooms and 3 bathrooms are offered for rent, guaranteeing an uncrowded, private, and personal experience.",
          icon: "Sparkles"
        },
        {
          id: 'personal',
          title: "Personal Hosting with Greg",
          description: "Benefit from Greg's genuine hospitality, responsive communication, and tailored insider guidance across Panama.",
          icon: "HeartHandshake"
        },
        {
          id: 'breakfast',
          title: "Birding & Breakfast Ritual",
          description: "Sip home-grown fruit smoothies and Panama coffee on the screened-in patio while bird watching in the tropical canopy.",
          icon: "Coffee"
        }
      ]
    },
    whatsNearby: {
      tag: "Destinations Guide",
      title: "What's Nearby",
      subtitle: "Centrally Located Close to most Tourist Attractions",
      subtitleNote: "makes Greg’s Place a great base for your Panama trip.",
      lead: "Greg’s Place provides an ideal, peaceful home base for exploring the rich history, biodiversity, urban culture and most of the Panama City tourist attractions.",
      categories: [
        { key: 'all', label: 'All Highlights' },
        { key: 'canal', label: 'Canal & Engineering' },
        { key: 'history', label: 'Colonial History' },
        { key: 'nature', label: 'Nature & Parks' },
        { key: 'waterfront', label: 'Waterfront & Skyline' },
        { key: 'shopping', label: 'Shopping & Transit' }
      ],
      places: [
        {
          id: 'albrook-mall',
          name: "Albrook Mall\n“The Largest Mall in Latin America”",
          category: "Shopping & Dining",
          categoryKey: "shopping",
          distance: "~1 km (as the toucan flies)",
          driveTime: "~7 minutes by car",
          description: "This expansive fully air-conditioned mall features over 700 stores and kiosks. People come from throughout Panama and nearby countries by bus or metro to enjoy the mall. It features hundreds of retail shops, diverse food courts, major supermarkets, pharmacies, banking services, and family entertainment.",
          futureNote: "A great daytime destination when it is too hot (or raining) to go outside. Enjoy visiting the many entrances with their huge animal statues!",
          highlights: [
            "Over 700 retail stores & international brands",
            "Fully air conditioned",
            "Supermarkets, pharmacies & travel essentials",
            "Extensive food courts and casual restaurants",
            "Entertainment such as a movie theater, bowling alley and casino",
            "Direct indoor connection to the Albrook Bus Terminal (which has a direct indoor connection to the Albrook Metro Station)"
          ],
          iconType: "shopping"
        },
        {
          id: 'panama-canal',
          name: "Panama Canal – Miraflores Locks Visitor Center",
          category: "Historic Engineering",
          categoryKey: "canal",
          distance: "~7 km",
          driveTime: "~10 minutes",
          description: "A world-renowned wonder of human engineering. Stand on the multi-tiered observation decks and watch massive international cargo vessels, tankers, and cruise liners navigate the locks between the Atlantic and Pacific oceans.",
          futureNote: "Don’t miss the 3D/IMAX 45-minute movie narrated by Morgan Freeman. Showtimes included here: https://visitcanaldepanama.com/en/points-of-interest/miraflores-visitor-center/",
          highlights: [
            "Up-close observation decks overlooking active locks",
            "Narrated transit commentary in English and Spanish",
            "Interactive museum detailing canal construction history",
            "Award winning 3D/IMAX documentary movie on site"
          ],
          iconType: "canal"
        },
        {
          id: 'casco-viejo',
          name: "Casco Viejo (Historic Old Town or Casco Antiguo)",
          category: "Culture & Heritage",
          categoryKey: "history",
          distance: "~ 9 km",
          driveTime: "10-20 minutes by car depending on traffic",
          description: "Panama City’s historic colonial quarter, designated a UNESCO World Heritage site. Known for charming brick-paved streets, restored 17th-century Spanish colonial architecture, picturesque plazas, specialty coffee shops, artisan boutiques, and vibrant nightlife.",
          futureNote: "Great to visit in the evening when it’s cooler.\nParking and traffic are challenging so Uber is best.",
          highlights: [
            "UNESCO World Heritage colonial architecture",
            "Historic plazas: Plaza Mayor, Plaza de Francia, Plaza Bolívar",
            "Premier culinary district with rooftop bars and fine dining",
            "Artisan boutiques and specialty Panamanian coffee houses",
            "Museums"
          ],
          iconType: "heritage"
        },
        {
          id: 'amador-causeway',
          name: "Amador Causeway",
          category: "Scenic Promenade",
          categoryKey: "waterfront",
          distance: "~ 7 km",
          driveTime: "10–15 minutes by car depending on traffic",
          description: "A scenic palm-lined roadway built from rocks excavated during the construction of the Panama Canal, connecting four offshore islands to the mainland. Offers continuous Pacific breezes, bicycle rentals, waterfront dining, and sweeping views of the city skyline and canal entrance.",
          futureNote: "Best enjoyed in the morning or evening when it is cooler.",
          highlights: [
            "Unobstructed views of ships entering the Panama Canal",
            "Paved 6-kilometer path for cycling, skating, and walking",
            "Bicycle and quad-cycle rentals along the promenade",
            "Open-air seafood restaurants overlooking the Pacific",
            "Ice cream and candy shops",
            "Flamenco Marina"
          ],
          iconType: "landmark"
        },
        {
          id: 'biomuseo',
          name: "Biomuseo (Museum of Biodiversity)",
          category: "Nature & Science",
          categoryKey: "nature",
          distance: "~ 7 km",
          driveTime: "10–15 minutes by car depending on traffic",
          description: "Frank Gehry’s only architectural work in Latin America. Located at the entrance to the Amador Causeway, this strikingly colorful museum tells the scientific story of how the Isthmus of Panama rose from the sea 3 million years ago, connecting continents and transforming global biodiversity.",
          futureNote: "Parking is scarce, so Uber is best.\nIt’s air conditioned, so a good daytime activity. Afterwards you can continue down the Causeway to get something good to eat or drink.",
          highlights: [
            "World-famous Frank Gehry exterior architecture",
            "8 immersive galleries designed with the Smithsonian Institution",
            "Living aquarium tanks showcasing Caribbean and Pacific marine life",
            "Surrounding botanical park featuring native flora"
          ],
          iconType: "nature"
        },
        {
          id: 'cinta-costera',
          name: "Cinta Costera (Coastal Ribbon)",
          category: "Waterfront & Skyline",
          categoryKey: "waterfront",
          distance: "~7 km",
          driveTime: "10-15 minutes by car depending on traffic",
          description: "Panama City’s premier waterfront recreational parkway spanning the Bay of Panama along Avenida Balboa. Features wide walking trails, dedicated bike paths, outdoor exercise stations, and spectacular front-row views of the high-rise downtown skyline.",
          futureNote: "My favorite of the local bicycle paths. The Causeway is a close second. Don’t miss the Seafood Market – best in the mornings before the catch-of-the-day is sold out.",
          highlights: [
            "7 km of paved oceanfront jogging and cycling lanes",
            "Iconic vantage point for Panama City's modern skyline",
            "Lush gardens, recreation areas, and street food stalls",
            "Connects seamlessly to Casco Viejo and the Seafood Market",
            "2.5 km of the pathway extends over the ocean and around the Casco Viejo peninsula."
          ],
          iconType: "landmark"
        },
        {
          id: 'parque-metropolitano',
          name: "Parque Natural Metropolitano",
          category: "Rainforest Reserve",
          categoryKey: "nature",
          distance: "~5 km",
          driveTime: "~ 7 minutes by car",
          description: "A 232-hectare protected tropical forest situated entirely within Panama City borders, right next to Albrook. Known as the 'green lung of the city,' it features shaded rainforest trails where hikers frequently spot sloths, coatimundis, agoutis, several types of monkeys, toucans, and over 200 species of native birds.",
          futureNote: "Borrow quality binoculars from Greg before you go. Stop at the Visitor Center first to pay the entrance fee ($5 foreign and $2 national) and get your trail map.",
          highlights: [
            "Protected primary tropical forest inside city limits",
            "Over 200 species of birds, plus sloths, agoutis, and monkeys",
            "Well-maintained, shaded nature hiking trails",
            "Lookout point offering panoramic views of the city and Canal"
          ],
          iconType: "nature"
        },
        {
          id: 'cerro-ancon',
          name: "Cerro Ancón (Ancon Hill)",
          category: "Nature & Heritage",
          categoryKey: "nature",
          distance: "~6 km",
          driveTime: "8-12 minutes by car depending on traffic",
          description: "A historic 199-meter jungle hill overlooking Panama City and the Pacific entrance to the Canal. Protected from urban development, the hill provides a paved canopy walk under towering trees, frequent wildlife encounters (sloths, deer, toucans, and coatimundis), and 360-degree views beneath Panama’s giant national flag.",
          futureNote: "Borrow quality binoculars from Greg before you go. If there is a guide at the top, ask him to show you any animals. Tip him several dollars if he shows you something interesting!",
          highlights: [
            "360-degree panoramic lookout over Panama City and the Canal",
            "The giant Panamanian flag waves at the summit",
            "Shaded paved road popular for morning walks and birding",
            "Frequent roadside sightings of sloths, deer, and toucans"
          ],
          iconType: "mountain"
        },
        {
          id: 'panama-city-base',
          name: "Panama City Exploration",
          category: "City & Culture",
          categoryKey: "city",
          distance: "Central Albrook Location",
          driveTime: "10–20 minutes to most downtown districts",
          description: "Greg’s Place serves as the perfect springboard to explore the wider metropolis. Return home each evening to peaceful greenery, fresh breezes, and calm residential streets after discovering financial districts, museums, waterfront sights and downtown nightlife.",
          futureNote: "Uber is highly recommended. Download the app before you travel. Set it up to pay by credit card (Uber Cash) so you are not fumbling for cash. Drivers never have change!",
          highlights: [
            "Quick access to financial, culinary, and cultural districts",
            "Direct Uber and InDrive connectivity to/from Host’s front door",
            "Tranquil haven far removed from downtown traffic jams",
            "Safe, secure, and peaceful retreat to recharge every night"
          ],
          iconType: "city"
        },
        {
          id: 'walk-neighborhood',
          name: "Walk and Explore the Neighborhood",
          category: "Albrook Living",
          categoryKey: "nature",
          distance: "Right from Greg's Place",
          driveTime: "Walking / On Foot",
          description: "Step out directly into Albrook's tranquil residential canopy, historic Canal Zone architecture, and lush tropical parkways.",
          futureNote: "Ask the Host to borrow a quality set of binoculars.",
          highlights: [
            "You can walk for many kilometers (but no miles!)",
            "Agoutis are frequently seen in the morning and evenings before dark",
            "You might happen upon coatimundis, Geoffrey’s tamarin monkeys, or iguanas any time during the day.",
            "Numerous Parks",
            "Interesting Homes",
            "Crocodile Creek",
            "  Caiman and Saltwater Crocodiles",
            "  Tropical slider turtles",
            "  Jesus Christ (Basilisk) lizards (run on top of the water)",
            "  Nutria",
            "  Waterfowl – Storks, Herons, Egrets, Cormorants, Wattled Jacana, Southern Lapwing, Whistling Duck, etc."
          ],
          iconType: "nature"
        },
        {
          id: 'night-walk',
          name: "Night Walk",
          category: "Wildlife & Nature",
          categoryKey: "nature",
          distance: "Right from Greg's Place",
          driveTime: "At dusk and nighttime",
          description: "The host has seen the following nighttime animals close to his home: Agouti, anteater, armadillo, capybara, porcupine, deer, coyote, climbing rats, weasel, and paca.",
          futureNote: "Ask the host to borrow a powerful flashlight.",
          highlights: [
            "Listen to the jungle insects, frogs and toads at dusk. At certain times of the year, they can be quite loud! There are also lightning bugs at certain times of the year.",
            "Spot fruit- and insect-eating bats as they fly erratically around at night.",
            "View the nighthawk as it stays close to the ground with its bright yellow eye reflecting from your light.",
            "You might see the orange eyes of crocodiles in the river or a capybara climb out of the creek to cross the street."
          ],
          iconType: "night"
        },
        {
          id: '51-fun-things',
          name: "51+ Fun Things to Do in Panama City, Panama with Photos",
          category: "Exploration",
          categoryKey: "city",
          distance: "Featured City Guide",
          driveTime: "51+ Activities with Photos",
          description: "Explore a curated photo-rich directory of top activities, historical excursions, canal tours, wildlife sanctuaries, and scenic spots in and around Panama City.",
          prominentTitleLines: [
            "51+ Fun Things to Do",
            "in and around",
            "Panama City, Panama",
            "with",
            "Photos"
          ],
          linkUrl: "https://tourscanner.com/things-to-do-in-panama-city-panama",
          iconType: "link"
        },
        {
          id: 'artesan-center',
          name: "Artesan Center",
          category: "Artisan & Culture",
          categoryKey: "shopping",
          distance: "~5 km",
          driveTime: "~6 minutes",
          description: "A popular arts and crafts center dedicated to authentic Panamanian handmade goods, traditional textiles, and cultural treasures.",
          futureNote: "On Uber it’s called “Centro de artesanias Cardenas”. It’s within walking distance of Greg’s favorite restaurant: Maagoos Fish Tacos and More (run by a spearfishing family).",
          iconType: "crafts"
        },
        {
          id: 'panama-canal-railway',
          name: "Panama Canal Railway Station",
          category: "Historic Railway & Excursion",
          categoryKey: "canal",
          distance: "~ 5 km",
          driveTime: "~8 minutes",
          description: "Take the historic Panama Canal Railway across the Isthmus of Panama, along the Panama Canal and through the jungle. Your one-hour destination is Colon, on the Caribbean side. You can return by this same train later in the day.\nCheck out the details here: https://www.panarail.com/",
          futureNote: "This is a wonderful trip worth doing. Get the Dome Car for the best viewing. Consider having Greg’s taxi driver, Jose, meet you to give you a tour of Colon, take you to the Gatun Locks Visitor Center, and then on to Portobelo to see the historic town and fort, have lunch in Portobelo and return you to Greg’s Place.",
          iconType: "train"
        },
        {
          id: 'stores-and-facilities',
          name: "Stores and Facilities",
          category: "Neighborhood Services",
          categoryKey: "city",
          distance: "Albrook Community",
          driveTime: "2–7 min by car or walking",
          description: "Essential everyday facilities, shopping, and professional services located close to Greg's Place:",
          facilities: [
            {
              name: "Marcos Gelabert Airport",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "United States Embassy",
              time: "~7 minutes by car"
            },
            {
              name: "Farmer’s Market (fruit, vegetables, eggs)",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "El Rey Supermarket",
              note: "(the largest grocery store in Albrook, where Host normally shops)",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "Super Carnes Supermarket",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "Kotowa Coffee House",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "Car Rentals",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "Power Club Fitness Center",
              time: "~4 minutes by car or ~16 minutes walking"
            },
            {
              name: "Full Tech (Phone/Computer service)",
              time: "~3 minutes by car or ~12 minutes walking"
            },
            {
              name: "Arrocha Pharmacy",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Medical Clinic (Clinica Albrook)",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Dentist (Clinica Arango Orillac Albrook)",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Barbers",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Beauty Salons",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Dry Cleaners/Seamstress",
              time: "~2 minutes by car or 8 minutes walking"
            },
            {
              name: "Mail Boxes, Etc.",
              time: "~2 minutes by car or 8 minutes walking"
            }
          ],
          iconType: "services"
        }
      ],
      diningCallout: {
        title: "Over 15 Restaurants & Food Trucks Within Walking Distance",
        description: "Guests at Greg's Place enjoy convenient culinary options right in the neighborhood. Over 15 restaurants and food trucks are located within walking distance, featuring local Panamanian specialties, bakeries, artisan coffee, and international flavors—with countless more reachable in minutes via a short Uber ride.",
        note: "Walkable dining is a wonderful local benefit of staying in Albrook."
      },
      expandHint: "Additional points of interest, verified transportation details, and custom itineraries can be arranged directly with Greg."
    },
    location: {
      tag: "Prime Residential Location",
      title: "Albrook: A Green, Historic Oasis in Panama City",
      subtitle: "Tropical nature, canal heritage, and quiet seclusion—just minutes from the city center",
      lead: "Greg's Place is nestled in Albrook, an unhurried, green, and historically rich residential enclave in Panama City. Unlike dense downtown hotel districts marked by towering glass skyscrapers, heavy traffic congestion, and constant street noise, Albrook offers a rare, peaceful balance: protected tropical rainforest corridors, daily wildlife, clean breezes, and historic Canal Zone character—all with quick, effortless access to the city's premier attractions, airport hubs, and transit lines.",
      contrastNotice: "Guests at Greg's Place are NOT staying in a noisy downtown commercial hotel strip. Instead, you enjoy a tranquil, jungle-adjacent residential sanctuary that remains minutes from everywhere you want to go.",
      unusualCombination: {
        tag: "The Albrook Advantage",
        title: "An Unusual & Desirable Combination",
        description: "Few accommodations in Central America offer this distinctive blend of serenity, living nature, and urban connectivity:",
        pillars: [
          {
            id: 'nature',
            title: "Tropical Nature & Green Belts",
            desc: "Bordered by protected tropical rainforest corridors, ancient rain trees, and flowering vegetation that cool the neighborhood naturally.",
            icon: "Trees"
          },
          {
            id: 'wildlife',
            title: "Daily Native Wildlife",
            desc: "White-nosed coatimundis, Geoffroy’s tamarins, agoutis, and dozens of tropical bird species visit our property and garden every single day.",
            icon: "Feather"
          },
          {
            id: 'peace',
            title: "Quiet Residential Surroundings",
            desc: "Paved sidewalks, tree-shaded streets, underground utilities, and peaceful evenings far away from honking horns and urban sirens.",
            icon: "ShieldCheck"
          },
          {
            id: 'history',
            title: "Historic Canal Zone Character",
            desc: "Over 80 years of history, originally constructed as US Officers Quarters with solid 7-sack concrete, copper plumbing, and classic architecture.",
            icon: "Landmark"
          },
          {
            id: 'access',
            title: "Easy Access to City Attractions",
            desc: "Casco Viejo, the Panama Canal locks, Cinta Costera, and Amador Causeway are all reachable in a short 10–20 minute drive.",
            icon: "Compass"
          },
          {
            id: 'transport',
            title: "Close Proximity to Transportation",
            desc: "Albrook Metro Station and the central bus terminal are approximately 1–2 km away, allowing easy car-free travel across Panama.",
            icon: "Train"
          },
          {
            id: 'airports',
            title: "Convenient to Both Airports",
            desc: "Just 3–5 minutes from Albrook Regional Airport for domestic flights, with coordinated bilingual transfers to Tocumen International.",
            icon: "Plane"
          }
        ]
      },
      distancesTag: "Distances At A Glance",
      distancesTitle: "Approximate Travel Times & Distances",
      distancesSubtitle: "Centrally positioned with quick connections to key Panama landmarks",
      distances: [
        {
          id: 'albrook-airport',
          name: "Marcos A. Gelabert Airport (Albrook)",
          categoryKey: 'airports',
          categoryLabel: "Regional Airport",
          distance: "Approximately 1–2 km",
          driveTime: "About 3–5 minutes by car / Uber",
          notes: "Greg previously noted ~3 minutes by Uber. Perfect for domestic flights to Bocas del Toro and San Blas.",
          icon: "Plane"
        },
        {
          id: 'albrook-mall',
          name: "Albrook Mall",
          categoryKey: 'shopping',
          categoryLabel: "Shopping & Dining",
          distance: "~1 km (as the toucan flies)",
          driveTime: "~7 minutes by car",
          notes: "Latin America's largest shopping center with retail, supermarkets, food courts, and entertainment.",
          icon: "ShoppingBag"
        },
        {
          id: 'albrook-metro',
          name: "Albrook Metro Station",
          categoryKey: 'transportation',
          categoryLabel: "Public Transit",
          distance: "Approximately 1–2 km",
          driveTime: "Short Uber / taxi ride",
          notes: "Connected to the Albrook transit hub; direct fast access to Panama City's Metro Line 1.",
          icon: "Train"
        },
        {
          id: 'albrook-bus',
          name: "Albrook National Bus Terminal",
          categoryKey: 'transportation',
          categoryLabel: "Intercity Transit",
          distance: "Approximately 1–2 km",
          driveTime: "Around 5–10 minutes by Uber / taxi",
          notes: "Major national transportation terminal for coaches traveling to Boquete, El Valle, and across Panama.",
          icon: "Bus"
        },
        {
          id: 'corozal-railway',
          name: "Panama Canal Railway (Corozal Station)",
          categoryKey: 'transportation',
          categoryLabel: "Historic Railway",
          distance: "Approximately 1 km or slightly more",
          driveTime: "Around 5–10 minutes by car depending on traffic",
          notes: "Historic passenger train station linking the Pacific and Caribbean along the Panama Canal.",
          icon: "TrainTrack"
        },
        {
          id: 'casco-viejo',
          name: "Casco Viejo (Historic Old Town or Casco Antiguo)",
          categoryKey: 'history',
          categoryLabel: "Heritage & Dining",
          distance: "~ 9 km",
          driveTime: "10-20 minutes by car depending on traffic",
          notes: "UNESCO World Heritage colonial center with historic architecture, brick plazas, and fine restaurants.",
          icon: "Landmark"
        },
        {
          id: 'miraflores-locks',
          name: "Panama Canal – Miraflores Locks Visitor Center",
          categoryKey: 'canal',
          categoryLabel: "Canal Engineering",
          distance: "~7 km",
          driveTime: "~10 minutes",
          notes: "World-famous visitor center with lock observation terraces and maritime museum.",
          icon: "Ship"
        },
        {
          id: 'cinta-costera',
          name: "Cinta Costera (Coastal Ribbon)",
          categoryKey: 'nature',
          categoryLabel: "Waterfront Promenade",
          distance: "~7 km",
          driveTime: "10-15 minutes by car depending on traffic",
          notes: "Scenic oceanfront recreational parkway offering spectacular views of the Pacific Bay and city skyline.",
          icon: "Compass"
        },
        {
          id: 'amador-causeway',
          name: "Amador Causeway",
          categoryKey: 'nature',
          categoryLabel: "Ocean Causeway",
          distance: "~ 7 km",
          driveTime: "10–15 minutes by car depending on traffic",
          notes: "Scenic four-island marine roadway with Pacific breezes, bicycle rentals, and waterfront dining.",
          icon: "Waves"
        },
        {
          id: 'biomuseo',
          name: "Biomuseo (Frank Gehry)",
          categoryKey: 'nature',
          categoryLabel: "Biodiversity Museum",
          distance: "~ 7 km",
          driveTime: "10–15 minutes by car depending on traffic",
          notes: "Frank Gehry's iconic biodiversity museum celebrating Panama's role in connecting continents.",
          icon: "Sparkles"
        },
        {
          id: 'parque-metropolitano',
          name: "Parque Natural Metropolitano",
          categoryKey: 'nature',
          categoryLabel: "Rainforest Reserve",
          distance: "~5 km",
          driveTime: "~ 7 minutes by car",
          notes: "Protected tropical forest inside the city, featuring canopy trails, wild sloths, and 200+ bird species.",
          icon: "Trees"
        },
        {
          id: 'cerro-ancon',
          name: "Cerro Ancón (Ancon Hill)",
          categoryKey: 'nature',
          categoryLabel: "Panoramic Landmark",
          distance: "~6 km",
          driveTime: "8-12 minutes by car depending on traffic",
          notes: "Jungle historic landmark hill offering 360-degree views over Panama City and the Canal.",
          icon: "Mountain"
        }
      ],
      gettingAround: {
        tag: "Getting Around",
        title: "Navigating Panama City from Albrook",
        subtitle: "Safe, simple, and versatile transportation options from our front door",
        lead: "Whether you wish to stroll through tree-lined streets, order a door-to-door ride, or embark on a bus or train journey across Panama, getting around from Greg's Place is seamless.",
        modes: [
          {
            id: 'walking',
            title: "Neighborhood Walking",
            summary: "Walk to restaurants, food trucks, shops, and green parks",
            details: "Albrook is a peaceful residential community where guests can walk safely to nearby amenities. Over 15 restaurants and food trucks are within walking distance according to property information, alongside bakeries, convenience shops, and quiet parks. Note that while neighborhood spots are easily walkable, distant city attractions are best reached by vehicle.",
            badge: "Walkable Neighborhood",
            icon: "Footprints"
          },
          {
            id: 'rideshare',
            title: "Uber & InDrive",
            summary: "Convenient door-to-door service directly to the front gate",
            details: "Uber and InDrive operate reliably across Panama City and come directly to our front door. It is widely regarded as the easiest, safest, and most affordable way to explore Casco Viejo, the Canal, dining districts, and museums without the expense or stress of renting a car.",
            badge: "Door-to-Door",
            icon: "Car"
          },
          {
            id: 'taxis',
            title: "Taxis & Private Drivers",
            summary: "Available local cabs or private transfers coordinated with Greg",
            details: "Standard street taxis are easily hailed nearby. For added peace of mind, Greg can also help arrange trustworthy private taxi transportation or personal day drivers for customized sightseeing, business meetings, and regional excursions.",
            badge: "Arranged by Greg",
            icon: "Phone"
          },
          {
            id: 'transit-hub',
            title: "Albrook Transportation Hub",
            summary: "Metro Line 1, intercity buses, and transit connections",
            details: "The nearby Albrook transportation complex provides unified access to: intercity coach buses traveling nationwide, the Albrook Metro station connecting to downtown via Line 1, local municipal buses, and Albrook Mall. An outstanding asset for travelers who want to explore Panama car-free.",
            badge: "Central Transit Hub",
            icon: "Train"
          }
        ]
      },
      airports: {
        tag: "Airport Logistics",
        title: "Panama City Airports: Clear Distinction",
        subtitle: "Understanding the difference between the domestic airport and the international gateway",
        lead: "Panama City has two principal airports. Greg's Place is uniquely situated just minutes from the regional airport and offers convenient bilingual private transfers to the international airport.",
        options: [
          {
            id: 'albrook-pac',
            name: "Marcos A. Gelabert International Airport",
            code: "PAC (Albrook Airport)",
            role: "Domestic & Regional Gateway",
            distance: "Approximately 1–2 km",
            driveTime: "About 3–5 minutes by car / Uber under normal conditions",
            description: "Panama City’s convenient domestic airport, located right here in Albrook. Primarily useful for domestic and regional flights (including Bocas del Toro, San Blas, Chiriquí/David, and Contadora Island) as well as regional charter operations.",
            transferNote: "Greg previously noted approximately 3 minutes by Uber. Exceptional proximity makes morning island flights stress-free.",
            pricingBadge: "3–5 min away · Domestic Flights",
            isPrimary: false
          },
          {
            id: 'tocumen-pty',
            name: "Tocumen International Airport",
            code: "PTY (Panama International)",
            role: "Primary International Hub",
            distance: "Panama City's main international airport",
            driveTime: "Approximately 30 minutes under normal traffic conditions",
            description: "Panama's primary international hub connecting travelers worldwide. Please note: we do not guarantee the 30-minute travel time, as Panama City traffic along the Corredor Sur can vary significantly during peak rush hours.",
            transferNote: "Greg can coordinate a comfortable, bilingual airport pickup directly through trusted driver Jose. Flat rate: $40.",
            pricingBadge: "$40 Bilingual Pickup with Jose",
            isPrimary: true
          }
        ]
      },
      crocodileCreek: {
        tag: "Local Wildlife Walk",
        title: "Crocodile Creek & Nature Corridor",
        subtitle: "A peaceful walking route right inside the Albrook neighborhood",
        description: "Crocodile Creek is located approximately one block away from Greg's Place. A gentle neighborhood walk of around 10 minutes leads to areas along the creek where guests can observe native tropical biodiversity in its natural setting.",
        wildlifeList: "Guests may encounter spectacled caimans / crocodiles basking along the banks, tropical slider turtles resting on submerged logs, and basilisk lizards (known locally as 'Jesus Christ lizards' for their ability to run across water). Waterfowl, herons, egrets, and other tropical river birds can also frequently be observed around the creek.",
        disclaimer: "Wildlife Observation Note: Wildlife sightings are completely natural, vary with weather conditions, water levels, and time of day, and are never guaranteed. Please observe all wildlife safely and respectfully from designated paths."
      },
      closingMessage: {
        headline: "Stay Close to the City Without Staying in the Middle of the Noise",
        lead: "At Greg's Place, you don't have to sacrifice tranquility to enjoy Panama City. Experience an authentic tropical home that combines nature, history, and seamless citywide convenience.",
        points: [
          "Wake up to tropical birdsong, towering rain trees, and fresh canal breezes",
          "Walk safely through a quiet, tree-lined historic residential community",
          "Experience wild coatimundis, tamarins, and colorful birds visiting the property every day",
          "Reach Casco Viejo, the Panama Canal, and downtown attractions in a short Uber ride",
          "Access the Metro, nationwide bus terminal, and Albrook Airport with minimal transit time",
          "Return home to genuine peacefulness, comfort, and quiet at the end of every day"
        ]
      },
      addressTitle: "Our Address & Location",
      address: "Calle Los Guayacanes 247, Albrook, Panama City, Panama",
      district: "Corregimiento de Ancón, Panama City",
      phone: "+507 6503-7828",
      ctaDirections: "Get Directions on Google Maps"
    },
    reviews: {
      tag: "Guest Impressions",
      title: "Words from Our Guests",
      subtitle: "Authentic feedback from travelers who made Greg's Place their home in Panama",
      ratingSummary: "4.9 out of 5.0 Average Guest Rating",
      verifiedTag: "Verified Guest Feedback",
      items: [
        {
          id: '1',
          guest: "David & Sarah M.",
          country: "United States",
          date: "Verified Stay",
          title: "A magical oasis in Panama City!",
          quote: "Staying with Greg was the highlight of our Panama trip. Sitting in the screened patio watching toucans while eating breakfast was unforgettable. Greg is the most welcoming, responsive host you could ask for!",
          highlight: "Welcoming host & bird watching breakfast",
          rating: 5
        },
        {
          id: '2',
          guest: "Christian B.",
          country: "Germany",
          date: "Verified Stay",
          title: "Far better than any hotel in the city",
          quote: "The quiet residential neighborhood in Albrook was peaceful after busy days exploring the Canal and Casco Viejo. The room was spotlessly clean, bed super comfortable, and water pressure excellent!",
          highlight: "Spotless comfort & peaceful neighborhood",
          rating: 5
        },
        {
          id: '3',
          guest: "Elena R.",
          country: "Canada",
          date: "Verified Stay",
          title: "We saw agoutis in the garden every morning!",
          quote: "The wildlife here is real! Greg gave us his hand-drawn map to the creek nearby where we saw caimans and turtles. The home has so much historic character combined with great modern air conditioning.",
          highlight: "Authentic wildlife & historic charm",
          rating: 5
        },
        {
          id: '4',
          guest: "Marc & Isabelle",
          country: "France",
          date: "Verified Stay",
          title: "Breakfast in the middle of nature was stunning",
          quote: "Greg's local recommendations saved us time and money. He is always there when you need help but gives you complete privacy. Highly recommend the Birding & Breakfast experience!",
          highlight: "Invaluable local advice & warm hospitality",
          rating: 5
        }
      ]
    },
    booking: {
      tag: "Reservations",
      title: "Plan Your Stay at Greg's Place",
      subtitle: "Official booking infrastructure powered securely by Lodgify",
      lead: "To provide secure reservations, transparent availability, and direct host rates, all accommodations are booked directly through our verified Lodgify system.",
      features: [
        "Best available direct rates",
        "Instant booking confirmation via Lodgify",
        "Direct communication with Greg prior to arrival",
        "Flexible check-in coordination"
      ],
      ctaPrimary: "Book on Lodgify",
      ctaSecondary: "Contact Greg with Questions",
      modalTitle: "Reserve with Greg's Place in Albrook",
      modalLead: "Select your stay details to proceed to our official Lodgify reservation system, or request a Birding & Breakfast reservation.",
      tabLodgify: "Book Room Stay (Lodgify)",
      tabBirding: "Reserve Birding Breakfast",
      formCheckIn: "Check-in Date",
      formCheckOut: "Check-out Date",
      formGuests: "Number of Guests",
      formRoom: "Preferred Accommodation",
      allRooms: "Any Available Room (4 Rooms Available)",
      forwardBtn: "Check Availability on Lodgify",
      cancelBtn: "Close",
      birdingTitle: "Reserve Your Birding Breakfast",
      birdingLead: "Enjoy breakfast in the middle of nature. Choose between the $39 Visitor Experience or the $25 Special Guest Rate.",
      visitorOption: "Visitor Experience ($39/person)",
      guestOption: "Staying Guest Rate ($25/person)",
      reserveBirdingBtn: "Reserve via WhatsApp with Greg"
    },
    contact: {
      tag: "Get in Touch",
      title: "Contact Greg's Place",
      subtitle: "Have questions about your stay, bird watching, or reserving breakfast?",
      lead: "Greg is always happy to assist with inquiries, transportation recommendations, or special reservation requests.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      messageLabel: "Message or Inquiries",
      sendBtn: "Send Message to Greg",
      successMsg: "Thank you for reaching out! Greg will get back to you shortly.",
      phoneCTA: "Call or WhatsApp Greg",
      directionsCTA: "Get Directions",
      bookingCTA: "Book Your Stay on Lodgify",
      addressHeading: "Location Address",
      phoneHeading: "Direct Telephone / WhatsApp",
      hoursHeading: "Guest Check-In",
      hoursText: "Flexible check-in with advance notice; quiet residential Albrook"
    },
    footer: {
      name: "Greg's Place in Albrook",
      addressLine1: "Calle Los Guayacanes 247",
      addressLine2: "Albrook, Panama City, Panama",
      phone: "+507 6503-7828",
      rights: "© 2026 Greg's Place in Albrook. All rights reserved.",
      tagline: "Stay in history. Wake up to nature.",
      bookCta: "Book Your Stay",
      poweredBy: "Accommodations managed via Lodgify"
    }
  },
  es: {
    nav: [
      { id: 'home', label: 'Inicio' },
      { id: 'rooms', label: 'Habitaciones' },
      { id: 'photo-gallery', label: 'Galería de Fotos' },
      { id: 'story', label: 'The Home' },
      { id: 'why-albrook', label: '¿Por Qué Albrook?' },
      { id: 'birding-breakfast', label: 'Birding, Breakfast and Critters' },
      { id: 'wildlife', label: 'Vida Silvestre' },
      { id: 'whats-nearby', label: 'Qué Hay Cerca' },
      { id: '51-fun-things', label: '51+ Fun Things to Do in Panama' },
      { id: 'reviews', label: 'Opiniones' },
      { id: 'contact', label: 'Contacto' },
    ],
    hero: {
      tag: "Casa Histórica y Experiencia de Vida Silvestre · Albrook, Ciudad de Panamá",
      title: "Greg's Place in Albrook",
      headline: "Viva la Historia. Despierte en la Naturaleza.",
      subtitle:
        "Una casa con más de 80 años de historia en Albrook, rodeada de frondosa vegetación, aves y el ambiente sereno de uno de los tesoros ocultos de la Ciudad de Panamá.",
      primaryCta: "Reservar Ahora",
      secondaryCta: "Explore Greg's Place",
      badge: "Arquitectura Histórica · Más de 80 Años · Aves y Naturaleza",
      availability: {
        title: "Consulte Disponibilidad en Lodgify",
        checkIn: "Llegada",
        checkOut: "Salida",
        guests: "Huéspedes",
        guestOption1: "1 Huésped",
        guestOption2: "2 Huéspedes",
        guestOption3: "3+ Huéspedes",
        checkButton: "Ver Disponibilidad",
        note: "Reservas directas gestionadas con seguridad por Lodgify · Albrook, Panamá"
      }
    },
    propertyStory: {
      tag: "The Home",
      title: "Más de 80 Años de Historia de la Zona del Canal, Rodeada de Naturaleza",
      subtitle: "Una pieza viva del patrimonio de Albrook, vegetación protegida y evolución cuidada",
      lead: "Hospedarse en Greg's Place es adentrarse en un capítulo sereno de la historia viva de Panamá, donde la arquitectura clásica se funde con la calma del dosel tropical.",
      narrativeP1: "La casa original fue construida por el Cuerpo de Ingenieros del Ejército de los Estados Unidos hace más de 80 años para dar soporte a la base aérea de Albrook, actual Aeropuerto Marcos A. Gelabert. El diseño de toda la comunidad cuenta con todos los servicios públicos subterráneos (algo inusual en Panamá), sistema de alcantarillado (inusual en Panamá), una planta de tratamiento de agua cercana y control de inundaciones. Las casas fueron construidas para durar cientos de años e incluyen muros de concreto de 7 sacos, techos de teja y tuberías de cobre en toda la estructura.",
      narrativeP2: "Aunque la mayoría de las casas en Albrook son dúplex o apartamentos, esta residencia unifamiliar especial fue originalmente cuartel de oficiales. Concebida originalmente como una casa de 3 dormitorios y 2 baños (incluyendo cuarto de empleada), fue remodelada profesionalmente para incluir 6 dormitorios y 4 baños (conservando el cuarto de empleada utilizado por la empleada interna). A diferencia de muchas remodelaciones, este proyecto fue diseñado por un arquitecto y ejecutado por profesionales. Se preservó el carácter histórico de la casa, incluyendo la carpintería original y los herrajes de bronce en las puertas.",
      narrativeP3: "Hoy en día, para preservar un ambiente apacible y sin prisas, solo 4 habitaciones y 3 baños se ofrecen en alquiler para huéspedes. Esto asegura que cada visitante disfrute de generoso espacio personal, áreas comunes tranquilas y una hospitalidad atenta y genuina.",
      narrativeP4: "Lo mejor de todo es que las aves y la vida silvestre de toda el área circundante de Albrook están protegidas por ley. Aquí, majestuosos árboles de lluvia, exuberante flora tropical, aves y fauna autóctona prosperan sin ser perturbados. Esto brinda a los huéspedes la oportunidad única de despertar dentro de un apacible enclave histórico junto a la selva pero a solo minutos de la Ciudad de Panamá.",
      highlights: [
        {
          title: "Patrimonio de la Zona del Canal",
          description: "Construida por el Cuerpo de Ingenieros del Ejército de EE. UU., ocasionalmente se puede escuchar la profunda bocina de un gran barco mientras navega por el cercano Canal de Panamá."
        },
        {
          title: "Enclave Protegido por Ley",
          description: "Rodeada por un área donde las aves y la vida silvestre están protegidas por ley, salvaguardando la naturaleza virgen."
        },
        {
          title: "Transformación Cuidadosa",
          description: "Remodelada por un arquitecto de cuartel de oficiales de 3 dormitorios a 6 dormitorios y 4 baños, conservando parte de las maderas y herrajes originales de las puertas."
        },
        {
          title: "Barrio Seguro",
          description: "Puede caminar con total seguridad por Albrook de día y de noche sin preocupaciones. Todos los días verá personas caminando o trotando antes del amanecer y después del anochecer en todo el vecindario."
        }
      ],
      disclaimerBadge: "Puede caminar con total seguridad por Albrook de día y de noche sin preocupaciones. Todos los días verá personas caminando o trotando antes del amanecer y después del anochecer en todo el vecindario.",
      cta: "Ver Habitaciones Disponibles"
    },
    whyAlbrook: {
      tag: "Por Qué Albrook",
      title: "Descubra el Lado de la Ciudad de Panamá Que la Mayoría No Llega a Ver",
      subtitle: "Un tesoro oculto que muchos visitantes aún no conocen",
      lead: "La mayoría de los viajeros solo conocen la Ciudad de Panamá por sus rascacielos de cristal, concurridas avenidas comerciales y tráfico constante. Sin embargo, a corta distancia se encuentra Albrook: un remanso verde y sereno donde la urbe cede el paso a la brisa de la selva tropical.",
      contrastNotice: "A diferencia de los densos distritos hoteleros del centro, Albrook ofrece una atmósfera de auténtica calma, aire puro y frondosos corredores verdes protegidos con abundante vida silvestre en toda la comunidad.",
      pillars: [
        {
          id: 'jungle',
          title: "Cercanía Inmediata a la Selva",
          description: "Situado junto a franjas de bosque tropical protegido, donde la vegetación selvática abraza las calles residenciales.",
          icon: "Trees",
          image: '/pictures/tropical-nature.jpg'
        },
        {
          id: 'surrounded-nature',
          title: "LA FAUNA SILVESTRE VISITA LA PROPIEDAD TODOS LOS DÍAS",
          description: "Todos los días coatíes de nariz blanca, monos tití de Geoffroy, agutíes (ñeques), iguanas y ardillas de cola roja visitan el patio trasero.",
          icon: "Leaf",
          image: '/pictures/coalie.jpeg'
        },
        {
          id: 'clean-air',
          title: "Aire Puro Sin Contaminación Urbana",
          description: "Prácticamente libre de la polución y el ruido que caracterizan a las zonas comerciales del centro.",
          icon: "Wind",
          image: '/pictures/nature.jpg'
        },
        {
          id: 'peace-safety',
          title: "Ambiente Tranquilo y Muy Seguro",
          description: "Uno de los vecindarios residenciales más apacibles y seguros de la capital, ideal para relajantes caminatas matutinas y vespertinas.",
          icon: "ShieldCheck",
          image: '/pictures/neighhouse.jpg'
        },
        {
          id: 'birdlife-sound',
          title: "Aves Abundantes Que Podrá Escuchar",
          description: "Los huéspedes escuchan y disfrutan el canto de las aves silvestres alrededor de la propiedad desde el amanecer hasta el anochecer. Tucanes, loros, pericos, chachalacas, oropéndolas, oropéndolas de Baltimore, tangaras, colibríes, batarás barrados y más de 100 especies conviven en todo el vecindario.",
          icon: "Bird",
          image: '/pictures/a lot of birds.jpg'
        },
        {
          id: 'accessible-harmony',
          title: "Historia, Naturaleza y Conexión Urbana",
          description: "Una armonía única: habite entre naturaleza e historia sin perder la cercanía a los puntos clave de la ciudad.",
          icon: "Compass",
          image: '/pictures/history.jpg'
        }
      ],
      quote: "«No sabía que en Albrook existía un lugar así.»",
      quoteAttribution: "La reacción más frecuente de quienes visitan nuestra casa por primera vez",
      cta: "Conozca Albrook"
    },
    aboutGreg: {
      tag: "Su Anfitrión",
      title: "Conozca a Greg",
      subtitle: "Mucho Más Que un Lugar Donde Dormir",
      lead: "Al cruzar las puertas de Greg's Place, usted no ingresa a un hotel impersonal. Es recibido en un auténtico hogar panameño por un anfitrión que se preocupa genuinamente por su experiencia de viaje.",
      p1: "Greg combina una calidez sincera con un profundo conocimiento de la historia de Panamá, la cultura local y tesoros naturales poco conocidos. Desde recomendaciones de restaurantes del vecindario hasta consejos para recorrer la ciudad, Greg se asegura de que cada huésped se sienta respaldado y en casa.",
      p2: "Ya sea que visite Panamá para observar aves tropicales, hacer escala por Albrook o conocer el Canal de Panamá, Greg brinda una hospitalidad personal que convierte un simple viaje en un recuerdo imborrable.",
      cta: "Descubra la Experiencia",
      stats: [
        { value: "80+", label: "Años de Historia Viva" },
        { value: "4 Cuartos", label: "Alquiler Íntimo" },
        { value: "100%", label: "Área Verde Protegida" },
        { value: "Personal", label: "Atención con Greg" }
      ]
    },
    thePlace: {
      tag: "La Propiedad y Comodidades",
      title: "Construida por Ingenieros, Preservada para la Naturaleza",
      subtitle: "El Encanto Clásico de Más de 80 Años con Confort Contemporáneo",
      lead: "Construida hace más de 80 años por las autoridades de ingeniería de EE. UU., Greg's Place se ubica en la antigua Zona del Canal, donde la vida silvestre está protegida por ley. Diseñada originalmente como una vivienda unifamiliar de 3 dormitorios y posteriormente ampliada a 6 dormitorios y 4 baños, actualmente se ofrecen 4 habitaciones y 2 baños para alquiler de huéspedes con el fin de preservar un ambiente íntimo y sereno.",
      description: "Hemos preservado el espíritu arquitectónico, las generosas proporciones y la ventilada amplitud de la casa original, incorporando a su vez aire acondicionado moderno y silencioso, ropa de cama de felpa, internet de alta velocidad, servicios públicos confiables y la mejor calidad de agua de Panamá.",
      featuresTitle: "Espacios Diseñados para el Descanso",
      amenities: [
        {
          title: "Baños Modernos Impecables",
          description: "Tres baños dedicados para huéspedes con excelente presión de agua y amenidades de cortesía."
        },
        {
          title: "Vistas al Jardín Tropical",
          description: "Despierte rodeado de árboles de plátano y frutas tropicales, flora tropical en flor y el coro de aves canoras nativas."
        },
        {
          title: "Patio con Malla (Screened-In Patio)",
          points: [
            "Cene al aire libre sin insectos",
            "Use su teléfono o computadora portátil en un entorno hermoso con WiFi de alta velocidad",
            "Observe cómo las aves y los animales se acercan a nuestros comederos",
            "Disfrute de las hamacas o juegue al ping-pong",
            "Disfrute del intercambio de libros"
          ]
        },
        {
          title: "Terraza Solárium (Sun Terrace)",
          points: [
            "Tome un poco de sol o permanezca bajo el gran toldo para tener sombra",
            "Utilice nuestra colchoneta de yoga",
            "Juegue con los perros al aire libre"
          ]
        },
        {
          title: "Cocina Compartida y Refrigerios",
          description: "Acceso a una cocina limpia y bien equipada para preparar sus propias comidas.",
          secondaryText: "Cada mañana se preparan dos tipos de delicioso café recién hecho. También disponemos de diversos tipos de té. Tanto el café como el té se ofrecen de cortesía a nuestros huéspedes. ¡Elija entre docenas de tazas singulares según su estado de ánimo del día!"
        },
        {
          title: "Comedor Formal / Sala de Juegos",
          description: "Espacios comunes relajados diseñados para conversar, leer literatura sobre Panamá o disfrutar de juegos amistosos. Además, otro excelente lugar para usar su teléfono o computadora portátil y disfrutar del aire acondicionado."
        },
        {
          title: "Sala de Estar y Salón de Juegos",
          points: [
            "Televisor de 75” de pantalla grande conectado a Netflix y YouTube",
            "Cómodo sofá y sillón especial",
            "Mesa de juegos preparada para ajedrez y damas"
          ]
        },
        {
          title: "Juegos de Mesa",
          points: [
            "Ajedrez (Chess)",
            "Damas (Checkers)",
            "Backgammon",
            "Scrabble",
            "Sequence",
            "Damas Chinas (Chinese Checkers)",
            "Tren Mexicano (Mexican Train)"
          ]
        },
        {
          title: "Servicios Confiables e Internet Veloz",
          description: "Wi-Fi constante de alta velocidad en toda la residencia y sus áreas verdes."
        },
        {
          title: "Área de Barbacoa (Barbecue Area)",
          points: [
            "Parrilla grande a gas propano lista para usar",
            "Parrilla grande a carbón (el huésped suministra el carbón)",
            "¡Escuche la lluvia caer sobre el techo de zinc en el área de BBQ!"
          ]
        },
        {
          title: "Limpieza y Mantenimiento",
          points: [
            "Nuestra empleada interna prepara las habitaciones, limpia la casa a diario y cuida de nuestros dos amigables perros, Bongo y Savvy.",
            "Los jardineros dan mantenimiento a las áreas exteriores.",
            "Técnicos de reparación profesionales disponibles cuando sea necesario."
          ]
        },
        {
          title: "Instalaciones de Lavandería",
          description: "Disponemos de dos lavadoras y dos secadoras. Las tarifas están a la vista. Una de las opciones incluye que nuestra empleada doméstica se encargue de lavar su ropa."
        }
      ]
    },
    rooms: {
      tag: "Alojamiento",
      title: "Habitaciones Tranquilas y Confort Íntimo",
      subtitle: "Cuatro Habitaciones Distintivas en una Residencia Histórica de Más de 80 Años",
      lead: "Cada habitación combina la serenidad de Albrook con comodidades de un hotel boutique, aire acondicionado silencioso, escritorio o mesa con silla, ventilador vertical, internet de alta velocidad, televisor de pantalla grande conectado a Wi-Fi y acceso gratuito a la cuenta de Netflix del anfitrión.",
      ctaView: "Ver Detalles de la Habitación",
      ctaBook: "Reserve Su Estadía",
      ctaCheckAvailability: "Consultar Disponibilidad",
      ctaAskAvailability: "Preguntar Disponibilidad",
      verifiedBadge: "Estadía Histórica Verificada · 4 Habitaciones y 3 Baños Ofrecidos",
      items: [
        {
          id: 'master-bedroom',
          name: "Master Bedroom",
          subtitle: "La Habitación Más Amplia y Exclusiva de Greg's Place",
          image: '/pictures/rooms/master-bedroom/master1.jpg',
          description: "Ubicada en la planta alta, la Master Bedroom cuenta con un pequeño balcón que le permite relajarse en una mesa para dos personas y observar la fauna del jardín. Los monos tití de Geoffroy pueden saltar de los árboles a la baranda de su balcón, donde podrá alimentarlos con trozos de banana directamente de su mano.",
          features: [
            "Cama California King-size",
            "Televisor de 60 pulgadas de pantalla grande",
            "Balcón privado",
            "Refrigerador/congelador pequeño privado",
            "Walk-in closet (vestidor)",
            "Amplio baño privado integrado"
          ],
          bed: "Cama California King-size",
          view: "Vista al Jardín y Dosel Arbóreo",
          capacity: "Hasta 2 Huéspedes",
          locationInHouse: "Ubicada en planta alta",
          bathroomArrangement: "Amplio baño privado integrado (Combinación de tina/ducha)",
          nightlyPrice: 53,
          cleaningFee: 15,
          monthlyRate: 1075,
          airbnbRef: "https://airbnb.com/rooms/51522415"
        },
        {
          id: 'cayuca-room',
          name: "Habitación Cayuca",
          subtitle: "Refugio en Planta Baja con Pieza de Cayuca de Teca",
          image: '/pictures/rooms/cayuca-room/cayuca1.jpg',
          description: "La Habitación Cayuca está ubicada en la planta baja. Cuenta con baño privado con ducha privada, cama queen, televisor de pantalla grande de 55 pulgadas y una sección decorativa de bote hecha con una auténtica cayuca de teca.",
          features: [
            "Cama Queen-size",
            "Televisor de 55 pulgadas de pantalla grande",
            "Baño privado con ducha",
            "Entrada con doble puerta",
            "Pieza decorativa de embarcación hecha de una auténtica cayuca de teca",
            "Ubicada en planta baja"
          ],
          bed: "Cama Queen-size",
          view: "Vista al Jardín y Patio",
          capacity: "Hasta 2 Huéspedes",
          locationInHouse: "Ubicada en planta baja",
          bathroomArrangement: "Baño privado con ducha",
          nightlyPrice: 44,
          cleaningFee: 15,
          monthlyRate: 875,
          airbnbRef: "https://airbnb.com/rooms/26277990"
        },
        {
          id: 'coati-room',
          name: "Habitación Coati",
          subtitle: "Planta Alta con Oportunidades de Avistamiento de Fauna",
          image: '/pictures/rooms/coati-room/cayu1.jpg',
          description: "La Habitación Coati está ubicada en la planta alta. Cuenta con una cómoda cama queen y utiliza el amplio baño compartido para huéspedes con ducha ubicado muy cerca de la habitación. Los huéspedes tienen la oportunidad de ver a Rocky, el coatí de nariz blanca residente, visitando la propiedad.",
          features: [
            "Cama Queen-size",
            "Televisor de 43 pulgadas",
            "Ubicada en planta alta",
            "Utiliza el amplio baño compartido de huéspedes con ducha junto a la habitación",
            "Oportunidad de ver a Rocky, el coatí residente de la propiedad"
          ],
          bed: "Cama Queen-size",
          view: "Vista al Jardín Tropical",
          capacity: "Hasta 2 Huéspedes",
          locationInHouse: "Ubicada en planta alta",
          bathroomArrangement: "Amplio baño compartido para huéspedes con ducha ubicado junto a la habitación",
          nightlyPrice: 40,
          cleaningFee: 15,
          monthlyRate: 795,
          airbnbRef: "https://airbnb.com/rooms/25668632"
        },
        {
          id: 'owl-room',
          name: "Habitación Owl",
          subtitle: "Habitación en Planta Alta con Entrada de Doble Puerta",
          image: '/pictures/rooms/owl-room/o1.jpg',
          description: "La Habitación Owl está ubicada en la planta alta. Cuenta con una elegante entrada de doble puerta, cama queen, televisor de 50 pulgadas de pantalla grande y utiliza el amplio baño compartido para huéspedes con ducha ubicado muy cerca de la habitación.",
          features: [
            "Cama Queen-size",
            "Televisor de 50 pulgadas de pantalla grande",
            "Entrada con elegante doble puerta",
            "Utiliza el amplio baño compartido de huéspedes con ducha junto a la habitación",
            "Ubicada en planta alta"
          ],
          bed: "Cama Queen-size",
          view: "Vista Apacible al Entorno Residencial y Dosel",
          capacity: "Hasta 2 Huéspedes",
          locationInHouse: "Ubicada en planta alta",
          bathroomArrangement: "Amplio baño compartido para huéspedes con ducha ubicado junto a la habitación",
          nightlyPrice: 36,
          cleaningFee: 15,
          monthlyRate: 745,
          airbnbRef: "https://airbnb.com/h/greg-owl"
        }
      ],
      sharedAmenitiesTitle: "Cada Habitación Incluye",
      sharedAmenitiesSubtitle: "Comodidades Estándar en las Cuatro Habitaciones de Huéspedes",
      sharedAmenities: [
        "Aire acondicionado",
        "Abanico (ventilador)",
        "Mesa",
        "Silla",
        "Lámpara",
        "Espacio de trabajo adecuado para computadora",
        "Televisor de pantalla grande",
        "Conexión Wi-Fi de alta velocidad",
        "Acceso a servicios de streaming gratuitos como YouTube en alta definición",
        "Netflix disponible a través de la cuenta del anfitrión"
      ],
      pricingTableTitle: "Tarifas por Noche y Tarifa Única de Limpieza",
      pricingTableSubtitle: "Precios claros y transparentes sin cargos ocultos",
      bookDirectTitle: "Reserve Aquí Directo y Ahorre",
      bookDirectBody: "Los precios aquí mostrados tienen descuento respecto a los precios en línea estándar de estos mismos alojamientos en otros servicios de reserva como Airbnb y booking.com. Además, evita pagar tarifas adicionales como impuestos y tarifas de reserva.\n\n¿Tiene problemas para conseguir las fechas deseadas? Comuníquese con Greg directamente. Es posible que pueda combinar habitaciones para satisfacer sus deseos.",
      longStayTitle: "Descuentos por Estadías Prolongadas",
      longStaySubtitle: "Descuentos automáticos progresivos en estancias prolongadas",
      longStayDiscounts: [
        { tier: "7–14 días", discount: "10% de descuento", note: "Aplicable a estancias entre 7 y 14 días" },
        { tier: "15–30 días", discount: "15% de descuento", note: "Aplicable a estancias entre 15 y 30 días" },
        { tier: "31–45 días", discount: "20% de descuento", note: "Aplicable a estancias entre 31 y 45 días" },
        { tier: "45+ días", discount: "25% de descuento", note: "Aplica a estadías de 45 días o más / más de 45 días" }
      ],
      monthlyRatesTitle: "Tarifas Mensuales",
      monthlyRatesSubtitle: "Opciones de Residencia de Larga Temporada",
      monthlyNotice: "Mínimo de Seis Meses Requerido",
      monthlyNoticeSub: "Se requiere un plazo mínimo de seis meses de arrendamiento para estas tarifas mensuales. No aplican para alquileres mensuales de corto plazo.",
      monthlyRates: [
        { roomName: "Master Bedroom", monthlyPrice: 1075, location: "Planta Alta · Cama California King · Baño Privado y Balcón" },
        { roomName: "Habitación Cayuca", monthlyPrice: 875, location: "Planta Baja · Cama Queen · Baño Privado" },
        { roomName: "Habitación Coati", monthlyPrice: 795, location: "Planta Alta · Cama Queen · Baño Compartido Amplio" },
        { roomName: "Habitación Owl", monthlyPrice: 745, location: "Planta Alta · Cama Queen · Baño Compartido Amplio" }
      ],
      laundryTitle: "Servicio de Lavandería para Huéspedes",
      laundrySubtitle: "Instalaciones de Lavandería en la Propiedad",
      laundryEquipment: "2 lavadoras y 2 secadoras en la propiedad",
      laundryNote: "Los servicios de lavandería no están incluidos en el precio de la habitación.",
      laundryOptions: [
        {
          title: "Lavandería Autoservicio",
          price: "$7 / tanda",
          description: "Incluye jabón y suavizante provistos por la propiedad.",
          badge: "Insumos Incluidos"
        },
        {
          title: "Autoservicio con Sus Propios Insumos",
          price: "$5 / tanda",
          description: "El huésped provee su propio jabón y suavizante.",
          badge: "Traiga Sus Insumos"
        },
        {
          title: "Servicio de Lavandería por María",
          price: "$10 / tanda",
          description: "María lava su ropa utilizando los insumos de la propiedad.",
          badge: "Servicio Completo"
        }
      ]
    },
    birdingBreakfast: {
      tag: "Experiencia Matutina Exclusiva",
      title: "Birding, Breakfast & Critters Experience",
      subtitle: "Venga por el desayuno. Quédese por las aves y la fauna.",
      lead: "Los huéspedes pueden disfrutar de una experiencia matutina única en Greg's Place que combina observación de aves, desayuno recién preparado y avistamiento de fauna y animales en los alrededores de la propiedad.",
      experienceNote: "Una experiencia matutina íntima y auténtica, rodeada de abundante vegetación tropical y el armonioso canto de las aves.",
      airbnbExperienceRef: "https://www.airbnb.com/experiences/635171",
      experiencePillars: [
        { title: "Observación de Aves", desc: "Observe y escuche tucanes, pericos, colibríes y más de 100 especies de aves cantando junto al patio." },
        { title: "Desayuno Tropical", desc: "Café panameño recién colado, infusiones, batidos con frutas de temporada y platos matutinos caseros." },
        { title: "Avistamiento de Fauna y Animales", desc: "Descubra agoutis (ñeques), Rocky el coatí, perezosos y lagartijas en los jardines." }
      ],
      offers: [
        {
          id: 'visitor',
          title: "Visitantes Externos",
          badge: "Para Visitantes Sin Alojamiento",
          price: 39,
          priceNote: "por persona · Requiere reserva matutina",
          audience: "Para visitantes que no se hospedan en la propiedad",
          tagline: "Desayuno en medio de la naturaleza",
          description: "Acompáñenos en una experiencia matutina especial en Albrook que combina observación de aves, desayuno tropical fresco y avistamiento de fauna en nuestro patio con malla.",
          features: [
            "Observación de aves con más de 100 especies activas en Albrook",
            "Desayuno tropical completo con café panameño recién colado",
            "Batidos elaborados con frutas cultivadas en el jardín",
            "Avistamiento de fauna y animales en el jardín y alrededores",
            "Desayuno en patio con malla — 100% libre de insectos",
            "Orientación y recomendaciones de Greg sobre fauna local"
          ],
          cta: "Contacte a Greg para Organizar la Experiencia",
          highlighted: false
        },
        {
          id: 'guest',
          title: "Huéspedes Alojados en Greg's Place",
          badge: "Tarifa Especial para Huéspedes",
          price: 25,
          priceNote: "por persona · Tarifa preferencial exclusiva",
          audience: "Oferta exclusiva para huéspedes hospedados en la casa",
          tagline: "Despierte con la naturaleza, disfrute el desayuno",
          description: "Los huéspedes que se alojan en Greg's Place disfrutan de la experiencia completa de aves, desayuno y fauna a una tarifa preferencial exclusiva, a pasos de su habitación.",
          features: [
            "Tarifa especial con descuento exclusiva para huéspedes ($25 vs $39)",
            "Observación de aves, desayuno artesanal y avistamiento de fauna",
            "Desayuno fresco servido en el apacible patio con malla",
            "Café de Panamá, infusiones y batidos naturales de frutas",
            "Importante: Los huéspedes que pernocten deben avisar a Greg la noche anterior y pagar en efectivo en USD",
            "Contacte a Greg para añadirlo a su mañana"
          ],
          cta: "Contacte a Greg para Organizar la Experiencia",
          highlighted: true
        }
      ],
      importantNotice: "Importante: Los huéspedes que pernocten en Greg's Place deben avisar a Greg la noche anterior y pagar en efectivo en dólares estadounidenses (USD).",
      quote: "Observar aves tropicales mientras saborea café fresco de Panamá en el patio con malla es una vivencia difícil de olvidar.",
      ctaGeneral: "Reserve Su Desayuno con Aves",
      bullets: [
        {
          title: "Desayuno en Patio con Malla",
          description: "Disfrute de su comida matutina en un patio ventilado y protegido de insectos, rodeado de frondosa vegetación."
        },
        {
          title: "Batidos con Frutas del Jardín",
          description: "Saboree refrescantes batidos preparados con frutas cosechadas directamente en los árboles de la propiedad."
        },
        {
          title: "Observación de Aves Silvestres",
          description: "Observe aves tropicales, colibríes y aves cantoras sin levantarse de su asiento de desayuno."
        },
        {
          title: "Mapa de Fauna Diseñado por Greg",
          description: "Greg le entrega un mapa ilustrado a mano que señala una quebrada natural a corta distancia caminando."
        },
        {
          title: "Caimanes, Tortugas y Basiliscos",
          description: "A corta distancia a pie podrá observar babillas, tortugas jicoteas y lagartos basilisco sobre troncos al sol."
        }
      ],
      cta: "Descubra Aves y Desayuno"
    },
    wildlife: {
      tag: "Hábitat Natural",
      title: "Vida Silvestre a Su Puerta",
      subtitle: "Un ecosistema auténtico y en libertad en el corazón de Albrook",
      lead: "Debido a que Albrook colinda con la selva y áreas verdes protegidas cercanas al Parque Natural Metropolitano, diversos animales de Panamá visitan con frecuencia nuestros jardines. Respetamos la fauna en total libertad, sin atracciones artificiales ni animales en cautiverio.",
      disclaimer: "Nota sobre avistamientos: La fauna aparece de manera silvestre según la hora del día y la época. No se garantiza la presencia de cada especie en todo momento; cada encuentro es un descubrimiento genuino.",
      animals: [
        {
          id: 'toucans',
          name: "Tucanes Pico Iris y Aves Tropicales",
          scientificOrLocal: "Ramphastos sulfuratus · Keel-billed Toucan",
          frequency: "Visitantes frecuentes del jardín",
          habitat: "Copas de árboles del jardín y ramas con frutos",
          category: 'birds',
          description: "Reconocidos por su pico multicolor, parejas de tucanes frecuentan los árboles de nuestro jardín en las mañanas y al atardecer."
        },
        {
          id: 'coatimundi',
          name: "Coatimundis (Gatos Solos)",
          scientificOrLocal: "Nasua narica · White-nosed Coati",
          frequency: "Avistamientos habituales de paso",
          habitat: "Perímetro del jardín y suelo",
          category: 'mammals',
          description: "Parientes curiosos y ágiles del mapache, recorren los bordes del jardín buscando alimento con sus característicos hocicos y colas anilladas."
        },
        {
          id: 'agouti',
          name: "Ñeques (Agutíes Centroamericanos)",
          scientificOrLocal: "Dasyprocta punctata · Central American Agouti",
          frequency: "Visitantes diarios muy comunes",
          habitat: "Césped y sombra de arbustos",
          category: 'mammals',
          description: "Estos simpáticos roedores de pelaje brillante son visitantes diarios del césped, mordisqueando semillas caídas durante el desayuno."
        },
        {
          id: 'sloth',
          name: "Perezosos de Tres Dedos",
          scientificOrLocal: "Bradypus variegatus · Three-toed Sloth",
          frequency: "Avistamientos pacíficos ocasionales",
          habitat: "Árboles de guarumo y ramas altas",
          category: 'mammals',
          description: "Ocasionalmente se observan desplazándose con calma por la copa de los árboles circundantes, símbolo de la tranquilidad de la selva panameña."
        },
        {
          id: 'monkeys',
          name: "Monos Tití y Monos Aulladores",
          scientificOrLocal: "Saguinus geoffroyi & Alouatta palliata",
          frequency: "Visitantes ocasionales en corredores arbóreos",
          habitat: "Corredores de vegetación en Albrook",
          category: 'mammals',
          description: "Pequeños monos tití y aulladores hacen apariciones periódicas a lo largo de los árboles que bordean el vecindario residencial."
        },
        {
          id: 'caiman',
          name: "Babillas / Caimanes de Anteojos (Caminata Corta)",
          scientificOrLocal: "Caiman crocodilus · Spectacled Caiman",
          frequency: "Habituales en la quebrada local",
          habitat: "Cuerpo de agua natural cerca de la casa",
          category: 'reptiles',
          description: "A corta distancia a pie guiado por el mapa de Greg, se pueden observar pequeñas babillas descansando apaciblemente en las orillas del agua."
        },
        {
          id: 'jesus-christ-lizard',
          name: "Basilisco Común (Lagarto Jesucristo)",
          scientificOrLocal: "Basiliscus basiliscus · Common Basilisk",
          frequency: "Común en la quebrada y orillas del jardín",
          habitat: "Ramas sobre el agua y rocas ribereñas",
          category: 'reptiles',
          description: "Famoso por su capacidad de correr sobre la superficie del agua cuando se sobresalta, este singular lagarto se observa fácilmente junto a la quebrada."
        }
      ]
    },
    whyStay: {
      tag: "La Diferencia Esencial",
      title: "Por Qué Hospedarse en Greg's Place",
      subtitle: "Una casa histórica rodeada de naturaleza en el corazón de Albrook",
      benefits: [
        {
          id: 'history',
          title: "Más de 80 Años de Historia Viva",
          description: "Una auténtica residencia histórica construida por ingenieros de EE. UU. con solidez legendaria en Albrook protegido.",
          icon: "Home"
        },
        {
          id: 'nature',
          title: "Naturaleza y Aves Que Podrá Escuchar",
          description: "Abundantes aves tropicales, ñeques y frondosa flora rodean la casa, brindándole un verdadero refugio natural cerca de la ciudad.",
          icon: "Feather"
        },
        {
          id: 'peace',
          title: "Paz Profunda y Aire Puro",
          description: "Un santuario residencial completamente alejado del ruido urbano, el tráfico denso y la polución del centro.",
          icon: "ShieldCheck"
        },
        {
          id: 'intimacy',
          title: "Alquiler Íntimo de 4 Habitaciones",
          description: "Solo 4 habitaciones y 3 baños se ofrecen en alquiler para huéspedes, garantizando privacidad, tranquilidad y trato personal.",
          icon: "Sparkles"
        },
        {
          id: 'personal',
          title: "Hospitalidad Personal con Greg",
          description: "Disfrute de la calidez de Greg, comunicación directa y recomendaciones a la medida para explorar Panamá.",
          icon: "HeartHandshake"
        },
        {
          id: 'breakfast',
          title: "Ritual de Aves y Desayuno",
          description: "Saboree batidos de frutas del jardín y café panameño en el patio con malla mientras observa aves en la copa de los árboles.",
          icon: "Coffee"
        }
      ]
    },
    whatsNearby: {
      tag: "Guía de Destinos",
      title: "Qué Hay Cerca",
      subtitle: "Ubicación Central Cerca de la Mayoría de las Atracciones Turísticas",
      subtitleNote: "hace de Greg’s Place una excelente base para su viaje a Panamá.",
      lead: "Greg’s Place es la base tranquila y estratégica perfecta para descubrir la rica historia, la biodiversidad, la cultura urbana y la mayoría de las atracciones turísticas de la Ciudad de Panamá.",
      categories: [
        { key: 'all', label: 'Todos los Puntos' },
        { key: 'canal', label: 'Canal e Ingeniería' },
        { key: 'history', label: 'Historia Colonial' },
        { key: 'nature', label: 'Naturaleza y Parques' },
        { key: 'waterfront', label: 'Paseo Marítimo y Vistas' },
        { key: 'shopping', label: 'Compras y Conectividad' }
      ],
      places: [
        {
          id: 'albrook-mall',
          name: "Albrook Mall\n“El Centro Comercial Más Grande de América Latina”",
          category: "Compras y Gastronomía",
          categoryKey: "shopping",
          distance: "~1 km (como vuela el tucán)",
          driveTime: "~7 minutos en auto",
          description: "Este amplio centro comercial totalmente climatizado cuenta con más de 700 tiendas y quioscos. Personas de todo Panamá y países vecinos llegan en autobús o metro para disfrutar del centro comercial. Cuenta con cientos de tiendas de marcas, diversas plazoletas gastronómicas, supermercados completos, farmacias, servicios bancarios y entretenimiento familiar.",
          futureNote: "Un excelente destino diurno cuando hace demasiado calor (o llueve) para estar al aire libre. ¡Disfrute visitando las múltiples entradas con sus enormes estatuas de animales!",
          highlights: [
            "Más de 700 tiendas departamentales y marcas globales",
            "Totalmente climatizado (aire acondicionado)",
            "Supermercados, farmacias y servicios esenciales",
            "Extensas opciones gastronómicas y restaurantes casuales",
            "Entretenimiento como salas de cine, bolera y casino",
            "Conexión directa bajo techo con la Terminal de Autobuses de Albrook (que cuenta con conexión directa bajo techo con la Estación del Metro de Albrook)"
          ],
          iconType: "shopping"
        },
        {
          id: 'panama-canal',
          name: "Canal de Panamá – Centro de Visitantes de Miraflores",
          category: "Ingeniería Emblemática",
          categoryKey: "canal",
          distance: "~7 km",
          driveTime: "~10 minutos",
          description: "Una de las mayores maravillas de la ingeniería moderna mundial. Desde sus terrazas de observación escalonadas, presencie cómo inmensos buques portacontenedores, quimiqueros y cruceros internacionales son elevados y descendidos entre los océanos Atlántico y Pacífico.",
          futureNote: "No se pierda la película documental 3D / IMAX de 45 minutos narrada por Morgan Freeman. Horarios disponibles aquí: https://visitcanaldepanama.com/en/points-of-interest/miraflores-visitor-center/",
          highlights: [
            "Terrazas con vista directa y cercana a las esclusas activas",
            "Narración en vivo en español e inglés durante los tránsitos",
            "Museo interactivo sobre la colosal historia de su construcción",
            "Película documental galardonada en 3D / IMAX en el lugar"
          ],
          iconType: "canal"
        },
        {
          id: 'casco-viejo',
          name: "Casco Viejo (Casco Antiguo o Centro Histórico)",
          category: "Cultura y Patrimonio",
          categoryKey: "history",
          distance: "~ 9 km",
          driveTime: "10-20 minutos en auto según el tráfico",
          description: "El barrio colonial de la Ciudad de Panamá, declarado Patrimonio de la Humanidad por la UNESCO. Destaca por sus calles adoquinadas, su arquitectura española del siglo XVII hermosamente restaurada, plazas históricas, cafés de especialidad, galerías de arte y una gastronomía de nivel internacional.",
          futureNote: "Ideal para visitar al atardecer o por la noche cuando está más fresco.\nEl estacionamiento y el tráfico son complicados, por lo que Uber es la mejor opción.",
          highlights: [
            "Arquitectura colonial protegida por la UNESCO",
            "Plazas históricas: Plaza Mayor, Plaza de Francia y Plaza Bolívar",
            "Epicentro culinario con exclusivas terrazas en azoteas (rooftops)",
            "Tiendas de artesanías auténticas y cafés de Geisha panameño",
            "Museos"
          ],
          iconType: "heritage"
        },
        {
          id: 'amador-causeway',
          name: "Calzada de Amador (Causeway)",
          category: "Paseo Costero y Bahía",
          categoryKey: "waterfront",
          distance: "~ 7 km",
          driveTime: "10–15 minutos en auto según el tráfico",
          description: "Paseo marítimo construido con roca excavada durante la construcción del Canal de Panamá, que une cuatro islas del Pacífico con tierra firme. Ideal para paseos en bicicleta, caminatas al atardecer frente al mar, brisas marinas refrescantes y vista a los buques fondeados esperando entrar al Canal.",
          futureNote: "Se disfruta mejor por la mañana o al atardecer cuando está más fresco.",
          highlights: [
            "Vistas ininterrumpidas a los barcos ingresando al Canal de Panamá",
            "Sendero peatonal y ciclovía de 6 kilómetros junto al océano",
            "Alquiler de bicicletas y cuadriciclos para toda la familia",
            "Restaurantes de mariscos y gastronomía al aire libre frente al mar",
            "Tiendas de helados y dulces",
            "Marina Flamenco"
          ],
          iconType: "landmark"
        },
        {
          id: 'biomuseo',
          name: "Biomuseo (Museo de la Biodiversidad)",
          category: "Naturaleza y Ciencia",
          categoryKey: "nature",
          distance: "~ 7 km",
          driveTime: "10–15 minutos en auto según el tráfico",
          description: "La única obra arquitectónica del prestigioso arquitecto Frank Gehry en toda América Latina. Situado en la entrada de la Calzada de Amador, su colorido diseño exterior e interiores creados junto al Instituto Smithsonian narran cómo el surgimiento del istmo panameño cambió la biodiversidad del planeta.",
          futureNote: "El estacionamiento es escaso, por lo que Uber es la mejor opción.\nCuenta con aire acondicionado, por lo que es una excelente actividad diurna. Después puede continuar por la Calzada de Amador para comer o beber algo rico.",
          highlights: [
            "Famoso diseño exterior de autor por Frank Gehry",
            "8 galerías inmersivas diseñadas con el Instituto Smithsonian",
            "Acuarios marinos gigantes del Caribe y del Pacífico",
            "Parque botánico con senderos de vegetación tropical autóctona"
          ],
          iconType: "nature"
        },
        {
          id: 'cinta-costera',
          name: "Cinta Costera",
          category: "Paseo Marítimo y Vistas",
          categoryKey: "waterfront",
          distance: "~7 km",
          driveTime: "10-15 minutos en auto según el tráfico",
          description: "El parque costero urbano más emblemático de la ciudad, bordeando la Bahía de Panamá sobre la Avenida Balboa. Ofrece amplios senderos peatonales, ciclovías segregadas, áreas verdes, miradores y la vista más espectacular del perfil de rascacielos del centro financiero.",
          futureNote: "Mi ciclovía favorita de la ciudad; la Calzada de Amador le sigue muy de cerca. No se pierda el Mercado del Marisco, ideal en las mañanas antes de que se agote la pesca del día.",
          highlights: [
            "7 km de senderos frente a la bahía para trote y bicicleta",
            "La vista postal más icónica de los rascacielos modernos de Panamá",
            "Áreas de descanso, zonas verdes y quioscos de comida tradicional",
            "Conexión directa y peatonal hacia el Casco Viejo y el Mercado del Marisco",
            "2.5 km de ciclovía y sendero se extiende sobre el mar bordeando la península del Casco Viejo."
          ],
          iconType: "landmark"
        },
        {
          id: 'parque-metropolitano',
          name: "Parque Natural Metropolitano",
          category: "Reserva de Selva Tropical",
          categoryKey: "nature",
          distance: "~5 km",
          driveTime: "~ 7 minutos en auto",
          description: "Una reserva de bosque tropical de 232 hectáreas ubicada dentro del perímetro de la Ciudad de Panamá, vecina inmediata de Albrook. Conocido como el pulmón verde de la urbe, ofrece senderos sombreados donde es habitual avistar perezosos, coatíes, agutíes (ñeques), diversas especies de monos, tucanes y más de 200 especies de aves autóctonas.",
          futureNote: "Pídale prestados a Greg binoculares de calidad antes de salir. Pase primero por el Centro de Visitantes para pagar la entrada ($5 extranjeros y $2 nacionales) y recoger su mapa de senderos.",
          highlights: [
            "Auténtica selva tropical primaria protegida dentro de la ciudad",
            "Más de 200 especies de aves, además de perezosos, ñeques y monos",
            "Senderos ecológicos señalizados bajo frondosas copas de árboles",
            "Mirador Los Trillizos con vista panorámica de la bahía y el Canal"
          ],
          iconType: "nature"
        },
        {
          id: 'cerro-ancon',
          name: "Cerro Ancón",
          category: "Naturaleza y Patrimonio",
          categoryKey: "nature",
          distance: "~6 km",
          driveTime: "8-12 minutos en auto según el tráfico",
          description: "Histórico cerro selvático de 199 metros de altura con una vista privilegiada de 360 grados sobre la Ciudad de Panamá y la entrada al Canal. Intacto del desarrollo inmobiliario, cuenta con una carretera sombreada ideal para caminatas mañaneras, avistamiento de fauna (perezosos, ciervos, tucanes y coatíes) y la enorme bandera panameña que ondea en su cima.",
          futureNote: "Pídale prestados a Greg binoculares de calidad antes de salir. Si hay un guía en la cima, pídale que le señale los animales. ¡Déjele una buena propina de varios dólares si le muestra algo interesante!",
          highlights: [
            "Mirador panorámico de 360° sobre la ciudad, el Canal y el Puente de las Américas",
            "La majestuosa bandera nacional ondea en el punto más alto",
            "Camino pavimentado y arbolado, preferido para caminatas y observación de aves",
            "Avistamientos frecuentes de perezosos, venados y coatíes al borde del camino"
          ],
          iconType: "mountain"
        },
        {
          id: 'panama-city-base',
          name: "Exploración Integral de Panamá",
          category: "Ciudad y Cultura",
          categoryKey: "city",
          distance: "Ubicación Central en Albrook",
          driveTime: "10–20 minutos hacia los principales distritos urbanos",
          description: "Greg’s Place funciona como el trampolín perfecto para recorrer la metrópoli panameña. Tras explorar los distritos financieros, museos, paseos costeros y la vida nocturna del centro, regrese a descansar a un vecindario fresco, lleno de árboles y en total serenidad.",
          futureNote: "Se recomienda ampliamente usar Uber. Descargue la aplicación antes de viajar. Configúrela para pagar con tarjeta de crédito (Uber Cash) para evitar líos con el efectivo. ¡Los conductores nunca tienen cambio!",
          highlights: [
            "Rápido acceso a zonas financieras, culturales y gastronómicas",
            "Servicio directo de Uber e InDrive hacia y desde la puerta del anfitrión",
            "Un refugio sereno completamente aislado del tráfico denso del centro",
            "Seguridad, aire puro y descanso garantizado al volver a casa"
          ],
          iconType: "city"
        },
        {
          id: 'walk-neighborhood',
          name: "Caminar y Explorar el Vecindario",
          category: "Vida en Albrook",
          categoryKey: "nature",
          distance: "Directo desde Greg's Place",
          driveTime: "Caminando / A pie",
          description: "Salga directamente a recorrer el dosel residencial de Albrook, su arquitectura histórica de la Zona del Canal y sus exuberantes senderos verdes.",
          futureNote: "Pídale al anfitrión unos binoculares de calidad prestados.",
          highlights: [
            "Puede caminar durante muchos kilómetros (¡pero ninguna milla!)",
            "Los agutíes (ñeques) se ven con frecuencia por la mañana y al atardecer antes de oscurecer",
            "Puede toparse con coatíes, monos tití de Geoffroy o iguanas en cualquier momento del día",
            "Numerosos parques",
            "Casas de gran interés",
            "Crocodile Creek (Quebrada de los Caimanes)",
            "  Caimanes y cocodrilos de agua salada",
            "  Tortugas jicoteas tropicales (sliders)",
            "  Lagartos Jesucristo (basiliscos) que corren sobre el agua",
            "  Nutrias",
            "  Aves acuáticas: cigüeñas, garzas, garcetas, cormoranes, jacanas, teros (lapwings), patos silbadores, etc."
          ],
          iconType: "nature"
        },
        {
          id: 'night-walk',
          name: "Caminata Nocturna (Night Walk)",
          category: "Vida Silvestre y Naturaleza",
          categoryKey: "nature",
          distance: "Directo desde Greg's Place",
          driveTime: "Al atardecer y durante la noche",
          description: "El anfitrión ha visto los siguientes animales nocturnos muy cerca de su casa: agutí (ñeque), oso hormiguero, armadillo, capibara, puercoespín, venado, coyote, ratas trepadoras, comadreja y paca.",
          futureNote: "Pídale al anfitrión una linterna potente prestada.",
          highlights: [
            "Escuche los insectos de la selva, ranas y sapos al atardecer. En ciertas épocas del año, ¡pueden ser bastante ruidosos! También hay luciérnagas en ciertas épocas del año.",
            "Observe murciélagos frugívoros e insectívoros volando erráticamente por la noche.",
            "Vea al chotacabras mantenerse cerca del suelo con su brillante ojo amarillo reflejando su linterna.",
            "Podría ver los ojos anaranjados de caimanes en el río o un capibara saliendo de la quebrada para cruzar la calle."
          ],
          iconType: "night"
        },
        {
          id: '51-fun-things',
          name: "51+ Cosas Divertidas para Hacer en la Ciudad de Panamá con Fotos",
          category: "Exploración Urbana",
          categoryKey: "city",
          distance: "Guía Destacada de la Ciudad",
          driveTime: "51+ Actividades con Fotos",
          description: "Descubra una guía visual y detallada con las mejores actividades, excursiones históricas, paseos por el Canal, reservas de fauna y miradores panorámicos en la Ciudad de Panamá.",
          prominentTitleLines: [
            "51+ Fun Things to Do",
            "in and around",
            "Panama City, Panama",
            "with",
            "Photos"
          ],
          linkUrl: "https://tourscanner.com/things-to-do-in-panama-city-panama",
          iconType: "link"
        },
        {
          id: 'artesan-center',
          name: "Centro de Artesanías (Artesan Center)",
          category: "Artesanías y Cultura",
          categoryKey: "shopping",
          distance: "~5 km",
          driveTime: "~6 minutos",
          description: "Centro artesanal representativo con amplia oferta de artesanías auténticas panameñas, textiles tradicionales y recuerdos culturales.",
          futureNote: "En Uber se llama “Centro de artesanias Cardenas”. Queda a poca distancia a pie del restaurante favorito de Greg: Maagoos Fish Tacos and More (atendido por una familia de pescadores submarinos).",
          iconType: "crafts"
        },
        {
          id: 'panama-canal-railway',
          name: "Panama Canal Railway Station",
          category: "Ferrocarril Histórico y Excursión",
          categoryKey: "canal",
          distance: "~ 5 km",
          driveTime: "~8 minutos",
          description: "Tome el histórico ferrocarril del Canal de Panamá a través del istmo, a lo largo del Canal de Panamá y cruzando la selva tropical. Su destino de una hora es Colón, en el lado caribeño. Puede regresar en este mismo tren más tarde ese día.\nConsulte los detalles aquí: https://www.panarail.com/",
          futureNote: "Este es un viaje maravilloso que vale la pena hacer. Elija el vagón con cúpula (Dome Car) para disfrutar de la mejor vista. Considere contratar a José, el taxista de confianza de Greg, para que lo reciba, le dé un recorrido por Colón, lo lleve al Centro de Visitantes de las Esclusas de Gatún y luego a Portobelo para conocer el pueblo histórico y su fuerte, almorzar en Portobelo y regresarlo a Greg’s Place.",
          iconType: "train"
        },
        {
          id: 'stores-and-facilities',
          name: "Tiendas e Instalaciones (Stores and Facilities)",
          category: "Servicios del Vecindario",
          categoryKey: "city",
          distance: "Comunidad de Albrook",
          driveTime: "2–7 min en auto o caminando",
          description: "Servicios esenciales diarios, compras y centros profesionales ubicados en las inmediaciones de Greg's Place:",
          facilities: [
            {
              name: "Aeropuerto Marcos A. Gelabert",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Embajada de los Estados Unidos",
              time: "~7 minutos en auto"
            },
            {
              name: "Mercado Agrícola / de Productores (frutas, verduras, huevos)",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Supermercado El Rey",
              note: "(el supermercado más grande de Albrook, donde suele comprar el anfitrión)",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Supermercado Super Carnes",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Kotowa Coffee House",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Alquiler de Autos (Car Rentals)",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Gimnasio Power Club",
              time: "~4 minutos en auto o ~16 minutos caminando"
            },
            {
              name: "Full Tech (Servicio técnico teléfonos/computadoras)",
              time: "~3 minutos en auto o ~12 minutos caminando"
            },
            {
              name: "Farmacia Arrocha",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Clínica Médica (Clínica Albrook)",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Dentista (Clínica Arango Orillac Albrook)",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Barberías",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Salones de Belleza",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Tintorería / Costurera (Dry Cleaners/Seamstress)",
              time: "~2 minutos en auto u 8 minutos caminando"
            },
            {
              name: "Mail Boxes, Etc.",
              time: "~2 minutos en auto u 8 minutos caminando"
            }
          ],
          iconType: "services"
        }
      ],
      diningCallout: {
        title: "Más de 15 Restaurantes y Food Trucks a Distancia Caminable",
        description: "Los huéspedes de Greg's Place disfrutan de variadas opciones culinarias dentro del mismo vecindario. Más de 15 restaurantes y food trucks se encuentran a corta distancia a pie, ofreciendo comida típica panameña, panaderías artesanales, cafés y gastronomía internacional, además de decenas de opciones más a pocos minutos en Uber.",
        note: "Poder salir a cenar caminando es uno de los grandes privilegios de alojarse en Albrook."
      },
      expandHint: "Puntos de interés adicionales, datos de transporte y recorridos personalizados pueden consultarse directamente con Greg."
    },
    location: {
      tag: "Ubicación Residencial Privilegiada",
      title: "Albrook: Un Oasis Verde e Histórico en la Ciudad",
      subtitle: "Naturaleza tropical, patrimonio del Canal y serenidad residencial a minutos del centro",
      lead: "Greg's Place se ubica en Albrook, un enclave residencial verde, apacible e impregnado de historia en la Ciudad de Panamá. A diferencia de los sectores hoteleros densos del centro urbano, caracterizados por torres de cristal, tráfico congestionado y ruido constante, Albrook brinda una combinación singular: frondosos corredores de selva protegida, fauna silvestre a diario, brisas frescas y arquitectura de la Zona del Canal—todo esto con una conexión rápida y cómoda a los principales atractivos, aeropuertos y terminales de transporte.",
      contrastNotice: "Los huéspedes de Greg's Place NO se hospedan en medio de una ruidosa zona hotelera comercial del centro. En su lugar, disfrutan de un santuario residencial apacible y junto a la naturaleza, permaneciendo a minutos de todos sus destinos de interés.",
      unusualCombination: {
        tag: "La Ventaja de Albrook",
        title: "Una Combinación Singular y Privilegiada",
        description: "Muy pocos alojamientos en la región ofrecen este equilibrio genuino entre serenidad natural y conectividad metropolitana:",
        pillars: [
          {
            id: 'nature',
            title: "Naturaleza Tropical y Áreas Verdes",
            desc: "Rodeado por corredores de selva tropical protegida, árboles corotú centenarios y vegetación florida que refrescan el vecindario.",
            icon: "Trees"
          },
          {
            id: 'wildlife',
            title: "Fauna Silvestre Autóctona a Diario",
            desc: "Coatíes (gatos solos), monos tití, ñeques y decenas de especies de aves tropicales visitan nuestro jardín y árboles a diario.",
            icon: "Feather"
          },
          {
            id: 'peace',
            title: "Entorno Residencial Silencioso",
            desc: "Aceras amplias, calles arboladas, cableado subterráneo y noches apacibles lejos de bocinas, sirenas y congestión urbana.",
            icon: "ShieldCheck"
          },
          {
            id: 'history',
            title: "Carácter Histórico de la Zona del Canal",
            desc: "Más de 80 años de historia; edificación original para oficiales del ejército de EE. UU. en concreto macizo de 7 sacos y cobre.",
            icon: "Landmark"
          },
          {
            id: 'access',
            title: "Fácil Acceso a los Atractivos de la Ciudad",
            desc: "El Casco Viejo, las esclusas del Canal, la Cinta Costera y la Calzada de Amador se encuentran a solo 10–20 minutos de trayecto.",
            icon: "Compass"
          },
          {
            id: 'transport',
            title: "Gran Proximidad al Transporte",
            desc: "La estación del Metro de Albrook y la Gran Terminal Nacional de Autobuses están a solo 1–2 km, facilitando viajes sin auto.",
            icon: "Train"
          },
          {
            id: 'airports',
            title: "Cercanía a Ambos Aeropuertos",
            desc: "A solo 3–5 minutos del Aeropuerto de Albrook para vuelos domésticos, y con traslados privados bilingües hacia Tocumen Internacional.",
            icon: "Plane"
          }
        ]
      },
      distancesTag: "Distancias a Simple Vista",
      distancesTitle: "Tiempos Estimados de Traslado y Distancias",
      distancesSubtitle: "Posición céntrica con conexiones rápidas a los puntos clave de Panamá",
      distances: [
        {
          id: 'albrook-airport',
          name: "Aeropuerto Marcos A. Gelabert (Albrook)",
          categoryKey: 'airports',
          categoryLabel: "Aeropuerto Regional",
          distance: "Aproximadamente 1–2 km",
          driveTime: "Alrededor de 3–5 minutos en auto / Uber",
          notes: "Greg indicó anteriormente ~3 minutos en Uber. Ideal para vuelos domésticos a Bocas del Toro y San Blas.",
          icon: "Plane"
        },
        {
          id: 'albrook-mall',
          name: "Albrook Mall",
          categoryKey: 'shopping',
          categoryLabel: "Compras y Restaurantes",
          distance: "~1 km (como vuela el tucán)",
          driveTime: "~7 minutos en auto",
          notes: "El mayor centro comercial de la región con tiendas, supermercados, plazoletas de comida y cines.",
          icon: "ShoppingBag"
        },
        {
          id: 'albrook-metro',
          name: "Estación del Metro de Albrook",
          categoryKey: 'transportation',
          categoryLabel: "Transporte Público",
          distance: "Aproximadamente 1–2 km",
          driveTime: "Breve trayecto en Uber / taxi",
          notes: "Conectada al centro de transporte de Albrook; acceso directo y rápido a la Línea 1 del Metro de Panamá.",
          icon: "Train"
        },
        {
          id: 'albrook-bus',
          name: "Gran Terminal Nacional de Albrook",
          categoryKey: 'transportation',
          categoryLabel: "Autobuses Interurbanos",
          distance: "Aproximadamente 1–2 km",
          driveTime: "Alrededor de 5–10 minutos en Uber / taxi",
          notes: "Principal terminal de transporte terrestre de Panamá hacia Boquete, El Valle y todo el interior del país.",
          icon: "Bus"
        },
        {
          id: 'corozal-railway',
          name: "Ferrocarril de Panamá (Estación Corozal)",
          categoryKey: 'transportation',
          categoryLabel: "Ferrocarril Histórico",
          distance: "Aproximadamente 1 km o poco más",
          driveTime: "Alrededor de 5–10 minutos en auto según el tráfico",
          notes: "Histórica estación del tren de pasajeros interoceánico que une el Pacífico y el Atlántico a lo largo del Canal.",
          icon: "TrainTrack"
        },
        {
          id: 'casco-viejo',
          name: "Casco Viejo (Casco Antiguo o Centro Histórico)",
          categoryKey: 'history',
          categoryLabel: "Patrimonio y Gastronomía",
          distance: "~ 9 km",
          driveTime: "10-20 minutos en auto según el tráfico",
          notes: "Centro colonial Patrimonio de la Humanidad con arquitectura histórica, plazas y alta gastronomía.",
          icon: "Landmark"
        },
        {
          id: 'miraflores-locks',
          name: "Canal de Panamá – Centro de Visitantes de Miraflores",
          categoryKey: 'canal',
          categoryLabel: "Ingeniería del Canal",
          distance: "~7 km",
          driveTime: "~10 minutos",
          notes: "Famoso centro de visitantes con terrazas de observación del paso de barcos y museo del Canal.",
          icon: "Ship"
        },
        {
          id: 'cinta-costera',
          name: "Cinta Costera",
          categoryKey: 'nature',
          categoryLabel: "Paseo Marítimo",
          distance: "~7 km",
          driveTime: "10-15 minutos en auto según el tráfico",
          notes: "Parque recreativo frente a la Bahía con espectaculares vistas del perfil de rascacielos y ciclovías.",
          icon: "Compass"
        },
        {
          id: 'amador-causeway',
          name: "Calzada de Amador (Causeway)",
          categoryKey: 'nature',
          categoryLabel: "Paseo en el Pacífico",
          distance: "~ 7 km",
          driveTime: "10–15 minutos en auto según el tráfico",
          notes: "Paseo de cuatro islas con brisa marina, alquiler de bicicletas y restaurantes frente al océano.",
          icon: "Waves"
        },
        {
          id: 'biomuseo',
          name: "Biomuseo (Frank Gehry)",
          categoryKey: 'nature',
          categoryLabel: "Museo de Biodiversidad",
          distance: "~ 7 km",
          driveTime: "10–15 minutos en auto según el tráfico",
          notes: "Icónica obra de Frank Gehry que relata cómo el istmo de Panamá cambió la biodiversidad mundial.",
          icon: "Sparkles"
        },
        {
          id: 'parque-metropolitano',
          name: "Parque Natural Metropolitano",
          categoryKey: 'nature',
          categoryLabel: "Reserva de Selva Tropical",
          distance: "~5 km",
          driveTime: "~ 7 minutos en auto",
          notes: "Selva protegida dentro de la ciudad con senderos sombreados, perezosos y más de 200 especies de aves.",
          icon: "Trees"
        },
        {
          id: 'cerro-ancon',
          name: "Cerro Ancón",
          categoryKey: 'nature',
          categoryLabel: "Mirador Panorámico",
          distance: "~6 km",
          driveTime: "8-12 minutos en auto según el tráfico",
          notes: "Cerro histórico protegido con vista panorámica de 360° sobre la Ciudad de Panamá y el Canal.",
          icon: "Mountain"
        }
      ],
      gettingAround: {
        tag: "Cómo Moverse",
        title: "Movilidad Fácil y Segura desde Albrook",
        subtitle: "Alternativas versátiles y accesibles de transporte desde nuestra puerta",
        lead: "Tanto si prefiere pasear a pie por calles arboladas, solicitar transporte directo a la puerta o emprender viajes en autobús o tren por Panamá, la movilidad desde Greg's Place es sumamente sencilla.",
        modes: [
          {
            id: 'walking',
            title: "Caminatas por el Vecindario",
            summary: "Camine a restaurantes, food trucks, tiendas y parques arbolados",
            details: "Albrook es una comunidad residencial muy tranquila y segura donde los huéspedes pueden caminar con serenidad. Más de 15 restaurantes y food trucks se encuentran a distancia caminable según la información de la propiedad, además de panaderías y parques. Tenga en cuenta que, si bien el vecindario inmediato es muy cómodo para caminar, las atracciones más lejanas de la ciudad se visitan mejor en vehículo.",
            badge: "Vecindario Caminable",
            icon: "Footprints"
          },
          {
            id: 'rideshare',
            title: "Uber e InDrive",
            summary: "Servicio puerta a puerta directo en cuestión de minutos",
            details: "Uber e InDrive operan con total regularidad en Albrook y llegan directamente a nuestra puerta. Es reconocido como el medio más cómodo, seguro y económico para visitar el Casco Viejo, el Canal, zonas de restaurantes y museos sin las molestias ni los costos de alquilar y estacionar un auto.",
            badge: "Puerta a Puerta",
            icon: "Car"
          },
          {
            id: 'taxis',
            title: "Taxis y Conductores Privados",
            summary: "Taxis disponibles o traslados privados coordinados con Greg",
            details: "Es sencillo tomar taxis amarillos tradicionales en las vías cercanas. Para mayor tranquilidad y comodidad, Greg también puede ayudarle a coordinar taxis privados de confianza o conductores para paseos turísticos personalizados, citas tempranas o recorridos especiales.",
            badge: "Coordinado con Greg",
            icon: "Phone"
          },
          {
            id: 'transit-hub',
            title: "Centro de Transporte de Albrook",
            summary: "Línea 1 del Metro, autobuses nacionales y centro comercial",
            details: "El cercano complejo de transporte de Albrook brinda acceso integrado a: autobuses interurbanos hacia todo el territorio nacional, la estación de Metro de Albrook (Línea 1 directa al centro), líneas de autobuses urbanos y el Albrook Mall. Un recurso excepcional para recorrer Panamá cómodamente sin rentar automóvil.",
            badge: "Terminal Central",
            icon: "Train"
          }
        ]
      },
      airports: {
        tag: "Información de Aeropuertos",
        title: "Aeropuertos de Panamá: Clara Distinción",
        subtitle: "Comprenda la diferencia entre el aeropuerto regional y el aeropuerto internacional",
        lead: "La Ciudad de Panamá cuenta con dos aeropuertos principales. Greg's Place goza de una ubicación inmejorable a pocos minutos del aeropuerto doméstico y ofrece traslados privados bilingües coordinados hacia el aeropuerto internacional.",
        options: [
          {
            id: 'albrook-pac',
            name: "Aeropuerto Internacional Marcos A. Gelabert",
            code: "PAC (Aeropuerto de Albrook)",
            role: "Centro de Vuelos Domésticos y Regionales",
            distance: "Aproximadamente 1–2 km",
            driveTime: "Alrededor de 3–5 minutos en auto / Uber bajo condiciones normales",
            description: "El cómodo aeropuerto doméstico de la Ciudad de Panamá, situado dentro de la misma zona de Albrook. Utilizado principalmente para vuelos nacionales y regionales (Bocas del Toro, San Blas, Chiriquí/David e Isla Contadora) y aviación privada o chárter.",
            transferNote: "Greg indicó anteriormente unos 3 minutos en Uber. Su gran cercanía permite tomar vuelos matutinos a las islas sin madrugones estresantes.",
            pricingBadge: "A 3–5 min · Vuelos Domésticos",
            isPrimary: false
          },
          {
            id: 'tocumen-pty',
            name: "Aeropuerto Internacional de Tocumen",
            code: "PTY (Panamá Internacional)",
            role: "Principal Puerta de Entrada Internacional",
            distance: "Principal aeropuerto internacional de Panamá",
            driveTime: "Aproximadamente 30 minutos bajo condiciones normales de tráfico",
            description: "El gran 'Hub de las Américas' que recibe vuelos procedentes de Norteamérica, Europa y Sudamérica. Tenga en cuenta que no garantizamos el tiempo de 30 minutos, ya que el tráfico de la ciudad por el Corredor Sur varía considerablemente en horas pico.",
            transferNote: "Greg puede coordinar una cómoda recogida bilingüe en el aeropuerto directamente con José, chofer de confianza. Tarifa fija: $40.",
            pricingBadge: "Traslado Bilingüe con José: $40",
            isPrimary: true
          }
        ]
      },
      crocodileCreek: {
        tag: "Paseo de Naturaleza Local",
        title: "Quebrada de los Caimanes (Crocodile Creek)",
        subtitle: "Un corredor natural con fauna silvestre dentro del vecindario de Albrook",
        description: "Crocodile Creek se encuentra aproximadamente a una cuadra de distancia de Greg's Place. Una tranquila caminata por el vecindario de alrededor de 10 minutos conduce a sectores a lo largo de la quebrada donde se puede observar biodiversidad tropical en su entorno natural.",
        wildlifeList: "Los visitantes pueden encontrar pequeñas babillas / caimanes de anteojos descansando en las orillas, tortugas de río sobre troncos caídos y lagartijas basilisco (llamadas localmente 'lagartos Jesucristo' por su habilidad de correr sobre el agua). En los alrededores de la quebrada también se observan frecuentemente garzas, aves acuáticas y diversas aves tropicales de ribera.",
        disclaimer: "Nota sobre la Fauna Silvestre: Los avistamientos de animales son totalmente naturales, dependen del clima, del caudal del agua y de la hora del día, y nunca están garantizados. Por favor observe siempre la fauna con prudencia y respeto desde los senderos."
      },
      closingMessage: {
        headline: "Hospédese Cerca de la Ciudad sin Estar en Medio del Ruido",
        lead: "En Greg's Place no tiene que elegir entre conveniencia urbana y tranquilidad natural. Disfrute de una auténtica casa tropical que combina naturaleza, historia viva y facilidad de acceso a toda la ciudad.",
        points: [
          "Despierte con el canto de aves tropicales, árboles centenarios y brisa fresca del Canal",
          "Camine con total seguridad por un vecindario histórico, tranquilo y arbolado",
          "Observe fauna silvestre autóctona como coatíes, monos tití y aves que visitan la propiedad cada día",
          "Llegue al Casco Viejo, al Canal de Panamá y al centro de la ciudad en un breve trayecto en Uber",
          "Acceda con facilidad al Metro, a la terminal nacional de autobuses y al aeropuerto de Albrook",
          "Regrese al final de cada jornada al silencio, descanso y confort de un verdadero hogar"
        ]
      },
      addressTitle: "Nuestra Dirección y Ubicación",
      address: "Calle Los Guayacanes 247, Albrook, Ciudad de Panamá, Panamá",
      district: "Corregimiento de Ancón, Ciudad de Panamá",
      phone: "+507 6503-7828",
      ctaDirections: "Ver Ruta en Google Maps"
    },
    reviews: {
      tag: "Opiniones de Huéspedes",
      title: "Comentarios de Quienes Nos Han Visitado",
      subtitle: "Experiencias reales de viajeros que hicieron de Greg's Place su hogar en Panamá",
      ratingSummary: "4.9 de 5.0 Calificación Promedio",
      verifiedTag: "Opiniones Verificadas",
      items: [
        {
          id: '1',
          guest: "David y Sarah M.",
          country: "Estados Unidos",
          date: "Estadía Verificada",
          title: "¡Un oasis mágico en la Ciudad de Panamá!",
          quote: "Alojarnos con Greg fue lo mejor de nuestro viaje a Panamá. Sentarnos en el patio con malla a ver tucanes mientras desayunábamos fue inolvidable. ¡Greg es el anfitrión más atento y acogedor!",
          highlight: "Anfitrión excepcional y desayuno con avistamiento de aves",
          rating: 5
        },
        {
          id: '2',
          guest: "Christian B.",
          country: "Alemania",
          date: "Estadía Verificada",
          title: "Mucho mejor que cualquier hotel del centro",
          quote: "El tranquilo vecindario residencial de Albrook fue ideal tras días explorando el Canal y Casco Viejo. La habitación estaba impecable, la cama comodísima y la presión de agua excelente.",
          highlight: "Confort impecable y vecindario muy tranquilo",
          rating: 5
        },
        {
          id: '3',
          guest: "Elena R.",
          country: "Canadá",
          date: "Estadía Verificada",
          title: "¡Vimos ñeques en el jardín todas las mañanas!",
          quote: "¡La naturaleza aquí es real! Greg nos dio su mapa ilustrado para ir a la quebrada cercana donde vimos caimanes y tortugas. La casa tiene muchísimo carácter histórico y aire acondicionado perfecto.",
          highlight: "Fauna auténtica y encanto histórico",
          rating: 5
        },
        {
          id: '4',
          guest: "Marc e Isabelle",
          country: "Francia",
          date: "Estadía Verificada",
          title: "Desayunar en medio de la naturaleza fue maravilloso",
          quote: "Las sugerencias locales de Greg nos ahorraron tiempo y dinero. Siempre está disponible si lo necesitas pero te da total privacidad. ¡Recomendamos la experiencia de Aves y Desayuno!",
          highlight: "Consejos valiosos y cálida hospitalidad",
          rating: 5
        }
      ]
    },
    booking: {
      tag: "Reservas",
      title: "Planee Su Estadía en Greg's Place",
      subtitle: "Infraestructura oficial de reservas gestionada por Lodgify",
      lead: "Para ofrecer reservas seguras, disponibilidad transparente y tarifas directas, todos los alojamientos se gestionan mediante nuestro sistema oficial en Lodgify.",
      features: [
        "Mejores tarifas directas garantizadas",
        "Confirmación inmediata de reserva en Lodgify",
        "Comunicación directa con Greg antes de su llegada",
        "Coordinación flexible de llegada"
      ],
      ctaPrimary: "Reservar en Lodgify",
      ctaSecondary: "Consultar con Greg",
      modalTitle: "Reserve con Greg's Place in Albrook",
      modalLead: "Seleccione sus datos para continuar al sistema oficial de Lodgify, o reserve la experiencia de Aves y Desayuno.",
      tabLodgify: "Alojamiento en Casa (Lodgify)",
      tabBirding: "Reserva Aves y Desayuno",
      formCheckIn: "Fecha de Llegada",
      formCheckOut: "Fecha de Salida",
      formGuests: "Número de Huéspedes",
      formRoom: "Habitación Preferida",
      allRooms: "Cualquier Habitación Disponible (4 Cuartos)",
      forwardBtn: "Ver Disponibilidad en Lodgify",
      cancelBtn: "Cerrar",
      birdingTitle: "Reserve Su Desayuno con Aves",
      birdingLead: "Disfrute de un desayuno en medio de la naturaleza. Elija entre la Experiencia para Visitantes ($39) o la Tarifa Especial para Huéspedes ($25).",
      visitorOption: "Experiencia para Visitantes ($39/persona)",
      guestOption: "Tarifa para Huéspedes Alojados ($25/persona)",
      reserveBirdingBtn: "Reservar por WhatsApp con Greg"
    },
    contact: {
      tag: "Contáctenos",
      title: "Contacto con Greg's Place",
      subtitle: "¿Tiene dudas sobre su viaje, observación de aves o reserva de desayuno?",
      lead: "Greg con gusto le orientará sobre traslados, disponibilidad o cualquier inquietud para hacer de su visita algo especial.",
      nameLabel: "Su Nombre",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono / WhatsApp",
      messageLabel: "Mensaje o Consulta",
      sendBtn: "Enviar Mensaje a Greg",
      successMsg: "¡Gracias por comunicarse! Greg le responderá en breve.",
      phoneCTA: "Llamar o Escribir a Greg",
      directionsCTA: "Cómo Llegar",
      bookingCTA: "Reserve Su Estadía en Lodgify",
      addressHeading: "Dirección de la Casa",
      phoneHeading: "Teléfono Directo / WhatsApp",
      hoursHeading: "Llegada de Huéspedes",
      hoursText: "Llegada flexible con aviso previo; vecindario residencial sereno en Albrook"
    },
    footer: {
      name: "Greg's Place in Albrook",
      addressLine1: "Calle Los Guayacanes 247",
      addressLine2: "Albrook, Ciudad de Panamá, Panamá",
      phone: "+507 6503-7828",
      rights: "© 2026 Greg's Place in Albrook. Todos los derechos reservados.",
      tagline: "Viva la historia. Despierte en la naturaleza.",
      bookCta: "Reserve Su Estadía",
      poweredBy: "Alojamiento gestionado a través de Lodgify"
    }
  },
  de: contentDe,
  fr: contentFr
} as const;
