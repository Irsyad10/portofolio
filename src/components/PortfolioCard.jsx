import React from 'react';
import { cn } from './Button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PortfolioCard = ({ title, description, image, tags, link, className }) => {
  const { t } = useLanguage();

  return (
    <div className={cn(
      "group flex flex-col bg-surface-card rounded-xl border border-border-subtle overflow-hidden",
      "transition-all duration-300 hover:-translate-y-1 hover:shadow-float",
      className
    )}>
      {image && (
        <div className="w-full aspect-video bg-surface-secondary overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-dark-text">{title}</h3>
        <p className="text-dark-text/70 mb-6 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-surface-secondary text-primary border border-border-subtle/50 rounded-pill font-mono text-xs font-semibold"
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
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-auto w-fit group-hover:translate-x-0.5 transition-transform"
          >
            {t.portfolio.viewProject} <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
