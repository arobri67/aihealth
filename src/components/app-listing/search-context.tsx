"use client";

import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  numberOfCompanies: number;
  setNumberOfCompanies: (number: number) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [numberOfCompanies, setNumberOfCompanies] = useState(12);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        numberOfCompanies,
        setNumberOfCompanies,
      }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
