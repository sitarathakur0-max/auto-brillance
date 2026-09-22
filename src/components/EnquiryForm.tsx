import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface EnquiryFormProps {
  initialService?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = 'Deep Interior Cleaning',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicleType: '',
    serviceOfInterest: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.vehicleType.trim()) {
      newErrors.vehicleType = 'Please specify your vehicle make, model, or category.';
    }
    if (!formData.serviceOfInterest) {
      newErrors.serviceOfInterest = 'Please choose a service of interest.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include details about your detailing requirements.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate accessible client submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      vehicleType: '',
      serviceOfInterest: initialService,
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div
      id="detailing-enquiry-form-card"
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#121622] via-[#0e111a] to-[#08090d] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 ${className}`}
    >
      {/* Specular highlight border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {isSubmitted ? (
        <div
          id="enquiry-success-message"
          className="py-8 text-center space-y-5 animate-fadeIn"
          role="status"
          aria-live="polite"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Detailing Enquiry Received
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry regarding{' '}
              <span className="text-cyan-300 font-medium">{formData.serviceOfInterest}</span> for your{' '}
              <span className="text-white font-medium">{formData.vehicleType}</span> has been logged on this browser session.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Contact Email:</span>
              <span className="text-white font-mono">{formData.email}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Vehicle:</span>
              <span className="text-white font-medium">{formData.vehicleType}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Service Area:</span>
              <span className="text-cyan-400 font-medium">{formData.serviceOfInterest}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 max-w-md mx-auto">
            <p className="text-xs text-cyan-200 mb-2">
              Need immediate assistance or direct scheduling confirmation?
            </p>
            <a
              id="enquiry-success-phone-cta"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_DATA.phone}</span>
            </a>
          </div>

          <button
            id="enquiry-submit-another-btn"
            type="button"
            onClick={handleReset}
            className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
          >
            Submit another vehicle enquiry
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Detailing Enquiry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Request Detailing Information
            </h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Share details about your vehicle and required service. For immediate discussion or direct scheduling,
              call Auto Brillance at{' '}
              <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 hover:underline font-medium">
                {BUSINESS_DATA.phone}
              </a>
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5" id="enquiry-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marc Dubois"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                    errors.name ? 'border-red-500/70 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="enquiry-email" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                    errors.email ? 'border-red-500/70 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Vehicle Type */}
              <div>
                <label htmlFor="enquiry-vehicle" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Vehicle Type / Model <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-vehicle"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  placeholder="e.g. Sedan, SUV, Sports Coupe..."
                  aria-invalid={!!errors.vehicleType}
                  aria-describedby={errors.vehicleType ? 'vehicle-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                    errors.vehicleType ? 'border-red-500/70 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.vehicleType && (
                  <p id="vehicle-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.vehicleType}</span>
                  </p>
                )}
              </div>

              {/* Service of Interest */}
              <div>
                <label htmlFor="enquiry-service" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Service of Interest <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="enquiry-service"
                  name="serviceOfInterest"
                  value={formData.serviceOfInterest}
                  onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                  aria-invalid={!!errors.serviceOfInterest}
                  aria-describedby={errors.serviceOfInterest ? 'service-error' : undefined}
                  className="w-full px-4 py-3 rounded-xl bg-[#161B26] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                >
                  <option value="Deep Interior Cleaning">Deep Interior Cleaning</option>
                  <option value="Exterior Washing">Exterior Washing</option>
                  <option value="Polishing">Polishing</option>
                  <option value="Finishing">Finishing</option>
                  <option value="Comprehensive Detailing Enquiry">Comprehensive Detailing Enquiry</option>
                </select>
                {errors.serviceOfInterest && (
                  <p id="service-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.serviceOfInterest}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Message & Detailing Needs <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your vehicle's current condition or specific areas requiring detailing attention..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-y ${
                  errors.message ? 'border-red-500/70 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
                }`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Notice & Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-400 text-center sm:text-left">
                Direct phone inquiries:{' '}
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 hover:underline font-medium">
                  {BUSINESS_DATA.phone}
                </a>
              </p>
              <button
                id="submit-enquiry-button"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-950/50 border border-cyan-400/30 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Detailing Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
