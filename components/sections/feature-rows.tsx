import { Check } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/shared/reveal";
import {
  AppointmentsRowMockup,
  DashboardRowMockup,
} from "@/components/sections/doctor-mockups";
import type { FeaturePageItem } from "@/constants/features-page";
import { cn } from "@/lib/utils";

interface FeatureRowsProps {
  items: FeaturePageItem[];
}

export function FeatureRows({ items }: FeatureRowsProps) {
  const doctors = items.filter((item) => item.audience === "doctor");
  const patients = items.filter((item) => item.audience === "patient");

  return (
    <Section className="flex flex-col gap-20 sm:gap-24">
      <Group title="From the Doctor's side" items={doctors} startIndex={0} />
      <Group title="For your patients" items={patients} startIndex={doctors.length} />
    </Section>
  );
}

interface GroupProps {
  title: string;
  items: FeaturePageItem[];
  startIndex: number;
}

function Group({ title, items, startIndex }: GroupProps) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <Reveal direction="up" className="text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="flex w-full flex-col gap-10 sm:gap-14">
        {items.map((item, i) => (
          <TextRow key={item.title} item={item} duplicateMockup={startIndex === 0 && i === 0} />
        ))}
      </div>
    </div>
  );
}

function TextRow({ item, duplicateMockup }: { item: FeaturePageItem; duplicateMockup?: boolean }) {
  const layout = getMockupLayout(item);
  if (!layout) {
    return (
      <Reveal direction="up">
        <div className="border-b border-border/40 pb-10 last:border-b-0 last:pb-0">
          <div className="text-left">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[2.5rem]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }

  const { mockup, mockupSide } = layout;
  const textFirst = mockupSide === "right";

  return (
    <Reveal direction="up">
      <div className="grid grid-cols-1 items-center gap-8 border-b border-border/40 pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.45fr)] lg:gap-12">
        <div className={cn("text-left", !textFirst && "lg:order-2", item.mockup === "appointments" && "lg:ml-24")}>
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[2.5rem]">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={cn("flex w-full flex-col gap-6 pt-6 lg:pt-10", !textFirst && "lg:order-1")}>
          {mockup}
          {duplicateMockup && <DashboardRowMockup activeItem="Appointments" />}
          {duplicateMockup && <DashboardRowMockup activeItem="Patients" />}
          {duplicateMockup && <DashboardRowMockup activeItem="Prescriptions" />}
        </div>
      </div>
    </Reveal>
  );
}

function getMockupLayout(item: FeaturePageItem): { mockup: React.ReactNode; mockupSide: "left" | "right" } | null {
  if (item.audience !== "doctor") return null;
  switch (item.mockup) {
    case "dashboard":
      return { mockup: <DashboardRowMockup />, mockupSide: "right" };
    case "appointments":
      return { mockup: <AppointmentsRowMockup />, mockupSide: "left" };
    default:
      return null;
  }
}
