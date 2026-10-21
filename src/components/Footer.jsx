import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleSpecialtyClick = (specialtyId) => {
    navigate(`/doctors?specialty=${specialtyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDepartmentsNav = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const el = document.getElementById('departments');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#departments');
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.03)] border-t border-surface-container/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <Link to="/" className="flex items-center gap-3">
              <img
                alt="CarePlus Clinic Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UhlpEKt_Gf-PhdT_siXfRECMT8O9X6O_L9_2OAs1g8Eb-lsT04YJ9BhhXvhcbjLyrr_lJun-pjl3GWO8hfZmPQlc3OO3Lr9a9n0Tq6ZI0b56WQV6490UTfqcKpHs-8wb_2VWEwRJcOwDJ3nWh_MXeTY2hUAMaJmGI_J3Cp4izNbEU4eh7n-23YUhw_CYqHO38p0syfVZ9YVkUFVusyu2mEaxyNzbY0p10WrNlcy156JcqXfJxLKAVA-AsZ"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none font-bold">
                  CarePlus
                </span>
                <span className="font-badge text-badge text-secondary tracking-wider uppercase mt-0.5 font-bold">
                  MULTI-SPECIALITY CLINIC
                </span>
              </div>
            </Link>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Delivering unwavering clinical excellence, state-of-the-art diagnostic technology, and compassionate patient-centered healthcare for your entire family.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <Link
                to="/contact#location-map"
                aria-label="Location"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </Link>
              <Link
                to="/contact"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </Link>
              <a
                href="tel:+919876543210"
                aria-label="Call"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
              <a
                href="tel:+919876500108"
                aria-label="Emergency"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-rose-100 hover:text-rose-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">Quick Links</span>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-secondary transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <a
                  href="/#departments"
                  onClick={handleDepartmentsNav}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Specialties
                </a>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-secondary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="flex flex-col gap-3">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">Specialties</span>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => handleSpecialtyClick('cardiology')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Cardiology &amp; Heart Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSpecialtyClick('pediatrics')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Pediatrics &amp; Neonatology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSpecialtyClick('orthopedics')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Orthopedics &amp; Joint Surgery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSpecialtyClick('dermatology')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Dermatology &amp; Cosmetology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSpecialtyClick('general')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  General Medicine
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic Hours & Emergency */}
          <div className="flex flex-col gap-3">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">Clinic Hours</span>
            <div className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  8:00 AM - 8:30 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  Emergency Only
                </span>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-surface-container-low border border-surface-container flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-error flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-[16px]">emergency</span>
                24/7 Emergency Line
              </span>
              <a
                href="tel:+919876500108"
                className="font-label-md text-label-md text-on-surface font-bold hover:text-primary transition-colors"
              >
                +91 98765 00108
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-space-md border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
          <p>© 2024 CarePlus Multi-Speciality Clinic. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="hover:text-secondary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-secondary cursor-pointer">Terms of Service</span>
            <span className="hover:text-secondary cursor-pointer">Patient Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
