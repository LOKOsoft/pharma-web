import Link from "next/link";
import { ArrowRight, HeartPulse, Home } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-20">
      <GradientBackground variant="hero" />
      <Container className="flex flex-col items-center text-center">
        <span className="glass flex h-20 w-20 items-center justify-center rounded-3xl text-primary shadow-lg">
          <HeartPulse className="h-9 w-9" strokeWidth={1.75} />
        </span>

        <p className="mt-8 font-heading text-7xl font-bold tracking-tight text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          This page took an unscheduled leave of absence
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back on track.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
