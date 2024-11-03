import Link from "next/link";

import { ICategory } from "@/models/category";

import { buttonVariants } from "./ui";

const CategoryFilter = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Link
          href={`/categories/${category.slug}`}
          key={category._id}
          className={buttonVariants({ variant: "outline", size: "default" })}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
