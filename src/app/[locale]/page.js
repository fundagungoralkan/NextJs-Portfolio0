import HomeSection from "@/components/home/home-section";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Contact from "@/components/contact/contact";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
      <Skills/>
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
