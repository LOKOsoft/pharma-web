import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faq";

export function FAQ() {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about getting started with 9Doctor."
      />

      <Reveal direction="up" className="mx-auto mt-14 max-w-4xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`item-${i}`}
              className="shadow-[0_10px_30px_-12px_rgba(15,23,42,0.12),0_4px_12px_-6px_rgba(15,23,42,0.08)]"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
