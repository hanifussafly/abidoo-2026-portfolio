/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Socials from './components/Socials.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Writing from './components/Writing.tsx';
import Footer from './components/Footer.tsx';
import CommandPalette from './components/CommandPalette.tsx';
import CaseStudyEZC from './components/CaseStudyEZC.tsx';
import CaseStudyFV from './components/CaseStudyFV.tsx';
import CaseStudyTelkom from './components/CaseStudyTelkom.tsx';
import CaseStudyDuck from './components/CaseStudyDuck.tsx';
import CaseStudyMola from './components/CaseStudyMola.tsx';
import CaseStudyNiagahoster from './components/CaseStudyNiagahoster.tsx';
import CaseStudyRobotCall from './components/CaseStudyRobotCall.tsx';
import ImageZoomModal from './components/ImageZoomModal.tsx';
import SEO from './components/SEO.tsx';


export default function App() {
  const [dark, setDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  // Synchronize case study state from URL parameters on mount and browser navigation events
  useEffect(() => {
    const handleUrlSync = () => {
      const params = new URLSearchParams(window.location.search);
      const caseParam = params.get('case');
      setActiveArticle(caseParam);
    };

    handleUrlSync();
    window.addEventListener('popstate', handleUrlSync);
    return () => window.removeEventListener('popstate', handleUrlSync);
  }, []);

  // Unified routing state engine that updates states, controls address bars, and scrolls pages cleanly
  const handleSelectCaseStudy = (slug: string | null) => {
    setActiveArticle(slug);
    
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set('case', slug);
    } else {
      url.searchParams.delete('case');
    }
    window.history.pushState({}, '', url.pathname + url.search);
    
    // Settle focus scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Global document image clicks observer to trigger case-study image zoom
  useEffect(() => {
    const handleImageTrigger = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        // Only target images displayed inside the main case-study body container (any <article>)
        const article = target.closest('article');
        if (article) {
          const src = target.getAttribute('src');
          const alt = target.getAttribute('alt') || '';
          if (src) {
            setZoomImage({ src, alt });
          }
        }
      }
    };

    document.addEventListener('click', handleImageTrigger);
    return () => document.removeEventListener('click', handleImageTrigger);
  }, []);


  // Synchronize light/dark theme with local storage and html class list
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark(prev => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return nextTheme;
    });
  };

  // Listen for scroll to toggle small CD logo in sticky header
  useEffect(() => {
    const handleScroll = () => {
      // Show CD logo after scrolling past Hero dot-grid section (~160px)
      if (window.scrollY > 160) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Cmd+K / Ctrl+K keyboard shortcut to launch Command Palette search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative font-sans antialiased overflow-x-hidden">
      
      {/* Dynamic SEO Head & Schema JSON-LD Injection Layer */}
      <SEO activeCase={activeArticle} />

      {/* WCAG compliant skip navigation link to aid accessibility */}
      <a href="#main-content" className="skip-link font-mono text-xs font-semibold uppercase tracking-wider">
        Skip to main content
      </a>

      {/* Persistent Sticky Header Nav */}
      <Header 
        onSearchOpen={() => setIsSearchOpen(true)} 
        dark={dark} 
        toggleTheme={toggleTheme} 
        showLogo={showLogo}
        onHomeClick={() => handleSelectCaseStudy(null)}
      />

      {/* Center Drafting Board central layout container of width 5xl */}
      <div className="max-w-5xl mx-auto w-full border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative min-h-screen shadow-sm">
        
        {/* Core Content */}
        <main id="main-content" className="relative z-10 w-full">
          
          {activeArticle === 'ezc-onboarding' ? (
            <CaseStudyEZC 
              onBack={() => handleSelectCaseStudy(null)} 
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'fashionvalet' ? (
            <CaseStudyFV 
              onBack={() => handleSelectCaseStudy(null)} 
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'telkom-university' ? (
            <CaseStudyTelkom 
              onBack={() => handleSelectCaseStudy(null)} 
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'duck-research' ? (
            <CaseStudyDuck 
              onBack={() => handleSelectCaseStudy(null)} 
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'mola-tv' ? (
            <CaseStudyMola 
              onBack={() => handleSelectCaseStudy(null)} 
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'niagahoster' ? (
            <CaseStudyNiagahoster
              onBack={() => handleSelectCaseStudy(null)}
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : activeArticle === 'robot-call' ? (
            <CaseStudyRobotCall
              onBack={() => handleSelectCaseStudy(null)}
              onNavigateCase={(slug) => handleSelectCaseStudy(slug)}
            />
          ) : (
            <>
              {/* Section 1: Top cd pixel logo, avatar photo banner, contact credentials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
              </motion.div>

              {/* Section 2: Social grid links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Socials />
              </motion.div>

              {/* Section 3: Descriptive text highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <About />
              </motion.div>

              {/* Section 4: Expandable listing of blogs (Case Studies) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Writing onSelectArticle={(slug) => handleSelectCaseStudy(slug)} />
              </motion.div>

              {/* Section 5: Expandable timelines for job histories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Experience />
              </motion.div>
            </>
          )}

        </main>

        {/* Global Footer element */}
        <Footer />

      </div>

      {/* Accessible Interactive Command Palette (search box) modal portal */}
      <CommandPalette 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectArticle={(slug) => handleSelectCaseStudy(slug)}
      />

      {/* Global Image Inspector Modal */}
      <ImageZoomModal 
        src={zoomImage ? zoomImage.src : null}
        alt={zoomImage ? zoomImage.alt : ''}
        onClose={() => setZoomImage(null)}
      />

    </div>

  );
}
