import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { FeatureRows } from "@/components/sections/feature-rows";
import { CTA } from "@/components/sections/cta";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { featuresPage } from "@/constants/features-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every feature of 9Doctor — appointment management, doctor dashboards, digital prescriptions, billing, inventory, lab reports, telemedicine, and more.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Features", url: `${siteConfig.url}/features` },
        ]}
      />
      <PageHero
        eyebrow="Features"
        title="Everything your practice needs, thoughtfully designed"
        description="9Doctor brings scheduling, records, prescriptions, billing, and telemedicine together into one platform your entire team will actually enjoy using."
      />
      <FeatureRows items={featuresPage} />
      <CTA />
    </>
  );
}
