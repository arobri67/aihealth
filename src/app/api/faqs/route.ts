import { NextResponse } from "next/server";

import db from "@/lib/db";
import Faq, { IFaq } from "@/models/faq";

type FaqInput = Omit<IFaq, "_id" | "createdAt" | "updatedAt" | keyof Document>;

//POST create faq
export async function POST(request: Request) {
  try {
    await db();
    const body: FaqInput | FaqInput[] = await request.json();

    // Check if body is an array
    const faqs = Array.isArray(body) ? body : [body];
    const createdFaqs = [];

    for (const faq of faqs) {
      const existingFaq = await Faq.findOne({ order: faq.order });
      if (existingFaq) {
        continue; // Skip this question and move to next one
      }
      const newFaq = await Faq.create(faq);
      createdFaqs.push(newFaq);
    }

    return NextResponse.json(
      { message: `Question created: ${createdFaqs.length}` },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
