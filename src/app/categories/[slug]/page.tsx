import { notFound } from "next/navigation";

import { CompaniesList } from "@/components/companies-list";
import { ICategory, ICategoryPopulated } from "@/models/category";

export async function generateStaticParams() {
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json()
  );

  return categories.map((category: ICategory) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json()
  );

  const allCompaniesInCategory: ICategoryPopulated = categories.find(
    (category: ICategoryPopulated) => category.slug === slug
  );

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
