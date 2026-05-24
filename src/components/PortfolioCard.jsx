import React from 'react';
import { cn } from './Button';
import { ExternalLink } from 'lucide-react';

const PortfolioCard = ({ title, description, image, tags, link, className }) => {
  return (
    <div className={cn(
      "group flex flex-col bg-white rounded-xl border border-border-subtle overflow-hidden",
      "transition-all duration-300 hover:-translate-y-1 hover:shadow-float",
      className
    )}>
      {image && (
        <div className="w-full aspect-video bg-surface-1 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-ink-muted mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-surface-1 text-accent-blue rounded-pill font-mono text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:underline mt-auto w-fit"
          >
            View Project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;

