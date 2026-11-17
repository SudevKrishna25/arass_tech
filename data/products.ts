export interface ProductItem {
  id: string;
  name: string;
  frenchTitle: string;
  category: "Ready-to-Wear" | "Tailoring" | "Occasionwear" | "Accessories";
  collection: string;
  price: number;
  image: string;
  secondaryImage: string;
  description: string;
  silhouette: string;
  fabrication: string;
  origin: string;
  details: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-01",
    name: "L'Archive Burgundy Wool Greatcoat",
    frenchTitle: "Le Grand Manteau en Laine Burgundy",
    category: "Tailoring",
    collection: "The Signature Edit",
    price: 3450,
    image: "/images/products/greatcoat.jpg",
    secondaryImage: "/images/details/fabric-wool.jpg",
    description:
      "An imposing double-breasted overcoat tailored from heavy double-faced Italian wool. Cut with a sculpted waist, sharp peak lapels, and hand-finished pick stitching.",
    silhouette: "Structured architectural silhouette with pronounced shoulders and ankle-grazing hem.",
    fabrication: "100% Virgin Double-Faced Wool with cupro sleeve lining",
    origin: "Atelier Parisien",
    details: [
      "Natural horn button closure",
      "Hand-sewn interior chest canvas",
      "Deep back vent for fluid stride",
      "Two interior besom ticket pockets",
    ],
  },
  {
    id: "prod-02",
    name: "The Monolith Draped Column Gown",
    frenchTitle: "La Robe Colonne Sculptée",
    category: "Occasionwear",
    collection: "Form & Feeling",
    price: 4200,
    image: "/images/products/column-gown.jpg",
    secondaryImage: "/images/collections/evening-study.jpg",
    description:
      "A testament to classical drapery reinterpreted for modern evening. Bias-cut heavyweight mulberry silk cascades from a high sculptural neck into a subtle fluted hem.",
    silhouette: "Lengthened column contour with an asymmetric open-back draped sweep.",
    fabrication: "100% Heavyweight Mulberry Silk Radzimir",
    origin: "Atelier Parisien",
    details: [
      "Concealed side-seam zipper",
      "French bound interior seams",
      "Floor-length sweeping train",
      "Unlined for pure fluid kinetic movement",
    ],
  },
  {
    id: "prod-03",
    name: "Le Smoking Oxblood Velvet Jacket",
    frenchTitle: "La Veste de Smoking en Velours Oxblood",
    category: "Tailoring",
    collection: "The Evening Study",
    price: 2950,
    image: "/images/products/velvet-jacket.jpg",
    secondaryImage: "/images/details/hardware.jpg",
    description:
      "A decadent nocturnal statement piece rendered in deep oxblood Lyon silk-cotton velvet. Framed with silk grosgrain shawl lapels and silk-covered buttons.",
    silhouette: "Slightly lengthened single-breasted dinner silhouette.",
    fabrication: "75% Cotton, 25% Silk Velvet with Pure Silk Grosgrain Trim",
    origin: "Atelier Parisien",
    details: [
      "Pure silk grosgrain shawl collar",
      "Full floating horsehair canvas construction",
      "Double back vents",
      "Working cuff buttonholes",
    ],
  },
  {
    id: "prod-04",
    name: "Cocoon Sculptural Cape Coat",
    frenchTitle: "La Cape Cocon Architecturale",
    category: "Ready-to-Wear",
    collection: "Architectural Silhouettes",
    price: 3800,
    image: "/images/products/cape-coat.jpg",
    secondaryImage: "/images/details/fabric-wool.jpg",
    description:
      "A dramatic study in volume and protection. Crafted in brushed alpaca wool with sculpted funnel neckline and leather welt slit sleeves.",
    silhouette: "Voluminous rounded cocoon draping effortlessly over tailored layers.",
    fabrication: "70% Suri Alpaca, 30% Fine Virgin Wool",
    origin: "Atelier Parisien",
    details: [
      "Architectural funnel collar with hidden magnetic closure",
      "Hand-finished piped leather slit armholes",
      "Deep slip pockets lined in brushed cashmere",
      "Contrast cream underside detail",
    ],
  },
  {
    id: "prod-05",
    name: "Le Pantalon Plissé Wide-Leg Trouser",
    frenchTitle: "Le Pantalon Plissé Jambe Large",
    category: "Ready-to-Wear",
    collection: "The Signature Edit",
    price: 1650,
    image: "/images/products/wide-trouser.jpg",
    secondaryImage: "/images/details/hand-stitch.jpg",
    description:
      "High-rise double forward-pleat trousers cut from tropical-weight worsted wool. Engineered to fall with unbroken vertical drape.",
    silhouette: "Extended high rise with relaxed, fluid wide leg and deep cuff.",
    fabrication: "100% High-Twist Worsted Virgin Wool",
    origin: "Atelier Parisien",
    details: [
      "Extended waistband with side brass tab adjusters",
      "Deep front forward knife pleats",
      "Curved curtain waistband lining",
      "Unfinished hem for bespoke tailoring",
    ],
  },
  {
    id: "prod-06",
    name: "Le Petit Sac en Cuir Burgundy",
    frenchTitle: "Le Petit Sac Sculpté en Cuir",
    category: "Accessories",
    collection: "The Signature Edit",
    price: 2100,
    image: "/images/products/leather-bag.jpg",
    secondaryImage: "/images/details/hardware.jpg",
    description:
      "Sculptural top-handle bag handcrafted in full-grain French box calfskin. Features bespoke brushed soft gold hardware and a hand-lacquered edge finish.",
    silhouette: "Geometric trapezoid profile with sculpted handle and detachable shoulder strap.",
    fabrication: "100% French Box Calfskin, Lambskin Nappa lining",
    origin: "Atelier Parisien",
    details: [
      "Custom milled brushed champagne-gold clasp",
      "Hand-painted tone-on-tone edge beveling",
      "Interior foil-embossed ORRÉ signature",
      "Protective base studs",
    ],
  },
  {
    id: "prod-07",
    name: "The Nocturne Silk Velvet Corset",
    frenchTitle: "Le Corset Nocturne en Velours",
    category: "Occasionwear",
    collection: "The Evening Study",
    price: 1850,
    image: "/images/products/velvet-corset.jpg",
    secondaryImage: "/images/collections/evening-study.jpg",
    description:
      "An architectural bodice shaped with twelve flexible steel bones, wrapped in lustrous burgundy velvet and finished with hand-tied satin ribbons.",
    silhouette: "Cinched hourglass contour framing the décolletage.",
    fabrication: "Silk Velvet with Silk Cotton Twill Lining",
    origin: "Atelier Parisien",
    details: [
      "12-point interior structural boning",
      "Adjustable back eyelet lacing",
      "Sweetheart neckline with subtle peaked cups",
      "Edge-stitched velvet binding",
    ],
  },
  {
    id: "prod-08",
    name: "Sculpted Torc Choker in Brushed Gold",
    frenchTitle: "Le Torc Sculptural en Or Brossé",
    category: "Accessories",
    collection: "Form & Feeling",
    price: 1250,
    image: "/images/products/gold-choker.jpg",
    secondaryImage: "/images/details/hardware.jpg",
    description:
      "A hand-formed neckpiece in 24k gold-plated brass with a gentle satin brush finish. Designed to nestle into the collarbone with seamless organic weight.",
    silhouette: "Continuous asymmetrical curved metal sculpture.",
    fabrication: "24-Karat Gold Plated Heavy Brass",
    origin: "Atelier Parisien",
    details: [
      "Ergonomic hinged rear opening",
      "Hand-finished matte satin brushing",
      "Discreet engraved ORRÉ monogram",
      "Presented in archival leather box",
    ],
  },
];
