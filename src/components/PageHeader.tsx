import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  currentPageId: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  currentPageId,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#10141e] via-[#0b0e14] to-[#08090c] pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-white/[0.08]">
      {/* Specular light beam effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-2xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-zinc-400">
            <li>
              <button
                id="breadcrumb-home-link"
                onClick={() => onNavigate('home')}
                className="hover:text-cyan-300 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            </li>
            {currentPageId !== 'services' && (
              <>
                <li>
                  <button
                    id="breadcrumb-services-link"
                    onClick={() => onNavigate('services')}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                </li>
              </>
            )}
            <li className="text-zinc-200 font-medium truncate" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
