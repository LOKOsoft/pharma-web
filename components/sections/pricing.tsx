"use client";

import * as React from "react";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { PricingCard } from "@/components/shared/pricing-card";
import { pricingPlans } from "@/constants/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Choose the plan that fits your practice."
      />

      <div className="mt-9 flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium",
            billing === "monthly" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={billing === "yearly"}
          onClick={() => setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))}
          className="relative h-7 w-[3.25rem] rounded-full bg-gradient-to-r from-primary to-secondary p-1 transition-colors"
        >
          <span
            className={cn(
              "block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300",
              billing === "yearly" ? "translate-x-6" : "translate-x-0"
            )}
          />
        </button>
        <span
          className={cn(
            "flex items-center gap-2 text-sm font-medium",
            billing === "yearly" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          Yearly
          <Badge variant="success">Save 20%</Badge>
        </span>
      </div>

      <RevealGroup
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center"
        staggerDelay={0.1}
      >
        {pricingPlans.map((plan) => (
          <RevealItem key={plan.name} direction="up" className={plan.popular ? "lg:-my-4" : ""}>
            <PricingCard plan={plan} billing={billing} className="h-full" />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
