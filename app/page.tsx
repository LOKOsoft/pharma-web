import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ProductFeatures } from "@/components/sections/product-features";
import { AppointmentBooking } from "@/components/sections/dashboard-showcase";
import { Benefits } from "@/components/sections/benefits";
import { Workflow } from "@/components/sections/workflow";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { OrganizationJsonLd, FAQJsonLd } from "@/components/shared/json-ld";
import { faqItems } from "@/constants/faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <FAQJsonLd items={faqItems} />
      <Hero />
      <TrustedBy />
      <ProductFeatures />
      <Benefits />
      <AppointmentBooking />
      <Workflow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
