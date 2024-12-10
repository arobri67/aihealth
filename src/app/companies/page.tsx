import { Metadata } from "next";

import { CompaniesList } from "@/components/companies-list";
import SectionHeader from "@/components/section-header";
import { env } from "@/env/client";
import { getCompaniesOverview } from "@/lib/actions";
import { generateCommonMetadata } from "@/lib/metadata";

const title = "All Companies of AI for Healthcare Hub";
const description = "Explore all companies listed on AI for Healthcare Hub";
const url = `${env.NEXT_PUBLIC_BASE_URL}/companies`;
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

export default async function CompaniesPage() {
  const companies = await getCompaniesOverview();

  return (
    <section className="container mx-auto py-20">
      <SectionHeader
        title="All Companies of AI for Healthcare Hub"
        subtitle="Explore all companies listed on AI for Healthcare Hub"
        h1={true}
      />
      <CompaniesList companies={companies} />
    </section>
  );
}
