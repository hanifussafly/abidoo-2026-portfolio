/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, X, Linkedin, Dribbble, Figma, Palette, Globe } from 'lucide-react';
import { socialLinks } from '../data.ts';

// Map icon names to Lucide icon components
const iconMap: Record<string, ComponentType<any>> = {
  x: X,
  linkedin: Linkedin,
  dribbble: Dribbble,
  figma: Figma,
  palette: Palette,
};

export default function Socials() {
  return (
    <section id="socials" aria-label="Social connections" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left padding cell: empty and separated by the main vertical divider */}
        <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 bg-transparent hidden md:block select-none" />

        {/* Right content cell: list of social badges within col-span-9 */}
        <div className="col-span-1 md:col-span-9 grid grid-cols-2 sm:grid-cols-3 bg-white dark:bg-zinc-950">
          
          {socialLinks.map((social, index) => {
            const IconComponent = iconMap[social.iconName] || Globe;
            
            // Calculate border patterns manually to prevent overlapping double-borders
            const smRightBorder = index % 3 !== 2 ? 'sm:border-r sm:border-zinc-200 sm:dark:border-zinc-800' : 'sm:border-r-0';
            const smBottomBorder = index < 3 ? 'sm:border-b sm:border-zinc-200 sm:dark:border-zinc-800' : 'sm:border-b-0';
            
            const xsRightBorder = index % 2 === 0 ? 'border-r border-zinc-200 dark:border-zinc-800' : 'border-r-0';
            const xsBottomBorder = index < 4 ? 'border-b border-zinc-200 dark:border-zinc-800' : 'border-b-0';

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`group flex items-center justify-between px-5 py-4 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-all select-none focus-visible:outline-orange-500 hover:z-10 relative ${xsRightBorder} ${xsBottomBorder} ${smRightBorder} ${smBottomBorder}`}
                aria-label={`Visit Abid Hanifussafly's profile on ${social.name}`}
              >
                {/* Left Logo + Name Indicator */}
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4 text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors" />
                  </span>
                  
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="font-sans font-semibold text-xs text-zinc-800 dark:text-zinc-150 truncate">
                      {social.name}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 mt-0.5 truncate uppercase tracking-widest">
                      @{social.username}
                    </span>
                  </div>
                </div>

                {/* Right Arrow - animate shifting on parent hover */}
                <div className="text-zinc-350 dark:text-zinc-650 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-250 shrink-0">
                  <motion.div
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 2, y: -2 }
                    }}
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[1.8px]" />
                  </motion.div>
                </div>

                {/* Interactive subtle scale on hover click */}
                <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/10 pointer-events-none rounded transition-colors" />
              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}
