export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Collections", href: "/collections", description: "Seasonal and permanent études" },
  { label: "Campaign", href: "/#campaign", description: "Cinematic visual narratives" },
  { label: "Maison", href: "/maison", description: "Philosophy, heritage & craft" },
  { label: "Journal", href: "/journal", description: "Essays in style & culture" },
  { label: "Contact", href: "/contact", description: "Private appointments & concierge" },
];

export const FOOTER_SECTIONS = {
  explorations: [
    { label: "All Collections", href: "/collections" },
    { label: "The Signature Edit", href: "/collections#signature" },
    { label: "Form & Feeling", href: "/collections#form-feeling" },
    { label: "The Evening Study", href: "/collections#evening-study" },
    { label: "Architectural Silhouettes", href: "/collections#architectural" },
  ],
  maison: [
    { label: "Philosophy & Ethos", href: "/maison" },
    { label: "The Craft of Detail", href: "/#craft" },
    { label: "Atelier Appointments", href: "/contact#appointment" },
    { label: "Press & Inquiries", href: "/contact#press" },
    { label: "Client Services", href: "/contact" },
  ],
  journal: [
    { label: "The Language of Style", href: "/journal#language-of-style" },
    { label: "A Study in Burgundy", href: "/journal#study-in-burgundy" },
    { label: "The New Silhouette", href: "/journal#new-silhouette" },
    { label: "The Art of Simplicity", href: "/journal#art-of-simplicity" },
  ],
  locations: [
    { city: "Paris Atelier", address: "14 Rue de la Paix, 75001 Paris" },
    { city: "London Salon", address: "28 Old Bond Street, Mayfair" },
    { city: "New York Showroom", address: "720 Madison Avenue, New York" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Vogue Runway", href: "https://vogue.com" },
    { label: "Artsy", href: "https://artsy.net" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
};
