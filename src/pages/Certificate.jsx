import React from 'react';
import SectionTitle from '../components/SectionTitle';
import DigitalCertificate from '../components/DigitalCertificate';
import { useLanguage } from '../context/LanguageContext';
import javaCertImg from '../assets/images/java-certificate.png';
import udemyCertImg from '../assets/images/udemy-html-css-js.png';

const Certificate = () => {
  const { t } = useLanguage();

  const certImages = {
    'udemy-web': udemyCertImg,
    'vr-creation': "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80",
    'aws-cloud': "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    'java-basic': javaCertImg,
  };

  const workshopCerts = t.certificate.certificates
    .filter(c => c.id !== 'bnsp-junior')
    .map(c => ({
      ...c,
      image: certImages[c.id]
    }));

  return (
    <div className="py-16 md:py-24 bg-surface-base">
      <div className="container-max">
        <SectionTitle 
          label={t.certificate.label} 
          title={t.certificate.title} 
          className="mb-16"
        />
        
        <div className="grid gap-16">
          {/* 1. Digital Reconstruction Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-dark-text/60 uppercase tracking-widest flex items-center gap-4">
              {t.certificate.professionalLabel}
              <span className="h-px bg-border-subtle flex-grow"></span>
            </h3>
            <DigitalCertificate />
          </div>

          {/* 2. Other Certificates Cards Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-dark-text/60 uppercase tracking-widest flex items-center gap-4">
              {t.certificate.workshopLabel}
              <span className="h-px bg-border-subtle flex-grow"></span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {workshopCerts.map((cert, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col bg-surface-card rounded-xl border border-border-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
                >
                  <div className="w-full aspect-video bg-surface-secondary overflow-hidden relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-dark-text">{cert.title}</h3>
                    <div className="text-primary text-sm font-semibold mb-1">{cert.issuer}</div>
                    <div className="text-dark-text/50 text-xs mb-4">{cert.date}</div>
                    <p className="text-dark-text/75 text-sm mb-6 flex-grow leading-relaxed">{cert.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cert.tags?.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-surface-secondary text-primary border border-border-subtle/50 rounded-pill font-mono text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
