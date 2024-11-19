import { notFound } from "next/navigation";

import { CompaniesList } from "@/components/companies-list";
import {
  getCategoryDetails,
  getCategorySlug,
  getCompaniesInCategory,
} from "@/lib/actions";

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
  return {
    title: `${category.name} - AI for Healthcare Hub`,
    description: category.description,
    openGraph: {
      title: `${category.name} - AI for Healthcare Hub`,
      description: category.description,
      type: "website",
      url: `https://aiforhealthcarehub.com/categories/${category.slug}`,
      images: [
        {
          url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
          alt: `${category.name} - AI for Healthcare Hub`,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@irboa67",
      creator: "@irboa67",
      title: `${category.name} - AI for Healthcare Hub`,
      description: category.description,
      images: [
        {
          url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
          alt: `${category.name} - AI for Healthcare Hub`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://aiforhealthcarehub.com/categories/${category.slug}`,
    },
  };
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
