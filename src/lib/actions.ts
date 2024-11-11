"use server";

import { NewsletterFormSchema } from "./schemas";

export async function subscribe(data: { email: string }) {
  const result = await NewsletterFormSchema.safeParse(data);
  console.log(result);
  //TODO: Implement the subscribe logic here for Resend of Kit...

  return { success: true };
}
