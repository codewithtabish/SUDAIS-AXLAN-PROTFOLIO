// app/blogs/loading.tsx

"use client";

import { Skeleton } from "@/components/ui/skeleton";
import BackButton from "@/components/custom/back-comp";

export default function LoadingBlogList() {
  const fakeArray = Array.from({ length: 4 });

  return (
    <>
      <BackButton />
      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-slate-100">
            Latest Articles & AI Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-100 dark:text-slate-300">
            Discover expert insights, practical guides, and updates on AI-powered tools for content detection, plagiarism checks, and originality assurance — from the minds behind Scanzy AI.
          </p>
        </div>
      </header>

      <div className="md:max-w-5xl mx-auto px-4 py-20">
        <h2 className="py-5 text-2xl font-bold">Our latest Articles</h2>
        <div className="grid md:max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
          {fakeArray.map((_, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <Skeleton className="w-full h-[250px] rounded-t-xl" />
              <div className="p-4">
                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-3 w-full mb-2" />
                <Skeleton className="h-3 w-5/6 mb-2" />
                <Skeleton className="h-3 w-4/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
