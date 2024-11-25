'use client';

import Link from 'next/link';

interface HeaderProps {
  darkTheme: boolean;
  setDarkTheme: (checked: boolean) => void;
}

export default function Header({ darkTheme, setDarkTheme }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500 ease-in-out backdrop-blur-md transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-4 ${
        darkTheme ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Logo with updated font */}
      <Link href="/" className="text-lg font-medium" style={{ fontFamily: "'B612 Mono', monospace" }}>
        May Mewoski
      </Link>

      {/* Theme Toggle Switch */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <div
          onClick={() => setDarkTheme(!darkTheme)}
          className={`peer inline-flex h-6 w-11 shrink-0 items-center rounded-full cursor-pointer transition-colors ${
            darkTheme ? 'bg-gray-600' : 'bg-gray-200'
          }`}
        >
          <div
            className={`h-5 w-5 rounded-full bg-white transition-transform ${
              darkTheme ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </div>

      {/* Navigation links */}
      <nav className="flex gap-4">
        <Link
          href="/about"
          className="hover:opacity-70 transition-opacity text-base"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          About
        </Link>
        <Link
          href="/work"
          className="hover:opacity-70 transition-opacity text-base"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Work
        </Link>
      </nav>
    </header>
  );
}
