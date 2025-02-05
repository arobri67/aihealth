import { MetadataRoute } from "next";

import { env } from "@/env/client";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
