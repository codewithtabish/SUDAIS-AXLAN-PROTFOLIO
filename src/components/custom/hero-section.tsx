'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '@/data/resume';
import BlurFadeText from '../magicui/blur-fade-text';
import BlurFade from '../magicui/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import TypewriterText from './typewriter-text';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const HeroSection = () => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id="hero" className=" px-4 bg-background text-foreground pb-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl space-y-12"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT - Text */}
          <motion.div
            variants={slideLeft}
            className="flex flex-col flex-1 space-y-4 text-center md:text-left"
          >
            <TypewriterText
              text="Hi, I'm Sudais Azlan 👋"
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="max-w-xl text-muted-foreground "
              text={DATA.description}
            />
          </motion.div>

          {/* RIGHT - Avatar */}
          <motion.div variants={slideRight}>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border border-gray-300 dark:border-white/10">
                <Avatar className="w-full h-full">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
