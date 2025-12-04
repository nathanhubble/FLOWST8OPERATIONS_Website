import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accent: string; // Changed from strict union to string to allow new palette
}

export type ModalType = 'booking' | 'about' | 'contact' | 'privacy' | null;

export interface NavLink {
  label: string;
  href: string;
}