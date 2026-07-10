import { CalendarCheck, LayoutDashboard, FileSignature, Video } from "lucide-react";
import type { FeatureHighlight } from "@/components/sections/feature-highlights";

export const featureHighlights: FeatureHighlight[] = [
  {
    icon: CalendarCheck,
    eyebrow: "Scheduling",
    title: "Appointment management that eliminates no-shows",
    description:
      "Give patients a beautiful self-service booking experience while your staff gets a real-time, conflict-free calendar across every doctor and department.",
    points: [
      "Real-time availability across departments",
      "Automated SMS & email reminders",
      "Smart waitlists and rescheduling",
      "Sync with doctor calendars instantly",
    ],
    metrics: [
      { label: "Fewer no-shows", value: "40%" },
      { label: "Booking time", value: "< 60s" },
    ],
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Clinical workspace",
    title: "A doctor dashboard built for focus, not clutter",
    description:
      "Every consultation starts with full context — history, medications, and lab results — in a workspace designed to disappear into the background.",
    points: [
      "Unified patient timeline & history",
      "Structured visit notes with templates",
      "Instant access to lab results",
      "Cross-device sync, always up to date",
    ],
    metrics: [
      { label: "Faster charting", value: "2.4x" },
      { label: "Setup time", value: "0 min" },
    ],
  },
  {
    icon: FileSignature,
    eyebrow: "Prescriptions",
    title: "Digital prescriptions with built-in safety checks",
    description:
      "Generate accurate, legible prescriptions in seconds — automatically checked for drug interactions and routed straight to the patient's preferred pharmacy.",
    points: [
      "Real-time drug interaction alerts",
      "One-click routing to partner pharmacies",
      "Refill requests handled automatically",
      "Full audit trail for compliance",
    ],
    metrics: [
      { label: "Prescription errors", value: "-65%" },
      { label: "Fulfillment time", value: "3 min" },
    ],
  },
  {
    icon: Video,
    eyebrow: "Telemedicine",
    title: "Video consultations that feel like your platform",
    description:
      "HD video visits with notes, prescriptions, and billing built in — no third-party links, no context switching, no dropped calls.",
    points: [
      "One-click, browser-based video visits",
      "Live notes and prescriptions during calls",
      "Automatic visit summaries for patients",
      "Secure, encrypted end-to-end",
    ],
    metrics: [
      { label: "Patient satisfaction", value: "4.9/5" },
      { label: "Avg. wait time", value: "90s" },
    ],
  },
];
