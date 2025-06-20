'use client';

import Image from "next/image";
import React from "react";

function renderInlineMarkdown(text: string) {
  return text.split(/(\[.*?\]\(.*?\)|`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (/^`[^`]+`$/.test(part)) {
      return <code key={i} className="bg-gray-100 px-1 rounded">{part.slice(1, -1)}</code>;
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

export default function RichContentRenderer({ blocks }: { blocks: any[] }) {
  return (
    <>
      {blocks.map((block: any, i: number) => {
        try {
          if (block.type === "image" && block.image?.url) {
            const url = block.image.url.startsWith("http")
              ? block.image.url
              : `https://scanzy-backend.onrender.com${block.image.url}`;
            return (
              <div key={i} className="my-6">
                <Image
                  src={url}
                  alt={block.image.alternativeText || "Content image"}
                  width={800}
                  height={400}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="rounded-md w-full object-cover max-h-[400px]"
                />
              </div>
            );
          }

          const rawText = block.children?.map((c: any) => c.text).join("\n").trim();
          if (!rawText || rawText === "---") return null;

          if (/^###\s/.test(rawText)) {
            return <h3 key={i} className="text-xl font-semibold mt-6 mb-2">{rawText.replace(/^###\s/, "")}</h3>;
          }

          if (/^##\s/.test(rawText)) {
            return <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{rawText.replace(/^##\s/, "")}</h2>;
          }

          if (/^#\s/.test(rawText)) {
            return <h1 key={i} className="text-3xl font-bold mt-10 mb-4">{rawText.replace(/^#\s/, "")}</h1>;
          }

          if (rawText.startsWith("> ")) {
            return (
              <blockquote key={i} className="border-l-4 border-gray-400 pl-4 italic text-gray-600 dark:text-gray-300 my-4">
                {rawText.replace(/^>\s*/, "")}
              </blockquote>
            );
          }

          if (/^```/.test(rawText) && rawText.trim().endsWith("```")) {
            const match = rawText.match(/^```(\w+)?\s*\n?([\s\S]*?)\n?```$/);
            const lang = match?.[1] || "text";
            const code = match?.[2]?.trim() || "";

            return (
              <div key={i} className="code-block-wrapper">
                <pre
                  className={`language-${lang} text-white text-sm overflow-x-auto`}
                  style={{
                    fontFamily: "monospace",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    lineHeight: "1.5",
                    backgroundColor: "inherit",
                    margin: 0,
                  }}
                >
                  <code style={{ backgroundColor: "inherit", display: "block" }}>{code}</code>
                </pre>
              </div>
            );
          }

          const oneLineLangMatch = rawText.match(/^(js|ts|python|html|css|json|bash|sh)\n(.+)/i);
          if (oneLineLangMatch) {
            const [, lang, code] = oneLineLangMatch;
            return (
              <pre
                key={i}
                className="bg-gray-900 text-white text-sm rounded-md p-4 overflow-x-auto my-4"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontFamily: "monospace",
                }}
              >
                <code className={`language-${lang}`}>{code}</code>
              </pre>
            );
          }

          if (/^`[^`]+`$/.test(rawText)) {
            const inlineCode = rawText.slice(1, -1);
            return (
              <p key={i} className="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
                <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">
                  {inlineCode}
                </code>
              </p>
            );
          }

          if (/^(\*|\-)\s+/.test(rawText)) {
            const items = rawText.split(/(?:\r?\n)?(?:\*|\-)\s+/).filter(Boolean);
            return (
              <ul key={i} className="list-disc list-inside mb-4">
                {items.map((item: any, idx: any) => (
                  <li key={idx}>{renderInlineMarkdown(item)}</li>
                ))}
              </ul>
            );
          }

          const inlineVideo = rawText.match(/\[video\]\(([^)]+)\)/);
          if (inlineVideo) {
            const [, src] = inlineVideo;
            return (
              <div key={i} className="my-6">
                <video
                  controls
                  className="rounded-md w-full max-h-[500px] mx-auto"
                  onError={(e) => {
                    (e.currentTarget as HTMLVideoElement).style.display = "none";
                  }}
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          }

          if (/^\d+\.\s/.test(rawText)) {
            const items = rawText.split(/(?=\d+\.\s)/g);
            return (
              <ol key={i} className="list-decimal list-inside mb-4">
                {items.map((item: any, idx: any) => (
                  <li key={idx}>{renderInlineMarkdown(item.replace(/^\d+\.\s/, ""))}</li>
                ))}
              </ol>
            );
          }

          const inlineImage = rawText.match(/!\[([^\]]*)\]\(([^)]+)\)/);
          if (inlineImage) {
            const [, alt, src] = inlineImage;
            return (
              <div key={i} className="my-6">
                <Image
                  src={src}
                  alt={alt || "Embedded image"}
                  width={800}
                  height={400}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="rounded-md w-[75%] mx-auto max-h-[300px] object-cover"
                />
              </div>
            );
          }

          return (
            <p key={i} className="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
              {renderInlineMarkdown(rawText)}
            </p>
          );
        } catch (err) {
          console.error("Error rendering block", err);
          return null;
        }
      })}
    </>
  );
}
