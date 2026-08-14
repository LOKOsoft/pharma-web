import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { productFeatures } from "@/constants/features";
import { cn } from "@/lib/utils";

const spans = [
  "sm:col-span-4 sm:row-span-2",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-3",
  "sm:col-span-3",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-3",
  "sm:col-span-3",
];

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
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-6"
        staggerDelay={0.06}
      >
        {productFeatures.map((feature, i) => {
          const large = i === 0;
          return (
            <RevealItem key={feature.title} direction="up" className={spans[i]}>
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 p-7 transition-all duration-500 hover:border-primary/25",
                  large
                    ? "justify-end bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-[0_24px_60px_-20px_rgba(15,118,110,0.45)]"
                    : "bg-surface shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_60px_-20px_rgba(15,118,110,0.28)]"
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-all duration-500 group-hover:opacity-100",
                    large ? "bg-white/10 opacity-60" : "opacity-0 group-hover:bg-primary/12"
                  )}
                />
                <div
                  className={cn(
                    "relative flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
                    large ? "bg-white/15 text-white" : "bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary"
                  )}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="relative mt-5">
                  <h3
                    className={cn(
                      "font-heading font-semibold",
                      large ? "text-2xl" : "text-lg text-foreground"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed",
                      large ? "max-w-xs text-sm text-white/80" : "text-sm text-muted-foreground"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
