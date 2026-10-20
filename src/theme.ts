/**
 * Centralized brand & theme configuration for Parjane Buildcon LLP.
 */

export interface OfficeLocation {
  city: string;
  badge: string;
  address: string;
  pincode: string;
  landmark?: string;
  phone: string;
}

export const brand = {
  name: "Parjane Buildcon LLP",
  shortName: "Parjane Buildcon",
  tagline: "Building Happy Homes Everyday",
  coreMarket: "Navi Mumbai and Panvel",
  heroSubtitle:
    "A construction legacy across Navi Mumbai and Panvel spanning over 35 years. From turnkey government contracting to master-planned residential communities and upcoming redevelopments.",
  phone: "+91 98220 12345",
  whatsapp: "919822012345",
  email: "contact@parjanebuildcon.com",
  address: [
    "Shop No. 2, Bhagyeshree Apartments, Sector 29",
    "Agroli G.E.S., CBD Belapur, Navi Mumbai – 400614",
  ],
  offices: [
    {
      city: "CBD Belapur (Registered Office)",
      badge: "Registered Office",
      address:
        "Shop No. 2, Bhagyeshree Apartments, Sector 29, Agroli G.E.S., CBD Belapur, Navi Mumbai – 400614",
      pincode: "400614",
      landmark: "Opposite Sector 29 Green Belt",
      phone: "+91 98220 12345",
    },
    {
      city: "Taloja Office",
      badge: "Branch Office",
      address:
        "Shop No. 8, Satyam Oasis, Sector 23, Taloja Phase 2, Navi Mumbai – 410208",
      pincode: "410208",
      landmark: "Near Taloja Metro Station Corridor",
      phone: "+91 98220 12345",
    },
    {
      city: "Panvel Office",
      badge: "Sales & Site Office",
      address:
        "Shop Nos. 3–4, Kanak Mahavir, Old Thana Naka Road, Panvel, Navi Mumbai – 410206",
      pincode: "410206",
      landmark: "Old Thana Naka Junction",
      phone: "+91 98220 12345",
    },
  ] as OfficeLocation[],
  hours: "Monday – Saturday · 09:30 – 19:00",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

/** Shared layout rhythm — seamless, no awkward gaps */
export const layout = {
  container: "mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8",
  containerNarrow: "mx-auto w-full max-w-[840px] px-4 sm:px-6",
  sectionY: "py-6 sm:py-10 lg:py-12",
  sectionYTight: "py-4 sm:py-6",
} as const;

/** Minimal, sleek, and attractive type scale */
export const type = {
  hero: "font-display font-bold text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.15] tracking-tight text-white drop-shadow-md",
  h1: "font-display font-bold text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.18] tracking-tight text-white drop-shadow-sm",
  h2: "font-display font-bold text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.22] tracking-tight text-white",
  h3: "font-display font-semibold text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.3] text-white",
  body: "text-xs sm:text-[13.5px] leading-[1.7] font-normal text-slate-200/90",
  eyebrow: "eyebrow",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Amenities", to: "/amenities" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;
