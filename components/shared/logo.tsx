import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label="NineDoctor — Home"
    >
      <span className="text-gradient font-heading text-3xl font-extrabold leading-none transition-transform duration-300 group-hover:scale-105">
        9
      </span>
    </Link>
  );
}
