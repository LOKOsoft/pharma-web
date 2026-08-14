import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard
      hover={false}
      className="flex h-full flex-col justify-between !rounded-xl !border !border-border/40 p-6"
    >
      <div>
        <Quote className="h-6 w-6 text-primary/30" strokeWidth={1.5} />
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
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
