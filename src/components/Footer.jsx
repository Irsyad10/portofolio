import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-subtle py-8 mt-auto">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-text/60 font-medium">
          © {new Date().getFullYear()} Irsyad Shofwan Fauzi. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-dark-text/60">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
