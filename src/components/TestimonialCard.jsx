import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-5 border border-surface-container/40">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[18px] fill-1">
              star
            </span>
          ))}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md text-label-md font-bold shrink-0 ${testimonial.initialsBg}`}
        >
          {testimonial.initials}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              {testimonial.name}
            </span>
            {testimonial.verified && (
              <span
                className="material-symbols-outlined text-[16px] text-secondary fill-1"
                title="Verified Patient"
              >
                check_circle
              </span>
            )}
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {testimonial.tag}
          </span>
        </div>
      </div>
    </div>
  );
}
