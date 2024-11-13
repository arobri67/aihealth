import Link from "next/link";

import { Menu } from "lucide-react";

import { ICategory } from "@/models/category";

import Logo from "../logo";
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui";
import CategorySelect from "./category-select";
import NewsLetterButton from "./newsletter-button";
import SubmitCompany from "./submit-company";

const AppNavBar = async () => {
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json() as Promise<ICategory[]>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <div className="hidden items-center space-x-4 md:flex">
          <SubmitCompany />
          <CategorySelect categoriesList={categories} />
          <NewsLetterButton />
        </div>
        {/* mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-4 flex flex-col space-y-4">
              <div className="mb-4">
                <Logo />
              </div>
              <div className="">
                <ul className="flex flex-col space-y-4">
                  {categories.map((category) => (
                    <Link
                      className="hover text-lg font-normal"
                      key={category.slug}
                      href={`/categories/${category.slug}`}>
                      <li>{category.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
              <SubmitCompany />

              <NewsLetterButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AppNavBar;
