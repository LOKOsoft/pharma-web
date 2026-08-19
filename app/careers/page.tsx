import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/shared/reveal";
import { CareersForm } from "@/components/shared/careers-form";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join 9Doctor and help build the operating system for modern healthcare. See our current openings and what it's like to work with us.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Careers", url: `${siteConfig.url}/careers` },
        ]}
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Careers
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Help us build the future of healthcare software
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We&apos;re a small team on a mission to make running a clinic feel effortless. We
            don&apos;t have open roles posted right now, but we&apos;re always glad to hear from
            people who want to build with us.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <Reveal direction="up" className="text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Think you&apos;d be a good fit?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Tell us a bit about yourself — we&apos;ll reach out if there&apos;s a fit. You can
            also email us directly at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal direction="up" className="mt-8">
          <CareersForm />
        </Reveal>
      </div>
    </Section>
  );
}
