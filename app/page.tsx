'use client';

import { useState, useEffect } from 'react';
import { Old_Standard_TT } from 'next/font/google';
import Contributors from './Contributors';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BouncyCardsFeatures from './BouncyCardsFeatures';
import ClipPathLinks from './ClipPathLinks';
import Footer from './Footer';
import ParticleRing from './ParticleRing';

const oldStandardTT = Old_Standard_TT({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-old-standard-tt' 
});

export default function Page() {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-900">
      <Navbar />

      {/* ParticleRing as fixed background */}
      <div className="fixed inset-0 -z-10">
        <ParticleRing /> {/* Background for entire scrollable area */}
      </div>

      {/* Content container with a higher z-index to layer above ParticleRing */}
      <div className="relative z-20">
        <HeroSection />
        <BouncyCardsFeatures />
        <Contributors highlightedIndex={highlightedIndex} />
        <hr className="border-gray-400" />
        <ClipPathLinks />
        <Footer />
      </div>
    </div>
  );
}
