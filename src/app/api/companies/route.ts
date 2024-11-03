import { NextResponse } from "next/server";

import db from "@/lib/db";
import Category from "@/models/category";
import Company, { ICompany } from "@/models/company";

// Add this type that omits MongoDB-specific fields
type CompanyInput = Omit<
  ICompany,
  "_id" | "createdAt" | "updatedAt" | keyof Document
>;

// GET all companies
export async function GET() {
  try {
    await db();
    const companies = await Company.find({});
    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching companies", error },
      { status: 500 }
    );
  }
}

// POST create companies
export async function POST(request: Request) {
  try {
    await db();
    const body: CompanyInput | CompanyInput[] = await request.json();

    // Check if body is an array
    const companies = Array.isArray(body) ? body : [body];
    const createdCompanies = [];

    for (const companyData of companies) {
      // Check for existing company
      const existingCompany = await Company.findOne({ name: companyData.name });
      if (existingCompany) {
        continue; // Skip this company and move to next one
      }

      const newCompany = await Company.create(companyData);

      // Update categories for this company
      for (const categoryName of companyData.category) {
        await Category.findOneAndUpdate(
          { name: categoryName },
          { $addToSet: { companies: newCompany._id } },
          { upsert: true }
        );
      }

      createdCompanies.push(newCompany);
    }

    return NextResponse.json(
      {
        message: "Companies processed successfully",
        totalCreated: createdCompanies.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Detailed error:", error);
    return NextResponse.json(
      {
        message: "Error creating companies",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
