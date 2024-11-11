import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICompany extends Document {
  _id: string;
  featured: boolean;
  name: string;
  slug: string;
  category: string[];
  image: {
    name: string;
    key: string;
  };
  companyDescription: {
    briefDescription: string;
    longerDescription: string;
    overview: {
      foundingYear: number;
      headquarters: string;
    };
    keyOfferings: string[];
  };
  contactInformation: {
    websiteLink: string;
    socialMediaLinks: {
      linkedin?: string;
      twitter?: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema for the Listing model
const CompanySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    category: {
      type: [String],
      required: true,
      enum: [
        "Administration & Operations",
        "Research & Development",
        "Clinical Applications",
      ],
    },
    image: { type: Object, required: true },
    companyDescription: { type: Object, required: true },
    contactInformation: { type: Object, required: true },
  },
  { timestamps: true, collection: "Company" }
);

// Create and export the Listing model
const Company: Model<ICompany> =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);
export default Company;
