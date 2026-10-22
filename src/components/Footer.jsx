import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-secondary/60 border-t border-border-subtle py-8 mt-auto">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-text/60 font-medium text-center md:text-left">
          © {new Date().getFullYear()} Irsyad Shofwan Fauzi. {t.footer.rights}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-dark-text/70">
          <a href="https://github.com/Irsyad10" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.instagram.com/irwanzi10?igsh=MWxsb29qNmJ3cDZ0cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@irwanzi10" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TikTok</a>
          <a href="https://www.linkedin.com/in/irsyad-fauzi-cuy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
