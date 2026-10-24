import React, { useState } from 'react';
import { NavPage } from '../types';
import { ASSETS, CONTACT_INFO } from '../constants';

interface AboutViewProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What makes KP (Krishnamurti Padhdhati) astrology different from traditional Vedic astrology?',
      a: 'While traditional Vedic astrology analyzes whole signs and Nakshatras, Krishnamurti Padhdhati divides each constellation into unequal sub-divisions governed by a "Sub-Lord" using Placidus house cusps. This eliminates ambiguity and pinpoints event timings (such as career promotions, marriage, or financial windfalls) to the exact day and month rather than broad multi-year estimates.'
    },
    {
      q: 'How are consultations conducted for clients residing outside India?',
      a: 'Virtual consultations are conducted via high-definition private Google Meet, Zoom, or WhatsApp video call in your preferred time zone (EST, PST, GMT, SGT, AEST, or Gulf Standard). All charts are computed using astronomical coordinates of your exact birth city and converted to local ephemeris with zero distortion.'
    },
    {
      q: 'What if I do not know my exact time of birth?',
      a: 'Astrologer Dhayalan K S specializes in Birth Time Rectification (BTR). By cross-referencing your major life milestone dates (educational graduation, first job, wedding, major health events, sibling births), the ruling planets at the time of your inquiry and retrograde cusps are synchronized to rectify your birth ascendant to the precise second.'
    },
    {
      q: 'Does Dhayalan K S recommend expensive gemstones or commercial pujas?',
      a: 'Never. One of Dhayalan K S’s core ethical vows is zero commercial exploitation. Remedies emphasize Sattvic Vedic mantras, proper mental and physiological disciplines, charitable giving (planetary Dana), and natural untreated beads or affordable astrological substitutes only when truly aligned.'
    }
  ];

  return (
    <div className="flex flex-col w-full relative bg-[#0f131d]">
      {/* Subtle Celestial Ambient Shimmer */}
      <div className="relative w-full overflow-hidden bg-[#0a0e18]">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#f2ca50]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[#6001d1]/10 blur-[140px] pointer-events-none"></div>

        {/* Sacred Sanskrit Ribbon & Lineage Bar */}
        <div className="w-full bg-[#171b26] px-4 sm:px-8 lg:px-14 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[#d0c5af] border-b border-[#4d4635]/30">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse"></span>
            <span className="font-serif text-sm sm:text-base text-[#f2ca50] tracking-wide font-medium">
              ज्योतिषामयनं चक्षुः
            </span>
            <span className="hidden md:inline text-xs text-[#99907c]">
              | "Astrology is the sacred celestial eye of the Vedas"
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
            <span className="text-[#dfe2f1] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#f2ca50] text-sm">verified</span>
              Authentic Vedic & KP Tradition
            </span>
            <span className="hidden sm:inline text-[#99907c]">•</span>
            <span className="hidden sm:inline text-[#d0c5af]">Direct Guru Parampara Heritage</span>
          </div>
        </div>

        {/* Hero / Grand Profile Editorial */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-12 lg:py-20 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Master Portrait with Gilded Celestial Framing */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md">
                {/* Decorative Planetary Orbit Rings (Hairline SVGs) */}
                <div className="absolute -inset-8 -z-10 flex items-center justify-center opacity-40 pointer-events-none">
                  <svg className="w-full h-full text-[#f2ca50]" fill="none" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1" />
                    <circle cx="200" cy="200" opacity="0.6" r="150" stroke="currentColor" strokeWidth="0.75" />
                    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeDasharray="2 6" strokeWidth="0.5" />
                    {/* Zodiac Glyph Accents */}
                    <circle cx="200" cy="10" fill="currentColor" r="3" />
                    <circle cx="390" cy="200" fill="currentColor" r="3" />
                    <circle cx="200" cy="390" fill="currentColor" r="3" />
                    <circle cx="10" cy="200" fill="currentColor" r="3" />
                  </svg>
                </div>

                {/* Sacred Celestial Mandala Emblem Frame */}
                <div className="relative p-2.5 bg-gradient-to-b from-[#f2ca50]/30 via-[#d4af37]/10 to-[#262a35] rounded-full shadow-2xl">
                  <div className="relative rounded-full overflow-hidden bg-[#171b26] aspect-square flex items-center justify-center border border-[#f2ca50]/40">
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center relative select-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#f2ca50]/10 via-[#6001d1]/15 to-transparent"></div>
                      <svg className="w-48 h-48 text-[#f2ca50]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                        <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                        <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="1.5" />
                        {/* 12 House Radiation Lines */}
                        {Array.from({ length: 12 }).map((_, i) => (
                          <line
                            key={i}
                            x1="100"
                            y1="22"
                            x2="100"
                            y2="34"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            transform={`rotate(${i * 30} 100 100)`}
                          />
                        ))}
                        {/* Satkona Sacred Hexagram */}
                        <polygon points="100,42 148,124 52,124" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
                        <polygon points="100,158 148,76 52,76" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
                        <circle cx="100" cy="100" r="28" fill="#0f131d" stroke="currentColor" strokeWidth="1.5" />
                        <text x="100" y="108" fill="#f2ca50" fontSize="24" fontFamily="'Playfair Display', Georgia, serif" textAnchor="middle">
                          ॐ
                        </text>
                      </svg>
                      <span className="font-serif text-sm font-semibold text-[#f2ca50] tracking-wider mt-1 z-10">
                        ASTROBREEZE
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#d0c5af] z-10">
                        Vedic & KP Precision
                      </span>
                    </div>
                  </div>

                  {/* Overlaid Sacred Crest Badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#262a35]/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 whitespace-nowrap border border-[#f2ca50]/30">
                    <span className="material-symbols-outlined text-[#f2ca50] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-bold">
                      Founder • Astro Breeze
                    </span>
                  </div>
                </div>

                {/* Trust Metatags Grid */}
                <div className="mt-8 grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 bg-[#171b26] rounded-lg border border-[#4d4635]/30">
                    <span className="font-serif text-2xl font-bold text-[#f2ca50] block">10+</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#99907c] block mt-0.5">Years Mastery</span>
                  </div>
                  <div className="p-3 bg-[#171b26] rounded-lg border border-[#4d4635]/30">
                    <span className="font-serif text-2xl font-bold text-[#f2ca50] block">18,000+</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#99907c] block mt-0.5">Kundlis Read</span>
                  </div>
                  <div className="p-3 bg-[#171b26] rounded-lg border border-[#4d4635]/30">
                    <span className="font-serif text-2xl font-bold text-[#f2ca50] block">25+</span>
                    <span className="text-[11px] uppercase tracking-wider text-[#99907c] block mt-0.5">Countries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-1.5 text-[#f2ca50]">
                <span className="material-symbols-outlined text-sm">flare</span>
                <span className="text-xs uppercase tracking-widest font-semibold">
                  Vedic Seer & KP Sub-Lord Specialist
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#dfe2f1] leading-tight">
                Astrologer <span className="italic text-[#f2ca50] font-normal">Dhayalan K S</span>
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#d0c5af] font-normal leading-relaxed">
                Bridging Ancient Celestial Blueprints with Mathematical Precision & Transformative Ethical Clarity.
              </p>

              <div className="p-5 sm:p-6 bg-[#171b26] rounded-xl border border-[#4d4635]/30 my-2">
                <p className="text-base sm:text-lg text-[#dfe2f1] leading-relaxed">
                  Dhayalan K S is an esteemed Indian professional astrologer and the visionary founder of Astro Breeze. He has played a pivotal role in bringing the profound and authentic traditions of Vedic and KP astrology to a global audience. With deep-rooted knowledge in traditional mystic sciences complemented by formal academic training, he offers consultations that harmoniously balance deep spirituality with sharp, logical analysis. His accurate predictions, practical remedies, and deeply ethical approach have transformed the lives of thousands of clients worldwide, guiding them through life's most complex challenges.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ca50] text-[#3c2f00] text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-[#d4af37] transition-all"
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Speak With Dhayalan K S
                </a>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#262a35] text-[#dfe2f1] text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-[#313540] border border-[#4d4635]/40 transition-all"
                  href={CONTACT_INFO.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[#25D366] text-base">chat</span>
                  WhatsApp Direct
                </a>
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#f2ca50] text-sm font-semibold uppercase tracking-wider rounded-lg border border-[#f2ca50]/50 hover:bg-[#f2ca50]/10 transition-all"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  Schedule Session
                </button>
              </div>

              {/* Credential Verification Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5 items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1c1f2a] border border-[#4d4635]/30 rounded-full text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-sm">auto_awesome</span> Certified KP Stellar Astrologer
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1c1f2a] border border-[#4d4635]/30 rounded-full text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-sm">menu_book</span> Traditional Gurukula Disciple
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1c1f2a] border border-[#4d4635]/30 rounded-full text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-sm">shield</span> 100% Confidential Private Sessions
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 1: The Journey of Wisdom (Lineage & KP Precision) */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16 bg-[#171b26] border-t border-b border-[#4d4635]/30">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
              Sacred Pedigree & Evolution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1]">The Journey of Wisdom</h2>
            <p className="text-sm sm:text-base text-[#d0c5af]">
              From centuries-old Gurukula teachings to contemporary Krishnamurti Padhdhati mathematical computations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Card 1 */}
            <div className="p-6 bg-[#1c1f2a] rounded-xl flex flex-col gap-3 transition-transform hover:-translate-y-1 border border-[#4d4635]/20 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                <span className="material-symbols-outlined text-2xl">account_balance</span>
              </div>
              <h3 className="font-serif text-xl text-[#dfe2f1] font-semibold">Gurukula Lineage</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Initiated in the sacred oral tradition of South Indian Vedic Jyotish under revered masters. Mastered classical treatises including Brihat Parashara Hora Shastra, Jaimini Sutras, and Saravali.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-xs uppercase tracking-wider text-[#f2ca50] font-bold">Foundational Roots</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#1c1f2a] rounded-xl flex flex-col gap-3 transition-transform hover:-translate-y-1 border border-[#4d4635]/20 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                <span className="material-symbols-outlined text-2xl">calculate</span>
              </div>
              <h3 className="font-serif text-xl text-[#dfe2f1] font-semibold">KP System Specialization</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Exhaustive research into Krishnamurti Padhdhati (KP) Astrology, focusing on Placidus house division, Sub-Lord timing, and Ruling Planets for pinpoint event verification to exact dates.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-xs uppercase tracking-wider text-[#f2ca50] font-bold">Analytical Rigor</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#1c1f2a] rounded-xl flex flex-col gap-3 transition-transform hover:-translate-y-1 border border-[#4d4635]/20 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50]">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="font-serif text-xl text-[#dfe2f1] font-semibold">Scholarly Modern Blend</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Formal academic acumen combined with systematic planetary degree charting. Every consultation functions as an architectural diagnostic rather than superstitious guesswork.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-xs uppercase tracking-wider text-[#f2ca50] font-bold">Modern Executive Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Guiding Philosophy & Ethics */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Uncompromising Principles</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1]">Guiding Philosophy & Sacred Ethics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-4 border border-[#4d4635]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#f2ca50] font-bold">01 / PILLAR</span>
                <span className="material-symbols-outlined text-[#f2ca50] text-2xl">favorite</span>
              </div>
              <h3 className="font-serif text-2xl text-[#dfe2f1]">No Fear-Based Predictions</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Destiny is not a weapon of intimidation. Dhayalan K S vehemently opposes the fear-mongering prevalent in commercial astrology. Complex planetary placements (Shani Sade Sati, Manglik, Rahu-Ketu nodes) are decoded with compassionate realism and empowering spiritual guidance.
              </p>
              <div className="pt-2 text-xs text-[#dfe2f1] italic border-t border-[#4d4635]/20">
                "Truth delivered with grace liberates the spirit."
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-4 border border-[#4d4635]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#f2ca50] font-bold">02 / PILLAR</span>
                <span className="material-symbols-outlined text-[#f2ca50] text-2xl">architecture</span>
              </div>
              <h3 className="font-serif text-2xl text-[#dfe2f1]">Scientific & Logical Rigor</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                No nebulous generalities. Each chart analysis involves micro-degree calculations, cusp sub-lord examinations, Dasha-Bhukti-Antara timeline intersections, and transit synastry to formulate unmistakable clarity for major life pivot points.
              </p>
              <div className="pt-2 text-xs text-[#dfe2f1] italic border-t border-[#4d4635]/20">
                "Mathematical precision meets celestial law."
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-4 border border-[#4d4635]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#f2ca50] font-bold">03 / PILLAR</span>
                <span className="material-symbols-outlined text-[#f2ca50] text-2xl">spa</span>
              </div>
              <h3 className="font-serif text-2xl text-[#dfe2f1]">Practical, Cost-Effective Remedies</h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                Never will a client be pressured into exorbitant rituals or artificial gemstones. Remedies focus on Sattvic Vedic mantras, authentic natural Rudraksha beads, behavioral adjustments, planetary dana (charity), and harmonious environmental modifications.
              </p>
              <div className="pt-2 text-xs text-[#dfe2f1] italic border-t border-[#4d4635]/20">
                "True remedies purify karma, not wallets."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Areas of Mastery (Bento Grid) */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16 bg-[#0a0e18] border-t border-b border-[#4d4635]/30">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Consultative Domains</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1]">Areas of Astrological Mastery</h2>
            <p className="text-sm sm:text-base text-[#d0c5af]">
              Targeted consultations resolving karmic blockages and synchronizing timing with planetary cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Domain 1 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-3 group hover:bg-[#1c1f2a] transition-all border border-[#4d4635]/20 shadow-md">
              <span className="material-symbols-outlined text-[#f2ca50] text-3xl">favorite_border</span>
              <h4 className="font-serif text-xl text-[#dfe2f1] font-medium">Love & Marriage Harmony</h4>
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                In-depth 36-Kuta Porutham matching, KP 7th House Sub-Lord analysis, resolving delayed marital timelines, and resolving toxic communication patterns.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-[11px] uppercase tracking-wider text-[#f2ca50] font-semibold">Porutham & Vivaha</span>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-3 group hover:bg-[#1c1f2a] transition-all border border-[#4d4635]/20 shadow-md">
              <span className="material-symbols-outlined text-[#f2ca50] text-3xl">trending_up</span>
              <h4 className="font-serif text-xl text-[#dfe2f1] font-medium">Financial & Career Turnaround</h4>
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                Strategic analysis of Dhana Yogas, 2nd, 6th, 10th & 11th houses. Advising corporate restructuring, partnership compatibility, and opportune venture timing.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-[11px] uppercase tracking-wider text-[#f2ca50] font-semibold">Dhana & Artha Yogas</span>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-3 group hover:bg-[#1c1f2a] transition-all border border-[#4d4635]/20 shadow-md">
              <span className="material-symbols-outlined text-[#f2ca50] text-3xl">child_care</span>
              <h4 className="font-serif text-xl text-[#dfe2f1] font-medium">Progeny Delays & Santana</h4>
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                Thorough evaluation of the 5th House, Saptamsha (D-7) divisional charts, Beeja/Kshetra Sphuta, and dedicated Santana Gopala planetary remediation.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-[11px] uppercase tracking-wider text-[#f2ca50] font-semibold">Santana Gopala Rites</span>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="p-6 bg-[#171b26] rounded-xl flex flex-col gap-3 group hover:bg-[#1c1f2a] transition-all border border-[#4d4635]/20 shadow-md">
              <span className="material-symbols-outlined text-[#f2ca50] text-3xl">shield_moon</span>
              <h4 className="font-serif text-xl text-[#dfe2f1] font-medium">Spiritual Energy Shields</h4>
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                Diagnosis of lingering Drishti (evil eye), planetary afflictions, Pitru Dosha, and personalized energized Kavachas for psychological and psychic protection.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-[11px] uppercase tracking-wider text-[#f2ca50] font-semibold">Dosha Nivarana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Global Footprint & International Reach */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16 bg-[#171b26]">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Universal Guidance</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1]">Global Reach & Diaspora Trust</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#d0c5af] max-w-md">
              Providing remote audio/video consultations and handwritten Vedic dossiers to spiritual seekers and corporate leaders worldwide across major time zones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 pt-2">
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇮🇳</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">India</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Pan-National</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇺🇸</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">USA</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">EST / PST / CST</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇬🇧</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">UK</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">GMT / BST</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇦🇪</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">UAE</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Dubai & Gulf</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇸🇬</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">Singapore</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">SGT</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg border border-[#4d4635]/20">
              <span className="text-2xl block">🇲🇾</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">Malaysia</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">MYT</span>
            </div>
            <div className="p-4 bg-[#1c1f2a] text-center rounded-lg col-span-2 sm:col-span-1 border border-[#4d4635]/20">
              <span className="text-2xl block">🇦🇺</span>
              <span className="text-sm text-[#dfe2f1] font-medium block mt-1.5">Australia</span>
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">AEST</span>
            </div>
          </div>

          {/* Verified Testimonial Snippet */}
          <div className="mt-4 p-6 bg-[#1c1f2a] rounded-xl flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border border-[#4d4635]/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#dfe2f1] italic leading-relaxed">
                  "Dhayalan ji's prediction regarding my business expansion overseas aligned to the exact week in our KP chart analysis. His sattvic remedy brought immense peace without empty promises."
                </p>
                <span className="text-xs text-[#f2ca50] uppercase tracking-wider block mt-1.5 font-semibold">
                  — Rajesh V., Tech Executive, Silicon Valley / Chennai
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#f2ca50] flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full px-4 sm:px-8 lg:px-14 py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">Clarity & Trust</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#dfe2f1] mt-1">Frequently Asked Questions</h2>
            <p className="text-sm text-[#d0c5af] mt-2">Everything you need to know about preparing for your astrological reading.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-[#171b26] border border-[#4d4635]/30 overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-[#dfe2f1] font-serif text-lg hover:text-[#f2ca50] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`material-symbols-outlined text-xl text-[#f2ca50] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#d0c5af] leading-relaxed border-t border-[#4d4635]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-6 p-8 rounded-2xl bg-gradient-to-r from-[#1c1f2a] via-[#262a35] to-[#1c1f2a] border border-[#f2ca50]/30 text-center flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-[#f2ca50] text-3xl">wb_twilight</span>
            <h3 className="font-serif text-2xl text-[#dfe2f1]">Ready to Decrypt Your Karmic Blueprint?</h3>
            <p className="text-sm text-[#d0c5af] max-w-xl">
              Book a private session directly with Astrologer Dhayalan K S or speak immediately via phone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('book-consultation')}
                className="px-6 py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] text-sm font-bold uppercase tracking-wider hover:bg-[#d4af37] transition-all shadow-md"
              >
                Schedule Sacred Session
              </button>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="px-6 py-3 rounded-lg bg-[#0f131d] text-[#dfe2f1] text-sm font-semibold uppercase tracking-wider hover:text-[#f2ca50] border border-[#4d4635]/40 transition-all"
              >
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
