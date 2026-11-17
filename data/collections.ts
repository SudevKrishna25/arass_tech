export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  season: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  aspectRatio: string;
  offsetY?: string;
  looksCount: number;
  palette: string[];
  materials: string[];
  features: string[];
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "col-01",
    slug: "the-signature-edit",
    title: "The Signature Edit",
    season: "Édition Permanente",
    subtitle: "A Study in Tailored Architecture",
    description:
      "Sculpted shoulder lines meet fluid Italian double-faced wool. Defined by deep burgundy hues, unyielding precision, and a restrained masculine-feminine balance.",
    quote: "Structure is the silent dialogue between the body and space.",
    image: "/images/collections/signature-edit.jpg",
    aspectRatio: "aspect-[3/4]",
    offsetY: "md:translate-y-0",
    looksCount: 18,
    palette: ["#541326", "#300914", "#FAF7F0", "#211719"],
    materials: ["Double-faced virgin wool", "Mulberry silk crêpe", "Horn buttoning"],
    features: ["Hand-pressed canvas front", "Concealed placket", "Structured lapel roll"],
  },
  {
    id: "col-02",
    slug: "form-feeling",
    title: "Form & Feeling",
    season: "Automne-Hiver Étude",
    subtitle: "Drapery in Kinetic Motion",
    description:
      "An exploration of weightlessness and gravity. Silk radzimir cascades alongside sharp oxblood micro-pleating, creating garments that breathe with the wearer.",
    quote: "True luxury is felt before it is seen.",
    image: "/images/collections/form-feeling.jpg",
    aspectRatio: "aspect-[4/5]",
    offsetY: "md:translate-y-24",
    looksCount: 22,
    palette: ["#762D42", "#F3EBDD", "#D8C7AE", "#300914"],
    materials: ["Heavy silk georgette", "Featherweight cashmere", "Brushed brass accents"],
    features: ["Bias-cut fluidity", "Invisible bonded seams", "Asymmetric hemline"],
  },
  {
    id: "col-03",
    slug: "the-evening-study",
    title: "The Evening Study",
    season: "Nocturne Series 03",
    subtitle: "Shadows, Velvet & Quiet Drama",
    description:
      "Created for the stillness of midnight. Deep wine velvets and architectural corset columns designed to reflect low candlelight with subtle luminescent depth.",
    quote: "The night does not demand noise; it commands presence.",
    image: "/images/collections/evening-study.jpg",
    aspectRatio: "aspect-[3/4]",
    offsetY: "md:-translate-y-12",
    looksCount: 14,
    palette: ["#21060D", "#541326", "#B49A70", "#FAF7F0"],
    materials: ["Lyon silk velvet", "Sculptural grosgrain", "Gold leaf leafing"],
    features: ["Internal boned bustier", "Deep back décolletage", "Floor-sweeping train"],
  },
  {
    id: "col-04",
    slug: "architectural-silhouettes",
    title: "Architectural Silhouettes",
    season: "Capsule Géométrique",
    subtitle: "Monolithic Outerwear & Clean Proportions",
    description:
      "Brutalist inspiration translated into enveloping warmth. Cocoon silhouettes, exaggerated collar heights, and unbroken vertical seams crafted for timeless shelter.",
    quote: "Reduction is not the absence of thought, but its highest distillation.",
    image: "/images/collections/architectural-silhouettes.jpg",
    aspectRatio: "aspect-[4/5]",
    offsetY: "md:translate-y-16",
    looksCount: 16,
    palette: ["#300914", "#A99686", "#F3EBDD", "#541326"],
    materials: ["Brushed alpaca blend", "Full-grain calfskin trim", "Recycled cupro lining"],
    features: ["Drop-shoulder architecture", "Deep welt pockets", "Modular storm flap"],
  },
];
