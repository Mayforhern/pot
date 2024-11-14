import { useEffect, ReactNode } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Music, Wine } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children }: { children: ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function Components() {
  return (
    <div id="program" className="max-w-full min-h-screen bg-zinc-950 text-white py-12">
      <div className="max-w-6xl mx-auto space-y-24 px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-sans md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Party Program
            </h1>
            <p className="text-white/80 max-w-2xl font-sans mx-auto mt-40">
            Ring in the New Year with exciting music, vibrant celebrations, and unforgettable moments! Join us for an evening filled with dance, fun, and a toast to new beginnings.
            </p>
          </div>
        </AnimatedSection>
           {/* Feature Grid */}
           <AnimatedSection>
          <div className="flex gap-4">
            {[
              { title: "DJ", image: "https://i.postimg.cc/T2JhJmg2/image1.png" },
              { title: "Dancing", image: "https://i.postimg.cc/bYgNtPfs/image2.png" },
              { title: "Live Band Performance", image: "https://i.postimg.cc/90Q2p4Hz/image3.png" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group overflow-hidden flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[200px] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h2 className="absolute font-sans bottom-4 left-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                  {feature.title}
                </h2>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* What's Included */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-sans md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                What's Included
              </h2>
              <p className="text-white/80 font-sans mb-4">
              Get ready to kick off the New Year with unforgettable moments, amazing vibes, and an electrifying atmosphere!
              </p>
            </div>
            <div className="space-y-3 font-sans text-white">
              {[
                { icon: Wine, text: "Drinks & Snacks" },
                { icon: Music, text: "DJ & music show all night long" },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Horizontal Timeline */}
        <AnimatedSection>
          <div className="relative">
            <h3 className="text-2xl font-sans font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Event Timeline
            </h3>

            <div className="timeline">
              {/* Events */}
              {[
    { time: "7:00 PM", title: "Party Start", desc: "The event officially begins with drinks and light music.", iconClass: "bg-purple-500", icon: <Clock /> },
    { time: "8:40 PM", title: "Masti", desc: "Enjoy a variety of activities to engage with guests.", iconClass: "bg-pink-500", icon: <Wine /> },
    { time: "9:40 PM", title: "Masti", desc: "The dance floor opens with upbeat music.", iconClass: "bg-teal-500", icon: <Music /> },
    { time: "10:40 PM", title: "Masti", desc: "Relax and enjoy conversations with fellow guests.", iconClass: "bg-blue-500", icon: <Wine /> },
    { time: "12:00 AM", title: "Bye bye", desc: "The evening concludes with fond farewells.", iconClass: "bg-orange-500", icon: <Clock /> },
  ].map((event, i) => (
    <div className="timeline-item" key={i}>
      <div className={`icon-container ${event.iconClass}`}>
        {event.icon}
      </div>
      <div className="event-details">
                    <span className="font-bold font-sans text-white">{event.time}</span>
                    <h4 className="font-semibold font-sans text-white">{event.title}</h4>
                    <p className="text-sm font-sans text-white/70">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Components;
