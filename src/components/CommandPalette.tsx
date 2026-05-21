/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, X, Briefcase, FileText, User, Share2 } from 'lucide-react';
import { socialLinks, experienceData, articlesData } from '../data.ts';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group all searchable content
  const items = [
    { id: 'about', title: 'About Abid Hanifussafly', category: 'Section', icon: <User className="w-4 h-4" /> },
    { id: 'experience', title: 'Work Experience', category: 'Section', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'case-studies', title: 'Case Studies & Portfolios', category: 'Section', icon: <FileText className="w-4 h-4" /> },
    ...socialLinks.map(s => ({
      id: `social-${s.name.toLowerCase()}`,
      title: `Social: ${s.name} (${s.username})`,
      category: 'Socials',
      url: s.url,
      icon: <Share2 className="w-4 h-4" />
    })),
    ...experienceData.map(exp => ({
      id: `job-${exp.company.toLowerCase()}`,
      title: `Experience: ${exp.roles[0].title} at ${exp.company}`,
      category: 'Work',
      action: () => {
        const el = document.getElementById(`exp-item-${exp.company.toLowerCase()}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
      icon: <Briefcase className="w-4 h-4" />
    })),
    ...articlesData.map(art => ({
      id: `art-${art.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: `Article: "${art.title}" by ${art.author}`,
      category: 'Articles',
      url: art.url,
      icon: <FileText className="w-4 h-4" />
    }))
  ];

  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      // Timeout to ensure modal has mounted before focus is called
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  const handleSelect = (item: typeof items[number]) => {
    onClose();
    
    // Custom action triggers
    if ('action' in item && item.action) {
      item.action();
    } else if ('url' in item && item.url && item.url !== '#') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Trigger high contrast flash for search landing
        el.classList.add('transition-all', 'ring-4', 'ring-orange-500/40');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-orange-500/40');
        }, 1500);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-2xl overflow-hidden text-zinc-900 dark:text-zinc-150"
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Command Menu"
          >
            {/* Input Bar */}
            <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3 py-2.5 gap-2">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search details..."
                className="w-full bg-transparent border-0 outline-none text-sm placeholder-zinc-400 font-sans"
              />
              <span className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-400 flex items-center gap-0.5">
                <Command className="w-2.5 h-2.5" /> ESC
              </span>
              <button 
                onClick={onClose} 
                className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 hover:text-zinc-650"
                aria-label="Close search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[320px] overflow-y-auto p-2 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-zinc-400 font-sans">
                  No matches found for <span className="font-mono text-zinc-500">"{query}"</span>
                </div>
              ) : (
                <div role="listbox" aria-label="Search results">
                  {/* Grouped results view list */}
                  {filtered.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelect(item)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded text-left gap-3 border border-transparent transition-colors duration-150 ${
                          isSelected
                            ? 'bg-zinc-100 dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700/60'
                            : 'hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`p-1 rounded ${
                            isSelected 
                              ? 'text-orange-500 bg-white/50 dark:bg-zinc-900/50' 
                              : 'text-zinc-400 group-hover:text-zinc-500'
                          }`}>
                            {item.icon}
                          </span>
                          <span className="text-xs font-medium font-sans truncate">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-850 text-zinc-400 dark:text-zinc-500 border border-zinc-200/40 dark:border-zinc-800/20 shrink-0">
                          {item.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Hint / Helper Bar */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-200 dark:border-zinc-800/60 px-3 py-2 flex justify-between text-[10px] font-mono text-zinc-400 select-none">
              <span className="flex items-center gap-1.5">
                Use <kbd className="bg-white dark:bg-zinc-850 px-1 border rounded">↑/↓</kbd> to navigate
              </span>
              <span className="flex items-center gap-1.5">
                Press <kbd className="bg-white dark:bg-zinc-850 px-1 border rounded font-bold">↵</kbd> to select
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
