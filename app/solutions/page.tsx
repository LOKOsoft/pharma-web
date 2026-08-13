import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { Workflow } from "@/components/sections/workflow";
import { CTA } from "@/components/sections/cta";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "NineDoctor tailored for hospitals, clinics, doctors, receptionists, and pharmacists — one platform, built for how each role actually works.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Solutions", url: `${siteConfig.url}/solutions` },
        ]}
      />
      <PageHero
        eyebrow="Solutions"
        title="Built for every role in modern healthcare"
        description="Whether you run a single clinic or a multi-location hospital network, NineDoctor adapts to how your team actually works."
      />
      <SolutionsGrid />
      <Workflow />
      <CTA />
    </>
  );
}
