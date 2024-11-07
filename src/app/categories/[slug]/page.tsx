import { notFound } from "next/navigation";

import { CompaniesList } from "@/components/companies-list";
import { ICategory } from "@/models/category";

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

  const allCompaniesInCategory = categories.find(
    (category: ICategory) => category.slug === slug
  );

  if (!allCompaniesInCategory) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="container mx-auto py-20">
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-bricolage text-5xl font-bold md:text-6xl">
            {allCompaniesInCategory.name}
          </h1>
          <p className="mb-8 text-muted-foreground">subheadling</p>
        </div>
        <CompaniesList companies={allCompaniesInCategory.companies} />
      </section>
    </main>
  );
}
