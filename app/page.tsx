'use client';
import { useState, useEffect } from 'react';
import Component from './Organizers';
import { Analytics } from "@vercel/analytics/react";
import SmoothScrollHero from './HeroSection';
import Example from './BouncyCardsFeatures';
import Footer from './Footer';

export default function Page() {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-900">
      <Analytics />

      {/* ParticleRing as fixed background */}

      {/* Content container with a higher z-index to layer above ParticleRing */}
      <div className="sections-container">
        <SmoothScrollHero />
        <Example />
        <Component/>
        <Footer />
      </div>
    </div>
  );
}
