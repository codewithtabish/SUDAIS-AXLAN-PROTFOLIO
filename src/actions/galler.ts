'use server';

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
const API_BASE = 'http://localhost:1337/api';

/**
 * Helper to handle and log API errors consistently.
 */
function handleError(error: unknown, context: string): never {
  if (error instanceof Error) {
    console.error(`[${context}]`, error.message);
    throw new Error(`${context} – ${error.message}`);
  } else {
    console.error(`[${context}]`, error);
    throw new Error(`${context} – Unknown error occurred.`);
  }
}

/**
 * Fetches all gallery items from the Strapi API.
 * @returns Array of gallery items with metadata
 */
export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  try {
    const res = await fetch(`${API_BASE}/galleys?populate=*`, {
      next: { revalidate: 60 }, // Optional: ISR
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<GalleryItem> = await res.json();
    return json.data;
  } catch (error) {
    handleError(error, 'getAllGalleryItems');
  }
}
