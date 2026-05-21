/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceItem, ArticleItem, SocialLink, ContactInfo } from './types.ts';

export const contactInfo: ContactInfo = {
  role: 'AI-Native Product Designer',
  companyName: 'Aleph Labs',
  companyUrl: 'https://www.aleph-labs.com/',
  founderOf: 'PaceCard',
  founderUrl: 'https://abido.framer.website/',
  location: 'Jakarta, Indonesia',
  phone: '+6289613196277',
  email: 'hanifussafly@gmail.com',
  website: 'abido.framer.website',
  pronouns: 'he/him',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    username: 'hanifussafly',
    url: 'https://linkedin.com/in/hanifussafly/',
    iconName: 'linkedin',
    colorClass: 'text-zinc-950 dark:text-zinc-50Hover',
  },
  {
    name: 'Behance',
    username: 'hanifussafly',
    url: 'https://www.behance.net/hanifussafly',
    iconName: 'palette',
    colorClass: 'text-zinc-950 dark:text-zinc-50Hover',
  },
  {
    name: 'Dribbble',
    username: 'abidoo',
    url: 'https://dribbble.com/abidoo',
    iconName: 'dribbble',
    colorClass: 'text-zinc-950 dark:text-zinc-50Hover',
  },
  {
    name: 'X',
    username: 'hanifussafly',
    url: 'https://x.com/hanifussafly',
    iconName: 'x',
    colorClass: 'text-zinc-950 dark:text-zinc-50Hover',
  },
  {
    name: 'Figma',
    username: 'abid',
    url: 'https://www.figma.com/@abid',
    iconName: 'figma',
    colorClass: 'text-zinc-950 dark:text-zinc-50Hover',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Self-Employed',
    logoEmoji: '',
    active: true,
    website: '#',
    roles: [
      {
        title: 'UI/UX Designer',
        type: 'Freelance',
        duration: '01.2020 - current',
        length: '6y 5m',
        tags: ['Product Design', 'User Experience (UX)', 'User Interface (UI) Design', 'Mobile Design', 'Design Systems', 'Figma'],
        details: [
          'Delivered conversion-focused UX/UI for B2B, Fintech, and consumer products across Europe, the UK, and Southeast Asia.',
          'Launched and scaled the MyTel-U academic super-app and multi-product design systems serving over 15,000+ active users.'
        ],
      },
    ],
  },
  {
    company: 'Aleph Labs Indonesia',
    logoEmoji: '🧬',
    logoImage: '/aleph_labs_logo.jpeg',
    active: false,
    website: 'https://www.aleph-labs.com/',
    roles: [
      {
        title: 'UI/UX Designer',
        type: 'Full-time',
        duration: '06.2025 - 12.2025',
        length: '6m',
        tags: ['User Experience (UX)', 'User Interface (UI) Design', 'Figma', 'Mobile Applications', 'E-Health', 'Collaboration'],
        details: [
          'Enhanced the U by Prodia digital health suite, including the Guardian feature layout and smart wearable integrations for real-time tracking.',
          'Streamlined cross-team alignment by implementing modular UI flows and integrating Blu by BCA payments to deliver a friction-free experience.'
        ],
      },
    ],
  },
  {
    company: 'Indotek.ai',
    logoEmoji: '📞',
    logoImage: '/indotek logo.jpeg',
    active: false,
    website: 'https://indotek.ai',
    roles: [
      {
        title: 'Senior Product Designer',
        type: 'Full-time',
        duration: '08.2023 - 04.2024',
        length: '9m',
        tags: ['Product Strategy', 'Framer', 'Product Design', 'B2B', 'Dashboard Design', 'Branding'],
        details: [
          'Spearheaded branding strategy, corporate identity, and responsive landing pages utilizing Framer for indotek.ai.',
          'Designed and optimized the Koikoll telecom dashboard, utilizing competitor behavior studies to author 17 core cross-functional PRDs.'
        ],
      },
    ],
  },
  {
    company: 'Fashionvalet Sdn. Bhd',
    logoEmoji: '🛍️',
    logoImage: '/fashionvalet logo.webp',
    active: false,
    website: 'https://www.fashionvalet.com',
    roles: [
      {
        title: 'UI/UX Designer',
        type: 'Full-time',
        duration: '07.2021 - 08.2023',
        length: '2y 2m',
        tags: ['E-commerce', 'Shopify', 'Design Systems', 'Conversion Optimization', 'Web Design', 'User Interface (UI) Design'],
        details: [
          'Led website transition to Shopify for dUCk and LILIT brands, increasing active web conversion rates by 13-15% and welcoming up to 400k new users.',
          'Initiated and governed a scalable Multi-brand Design System, accelerating design-to-development loops across mobile and web reservation flows.'
        ],
      },
    ],
  },
  {
    company: 'Eduka System',
    logoEmoji: '✏️',
    logoImage: '/eduka-system.jpeg',
    active: false,
    website: 'https://edukasystem.com',
    roles: [
      {
        title: 'UX Designer',
        type: 'Full-time',
        duration: '01.2021 - 04.2021',
        length: '4m',
        tags: ['User Experience (UX)', 'Wireframing', 'Usability Testing', 'Gamification', 'Interaction Design'],
        details: [
          'Redesigned homepage interfaces and gamification mechanisms to improve onboarding comprehension and visual hierarchy.',
          'Spearheaded the platform\'s first formal usability testing sessions to eliminate onboarding blocks and streamline digital transaction rates.'
        ],
      },
    ],
  },
  {
    company: 'Hipe Indonesia',
    logoEmoji: '',
    active: false,
    website: '#',
    roles: [
      {
        title: 'Product Designer',
        type: 'Full-time',
        duration: '06.2019 - 12.2019',
        length: '7m',
        tags: ['Mobile Design', 'User Research', 'Prototyping', 'iOS Design', 'Value Proposition', 'Mentoring'],
        details: [
          'Designed Hipe\'s native iOS/Android interfaces and pioneered alignment around value propositions based on structured remote customer studies.',
          'Delivered rapid cross-platform prototypes (MyAbsent, Smart Laundry, Kreki-119) and mentored student interns to full execution.'
        ],
      },
    ],
  },
  {
    company: 'Myabuy Pte. Ltd.',
    logoEmoji: '📨',
    logoImage: '/myabuy logo.jpeg',
    active: false,
    website: '#',
    roles: [
      {
        title: 'UI/UX Designer',
        type: 'Full-time',
        duration: '05.2018 - 05.2019',
        length: '1y',
        tags: ['Sketch', 'Interaction Design', 'Usability Testing', 'Mobile Application Design', 'Design Systems', 'Principle'],
        details: [
          'Designed polished iOS, Android, and web interfaces using Sketch, contributing directly to the Proofn corporate Design System.',
          'Iterated interactive animations via Principle and directed initial usability testing groups with an 81% task success rate.'
        ],
      },
    ],
  },
];

export const articlesData: ArticleItem[] = [
  {
    title: 'Welcoming Users the Right Way: Crafting an Effective Onboarding for EZCoordinator',
    author: 'EZCoordinator',
    date: 'UX Onboarding',
    url: 'https://abido.framer.website/',
    logoLetter: 'E',
  },
  {
    title: 'From Fashionvalet to dUCk & LILIT. : Crafting Prototypes for a Seamless Transition',
    author: 'Fashionvalet / dUCk / LILIT.',
    date: 'E-commerce Transition',
    url: 'https://abido.framer.website/',
    logoLetter: 'F',
  },
  {
    title: 'Simplified Telkom University Academic App - Study Case MyTel-U Mobile',
    author: 'Telkom University',
    date: 'Super App Case Study',
    url: 'https://abido.framer.website/',
    logoLetter: 'M',
  },
  {
    title: 'Enhancing shopping experience for dUCk - Research for PDP image ratio',
    author: 'dUCk Research',
    date: 'PDP Image Ratio Research',
    url: 'https://abido.framer.website/',
    logoLetter: 'D',
  },
  {
    title: 'Mola TV - Registration Flow with UGC',
    author: 'Mola TV',
    date: 'Registration UX Flow',
    url: 'https://abido.framer.website/',
    logoLetter: 'M',
  },
  {
    title: 'Niagahoster Landing Page Redesign with UCD',
    author: 'Niagahoster',
    date: 'UCD Redesign Framework',
    url: 'https://abido.framer.website/',
    logoLetter: 'N',
  },
];
