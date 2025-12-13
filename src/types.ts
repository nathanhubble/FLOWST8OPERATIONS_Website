import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CapabilityItem {
  title: string;
  iconName: string;
  detail: string;
  metric: string;
}

export enum ModalType {
  NONE,
  BOOKING,
  ABOUT,
  CONTACT,
  PRIVACY
}