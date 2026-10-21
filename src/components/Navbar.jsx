import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, Calendar, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close drawer if window is resized past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent background wobble
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleDepartmentsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const deptSection = document.getElementById('departments');
      if (deptSection) {
        deptSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#departments');
    }
  };

  const navLinkClass = ({ isActive }) =>
    `h-full flex items-center border-b-2 font-label-md transition-colors ${
      isActive
        ? 'text-primary font-semibold border-[#159EAA]'
        : 'border-transparent text-on-surface-variant hover:text-secondary'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3 rounded-xl font-label-md transition-colors ${
      isActive
        ? 'bg-secondary-container/40 text-primary font-bold'
        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-secondary'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container/50">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            alt="CarePlus Clinic Logo"
            className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UhlpEKt_Gf-PhdT_siXfRECMT8O9X6O_L9_2OAs1g8Eb-lsT04YJ9BhhXvhcbjLyrr_lJun-pjl3GWO8hfZmPQlc3OO3Lr9a9n0Tq6ZI0b56WQV6490UTfqcKpHs-8wb_2VWEwRJcOwDJ3nWh_MXeTY2hUAMaJmGI_J3Cp4izNbEU4eh7n-23YUhw_CYqHO38p0syfVZ9YVkUFVusyu2mEaxyNzbY0p10WrNlcy156JcqXfJxLKAVA-AsZ"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-base sm:text-headline-sm text-primary tracking-tight leading-none truncate">
              CarePlus
            </span>
            <span className="hidden min-[480px]:block font-bold text-[9px] sm:text-badge text-secondary tracking-wider uppercase mt-0.5 truncate">
              MULTI-SPECIALITY CLINIC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg h-full">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <a
            href="/#departments"
            onClick={handleDepartmentsClick}
            className="h-full flex items-center border-b-2 border-transparent font-label-md text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
          >
            Departments
          </a>
          <NavLink to="/doctors" className={navLinkClass}>
            Doctors
          </NavLink>
          <NavLink to="/appointment" className={navLinkClass}>
            Appointment
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Working hours & Call (Large desktop screens) */}
          <div className="hidden xl:flex items-center gap-3 pr-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div className="flex flex-col">
              <a
                href="tel:+919876543210"
                className="font-label-md text-label-md text-on-surface leading-tight font-semibold hover:text-primary transition-colors"
              >
                +91 98765 43210
              </a>
              <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                Mon - Sat: 9AM - 8PM
              </span>
            </div>
          </div>

          {/* Responsive Book Appointment CTA */}
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg bg-primary-container text-on-primary font-semibold text-xs sm:text-label-md hover:bg-primary transition-all duration-200 shadow-sm active:scale-95 shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="inline sm:hidden">Book</span>
          </Link>

          {/* Doctor profile thumbnail (Desktop only) */}
          <img
            alt="Doctor profile thumbnail"
            className="w-8 h-8 rounded-full object-cover hidden md:block border border-surface-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX5OOgXV-ItpxA9dzoCmvkwt7hjUV7rLYjgwAx13J4KiLJkQu6sdORzBd4ABR8xskaL56uCPuSoAbGEzZLuu6mskuXEAS8Dveyi4dSnoRFFYt87SHufexyLfO3R50v-KgWbJg0O-6Q5xdwsTU2oHmoOfV9i4_kcFQbgGVzYY9-6mLFtBP3JIGkChqh7etvwxex2Ygv-8c-GCmjgWKvVMs8iVPq8JNQdwUatwPBsthdlXEqc26-rUnaJg"
          />

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container shadow-2xl animate-fade-in max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 flex flex-col gap-1 max-w-7xl mx-auto">
            {/* Quick Action Button in Drawer */}
            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 mb-2 rounded-xl bg-primary-container text-on-primary font-semibold text-center flex items-center justify-center gap-2 shadow-sm hover:bg-primary transition-colors text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>

            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
            <NavLink
              to="/about"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
            <a
              href="/#departments"
              onClick={handleDepartmentsClick}
              className="flex items-center justify-between px-4 py-3 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-secondary transition-colors"
            >
              <span>Departments</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <NavLink
              to="/doctors"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Doctors</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
            <NavLink
              to="/appointment"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Appointment</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>

            {/* Mobile Contact Quick Card */}
            <div className="mt-3 p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5 border border-surface-container">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    +91 98765 43210
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    Call for general inquiries
                  </span>
                </div>
              </a>

              <a
                href="tel:+919876500108"
                className="flex items-center gap-3 pt-2 border-t border-surface-container text-error hover:opacity-85 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">emergency</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold">
                    +91 98765 00108
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    24/7 Emergency Casualty Desk
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-on-surface-variant pt-2 border-t border-surface-container">
                <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM (Sun: Emergency Only)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
