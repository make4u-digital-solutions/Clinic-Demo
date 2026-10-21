import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DepartmentCard({ department }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/doctors?specialty=${department.id}`);
  };

  return (
    <a
      href={`/doctors?specialty=${department.id}`}
      onClick={handleClick}
      className={`group flex flex-col items-center text-center p-4 rounded-2xl ${department.containerBg || 'bg-surface-container-low hover:bg-surface-container'} transition-all duration-200 hover:-translate-y-1 shadow-sm cursor-pointer border border-surface-container/30`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${department.bgClass} flex items-center justify-center ${department.textClass} group-hover:scale-110 transition-transform shadow-xs`}
      >
        <span className="material-symbols-outlined text-[28px]">{department.icon}</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface mt-3 leading-tight font-semibold">
        {department.name}
      </span>
    </a>
  );
}
