import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { workflowSteps } from "@/constants/workflow";

export function Workflow() {
  return (
    <Section className="bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent">
      <SectionHeading
        eyebrow="How it works"
        title="From booking to billing, in five simple steps"
        description="A seamless workflow designed around the patient journey — connecting every team member along the way."
      />

      <RevealGroup className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        {workflowSteps.map((step) => (
          <RevealItem key={step.number} direction="up" className="relative flex flex-col items-center text-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-surface shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)]">
              <step.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-[10px] font-bold text-white shadow-sm">
                {step.number}
              </span>
            </div>
            <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
