import React from 'react';

/**
 * Hand-drawn romantic doodles, hearts, stars, washi tape, and scrapbook accents
 */

export const HeartDoodle = ({ className = "w-6 h-6 text-[#743D50]", fill = "none" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill={fill === "currentColor" ? "currentColor" : fill} 
    stroke="currentColor" 
    strokeWidth="5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M50 85 C25 65, 10 45, 15 28 C20 12, 38 12, 50 26 C62 12, 80 12, 85 28 C90 45, 75 65, 50 85 Z" />
  </svg>
);

export const CuteDoubleHeart = ({ className = "w-8 h-8 text-[#E89CAE]" }) => (
  <svg viewBox="0 0 120 90" className={className} fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
    <path d="M40 70 C20 52, 10 38, 14 24 C18 10, 32 10, 42 22 C52 10, 66 10, 70 24 C74 38, 60 52, 40 70 Z" />
    <path d="M75 58 C63 46, 56 36, 59 26 C62 16, 72 16, 78 24 C84 16, 94 16, 97 26 C100 36, 90 46, 75 58 Z" />
  </svg>
);

export const StarSparkle = ({ className = "w-5 h-5 text-[#F4C6D2]" }) => (
  <svg viewBox="0 0 60 60" className={className} fill="currentColor">
    <path d="M30 0 C30 18, 32 30, 60 30 C32 30, 30 42, 30 60 C30 42, 28 30, 0 30 C28 30, 30 18, 30 0 Z" />
  </svg>
);

export const MiniStar = ({ className = "w-4 h-4 text-[#743D50]" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <line x1="20" y1="4" x2="20" y2="36" />
    <line x1="4" y1="20" x2="36" y2="20" />
    <line x1="9" y1="9" x2="31" y2="31" />
    <line x1="9" y1="31" x2="31" y2="9" />
  </svg>
);

export const CurvedArrow = ({ className = "w-16 h-12 text-[#743D50]" }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 45 C35 15, 65 10, 85 30" strokeDasharray="3 3" />
    <path d="M72 32 L85 30 L83 17" />
  </svg>
);

export const RomanticUnderline = ({ className = "w-32 h-4 text-[#F4C6D2]" }) => (
  <svg viewBox="0 0 200 24" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M5 16 C50 4, 120 22, 195 10" />
  </svg>
);

export const SwirlCircle = ({ className = "w-24 h-24 text-[#F4C6D2]" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M50 10 C75 10, 92 28, 90 52 C88 76, 68 92, 45 90 C22 88, 8 68, 10 45 C12 25, 28 12, 52 14 C72 16, 84 30, 82 50" />
  </svg>
);

export const WashiTape = ({ color = "bg-[#F8DDE5]/80", rotate = "-3deg", className = "" }) => (
  <div 
    className={`absolute h-5 px-6 rounded-xs shadow-xs pointer-events-none select-none z-20 backdrop-blur-xs flex items-center justify-center opacity-85 ${color} ${className}`}
    style={{ transform: `rotate(${rotate})` }}
  >
    <div className="w-full h-[1px] border-b border-dashed border-[#743D50]/15" />
  </div>
);

export const PaperClip = ({ className = "w-6 h-10 text-[#743D50]/60" }) => (
  <svg viewBox="0 0 40 70" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M12 22 L12 50 C12 58, 28 58, 28 50 L28 14 C28 6, 6 6, 6 18 L6 50 C6 64, 34 64, 34 46 L34 20" />
  </svg>
);

export const LoveStamp = ({ text = "FIRST LOVE", date = "2026", className = "" }) => (
  <div className={`inline-flex flex-col items-center justify-center border-2 border-dashed border-[#743D50]/30 rounded-lg p-2 font-handwriting text-xs tracking-wider uppercase text-[#743D50]/70 select-none rotate-[-6deg] ${className}`}>
    <span className="font-bold text-sm tracking-widest">{text}</span>
    <span className="text-[10px] opacity-75">{date} • JUST US</span>
  </div>
);

export const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

