"use client";

import { Search } from "lucide-react";

import { Input } from "../ui";
import { useSearch } from "./search-context";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="mx-auto mb-8 w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search among 80+ companies..."
          className="h-16 rounded-full bg-background pl-12 text-lg file:text-lg placeholder:text-lg focus:text-lg focus:outline-primary/10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
