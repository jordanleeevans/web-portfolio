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

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ActiveThemeProviderProps = {
  children: React.ReactNode;
};

// Project Types

type Tag = string;

export interface CollapseButtonProps {
  setIsExpanded: (value: boolean) => void;
}

export interface ExpandButtonProps extends CollapseButtonProps {
  remainingTags: number;
}

export interface TagProps {
  tag: Tag;
}

export interface TagListProps extends CollapseButtonProps {
  tags: Tag[];
  isExpanded: boolean;
}
