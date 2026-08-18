import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Demo", href: "/contact" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Trust & Security", href: "/trust" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} satisfies Record<string, NavLink[]>;
