'use client'

import { motion } from "framer-motion"
import Image from "next/image"

 function Component() {
  const galleryImages = [
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Crowd dancing at night club" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Friends enjoying party" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Concert light show" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Fireworks display" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Laser light show" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Stage performance" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Balloon drop moment" },
    { src: "https://i.postimg.cc/zDSpwbVq/image1.png", alt: "Dance floor celebration" },
  ]
  

  const organizers = [
    {
      name: "Shridh Jaiswal",
      role: "Founder",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png", // Updated photo URL
      instagram: "https://www.instagram.com/sshridhjaiswal?igsh=MXI1cm5tODVybnUzMg==",
    },
    {
      name: "Kavya Dodwani",
      role: "Co-founder",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png", // Updated photo URL
      instagram: "https://www.instagram.com/kvx_.01?igsh=amFoNnI3YmE4Ymxv",
    },
    {
      name: "Harsh Anchal",
      role: "Partner",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png", // Updated photo URL
      instagram: "https://www.instagram.com/harshanchal_008?igsh=MTRqNncxbWFwZHd0bA%3D%3D&utm_source=qr",
    },
    {
      name: "Sai Raj Sekhar",
      role: "Partner",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png", // Updated photo URL
      instagram: "https://www.instagram.com/_tablaplayersai_24?igsh=MWg4c2t3ZWxnemI1Zw==",
    },
  ]
  

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-Poppins,sans-serif]">
      {/* Gallery Section */}
      <section className="py-20 px-6">
        <motion.h1 
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Organizers
          </motion.h2>
          <motion.p 
            className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet our dedicated team of event professionals who work tirelessly to create unforgettable experiences.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {organizers.map((person, index) => (
              <motion.div
                key={person.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">{person.name}</h3>
                <p className="text-zinc-400 mb-2">{person.role}</p>
                <a 
                  href={person.instagram} // Instagram link
                  className="inline-block"
                  target="_blank"  // Open in new tab
                  rel="noopener noreferrer"
                >
                 <Image 
  src="https://i.postimg.cc/mkRRFzhP/instagram.png"  // New Instagram logo URL
  alt="Instagram"
  width={48}
  height={48}
  className="transition-transform duration-300 transform hover:scale-110"
/>

                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Component;