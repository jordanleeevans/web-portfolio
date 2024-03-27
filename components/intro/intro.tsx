"use client";
import Profile from "@/components/intro/profile";
import IntroText from "@/components/intro/text";
import ActionButtons from "@/components/intro/buttons";
import { useThemeToggleReminder } from "@/hooks/useThemeToggleReminder";
import useSectionInView from "@/hooks/useSectionInView";
import { useActiveTheme } from "@/context/active-theme-context";

export default function Intro() {
  const { theme } = useActiveTheme();
  const { ref } = useSectionInView("Home", 0.5);

  const toggleReminderParams = {
    message:
      theme === "dark" ? "Check out light mode!" : "Check out dark mode!",
    icon: theme === "dark" ? "☀️" : "🌙",
    delay: 3000,
  };

  useThemeToggleReminder(toggleReminderParams);

  return (
    <section
      ref={ref}
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <Profile />
      <IntroText />
      <ActionButtons />
    </section>
  );
}
