"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { Marquee } from "../magicui/marquee";

const reviews = [
  {
    name: "Priya",
    username: "@priyacodes",
    body: "This tool helped me identify AI-written content instantly. Incredibly accurate.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "David",
    username: "@davidwrites",
    body: "As a content creator, this is a must-have for verifying originality.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Fatima",
    username: "@fatima_ai",
    body: "Simple, clean, and powerful. It flagged AI-generated sections I completely missed.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "James",
    username: "@profjames",
    body: "Perfect for educators. Helps me spot AI-generated essays in seconds.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Elena",
    username: "@elenaedu",
    body: "I've tested many detectors, but this one gives fast and reliable results every time.",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Ron",
    username: "@ronresearch",
    body: "I use it in my research team to ensure data originality. Very helpful.",
    img: "https://avatar.vercel.sh/ron",
  },
  {
    name: "Anika",
    username: "@anikatech",
    body: "A brilliant tool for content moderation. It saves me hours!",
    img: "https://avatar.vercel.sh/anika",
  },
  {
    name: "Leo",
    username: "@leowrites",
    body: "Easy to use, accurate, and trustworthy. Highly recommended.",
    img: "https://avatar.vercel.sh/leo",
  },
  {
    name: "Riya",
    username: "@riyaai",
    body: "Whether it's blogs or papers, this catches everything AI-generated.",
    img: "https://avatar.vercel.sh/riya",
  },
];


const rows = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
  reviews.slice(6, 9),
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => (
  <figure
    className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 m-2",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt={name} src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm dark:text-white">{body}</blockquote>
  </figure>
);

export default function FeedbackSection() {
  return (
    <div className="relative w-full overflow-hidden py-10" id="feedbacks">
      <div className="flex flex-col gap-4">
        <Marquee className="[--duration:15s] gap-4">
          {rows[0].map((review, i) => (
            <ReviewCard key={`${review.username}-${i}`} {...review} />
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:25s] gap-4">
          {rows[1].map((review, i) => (
            <ReviewCard key={`${review.username}-${i}`} {...review} />
          ))}
        </Marquee>

        <Marquee className="[--duration:35s] gap-4">
          {rows[2].map((review, i) => (
            <ReviewCard key={`${review.username}-${i}`} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
    </div>
  );
}
