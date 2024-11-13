import { notFound } from "next/navigation";

import CompanyDetails from "@/components/company-details";
import { ICompany } from "@/models/company";

export async function generateStaticParams() {
  const companies = await fetch("http://localhost:3000/api/companies").then(
    (res) => res.json() as Promise<ICompany[]>
  );

  return companies.map((companie: ICompany) => ({
    slug: companie.slug,
  }));
}

export default async function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const companies = await fetch("http://localhost:3000/api/companies").then(
    (res) => res.json() as Promise<ICompany[]>
  );

  const selectedCompany: ICompany | undefined = companies.find(
    (company: ICompany) => company.slug === slug
  );

  if (!selectedCompany) {
    notFound();
  }

  return (
    <>
      <CompanyDetails company={selectedCompany} />
    </>
  );
}
