import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out pt-3 sm:pt-4 px-4 sm:px-8 ${
        scrolled ? 'pointer-events-none' : 'pb-2 bg-transparent pointer-events-auto'
      }`}
    >
      {/* Morphing Capsule: subtle minimal width change, transforms into modern floating island */}
      <div 
        className={`max-w-5xl mx-auto w-full transition-all duration-300 ease-in-out flex items-center justify-between ${
          scrolled 
            ? `px-5 sm:px-7 py-2 sm:py-2.5 rounded-full backdrop-blur-xl pointer-events-auto ${
                isDark 
                  ? 'bg-[#1C0F20]/90 border border-[#4A2650]/80 text-[#F7E7F0] shadow-[0_12px_36px_rgba(0,0,0,0.5)]' 
                  : 'bg-white/90 border border-pink-200/80 text-[#342033] shadow-[0_12px_36px_rgba(255,43,117,0.12)]'
              }`
            : `px-4 sm:px-6 py-2 bg-transparent border border-transparent ${
                isDark ? 'text-[#F7E7F0]' : 'text-[#342033]'
              }`
        }`}
      >
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-1.5 focus:outline-hidden group select-none"
        >
          <span className="font-cute text-2xl sm:text-3xl font-bold tracking-tight transition-colors">
            justus.
          </span>
          <span className="text-[#FF2B75] text-xl">
            ♡
          </span>
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-2">
          <a
            href="#templates"
            className={`font-cute text-xs sm:text-sm font-bold opacity-80 hover:opacity-100 hover:text-[#FF2B75] px-4 py-1.5 rounded-full transition-all ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            templates
          </a>
          <a
            href="#how-it-works"
            className={`font-cute text-xs sm:text-sm font-bold opacity-80 hover:opacity-100 hover:text-[#FF2B75] px-4 py-1.5 rounded-full transition-all ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            how it works
          </a>
          <a
            href="#contact"
            className={`font-cute text-xs sm:text-sm font-bold opacity-80 hover:opacity-100 hover:text-[#FF2B75] px-4 py-1.5 rounded-full transition-all ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            order
          </a>
        </nav>

        {/* Right Controls: Theme Toggle + Create Yours CTA */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border hover:scale-105 active:scale-95 transition-all focus:outline-hidden cursor-pointer shadow-xs flex items-center justify-center select-none ${
              isDark 
                ? 'bg-[#3D1C36] text-[#FF8BB7] border-[#FF2B75]/30' 
                : 'bg-[#FADCE7] text-[#FF2B75] border-[#F5B8CE]/80'
            }`}
            title={isDark ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
            aria-label="Toggle Dark / Light Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#FEE371]" />
            ) : (
              <Moon className="w-4 h-4 text-[#FF2B75]" />
            )}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href={brandConfig.whatsapp.getTemplateLink("The Classic")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-7 py-2.5 rounded-full bg-[#FF2B75] hover:bg-[#E01760] text-white font-cute text-xs sm:text-sm font-bold tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              ★ create yours ★
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={brandConfig.whatsapp.getTemplateLink("The Classic")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#FF2B75] text-white font-cute text-xs font-bold shadow-xs"
            >
              ★ create ★
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 opacity-80 hover:opacity-100 focus:outline-hidden cursor-pointer transition-opacity"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className={`max-w-4xl mx-auto md:hidden mt-2 p-5 rounded-3xl backdrop-blur-xl shadow-lg space-y-3 pointer-events-auto transition-all ${
            isDark 
              ? 'bg-[#1C0F20]/95 border border-[#4A2650] text-[#F7E7F0]' 
              : 'bg-white/95 border border-pink-200/80 text-[#342033]'
          }`}
        >
          <a
            href="#templates"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-cute text-sm font-bold py-1.5 px-3 rounded-xl transition-colors ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            templates
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-cute text-sm font-bold py-1.5 px-3 rounded-xl transition-colors ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            how it works
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-cute text-sm font-bold py-1.5 px-3 rounded-xl transition-colors ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/60'
            }`}
          >
            order
          </a>

          {/* Mobile Theme Switcher Bar */}
          <div className="pt-3 border-t border-pink-200/50 dark:border-[#4A2650] flex items-center justify-between">
            <span className="font-cute text-xs font-bold opacity-75">
              Appearance
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className={`px-3.5 py-1.5 rounded-full font-cute text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                isDark 
                  ? 'bg-[#3D1C36] text-[#FF8BB7] border border-[#FF2B75]/30' 
                  : 'bg-[#FADCE7] text-[#FF2B75] border border-[#F5B8CE]/80'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#FEE371]" />
                  <span>Light Mode ☀️</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#FF2B75]" />
                  <span>Dark Mode 🌙</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
