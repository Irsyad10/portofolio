import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "PT. AIKO NEGARA DAHA",
      period: "2025 - Present",
      description: "Leading the frontend team in developing scalable web applications. Architected the migration to Next.js, resulting in a 40% improvement in load times."
    },
    {
      role: "Mobile Developer",
      company: "Shejek",
      period: "2025 - 2025",
      description: "Deveoped and maintained highly interactive user interfaces for various client projects. Collaborated closely with designers to ensure pixel-perfect implementation."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Infomatics Engineering",
      institution: "General Achmad Yani University.",
      period: "2020 - 2025",
      description: "I have a strong interest in technology, particularly in Artificial Intelligence and game development."
    }
  ];

  const TimelineItem = ({ title, subtitle, period, description }) => (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop layout: split, Mobile layout: stacked */}
      <div className="md:flex md:flex-row md:justify-between mb-2">
        <div className="md:w-[60%] pr-8">
          <h3 className="text-xl font-bold text-dark-text">{title}</h3>
          <h4 className="text-primary font-medium text-lg mt-1">{subtitle}</h4>
          <p className="text-dark-text/70 mt-4 leading-relaxed">{description}</p>
        </div>

        {/* Period badge and dot */}
        <div className="hidden md:flex flex-col items-end w-[30%]">
          <span className="px-4 py-2 bg-surface-secondary text-primary rounded-pill font-mono text-sm font-semibold whitespace-nowrap">
            {period}
          </span>
        </div>

        {/* Mobile period */}
        <div className="md:hidden mt-2">
          <span className="font-mono text-sm font-semibold text-dark-text/50">{period}</span>
        </div>
      </div>

      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1.5 md:left-auto md:right-[35%] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 hidden md:block transform translate-x-1/2"></div>
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 md:hidden"></div>

      <div className="absolute left-1.5 top-5 bottom-0 w-px bg-border-subtle md:hidden -mb-8"></div>
    </div>
  );

  return (
    <div className="pt-32 pb-16">
      <div className="container-max max-w-4xl">
        <SectionTitle
          label="CAREER"
          title="Experience & Education"
          className="mb-16 md:text-center"
          align="center"
        />

        <div className="space-y-24">
          {/* Experience Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
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
