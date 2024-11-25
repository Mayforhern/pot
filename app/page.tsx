'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import SecondSection from '../components/SecondSection';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    title: 'MAY',
    content: 'May is a creative developer',
    component: (
      <motion.section className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-[20vw] font-bold leading-none">MAY</h1>
        <p className="mt-2 text-lg">May is a creative developer</p>
      </motion.section>
    ),
  },
  {
    title: 'Second Section',
    content: '',
    component: <SecondSection darkTheme={false} />, // Dynamically replace this later
  },
  
];

const SPRING_OPTIONS = {
  type: 'spring',
  stiffness: 400,
  damping: 50,
};

export default function Page() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return;

      if (event.deltaY > 0) {
        // Scroll down
        setSectionIndex((prev) => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (event.deltaY < 0) {
        // Scroll up
        setSectionIndex((prev) => Math.max(prev - 1, 0));
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 500); // Reduced scroll delay
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkTheme ? 'animate-dark-color-change text-white' : 'animate-light-color-change text-black'
      }`}
    >
      {/* Header */}
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {/* Horizontal Scrollable Sections */}
      <motion.div
        className="flex h-full w-[700vw]"
        animate={{
          translateX: `-${sectionIndex * 100}vw`,
        }}
        transition={SPRING_OPTIONS}
      >
        {SECTIONS.map((section, idx) => (
          <motion.div
            key={idx}
            className="h-screen w-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: sectionIndex === idx ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
          >
            {/* Dynamically inject `darkTheme` */}
            {idx === 1 ? <SecondSection darkTheme={darkTheme} /> : section.component}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
