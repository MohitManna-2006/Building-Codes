import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-9 z-40 h-16 bg-[#181a20] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">buildingCodes</span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors">
              Solution
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <select className="bg-transparent text-sm text-gray-400 border-none outline-none">
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>

          <button className="hidden lg:inline-block text-gray-400 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors">
            Request Early Access
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-6 h-6 flex flex-col gap-1 justify-center"
          >
            <span className="w-full h-0.5 bg-gray-400"></span>
            <span className="w-full h-0.5 bg-gray-400"></span>
            <span className="w-full h-0.5 bg-gray-400"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 border-b border-white/10 glass-effect"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <a href="#solution" className="block text-gray-400 hover:text-white transition-colors">
              Solution
            </a>
            <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
              About
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
