import { notFound } from "next/navigation";

import { CompaniesList } from "@/components/companies-list";
import { getCategorySlug, getCompaniesInCategory } from "@/lib/actions";

export async function generateStaticParams() {
  const categoriesSlugs = await getCategorySlug();

  return categoriesSlugs.map((category) => ({
    slug: category.slug,
  }));
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
