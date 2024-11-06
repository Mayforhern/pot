'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Old_Standard_TT, Poppins } from 'next/font/google';
import SpotlightButton from './SpotlightButton';

// Import 'Old Standard TT' and 'Poppins' fonts
const oldStandardTT = Old_Standard_TT({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-old-standard-tt' 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
});

// Shuffle function to randomize array elements
const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const circleData = [
  { id: 1, src: "/hero/photo1.jpg" },
  { id: 2, src: "/hero/photo2.jpg" },
  { id: 3, src: "/hero/photo3.jpg" },
  { id: 4, src: "/hero/photo4.jpg" },
  { id: 5, src: "/hero/photo5.jpg" },
  { id: 6, src: "/hero/photo6.jpg" },
  { id: 7, src: "/hero/photo7.jpg" },
  { id: 8, src: "/hero/photo8.jpg" },
  { id: 9, src: "/hero/photo9.jpg" },
  { id: 10, src: "/hero/photo10.jpg" },
  { id: 11, src: "/hero/photo11.jpg" },
  { id: 12, src: "/hero/photo12.jpg" },
];

// Function to generate shuffled circles
const generateCircles = () => {
  return shuffle([...circleData]).map((circle) => (
    <motion.div
      key={circle.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-full overflow-hidden"
      style={{
        backgroundImage: `url(${circle.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

// ShuffleGrid component
const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [circles, setCircles] = useState(generateCircles());

  useEffect(() => {
    const shuffleCircles = () => {
      setCircles(generateCircles());
      timeoutRef.current = setTimeout(shuffleCircles, 3000);
    };

    shuffleCircles(); // Start shuffling on mount

    // Clean up timeout on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-3 h-[450px] gap-1">
      {circles}
    </div>
  );
};

// HeroSection component
export default function HeroSection() {
  return (
    <section className={`w-full px-8 py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto relative ${poppins.className}`}>
      <div className="flex flex-col items-center md:items-start">
        <span className="block mb-4 text-sm md:text-base text-gray-300 font-medium">
          The earth is flat
        </span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold text-white text-center md:text-left ${oldStandardTT.className}`}
        >
          The Axis
        </motion.h3>
        <p className="text-lg md:text-xl text-gray-200 my-4 md:my-6 text-center md:text-left">
          Join our Telegram chat for free cookies.
        </p>
        <div className="mt-6">
          <SpotlightButton />
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
}
