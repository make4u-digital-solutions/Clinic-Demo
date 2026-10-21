import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center py-16">
      <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4">
        <span className="material-symbols-outlined text-[40px]">error_outline</span>
      </div>
      <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary tracking-tight font-bold">
        404
      </h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mt-2 font-semibold">
        Page Not Found
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">
        The healthcare page or department you are looking for does not exist or has been relocated.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm font-semibold"
        >
          Return Home
        </Link>
        <Link
          to="/doctors"
          className="px-6 py-3 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors font-semibold"
        >
          Browse Doctors
        </Link>
      </div>
    </div>
  );
}
