import Link from "next/link";

import { ICategory } from "@/models/category";

import { Button } from "./ui";

const CategoryFilter = ({ categories }: { categories: ICategory[] }) => {
  return (
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
  );
};

export default CategoryFilter;
