import { Metadata } from "next";

import CategoryFilter from "@/components/category-filter";
import SectionHeader from "@/components/section-header";
import { env } from "@/env/client";
import { getCategories } from "@/lib/actions";
import { generateCommonMetadata } from "@/lib/metadata";

const title = "All Categories of AI for Healthcare Hub";
const description =
  "Currently we only have 10 categories, but we will add more soon!";
const url = `${env.NEXT_PUBLIC_BASE_URL}/categories`;
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

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <section className="container mx-auto py-20">
      <SectionHeader
        title="All Categories of AI for Healthcare Hub"
        subtitle="Currently we only have 10 categories, but we will add more soon!"
      />
      <CategoryFilter categories={categories} />
    </section>
  );
}
