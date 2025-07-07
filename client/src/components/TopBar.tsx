import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-16 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md border-b border-border" : "border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#hero" className="flex items-center gap-2" aria-label="Comply360 Home">
            <span className="text-2xl font-bold text-primary">Comply360</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#problem" className="text-gray-500 hover:text-primary font-medium transition-colors">Problem</a>
            <a href="#vision" className="text-gray-500 hover:text-primary font-medium transition-colors">Vision</a>
            <a href="#founders" className="text-gray-500 hover:text-primary font-medium transition-colors">Founder's Circle</a>
            <a href="#faq" className="text-gray-500 hover:text-primary font-medium transition-colors">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#founders"
            className="px-5 py-2 rounded-lg bg-accent text-white font-semibold shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors text-base"
          >
            Join Founder's Circle
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col gap-1 justify-center items-center"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="w-6 h-0.5 bg-gray-400 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-400 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-400 rounded"></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            <a href="#problem" className="block text-gray-500 hover:text-primary font-medium transition-colors">Problem</a>
            <a href="#vision" className="block text-gray-500 hover:text-primary font-medium transition-colors">Vision</a>
            <a href="#founders" className="block text-gray-500 hover:text-primary font-medium transition-colors">Founder's Circle</a>
            <a href="#faq" className="block text-gray-500 hover:text-primary font-medium transition-colors">FAQ</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
