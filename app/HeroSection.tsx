import { ReactLenis } from "lenis/dist/lenis-react";
import { FiArrowRight } from "react-icons/fi";
import { useState } from 'react';
import { motion } from "framer-motion";

const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white transition-all duration-300 bg-transparent">
      {/* Scrolls to the next section */}
      <button
        onClick={() => {
          document.getElementById("next-section")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
         
      </button>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right-Aligned Linear Dropdown Menu for Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute top-12 right-4 bg-transparent flex flex-col items-end space-y-2 transition-transform duration-300 ease-in-out"
        >
          <a href="#" className="block px-4 py-2 text-white underline-animation">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-white underline-animation">
            Location
          </a>
          <a href="#" className="block px-4 py-2 text-white underline-animation">
            Tickets
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div
      id="hero-section"
      style={{ height: `calc(1000px + 10vh)` }}
      className="relative w-full"
    >
      <Header />
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0">
            {/* Logo or brand name can be added here */}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            <a
              href="#"
              className="font-sans text-base font-normal text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              About
            </a>
            <a
              href="#"
              className="font-sans text-base font-normal text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              Location
            </a>
            <a
              href="#"
              className="font-sans text-base font-normal text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              Tickets
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const CenterImage = () => {
  return (
    <div
      className="relative sticky top-0 h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url(https://i.postimg.cc/DzqVhfy5/photo1.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-start px-6 py-8 z-20 text-left mt-80">
        <div className="text-white w-1/2">
          <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">New year party eve</h1>
          <p className="mt-6 tracking-tighter text-white">
            <span className="font-serif italic font-normal text-8xl">Luxe</span><br />
            <span className="font-sans font-normal text-7xl">Nighters</span>
          </p>
          <p className="max-w-md mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">
            Luxe Nighters presents an unforgettable New Year’s Eve party filled with luxury, excitement, and dazzling celebrations to ring in the new year!
          </p>
        </div>
      </div>
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="relative z-10 flex items-center justify-center w-full mt-10">
      {/* Add your images or content here */}
    </div>
  );
};

const NextSection = () => {
  return (
    <div id="next-section" className="h-screen bg-gray-800">
      {/* Content for the next section */}
      <h2 className="text-white text-3xl">Next Section</h2>
    </div>
  );
};

export default SmoothScrollHero;
