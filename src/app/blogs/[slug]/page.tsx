import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/custom/back-comp";
import { getSingleBlog } from "@/actions/blog";
import ProjectRichRenderWrapper from "@/components/custom/project/project-rich-wrapper";
import ShareButtons from "@/components/custom/project/share-button";

// ✅ Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getSingleBlog(params.slug);
  if (!blog) return { title: "Blog not found" };

  const metaTitle = blog.metaTitle || blog.title;
  const metaDescription =
    blog.metaDescription ||
    "Read the latest AI and machine learning insights by Sudais Azlan.";
  const metaImage = blog.metaImage || blog.cloudinarBannerUrl;
  const url = `https://sudaisazlan.pro/blogs/${blog.slug}`;
  const keywords = blog.keywords?.split(",").map(k => k.trim()) || [
    blog.title,
    "AI Blog",
    "Machine Learning",
    "Sudais Azlan",
    "Artificial Intelligence Articles",
  ];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: blog.canonicalURL || url,
    },
    openGraph: {
      title: blog.ogTitle || metaTitle,
      description: blog.ogDescription || metaDescription,
      url,
      siteName: "Sudais Azlan",
      type: "article",
      locale: "en_US",
      images: metaImage
        ? [
            {
              url: metaImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card:
        (blog.twitterCardType as
          | "summary_large_image"
          | "summary"
          | "player"
          | "app") || "summary_large_image",
      title: blog.ogTitle || metaTitle,
      description: blog.ogDescription || metaDescription,
      images: metaImage ? [metaImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ Blog Page
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getSingleBlog(params.slug);
  if (!blog) return notFound();

  const bannerUrl =
    blog.cloudinarBannerUrl ||
    "https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa";
  const blogUrl = `https://sudaisazlan.pro/blogs/${blog.slug}`;

  return (
    <div className="md:max-w-3xl mx-auto px-4 py-10">
      <BackButton />

      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt={blog.title}
          width={700}
          height={400}
          className="w-full md:max-h-[400px] rounded-lg object-cover mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{blog.description}</p>

      <div className="prose prose-lg max-w-none dark:prose-invert mt-8">
        <ProjectRichRenderWrapper blocks={blog.content} />
        <div className="border border-t-2 my-4 py-4 px-5">
          <ShareButtons title={blog.title} url={blogUrl} />
        </div>
      </div>
    </div>
  );
}
