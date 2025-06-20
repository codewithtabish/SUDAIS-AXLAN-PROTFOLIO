'use server';

import { redis } from '@/lib/redis';

// Types
export interface GalleryItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: string;
}

export interface StrapiResponse<T> {
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

// Base API URL
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

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  try {
    // Check Redis cache first
    const cached = await redis.get('gallery_all');
    if (cached) return cached as GalleryItem[];

    // Fetch from Strapi
    const res = await fetch(`${API_BASE}/galleys?populate=*`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<GalleryItem> = await res.json();

    // Cache it
    await redis.set('gallery_all', json.data);

    return json.data;
  } catch (error) {
    handleError(error, 'getAllGalleryItems');
  }
}
