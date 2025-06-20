import ProjectBanner from '@/components/custom/project/project-banner';
import ProjectPageList from '@/components/custom/project/project-page-list';
import { Metadata } from 'next';
import React from 'react';

// ✅ SEO Metadata for the Projects Page
export const metadata: Metadata = {
  title: "AI Projects – Sudais Azlan",
  description:
    "Explore the AI and machine learning projects built by Sudais Azlan, including spam classifiers, price prediction models, NLP tools, and full-stack apps. Powered by Python, Next.js, and Strapi.",
  keywords: [
    "Sudais Azlan projects",
    "AI portfolio projects",
    "machine learning projects",
    "spam classifier AI",
    "price prediction ML",
    "regression models",
    "NLP projects",
    "Python AI tools",
    "Next.js AI portfolio",
    "Strapi CMS projects",
    "Sudais Azlan developer",
    "Sudais AI engineer",
    "deep learning",
    "AI model showcase",
    "ML applications",
    "content detection AI",
    "AI student work",
    "GitHub AI projects",
    "SudaisAzlan.pro projects",
    "Sudais full stack apps"
  ],
  openGraph: {
    title: "AI Projects – Sudais Azlan",
    description:
      "Sudais Azlan showcases AI projects like spam detectors, price predictors, and NLP tools using Python, Next.js, and Strapi.",
    url: "https://sudaisazlan.pro/projects",
    siteName: "Sudais Azlan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Projects – Sudais Azlan",
    description:
      "Discover the real-world AI tools and models created by Sudais Azlan, a passionate AI student and developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <ProjectBanner />
      <div className="md:max-w-4xl mx-auto py-10">
        <ProjectPageList view="grid" />
      </div>
    </div>
  );
};

export default ProjectsPage;
