import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none mix-blend-luminosity">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPTzL0bkDmt0m6kZVVj6syPSTTr2o4lvj4L0ogulh14TEWXQubk7dzzjpY_bnP0rXFueraxrr4EKmhe8rF0tt-DLA0I4SYx29zfvvD4HzttQk0y1AJISPd8JNq8CY2oMKazpOQuVETQkGCnwTQ_WRI5A-CpUd7n5N7-e78MkUZlkK2fSRuNz6UGG-JlXtfRmH_fdaX28gwUKKMoQw5LB4d3bllKVtDyamhN49GejaHiXHgaj55u75Hrw')`
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col justify-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-4 text-primary-fixed font-label-sm text-label-sm">
            <Link to="/" className="hover:text-surface transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-surface font-semibold">About</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-display-hero-mobile md:text-headline-lg text-on-primary tracking-tight mb-2 font-bold">
              About Our Clinic
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
              Providing compassionate and comprehensive healthcare for a healthier community with cutting-edge medical precision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. "Our Story" & 3. Values Grid Section */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Our Story
              </span>

              <h2 className="font-headline-lg text-headline-lg text-primary leading-tight font-bold">
                Committed to Quality Healthcare Since 2010
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                CarePlus Multi-Speciality Clinic was founded with a clear vision: to provide high-quality, patient-centered healthcare accessible to everyone in our community. Over more than a decade, we have combined clinical expertise with genuine human empathy.
              </p>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We believe that medicine achieves its greatest impact when state-of-the-art diagnostic technology meets thoughtful bedside care. From preventative outpatient checkups to comprehensive specialist consultations, we ensure the safest and best health outcomes for you and your family.
              </p>

              <div className="pt-2">
                <a
                  href="#values"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm group font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Story Photography Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-surface-container border border-surface-container">
                <img
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  alt="CarePlus Clinic Reception & Waiting Lounge"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZWoXKeqCzd-9nP9n958t_kCQpJVqC4_oCpUI0d6arN-WTNoaT1DqlNuR5JxlR25HKEzl4ClhYAdEiqwz4IVhaYVw4em4L3q3TpU2Pcx1SBl9UNGQ1rvysWaNg6Gat8Te7vDz2ryH0cr8kb_V8_oQkEE__oXoVoVTj7WLMUinJcUJiFWATECRN2rKcCRx_gsZA93SmMtVx1SnWBqz1Ng1aVJTkfcr4IumWc03pI3ZOrJ66cF7n0ULu8w"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-sm flex items-center justify-between border border-surface-container">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">medical_services</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary font-bold">
                        NABH Accredited Standard
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Rigorous safety &amp; sanitation protocol
                      </p>
                    </div>
                  </div>
                  <span className="font-badge text-badge text-secondary bg-surface-container-high px-2 py-1 rounded-md hidden sm:inline-block font-bold">
                    CERTIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Values & Standards 4-Card Grid */}
          <div className="mt-20 pt-4" id="values">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-bold">
                Clinical Standards
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mt-1 font-bold">
                Why Families Trust CarePlus
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 border border-surface-container/40">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">stethoscope</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                    Experienced Doctors
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Our board-certified multidisciplinary specialists hold decades of combined hospital experience and clinical pedigree.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 border border-surface-container/40">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">biotech</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                    Modern Facilities
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Fully computerized diagnostic labs, low-radiation imaging suites, and ultra-hygienic procedure rooms.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 border border-surface-container/40">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                    Patient-Centered Care
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Your well-being, dignity, and individual treatment preferences are prioritized across every consultation step.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 border border-surface-container/40">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                    Affordable Care
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Transparent consultation tariffs, cashless insurance coverage, and zero hidden billing surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Clinic Stats Banner */}
      <section className="w-full bg-surface-container-low py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-surface-container-lowest/70 shadow-sm text-center sm:text-left border border-surface-container/40">
              <div className="w-11 h-11 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[24px]">group</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                10,000+
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Happy Patients
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-surface-container-lowest/70 shadow-sm text-center sm:text-left border border-surface-container/40">
              <div className="w-11 h-11 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[24px]">badge</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                15+
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Expert Doctors
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-surface-container-lowest/70 shadow-sm text-center sm:text-left border border-surface-container/40">
              <div className="w-11 h-11 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[24px]">apartment</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                20+
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Specialties
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-surface-container-lowest/70 shadow-sm text-center sm:text-left border border-surface-container/40">
              <div className="w-11 h-11 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[24px]">emoji_events</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                10+
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Years of Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision Statement section */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual consultation element */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container border border-surface-container">
                  <img
                    className="w-full h-[380px] object-cover"
                    alt="Attentive senior female physician counseling patient"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyMjuzUXm3zaxenevAHL5cDNrE5OMPTF9tmHFWpY7xwSQWVx6I0QfA7JxhiZI5fjFOeVtRmJQW2vyJpi_zMdoDneOXCRPmN8to0j5X_5E46HrfBiPNTcNXnwpjHs3Kc1wkdyPXGCjoVre823A--_FYRYUqHyshwg8Rw3ncYxL26HamL1DsNiMBomccOyuORbHW68goH5YgkxMg4ikA__ToXyzQRzTBH-M_IjWdpzEHA_Ec6_SSkNsAw"
                  />
                </div>
                {/* Floating quote card */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 max-w-xs bg-surface-container-lowest p-5 rounded-xl shadow-md hidden sm:block border border-surface-container">
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    "Healing starts with listening. We treat the human, not just the symptom."
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      Clinical Leadership Board
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-bold">
                  Our Purpose
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">
                  Guided by Clear Principles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mission box */}
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container/40">
                  <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">flag</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Our Mission
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To deliver prompt, compassionate, and evidence-based clinical diagnostics and care, fostering sustainable health and comfort across generations in our neighborhood.
                  </p>
                </div>

                {/* Vision box */}
                <div className="p-6 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container/40">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Our Vision
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To be the most trusted community outpatient healthcare network, celebrated for medical transparency, clinical benchmark excellence, and human warmth.
                  </p>
                </div>
              </div>

              {/* Quick Action Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm font-semibold active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Book Consultation</span>
                </Link>
                <Link
                  to="/doctors"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-colors font-semibold active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span>Meet Our Doctors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
