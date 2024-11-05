'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      subItems: [
        { name: 'Location', href: '/location' },
        { name: 'Criteria', href: '/criteria' }
      ]
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      subItems: [
        { name: 'GitHub', href: '/github' },
        { name: 'OnlyFans', href: '/onlyfans' }
      ]
    },
    {
      name: 'About Us',
      href: '/about',
      subItems: [
        { name: 'Story', href: '/story' },
        { name: 'Admins', href: '/admins' }
      ]
    },
    { name: 'Channel', href: '/channel' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative z-50 font-inconsolata bg-black text-white w-full">
      {/* Menu Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none text-white bg-transparent text-sm"
        >
          {/* 3-line menu icon */}
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-black w-full overflow-hidden"
          >
            <div className="flex justify-center space-x-40 py-6"> {/* Increased space here */}
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-xl py-4 px-6 relative group"
                  >
                    <span className="relative inline-block">
                      {item.name}
                      {/* Thinner underline */}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  {/* Render sub-items inline, aligned below main item */}
                  {item.subItems && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-1 pl-6 mt-2"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-sm text-gray-400 hover:text-white transition duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
