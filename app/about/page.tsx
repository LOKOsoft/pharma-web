import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { values, companyStats } from "@/constants/team";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NineDoctor was founded to bring premium, modern software to healthcare. Learn about our mission, values, and the team building the future of patient care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />
      <PageHero
        eyebrow="About Us"
        title="Modernizing healthcare, one clinic at a time"
        description="We started NineDoctor because healthcare software deserved better. Today, thousands of providers trust us to run their practice."
      />

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <SectionHeading eyebrow="Our Story" title="From frustration to a better way" align="left" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              NineDoctor began in 2019 when our founders — an ER physician and a former Stripe
              engineer — watched a hospital lose hours every day to disconnected spreadsheets,
              paper charts, and legacy software that fought its users at every turn.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We set out to build something different: healthcare software with the polish of the
              best consumer products, engineered with the rigor that patient data demands. Today,
              NineDoctor powers appointments, records, prescriptions, and billing for thousands
              of providers across 14 countries.
            </p>
          </Reveal>

          <Reveal direction="left">
            <div className="glass glow-soft grid grid-cols-2 gap-6 rounded-3xl p-10">
              {companyStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={"prefix" in stat ? stat.prefix : undefined}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent">
        <SectionHeading
          eyebrow="Our Values"
          title="What guides how we build"
          description="These principles shape every product decision, every line of code, and every conversation with our customers."
        />
        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
          staggerDelay={0.08}
        >
          {values.map((value) => (
            <RevealItem key={value.title} direction="up">
              <div className="h-full rounded-3xl border border-border/70 bg-surface p-8 shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)]">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Team />
      <CTA />
    </>
  );
}
