import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { solutions } from "@/constants/solutions";

export function SolutionsGrid() {
  return (
    <Section>
      <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2" staggerDelay={0.1}>
        {solutions.map((solution) => (
          <RevealItem key={solution.title} direction="up">
            <div
              id={solution.href.split("#")[1]}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-surface p-8 shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-primary/25 hover:shadow-[0_24px_60px_-20px_rgba(37,99,235,0.28)] scroll-mt-28"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 blur-3xl transition-all duration-500 group-hover:from-primary/15 group-hover:to-accent/10 group-hover:opacity-100"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/12 text-primary">
                <solution.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="relative mt-6 font-heading text-2xl font-bold text-foreground">
                {solution.title}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <ul className="relative mt-6 flex flex-col gap-3">
                {solution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Talk to us about this
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
