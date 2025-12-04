import mongoose, { Document, Model, Schema, Types } from "mongoose";

import { ICompany } from "./company";

export interface ICategory extends Document {
  _id: Types.ObjectId;
  featured: boolean;
  name: string;
  slug: string;
  description: string;
  companies: mongoose.Types.ObjectId[] | ICompany[];
  updatedAt: Date;
  createdAt: Date;
}

const CategorySchema: Schema = new Schema(
  {
    featured: { type: Boolean, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    companies: [{ type: Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true, collection: "Category" }
);

const Category: Model<ICategory> =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
