"use client";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useActiveTheme } from "@/context/active-theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useActiveTheme();

  return (
    <button
      className="fixed bottom-4 right-4 p-2 my-2 w-[3rem] h-[3rem] dark:bg-gray-800 rounded-full bg-gray-250 dark:text-white border-2 border-black/10 dark:border-white/10 shadow-2xl flex items-center justify-center hover:scale-105 active:scale-110 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
}
