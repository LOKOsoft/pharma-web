import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by doctors and healthcare teams"
        description="Hear from the clinics, hospitals, and pharmacists who run their operations on Pharma Plus."
      />

      <RevealGroup
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.08}
      >
        {testimonials.map((testimonial) => (
          <RevealItem key={testimonial.name} direction="up" className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
