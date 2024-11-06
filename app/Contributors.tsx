import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, forwardRef } from 'react';

interface ContributorsProps {
  highlightedIndex: number;
}

const contributorsData = [
  { id: 0, name: "Shinno", image: "/admins/contributor1.jpg", telegramLink: "https://t.me/shinno" },
  { id: 1, name: "Ace", image: "/admins/contributor2.jpg", telegramLink: "https://t.me/ace" },
  { id: 2, name: "Hayato", image: "/admins/contributor3.jpg", telegramLink: "https://t.me/hayato" },
  { id: 3, name: "May", image: "/admins/contributor4.jpg", telegramLink: "https://t.me/gojobaka" },
  { id: 4, name: "Velocity", image: "/admins/contributor5.jpg", telegramLink: "https://t.me/velocity" },
  { id: 5, name: "Alucard", image: "/admins/contributor6.jpg", telegramLink: "https://t.me/alucard" },
  { id: 6, name: "Co owner?", image: "/admins/contributor7.jpg", telegramLink: "https://t.me/coowner" },
  { id: 7, name: "Avogado", image: "/admins/contributor8.jpg", telegramLink: "https://t.me/avogado" },
  { id: 8, name: "Hope", image: "/admins/contributor9.jpg", telegramLink: "https://t.me/hope" },
  { id: 9, name: "idk", image: "/admins/contributor10.jpg", telegramLink: "https://t.me/idk" }
];

// Use forwardRef to pass ref down to the section
const Contributors = forwardRef<HTMLDivElement, ContributorsProps>(({ highlightedIndex }, ref) => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="contributors" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Admins
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {contributorsData.map((contributor, index) => (
            <a 
              key={contributor.id}
              href={contributor.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden aspect-square ${
                  highlightedIndex === index ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                {!imageError[index] ? (
                  <Image
                    src={contributor.image}
                    alt={`${contributor.name}'s profile picture`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    priority={index < 5}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    {contributor.name}
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
                  highlightedIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
                <div className={`absolute bottom-0 left-0 right-0 p-2 text-center text-white text-sm font-semibold ${
                  highlightedIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  {contributor.name}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

Contributors.displayName = 'Contributors';

export default Contributors;
