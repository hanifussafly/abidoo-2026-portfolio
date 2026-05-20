/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';
import { articlesData } from '../data.ts';

export default function Writing() {
  return (
    <section id="case-studies" aria-label="Abid's Case Studies & Portfolios" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Column: Heading Zone */}
        <div className="md:col-span-3 p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5 md:sticky md:top-20"
          >
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-zinc-950 dark:text-zinc-50 tracking-tight">
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
              {articlesData.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.url}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className="group flex items-center justify-between p-5 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/15 transition-all select-none border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 focus-visible:outline-blue-500"
                  aria-label={`Read ${article.title} by ${article.author}`}
                >
                  <div className="flex items-center gap-4.5 min-w-0">
                    <div className="flex flex-col min-w-0 pr-2">
                       <h3 className="font-sans font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors truncate">
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

        </div>

      </div>
    </section>
  );
}
