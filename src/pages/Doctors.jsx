import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import DoctorCard from '../components/DoctorCard';
import PageBanner from '../components/PageBanner';

export default function Doctors() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const specialtyParam = searchParams.get('specialty') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialtyParam);
  const [sortBy, setSortBy] = useState('recommended');

  // Synchronize when URL search param changes
  useEffect(() => {
    if (specialtyParam) {
      setSelectedSpecialty(specialtyParam);
    }
  }, [specialtyParam]);

  const handleSpecialtyChange = (spec) => {
    setSelectedSpecialty(spec);
    if (spec === 'all') {
      searchParams.delete('specialty');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ specialty: spec });
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedSpecialty('all');
    setSortBy('recommended');
    searchParams.delete('specialty');
    setSearchParams(searchParams);
  };

  // Filter & Sort
  const filteredDoctors = useMemo(() => {
    return doctors
      .filter((doc) => {
        const matchesSpecialty =
          selectedSpecialty === 'all' ||
          doc.department.toLowerCase() === selectedSpecialty.toLowerCase();

        const term = searchTerm.toLowerCase().trim();
        const matchesSearch =
          !term ||
          doc.name.toLowerCase().includes(term) ||
          doc.specialty.toLowerCase().includes(term) ||
          doc.qualifications.toLowerCase().includes(term);

        return matchesSpecialty && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (sortBy === 'experience') {
          return b.experience - a.experience;
        }
        return 0; // recommended
      });
  }, [selectedSpecialty, searchTerm, sortBy]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero Banner */}
      <PageBanner
        title="Our Doctors"
        subtitle="Meet our experienced and dedicated team of medical specialists committed to compassionate care and clinical excellence."
        breadcrumb={[{ label: 'Doctors' }]}
        rightContent={
          <div className="relative w-full max-w-lg lg:max-w-md shrink-0 flex justify-end">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl bg-surface-container-high/20 backdrop-blur-sm border border-white/10">
              <img
                className="w-full h-full object-cover object-center"
                alt="CarePlus Specialist Medical Team"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQEHDYFdvEP9YVOU77OPXX0NOKRFv1uzEGSQldCrP8--Epni4XTsfoJMpZz-Y60UffPY-AuorV_t2zdYp_wrGFW3Ggsz6QWFzQVv5A2bywAHcVdYw-5EfcnBEXKcEIlNNfKh2HCIfJnTCa7SBeoClC6doLkqobZ-hg64V6RCpgjn0ZDOrBpa024We7YVDMDPVTGrMSMsTIbYNbm0520hPXOVD7qvPMopb5ExXzxsnDyKh28-XTxf0PpA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                <span className="font-label-sm text-label-sm tracking-wide bg-primary-container/80 px-2.5 py-1 rounded-full backdrop-blur-md">
                  15+ Active Specialists On Duty
                </span>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>NABH Accredited</span>
                </div>
              </div>
            </div>
          </div>
        }
      >
        {/* Quick Stats Strip */}
        <div className="mt-6 flex flex-wrap items-center gap-6 pt-4 text-on-primary">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-primary leading-none font-semibold">
                100% Board Certified
              </span>
              <span className="font-body-sm text-body-sm text-primary-fixed opacity-80">
                Specialist Physicians
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-primary leading-none font-semibold">
                Same-Day Slots
              </span>
              <span className="font-body-sm text-body-sm text-primary-fixed opacity-80">
                Available Daily
              </span>
            </div>
          </div>
        </div>
      </PageBanner>

      {/* 2. Search & Filter Bar Section */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="w-full bg-surface-container-lowest rounded-xl p-4 lg:p-5 shadow-md flex flex-col md:flex-row items-center gap-3 border border-surface-container/60">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search doctors by name or specialty..."
              className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Dropdown: Select Department */}
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              medical_services
            </span>
            <select
              value={selectedSpecialty}
              onChange={(e) => handleSpecialtyChange(e.target.value)}
              className="w-full h-11 pl-11 pr-8 rounded-lg bg-surface-container-low text-on-surface text-body-md font-body-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              expand_more
            </span>
          </div>

          {/* Dropdown: Sort By */}
          <div className="relative w-full md:w-52">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              sort
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-11 pl-11 pr-8 rounded-lg bg-surface-container-low text-on-surface text-body-md font-body-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            >
              <option value="recommended">Sort By: Recommended</option>
              <option value="rating">Highest Rated</option>
              <option value="experience">Experience (High to Low)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              expand_more
            </span>
          </div>

          {/* Reset / Filter Button */}
          <button
            type="button"
            onClick={handleReset}
            className="h-11 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors shrink-0 cursor-pointer"
            title="Reset all filters"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </section>

      {/* 3. Main Doctors Directory Grid & Sidebar */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar: Specialty Categories */}
          <aside className="lg:col-span-3 w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-1.5 sticky top-28 border border-surface-container/40">
            <div className="flex items-center justify-between pb-3 mb-1 px-2 border-b border-surface-container">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">Specialties</span>
              <span className="text-badge font-badge bg-surface-container-high text-primary px-2 py-0.5 rounded-full font-bold">
                8 Departments
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => handleSpecialtyChange('all')}
                className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg font-label-md text-label-md transition-all text-left cursor-pointer ${
                  selectedSpecialty === 'all'
                    ? 'bg-secondary text-on-secondary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-secondary'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px]">category</span>
                  <span>All Specialties</span>
                </span>
                <span
                  className={`text-badge font-badge px-2 py-0.5 rounded-full ${
                    selectedSpecialty === 'all'
                      ? 'bg-on-secondary/20 text-on-secondary'
                      : 'bg-surface-container text-outline'
                  }`}
                >
                  8
                </span>
              </button>

              {departments.map((dept) => {
                const isActive = selectedSpecialty.toLowerCase() === dept.id.toLowerCase();
                return (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => handleSpecialtyChange(dept.id)}
                    className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg font-label-md text-label-md transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-secondary text-on-secondary font-bold shadow-xs'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-secondary'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-on-secondary' : 'text-secondary'}`}>
                        {dept.icon}
                      </span>
                      <span>{dept.name}</span>
                    </span>
                    <span
                      className={`text-badge font-badge px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-on-secondary/20 text-on-secondary'
                          : 'bg-surface-container text-outline'
                      }`}
                    >
                      {dept.doctorCount || 1}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Help & Helpline Banner Box */}
            <div className="mt-4 p-3.5 rounded-lg bg-surface-container-high flex flex-col gap-2">
              <span className="font-label-sm text-label-sm text-primary flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[16px] text-secondary">contact_support</span>
                <span>Need assistance choosing?</span>
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Our patient care coordinators are ready to match your symptoms with the right specialist.
              </p>
              <a
                className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:underline mt-1 font-semibold"
                href="tel:+919876543210"
              >
                <span>Call +91 98765 43210 →</span>
              </a>
            </div>
          </aside>

          {/* Right Directory Grid Area */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            {/* Results count */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-label-md text-label-md text-on-surface">
                Showing <strong className="text-secondary font-bold">{filteredDoctors.length}</strong> Verified Specialists
              </span>
              <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                <span>All doctors accepting online consultations</span>
              </div>
            </div>

            {/* Empty state if 0 matches */}
            {filteredDoctors.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4 bg-surface-container-lowest rounded-xl text-center border border-surface-container/60">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-outline mb-3">
                  <span className="material-symbols-outlined text-[32px]">search_off</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  No specialists found
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-1">
                  We couldn't find any doctor matching your search criteria. Try clearing filters or searching for another specialty.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              /* The 8 Doctor Profile Cards Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {filteredDoctors.map((doc) => (
                  <DoctorCard key={doc.id} doctor={doc} variant="circular" />
                ))}
              </div>
            )}

            {/* Teleconsultation & Emergency Callout Banner */}
            <section className="mt-4 w-full bg-gradient-to-r from-surface-container-highest via-surface-container-high to-surface-container p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-surface-container/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">videocam</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Can't make it to the clinic in person?
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Schedule an instant HD video consultation with our on-duty doctors from home.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/appointment')}
                className="shrink-0 px-6 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-all shadow-sm font-semibold cursor-pointer"
              >
                Book Video Consult
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
