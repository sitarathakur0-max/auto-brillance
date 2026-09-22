import React from 'react';
import {
  Sparkles,
  Phone,
  ArrowRight,
  Shield,
  Eye,
  CheckCircle,
  Car,
  Layers,
  Sparkle,
  Compass,
} from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { ReviewBadge } from '../components/ReviewBadge';
import { SERVICES_LIST } from '../data/content';
import { EnquiryForm } from '../components/EnquiryForm';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28"
      >
        {/* Background dark gradients & specular reflection glows */}
        <div className="absolute inset-0 bg-[#08090C] -z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-b from-cyan-900/20 via-blue-950/10 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* Gloss line across top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge & Review highlight */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lyon • 67 Avenue Jean Jaurès</span>
                </div>
                <ReviewBadge variant="inline" />
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
                Bring Back <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-300">
                  the Brilliance
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Professional vehicle detailing with deep interior cleaning, exterior washing, polishing and finishing services in Lyon.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-explore-services-cta"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-xl shadow-cyan-950/50 border border-cyan-400/40 hover:shadow-cyan-500/20 active:scale-95"
                >
                  <span>Explore Detailing Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-get-in-touch-cta"
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all"
                >
                  <span>Get in Touch</span>
                </button>
              </div>

              {/* Direct Telephone Access */}
              <div className="pt-2 text-xs text-zinc-400 flex items-center justify-center lg:justify-start gap-2">
                <span>Immediate phone enquiries:</span>
                <a
                  id="hero-phone-link"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame with Gloss Reflections */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glass Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#1c2233] to-[#0d1017] p-2 shadow-2xl shadow-black/80">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Close-up_view_of_a_sophisticated_car_headlight_reveals_intricate_components_and_reflections.jpg"
                      alt="Pristine vehicle exterior finish with crystalline reflections and mirror gloss"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#08090C]/80 backdrop-blur-md border border-white/10">
                      <p className="text-xs font-display font-semibold text-white">
                        Precision Automotive Detailing
                      </p>
                      <p className="text-[11px] text-zinc-400">
                        Lyon workshop focused on immaculate vehicle presentation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[260px]">
                  <ReviewBadge size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE 4 DETAILING SERVICE AREAS */}
      <section id="services-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Dedicated Detailing Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Four Pillars of Vehicle Presentation
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Auto Brillance provides dedicated vehicle detailing in Lyon, addressing every visible surface from deep cabin textures to exterior paint luster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#121622] to-[#0A0C11] p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C11] via-transparent to-transparent opacity-60" />
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => onNavigate(service.pageId)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Learn about {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE DIFFERENCE DETAILING CAN MAKE */}
      <section id="difference-detailing-makes-section" className="relative py-16 lg:py-24 bg-[#0A0D14] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e2/AZ_Auto_Detailing.jpg"
                    alt="Professional detailing specialist machine polishing a vehicle body panel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08090C] via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
                <Sparkle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Visual Transformation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
                The Difference Detailing Can Make to a Vehicle’s Appearance
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed">
                Over time, everyday exposure to road dirt, weather, and passenger use gradually clouds the clarity of vehicle paint and diminishes interior freshness. A standard quick wash often leaves dirt trapped in tight panel seams, door sills, and cabin crevices.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Professional vehicle detailing changes the visual presentation fundamentally. By methodically addressing deep cabin fabrics, cleaning exterior panels by hand, and refining the paintwork through polishing, detailing restores depth, uniform tone, and an immaculate, refreshed look to every visible surface.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-sm font-semibold font-display text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Crisp Visual Depth
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Polishing clears haze, revealing the authentic richness of the vehicle's paintwork.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-sm font-semibold font-display text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Clean Cabin Environment
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Deep interior cleaning eliminates dust and debris from all touchpoints and crevices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATTENTION TO VISIBLE DETAILS */}
      <section id="attention-to-details-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Eye className="w-3.5 h-3.5" />
              <span>Precision Focus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Meticulous Attention to Visible Details
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              True detailing quality is determined by the small, often overlooked surfaces. At Auto Brillance, we inspect and clean the areas that automated car washes miss.
            </p>

            <ul className="space-y-3.5 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Door Jambs & Sills:</strong> Cleaning vehicle entry points where road grime and dirt regularly accumulate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Interior Crevices & Consoles:</strong> Detailed clearing of dashboard vents, seams, cup holders, and switchgear.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Glass Clarity:</strong> Dedicated inside and outside glass cleaning for a crystal-clear, streak-free view.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Wheels & Arches:</strong> Removing stubborn brake dust and road dirt from wheel faces and contours.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Cleaning_interior.jpg"
                  alt="Detailed interior surface cleaning of vehicle cabin"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL DETAILING APPROACH */}
      <section id="detailing-approach-section" className="bg-[#090C12] border-y border-white/[0.08] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Our Work Ethic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              A Disciplined Detailing Approach
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Every vehicle entrusted to Auto Brillance in Lyon is handled through a structured, multi-stage detailing process designed to respect vehicle materials and produce uniform aesthetic results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-white/10 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Surface Assessment & Safe Wash
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Initial evaluation of exterior panels and cabin surfaces, followed by high-lubricity washing to lift contamination safely without harsh contact.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-white/10 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Deep Cabin & Paint Refinement
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Detailed extraction of interior debris, careful cleaning of leather or fabric textures, and targeted polishing to improve paint luster and gloss.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-white/10 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Finishing & Precision Handover
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Final visual inspection, streak-free window cleaning, trim dressing, and detailed checks to ensure the car looks immaculate upon return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY CTA SECTION */}
      <section id="home-enquiry-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Car className="w-3.5 h-3.5" />
              <span>Lyon Workshop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Ready to Restore Your Vehicle's Finish?
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Connect with Auto Brillance to discuss your vehicle’s detailing needs. Whether you require deep interior cleaning, a thorough exterior wash, polishing, or a complete finishing service, we are ready to assist.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-display">
                Auto Brillance Contact Details
              </h4>
              <p className="text-sm text-zinc-300">
                <strong className="text-white block">Workshop Address:</strong>
                {BUSINESS_DATA.address}
              </p>
              <p className="text-sm text-zinc-300">
                <strong className="text-white block">Direct Telephone:</strong>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </p>
              <ReviewBadge variant="inline" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
