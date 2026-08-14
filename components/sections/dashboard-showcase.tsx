"use client";

import { motion } from "framer-motion";
import { Bell, CalendarCheck, Search } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function AppointmentBooking() {
  return (
    <Section className="overflow-hidden bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
      <SectionHeading
        eyebrow="Scheduling"
        title="Appointment booking that runs itself"
        description="Patients book online, your calendar fills automatically, and reminders go out without anyone lifting a finger."
        titleClassName="max-w-none whitespace-nowrap"
      />

      <div className="relative mt-16 flex flex-col items-center">
        <Reveal direction="scale" duration={0.8} className="flex w-full flex-col items-center">
          <div className="relative w-full max-w-[88rem]">
            <AppointmentsMockup />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass glow-soft absolute -left-6 top-10 hidden w-52 rounded-2xl p-4 text-left sm:-left-24 sm:block lg:-left-40"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/12 text-success">
                  <CalendarCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Slot booked online</p>
                  <p className="text-[11px] text-muted-foreground">Nora Petrova · 10:15 AM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass glow-soft absolute -right-6 bottom-14 hidden w-52 rounded-lg p-4 text-left sm:block lg:-right-16"
            >
              <p className="text-xs font-semibold text-foreground">Reminder sent</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                SMS + email · 24 hours before visit
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function AppointmentsMockup() {
  return (
    <div className="glass glow-soft relative overflow-hidden rounded-[2.5rem] p-2 sm:p-3">
      <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-surface">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-white/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>

        <div className="hidden items-center justify-between gap-4 border-b border-border/60 px-6 py-3.5 sm:flex">
          <div>
            <p className="text-sm font-semibold text-foreground">Appointments</p>
            <p className="text-xs text-muted-foreground">Week of August 10</p>
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border/60 bg-slate-50 px-3.5 py-2 text-xs text-muted-foreground">
            <Search className="h-3.5 w-3.5" />
            Search patients, appointments...
          </div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-white">
              AC
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-[220px_1fr] sm:p-6">
          <div className="hidden flex-col gap-2 sm:flex">
            {["Overview", "Appointments", "Patients", "Prescriptions", "Billing", "Analytics"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium ${
                    i === 1
                      ? "bg-gradient-to-r from-primary/12 to-accent/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-5 text-left">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Weekly Appointments</p>
                <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
                  +12.4%
                </span>
              </div>
              <div className="mt-5 flex h-20 items-end gap-3">
                {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary to-accent"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[11px] text-muted-foreground">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                <span>Last 7 days</span>
                <span>Avg. 57 / day</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "New Patients", value: "312" },
                  { label: "Prescriptions Issued", value: "1,048" },
                  { label: "Revenue", value: "$48.2K" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 px-4 py-3 text-left"
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="font-heading text-xl font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left">
                <p className="text-sm font-semibold text-foreground">Today&apos;s Schedule</p>
                <div className="mt-3 flex flex-col divide-y divide-border/60">
                  {[
                    { name: "Liam Turner", time: "09:30 AM", status: "Confirmed" },
                    { name: "Nora Petrova", time: "10:15 AM", status: "In Room" },
                    { name: "Ethan Brooks", time: "11:00 AM", status: "Waiting" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.time}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary">
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
