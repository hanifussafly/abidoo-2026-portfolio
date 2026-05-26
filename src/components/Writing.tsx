/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { articlesData } from '../data.ts';

interface WritingProps {
  onSelectArticle?: (slug: string) => void;
}

const previewImages: Record<string, string[]> = {
  'robot-call': [
    '/RobotCall%20Scenario%20Before-After.png',
    '/Robot%20Call%20IA.jpg',
    '/RobotCall%20FlowChart%20Add%20Scenario.jpg',
    '/Robot%20Call%20FlowChart%20Add%20Campaign.jpg'
  ],
  'ezc-onboarding': [
    'https://framerusercontent.com/images/7sJSSp4SvfnbBQ06bQN7huINfc.png?width=600',
    'https://framerusercontent.com/images/FMlIEBV7O2QgAEFzOhw8NORro.png?width=600',
    'https://framerusercontent.com/images/HhDGZ7CcSocXZrBwsQPeOhvu1mY.png?width=600',
    'https://framerusercontent.com/images/QwB7msNJrQ7qxPCHlx1QejafcrU.png?width=600'
  ],
  'fashionvalet': [
    'https://framerusercontent.com/images/P8N4Mo4H0Uyiy5zlSwOnKxugHbQ.png?width=600',
    'https://framerusercontent.com/images/BSWVgkYfHHpH5Ydt6JF1p9jvo.png?width=600',
    'https://framerusercontent.com/images/OXcWRIwDO6UxrYC78QhKCil7scQ.png?width=600',
    'https://framerusercontent.com/images/cGQIVgfAjWGhFRDzFjI91vUcq2U.png?width=600'
  ],
  'telkom-university': [
    'https://framerusercontent.com/images/kXkdVS9JKeGANlcNbBICgMKmTxE.png?width=600',
    'https://framerusercontent.com/images/MzAJmOYvBI2AUpa5aP7Fj7LKGCU.png?width=600',
    'https://framerusercontent.com/images/3Ad5CB9Z8yzoWtQk2N3V0LvS28.png?width=600',
    'https://framerusercontent.com/images/gI1qa69SINqaBSRayTyFRjSO3U.png?width=600',
    'https://framerusercontent.com/images/NjvudQfpOlcVMAqL1OciikTw6IU.png?width=600'
  ],
  'duck-research': [
    'https://framerusercontent.com/images/lZL6NmldffFpmKJydRHPydhzQ.png?width=600',
    'https://framerusercontent.com/images/O52zwE4rnrNFcoMrkjR3ukc7WE.png?width=600',
    'https://framerusercontent.com/images/OedfD9Ydrh3t4LNxRsaeubwyRE.png?width=600',
    'https://framerusercontent.com/images/RL7uS9pF1XCKSarnRnYeLILMG4I.png?width=600'
  ],
  'mola-tv': [
    '/Mola%20Beranda.png',
    '/Mola%20Sign%20In%20and%20Sign%20up.png',
    '/Mola%20Walkthrough%201.png',
    '/Mola%20Walkthrough%202.png',
    '/Mola%20Walkthrough%203.png',
    '/Mola%20Flow%20User%20Baru.png',
    '/Mola%20Flow%20User%20Lama.png',
    '/Mola%20Wireframe.png',
    '/Mola%20Search.png',
    '/Mola%20Profile.png',
    '/Mola%20Section%20Feature.png'
  ],
  'niagahoster': [
    '/Niagahoster%20Wireframe%20layout.png',
    '/Niagahoster%20Homepage_Web.png',
    '/Niagahoster%20Hompage_Android.png'
  ]
};

export default function Writing({ onSelectArticle }: WritingProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!hoveredSlug) {
      setCurrentImageIndex(0);
      return;
    }

    const images = previewImages[hoveredSlug];
    if (!images || images.length <= 1) {
      setCurrentImageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 640);

    return () => clearInterval(timer);
  }, [hoveredSlug]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const getCoordinates = () => {
    const width = 280; // matching w-70 width style
    const height = 168; // matching h-42 height style
    
    let left = mousePos.x + 22;
    let top = mousePos.y + 15;
    
    if (typeof window !== 'undefined') {
      if (left + width + 20 > window.innerWidth) {
        left = mousePos.x - width - 22;
      }
      if (top + height + 20 > window.innerHeight) {
        top = mousePos.y - height - 15;
      }
    }
    
    return { left, top };
  };

  const coords = getCoordinates();
  const displayedArticles = isExpanded ? articlesData : articlesData.slice(0, 3);

  return (
    <section id="case-studies" aria-label="Abid's Case Studies & Portfolios" className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Column: Heading Zone */}
        <div className="md:col-span-3 p-4 sm:p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5 md:sticky md:top-20"
          >
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-zinc-955 dark:text-zinc-50 tracking-tight">
                Case Studies
              </h2>
              {/* Light styled dynamic counter */}
              <span className="font-sans font-light text-base text-zinc-400 dark:text-zinc-500 select-none pb-0.5" aria-hidden="true">
                ({articlesData.length})
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Articles Feed List */}
        <div className="md:col-span-9 flex flex-col justify-between bg-white dark:bg-zinc-950">
          
          <div role="feed" aria-label="Case Studies feed" className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <AnimatePresence initial={false}>
              {displayedArticles.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.url}
                  onClick={(e) => {
                    if (onSelectArticle && article.slug) {
                      e.preventDefault();
                      onSelectArticle(article.slug);
                    }
                  }}
                  onMouseEnter={() => setHoveredSlug(article.slug || null)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className="group flex items-center justify-between p-5 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/15 transition-all select-none border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 focus-visible:outline-blue-500 cursor-pointer"
                  aria-label={`Read ${article.title} by ${article.author}`}
                >
                  <div className="flex items-center gap-4.5 min-w-0 font-sans">
                    <div className="flex flex-col min-w-0 pr-2">
                       <h3 className="font-sans font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 transition-colors truncate">
                        {article.title}
                      </h3>
                      
                      <div className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 mt-1 flex items-center gap-1.5 uppercase tracking-wide">
                        <span>{article.author}</span>
                        <span>//</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Link arrow trigger inside article item */}
                  <div className="text-zinc-350 dark:text-zinc-650 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More/Less Button Control */}
          {articlesData.length > 3 && (
            <div className="p-4 sm:p-5 flex justify-center bg-zinc-50/50 dark:bg-zinc-900/10 border-t border-zinc-200 dark:border-zinc-800">
              <button
                id="toggle-case-studies-btn"
                onClick={() => setIsExpanded(prev => !prev)}
                className="font-mono text-[10px] sm:text-xs uppercase tracking-widest bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-850 dark:hover:bg-zinc-200 transition-colors py-2.5 px-6 border border-zinc-950 dark:border-zinc-100 rounded-none cursor-pointer flex items-center gap-2 font-semibold active:scale-98 transition-all"
              >
                <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Floating Hover Snapshot Tooltip */}
      <AnimatePresence>
        {hoveredSlug && previewImages[hoveredSlug] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              left: `${coords.left}px`,
              top: `${coords.top}px`,
              pointerEvents: 'none',
              zIndex: 100,
            }}
            className="hidden lg:block w-70 h-42 bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded shadow-2xl p-1 overflow-hidden"
          >
            <div className="w-full h-full rounded overflow-hidden relative bg-zinc-900 border border-zinc-850/80">
              {previewImages[hoveredSlug].map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Case Snapshot Preview ${idx + 1}`}
                  style={{ display: idx === currentImageIndex ? 'block' : 'none' }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 text-[8px] font-mono text-zinc-300 font-bold tracking-widest uppercase select-none rounded-[1px] leading-none">
                PREVIEW
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
