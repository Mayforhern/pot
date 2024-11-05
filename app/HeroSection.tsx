// HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Old_Standard_TT } from 'next/font/google';

const oldStandardTT = Old_Standard_TT({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-old-standard-tt' 
});

export default function HeroSection() {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
  
        {/* "The Axis" text positioned at the bottom-left */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute bottom-10 left-10 text-[11rem] text-white ${oldStandardTT.className}`}
        >
          Axis
        </motion.h1>
    
      {/* GitHub and Telegram buttons positioned at the bottom-right */}
      <div className="absolute bottom-10 right-10 flex space-x-4 z-10">
        <Link
          href="https://github.com/mayforhern"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.242-.017-2.25-3.338.726-4.043-1.606-4.043-1.606-.546-1.386-1.333-1.756-1.333-1.756-1.087-.743.083-.728.083-.728 1.204.085 1.838 1.238 1.838 1.238 1.067 1.826 2.8 1.297 3.48.992.108-.774.418-1.297.76-1.597-2.665-.303-5.467-1.335-5.467-5.928 0-1.311.469-2.383 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.007-.323 3.302 1.229.957-.266 1.986-.398 3.004-.403 1.018.005 2.048.137 3.004.403 2.293-1.552 3.302-1.229 3.302-1.229.653 1.653.241 2.873.118 3.176.77.838 1.236 1.91 1.236 3.221 0 4.606-2.805 5.619-5.466 5.918.43.373.816 1.101.816 2.222 0 1.606-.014 2.896-.014 3.287 0 .319.218.693.825.577C20.565 22.097 24 17.602 24 12.297c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </Link>
        <Link
          href="https://t.me/the_axisos"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.18 7.29l-7.72 4.56c-.56.33-1.08.06-1.08-.64v-4.86c0-.7.53-.98 1.08-.65l7.72 4.56c.56.33.56 1.08 0 1.41z" />
          </svg>
          Telegram
        </Link>
      </div>
    </section>
  );
}
