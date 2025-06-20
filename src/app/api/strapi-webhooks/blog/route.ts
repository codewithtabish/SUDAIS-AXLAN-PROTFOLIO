import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(req: Request) {
  try {
    let body: any = {};
    console.log('📬 Webhook received from Strapi');

    // Try to parse JSON (Strapi usually sends the updated entry here)
    try {
      body = await req.json();
    } catch {
      console.warn('⚠️ No JSON body found in webhook request');
    }

    // Clear the full blog list cache
    await redis.del('fetch_all_blogs');
    console.log('🧹 Cleared cache key: fetch_all_blogs');

    // If the payload contains a slug, clear its individual cache too
    const slug = body?.entry?.slug;
    if (slug) {
      await redis.del(`blog_${slug}`);
      console.log(`🧹 Cleared cache key: blog_${slug}`);
    }

    return NextResponse.json({ success: true, message: 'Cache cleared successfully' });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
