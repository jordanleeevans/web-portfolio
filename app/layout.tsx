import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import ThemeToggle from "@/components/ui/theme-toggle.tsx";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ActiveThemeContextProvider from "@/context/active-theme-context";
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 transition-colors`}
      >
        <div className="absolute inset-0 -z-10">
          <AuroraBackground />
        </div>
        <ActiveThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ActiveThemeContextProvider>
      </body>
    </html>
  );
}
