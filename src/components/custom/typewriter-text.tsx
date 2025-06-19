'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

const TypewriterText = ({ text, speed = 100, className }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {displayedText}
      <span className="animate-pulse"></span>
    </motion.h1>
  );
};

export default TypewriterText;
