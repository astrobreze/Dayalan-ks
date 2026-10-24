import { Testimonial } from './types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1U9lEzQDVSHqoWes7_z8UCrQ0Cph-X9qBxtnaizSSYzy4jnxiAf_5owsz0QONMw3FKc--ta4TTl061fdUUSL_fQD2Wxtlo3BaX_WR1vjGw4nvlGJoIkC-KVkz7TxCX8BMnH1TSJlRlANhvnnbHIC2AKg1PTeALUFwVFFQUHdlradPrdDmdkFIaSTO5PSCrqHgWgcJTP_MaMG8AJJZUswbNj_TWWgB81YiQUOCfueV1dLBjqUJ5pd8aRPVuF',
  dhayalanHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbam9LXGNc4xmyNg_CX8l5WJyefX3IDlnhvST6ws964-KD0FutDH8ww6Eab320_sAqUedp0ZfXpz-sDfEhOV_5eWkJ_kNg0GprKj8e0b7Q1iAlMSL68SkH_Q1_CfjXmXXIHFi9EFD0UcAwZCg4O6twAYAMVxGzLhUZAn8hDLLz3730222IjIOy-121ovGg3vH_6bnvj0ym-GI-vwENWlGRTT5iNzurFDIQ_7qDnlhWXmsMPiwhUKM7w',
  dhayalanChamber: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOF-b0zaW5UJJNlL9b4WEip45BLrFf-OGF3D8l-BP2vLHo_VN6L8H-R2IkB2UhhdhePvx96tkYpm5vO4yHRSQx40kYa5FNANH_AVPE8ZJWp_zVk89kIeJXZlI2jTICfFh3zJMN0xK6Gh8Yq3reqEvdvgp1Ifs6UlarfDu3agkc0rodd5ElW0PZV1nJ5tOa_Se-ZxQQqmprogkrvOnoMv7ITZ_oq3KEoAm67Y2RdERmQ22Rj9BP7BTB8Q',
  dhayalanAuthority: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5n9d2A4cnv_05aFY_T2iBrfNuWOzz48XL8jN5aVGtvkogCxLpmcBfaII-1rcUAmFaTr1z_Ty1m5i148igQH96a_3Lg8qIiXUkMDGEIPLLwz3tTAp-34OOn5d4t511_J1sK1ce65n9seIYco3i6cexbn78TpXxFgy9h8yGcFyiVjUlxmnmcnjIwWfg0SwEmkKgtRiHJ4UXYDiIxFB2L4UnDP3WFXAEun_cloovPDeapMf_kcGf_y0onA',
  dhayalanMatch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2sD7SnF--qlKK8GXta6_yECINy1Hh8t1o6R5zruL46-eCVIunWSnrKhVfqeLSJIci2IcMImjLUfohHPVeHKGJA__Rb2vR1eczuvg7nY-EDv6UwErkMn9Q_E0VLm-GjvlnseybipmU3UkNRELkWM8KEj4OBDha08n6F99qlzaVtXRFcjbqCkUB5fAbPoml1qEWx8D2yYyccuMtjMWCIJF7yg88nrfB70QvCyOrBQ1tSUXo2qSy9ErmJg',
  astrolabe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzXiVYBiULSQMO8wM0zHIEjk9FmYdFWDoBmLk2PKvtyKDy7tYpZVOhWSwbVgkeIbxZOQHYxWL3wV2QMIumGsgWONFZI-xrvwCQ_Fr8GesKD2vH6-IkNjfP6ZeobJI3LIQwb_TGyrCVYxBr4G_4_Q3MEpjXGRpSMrOQHa64vssMzpEvmXTR3bjHP7vRXvNoJ8jRE8-O4gQjC0d64I8DB9jTo-fvV62fzqZcmx6GFzHjnJsSLxIUKXRn4Q',
  weddingRitual: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDDNPcR3YKpOx2eRDfGDwi1PIQBmxdAnUd1RvTqeIb8zVqsyiBmzY0iHlmNv_wdfzEzMIRQ4adbB-WnJ3rvPPHL0eWkbX7iB9rzNGdFcO7jruLBOLAFEP6S1FeZdnaVBlXCw-2zYkopGd70PtjZrWPkbRRRe57lslmrTQPR9w4Clg8-kcPnoAd8ylEfQ_abF7h3k5xO26g9Fq9BAGT9LZ8RyYRLTM-VBa97gOYAiO3nIqKR9HwVCYD4w',
  lordShiva: '/assets/lord_shiva.jpg'
};

export const CONTACT_INFO = {
  phone: '+91 9566789385',
  phoneClean: '+919566789385',
  email: 'astrobreze@gmail.com',
  whatsappUrl: 'https://wa.me/919566789385?text=Namaste%20Astrologer%20Dhayalan%20ji,%20I%20would%20like%20to%20schedule%20a%20sacred%20consultation.',
  location: 'Tamil Nadu, India & Worldwide Virtual Consultations'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'We were heading towards divorce due to intense miscommunication. Dhayalan Ji accurately recognized my Venus-Ketu transit and advised a specific mantra and stone. Within four months, harmony returned.',
    name: 'Rajesh & Priya Nair',
    location: 'Bengaluru',
    category: 'relationship',
    categoryLabel: 'Marital Reconciliation',
    stars: 5,
    initials: 'R'
  },
  {
    id: '2',
    quote: 'My export startup was burdened by unexplained bad debts for 3 years. Dhayalan K S performed the exact 6th-11th house KP analysis and gave us an exact launch Muhurat. Revenue grew 300% that year.',
    name: 'Arunachalam V.',
    location: 'Chennai',
    category: 'wealth',
    categoryLabel: 'Business Wealth Astrology',
    stars: 5,
    initials: 'A'
  },
  {
    id: '3',
    quote: 'After six painful years and failed fertility cycles, his Saptamsha D-7 reading identified a specific Pitra Dosha. We performed the Santana Gopala remedies with devout faith. Today we hold our twin sons.',
    name: 'Meenakshi & Karthik',
    location: 'Coimbatore',
    category: 'progeny',
    categoryLabel: 'Santana Gopala Blessing',
    stars: 5,
    initials: 'M'
  },
  {
    id: '4',
    quote: 'Dhayalan sir predicted the exact month my international relocation and corporate promotion would happen based on KP sub-lord timing. After 3 years of delays, his gemstone prescription materialized within 45 days.',
    name: 'Siddharth R.',
    location: 'Singapore',
    category: 'wealth',
    categoryLabel: 'VP Engineering Career Move',
    stars: 5,
    initials: 'S'
  },
  {
    id: '5',
    quote: 'Our families were deeply anxious about a Manglik dosha issue and differing horoscopes. Astrologer Dhayalan explained the cancellation rules with profound logical clarity. Today, our marriage is completely peaceful.',
    name: 'Priyanka & Ananth',
    location: 'Chennai',
    category: 'relationship',
    categoryLabel: 'Marriage Compatibility & Manglik Peace',
    stars: 5,
    initials: 'P'
  },
  {
    id: '6',
    quote: 'Dhayalan ji\'s prediction regarding my business expansion overseas aligned to the exact week in our KP chart analysis. His sattvic remedy brought immense peace without empty promises.',
    name: 'Rajesh V.',
    location: 'Silicon Valley / Chennai',
    category: 'wealth',
    categoryLabel: 'Tech Executive Global Expansion',
    stars: 5,
    initials: 'R'
  }
];
