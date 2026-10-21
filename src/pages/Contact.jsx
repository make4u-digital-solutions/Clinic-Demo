import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    id: 1,
    question: 'How do I book an appointment?',
    icon: 'calendar_month',
    answer:
      'You can easily schedule a consultation online through our Appointment Portal, call our dedicated helpdesk at +91 98765 43210, or walk into the CarePlus Clinic reception desk during standard operating hours.'
  },
  {
    id: 2,
    question: 'What are your clinic opening hours?',
    icon: 'alarm',
    answer:
      'Our outpatient departments and specialist consultation clinics are open Monday through Saturday from 9:00 AM to 8:00 PM, and Sundays from 9:00 AM to 2:00 PM. Our 24/7 Trauma, Emergency Response, and In-house Pharmacy stay fully operational around the clock every day.'
  },
  {
    id: 3,
    question: 'Do you accept health insurance?',
    icon: 'verified_user',
    answer:
      'Yes, CarePlus is empaneled with over 35+ major health insurance providers and Third-Party Administrators (TPAs) including Star Health, HDFC ERGO, ICICI Lombard, Max Bupa, and CGHS. Our insurance facilitation desk assists you with instant cashless approvals.'
  },
  {
    id: 4,
    question: 'Can I cancel or reschedule my appointment?',
    icon: 'event_repeat',
    answer:
      'Yes. You can reschedule or cancel at no additional charge up to 2 hours before your scheduled appointment time via our SMS link, WhatsApp assistant, or by speaking with our reception team.'
  }
];

export default function Contact() {
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ open states
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Breadcrumb Bar */}
      <div className="bg-surface-container-low py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Home</span>
          </Link>
          <span className="text-outline-variant font-bold">›</span>
          <span className="font-label-sm text-label-sm text-primary font-semibold">Contact</span>
        </div>
      </div>

      {/* Hero Banner: Deep Navy (#0B477F) */}
      <section className="relative overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-secondary opacity-95"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 text-secondary-fixed text-label-sm font-label-sm backdrop-blur-sm self-start mb-3">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span>CarePlus Patient Support Desk</span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary tracking-tight leading-tight font-bold">
              Get in Touch
            </h1>
            <p className="mt-2.5 font-body-lg text-body-lg text-primary-fixed font-normal max-w-lg leading-relaxed">
              We're here to help. Reach out to us for any queries, outpatient appointments, or emergency medical assistance.
            </p>
          </div>

          {/* Right Modern Clinic Graphic with CarePlus signage */}
          <div className="w-full md:w-auto flex items-center justify-center shrink-0">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest/10 p-2 backdrop-blur-md border border-white/10 w-full max-w-xs sm:max-w-none">
              <div className="w-full sm:w-80 h-44 sm:h-48 rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  alt="Modern clinic entrance with CarePlus signage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLm1fiPUUW-qpjpwIWRGUY-YGk41hMfWC257HdReJgxQQpObygWsxVxifIFf6yVe6DaRCIq9ECDxZhXomJMqUF8OosSq0FJao0rXFhm-sm2OQ6pySdPcX0g5UCAT7w-PAiIsXiyeifPOXlnaq2URyYXFTVdDeXXeUF3T3replsKGnuouoazxdAK3FJnH30QNIjCxzLwQxqkeBPF0IfXgcrMtzYPlG-HKvKfFwnbzN01rDQesi9Pl1xfQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-on-primary font-semibold">
                      Lucknow Main Hub · Active 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 3-Column Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1: Contact Information Card (Span 4) */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between border border-surface-container">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Contact Information
                </h2>
                <span className="w-9 h-9 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">contact_phone</span>
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider text-[11px] font-bold">
                    Address
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-snug">
                    123 Healthcare Street, Lucknow, Uttar Pradesh 226001
                  </p>
                  <a
                    className="font-label-sm text-label-sm text-secondary hover:underline mt-1 inline-flex items-center gap-0.5 font-semibold"
                    href="#location-map"
                  >
                    <span>View on map</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider text-[11px] font-bold">
                    Direct Phone Lines
                  </span>
                  <a
                    className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary transition-colors mt-0.5"
                    href="tel:+919876543210"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                    href="tel:+918765432109"
                  >
                    +91 87654 32109
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider text-[11px] font-bold">
                    Electronic Mail
                  </span>
                  <a
                    className="font-body-md text-body-md text-primary font-medium hover:underline mt-0.5"
                    href="mailto:info@careplusclinic.com"
                  >
                    info@careplusclinic.com
                  </a>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                    Replies within 2 business hours
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider text-[11px] font-bold">
                    Working Hours
                  </span>
                  <div className="flex justify-between items-center text-body-sm text-on-surface-variant mt-1">
                    <span>Mon - Sat:</span>
                    <span className="font-semibold text-on-surface">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm text-on-surface-variant mt-0.5">
                    <span>Sunday:</span>
                    <span className="font-semibold text-on-surface">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 Emergency Hotline Callout */}
            <div className="mt-8 p-4 rounded-xl bg-secondary-container/40 flex items-center gap-3.5 border border-secondary/20">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">emergency</span>
              </div>
              <div className="flex flex-col">
                <span className="font-badge text-badge text-secondary font-bold tracking-wider uppercase">
                  24/7 EMERGENCY ASSISTANCE
                </span>
                <a
                  href="tel:+919876500108"
                  className="font-headline-sm text-headline-sm text-on-secondary-container font-extrabold leading-tight mt-0.5 hover:underline"
                >
                  +91 98765 00108
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Send Us a Message (Span 5) */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border border-surface-container">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Send Us a Message
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Fill in the form below and our medical team will respond promptly.
                  </p>
                </div>
                <span className="w-9 h-9 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </span>
              </div>

              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="contact-name">
                      Your Name <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        type="text"
                        className={`w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-low text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all border ${
                          errors.name ? 'border-error' : 'border-transparent'
                        }`}
                      />
                      <span className="material-symbols-outlined text-[18px] text-outline absolute left-3 top-3 pointer-events-none">
                        person
                      </span>
                    </div>
                    {errors.name && <span className="text-error text-body-sm">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="contact-email">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        type="email"
                        className={`w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-low text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all border ${
                          errors.email ? 'border-error' : 'border-transparent'
                        }`}
                      />
                      <span className="material-symbols-outlined text-[18px] text-outline absolute left-3 top-3 pointer-events-none">
                        mail
                      </span>
                    </div>
                    {errors.email && <span className="text-error text-body-sm">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Phone and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="contact-phone">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        type="tel"
                        className={`w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-low text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all border ${
                          errors.phone ? 'border-error' : 'border-transparent'
                        }`}
                      />
                      <span className="material-symbols-outlined text-[18px] text-outline absolute left-3 top-3 pointer-events-none">
                        call
                      </span>
                    </div>
                    {errors.phone && <span className="text-error text-body-sm">{errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="contact-subject">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-3.5 pl-10 pr-8 rounded-lg bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer border border-transparent"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment Query">Appointment Query</option>
                        <option value="Feedback">Feedback &amp; Suggestions</option>
                        <option value="Department Query">Specialist Department Query</option>
                        <option value="Billing & Insurance">Insurance &amp; Billing</option>
                      </select>
                      <span className="material-symbols-outlined text-[18px] text-outline absolute left-3 top-3 pointer-events-none">
                        topic
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-outline absolute right-3 top-3 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-on-surface" htmlFor="contact-message">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter your message or health concern..."
                    className={`w-full p-3.5 rounded-lg bg-surface-container-low text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all resize-none border ${
                      errors.message ? 'border-error' : 'border-transparent'
                    }`}
                  ></textarea>
                  {errors.message && <span className="text-error text-body-sm">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[20px]">
                        refresh
                      </span>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Toast notification for successful submission */}
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-secondary-container text-on-secondary-container flex items-center gap-3 transition-all animate-fade-in border border-secondary/30">
                  <span className="material-symbols-outlined text-[22px] text-secondary">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold">
                      Message sent successfully!
                    </span>
                    <span className="font-body-sm text-body-sm">
                      Thank you for reaching out. A CarePlus clinic coordinator will call or email you shortly.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* COLUMN 3: Our Location Card (Span 3, #location-map) */}
          <div
            className="lg:col-span-3 bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full border border-surface-container"
            id="location-map"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Our Location
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Easy outpatient access &amp; parking
                  </p>
                </div>
                <span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">directions</span>
                </span>
              </div>

              {/* Interactive Map Container */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner group border border-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5t3ON8Jo3FBACfpvpscAZMbXOV2zzKiNadz0AVW68-a6G9hIyFAtHg30TvRx8iF3_9sX6E0_F0cUO1_tZ6qdDBIIz-WcU86WSgTJGiWmGPVlk-A3buZ_PuAeild45xKjDzgAyNEY7mqfPpdIv-oRwvcMKDUnn7hqRewRLqmn99ueenyyNHXSUs5MGQ7S-qmzmEAhuoV96A_GR044zqlwDb-EIo5wshugnhv1dn7H7wgXVF-nEr76DTA')`
                  }}
                ></div>

                {/* Map Overlay Pin Marker */}
                <div className="absolute inset-0 bg-primary/10 pointer-events-none flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="px-3 py-1 rounded-full bg-primary text-on-primary font-badge text-badge shadow-lg flex items-center gap-1 -mb-1 animate-bounce">
                      <span className="material-symbols-outlined text-[14px]">local_hospital</span>
                      <span>CarePlus Clinic</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 bottom-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-[10px] text-on-surface font-semibold tracking-wide border border-surface-container">
                  Google Maps View
                </div>
              </div>

              {/* Location Info Snippet */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1.5 mt-1 border border-surface-container/40">
                <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[18px]">local_parking</span>
                  <span>Complimentary Valet &amp; Ambulance Bay</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-relaxed">
                  Convenient wheelchair access from Sector 4 Ring Road. Metro Station 400m away.
                </p>
              </div>
            </div>

            <a
              className="mt-4 w-full h-11 rounded-lg bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all font-semibold"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">navigation</span>
              <span>Get Driving Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Clinic FAQ Accordion Section */}
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center mb-10">
            <span className="font-badge text-badge text-secondary tracking-widest uppercase mb-1 font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Need Quick Answers?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
              Everything you need to know about scheduling, clinic visits, emergency admissions, and our cashless insurance panel.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-surface-container-lowest transition-shadow duration-200 shadow-sm overflow-hidden border border-surface-container/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer gap-2"
                  >
                    <span className="font-headline-sm text-sm sm:text-headline-sm text-primary flex items-center gap-2.5 sm:gap-3 font-semibold">
                      <span className="material-symbols-outlined text-secondary text-[20px] sm:text-[22px] shrink-0">
                        {faq.icon}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-outline transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-secondary' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 animate-fade-in">
                      <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Assistance Callout Bar */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-surface-container-highest/60 flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container">
            <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">chat</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Have a unique medical inquiry?
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Our clinical nurse coordinator is available on WhatsApp chat.
                </span>
              </div>
            </div>
            <a
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm font-semibold text-center"
              href="https://wa.me/919876543210"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
