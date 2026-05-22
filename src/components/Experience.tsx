/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { experienceData } from '../data.ts';

export default function Experience() {
  // Track active filter tag for cross-highlighting
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string, e: MouseEvent) => {
    e.stopPropagation();
    setSelectedTag(prev => prev === tag ? null : tag);
  };

  return (
    <section id="experience" aria-label="Work Experience" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Column: Heading Zone */}
        <div className="md:col-span-3 p-4 sm:p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
          <div className="md:sticky md:top-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-zinc-950 dark:text-zinc-50 tracking-tight">
                  Experience
                </h2>
                {/* Light styled dynamic counter */}
                <span className="font-sans font-light text-base text-zinc-400 dark:text-zinc-500 select-none pb-0.5" aria-hidden="true">
                  ({experienceData.length})
                </span>
              </div>
            </motion.div>
            
            <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500 mt-1.5 leading-relaxed tracking-wide">
              Click on tags to highlight related roles across companies.
            </p>

            {/* Clear Filters Indicator */}
            {selectedTag && (
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedTag(null)}
                className="mt-3.5 px-2.5 py-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-350 font-mono text-[10px] uppercase font-semibold tracking-wider rounded-none flex items-center gap-1.5 cursor-pointer hover:bg-zinc-100 transition-colors"
              >
                <span>Filtered: {selectedTag}</span>
                <span className="font-bold">×</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Right Column: Roles Timeline List (Statically displayed) */}
        <div className="md:col-span-9 bg-white dark:bg-zinc-950">
          {experienceData.map((exp, expIdx) => {
            const companyId = exp.company.toLowerCase();
            
            // Check if this experience item contains the selected filter tag
            const hasSelectedTag = selectedTag 
              ? exp.roles.some(r => r.tags.includes(selectedTag))
              : false;

            return (
              <div 
                key={exp.company}
                id={`exp-item-${companyId}`}
                className={`border-b last:border-b-0 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 md:p-8 relative transition-all duration-300 ${
                  selectedTag && !hasSelectedTag ? 'opacity-40 saturate-50' : 'opacity-100'
                }`}
              >
                {/* 1. Header Row (Company Name, active indicator) */}
                <div className="w-full flex items-center justify-between text-left group">
                  <div className="flex items-center gap-3">
                    {/* Square icon emblem */}
                    {exp.logoImage || exp.logoEmoji ? (
                      <div className="w-8 h-8 rounded-none bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex items-center justify-center font-display text-base overflow-hidden shrink-0">
                        {exp.logoImage ? (
                          <img
                            src={exp.logoImage}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          exp.logoEmoji
                        )}
                      </div>
                    ) : null}

                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-lg sm:text-xl text-zinc-950 dark:text-zinc-50 group-hover:text-orange-500 transition-colors">
                        {exp.company}
                      </span>
                      {/* Active green/blue glowing dot matching Image 2 */}
                      {exp.active && (
                        <span className="inline-flex items-center gap-1 font-mono text-[9px] text-zinc-500 font-semibold bg-zinc-50 dark:bg-zinc-900 px-1.5 py-0.5 rounded-none border border-zinc-250 dark:border-zinc-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Expanded Roles Details list */}
                <div
                  id={`roles-detail-${companyId}`}
                  className="pt-5 space-y-6 relative mt-2"
                >

                  {exp.roles.map((role, rIdx) => {
                    const isHighlighted = selectedTag && role.tags.includes(selectedTag);

                    return (
                      <div key={rIdx} className="relative">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                            <h3 className="font-sans font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-50">
                              {role.title}
                            </h3>
                            
                            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                              <span>{role.type}</span>
                              <span>//</span>
                              <span>{role.duration}</span>
                              <span>//</span>
                              <span className="font-medium text-zinc-550 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900 px-1 py-0.5 rounded-none border border-zinc-200/20 dark:border-zinc-800/20">{role.length}</span>
                            </div>
                          </div>

                          {/* Custom highlights of bullet details */}
                          {role.details && role.details.length > 0 && (
                            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-zinc-650 dark:text-zinc-340 font-sans mt-2.5">
                              {role.details.map((detail, dIdx) => (
                                <li key={dIdx} className="leading-relaxed">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Tags of tech stacks */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {role.tags.map(tag => {
                              const isCurrentFilter = selectedTag === tag;
                              return (
                                <button
                                  key={tag}
                                  onClick={(e) => handleTagClick(tag, e)}
                                  className={`px-2 py-0.5 font-mono text-[9px] sm:text-[10px] rounded-none transition-all duration-150 cursor-pointer ${
                                    isCurrentFilter
                                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-900 dark:border-zinc-100'
                                      : isHighlighted
                                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-400 dark:border-zinc-600'
                                        : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-500 dark:text-zinc-400 border-zinc-250 dark:border-zinc-800/80'
                                  } border`}
                                  aria-label={`Toggle tag filter for ${tag}`}
                                >
                                  {tag}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
