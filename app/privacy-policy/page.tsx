import type { Metadata } from "next";

import { LegalContent } from "@/components/shared/legal-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Pharma Plus Privacy Policy to understand how we collect, use, and protect your data and your patients' data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as when you create an account, book a demo, or contact our support team — including your name, email address, organization, and role.",
      "When your organization uses Pharma Plus, we process protected health information (PHI) and other patient data on your behalf as a service provider, strictly in accordance with your instructions and applicable healthcare privacy laws.",
    ],
  },
  {
    heading: "2. How We Use Information",
    body: [
      "We use collected information to provide, maintain, and improve the Pharma Plus platform, to communicate with you about your account, and to provide customer support.",
      "We do not sell personal information or patient data to third parties, and we never use patient health data for advertising purposes.",
    ],
  },
  {
    heading: "3. Data Security",
    body: [
      "Pharma Plus employs industry-standard security measures including encryption in transit and at rest, role-based access controls, regular security audits, and continuous monitoring.",
      "Our infrastructure is hosted in SOC 2-certified data centers, and our practices are designed to align with HIPAA requirements for covered entities and business associates.",
    ],
  },
  {
    heading: "4. Data Retention",
    body: [
      "We retain data for as long as your account is active or as needed to provide services. Healthcare organizations may configure retention policies in accordance with applicable regulatory requirements.",
    ],
  },
  {
    heading: "5. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have rights to access, correct, export, or delete your personal information. Requests can be submitted to our privacy team at the contact details below.",
    ],
  },
  {
    heading: "6. Third-Party Services",
    body: [
      "We work with vetted subprocessors for infrastructure, communications, and analytics, each bound by data protection agreements consistent with this policy.",
    ],
  },
  {
    heading: "7. Changes to This Policy",
    body: [
      "We may update this policy from time to time. Material changes will be communicated via email or an in-product notice prior to taking effect.",
    ],
  },
  {
    heading: "8. Contact Us",
    body: [
      `Questions about this Privacy Policy can be directed to ${siteConfig.contact.email} or by mail to ${siteConfig.contact.address}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalContent
      title="Privacy Policy"
      updated="July 1, 2026"
      intro="This Privacy Policy explains how Pharma Plus collects, uses, and safeguards information when you use our website and platform. We built Pharma Plus to handle sensitive healthcare data responsibly, and this policy reflects that commitment."
      sections={sections}
    />
  );
}
