'use server';

export interface Resume {
  id: number;
  documentId: string;
  resumeUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export async function getLatestResume(): Promise<Resume | null> {
  try {
    const res = await fetch(
      'https://sudais-axlan-strapi-backend.onrender.com/api/resumes?populate=*&sort=createdAt:desc&pagination[limit]=1',
      {
        // Optional: disable cache for always-fresh data
        // cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error('❌ Failed to fetch resume:', res.statusText);
      return null;
    }

    const json = await res.json();
    const resumeItem = json?.data?.[0];

    if (!resumeItem) {
      console.warn('⚠️ No resume entry found');
      return null;
    }

    return {
      id: resumeItem.id,
      documentId: resumeItem.documentId,
      resumeUrl: resumeItem.resumeUrl,
      createdAt: resumeItem.createdAt,
      updatedAt: resumeItem.updatedAt,
      publishedAt: resumeItem.publishedAt,
    };
  } catch (error) {
    console.error('❌ Error fetching resume:', error);
    return null;
  }
}
