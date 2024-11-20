import { Metadata } from "next";

import { About } from "@/components/app-about";
import FAQSection from "@/components/app-faq/faq-section";
import HeroSection from "@/components/app-hero/hero-section";
import ListingSection from "@/components/app-listing/index";
import { env } from "@/env/client";
import { generateCommonMetadata } from "@/lib/metadata";

const title = "AI for Healthcare Hub";
const description =
  "Explore how AI for healthcare enhances medical imaging analysis, optimizes electronic health records, and accelerates drug discovery and development.";
const url = `${env.NEXT_PUBLIC_BASE_URL}`;
const imageUrl = `${env.NEXT_PUBLIC_OPENGRAPH_PIC}`;
const keywords = [
  "AI for healthcare",
  "medical imaging analysis",
  "electronic health records",
  "drug discovery",
  "AI in healthcare",
  "AI in medicine",
];

export const metadata: Metadata = generateCommonMetadata({
  title,
  description,
  url,
  imageUrl,
  keywords,
});

export default function Home() {
  return (
    <section>
      <HeroSection />
      <ListingSection />
      <FAQSection />
      <About />
    </section>
  );
}
