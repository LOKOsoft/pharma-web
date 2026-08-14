import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by doctors and healthcare teams"
        description="Hear from the clinics, hospitals, and pharmacists who run their operations on 9Doctor."
      />

      <div className="relative mt-14 [overflow-x:hidden] [overflow-y:visible]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-6 py-4">
          {items.map((testimonial, i) => (
            <div key={`${testimonial.name}-${i}`} className="w-[32rem] shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
