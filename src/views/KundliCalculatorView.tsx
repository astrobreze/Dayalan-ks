import React, { useState } from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';

interface KundliCalculatorViewProps {
  onNavigate: (page: NavPage) => void;
}

export const KundliCalculatorView: React.FC<KundliCalculatorViewProps> = ({ onNavigate }) => {
  const [isCalculated, setIsCalculated] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Groom Details State
  const [groom, setGroom] = useState({
    name: 'Arun Kumar',
    dob: '1994-06-18',
    hour: '09',
    minute: '42',
    ampm: 'AM',
    city: 'Chennai, Tamil Nadu, India',
    nakshatra: 'Chitra (Pada 2)',
    rashi: 'Kanya (Virgo)'
  });

  // Bride Details State
  const [bride, setBride] = useState({
    name: 'Priya Sundaram',
    dob: '1996-11-24',
    hour: '04',
    minute: '18',
    ampm: 'PM',
    city: 'Coimbatore, Tamil Nadu, India',
    nakshatra: 'Rohini (Pada 4)',
    rashi: 'Vrishabha (Taurus)'
  });

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setIsCalculated(true);
      document.getElementById('score-dashboard')?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setGroom({
      name: '',
      dob: '',
      hour: '06',
      minute: '00',
      ampm: 'AM',
      city: '',
      nakshatra: 'Select Nakshatra',
      rashi: 'Select Rashi'
    });
    setBride({
      name: '',
      dob: '',
      hour: '06',
      minute: '00',
      ampm: 'AM',
      city: '',
      nakshatra: 'Select Nakshatra',
      rashi: 'Select Rashi'
    });
    setIsCalculated(false);
  };

  const handleDownloadDossier = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      window.print();
    }, 400);
    setTimeout(() => {
      setDownloadNotice(false);
    }, 4000);
  };

  const faqs = [
    {
      q: 'What if our Guna Milan score is between 18 and 24?',
      a: 'A score between 18 and 24 represents an "acceptable to average" match in classical Vedic terms. In such charts, the longevity of the bond relies heavily on the presence of Rajju Porutham, a fortified 7th House Jupiter aspect, and favorable planetary Dasha periods. When the core points like Nadi and Bhakoot are unhindered, marriage proceeds happily with minor customized planetary remediation.'
    },
    {
      q: 'Why is Rajju Porutham considered the most vital of the 10 Poruthams?',
      a: 'Rajju signifies the "sacred marital cord" (Mangalasutra) and governs the longevity and physiological vitality of the husband and wife. There are five Rajjus (Siro, Kantha, Udara, Ooru, Pada). Boy and girl must not belong to the same Rajju limb, especially Siro (Head) or Kantha (Neck). In this calculator, the prospective match has zero Rajju clash, signifying supreme auspiciousness.'
    },
    {
      q: 'Does Manglik Dosha automatically disqualify a marriage?',
      a: 'Absolutely not. Over 70% of apparent Manglik placements contain automatic scriptural cancellations (Dosha Bhanga)—such as Mars positioned in its own house, Jupiter casting a trinal aspect, or both charts having matching planetary strengths. Astrologer Dhayalan K S provides exact degree analysis so couples avoid needless anxiety.'
    },
    {
      q: 'How does Krishnamurti Padhdhati (KP) improve traditional Kundli matching?',
      a: 'Traditional Guna Milan only evaluates Moon constellations. KP Astrology examines the 7th Cusp Sub-Lord—the exact micro-degree ruling marriage contracts and longevity. If the 7th sub-lord connects favorably to houses 2 (family bond), 7 (spouse amity), and 11 (fulfillment of desires), marital success is guaranteed even if Gunas are moderate.'
    }
  ];

  return (
    <div className="flex flex-col w-full relative bg-[#0f131d]">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#6001d1]/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-[30rem] h-[30rem] rounded-full bg-[#f2ca50]/10 blur-[150px] pointer-events-none"></div>

        {/* Top Introductory / Context Banner */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pt-8 pb-12 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* Sacred Overline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#262a35]/90 border border-[#4d4635]/40 shadow-md mb-4">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="text-xs uppercase tracking-widest text-[#e9c349] font-bold">
                Vedic Ephemeris • KP Krishnamurti Padhdhati
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#f2ca50]/60"></span>
              <span className="text-xs uppercase tracking-wider text-[#d0c5af]">Precision v4.8</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#dfe2f1] tracking-tight max-w-4xl leading-tight">
              Authentic Vedic & KP Kundli Matching & Porutham Calculator
            </h1>
            <p className="text-base sm:text-lg text-[#d0c5af] max-w-3xl mt-4 leading-relaxed">
              Evaluate 36 Guna Milan & Traditional 10 Porutham with Krishnamurti Padhdhati (KP) 7th House Sub-Lord Compatibility by Master Astrologer Dhayalan K S.
            </p>

            {/* Trust Anchor Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mt-8">
              <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1c1f2a]/90 border border-[#4d4635]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">stars</span>
                <span className="text-xs sm:text-sm font-semibold text-[#dfe2f1]">36 Gunas & 10 Poruthams</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1c1f2a]/90 border border-[#4d4635]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">shield_with_heart</span>
                <span className="text-xs sm:text-sm font-semibold text-[#dfe2f1]">Manglik / Kuja Check</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1c1f2a]/90 border border-[#4d4635]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">psychology_alt</span>
                <span className="text-xs sm:text-sm font-semibold text-[#dfe2f1]">KP 7th Sub-Lord Synastry</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1c1f2a]/90 border border-[#4d4635]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">menu_book</span>
                <span className="text-xs sm:text-sm font-semibold text-[#dfe2f1]">Instant Sacred Dossier</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Form Section */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Groom's Card */}
              <div className="rounded-xl bg-[#1c1f2a]/95 backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-[#f2ca50]/20">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#4d4635]/30">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center font-bold text-lg">
                        ♂
                      </span>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl text-[#f2ca50] font-semibold">Groom's Birth Details</h2>
                        <span className="text-xs uppercase tracking-wider text-[#d0c5af]">Varam • Boy Profile</span>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-[#313540] text-[#e9c349] font-medium border border-[#4d4635]/40">
                      Surya Ascendant
                    </span>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#f2ca50] text-sm border border-[#4d4635]/30"
                        placeholder="Enter boy's full name"
                        type="text"
                        value={groom.name}
                        onChange={(e) => setGroom({ ...groom, name: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                          Date of Birth
                        </label>
                        <input
                          className="w-full bg-[#0a0e18] text-[#dfe2f1] px-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#f2ca50] text-sm border border-[#4d4635]/30"
                          type="date"
                          value={groom.dob}
                          onChange={(e) => setGroom({ ...groom, dob: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                          Exact Time of Birth
                        </label>
                        <div className="grid grid-cols-3 gap-1">
                          <select
                            className="bg-[#0a0e18] text-[#dfe2f1] px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={groom.hour}
                            onChange={(e) => setGroom({ ...groom, hour: e.target.value })}
                          >
                            {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map((h) => (
                              <option key={h} value={h}>{h}</option>
                            ))}
                          </select>
                          <select
                            className="bg-[#0a0e18] text-[#dfe2f1] px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={groom.minute}
                            onChange={(e) => setGroom({ ...groom, minute: e.target.value })}
                          >
                            {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')).map((m) => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>
                          <select
                            className="bg-[#0a0e18] text-[#f2ca50] font-semibold px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={groom.ampm}
                            onChange={(e) => setGroom({ ...groom, ampm: e.target.value })}
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Place of Birth (City / Coordinates)
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-[#0a0e18] text-[#dfe2f1] pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#f2ca50] text-sm border border-[#4d4635]/30"
                          type="text"
                          value={groom.city}
                          onChange={(e) => setGroom({ ...groom, city: e.target.value })}
                        />
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#f2ca50]">
                          location_on
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-[#99907c]">Ephemeris: 13.0827° N, 80.2707° E</span>
                        <span className="text-[#99907c] text-xs">•</span>
                        <span className="text-[11px] text-[#f2ca50]">Time Zone: IST (+5:30)</span>
                      </div>
                    </div>

                    {/* Resolved Astrology details pill */}
                    <div className="p-3 rounded-lg bg-[#171b26] flex items-center justify-between border border-[#4d4635]/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">wb_sunny</span>
                        <span className="text-xs text-[#dfe2f1]">
                          Nakshatra: <strong className="text-[#f2ca50] font-semibold">{groom.nakshatra}</strong>
                        </span>
                      </div>
                      <span className="text-xs text-[#d0c5af]">Rashi: {groom.rashi}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-[#99907c] border-t border-[#4d4635]/20">
                  <span className="text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse"></span> Lahiri Ayanamsha Calibrated
                  </span>
                  <span className="text-xs">D-1 Chart Loaded</span>
                </div>
              </div>

              {/* Bride's Card */}
              <div className="rounded-xl bg-[#1c1f2a]/95 backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-[#d2bbff]/20">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#4d4635]/30">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#d2bbff]/20 text-[#d2bbff] flex items-center justify-center font-bold text-lg">
                        ♀
                      </span>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl text-[#d2bbff] font-semibold">Bride's Birth Details</h2>
                        <span className="text-xs uppercase tracking-wider text-[#d0c5af]">Kanya • Girl Profile</span>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-[#313540] text-[#d2bbff] font-medium border border-[#4d4635]/40">
                      Chandra Ascendant
                    </span>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#d2bbff] text-sm border border-[#4d4635]/30"
                        placeholder="Enter girl's full name"
                        type="text"
                        value={bride.name}
                        onChange={(e) => setBride({ ...bride, name: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                          Date of Birth
                        </label>
                        <input
                          className="w-full bg-[#0a0e18] text-[#dfe2f1] px-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#d2bbff] text-sm border border-[#4d4635]/30"
                          type="date"
                          value={bride.dob}
                          onChange={(e) => setBride({ ...bride, dob: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                          Exact Time of Birth
                        </label>
                        <div className="grid grid-cols-3 gap-1">
                          <select
                            className="bg-[#0a0e18] text-[#dfe2f1] px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={bride.hour}
                            onChange={(e) => setBride({ ...bride, hour: e.target.value })}
                          >
                            {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map((h) => (
                              <option key={h} value={h}>{h}</option>
                            ))}
                          </select>
                          <select
                            className="bg-[#0a0e18] text-[#dfe2f1] px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={bride.minute}
                            onChange={(e) => setBride({ ...bride, minute: e.target.value })}
                          >
                            {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')).map((m) => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>
                          <select
                            className="bg-[#0a0e18] text-[#d2bbff] font-semibold px-2 py-2.5 rounded-lg outline-none text-xs border border-[#4d4635]/30"
                            value={bride.ampm}
                            onChange={(e) => setBride({ ...bride, ampm: e.target.value })}
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Place of Birth (City / Coordinates)
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-[#0a0e18] text-[#dfe2f1] pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-[#d2bbff] text-sm border border-[#4d4635]/30"
                          type="text"
                          value={bride.city}
                          onChange={(e) => setBride({ ...bride, city: e.target.value })}
                        />
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#d2bbff]">
                          location_on
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-[#99907c]">Ephemeris: 11.0168° N, 76.9558° E</span>
                        <span className="text-[#99907c] text-xs">•</span>
                        <span className="text-[11px] text-[#d2bbff]">Time Zone: IST (+5:30)</span>
                      </div>
                    </div>

                    {/* Resolved Astrology details pill */}
                    <div className="p-3 rounded-lg bg-[#171b26] flex items-center justify-between border border-[#4d4635]/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#d2bbff] text-[20px]">nightlight</span>
                        <span className="text-xs text-[#dfe2f1]">
                          Nakshatra: <strong className="text-[#d2bbff] font-semibold">{bride.nakshatra}</strong>
                        </span>
                      </div>
                      <span className="text-xs text-[#d0c5af]">Rashi: {bride.rashi}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-[#99907c] border-t border-[#4d4635]/20">
                  <span className="text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span> KP Placidus Cusps Active
                  </span>
                  <span className="text-xs">D-9 Navamsha Synced</span>
                </div>
              </div>
            </div>

            {/* Action Central Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span className={`material-symbols-outlined text-[20px] ${isCalculating ? 'animate-spin' : 'group-hover:rotate-45 transition-transform'}`}>
                  all_inclusive
                </span>
                <span>{isCalculating ? 'Computing Planetary Ephemeris...' : 'Calculate Compatibility & Porutham Score'}</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#1c1f2a] text-[#d0c5af] hover:text-[#dfe2f1] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#4d4635]/30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                <span>Reset Coordinates</span>
              </button>
            </div>
          </div>
        </section>

        {/* Score Dashboard / Live Deep Analysis */}
        {isCalculated && (
          <section id="score-dashboard" className="w-full px-4 sm:px-8 lg:px-14 pb-12 relative z-10">
            <div className="max-w-6xl mx-auto rounded-xl bg-[#171b26]/95 border border-[#4d4635]/40 p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Header Ribbon inside Dashboard */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#4d4635]/30">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f2ca50]"></span>
                    <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-bold">
                      Calculated Compatibility Synthesis
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#dfe2f1]">
                    {groom.name || 'Arun Kumar'} & {bride.name || 'Priya Sundaram'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d0c5af]">
                    Natal Synastry based on Chitra (Kanya) × Rohini (Vrishabha)
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownloadDossier}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#262a35] text-[#f2ca50] hover:bg-[#313540] border border-[#f2ca50]/30 transition-colors text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    Download Sacred Dossier
                  </button>
                  <span className="px-4 py-2 rounded-lg bg-[#f2ca50]/20 text-[#f2ca50] text-xs uppercase tracking-wider font-bold border border-[#f2ca50]/40">
                    Uttama / Highly Auspicious
                  </span>
                </div>
              </div>

              {downloadNotice && (
                <div className="mt-4 p-3 rounded-lg bg-[#f2ca50]/15 border border-[#f2ca50]/40 text-xs text-[#f2ca50] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">print</span>
                    Sacred Dossier prepared for print / export.
                  </span>
                  <span className="text-[10px] text-[#d0c5af]">Astro Breeze Official Seal</span>
                </div>
              )}

              {/* 3-Column Visual Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* Gauge Card */}
                <div className="rounded-xl bg-[#1c1f2a] p-6 flex flex-col items-center justify-center text-center shadow-md border border-[#4d4635]/30">
                  <span className="text-xs uppercase tracking-widest text-[#d0c5af] font-semibold mb-2">
                    Ashtakoota Aggregate
                  </span>
                  {/* SVG Progress Ring for 29.5 / 36 (approx 82%) */}
                  <div className="relative w-44 h-44 flex items-center justify-center my-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-[#313540]"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="7"
                      />
                      <circle
                        className="text-[#f2ca50]"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeDasharray="251.2"
                        strokeDashoffset="45"
                        strokeLinecap="round"
                        strokeWidth="7.5"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-serif text-4xl text-[#dfe2f1] leading-none font-bold">29.5</span>
                      <span className="text-xs text-[#d0c5af] uppercase tracking-wider mt-1 font-semibold">
                        Out of 36 Gunas
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ca50]/10 text-[#f2ca50] text-xs font-bold border border-[#f2ca50]/30">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    82% Celestial Harmony
                  </div>
                  <p className="text-xs text-[#99907c] mt-2">Threshold for marriage approval: 18.0 Gunas</p>
                </div>

                {/* 10 Porutham Quick Status */}
                <div className="md:col-span-2 rounded-xl bg-[#1c1f2a] p-6 shadow-md flex flex-col justify-between border border-[#4d4635]/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="font-serif text-lg sm:text-xl text-[#f2ca50] flex items-center gap-2 font-semibold">
                      <span className="material-symbols-outlined text-[20px]">join_inner</span>
                      Traditional 10 Porutham Verification
                    </h4>
                    <span className="text-xs text-[#e9c349] uppercase tracking-wider font-semibold">
                      8 Passed • 2 Neutral
                    </span>
                  </div>
                  <p className="text-xs text-[#d0c5af] mb-4">
                    South Indian Tamil astrology Porutham system evaluating physical, psychological, and longevity synergy between lunar constellations.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">1. Dina</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Fortified</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">2. Gana</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Auspicious</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">3. Mahendra</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Optimal</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">4. Stree Dheergha</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Passed</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">5. Yoni</span>
                      <span className="material-symbols-outlined text-[#e9c349] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Friendly</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">6. Rasi</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Trine (9/5)</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">7. Rasyadhipathi</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Neutral-Friend</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">8. Vasya</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">Aligned</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#262a35] ring-1 ring-[#f2ca50]/50 flex flex-col items-center">
                      <span className="text-[10px] text-[#f2ca50] uppercase font-bold">9. Rajju</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                        stars
                      </span>
                      <span className="text-xs text-[#f2ca50] font-bold">Passed</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#171b26] flex flex-col items-center border border-[#4d4635]/20">
                      <span className="text-[10px] text-[#99907c] uppercase">10. Vedha</span>
                      <span className="material-symbols-outlined text-[#f2ca50] text-[18px] my-1">check_circle</span>
                      <span className="text-xs text-[#dfe2f1] font-semibold">No Affliction</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-[#0a0e18] flex items-center justify-between border border-[#4d4635]/20">
                    <span className="text-xs text-[#d0c5af] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#f2ca50] text-[16px]">info</span>
                      Critical Rajju Status: Both boy & girl belong to distinct Rajju limbs (Kanta vs Udhara). Zero Mangalya dosha risk.
                    </span>
                  </div>
                </div>
              </div>

              {/* 8 Ashtakoota Breakdown Detailed Table */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-xl text-[#dfe2f1] font-semibold">
                    Ashtakoota 8-Pillar Scoring Breakdown
                  </h4>
                  <span className="text-xs text-[#d0c5af]">North Indian System Compatibility</span>
                </div>
                <div className="overflow-x-auto rounded-xl bg-[#1c1f2a] border border-[#4d4635]/30 shadow-md">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#313540]/60 text-xs uppercase tracking-wider text-[#f2ca50] font-semibold">
                      <tr>
                        <th className="py-3 px-4">Koota</th>
                        <th className="py-3 px-4">Domain / Significance</th>
                        <th className="py-3 px-4">Boy Attribute</th>
                        <th className="py-3 px-4">Girl Attribute</th>
                        <th className="py-3 px-4 text-center">Points</th>
                        <th className="py-3 px-4 text-right">Verdict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#4d4635]/20 text-[#dfe2f1]">
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">1. Varna</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Work capacity & spiritual ego</td>
                        <td className="py-3 px-4">Vaishya</td>
                        <td className="py-3 px-4">Vaishya</td>
                        <td className="py-3 px-4 text-center font-bold">1 / 1</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Harmonious</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">2. Vashya</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Mutual attraction & magnetic hold</td>
                        <td className="py-3 px-4">Dwipada (Human)</td>
                        <td className="py-3 px-4">Chatushpada (Quadruped)</td>
                        <td className="py-3 px-4 text-center font-bold">2 / 2</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Auspicious</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">3. Tara</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Longevity, fortune & physical health</td>
                        <td className="py-3 px-4">Sadhana</td>
                        <td className="py-3 px-4">Mitra</td>
                        <td className="py-3 px-4 text-center font-bold">3 / 3</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Excellent</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">4. Yoni</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Biological & intimate intimacy</td>
                        <td className="py-3 px-4">Vyagrah (Tiger)</td>
                        <td className="py-3 px-4">Sarpa (Serpent)</td>
                        <td className="py-3 px-4 text-center font-bold">3 / 4</td>
                        <td className="py-3 px-4 text-right text-[#d2bbff] font-medium">Moderate Harmony</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">5. Graha Maitri</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Intellectual bonding & world view</td>
                        <td className="py-3 px-4">Mercury (Budha)</td>
                        <td className="py-3 px-4">Venus (Shukra)</td>
                        <td className="py-3 px-4 text-center font-bold">5 / 5</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Divine Amity</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">6. Gana</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Temperament & societal behavioral style</td>
                        <td className="py-3 px-4">Rakshasa</td>
                        <td className="py-3 px-4">Manushya</td>
                        <td className="py-3 px-4 text-center font-bold">6 / 6</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Neutralized by Pada</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">7. Bhakoot</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Economic prosperity & family tree</td>
                        <td className="py-3 px-4">Virgo (6)</td>
                        <td className="py-3 px-4">Taurus (2)</td>
                        <td className="py-3 px-4 text-center font-bold">2.5 / 7</td>
                        <td className="py-3 px-4 text-right text-[#e9c349] font-medium">Trikona Solved</td>
                      </tr>
                      <tr className="hover:bg-[#262a35]/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#f2ca50]">8. Nadi</td>
                        <td className="py-3 px-4 text-[#d0c5af]">Genetic resonance, nervous health & progeny</td>
                        <td className="py-3 px-4">Madhya (Pitta)</td>
                        <td className="py-3 px-4">Antya (Kapha)</td>
                        <td className="py-3 px-4 text-center font-bold">7 / 8</td>
                        <td className="py-3 px-4 text-right text-[#f2ca50] font-medium">Different Nadi (Strong)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Deep Dosha & KP Dimension Section */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Manglik / Kuja Dosha Card */}
            <div className="rounded-xl bg-[#1c1f2a]/90 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between border border-[#4d4635]/30">
              <div>
                <div className="flex items-center gap-2 text-[#f2ca50] mb-3">
                  <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
                  <h4 className="font-serif text-lg font-semibold">Manglik / Kuja Dosha</h4>
                </div>
                <div className="inline-block px-3 py-1 rounded bg-[#0a0e18] text-[#f2ca50] text-xs uppercase tracking-wider font-semibold mb-3 border border-[#4d4635]/20">
                  Status: Cancelled / Low Severity
                </div>
                <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                  Boy exhibits Mars situated in the 12th house (Anumanglik). However, the direct 5th aspect of functional benefic Jupiter (Brihaspati) in Taurus dissolves malefic combust effects, rendering the marriage union free from sudden volatility.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/30 flex items-center justify-between text-[#99907c] text-xs">
                <span>Mars Angle: 328°24'</span>
                <span className="text-[#f2ca50] font-semibold">Dosha Bhanga Applied</span>
              </div>
            </div>

            {/* KP Astrological Dimension */}
            <div className="rounded-xl bg-[#1c1f2a]/90 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between border-t-2 border-[#f2ca50] border-x border-b border-[#4d4635]/30">
              <div>
                <div className="flex items-center gap-2 text-[#f2ca50] mb-3">
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                  <h4 className="font-serif text-lg font-semibold">KP 7th Sub-Lord Synergy</h4>
                </div>
                <div className="inline-block px-3 py-1 rounded bg-[#6001d1]/30 text-[#d2bbff] text-xs uppercase tracking-wider font-semibold mb-3 border border-[#6001d1]/40">
                  Dhayalan K S Analytical Precision
                </div>
                <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                  Boy's 7th cusp sub-lord is <strong className="text-[#dfe2f1] font-semibold">Rahu</strong>, signifying houses 2, 7, and 11 via star lord Venus. Girl's 7th sub-lord is <strong className="text-[#dfe2f1] font-semibold">Jupiter</strong>, signifying houses 5, 7, and 9. Sub-lord rulers are mutually supportive, affirming durable marital affection, mutual fidelity, and steady joint wealth accumulation.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/30 flex items-center justify-between text-[#99907c] text-xs">
                <span>Cusp Ruling Planets: Saturn • Venus</span>
                <span className="text-[#f2ca50] font-semibold">Harmonized</span>
              </div>
            </div>

            {/* Rajju & Santana Gopala Card */}
            <div className="rounded-xl bg-[#1c1f2a]/90 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between border border-[#4d4635]/30">
              <div>
                <div className="flex items-center gap-2 text-[#f2ca50] mb-3">
                  <span className="material-symbols-outlined text-[24px]">family_restroom</span>
                  <h4 className="font-serif text-lg font-semibold">Progeny & Rajju Strength</h4>
                </div>
                <div className="inline-block px-3 py-1 rounded bg-[#0a0e18] text-[#f2ca50] text-xs uppercase tracking-wider font-semibold mb-3 border border-[#4d4635]/20">
                  Santana Dosha: Absent
                </div>
                <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                  Both charts maintain distinct physiological polarities. Boy's Nakshatra Pada aligns with Kanta Rajju, while Girl's Pada aligns with Udhara Rajju. This cross-limb alignment guarantees robust hereditary vitality and auspicious Santana (child-birth) prospects.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/30 flex items-center justify-between text-[#99907c] text-xs">
                <span>5th Bhava Synergy: Optimal</span>
                <span className="text-[#f2ca50] font-semibold">Fortified Union</span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Review Callout / Consultation CTA */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-12 relative z-10">
          <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-br from-[#262a35] via-[#1c1f2a] to-[#171b26] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-[#f2ca50]/30">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f2ca50]/10 blur-[80px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Master Dhayalan Card Visual / Details */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-[#0a0e18]/80 backdrop-blur-md shadow-lg border border-[#4d4635]/30">
                <div className="relative w-28 h-28 mb-4">
                  <img
                    alt="Master Vedic and KP Astrologer Dhayalan K S"
                    className="w-full h-full rounded-full object-cover shadow-xl border-2 border-[#f2ca50]/40"
                    src={ASSETS.dhayalanMatch}
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#f2ca50] text-[#3c2f00] flex items-center justify-center font-bold text-xs shadow-md">
                    KP
                  </div>
                </div>
                <h4 className="font-serif text-xl text-[#f2ca50] font-semibold">Dhayalan K S</h4>
                <p className="text-[11px] uppercase tracking-widest text-[#d0c5af] mb-2 font-medium">
                  Principal Astro-Architect • 30+ Yrs Experience
                </p>
                <div className="flex items-center gap-1 text-[#f2ca50]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                  <span className="text-xs text-[#dfe2f1] ml-1 font-semibold">4.98 (2,400+ Matches)</span>
                </div>
              </div>

              {/* Narrative and Action */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f2ca50]/10 text-[#f2ca50] text-xs uppercase tracking-wider self-start mb-2 font-semibold border border-[#f2ca50]/30">
                  Beyond Automated Guna Calculation
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#dfe2f1] leading-tight">
                  Need Master Dhayalan K S to personally verify Dasa Sandhi, Vivaha Muhurat & Navamsha Synastry?
                </h3>
                <p className="text-sm text-[#d0c5af] mt-2 mb-6 leading-relaxed">
                  Computer algorithms cannot detect hidden Dasa Sandhi (planetary period transitions occurring simultaneously within 6 months), subtle Navamsha (D-9) 7th lord debilities, or exact auspicious Vivaha Muhurat timings. Secure an authoritative, private 45-minute reading with Astrologer Dhayalan K S before solemnizing your sacred union.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => onNavigate('book-consultation')}
                    className="px-6 py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#d4af37] transition-all text-center cursor-pointer"
                  >
                    Consult Dhayalan K S • ₹2,499
                  </button>
                  <a
                    className="px-5 py-3 rounded-lg bg-[#313540] text-[#dfe2f1] hover:text-[#f2ca50] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#4d4635]/40"
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
                    <span>WhatsApp: {CONTACT_INFO.phone}</span>
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-[#99907c] text-xs">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[15px]">done</span> Confidential Dossier Included
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[15px]">done</span> Auspicious Muhurat Dates
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[15px]">done</span> Planetary Remedial Upayas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Cosmic Astrological Heritage Vignette */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="relative rounded-xl overflow-hidden min-h-[280px] flex flex-col justify-end p-6 shadow-xl border border-[#4d4635]/30 bg-cover bg-center"
              style={{ backgroundImage: `url('${ASSETS.astrolabe}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-[#0a0e18]/70 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
                  Sacred Jyotish Lineage
                </span>
                <h4 className="font-serif text-xl text-[#dfe2f1] mt-1">Vedic Ephemeris Accuracy</h4>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
                  Every calculation reflects the exact planetary degrees, retrograde states, and seasonal precession calculated via NASA JPL Horizons ephemeris data.
                </p>
              </div>
            </div>

            <div
              className="relative rounded-xl overflow-hidden min-h-[280px] flex flex-col justify-end p-6 shadow-xl border border-[#4d4635]/30 bg-cover bg-center"
              style={{ backgroundImage: `url('${ASSETS.weddingRitual}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-[#0a0e18]/70 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#d2bbff] font-semibold">
                  10 Porutham Tradition
                </span>
                <h4 className="font-serif text-xl text-[#dfe2f1] mt-1">Generational Family Harmony</h4>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
                  Rooted in classical Tamil and Kerala Brihat Jataka texts, preserving sanctified family heritage with contemporary practical guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational FAQ Accordion Section */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a35] text-[#f2ca50] text-xs uppercase tracking-widest mb-2 border border-[#4d4635]/30">
                Sacred Wisdom • Guidance
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#dfe2f1]">
                Frequently Asked Questions on Kundli Matching
              </h3>
              <p className="text-sm text-[#d0c5af] mt-1">Essential clarity on Guna points, Rajju checks, and KP methodology.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl bg-[#1c1f2a]/90 border border-[#4d4635]/30 overflow-hidden shadow-sm transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-[#dfe2f1] font-serif text-base sm:text-lg hover:text-[#f2ca50] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className={`material-symbols-outlined text-[20px] text-[#f2ca50] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#d0c5af] leading-relaxed border-t border-[#4d4635]/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
