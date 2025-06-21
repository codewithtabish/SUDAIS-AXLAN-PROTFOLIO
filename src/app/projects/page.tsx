import ProjectBanner from '@/components/custom/project/project-banner';
import ProjectPageList from '@/components/custom/project/project-page-list';
import { Metadata } from 'next';
import Head from 'next/head';
import { getAllProjects } from '@/actions/projects';

export const dynamic = 'force-dynamic';

// ✅ SEO Metadata for the Projects Page
export const metadata: Metadata = {
  title: "AI Projects – Sudais Azlan",
  description:
    "Explore the AI and machine learning projects built by Sudais Azlan, including spam classifiers, price prediction models, NLP tools, and full-stack apps. Powered by Python, Next.js, and Strapi.",
  keywords: [
    "Sudais Azlan projects", "AI portfolio projects", "machine learning projects",
    "spam classifier AI", "price prediction ML", "regression models",
    "NLP projects", "Python AI tools", "Next.js AI portfolio", "Strapi CMS projects",
    "Sudais Azlan developer", "Sudais AI engineer", "deep learning", "AI model showcase",
    "ML applications", "content detection AI", "AI student work", "GitHub AI projects",
    "SudaisAzlan.pro projects", "Sudais full stack apps", "AI tools built in Python",
    "AI SaaS apps", "student AI projects", "AI learning journey", "AI deployment projects",
    "AI with Redis", "OpenAI", "LangChain", "transformers", "MERN AI stack"
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

const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <>
      {/* ✅ JSON-LD Structured Data for Projects Page */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "AI Projects – Sudais Azlan",
              "description":
                "Explore the AI and machine learning projects built by Sudais Azlan, including spam classifiers, price prediction models, NLP tools, and full-stack apps.",
              "url": "https://sudaisazlan.pro/projects",
              "mainEntity": projects.map(project => ({
                "@type": "CreativeWork",
                "name": project.title,
                "url": `https://sudaisazlan.pro/projects/${project.slug}`,
                "description": project.description,
                "image": project?.imageUrl || "https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa",
                "dateModified": project.updatedAt || project.createdAt,
                "author": {
                  "@type": "Person",
                  "name": "Sudais Azlan"
                }
              }))
            }),
          }}
        />
      </Head>

      <ProjectBanner />
      <div className="md:max-w-4xl mx-auto py-10">
        <ProjectPageList view="grid" />
      </div>
    </>
  );
};

export default ProjectsPage;
