"use client";

import { Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { useState } from "react";

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share:</span>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-500 hover:underline text-sm"
      >
        <Twitter size={16} /> Twitter
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-700 hover:underline text-sm"
      >
        <Facebook size={16} /> Facebook
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-800 hover:underline text-sm"
      >
        <Linkedin size={16} /> LinkedIn
      </a>

      <button
        onClick={copyToClipboard}
        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline text-sm"
      >
        <Copy size={16} /> {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
