import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { team } from "@/constants/team";

export function Team() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Team"
        title="The people behind NineDoctor"
        description="A small, focused team of clinicians, engineers, and designers building the healthcare software we always wished existed."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.08}
      >
        {team.map((member) => (
          <RevealItem key={member.name} direction="up">
            <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-surface p-7 shadow-[0_2px_16px_-8px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.25)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/15 font-heading text-lg font-bold text-primary">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(-2)
                  .join("")}
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
