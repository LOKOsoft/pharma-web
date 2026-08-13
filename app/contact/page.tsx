import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NineDoctor. Book a demo, ask a question, or talk to our team about bringing modern healthcare software to your practice.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: siteConfig.contact.address,
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM PT",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s talk about your practice
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Book a personalized demo or ask us anything — our team typically responds within
              one business day.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {contactDetails.map((detail, i) => (
              <Reveal key={detail.label} direction="up" delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-surface p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/12 to-accent/12 text-primary">
                    <detail.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="left">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
