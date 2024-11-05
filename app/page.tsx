'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Old_Standard_TT } from 'next/font/google';
import Contributors from './Contributors';
import Navbar from './Navbar'; // Adjust the path if necessary
import HeroSection from './HeroSection';

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

  const features = [
    {
      title: 'AI Gateway',
      description: 'Unified AI components and model processing capabilities for developers',
      icon: '🤖'
    },
    {
      title: 'Easy Development',
      description: 'Comprehensive official plugins and security features',
      icon: '🛠️'
    },
    {
      title: 'Standards Compliant',
      description: 'Supporting multiple technical standards for true cross-platform compatibility',
      icon: '✨'
    },
    {
      title: 'API Management',
      description: 'Complete API lifecycle management with authentication support',
      icon: '🔑'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <HeroSection />
      {/* Features and Contributors sections follow here */}


      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contributors Section */}
      <Contributors highlightedIndex={highlightedIndex} />
    </div>
  );
}
