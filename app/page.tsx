import Intro from "@/components/intro/intro.tsx";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about/about.tsx";
import Projects from "@/components/projects/projects.tsx";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {" "}
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
