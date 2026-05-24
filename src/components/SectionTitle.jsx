import React from 'react';
import { cn } from './Button';

const SectionTitle = ({ label, title, className, align = 'left' }) => {
  return (
    <div className={cn("flex flex-col gap-4", align === 'center' && "items-center text-center", className)}>
      {label && (
        <span className="font-mono text-sm font-semibold tracking-widest text-accent-blue uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;


