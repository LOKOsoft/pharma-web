import { ShieldCheck, Zap, Layers, HeartHandshake, Lock, Sparkles } from "lucide-react";
import type { BenefitItem } from "@/types";

export const benefits: BenefitItem[] = [
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Every workflow is optimized to take seconds, not minutes — from check-in to checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "HIPAA-aligned infrastructure with end-to-end encryption and granular access controls.",
  },
  {
    icon: Layers,
    title: "All-in-one platform",
    description:
      "Replace a dozen disconnected tools with a single, unified system your whole team loves.",
  },
  {
    icon: HeartHandshake,
    title: "Designed with clinicians",
    description:
      "Built alongside real doctors and receptionists to match how healthcare actually works.",
  },
  {
    icon: Lock,
    title: "Data you control",
    description:
      "Full audit trails, role-based permissions, and complete ownership of your patient data.",
  },
  {
    icon: Sparkles,
    title: "Delightful experience",
    description:
      "A premium, intuitive interface that reduces training time and clinician burnout.",
  },
];
