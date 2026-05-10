import React from 'react';
import SectionTitle from '../components/SectionTitle';
import profileImg from '../assets/profile.png';

const About = () => {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "Tailwind CSS", "Git & GitHub",
    "Figma", "REST APIs", "GraphQL"
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="space-y-8">
            <SectionTitle
              label="ABOUT ME"
              title="Passionate about creating digital products."
            />

            <div className="prose prose-lg text-dark-text/80 space-y-6">
              <p>
                Hello! I'm Irsyad Shofwan Fauzi, a software engineer based in Indonesia. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p>
                Shortly after graduating, I joined the engineering team at a creative agency where I worked on a wide variety of interesting and meaningful projects on a daily basis. I've had the privilege of building software for start-ups, corporations, and everything in between.
              </p>
              <p>
                When I'm not at the computer, I'm usually hanging out with friends, reading, or exploring new coffee shops.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-border-subtle inline-block"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-border-subtle rounded-lg font-mono text-sm font-medium text-dark-text shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="sticky top-32">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <img
                  src={profileImg}
                  alt="Irsyad Shofwan Fauzi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-surface-secondary rounded-full -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
