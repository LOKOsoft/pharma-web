"use client";

import * as React from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { DashboardMockup } from "@/components/sections/hero";
import { productFeatures } from "@/constants/features";

function ScaledDashboard() {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);
  const [height, setHeight] = React.useState<number>();

  React.useEffect(() => {
    const content = contentRef.current;
    const wrapper = wrapperRef.current;
    if (!content || !wrapper) return;

    const update = () => {
      const wrapperWidth = wrapper.offsetWidth;
      const contentWidth = content.scrollWidth;
      const contentHeight = content.scrollHeight;
      if (!wrapperWidth || !contentWidth) return;
      const nextScale = wrapperWidth / contentWidth;
      setScale(nextScale);
      setHeight(contentHeight * nextScale);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full" style={{ height }}>
      <div
        ref={contentRef}
        className="absolute left-0 top-0 origin-top-left"
        style={{ transform: `scale(${scale})`, width: "1200px" }}
      >
        <DashboardMockup floatingCards={false} />
      </div>
    </div>
  );
}

export function ProductFeatures() {
  return (
    <Section className="relative overflow-hidden">
      <GradientBackground variant="section" />

      <SectionHeading
        eyebrow="Product"
        title="Every tool your team needs, in one platform"
        description="From the front desk to the pharmacy, 9Doctor replaces scattered spreadsheets and legacy software with one connected system."
      />

      <div className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-primary">
            For Doctors
          </span>
          <h3 className="font-heading text-4xl font-semibold text-foreground">
            Everything your clinic needs
          </h3>
          <RevealGroup className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2" staggerDelay={0.05}>
            {productFeatures.map((feature) => (
              <RevealItem key={feature.title} direction="up" className="flex items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary">
                  <feature.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="pt-1.5 text-sm font-semibold text-foreground">{feature.title}</span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Link
            href="/product"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <Reveal direction="scale" duration={0.8} className="relative lg:mt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950/25 blur-[100px]"
          />
          <div className="mx-auto w-full max-w-[52rem]">
            {/* Monitor screen */}
            <div className="glow-soft rounded-xl border-[10px] border-navy bg-navy p-0 shadow-[0_50px_90px_-20px_rgba(0,0,0,0.55),0_25px_45px_-15px_rgba(0,0,0,0.4)]">
              <div className="overflow-hidden rounded-md bg-surface">
                <ScaledDashboard />
              </div>
            </div>

            {/* Monitor stand */}
            <div className="mx-auto h-10 w-3 bg-gradient-to-b from-navy to-navy/70" />
            <div className="mx-auto h-2.5 w-40 rounded-full bg-gradient-to-b from-navy to-navy/60 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)]" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
