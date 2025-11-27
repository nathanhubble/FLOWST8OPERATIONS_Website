export enum IconType {
  CLOCK = 'CLOCK',
  SCALE = 'SCALE',
  CREATIVE = 'CREATIVE',
  CLIENT = 'CLIENT',
  MAIL = 'MAIL',
  DATABASE = 'DATABASE',
  USER = 'USER',
  FILE = 'FILE',
  CALENDAR = 'CALENDAR',
  CHECK = 'CHECK'
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface WorkflowItem {
  title: string;
  icon: IconType;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IdeatorResponse {
  ideas: string[];
}