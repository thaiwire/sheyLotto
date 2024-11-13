"use client";
import React from "react";
import { ConfigProvider } from "antd";

function ThemProvider({ children }: { children: React.ReactNode }) {
  let primaryColor = "#252B37";
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          borderRadius: 2,
        },
        components: {
          Button: {
            boxShadow: "none ",
            controlOutline: "none",
            colorBorder: primaryColor,
            controlHeight: 42,
          },
          Input: {
            boxShadow: "none",
            controlOutline: "none",
            colorBorder: primaryColor,
            controlHeight: 42,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemProvider;
