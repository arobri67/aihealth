import { MetadataRoute } from "next";

import { env } from "@/env/client";
import { getCategorySlug, getCompanySlug } from "@/lib/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const companySlugs = await getCompanySlug();

  const companyEntries: MetadataRoute.Sitemap = companySlugs.map(
    ({ slug, updatedAt }) => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/companies/${slug}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );
  const categoriesSlugs = await getCategorySlug();
  const categoryEntries: MetadataRoute.Sitemap = categoriesSlugs.map(
    ({ slug, updatedAt }) => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/categories/${slug}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(2024, 11, 20),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/categories`,
      lastModified: new Date(2024, 11, 20),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/companies`,
      lastModified: new Date(2024, 11, 20),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...companyEntries,
    ...categoryEntries,
  ];
}
