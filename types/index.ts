import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WorkflowStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  custom?: boolean;
  cta: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  bullets: string[];
}
