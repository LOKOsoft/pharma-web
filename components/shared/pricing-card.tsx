"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PricingPlan } from "@/types";

export interface PricingCardProps {
  plan: PricingPlan;
  billing: "monthly" | "yearly";
  className?: string;
}

export function PricingCard({ plan, billing, className }: PricingCardProps) {
  const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "relative flex flex-col rounded-3xl p-8",
        plan.popular
          ? "border-gradient glow-primary bg-surface"
          : "border border-border bg-surface shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      {plan.popular && (
        <Badge
          variant="default"
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 border-none bg-gradient-to-r from-primary to-secondary text-white shadow-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Most Popular
        </Badge>
      )}

      <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-bold tracking-tight text-foreground">
          ${price}
        </span>
        <span className="text-sm text-muted-foreground">/ month</span>
      </div>
      {billing === "yearly" && (
        <span className="mt-1 text-xs font-medium text-success">Billed annually</span>
      )}

      <Button
        variant={plan.popular ? "default" : "outline"}
        size="lg"
        asChild
        className="mt-7 w-full"
      >
        <Link href="/contact">{plan.cta}</Link>
      </Button>

      <ul className="mt-8 flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
