import React, { useState } from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';
import { KundliChartSVG } from '../components/KundliChartSVG';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: 'full_kundli',
    dob: '',
    birthTime: '',
    birthPlace: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      const el = document.getElementById('home-booking-toast');
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Ambient Lighting Flares */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-[#f2ca50]/15 via-[#6001d1]/10 to-transparent blur-[140px] rounded-full"></div>
      <div className="pointer-events-none absolute top-[900px] -right-40 w-[600px] h-[600px] bg-[#f2ca50]/10 blur-[130px] rounded-full"></div>
      <div className="pointer-events-none absolute top-[2100px] -left-40 w-[700px] h-[700px] bg-[#6001d1]/15 blur-[150px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative w-full px-4 sm:px-8 lg:px-14 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1f2a] border border-[#4d4635] w-fit shadow-inner">
              <span className="material-symbols-outlined text-[#f2ca50] text-base">auto_awesome</span>
              <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
                Authentic Vedic & KP Astro-Architect
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#dfe2f1] leading-[1.12] tracking-tight">
              Unlock Your Cosmic Blueprint with Authentic{' '}
              <span className="text-[#f2ca50] italic">Vedic & KP</span> Astrology
            </h1>

            <p className="text-base sm:text-lg text-[#d0c5af] max-w-2xl leading-relaxed">
              Esteemed Indian professional astrologer and visionary founder of Astro Breeze, harmoniously balancing deep spirituality with sharp, logical analysis to bring profound traditions to a global audience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('book-consultation')}
                className="px-7 py-3.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-[0_0_28px_rgba(242,202,80,0.35)] hover:bg-[#d4af37] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Book Your Consultation</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <a
                className="px-6 py-3.5 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:text-[#f2ca50] hover:bg-[#313540] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                href={CONTACT_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[#25D366] text-lg">chat</span>
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Quick Connect & Lineage Credentials */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-[#d0c5af] text-xs">
              <a 
                className="flex items-center gap-1.5 hover:text-[#f2ca50] transition-colors" 
                href={`tel:${CONTACT_INFO.phoneClean}`}
              >
                <span className="material-symbols-outlined text-[#f2ca50] text-sm">call</span>
                {CONTACT_INFO.phone}
              </a>
              <span className="text-[#4d4635]">|</span>
              <a 
                className="flex items-center gap-1.5 hover:text-[#f2ca50] transition-colors" 
                href={`mailto:${CONTACT_INFO.email}`}
              >
                <span className="material-symbols-outlined text-[#f2ca50] text-sm">mail</span>
                {CONTACT_INFO.email}
              </a>
              <span className="text-[#4d4635]">|</span>
              <span className="flex items-center gap-1 text-[#f2ca50]">
                <span className="material-symbols-outlined text-sm">verified</span>
                Tamil Nadu & Worldwide Sessions
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase of Dhayalan K S */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#f2ca50]/15 via-[#6001d1]/20 to-[#f2ca50]/5 pointer-events-none blur-xl"></div>
            
            <div className="relative w-full max-w-md">
              <div className="relative p-2 rounded-2xl bg-[#262a35] border border-[#4d4635]/60 shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#0a0e18]">
                  <img
                    alt="Lord Shiva Mahadeva, divine supreme consciousness and lord of cosmic time (Mahakala)"
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
                    src={ASSETS.lordShiva}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-75"></div>

                  {/* Floating Sacred Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#0f131d]/90 backdrop-blur-xl border border-[#4d4635]/70 shadow-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-serif text-base font-semibold text-[#f2ca50] leading-tight">
                        Lord Shiva • Mahadeva
                      </span>
                      <span className="text-[10px] text-[#d0c5af] uppercase tracking-widest mt-0.5">
                        Lord of Cosmic Time (Mahakala)
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#f2ca50]/15 flex items-center justify-center text-[#f2ca50]">
                      <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Decorative Floating Chips */}
              <div className="hidden sm:flex absolute -top-4 -left-4 px-3.5 py-1.5 rounded-full bg-[#313540]/95 border border-[#4d4635] backdrop-blur-md shadow-xl items-center gap-2">
                <span className="material-symbols-outlined text-[#f2ca50] text-sm">stars</span>
                <span className="text-xs text-[#dfe2f1] font-medium">Parashari & KP Sub-Lord</span>
              </div>
              <div className="hidden sm:flex absolute -bottom-4 -right-2 px-3.5 py-1.5 rounded-full bg-[#313540]/95 border border-[#4d4635] backdrop-blur-md shadow-xl items-center gap-2">
                <span className="material-symbols-outlined text-[#f2ca50] text-sm">psychology</span>
                <span className="text-xs text-[#dfe2f1] font-medium">Scientific Logic • Zero Fear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statistics Bar */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#262a35] shadow-xl">
            <div className="flex flex-col items-center lg:items-start p-3 text-center lg:text-left">
              <span className="font-serif text-3xl sm:text-4xl text-[#f2ca50] font-bold">15,000+</span>
              <span className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold mt-1">
                Consultations Guided
              </span>
              <span className="text-[11px] text-[#99907c] mt-0.5">Across career, marriage & karma</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-3 text-center lg:text-left">
              <span className="font-serif text-3xl sm:text-4xl text-[#f2ca50] font-bold">10+</span>
              <span className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold mt-1">
                Years Experience
              </span>
              <span className="text-[11px] text-[#99907c] mt-0.5">Vedic & KP mastery lineage</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-3 text-center lg:text-left">
              <span className="font-serif text-3xl sm:text-4xl text-[#f2ca50] font-bold">99.4%</span>
              <span className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold mt-1">
                Client Accuracy Rating
              </span>
              <span className="text-[11px] text-[#99907c] mt-0.5">Empirical KP event-timing precision</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-3 text-center lg:text-left">
              <span className="font-serif text-3xl sm:text-4xl text-[#f2ca50] font-bold">25+</span>
              <span className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold mt-1">
                Countries Served
              </span>
              <span className="text-[11px] text-[#99907c] mt-0.5">India, USA, UK, Singapore, Gulf</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SPECIALIZATION SERVICES GRID */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16 bg-[#0a0e18] border-y border-[#1c1f2a]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold">
                <span className="w-6 h-[1px] bg-[#f2ca50]"></span>
                Sacred Offerings & Timed Interventions
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold">
                Core Specialization Services
              </h2>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Every consultation is calibrated using ancient Parashara Jyotish alongside Krishnamurti Padhdhati (KP) sub-lord equations for micro-second event timing and non-dogmatic remedies.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-wider font-semibold hover:text-[#ffe088] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View Complete Rate Dossier</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>

          {/* 6 Specialized Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Love & Relationships */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  Love & Relationship Resolution
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  Venus and Mars transits, 7th & 5th house dynamics, soulmate alignment, break-up mediation, and resolving karmic partner friction through compassionate Vedic remedies.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Venus-Mars energy harmonization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Break-up reconciliation timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Rahu affliction in 7th house clearing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Book Love Reading
                </button>
              </div>
            </div>

            {/* Card 2: Marriage & Compatibility */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">diversity_1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  Marriage & 36 Guna Compatibility
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  Exhaustive Ashta Koota matching, Manglik Dosha diagnostics and real rectification, delayed marriage analysis, and planetary dasha timeline synchronicity.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>36 Guna Milan & Nadi Dosha check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Authentic Manglik Dosha Pariharam</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Exact Vivaha Muhurat scheduling</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('kundli-calculator')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Book Compatibility Check
                </button>
              </div>
            </div>

            {/* Card 3: Finance & Career */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  Finance & Career Blueprint
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  Detailed audit of the 2nd (wealth accumulation), 9th (fortune), 10th (profession & governance), and 11th (gains) houses. Strategic guidance for enterprise & investments.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Job promotion & switch timeframes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Business startup viability & partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Stock & real estate planetary timing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Book Career Reading
                </button>
              </div>
            </div>

            {/* Card 4: Child Birth & Santan Prapti */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">child_care</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  Child Birth & Santan Prapti
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  5th house analysis, Jupiter (Guru) benefic influence, Saptamsha D7 varga examination, diagnosis of biological vs karmic blockages, and Santana Gopala sanctified rituals.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Beeja & Kshetra Sphuta analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Pitri Dosha identification & remedies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Santana Gopala Mantra & Yantra path</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Consult for Progeny
                </button>
              </div>
            </div>

            {/* Card 5: Negative Energy & Karmic Shield */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  Negative Energy & Karmic Shield
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  Neutralization of malefic Rahu-Ketu-Saturn conjunctions, removal of evil eye (Drishti dosha), occult interference clearance, and personalized Vedic Kavach consecration.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Aura evaluation & psychic protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Graha Shanti & specific Japa prescriptions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Protective consecrated metal amulets</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Request Protection Guidance
                </button>
              </div>
            </div>

            {/* Card 6: In-Depth Janam Kundli & KP Synthesis */}
            <div className="flex flex-col justify-between p-7 rounded-xl bg-[#171b26] border border-[#262a35] hover:border-[#f2ca50]/40 transition-all shadow-md group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#262a35] flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">calculate</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                  In-Depth Janam Kundli & KP Synthesis
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  The pinnacle of analytical astrology: Krishnamurti Padhdhati sub-lord rulings blended with Parashari principles to generate accurate, chronological timeline roadmaps.
                </p>
                <ul className="flex flex-col gap-2 pt-1 text-[#d0c5af] text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Sub-Lord house cuspal confirmation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Vimshottari Dasha-Antardasha timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-sm">check_circle</span>
                    <span>Comprehensive 25+ page bespoke dossier</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('kundli-calculator')}
                  className="w-full py-2.5 px-4 rounded bg-[#262a35] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] text-xs font-semibold uppercase tracking-wider text-center block transition-colors cursor-pointer"
                >
                  Open Kundli Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DISCERNING SEEKERS CHOOSE DHAYALAN K S */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <div className="inline-flex items-center justify-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-sm">balance</span>
              The Astrobreeze Distinction
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold">
              Why Discerning Seekers Choose Astrologer Dhayalan K S
            </h2>
            <p className="text-base text-[#d0c5af] leading-relaxed">
              Moving beyond fatalism and fear tactics. ASTROBREEZE offers an empowering, logically defensible framework where ancient cosmic calculus meets actionable life strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#1c1f2a] border border-[#262a35] flex flex-col gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#f2ca50]/10 text-[#f2ca50] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">account_balance</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                Sharp Logic Meets Sacred Wisdom
              </h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Every assertion is mathematically tested across divisional varga charts and KP cusps. We reject generic horoscope statements in favor of verifiable timeline probabilities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1c1f2a] border border-[#262a35] flex flex-col gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#f2ca50]/10 text-[#f2ca50] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                Ethical & Fear-Free Remedies
              </h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                No fearmongering, exaggerated curses, or exorbitantly priced ritual scams. We prescribe practical, accessible dharmic remedies: specific mantras, certified natural gemstones, and purposeful charity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1c1f2a] border border-[#262a35] flex flex-col gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#f2ca50]/10 text-[#f2ca50] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">lock</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#dfe2f1]">
                Direct & 100% Confidential Access
              </h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                You speak directly with Dhayalan K S—never apprentices or automated AI bots. Complete client anonymity and private data sanctity are strictly guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SACRED KUNDLI WHEEL & METHODOLOGY SPOTLIGHT */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-20 bg-[#171b26] border-y border-[#262a35]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive SVG Vedic Kundli Diamond Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <KundliChartSVG />
          </div>

          {/* Right: The Methodological Process */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold">
              <span className="w-6 h-[1px] bg-[#f2ca50]"></span>
              Dual-Faceted Vedic Technology
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold">
              How Parashara Wisdom & KP Sub-Lord Theory Synthesize
            </h2>
            <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              While classical Parashari Jyotish provides the vast soul blueprint, current life dasha potentials, and ancestral karmic weights, the Krishnamurti Padhdhati (KP) system divides each constellation into unequal planetary sub-lords to answer binary questions with astounding chronological precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1c1f2a] border border-[#262a35]">
                <span className="text-xs uppercase text-[#f2ca50] font-semibold tracking-wider">
                  Step 1: Natal Verification
                </span>
                <p className="text-xs text-[#d0c5af] mt-1.5 leading-relaxed">
                  Rule of ruling planets (RP) to confirm birth time accuracy down to the minute.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1f2a] border border-[#262a35]">
                <span className="text-xs uppercase text-[#f2ca50] font-semibold tracking-wider">
                  Step 2: Cuspal Interlinking
                </span>
                <p className="text-xs text-[#d0c5af] mt-1.5 leading-relaxed">
                  Isolating whether 2nd, 7th, 10th, or 11th cusps signify fruitful fruition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1f2a] border border-[#262a35]">
                <span className="text-xs uppercase text-[#f2ca50] font-semibold tracking-wider">
                  Step 3: Dasha Timing
                </span>
                <p className="text-xs text-[#d0c5af] mt-1.5 leading-relaxed">
                  Pinpointing the golden windows during Mahadasha, Antardasha, and Sookshma cycles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1f2a] border border-[#262a35]">
                <span className="text-xs uppercase text-[#f2ca50] font-semibold tracking-wider">
                  Step 4: Remedial Pariharam
                </span>
                <p className="text-xs text-[#d0c5af] mt-1.5 leading-relaxed">
                  Actionable sacred steps, energized gemstone recommendations, and divine propitiations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS REEL */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
              Voices of Grace & Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold">
              Client Endorsements & Realized Miracles
            </h2>
            <p className="text-sm text-[#d0c5af]">
              Over 15,000 seekers have uncovered clarity through Dhayalan K S’s consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#262a35] flex flex-col justify-between shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex text-[#f2ca50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="text-sm text-[#dfe2f1] italic leading-relaxed">
                  "Dhayalan sir predicted the exact month my international relocation and corporate promotion would happen based on KP sub-lord timing. After 3 years of delays, his gemstone prescription and timing guidance materialized within 45 days."
                </p>
              </div>
              <div className="pt-6 flex items-center gap-3 border-t border-[#262a35] mt-6">
                <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 flex items-center justify-center font-serif text-[#f2ca50] font-bold">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">Siddharth R.</span>
                  <span className="text-xs text-[#99907c]">VP Engineering, Singapore</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#262a35] flex flex-col justify-between shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex text-[#f2ca50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="text-sm text-[#dfe2f1] italic leading-relaxed">
                  "Our families were deeply anxious about a Manglik dosha issue and differing horoscopes. Astrologer Dhayalan explained the cancellation rules with profound logical clarity. Today, our marriage is completely peaceful and blessed."
                </p>
              </div>
              <div className="pt-6 flex items-center gap-3 border-t border-[#262a35] mt-6">
                <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 flex items-center justify-center font-serif text-[#f2ca50] font-bold">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">Priyanka & Ananth</span>
                  <span className="text-xs text-[#99907c]">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#262a35] flex flex-col justify-between shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex text-[#f2ca50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="text-sm text-[#dfe2f1] italic leading-relaxed">
                  "We were losing hope regarding child birth after multiple unsuccessful attempts. Dhayalan K S performed our Santana Gopala analysis and recommended specific timings and mantra remedies. By God's grace, our baby daughter was born last month."
                </p>
              </div>
              <div className="pt-6 flex items-center gap-3 border-t border-[#262a35] mt-6">
                <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 flex items-center justify-center font-serif text-[#f2ca50] font-bold">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#dfe2f1]">Meenakshi Sundaram</span>
                  <span className="text-xs text-[#99907c]">London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CONSULTATION INTAKE RESERVATION FORM */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16 bg-[#0a0e18]" id="home-reservation-section">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#1c1f2a] border border-[#313540] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f2ca50]/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold">
                <span className="material-symbols-outlined text-base">calendar_month</span>
                Direct Sanctuary Reservation
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold">
                Schedule Your Private Session with Dhayalan K S
              </h2>
              <p className="text-sm text-[#d0c5af] max-w-2xl leading-relaxed">
                Fill in your birth details below. Consultations are conducted via encrypted audio/video call or in-person by prior sanctuary appointment. You will receive an immediate confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9566789385"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Area of Guidance *</label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                >
                  <option value="love">Love & Relationship Resolution</option>
                  <option value="marriage">Marriage Compatibility & 36 Guna Milan</option>
                  <option value="career">Finance, Business & Career Timings</option>
                  <option value="progeny">Child Birth & Santan Prapti (5th House)</option>
                  <option value="shield">Negative Energy & Black Magic Removal</option>
                  <option value="full_kundli">Full Janam Kundli + KP Sub-Lord Audit</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Date of Birth *</label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Exact Time of Birth *</label>
                <input
                  type="text"
                  placeholder="e.g. 06:45 AM (approx if not known)"
                  required
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Place of Birth (City, State, Country) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chennai, Tamil Nadu, India"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-medium">Key Questions or Karmic Context (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your current situation or specific queries for Dhayalan K S..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] placeholder:text-[#99907c] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                />
              </div>

              <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-[0_0_24px_rgba(242,202,80,0.3)] hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm & Reserve Consultation</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>

                <div className="flex items-center gap-2 text-[#99907c] text-xs">
                  <span className="material-symbols-outlined text-[#f2ca50] text-sm">lock</span>
                  <span>100% Confidential & Secure Communication</span>
                </div>
              </div>
            </form>

            {/* Confirmation Toast */}
            {bookingSubmitted && (
              <div 
                id="home-booking-toast" 
                className="p-4 rounded-xl bg-[#262a35] border border-[#f2ca50] text-[#dfe2f1] flex items-start gap-3.5 shadow-xl animate-fadeIn"
              >
                <span className="material-symbols-outlined text-2xl text-[#f2ca50]">task_alt</span>
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-base font-semibold text-[#f2ca50]">
                    Consultation Request Registered for {formData.fullName || 'Seeker'}
                  </span>
                  <span className="text-xs text-[#d0c5af] leading-relaxed">
                    Astrologer Dhayalan K S will review your natal coordinates. Our sanctuary coordinator will connect via WhatsApp or Phone at {formData.phone || '+91 9566789385'} within 2 hours to confirm your private time slot.
                  </span>
                </div>
              </div>
            )}

            {/* Emergency Bar */}
            <div className="pt-6 border-t border-[#313540] flex flex-wrap items-center justify-between gap-4 text-[#99907c] text-xs">
              <span>Need an urgent emergency muhurat or crisis consultation?</span>
              <div className="flex items-center gap-6">
                <a 
                  className="text-[#f2ca50] hover:text-[#ffe088] font-bold flex items-center gap-1.5 transition-colors" 
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  className="text-[#f2ca50] hover:text-[#ffe088] font-semibold flex items-center gap-1.5 transition-colors" 
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
