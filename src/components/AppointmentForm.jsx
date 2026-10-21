import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';

const TIME_SLOTS = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM'
];

export default function AppointmentForm({ initialDoctorId = '', initialDepartmentId = '' }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: initialDepartmentId || '',
    doctor: initialDoctorId || '',
    date: '2024-10-28',
    timeSlot: '10:00 AM',
    patientName: 'Rahul Sharma',
    patientPhone: '+91 98123 45678',
    patientEmail: 'rahul.sharma@example.com',
    patientAge: '34',
    patientGender: 'male',
    patientReason: 'Routine quarterly health consultation and cardiac checkup.'
  });

  const [errors, setErrors] = useState({});
  const [bookingRef, setBookingRef] = useState('');

  // Update if initials change
  useEffect(() => {
    if (initialDepartmentId) {
      setFormData(prev => ({ ...prev, department: initialDepartmentId }));
    }
    if (initialDoctorId) {
      setFormData(prev => ({ ...prev, doctor: initialDoctorId }));
      const doc = doctors.find(d => d.id === initialDoctorId);
      if (doc && !initialDepartmentId) {
        setFormData(prev => ({ ...prev, department: doc.department }));
      }
    }
  }, [initialDepartmentId, initialDoctorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectSlot = (slot) => {
    setFormData(prev => ({ ...prev, timeSlot: slot }));
    if (errors.timeSlot) {
      setErrors(prev => ({ ...prev, timeSlot: '' }));
    }
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.department) errs.department = 'Please select a department';
    if (!formData.date) errs.date = 'Please pick a consultation date';
    if (!formData.timeSlot) errs.timeSlot = 'Please choose a time slot';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs = {};
    if (!formData.patientName.trim()) errs.patientName = 'Full Name is required';
    if (!formData.patientPhone.trim()) {
      errs.patientPhone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.patientPhone.trim())) {
      errs.patientPhone = 'Please enter a valid phone number (min 10 digits)';
    }
    if (!formData.patientEmail.trim()) {
      errs.patientEmail = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.patientEmail.trim())) {
      errs.patientEmail = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextToInfo = () => {
    if (validateStep1()) {
      setStep(3);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleConfirm = () => {
    if (validateStep3()) {
      const randomRef = `#CP-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(randomRef);
      setStep(4);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setFormData({
      department: '',
      doctor: '',
      date: new Date().toISOString().split('T')[0],
      timeSlot: '10:00 AM',
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      patientAge: '',
      patientGender: 'male',
      patientReason: ''
    });
    setErrors({});
    setStep(1);
  };

  // Filter doctors according to selected department
  const filteredDoctors = formData.department
    ? doctors.filter(d => d.department === formData.department)
    : doctors;

  const selectedDoctorObj = doctors.find(d => d.id === formData.doctor);
  const selectedDeptObj = departments.find(d => d.id === formData.department);

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container p-6 sm:p-8 flex flex-col gap-8 relative overflow-hidden">
      {/* Step Indicators */}
      <div className="w-full pb-4 border-b border-surface-container">
        <div className="grid grid-cols-4 items-center gap-2 relative">
          {/* Step 1: Details */}
          <div
            className={`flex flex-col items-center sm:items-start text-center sm:text-left gap-1 cursor-pointer`}
            onClick={() => step !== 4 && setStep(1)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold ${
                  step === 1
                    ? 'bg-primary-container text-on-primary ring-4 ring-primary-container/10'
                    : step > 1
                    ? 'bg-secondary text-on-secondary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                1
              </div>
              <span
                className={`hidden sm:inline-block font-label-sm text-label-sm ${
                  step === 1
                    ? 'text-primary font-semibold'
                    : step > 1
                    ? 'text-secondary font-semibold'
                    : 'text-on-surface-variant'
                }`}
              >
                Select Details
              </span>
            </div>
            <span className="sm:hidden font-badge text-badge text-primary mt-1 font-semibold">
              Details
            </span>
          </div>

          {/* Step 2: Time */}
          <div
            className={`flex flex-col items-center sm:items-start text-center sm:text-left gap-1 cursor-pointer`}
            onClick={() => step !== 4 && setStep(1)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold ${
                  step === 1 && formData.timeSlot
                    ? 'bg-secondary text-on-secondary ring-4 ring-secondary/15'
                    : step > 1
                    ? 'bg-secondary text-on-secondary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                2
              </div>
              <span
                className={`hidden sm:inline-block font-label-sm text-label-sm ${
                  step >= 1 ? 'text-secondary font-semibold' : 'text-on-surface-variant'
                }`}
              >
                Choose Time
              </span>
            </div>
            <span className="sm:hidden font-badge text-badge text-on-surface-variant mt-1">
              Time
            </span>
          </div>

          {/* Step 3: Patient Info */}
          <div
            className={`flex flex-col items-center sm:items-start text-center sm:text-left gap-1 ${
              step >= 2 ? 'cursor-pointer' : ''
            }`}
            onClick={() => {
              if (validateStep1()) setStep(3);
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold ${
                  step === 3
                    ? 'bg-primary-container text-on-primary ring-4 ring-primary-container/10'
                    : step > 3
                    ? 'bg-secondary text-on-secondary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                3
              </div>
              <span
                className={`hidden sm:inline-block font-label-sm text-label-sm ${
                  step === 3
                    ? 'text-primary font-semibold'
                    : step > 3
                    ? 'text-secondary font-semibold'
                    : 'text-on-surface-variant'
                }`}
              >
                Patient Info
              </span>
            </div>
            <span className="sm:hidden font-badge text-badge text-on-surface-variant mt-1">
              Info
            </span>
          </div>

          {/* Step 4: Confirmation */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold ${
                  step === 4
                    ? 'bg-secondary text-on-secondary ring-4 ring-secondary/20'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                4
              </div>
              <span
                className={`hidden sm:inline-block font-label-sm text-label-sm ${
                  step === 4 ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }`}
              >
                Confirmation
              </span>
            </div>
            <span className="sm:hidden font-badge text-badge text-on-surface-variant mt-1">
              Done
            </span>
          </div>
        </div>
      </div>

      {/* STEP 1: Details & Time Selection */}
      {(step === 1 || step === 2) && (
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Department */}
            <div className="flex flex-col gap-2">
              <label
                className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                htmlFor="department-select"
              >
                <span>Select Department</span>
                <span className="font-body-sm text-body-sm text-error">*</span>
              </label>
              <div className="relative">
                <select
                  id="department-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer border ${
                    errors.department ? 'border-error' : 'border-transparent'
                  }`}
                >
                  <option disabled value="">
                    Choose Department
                  </option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
              {errors.department && (
                <span className="text-error text-body-sm">{errors.department}</span>
              )}
            </div>

            {/* Doctor */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="doctor-select">
                Select Doctor <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  id="doctor-select"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer border border-transparent"
                >
                  <option value="">Any Available Specialist</option>
                  {filteredDoctors.map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} ({doc.specialty})
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3.5 top-3 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label
              className="font-label-md text-label-md text-on-surface flex items-center justify-between"
              htmlFor="date-select"
            >
              <span>Select Date</span>
              <span className="font-body-sm text-body-sm text-error">*</span>
            </label>
            <div className="relative">
              <input
                id="date-select"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary border ${
                  errors.date ? 'border-error' : 'border-transparent'
                }`}
              />
            </div>
            {errors.date && (
              <span className="text-error text-body-sm">{errors.date}</span>
            )}
          </div>

          {/* Time Slots */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Available Time Slots
              </span>
              <span className="font-body-sm text-body-sm text-secondary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 12 Slots Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="time-slot-grid">
              {TIME_SLOTS.map((slot) => {
                const isSelected = formData.timeSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleSelectSlot(slot)}
                    className={`slot-pill py-2.5 px-3 rounded-lg font-body-md text-body-md text-center transition-all duration-150 ${
                      isSelected
                        ? 'bg-primary-container text-on-primary font-semibold shadow-sm ring-2 ring-secondary'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            {errors.timeSlot && (
              <span className="text-error text-body-sm">{errors.timeSlot}</span>
            )}
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleNextToInfo}
              className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md cursor-pointer font-semibold active:scale-[0.99]"
            >
              <span>Next: Patient Information</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Patient Information */}
      {step === 3 && (
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="patient-name">
                Full Name <span className="text-error">*</span>
              </label>
              <input
                id="patient-name"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient's full name"
                type="text"
                className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary border ${
                  errors.patientName ? 'border-error' : 'border-transparent'
                }`}
              />
              {errors.patientName && (
                <span className="text-error text-body-sm">{errors.patientName}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="patient-phone">
                Phone Number <span className="text-error">*</span>
              </label>
              <input
                id="patient-phone"
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                type="tel"
                className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary border ${
                  errors.patientPhone ? 'border-error' : 'border-transparent'
                }`}
              />
              {errors.patientPhone && (
                <span className="text-error text-body-sm">{errors.patientPhone}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="patient-email">
                Email Address <span className="text-error">*</span>
              </label>
              <input
                id="patient-email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={handleChange}
                placeholder="rahul@example.com"
                type="email"
                className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary border ${
                  errors.patientEmail ? 'border-error' : 'border-transparent'
                }`}
              />
              {errors.patientEmail && (
                <span className="text-error text-body-sm">{errors.patientEmail}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="patient-age">
                Age &amp; Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  id="patient-age"
                  name="patientAge"
                  value={formData.patientAge}
                  onChange={handleChange}
                  placeholder="Age"
                  type="number"
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <select
                  name="patientGender"
                  value={formData.patientGender}
                  onChange={handleChange}
                  className="w-full h-12 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="patient-reason">
              Reason for Visit / Symptoms
            </label>
            <textarea
              id="patient-reason"
              name="patientReason"
              value={formData.patientReason}
              onChange={handleChange}
              rows={3}
              placeholder="Briefly describe your symptoms or inquiry..."
              className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
            ></textarea>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full sm:w-1/3 h-12 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full sm:w-2/3 h-12 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md cursor-pointer font-semibold active:scale-[0.99]"
            >
              <span>Confirm Appointment</span>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Success & Confirmation */}
      {step === 4 && (
        <div className="flex flex-col items-center text-center py-6 gap-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[36px] fill-1">check_circle</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-badge text-badge text-secondary uppercase tracking-widest">
              Booking Confirmed
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Your Demo Appointment is Scheduled!
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
              A confirmation SMS and calendar invite has been simulated for your registered contact.
            </p>
          </div>

          {/* Summary card */}
          <div className="w-full max-w-lg bg-surface-container-low rounded-xl p-4 sm:p-5 text-left flex flex-col gap-3 border border-surface-container">
            <div className="flex justify-between items-center pb-3 border-b border-surface-container">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Booking Reference</span>
              <span className="font-label-md text-label-md text-primary font-bold">
                {bookingRef || '#CP-84920'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm">
              <div>
                <span className="block text-on-surface-variant text-[11px] uppercase tracking-wider">
                  Patient Name
                </span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  {formData.patientName || 'Rahul Sharma'}
                </span>
              </div>
              <div>
                <span className="block text-on-surface-variant text-[11px] uppercase tracking-wider">
                  Department
                </span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  {selectedDeptObj?.name || 'General Medicine'}
                </span>
              </div>
              <div>
                <span className="block text-on-surface-variant text-[11px] uppercase tracking-wider">
                  Date &amp; Time
                </span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  {formData.date}, {formData.timeSlot}
                </span>
              </div>
              <div>
                <span className="block text-on-surface-variant text-[11px] uppercase tracking-wider">
                  Consulting Doctor
                </span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  {selectedDoctorObj?.name || 'Any Available Specialist'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:flex-1 h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Book Another</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full sm:flex-1 h-11 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>Return Home</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
