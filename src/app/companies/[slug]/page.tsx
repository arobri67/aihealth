import CompanyDetails from "@/components/company-details";
import { getCompanyDetails, getCompanySlug } from "@/lib/actions";

export async function generateStaticParams() {
  const companySlugs = await getCompanySlug();

  return companySlugs.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const selectedCompany = await getCompanyDetails(params.slug);

  return {
    title: `${selectedCompany.name} - AI for Healthcare Hub`,
    description: selectedCompany.companyDescription.briefDescription,
    openGraph: {
      title: `${selectedCompany.name} - AI for Healthcare Hub`,
      description: selectedCompany.companyDescription.briefDescription,
      type: "website",
      url: `https://aiforhealthcarehub.com/companies/${selectedCompany.slug}`,
      images: [
        {
          url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
          alt: `${selectedCompany.name} - AI for Healthcare Hub`,
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
      title: `${selectedCompany.name} - AI for Healthcare Hub`,
      description: selectedCompany.companyDescription.briefDescription,
      images: [
        {
          url: "https://utfs.io/a/ib6tfkyh7s/GmyjMcnX7dhCkXvOv8jrUEiVcDq2KmJ5ao4NeFY8dHB9gIOl",
          alt: `${selectedCompany.name} - AI for Healthcare Hub`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://aiforhealthcarehub.com/companies/${selectedCompany.slug}`,
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const selectedCompany = await getCompanyDetails(slug);

  return (
    <>
      <CompanyDetails company={selectedCompany} />
    </>
  );
}
