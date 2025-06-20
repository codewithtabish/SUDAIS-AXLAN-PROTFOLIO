import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact";
import EducationSection from "@/components/custom/education-section";
import FeedbackSection from "@/components/custom/feedback-list";
import GalleryWrapper from "@/components/custom/gallery-wrapper";
import HackatonSection from "@/components/custom/hackaton-section";
import HeroSection from "@/components/custom/hero-section";
import HeroVideo from "@/components/custom/hero-video";
import ImageGallery from "@/components/custom/image-gallery";
import ProjectList from "@/components/custom/project/project-list";
import SkillList from "@/components/custom/skill-list";
import { SkillIcons } from "@/components/custom/skill-section";
// import SkillSection from "@/components/custom/skill-section";
import UserFeedback from "@/components/custom/user-feedback";
import WorkSection from "@/components/custom/work-section";
import Navbar from "@/components/navbar";

// const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
    <main className="flex max-w-3xl mx-auto flex-col min-h-[100dvh] ">
      <HeroSection/>
      <div className="flex flex-col sm:space-y-24 space-y-16 lg:space-y-32" >

      <AboutSection/>
      <HeroVideo/>
      <WorkSection/>
      <EducationSection/>
      <SkillList/>
      <SkillIcons/>
      <GalleryWrapper/>
      {/* <ImageGallery/> */}
      <ProjectList/>
      <UserFeedback/>
      <HackatonSection/>
      <ContactSection/>
      </div>

    
    </main>
       <div className="sm:block hidden">
            <Navbar />

            </div>
    </>
  );
}
