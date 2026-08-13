import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTA } from "@/components/sections/cta";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { trustPillars, trustFaqs } from "@/constants/trust";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How 9Doctor protects patient data — HIPAA alignment, encryption, SOC 2-certified infrastructure, access controls, and audit logging.",
  alternates: { canonical: "/trust" },
};

export default function TrustPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Trust & Security", url: `${siteConfig.url}/trust` },
        ]}
      />
      <PageHero
        eyebrow="Trust & Security"
        title="Built to earn your compliance team's trust"
        description="Patient data deserves more than a privacy policy. Here's exactly how 9Doctor protects it, end to end."
      />

      <Section>
        <SectionHeading
          eyebrow="How we protect your data"
          title="Security built into every layer"
          description="From encryption to access control to audit trails, security isn't a feature we bolted on — it's how the platform is built."
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {trustPillars.map((pillar) => (
            <RevealItem key={pillar.title} direction="up">
              <GlassCard className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/12 text-primary">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent">
        <SectionHeading
          eyebrow="Compliance FAQ"
          title="Questions your compliance team will ask"
          description="Straight answers for the security review before you sign."
        />

        <Reveal direction="up" className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {trustFaqs.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
