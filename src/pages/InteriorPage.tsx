import React from 'react';
import { Sparkles, CheckCircle2, Shield, Heart, Eye, ArrowRight } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';

interface InteriorPageProps {
  onNavigate: (page: PageId) => void;
}

export const InteriorPage: React.FC<InteriorPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      <PageHeader
        badge="Interior Care"
        title="Deep Interior Cleaning & Cabin Detailing"
        description="Comprehensive vehicle interior cleaning focused on surface hygiene, dust extraction, clean touchpoints, and a thoroughly refreshed cabin presentation in Lyon."
        currentPageId="interior"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Cleaner Vehicle Interiors */}
        <section id="cleaner-vehicle-interiors" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pristine Cabin Environment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Cleaner Vehicle Interiors for Daily Comfort
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              The interior of a vehicle is an enclosed environment that experiences constant human contact. Airborne dust, road dirt brought in on footwear, food debris, and everyday fingerprints accumulate over time across seats, carpets, and steering controls.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Auto Brillance provides deep interior cleaning that addresses both obvious clutter and settled dust. By methodically working through the vehicle interior, we eliminate collected grit and grime, creating a visibly clean, hygienic, and inviting driving atmosphere.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold font-display text-white">
                Why Interior Cleanliness Matters
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A clean cabin environment improves passenger comfort, preserves interior aesthetics, and ensures that all switches, displays, and seating surfaces look neat and well-maintained.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Mercedes-Benz_W213_%28E-class%29_interior.jpg"
                  alt="Immaculate luxury car cockpit showing clean leather seats, steering wheel, and console"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Attention to Interior Surfaces */}
        <section id="attention-to-interior-surfaces" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Cleaning_interior.jpg"
                  alt="Technician carefully cleaning vehicle interior door trim and panels"
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
              <span>Surface Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Dedicated Attention to Interior Surfaces
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Modern vehicles combine diverse materials inside the cabin—ranging from textured plastics and soft rubbers to leather, fabric, wood veneer, and brushed metallic trim.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Our detailing process respects these varied surfaces. Every section—including the dashboard, instrument clusters, ventilation slats, center console, door sills, and door pockets—is carefully wiped down and cleared of dust and surface oils, restoring a natural, non-greasy, satin presentation.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Dashboard & Console:</strong> Careful dust removal around sensitive displays, air vents, and delicate console buttons.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Seating Surfaces:</strong> Dedicated surface vacuuming and wipe-down across seating contours, bolsters, and seams.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Carpets & Footwells:</strong> Comprehensive vacuuming to extract loose grit, sand, and particulate from floor fabrics and mats.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Detailed Presentation & Refreshed Appearance */}
        <section id="refreshed-appearance-section" className="bg-[#0A0D15] rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Aesthetic Result</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Detailed Presentation & A Refreshed Appearance
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              When an interior is properly detailed, the change is instantly noticeable the moment you open the car door. Without relying on heavy artificial smells or slippery dressings, true detailing leaves your vehicle cabin clean, balanced, and visually crisp.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              From clear, streak-free interior glass to clean pedal boxes and immaculate seatbelt anchors, the detailed presentation reflects care and dedication to quality automotive presentation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="interior-enquire-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
              >
                <span>Enquire About Interior Detailing</span>
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
        <section id="interior-enquiry-form-section" className="pt-4">
          <div className="max-w-4xl mx-auto">
            <EnquiryForm initialService="Deep Interior Cleaning" />
          </div>
        </section>
      </div>
    </div>
  );
};
