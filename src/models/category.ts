import mongoose, { Document, Model, Schema } from "mongoose";

import { ICompany } from "./company";

export interface ICategory extends Document {
  _id: string;
  name: string;
  slug: string;
  description: string;
  companies: mongoose.Types.ObjectId[] | ICompany[];
}

export interface ICategoryPopulated extends Omit<ICategory, "companies"> {
  companies: ICompany[];
}

const CategorySchema: Schema = new Schema(
  {
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
