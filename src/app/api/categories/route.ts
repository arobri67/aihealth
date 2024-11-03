import { NextResponse } from "next/server";

import db from "@/lib/db";
import Category, { ICategory } from "@/models/category";

// Add this type that omits MongoDB-specific fields
type CategoryInput = Omit<
  ICategory,
  "_id" | "createdAt" | "updatedAt" | keyof Document
>;

// GET all categories
export async function GET() {
  try {
    await db();
    const categories = await Category.find({}).populate("companies");
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching categories", error },
      { status: 500 }
    );
  }
}

//GET all the companies that belong to a category

// CREATE a category
//TODO: i want to know tell for example if an error appears, what is the error
export async function POST(request: Request) {
  try {
    await db();
    const body: CategoryInput | CategoryInput[] = await request.json();

    // Check if body is an array
    const categories = Array.isArray(body) ? body : [body];
    const createdCategories = [];

    for (const categoryData of categories) {
      // Check for existing company
      const existingCategory = await Category.findOne({
        name: categoryData.name,
      });
      if (existingCategory) {
        continue; // Skip this company and move to next on
      }
      const newCategory = await Category.create(categoryData);

      createdCategories.push(newCategory);
    }

    return NextResponse.json(
      {
        message: "Categories processed successfully",
        created: createdCategories,
        totalCreated: createdCategories.length,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating category", error },
      { status: 500 }
    );
  }
}
