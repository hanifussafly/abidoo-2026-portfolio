/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const LOGO_GRID = [
  // A (3) + space (1) + B (3) + space (1) + I (3) + space (1) + D (3) + space (1) + O (3) + space (1) + O (3) = 23 columns
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0]
];

export default function CDLogo() {
  return (
    <div 
      className="inline-grid gap-[2px] sm:gap-[3px] md:gap-[4.5px] p-2 bg-transparent"
      style={{ gridTemplateColumns: 'repeat(23, minmax(0, 1fr))' }}
      aria-label="ABIDOO Logo"
      role="img"
    >
      {LOGO_GRID.flatMap((row, rIdx) => 
        row.map((val, cIdx) => {
          const isFilled = val === 1;
          const key = `pixel-${rIdx}-${cIdx}`;
          
          return (
            <motion.div
              key={key}
              aria-hidden="true"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: (rIdx * 23 + cIdx) * 0.006,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              whileHover={isFilled ? { 
                scale: 1.25, 
                backgroundColor: '#f97316', // Tailwind orange-500
                transition: { duration: 0.1 } 
              } : undefined}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 transition-colors duration-200 ${
                isFilled 
                  ? 'bg-zinc-950 dark:bg-zinc-50 rounded-[1px]' 
                  : 'bg-transparent'
              }`}
            />
          );
        })
      )}
    </div>
  );
}
