import { connectMongoDB } from "@/config/db";
import { UserButton } from "@clerk/nextjs";
import { GetCurrentUserFormMongoDB } from "../../server-actions/users";

connectMongoDB();

export default async function Home() {
  await GetCurrentUserFormMongoDB();

  return <div>Homepage</div>;
}
