import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const useTheme = () => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  };
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, setTheme };
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle color mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-charcoalLite transition"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-brandPurple-400" />
      ) : (
        <Moon className="h-5 w-5 text-brandPurple-600" />
      )}
    </button>
  );
}; 