import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import PortfolioCard from '../components/PortfolioCard';
import DigitalCertificate from '../components/DigitalCertificate';

import smicyImg from '../assets/images/smicy.png';
import mbankingImg from '../assets/images/mbanking-replica.png';

const Home = () => {
  const featuredProjects = [
    {
      title: "Replica Study for Learning Purposes",
      description: "Saya membuat ulang tampilan ini sebagai latihan memahami layout, grid, tipografi, dan sistem warna. Setelah itu, saya mengembangkan versi redesign dengan pendekatan visual yang lebih sederhana dan modern.",
      tags: ['Figma', 'UI/UX', 'M-Banking', 'Case Study'],
      image: mbankingImg,
      link: "https://www.figma.com/design/yhRpV2fFG61LL0Pvehbkqw/M-BANKING?node-id=0-1&t=lMINTgEgXOFsVV6l-1"
    },
    {
      title: "Smicy - Social Media App",
      description: "A premium dark-themed social media design focused on community connection. Built with a sleek, minimalist aesthetic, featuring high-fidelity UI components, interactive chat interfaces, and personalized user experiences.",
      tags: ['Figma', 'UI/UX', 'Social Media', 'Dark Mode'],
      image: smicyImg,
      link: "https://www.figma.com/design/svP2SWmUzazlClsH107muo/SosialMedia?node-id=401-570&t=6yhw7Ck6unb3GSsG-1"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <Hero />

      {/* Professional Certification Section */}
      <section className="bg-surface-secondary/50 py-20 my-16 border-y border-border-subtle">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionTitle 
                label="VERIFIED EXCELLENCE" 
                title="Professional Certification" 
              />
              <p className="text-lg text-dark-text/70 leading-relaxed">
                I am a certified <strong>Junior Web Programmer</strong>, recognized by the National Professional Certification Authority (BNSP) of Indonesia. This certification validates my technical competence in software development and web programming.
              </p>
              <div className="flex gap-4 pt-2">
                <Button to="/certificate" variant="primary">View All Certificates</Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <DigitalCertificate className="scale-90 md:scale-100 transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container-max section-gap">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle 
            label="PORTFOLIO" 
            title="Featured Projects" 
          />
          <Button to="/portfolio" variant="ghost" className="hidden md:inline-flex">
            View All Work &rarr;
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button to="/portfolio" variant="secondary" className="w-full">
            View All Work
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
