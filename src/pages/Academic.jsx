import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Academic = () => {
  const documents = [
    {
      title: "Ijazah Sarjana Komputer",
      issuer: "Universitas Jenderal Achmad Yani",
      date: "20 Februari 2025",
      description: "Ijazah kelulusan program studi Teknik Informatika, Fakultas Sains dan Informatika.",
      image: "/ijazah.jpg",
      tags: ['Ijazah', 'S.Kom', 'Informatika']
    },
    {
      title: "Transkrip Nilai Akademik",
      issuer: "Universitas Jenderal Achmad Yani",
      date: "3 Maret 2025",
      description: "Transkrip nilai akademik program sarjana Teknik Informatika dengan IPK 3.52 (Sangat Memuaskan).",
      image: "/transkrip.jpg",
      tags: ['Transkrip', 'Akademik']
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <SectionTitle 
          label="ACADEMIC" 
          title="Ijazah & Transkrip" 
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <div className="w-full bg-surface-secondary rounded-2xl overflow-hidden shadow-soft border border-border-subtle relative group">
                <img 
                  src={doc.image} 
                  alt={doc.title} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/800x1130?text=Gambar+Belum+Ditambahkan";
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{doc.title}</h3>
                <div className="text-primary text-sm font-semibold mb-2">{doc.issuer}</div>
                <div className="text-dark-text/40 text-xs mb-4">{doc.date}</div>
                <p className="text-dark-text/70 text-base mb-6 leading-relaxed">{doc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {doc.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-surface-base text-primary rounded-pill font-mono text-xs font-bold border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Fallback download button linking directly to the file */}
                <div className="mt-6">
                  <a 
                    href={doc.image} 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary-dark shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Lihat / Download File
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
