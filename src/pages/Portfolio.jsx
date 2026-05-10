import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';

import smicyImg from '../assets/images/smicy.png';
import mbankingImg from '../assets/images/mbanking-replica.png';

const Portfolio = () => {
  const projects = [
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
