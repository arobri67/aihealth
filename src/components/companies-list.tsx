import Link from "next/link";

import { ICompany } from "@/models/company";

import { Card, CardContent, CardFooter, CardTitle, buttonVariants } from "./ui";

export const CompaniesList = ({ companies }: { companies: ICompany[] }) => {
  if (companies.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center text-center text-lg font-semibold text-muted-foreground">
        Sorry, we couldn&apos;t find any companies matching your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <Card key={company._id} className="flex flex-col">
          <CardContent className="flex-grow p-6">
            <CardTitle className="mb-3 text-2xl font-bold">
              {company.name}
            </CardTitle>
            <div className="mb-3 flex flex-wrap gap-2">
              {company.category.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground">
                  {category}
                </span>
              ))}
            </div>
            <p className="text-base text-muted-foreground">
              {company.companyDescription.briefDescription}
            </p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link
              href={`/companies/${company.slug}`}
              className={buttonVariants({
                variant: "outline",
                size: "default",
              })}>
              More details
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
