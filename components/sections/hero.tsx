"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  CalendarCheck,
  HeartPulse,
  PlayCircle,
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
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
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
          className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Run your entire <span className="text-gradient">clinic</span> from
          one <span className="text-gradient">intelligent</span> platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          NineDoctor unifies appointments, records, prescriptions, billing, and telemedicine
          into one intelligent platform — built for hospitals, clinics, and the people who run
          them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
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
          className="relative mt-20 w-full max-w-5xl"
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

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="glass glow-soft relative overflow-hidden rounded-3xl p-2 sm:p-3">
        <div className="overflow-hidden rounded-[1.25rem] border border-border/60 bg-surface">
          <div className="flex items-center gap-1.5 border-b border-border/60 bg-white/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>

          <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-[220px_1fr] sm:p-6">
            <div className="hidden flex-col gap-2 sm:flex">
              {["Overview", "Appointments", "Patients", "Prescriptions", "Billing", "Analytics"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium ${
                      i === 0
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
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: CalendarCheck, label: "Today's Visits", value: "128" },
                  { icon: HeartPulse, label: "Active Patients", value: "3,204" },
                  { icon: TrendingUp, label: "Revenue", value: "$48.2K" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left"
                  >
                    <card.icon className="h-4 w-4 text-primary" />
                    <p className="mt-2.5 font-heading text-lg font-bold text-foreground">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{card.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex-1 rounded-2xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-4 text-left">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Patient Flow</p>
                  <Badge>+18.2%</Badge>
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {[40, 65, 45, 80, 60, 95, 70, 55, 85, 65, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-primary/70 to-accent/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass glow-soft absolute -left-6 top-10 hidden w-52 rounded-2xl p-4 text-left sm:block lg:-left-16"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/12 text-success">
            <Stethoscope className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-foreground">Dr. Amelia Carter</p>
            <p className="text-[11px] text-muted-foreground">Consultation confirmed</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass glow-soft absolute -right-6 bottom-14 hidden w-56 rounded-2xl p-4 text-left sm:block lg:-right-16"
      >
        <p className="text-xs font-semibold text-foreground">Prescription sent</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Amoxicillin 500mg · Delivered to pharmacy
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
      </motion.div>
    </div>
  );
}
