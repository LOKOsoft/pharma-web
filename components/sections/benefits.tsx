import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { benefits } from "@/constants/benefits";

export function Benefits() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Pharma Plus"
        title="Built different from traditional healthcare software"
        description="We obsessed over speed, security, and design so your team gets software that feels like a modern product, not a legacy system."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.08}
      >
        {benefits.map((benefit) => (
          <RevealItem key={benefit.title} direction="up">
            <GlassCard className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/12 text-primary">
                <benefit.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
