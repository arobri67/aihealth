"use client";

import { createContext, useContext, useState } from "react";

interface CompaniesNbContextType {
  companiesNb: number;
  setCompaniesNb: (nb: number) => void;
}

const CompaniesNbContext = createContext<CompaniesNbContextType | undefined>(
  undefined
);

export function CompaniesNbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [companiesNb, setCompaniesNb] = useState(12);

  return (
    <CompaniesNbContext.Provider value={{ companiesNb, setCompaniesNb }}>
      {children}
    </CompaniesNbContext.Provider>
  );
}

export function useCompaniesNb() {
  const context = useContext(CompaniesNbContext);
  if (context === undefined) {
    throw new Error("useCompaniesNb must be used within a CompaniesNbProvider");
  }
  return context;
}
