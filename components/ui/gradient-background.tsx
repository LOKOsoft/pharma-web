import * as React from "react";

import { cn } from "@/lib/utils";

export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "hero" | "section" | "cta";
}

function GradientBackground({
  className,
  variant = "section",
  ...props
}: GradientBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      {...props}
    >
      {variant === "hero" && (
        <>
          <div className="absolute left-1/2 top-[-12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-secondary/25 blur-3xl animate-glow-pulse" />
          <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
          <div className="absolute -right-24 top-16 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl animate-float" />
        </>
      )}
      {variant === "section" && (
        <>
          <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </>
      )}
      {variant === "cta" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-move" />
      )}
    </div>
  );
}

export { GradientBackground };
