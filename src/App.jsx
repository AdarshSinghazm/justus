import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TemplatesSection } from './components/TemplatesSection';
import { HowItWorks } from './components/HowItWorks';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { brandConfig } from './config/brandConfig';

export const App = () => {
  return (
    <div className="min-h-screen bg-theme-page text-theme-text font-sans selection:bg-[#FF2B75] selection:text-white transition-colors duration-300">
      {/* Navbar with Dark/Light Toggle */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <TemplatesSection />
        <HowItWorks />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick WhatsApp Pill */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${brandConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(brandConfig.whatsapp.defaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A859] hover:bg-[#00924c] text-white font-cute text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#00A859]" />
          <span>chat on whatsapp ♡</span>
        </a>
      </aside>
    </div>
  );
};

export default App;
