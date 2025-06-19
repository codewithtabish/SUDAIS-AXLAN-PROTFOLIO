import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact";
import EducationSection from "@/components/custom/education-section";
import HackatonSection from "@/components/custom/hackaton-section";
import HeroSection from "@/components/custom/hero-section";
import ProjectList from "@/components/custom/project/project-list";
import SkillSection from "@/components/custom/skill-section";
import WorkSection from "@/components/custom/work-section";

// const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex max-w-3xl mx-auto flex-col min-h-[100dvh] ">
      <HeroSection/>
      <div className="flex flex-col space-y-36" >

      <AboutSection/>
      <WorkSection/>
      <EducationSection/>
      <SkillSection/>
      <ProjectList/>
      <HackatonSection/>
      <ContactSection/>
      </div>

    
    </main>
  );
}
