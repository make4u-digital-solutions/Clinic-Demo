import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-label-md text-label-md rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary: 'bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-md',
    secondary: 'bg-surface-container text-primary hover:bg-surface-container-high border border-transparent',
    outline: 'border border-primary text-primary hover:bg-primary/5',
    teal: 'bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-sm hover:shadow-md',
    white: 'bg-surface-container-lowest text-primary hover:bg-surface-container-high shadow-md',
    danger: 'bg-error text-on-error hover:bg-on-error-container shadow-sm'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-label-sm gap-1.5',
    md: 'px-5 py-2.5 text-label-md gap-2',
    lg: 'px-6 py-3.5 text-label-md gap-2.5 text-[15px]'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
