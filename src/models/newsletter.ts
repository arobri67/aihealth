import mongoose, { Model, Schema } from "mongoose";

export interface INewsletter extends Document {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export const NewsletterSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true, collection: "Newsletter" }
);

const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter ||
  mongoose.model<INewsletter>("Newsletter", NewsletterSchema);

export default Newsletter;
