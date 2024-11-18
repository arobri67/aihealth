"use client";

import { CompanyOverview } from "@/lib/actions";

import { CompaniesList } from "../companies-list";
import { useSearch } from "./search-context";

const FilteredCompaniesList = ({
  companies,
}: {
  companies: CompanyOverview[];
}) => {
  const { searchQuery, numberOfCompanies } = useSearch();

  const filteredCompanies = companies
    .filter((company) =>
      company.companyDescription.briefDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .slice(0, numberOfCompanies);

  if (filteredCompanies.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center text-center text-lg font-semibold text-muted-foreground">
        Sorry, we couldn&apos;t find any companies matching your search.
      </div>
    );
  }

  return <CompaniesList companies={filteredCompanies} />;
};

export default FilteredCompaniesList;
