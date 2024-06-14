import { Schema, model } from "mongoose";
import { iUserData } from "../utils/types";

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iUserData>("users", userModel);
