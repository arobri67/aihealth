import { MetadataRoute } from "next";

import { env } from "@/env/client";
import { getCategorySlug, getCompanySlug } from "@/lib/actions";
import { getPosts } from "@/lib/posts";

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

  const posts = await getPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, publishedAt }) => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: new Date(publishedAt || ""),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date("12-09-2024"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/categories`,
      lastModified: new Date("12-09-2024"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/companies`,
      lastModified: new Date("12-09-2024"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date("12-09-2024"),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...companyEntries,
    ...categoryEntries,
    ...postEntries,
  ];
}
