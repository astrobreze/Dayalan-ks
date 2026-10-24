import React, { useState } from 'react';
import { NavPage } from '../types';
import { CONTACT_INFO, TESTIMONIALS } from '../constants';

interface ReviewsViewProps {
  onNavigate: (page: NavPage) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');
  const [submittedReview, setSubmittedReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    category: 'relationship',
    rating: 5,
    message: ''
  });

  const filteredList = filter === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter((t) => t.category === filter);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setNewReview({ name: '', location: '', category: 'relationship', rating: 5, message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full relative bg-[#0f131d]">
      {/* Ambient background glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-[#f2ca50]/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-96 h-96 rounded-full bg-[#6001d1]/15 blur-[140px] pointer-events-none"></div>

        {/* Header Hero */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pt-10 pb-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f2a] border border-[#4d4635]/40 mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[#f2ca50] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                stars
              </span>
              <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
                Authentic Experiences • 40+ Nations
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#dfe2f1] font-medium tracking-tight">
              Karmic Testimonials & Client Reviews
            </h1>
            <p className="text-sm sm:text-base text-[#d0c5af] max-w-2xl mt-3 leading-relaxed">
              Read how thousands of individuals, couples, and corporate leaders have navigated destiny's crossroads through Astrologer Dhayalan K S’s Vedic & KP consultations.
            </p>

            {/* Scorecard Summary */}
            <div className="mt-8 p-6 bg-[#1c1f2a] rounded-2xl border border-[#4d4635]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl shadow-xl">
              <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#4d4635]/30 pb-4 sm:pb-0">
                <span className="font-serif text-4xl font-bold text-[#f2ca50]">4.98</span>
                <div className="flex items-center gap-1 text-[#f2ca50] my-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#99907c]">Overall Satisfaction</span>
              </div>

              <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#4d4635]/30 pb-4 sm:pb-0">
                <span className="font-serif text-4xl font-bold text-[#dfe2f1]">18,000+</span>
                <span className="text-xs text-[#d0c5af] mt-1 font-medium">Kundlis Decoded</span>
                <span className="text-[11px] uppercase tracking-wider text-[#99907c]">Worldwide Diaspora</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-4xl font-bold text-[#d2bbff]">98.4%</span>
                <span className="text-xs text-[#d0c5af] mt-1 font-medium">KP Timing Precision</span>
                <span className="text-[11px] uppercase tracking-wider text-[#99907c]">Sub-Lord Accuracy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'all', label: 'All Testimonials' },
              { id: 'relationship', label: 'Marriage & Relationship' },
              { id: 'wealth', label: 'Wealth & Career' },
              { id: 'progeny', label: 'Santana Progeny' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow-md'
                    : 'bg-[#1c1f2a] text-[#d0c5af] hover:text-[#dfe2f1] border border-[#4d4635]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((item) => (
              <div
                key={item.id}
                className="bg-[#1c1f2a] rounded-xl p-6 flex flex-col justify-between border border-[#4d4635]/30 shadow-lg hover:border-[#f2ca50]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#f2ca50] font-semibold bg-[#262a35] px-2.5 py-1 rounded">
                      {item.categoryLabel}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#f2ca50]">
                      {[...Array(item.stars)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#dfe2f1] italic leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4d4635]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] font-serif font-bold flex items-center justify-center text-sm border border-[#f2ca50]/30">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#dfe2f1]">{item.name}</h4>
                    <span className="text-[11px] text-[#99907c]">{item.location} • Verified Seeker</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Review & Sanctuary Assistance */}
        <section className="w-full px-4 sm:px-8 lg:px-14 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-[#1c1f2a] p-6 sm:p-8 rounded-2xl border border-[#4d4635]/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#f2ca50]">rate_review</span>
                <h3 className="font-serif text-xl text-[#dfe2f1] font-semibold">Share Your Sacred Journey</h3>
              </div>
              <p className="text-xs text-[#d0c5af] mb-5">
                Have you experienced a breakthrough following a consultation or remedy with Dhayalan K S? Your reflection offers solace to others.
              </p>

              {submittedReview ? (
                <div className="p-4 bg-[#f2ca50]/15 rounded-xl border border-[#f2ca50]/40 text-xs text-[#f2ca50] flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Thank you. Your sacred review has been recorded for verification.</span>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh K."
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">Location / City</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Singapore / Chennai"
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">Consultation Area</label>
                      <select
                        className="w-full bg-[#0a0e18] text-[#dfe2f1] px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={newReview.category}
                        onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                      >
                        <option value="relationship">Marriage & Compatibility</option>
                        <option value="wealth">Career & Business Turnaround</option>
                        <option value="progeny">Santana Gopala (Progeny)</option>
                        <option value="protection">Dosha Nivarana & Remedies</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">Rating</label>
                      <select
                        className="w-full bg-[#0a0e18] text-[#f2ca50] font-bold px-3.5 py-2.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      >
                        <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                        <option value="4">★★★★☆ (4 Stars - Highly Helpful)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d0c5af] mb-1 font-semibold">Your Experience & Prediction Accuracy</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How did the astrological remedies or predictions unfold in your life?"
                      className="w-full bg-[#0a0e18] text-[#dfe2f1] p-3.5 rounded-lg text-sm border border-[#4d4635]/30 focus:ring-1 focus:ring-[#f2ca50] outline-none"
                      value={newReview.message}
                      onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-widest hover:bg-[#d4af37] transition-all cursor-pointer"
                  >
                    Submit Sacred Testimonial
                  </button>
                </form>
              )}
            </div>

            {/* Quick Consultation CTA */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#262a35] to-[#171b26] p-6 sm:p-8 rounded-2xl border border-[#f2ca50]/30 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#f2ca50] font-bold block mb-1">
                  Begin Your Own Chapter
                </span>
                <h3 className="font-serif text-2xl text-[#dfe2f1] font-semibold">
                  Receive Your Bespoke Life Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-3 leading-relaxed">
                  Join thousands who found mathematical precision and moral solace with Astrologer Dhayalan K S. Select your preferred tier and schedule a reading today.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4d4635]/30 space-y-3">
                <button
                  onClick={() => onNavigate('book-consultation')}
                  className="w-full py-3.5 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all shadow-md text-center block cursor-pointer"
                >
                  Schedule Consultation
                </button>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="w-full py-3 rounded-lg bg-[#0f131d] text-[#dfe2f1] font-semibold text-xs uppercase tracking-wider hover:text-[#f2ca50] border border-[#4d4635]/40 transition-all text-center block"
                >
                  Urgent Helpline: {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
