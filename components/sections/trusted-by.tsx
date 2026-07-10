import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";
import { trustedByLogos } from "@/constants/stats";

export function TrustedBy() {
  const items = [...trustedByLogos, ...trustedByLogos];

  return (
    <section className="border-y border-border/70 bg-surface/60 py-12">
      <Container>
        <Reveal direction="up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by leading hospitals, clinics & healthcare networks
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading text-lg font-semibold tracking-tight text-foreground/30 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
