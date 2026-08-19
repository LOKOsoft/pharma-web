import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { footerNav } from "@/constants/nav";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/shared/logo";

const socialLinks = [
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.links.youtube, label: "YouTube" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-navy-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative px-3 pb-10 pt-20 sm:px-5 sm:pb-12 sm:pt-24 lg:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-xs sm:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              {siteConfig.name} is a full-service practice management platform that helps doctors
              and patients manage appointments, records, prescriptions, billing, and more —
              all in one elegant place.
            </p>
          </div>

          <FooterColumn title="Navigations" links={footerNav.product} />
          <FooterColumn title="Options" links={footerNav.company} />

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Social</h3>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-accent"
                  >
                    <social.icon className="h-3.5 w-3.5" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-accent"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-navy-muted">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-start justify-between gap-4 sm:mt-28 sm:flex-row sm:items-end">
          <p className="text-sm text-navy-muted sm:mt-10">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-navy-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a href="http://lokosoft.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icon.png" alt="Lokosoft" className="h-[35px] w-[35px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
