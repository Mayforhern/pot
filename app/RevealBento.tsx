import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub, SiTiktok, SiGitter, SiYoutube } from "react-icons/si";

// Define a Block component to wrap the elements with motion and styling
const Block = ({ children, className = "", whileHover = {} }) => (
    <motion.div
      whileHover={whileHover}
      className={`p-4 rounded-lg shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
  

const RevealBento = () => {
  return (
    <div className="bg-zinc-900 px-4 py-8 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-2xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 h-12 w-12 rounded-full"
    />
    <h1 className="mb-4 text-2xl font-medium leading-snug">
      Hi, I'm Tom.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a href="#" className="flex items-center gap-1 text-red-300 hover:underline">
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.05 }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a href="#" className="grid h-full place-content-center text-2xl text-white">
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a href="#" className="grid h-full place-content-center text-2xl text-white">
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a href="#" className="grid h-full place-content-center text-2xl text-black">
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.05 }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a href="#" className="grid h-full place-content-center text-2xl text-white">
        <SiGitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const Logo = () => (
  <svg
    width="32"
    height="auto"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-6 fill-zinc-50"
  >
    <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"></path>
    <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"></path>
  </svg>
);

export default RevealBento;
