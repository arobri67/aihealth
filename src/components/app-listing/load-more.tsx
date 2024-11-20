"use client";

import { useCompaniesNb } from "../companies-nb-context";
import { Button } from "../ui";

export default function LoadMoreButton({
  totalCompanies,
}: {
  totalCompanies: number;
}) {
  const { setCompaniesNb, companiesNb } = useCompaniesNb();

  const handleLoadMore = () => {
    setCompaniesNb(totalCompanies);
  };

  if (companiesNb === totalCompanies) return null;

  return (
    <Button
      className="rounded-full text-lg font-semibold"
      size="lg"
      onClick={handleLoadMore}>
      View all Companies
    </Button>
  );
}
