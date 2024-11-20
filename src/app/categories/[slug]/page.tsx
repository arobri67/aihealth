import { notFound } from "next/navigation";

import { CompaniesList } from "@/components/companies-list";
import { env } from "@/env/client";
import {
  getCategoryDetails,
  getCategorySlug,
  getCompaniesInCategory,
} from "@/lib/actions";
import { generateCommonMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const categoriesSlugs = await getCategorySlug();

  return categoriesSlugs.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = await getCategoryDetails(params.slug);

  const title = `${category.name} - AI for Healthcare Hub`;
  const description = category.description;
  const url = `${env.NEXT_PUBLIC_BASE_URL}/categories/${category.slug}`;
  const imageUrl = `${env.NEXT_PUBLIC_OPENGRAPH_PIC}`;
  const keywords = [
    "AI for healthcare",
    "medical imaging analysis",
    "electronic health records",
    "drug discovery",
    "AI in healthcare",
    "AI in medicine",
  ];

  return generateCommonMetadata({
    title,
    description,
    url,
    imageUrl,
    keywords,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const allCompaniesInCategory = await getCompaniesInCategory(slug);

  if (!allCompaniesInCategory) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="container mx-auto py-20">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-bricolage text-4xl font-bold md:text-5xl">
            {allCompaniesInCategory.name}
          </h2>
          <p className="mb-8 text-base text-muted-foreground md:text-lg">
            {allCompaniesInCategory.description}
          </p>
        </div>
        <CompaniesList companies={allCompaniesInCategory.companies} />
      </section>
    </main>
  );
}
