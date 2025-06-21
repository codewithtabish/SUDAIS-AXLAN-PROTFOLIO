// app/api/webhooks/projects/route.ts

import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    let body: any = {};
    console.log('📬 Webhook received for projects');

    try {
      body = await req.json();
    } catch {
      console.warn('⚠️ No JSON body in request');
    }

    // Clear all projects cache
    await redis.del('fetch_all_projects');
    console.log('🧹 Cleared cache key: fetch_all_projects');

    // Clear individual project cache if slug exists
    const slug = body?.entry?.slug;
    if (slug) {
      await redis.del(`project_${slug}`);
      console.log(`🧹 Cleared cache key: project_${slug}`);

      // Revalidate the affected paths
      revalidatePath('/projects');
      revalidatePath(`/projects/${slug}`);
      console.log(`♻️ Revalidated /projects and /projects/${slug}`);
    }

    // Regenerate sitemap
    await execAsync('pnpm generate-sitemap');
    console.log('🗺️ Sitemap regenerated');

    // Ping Google to recrawl updated sitemap
    const sitemapUrl = encodeURIComponent('https://sudaisazlan.pro/sitemap.xml');
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log('📡 Pinged Google for sitemap update');

    return NextResponse.json({
      success: true,
      message: 'Project cache, revalidation, sitemap, and ping completed',
    });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
