type MetadataProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  keywords: string[];
};

export function generateCommonMetadata({
  title,
  description,
  url,
  imageUrl,
  keywords,
}: MetadataProps) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      siteName: "AI for Healthcare Hub",
      description,
      type: "website",
      url,
      images: [
        {
          url: imageUrl,
          alt: title,
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
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: title,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}
