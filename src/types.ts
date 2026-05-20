/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Role {
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  duration: string; // e.g., "01.2026 - ∞"
  length: string;   // e.g., "5m", "2y 3m"
  tags: string[];
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  logoEmoji: string;
  logoImage?: string;
  active: boolean; // Is currently working there
  website?: string;
  roles: Role[];
}

export interface ArticleItem {
  title: string;
  author: string;
  date: string;
  url: string;
  logoLetter: string; // Left circle indicator letter
}

export interface SocialLink {
  name: string;
  username: string;
  url: string;
  iconName: string; // Name of Lucide icon or custom SVG key
  colorClass: string;
}

export interface ContactInfo {
  role: string;
  companyName: string;
  companyUrl: string;
  founderOf: string;
  founderUrl: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  pronouns: string;
}
