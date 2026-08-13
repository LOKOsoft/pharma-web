import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureCard } from "@/components/shared/feature-card";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { productFeatures } from "@/constants/features";

export function ProductFeatures() {
  return (
    <Section className="relative">
      <GradientBackground variant="section" />
      <SectionHeading
        eyebrow="Product"
        title="Every tool your team needs, in one platform"
        description="From the front desk to the pharmacy, 9Doctor replaces scattered spreadsheets and legacy software with one connected system."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.08}
      >
        {productFeatures.map((feature) => (
          <RevealItem key={feature.title} direction="up">
            <FeatureCard
              icon={<feature.icon className="h-6 w-6" strokeWidth={1.75} />}
              title={feature.title}
              description={feature.description}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
