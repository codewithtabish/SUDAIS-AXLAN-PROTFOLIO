// app/actions/projects.ts (Next.js 15 Server Actions - With Error Handling)

'use server';

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

const API_BASE = 'http://localhost:1337/api';

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
    const res = await fetch(`${API_BASE}/projects?populate=*`);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Project> = await res.json();
    return json.data;
  } catch (error) {
    handleError(error, 'getAllProjects');
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const query = buildSlugQuery(slug);
    const res = await fetch(`${API_BASE}/projects?${query}`, {
      
      // next: { revalidate: 60 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Project> = await res.json();
    return json.data.length > 0 ? json.data[0] : null;
  } catch (error) {
    handleError(error, 'getProjectBySlug');
  }
}