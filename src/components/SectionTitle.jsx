import React from 'react';
import { cn } from './Button';

const SectionTitle = ({ label, title, className, align = 'left' }) => {
  return (
    <div className={cn("flex flex-col gap-3", align === 'center' && "items-center text-center", className)}>
      {label && (
        <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-dark-text">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
