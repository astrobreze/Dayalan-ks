import React, { useState } from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About Dhayalan K S', page: 'about-dhayalan-k-s' },
    { label: 'Kundli Calculator', page: 'kundli-calculator' },
    { label: 'Client Reviews', page: 'client-reviews' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f131d]/90 backdrop-blur-xl border-b border-[#313540]/60 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <img 
              alt="ASTROBREEZE Sacred Celestial Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              src={ASSETS.logo} 
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-tight text-[#f2ca50] leading-none group-hover:text-[#ffe088] transition-colors">
                ASTROBREEZE
              </span>
              <span className="text-[10px] uppercase text-[#d0c5af] tracking-widest mt-1">
                Vedic & KP Precision
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-xs uppercase tracking-wider transition-colors py-1 ${
                  isActive
                    ? 'text-[#f2ca50] font-semibold border-b-2 border-[#f2ca50]'
                    : 'text-[#d0c5af] hover:text-[#f2ca50]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Direct helpline */}
        <div className="flex items-center gap-4">
          <div className="hidden 2xl:flex flex-col text-right pr-2">
            <a 
              className="text-xs font-semibold text-[#f2ca50] hover:text-[#ffe088] transition-colors" 
              href={`tel:${CONTACT_INFO.phoneClean}`}
            >
              {CONTACT_INFO.phone}
            </a>
            <a 
              className="text-[11px] text-[#99907c] hover:text-[#dfe2f1] transition-colors" 
              href={`mailto:${CONTACT_INFO.email}`}
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <button
            onClick={() => handleNav('book-consultation')}
            title="Launch Google Meet Sanctuary"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#171b26] text-[#dfe2f1] hover:text-[#f2ca50] hover:bg-[#262a35] border border-[#4d4635]/40 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#f2ca50]">video_camera_front</span>
            <span>Google Meet</span>
          </button>

          <button
            onClick={() => handleNav('book-consultation')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Book Consultation
          </button>

          <button
            onClick={() => handleNav('about-dhayalan-k-s')}
            title="About Dhayalan K S"
            className="w-8 h-8 rounded-full bg-[#1c1f2a] border border-[#f2ca50]/40 flex items-center justify-center text-[#f2ca50] hover:bg-[#262a35] transition-colors cursor-pointer"
          >
            <span className="font-serif text-sm font-bold">ॐ</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#dfe2f1] hover:text-[#f2ca50] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#171b26] border-b border-[#313540] px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-left py-2 px-3 rounded-lg text-sm uppercase tracking-wider transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#262a35] text-[#f2ca50] font-semibold'
                    : 'text-[#dfe2f1] hover:bg-[#1c1f2a] hover:text-[#f2ca50]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#313540] flex flex-col gap-2">
              <button
                onClick={() => handleNav('book-consultation')}
                className="w-full py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-semibold text-xs uppercase tracking-wider text-center"
              >
                Schedule Consultation
              </button>
              <div className="flex justify-between items-center text-xs text-[#99907c] px-1 pt-1">
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-[#f2ca50]">
                  {CONTACT_INFO.phone}
                </a>
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
