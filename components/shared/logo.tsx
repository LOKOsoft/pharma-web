import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label="9Doctor — Home"
    >
      <span className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
        <span className="text-gradient font-heading text-3xl font-extrabold leading-none">9</span>
        <span
          className={cn(
            "font-heading text-lg font-bold leading-none",
            variant === "light" ? "text-white" : "text-foreground"
          )}
        >
          Doctor
        </span>
      </span>
    </Link>
  );
}
