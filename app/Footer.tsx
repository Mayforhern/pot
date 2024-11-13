import { FaHome, FaTicketAlt, FaCalendarAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white font-poppins py-12 border-t border-white/20 rounded-lg shadow-lg relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-cover bg-opacity-10 bg-pattern" />

      {/* Container with equal padding on the left and right */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

        {/* Logo and Copyright */}
        <div className="space-y-4">
          <div className="inline-block px-6 py-4 border-b border-white/20 rounded-lg shadow-md">
            <span className="font-bold text-4xl text-purple-400">New Year</span>
            <span className="text-white/80 text-2xl">Party</span>
          </div>
          <p className="text-sm text-white/60 mt-2">
            Copyright © 2024 Luxe Nighters <br />
            All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-400">Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="flex items-center hover:text-purple-300 transition-all duration-300 transform hover:underline">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#" className="flex items-center hover:text-purple-300 transition-all duration-300 transform hover:underline">
              <FaTicketAlt className="mr-2" /> Tickets
            </a>
            <a href="#" className="flex items-center hover:text-purple-300 transition-all duration-300 transform hover:underline">
              <FaCalendarAlt className="mr-2" /> Program
            </a>
            <a href="#" className="flex items-center hover:text-purple-300 transition-all duration-300 transform hover:underline">
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </nav>
        </div>

{/* Date */}
<div>
  <h3 className="font-semibold text-xl mb-4 text-purple-400">Date</h3>
  <div className="text-white/80 text-sm sm:text-base text-center">
    <p className="-ml-6">December</p> {/* Moves "December" further left */}
    <p>31<sup>st</sup>, 2024</p>
  </div>
</div>


        {/* Location */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-400">Party Location</h3>
          <p className="text-white/80">Location to be revealed soon</p>
        </div>

      </div>

      {/* Bottom Centered Section for Mobile */}
      <div className="flex flex-col items-center mt-auto space-y-8 text-center">
        
        {/* CTA Button */}
        <a 
          href="#"
          className="bg-purple-400 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-purple-500 transition-all duration-300"
        >
          Buy Tickets Now
          {/* Snowflakes */}
          <div className="snowflakes">
            <div className="snowflake">❄️</div>
            <div className="snowflake">❄️</div>
            <div className="snowflake">❄️</div>
          </div>
        </a>

        {/* Instagram Link */}
        <a 
          href="https://www.instagram.com/luxenighters" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <FaInstagram className="inline-block mr-2" /> Follow us on Instagram @luxenighters
        </a>

        {/* Email and Phone */}
        <p className="text-white/80 text-sm">
          Email: luxenighters@niggamail.com <br />
          Phone: +91xxxxxxxxxx
        </p>
      </div>

      {/* Mobile View Specific Styling */}
      <div className="md:hidden mb-8">
        <div className="space-y-6">
          {/* Copyright and Party Location with increased space */}
          <div className="space-y-6">
            <p className="text-sm text-white/60"></p>
            <p className="text-white/80"></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
