import React, { useState } from 'react';
import { NavPage } from '../types';
import { CONTACT_INFO, ASSETS } from '../constants';

interface ContactViewProps {
  onNavigate: (page: NavPage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Urgent Muhurat Consultation',
    message: ''
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMsg({ name: '', email: '', phone: '', subject: 'Urgent Muhurat Consultation', message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full relative bg-[#0f131d]">
      {/* Ambient background glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#f2ca50]/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-96 left-10 w-96 h-96 rounded-full bg-[#6001d1]/15 blur-[140px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f2a] border border-[#4d4635]/40 mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[#f2ca50] text-base">support_agent</span>
              <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
                Direct Sanctuary Access
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#dfe2f1] font-medium tracking-tight">
              Connect With Astrologer Dhayalan K S
            </h1>
            <p className="text-sm sm:text-base text-[#d0c5af] max-w-2xl mt-3 leading-relaxed">
              Whether you require urgent Muhurat dates, expedited matrimonial chart matching, or a private life reading, our sacred sanctuary office is at your service.
            </p>
          </div>
        </section>

        {/* 3-Column Info Cards */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Direct Voice / WhatsApp */}
            <div className="bg-[#1c1f2a] p-6 rounded-xl border border-[#4d4635]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50] mb-4">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <h3 className="font-serif text-xl text-[#dfe2f1] font-medium">Direct Telephone & WhatsApp</h3>
                <p className="text-xs text-[#d0c5af] mt-1 mb-4">
                  For immediate consultation slot bookings or urgent same-day queries.
                </p>
                <div className="space-y-1">
                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="text-base font-serif font-bold text-[#f2ca50] hover:underline block"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <span className="text-[11px] text-[#99907c] block">Primary Line (IST 8:00 AM - 9:30 PM)</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/20">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Launch Instant WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Card 2: Written Enquiries */}
            <div className="bg-[#1c1f2a] p-6 rounded-xl border border-[#4d4635]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50] mb-4">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <h3 className="font-serif text-xl text-[#dfe2f1] font-medium">Written Electronic Mail</h3>
                <p className="text-xs text-[#d0c5af] mt-1 mb-4">
                  Transmit detailed birth charts, family background, and complex corporate queries.
                </p>
                <div className="space-y-1">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base font-serif font-bold text-[#f2ca50] hover:underline block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <span className="text-[11px] text-[#99907c] block">Replies processed within 4-6 business hours</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/20">
                <span className="text-xs text-[#dfe2f1] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#f2ca50] text-sm">verified</span>
                  Private End-to-End Encryption
                </span>
              </div>
            </div>

            {/* Card 3: Sanctuary & Global Virtual */}
            <div className="bg-[#1c1f2a] p-6 rounded-xl border border-[#4d4635]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#262a35] flex items-center justify-center text-[#f2ca50] mb-4">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <h3 className="font-serif text-xl text-[#dfe2f1] font-medium">Sanctuary & Virtual Reach</h3>
                <p className="text-xs text-[#d0c5af] mt-1 mb-4">
                  Based in Tamil Nadu, India, serving 40+ countries across EST, PST, GMT, SGT & AEST.
                </p>
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-[#dfe2f1] block">Tamil Nadu, India</span>
                  <span className="text-[11px] text-[#99907c] block">Ephemeris: 13.0827° N, 80.2707° E</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#4d4635]/20">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="text-xs font-semibold text-[#f2ca50] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Virtual Reading</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Master Chamber Profile */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-[#1c1f2a] p-6 sm:p-8 rounded-2xl border border-[#4d4635]/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#f2ca50]">send</span>
                <h3 className="font-serif text-2xl text-[#dfe2f1] font-semibold">Send a Direct Message</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#d0c5af] mb-6">
                Receive personalized guidance on session availability, report formats, or specific planetary queries.
              </p>

              {sent ? (
                <div className="p-4 bg-[#f2ca50]/15 rounded-xl border border-[#f2ca50]/40 text-xs text-[#f2ca50] flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Namaste. Your message has reached the sanctuary desk. We will respond shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Anand Sundaram"
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={msg.name}
                        onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={msg.phone}
                        onChange={(e) => setMsg({ ...msg, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="youremail@example.com"
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={msg.email}
                        onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                        Subject of Inquiry
                      </label>
                      <select
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={msg.subject}
                        onChange={(e) => setMsg({ ...msg, subject: e.target.value })}
                      >
                        <option value="Urgent Muhurat Consultation">Urgent Vivaha / Griha Pravesh Muhurat</option>
                        <option value="Kundli Matching Inquiry">Kundli Matching / Porutham Guidance</option>
                        <option value="Career & Financial Turnaround">Career & Financial Turnaround</option>
                        <option value="Santana Gopala Reading">Santana Gopala (Progeny) Reading</option>
                        <option value="General Sanctuary Query">General Sanctuary Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">
                      Your Message / Questions
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your inquiry or birth dates and convenient timing..."
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] p-3.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                      value={msg.message}
                      onChange={(e) => setMsg({ ...msg, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-widest hover:bg-[#d4af37] transition-all cursor-pointer shadow-md"
                  >
                    Transmit Sanctuary Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Chamber Profile Visual */}
            <div className="lg:col-span-5 bg-[#171b26] p-6 sm:p-8 rounded-2xl border border-[#4d4635]/30 shadow-xl flex flex-col gap-5">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-[#4d4635]/30">
                <img
                  alt="Astrologer Dhayalan K S in Sacred Chamber"
                  className="w-full h-full object-cover"
                  src={ASSETS.dhayalanChamber}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] uppercase tracking-widest text-[#f2ca50] font-bold">
                    Sacred Consulting Chamber
                  </span>
                  <h4 className="font-serif text-lg text-[#dfe2f1]">Astrologer Dhayalan K S</h4>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#4d4635]/20">
                  <span className="text-[#99907c]">Consultation Languages</span>
                  <span className="text-[#dfe2f1] font-medium">Tamil, English, Hindi</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#4d4635]/20">
                  <span className="text-[#99907c]">Virtual Platforms</span>
                  <span className="text-[#dfe2f1] font-medium">Google Meet, Zoom, WhatsApp</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#4d4635]/20">
                  <span className="text-[#99907c]">Sanctuary Timing</span>
                  <span className="text-[#f2ca50] font-semibold">08:00 AM – 21:30 PM IST</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('kundli-calculator')}
                  className="w-full py-3 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:text-[#f2ca50] text-xs font-semibold uppercase tracking-wider border border-[#4d4635]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#f2ca50]">calculate</span>
                  Try Free Kundli Matching Calculator
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
