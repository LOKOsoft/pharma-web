import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Reveal } from "@/components/shared/reveal";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20", className)}>
      <GradientBackground variant="hero" />
      <Container className="flex flex-col items-center text-center">
        <Reveal direction="up">
          <Badge variant="glass" className="shadow-sm">
            {eyebrow}
          </Badge>
        </Reveal>
        <Reveal direction="up" delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.16}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
