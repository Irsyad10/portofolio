import React from 'react';
import garudaImg from '../assets/images/garuda.png';

const DigitalCertificate = ({ className }) => {
  return (
    <div className={`max-w-3xl mx-auto bg-white shadow-2xl border-8 border-double border-gray-200 p-8 md:p-12 relative overflow-hidden rounded-sm ${className}`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Header / Emblem */}
        <div className="w-16 h-16 mb-4 opacity-90">
          <img src={garudaImg} alt="Garuda" className="w-full h-auto" />
        </div>

        <div className="space-y-1 mb-6">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-800 uppercase">Badan Nasional Sertifikasi Profesi</h4>
          <p className="text-[8px] text-gray-500 uppercase tracking-tight font-medium leading-none">Indonesian Professional Certification Authority</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 uppercase leading-tight">Sertifikat Kompetensi</h2>
          <h3 className="text-xs md:text-sm font-serif italic text-gray-600 uppercase">Certificate of Competence</h3>
          <p className="text-[9px] font-mono mt-2 text-gray-400">No. 58200 2513 5 0001646 2024</p>
        </div>

        <div className="mb-6 italic text-gray-700 font-serif text-xs">
          <p>Dengan ini menyatakan bahwa, / This is to certify that,</p>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1 tracking-tight">IRSYAD SHOFWAN FAUZI</h1>
          <p className="text-[9px] font-mono text-gray-500 tracking-[0.3em] font-semibold">No. Reg. TIK.1977.00467 2024</p>
        </div>

        <div className="space-y-4 mb-8 text-gray-800">
          <div className="space-y-1">
            <p className="text-[9px] italic font-serif">Telah kompeten pada bidang: / Is competent in the area of:</p>
            <p className="text-sm md:text-base font-bold uppercase leading-tight">Pemrograman Dan Pengembangan Perangkat Lunak</p>
          </div>

          <div className="space-y-1 pt-3 border-t border-gray-100 w-full max-w-md mx-auto">
            <p className="text-[9px] italic font-serif">Dengan Kualifikasi: / With Qualification:</p>
            <p className="text-base md:text-xl font-bold uppercase text-primary">Pemrogram Web Junior</p>
          </div>
        </div>

        <div className="w-full flex justify-between items-end mt-8 px-2 text-left">
          <div className="text-[9px] text-gray-400 font-serif italic">
            Valid for 3 years
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-800 mb-0.5">Jakarta, 25 Juni 2024</p>
            <div className="mt-2 space-y-0.5">
               <div className="w-24 h-px bg-gray-200 ml-auto mb-1"></div>
               <p className="text-[10px] font-bold text-gray-900 leading-none">Drs Totok Sediyantoro MBA PhD</p>
               <p className="text-[8px] text-gray-400 uppercase font-bold tracking-tighter">Head of Institution</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -rotate-45 translate-x-16 -translate-y-16 rounded-full"></div>
    </div>
  );
};

export default DigitalCertificate;
