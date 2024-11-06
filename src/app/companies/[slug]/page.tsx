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
    <main className="min-h-screen">
      {/* <section className="container mx-auto py-20">
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-bricolage text-5xl font-bold">
            {selectedCompany.name}
          </h1>
          <p className="mb-8 italic text-muted-foreground">
            {selectedCompany.companyDescription.overview.missionStatement}
          </p>
        </div>
      </section> */}
      <CompanyDetails company={selectedCompany} />
    </main>
  );
}
