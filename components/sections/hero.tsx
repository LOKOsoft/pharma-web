"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Bell,
  CalendarCheck,
  CheckCircle2,
  HeartPulse,
  Pill,
  PlayCircle,
  Search,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { heroStats } from "@/constants/stats";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32">
      <GradientBackground variant="hero" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="glass" className="shadow-sm">
            <Activity className="h-3.5 w-3.5 text-primary" />
            Trusted by 2,400+ healthcare providers
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
        >
          Run your entire <span className="text-gradient">clinic</span> from
          one <span className="text-gradient">intelligent</span> platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          9Doctor unifies appointments, records, prescriptions, billing, and telemedicine
          into one intelligent platform — built for hospitals, clinics, and the people who run
          them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="default" className="h-12 px-7 text-[15px]" asChild>
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="default" variant="secondary" className="h-12 px-7 text-[15px]" asChild>
            <Link href="/features">
              <PlayCircle className="h-4 w-4" />
              Explore Features
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-20 flex w-full max-w-[88rem] flex-col gap-8"
        >
          <DashboardMockup />
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <dt className="order-2 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-1 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

const DASHBOARD_SIDEBAR_ITEMS = ["Overview", "Appointments", "Patients", "Prescriptions", "Billing", "Analytics", "Settings"];

const PATIENT_ROWS = [
  { name: "Rohan Gupta", meta: "32 · Male · B+", bp: "118/76", hr: "72", lastVisit: "Aug 10", status: "Stable" },
  { name: "Priya Singh", meta: "28 · Female · O+", bp: "120/80", hr: "68", lastVisit: "Aug 9", status: "Stable" },
  { name: "Arjun Reddy", meta: "45 · Male · A+", bp: "132/85", hr: "78", lastVisit: "Aug 7", status: "Review" },
  { name: "Sana Khan", meta: "36 · Female · AB+", bp: "116/72", hr: "70", lastVisit: "Aug 12", status: "Stable" },
  { name: "Meera Nair", meta: "51 · Female · O-", bp: "128/82", hr: "74", lastVisit: "Aug 6", status: "Stable" },
  { name: "Vikram Rao", meta: "58 · Male · B-", bp: "138/88", hr: "81", lastVisit: "Aug 11", status: "Review" },
  { name: "Ananya Das", meta: "24 · Female · A-", bp: "112/70", hr: "66", lastVisit: "Aug 5", status: "Stable" },
];

const CAL_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const CAL_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const CAL_APPOINTMENTS: Record<string, { doctor: string; type: string; tone: "primary" | "accent" | "secondary" }> = {
  "Mon-09:00": { doctor: "Dr. Mehta", type: "Consultation", tone: "primary" },
  "Mon-10:00": { doctor: "Dr. Kapoor", type: "Follow-up", tone: "accent" },
  "Mon-15:00": { doctor: "Dr. Sharma", type: "Consultation", tone: "secondary" },
  "Tue-11:00": { doctor: "Dr. Iyer", type: "New patient", tone: "secondary" },
  "Tue-13:00": { doctor: "Dr. Kapoor", type: "Follow-up", tone: "primary" },
  "Wed-09:00": { doctor: "Dr. Mehta", type: "Consultation", tone: "primary" },
  "Wed-14:00": { doctor: "Dr. Sharma", type: "Procedure", tone: "accent" },
  "Wed-16:00": { doctor: "Dr. Iyer", type: "Follow-up", tone: "secondary" },
  "Thu-10:00": { doctor: "Dr. Iyer", type: "Follow-up", tone: "secondary" },
  "Thu-13:00": { doctor: "Dr. Mehta", type: "Consultation", tone: "primary" },
  "Fri-09:00": { doctor: "Dr. Mehta", type: "Procedure", tone: "accent" },
  "Fri-11:00": { doctor: "Dr. Sharma", type: "Consultation", tone: "secondary" },
  "Fri-15:00": { doctor: "Dr. Kapoor", type: "New patient", tone: "primary" },
  "Sat-10:00": { doctor: "Dr. Iyer", type: "Follow-up", tone: "primary" },
  "Sat-16:00": { doctor: "Dr. Sharma", type: "Procedure", tone: "accent" },
};
const PRESCRIPTION_ROWS = [
  { patient: "Rohan Gupta", drug: "Amoxicillin", dose: "500 mg", freq: "3× daily · 5 days", status: "Active" },
  { patient: "Priya Singh", drug: "Metformin", dose: "500 mg", freq: "2× daily · ongoing", status: "Active" },
  { patient: "Arjun Reddy", drug: "Atorvastatin", dose: "10 mg", freq: "Once daily · ongoing", status: "Review" },
  { patient: "Sana Khan", drug: "Paracetamol", dose: "650 mg", freq: "As needed · max 4/day", status: "Active" },
  { patient: "Meera Nair", drug: "Losartan", dose: "50 mg", freq: "Once daily · ongoing", status: "Active" },
  { patient: "Vikram Rao", drug: "Amlodipine", dose: "5 mg", freq: "Once daily · ongoing", status: "Review" },
];
const CAL_TONE_CLASSES: Record<string, string> = {
  primary: "from-primary/90 to-primary/60 text-white",
  accent: "from-accent/90 to-accent/60 text-white",
  secondary: "from-secondary/90 to-secondary/60 text-white",
};

export function DashboardMockup({
  floatingCards = true,
  activeItem = "Overview",
}: { floatingCards?: boolean; activeItem?: string } = {}) {
  return (
    <div className="relative">
      <div className="glass glow-soft relative overflow-hidden rounded-[2.5rem] p-2 sm:p-3">
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-surface">
          <div className="flex items-center gap-1.5 border-b border-border/60 bg-white/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>

          <div className="hidden items-center justify-between gap-4 border-b border-border/60 px-6 py-3.5 sm:flex">
            <div>
              <p className="text-sm font-semibold text-foreground">{activeItem} Dashboard</p>
              <p className="text-xs text-muted-foreground">Tuesday, August 12</p>
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
                AS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-[220px_1fr] sm:p-6">
            <div className="hidden flex-col gap-2 sm:flex">
              {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item}
                  className={`rounded-[2rem] px-3 py-2.5 text-left text-sm font-medium ${
                    item === activeItem
                      ? "bg-gradient-to-r from-primary/12 to-accent/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {activeItem === "Appointments" ? (
              <div className="flex flex-col overflow-hidden rounded-xl border border-border/60">
                <div className="flex items-center gap-1 border-b border-border/60 bg-muted/30 px-3 py-2">
                  <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                    Calendar
                  </span>
                  <span className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    List
                  </span>
                </div>
                <div className="grid grid-cols-[48px_repeat(6,1fr)]">
                  <div className="border-r border-border/60 bg-muted/30" />
                  {CAL_WEEK.map((day) => (
                    <div
                      key={day}
                      className="border-b border-r border-border/60 px-1 py-2 text-center text-xs font-semibold text-muted-foreground"
                    >
                      {day}
                    </div>
                  ))}
                  {CAL_SLOTS.map((slot) => (
                    <Fragment key={slot}>
                      <div className="border-b border-r border-border/60 px-2 py-3 text-xs font-medium text-muted-foreground">
                        {slot}
                      </div>
                      {CAL_WEEK.map((day) => {
                        const appt = CAL_APPOINTMENTS[`${day}-${slot}`];
                        return (
                          <div key={`${day}-${slot}`} className="border-b border-r border-border/60 p-1.5">
                            {appt ? (
                              <div
                                className={`rounded-md bg-gradient-to-br p-1.5 text-[11px] leading-tight shadow-sm ${CAL_TONE_CLASSES[appt.tone]}`}
                              >
                                <p className="truncate font-semibold">{appt.doctor}</p>
                                <p className="truncate opacity-90">{appt.type}</p>
                              </div>
                            ) : (
                              <div className="h-full min-h-[36px] w-full rounded-md border border-dashed border-border/60" />
                            )}
                          </div>
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </div>
            ) : activeItem === "Patients" ? (
              <div className="flex flex-col overflow-hidden rounded-xl border border-border/60">
                <div className="grid grid-cols-[1fr_90px_70px_90px_90px] gap-0 border-b border-border/60 bg-muted/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Patient</span>
                  <span className="text-right">BP</span>
                  <span className="text-right">HR</span>
                  <span className="text-right">Last visit</span>
                  <span className="text-right">Status</span>
                </div>
                {PATIENT_ROWS.map((row, i) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[1fr_90px_70px_90px_90px] items-center gap-0 border-b border-border/60 px-5 py-3.5 text-sm last:border-b-0 ${
                      i === 0 ? "bg-primary/5" : "bg-white"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-foreground">{row.name}</p>
                      <p className="text-xs text-muted-foreground">{row.meta}</p>
                    </div>
                    <span className="text-right font-medium text-foreground/80">{row.bp}</span>
                    <span className="text-right font-medium text-foreground/80">{row.hr}</span>
                    <span className="text-right text-xs text-muted-foreground">{row.lastVisit}</span>
                    <span className="text-right">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          row.status === "Stable"
                            ? "bg-success/10 text-success"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {row.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            ) : activeItem === "Prescriptions" ? (
              <div className="flex flex-col gap-3">
                {PRESCRIPTION_ROWS.map((row, i) => (
                  <div
                    key={row.patient}
                    className={`flex items-center gap-4 rounded-xl border border-border/60 p-4 ${
                      i === 0 ? "bg-primary/5" : "bg-white"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                      <Pill className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-heading text-sm font-bold text-foreground">{row.drug}</p>
                        <span className="text-xs text-muted-foreground">·</span>
                        <p className="text-xs font-medium text-muted-foreground">{row.dose}</p>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {row.patient} — {row.freq}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        row.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: CalendarCheck, label: "Today's Visits", value: "128" },
                    { icon: HeartPulse, label: "Active Patients", value: "3,204" },
                    { icon: TrendingUp, label: "Revenue", value: "$48.2K" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left"
                    >
                      <card.icon className="h-4 w-4 text-primary" />
                      <p className="mt-2.5 font-heading text-lg font-bold text-foreground">
                        {card.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{card.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex-1 rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Patient Flow</p>
                    <Badge>+18.2%</Badge>
                  </div>
                  <div className="mt-4 flex h-[214px] items-end gap-2">
                    {[40, 65, 45, 80, 60, 95, 70, 55, 85, 65, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary/70 to-accent/70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                    <span>Last 12 weeks</span>
                    <span className="font-medium text-foreground">Avg. 68 visits/day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "No-shows", value: "2.1%" },
                    { label: "Avg. wait", value: "6m" },
                    { label: "Satisfaction", value: "4.9/5" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border/60 bg-gradient-to-br from-white to-slate-50 px-4 py-3 text-left"
                    >
                      <p className="font-heading text-base font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {floatingCards && (
        <>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass glow-soft absolute -left-6 top-[140px] hidden w-52 rounded-2xl p-4 text-left sm:block lg:-left-16"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/12 text-success">
                <Stethoscope className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">Dr. Anamika Sharma</p>
                <p className="text-[11px] text-muted-foreground">Consultation confirmed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass glow-soft absolute -right-6 bottom-14 hidden w-52 rounded-lg p-4 text-left sm:block lg:-right-16"
          >
            <p className="text-xs font-semibold text-foreground">Prescription sent</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Amoxicillin 500mg · Delivered to pharmacy
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
