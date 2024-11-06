'use client';

import { motion } from 'framer-motion';
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

// HeroSection component
export default function HeroSection() {
  return (
    <section className={`w-full px-8 py-32 flex flex-col items-center justify-center max-w-6xl mx-auto relative ${poppins.className}`}>
      <div className="flex flex-col items-center text-center">
        <span className="block mb-4 text-sm md:text-base text-gray-300 font-medium">
          The earth is flat
        </span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold text-white ${oldStandardTT.className}`}
        >
          The Axis
        </motion.h3>
        <p className="text-lg md:text-xl text-gray-200 my-4 md:my-6">
          Join our Telegram chat for free cookies.
        </p>
        <div className="mt-6">
          <SpotlightButton />
        </div>
      </div>
    </section>
  );
}
