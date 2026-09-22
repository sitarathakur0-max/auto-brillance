import React, { useState } from 'react';
import { Sparkles, Phone, Menu, X, ChevronRight, Shield } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'interior', label: 'Interior Detailing' },
    { id: 'exterior', label: 'Exterior Detailing' },
    { id: 'polishing', label: 'Polishing & Finishing' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar-header"
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#08090C]/90 border-b border-white/[0.08] transition-colors"
    >
      {/* Top micro-bar with location and phone */}
      <div className="w-full bg-[#0D1017] border-b border-white/[0.05] py-1.5 px-4 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-zinc-300 font-medium">{BUSINESS_DATA.name}</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline">{BUSINESS_DATA.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 font-medium">
              ★ <strong className="text-white font-semibold">{BUSINESS_DATA.rating}/5</strong> on Google ({BUSINESS_DATA.reviewsCount} reviews)
            </span>
            <span className="text-zinc-600">•</span>
            <a
              id="topbar-phone-link"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            aria-label="Auto Brillance Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-lg shadow-black/50 group-hover:border-cyan-500/50 transition-colors">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm group-hover:bg-cyan-400/20 transition-all" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white flex items-center gap-1.5">
                AUTO <span className="text-cyan-400 font-extrabold">BRILLANCE</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                Lyon • Car Detailing
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all relative ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-inner'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-call-cta"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-950/40 border border-cyan-400/30 hover:shadow-cyan-500/20 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              aria-label="Call Auto Brillance"
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-400 hover:text-cyan-300"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-[#08090C]/98 backdrop-blur-xl border-t border-white/10 p-6 overflow-y-auto flex flex-col justify-between"
        >
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-zinc-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-zinc-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>67 Avenue Jean Jaurès, 69007 Lyon</span>
            </div>
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-xl shadow-cyan-950/50 border border-cyan-400/40"
            >
              <Phone className="w-4 h-4" />
              <span>Call +33 4 78 51 29 64</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
