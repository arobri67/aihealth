import Link from "next/link";

import { IconHeartRateMonitor } from "@tabler/icons-react";

import { ICategory } from "@/models/category";

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

const AppNavBar = async () => {
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json() as Promise<ICategory[]>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <IconHeartRateMonitor size={40} stroke={1.5} />
            <h2 className="flex flex-col font-bricolage text-lg font-semibold leading-none">
              <span>AI for</span>
              <span>Healthcare</span>
            </h2>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Button className="rounded-full">Get a Company</Button>
          <Select>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category: ICategory) => {
                return (
                  <SelectItem key={category.name} value={category.name}>
                    <Link
                      href={`/categories/${category.slug}`}
                      key={category.name}>
                      {category.name}
                    </Link>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <Button size="default" className="rounded-full">
            Get Updates
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppNavBar;
