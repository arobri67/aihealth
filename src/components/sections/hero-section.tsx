import { ICategory } from "@/models/category";
import { ICompany } from "@/models/company";

import CategoryFilter from "../category-filter";
import CompaniesList from "../companies-list";
import SearchBar from "../search-bar";

const HeroSection = async () => {
  const companies = await fetch("http://localhost:3000/api/companies").then(
    (res) => res.json() as Promise<ICompany[]>
  );
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json() as Promise<ICategory[]>
  );

  return (
    <section className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 font-bricolage text-6xl font-bold">
          AI for Healthcare Hub
        </h1>
        <p className="mb-8 text-muted-foreground">
          Explore how artificial intelligence in healthcare is enhancing patient
          outcomes and transforming medical practices.
        </p>
        <SearchBar />
      </div>
      <CategoryFilter categories={categories} />
      <CompaniesList companies={companies} />
    </section>
  );
};

export default HeroSection;
