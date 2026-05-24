import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Experience', path: '#experience' },
    { name: 'Certificate', path: '#certificate' },
    { name: 'About', path: '#about' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-surface-base/80 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"
    )}>
      <div className="container-max flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-display text-primary">
          Irsyad Shofwan Fauzi
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium transition-colors relative text-dark-text/70 hover:text-dark-text after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:transition-opacity after:opacity-0 hover:after:bg-primary hover:after:opacity-100"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-text p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-float border-t border-border-subtle p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-lg text-sm font-medium transition-colors text-dark-text/70 hover:bg-surface-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
