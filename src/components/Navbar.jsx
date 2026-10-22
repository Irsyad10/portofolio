import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { cn } from './Button';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '#home' },
    { name: t.nav.portfolio, path: '#portfolio' },
    { name: t.nav.experience, path: '#experience' },
    { name: t.nav.certificate, path: '#certificate' },
    { name: t.nav.about, path: '#about' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-surface-base/85 backdrop-blur-md shadow-soft py-4 border-b border-border-subtle/50" : "bg-transparent py-6"
    )}>
      <div className="container-max flex items-center justify-between">
        <a href="#home" id="brand-logo" className="text-xl font-bold font-display text-primary tracking-tight transition-transform hover:scale-[1.02]">
          Irsyad Shofwan Fauzi
        </a>

        {/* Desktop Nav + Action Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
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

          <div className="w-px h-5 bg-border-subtle" />

          {/* Desktop Language Switcher */}
          <div className="flex items-center bg-surface-secondary border border-border-subtle rounded-full p-1 shadow-xs">
            <button
              id="lang-btn-id"
              type="button"
              onClick={() => setLanguage('id')}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
                language === 'id'
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-dark-text/70 hover:text-dark-text"
              )}
              aria-label="Bahasa Indonesia"
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
                language === 'en'
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-dark-text/70 hover:text-dark-text"
              )}
              aria-label="English"
              title="English"
            >
              EN
            </button>
          </div>

          {/* Desktop Dark Mode Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-secondary border border-border-subtle text-dark-text transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer hover:border-primary/50"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? (language === 'id' ? "Ganti ke Mode Terang" : "Switch to Light Mode") : (language === 'id' ? "Ganti ke Mode Gelap" : "Switch to Dark Mode")}
          >
            {isDark ? (
              <Sun size={18} className="text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={18} className="text-primary transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile Actions: Dark Mode Button + Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Dark Mode Button */}
          <button
            id="mobile-theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-secondary border border-border-subtle text-dark-text transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            className="text-dark-text p-2 -mr-1 rounded-lg hover:bg-surface-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden absolute top-full left-0 right-0 bg-surface-card/95 backdrop-blur-xl shadow-float border-t border-border-subtle p-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-lg text-sm font-medium transition-colors text-dark-text/80 hover:bg-surface-secondary hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="h-px bg-border-subtle my-1" />

          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between px-3 py-2 bg-surface-secondary rounded-xl">
            <span className="text-xs font-semibold text-dark-text/70 flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              {language === 'id' ? 'Bahasa' : 'Language'}
            </span>
            <div className="flex items-center bg-surface-card border border-border-subtle rounded-full p-0.5 shadow-xs">
              <button
                id="mobile-lang-btn-id"
                type="button"
                onClick={() => setLanguage('id')}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
                  language === 'id'
                    ? "bg-primary text-white shadow-xs font-bold"
                    : "text-dark-text/70"
                )}
              >
                ID
              </button>
              <button
                id="mobile-lang-btn-en"
                type="button"
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
                  language === 'en'
                    ? "bg-primary text-white shadow-xs font-bold"
                    : "text-dark-text/70"
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
