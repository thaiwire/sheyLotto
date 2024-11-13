"use client";
import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-7">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LayoutProvider;
