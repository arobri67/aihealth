"use server";

import Newsletter from "@/models/newsletter";

import db from "./db";
import { NewsletterFormSchema } from "./schemas";

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
