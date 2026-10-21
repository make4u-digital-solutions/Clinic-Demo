import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { testimonials } from '../data/testimonials';
import DoctorCard from '../components/DoctorCard';
import DepartmentCard from '../components/DepartmentCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const navigate = useNavigate();

  // Quick book state
  const [quickDept, setQuickDept] = useState('');
  const [quickDoc, setQuickDoc] = useState('');
  const [quickDate, setQuickDate] = useState('2024-10-28');
  const [quickTime, setQuickTime] = useState('10:30 AM');

  const handleQuickBookSubmit = (e) => {
    e.preventDefault();
    navigate('/appointment', {
      state: {
        departmentId: quickDept,
        doctorId: quickDoc,
        date: quickDate,
        timeSlot: quickTime
      }
    });
  };

  const featuredDoctors = doctors.filter(doc => doc.featured);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-surface via-surface-container-low/40 to-surface overflow-hidden py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm shadow-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>Your Health, Our Priority</span>
              </div>

              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-on-surface">
                Quality Care for a <br />
                <span className="text-secondary font-extrabold">Healthier Tomorrow</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Expert doctors, modern facilities, and compassionate care dedicated to you and your family every step of the journey.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <a
                  href="#quick-book"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-all duration-200 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>Book Appointment</span>
                </a>
                <a
                  href="#departments"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-colors active:scale-95"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>

              {/* Feature badges row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full border-t border-surface-container/40">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">person_check</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface leading-tight font-medium">
                    Experienced Doctors
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">domain</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface leading-tight font-medium">
                    Modern Facilities
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface leading-tight font-medium">
                    Personalized Care
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface leading-tight font-medium">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: Doctor Visual Hero */}
            <div className="lg:col-span-4 relative flex justify-center items-end min-h-[360px] sm:min-h-[420px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-container/30 to-primary-fixed/20 rounded-3xl -z-10 mx-auto w-11/12 max-w-sm h-full"></div>
              <img
                className="w-full max-w-xs md:max-w-sm object-cover object-top h-[380px] sm:h-[440px] drop-shadow-xl z-10"
                alt="CarePlus Specialist Doctor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIdS_8zsCAD1BoCksokGHeirK1UuS-r0iWGSKtO7lG8_lfBho75KvZtI_HBbFbYss13Qhu72K-ltqWCykiWopqIma4rbh7zOZWb8jR8M8MoB3ihqZ-gIN4DZx_8lKaVyomiqBTdI-X92aLC73ptxRrqiU4xNhHzWnuooJVZyvPaqEwRZo2AShCnsOS-LDT0a5za6nQYCVisHtspGUc4Q0_fy8o54ojuXC-N9INADWXPoHquNQYiEhqzA"
              />
              {/* Floating badge overlay */}
              <div className="absolute bottom-4 left-2 sm:left-4 z-20 flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-surface-container-lowest shadow-xl backdrop-blur-md border border-surface-container/60 max-w-[95%]">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">diversity_1</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-none font-bold">
                    10,000+
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Happy Patients Treated
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Booking Widget */}
            <div className="lg:col-span-3 w-full" id="quick-book">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl flex flex-col gap-4 border border-surface-container/60">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                    Book an Appointment
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Schedule your visit with our expert doctors
                  </p>
                </div>

                <form className="flex flex-col gap-3.5" onSubmit={handleQuickBookSubmit}>
                  {/* Department */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      Department
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">
                        medical_services
                      </span>
                      <select
                        className="w-full h-11 pl-10 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors appearance-none cursor-pointer border border-transparent focus:border-secondary"
                        value={quickDept}
                        onChange={(e) => setQuickDept(e.target.value)}
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-[18px] text-outline pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Doctor (Optional) */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      Doctor (Optional)
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">
                        person
                      </span>
                      <select
                        className="w-full h-11 pl-10 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors appearance-none cursor-pointer border border-transparent focus:border-secondary"
                        value={quickDoc}
                        onChange={(e) => setQuickDoc(e.target.value)}
                      >
                        <option value="">Any Available Specialist</option>
                        {doctors.map(doc => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} ({doc.specialty})
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-[18px] text-outline pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      Preferred Date
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">
                        calendar_today
                      </span>
                      <input
                        type="date"
                        value={quickDate}
                        onChange={(e) => setQuickDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full h-11 pl-10 pr-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent focus:border-secondary"
                        required
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      Preferred Time
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">
                        schedule
                      </span>
                      <select
                        className="w-full h-11 pl-10 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors appearance-none cursor-pointer border border-transparent focus:border-secondary"
                        value={quickTime}
                        onChange={(e) => setQuickTime(e.target.value)}
                        required
                      >
                        <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                        <option value="10:30 AM">10:30 AM - 11:30 AM</option>
                        <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                        <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                        <option value="05:00 PM">05:00 PM - 06:00 PM</option>
                        <option value="07:00 PM">07:00 PM - 08:00 PM</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-[18px] text-outline pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full mt-2 h-11 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-md active:scale-95 cursor-pointer font-semibold"
                    type="submit"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENTS SECTION */}
      <section className="w-full py-16 bg-surface-container-lowest" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-badge text-badge text-secondary uppercase tracking-widest block font-bold">
                Specialized Healthcare
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1 font-bold">
                Our Departments
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Comprehensive medical specialties under one patient-centric roof
              </p>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors group"
            >
              <span>View All Specialties</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 8-column Pastel Department Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US PREVIEW SECTION */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Clinic Facility Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-surface-container border border-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="CarePlus Modern Clinic Reception"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd0_lwhzjvziqc1k93ZYlxsohEnGpzFQEGCQkE1_odWWkTySA4GaVzqb-CyeM1gDqLP5LkIbNs8yPL2821w6K-M1YSy7fc7-KJQn814zb55diGfmJQwUSBy2OUXhi_GlVBkqjJo4wKYxDPj03EHpHQjX8sL5dfGNC0DxDj8A9aY3Ht_Ico6hIQ9qmaU05zeStA1oWvvzBJP8_PHx6k5S8vijSBTbwFLtYlE0FP8_EAur8JosP49qhwQQ"
                />
              </div>

              {/* Decorative accent block */}
              <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:-right-4 p-3 sm:p-4 rounded-2xl bg-surface-container-lowest shadow-xl flex items-center gap-3 border border-surface-container max-w-[90%]">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface font-bold">
                    NABH Accredited
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Quality Standards Certified
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Stats */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-secondary font-label-sm text-label-sm">
                About Our Clinic
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                Committed to Your Health <br className="hidden sm:inline" />
                and Well-being
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                We are a multi-speciality clinic dedicated to providing high-quality, patient-centered healthcare. With experienced doctors, modern diagnostic equipment, and a compassionate care team, we ensure the best clinical outcomes for you and your loved ones.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-sm active:scale-95 font-semibold group"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              {/* 4 Stats Bento / Card Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4">
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center border border-surface-container/40">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary mb-2">
                    <span className="material-symbols-outlined text-[22px]">groups</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary leading-tight font-bold">
                    10,000+
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Happy Patients
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center border border-surface-container/40">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[22px]">stethoscope</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary leading-tight font-bold">
                    15+
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Expert Doctors
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center border border-surface-container/40">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                    <span className="material-symbols-outlined text-[22px]">military_tech</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary leading-tight font-bold">
                    10+
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Years of Service
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center border border-surface-container/40">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                    <span className="material-symbols-outlined text-[22px]">category</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary leading-tight font-bold">
                    20+
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Specialties
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DOCTORS SECTION */}
      <section className="w-full py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-badge text-badge text-secondary uppercase tracking-widest block font-bold">
                Medical Team
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1 font-bold">
                Our Featured Specialists
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Meet our experienced and dedicated team of clinic specialists
              </p>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors group"
            >
              <span>View All Doctors</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 4 Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS & TRUST SECTION */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-badge text-badge text-secondary uppercase tracking-widest block font-bold">
              Patient Experiences
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1 font-bold">
              What Our Patients Say
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Real feedback from patients and families who trust CarePlus for their everyday wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. EMERGENCY & CALL TO ACTION STRIP */}
      <section className="w-full py-12 bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[32px] text-secondary-fixed">
                emergency
              </span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md leading-tight font-bold">
                Need Immediate Medical Assistance?
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container mt-0.5">
                Our 24/7 emergency response team and urgent care doctors are on duty round-the-clock.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto flex-col sm:flex-row">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-md font-semibold text-center"
              href="tel:+919876500108"
            >
              <span className="material-symbols-outlined text-[20px] text-error">call</span>
              <span>+91 98765 00108</span>
            </a>
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-md font-semibold text-center"
            >
              <span>Book Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
