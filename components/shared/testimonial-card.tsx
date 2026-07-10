import { Star, Quote } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard className="flex h-full flex-col justify-between p-7">
      <div>
        <Quote className="h-7 w-7 text-primary/30" strokeWidth={1.5} />
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/15 font-heading text-sm font-semibold text-primary">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.organization}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
