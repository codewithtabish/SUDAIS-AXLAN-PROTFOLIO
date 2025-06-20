// components/custom/skeletons.tsx

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const HeroWrapperSkeleton = () => (
  <div className="px-4 pb-16 pt-20">
    <Skeleton className="h-16 w-3/4 mb-4" />
    <Skeleton className="h-6 w-1/2" />
  </div>
);

export const AboutSectionSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-32" />
    <Skeleton className="h-20 w-full" />
  </div>
);

export const HeroVideoSkeleton = () => (
  <div className="h-[300px] w-full">
    <Skeleton className="w-full h-full" />
  </div>
);

export const WorkSectionSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-40" />
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className="h-24 w-full" />
    ))}
  </div>
);

export const EducationSectionSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-40" />
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className="h-24 w-full" />
    ))}
  </div>
);

export const SkillListSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-24" />
    <div className="flex gap-2 flex-wrap">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-6 w-20" />
      ))}
    </div>
  </div>
);

export const SkillIconsSkeleton = () => (
  <div className="w-full h-[300px]">
    <Skeleton className="w-full h-full" />
  </div>
);

export const GalleryWrapperSkeleton = () => (
  <div className="space-y-4">
    {[...Array(4)].map((_, i) => (
      <Skeleton key={i} className="h-48 w-full" />
    ))}
  </div>
);

export const ProjectListSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-8 w-48" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-48 w-full" />
      ))}
    </div>
  </div>
);

export const UserFeedbackSkeleton = () => (
  <div className="space-y-4">
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className="h-32 w-full" />
    ))}
  </div>
);

export const HackatonSectionSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-8 w-48" />
    {[...Array(3)].map((_, i) => (
      <Skeleton key={i} className="h-24 w-full" />
    ))}
  </div>
);

export const ContactSectionSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-8 w-40" />
    <Skeleton className="h-20 w-full" />
  </div>
);

export const NavbarSkeleton = () => (
  <div className="h-16 w-full">
    <Skeleton className="h-full w-full" />
  </div>
);