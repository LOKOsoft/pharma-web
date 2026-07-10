import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For independent doctors and small clinics getting started.",
    monthlyPrice: 49,
    yearlyPrice: 39,
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
    monthlyPrice: 129,
    yearlyPrice: 99,
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
    monthlyPrice: 349,
    yearlyPrice: 279,
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
