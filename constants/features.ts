import {
  CalendarCheck,
  LayoutDashboard,
  FolderHeart,
  FileSignature,
  Receipt,
  Boxes,
  FlaskConical,
  BarChart3,
  Video,
  BellRing,
} from "lucide-react";
import type { FeatureItem } from "@/types";

export const productFeatures: FeatureItem[] = [
  {
    icon: CalendarCheck,
    title: "Appointment Management",
    description:
      "Smart scheduling with real-time availability, automated reminders, and zero double-bookings across every department.",
  },
  {
    icon: LayoutDashboard,
    title: "Doctor Dashboard",
    description:
      "A command center for clinicians — patient queue, history, and notes in one clean, distraction-free workspace.",
  },
  {
    icon: FolderHeart,
    title: "Patient Records",
    description:
      "Secure, structured electronic health records that follow the patient across every visit and provider.",
  },
  {
    icon: FileSignature,
    title: "Digital Prescription",
    description:
      "E-prescriptions with drug-interaction checks, sent instantly to the patient and partner pharmacies.",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing",
    description:
      "Automated, itemized billing with insurance workflows, receipts, and multi-currency support built in.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Real-time stock tracking for medicines and equipment, with low-stock alerts and supplier ordering.",
  },
  {
    icon: FlaskConical,
    title: "Lab Reports",
    description:
      "Digitized lab orders and results delivered straight into the patient record, ready for physician review.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Live operational dashboards covering revenue, patient flow, and clinical outcomes for better decisions.",
  },
  {
    icon: Video,
    title: "Telemedicine",
    description:
      "HD video consultations with integrated notes, prescriptions, and follow-ups — no third-party app required.",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Automated SMS, email, and push alerts for appointments, refills, lab results, and billing reminders.",
  },
];
