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
    { label: "Trust & Security", href: "/trust" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  solutions: [
    { label: "For Hospitals", href: "/solutions#hospitals" },
    { label: "For Doctors", href: "/solutions#doctors" },
    { label: "For Receptionists", href: "/solutions#receptionists" },
    { label: "For Pharmacists", href: "/solutions#pharmacists" },
  ],
} satisfies Record<string, NavLink[]>;
