import React, { useState, useEffect } from 'react';
import { PageId, BUSINESS_DATA } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InteriorPage } from './pages/InteriorPage';
import { ExteriorPage } from './pages/ExteriorPage';
import { PolishingPage } from './pages/PolishingPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';

const PAGE_META: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Auto Brillance – Vehicle Detailing in Lyon, France',
    description:
      'Professional vehicle detailing with deep interior cleaning, exterior washing, polishing and finishing services in Lyon. Rated 4.9/5 on Google.',
  },
  services: {
    title: 'Detailing Services – Auto Brillance | Car Detailing Lyon',
    description:
      'Explore deep interior cleaning, exterior washing, paint polishing, and finishing services at Auto Brillance in Lyon (69007).',
  },
  interior: {
    title: 'Deep Interior Cleaning – Auto Brillance | Detailing Lyon',
    description:
      'Dedicated interior car detailing in Lyon. Thorough cleaning of seating, upholstery, dashboard, and cabin surfaces for a refreshed driving experience.',
  },
  exterior: {
    title: 'Exterior Washing & Detailing – Auto Brillance | Lyon',
    description:
      'Professional exterior car washing and vehicle presentation in Lyon. Surface-conscious cleaning of bodywork, wheels, and glass.',
  },
  polishing: {
    title: 'Polishing & Finishing – Auto Brillance | Paint Care Lyon',
    description:
      'Enhance vehicle paint clarity, surface gloss, and visual presentation with professional polishing and finishing services at Auto Brillance in Lyon.',
  },
  about: {
    title: 'About Auto Brillance – Vehicle Detailing in Lyon (69007)',
    description:
      'Learn about Auto Brillance, an established vehicle detailing business located at 67 Avenue Jean Jaurès in Lyon, France.',
  },
  faq: {
    title: 'Frequently Asked Questions – Auto Brillance | Detailing Lyon',
    description:
      'Answers to common questions about interior cleaning, exterior washing, polishing, finishing, and booking vehicle detailing in Lyon.',
  },
  contact: {
    title: 'Contact Auto Brillance – 67 Avenue Jean Jaurès, 69007 Lyon',
    description:
      'Contact Auto Brillance for vehicle detailing inquiries. Call +33 4 78 51 29 64 or visit our workshop at 67 Avenue Jean Jaurès, 69007 Lyon.',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with window.location hash for clean deep linking & history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (PAGE_META[hash]) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and meta description on page change
  useEffect(() => {
    const meta = PAGE_META[currentPage];
    if (meta) {
      document.title = meta.title;
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute('content', meta.description);
      }
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', meta.title);
      }
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', meta.description);
      }
    }
  }, [currentPage]);

  // Scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-zinc-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Accessible Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'interior' && <InteriorPage onNavigate={handleNavigate} />}
        {currentPage === 'exterior' && <ExteriorPage onNavigate={handleNavigate} />}
        {currentPage === 'polishing' && <PolishingPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick-Call Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0D14]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <div className="text-xs">
            <span className="text-white font-semibold block">{BUSINESS_DATA.name}</span>
            <span className="text-zinc-400 text-[11px]">Lyon 7ème</span>
          </div>
        </div>
        <a
          id="mobile-bottom-bar-call-btn"
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md shadow-cyan-950/40"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call {BUSINESS_DATA.phone}</span>
        </a>
      </div>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-16 lg:bottom-8 right-6 z-30 p-3 rounded-full bg-[#121622] hover:bg-[#1A2030] text-zinc-300 hover:text-white border border-white/15 shadow-xl shadow-black/80 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
