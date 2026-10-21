import React from 'react';
import { useLocation } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import PageBanner from '../components/PageBanner';

export default function Appointment() {
  const location = useLocation();
  const initialDoctorId = location.state?.doctorId || '';
  const initialDepartmentId = location.state?.departmentId || '';

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <PageBanner
        title="Book an Appointment"
        subtitle="Schedule your visit with our expert doctors. Quality care designed around your comfort and health."
        breadcrumb={[{ label: 'Appointment' }]}
        rightContent={
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-3 bg-primary/40 backdrop-blur-md px-4 py-3 rounded-xl border border-surface-container-highest/10 shadow-sm flex-1 sm:flex-initial">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">calendar_today</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-primary font-semibold">
                  Easy Booking
                </span>
                <span className="font-body-sm text-body-sm text-surface-container-highest/80">
                  Book your appointment in minutes
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-primary/40 backdrop-blur-md px-4 py-3 rounded-xl border border-surface-container-highest/10 shadow-sm flex-1 sm:flex-initial">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-primary font-semibold">
                  Flexible Timings
                </span>
                <span className="font-body-sm text-body-sm text-surface-container-highest/80">
                  Choose a convenient time slot
                </span>
              </div>
            </div>
          </div>
        }
      />

      {/* 2. Main Booking Work Area */}
      <section className="w-full bg-surface py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <AppointmentForm
                initialDoctorId={initialDoctorId}
                initialDepartmentId={initialDepartmentId}
              />
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Guarantee & Image Card */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-surface-container flex flex-col">
                <div className="relative w-full h-56 bg-surface-container-high overflow-hidden">
                  <img
                    alt="Doctor consultation"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA75ISSlN4L-0jWeYNoYgXWdAlt7PQs-00A75E0SeWVg9ztzV2Lx1O5iC8OhPxmWg81vEzLxlivi5woctzD_DfXJA7QRWO69Ca3xjjbhlId6KYGTAayLPEz2hTycXGn1KqlQVzZmbs11UhyMhSQ7oYGby1C4Cv4ZC6y7E__hHqKAizNXVQGq8-h6AOpiUVPHWjsBzRL13yJnmr3tpsNgHe5OEI6b8zpDPCgHVnwckMjQFKohYrZ-fgXgw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                    <span className="font-badge text-badge text-secondary-fixed tracking-wider uppercase font-bold">
                      CarePlus Guarantee
                    </span>
                    <p className="font-label-sm text-label-sm leading-tight text-on-primary mt-0.5 font-semibold">
                      Compassionate healthcare, zero wait times
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">medical_services</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Experienced Doctors
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Consult with board-certified multi-specialty clinicians
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Secure &amp; Private
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Your personal health data is strictly confidential
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Quick Confirmation
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Get instant SMS and WhatsApp appointment status
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">support_agent</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        24/7 Patient Support
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Immediate assistance at <strong className="text-on-surface font-semibold">+91 98765 43210</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Attention Callout */}
              <div className="bg-surface-container-high/60 rounded-2xl p-5 border border-surface-container flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-error/10 text-error flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">emergency</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Need Immediate Attention?
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    For emergency cases, visit our 24/7 triage trauma wing immediately.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
