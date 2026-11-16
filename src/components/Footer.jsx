import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { InstagramIcon } from './Doodles';
import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 sm:px-12 bg-transparent border-t border-theme-border/40 text-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cute font-semibold">
        
        {/* Brand */}
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-theme-text transition-colors">
            {brandConfig.name}
          </span>
          <span className="text-[#FF2B75] text-lg">♡</span>
          <span className="text-theme-muted ml-2 transition-colors">
            • personal websites for couples
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-bold text-theme-text transition-colors">
          <a
            href={`https://wa.me/${brandConfig.whatsapp.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF2B75] transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#00A859]" />
            <span>whatsapp</span>
          </a>
          <a
            href={brandConfig.instagram.profileUrl || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF2B75] transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#FF2B75]" />
            <span>instagram</span>
          </a>
          <span className="text-theme-subtle font-normal transition-colors">
            © 2026
          </span>
        </div>

      </div>
    </footer>
  );
};
