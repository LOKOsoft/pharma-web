import { Building2, Stethoscope, UserRound, PillBottle } from "lucide-react";
import type { SolutionItem } from "@/types";

export const solutions: SolutionItem[] = [
  {
    icon: Building2,
    title: "For Hospitals & Clinics",
    description:
      "Run every department — from the front desk to the operating room — on one connected platform.",
    href: "/solutions#hospitals",
    bullets: [
      "Multi-department scheduling",
      "Centralized patient records",
      "Real-time bed & resource management",
      "Consolidated billing across locations",
    ],
  },
  {
    icon: Stethoscope,
    title: "For Doctors",
    description:
      "A focused clinical workspace that surfaces what matters and gets out of your way.",
    href: "/solutions#doctors",
    bullets: [
      "Unified patient timeline",
      "One-click e-prescriptions",
      "Telemedicine built in",
      "Smart appointment queue",
    ],
  },
  {
    icon: UserRound,
    title: "For Receptionists & Staff",
    description:
      "Streamlined front-office tools that make check-in, scheduling, and billing effortless.",
    href: "/solutions#receptionists",
    bullets: [
      "Drag-and-drop scheduling",
      "Automated reminders",
      "Instant insurance verification",
      "Simple invoicing & receipts",
    ],
  },
  {
    icon: PillBottle,
    title: "For Pharmacists",
    description:
      "Connected prescription and inventory tools that reduce errors and speed up fulfillment.",
    href: "/solutions#pharmacists",
    bullets: [
      "Real-time e-prescription sync",
      "Drug interaction alerts",
      "Automated stock tracking",
      "Supplier reorder workflows",
    ],
  },
];
