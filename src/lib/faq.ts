import db from "@/lib/db";
import Faq from "@/models/faq";

export const getFaqsContent = async () => {
  await db();
  const faqs = await Faq.find();
  return faqs;
};
