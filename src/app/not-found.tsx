import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container mx-auto min-h-screen py-20">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader
          title="Not Found"
          subtitle="The page you are looking for does not exist."
        />
        <Button asChild className="rounded-full">
          <Link href="/">
            <IconArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
