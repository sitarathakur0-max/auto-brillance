import React from 'react';
import { Sparkles, Phone, MapPin, Star, ShieldCheck } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#060709] border-t border-white/[0.08] text-zinc-400">
      {/* Precision accent reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Factual Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-md">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                AUTO <span className="text-cyan-400">BRILLANCE</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Vehicle detailing business in Lyon providing deep interior cleaning, exterior washing, polishing and finishing services.
            </p>
            {/* Google Rating */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">{BUSINESS_DATA.rating}/5</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">{BUSINESS_DATA.reviewsCount} Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-display">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Detailing Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Auto Brillance
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => handleNav('faq')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Detailing Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-display">
              Detailing Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-service-interior"
                  onClick={() => handleNav('interior')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Deep Interior Cleaning
                </button>
              </li>
              <li>
                <button
                  id="footer-service-exterior"
                  onClick={() => handleNav('exterior')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Exterior Washing
                </button>
              </li>
              <li>
                <button
                  id="footer-service-polishing"
                  onClick={() => handleNav('polishing')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Polishing & Finishing
                </button>
              </li>
              <li>
                <button
                  id="footer-service-overview"
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Full Detailing Overview
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-display">
              Lyon Workshop
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">{BUSINESS_DATA.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="font-medium text-white hover:text-cyan-300 transition-colors"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-400">
                  Direct phone enquiries for service scheduling and vehicle inspections.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>{BUSINESS_DATA.address}</span>
            <span>•</span>
            <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 hover:underline">
              {BUSINESS_DATA.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
