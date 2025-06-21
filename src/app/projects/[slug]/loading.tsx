'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="md:max-w-3xl mx-auto px-4 py-10">
      {/* Banner image skeleton */}
      <Skeleton className="w-full h-[400px] rounded-lg mb-6" />

      {/* Title skeleton */}
      <Skeleton className="h-10 w-3/4 mb-4" />

      {/* Description skeleton */}
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mb-6" />

      {/* Content blocks skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-11/12" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-[300px] w-full rounded-md" /> {/* Simulate content image */}
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
  );
}
