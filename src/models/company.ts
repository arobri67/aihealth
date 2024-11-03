import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICompany extends Document {
  _id: string;
  name: string;
  slug: string;
  category: string[];
  briefDescription: string;
  partnershipsAndCollaborations: string[];
  targetAudience: string[];
  contactInformation: {
    socialMediaLinks: {
      linkedin?: string;
      twitter?: string;
    };
    websiteLink: string;
  };
  keyFeaturesAndTechnologies: {
    technologiesUsed: string[];
    keyFeatures: string[];
  };
  image: string;
  companyDescription: {
    keyOfferings: string[];
    overview: {
      missionStatement: string;
      foundingYear: number;
      headquarters: string;
      briefHistory: string;
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
      enum: ["Administration", "Research & Development", "Clinical"],
    },
    briefDescription: { type: String, required: true },
    partnershipsAndCollaborations: { type: [String], required: true },
    targetAudience: { type: [String], required: true },
    contactInformation: {
      socialMediaLinks: {
        linkedin: { type: String, required: false },
        twitter: { type: String, required: false },
      },
      websiteLink: { type: String, required: true },
    },
    keyFeaturesAndTechnologies: {
      technologiesUsed: { type: [String], required: true },
      keyFeatures: { type: [String], required: true },
    },
    image: { type: String, required: true },
    companyDescription: {
      keyOfferings: { type: [String], required: true },
      overview: {
        missionStatement: { type: String, required: true },
        foundingYear: { type: Number, required: true },
        headquarters: { type: String, required: true },
        briefHistory: { type: String, required: true },
      },
    },
  },
  { timestamps: true, collection: "Company" }
);

// Create and export the Listing model
const Company: Model<ICompany> =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);
export default Company;
