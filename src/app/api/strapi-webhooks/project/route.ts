// app/api/webhooks/projects/route.ts

import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';

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

    // Clear individual project if slug exists
    const slug = body?.entry?.slug;
    if (slug) {
      await redis.del(`project_${slug}`);
      console.log(`🧹 Cleared cache key: project_${slug}`);
    }

    return NextResponse.json({ success: true, message: 'Project cache cleared' });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
