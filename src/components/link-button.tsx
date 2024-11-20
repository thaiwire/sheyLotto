"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import path from "path";
import React from "react";

function LinkButton({ title, path }: { title: string; path: string }) {
  const router = useRouter();
  return <Button onClick={() => router.push(path)}>{title}</Button>;
}

export default LinkButton;
