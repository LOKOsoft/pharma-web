import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08}>
        <h2
          className={cn(
            "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]",
            align === "center" && "max-w-2xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.14}>
          <p
            className={cn(
              "text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "max-w-2xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
