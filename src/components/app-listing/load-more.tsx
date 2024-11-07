"use client";

import { Button } from "../ui";
import { useSearch } from "./search-context";

export default function LoadMoreButton({
  totalCompanies,
}: {
  totalCompanies: number;
}) {
  const { setNumberOfCompanies, numberOfCompanies } = useSearch();

  const handleLoadMore = () => {
    setNumberOfCompanies(totalCompanies);
  };

  if (numberOfCompanies === totalCompanies) return null;

  return (
    <Button
      className="text-lg font-semibold"
      size="lg"
      onClick={handleLoadMore}>
      View all Companies
    </Button>
  );
}
