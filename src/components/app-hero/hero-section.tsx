import { ICategory } from "@/models/category";

import CategoryFilter from "../category-filter";

const HeroSection = async () => {
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json() as Promise<ICategory[]>
  );

  return (
    <section className="relative h-[500px] py-20">
      <div className="absolute inset-0 -z-10 bg-[url('/bg-image/bg-hero.webp')] bg-cover bg-center opacity-15" />
      <div className="absolute bottom-0 h-[100px] w-full bg-gradient-to-b from-transparent to-background" />
      <div className="container mx-auto mb-8 flex h-full flex-col items-center justify-center gap-5 text-center">
        <h1 className="mb-4 font-bricolage text-5xl font-bold md:text-6xl">
          Explore AI for healthcare
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Discover innovative artificial intelligence applications in
          healthcare, focusing on medical imaging analysis, electronic health
          records, and drug discovery and development.
        </p>
        <CategoryFilter categories={categories} />
      </div>
    </section>
  );
};

export default HeroSection;
