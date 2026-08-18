"use client";

import * as React from "react";

import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  FileSignature,
  Mic,
  PhoneOff,
  Pill,
  Send,
  TrendingUp,
  Video,
  VideoOff,
} from "lucide-react";

import { DashboardMockup } from "@/components/sections/hero";

function MockupFrame({
  children,
  contentClassName = "aspect-[3/2] w-full min-h-[340px]",
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/60 bg-surface shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-white/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

function ScaledDashboard({ activeItem }: { activeItem?: string }) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const update = () => {
      const next = wrapper.offsetWidth / content.scrollWidth;
      setScale(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-full w-full overflow-hidden">
      <div
        ref={contentRef}
        className="origin-top-left"
        style={{ transform: `scale(${scale})`, width: "1200px" }}
      >
        <DashboardMockup floatingCards={false} activeItem={activeItem} />
      </div>
    </div>
  );
}

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00"];
const APPOINTMENTS: Record<string, { doctor: string; type: string; tone: "primary" | "accent" | "secondary" }> = {
  "Mon-09:00": { doctor: "Dr. Mehta", type: "Consultation", tone: "primary" },
  "Mon-10:00": { doctor: "Dr. Kapoor", type: "Follow-up", tone: "accent" },
  "Tue-11:00": { doctor: "Dr. Iyer", type: "New patient", tone: "secondary" },
  "Wed-09:00": { doctor: "Dr. Mehta", type: "Consultation", tone: "primary" },
  "Wed-14:00": { doctor: "Dr. Sharma", type: "Procedure", tone: "accent" },
  "Thu-10:00": { doctor: "Dr. Iyer", type: "Follow-up", tone: "secondary" },
  "Thu-15:00": { doctor: "Dr. Kapoor", type: "New patient", tone: "primary" },
  "Fri-09:00": { doctor: "Dr. Mehta", type: "Procedure", tone: "accent" },
  "Fri-11:00": { doctor: "Dr. Sharma", type: "Consultation", tone: "secondary" },
  "Sat-10:00": { doctor: "Dr. Iyer", type: "Follow-up", tone: "primary" },
};

const toneClasses: Record<string, string> = {
  primary: "from-primary/90 to-primary/60 text-white",
  accent: "from-accent/90 to-accent/60 text-white",
  secondary: "from-secondary/90 to-secondary/60 text-white",
};

export function DashboardRowMockup({ activeItem }: { activeItem?: string } = {}) {
  return (
    <div className="ml-auto aspect-[3/2] w-full max-w-[560px] min-h-[300px] overflow-hidden">
      <ScaledDashboard activeItem={activeItem} />
    </div>
  );
}

const SIDEBAR_ITEMS = ["Overview", "Appointments", "Patients", "Prescriptions", "Billing"];

export function AppointmentsRowMockup() {
  return (
    <div className="lg:w-[115%]">
    <div className="glass glow-soft rounded-xl p-1.5">
    <MockupFrame contentClassName="aspect-[3/2] w-full min-h-[250px]">
      <div className="flex h-full">
        <div className="hidden w-[92px] shrink-0 flex-col gap-1 border-r border-border/60 bg-muted/20 p-1.5 sm:flex">
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-2 py-1 text-left text-[9px] font-medium ${
                i === 1
                  ? "bg-gradient-to-r from-primary/12 to-accent/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex h-full flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-2">
            <div className="flex items-center gap-1.5">
              <CalendarCheck className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
              <p className="font-heading text-xs font-semibold text-foreground">Schedule · Aug 12 – Aug 17</p>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-medium text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Confirmed
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Procedure
              </span>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-[48px_repeat(6,1fr)]">
            <div className="border-r border-border/60 bg-muted/30" />
            {WEEK.map((day) => (
              <div
                key={day}
                className="border-b border-r border-border/60 px-1 py-1 text-center text-[9px] font-semibold text-muted-foreground"
              >
                {day}
              </div>
            ))}
            {TIME_SLOTS.map((slot) => (
              <SlotRow key={slot} slot={slot} />
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
    </div>
    </div>
  );
}

function SlotRow({ slot }: { slot: string }) {
  return (
    <>
      <div className="border-b border-r border-border/60 px-1.5 py-2 text-[9px] font-medium text-muted-foreground">
        {slot}
      </div>
      {WEEK.map((day) => {
        const appt = APPOINTMENTS[`${day}-${slot}`];
        return (
          <div
            key={`${day}-${slot}`}
            className="border-b border-r border-border/60 px-1 py-1"
          >
            {appt ? (
              <div
                className={`rounded bg-gradient-to-br p-1 text-[8.5px] leading-tight shadow-sm ${toneClasses[appt.tone]}`}
              >
                <p className="truncate font-semibold">{appt.doctor}</p>
                <p className="truncate opacity-90">{appt.type}</p>
              </div>
            ) : (
              <div className="h-full min-h-[20px] w-full rounded border border-dashed border-border/60" />
            )}
          </div>
        );
      })}
    </>
  );
}

interface RecordRow {
  name: string;
  meta: string;
  bp: string;
  hr: string;
  selected?: boolean;
}

const RECORD_ROWS: RecordRow[] = [
  { name: "Rohan Gupta", meta: "32 · Male · B+", bp: "118/76", hr: "72", selected: true },
  { name: "Priya Singh", meta: "28 · Female · O+", bp: "120/80", hr: "68" },
  { name: "Arjun Reddy", meta: "45 · Male · A+", bp: "132/85", hr: "78" },
  { name: "Sana Khan", meta: "36 · Female · AB+", bp: "116/72", hr: "70" },
];

export function RecordsRowMockup() {
  const selected = RECORD_ROWS.find((r) => r.selected)!;
  return (
    <MockupFrame>
      <div className="flex h-full flex-col">
        <div className="border-b border-border/60 px-5 py-4">
          <p className="text-[11px] font-medium text-muted-foreground">Selected patient</p>
          <p className="mt-0.5 font-heading text-base font-bold text-foreground">{selected.name}</p>
          <p className="text-[11px] text-muted-foreground">
            {selected.meta} · BP {selected.bp} · HR {selected.hr}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_72px_64px] gap-0 border-b border-border/60 bg-muted/30 px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Patient</span>
          <span className="text-right">BP</span>
          <span className="text-right">HR</span>
        </div>
        {RECORD_ROWS.map((row) => (
          <div
            key={row.name}
            className={`grid grid-cols-[1fr_72px_64px] items-center gap-0 border-b border-border/60 px-5 py-2.5 text-[11px] ${
              row.selected ? "bg-primary/5" : ""
            }`}
          >
            <div>
              <p className="font-semibold text-foreground">{row.name}</p>
              <p className="text-muted-foreground">{row.meta}</p>
            </div>
            <span className="text-right font-medium text-foreground/80">{row.bp}</span>
            <span className="text-right font-medium text-foreground/80">{row.hr}</span>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}

interface RxItem {
  name: string;
  dose: string;
  freq: string;
}

const RX_ITEMS: RxItem[] = [
  { name: "Amoxicillin", dose: "500 mg", freq: "3× daily · 5 days" },
  { name: "Paracetamol", dose: "650 mg", freq: "As needed · max 4/day" },
];

export function PrescriptionRowMockup() {
  return (
    <MockupFrame>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <FileSignature className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <p className="font-heading text-sm font-semibold text-foreground">New prescription</p>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">For Rohan Gupta · 32 · Cardiology</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
            <CheckCircle2 className="h-3 w-3" />
            No interactions
          </span>
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-2">
          {RX_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg border border-border/60 bg-white px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/8 text-primary">
                  <Pill className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-foreground">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">{item.freq}</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-foreground">{item.dose}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-amber-200/70 bg-amber-50/60 px-3 py-2">
          <div className="flex items-center gap-2 text-[11px] text-amber-800">
            <AlertTriangle className="h-3.5 w-3.5" />
            Allergy check: no penicillin sensitivity on file
          </div>
        </div>

        <button
          type="button"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-[12px] font-semibold text-white shadow-sm"
        >
          <Send className="h-3.5 w-3.5" />
          Sign &amp; send
        </button>
      </div>
    </MockupFrame>
  );
}

const ANALYTICS_BARS = [40, 65, 45, 80, 60, 95, 70, 55, 85, 65, 90, 75];
const ANALYTICS_KPIS = [
  { label: "Revenue (MTD)", value: "₹4.82L", delta: "+18.2%" },
  { label: "Visits", value: "1,284", delta: "+6.4%" },
  { label: "Avg. wait", value: "6 min", delta: "-12%" },
  { label: "Satisfaction", value: "4.9/5", delta: "+0.2" },
];

export function AnalyticsRowMockup() {
  return (
    <MockupFrame>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
              <TrendingUp className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <p className="font-heading text-sm font-semibold text-foreground">Practice analytics</p>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
            Last 12 weeks
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ANALYTICS_KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-border/60 bg-white px-3 py-2.5"
            >
              <p className="text-[10px] font-medium text-muted-foreground">{kpi.label}</p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">{kpi.value}</p>
              <p className="text-[10px] font-semibold text-emerald-600">{kpi.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex-1 rounded-lg border border-border/60 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-foreground">Patient flow</p>
            <p className="text-[10px] text-muted-foreground">Avg. 68 visits/day</p>
          </div>
          <div className="mt-2 flex h-[calc(100%-1.5rem)] items-end gap-1.5">
            {ANALYTICS_BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-b from-primary/80 to-accent/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export function TelemedicineRowMockup() {
  return (
    <MockupFrame>
      <div className="h-full bg-slate-900 p-3">
        <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="relative col-span-2 overflow-hidden rounded-lg bg-gradient-to-br from-primary via-secondary to-accent">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold text-white">
                Dr. Anjali Mehta · live
              </span>
              <span className="rounded-full bg-emerald-500/80 px-2 py-1 text-[10px] font-semibold text-white">
                HD · 00:08:42
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-amber-200 via-rose-200 to-emerald-200">
              <div className="absolute inset-x-0 bottom-0 bg-black/30 px-2 py-1 text-[10px] font-semibold text-white">
                Rohan Gupta
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-800/80 px-2 py-2">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <Mic className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <Video className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <VideoOff className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white"
              >
                <PhoneOff className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}