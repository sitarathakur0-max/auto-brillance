import React from 'react';
import { Sparkles, CheckCircle2, Shield, Eye, ArrowRight, Sun, Award } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';

interface PolishingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PolishingPage: React.FC<PolishingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      <PageHeader
        badge="Paint & Finish"
        title="Polishing & Finishing Services"
        description="Meticulous automotive polishing and final vehicle finishing focused on enhancing surface gloss, paint clarity, and presenting an immaculate exterior finish in Lyon."
        currentPageId="polishing"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: The Art of Polishing */}
        <section id="paint-polishing-service" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sun className="w-3.5 h-3.5" />
              <span>Paint Refinement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Enhancing Paint Clarity & Surface Gloss
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Vehicle paintwork is engineered with clear coat layers that give color depth and shine. Over time, atmospheric fallout, UV exposure, and routine road use can dull this surface, muting the vehicle's natural luster and crisp reflections.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Auto Brillance provides careful machine and hand polishing services focused on improving the overall appearance and finish of the vehicle. Through disciplined polishing passes across body panels, we refine the clear coat surface, reviving gloss, deepening color saturation, and bringing back sleek, mirror-like clarity to the vehicle's paintwork.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-sm font-semibold font-display text-white">
                Focused on Visual Presentation
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our polishing service concentrates strictly on refining the paint's aesthetic appeal and reflection quality across visible panels, creating a uniform, glossy finish.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 p-2 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e2/AZ_Auto_Detailing.jpg"
                  alt="Detailer polishing vehicle bodywork to enhance paint gloss"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Role of Finishing */}
        <section id="finishing-stage-service" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
              <Award className="w-3.5 h-3.5" />
              <span>Final Inspection & Handover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-snug">
              Finishing: The Concluding Touch of Elegance
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Once exterior washing and polishing are complete, finishing represents the decisive final stage of detailing. It ensures that every exterior touchpoint aligns with the freshly polished paintwork.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              During the finishing phase, our team inspects the car under high-definition lighting, removes any residual polishing traces, cleans windows inside and out for crystal transparency, and conditions exterior trim elements, rubber weather strips, and tire sidewalls for a balanced, sophisticated finish.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Window Transparency:</strong> Streak-free interior and exterior glass cleaning for optimal optical clarity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Trim & Rubber Presentation:</strong> Neat conditioning of black exterior trims, wiper surrounds, and rubbers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Detailed Light Inspection:</strong> Careful check across all angles to verify uniform gloss and finish quality.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Professional Consultation */}
        <section id="polishing-consultation-section" className="bg-[#0A0D15] rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lyon Workshop Detailing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Bring the Brilliance Back to Your Car
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              Every vehicle has unique paint characteristics and detailing requirements. Contact Auto Brillance to discuss your car’s visual presentation, assess your vehicle at our Lyon workshop, or arrange a detailing appointment.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="polishing-enquire-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
              >
                <span>Enquire About Polishing & Finishing</span>
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
        <section id="polishing-enquiry-form-section" className="pt-4">
          <div className="max-w-4xl mx-auto">
            <EnquiryForm initialService="Polishing" />
          </div>
        </section>
      </div>
    </div>
  );
};
