import { ICompany } from "@/models/company";

import FilteredCompaniesList from "./filtered-companies-list";
import LoadMoreButton from "./load-more";
import SearchBar from "./search-bar";
import { SearchProvider } from "./search-context";

const ListingSection = async () => {
  const companies = await fetch("http://localhost:3000/api/companies").then(
    (res) => res.json() as Promise<ICompany[]>
  );

  return (
    <SearchProvider>
      <section className="container mx-auto flex flex-col items-center">
        <SearchBar />
        <FilteredCompaniesList companies={companies} />
        <LoadMoreButton totalCompanies={companies.length} />
      </section>
    </SearchProvider>
  );
};

export default ListingSection;
