import CompanyDetails from "@/components/company-details";
import { getCompanyDetails, getCompanySlug } from "@/lib/actions";

export async function generateStaticParams() {
  const companySlugs = await getCompanySlug();

  return companySlugs.map((company) => ({
    slug: company.slug,
  }));
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
