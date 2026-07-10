"use client";

import { motion } from "framer-motion";
import { Bell, MessageSquare, ShieldCheck } from "lucide-react";

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
          <div className="relative w-full max-w-4xl">
            <div className="glow-soft rounded-[2rem] border border-border/60 bg-gradient-to-b from-slate-100 to-slate-200 p-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-border/60 bg-surface">
                <div className="flex items-center justify-between border-b border-border/60 bg-white/70 px-6 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Bell className="h-4 w-4" />
                    <MessageSquare className="h-4 w-4" />
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-[10px] font-bold text-primary">
                      AC
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-2 space-y-4">
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-5">
                      <p className="text-sm font-semibold text-foreground">Weekly Appointments</p>
                      <div className="mt-4 flex h-32 items-end gap-2.5">
                        {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                            <div
                              className="w-full rounded-t-lg bg-gradient-to-t from-primary/60 via-secondary/60 to-accent/60"
                              style={{ height: `${h}%` }}
                            />
                            <span className="text-[10px] text-muted-foreground">
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
                          className="rounded-2xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4"
                        >
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                            {i === 0 ? "312" : "1,048"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Liam Turner", time: "09:30 AM", status: "Confirmed" },
                      { name: "Nora Petrova", time: "10:15 AM", status: "In Room" },
                      { name: "Ethan Brooks", time: "11:00 AM", status: "Waiting" },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-border/60 bg-white/70 p-3 text-left"
                      >
                        <p className="text-xs font-semibold text-foreground">{p.name}</p>
                        <p className="text-[11px] text-muted-foreground">{p.time}</p>
                        <span className="mt-1.5 inline-block rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary">
                          {p.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-2 h-3 w-40 rounded-b-xl bg-slate-300/70" />
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass glow-soft absolute -bottom-8 right-2 hidden w-52 rounded-2xl p-3 sm:right-8 sm:block lg:right-16"
        >
          <div className="overflow-hidden rounded-xl border border-border/60 bg-surface">
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent" />
            <div className="space-y-2 p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-success" />
                <span className="text-[11px] font-semibold text-foreground">Secure Portal</span>
              </div>
              <p className="text-[10px] leading-relaxed text-muted-foreground">
                Lab results ready for review — 3 new reports.
              </p>
              <div className="h-1 w-full rounded-full bg-primary/10">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
