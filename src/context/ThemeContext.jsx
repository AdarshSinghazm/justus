import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Light mode is ALWAYS default
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('justus-theme');
      // Only dark if user explicitly clicked and saved 'dark'
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  // Apply theme to document.documentElement and document.body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      if (body) body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      if (body) body.classList.remove('dark');
    }

    try {
      localStorage.setItem('justus-theme', theme);
    } catch (e) {}
  }, [theme]);

  // Clean toggle function - NO side effects inside setState (immune to React 18 StrictMode double-execution)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
