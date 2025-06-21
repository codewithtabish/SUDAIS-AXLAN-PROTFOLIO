import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { revalidatePath } from 'next/cache';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    console.log('📬 Received Strapi Blog Webhook');

    // Parse the JSON body sent by Strapi
    const body = await req.json().catch(() => {
      console.warn('⚠️ No valid JSON found in webhook payload');
      return {};
    });

    // Invalidate Redis cache for all blogs
    await redis.del('fetch_all_blogs');
    console.log('🧹 Cleared Redis key: fetch_all_blogs');

    const slug = body?.entry?.slug;

    if (slug) {
      // Invalidate Redis cache for specific blog
      await redis.del(`blog_${slug}`);
      console.log(`🧹 Cleared Redis key: blog_${slug}`);

      // Revalidate blog routes
      revalidatePath('/blogs');
      revalidatePath(`/blogs/${slug}`);
      console.log(`♻️ Revalidated paths: /blogs & /blogs/${slug}`);
    }

    // Regenerate sitemap
    await execAsync('pnpm generate-sitemap');
    console.log('🗺️ sitemap.xml regenerated via script');

    // Ping Google to recrawl updated sitemap
    const sitemapUrl = encodeURIComponent('https://sudaisazlan.pro/sitemap.xml');
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log('📡 Pinged Google Search Console with updated sitemap');

    return NextResponse.json({
      success: true,
      message: '✅ Cache cleared, paths revalidated, sitemap regenerated, and Google pinged.',
    });
  } catch (error) {
    console.error('❌ Webhook processing failed:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error during webhook processing.' },
      { status: 500 }
    );
  }
}
