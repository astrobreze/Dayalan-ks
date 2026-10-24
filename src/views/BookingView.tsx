import React, { useState } from 'react';
import { NavPage, SessionTier, BookingFormData } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';

interface BookingViewProps {
  onNavigate: (page: NavPage) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onNavigate }) => {
  const [selectedTier, setSelectedTier] = useState<SessionTier>('comprehensive');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    gender: 'male',
    phone: '',
    email: '',
    dob: '',
    birthTime: '',
    isBirthTimeApprox: false,
    birthPlace: '',
    concern: 'comprehensive',
    notes: '',
    sessionTier: 'comprehensive'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectTier = (tier: SessionTier) => {
    setSelectedTier(tier);
    setFormData((prev) => ({ ...prev, sessionTier: tier }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full relative bg-[#0f131d]">
      {/* Urgent Helpline Notification Banner */}
      <section className="w-full bg-[#171b26]/90 backdrop-blur-md px-4 sm:px-8 lg:px-14 py-2.5 border-b border-[#4d4635]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="material-symbols-outlined text-[#f2ca50] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#dfe2f1]">
              <span className="text-[#f2ca50] font-semibold">Instant Assistance & Urgent Consultations:</span> Call / WhatsApp{' '}
              <a
                className="text-[#f2ca50] hover:underline font-bold"
                href={`tel:${CONTACT_INFO.phoneClean}`}
              >
                {CONTACT_INFO.phone}
              </a>
              <span className="text-[#99907c] mx-2 hidden sm:inline">|</span>
              <a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ca50]/10 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold border border-[#f2ca50]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse"></span>
              Same-Day Slots Active
            </span>
          </div>
        </div>
      </section>

      {/* Confirmation Banner if Submitted */}
      {submitted && (
        <div className="w-full bg-[#1c1f2a] border-b-2 border-[#f2ca50] px-4 sm:px-8 lg:px-14 py-6">
          <div className="max-w-4xl mx-auto bg-[#171b26] p-6 rounded-xl border border-[#f2ca50]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50] text-4xl">check_circle</span>
              <div>
                <h3 className="font-serif text-xl text-[#dfe2f1] font-semibold">
                  Sacred Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
                  Namaste {formData.fullName || 'Seeker'}. Astrologer Dhayalan K S’s office will contact you on WhatsApp / Phone ({formData.phone || CONTACT_INFO.phone}) within 2 hours to confirm your {selectedTier.toUpperCase()} session time.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-[#262a35] text-[#f2ca50] hover:bg-[#313540] text-xs uppercase tracking-wider rounded-lg font-semibold border border-[#f2ca50]/30 transition-all whitespace-nowrap cursor-pointer"
            >
              Modify Details
            </button>
          </div>
        </div>
      )}

      {/* Title & Sacred Context Narrative */}
      <section className="w-full px-4 sm:px-8 lg:px-14 pt-8 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              <span>Astrological Sanctuary & Karmic Cartography</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#f2ca50] font-medium tracking-tight">
              Schedule Your Sacred Consultation
            </h1>
            <p className="text-sm sm:text-base text-[#d0c5af]">
              Enter precise natal coordinates to unlock profound Vedic, KP, and Nakshatra sub-lord revelations personally calculated and interpreted by Astrologer Dhayalan K S.
            </p>
          </div>

          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-4 bg-[#1c1f2a] px-5 py-3 rounded-xl border border-[#4d4635]/30">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#f2ca50] text-2xl">verified_user</span>
              <div className="flex flex-col">
                <span className="text-xs text-[#dfe2f1] uppercase tracking-wider font-semibold">100% Confidential</span>
                <span className="text-[11px] text-[#99907c]">Karmic Non-Disclosure</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#353944]"></div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#f2ca50] text-2xl">military_tech</span>
              <div className="flex flex-col">
                <span className="text-xs text-[#dfe2f1] uppercase tracking-wider font-semibold">25+ Years Legacy</span>
                <span className="text-[11px] text-[#99907c]">KP System Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split Booking Matrix */}
      <section className="w-full px-4 sm:px-8 lg:px-14 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Sacred Natal Details Form (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#1c1f2a] p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden border border-[#4d4635]/30">
              {/* Subtle Decorative Astrological Mandala Background SVG */}
              <div className="absolute -right-16 -top-16 w-64 h-64 pointer-events-none opacity-5 text-[#f2ca50]">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="0.75" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48"></circle>
                  <circle cx="50" cy="50" r="36"></circle>
                  <circle cx="50" cy="50" r="24"></circle>
                  <polygon points="50,2 62,38 98,50 62,62 50,98 38,62 2,50 38,38"></polygon>
                  <line x1="0" x2="100" y1="50" y2="50"></line>
                  <line x1="50" x2="50" y1="0" y2="100"></line>
                </svg>
              </div>

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#4d4635]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f2ca50]"></span>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#dfe2f1] font-semibold">
                    Step 1: Natal Chart Coordinates
                  </h2>
                </div>
                <span className="text-xs text-[#f2ca50] uppercase tracking-widest font-semibold">
                  Required for Lagna & KP
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#d0c5af] flex items-center justify-between font-semibold" htmlFor="fullName">
                    <span>Full Name of Seeker *</span>
                    <span className="text-[11px] text-[#99907c] font-normal">As on birth records</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                      person
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm placeholder:text-[#99907c] focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. Senthil Kumar Rajan"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Gender & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold" htmlFor="gender">
                      Gender *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                        transgender
                      </span>
                      <select
                        className="w-full pl-11 pr-8 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Non-Binary / Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#99907c] pointer-events-none text-base">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-7 flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold" htmlFor="phone">
                      WhatsApp / Contact Number *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                        call
                      </span>
                      <input
                        className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm placeholder:text-[#99907c] focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#d0c5af] flex items-center justify-between font-semibold" htmlFor="email">
                    <span>Email Address *</span>
                    <span className="text-[11px] text-[#99907c] font-normal">Diagnostic report & charts sent here</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                      mail
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm placeholder:text-[#99907c] focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                      id="email"
                      name="email"
                      placeholder="seeker.horoscope@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Date of Birth & Exact Time of Birth */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold" htmlFor="dob">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                        calendar_today
                      </span>
                      <input
                        className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                        id="dob"
                        name="dob"
                        required
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#d0c5af] flex items-center justify-between font-semibold" htmlFor="birthTime">
                      <span>Exact Time of Birth</span>
                      <span className="text-[11px] text-[#f2ca50]">Critical for KP</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                        schedule
                      </span>
                      <input
                        className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                        id="birthTime"
                        name="birthTime"
                        type="time"
                        value={formData.birthTime}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Time Unknown Rectification Option */}
                <div className="flex items-center gap-3 bg-[#171b26] p-3 rounded-lg border border-[#4d4635]/20">
                  <input
                    checked={formData.isBirthTimeApprox}
                    className="w-4 h-4 rounded text-[#f2ca50] focus:ring-[#f2ca50] bg-[#0a0e18] border-0"
                    id="isBirthTimeApprox"
                    name="isBirthTimeApprox"
                    type="checkbox"
                    onChange={handleInputChange}
                  />
                  <label className="text-xs text-[#dfe2f1] cursor-pointer select-none" htmlFor="isBirthTimeApprox">
                    Exact time uncertain? Request <span className="text-[#f2ca50] font-semibold">KP Birth Time Rectification (BTR)</span> through past event milestone cross-referencing.
                  </label>
                </div>

                {/* Place of Birth */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#d0c5af] flex items-center justify-between font-semibold" htmlFor="birthPlace">
                    <span>Place of Birth (City, State, Country) *</span>
                    <span className="text-[11px] text-[#99907c] font-normal">For Geo-Coordinates Calculation</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                      location_on
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm placeholder:text-[#99907c] focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                      id="birthPlace"
                      name="birthPlace"
                      placeholder="e.g. Madurai, Tamil Nadu, India"
                      required
                      type="text"
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Primary Concern Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold" htmlFor="concern">
                    Primary Domain of Inquiry *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99907c] text-lg">
                      psychology_alt
                    </span>
                    <select
                      className="w-full pl-11 pr-8 py-3 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                      id="concern"
                      name="concern"
                      required
                      value={formData.concern}
                      onChange={handleInputChange}
                    >
                      <option value="love">Love & Relationship Harmony / Rekindling Bonds</option>
                      <option value="marriage">Marriage Compatibility, Porutham & Delay Solutions</option>
                      <option value="career">Career Elevation, Business Breakthroughs & Wealth Prospects</option>
                      <option value="progeny">Child Birth / Santana Gopala Progeny Alignment</option>
                      <option value="remedies">Black Magic, Evil Eye & Severe Dosha Clearing</option>
                      <option value="comprehensive">Comprehensive 12-House Life Horoscope & Dasha Timeline</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#99907c] pointer-events-none text-base">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Specific Questions / Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#d0c5af] flex items-center justify-between font-semibold" htmlFor="notes">
                    <span>Specific Questions & Karmic Context (Optional)</span>
                    <span className="text-[11px] text-[#99907c] font-normal">Max 3 Specific Queries</span>
                  </label>
                  <textarea
                    className="w-full p-3.5 rounded-lg bg-[#0a0e18] text-[#dfe2f1] text-sm placeholder:text-[#99907c] focus:outline-none focus:ring-1 focus:ring-[#f2ca50] border border-[#4d4635]/30"
                    id="notes"
                    name="notes"
                    placeholder="Detail specific life events, dates of marital turbulence, career transitions, or recurring energetic obstacles you wish Dhayalan K S to address..."
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    className="w-full py-4 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    type="submit"
                  >
                    <span>Lock In Cosmic Consultation</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="text-center text-[11px] text-[#99907c] mt-2">
                    No payment is charged right now. You will confirm your consultation slot in Step 2.
                  </p>
                </div>
              </form>
            </div>

            {/* Astrological Integrity Guarantee Card */}
            <div className="bg-[#171b26] p-5 rounded-xl flex items-start gap-3.5 border border-[#4d4635]/30">
              <span className="material-symbols-outlined text-[#f2ca50] text-2xl flex-shrink-0 mt-0.5">lock</span>
              <div className="space-y-1">
                <h4 className="font-serif text-base text-[#dfe2f1] font-semibold">Sacred Trust & Data Sanctity</h4>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  Your natal information, planetary house positions, and personal correspondence are guarded with supreme spiritual confidentiality. No data is shared with third parties or stored beyond your bespoke astrological cycle reading.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Consultation Options & Master Astrologer Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Header for Options */}
            <div className="bg-[#1c1f2a] p-6 rounded-xl space-y-4 border border-[#4d4635]/30">
              <div className="flex items-center justify-between pb-2 border-b border-[#4d4635]/20">
                <h2 className="font-serif text-xl text-[#dfe2f1] font-semibold">Step 2: Choose Session Tier</h2>
                <span className="text-[11px] bg-[#f2ca50]/15 text-[#f2ca50] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold border border-[#f2ca50]/30">
                  Custom Formats
                </span>
              </div>

              {/* OPTION A: Express Phone Consultation */}
              <div
                onClick={() => handleSelectTier('express')}
                className={`cursor-pointer p-5 rounded-xl transition-all relative overflow-hidden border ${
                  selectedTier === 'express'
                    ? 'bg-[#262a35] border-[#f2ca50] shadow-lg ring-1 ring-[#f2ca50]'
                    : 'bg-[#0a0e18] border-[#4d4635]/30 hover:bg-[#171b26]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[#e9c349] text-xs uppercase tracking-widest font-bold">
                      <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                      <span>Option A · Express Session</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#dfe2f1] font-medium">
                      WhatsApp / Phone Audio Reading
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-[#f2ca50] block">30 Mins</span>
                    <span className="text-[11px] text-[#99907c]">₹1,499</span>
                  </div>
                </div>
                <p className="text-xs text-[#d0c5af] mt-2 mb-3 leading-relaxed">
                  Rapid laser-clarity for urgent dilemmas. Focused directly on 1 to 2 critical burning life queries with immediate KP planetary timing predictions.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#4d4635]/20 text-[#99907c] text-xs">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#f2ca50]">check_circle</span> Direct call with Dhayalan
                  </span>
                  <span className={`uppercase tracking-wider font-bold ${selectedTier === 'express' ? 'text-[#f2ca50]' : 'text-[#99907c]'}`}>
                    {selectedTier === 'express' ? 'Selected ✓' : 'Select Tier'}
                  </span>
                </div>
              </div>

              {/* OPTION B: Comprehensive Video Reading (FEATURED / HIGH ACCENT) */}
              <div
                onClick={() => handleSelectTier('comprehensive')}
                className={`cursor-pointer p-5 rounded-xl shadow-xl relative overflow-hidden transition-all border ${
                  selectedTier === 'comprehensive'
                    ? 'bg-[#262a35] border-[#f2ca50] ring-2 ring-[#f2ca50]'
                    : 'bg-[#171b26] border-[#4d4635]/40 hover:bg-[#262a35]'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f2ca50] via-[#e9c349] to-[#6001d1]"></div>
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[#f2ca50] text-xs uppercase tracking-widest font-bold">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span>Option B · Signature Experience</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#f2ca50] font-semibold">
                      Comprehensive 1-on-1 Video Session
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#f2ca50] block">60 Mins</span>
                    <span className="text-xs text-[#dfe2f1] font-semibold">₹2,499</span>
                  </div>
                </div>
                <p className="text-xs text-[#dfe2f1] mt-2 mb-3 leading-relaxed">
                  The flagship deep-dive reading. Complete Kundli analysis across all 12 Bhavas, KP Cuspal Sub-Lord roadmapping, upcoming Mahadasha-Antardasha cycles, and powerful Vedic remediation remedies.
                </p>
                <ul className="space-y-1.5 text-xs text-[#d0c5af] mb-4">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#f2ca50]">done_all</span> Full Janam Kundli & Navamsha (D9) Chart
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#f2ca50]">done_all</span> Video Session Recording Included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#f2ca50]">done_all</span> Gemstone, Yantra & Mantra Prescriptions
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-2 border-t border-[#4d4635]/30 text-xs">
                  <span className="text-[#e9c349] font-medium">Most Popular for Life Turning Points</span>
                  <span className={`uppercase tracking-wider font-bold ${selectedTier === 'comprehensive' ? 'text-[#f2ca50]' : 'text-[#99907c]'}`}>
                    {selectedTier === 'comprehensive' ? 'Selected ✓' : 'Select Tier'}
                  </span>
                </div>
              </div>

              {/* OPTION C: Written Diagnostic Horoscope Dossier */}
              <div
                onClick={() => handleSelectTier('dossier')}
                className={`cursor-pointer p-5 rounded-xl transition-all relative overflow-hidden border ${
                  selectedTier === 'dossier'
                    ? 'bg-[#262a35] border-[#d2bbff] shadow-lg ring-1 ring-[#d2bbff]'
                    : 'bg-[#0a0e18] border-[#4d4635]/30 hover:bg-[#171b26]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[#d2bbff] text-xs uppercase tracking-widest font-semibold">
                      <span className="material-symbols-outlined text-sm">history_edu</span>
                      <span>Option C · Written Report</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#dfe2f1] font-medium">
                      Diagnostic Kundli Report + Audio Memo
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-[#d2bbff] block">24h Turnaround</span>
                    <span className="text-[11px] text-[#99907c]">₹1,999</span>
                  </div>
                </div>
                <p className="text-xs text-[#d0c5af] mt-2 mb-3 leading-relaxed">
                  Detailed written astrological manuscript delivered directly to your inbox with a personalized 10-minute voice breakdown explaining key chart vectors.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#4d4635]/20 text-[#99907c] text-xs">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#f2ca50]">mark_email_read</span> Sent via Email
                  </span>
                  <span className={`uppercase tracking-wider font-bold ${selectedTier === 'dossier' ? 'text-[#d2bbff]' : 'text-[#99907c]'}`}>
                    {selectedTier === 'dossier' ? 'Selected ✓' : 'Select Tier'}
                  </span>
                </div>
              </div>
            </div>

            {/* Astrologer Profile & Credential Authority Card */}
            <div className="bg-[#1c1f2a] p-5 rounded-xl space-y-3 border border-[#4d4635]/30">
              <div className="flex items-center gap-3.5">
                <img
                  alt="Vedic and KP astrologer Dhayalan K S"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md border-2 border-[#f2ca50]/40"
                  src={ASSETS.dhayalanAuthority}
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif text-lg text-[#dfe2f1] font-semibold">Dhayalan K S</h4>
                    <span className="material-symbols-outlined text-[#f2ca50] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                  </div>
                  <p className="text-xs text-[#f2ca50] uppercase tracking-widest font-semibold">Master Astrologer & Founder</p>
                  <p className="text-xs text-[#d0c5af]">Vedic Astrology & KP Authority</p>
                </div>
              </div>
              <p className="text-xs text-[#d0cecb] italic leading-relaxed">
                "Planets impel; they do not compel. Through precise mathematical sub-lord divisions and sacred remedial alignment, every soul can discover and elevate their karmic path."
              </p>
              {/* Verified Attributes Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="bg-[#0a0e18] p-2.5 rounded-lg border border-[#4d4635]/20">
                  <span className="font-serif text-lg font-bold text-[#f2ca50] block leading-none">15,000+</span>
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block mt-1">Charts Decoded</span>
                </div>
                <div className="bg-[#0a0e18] p-2.5 rounded-lg border border-[#4d4635]/20">
                  <span className="font-serif text-lg font-bold text-[#f2ca50] block leading-none">98.4%</span>
                  <span className="text-[10px] text-[#99907c] uppercase tracking-wider block mt-1">Client Accuracy</span>
                </div>
              </div>
            </div>

            {/* Payment Facilities Supported */}
            <div className="bg-[#171b26] p-5 rounded-xl space-y-2 border border-[#4d4635]/30">
              <span className="text-xs uppercase tracking-wider text-[#99907c] font-semibold block">
                Seamless & Secured Global Transactions
              </span>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#dfe2f1] font-medium border border-[#4d4635]/20">UPI / GPay</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#dfe2f1] font-medium border border-[#4d4635]/20">PhonePe</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#dfe2f1] font-medium border border-[#4d4635]/20">Paytm</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#dfe2f1] font-medium border border-[#4d4635]/20">All Bank Cards</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#dfe2f1] font-medium border border-[#4d4635]/20">NetBanking</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#f2ca50] font-medium border border-[#f2ca50]/30">PayPal (Global)</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1f2a] text-xs text-[#f2ca50] font-medium border border-[#f2ca50]/30">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
