// app/actions/categories.ts

'use server';

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

const API_BASE = 'http://localhost:1337/api';

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
    const res = await fetch(`${API_BASE}/categories?populate=*`, {
      cache: 'no-store', // optional: ensures fresh data
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<Category> = await res.json();
    return json.data;
  } catch (error) {
    handleError(error, 'getAllCategories');
  }
}
