import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="flex justify-end items-center gap-5 p-5">
      <span className="text-gray-700 text-sm">Username</span>
      <UserButton />
    </div>
  );
}

export default Header;
