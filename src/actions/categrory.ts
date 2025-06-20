'use server';

import { redis } from '@/lib/redis';

export interface Category {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  categoryName: string;
  categorySlug: string;
  categoryImage: string;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// ✅ Deployed backend URL
const API_BASE = 'https://sudais-axlan-strapi-backend.onrender.com/api';

function handleError(error: unknown, context: string): never {
  if (error instanceof Error) {
    console.error(`[${context}]`, error.message);
    throw new Error(`${context} – ${error.message}`);
  } else {
    console.error(`[${context}]`, error);
    throw new Error(`${context} – Unknown error occurred.`);
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    // ✅ Check Redis cache
    const cached = await redis.get('category_all');
    if (cached) return cached as Category[];

    // ✅ Fetch from API if not in cache
    const res = await fetch(`${API_BASE}/categories?populate=*`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Category> = await res.json();

    // ✅ Cache the result
    await redis.set('category_all', json.data);

    return json.data;
  } catch (error) {
    handleError(error, 'getAllCategories');
  }
}
