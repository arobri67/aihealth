"use client";

import { Search } from "lucide-react";

import { Input } from "./ui";

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search among 80+ companies..."
          className="h-14 rounded-full pl-10 focus:outline-primary/10"
        />
      </div>
    </div>
  );
};

export default SearchBar;
