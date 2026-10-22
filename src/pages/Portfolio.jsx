import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';
import { useLanguage } from '../context/LanguageContext';

import smicyImg from '../assets/images/smicy.png';
import mbankingImg from '../assets/images/mbanking-replica.png';
import taskReminderImg from '../assets/images/task-reminder.png';
import biddleGameImg from '../assets/images/biddle-game.jpg';

const Portfolio = () => {
  const { t } = useLanguage();

  const projectImages = [
    mbankingImg,
    smicyImg,
    taskReminderImg,
    biddleGameImg
  ];

  const projects = t.portfolio.projects.map((project, index) => ({
    ...project,
    image: projectImages[index]
  }));

  return (
    <div className="py-16 md:py-24">
      <div className="container-max">
        <SectionTitle
          label={t.portfolio.label}
          title={t.portfolio.title}
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
