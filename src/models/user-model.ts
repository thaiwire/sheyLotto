"use server";

import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    clerkUser: {
      type: String,
      required: true,
    },
    isAdtive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models["users"]) {
  delete mongoose.models["users"];
}

const UserModel = mongoose.model("users", userShema);
export default UserModel;
