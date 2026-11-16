import React, { useState, useEffect } from 'react';
import { X, Play, ChevronLeft, ChevronRight, MessageCircle, Camera, Calendar, Music, Mail, Heart, Film, Image as ImageIcon, ClipboardList } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export const TemplateDetailModal = ({ template, isOpen, onClose }) => {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setSelectedScreenshotIndex(0);
    setVideoError(false);
  }, [template]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !template) return null;

  const whatsappUrl = brandConfig.whatsapp.getTemplateLink(template.name);
  const screenshots = template.screenshots || [];
  const needs = template.needs || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-theme-modal rounded-[2rem] border-2 border-theme-border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10 transition-colors">
        
        {/* Sticky Header */}
        <div className="px-6 py-4 bg-theme-modalCard border-b border-theme-border flex items-center justify-between shrink-0 transition-colors">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-cute text-2xl font-bold text-theme-text">
              {template.name}
            </h3>
            <span className="text-[#FF2B75] text-xl">♡</span>
            <span className="font-cute text-xs font-semibold px-2.5 py-0.5 rounded-full bg-theme-pill text-theme-pillText ml-1">
              ★ {template.badge} ★
            </span>
            <span className="font-cute text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FF2B75] text-white">
              {template.priceDisplay || "₹300"}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-theme-modal hover:bg-theme-pill text-theme-text transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-8">
          
          {/* SECTION 1: VIDEO OF WEBSITE */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-4 h-4 text-[#FF2B75]" />
              <h4 className="font-cute text-base font-bold text-theme-text">
                1. Video of website
              </h4>
              <span className="text-xs text-theme-subtle font-medium">
                (screen recording preview)
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-theme-modalCard border-2 border-theme-border shadow-sm">
              {template.videoSrc && !videoError ? (
                <video
                  src={template.videoSrc}
                  poster={template.posterImage}
                  controls
                  playsInline
                  loop
                  muted
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="w-full h-full relative group">
                  <img
                    src={template.posterImage}
                    alt={`${template.name} video preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-theme-modalCard text-theme-text flex items-center justify-center shadow-md mb-2">
                      <Play className="w-5 h-5 ml-1 fill-current" />
                    </div>
                    <span className="font-cute text-xs font-bold text-white bg-[#FF2B75] px-3 py-1 rounded-full border border-white">
                      video preview
                    </span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 2: SCREENSHOTS OF WEBSITE */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#FF2B75]" />
                <h4 className="font-cute text-base font-bold text-theme-text">
                  2. Screenshots
                </h4>
                <span className="text-xs text-theme-subtle font-medium">
                  ({screenshots.length} screens)
                </span>
              </div>
            </div>

            {screenshots.length > 0 && (
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1A0E12] border-2 border-theme-border flex items-center justify-center">
                  <img
                    src={screenshots[selectedScreenshotIndex].url}
                    alt={screenshots[selectedScreenshotIndex].title}
                    className="max-h-full max-w-full object-contain p-2"
                  />

                  {screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setSelectedScreenshotIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-theme-modalCard text-theme-text flex items-center justify-center shadow-sm"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedScreenshotIndex((prev) => (prev + 1) % screenshots.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-theme-modalCard text-theme-text flex items-center justify-center shadow-sm"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-theme-modalCard/90 backdrop-blur-xs flex items-center justify-between text-xs text-theme-text">
                    <span className="font-cute font-bold">
                      {screenshots[selectedScreenshotIndex].title}
                    </span>
                    <span className="font-cute text-[11px] text-theme-subtle">
                      {selectedScreenshotIndex + 1} of {screenshots.length}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedScreenshotIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all ${
                        selectedScreenshotIndex === idx ? 'border-[#FF2B75] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={s.url} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* SECTION 3: NEEDS OF WEBSITE (REQUIREMENTS) */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList className="w-4 h-4 text-[#FF2B75]" />
              <h4 className="font-cute text-base font-bold text-theme-text">
                3. What we need from you
              </h4>
              <span className="text-xs text-theme-subtle font-medium">
                (send these to us on WhatsApp)
              </span>
            </div>

            <div className="bg-theme-modalCard rounded-2xl p-5 border-2 border-theme-border space-y-3 transition-colors">
              
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-theme-modal border border-theme-border transition-colors">
                <Camera className="w-5 h-5 text-[#FF2B75] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cute text-xs font-bold text-theme-text block">
                    Photos Needed:
                  </span>
                  <span className="font-cute text-xs sm:text-sm text-theme-muted font-medium">
                    {needs.photos || "10 to 15 photos (portraits, candid & favorite memories)"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-theme-modal border border-theme-border transition-colors">
                <Calendar className="w-5 h-5 text-[#FF2B75] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cute text-xs font-bold text-theme-text block">
                    Important Dates:
                  </span>
                  <span className="font-cute text-xs sm:text-sm text-theme-muted font-medium">
                    {needs.dates || "Anniversary date, first date, or milestone dates"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-theme-modal border border-theme-border transition-colors">
                <Music className="w-5 h-5 text-[#FF2B75] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cute text-xs font-bold text-theme-text block">
                    Special Song:
                  </span>
                  <span className="font-cute text-xs sm:text-sm text-theme-muted font-medium">
                    {needs.song || "1 Spotify or YouTube song link for background music"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-theme-modal border border-theme-border transition-colors">
                <Mail className="w-5 h-5 text-[#FF2B75] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cute text-xs font-bold text-theme-text block">
                    Love Letter / Message:
                  </span>
                  <span className="font-cute text-xs sm:text-sm text-theme-muted font-medium">
                    {needs.letter || "1 short message or private note to unfold"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-theme-modal border border-theme-border transition-colors">
                <Heart className="w-5 h-5 text-[#FF2B75] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cute text-xs font-bold text-theme-text block">
                    Names:
                  </span>
                  <span className="font-cute text-xs sm:text-sm text-theme-muted font-medium">
                    {needs.names || "Both of your names or nicknames"}
                  </span>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Sticky Bottom CTA */}
        <div className="p-4 sm:p-5 bg-theme-modalCard border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 transition-colors">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cute text-lg font-bold text-theme-text">
                {template.priceDisplay || "₹300"}
              </span>
              <span className="font-cute text-xs font-bold text-[#FF2B75]">
                ⚡ Handcrafted in 24 hours
              </span>
            </div>
            <span className="font-cute text-xs text-theme-muted font-medium">
              Private link + songs + photos & timeline included
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF2B75] hover:bg-[#E01760] text-white font-cute text-xs sm:text-sm font-bold shadow-btn active:translate-y-[2px] transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>get this template ({template.priceDisplay || "₹300"}) ♡</span>
          </a>
        </div>

      </div>
    </div>
  );
};
