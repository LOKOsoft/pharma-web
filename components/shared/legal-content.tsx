import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalContent({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section, index) => (
            <Reveal key={section.heading} direction="up" delay={Math.min(index * 0.04, 0.2)}>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
