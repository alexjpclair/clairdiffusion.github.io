"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "",
}: {
  words: {
    text: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`inline-flex text-[#2B3467] dark:text-white ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-[#2B3467] dark:text-white"
        >
          {words[currentWordIndex].text}
        </motion.span>
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className={`ml-1 inline-block w-[4px] h-[24px] md:h-[40px] bg-[#2B3467] dark:bg-white ${cursorClassName}`}
      />
    </div>
  );
};