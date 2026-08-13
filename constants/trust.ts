import {
  ShieldCheck,
  Lock,
  KeyRound,
  FileClock,
  ServerCog,
  UserCog,
} from "lucide-react";
import type { BenefitItem } from "@/types";

export const trustPillars: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned by design",
    description:
      "Every workflow that touches protected health information is built to HIPAA's technical, administrative, and physical safeguard requirements. Business Associate Agreements available on request.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    description:
      "Data is encrypted in transit with TLS 1.2+ and at rest with AES-256. Encryption keys are managed and rotated independently of application infrastructure.",
  },
  {
    icon: ServerCog,
    title: "SOC 2-certified infrastructure",
    description:
      "Hosted on SOC 2 Type II-certified cloud infrastructure with redundant backups, automated failover, and a documented disaster recovery plan.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    description:
      "Every user gets the minimum access their role requires. Permissions are configurable per department, and access can be revoked instantly.",
  },
  {
    icon: FileClock,
    title: "Full audit logging",
    description:
      "Every view, edit, and export of patient data is logged with a timestamp and user identity, giving your compliance team a complete, exportable trail.",
  },
  {
    icon: UserCog,
    title: "Continuous monitoring",
    description:
      "Automated intrusion detection and regular third-party penetration testing keep the platform ahead of emerging threats.",
  },
];

export const trustFaqs = [
  {
    question: "Will you sign a Business Associate Agreement (BAA)?",
    answer:
      "Yes. We execute a BAA with every covered entity and business associate before any protected health information is processed.",
  },
  {
    question: "Where is patient data hosted?",
    answer:
      "Data is hosted in SOC 2 Type II-certified data centers with regional options available for organizations with data residency requirements.",
  },
  {
    question: "How often is the platform audited?",
    answer:
      "We undergo an annual SOC 2 Type II audit and commission independent penetration tests at least twice a year, with findings remediated on a fixed SLA.",
  },
  {
    question: "Can we export or delete our data?",
    answer:
      "Yes. Organizations retain full ownership of their data and can export or request deletion at any time, subject to applicable regulatory retention requirements.",
  },
];
