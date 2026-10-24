import React, { useState } from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO, TESTIMONIALS } from '../constants';

interface ServicesViewProps {
  onNavigate: (page: NavPage) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    dob: '',
    time: '',
    place: '',
    service: 'janam-kundli',
    notes: '',
  });

  const filterTabs = [
    { id: 'all', label: 'All 6 Sacred Pillars' },
    { id: 'relationship', label: 'Love & Marriage' },
    { id: 'wealth', label: 'Wealth & Career' },
    { id: 'progeny', label: 'Santana Progeny' },
    { id: 'protection', label: 'Energy Protection' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      document.getElementById('services-feedback')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleBookTier = (tierName: string) => {
    setBookingData((prev) => ({ ...prev, notes: `Interested in: ${tierName}` }));
    document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Constellation Ambient Layer & Hero Header */}
      <section className="relative w-full px-4 sm:px-8 lg:px-14 pt-12 pb-8 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#f2ca50]/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#6001d1]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a35]/80 text-[#f2ca50] border border-[#4d4635] mb-4 shadow-sm">
            <span className="material-symbols-outlined text-base">auto_awesome</span>
            <span className="text-xs uppercase tracking-widest text-[#dfe2f1] font-semibold">
              Precision Vedic & Krishnamurti Padhdhati (KP)
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#dfe2f1] mb-4 font-semibold tracking-tight">
            Sacred Consultations & <span className="text-[#f2ca50] italic">Astrological Remedies</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
            Empowering your life journey with precise planetary diagnostics, ethical remedies, and deep cosmic insight by Dhayalan K S.
          </p>

          {/* Quick Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-8">
            <div className="bg-[#1c1f2a]/60 border border-[#313540] p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <span className="font-serif text-2xl text-[#f2ca50] font-bold">25+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#99907c] mt-1">Years of Heritage</span>
            </div>
            <div className="bg-[#1c1f2a]/60 border border-[#313540] p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <span className="font-serif text-2xl text-[#f2ca50] font-bold">12,000+</span>
              <span className="text-[11px] uppercase tracking-wider text-[#99907c] mt-1">Kundli Blueprints</span>
            </div>
            <div className="bg-[#1c1f2a]/60 border border-[#313540] p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <span className="font-serif text-xl sm:text-2xl text-[#f2ca50] font-bold">KP Sub-Lord</span>
              <span className="text-[11px] uppercase tracking-wider text-[#99907c] mt-1">Micron-Precision</span>
            </div>
            <div className="bg-[#1c1f2a]/60 border border-[#313540] p-4 rounded-lg flex flex-col items-center justify-center text-center">
              <span className="font-serif text-lg sm:text-2xl text-[#f2ca50] font-bold">100% Confidential</span>
              <span className="text-[11px] uppercase tracking-wider text-[#99907c] mt-1">Sanctuary Ethics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Panchang & Auspicious Muhurat Strip */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-10">
        <div className="max-w-6xl mx-auto bg-[#171b26] border border-[#262a35] rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50] shrink-0">
              <span className="material-symbols-outlined text-xl">brightness_7</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-[#99907c] tracking-wider">Sacred Cosmic Pulse</span>
              <span className="text-xs sm:text-sm text-[#dfe2f1] font-medium">
                Planetary Transits: Guru in Taurus • Shani in Kumbha
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-[#d0c5af] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#f2ca50] inline-block animate-pulse"></span>
              <span>Auspicious Abhijit Muhurat Available Daily</span>
            </div>
            <a
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#262a35] text-[#f2ca50] hover:text-[#ffe088] text-xs font-semibold transition-all border border-[#4d4635]"
              href={`tel:${CONTACT_INFO.phoneClean}`}
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>Instant Assistance: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Filter / Jump Tabs */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-8">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow-md'
                    : 'bg-[#1c1f2a] text-[#d0c5af] hover:text-[#f2ca50] border border-[#262a35]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 6 Deep-Dive Categorized Service Modules (Asymmetrical Bento) */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Module 1: Love & Relationship Distress */}
          {(selectedCategory === 'all' || selectedCategory === 'relationship') && (
            <article className="lg:col-span-7 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-16 -top-16 w-52 h-52 bg-[#6001d1]/15 rounded-full blur-[70px] pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                      <span className="material-symbols-outlined text-2xl">favorite</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#d2bbff] block font-semibold">
                        Sacred Harmony Protocol
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                        Love & Relationship Distress
                      </h2>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase px-2.5 py-1 rounded bg-[#262a35] text-[#f2ca50] border border-[#4d4635] font-semibold">
                    Tier I Remedial
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  Relationships crumble when unseen malefic transits skew emotional perception. Dhayalan K S isolates Shukra (Venus) and Chandra (Moon) alignments alongside KP Sub-Lords to dispel mistrust, navigate inter-caste challenges, and heal chronic disconnect.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#1c1f2a]/80 border border-[#262a35] p-3 rounded-lg">
                    <h3 className="text-xs uppercase text-[#f2ca50] font-semibold mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">flare</span> Venus-Rahu Afflictions
                    </h3>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Neutralizing sudden illusions, third-party influences, and compulsive emotional detachment.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/80 border border-[#262a35] p-3 rounded-lg">
                    <h3 className="text-xs uppercase text-[#f2ca50] font-semibold mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">shield_with_heart</span> Divorce Prevention
                    </h3>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Identifying Dasha transitions to diffuse court interventions and restore mutual marital empathy.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/80 border border-[#262a35] p-3 rounded-lg">
                    <h3 className="text-xs uppercase text-[#f2ca50] font-semibold mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">diversity_1</span> Inter-Caste Acceptance
                    </h3>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Remedial planetary pacification to align family elders and societal approval harmoniously.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/80 border border-[#262a35] p-3 rounded-lg">
                    <h3 className="text-xs uppercase text-[#f2ca50] font-semibold mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">psychology</span> Emotional Reconciliation
                    </h3>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Tuning Moon-Mercury communication channels for clear, vulnerable, non-combative dialogue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 bg-[#262a35]/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 pb-6 rounded-b-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#313540]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#f2ca50] text-xl">verified</span>
                  <div>
                    <p className="text-xs font-semibold text-[#dfe2f1]">Deliverable: 45-Min Live Deep Diagnostic</p>
                    <p className="text-[11px] text-[#99907c]">Includes bespoke Gemstone & Bija Mantra PDF</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#d4af37] transition-all cursor-pointer"
                >
                  <span>Book Reading</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          )}

          {/* Module 2: Marriage & Kundli Matching */}
          {(selectedCategory === 'all' || selectedCategory === 'relationship') && (
            <article className="lg:col-span-5 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -left-12 bottom-0 w-44 h-44 bg-[#f2ca50]/10 rounded-full blur-[60px] pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                      <span className="material-symbols-outlined text-2xl">join_inner</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#e9c349] block font-semibold">
                        Ashtakoota & KP Method
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                        Marriage & Kundli Matching
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  Moving far beyond superficial 36-Guna matching. We compute the exact 7th House Sub-Lord compatibility, mitigating karmic friction before rings are exchanged.
                </p>

                <ul className="space-y-2 text-xs text-[#dfe2f1] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">check_circle</span>
                    <span><strong>KP Nakshatra Sub-Lord:</strong> Verifies mental, emotional, and soul longevity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">check_circle</span>
                    <span><strong>Manglik Dosha Depth:</strong> Real Mars cancellations vs. severe Anubandha affliction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">check_circle</span>
                    <span><strong>Rajju & Vedha Remedies:</strong> Safeguarding longevity and progeny health.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">check_circle</span>
                    <span><strong>Second Marriage Prospects:</strong> 2nd, 8th & 9th house karmic reset timing.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1c1f2a] border border-[#262a35] p-4 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#99907c] block">Porutham Dossier</span>
                  <div className="font-serif text-xl text-[#f2ca50] font-bold">
                    ₹2,499 <span className="text-xs font-sans text-[#d0c5af]">/ Couple</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('kundli-calculator')}
                  className="px-4 py-2 rounded-lg bg-[#313540] text-[#dfe2f1] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Match Now
                </button>
              </div>
            </article>
          )}

          {/* Module 3: Financial Growth & Wealth Astrology */}
          {(selectedCategory === 'all' || selectedCategory === 'wealth') && (
            <article className="lg:col-span-6 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] block font-semibold">
                      Artha & Prosperity
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                      Financial Growth & Wealth Astrology
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  Wealth is governed by the 2nd (accumulated cash), 11th (gains/fulfillment), and 9th (fortune) houses. We identify your peak earning cycles and unblock chronic financial stagnancy through exact Dasha calculations.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-[#1c1f2a]/70 border border-[#262a35] rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-lg shrink-0 mt-0.5">currency_exchange</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#dfe2f1]">Dhana & Lakshmi Yogas Activation</h4>
                      <p className="text-[11px] text-[#d0c5af] mt-0.5 leading-normal">
                        Pinpoint when your natal financial reservoirs manifest and which business niches ignite gains.
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#1c1f2a]/70 border border-[#262a35] rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-lg shrink-0 mt-0.5">trending_up</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#dfe2f1]">Stock Market & Business Muhurat</h4>
                      <p className="text-[11px] text-[#d0c5af] mt-0.5 leading-normal">
                        Auspicious cosmic windows for incorporating startups, liquidating property, and venture bets.
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#1c1f2a]/70 border border-[#262a35] rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#f2ca50] text-lg shrink-0 mt-0.5">credit_score</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#dfe2f1]">Debt & Loan Liquidation Cycles</h4>
                      <p className="text-[11px] text-[#d0c5af] mt-0.5 leading-normal">
                        Calculated remedies to shatter chronic 6th house liabilities and ancestral debt obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#262a35]">
                <span className="text-[11px] text-[#99907c] uppercase tracking-wider">60-Min In-Depth Session</span>
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="text-xs font-semibold text-[#f2ca50] hover:text-[#ffe088] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Wealth Analysis</span>
                  <span className="material-symbols-outlined text-sm">trending_flat</span>
                </button>
              </div>
            </article>
          )}

          {/* Module 4: Child Birth & Progeny Blessings */}
          {(selectedCategory === 'all' || selectedCategory === 'progeny') && (
            <article className="lg:col-span-6 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#d2bbff]">
                    <span className="material-symbols-outlined text-2xl">child_care</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d2bbff] block font-semibold">
                      Santana Gopala Vidhana
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                      Child Birth & Progeny Blessings
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  Unraveling delays in conception through the rigorous microscopic study of the Saptamsha (D-7 divisional chart), Guru (Jupiter) vitality, and 5th house karmic blockages.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#1c1f2a]/70 border border-[#262a35] p-3 rounded-lg">
                    <h4 className="text-xs text-[#f2ca50] font-semibold mb-1">Saptamsha (D-7) Scrutiny</h4>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Evaluating male Beeja Sphuta & female Kshetra Sphuta to certify biological cosmic fertility.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/70 border border-[#262a35] p-3 rounded-lg">
                    <h4 className="text-xs text-[#f2ca50] font-semibold mb-1">Jupiter & 5th Lord Potency</h4>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Calibrating planetary strength to overcome non-medical fertility pauses and IVF timing.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/70 border border-[#262a35] p-3 rounded-lg">
                    <h4 className="text-xs text-[#f2ca50] font-semibold mb-1">Pitra & Naga Rectification</h4>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Sanctifying ancestral karmic knots with precise temple offerings & Santana Gopal Yantra.
                    </p>
                  </div>
                  <div className="bg-[#1c1f2a]/70 border border-[#262a35] p-3 rounded-lg">
                    <h4 className="text-xs text-[#f2ca50] font-semibold mb-1">Delivery Muhurat</h4>
                    <p className="text-[11px] text-[#d0c5af] leading-normal">
                      Selecting auspicious planetary ascendants for Cesarean or planned natural deliveries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#262a35]">
                <span className="text-[11px] text-[#99907c] uppercase tracking-wider">Dual Parent Chart Analysis</span>
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="text-xs font-semibold text-[#d2bbff] hover:text-[#eaddff] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Consult for Parenthood</span>
                  <span className="material-symbols-outlined text-sm">trending_flat</span>
                </button>
              </div>
            </article>
          )}

          {/* Module 5: Negative Energy & Drishti Cleansing */}
          {(selectedCategory === 'all' || selectedCategory === 'protection') && (
            <article className="lg:col-span-5 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 w-36 h-36 bg-[#93000a]/20 rounded-full blur-[60px] pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-2xl">security</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#99907c] block font-semibold">
                      Kavach & Shanti
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                      Negative Energy & Drishti Cleansing
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  Sudden financial collapse, chronic unexplained health deterioration, or incessant domestic strife often stem from severe planetary curses, Rahu-Ketu affliction, or malefic evil eye (Buri Nazar).
                </p>

                <ul className="space-y-2 text-xs text-[#dfe2f1] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">verified_user</span>
                    <span><strong>Vedic Kavach Consecration:</strong> Tailored copper/silver yantras aligned with your Ishta Devata.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">verified_user</span>
                    <span><strong>Shrapit Yoga & Kaal Sarp:</strong> Eliminating generational planetary hexes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base shrink-0 mt-0.5">verified_user</span>
                    <span><strong>Household Aura Purification:</strong> Vastu-cosmic remedies to banish stagnant dense entities.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('book-consultation')}
                className="w-full text-center py-2.5 rounded-lg bg-[#262a35] text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-xs font-semibold uppercase tracking-wider transition-all border border-[#4d4635] cursor-pointer"
              >
                Request Aura Shielding
              </button>
            </article>
          )}

          {/* Module 6: Complete Janam Kundli Diagnostic */}
          {(selectedCategory === 'all') && (
            <article className="lg:col-span-7 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-60 h-60 bg-[#f2ca50]/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                      <span className="material-symbols-outlined text-2xl">explore</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#f2ca50] block font-semibold">
                        Master Cosmic Blueprint
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#dfe2f1]">
                        Complete Janam Kundli Diagnostic
                      </h2>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase px-3 py-1 rounded bg-[#f2ca50] text-[#3c2f00] font-bold">
                    Flagship Advisory
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] mb-4 leading-relaxed">
                  The definitive 360-degree life appraisal synthesizing Parashari Vedic Astrology, Krishnamurti Padhdhati (KP), and Divisional Charts (D-1 to D-60). A profound roadmap dissecting past karma, current trials, and forthcoming horizons.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
                  <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#262a35]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-xl mb-1 block">vital_signs</span>
                    <span className="text-[10px] uppercase text-[#dfe2f1] font-semibold">Health & Longevity</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#262a35]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-xl mb-1 block">work</span>
                    <span className="text-[10px] uppercase text-[#dfe2f1] font-semibold">Career Calling</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#262a35]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-xl mb-1 block">savings</span>
                    <span className="text-[10px] uppercase text-[#dfe2f1] font-semibold">Assets & Karma</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#262a35]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-xl mb-1 block">self_improvement</span>
                    <span className="text-[10px] uppercase text-[#dfe2f1] font-semibold">Spiritual Moksha</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-[#262a35]">
                <div>
                  <span className="text-[10px] uppercase text-[#99907c] block font-semibold">
                    Exhaustive 25-Year Life Arc Forecast
                  </span>
                  <p className="text-xs text-[#dfe2f1]">Includes 25+ Page Bound PDF Dossier & Remedial Guide</p>
                </div>
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="px-5 py-2.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#d4af37] transition-all cursor-pointer"
                >
                  Secure Master Blueprint
                </button>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Visual Break / Astrologer In-Action Visual Feature */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0a0e18] border border-[#313540] rounded-xl p-6 sm:p-10 shadow-2xl">
          <div className="md:col-span-5 relative">
            <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden relative shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Astrologer Dhayalan K S seated in consultation chamber"
                src={ASSETS.dhayalanChamber}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#262a35] border border-[#4d4635] p-3 rounded-lg shadow-xl">
              <span className="text-[10px] text-[#f2ca50] uppercase tracking-widest block font-bold">Consultant</span>
              <span className="font-serif text-base font-semibold text-[#dfe2f1]">Dhayalan K S</span>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-3">
            <span className="text-xs uppercase text-[#f2ca50] tracking-widest font-semibold">
              Ethical Cosmic Guidance
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#dfe2f1] font-medium leading-snug">
              "Planets incline; they do not compel. We map the currents so you sail with sovereign clarity."
            </h3>
            <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
              Consultations at ASTROBREEZE are conducted with scientific rigor and sacred integrity. Dhayalan K S synthesizes classical Brihat Parashara Hora Shastra with the micro-timing accuracy of Krishnamurti Padhdhati, ensuring remedies are practical, spiritually pure, and free from fear-mongering.
            </p>
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <div className="flex items-center gap-2 text-[#dfe2f1] text-xs">
                <span className="material-symbols-outlined text-[#f2ca50] text-base">gavel</span>
                <span>Zero Exploitative Fear-Tactics</span>
              </div>
              <div className="flex items-center gap-2 text-[#dfe2f1] text-xs">
                <span className="material-symbols-outlined text-[#f2ca50] text-base">verified</span>
                <span>Genuine Energized Gemstones Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Comparison Table & Pricing Matrix */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-16" id="pricing-matrix">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="text-center max-w-2xl mx-auto mb-2">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Transparent Offerings</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] font-semibold mt-1">
              Consultation Tiers & Durations
            </h2>
            <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
              Compare session scope, chart depth, and deliverables tailored to your current life crossroads.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#262a35] shadow-xl">
            <table className="w-full text-left bg-[#171b26]">
              <thead>
                <tr className="bg-[#262a35] text-[#dfe2f1] border-b border-[#313540]">
                  <th className="py-4 px-4 sm:px-6 text-xs uppercase tracking-wider font-semibold">Service Consultation Tier</th>
                  <th className="py-4 px-4 sm:px-6 text-xs uppercase tracking-wider font-semibold">Duration</th>
                  <th className="py-4 px-4 sm:px-6 text-xs uppercase tracking-wider font-semibold">Calculations Scope</th>
                  <th className="py-4 px-4 sm:px-6 text-xs uppercase tracking-wider font-semibold text-center">Remedial PDF</th>
                  <th className="py-4 px-4 sm:px-6 text-xs uppercase tracking-wider font-semibold text-right">Fee & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262a35] text-xs">
                <tr className="hover:bg-[#1c1f2a]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-serif text-base font-semibold text-[#dfe2f1]">Quick Cosmic Query</div>
                    <div className="text-[11px] text-[#99907c]">Single burning dilemma (Job switch, relationship pause)</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#dfe2f1] font-medium">25 Mins</td>
                  <td className="py-4 px-4 sm:px-6 text-[#d0c5af]">D-1 Chart & Current Dasha-Antardasha</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="font-serif text-base font-bold text-[#f2ca50] mb-1">₹1,199</div>
                    <button
                      onClick={() => handleBookTier('Quick Cosmic Query (₹1,199)')}
                      className="inline-flex px-3 py-1 rounded bg-[#313540] text-[#dfe2f1] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>

                <tr className="bg-[#262a35]/25 hover:bg-[#1c1f2a]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-serif text-base font-semibold text-[#f2ca50] flex items-center gap-2">
                      <span>In-Depth Life Consultation</span>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#f2ca50] text-[#3c2f00] font-bold">
                        Popular
                      </span>
                    </div>
                    <div className="text-[11px] text-[#99907c]">Marriage, Career, Health & Santana overview</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#dfe2f1] font-medium">50 Mins</td>
                  <td className="py-4 px-4 sm:px-6 text-[#d0c5af]">D-1, D-9 Navamsha, KP Sub-Lord Analysis</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="font-serif text-base font-bold text-[#f2ca50] mb-1">₹2,499</div>
                    <button
                      onClick={() => handleBookTier('In-Depth Life Consultation (₹2,499)')}
                      className="inline-flex px-3 py-1 rounded bg-[#f2ca50] text-[#3c2f00] hover:bg-[#d4af37] text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#1c1f2a]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-serif text-base font-semibold text-[#dfe2f1]">Kundli Matching (Couple Porutham)</div>
                    <div className="text-[11px] text-[#99907c]">Dual birth chart scrutiny for marital longevity & doshas</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#dfe2f1] font-medium">45 Mins</td>
                  <td className="py-4 px-4 sm:px-6 text-[#d0c5af]">Dual D-1, D-9, KP 7th House, Ashtakoota</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="font-serif text-base font-bold text-[#f2ca50] mb-1">₹2,499</div>
                    <button
                      onClick={() => handleBookTier('Kundli Matching (₹2,499)')}
                      className="inline-flex px-3 py-1 rounded bg-[#313540] text-[#dfe2f1] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#1c1f2a]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-serif text-base font-semibold text-[#dfe2f1]">Executive & Business Blueprints</div>
                    <div className="text-[11px] text-[#99907c]">Corporate expansion, partner compatibility, stock muhurat</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#dfe2f1] font-medium">75 Mins</td>
                  <td className="py-4 px-4 sm:px-6 text-[#d0c5af]">D-10 Dasamsa, D-2 Hora, KP Wealth Nodes</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-[#f2ca50]">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="font-serif text-base font-bold text-[#f2ca50] mb-1">₹4,999</div>
                    <button
                      onClick={() => handleBookTier('Executive & Business Blueprints (₹4,999)')}
                      className="inline-flex px-3 py-1 rounded bg-[#313540] text-[#dfe2f1] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Direct Booking Form & Instant Reach Module */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-16" id="consultation-booking">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Direct Ashram Channels */}
          <div className="lg:col-span-5 bg-[#171b26] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold mb-2">
                <span className="material-symbols-outlined text-base">contact_support</span>
                <span>Sanctuary Coordinates</span>
              </div>
              <h3 className="font-serif text-2xl text-[#dfe2f1] font-semibold mb-2">Direct Sanctum Reach</h3>
              <p className="text-xs sm:text-sm text-[#d0c5af] mb-6 leading-relaxed">
                For urgent muhurat confirmations, birth time rectification, or immediate telephone consultations, connect directly with Astrologer Dhayalan K S.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  className="flex items-center gap-4 p-3.5 rounded-lg bg-[#1c1f2a] border border-[#262a35] hover:border-[#f2ca50]/50 transition-colors"
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#99907c] font-semibold">Direct Line / WhatsApp</span>
                    <span className="font-serif text-base text-[#f2ca50] font-semibold">{CONTACT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  className="flex items-center gap-4 p-3.5 rounded-lg bg-[#1c1f2a] border border-[#262a35] hover:border-[#f2ca50]/50 transition-colors"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#6001d1]/20 text-[#d2bbff] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#99907c] font-semibold">Official Correspondence</span>
                    <span className="text-sm text-[#dfe2f1] font-medium">{CONTACT_INFO.email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#262a35]/60 border border-[#313540] p-4 rounded-lg">
              <div className="flex items-center gap-2 text-[#f2ca50] mb-1.5">
                <span className="material-symbols-outlined text-base">lock</span>
                <span className="text-xs uppercase tracking-wider font-semibold">Sacred Discretion Guarantee</span>
              </div>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                All birth charts, emotional dilemmas, and remedies are guarded with strict confidentiality under ancient astrological oaths.
              </p>
            </div>
          </div>

          {/* Right: Interactive Birth Data Reservation Form */}
          <div className="lg:col-span-7 bg-[#1c1f2a] border border-[#262a35] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#dfe2f1] font-semibold mb-1">
                Reserve Planetary Diagnostic
              </h3>
              <p className="text-xs text-[#d0c5af] mb-6">
                Submit birth parameters for accurate planetary ephemeris calculation.
              </p>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Full Name</label>
                    <input
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                      placeholder="E.g. Siddharth Menon"
                      required
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">WhatsApp / Phone Number</label>
                    <input
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                      placeholder="+91 95667 89385"
                      required
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Date of Birth</label>
                    <input
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                      required
                      type="date"
                      value={bookingData.dob}
                      onChange={(e) => setBookingData({ ...bookingData, dob: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Exact Time of Birth</label>
                    <input
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                      required
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Place of Birth (City, State)</label>
                    <input
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                      placeholder="E.g. Chennai, Tamil Nadu"
                      required
                      type="text"
                      value={bookingData.place}
                      onChange={(e) => setBookingData({ ...bookingData, place: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Consultation Service Focus</label>
                  <select
                    className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                    value={bookingData.service}
                    onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                  >
                    <option value="relationship">Love & Relationship Distress (Venus-Rahu Remedies)</option>
                    <option value="marriage">Marriage & Kundli Matching (KP Sub-Lord)</option>
                    <option value="wealth">Financial Growth & Wealth Astrology</option>
                    <option value="progeny">Child Birth (Santana Bhagyodaya / D-7)</option>
                    <option value="protection">Energy Protection & Drishti (Evil Eye) Cleansing</option>
                    <option value="janam-kundli">Complete Janam Kundli Diagnostic (360° Life Blueprint)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-[#99907c] font-medium mb-1">Primary Life Questions / Karmic Context</label>
                  <textarea
                    className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#313540]"
                    placeholder="Briefly describe the challenge or question you wish to explore with Astrologer Dhayalan K S..."
                    rows={3}
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                  />
                </div>

                {bookingConfirmed && (
                  <div id="services-feedback" className="p-3 bg-[#f2ca50]/20 border border-[#f2ca50] text-[#f2ca50] rounded-lg text-xs text-center font-medium">
                    Invocation Received. Our sanctuary assistant will connect via WhatsApp/Call at +91 9566789385 within 2 business hours.
                  </div>
                )}

                <button
                  className="w-full py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-base">stars</span>
                  <span>Confirm Sacred Reservation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full px-4 sm:px-8 lg:px-14 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Sacred Proof</span>
            <h2 className="font-serif text-3xl text-[#dfe2f1] font-semibold mt-1">Echoes of Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-[#171b26] border border-[#262a35] p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex text-[#f2ca50]">
                    {[...Array(item.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm">star</span>
                    ))}
                  </div>
                  <p className="text-xs text-[#d0c5af] italic leading-relaxed">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#262a35]">
                  <div className="w-8 h-8 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] font-serif font-bold text-xs">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#dfe2f1]">{item.name}</h4>
                    <span className="text-[10px] text-[#99907c] block">{item.location} • {item.categoryLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
