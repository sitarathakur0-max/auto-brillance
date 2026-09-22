import React from 'react';
import { Sparkles, MapPin, Phone, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { ReviewBadge } from '../components/ReviewBadge';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      <PageHeader
        badge="About Auto Brillance"
        title="Vehicle Detailing Specialist in Lyon"
        description="Auto Brillance is a vehicle detailing business based at 67 Avenue Jean Jaurès in Lyon, dedicated to deep interior cleaning, exterior washing, polishing, and finishing services."
        currentPageId="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Business Overview */}
        <section id="about-overview-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Dedicated to the Appearance & Detail of Every Vehicle
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Based in the 7th arrondissement of Lyon, <strong>Auto Brillance</strong> operates as a vehicle detailing workshop committed to preserving and enhancing the visual condition of motor vehicles.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              We focus on comprehensive vehicle presentation through four core disciplines: <strong>deep interior cleaning</strong>, <strong>exterior washing</strong>, <strong>paint polishing</strong>, and <strong>meticulous finishing</strong>. Whether addressing everyday road dirt or refining exterior paint gloss, our work is defined by precision, patience, and surface-conscious practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <h4 className="text-sm font-semibold text-white font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Interior & Exterior Care
                </h4>
                <p className="text-xs text-zinc-400">
                  Equal dedication to passenger cabin freshness and exterior paint luster.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <h4 className="text-sm font-semibold text-white font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Polishing & Finishing
                </h4>
                <p className="text-xs text-zinc-400">
                  Targeted paint refinement and detailed inspection for a complete handover.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Close-up_view_of_a_sophisticated_car_headlight_reveals_intricate_components_and_reflections.jpg"
                  alt="Close-up view of pristine vehicle headlight and sleek body reflections"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quick Fact Sheet */}
            <div className="p-5 rounded-xl bg-[#0F131C] border border-white/10 space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                <span className="text-zinc-400">Business Name</span>
                <span className="text-white font-semibold">{BUSINESS_DATA.name}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                <span className="text-zinc-400">Category</span>
                <span className="text-cyan-300 font-semibold">{BUSINESS_DATA.category}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                <span className="text-zinc-400">Location</span>
                <span className="text-white font-semibold">Lyon, France (69007)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                <span className="text-zinc-400">Google Customer Rating</span>
                <span className="text-amber-400 font-semibold">{BUSINESS_DATA.rating}/5 ({BUSINESS_DATA.reviewsCount} Reviews)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">Direct Telephone</span>
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 font-semibold hover:underline">
                  {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Detailing Philosophy */}
        <section id="about-philosophy-section" className="bg-[#0A0D15] rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16 space-y-8">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Attention to Appearance and Detail
            </h3>
            <p className="text-base text-zinc-300 leading-relaxed">
              At Auto Brillance, detailing is treated as a craft of careful observation. We take the time needed to systematically inspect every surface—from the texture of cabin leather and interior consoles to paint reflections under direct inspection lighting.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Our approach avoids rushed shortcuts. By utilizing thorough, surface-appropriate cleaning and polishing techniques, we help our clients maintain vehicles that make a lasting positive impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <h4 className="text-base font-bold font-display text-white">
                Surface Integrity
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prioritizing gentle, methodical washing and cleaning methods that protect vehicle surfaces while lifting stubborn grime.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <h4 className="text-base font-bold font-display text-white">
                Paint Clarity
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Disciplined polishing that enhances depth, clarity, and luster across all painted vehicle panels.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <h4 className="text-base font-bold font-display text-white">
                Final Inspection
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Meticulous finishing covering windows, rubbers, wheels, and accents for a complete presentation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Location & Call to Action */}
        <section id="about-contact-cta" className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121724] to-[#0A0D15] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-white">
              Visit Auto Brillance in Lyon
            </h3>
            <p className="text-sm text-zinc-300 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{BUSINESS_DATA.address}</span>
            </p>
            <p className="text-xs text-zinc-400">
              Contact us by telephone to discuss detailing services or request a vehicle assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              id="about-call-button"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_DATA.phone}</span>
            </a>
            <button
              id="about-nav-contact-button"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <span>Online Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
