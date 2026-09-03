import React from 'react';
import Button from './Button';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="container-max section-gap flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 md:pr-12">
        <div className="inline-block px-4 py-2 bg-surface-secondary text-primary rounded-pill font-mono text-sm font-semibold mb-4">
          👋 Hello, World!
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Building Digital <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-text/70 max-w-2xl leading-relaxed">
          I'm a passionate software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="#portfolio" variant="primary">View My Work</Button>
          <Button href="/cv.pdf" variant="secondary" target="_blank" rel="noopener noreferrer">Download CV</Button>
          <Button href="mailto:irsyadfauzi1009@gmail.com" variant="secondary">Contact Me</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-surface-secondary rounded-[2rem] rotate-12 shadow-float border border-white"></div>
          <img 
            src={profileImg} 
            alt="Portrait" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-contain bg-white shadow-float border border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
