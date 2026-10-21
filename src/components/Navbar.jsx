import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    `flex items-center px-4 py-3 rounded-xl font-label-md transition-colors ${
      isActive
        ? 'bg-secondary-container/40 text-primary font-bold'
        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-secondary'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-md">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            alt="CarePlus Clinic Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
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

        {/* Right CTA & Contact Info */}
        <div className="flex items-center gap-3 sm:gap-space-md shrink-0">
          <div className="hidden md:flex items-center gap-3 pr-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                +91 98765 43210
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                Mon - Sat: 9AM - 8PM
              </span>
            </div>
          </div>

          <Link
            to="/appointment"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-sm active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>

          <img
            alt="Doctor profile thumbnail"
            className="w-8 h-8 rounded-full object-cover hidden sm:block border border-surface-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX5OOgXV-ItpxA9dzoCmvkwt7hjUV7rLYjgwAx13J4KiLJkQu6sdORzBd4ABR8xskaL56uCPuSoAbGEzZLuu6mskuXEAS8Dveyi4dSnoRFFYt87SHufexyLfO3R50v-KgWbJg0O-6Q5xdwsTU2oHmoOfV9i4_kcFQbgGVzYY9-6mLFtBP3JIGkChqh7etvwxex2Ygv-8c-GCmjgWKvVMs8iVPq8JNQdwUatwPBsthdlXEqc26-rUnaJg"
          />

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 flex flex-col gap-1 max-w-7xl mx-auto">
            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <a
              href="/#departments"
              onClick={handleDepartmentsClick}
              className="flex items-center px-4 py-3 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-secondary transition-colors"
            >
              Departments
            </a>
            <NavLink
              to="/doctors"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Doctors
            </NavLink>
            <NavLink
              to="/appointment"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Appointment
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileNavLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* Mobile Contact Quick Card */}
            <div className="mt-3 p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    +91 98765 43210
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Emergency: +91 98765 00108
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-on-surface-variant pt-1 border-t border-surface-container">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
