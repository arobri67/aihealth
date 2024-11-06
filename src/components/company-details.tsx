import Image from "next/image";

import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Calendar, CheckCircle2, ExternalLink, MapPin } from "lucide-react";

import { ICompany } from "@/models/company";

import { Button, Card, CardContent, CardHeader, CardTitle } from "./ui";

const CompanyDetails = ({ company }: { company: ICompany }) => {
  return (
    <section className="container mx-auto py-20">
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <CardTitle className="mb-4 font-bricolage text-4xl">
                {company.name}
              </CardTitle>
              <div className="mb-3 flex flex-wrap gap-2">
                {company.category.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground">
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
                    className="flex items-center gap-2 rounded-full bg-secondary/50 px-3 py-1 text-secondary-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{offering}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="relative hidden aspect-video overflow-hidden rounded-lg md:block">
            <a
              href={company.contactInformation.websiteLink}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={`${company.image.url}/${company.image.name}`}
                alt={`${company.name} website screenshot`}
                fill
                className="object-cover"
              />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CompanyDetails;