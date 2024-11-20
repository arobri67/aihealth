import CompanyDetails from "@/components/company-details";
import { env } from "@/env/client";
import { getCompanyDetails, getCompanySlug } from "@/lib/actions";
import { generateCommonMetadata } from "@/lib/metadata";

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

  const title = `${selectedCompany.name} - AI for Healthcare Hub`;
  const description = selectedCompany.companyDescription.briefDescription;
  const url = `${env.NEXT_PUBLIC_BASE_URL}/companies/${selectedCompany.slug}`;
  const imageUrl = `${env.NEXT_PUBLIC_OPENGRAPH_PIC}`;
  const keywords = [
    "AI for healthcare",
    "medical imaging analysis",
    "electronic health records",
    "drug discovery",
    "AI in healthcare",
    "AI in medicine",
  ];

  return generateCommonMetadata({
    title,
    description,
    url,
    imageUrl,
    keywords,
  });
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
