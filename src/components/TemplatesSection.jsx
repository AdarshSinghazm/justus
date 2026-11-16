import React, { useState } from 'react';
import { templatesData } from '../data/templates';
import { TemplateCard } from './TemplateCard';
import { TemplateDetailModal } from './TemplateDetailModal';

export const TemplatesSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <section id="templates" className="py-14 sm:py-20 px-6 sm:px-12 bg-transparent relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          
          {/* Top Outlined Pink Heart */}
          <div className="flex justify-center mb-1">
            <span className="text-2xl text-[#FF2B75] font-normal">
              ♡
            </span>
          </div>

          {/* Title: "Website Templates" */}
          <h2 className="text-4xl sm:text-5xl font-cute font-bold tracking-tight text-theme-text transition-colors">
            <span>Website{' '}</span>
            <span className="font-cursive text-5xl sm:text-6xl text-[#FF2B75] relative inline-block font-normal">
              Templates
              <svg 
                viewBox="0 0 200 20" 
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FF2B75]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
              >
                <path d="M5 12 C60 18, 140 18, 195 8" />
              </svg>
            </span>
          </h2>
          
          <div className="text-xl font-cute text-theme-subtle mt-2 transition-colors">
            ~
          </div>
        </div>

        {/* 3 Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {templatesData.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={setSelectedTemplate}
            />
          ))}
        </div>

        {/* Bottom Ribbon */}
        <div className="mt-14 flex justify-center items-center pointer-events-none">
          <svg viewBox="0 0 120 40" className="w-20 h-8 text-[#FF2B75]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 25 C30 25, 45 35, 55 22 C60 14, 55 5, 45 8 C35 12, 45 28, 60 32 C75 28, 85 12, 75 8 C65 5, 60 14, 65 22 C75 35, 90 25, 115 25" />
          </svg>
        </div>

      </div>

      {/* Extra Details Modal */}
      <TemplateDetailModal
        template={selectedTemplate}
        isOpen={Boolean(selectedTemplate)}
        onClose={() => setSelectedTemplate(null)}
      />
    </section>
  );
};
