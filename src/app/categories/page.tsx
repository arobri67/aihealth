import CategoryFilter from "@/components/category-filter";
import SectionHeader from "@/components/section-header";
import { getCategories } from "@/lib/actions";

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <section className="container mx-auto py-20">
      <SectionHeader
        title="All Categories of AI for Healthcare Hub"
        subtitle="Currently we only have 10 categories, but we will add more soon!"
      />
      <CategoryFilter categories={categories} />
    </section>
  );
}
