import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Reveal } from "@/components/shared/reveal";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16 sm:py-20">
          <GradientBackground variant="cta" className="rounded-[2.5rem]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] grid-fade opacity-30"
          />
          <h2 className="relative mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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
              className="bg-white text-primary shadow-xl shadow-black/10 hover:bg-white/90 hover:shadow-2xl"
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
    </section>
  );
}
