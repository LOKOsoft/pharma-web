import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/ui/section";

export function CTA() {
  return (
    <Section containerClassName="max-w-[84rem]">
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center sm:px-16 sm:py-20">
          <GradientBackground variant="cta" className="rounded-[2.5rem]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] grid-fade opacity-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />

          <span className="relative inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Get started today
          </span>

          <h2 className="relative mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to modernize your healthcare operations?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Join thousands of providers already running their practice on 9Doctor. Book a
            personalized demo today.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-none bg-white text-primary shadow-xl shadow-black/10 hover:bg-white/90 hover:shadow-2xl"
            >
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
