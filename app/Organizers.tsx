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
      image: "https://i.postimg.cc/zDSpwbVq/image1.png",
      instagram: "https://www.instagram.com/sshridhjaiswal?igsh=MXI1cm5tODVybnUzMg==",
    },
    {
      name: "Kavya Dodwani",
      role: "Co-founder",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png",
      instagram: "https://www.instagram.com/kvx_.01?igsh=amFoNnI3YmE4Ymxv",
    },
    {
      name: "Harsh Anchal",
      role: "Partner",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png",
      instagram: "https://www.instagram.com/harshanchal_008?igsh=MTRqNncxbWFwZHd0bA%3D%3D&utm_source=qr",
    },
    {
      name: "Sai Raj Sekhar",
      role: "Partner",
      image: "https://i.postimg.cc/zDSpwbVq/image1.png",
      instagram: "https://www.instagram.com/_tablaplayersai_24?igsh=MWg4c2t3ZWxnemI1Zw==",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-Poppins, sans-serif">
      {/* Gallery Section */}
      <section className="py-20 px-6">
        <motion.h1
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 hover:brightness-50"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
        <motion.h2 
  className="text-6xl font-bold text-center mb-6 gradient-text"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Meet The Organizers
</motion.h2>

          <motion.p
            className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our amazing team is behind every memorable experience.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {organizers.map((person, index) => (
              <motion.div
                key={person.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-xl shadow-xl transition-transform transform group-hover:scale-105">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600">{person.name}</h3>
                <p className="text-zinc-400 mb-2">{person.role}</p>
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform transform group-hover:scale-125"
                >
                  <Image
                    src="https://i.postimg.cc/mkRRFzhP/instagram.png"
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
