/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about-info" aria-label="About summary" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Column: Heading Zone */}
        <div className="md:col-span-3 p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 md:sticky md:top-20"
          >
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              About
            </h2>
          </motion.div>
        </div>

        {/* Right Column: Paragraph Content Bullet highlights */}
        <div className="md:col-span-9 p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-6 leading-relaxed text-zinc-650 dark:text-zinc-350 select-text bg-white dark:bg-zinc-950">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-start gap-4 group"
          >
            {/* Custom Pixel Bullet Dot */}
            <div className="w-2.5 h-2.5 bg-zinc-150 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-650 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform" />
            <p className="font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold text-zinc-950 dark:text-zinc-50">UI/UX and Product Designer with 7+ years of experience</span> helping teams turn complex ideas into simple, effective, and conversion-focused digital products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-start gap-4 group"
          >
            {/* Custom Pixel Bullet Dot */}
            <div className="w-2.5 h-2.5 bg-zinc-150 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-650 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform" />
            <p className="font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              Experienced working across diverse sectors <span className="font-semibold text-zinc-950 dark:text-zinc-50">e-commerce, healthcare, education, and digital platforms</span>. Designs clear, scalable experiences with a strong focus on <span className="font-semibold text-zinc-950 dark:text-zinc-50">user research, design systems, and usability-driven execution</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-start gap-4 group"
          >
            {/* Custom Pixel Bullet Dot */}
            <div className="w-2.5 h-2.5 bg-zinc-150 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-650 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform" />
            <p className="font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              Outside work, Abid applies the same mindset to <span className="font-semibold text-zinc-950 dark:text-zinc-50">road and trail running</span>: consistency and long-term progress.
            </p>
          </motion.div>

          {/* Core tech-stack low profile summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-900/40 rounded border border-zinc-200/80 dark:border-zinc-800/80 font-mono text-[11px] leading-normal text-zinc-500 dark:text-zinc-400 flex items-start gap-2.5"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <span>
              <strong className="text-zinc-800 dark:text-zinc-200">Design Toolbelt:</strong> Figma, Canva, Perplexity, Antigravity, Framer, Sketch, Principle, and responsive mobile/web frameworks.
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
