"use client";

import React from "react";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";

import animationLight from "../../../../public/anim/coding-light-2.json"; // adjust path if needed
import animationDark from "../../../../public/anim/coding-black.json"; // adjust

const AboutMeAgain = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Lottie animationData={isDark ? animationDark : animationLight} loop={true} />
      </div>
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        <p className="text-muted-foreground">
          I’m a passionate developer who enjoys building sleek, functional, and innovative web apps.
        </p>
        <p className="text-muted-foreground">
          With a strong foundation in full-stack development and tools like Next.js, Prisma, and Tailwind CSS, I bring ideas to life with speed and clarity.
        </p>
      </div>
    </section>
  );
};

export default AboutMeAgain;
