import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorCard({ doctor, variant = 'circular' }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleBook = () => {
    navigate('/appointment', {
      state: {
        doctorId: doctor.id,
        departmentId: doctor.department
      }
    });
  };

  if (variant === 'featured') {
    return (
      <>
        <div className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-surface-container/40">
          <div className="h-56 bg-surface-container-high overflow-hidden relative">
            <img
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              alt={doctor.name}
              src={doctor.heroImage || doctor.image}
              loading="lazy"
            />
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm flex items-center gap-1 text-amber-500 font-label-sm text-label-sm shadow-sm">
              <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              <span className="text-on-surface font-bold">{doctor.rating}</span>
              <span className="text-on-surface-variant text-[11px]">({doctor.reviewsCount}+)</span>
            </div>
            {doctor.status && (
              <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm flex items-center gap-1.5 font-label-sm text-[11px] text-on-surface shadow-sm">
                <span className={`w-2 h-2 rounded-full ${doctor.statusColor || 'bg-emerald-500'}`}></span>
                <span>{doctor.status}</span>
              </div>
            )}
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                {doctor.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {doctor.qualifications}
              </p>
              <span className="inline-block mt-2 font-label-sm text-label-sm text-secondary font-semibold">
                {doctor.specialty}
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full py-2.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors"
              >
                View Profile
              </button>
              <button
                type="button"
                onClick={handleBook}
                className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md text-center hover:bg-primary transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Doctor Profile */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative border border-surface-container max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 border-b border-surface-container">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border-2 border-secondary"
                />
                <div>
                  <h3 className="font-headline-sm text-primary">{doctor.name}</h3>
                  <p className="font-body-sm text-on-surface-variant">{doctor.qualifications}</p>
                  <span className="font-label-sm text-secondary font-semibold">{doctor.specialty}</span>
                  <div className="flex items-center gap-1 text-amber-500 mt-1">
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                    <span className="font-bold text-on-surface text-[13px]">{doctor.rating}</span>
                    <span className="text-on-surface-variant text-[12px]">({doctor.reviewsCount}+ Patient Reviews)</span>
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-3 font-body-sm text-on-surface-variant">
                <p>{doctor.bio}</p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="text-[11px] uppercase tracking-wider block text-outline">Experience</span>
                    <span className="font-label-md text-on-surface font-semibold">{doctor.experience} Years Clinical Practice</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="text-[11px] uppercase tracking-wider block text-outline">Availability</span>
                    <span className="font-label-md text-secondary font-semibold">{doctor.status}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    handleBook();
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-primary"
                >
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Circular variant used on Doctors page
  return (
    <>
      <article className="doctor-card bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center group border border-surface-container/40">
        <div className="relative w-32 h-32 mb-3.5 rounded-full overflow-hidden bg-surface-container-high/60 p-1">
          <img
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            alt={doctor.name}
            src={doctor.image}
            loading="lazy"
          />
          <span
            className={`absolute bottom-1 right-2 w-4 h-4 rounded-full ${doctor.statusColor || 'bg-emerald-500'} border-2 border-white`}
            title={doctor.status}
          ></span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight leading-snug">
          {doctor.name}
        </h3>
        <span className="font-body-sm text-body-sm text-outline mt-0.5">
          {doctor.qualifications}
        </span>
        <span className="font-label-sm text-label-sm text-secondary font-semibold mt-1">
          {doctor.specialty}
        </span>
        <div className="flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded-full bg-surface-container-low">
          <span className="material-symbols-outlined text-[16px] text-amber-500 fill-1">star</span>
          <span className="font-label-sm text-label-sm font-bold text-on-surface">{doctor.rating}</span>
          <span className="font-body-sm text-body-sm text-outline">({doctor.reviewsCount}+ reviews)</span>
        </div>
        <div className="w-full mt-4 pt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-primary font-label-md text-label-md transition-colors text-center"
          >
            View Profile
          </button>
          <button
            type="button"
            onClick={handleBook}
            className="w-full py-2 px-3 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm transition-colors text-center flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">event</span>
            Book Visit
          </button>
        </div>
      </article>

      {/* Profile Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative border border-surface-container max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <div className="flex items-center gap-3.5 sm:gap-4 pb-4 border-b border-surface-container">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border-2 border-secondary"
              />
              <div>
                <h3 className="font-headline-sm text-primary">{doctor.name}</h3>
                <p className="font-body-sm text-on-surface-variant">{doctor.qualifications}</p>
                <span className="font-label-sm text-secondary font-semibold">{doctor.specialty}</span>
                <div className="flex items-center gap-1 text-amber-500 mt-1">
                  <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  <span className="font-bold text-on-surface text-[13px]">{doctor.rating}</span>
                  <span className="text-on-surface-variant text-[12px]">({doctor.reviewsCount}+ Patient Reviews)</span>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-3 font-body-sm text-on-surface-variant">
              <p>{doctor.bio}</p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-surface-container-low">
                  <span className="text-[11px] uppercase tracking-wider block text-outline">Clinical Experience</span>
                  <span className="font-label-md text-on-surface font-semibold">{doctor.experience} Years Active Practice</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low">
                  <span className="text-[11px] uppercase tracking-wider block text-outline">Schedule Status</span>
                  <span className="font-label-md text-secondary font-semibold">{doctor.status}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  handleBook();
                }}
                className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-primary"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
