import { getCompaniesOverview } from "@/lib/actions";

import FilteredCompaniesList from "./filtered-companies-list";
import LoadMoreButton from "./load-more";
import SearchBar from "./search-bar";
import { SearchProvider } from "./search-context";

const ListingSection = async () => {
  const companies = await getCompaniesOverview();

  return (
    <SearchProvider>
      <section className="container mx-auto flex flex-col items-center pb-20 pt-10">
        <SearchBar />
        <FilteredCompaniesList companies={companies} />
        <LoadMoreButton totalCompanies={companies.length} />
      </section>
    </SearchProvider>
  );
};

export default ListingSection;
