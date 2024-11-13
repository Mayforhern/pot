'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TicketsComingSoon() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-8 tracking-tight"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          New Year's Eve 2025
        </motion.h1>
        
        <motion.div 
          className="space-y-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="text-3xl font-bold text-center"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            Price Coming Soon
          </motion.div>
          
          <ul className="space-y-4 text-lg">
            {[
              'Exclusive Party Access',
              'Premium Open Bar',
              'Gourmet Buffet',
              'Live Entertainment',
              'Midnight Countdown Celebration'
            ].map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                {feature}
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            className="w-full py-4 bg-white text-black text-xl font-semibold rounded-md transition-colors duration-300 hover:bg-gray-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Available Offline
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-center mt-8 text-gray-400 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Tickets available for purchase at our physical location. Price will be announced soon.
        </motion.p>
      </motion.div>
    </div>
  )
}
