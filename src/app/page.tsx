import { Metadata } from "next";

import { About } from "@/components/app-about";
import FAQSection from "@/components/app-faq/faq-section";
import HeroSection from "@/components/app-hero/hero-section";
import ListingSection from "@/components/app-listing/index";

export const metadata: Metadata = {
  title:
    "AI for Healthcare: Transforming Patient Care with Artificial Intelligence",
  description:
    "Explore how AI for healthcare enhances medical imaging analysis, optimizes electronic health records, and accelerates drug discovery and development.",
  keywords: [
    "AI for healthcare",
    "medical imaging analysis",
    "electronic health records",
    "drug discovery",
    "AI in healthcare",
    "AI in medicine",
  ],
  openGraph: {
    url: "https://aiforhealthcarehub.com",
    type: "website",
    title:
      "AI for Healthcare: Transforming Patient Care with Artificial Intelligence",
    description:
      "Explore how AI for healthcare enhances medical imaging analysis, optimizes electronic health records, and accelerates drug discovery and development.",
    images: [
      {
        url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
        width: 1200,
        height: 630,
        alt: "AI for Healthcare Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Healthcare: Transforming Patient Care with Artificial Intelligence",
    description:
      "Explore how AI for healthcare enhances medical imaging analysis, optimizes electronic health records, and accelerates drug discovery and development.",
    images: [
      {
        url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
        width: 1200,
        height: 630,
        alt: "AI for Healthcare Hub",
      },
    ],
  },
  alternates: {
    canonical: "https://aiforhealthcarehub.com",
  },
};

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
