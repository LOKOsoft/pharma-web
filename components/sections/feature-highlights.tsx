import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export interface FeatureHighlight {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  metrics: { label: string; value: string }[];
}

export function FeatureHighlights({ items }: { items: FeatureHighlight[] }) {
  return (
    <Section className="flex flex-col gap-24 sm:gap-32">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
            index % 2 === 1 && "lg:[&>*:first-child]:order-2"
          )}
        >
          <Reveal direction={index % 2 === 0 ? "right" : "left"}>
            <Badge>{item.eyebrow}</Badge>
            <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction={index % 2 === 0 ? "left" : "right"}>
            <div className="glass glow-soft relative overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 blur-3xl"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <item.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <div className="relative mt-8 grid grid-cols-2 gap-4">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border/60 bg-white/70 p-4"
                  >
                    <p className="font-heading text-2xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
