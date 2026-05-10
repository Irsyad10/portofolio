import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-subtle py-8 mt-auto">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-text/60 font-medium">
          © {new Date().getFullYear()} Irsyad Shofwan Fauzi. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-dark-text/60">
          <a href="https://www.linkedin.com/in/irsyad-fauzi-cuy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/Irsyad10" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.instagram.com/irwanzi10?igsh=MWxsb29qNmJ3cDZ0cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://youtube.com/channel/UCOZW3a8CW4zP7yKA0sXgtqg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
