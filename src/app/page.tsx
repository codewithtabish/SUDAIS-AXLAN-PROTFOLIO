import type { Metadata } from "next";
import Head from "next/head";
import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact";
import EducationSection from "@/components/custom/education-section";
import FeedbackSection from "@/components/custom/feedback-list";
import GalleryWrapper from "@/components/custom/gallery-wrapper";
import HackatonSection from "@/components/custom/hackaton-section";
import HeroVideo from "@/components/custom/hero-video";
import HeroWrapper from "@/components/custom/hero-wrapper";
import {
  AboutSectionSkeleton,
  ContactSectionSkeleton,
  EducationSectionSkeleton,
  HackatonSectionSkeleton,
  HeroVideoSkeleton,
  HeroWrapperSkeleton,
  ProjectListSkeleton,
  SkillListSkeleton,
  WorkSectionSkeleton,
} from "@/components/custom/loading/comp-loading";
import MobileHeader from "@/components/custom/mobile-header";
import ProjectList from "@/components/custom/project/project-list";
import SkillList from "@/components/custom/skill-list";
import { SkillIcons } from "@/components/custom/skill-section";
import UserFeedback from "@/components/custom/user-feedback";
import WorkSection from "@/components/custom/work-section";
import Navbar from "@/components/navbar";
import { Suspense } from "react";

// ✅ SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "AI Portfolio | Sudais Azlan",
  description:
    "Welcome to Sudais Azlan’s portfolio. Dive into cutting-edge machine learning projects, NLP tools, AI content detectors, and professional internships. Built with Next.js, Strapi, and Python.",
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
      {/* JSON-LD Structured Data for Home Page */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sudais Azlan",
              "url": "https://sudaisazlan.pro",
              "sameAs": [
                "https://linkedin.com/in/sudaisazlan",
                "https://github.com/sudaisazlan"
              ],
              "jobTitle": "AI Student & Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Sudais Azlan Portfolio"
              },
              "description": "AI student building real-world machine learning projects focused on NLP, content detection, and predictive models using Python and Next.js.",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Python Programming",
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Strapi CMS",
                "Cloudinary",
                "Redis",
                "Upstash",
                "Data Science",
                "Data Analysis",
                "Data Visualization",
                "Pandas",
                "Matplotlib",
                "Seaborn",
                "Scikit-learn",
                "TensorFlow",
                "Keras",
                "PyTorch",
                "Large Language Models",
                "Transformers",
                "BERT",
                "OpenAI GPT",
                "AI Content Detection",
                "Spam Classification",
                "Email Classification",
                "Plagiarism Detection",
                "Regression Models",
                "Price Prediction",
                "Feature Engineering",
                "Model Training",
                "Model Evaluation",
                "Cross-validation",
                "Semantic Analysis",
                "Text Vectorization",
                "Prompt Engineering",
                "AI Ethics",
                "Responsible AI",
                "AI Research",
                "AI Tools Development",
                "AI-powered Web Applications",
                "Server-side Rendering",
                "Static Site Generation",
                "API Development",
                "REST APIs",
                "GraphQL",
                "Full Stack Development",
                "MERN Stack",
                "Cloud Hosting",
                "VPS Management",
                "Version Control with Git",
                "Continuous Integration",
                "Software Development Life Cycle",
                "Agile Methodology",
                "Portfolio Development",
                "Open Source Contribution",
                "Technical Blogging",
                "Project Management",
                "AI Internship Experience",
                "Student Developer Projects",
                "Hackathons",
                "Educational Background in AI",
                "Academic AI Projects",
                "AI Community Engagement",
                "AI Startups",
                "Technology Innovation",
                "Python Scripting",
                "Data Cleaning",
                "Exploratory Data Analysis",
                "Natural Language Generation",
                "AI-driven Solutions",
                "AI Experimentation",
                "AI Application Deployment",
                "Model Optimization",
                "AI-powered Automation",
                "Sudais Azlan Portfolio",
                "AI Showcase"
              ],
            }),
          }}
        />
      </Head>

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


  // "generate-sitemap": "node src/scripts/sitemap-dynamic.js"
        // "postbuild": "pnpm run generate-sitemap"
// 
