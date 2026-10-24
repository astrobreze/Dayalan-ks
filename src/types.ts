export type NavPage = 
  | 'home' 
  | 'services' 
  | 'about-dhayalan-k-s' 
  | 'kundli-calculator' 
  | 'book-consultation' 
  | 'client-reviews' 
  | 'contact';

export type SessionTier = 'express' | 'comprehensive' | 'dossier';

export interface BookingFormData {
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  dob: string;
  birthTime: string;
  isBirthTimeApprox: boolean;
  birthPlace: string;
  concern: string;
  notes: string;
  sessionTier: SessionTier;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  category: 'relationship' | 'wealth' | 'progeny' | 'protection' | 'kundli';
  categoryLabel: string;
  stars: number;
  initials: string;
}
