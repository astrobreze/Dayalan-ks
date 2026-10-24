import React, { useState } from 'react';

interface RasiBox {
  id: number;
  rashi: string;
  tamil: string;
  sign: string;
  planets: string[];
  houseFromLagna: number;
  significance: string;
  isLagna?: boolean;
}

const SOUTH_INDIAN_HOUSES: Record<number, RasiBox> = {
  // Clockwise order starting top-left corner
  12: { id: 12, rashi: 'Meena', tamil: 'மீனம்', sign: 'Pisces', planets: ['Chandra ☽', 'Guru ♃'], houseFromLagna: 7, significance: '7th House (Kalatra): Marriage partner, intimacy, trade partnerships & diplomatic harmony' },
  1:  { id: 1,  rashi: 'Mesha', tamil: 'மேஷம்', sign: 'Aries', planets: ['Surya ☉ (Ucha)'], houseFromLagna: 8, significance: '8th House (Ayur): Longevity, occult mysteries, transformation, unexpected fortune' },
  2:  { id: 2,  rashi: 'Vrishabha', tamil: 'ரிஷபம்', sign: 'Taurus', planets: ['Shukra ♀ (Swakshetra)'], houseFromLagna: 9, significance: '9th House (Bhagya): Divine fortune, Guru blessings, righteous dharma & pilgrimages' },
  3:  { id: 3,  rashi: 'Mithuna', tamil: 'மிதுனம்', sign: 'Gemini', planets: ['Rahu ☊'], houseFromLagna: 10, significance: '10th House (Karma): Professional zenith, executive authority, legacy & public fame' },
  4:  { id: 4,  rashi: 'Karka', tamil: 'கடகம்', sign: 'Cancer', planets: ['Guru ♃ (Exalted)'], houseFromLagna: 11, significance: '11th House (Labha): Fulfillment of all aspirations, corporate gains & network profits' },
  5:  { id: 5,  rashi: 'Simha', tamil: 'சிம்மம்', sign: 'Leo', planets: ['Surya ☉'], houseFromLagna: 12, significance: '12th House (Moksha): Spiritual liberation, international travel, divine sleep & charity' },
  6:  { id: 6,  rashi: 'Kanya', tamil: 'கன்னி', sign: 'Virgo', planets: ['Budha ☿', 'Lagna / Asc'], houseFromLagna: 1, significance: '1st House (Lagna): Self-realization, vitality, physical constitution & auspicious beginnings', isLagna: true },
  7:  { id: 7,  rashi: 'Tula', tamil: 'துலாம்', sign: 'Libra', planets: ['Shani ♄ (Exalted)', 'Ketu ☋'], houseFromLagna: 2, significance: '2nd House (Dhana): Liquid wealth, speech articulation, family heritage & assets' },
  8:  { id: 8,  rashi: 'Vrischika', tamil: 'விருச்சிகம்', sign: 'Scorpio', planets: ['Mangala ♂'], houseFromLagna: 3, significance: '3rd House (Sahaja): Valor, younger siblings, artistic prowess & enterprising drive' },
  9:  { id: 9,  rashi: 'Dhanus', tamil: 'தனுசு', sign: 'Sagittarius', planets: ['Guru ♃'], houseFromLagna: 4, significance: '4th House (Sukha): Domestic bliss, maternal grace, landed estates & mental serenity' },
  10: { id: 10, rashi: 'Makara', tamil: 'மகரம்', sign: 'Capricorn', planets: ['Mangala ♂ (Exalted)'], houseFromLagna: 5, significance: '5th House (Purva Punya): Progeny fortune, spiritual intuition, intelligence & creativity' },
  11: { id: 11, rashi: 'Kumbha', tamil: 'கும்பம்', sign: 'Aquarius', planets: ['Shani ♄'], houseFromLagna: 6, significance: '6th House (Shatru/Rina): Defeat of adversaries, healing, overcoming debt & daily service' },
};

export const KundliChartSVG: React.FC = () => {
  const [activeSignId, setActiveSignId] = useState<number>(6); // Default to Lagna (Kanya)
  const [chartMode, setChartMode] = useState<'south' | 'north'>('south');

  const selected = SOUTH_INDIAN_HOUSES[activeSignId] || SOUTH_INDIAN_HOUSES[6];

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Chart Style Toggle Header */}
      <div className="w-full max-w-[400px] flex items-center justify-between px-1">
        <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse"></span>
          {chartMode === 'south' ? 'South Indian Rasi Chart (தென் இந்திய முறை)' : 'North Indian Diamond Kundli'}
        </span>
        <button
          onClick={() => setChartMode(chartMode === 'south' ? 'north' : 'south')}
          className="text-[11px] uppercase tracking-wider text-[#d0c5af] hover:text-[#f2ca50] bg-[#1c1f2a] px-2.5 py-1 rounded border border-[#313540] transition-colors cursor-pointer"
        >
          Switch to {chartMode === 'south' ? 'North Indian' : 'South Indian'}
        </button>
      </div>

      <div className="relative w-full max-w-[400px] aspect-square p-3 sm:p-4 rounded-2xl bg-[#0a0e18] shadow-2xl border border-[#313540] flex items-center justify-center">
        {chartMode === 'south' ? (
          /* AUTHENTIC SOUTH INDIAN 4x4 RASI CHAKRA SVG */
          <svg 
            className="w-full h-full text-[#f2ca50] select-none" 
            fill="none" 
            viewBox="0 0 400 400" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Grid Lines (4x4) */}
            <rect height="380" stroke="#4d4635" strokeOpacity="0.8" strokeWidth="2" width="380" x="10" y="10" rx="4" />
            
            {/* Vertical Inner Dividers */}
            <line stroke="#4d4635" strokeWidth="1.5" x1="105" x2="105" y1="10" y2="390" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="200" x2="200" y1="10" y2="105" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="200" x2="200" y1="295" y2="390" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="295" x2="295" y1="10" y2="390" />
            
            {/* Horizontal Inner Dividers */}
            <line stroke="#4d4635" strokeWidth="1.5" x1="10" x2="390" y1="105" y2="105" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="10" x2="105" y1="200" y2="200" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="295" x2="390" y1="200" y2="200" />
            <line stroke="#4d4635" strokeWidth="1.5" x1="10" x2="390" y1="295" y2="295" />

            {/* Central Hollow 2x2 Square for Rasi Details */}
            <rect fill="#171b26" height="190" stroke="#f2ca50" strokeDasharray="4 2" strokeOpacity="0.4" strokeWidth="1" width="190" x="105" y="105" rx="2" />
            <g className="pointer-events-none select-none">
              <circle cx="200" cy="200" fill="#0f131d" r="38" stroke="#f2ca50" strokeWidth="1.5" />
              <text fill="#f2ca50" fontFamily="'Playfair Display', Georgia, serif" fontSize="24" textAnchor="middle" x="200" y="208">
                ॐ
              </text>
              <text fill="#f2ca50" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="middle" x="200" y="145">
                SOUTH INDIAN
              </text>
              <text fill="#dfe2f1" fontFamily="'Playfair Display', Georgia, serif" fontSize="13" fontWeight="600" textAnchor="middle" x="200" y="162">
                ராசி சக்கரம் (Rasi)
              </text>
              <text fill="#d0c5af" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" textAnchor="middle" x="200" y="252">
                Lagna: Kanya (கன்னி)
              </text>
              <text fill="#e9c349" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="600" textAnchor="middle" x="200" y="268">
                KP Sub-Lord Synced
              </text>
            </g>

            {/* 12 RASI BOXES IN CLOCKWISE ORDER */}

            {/* 1. Row 0, Col 0: Pisces (Meena) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(12)}>
              <rect fill={activeSignId === 12 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 12 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 12 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="10" y="10" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="16" y="26">Meena (மீனம்)</text>
              <text fill="#d0c5af" fontSize="9" x="16" y="42">Pisces</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="16" y="62">Chandra ☽</text>
              <text fill="#d2bbff" fontSize="9" x="16" y="78">Guru ♃</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="100" y="98">7th H</text>
            </g>

            {/* 2. Row 0, Col 1: Aries (Mesha) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(1)}>
              <rect fill={activeSignId === 1 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 1 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 1 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="105" y="10" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="111" y="26">Mesha (மேஷம்)</text>
              <text fill="#d0c5af" fontSize="9" x="111" y="42">Aries</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="111" y="65">Surya ☉ (Ucha)</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="195" y="98">8th H</text>
            </g>

            {/* 3. Row 0, Col 2: Taurus (Vrishabha) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(2)}>
              <rect fill={activeSignId === 2 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 2 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 2 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="200" y="10" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="206" y="26">Vrishabha (ரிஷபம்)</text>
              <text fill="#d0c5af" fontSize="9" x="206" y="42">Taurus</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="206" y="65">Shukra ♀</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="290" y="98">9th H</text>
            </g>

            {/* 4. Row 0, Col 3: Gemini (Mithuna) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(3)}>
              <rect fill={activeSignId === 3 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 3 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 3 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="295" y="10" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="301" y="26">Mithuna (மிதுனம்)</text>
              <text fill="#d0c5af" fontSize="9" x="301" y="42">Gemini</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="301" y="65">Rahu ☊</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="385" y="98">10th H</text>
            </g>

            {/* 5. Row 1, Col 3: Cancer (Karka) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(4)}>
              <rect fill={activeSignId === 4 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 4 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 4 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="295" y="105" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="301" y="121">Karka (கடகம்)</text>
              <text fill="#d0c5af" fontSize="9" x="301" y="137">Cancer</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="301" y="160">Guru ♃ (Ucha)</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="385" y="193">11th H</text>
            </g>

            {/* 6. Row 2, Col 3: Leo (Simha) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(5)}>
              <rect fill={activeSignId === 5 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 5 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 5 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="295" y="200" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="301" y="216">Simha (சிம்மம்)</text>
              <text fill="#d0c5af" fontSize="9" x="301" y="232">Leo</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="301" y="255">Surya ☉</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="385" y="288">12th H</text>
            </g>

            {/* 7. Row 3, Col 3: Virgo (Kanya) - LAGNA / ASC */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(6)}>
              <rect fill={activeSignId === 6 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 6 ? '0.35' : '0.5'} height="95" stroke={activeSignId === 6 ? '#f2ca50' : '#d4af37'} strokeWidth={activeSignId === 6 ? '2.5' : '1.5'} width="95" x="295" y="295" />
              {/* Traditional South Indian Lagna Line (Diagonal corner slash) */}
              <line stroke="#f2ca50" strokeWidth="2.5" x1="295" x2="330" y1="330" y2="295" />
              <text fill="#f2ca50" fontSize="11" fontWeight="800" x="301" y="311">Kanya (கன்னி)</text>
              <rect fill="#f2ca50" height="14" rx="2" width="56" x="301" y="318" />
              <text fill="#3c2f00" fontSize="8" fontWeight="800" textAnchor="middle" x="329" y="329">LAGNA 1st</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="301" y="348">Budha ☿ (Ucha)</text>
              <text fill="#f2ca50" fontSize="9" fontWeight="700" textAnchor="end" x="385" y="383">1st Bhava</text>
            </g>

            {/* 8. Row 3, Col 2: Libra (Tula) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(7)}>
              <rect fill={activeSignId === 7 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 7 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 7 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="200" y="295" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="206" y="311">Tula (துலாம்)</text>
              <text fill="#d0c5af" fontSize="9" x="206" y="327">Libra</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="206" y="350">Shani ♄ • Ketu</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="290" y="383">2nd H</text>
            </g>

            {/* 9. Row 3, Col 1: Scorpio (Vrischika) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(8)}>
              <rect fill={activeSignId === 8 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 8 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 8 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="105" y="295" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="111" y="311">Vrischika (விருச்சிகம்)</text>
              <text fill="#d0c5af" fontSize="9" x="111" y="327">Scorpio</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="111" y="350">Mangala ♂</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="195" y="383">3rd H</text>
            </g>

            {/* 10. Row 3, Col 0: Sagittarius (Dhanus) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(9)}>
              <rect fill={activeSignId === 9 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 9 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 9 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="10" y="295" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="16" y="311">Dhanus (தனுசு)</text>
              <text fill="#d0c5af" fontSize="9" x="16" y="327">Sagittarius</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="16" y="350">Guru ♃</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="100" y="383">4th H</text>
            </g>

            {/* 11. Row 2, Col 0: Capricorn (Makara) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(10)}>
              <rect fill={activeSignId === 10 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 10 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 10 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="10" y="200" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="16" y="216">Makara (மகரம்)</text>
              <text fill="#d0c5af" fontSize="9" x="16" y="232">Capricorn</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="16" y="255">Mangala ♂</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="100" y="288">5th H</text>
            </g>

            {/* 12. Row 1, Col 0: Aquarius (Kumbha) */}
            <g className="cursor-pointer" onClick={() => setActiveSignId(11)}>
              <rect fill={activeSignId === 11 ? '#f2ca50' : '#1c1f2a'} fillOpacity={activeSignId === 11 ? '0.25' : '0.4'} height="95" stroke={activeSignId === 11 ? '#f2ca50' : 'transparent'} strokeWidth="2" width="95" x="10" y="105" />
              <text fill="#f2ca50" fontSize="10" fontWeight="700" x="16" y="121">Kumbha (கும்பம்)</text>
              <text fill="#d0c5af" fontSize="9" x="16" y="137">Aquarius</text>
              <text fill="#ffe088" fontSize="10" fontWeight="600" x="16" y="160">Shani ♄</text>
              <text fill="#99907c" fontSize="8" textAnchor="end" x="100" y="193">6th H</text>
            </g>
          </svg>
        ) : (
          /* NORTH INDIAN DIAMOND KUNDLI AS ALTERNATE */
          <svg 
            className="w-full h-full text-[#f2ca50] select-none" 
            fill="none" 
            viewBox="0 0 400 400" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="360" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" width="360" x="20" y="20" />
            <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" x1="20" x2="380" y1="20" y2="380" />
            <line stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" x1="380" x2="20" y1="20" y2="380" />
            <polygon points="200,20 380,200 200,380 20,200" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
            
            <g className="cursor-pointer" onClick={() => setActiveSignId(6)}>
              <text fill={activeSignId === 6 ? '#ffe088' : '#f2ca50'} fontSize="13" fontWeight="700" textAnchor="middle" x="200" y="110">
                1 (Lagna / Asc)
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(7)}>
              <text fill={activeSignId === 7 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="130" y="70">
                2nd House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(5)}>
              <text fill={activeSignId === 5 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="270" y="70">
                12th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(8)}>
              <text fill={activeSignId === 8 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="70" y="130">
                3rd House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(4)}>
              <text fill={activeSignId === 4 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="330" y="130">
                11th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(9)}>
              <text fill={activeSignId === 9 ? '#ffe088' : '#f2ca50'} fontSize="12" fontWeight="600" textAnchor="middle" x="110" y="200">
                4 (Kendra)
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(3)}>
              <text fill={activeSignId === 3 ? '#ffe088' : '#f2ca50'} fontSize="12" fontWeight="600" textAnchor="middle" x="290" y="200">
                10 (Karma)
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(10)}>
              <text fill={activeSignId === 10 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="70" y="270">
                5th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(2)}>
              <text fill={activeSignId === 2 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="330" y="270">
                9th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(11)}>
              <text fill={activeSignId === 11 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="130" y="330">
                6th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(1)}>
              <text fill={activeSignId === 1 ? '#f2ca50' : '#d0c5af'} fontSize="11" textAnchor="middle" x="270" y="330">
                8th House
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setActiveSignId(12)}>
              <text fill={activeSignId === 12 ? '#ffe088' : '#f2ca50'} fontSize="13" fontWeight="700" textAnchor="middle" x="200" y="290">
                7 (Kalatra / Spouse)
              </text>
            </g>
            <circle cx="200" cy="200" fill="#171b26" r="28" stroke="#f2ca50" strokeDasharray="4 2" strokeWidth="1.5" />
            <text fill="#f2ca50" fontFamily="'Playfair Display', Georgia, serif" fontSize="18" textAnchor="middle" x="200" y="206">
              ॐ
            </text>
          </svg>
        )}
      </div>

      {/* Interactive House / Rashi Explainer Bar */}
      <div className="w-full max-w-[400px] bg-[#171b26] p-3.5 rounded-xl border border-[#313540] text-xs shadow-md">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#262a35]">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#f2ca50]">{selected.rashi} ({selected.tamil} • {selected.sign})</span>
            {selected.isLagna && (
              <span className="text-[10px] bg-[#f2ca50] text-[#3c2f00] px-1.5 py-0.2 rounded font-bold">
                ASC
              </span>
            )}
          </div>
          <span className="text-[11px] text-[#d2bbff] font-medium">House #{selected.houseFromLagna}</span>
        </div>
        <p className="text-[11px] text-[#d0c5af] leading-normal">{selected.significance}</p>
        <div className="mt-2 pt-1 border-t border-[#262a35]/60 flex items-center justify-between text-[10px] text-[#99907c]">
          <span>Planetary Occupants: <strong className="text-[#ffe088]">{selected.planets.join(', ')}</strong></span>
          <span className="text-[#f2ca50] cursor-pointer hover:underline" onClick={() => setActiveSignId(6)}>Reset to Lagna</span>
        </div>
      </div>
    </div>
  );
};
