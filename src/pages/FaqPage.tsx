import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  Phone,
  HelpCircle,
  Search,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { PageId, BUSINESS_DATA } from '../types';
import { PageHeader } from '../components/PageHeader';
import { FAQ_LIST } from '../data/content';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'Vehicle Detailing' },
    { id: 'interior', label: 'Interior Cleaning' },
    { id: 'exterior', label: 'Exterior Washing' },
    { id: 'polishing', label: 'Polishing & Finishing' },
    { id: 'enquiries', label: 'Service Enquiries' },
  ];

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHeader
        badge="Frequently Asked Questions"
        title="Vehicle Detailing Insights & FAQs"
        description="Find answers regarding our deep interior cleaning, exterior washing, paint polishing, and finishing services at Auto Brillance in Lyon."
        currentPageId="faq"
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search detailing questions (e.g. interior, polishing, washing)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1" role="tablist" aria-label="FAQ Categories">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`faq-filter-${cat.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="FAQ Accordion">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-zinc-500 mx-auto" />
              <p className="text-zinc-300 text-sm">
                No matching answers found for your search term.
              </p>
              <p className="text-xs text-zinc-400">
                Please contact Auto Brillance directly at{' '}
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-cyan-400 underline font-medium">
                  {BUSINESS_DATA.phone}
                </a>{' '}
                for personalized assistance.
              </p>
            </div>
          ) : (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#141824]/80 to-[#0B0E15]/90 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    id={`faq-question-btn-${idx}`}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span className="text-base sm:text-lg font-bold font-display text-white pr-4 leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180'
                          : 'bg-white/[0.04] border-white/10 text-zinc-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-btn-${idx}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Directive Notice Card */}
        <section
          id="faq-contact-card"
          className="p-8 rounded-2xl bg-gradient-to-r from-[#141926] via-[#0E121B] to-[#0A0D15] border border-cyan-500/30 space-y-4 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display text-white">
                Have a specific question not covered here?
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
                For questions regarding pricing, scheduling, custom vehicle condition assessments, or specific detailing requests, please contact Auto Brillance directly.
              </p>
              <p className="text-xs text-zinc-400">
                Workshop: {BUSINESS_DATA.address}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                id="faq-call-btn"
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-950/40 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>
              <button
                id="faq-enquiry-btn"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors text-sm"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
