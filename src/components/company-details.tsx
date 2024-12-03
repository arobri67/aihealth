import Image from "next/image";
import Link from "next/link";

import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import {
  ArrowLeftIcon,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { env } from "@/env/server";
import { CompanyDetail } from "@/lib/actions";

import { Button, Card, CardContent, CardHeader, CardTitle } from "./ui";

const CompanyDetails = ({ company }: { company: CompanyDetail }) => {
  return (
    <section className="container mx-auto py-20">
      <div>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Homepage
        </Link>
      </div>
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <CardTitle className="mb-4 font-bricolage text-5xl">
                {company.name}
              </CardTitle>
              <div className="mb-3 flex flex-wrap gap-2">
                {company.category.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-secondary/30 px-3 py-1 text-sm text-secondary-foreground">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href={company.contactInformation.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Visit Website
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full">
                <a
                  href={company.contactInformation.socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconBrandLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full">
                <a
                  href={company.contactInformation.socialMediaLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconBrandX className="h-4 w-4" />
                  <span className="sr-only">X (formerly Twitter)</span>
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Founded in {company.companyDescription.overview.foundingYear}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{company.companyDescription.overview.headquarters}</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            {company.companyDescription.longerDescription}
          </p>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Key Offerings</h3>
            <ul className="flex flex-wrap gap-4">
              {company.companyDescription.keyOfferings.map(
                (offering, index) => (
                  <li
                    key={index}
                    className="flex h-12 items-center space-x-2 rounded-full bg-secondary/50 px-3 text-sm text-secondary-foreground md:text-base">
                    <CheckCircle2 className="size-5 text-green-500" />
                    <span className="w-full">{offering}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="relative hidden overflow-hidden md:flex md:justify-center">
            <a
              href={company.contactInformation.websiteLink}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={`https://utfs.io/a/${env.UTSFS_ID_AI_HEALTHCARE_HUB}/${company.image.key}`}
                alt={`${company.name} website screenshot`}
                width={800}
                height={600}
                className="object-fit"
              />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CompanyDetails;
