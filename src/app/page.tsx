import FAQSection from "@/components/app-faq/faq-section";
import HeroSection from "@/components/app-hero/hero-section";
import NewsletterSection from "@/components/app-newsletter/newsletter-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <NewsletterSection />
      <FAQSection />
    </div>
  );
}
