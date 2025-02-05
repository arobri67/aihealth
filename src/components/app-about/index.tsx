import Image from "next/image";

import { env } from "@/env/client";

import SectionHeader from "../section-header";

export const About = () => {
  const aboutImage = env.NEXT_PUBLIC_ABOUT_IMAGE;
  return (
    <section className="bg-accent/30 py-20" id="about">
      <div className="container mx-auto">
        <SectionHeader title="Why I built AI for Healthcare Hub?" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="max-w-prose text-center text-lg text-muted-foreground md:text-left">
            Hello! I&apos;m Arnaud!. I am a
            scientist who has transitioned into software development, combining
            my passion for research and technology. I created the AI for
            Healthcare Hub as a project that merges my interests in healthcare
            and artificial intelligence. <br /> This directory serves as a
            valuable resource for healthcare professionals, showcasing
            innovative AI solutions that can enhance patient care and streamline
            clinical workflows. Having spent significant time in research and
            development, I am fascinated by the potential of AI to revolutionize
            the healthcare industry. <br /> My goal with this platform is to
            connect users with cutting-edge AI technologies and insights that
            can drive meaningful advancements in patient outcomes. I invite you
            to explore the directory and discover the transformative power of AI
            in healthcare. If you have any questions or suggestions, please feel
            free to reach out!
          </p>
          <div>
            <Image
              src={aboutImage}
              alt="Irbo picture"
              width={250}
              height={300}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
