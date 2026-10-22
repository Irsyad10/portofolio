import React from 'react';
import Button from './Button';
import profileImg from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="container-max section-gap flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 md:pr-12">
        <div className="inline-block px-4 py-2 bg-surface-secondary text-primary rounded-pill font-mono text-sm font-semibold mb-4 border border-border-subtle shadow-xs">
          {t.hero.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          {t.hero.titlePrefix} <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-text/75 max-w-2xl leading-relaxed">
          {t.hero.bio}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="#portfolio" variant="primary">{t.hero.viewWork}</Button>
          <Button href="/cv.pdf" variant="secondary" target="_blank" rel="noopener noreferrer">{t.hero.downloadCv}</Button>
          <Button href="mailto:irsyadfauzi1009@gmail.com" variant="secondary">{t.hero.contactMe}</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-primary/25 dark:bg-primary/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-surface-secondary rounded-[2rem] rotate-12 shadow-float border border-border-subtle"></div>
          <img 
            src={profileImg} 
            alt="Portrait" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-contain bg-surface-card shadow-float border border-border-subtle"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
