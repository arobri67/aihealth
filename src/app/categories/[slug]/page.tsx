import { notFound } from "next/navigation";

import CompaniesList from "@/components/companies-list";
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
      <h1 className="text-center text-4xl font-bold">
        {allCompaniesInCategory.name}
      </h1>
      <section className="container mx-auto py-8">
        <CompaniesList companies={allCompaniesInCategory.companies} />
      </section>
    </main>
  );
}
