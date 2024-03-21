import Intro from "@/components/intro/intro.tsx";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about/about.tsx";
import Projects from "@/components/projects/projects.tsx";
import Skills from "@/components/skills/skills.tsx";
import Experience from "@/components/experience/experience.tsx";
import Contact from "@/components/contact/contact.tsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {" "}
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
