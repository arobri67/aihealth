import { CompaniesList } from "@/components/companies-list";
import SectionHeader from "@/components/section-header";
import { getCompaniesOverview } from "@/lib/actions";

export default async function CompaniesPage() {
  const companies = await getCompaniesOverview();

  return (
    <section className="container mx-auto py-20">
      <SectionHeader
        title="All Companies of AI for Healthcare Hub"
        subtitle="Explore all companies listed on AI for Healthcare Hub"
      />
      <CompaniesList companies={companies} />
    </section>
  );
}
