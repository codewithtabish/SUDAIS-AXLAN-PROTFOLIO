import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/custom/back-comp";
import { getSingleBlog } from "@/actions/blog";
import ProjectRichRenderWrapper from "@/components/custom/project/project-rich-wrapper";
import ShareButtons from "@/components/custom/project/share-button";
import Head from "next/head";

export const dynamic = 'force-dynamic';

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
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": blog.title,
              "description": blog.description,
              "url": blogUrl,
              "image": bannerUrl,
              "author": {
                "@type": "Person",
                "name": "Sudais Azlan",
                "url": "https://sudaisazlan.pro"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sudais Azlan",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://sudaisazlan.pro/logo.png"
                }
              },
              "datePublished": blog.createdAt,
              "dateModified": blog.updatedAt || blog.createdAt,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": blogUrl
              }
            }),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242419931272978"
          crossOrigin="anonymous"
        ></script>
      </Head>

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

        {/* ✅ Google AdSense ad placed after description */}
        <div className="my-6">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3242419931272978"
            data-ad-slot="3617827097"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert mt-8">
          <ProjectRichRenderWrapper blocks={blog.content} />
          <div className="border border-t-2 my-4 py-4 px-5">
            <ShareButtons title={blog.title} url={blogUrl} />
          </div>
        </div>
      </div>
    </>
  );
}
