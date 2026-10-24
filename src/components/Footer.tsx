import React from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e18] mt-16 pt-16 pb-12 border-t border-[#313540]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              alt="ASTROBREEZE Sacred Celestial Logo" 
              className="h-8 w-auto object-contain" 
              src={ASSETS.logo} 
            />
            <span className="font-serif text-lg font-semibold text-[#f2ca50] tracking-tight">
              ASTROBREEZE
            </span>
          </div>
          <p className="text-xs text-[#d0c5af] leading-relaxed">
            Sacred Vedic & KP Astro-architectural consultancy led by astrologer Dhayalan K S, guiding karmic paths and corporate destinies across planetary cycles.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[11px] text-[#99907c] uppercase tracking-wider">Lineage:</span>
            <span className="text-xs text-[#f2ca50] font-medium">Parashara & Krishnamurti Padhdhati</span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2ca50] mb-2">
            Consultation Services
          </h4>
          <button 
            onClick={() => handleNav('services')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Love & Relationship Harmony
          </button>
          <button 
            onClick={() => handleNav('kundli-calculator')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Marriage Compatibility & Porutham
          </button>
          <button 
            onClick={() => handleNav('services')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Career & Financial Wealth
          </button>
          <button 
            onClick={() => handleNav('kundli-calculator')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Comprehensive Janam Kundli
          </button>
          <button 
            onClick={() => handleNav('services')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Santana Gopala (Child Birth)
          </button>
          <button 
            onClick={() => handleNav('services')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Dosha & Black Magic Removal
          </button>
        </div>

        {/* Col 3: Sacred Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2ca50] mb-2">
            Sacred Navigation
          </h4>
          <button 
            onClick={() => handleNav('about-dhayalan-k-s')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            About Dhayalan K S
          </button>
          <button 
            onClick={() => handleNav('client-reviews')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Client Testimonials
          </button>
          <button 
            onClick={() => handleNav('book-consultation')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Schedule Private Reading
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className="text-left text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors py-1"
          >
            Contact & Ashram Coordinates
          </button>
        </div>

        {/* Col 4: Direct Reach */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2ca50] mb-2">
            Direct Sanctuary Reach
          </h4>
          <p className="text-xs text-[#d0c5af]">
            Astrologer Dhayalan K S
          </p>
          <a 
            className="text-xs text-[#dfe2f1] hover:text-[#f2ca50] transition-colors font-medium" 
            href={`tel:${CONTACT_INFO.phoneClean}`}
          >
            {CONTACT_INFO.phone}
          </a>
          <a 
            className="text-xs text-[#dfe2f1] hover:text-[#f2ca50] transition-colors" 
            href={`mailto:${CONTACT_INFO.email}`}
          >
            {CONTACT_INFO.email}
          </a>
          <span className="text-[11px] uppercase text-[#99907c] mt-2 block">
            {CONTACT_INFO.location}
          </span>
          <div className="pt-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp Direct Message</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sacred Shloka & Disclaimer */}
      <div className="w-full px-4 sm:px-8 lg:px-14 pt-8 bg-[#0a0e18]/80 text-center flex flex-col gap-3 border-t border-[#1c1f2a]">
        <p className="font-serif text-base italic text-[#e9c349]">
          "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥"
        </p>
        <p className="text-[11px] text-[#99907c] max-w-4xl mx-auto leading-relaxed">
          Ethical Disclaimer: Vedic and KP Astrology offer cosmic blueprints, planetary alignments, and spiritual discernment. Readings and spiritual remedial recommendations are intended for personal guidance, self-discovery, and spiritual upliftment.
        </p>
        <p className="text-[11px] uppercase tracking-wider text-[#d0c5af]">
          © {new Date().getFullYear()} ASTROBREEZE & Astrologer Dhayalan K S. All Sacred Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
