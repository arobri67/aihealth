import { ICategory } from "@/models/category";

import CategoryFilter from "../category-filter";

const HeroSection = async () => {
  const categories = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json() as Promise<ICategory[]>
  );

  return (
    //TODO: move out the background from the public folder, if i use file, size 100vw is to say how much width it shoudl take
    <section className="relative h-[600px]">
      <div className="absolute inset-0 -z-10 bg-[url('/bg-image/bg-hero.webp')] bg-cover bg-center opacity-15" />
      <div className="absolute bottom-0 h-[100px] w-full bg-gradient-to-b from-transparent to-background" />
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 text-center">
        <h1 className="mb-4 font-bricolage text-4xl font-bold md:text-5xl">
          AI for Healthcare: Explore Innovative Solutions for Better Patient
          Care
        </h1>
        <p className="mb-8 text-base text-muted-foreground md:text-lg">
          Discover innovative artificial intelligence applications in
          healthcare, focusing on medical imaging analysis, electronic health
          records, and drug discovery and development. Curated by{" "}
          <a
            href="https://x.com/irboa67"
            target="_blank"
            rel="noreferrer"
            className="text-primary">
            @irbo67
          </a>
        </p>
        <CategoryFilter categories={categories} />
      </div>
    </section>
  );
};

export default HeroSection;
