import type { Metadata } from "next";
import "./globals.css";
import "./auth.css";
import "remixicon/fonts/remixicon.css";
import ThemProvider from "@/providers/theme-provider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import LayoutProvider from "@/providers/layout-provider";

export const metadata: Metadata = {
  title: "SheyLoto App-dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
