"use client";

import { motion } from "framer-motion";
import { Bell, Search, ShieldCheck } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function DashboardShowcase() {
  return (
    <Section className="overflow-hidden bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
      <SectionHeading
        eyebrow="Platform"
        title="One dashboard. Every device."
        description="A consistent, beautiful experience whether your team is at a workstation or on the move."
      />

      <div className="relative mt-16 flex flex-col items-center">
        <Reveal direction="scale" duration={0.8}>
          <div className="relative w-full max-w-[72rem]">
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
                      <p className="text-sm font-semibold text-foreground">Weekly Appointments</p>
                      <div className="mt-5 flex h-36 items-end gap-3">
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
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {["New Patients", "Prescriptions Issued"].map((label, i) => (
                        <div
                          key={label}
                          className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left"
                        >
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="mt-1.5 font-heading text-2xl font-bold text-foreground">
                            {i === 0 ? "312" : "1,048"}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left">
                      <p className="text-sm font-semibold text-foreground">Today's Schedule</p>
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
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass glow-soft absolute -bottom-8 right-2 hidden w-56 rounded-lg p-4 text-left sm:right-8 sm:block lg:right-16"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-success" />
            <span className="text-xs font-semibold text-foreground">Secure Portal</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Lab results ready for review — 3 new reports.
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
