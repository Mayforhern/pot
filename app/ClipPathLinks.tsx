import React, { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

// Define the props for BlockInTextCard
interface BlockInTextCardProps {
    tag: string;
    text: ReactNode;
    examples: string[];
  }
  
  const BlockInTextCard: React.FC<BlockInTextCardProps> = ({ tag, text, examples }) => {
    return (
      <div className="w-full max-w-xl space-y-6">
        <div>
          <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
          <hr className="border-neutral-700" />
        </div>
        <p className="max-w-lg text-xl leading-relaxed">{text}</p>
        <div>
          <Typewrite examples={examples} />
          <hr className="border-neutral-300" />
        </div>
        <a href="https://t.me/gojobaka" target="_blank" rel="noopener noreferrer">
          <button className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
            Contact Support
          </button>
        </a>
      </div>
    );
  };
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite: React.FC<{ examples: string[] }> = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

const RevealLinks: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black px-8 py-24 text-white">
      <div className="flex flex-col place-content-start">
        <FlipLink href="https://t.me/gojobaka">Telegram</FlipLink>
        <FlipLink href="#">Linkedin</FlipLink>
        <FlipLink href="https://github.com/Mayforhern">Github</FlipLink>
        <FlipLink href="https://www.instagram.com/oen.py?igsh=ZTMxcGN1aHptaHNq">Instagram</FlipLink>
      </div>
      <div className="col-span-1 md:col-start-3 md:row-start-1">
        <BlockInTextCard
          tag="/ Support"
          text={
            <>
              <strong>Have questions?</strong> We'd love to help! Contact support
              for any issue you may face.
            </>
          }
          examples={[
            "Does kid kangaroo poops inside her mother's bag?",
            "Can I send my nudes in group?",
            "How many seats are leftover for adminship ?",
            "What's the meaning of life?",
          ]}
        />
      </div>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: React.FC<{ children: string; href: string }> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
