'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Component from './Organizers';
import SmoothScrollHero from './HeroSection';
import Components from './Program';
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
    <>
      <Head>
        <title>Neon Night</title> {/* This is your desired title */}
      </Head>
      <div className="text-gray-900">
        <div className="sections-container">
          <SmoothScrollHero />
          <Components />
          
          <Component />
          <Footer />
        </div>
      </div>
    </>
  );
}
