import AddCompany from "@/components/app-add-company";
import FAQSection from "@/components/app-faq/faq-section";
import HeroSection from "@/components/app-hero/hero-section";
import ListingSection from "@/components/app-listing/index";
import NewsletterSection from "@/components/app-newsletter/newsletter-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ListingSection />
      <NewsletterSection />
      <FAQSection />
      <AddCompany />
    </div>
  );
}
