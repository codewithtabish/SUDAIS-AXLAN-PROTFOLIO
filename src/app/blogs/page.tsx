import type { Metadata } from "next";
import BackButton from "@/components/custom/back-comp";
import Image from "next/image";
import Link from "next/link";
import { Blog, getAllBlogs } from "@/actions/blog";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "AI Blog & Articles – Sudais Azlan",
  description:
    "Explore AI insights, development tips, and tutorials by Sudais Azlan. From content detection to LLMs, stay updated with real-world AI applications.",
  keywords: [
    "AI Blog",
    "Sudais Azlan blog",
    "machine learning articles",
    "AI tutorials",
    "Python content detection",
    "AI tools",
    "plagiarism detection AI",
    "Scanzy AI",
    "Next.js blog with Strapi",
    "real-world AI blog",
    "AI student blog",
    "AI research blog",
    "SudaisAzlan.pro blog",
    "ML guides",
    "Sudais Azlan writing",
    "AI project explanation",
    "deep learning insights",
    "Sudais tech blog",
    "tech blog AI",
    "AI updates",
    "AI student portfolio blog",
    "LLM articles",
    "NLP blog",
    "machine learning development",
    "Sudais AI guide"
  ],
  openGraph: {
    title: "AI Blog & Articles – Sudais Azlan",
    description:
      "Explore AI and ML articles written by Sudais Azlan. From NLP tools to Python-based models, gain practical insights into real-world AI development.",
    url: "https://sudaisazlan.pro/blogs",
    siteName: "Sudais Azlan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blog & Articles – Sudais Azlan",
    description:
      "Discover how Sudais Azlan builds real-world AI tools. Tutorials, opinions, and project breakdowns in NLP, ML, and Python.",
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

export default async function BlogListPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <BackButton />

      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-slate-100">
            Latest Articles & AI Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-100 dark:text-slate-300">
            Discover practical guides, hands-on experiments, and real-world insights
      from my journey as an AI student and developer. From content detection and
      NLP tools to machine learning and Python automation — explore how I build
      with AI to solve meaningful problems.
          </p>
        </div>
      </header>

      <div className="md:max-w-5xl mx-auto px-4 py-20">
        <h2 className="py-5 text-2xl font-bold">Our Latest Articles</h2>

        {blogs?.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-500">
              No blog articles available right now. Please check back later!
            </p>
          </div>
        ) : (
          <div className="grid md:max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog: Blog) => {
              const { id, title, slug, description, cloudinarBannerUrl } = blog;

              const imageUrl =
                cloudinarBannerUrl ||
                "https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa";

              return (
                <Link
                  key={id}
                  href={`/blogs/${slug}`}
                  className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={800}
                    height={400}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-sm font-bold">{title}</h2>
                    <p
                      className="text-sm text-gray-600 line-clamp-3 min-h-[4.5em] mt-2"
                      aria-label="Blog description"
                    >
                      {description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
