'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      href: '#hero', // Link to Hero section
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      subItems: [
        { name: 'GitHub', href: 'https://github.com/Mayforhern' },
        { name: 'OnlyFans', href: 'https://onlyfans.com/serujima' }
      ]
    },
    {
      name: 'About Us',
      href: '/about',
      subItems: [
        { name: 'Story', href: '/story' },
        { name: 'Admins', href: '#contributors' } // Link to Contributors section
      ]
    },
    { name: 'Channel', href: '/channel' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="header">
      <div className="logo">
        Axis
      </div>
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none text-white bg-transparent text-sm"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="navbar"
          >
            <ul className="flex justify-center space-x-64"> {/* Center items with space */}
              {menuItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-lg py-4 px-6 relative group"
                  >
                    <span className="relative inline-block">
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  {item.subItems && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="sub-menu"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="sub-menu-item"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="login">
        <ul>
          <li>
            <Link href="#" className="menu-item"></Link>
          </li>
          <li>
            <Link href="#" className="menu-item"></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
