/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import avatarImg from '../avatar.jpeg';

export default function InteractiveAvatar() {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div 
      className="relative w-full aspect-square sm:aspect-[4/5] md:aspect-auto md:h-full md:min-h-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center select-none cursor-pointer group"
      onClick={() => setIsWaving(t => !t)}
      onMouseEnter={() => setIsWaving(true)}
      onMouseLeave={() => setIsWaving(false)}
      role="img"
      aria-label="Portrait of Abid Hanifussafly"
    >
      <img
        src={avatarImg}
        alt="Abid Hanifussafly Portrait"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subtle modern vignette overlay */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Floating text badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <span className="bg-zinc-900/90 dark:bg-zinc-50/90 text-white dark:text-zinc-950 font-mono text-[9px] font-bold py-1 px-2.5 rounded-none tracking-wider uppercase">
          SAY HELLO 👋
        </span>
      </div>

      {/* Interactive indicator wave bubble */}
      {isWaving && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute bottom-12 bg-zinc-950/95 dark:bg-zinc-50/95 text-white dark:text-zinc-900 text-[10px] font-mono py-1.5 px-3 rounded-none border border-zinc-850 dark:border-zinc-200 z-20 pointer-events-none text-center"
        >
          Yo! How's it going?
        </motion.div>
      )}

      {/* Decorative Blueprint Corner Markers */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-300 dark:border-zinc-700 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-300 dark:border-zinc-700 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-300 dark:border-zinc-700 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-300 dark:border-zinc-700 pointer-events-none" />
    </div>
  );
}
