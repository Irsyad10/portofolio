import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "A real-time analytics dashboard for monitoring user engagement and sales metrics. Built with Next.js and server-side rendering for optimal performance.",
      tags: ['Next.js', 'TypeScript', 'Chart.js'],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "#"
    },
    {
      title: "Social Media Scheduler",
      description: "An automated tool to plan and publish content across multiple social platforms simultaneously.",
      tags: ['Vue.js', 'Express', 'MongoDB'],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "#"
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container-max">
        <SectionTitle
          label="MY WORK"
          title="Portfolio"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
