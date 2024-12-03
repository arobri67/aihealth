import { env } from "@/env/client";
import { getCategories } from "@/lib/actions";

import CategoryFilter from "../category-filter";
import { Button } from "../ui";

const HeroSection = async () => {
  const categories = await getCategories();
  const heroImage = env.NEXT_PUBLIC_HERO_IMAGE;

  return (
    <section className="relative h-[750px] md:h-[560px]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 text-center">
        <h1 className="space mb-4 font-bricolage text-3xl font-bold md:text-5xl">
          AI for Healthcare: Transforming Patient Care with Artificial
          Intelligence
        </h1>
        <p className="mb-8 text-base text-muted-foreground md:text-lg">
          Explore how AI for healthcare enhances medical imaging analysis,
          optimizes electronic health records, and accelerates drug discovery
          and development. Curated by
          <Button
            asChild
            variant="default"
            className="mx-1 border bg-background text-base text-foreground hover:text-background md:text-lg">
            <a href="https://x.com/irboa67" target="_blank" rel="noreferrer">
              @irbo67
            </a>
          </Button>
        </p>
        <CategoryFilter categories={categories} />
      </div>
    </section>
  );
};

export default HeroSection;
