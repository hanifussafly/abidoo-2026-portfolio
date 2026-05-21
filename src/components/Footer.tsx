/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, X, Linkedin, Dribbble, Figma, Palette, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { socialLinks } from '../data.ts';

const iconMap: Record<string, any> = {
  x: X,
  linkedin: Linkedin,
  dribbble: Dribbble,
  figma: Figma,
  palette: Palette,
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor grid scroll distance to reveal "Back to top" arrow in corner
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="w-full relative bg-zinc-50/10 dark:bg-zinc-950/20 transition-colors duration-200">
      
      {/* 1. MIDDLE LINKS & SOCIAL BADGES (Image 3 layout aligned to the 12-col grid) */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Side: Empty column following standard architecture */}
        <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 bg-transparent hidden md:block select-none" />

        {/* Right Side: Footer Content and pill indicators inside col-span-9 */}
        <div className="col-span-1 md:col-span-9 p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-6 bg-white dark:bg-zinc-950">
          
          {/* Attributions and Inspired Credits */}
          <div className="flex flex-col gap-2 max-w-xl">
            <p className="font-mono text-[11px] sm:text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed tracking-wide select-text">
              Inspired by <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">tailwindcss.com</a> / <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">ui.shadcn.com</a> / <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">vercel.com</a> / <a href="https://chanhdai.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">chanhdai.com</a>
            </p>
            <p className="font-mono text-[11px] sm:text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed tracking-wide select-text">
              Built with care by <span className="font-semibold text-zinc-650 dark:text-zinc-350">Abid Hanifussafly and Antigravity</span>
            </p>
          </div>

          {/* Horizontal Navigation Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs select-none">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.iconName] || Globe;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 px-2.5 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  title={`${social.name} Profile`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

        </div>

      </div>

      {/* 2. HUGE OUTLINED BRAND SIGNATURE TEXT: spanning across bottom */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 overflow-hidden py-10 bg-white dark:bg-zinc-950 select-none">
        
        {/* Full width: Giant Name */}
        <div className="w-full px-4 text-center select-none">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.05em] lowercase outlined-text select-none text-zinc-200/40 dark:text-zinc-850/15 flex justify-center flex-wrap">
            {Array.from("abid hanifussafly").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block cursor-default select-none transition-colors duration-150"
                whileHover={{
                  color: "#f97316",
                  WebkitTextStrokeColor: "#f97316",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </div>

      </div>

      {/* 3. FLOATING BACK TO TOP ARROW IN CORNER (Image 2/3 bottom right action key) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded shadow-lg text-zinc-650 dark:text-zinc-350 hover:text-zinc-950 dark:hover:text-zinc-50 cursor-pointer z-30 transition-all focus-visible:outline-blue-500"
            aria-label="Scroll back to top of page"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.2px]" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
