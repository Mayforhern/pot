export default function Component() {
  return (
    <footer className="bg-zinc-950 text-white font-poppins py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Copyright */}
        <div className="space-y-4">
          <div className="border border-white/20 inline-block px-4 py-2">
            <span className="font-bold">New Year</span>
            <span className="text-white/80">Party</span>
          </div>
          <p className="text-sm text-white/60">
            Copyright © 2024 Luxe Nighters <br />
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-white/80 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Tickets
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Program
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Date */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Date</h3>
          <p>December, 31st, 2024</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Party Location</h3>
          <p>Soon</p>
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
