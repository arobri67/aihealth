import mongoose, { Model, Schema } from "mongoose";

export interface IUserCompany extends Document {
  _id: string;
  email: string;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserCompanySchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true, collection: "UserCompany" }
);

const UserCompany: Model<IUserCompany> =
  mongoose.models.UserCompany ||
  mongoose.model<IUserCompany>("UserCompany", UserCompanySchema);

export default UserCompany;
