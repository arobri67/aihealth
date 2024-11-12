import SectionHeader from "../section-header";
import { AddCompanyForm } from "./add-company-form";

export default function AddCompany() {
  return (
    <section className="h-full bg-accent/30 py-20" id="newsletter">
      <div className="container mx-auto">
        <SectionHeader
          title="Join the AI for Healthcare Hub"
          subtitle="Add your company to the directory to showcase your AI solutions and services."
        />
      </div>
      <AddCompanyForm />
    </section>
  );
}
