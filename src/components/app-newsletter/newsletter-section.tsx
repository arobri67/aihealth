import { NewsletterForm } from "../newsletter-form";
import SectionHeader from "../section-header";

const NewsletterSection = () => {
  return (
    <section className="h-full bg-accent/30 py-20" id="newsletter">
      <div className="container mx-auto">
        <SectionHeader
          title="Stay Updated on AI for Healthcare"
          subtitle="Subscribe to our newsletter for the latest updates on artificial intelligence in healthcare."
        />
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
