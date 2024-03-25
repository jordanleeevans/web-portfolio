import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header.tsx";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan's Portfolio",
  description:
    "Jordan is a data driven software engineer, \
  data engineer and data scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="absolute inset-0 -z-10">
          <AuroraBackground />
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
