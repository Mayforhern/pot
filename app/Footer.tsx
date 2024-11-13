export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white font-poppins py-12 border-t border-white/20 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Copyright */}
        <div className="space-y-4">
          <div className="inline-block px-6 py-4 border-b border-white/20 rounded-lg shadow-md">
            <span className="font-bold text-3xl text-purple-400">New Year</span>
            <span className="text-white/80 text-xl">Party</span>
          </div>
          <p className="text-sm text-white/60">
            Copyright © 2024 Luxe Nighters <br />
            All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-400">Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-purple-300 transition-all duration-300 transform hover:underline">
              Home
            </a>
            <a href="#" className="hover:text-purple-300 transition-all duration-300 transform hover:underline">
              Tickets
            </a>
            <a href="#" className="hover:text-purple-300 transition-all duration-300 transform hover:underline">
              Program
            </a>
            <a href="#" className="hover:text-purple-300 transition-all duration-300 transform hover:underline">
              Contact
            </a>
          </nav>
        </div>

        {/* Date */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-400">Date</h3>
          <p>December, 31st, 2024</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-400">Party Location</h3>
          <p>Location to be revealed soon</p>
        </div>

        {/* Buy Tickets Button */}
        <div className="col-span-1 mt-8 md:col-span-4 text-center">
          <a 
            href="#"
            className="btn-beep"
          >
            Buy Tickets Now
            {/* Snowflakes */}
            <div className="snowflakes">
              <div className="snowflake">❄️</div>
              <div className="snowflake">❄️</div>
              <div className="snowflake">❄️</div>
            </div>
          </a>
        </div>

        {/* Instagram Link */}
        <div className="col-span-1 mt-8 md:col-span-4 text-center">
          <a 
            href="https://www.instagram.com/luxenighters" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Follow us on Instagram @luxenighters
          </a>
        </div>

      </div>
    </footer>
  );
}
