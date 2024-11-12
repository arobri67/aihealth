"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconLink, IconMail, IconUser } from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { addCompany } from "@/lib/actions";
import { AddCompanyFormSchema } from "@/lib/schemas";

import { Input } from "../ui";
import { Button } from "../ui/button";

type Inputs = z.infer<typeof AddCompanyFormSchema>;

export const AddCompanyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(AddCompanyFormSchema),
    defaultValues: {
      name: "",
      url: "",
      email: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await addCompany(data);

    if (result?.error) {
      toast.error(`An error occurred! (${result.error})`);
      return;
    }
    toast.success("Your company has been added.");
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col justify-center space-y-6">
        <div className="relative w-full md:w-[400px]">
          <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="h-12 rounded-full bg-background pl-12 text-lg file:text-lg placeholder:text-lg focus:text-lg focus:outline-primary/10 md:text-lg"
            {...register("email")}
          />
          {/* display the error message */}
          {errors.email?.message && (
            <p className="absolute left-3 text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative w-full md:w-[400px]">
          <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            id="name"
            type="text"
            placeholder="Company name"
            autoComplete="name"
            className="h-12 rounded-full bg-background pl-12 text-lg file:text-lg placeholder:text-lg focus:text-lg focus:outline-primary/10 md:text-lg"
            {...register("name")}
          />
          {/* display the error message */}
          {errors.name?.message && (
            <p className="absolute left-3 text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="relative w-full md:w-[400px]">
          <IconLink className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            id="url"
            type="text"
            placeholder="Company URL"
            autoComplete="url"
            className="h-12 rounded-full bg-background pl-12 text-lg file:text-lg placeholder:text-lg focus:text-lg focus:outline-primary/10 md:text-lg"
            {...register("url")}
          />
          {/* display the error message */}
          {errors.url?.message && (
            <p className="absolute left-3 text-red-500">{errors.url.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-full text-lg">
          {isSubmitting ? "Adding..." : "Add Company"}
        </Button>
      </form>
      <p className="text-sm text-muted-foreground">
        We will review your company and add it to the list.
      </p>
    </div>
  );
};
