'use client'

import { motion } from "framer-motion"
import Image from "next/image"

function Component() {
 
  const organizers = [
    {
      name: "Shridh Jaiswal",
      role: "Founder",
      image: "https://i.postimg.cc/RV0cfsMK/image.png",
      instagram: "https://www.instagram.com/sshridhjaiswal?igsh=MXI1cm5tODVybnUzMg==",
    },
    {
      name: "Kavya Dodwani",
      role: "Co-founder",
      image: "https://i.postimg.cc/rmfZqdVr/image-1.png",
      instagram: "https://www.instagram.com/kvx_.01?igsh=amFoNnI3YmE4Ymxv",
    },
    {
      name: "Harsh Anchal",
      role: "Partner",
      image: "https://i.postimg.cc/s27qpDVB/image2.png",
      instagram: "https://www.instagram.com/harshanchal_008?igsh=MTRqNncxbWFwZHd0bA%3D%3D&utm_source=qr",
    },
    {
      name: "Sai Raj Sekhar",
      role: "Partner",
      image: "https://i.postimg.cc/qvqxVkgN/image3.png",
      instagram: "https://www.instagram.com/_tablaplayersai_24?igsh=MWg4c2t3ZWxnemI1Zw==",
    },
  ]

  return (
    <div className="bg-zinc-950 text-white font-Poppins, font-sans">
    
      {/* Organizers Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-6xl font-bold font-sans text-center mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet The Organizers
          </motion.h2>

          <motion.p
            className="text-zinc-400 font-sans text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our amazing team is behind every memorable experience.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {organizers.map((person, index) => (
              <motion.div
                key={person.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 overflow-hidden rounded-xl shadow-xl transition-transform transform group-hover:scale-105">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold font-sans text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600">
                  {person.name}
                </h3>
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
                    width={32}  // Smaller icon size on mobile
                    height={32}
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
