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
    <div className="max-w-full min-h-screen bg-zinc-950 text-white py-12">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Party Program
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mt-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature Grid */}
        <AnimatedSection>
          <div className="flex">
            {[
              { title: "DJ", image: "/Program/image1.jpg" },
              { title: "Dancing", image: "/Program/image2.jpg" },
              { title: "Live Band Performance", image: "/Program/image3.jpg" },
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
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                What's Included
              </h2>
              <p className="text-white/80 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="space-y-3 text-white">
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

        {/* Timeline */}
        <AnimatedSection>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Event Timeline
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { time: "7:00 PM", title: "Party Start", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { time: "8:40 PM", title: "Masti", desc: "Sed do eiusmod tempor incididunt ut labore et." },
                { time: "9:40 PM", title: "Masti", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
                { time: "10:40 PM", title: "Masti", desc: "Ullamco laboris nisi ut aliquip ex ea commodo." },
                { time: "12:00 AM", title: "Bye bye", desc: "Excepteur sint occaecat cupidatat non proident." },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  className="relative bg-white/10 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="font-bold text-white">{event.time}</span>
                    </div>
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <p className="text-sm text-white/70">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
export default Components;