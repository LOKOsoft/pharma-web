import Link from "next/link";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Pharma Plus — Home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
        <Plus className="h-5 w-5 text-white" strokeWidth={3} />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Pharma<span className="text-gradient">Plus</span>
      </span>
    </Link>
  );
}
