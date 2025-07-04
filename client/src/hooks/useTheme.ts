import { useEffect, useState } from 'react';
export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (typeof window !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark' || 'light'
  );
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