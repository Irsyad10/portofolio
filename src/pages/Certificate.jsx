import React from 'react';
import SectionTitle from '../components/SectionTitle';
import DigitalCertificate from '../components/DigitalCertificate';

const Certificate = () => {
  const certificates = [
    {
      type: 'digital',
      title: "Sertifikat Kompetensi - Junior Web Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "25 Juni 2024",
      regNo: "No. Reg. TIK.1977.00467 2024",
      certNo: "No. 58200 2513 5 0001646 2024",
      description: "Pemrograman Dan Pengembangan Perangkat Lunak (Programming And Software Development)",
      tags: ['BNSP', 'Web Programming', 'Professional']
    },
    {
      type: 'card',
      title: "VR Creation Training Batch I",
      issuer: "smarteye.id & Telkom Indonesia",
      date: "7 Juni 2022",
      description: "As participant of Hybrid Virtual Reality Creation Training Batch I with smarteye.id from April, 8th-10th 2022.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80",
      tags: ['Virtual Reality', 'Training', 'Telkom']
    },
    {
      type: 'card',
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding Indonesia",
      date: "05 Mei 2025",
      description: "Sertifikat kompetensi kelulusan kelas Belajar Dasar Cloud dan Gen AI di AWS dari Dicoding Academy.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      tags: ['Cloud Computing', 'AWS', 'Gen AI']
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-surface-base min-h-screen">
      <div className="container-max">
        <SectionTitle 
          label="ACHIEVEMENTS" 
          title="Certificates" 
          className="mb-16"
        />
        
        <div className="grid gap-16">
          {/* 1. Digital Reconstruction Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-dark-text/50 uppercase tracking-widest flex items-center gap-4">
              Professional Certification
              <span className="h-px bg-border-subtle flex-grow"></span>
            </h3>
            <DigitalCertificate />
          </div>

          {/* 2. Other Certificates Cards Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-dark-text/50 uppercase tracking-widest flex items-center gap-4">
              Training & Workshops
              <span className="h-px bg-border-subtle flex-grow"></span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certificates.filter(c => c.type === 'card').map((cert, index) => (
                <div key={index} className="group flex flex-col bg-white rounded-xl border border-border-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <div className="w-full aspect-video bg-surface-secondary overflow-hidden relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <div className="text-primary text-sm font-semibold mb-1">{cert.issuer}</div>
                    <div className="text-dark-text/40 text-xs mb-4">{cert.date}</div>
                    <p className="text-dark-text/70 text-sm mb-6 flex-grow">{cert.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cert.tags?.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-surface-secondary text-primary rounded-pill font-mono text-[10px] font-bold">
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
