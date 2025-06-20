import type { Metadata } from "next";
import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact";
import EducationSection from "@/components/custom/education-section";
import FeedbackSection from "@/components/custom/feedback-list";
import GalleryWrapper from "@/components/custom/gallery-wrapper";
import HackatonSection from "@/components/custom/hackaton-section";
import HeroSection from "@/components/custom/hero-section";
import HeroVideo from "@/components/custom/hero-video";
import HeroWrapper from "@/components/custom/hero-wrapper";
import ImageGallery from "@/components/custom/image-gallery";
import {
  AboutSectionSkeleton,
  ContactSectionSkeleton,
  EducationSectionSkeleton,
  HackatonSectionSkeleton,
  HeroVideoSkeleton,
  HeroWrapperSkeleton,
  ProjectListSkeleton,
  SkillIconsSkeleton,
  SkillListSkeleton,
  WorkSectionSkeleton,
} from "@/components/custom/loading/comp-loading";
import MobileHeader from "@/components/custom/mobile-header";
import ProjectList from "@/components/custom/project/project-list";
import ResumeWrapper from "@/components/custom/resume-wrapper";
import SkillList from "@/components/custom/skill-list";
import { SkillIcons } from "@/components/custom/skill-section";
import UserFeedback from "@/components/custom/user-feedback";
import WorkSection from "@/components/custom/work-section";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import { DATA } from "@/data/resume";

// ✅ SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "AI Portfolio | Sudais Azlan",
  description: "Welcome to Sudais Azlan’s portfolio. Dive into cutting-edge machine learning projects, NLP tools, AI content detectors, and professional internships. Built with Next.js, Strapi, and Python.",

    // "Explore Sudais Azlan's AI and machine learning projects. From spam detection to regression models and NLP tools, see real-world applications built by a passionate AI student and Python developer.",
  keywords: [
    "Sudais Azlan", "AI student", "portfolio", "AI developer", "machine learning",
    "deep learning", "data science", "spam classifier", "price predictor",
    "AI content detector", "Sudais", "Azlan", "Python projects", "AI tools",
    "BSc Artificial Intelligence", "AI final year project", "Scanzy", "DataNeuron",
    "Next.js portfolio", "React developer", "AI resume", "AI blog", "AI GitHub",
    "LangChain", "LLMs", "transformers", "OpenAI", "student portfolio", "content detection AI",
    "email classification", "text vectorization", "feature engineering", "model evaluation",
    "cloud portfolio", "student ML engineer", "AI showcase", "AI use cases", "NLP pipeline",
    "Cross-validation", "TensorFlow", "Keras", "scikit-learn", "pandas", "matplotlib",
    "seaborn", "Sudais developer", "Sudais Azlan AI projects", "student AI portfolio",
    "AI in Pakistan", "Sudais Azlan portfolio", "Hostinger AI domain", "sudaisazlan.pro",
    "SudaisAzlan.com", "AI showcase platform", "AI builder", "computer vision projects",
    "semantic analysis", "AI resume site", "student tech resume", "AI learning path"
  ],
};

export default function Page() {
  return (
    <>
      <MobileHeader />

      <main className="flex max-w-3xl mx-auto flex-col min-h-[100dvh] px-5 md:px-0">
        <Suspense fallback={<HeroWrapperSkeleton />}>
          <HeroWrapper />
        </Suspense>

        <div className="flex flex-col sm:space-y-24 space-y-16 lg:space-y-32">
          <Suspense fallback={<AboutSectionSkeleton />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<HeroVideoSkeleton />}>
            <HeroVideo />
          </Suspense>

          <Suspense fallback={<WorkSectionSkeleton />}>
            <WorkSection />
          </Suspense>

          <Suspense fallback={<EducationSectionSkeleton />}>
            <EducationSection />
          </Suspense>

          <Suspense fallback={<SkillListSkeleton />}>
            <SkillList />
          </Suspense>

          {/* Skill Icons not wrapped in Suspense to avoid hydration mismatch */}
          <SkillIcons />

          {/* Image Gallery or Main Gallery */}
          <GalleryWrapper />

          <Suspense fallback={<ProjectListSkeleton />}>
            <ProjectList />
          </Suspense>

          <Suspense fallback={<UserFeedback />}>
            <UserFeedback />
          </Suspense>

          <Suspense fallback={<HackatonSectionSkeleton />}>
            <HackatonSection />
          </Suspense>

          <Suspense fallback={<ContactSectionSkeleton />}>
            <ContactSection />
          </Suspense>
        </div>
      </main>

      {/* Show Navbar only on larger screens */}
      <div className="sm:block hidden">
        <Navbar />
      </div>
    </>
  );
}
