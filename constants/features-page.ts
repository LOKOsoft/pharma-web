import type { LucideIcon } from "lucide-react";

import { patientFeatures, productFeatures } from "@/constants/features";

export type DoctorMockup = "dashboard" | "appointments" | "records" | "prescription" | "analytics" | "telemedicine";
export type PatientMockup = "phone-book" | "phone-records" | "phone-reminders" | "phone-billing";

export interface FeaturePageItem {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  audience: "doctor" | "patient";
  mockup?: DoctorMockup | PatientMockup;
}

const findProduct = (title: string): { icon: LucideIcon; title: string } => {
  const match = productFeatures.find((f) => f.title === title);
  if (!match) throw new Error(`features-page: missing product feature "${title}"`);
  return { icon: match.icon, title: match.title };
};

const findPatient = (title: string): { icon: LucideIcon; title: string } => {
  const match = patientFeatures.find((f) => f.title === title);
  if (!match) throw new Error(`features-page: missing patient feature "${title}"`);
  return { icon: match.icon, title: match.title };
};

export const featuresPage: FeaturePageItem[] = [
  {
    ...findProduct("Doctor Dashboard"),
    description: "Patient queue, history, and notes in one clean workspace.",
    points: [
      "Unified patient timeline and full visit history",
      "Structured visit notes with custom templates",
      "Instant access to lab results and diagnostics",
      "Cross-device sync across web, tablet, and mobile",
      "Quick filters for today's queue and follow-ups",
      "One-click jump to prescriptions, records, or billing",
    ],
    audience: "doctor",
    mockup: "dashboard",
  },
  {
    ...findProduct("Appointment Management"),
    description: "Smart scheduling with real-time availability and zero double-bookings.",
    points: [
      "Real-time availability across departments",
      "Automated SMS & email reminders",
      "Smart waitlists and rescheduling",
      "Sync with doctor calendars instantly",
      "Recurring appointments for chronic care",
      "Custom booking rules per doctor or clinic",
    ],
    audience: "doctor",
    mockup: "appointments",
  },
  {
    ...findProduct("Patient Records"),
    description: "Secure health records that follow every patient and provider.",
    points: [
      "Structured history, meds, allergies",
      "Encrypted at rest and in transit",
      "Granular access controls per role",
      "Audit log of every view and edit",
    ],
    audience: "doctor",
    mockup: "records",
  },
  {
    ...findProduct("Digital Prescription"),
    description: "E-prescriptions with drug-interaction checks, sent instantly.",
    points: [
      "Drug-interaction and allergy alerts",
      "One-tap send to partner pharmacies",
      "Digital signatures and timestamps",
      "Refill tracking for chronic patients",
    ],
    audience: "doctor",
    mockup: "prescription",
  },
  {
    ...findProduct("Billing & Invoicing"),
    description: "Automated, itemized billing with insurance workflows built in.",
    points: [
      "Automated, itemized invoices",
      "Insurance claim workflows",
      "Multi-currency, multi-branch support",
      "Receipts delivered to patients",
    ],
    audience: "doctor",
  },
  {
    ...findPatient("Book in Seconds"),
    description: "Pick a doctor, see real slots, confirm in a tap.",
    points: [
      "See real-time doctor availability",
      "Pick a slot without a phone call",
      "Instant confirmation and reminders",
      "Reschedule in two taps",
    ],
    audience: "patient",
    mockup: "phone-book",
  },
  {
    ...findPatient("Health Records On Hand"),
    description: "Visits, prescriptions, and labs on any device.",
    points: [
      "Visit history and prescriptions",
      "Lab reports as soon as they're ready",
      "Available on web and mobile",
      "Share securely with any provider",
    ],
    audience: "patient",
    mockup: "phone-records",
  },
  {
    ...findPatient("Timely Reminders"),
    description: "Nudges before every visit, refill, and follow-up.",
    points: [
      "SMS and email nudges before visits",
      "Refill alerts before you run out",
      "Follow-up reminders after care",
      "Quiet hours that respect your time",
    ],
    audience: "patient",
    mockup: "phone-reminders",
  },
  {
    ...findPatient("Simple Payments"),
    description: "Clear bills with online payment and instant receipts.",
    points: [
      "Clear, itemized bills",
      "Pay online with any method",
      "Instant receipts by email",
      "Track every payment in one place",
    ],
    audience: "patient",
    mockup: "phone-billing",
  },
];
