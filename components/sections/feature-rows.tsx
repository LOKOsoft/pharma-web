import { Check } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/shared/reveal";
import { DashboardRowMockup } from "@/components/sections/doctor-mockups";
import { FeatureTabs } from "@/components/sections/feature-tabs";
import { PhoneMockup, type PhoneMockupVariant } from "@/components/shared/phone-mockup";
import type { FeaturePageItem } from "@/constants/features-page";
import { cn } from "@/lib/utils";

interface FeatureRowsProps {
  items: FeaturePageItem[];
}

export function FeatureRows({ items }: FeatureRowsProps) {
  const doctors = items.filter((item) => item.audience === "doctor");
  const patients = items.filter((item) => item.audience === "patient");

  return (
    <Section>
      <FeatureTabs doctor={<DoctorGroup items={doctors} />} patient={<Group items={patients} />} />
    </Section>
  );
}

const DASHBOARD_VIEW_BY_TITLE: Record<string, string> = {
  "Doctor Dashboard": "Overview",
  "Appointment Management": "Appointments",
  "Patient Records": "Patients",
  "Digital Prescription": "Prescriptions",
  "Billing & Invoicing": "Billing",
};

function DoctorGroup({ items }: { items: FeaturePageItem[] }) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <div className="flex w-full flex-col gap-20 sm:gap-28">
        {items.map((item, i) => {
          const view = DASHBOARD_VIEW_BY_TITLE[item.title];
          const textFirst = i % 2 === 0;
          return (
            <Reveal direction="up" key={item.title}>
              <div className="grid grid-cols-1 items-center gap-8 border-b border-border/40 pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.45fr)] lg:gap-12">
                <div
                  className={cn(
                    textFirst ? "" : "lg:order-2",
                    item.title === "Appointment Management" && "lg:pl-20",
                    item.title === "Digital Prescription" && "lg:pl-20"
                  )}
                >
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

                <div className={cn("self-center lg:mt-6", textFirst ? "" : "lg:order-1")}>
                  {view && (
                    <DashboardRowMockup
                      activeItem={view}
                      className={
                        item.title === "Appointment Management" || item.title === "Digital Prescription"
                          ? "max-w-[660px] min-h-[350px]"
                          : undefined
                      }
                    />
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

const PHONE_VARIANT_BY_MOCKUP: Record<string, PhoneMockupVariant> = {
  "phone-book": "book",
  "phone-records": "records",
  "phone-reminders": "reminders",
  "phone-billing": "billing",
};

interface GroupProps {
  items: FeaturePageItem[];
}

function Group({ items }: GroupProps) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <div className="flex w-full flex-col gap-20 sm:gap-28">
        {items.map((item, i) => {
          const variant = item.mockup ? PHONE_VARIANT_BY_MOCKUP[item.mockup] : undefined;
          const textFirst = i % 2 === 0;
          return (
            <Reveal direction="up" key={item.title}>
              <div className="grid grid-cols-1 items-center gap-8 border-b border-border/40 pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
                <div className={cn("text-left", !textFirst && "lg:order-2")}>
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

                <div className={cn("flex justify-center self-center", !textFirst && "lg:order-1")}>
                  {variant && <PhoneMockup variant={variant} />}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
