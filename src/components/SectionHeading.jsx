import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  actionText,
  actionTo,
  actionHref,
  className = ''
}) {
  return (
    <div
      className={`flex flex-col ${
        centered
          ? 'items-center text-center max-w-2xl mx-auto'
          : 'md:flex-row md:items-end justify-between gap-4'
      } mb-10 ${className}`}
    >
      <div className={centered ? 'flex flex-col items-center' : ''}>
        {eyebrow && (
          <span className="font-badge text-badge text-secondary uppercase tracking-widest block mb-1">
            {eyebrow}
          </span>
        )}
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {!centered && actionText && (
        actionTo ? (
          <Link
            to={actionTo}
            className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors shrink-0 group"
          >
            <span>{actionText}</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        ) : (
          <a
            href={actionHref || '#'}
            className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors shrink-0 group"
          >
            <span>{actionText}</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        )
      )}
    </div>
  );
}
