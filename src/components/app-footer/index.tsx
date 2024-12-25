import Link from "next/link";

import { getCategories } from "@/lib/actions";

import Logo from "../logo";
import { Button } from "../ui/button";

const TOP_COMPANIES = [
  //top 5 companies 25/12/2024
  {
    name: "aidoc",
    slug: "aidoc",
  },
  {
    name: "butterfly network",
    slug: "butterfly-network",
  },
  {
    name: "tempus ai",
    slug: "tempus",
  },
  {
    name: "qure ai",
    slug: "qure-ai",
  },
  {
    name: "recursion pharmaceuticals",
    slug: "recursion-pharmaceuticals",
  },
  {
    name: "PathAi",
    slug: "pathai",
  },


];

export const AppFooter = async () => {
  const categories = await getCategories();

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:justify-around">
        <ul className="flex flex-col space-y-2">
          <li>
            <Button variant="link" asChild className="p-0">
              <Link href="/blog">Blog</Link>
            </Button>
          </li>
          {categories.map((category) => (
            <li key={category._id}>
              <Button
                variant="link"
                asChild
                className="p-0 font-normal text-foreground hover:text-primary">
                <Link href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col space-y-2">
          {TOP_COMPANIES.map((company) => (
            <li key={company.slug}>
              <Button variant="link" asChild className="p-0 font-normal text-foreground hover:text-primary">
                <Link className="capitalize" href={`/companies/${company.slug}`}>{company.name}</Link>
              </Button>
            </li>
          ))}
          <li>
            <div className="flex flex-col space-y-2">
              <Logo />
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AI Healthcare Hub. All rights
                reserved.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
