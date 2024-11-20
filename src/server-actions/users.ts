"use server";

import { connectMongoDB } from "@/config/db";
import UserModel from "@/models/user-model";
import { currentUser, User } from "@clerk/nextjs/server";

connectMongoDB();

export const GetCurrentUserFormMongoDB = async () => {
  try {
    const clerkUserData = await currentUser();
    const user = await UserModel.findOne({ clerkUser: clerkUserData?.id });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }
    let newUser = new UserModel({
      clerkUser: clerkUserData?.id,
      email: clerkUserData?.emailAddresses[0].emailAddress,
      name: clerkUserData?.firstName + " " + clerkUserData?.lastName,
      isAdtive: true,
      isAdmin: false,
    });
    const savedUser = await newUser.save();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(savedUser)),
    };
  } catch (error: any) {
    return {
      error: error.message,
      success: false,
    };
  }
};
