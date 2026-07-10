"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-surface p-7 shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:border-primary/25 hover:shadow-[0_24px_60px_-20px_rgba(37,99,235,0.28)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-primary/15 group-hover:via-accent/10 group-hover:to-secondary/10 group-hover:opacity-100"
      />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div className="relative">
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
