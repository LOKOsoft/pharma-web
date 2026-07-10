import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/15 bg-primary/8 text-primary",
        secondary: "border-secondary/15 bg-secondary/8 text-secondary",
        accent: "border-accent/15 bg-accent/8 text-accent",
        success: "border-success/15 bg-success/8 text-success",
        glass: "glass border-white/60 text-foreground",
        outline: "border-border bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
