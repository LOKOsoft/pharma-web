import { CalendarPlus, Stethoscope, FileText, CreditCard, History } from "lucide-react";
import type { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    icon: CalendarPlus,
    title: "Book Appointment",
    description:
      "Patients book online in seconds, choosing a doctor, department, and time slot that fits.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Doctor Consultation",
    description:
      "Clinicians review history and consult in person or via telemedicine, with notes auto-saved.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Digital Prescription",
    description:
      "Prescriptions are generated instantly and routed to the patient and pharmacy in real time.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Billing",
    description:
      "Invoices are auto-generated with insurance handling, payment links, and instant receipts.",
  },
  {
    number: "05",
    icon: History,
    title: "Patient History",
    description:
      "Every visit, prescription, and result is stored in one longitudinal, searchable timeline.",
  },
];
