import { useEffect } from 'react';

interface SEOProps {
  activeCase: string | null;
}

export default function SEO({ activeCase }: SEOProps) {
  useEffect(() => {
    // 1. Core Metadata Definitions
    const siteTitle = "Abid Hanifussafly - Senior Product Designer & AI-Native UX Architect";
    const siteUrl = "https://abidoo.space";
    const defaultAuthor = "Abid Hanifussafly";
    const defaultImage = `${siteUrl}/src/avatar.jpeg`;

    let currentTitle = siteTitle;
    let currentDescription = "Senior Product Designer with 7+ years of experience across Singapore & Indonesia. Crafting B2B SaaS, e-commerce, and mobile app design systems utilizing AI-native workflows.";
    let currentUrl = siteUrl;
    let currentImage = defaultImage;
    let currentType = "profile";

    // Structured SEO Details matching specific case studies
    switch (activeCase) {
      case 'robot-call':
        currentTitle = "Robot Call UX Case Study: Designing Operational Clarity for Indotek.ai | Abid Hanifussafly";
        currentDescription = "A master-level product design case study on refining the automated campaign setup dashboard. Redesigned Information Architecture and scenario builders to drive outbound dialing speed and operational clarity.";
        currentUrl = `${siteUrl}/?case=robot-call`;
        currentImage = `${siteUrl}/robot-call-scenario-before-after.png`;
        currentType = "article";
        break;

      case 'ezc-onboarding':
        currentTitle = "EZCoordinator Case Study: B2B Onboarding & User Retention | Abid Hanifussafly";
        currentDescription = "Comprehensive UX design case study for EZCoordinator, a B2B real estate SaaS platform. Refined early user onboarding through progressive checklist disclosures and clear setup trackers.";
        currentUrl = `${siteUrl}/?case=ezc-onboarding`;
        currentImage = "https://framerusercontent.com/images/7sJSSp4SvfnbBQ06bQN7huINfc.png";
        currentType = "article";
        break;

      case 'fashionvalet':
        currentTitle = "Fashionvalet Case Study: Seamless E-commerce Transition to Shopify | Abid Hanifussafly";
        currentDescription = "Migrated complex apparel reservations and web storefronts of dUCk and LILIT to Shopify. Added custom multi-brand design systems, resulting in up to 15% conversion increases.";
        currentUrl = `${siteUrl}/?case=fashionvalet`;
        currentImage = "https://framerusercontent.com/images/P8N4Mo4H0Uyiy5zlSwOnKxugHbQ.png";
        currentType = "article";
        break;

      case 'telkom-university':
        currentTitle = "MyTel-U Mobile Super App Case Study: Campus UX Redesign | Abid Hanifussafly";
        currentDescription = "UX/UI redesign of the unified Telkom University academic portal serving over 15,000 active students. Solved interface density and course selection bottlenecks using scalable React principles.";
        currentUrl = `${siteUrl}/?case=telkom-university`;
        currentImage = "https://framerusercontent.com/images/kXkdVS9JKeGANlcNbBICgMKmTxE.png";
        currentType = "article";
        break;

      case 'duck-research':
        currentTitle = "dUCk Research Case Study: PDP Image Ratio & Layout Optimization | Abid Hanifussafly";
        currentDescription = "Specialized e-commerce user experience research studying product detail page thumbnail dimensions and user interaction behaviors to maximize buyer confidence and visual balance.";
        currentUrl = `${siteUrl}/?case=duck-research`;
        currentImage = "https://framerusercontent.com/images/lZL6NmldffFpmKJydRHPydhzQ.png";
        currentType = "article";
        break;

      case 'mola-tv':
        currentTitle = "Mola TV UX Case Study: Registration Personalization Flow | Abid Hanifussafly";
        currentDescription = "Restructured registration and user-generated subscription interfaces for the Mola TV mobile app. Designed personalized team onboarding lists and payment configurations to lower friction.";
        currentUrl = `${siteUrl}/?case=mola-tv`;
        currentImage = `${siteUrl}/mola-tv-homepage-redesign.png`;
        currentType = "article";
        break;

      case 'niagahoster':
        currentTitle = "Niagahoster Case Study: High-Conversion Web Redesign | Abid Hanifussafly";
        currentDescription = "Landing page and homepage optimization using User-Centered Design (UCD) foundations for Niagahoster. Cleaned package grids, payment options, and trust factors to streamline hosting sales.";
        currentUrl = `${siteUrl}/?case=niagahoster`;
        currentImage = `${siteUrl}/niagahoster-web-homepage-redesign.png`;
        currentType = "article";
        break;

      default:
        // Back on fallback default home
        currentTitle = siteTitle;
        currentDescription = "Abid Hanifussafly is a Senior UI/UX & Product Designer based in Jakarta (ID) & Singapore (SG). Shaper of digital products with 7+ years of experience in e-commerce, healthcare, and SaaS design systems.";
        currentUrl = siteUrl;
        currentImage = defaultImage;
        currentType = "profile";
        break;
    }

    // 2. DOM Updates
    document.title = currentTitle;

    const updateMeta = (nameOrProp: string, value: string, content: string, selectionKey: 'name' | 'property' = 'name') => {
      let metaElement = document.querySelector(`meta[${selectionKey}="${value}"]`);
      if (!metaElement) {
        metaElement = document.createElement('meta');
        metaElement.setAttribute(selectionKey, value);
        document.head.appendChild(metaElement);
      }
      metaElement.setAttribute('content', content);
    };

    updateMeta('name', 'description', currentDescription);
    updateMeta('property', 'og:title', currentTitle, 'property');
    updateMeta('property', 'og:description', currentDescription, 'property');
    updateMeta('property', 'og:url', currentUrl, 'property');
    updateMeta('property', 'og:image', currentImage, 'property');
    updateMeta('property', 'og:type', currentType, 'property');

    updateMeta('name', 'twitter:title', currentTitle);
    updateMeta('name', 'twitter:description', currentDescription);
    updateMeta('name', 'twitter:image', currentImage);

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 3. Structured Data JSON-LD Schemas Creation
    const schemas: object[] = [];

    // Core schema: Person (Active across the site)
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abid Hanifussafly",
      "jobTitle": "Senior Product Designer",
      "url": siteUrl,
      "image": defaultImage,
      "sameAs": [
        "https://linkedin.com/in/hanifussafly/",
        "https://www.behance.net/hanifussafly",
        "https://dribbble.com/abidoo",
        "https://x.com/hanifussafly",
        "https://www.figma.com/@abid"
      ],
      "knowsAbout": [
        "UX Design",
        "Product Strategy",
        "Design Systems",
        "User Interface Design",
        "User Research",
        "Fintech Design",
        "SaaS Product Design",
        "Shopify Optimization",
        "AI Workflow Automation"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta",
        "addressCountry": "ID"
      }
    };
    schemas.push(personSchema);

    // WebSite schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Abid Hanifussafly UI/UX Design Portfolio",
      "url": siteUrl,
      "author": {
        "@type": "Person",
        "name": defaultAuthor
      },
      "description": "Product Design UX/UI portfolio showcasing conversion-focused layouts, design system architectures, and case studies for Singapore/Indonesia digital spaces."
    };
    schemas.push(websiteSchema);

    // Project-specific CreativeWork schema (if a case study is mounted)
    if (activeCase) {
      const projectMappings: Record<string, { name: string; desc: string; keywords: string }> = {
        'robot-call': {
          name: "Robot Call Setup Dashboard Optimization",
          desc: "Improving operational Information Architecture and flow setup times for telecom operators on Koikoll telecom SaaS dashboard.",
          keywords: "Information Architecture, B2B, SaaS, Telecom, UI/UX"
        },
        'ezc-onboarding': {
          name: "EZCoordinator B2B SaaS Onboarding Design",
          desc: "Creation of progress bars and checklist onboarding structures within a real estate platform to boost trial-to-paid conversion rates.",
          keywords: "SaaS Onboarding, Growth Design, B2B SaaS, Interaction Design"
        },
        'fashionvalet': {
          name: "FashionValet Multi-Brand Shopify Migration and Design System",
          desc: "Pioneering transition and high-fidelity wireframing for dUCk & LILIT brands on Shopify, lifting operational development speed.",
          keywords: "Shopify design, Conversion rate optimization, eCommerce Design System"
        },
        'telkom-university': {
          name: "MyTel-U Academic Portal UX Super App Redesign",
          desc: "Consolidating 10 isolated dashboard tools into a single, intuitive education portal for university students.",
          keywords: "Super App, Academic Portal, Mobile App Design, Design System"
        },
        'duck-research': {
          name: "dUCk Product Detail Page Usability Research",
          desc: "Direct validation study exploring visual proportions, picture boundaries, and sizing guides to maximize ecommerce order rates.",
          keywords: "Usability Testing, User Needs, PDP Image Ratio Research"
        },
        'mola-tv': {
          name: "Mola TV Mobile App Onboarding Flow Personalization",
          desc: "Adding subscription packages, payment gates, and user preference modules to lower user entry threshold.",
          keywords: "Mobile App Design, Interactive Onboarding, Subscriber Retention"
        },
        'niagahoster': {
          name: "Niagahoster High-Acquisition Homepage Redesign",
          desc: "Using usercentered research models to organize plans, reviews, and client assurances for faster checkout speeds.",
          keywords: "User Centered Design, conversion landing page, Hosting Pricing Structure"
        }
      };

      const mapped = projectMappings[activeCase];
      if (mapped) {
        const creativeWorkSchema = {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": mapped.name,
          "headline": currentTitle,
          "description": mapped.desc,
          "url": currentUrl,
          "image": currentImage,
          "author": {
            "@type": "Person",
            "name": defaultAuthor
          },
          "keywords": mapped.keywords,
          "genre": "User Experience Portfolio Case Study",
          "datePublished": "2024-01-01"
        };
        schemas.push(creativeWorkSchema);
      }
    }

    // Clean old schemas and append updated configurations
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo-schema');
    oldScripts.forEach(el => el.remove());

    schemas.forEach(schemaObj => {
      const scriptNode = document.createElement('script');
      scriptNode.type = 'application/ld+json';
      scriptNode.className = 'dynamic-seo-schema';
      scriptNode.text = JSON.stringify(schemaObj);
      document.head.appendChild(scriptNode);
    });

  }, [activeCase]);

  return null;
}
