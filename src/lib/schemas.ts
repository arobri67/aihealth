import { z } from "zod";

export const NewsletterFormSchema = z.object({
  email: z.string().email("Invalid email."),
});

export const AddCompanyFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  url: z.string().url("Invalid URL."),
  email: z.string().email("Invalid email."),
});
