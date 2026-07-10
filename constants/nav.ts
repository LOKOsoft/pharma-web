import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Demo", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about" },
    { label: "Blog", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  solutions: [
    { label: "For Hospitals", href: "/solutions" },
    { label: "For Clinics", href: "/solutions" },
    { label: "For Doctors", href: "/solutions" },
    { label: "For Pharmacists", href: "/solutions" },
  ],
} satisfies Record<string, NavLink[]>;
