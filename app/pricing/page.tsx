import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { FAQJsonLd } from "@/components/shared/json-ld";
import { faqItems } from "@/constants/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NineDoctor. Plans for independent doctors, growing clinics, and enterprise hospital networks — all with a 14-day free trial.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <FAQJsonLd items={faqItems} />
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale with your practice"
        description="Start free, upgrade as you grow. No hidden fees, no long-term contracts — cancel anytime."
      />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
