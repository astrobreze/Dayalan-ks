/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PanchangBar } from './components/PanchangBar';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { KundliCalculatorView } from './views/KundliCalculatorView';
import { BookingView } from './views/BookingView';
import { ReviewsView } from './views/ReviewsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');

  // Handle browser back/forward or hash changes if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      const validPages: NavPage[] = [
        'home',
        'services',
        'about-dhayalan-k-s',
        'kundli-calculator',
        'book-consultation',
        'client-reviews',
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] flex flex-col font-sans selection:bg-[#f2ca50]/30 selection:text-[#f2ca50]">
      {/* Fixed Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {/* Panchang Live Planetary Bar displayed across views */}
        <PanchangBar />

        {/* View Routing */}
        {currentPage === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentPage === 'about-dhayalan-k-s' && <AboutView onNavigate={handleNavigate} />}
        {currentPage === 'kundli-calculator' && <KundliCalculatorView onNavigate={handleNavigate} />}
        {currentPage === 'book-consultation' && <BookingView onNavigate={handleNavigate} />}
        {currentPage === 'client-reviews' && <ReviewsView onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactView onNavigate={handleNavigate} />}
      </main>

      {/* Global Sacred Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
