import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface ReviewBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'subtle' | 'card' | 'inline';
}

export const ReviewBadge: React.FC<ReviewBadgeProps> = ({
  size = 'md',
  className = '',
  variant = 'card',
}) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  if (variant === 'inline') {
    return (
      <div
        id="google-review-badge-inline"
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 ${className}`}
      >
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-semibold text-white">{BUSINESS_DATA.rating}/5</span>
        <span className="text-zinc-400">•</span>
        <span className="text-zinc-400">{BUSINESS_DATA.reviewsCount} Google Reviews</span>
      </div>
    );
  }

  return (
    <div
      id="google-review-badge"
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#161B26] to-[#0D1017] p-3 sm:p-4 shadow-xl shadow-black/40 ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              {BUSINESS_DATA.rating}
            </span>
            <span className="text-xs text-zinc-400">/5</span>
            <div className="flex items-center ml-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`${isSmall ? 'w-3 h-3' : isLarge ? 'w-4 h-4' : 'w-3.5 h-3.5'} fill-amber-400 text-amber-400`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-zinc-400 font-medium">
            Based on <span className="text-zinc-200 font-semibold">{BUSINESS_DATA.reviewsCount} Google Reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
};
