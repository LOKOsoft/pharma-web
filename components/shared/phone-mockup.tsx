"use client";

import {
  Activity,
  Bell,
  CalendarCheck,
  ChevronRight,
  CreditCard,
  Droplet,
  FileText,
  FlaskConical,
  HeartPulse,
  Home,
  Pill,
  Stethoscope,
  User,
} from "lucide-react";

export type PhoneMockupVariant = "home" | "book" | "records" | "reminders" | "billing";

interface DoctorRow {
  name: string;
  specialty: string;
  slot: string;
}

const BOOK_DOCTORS: DoctorRow[] = [
  { name: "Dr. Anjali Mehta", specialty: "Cardiology", slot: "Tomorrow · 10:15 AM" },
  { name: "Dr. Rohan Kapoor", specialty: "Dermatology", slot: "Wed · 4:30 PM" },
  { name: "Dr. Priya Iyer", specialty: "Pediatrics", slot: "Fri · 11:00 AM" },
];

const RECORDS_RE = [
  { title: "Blood Test Report", meta: "Aug 12 · Ready" },
  { title: "Prescription Refill", meta: "Aug 5 · Sent" },
  { title: "Visit Summary", meta: "Jul 28 · Dr. Mehta" },
];

const REMINDERS = [
  {
    icon: CalendarCheck,
    title: "Upcoming visit",
    meta: "Tomorrow · 10:15 AM with Dr. Mehta",
  },
  {
    icon: Pill,
    title: "Refill reminder",
    meta: "Atorvastatin 10mg · 2 doses left",
  },
  { icon: FlaskConical, title: "Lab results ready", meta: "Blood Test Report · Aug 12" },
];

const BILLING_LINES = [
  { label: "Consultation — Dr. Mehta", amount: "₹600" },
  { label: "ECG", amount: "₹450" },
  { label: "Pharmacy", amount: "₹318" },
];

interface PhoneMockupProps {
  variant?: PhoneMockupVariant;
}

export function PhoneMockup({ variant = "home" }: PhoneMockupProps) {
  return (
    <div className="glow-soft relative mx-auto h-[600px] w-[296px] rounded-[2.5rem] border-4 border-slate-900 bg-slate-900 p-1 shadow-[0_50px_90px_-20px_rgba(0,0,0,0.55),0_25px_45px_-15px_rgba(0,0,0,0.4)]">
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
            {variant === "home" && <HomeCard />}
            {variant === "book" && <BookCard />}
            {variant === "records" && <RecordsCard />}
            {variant === "reminders" && <RemindersCard />}
            {variant === "billing" && <BillingCard />}

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { icon: HeartPulse, value: "72", label: "BPM" },
                { icon: Droplet, value: "B+", label: "Blood" },
                { icon: Activity, value: "98%", label: "SpO2" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-border/60 bg-white p-2.5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/8 text-primary">
                    <stat.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-2 text-sm font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] font-medium text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {variant === "records" ? (
              <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Recent records</p>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
              </div>
            ) : null}
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
  );
}

function HomeCard() {
  return (
    <>
      <div className="rounded-md bg-gradient-to-br from-primary via-secondary to-accent p-4 text-left text-white">
        <div className="flex items-center gap-2 text-xs font-medium text-white/80">
          <CalendarCheck className="h-3.5 w-3.5" />
          Upcoming visit
        </div>
        <p className="mt-2 text-sm font-semibold">Dr. Anjali Mehta</p>
        <p className="text-xs text-white/80">Cardiology · Tomorrow, 10:15 AM</p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: CalendarCheck, label: "Book" },
          { icon: FileText, label: "Records" },
          { icon: Bell, label: "Reminders" },
          { icon: CreditCard, label: "Billing" },
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

      <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Recent records</p>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="mt-2.5 flex flex-col divide-y divide-border/60">
          {RECORDS_RE.slice(0, 2).map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function BookCard() {
  return (
    <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Pick a doctor</p>
        <span className="text-[10px] font-medium text-muted-foreground">Today</span>
      </div>
      <div className="mt-3 flex flex-col divide-y divide-border/60">
        {BOOK_DOCTORS.map((doc) => (
          <div key={doc.name} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <Stethoscope className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{doc.name}</p>
                <p className="text-[11px] text-muted-foreground">{doc.specialty}</p>
              </div>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {doc.slot.split(" · ")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecordsCard() {
  return (
    <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">All records</p>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="mt-2.5 flex flex-col divide-y divide-border/60">
        {RECORDS_RE.map((item) => (
          <div key={item.title} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/8 text-primary">
                <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-[11px] text-muted-foreground">{item.meta}</p>
              </div>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RemindersCard() {
  return (
    <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Notifications</p>
        <span className="text-[10px] font-medium text-muted-foreground">3 new</span>
      </div>
      <div className="mt-3 flex flex-col gap-2.5">
        {REMINDERS.map((item) => (
          <div key={item.title} className="flex items-start gap-2.5">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
              <item.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-[11px] text-muted-foreground">{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BillingCard() {
  return (
    <div className="rounded-md border border-border/60 bg-white p-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Bill summary</p>
        <span className="text-[10px] font-medium text-muted-foreground">Aug 12</span>
      </div>
      <div className="mt-3 flex flex-col divide-y divide-border/60">
        {BILLING_LINES.map((line) => (
          <div key={line.label} className="flex items-center justify-between py-1.5 first:pt-0">
            <p className="text-[11px] text-muted-foreground">{line.label}</p>
            <p className="text-[11px] font-semibold text-foreground">{line.amount}</p>
          </div>
        ))}
        <div className="flex items-center justify-between py-2 first:pt-0">
          <p className="text-sm font-semibold text-foreground">Total</p>
          <p className="text-sm font-bold text-foreground">₹1,368</p>
        </div>
      </div>
      <button
        type="button"
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-[11px] font-semibold text-white"
      >
        <CreditCard className="h-3 w-3" />
        Pay now
      </button>
    </div>
  );
}

