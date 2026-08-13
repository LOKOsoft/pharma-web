import type { Metadata } from "next";

import { LegalContent } from "@/components/shared/legal-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the 9Doctor Terms of Service governing use of our Doctor & Patient Management System platform.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using 9Doctor, you agree to be bound by these Terms of Service and our Privacy Policy. If you are using the platform on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    heading: "2. Description of Service",
    body: [
      "9Doctor provides a Doctor & Patient Management System including appointment scheduling, patient records, digital prescriptions, billing, inventory management, and telemedicine tools, offered on a subscription basis.",
    ],
  },
  {
    heading: "3. Accounts & Eligibility",
    body: [
      "You must provide accurate registration information and are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "4. Subscription & Billing",
    body: [
      "Paid plans are billed monthly or annually as selected at checkout. Fees are non-refundable except as required by law or as explicitly stated in your order form. We may change pricing with 30 days' notice.",
    ],
  },
  {
    heading: "5. Acceptable Use",
    body: [
      "You agree not to misuse the platform, including attempting unauthorized access, interfering with service integrity, or using 9Doctor to store or transmit unlawful content.",
    ],
  },
  {
    heading: "6. Data Ownership & Compliance",
    body: [
      "You retain ownership of all patient and organizational data you input into 9Doctor. Where applicable, we act as a business associate under HIPAA and will execute a Business Associate Agreement (BAA) with covered entities upon request.",
    ],
  },
  {
    heading: "7. Service Availability",
    body: [
      "We target 99.9% uptime for the platform and will provide advance notice of planned maintenance where reasonably possible. Enterprise plans include a formal SLA with service credits.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "Either party may terminate the subscription in accordance with the order form. Upon termination, you may export your data for a period of 30 days before it is permanently deleted.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, 9Doctor shall not be liable for indirect, incidental, or consequential damages arising from use of the platform.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      `For questions about these Terms, contact us at ${siteConfig.contact.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalContent
      title="Terms of Service"
      updated="July 1, 2026"
      intro="These Terms of Service govern your access to and use of 9Doctor. Please read them carefully — they contain important information about your rights and obligations as a customer."
      sections={sections}
    />
  );
}
