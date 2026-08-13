import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label="NineDoctor — Home"
    >
      <span className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
        <span className="text-gradient font-heading text-3xl font-extrabold leading-none">9</span>
        <span className="font-heading text-lg font-bold leading-none text-foreground">Doctor</span>
      </span>
    </Link>
  );
}
