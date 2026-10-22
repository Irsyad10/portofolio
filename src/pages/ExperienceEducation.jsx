import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';

const ExperienceEducation = () => {
  const { t } = useLanguage();

  const TimelineItem = ({ title, subtitle, period, description, bullets, subItems }) => (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop layout: split, Mobile layout: stacked */}
      <div className="md:flex md:flex-row md:justify-between mb-2">
        <div className="md:w-[60%] pr-8">
          <h3 className="text-xl font-bold text-dark-text">{title}</h3>
          <h4 className="text-primary font-medium text-lg mt-1">{subtitle}</h4>
          
          {description && (
            <div className="text-dark-text/75 mt-4 leading-relaxed text-sm md:text-base">
              {description}
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="list-disc list-outside ml-4 mt-4 space-y-1.5 text-sm text-dark-text/75">
              {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}

          {subItems && subItems.length > 0 && (
            <div className="space-y-4 mt-4">
              {subItems.map((sub, idx) => (
                <div key={idx}>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm font-semibold text-dark-text/90 mb-1.5">
                    <span>{sub.title}</span>
                    <span className="font-mono text-xs text-dark-text/60 font-normal">{sub.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-dark-text/75">
                    {sub.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Period badge and dot */}
        <div className="hidden md:flex flex-col items-end w-[30%]">
          <span className="px-4 py-2 bg-surface-secondary text-primary rounded-pill font-mono text-sm font-semibold whitespace-nowrap border border-border-subtle/50 shadow-xs">
            {period}
          </span>
        </div>

        {/* Mobile period */}
        <div className="md:hidden mt-2">
          <span className="font-mono text-sm font-semibold text-dark-text/60">{period}</span>
        </div>
      </div>

      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1.5 md:left-auto md:right-[35%] w-4 h-4 rounded-full bg-primary border-4 border-surface-card shadow-sm z-10 hidden md:block transform translate-x-1/2"></div>
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-surface-card shadow-sm z-10 md:hidden"></div>

      <div className="absolute left-1.5 top-5 bottom-0 w-px bg-border-subtle md:hidden -mb-8"></div>
    </div>
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container-max max-w-4xl">
        <SectionTitle
          label={t.experience.label}
          title={t.experience.title}
          className="mb-16 md:text-center"
          align="center"
        />

        <div className="space-y-24">
          {/* Experience Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary border border-border-subtle flex items-center justify-center text-primary shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-dark-text">{t.experience.experienceTitle}</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {t.experience.experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                  bullets={exp.bullets}
                  subItems={exp.items}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary border border-border-subtle flex items-center justify-center text-primary shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-dark-text">{t.experience.educationTitle}</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {t.experience.education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  description={edu.description}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
