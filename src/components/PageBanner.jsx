import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({
  title,
  subtitle,
  breadcrumb = [],
  children,
  badgeText,
  badgeIcon,
  rightContent
}) {
  return (
    <section className="relative w-full bg-primary-container overflow-hidden py-10 md:py-14 text-on-primary">
      {/* Subtle ambient vector glow */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/3 -top-24 w-80 h-80 rounded-full bg-primary/40 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-3 text-secondary-fixed text-label-sm font-label-sm">
          <Link to="/" className="hover:underline flex items-center gap-1 opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[15px]">home</span>
            Home
          </Link>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <span className="opacity-60 text-[10px]">/</span>
              {item.link ? (
                <Link to={item.link} className="hover:underline opacity-90 transition-opacity">
                  {item.label}
                </Link>
              ) : (
                <span className="text-on-primary font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col items-start max-w-2xl text-left">
            {badgeText && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-primary/10 text-secondary-fixed text-label-sm font-label-sm backdrop-blur-sm mb-2.5">
                {badgeIcon && <span className="material-symbols-outlined text-[16px]">{badgeIcon}</span>}
                <span>{badgeText}</span>
              </div>
            )}
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-body-lg font-body-lg text-primary-fixed opacity-95 max-w-xl">
                {subtitle}
              </p>
            )}
            {children}
          </div>

          {rightContent && (
            <div className="w-full lg:w-auto shrink-0 flex items-center justify-start lg:justify-end">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
