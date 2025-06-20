"use client";

import React from "react";
import dynamic from "next/dynamic";

const RichRenderer = dynamic(() => import("./project-rich-render"), { ssr: false });

export default function ProjectRichRenderWrapper({ blocks }: { blocks: any[] }) {
  return <RichRenderer blocks={blocks} />;
}
