import Link from "next/link";

import { ICategory } from "@/models/category";

import { Button } from "./ui";

const CategoryFilter = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 font-medium">
      <h3 className="text-lg font-normal text-foreground">
        Browse AI for healthcare categories:
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            className="rounded-full text-base"
            variant="outline"
            asChild
            key={category._id}>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
