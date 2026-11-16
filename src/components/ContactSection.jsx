import React from 'react';
import { MessageCircle } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { InstagramIcon } from './Doodles';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 px-6 sm:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Header */}
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-theme-pill text-theme-pillText font-cute text-xs font-bold tracking-wide mb-3 border border-theme-pillBorder transition-colors">
          ★ talk to us directly ★
        </div>

        <h2 className="text-3xl sm:text-5xl font-cute font-bold text-theme-text tracking-tight transition-colors">
          ready to make <span className="text-[#FF2B75]">yours? ♡</span>
        </h2>
        <p className="font-cute text-sm sm:text-base text-theme-muted mt-3 max-w-md mx-auto font-semibold transition-colors">
          Message us on WhatsApp to choose a design and share your memories.
        </p>

        {/* Clean Action Cards */}
        <div className="mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          
          {/* WhatsApp Card */}
          <div className="bg-theme-card rounded-3xl p-6 sm:p-7 border border-theme-border shadow-sm text-left flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#00A859]/15 text-[#00A859] flex items-center justify-center border border-[#00A859]/25">
                  <MessageCircle className="w-5 h-5 fill-[#00A859] text-[#00A859]" />
                </div>
                <span className="font-cute text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#00A859] text-white">
                  fast reply
                </span>
              </div>
              <h3 className="font-cute text-xl font-bold text-theme-text mb-1 transition-colors">
                WhatsApp
              </h3>
              <p className="font-cute text-xs sm:text-sm text-theme-muted mb-5 font-semibold leading-relaxed transition-colors">
                Send your pictures, song link, and dates directly in chat to get started.
              </p>
            </div>

            <a
              href={`https://wa.me/${brandConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(brandConfig.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#00A859] hover:bg-[#00924c] text-white font-cute text-xs sm:text-sm font-bold whitespace-nowrap shadow-[0_3px_0_0_#342033] dark:shadow-[0_3px_0_0_#00A859] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#00A859] shrink-0" />
              <span>chat on whatsapp ♡</span>
            </a>
          </div>

          {/* Instagram Card (Dummy placeholder for now) */}
          <div className="bg-theme-card rounded-3xl p-6 sm:p-7 border border-theme-border shadow-sm text-left flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white flex items-center justify-center shadow-xs">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <span className="font-cute text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FF2B75] text-white">
                  @{brandConfig.instagram.handle || 'justus.love'}
                </span>
              </div>
              <h3 className="font-cute text-xl font-bold text-theme-text mb-1 transition-colors">
                Instagram DM
              </h3>
              <p className="font-cute text-xs sm:text-sm text-theme-muted mb-5 font-semibold leading-relaxed transition-colors">
                See real couple reactions, previews, and chat with us anytime.
              </p>
            </div>

            <a
              href={brandConfig.instagram.profileUrl || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#FF2B75] hover:bg-[#E01760] text-white font-cute text-xs sm:text-sm font-bold whitespace-nowrap shadow-[0_3px_0_0_#342033] dark:shadow-[0_3px_0_0_#FF2B75] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <InstagramIcon className="w-4 h-4 shrink-0" />
              <span>send an instagram DM ♡</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
