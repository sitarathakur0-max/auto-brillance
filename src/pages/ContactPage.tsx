import React from 'react';
import { Sparkles, MapPin, Phone, Star, ShieldCheck, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';
import { ReviewBadge } from '../components/ReviewBadge';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHeader
        badge="Contact & Enquiries"
        title="Get in Touch with Auto Brillance in Lyon"
        description="Reach out to discuss your vehicle detailing requirements, request service details, or connect with our Lyon workshop."
        currentPageId="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Business Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                Auto Brillance
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Professional vehicle detailing business providing deep interior cleaning, exterior washing, polishing and finishing services in Lyon.
              </p>
            </div>

            {/* Official Contact Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Workshop Address
                  </span>
                  <p className="text-base font-medium text-white">
                    {BUSINESS_DATA.address}
                  </p>
                  <p className="text-xs text-zinc-500">
                    69007 Lyon, France
                  </p>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Telephone (Click to Call)
                  </span>
                  <div>
                    <a
                      id="contact-page-phone-link"
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors block"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Direct communication for detailing assessments and bookings.
                  </p>
                </div>
              </div>

              {/* Google Reviews Card */}
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Verified Customer Rating
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white font-display">
                      {BUSINESS_DATA.rating} / 5
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Based on {BUSINESS_DATA.reviewsCount} Google customer reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Scope Notice */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400 space-y-1 leading-relaxed">
              <p className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Custom Detailing Inquiries
              </p>
              <p>
                Because vehicle dimensions, paint condition, and interior cleaning requirements differ, we invite you to connect directly with Auto Brillance by phone or through our enquiry form.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>

        {/* Location & Lyon Access Section */}
        <section
          id="location-lyon-section"
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#10141e] to-[#08090C] p-8 sm:p-12 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Workshop Location
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Located on Avenue Jean Jaurès, Lyon 7ème
              </h3>
              <p className="text-sm text-zinc-400">
                Conveniently accessible in the Jean Jaurès corridor of Lyon (69007).
              </p>
            </div>
            <a
              id="location-call-btn"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shrink-0 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +33 4 78 51 29 64</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-400">
            <div className="space-y-1">
              <strong className="text-white block text-sm font-semibold font-display">
                Address
              </strong>
              <p>67 Avenue Jean Jaurès</p>
              <p>69007 Lyon, France</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block text-sm font-semibold font-display">
                Services Available
              </strong>
              <p>Deep Interior Cleaning</p>
              <p>Exterior Washing & Polishing</p>
              <p>Vehicle Finishing</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block text-sm font-semibold font-display">
                How to Book / Inquire
              </strong>
              <p>Call directly via phone</p>
              <p>Submit online enquiry form</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
