import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact";
import EducationSection from "@/components/custom/education-section";
import FeedbackSection from "@/components/custom/feedback-list";
import HackatonSection from "@/components/custom/hackaton-section";
import HeroSection from "@/components/custom/hero-section";
import ProjectList from "@/components/custom/project/project-list";
import SkillSection from "@/components/custom/skill-section";
import UserFeedback from "@/components/custom/user-feedback";
import WorkSection from "@/components/custom/work-section";

// const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex max-w-3xl mx-auto flex-col min-h-[100dvh] ">
      <HeroSection/>
      <div className="flex flex-col sm:space-y-24 space-y-16 lg:space-y-32" >

      <AboutSection/>
      <WorkSection/>
      <EducationSection/>
      <SkillSection/>
      <ProjectList/>
      <UserFeedback/>
      {/* <FeedbackSection/> */}
      <HackatonSection/>
      <ContactSection/>
      </div>

    
    </main>
  );
}
