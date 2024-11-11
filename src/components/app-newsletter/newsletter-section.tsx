"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconMail } from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { subscribe } from "@/lib/actions";
import { NewsletterFormSchema } from "@/lib/schemas";

import SectionHeader from "../section-header";
import { Button } from "../ui";
import { Input } from "../ui/input";

type Inputs = z.infer<typeof NewsletterFormSchema>;

const NewsletterSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await subscribe(data);

    if (result?.error) {
      toast.error("An error occurred! Please try again.");
      return;
    }

    toast.success("You have been subscribed to our newsletter.");
    reset();
  };

  return (
    <section className="h-full bg-accent/30 py-20">
      <div className="container mx-auto">
        <SectionHeader
          title="Get Updates"
          subtitle="Subscribe to our newsletter for the latest updates on artificial intelligence in healthcare."
        />
        <form
          onSubmit={handleSubmit(processForm)}
          className="mb-8 flex flex-col justify-center gap-4 md:flex-row">
          {/* register the email input */}
          <div className="relative w-full md:w-[400px]">
            <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="h-12 rounded-full bg-background pl-12 text-lg file:text-lg placeholder:text-lg focus:text-lg focus:outline-primary/10"
              {...register("email")}
            />
            {/* display the error message */}
            {errors.email?.message && (
              <p className="absolute left-3 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-full text-lg">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-center text-muted-foreground">
          We respect your privacy. Your information is safe with us.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
