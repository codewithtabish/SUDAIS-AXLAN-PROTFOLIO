'use server';

import { redis } from "@/lib/redis";

export interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: any;
  cloudinarBannerUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  canonicalURL?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCardType?: string;  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

const API_BASE = 'https://sudais-axlan-strapi-backend.onrender.com/api';

export const getAllBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await fetch(`${API_BASE}/blogs?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
      const cached = await redis.get('fetch_all_blogs');
    if (cached) return cached as Blog[];

    const json = await res.json();
    const blogs = json.data
      .filter((item: any) => item && item.title && item.slug)
      .map((item: any) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        description: item.description || '',
        content: item.content || [],
        cloudinarBannerUrl: item.cloudinarBannerUrl || 'https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa',
        metaTitle: item.metaTitle,
        metaDescription: item.metaDescription,
        metaImage: item.metaImage,
        canonicalURL: item.canonicalURL,
        keywords: item.keywords,
        ogTitle: item.ogTitle,
        ogDescription: item.ogDescription,
        twitterCardType: item.twitterCardType,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }));
    await redis.set('fetch_all_blogs', blogs); // cache for 10 minutes


    return blogs;
  } catch (err) {
    console.error('getAllBlogs error:', err);
    return [];
  }
};

export const getSingleBlog = async (slug: string): Promise<Blog | null> => {
  try {
    const res = await fetch(`${API_BASE}/blogs?filters[slug][$eq]=${slug}&populate=*`);
    if (!res.ok) throw new Error('Failed to fetch single blog');
        const cached = await redis.get(`blog_${slug}`);
    if (cached) return cached as Blog;

    const json = await res.json();
    const item = json.data[0];
    if (!item) return null;

    const blog: Blog = {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.description || '',
      content: item.content || [],
      cloudinarBannerUrl: item.cloudinarBannerUrl || 'https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa',
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      metaImage: item.metaImage,
      canonicalURL: item.canonicalURL,
      keywords: item.keywords,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      twitterCardType: item.twitterCardType,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    };
        await redis.set(`blog_${slug}`, blog); // cache for 10 minutes


    return blog;
  } catch (err) {
    console.error('getSingleBlog error:', err);
    return null;
  }
};
