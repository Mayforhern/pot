'use client';

import { motion } from 'framer-motion';

export default function SecondSection({ darkTheme }: { darkTheme: boolean }) {
  const sentence = `May is dedicated to exploring new creative horizons and pushing the limits of design
    and development. Constantly evolving and learning, May aims to blend innovation and
    artistry in every project.`;

  const words = sentence.split(' '); // Split the text into words

  const wordVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered delay for each word
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      className={`h-screen flex flex-col justify-center px-5 sm:px-10 ${
        darkTheme ? 'bg-black text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <motion.div
        className="text-[8vw] sm:text-[5vw] lg:text-[4vw] font-inconsolata leading-tight max-w-[90%] sm:max-w-[80%] text-left mx-0"
        initial="hidden" // Start hidden
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }} // Ensures it animates only once
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2" // Add proper spacing between words
            custom={i} // Pass the index to the variant
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
