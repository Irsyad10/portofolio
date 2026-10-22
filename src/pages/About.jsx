import React from 'react';
import SectionTitle from '../components/SectionTitle';
import profileImg from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "Tailwind CSS", "Git & GitHub",
    "Figma", "REST APIs", "GraphQL"
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="space-y-8">
            <SectionTitle
              label={t.about.label}
              title={t.about.title}
            />

            <div className="prose prose-lg text-dark-text/80 space-y-6 leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-dark-text">
                <span className="w-8 h-px bg-primary inline-block"></span>
                {t.about.techStack}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface-card border border-border-subtle rounded-lg font-mono text-sm font-medium text-dark-text shadow-xs hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="sticky top-32">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group border border-border-subtle shadow-float">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <img
                  src={profileImg}
                  alt="Irsyad Shofwan Fauzi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-surface-secondary rounded-full -z-10 border border-border-subtle"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
