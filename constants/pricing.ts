import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For independent doctors and small clinics getting started.",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    cta: "Start Free Trial",
    features: [
      "Up to 2 doctors",
      "Appointment management",
      "Patient records",
      "Digital prescriptions",
      "Basic billing",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing clinics and multi-doctor practices.",
    monthlyPrice: 9999,
    yearlyPrice: 7999,
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Up to 15 doctors",
      "Everything in Starter",
      "Inventory management",
      "Lab report integration",
      "Telemedicine",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For hospitals and large healthcare networks.",
    monthlyPrice: 24999,
    yearlyPrice: 19999,
    cta: "Contact Sales",
    features: [
      "Unlimited doctors",
      "Everything in Growth",
      "Multi-location support",
      "Custom integrations & API",
      "Dedicated account manager",
      "99.9% uptime SLA",
      "24/7 premium support",
    ],
  },
];
