import { connectMongoDB } from "@/config/db";
import { UserButton } from "@clerk/nextjs";
import { GetCurrentUserFormMongoDB } from "../../server-actions/users";

connectMongoDB();

export default async function Home() {
  const response = await GetCurrentUserFormMongoDB();
  // const { name, email, clerkUserID } = response.data;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-3"></div>
    </div>
  );
}
