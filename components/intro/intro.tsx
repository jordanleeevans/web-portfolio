"use client";
import Profile from "@/components/intro/profile";
import IntroText from "@/components/intro/text";
import ActionButtons from "@/components/intro/buttons";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import useSectionInView from "@/hooks/active-section";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <Profile />
      <IntroText />
      <ActionButtons />
    </section>
  );
}
