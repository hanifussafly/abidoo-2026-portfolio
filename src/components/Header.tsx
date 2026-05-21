/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onSearchOpen: () => void;
  dark: boolean;
  toggleTheme: () => void;
  showLogo?: boolean;
  onHomeClick?: () => void;
}

export default function Header({ onSearchOpen, dark, toggleTheme, showLogo = false, onHomeClick }: HeaderProps) {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 border-x border-zinc-200 dark:border-zinc-800 px-6 bg-white dark:bg-zinc-950">
        
        {/* Left Side: Logo and Nav Links */}
        <div className="flex items-center gap-6">
          <a 
            href="#root" 
            onClick={(e) => {
              if (onHomeClick) {
                onHomeClick();
              }
            }}
            className="hidden"
            aria-label="Abid Hanifussafly Portfolio Home"
          >
            ABIDOO
          </a>
          
          {/* Plain Text Nav Links matching abid's profile */}
          <nav className="hidden sm:flex items-center gap-5" aria-label="Main Navigation">
            <a 
              href="#about" 
              onClick={() => {
                if (onHomeClick) onHomeClick();
              }}
              className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors text-zinc-500 dark:text-zinc-400 font-sans text-xs font-semibold tracking-wider uppercase focus-visible:outline-blue-500 rounded"
            >
              About
            </a>
            <a 
              href="#case-studies" 
              onClick={() => {
                if (onHomeClick) onHomeClick();
              }}
              className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors text-zinc-500 dark:text-zinc-400 font-sans text-xs font-semibold tracking-wider uppercase focus-visible:outline-blue-500 rounded"
            >
              Case Studies
            </a>
            <a 
              href="#experience" 
              onClick={() => {
                if (onHomeClick) onHomeClick();
              }}
              className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors text-zinc-500 dark:text-zinc-400 font-sans text-xs font-semibold tracking-wider uppercase focus-visible:outline-blue-500 rounded"
            >
              Experience
            </a>
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          
          {/* Search Button */}
          <button
            onClick={onSearchOpen}
            className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-850 text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-350 rounded border border-zinc-200 dark:border-zinc-855 transition-all text-xs focus-visible:outline-blue-500 cursor-pointer"
            aria-label="Search portfolio"
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.2px]" />
            <span className="hidden sm:inline font-sans text-[11px] font-semibold text-zinc-500">Search</span>
            <kbd className="hidden sm:flex items-center gap-0.5 font-mono text-[9px] px-1 py-0.2 bg-zinc-200/50 dark:bg-zinc-800 rounded text-zinc-400 dark:text-zinc-500">
              <span>⌘</span>K
            </kbd>
          </button>

          {/* Separator */}
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-all duration-200 focus-visible:outline-blue-500 cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Sun className="w-3.5 h-3.5 stroke-[2px]" />
            ) : (
              <Moon className="w-3.5 h-3.5 stroke-[2px]" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
