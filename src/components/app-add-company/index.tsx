import SectionHeader from "../section-header";
import { AddCompanyForm } from "./add-company-form";

export default function AddCompany() {
  return (
    <section className="bg-background py-20" id="addcompany">
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
