import { projectsData } from "@/lib/data";
import { links } from "@/lib/data";

// Project Types

export type ProjectProps = (typeof projectsData)[number];

// Section Types

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Theme Toggle Types

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ActiveThemeProviderProps = {
  children: React.ReactNode;
};
