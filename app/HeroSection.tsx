import { ReactLenis } from "lenis/dist/lenis-react";
import { motion } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Image from 'next/image';

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
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-end px-6 py-3 text-white">
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        PROGRAMS <FiArrowRight />
      </button>
    </nav>
  );
};


const SECTION_HEIGHT = 1000; // Reduced from 1500 to 1000

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 10vh)` }} // Reduced from 100vh to 80vh
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
            
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            <a
              href="#"
              title=""
              className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              About
            </a>
            <a
              href="#"
              title=""
              className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              Location
            </a>
            <a
              href="#"
              title=""
              className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              Tickets
            </a>
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              className="p-2 -m-2 transition-all duration-200 rounded-full focus:ring-offset-secondary text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d=""
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const CenterImage = () => {
  return (
    <div
      className="relative sticky top-0 h-screen w-full"
      style={{
        backgroundImage: "url(/hero/photo1.jpg)",
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

const Schedule = () => {
    return (
      <section
        id="launch-schedule"
        className="mx-auto max-w-5xl px-4 py-12 text-white"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-[80px] font-black uppercase text-zinc-50 text-center font-poppins"
        >
         
        </motion.h1>
      
      </section>
    );
  };
  

  
  export default SmoothScrollHero;
