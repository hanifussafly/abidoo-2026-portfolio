/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [randomParams, setRandomParams] = useState<Record<string, { delay: string; duration: string }>>({});

  useEffect(() => {
    const checkViewportLimit = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkViewportLimit();
    window.addEventListener('resize', checkViewportLimit);

    const params: Record<string, { delay: string; duration: string }> = {};
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 23; c++) {
        params[`${r}-${c}`] = {
          delay: `${(Math.random() * 5).toFixed(2)}s`,
          duration: `${(1.5 + Math.random() * 2.5).toFixed(2)}s`
        };
      }
    }
    setRandomParams(params);

    return () => window.removeEventListener('resize', checkViewportLimit);
  }, []);

  return (
    <div 
      className="inline-grid gap-[2px] sm:gap-[3px] md:gap-[4.5px] p-2 bg-transparent relative"
      style={{ gridTemplateColumns: 'repeat(23, minmax(0, 1fr))' }}
      aria-label="ABIDOO Logo"
      role="img"
    >
      <style>{`
        @keyframes firefly-dark {
          0%, 15%, 85%, 100% {
            background-color: #fafafa;
            box-shadow: none;
          }
          40%, 60% {
            background-color: #f97316;
            box-shadow: 0 0 8px #f97316, 0 0 16px #f97316;
          }
        }
        @keyframes firefly-light {
          0%, 15%, 85%, 100% {
            background-color: #09090b;
            box-shadow: none;
          }
          40%, 60% {
            background-color: #f97316;
            box-shadow: 0 0 8px #f97316, 0 0 16px #f97316;
          }
        }
        .animate-firefly-dark {
          animation: firefly-dark ease-in-out infinite;
        }
        .animate-firefly-light {
          animation: firefly-light ease-in-out infinite;
        }
      `}</style>

      {LOGO_GRID.flatMap((row, rIdx) => 
        row.map((val, cIdx) => {
          const isFilled = val === 1;
          const coordKey = `${rIdx}-${cIdx}`;
          const key = `pixel-${rIdx}-${cIdx}`;
          const mobileAnim = isMobileOrTablet && isFilled && randomParams[coordKey];
          
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
              } ${
                mobileAnim ? 'animate-firefly-light dark:animate-firefly-dark font-semibold' : ''
              }`}
              style={
                mobileAnim 
                  ? { 
                      animationDelay: randomParams[coordKey].delay, 
                      animationDuration: randomParams[coordKey].duration 
                    } 
                  : undefined
              }
            />
          );
        })
      )}
    </div>
  );
}
