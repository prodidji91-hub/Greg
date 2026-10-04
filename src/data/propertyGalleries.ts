/**
 * Property Photo Gallery Configuration for Greg's Place in Albrook
 * 
 * Five Core Gallery Categories:
 * 1. Shared Living Room and Lounge
 * 2. Shared Kitchen and Laundry
 * 3. Upstairs Guest Bathroom (Specifically for Coati and Owl Rooms)
 * 4. Screen Room and Barbecue Area
 * 5. Exterior Premises
 */

export interface PropertyGalleryCategory {
  id: string;
  titleEn: string;
  titleEs: string;
  titleDe?: string;
  titleFr?: string;
  badgeEn?: string;
  badgeEs?: string;
  badgeDe?: string;
  badgeFr?: string;
  subtitleEn?: string;
  subtitleEs?: string;
  subtitleDe?: string;
  subtitleFr?: string;
  descriptionEn: string;
  descriptionEs: string;
  descriptionDe?: string;
  descriptionFr?: string;
  coverImage: string;
  images: string[];
  featuresEn?: string[];
  featuresEs?: string[];
  featuresDe?: string[];
  featuresFr?: string[];
}

export const propertyGalleryCategories: PropertyGalleryCategory[] = [
  {
    id: 'shared-living-spaces',
    titleEn: 'Shared Living Room and Lounge',
    titleEs: 'Sala de Estar y Salón Compartido',
    titleDe: 'Gemeinsames Wohnzimmer & Lounge',
    titleFr: 'Salon et Espace Lounge Partagés',
    badgeEn: 'Common Areas',
    badgeEs: 'Áreas Comunes',
    badgeDe: 'Gemeinschaftsbereiche',
    badgeFr: 'Espaces Communs',
    subtitleEn: 'Historic lounge, natural tile flooring, and relaxing seating areas',
    subtitleEs: 'Sala histórica, pisos de baldosas naturales y cómodas áreas de estar',
    subtitleDe: 'Historische Lounge, Naturstein-Fliesenböden und gemütliche Sitzbereiche',
    subtitleFr: "Salon d'époque, carrelage d'origine et espaces de détente confortables",
    descriptionEn:
      'The expansive living room retains the calm, airy atmosphere of the original Officers Quarters built over 80 years ago. Furnished with comfortable seating, natural tile floors, historic woodwork, and natural cross-breezes, it offers a peaceful environment to read, plan your outings, or relax after excursions.',
    descriptionEs:
      'La amplia sala de estar conserva la atmósfera serena y ventilada de las viviendas originales de oficiales construidas hace más de 80 años. Equipada con cómodos asientos, pisos de baldosas naturales, carpintería histórica y ventilación natural, ofrece un espacio tranquilo para leer o descansar tras excursiones.',
    descriptionDe:
      'Das weitläufige Wohnzimmer bewahrt die ruhige, luftige Atmosphäre der ursprünglichen Offiziersunterkünfte vor über 80 Jahren. Ausgestattet mit bequemen Sitzgelegenheiten, natürlichen Fliesenböden, historischer Holzkunst und natürlicher Durchlüftung bietet es einen friedvollen Ort zum Lesen, Planen oder Entspannen nach Ausflügen.',
    descriptionFr:
      "Le vaste salon conserve l'atmosphère calme et aérée des logements d'officiers originaux construits il y a plus de 80 ans. Aménagé avec des sièges confortables, des sols en carrelage naturel, des boiseries d'époque et une ventilation naturelle traversante, il offre un havre de paix pour lire, planifier vos sorties ou vous détendre après vos excursions.",
    coverImage: '/pictures/livingroom.jpg',
    images: [
      '/pictures/livingroom.jpg',
      '/pictures/livingroom2.jpg',
    ],
    featuresEn: [
      'Quiet atmosphere',
      'Natural tile floors\nthroughout the premises',
      'High-speed Wi-Fi\nthroughout the common areas',
      'Panama reading library,\nbird guides and maps',
    ],
    featuresEs: [
      'Atmósfera tranquila',
      'Pisos de baldosas naturales\nen todas las instalaciones',
      'Wi-Fi de alta velocidad\nen todas las áreas comunes',
      'Biblioteca de lectura de Panamá,\nguías de aves y mapas',
    ],
    featuresDe: [
      'Ruhige Atmosphäre',
      'Natürliche Fliesenböden\nauf dem gesamten Anwesen',
      'Highspeed-WLAN\nin allen Gemeinschaftsbereichen',
      'Panama-Lesebibliothek,\nVogelführer und Karten',
    ],
    featuresFr: [
      'Atmosphère calme et sereine',
      'Carrelage naturel d\'époque\ndans toute la propriété',
      'Wi-Fi haut débit\ndans tous les espaces communs',
      'Bibliothèque sur le Panama,\nguides ornithologiques et cartes',
    ],
  },
  {
    id: 'shared-kitchen-laundry',
    titleEn: 'Shared Kitchen and Laundry',
    titleEs: 'Cocina y Lavandería Compartidas',
    titleDe: 'Gemeinsames Wohnzimmer & Waschküche',
    titleFr: 'Cuisine Partagée et Buanderie',
    badgeEn: 'Guest Facilities',
    badgeEs: 'Instalaciones para Huéspedes',
    badgeDe: 'Gästeausstattung',
    badgeFr: 'Commodités Hôtes',
    subtitleEn: 'Fully equipped kitchen with Panama coffee & guest laundry facilities',
    subtitleEs: 'Cocina totalmente equipada con café de Panamá y servicio de lavandería',
    subtitleDe: 'Voll ausgestattete Küche mit frischem Panama-Kaffee & Gästewaschküche',
    subtitleFr: 'Cuisine entièrement équipée avec café panaméen et buanderie dédiée',
    descriptionEn:
      'A welcoming, fully equipped shared kitchen featuring modern appliances, refrigerator storage, microwave, cookware, and fresh complimentary Panamanian coffee. Guests also have access to an adjoining laundry facility, making extended and mid-length stays comfortable and self-sufficient.',
    descriptionEs:
      'Una acogedora cocina compartida totalmente equipada con electrodomésticos modernos, refrigerador, microondas, utensilios y café panameño de cortesía. Los huéspedes cuentan además con área de lavandería contigua, perfecta para estadías cortas y prolongadas.',
    descriptionDe:
      'Eine einladende, voll ausgestattete Gemeinschaftsküche mit modernen Geräten, Kühlschrankfächern für Gäste, Mikrowelle, Kochgeschirr und frischem, kostenlosem Panama-Kaffee. Ein angrenzender Waschraum steht ebenfalls bereit.',
    descriptionFr:
      'Une cuisine partagée chaleureuse et parfaitement équipée dotée d\'appareils modernes, de réfrigérateurs, d\'un micro-ondes, d\'ustensiles et d\'un excellent café panaméen offert gracieusement. Une buanderie attenante est à disposition, idéale pour les séjours de moyenne et longue durée.',
    coverImage: '/pictures/kiitchen2.jpg',
    images: [
      '/pictures/kiitchen2.jpg',
      '/pictures/kiitchen1.jpg',
      '/pictures/kiitchen3.jpg',
      '/pictures/kitchen4.jpg',
      '/pictures/kitchen5.jpg',
    ],
    featuresEn: [
      'Full refrigerator and dedicated guest food storage',
      'Microwave, cooktop, cookware and tableware',
      'Complimentary fresh Panamanian coffee and brewing station',
      'Pure municipal tap water (Albrook pure water supply)',
      'Adjoining guest laundry facility for mid-length and long stays'
    ],
    featuresEs: [
      'Refrigerador completo y almacenamiento para alimentos de huéspedes',
      'Microondas, estufa, sartenes, ollas y vajilla completa',
      'Café panameño fresco de cortesía y estación de preparación',
      'Agua potable pura del grifo (sistema de agua limpia de Albrook)',
      'Área de lavandería contigua para estadías medianas y prolongadas'
    ],
    featuresDe: [
      'Großer Kühlschrank mit eigenem Fach für Gästeverpflegung',
      'Mikrowelle, Herdplatte, Töpfe, Pfannen und Geschirr',
      'Kostenloser frischer panamaischer Kaffee & Brühstation',
      'Reines Albrook-Leitungswasser bester Qualität',
      'Angrenzende Gästewaschküche für mittlere und längere Aufenthalte'
    ],
    featuresFr: [
      'Grand réfrigérateur avec compartiments dédiés aux hôtes',
      'Micro-ondes, plaques de cuisson, casseroles, poêles et vaisselle',
      'Café frais panaméen et thés variés offerts chaque matin',
      'Eau courante d\'une pureté exemplaire (réseau d\'Albrook)',
      'Buanderie attenante avec lave-linge et sèche-linge modernes'
    ],
  },
  {
    id: 'upstairs-guest-bathroom',
    titleEn: 'Upstairs Guest Bathroom',
    titleEs: 'Baño de Huéspedes en Planta Alta',
    titleDe: 'Gästebad im Obergeschoss',
    titleFr: "Salle de Bain des Hôtes à l'Étage",
    badgeEn: 'Specifically for Coati and Owl Rooms',
    badgeEs: 'Específico para Habitaciones Coati y Owl',
    badgeDe: 'Speziell für die Zimmer Coati und Owl',
    badgeFr: 'Exclusivement pour Coati & Owl Rooms',
    subtitleEn: 'Dedicated upstairs bathroom specifically serving the Coati and Owl Rooms',
    subtitleEs: 'Baño exclusivo en planta alta dedicado específicamente a las habitaciones Coati y Owl',
    subtitleDe: 'Dediziertes Badezimmer im Obergeschoss für die Gäste der Zimmer Coati und Owl',
    subtitleFr: 'Salle de bain dédiée à l\'étage desservant exclusivement les chambres Coati et Owl',
    descriptionEn:
      'This spacious shared guest bathroom is located upstairs immediately adjacent to the Coati and Owl guest bedrooms. It features a full private shower, pristine fixtures, fresh towels, complimentary toiletries, and benefits from Albrook’s renowned clean municipal water system with strong pressure. Dedicated exclusively for guests staying in the Coati Room and Owl Room.',
    descriptionEs:
      'Este amplio baño compartido para huéspedes está ubicado en la planta alta inmediatamente junto a las habitaciones Coati y Owl. Cuenta con ducha privada completa, excelentes accesorios, toallas limpias, artículos de tocador y la reconocida agua pura y abundante presión de Albrook. De uso exclusivo para los huéspedes de las habitaciones Coati y Owl.',
    descriptionDe:
      'Dieses geräumige gemeinsame Gästebad befindet sich im Obergeschoss unmittelbar neben den Schlafzimmern Coati und Owl. Es bietet eine vollwertige Dusche, makellose Armaturen, frische Handtücher, kostenlose Pflegeprodukte und profitiert vom reinen Trinkwassersystem Albrooks mit starkem Druck.',
    descriptionFr:
      'Cette spacieuse salle de bain est située au premier étage immédiatement à côté des chambres Coati et Owl. Elle comprend une douche privée carrelée, des sanitaires impeccables, des serviettes fraîches, des articles de toilette offerts et bénéficie de l\'eau pure d\'Albrook avec une excellente pression. Réservée exclusivement aux hôtes des chambres Coati et Owl.',
    coverImage: '/pictures/bano1.jpg',
    images: [
      '/pictures/bano1.jpg',
      '/pictures/bano2.jpg',
      '/pictures/bano3.jpg',
      '/pictures/bano4.jpg',
      '/pictures/bano5.jpg',
      '/pictures/bano6.jpg',
    ],
    featuresEn: [
      'Dedicated exclusively for Coati Room and Owl Room guests',
      'Full private shower with strong water pressure',
      'Fresh cotton bath towels, hand towels, and bath mats',
      'Complimentary shampoo, body wash & soaps',
      'Directly adjacent upstairs hallway access'
    ],
    featuresEs: [
      'Dedicado exclusivamente a los huéspedes de Coati Room y Owl Room',
      'Ducha privada completa con excelente presión de agua',
      'Toallas de baño de algodón frescas, toallas de mano y tapetes',
      'Champú, jabón corporal y artículos de tocador de cortesía',
      'Acceso inmediato desde el pasillo de la planta alta'
    ],
    featuresDe: [
      'Exklusiv für Gäste der Zimmer Coati und Owl reserviert',
      'Private Dusche mit hervorragendem Wasserdruck',
      'Frische Baumwollhandtücher, Duschtücher und Badematten',
      'Kostenloses Shampoo, Duschgel & Seifen',
      'Direkter Zugang über den Flur im Obergeschoss'
    ],
    featuresFr: [
      'Réservée exclusivement aux voyageurs des chambres Coati et Owl',
      'Grande douche carrelée avec excellente pression d\'eau chaude',
      'Serviettes en coton douces, essuie-mains et tapis de bain propres',
      'Shampoing, gel douche et savons de bienvenue offerts',
      'Accès immédiat et direct depuis le couloir du premier étage'
    ],
  },
  {
    id: 'screen-room-bbq',
    titleEn: 'Screen Room and Barbecue Area',
    titleEs: 'Terraza con Malla y Área de Barbacoa',
    titleDe: 'Fliegengitter-Veranda & Grillbereich',
    titleFr: 'Véranda Moustiquaire et Espace Barbecue',
    badgeEn: 'Veranda & Outdoor Dining',
    badgeEs: 'Terraza y Comedor al Aire Libre',
    badgeDe: 'Veranda & Essen im Freien',
    badgeFr: 'Véranda & Repas en Plein Air',
    subtitleEn: 'Mosquito-free screened veranda & covered tropical barbecue terrace',
    subtitleEs: 'Terraza protegida con malla antimosquitos y área de barbacoa techada',
    subtitleDe: 'Insektengeschützte Veranda & überdachte tropische Grillterrasse',
    subtitleFr: 'Véranda tropicale protégée des insectes et terrasse couverte pour barbecue',
    descriptionEn:
      'Our signature screened tropical veranda allows you to immerse yourself in the sights and sounds of nature without insect disturbance. Overlooks the garden to view birds and wildlife. Enjoy morning coffee/tea while spotting a variety of tropical birds and critters as they come into the garden. This is a great place to dine for all you home base meals, play board games, and enjoy your cell phone or laptop. The outdoor barbecue area features both propane and charcoal barbecue grills. Both are available for complimentary guest use, although guests will need to provide their own charcoal if they use that grill.',
    descriptionEs:
      'Nuestra emblemática terraza tropical con malla protectora le permite sumergirse en las vistas y sonidos de la naturaleza sin molestias de insectos. Tiene vista al jardín para observar aves y vida silvestre. Disfrute del café o té matutino mientras observa una variedad de aves tropicales y criaturas a medida que llegan al jardín. Este es un lugar ideal para disfrutar de todas sus comidas principales, jugar juegos de mesa y usar su teléfono celular o computadora portátil. El área de barbacoa al aire libre cuenta con parrillas tanto de propano como de carbón. Ambas están disponibles de forma gratuita para los huéspedes, aunque deberán proporcionar su propio carbón si desean utilizar esa parrilla.',
    descriptionDe:
      'Unsere markante geschützte Tropenveranda ermöglicht es Ihnen, die Natur und ihre Geräusche ohne Insektenstörungen zu genießen. Sie überblickt den Garten, um Vögel und Wildtiere zu beobachten. Genießen Sie morgendlichen Kaffee oder Tee, während Sie eine Vielzahl tropischer Vögel und Tiere beobachten, die in den Garten kommen. Dies ist ein wunderbarer Ort für Ihre Mahlzeiten, für Brettspiele sowie für die Nutzung Ihres Smartphones oder Laptops. Der Außengrillbereich bietet sowohl Propangas- als auch Holzkohlegrills. Beide stehen unseren Gästen kostenlos zur Verfügung, wobei Gäste bei Nutzung des Holzkohlegrills ihre eigene Kohle mitbringen.',
    descriptionFr:
      'Notre véranda tropicale grillagée signature vous permet de vous immerger au cœur des sons et des paysages de la nature sans la gêne des insectes. Donnant sur le jardin pour observer oiseaux et animaux sauvages. Idéal pour savourer votre café matinal, partager vos repas, faire des jeux de société ou utiliser votre ordinateur. L\'espace barbecue extérieur propose des barbecues au gaz propane et au charbon de bois en accès libre.',
    coverImage: '/pictures/screenroom2.jpeg',
    images: [
      '/pictures/screenroom2.jpeg',
      '/pictures/screenroom1.jpeg',
      '/pictures/screen1.jpg',
      '/pictures/screen2.jpg',
      '/pictures/screen3.jpg',
      '/pictures/screen4.jpg',
    ],
    featuresEn: [
      'Full mosquito mesh screening for all-day insect-free comfort',
      'Prime viewing angle of garden bird feeders & visiting wildlife',
      'Covered outdoor barbecue grilling area and utensils',
      'Al fresco dining table and comfortable tropical loungers',
      'Atmospheric evening lighting and natural rainforest breezes'
    ],
    featuresEs: [
      'Malla protectora antimosquitos completa para confort total sin insectos',
      'Ángulo privilegiado hacia comederos de aves y vida silvestre visitante',
      'Área techada de barbacoa con parrilla y utensilios',
      'Mesa de comedor al aire libre y cómodos sillones tropicales',
      'Iluminación nocturna ambiental y brisa natural del bosque'
    ],
    featuresDe: [
      'Vollständiger Insektenschutz für ganztägigen Komfort ohne Mücken',
      'Bester Blick auf die Futterstellen und Tiere im Garten',
      'Überdachter Grillplatz mit Grill und Utensilien',
      'Esstisch im Freien und bequeme tropische Liegesessel',
      'Stimmungsvolle Abendbeleuchtung und frische Waldbrisen'
    ],
    featuresFr: [
      'Moustiquaire intégrale pour un confort absolu sans aucun insecte',
      'Point de vue privilégié sur les mangeoires d\'oiseaux et la faune du jardin',
      'Espace barbecue couvert avec équipements et ustensiles',
      'Grande table de repas en plein air et chaises longues tropicales',
      'Éclairage d\'ambiance en soirée et douces brises de la forêt'
    ],
  },
  {
    id: 'exterior-premises',
    titleEn: 'Exterior Premises',
    titleEs: 'Exteriores y Terrenos de la Propiedad',
    titleDe: 'Außengelände & Garten',
    titleFr: 'Extérieurs et Terrains de la Propriété',
    badgeEn: 'Grounds & Architecture',
    badgeEs: 'Jardines y Arquitectura',
    badgeDe: 'Garten & Architektur',
    badgeFr: 'Jardins & Architecture',
    subtitleEn: 'Lush tropical yards, 80-year-old architectural facade & private parking',
    subtitleEs: 'Jardines tropicales exuberantes, fachada histórica de más de 80 años y estacionamiento',
    subtitleDe: 'Üppige tropische Gärten, historische 80-jährige Fassade & private Parkplätze',
    subtitleFr: 'Jardins tropicaux luxuriants, façade historique de 80 ans et parking privé',
    descriptionEn:
      'Surrounded by towering shade trees, native fruit plants, and peaceful green space in the former Canal Zone. Built with 7-sack concrete walls and tile roofing by the U.S. Army Corps of Engineers, the premises include safe off-street parking, a tranquil garden, and direct proximity to Albrook’s protected wildlife corridor.',
    descriptionEs:
      'Rodeada de frondosos árboles, plantas frutales nativas y espacios verdes protegidos en la antigua Zona del Canal. Construida con muros de concreto reforzado y techos de tejas por el Cuerpo de Ingenieros de EE. UU., la propiedad ofrece estacionamiento seguro, jardín sereno y cercanía al corredor biológico de Albrook.',
    descriptionDe:
      'Umgeben von mächtigen Schattenbäumen, einheimischen Fruchtpflanzen und friedlichen Grünflächen der ehemaligen Kanalzone. Erbaut mit 7-Sack-Beton und Ziegeldach vom U.S. Army Corps of Engineers, bietet das Anwesen sichere Parkplätze und direkten Anschluss an den Grüngürtel von Albrook.',
    descriptionFr:
      'Entourée de grands arbres ombragés, de plantes fruitières tropicales et d\'espaces verts préservés dans l\'ancienne Zone du Canal. Construite en béton armé 7-sacs avec toiture en tuiles par le génie militaire américain, la propriété dispose d\'un parking sécurisé, d\'un jardin apaisant et d\'un accès direct au corridor biologique d\'Albrook.',
    coverImage: '/pictures/exterior.jpg',
    images: [
      '/pictures/exterior.jpg',
      '/pictures/exterior1.jpg',
      '/pictures/exterior2.jpg',
      '/pictures/exterior3.jpg',
      '/pictures/exterior4.jpg',
    ],
    featuresEn: [
      'Secure off-street private guest parking',
      'Reinforced 7-sack concrete Canal Zone Officers Quarters construction',
      'Mature tropical trees: mango, palms, and native rainforest flora',
      'Direct border with Albrook nature reserve & biological corridor',
      'Quiet, safe residential street minutes from Clayton and Canal locks'
    ],
    featuresEs: [
      'Estacionamiento privado seguro dentro de la propiedad',
      'Construcción reforzada en concreto de la Zona del Canal (viviendas de oficiales)',
      'Árboles tropicales maduros: mangos, palmeras y flora nativa de selva',
      'Límite directo con la reserva natural y corredor biológico de Albrook',
      'Calle residencial tranquila y segura a minutos de Clayton y las esclusas'
    ],
    featuresDe: [
      'Sichere private Gästeparkplätze auf dem Grundstück',
      'Verstärkte 7-Sack-Betonbauweise der Offiziersresidenzen der Kanalzone',
      'Ausgewachsene Tropenbäume: Mango, Palmen und Regenwaldpflanzen',
      'Direkte Grenze zum Naturschutzgebiet und Tierkorridor von Albrook',
      'Ruhige, sichere Wohnstraße wenige Minuten von Clayton und den Schleusen'
    ],
    featuresFr: [
      'Parking privé sécurisé pour les hôtes dans l\'enceinte de la propriété',
      'Structure massive en béton 7-sacs d\'origine des officiers de la Zone du Canal',
      'Arbres tropicaux majestueux : manguiers, palmiers et flore de forêt pluviale',
      'Bordure directe avec la réserve naturelle et le couloir biologique d\'Albrook',
      'Rue résidentielle calme et très sûre à quelques minutes de Clayton et du canal'
    ],
  },
];
