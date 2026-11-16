import React from 'react';
import { brandConfig } from '../config/brandConfig';

export const Hero = () => {
  return (
    <section id="home" className="pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 px-6 sm:px-12 relative bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-cute font-bold tracking-tight leading-[1.1] text-theme-text mb-4 transition-colors">
              <span>a little website,</span><br />
              <span className="text-[#FF2B75] inline-flex items-center gap-2">
                <span>just for us</span>
                <span className="text-3xl sm:text-5xl font-normal">♡</span>
              </span>
            </h1>

            {/* Clean body text in navbar font */}
            <p className="font-cute text-base sm:text-lg text-theme-muted font-semibold leading-relaxed max-w-lg mb-6 transition-colors">
              Share your favorite memories, your song, and special dates. We’ll turn them into a private website that stays live on the internet forever — a lifelong love story made just for the two of you. ♡
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pill-yellow border border-pill-yellow text-pill-yellow font-cute text-xs font-bold transition-colors">
                <span>⚡</span>
                <span>ready in 24 hours</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pill-peach border border-pill-peach text-pill-peach font-cute text-xs font-bold transition-colors">
                <span>🔒</span>
                <span>your own private website</span>
              </div>
            </div>

            {/* 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#templates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF2B75] hover:bg-[#E01760] text-white border border-[#342033] dark:border-white/20 font-cute text-sm font-bold shadow-btn hover:translate-y-[1px] active:translate-y-[3px] transition-all"
              >
                <span>★ see the templates ★</span>
                <span>→</span>
              </a>

              <a
                href={brandConfig.whatsapp.getTemplateLink("The Classic")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-theme-card hover:bg-theme-pill text-theme-text border border-theme-border font-cute text-sm font-bold shadow-btn hover:translate-y-[1px] active:translate-y-[3px] transition-all"
              >
                <span className="text-[#00A859] text-base">💬</span>
                <span>chat on whatsapp ♡</span>
              </a>
            </div>

          </div>

          {/* Right Column: Polaroid Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[360px]">
              
              {/* Back Card */}
              <div className="absolute inset-0 bg-theme-polaroidCard rounded-3xl border border-theme-border rotate-[6deg] translate-x-2 translate-y-1 pointer-events-none transition-colors" />

              {/* Main Polaroid */}
              <div className="relative bg-theme-polaroid rounded-3xl p-4 sm:p-5 border border-theme-border shadow-polaroid rotate-[-1deg] hover:rotate-0 transition-all duration-300">
                
                {/* Yellow Washi Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#FEE371]/90 rounded-xs border-y border-[#342033]/15 pointer-events-none" />

                {/* Photo */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative mb-3.5 bg-theme-page">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                    alt="Couple chairs with flowers"
                    className="w-full h-full object-cover"
                  />

                  {/* Audio pill */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-theme-card text-theme-text font-cute text-xs font-bold flex items-center gap-1.5 shadow-xs border border-theme-border transition-colors">
                    <span className="text-[#00A859] font-bold text-xs">▷</span>
                    <span>playing our song...</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="text-center pt-1 pb-1">
                  <h3 className="font-cute text-xl font-bold text-theme-text transition-colors">
                    Liam & Emma
                  </h3>
                  <p className="font-cute text-sm font-semibold text-[#FF2B75] mt-0.5">
                    october 14 • sunset by the lake
                  </p>
                  <p className="font-cute text-xs text-theme-subtle mt-1 transition-colors">
                    justus.love/liam-and-emma ♡
                  </p>
                </div>

              </div>

              {/* Heart Accent */}
              <div className="absolute -right-6 top-1/2 -translate-y-4 text-[#FF2B75] text-2xl pointer-events-none select-none">
                ♡
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Looping Ribbon Heart */}
        <div className="mt-12 flex justify-center items-center pointer-events-none">
          <svg viewBox="0 0 120 40" className="w-20 h-8 text-[#FF2B75]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 25 C30 25, 45 35, 55 22 C60 14, 55 5, 45 8 C35 12, 45 28, 60 32 C75 28, 85 12, 75 8 C65 5, 60 14, 65 22 C75 35, 90 25, 115 25" />
          </svg>
        </div>

      </div>
    </section>
  );
};
