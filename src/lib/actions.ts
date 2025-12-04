"use server";

import { z } from "zod";

import Category, { ICategory } from "@/models/category";
import Company, { ICompany } from "@/models/company";
import Newsletter from "@/models/newsletter";
import UserCompany from "@/models/user-company";

import db from "./db";
import { AddCompanyFormSchema, NewsletterFormSchema } from "./schemas";

type AddCompanyData = z.infer<typeof AddCompanyFormSchema>;

export async function subscribe(data: { email: string }) {
  const result = await NewsletterFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    await db();

    const userEmailExists = await Newsletter.findOne({
      email: result.data.email,
    });

    if (userEmailExists) {
      return { error: "Email already exists." };
    }

    const userEmail = await Newsletter.create({ email: result.data.email });

    if (!userEmail) {
      return { error: "Failed to subscribe to the newsletter." };
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function addCompany(data: AddCompanyData) {
  const result = await AddCompanyFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    await db();

    const userCompanyExists = await UserCompany.findOne({
      name: result.data.name,
    });

    if (userCompanyExists) {
      return { error: "Company already submitted." };
    }

    const userCompany = await UserCompany.create(result.data);

    if (!userCompany) {
      return { error: "Failed to add company." };
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}

// Fixed: Remove _id from Pick, add it separately
export type Category = Pick<ICategory, "name" | "slug"> & {
  _id: string;
};

export async function getCategories(): Promise<Category[]> {
  try {
    await db();

    const categories = await Category.find().select("_id name slug").lean();

    return categories.map((category) => ({
      ...category,
      _id: category._id.toString(),
    }));
  } catch (error) {
    throw new Error(`Failed to get categories: ${error}`);
  }
}

export type CategorySlug = Pick<ICategory, "slug" | "updatedAt">;
export async function getCategorySlug(): Promise<CategorySlug[]> {
  try {
    await db();
    const categorySlugs = await Category.find().select("slug updatedAt").lean();
    return categorySlugs.map((category) => ({
      slug: category.slug,
      updatedAt: category.updatedAt,
    }));
  } catch (error) {
    throw new Error(`Failed to get category slugs: ${error}`);
  }
}

export type CategoryDetails = Pick<ICategory, "name" | "description" | "slug">;
export async function getCategoryDetails(
  slug: string
): Promise<CategoryDetails> {
  try {
    await db();
    const category = await Category.findOne({ slug })
      .select("name description slug")
      .lean();
    if (!category) {
      throw new Error(`Category not found with slug: ${slug}`);
    }
    return category;
  } catch (error) {
    throw new Error(`Failed to get category details: ${error}`);
  }
}

// Fixed: Remove _id from Pick, add it separately
export type CompanyOverview = Pick<
  ICompany,
  "featured" | "name" | "slug" | "category" | "companyDescription"
> & { _id: string };

export type CompaniesInCategory = {
  name: ICategory["name"];
  description: ICategory["description"];
  companies: CompanyOverview[];
};

export async function getCompaniesInCategory(
  slug: string
): Promise<CompaniesInCategory> {
  try {
    await db();
    const allCompaniesInCategory = await Category.findOne({ slug })
      .select("name description companies")
      .populate<{ companies: CompanyOverview[] }>({
        path: "companies",
        select: "_id featured name slug category companyDescription",
      })
      .lean();

    if (!allCompaniesInCategory) {
      throw new Error(`Category not found with slug: ${slug}`);
    }

    return {
      name: allCompaniesInCategory.name,
      description: allCompaniesInCategory.description,
      companies: allCompaniesInCategory.companies.map((company) => ({
        ...company,
        _id: company._id.toString(),
      })),
    };
  } catch (error) {
    throw new Error(`Failed to get category details: ${error}`);
  }
}

export async function getCompaniesOverview(): Promise<CompanyOverview[]> {
  try {
    await db();

    const companies = await Company.find()
      .select("_id featured name slug category companyDescription")
      .lean();

    return companies.map((company) => ({
      ...company,
      _id: company._id.toString(),
    }));
  } catch (error) {
    throw new Error(`Failed to get companies: ${error}`);
  }
}

export type CompanySlug = Pick<ICompany, "slug" | "updatedAt">;
export async function getCompanySlug(): Promise<CompanySlug[]> {
  try {
    await db();
    const companySlugs = await Company.find().select("slug updatedAt").lean();

    return companySlugs.map((company) => ({
      slug: company.slug,
      updatedAt: company.updatedAt,
    }));
  } catch (error) {
    throw new Error(`Failed to get company slugs: ${error}`);
  }
}

export type CompanyDetail = Pick<
  ICompany,
  | "name"
  | "category"
  | "contactInformation"
  | "companyDescription"
  | "image"
  | "slug"
>;
export async function getCompanyDetails(slug: string): Promise<CompanyDetail> {
  try {
    await db();
    const company = await Company.findOne({ slug }).lean();
    if (!company) {
      throw new Error(`Company not found with slug: ${slug}`);
    }
    return company;
  } catch (error) {
    throw new Error(`Failed to get company details: ${error}`);
  }
}
