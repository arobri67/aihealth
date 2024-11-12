import { getFaqsContent } from "@/lib/faq";

import SectionHeader from "../section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

const FAQSection = async () => {
  const content = await getFaqsContent();
  return (
    <section className="h-full bg-background py-20">
      <div className="container mx-auto">
        <SectionHeader
          title="F.A.Q."
          subtitle="Find answers to common questions about AI for healthcare, its applications, and how to navigate our platform."
        />
        <Accordion type="single" collapsible className="w-full space-y-4">
          {content.map((faq) => (
            <AccordionItem
              key={faq._id}
              value={faq.order}
              className="rounded-3xl border border-accent/20 bg-card px-6 py-3 shadow">
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
