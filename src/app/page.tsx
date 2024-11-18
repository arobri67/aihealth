import { About } from "@/components/app-about";
import FAQSection from "@/components/app-faq/faq-section";
import HeroSection from "@/components/app-hero/hero-section";
import ListingSection from "@/components/app-listing/index";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ListingSection />
      <FAQSection />
      <About />
    </>
  );
}
