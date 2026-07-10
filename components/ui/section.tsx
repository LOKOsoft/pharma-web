import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  as?: "section" | "div";
}

function Section({
  className,
  containerClassName,
  children,
  as = "section",
  ...props
}: SectionProps) {
  const Comp = as;
  return (
    <Comp className={cn("relative py-20 sm:py-28", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Comp>
  );
}

export { Section };
