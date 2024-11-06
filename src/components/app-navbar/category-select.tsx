"use client";

import { ICategory } from "@/models/category";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

const CategorySelect = ({
  categoriesList,
}: {
  categoriesList: ICategory[];
}) => {
  return (
    <Select
      onValueChange={(value) => {
        const category = categoriesList.find((c) => c.name === value);
        if (category) {
          window.location.href = `/categories/${category.slug}`;
        }
      }}>
      <SelectTrigger className="w-[200px] rounded-full">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categoriesList.map((category: ICategory) => (
          <SelectItem key={category.name} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;