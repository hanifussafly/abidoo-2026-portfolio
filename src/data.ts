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
        tags: ['UX Design', 'Product Design', 'B2B', 'Fintech', 'Edutech', 'Real Estate', 'Design Systems'],
        details: [
          'Delivered conversion-focused UX for B2B and consumer products used across Europe, the UK, and Southeast Asia.',
          'Improved activation, usability, and feature discoverability through data-informed UX and onboarding design.',
          'Reduced design-to-development friction by building scalable design systems and working tightly with engineers.',
          'Shipped high-impact web and mobile experiences, balancing speed, clarity, and business goals.',
          'Designed intuitive banking and transaction flows for regulated fintech products.',
          'Simplified complex dashboards into actionable insights for marketing and operations teams.',
          'Enabled faster product decisions through structured design exploration and systemized UI patterns.',
          'Launched and scaled MyTel-U super apps and internal systems serving 15,000+ users.',
          'Built and governed multi-product design systems, cutting delivery time and improving consistency.',
          'Improved operational efficiency and data accuracy across large academic and institutional ecosystems.'
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
        tags: ['Ninode Flow', 'Figma Collaboration', 'Guardian Feature', 'Wearable', 'Blu by BCA'],
        details: [
          'Streamlined design collaboration across design, product, and system analyst teams by introducing Ninode flow for simplified UI flows, and creating lightweight, performance-optimized Figma files and improving design efficiency and reducing handoff friction.',
          'Enhanced the user experience of the Prodia app’s Guardian feature, tailoring the flow and interface for underage users and their parents/guardians, ensuring compliance with UX best practices and sensitive data handling.',
          'Contributed to the development of U by Prodia’s smart wearable feature by connecting real-time health data from users’ devices into the app, enabling more accurate insights and personalized recommendations.',
          'Improved the sub-account and home-service experience, simplifying access for parents, guardians, and family members while ensuring smoother booking, tracking, and management flows.',
          'Supported the integration between U by Prodia and Blu by BCA, helping build a seamless in-app payment experience that reduced friction during transactions and strengthened Prodia’s digital ecosystem.'
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
        tags: ['Branding', 'Framer', 'Koikoll Dashboard', 'ASR Testing', 'PRD', 'IVR Scenario'],
        details: [
          'Spearheaded the creation of indotek.ai’s logo and branding, and developed the company’s landing page using Framer.',
          'Conducted in-depth research on Collection Agents’ user behavior with SIP Trunks and Daily Collections at BPO, leveraging insights to optimize service delivery.',
          'Designed the Koikoll dashboard, conducted competitor analysis, and enhanced user experience by applying the “keep it simple stupid” principle, resulting in a user-friendly interface.',
          'Authored 17 Product Requirement Documents (PRDs) within 4 months, with 14 functions successfully implemented by the IT team, ensuring thorough documentation and execution.',
          'Supported the IT team in testing Automatic Speech Recognition (ASR) by validating IVR responses, ensuring the accuracy and reliability of the system.',
          'Conducted training sessions on the use of Koikoll at client locations, equipping multiple clients with the skills to effectively utilize the dashboard.',
          'Provided dedicated support to clients in using indotek.ai services, including SIP trunks/softphones and the Koikoll dashboard, enhancing their operational capabilities.',
          'Assisted in the efficient delegation of tasks to sales engineers, streamlining task management and boosting team productivity.',
          'Collaborated with the Data Labeling team to organize the knowledge base for AI training and IVR scenario generation, optimizing the development process for AI and IVR systems.'
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
        tags: ['Shopify', 'Conversion Rate', 'dUCk Cafe', 'LILIT', 'Design System', 'Branding'],
        details: [
          'Conducted comprehensive competitor research to inform and enhance design projects, ensuring market competitiveness.',
          'Contributed to the transition to Shopify, designing and optimizing Shopify websites to improve the online shopping experience. Successfully improve the conversion rate around 13-15% compared with the previous platform.',
          'Developed fashionvalet website transitions, improving user for dUCk and LILIT. up to 400k new users.',
          'Developed a user review feature for dUCk and LILIT. platforms, boosting customer engagement and feedback collection.',
          'Redesigned the LILIT Web homepage, increasing user engagement and improving the site’s aesthetic appeal.',
          'Created the dUCk UK landing page and optimized its checkout flow, facilitating entry into a new market.',
          'Developed mobile and web applications for dUCk Cafe and dUCk Salon, streamlining reservation processes and enhancing customer experience.',
          'Designed the branding for dUCk Salon, establishing a unique and recognizable brand identity.',
          'Initiated a Multi-brand Design System for dUCk and LILIT., simplifying design and development processes for designers and developers.'
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
        tags: ['Wireframes', 'Homepage Redesign', 'Gamification', 'Usability Testing'],
        details: [
          'Designed wireframes, user flows, and interactions to enhance usability and engagement across the app.',
          'Redesigned the homepage section, improving user comprehension and navigation for a more intuitive experience.',
          'Streamlined the payment system, reducing friction and increasing transaction success rates.',
          'Developed a gamification scheme to boost user retention and engagement.',
          'Led a team to conduct the app’s first usability testing, identifying key pain points and driving data-driven design improvements'
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
        tags: ['Value Proposition', 'User Research', 'Android/iOS UI', 'Prototyping'],
        details: [
          'Designed and implemented Value Proposition Design for Hipe application and Hipe Design Team, aligning product goals with user needs.',
          'Conducted customer research and remote studies with the Business Development team to identify user pain points and improve Hipe’s offerings.',
          'Created user interfaces for Hipe’s Android and iOS platforms, ensuring consistent and intuitive experiences across devices.',
          'Developed prototypes for Hipe UMKM and Hipe Care, laying the groundwork for the app’s pivot to Hipe Chat.',
          'Redesigned Kreki-119 app, simplifying navigation by reorganizing menu items and streamlining volunteer registration steps.',
          'Delivered rapid prototypes for MyAbsent, Smart Laundry, and Hive-Tenant Management within 2 days per project, accelerating development timelines.',
          'Mentored internship students, with 100% successfully transitioning to part-time roles.'
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
        tags: ['Sketch', 'Design System', 'Usability Testing', 'Interaction Design', 'Principle'],
        details: [
          'Created user interface designs and icons for Android, iOS, and web applications using Sketch',
          'Refined and developed user interface requests to meet project specifications and enhance user satisfaction',
          'Contributed to the development of the Proofn Design System, ensuring consistency and efficiency in design processes',
          'Led the first usability testing sessions, achieving an 81-percent success rate across 7 tasks with 6 participants',
          'Mentored internship students in usability testing, providing guidance and support to help them develop their skills',
          'Prototyped new designs and created interaction designs using Principle and Haiku.ai, enhancing the overall user experience',
          'Developed an interest in copywriting and content creation, contributing to the written aspects of design projects'
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
