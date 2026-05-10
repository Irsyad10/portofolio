import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', className, to, href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors rounded-lg px-6 py-3 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-soft",
    secondary: "bg-transparent text-primary border-[1.5px] border-primary hover:bg-surface-secondary",
    ghost: "bg-transparent text-dark-text hover:bg-surface-secondary"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
