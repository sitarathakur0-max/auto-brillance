import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_LIST } from '../data/content';
import { EnquiryForm } from '../components/EnquiryForm';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      <PageHeader
        badge="Detailing Services"
        title="Comprehensive Vehicle Detailing in Lyon"
        description="Auto Brillance offers specialized car detailing across four core disciplines: deep interior cleaning, exterior washing, paint polishing, and detailed finishing."
        currentPageId="services"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Service 1: Deep Interior Cleaning */}
        <section id="service-deep-interior" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Service Area 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Deep Interior Cleaning
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              A vehicle interior is where drivers spend their time. Over everyday journeys, dust, crumbs, grit, and ambient residues settle into upholstery seams, carpet fibers, and dashboard controls.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Our deep interior cleaning is focused on systematically cleaning every accessible cabin component. By giving dedicated care to seating surfaces, headliners, center consoles, door trims, and floor mats, we help restore a clean, orderly, and refreshed passenger compartment that looks and feels welcoming.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Thorough cleaning of cabin surfaces and interior touchpoints</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Detailed extraction of dust and everyday debris from carpets</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Interior glass cleaning for spotless clarity</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                id="view-interior-detail-page-btn"
                onClick={() => {
                  onNavigate('interior');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-colors"
              >
                <span>Read Dedicated Interior Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Mercedes-Benz_W213_%28E-class%29_interior.jpg"
                  alt="Spotless vehicle cabin with clean steering wheel, dashboard, and seating"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Exterior Washing */}
        <section id="service-exterior-washing" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Aktivschaum.JPG"
                  alt="Active exterior washing foam coating vehicle bodywork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Service Area 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Exterior Washing
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Exterior washing is essential for removing environmental buildup—including road grime, brake dust, atmospheric pollutants, and road films—that slowly dull a vehicle’s paint.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              At Auto Brillance, our exterior washing approach utilizes dedicated cleaning methods designed to safely remove surface dirt while preserving the integrity of paintwork, clear coats, and exterior trim. Every panel, wheel, and glass surface is washed with care, preparing the vehicle for subsequent refinement or immediate clean delivery.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hand-focused washing of exterior body panels</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Wheel face and wheel arch cleaning</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Thorough drying to prevent water spotting</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                id="view-exterior-detail-page-btn"
                onClick={() => {
                  onNavigate('exterior');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-colors"
              >
                <span>Read Dedicated Exterior Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Service 3: Polishing */}
        <section id="service-polishing" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Service Area 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Paint Polishing
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Polishing is a dedicated detailing service focused specifically on improving the optical clarity, richness, and gloss of your vehicle's painted surfaces.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Over time, clear coats can develop surface hazing that robs paint of its original vibrancy. Our careful polishing process refines the top layer of paintwork, smoothing micro-irregularities to dramatically heighten surface reflections and bring a deep, mirror-like presentation back to the vehicle.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Enhances clear coat gloss and color vibrancy</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Refines painted surfaces for sleek, sharp reflections</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Applied with precision across all painted bodywork</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                id="view-polishing-page-btn"
                onClick={() => {
                  onNavigate('polishing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-colors"
              >
                <span>Read Polishing & Finishing Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e2/AZ_Auto_Detailing.jpg"
                  alt="Specialist polishing a vehicle exterior panel with machine buffer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Finishing */}
        <section id="service-finishing" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Close-up_view_of_a_sophisticated_car_headlight_reveals_intricate_components_and_reflections.jpg"
                  alt="Finished automotive exterior with crisp headlight details and immaculate paint gloss"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Service Area 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Vehicle Finishing
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Finishing is the conclusive stage that transforms a clean car into a fully detailed vehicle. It focuses on the accent elements that frame the vehicle’s overall presentation.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              During the finishing stage, external plastic mouldings, rubber gaskets, chrome accents, and tires are neatly inspected and conditioned. Window glass is meticulously cleaned inside and out for crystal clarity. The entire vehicle receives a thorough visual inspection to ensure a cohesive, immaculate appearance before handover.
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Streak-free interior and exterior window clarity</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Neat presentation of trims, rubbers, and exterior plastics</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Comprehensive final inspection under detailing light</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                id="view-finishing-page-btn"
                onClick={() => {
                  onNavigate('polishing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-colors"
              >
                <span>Read Finishing Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section on Services Page */}
        <section id="services-enquiry-form-section" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-display text-white">
              Enquire About Our Detailing Services
            </h2>
            <p className="text-sm text-zinc-400">
              Select your service of interest or call Auto Brillance in Lyon at{' '}
              <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 font-semibold hover:underline">
                {BUSINESS_DATA.phone}
              </a>
              .
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <EnquiryForm initialService="Comprehensive Detailing Enquiry" />
          </div>
        </section>
      </div>
    </div>
  );
};
