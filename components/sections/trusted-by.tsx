import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";
import { trustedDoctors } from "@/constants/trusted-doctors";

export function TrustedBy() {
  const items = [...trustedDoctors, ...trustedDoctors];

  return (
    <section className="border-y border-border/70 bg-surface/60 py-12">
      <Container>
        <Reveal direction="up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by 2,400+ doctors on 9Doctor
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {items.map((doctor, i) => (
            <div
              key={`${doctor.name}-${i}`}
              className="flex w-64 shrink-0 items-center gap-3 rounded-2xl border border-border/60 bg-surface p-3"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{doctor.name}</p>
                <p className="truncate text-xs text-muted-foreground">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
