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
      className={`fixed top-0 left-0 right-0 z-40 h-16 bg-white dark:bg-[#181a20] border-b border-gray-100 dark:border-gray-800 transition-shadow ${isScrolled ? "shadow-md" : ""}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-10" aria-label="comply360 homepage">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">ConformaBuild</span>
        </a>
        {/* Centered Desktop Nav Links */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <a href="#solution" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Solution">Solution</a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="How It Works">How It Works</a>
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="About">About</a>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />
          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272f] text-gray-700 dark:text-gray-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#181a20] border-b border-gray-100 dark:border-gray-800 shadow-md animate-fade-in">
          <div className="flex flex-col gap-2 px-6 py-4">
            <a href="#solution" className="text-gray-700 dark:text-gray-200 py-2" aria-label="Solution">Solution</a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-200 py-2" aria-label="How It Works">How It Works</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 py-2" aria-label="About">About</a>
          </div>
        </div>
      )}
    </nav>
  );
} 