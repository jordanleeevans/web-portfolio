"use client";
import Profile from "@/components/intro/profile";
import IntroText from "@/components/intro/text";
import ActionButtons from "@/components/intro/buttons";

export default function Intro() {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <Profile />
      <IntroText />
      <ActionButtons />
    </section>
  );
}
