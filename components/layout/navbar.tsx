"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav } from "@/constants/nav";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-4 z-50 w-full px-5 transition-transform duration-500 ease-in-out sm:top-5 sm:px-8 lg:px-10",
        hidden && !open && "-translate-y-[calc(100%+2rem)]"
      )}
    >
      <div
        className={cn(
          "glass-nav mx-auto grid h-[4rem] max-w-7xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/40 px-4 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)] transition-all duration-300 sm:px-6",
          scrolled && "shadow-[0_12px_40px_-12px_rgba(15,23,42,0.28)]"
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/8"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end sm:-mr-3.5">
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="default" asChild>
              <Link href="/contact">Login</Link>
            </Button>
            <Button variant="default" size="default" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-nav mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/40 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/6 hover:text-foreground",
                    pathname === link.href && "bg-primary/8 text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <Link href="/contact">Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
