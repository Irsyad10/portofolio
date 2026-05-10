import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import PortfolioCard from '../components/PortfolioCard';

const Home = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <Hero />

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
          <PortfolioCard 
            title="E-Commerce Platform"
            description="A full-stack e-commerce solution with React, Node.js, and Stripe integration."
            tags={['React', 'Node.js', 'Tailwind']}
            link="#"
            image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          />
          <PortfolioCard 
            title="Dashboard Analytics"
            description="A real-time analytics dashboard for monitoring user engagement and sales metrics."
            tags={['Next.js', 'TypeScript', 'Chart.js']}
            link="#"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          />
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
