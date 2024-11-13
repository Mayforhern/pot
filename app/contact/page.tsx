'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      {/* GitHub Button */}
      <a
        href="https://github.com/Mayforhern"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-full"
      >
        <FaGithub className="w-5 h-5" />
        <span>GitHub</span>
      </a>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-gray-400">
          Have a question or need assistance? Our team is ready to help.
            <br />
            Reach out to us through any of the following methods, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
          >
            <div className="w-12 h-12 mb-6 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-blue-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">Email Address</h2>
            <div className="space-y-2 text-center text-gray-400">
              <p>luxenighters@niggamail.com</p>
              <p>someone@gmail.com</p>
            </div>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
          >
            <div className="w-12 h-12 mb-6 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-blue-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">Call Us</h2>
            <div className="space-y-2 text-center text-gray-400">
              <p>+91 (XXX) XXX-XXXX</p>
              <p>+91 (XXX) XXX-XXXX</p>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
          >
            <div className="w-12 h-12 mb-6 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-blue-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">India, Chhattisgarh, Bilaspur</h2>
  <div className="space-y-2 text-center text-gray-400">
    <p>Chhattisgarh</p>
    <p>Bilaspur</p>
  </div>
</motion.div>
        </div>
      </div>
    </div>
  )
}