// app/actions/projects.ts (Next.js 15 Server Actions - With Error Handling + Redis Caching)

'use server';

import { redis } from '@/lib/redis';

export interface Category {
  id: number;
  categoryName: string;
  categorySlug: string;
  categoryImage: string;
}

export interface ContentBlock {
  type: string;
  children: { type: string; text: string }[];
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  content: ContentBlock[];
  slug: string;
  keywords: string;
  githubUrl?: string;
  videoUrl?: string;
  imageUrl: string;
  liveUrl?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  techStack: string;
  isPublished: boolean;
  isFinalYearProject: boolean;
  category: Category;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: any;
}

const API_BASE = 'https://sudais-axlan-strapi-backend.onrender.com/api';

function buildSlugQuery(slug: string): string {
  return `populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`;
}

function handleError(error: unknown, context: string): never {
  if (error instanceof Error) {
    console.error(`[${context}]`, error.message);
    throw new Error(`${context} – ${error.message}`);
  } else {
    console.error(`[${context}]`, error);
    throw new Error(`${context} – Unknown error occurred.`);
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const cached = await redis.get('fetch_all_projects');
    if (cached) return cached as Project[];

    const res = await fetch(`${API_BASE}/projects?populate=*`);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Project> = await res.json();
    await redis.set('fetch_all_projects', json.data);

    return json.data;
  } catch (error) {
    handleError(error, 'getAllProjects');
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const cached = await redis.get(`project_${slug}`);
    if (cached) return cached as Project;

    const query = buildSlugQuery(slug);
    const res = await fetch(`${API_BASE}/projects?${query}`);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Project> = await res.json();
    const project = json.data.length > 0 ? json.data[0] : null;

    if (project) {
      await redis.set(`project_${slug}`, project);
    }

    return project;
  } catch (error) {
    handleError(error, 'getProjectBySlug');
  }
}