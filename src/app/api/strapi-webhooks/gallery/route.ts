import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(req: Request) {
  try {
    console.log('📬 Webhook received for gallery');

    // Parse webhook body (optional for future slug-based invalidation)
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      console.warn('⚠️ No JSON body found');
    }

    // Invalidate the full gallery cache
    await redis.del('gallery_all');
    console.log('🧹 Cleared cache key: gallery_all');

    return NextResponse.json({ success: true, message: 'Gallery cache cleared' });
  } catch (error) {
    console.error('❌ Webhook error (gallery):', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
