"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { message } from "antd";
import { GetCurrentUserFormMongoDB } from "@/server-actions/users";
import usersGlobalStore, { UsersGlobalStoreType } from "@/store/users-store";
import { usePathname } from "next/navigation";
// import Spinner from "@/components/spinner";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute =
    pathname.includes("/sign-in") || pathname.includes("/sign-up");

  const { setLoggedInUserData, loggedInUserData }: UsersGlobalStoreType =
    usersGlobalStore() as UsersGlobalStoreType;
  const [loading, setLoading] = useState(true);
  const getLoggedInUser = async () => {
    try {
      setLoading(true);
      const response: any = await GetCurrentUserFormMongoDB();
      if (response.success) {
        setLoggedInUserData(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isPublicRoute && !loggedInUserData) {
      getLoggedInUser();
    }
  }, [pathname]);

  if (isPublicRoute) {
    return children;
  }

  // if (loading) {
  //   return <Spinner isFullScreen={true} />;
  // }

  return (
    <div className="flex gap-7 bg-gray-200 h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-scroll">
        <Header />

        <div className="pr-5 mt-5">{children}</div>
      </div>
    </div>
  );
}

export default LayoutProvider;
