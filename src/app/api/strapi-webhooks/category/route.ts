import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(req: Request) {
  try {
    console.log('📬 Webhook received for categories');

    // Optional JSON parsing if needed later
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      console.warn('⚠️ No JSON body found');
    }

    // ✅ Clear cache
    await redis.del('category_all');
    console.log('🧹 Cleared cache key: category_all');

    return NextResponse.json({ success: true, message: 'Category cache cleared' });
  } catch (error) {
    console.error('❌ Webhook error (categories):', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
