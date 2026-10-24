import React from 'react';
import { CONTACT_INFO } from '../constants';

export const PanchangBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0e18]/80 backdrop-blur-md px-4 sm:px-8 lg:px-14 py-2.5 border-b border-[#1c1f2a]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[#d0c5af] text-xs tracking-wider">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[#f2ca50] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse"></span>
            Auspicious Daily Panchang
          </span>
          <span className="text-[#4d4635]">/</span>
          <span>
            Tithi: <strong className="text-[#dfe2f1] font-medium">Shukla Paksha Dashami</strong>
          </span>
          <span className="text-[#4d4635]">/</span>
          <span>
            Nakshatra: <strong className="text-[#dfe2f1] font-medium">Rohini (Vrishabha)</strong>
          </span>
          <span className="text-[#4d4635]">/</span>
          <span>
            Yoga: <strong className="text-[#dfe2f1] font-medium">Siddha</strong>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#99907c] hidden md:inline">Direct Sanctuary Line:</span>
          <a 
            className="text-[#f2ca50] hover:text-[#ffe088] font-bold tracking-normal transition-colors flex items-center gap-1" 
            href={`tel:${CONTACT_INFO.phoneClean}`}
          >
            <span className="material-symbols-outlined text-sm">phone_in_talk</span>
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
