import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TemplateCard = ({ template, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(template)}
      className="group bg-theme-card rounded-[2rem] p-4 shadow-sm hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 cursor-pointer border border-theme-border flex flex-col justify-between"
    >
      {/* Thumbnail with Center Play Button */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-theme-page mb-3.5">
        <img
          src={template.posterImage}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-theme-card border border-theme-border text-theme-text flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
            <span className="text-xs ml-0.5">▶</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between px-2 pt-1 pb-1">
        {/* Template Name & Price */}
        <div>
          <h3 className="font-cute text-xl font-bold text-theme-text flex items-center gap-1.5 group-hover:text-[#FF2B75] transition-colors">
            <span>{template.name}</span>
            <span className="text-[#FF2B75] text-lg font-normal">♡</span>
          </h3>
          <span className="font-cute text-base font-bold text-[#FF2B75] block mt-0.5">
            {template.priceDisplay || "₹300"}
          </span>
        </div>

        {/* Pink Circle Arrow Button */}
        <div className="w-9 h-9 rounded-full bg-theme-pill text-theme-pillText group-hover:bg-[#FF2B75] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
          <ArrowRight className="w-4 h-4 text-inherit transition-colors" />
        </div>
      </div>
    </div>
  );
};
