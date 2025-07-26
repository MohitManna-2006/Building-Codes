import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeToggle } from '@/hooks/useTheme.tsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // On mount, check system or saved preference
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-16 bg-white/95 dark:bg-[#18132a]/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${isScrolled ? "shadow-lg shadow-gray-900/5 dark:shadow-black/20" : ""}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between relative">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center gap-3 z-10 group" 
          aria-label="comply360 homepage"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/25 dark:shadow-purple-400/25 group-hover:shadow-xl group-hover:shadow-purple-500/30 dark:group-hover:shadow-purple-400/30 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">ConformaBuild</span>
        </motion.a>
        
        {/* Centered Desktop Nav Links */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
          <motion.a 
            href="#how-it-works" 
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-medium" 
            aria-label="Solution"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            How It Works
          </motion.a>
          <motion.a 
            href="#compliance-approach" 
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-medium" 
            aria-label="How It Works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solution
          </motion.a>
          <motion.a 
            href="#solution" 
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-medium" 
            aria-label="Key Features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Key Features
          </motion.a>
          <motion.a 
            href="#faq-contact" 
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-medium" 
            aria-label="About"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Hamburger */}
          <motion.button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-all duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#18132a]/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-black/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            <motion.a 
              href="#compliance-approach" 
              className="text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 font-medium" 
              aria-label="Solution"
              whileHover={{ x: 5 }}
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 font-medium" 
              aria-label="How It Works"
              whileHover={{ x: 5 }}
            >
              Solution
            </motion.a>
            <motion.a 
              href="#faq-contact" 
              className="text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 font-medium" 
              aria-label="About"
              whileHover={{ x: 5 }}
            >
              About
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
} 