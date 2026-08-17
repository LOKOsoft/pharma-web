import {
  Bell,
  CalendarCheck,
  ChevronRight,
  Home,
  FileText,
  User,
  HeartPulse,
  Droplet,
  Activity,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { patientFeatures } from "@/constants/features";

export function PatientExperience() {
  return (
    <Section className="relative overflow-hidden pt-8 sm:pt-12">
      <GradientBackground variant="section" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="scale" duration={0.8} className="order-2 lg:order-1">
          <div className="glow-soft relative mx-auto mt-8 h-[600px] w-[296px] rounded-[2.5rem] border-4 border-slate-900 bg-slate-900 p-1 shadow-[0_50px_90px_-20px_rgba(0,0,0,0.55),0_25px_45px_-15px_rgba(0,0,0,0.4)]">
            <span className="absolute left-1/2 top-1.5 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-surface">
              <div className="px-[16px] pb-1 pt-3 text-[11px] font-semibold text-foreground">
                9:41
              </div>

              <div className="flex items-center justify-between gap-3 px-[16px] pb-3 pt-1">
                <div>
                  <p className="text-xs text-muted-foreground">Good morning</p>
                  <p className="text-sm font-semibold text-foreground">Rohan Gupta</p>
                </div>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
                  <Bell className="h-3.5 w-3.5" />
                  <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              </div>

              <div className="flex-1 overflow-hidden">
                <div className="flex h-full flex-col gap-4 px-[16px] pb-4">
                  <div className="rounded-lg bg-gradient-to-br from-primary via-secondary to-accent p-4 text-left text-white">
                    <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                      <CalendarCheck className="h-3.5 w-3.5" />
                      Upcoming visit
                    </div>
                    <p className="mt-2 text-sm font-semibold">Dr. Anjali Mehta</p>
                    <p className="text-xs text-white/80">Cardiology · Tomorrow, 10:15 AM</p>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: patientFeatures[0].icon, label: "Book" },
                      { icon: patientFeatures[1].icon, label: "Records" },
                      { icon: patientFeatures[2].icon, label: "Reminders" },
                      { icon: patientFeatures[3].icon, label: "Billing" },
                    ].map((action) => (
                      <div key={action.label} className="flex flex-col items-center gap-1.5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary">
                          <action.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                        </span>
                        <p className="text-center text-[9.5px] font-medium leading-tight text-foreground">
                          {action.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { icon: HeartPulse, value: "72", label: "BPM" },
                      { icon: Droplet, value: "B+", label: "Blood" },
                      { icon: Activity, value: "98%", label: "SpO2" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-border/60 bg-white p-2.5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/8 text-primary">
                          <stat.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                        </span>
                        <p className="mt-2 text-sm font-bold text-foreground">{stat.value}</p>
                        <p className="text-[10px] font-medium text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">Recent records</p>
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div className="mt-2.5 flex flex-col divide-y divide-border/60">
                      {[
                        { label: "Blood Test Report", meta: "Aug 12 · Ready" },
                        { label: "Prescription Refill", meta: "Aug 5 · Sent" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-around border-t border-border/60 bg-white/80 px-2 pb-1 pt-2">
                {[
                  { icon: Home, label: "Home", active: true },
                  { icon: CalendarCheck, label: "Visits" },
                  { icon: FileText, label: "Records" },
                  { icon: User, label: "Profile" },
                ].map((tab) => (
                  <div key={tab.label} className="flex flex-col items-center gap-0.5 px-2">
                    <tab.icon
                      className={`h-4.5 w-4.5 ${tab.active ? "text-primary" : "text-muted-foreground"}`}
                      strokeWidth={tab.active ? 2.25 : 1.75}
                    />
                    <p
                      className={`text-[9.5px] font-medium ${tab.active ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {tab.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pb-2 pt-1">
                <span className="h-1 w-24 rounded-full bg-slate-900/20" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:-translate-x-6">
          <SectionHeading
            align="left"
            eyebrow="For Patients"
            title="A better experience for the people you care for"
            description="Patients book, pay, and manage their care from their phone, so your front desk spends less time on the phone and more time on people."
          />

          <RevealGroup className="mt-8 flex flex-col gap-5" staggerDelay={0.06}>
            {patientFeatures.map((feature) => (
              <RevealItem key={feature.title} direction="up" className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary">
                  <feature.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
