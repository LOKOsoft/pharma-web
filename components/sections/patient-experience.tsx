import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { PhoneMockup } from "@/components/shared/phone-mockup";
import { patientFeatures } from "@/constants/features";

export function PatientExperience() {
  return (
    <Section className="relative overflow-hidden pt-8 sm:pt-12">
      <GradientBackground variant="section" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="scale" duration={0.8} className="relative order-2 lg:order-1">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950/25 blur-[90px]"
          />
          <PhoneMockup variant="home" />
        </Reveal>

        <div className="order-1 lg:order-2 lg:-translate-x-6">
          <SectionHeading
            align="left"
            eyebrow="For Patients"
            title="A better experience for the people you care for"
            description="Patients book, pay, and manage their care from their phone, so your front desk spends less time on the phone and more time on people."
          />

          <RevealGroup className="mt-8 flex flex-col gap-5" staggerDelay={0.06}>
            {patientFeatures.map((feature) => (
              <RevealItem key={feature.title} direction="up" className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary">
                  <feature.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Link
            href="/patients"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}