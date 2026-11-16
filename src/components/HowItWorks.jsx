import React from 'react';

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "pick a design",
      description: "Choose whichever layout you like best — classic, storybook, or photobooth.",
    },
    {
      number: "02",
      title: "send your memories",
      description: "Send your photos, anniversary date, song link, and private note on WhatsApp.",
    },
    {
      number: "03",
      title: "get your link",
      description: "We build your website and deliver your private link and QR code in 24 hours.",
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 px-6 sm:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-theme-pill text-theme-pillText font-cute text-xs font-bold tracking-wide mb-3 border border-theme-pillBorder transition-colors">
            ★ simple 3-step process ★
          </div>

          <h2 className="text-3xl sm:text-5xl font-cute font-bold text-theme-text tracking-tight transition-colors">
            how it <span className="text-[#FF2B75]">works ♡</span>
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-theme-card rounded-3xl p-6 sm:p-7 border border-theme-border shadow-sm flex flex-col justify-between transition-colors"
            >
              <div>
                <span className="font-cute text-3xl font-bold text-[#FF2B75] block mb-3">
                  {step.number}
                </span>

                <h3 className="font-cute text-xl font-bold text-theme-text mb-2 transition-colors">
                  {step.title}
                </h3>
                <p className="font-cute text-sm text-theme-muted leading-relaxed font-semibold transition-colors">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-theme-border flex items-center justify-between text-xs font-cute text-theme-subtle transition-colors">
                <span>justus.</span>
                <span className="text-[#FF2B75]">♡</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
