import React from 'react';
import { Sparkles, CheckCircle2, Shield, Eye, ArrowRight, Droplets } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';

interface ExteriorPageProps {
  onNavigate: (page: PageId) => void;
}

export const ExteriorPage: React.FC<ExteriorPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      <PageHeader
        badge="Exterior Care"
        title="Exterior Washing & Vehicle Presentation"
        description="Meticulous exterior hand washing and surface care designed to remove road grime, clean exterior panels and wheels, and present your vehicle with crisp visual refinement in Lyon."
        currentPageId="exterior"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Clean Exterior Surfaces */}
        <section id="clean-exterior-surfaces" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Droplets className="w-3.5 h-3.5" />
              <span>Thorough Exterior Cleaning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Clean Exterior Surfaces from Roof to Road
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Every day on the road exposes a vehicle’s exterior to traffic films, environmental soot, insect residue, and brake dust. Allowing these contaminants to sit on vehicle bodywork detracts from paint clarity and degrades the vehicle's appearance.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Auto Brillance provides professional exterior washing that thoroughly cleans paintwork, windows, and trim. By applying dedicated, surface-conscious washing practices, we gently lift away accumulated grime, leaving body panels cleanly washed, uniform, and ready for inspection.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold font-display text-white">
                Surface-Minded Cleaning
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our exterior cleaning focuses on cleaning thoroughly without harsh abrasive action, preserving the vehicle's clear coat and exterior components.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Aktivschaum.JPG"
                  alt="Exterior vehicle washing with active cleaning foam"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Attention to Visible Details */}
        <section id="exterior-visible-details" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Mobile_Wash_partner_washing_a_car.jpg"
                  alt="Detailing technician hand washing vehicle wheel arches and bodywork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Eye className="w-3.5 h-3.5" />
              <span>Visible Details</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Attention to Visible Details Across Every Panel
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Automated car wash tunnels are calibrated for speed and inevitably skip intricate exterior zones. The mark of professional exterior washing is deliberate attention to the contours and recesses of the vehicle.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              At our Lyon workshop, we dedicate time to cleaning radiator grilles, badge emblems, fuel filler flaps, door sills, window channels, and wheel spokes. These small areas define the overall visual quality of the car.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Wheels & Caliper Faces:</strong> Dedicated cleaning of wheel faces and inner contours to clear baked-on brake dust.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Grille & Emblems:</strong> Precision cleaning around badge crevices and aerodynamic intakes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Glass & Windscreen:</strong> Cleaning glass surfaces to remove road films and water spots.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Refined Appearance & Professional Finishing */}
        <section id="exterior-refined-appearance" className="bg-[#0A0D15] rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Crisp Finish</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              A Refined Appearance & Professional Finishing
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              A thorough exterior wash is more than just clean paint—it is about presenting the entire vehicle in harmonious visual balance. Once washed and carefully dried to prevent mineral spots, exterior rubber mouldings and tires are neatly dressed to complement the clean paintwork.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The result is a clean, sharp, and sophisticated vehicle appearance that looks maintained to high professional standards.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="exterior-enquire-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
              >
                <span>Enquire About Exterior Washing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="exterior-enquiry-form-section" className="pt-4">
          <div className="max-w-4xl mx-auto">
            <EnquiryForm initialService="Exterior Washing" />
          </div>
        </section>
      </div>
    </div>
  );
};
