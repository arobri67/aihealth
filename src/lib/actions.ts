"use server";

import { z } from "zod";

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
