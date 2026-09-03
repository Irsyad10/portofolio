import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-1 border-t border-border-subtle py-8 mt-auto">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink/60 font-medium">
          © {new Date().getFullYear()} Irsyad Shofwan Fauzi. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-ink/60">
          <a href="https://github.com/Irsyad10" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">GitHub</a>
          <a href="https://www.instagram.com/irwanzi10?igsh=MWxsb29qNmJ3cDZ0cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@irwanzi10" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">TikTok</a>
          <a href="https://www.linkedin.com/in/irsyad-fauzi-cuy" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


