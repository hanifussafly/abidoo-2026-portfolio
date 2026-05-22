/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  User, 
  ShoppingBag, 
  Play 
} from 'lucide-react';

interface CaseStudyFVProps {
  onBack: () => void;
  onNavigateCase?: (slug: string) => void;
}

interface FramerImageProps {
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
  caption: string;
}

const FramerImage = ({ desktopSrc, tabletSrc, mobileSrc, caption }: FramerImageProps) => (
  <div className="my-8 w-full flex flex-col gap-2.5">
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
      <picture className="w-full block">
        <source media="(max-width: 640px)" srcSet={mobileSrc} />
        <source media="(max-width: 1024px)" srcSet={tabletSrc} />
        <img 
          src={desktopSrc} 
          alt={caption} 
          className="w-full h-auto object-cover select-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </picture>
    </div>
    <span className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-center">
      {caption}
    </span>
  </div>
);

// Helper for interactive prototype previews
const PrototypePreview = ({ label, secondaryLabel }: { label: string; secondaryLabel?: string }) => (
  <div className="my-8 w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 relative group select-none aspect-video">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10">
      <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center mb-3 border border-orange-500/30 group-hover:scale-105 transition-transform duration-350">
        <Play className="w-5 h-5 fill-white ml-0.5" />
      </div>
      <span className="font-mono text-[9px] uppercase text-orange-400 tracking-widest font-bold mb-1">
        Interactive Prototype Walkthrough
      </span>
      <h4 className="font-sans font-bold text-sm text-zinc-100 mb-0.5 leading-snug">
        {label}
      </h4>
      {secondaryLabel && (
        <p className="font-sans text-xs text-zinc-405 dark:text-zinc-400 max-w-md leading-relaxed">
          {secondaryLabel}
        </p>
      )}
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/70 backdrop-blur-sm z-20 flex items-center justify-between px-4 border-t border-zinc-900">
      <div className="flex items-center gap-3">
        <Play className="w-3 h-3 text-zinc-500 fill-zinc-500" />
        <div className="w-32 sm:w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-1/4 h-full bg-orange-600 rounded-full" />
        </div>
        <span className="font-mono text-[9px] text-zinc-500">00:15 / 01:20</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded bg-zinc-500" />
        <div className="w-3 h-3 border border-zinc-500 rounded-sm" />
      </div>
    </div>
  </div>
);

export default function CaseStudyFV({ onBack, onNavigateCase }: CaseStudyFVProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article className="w-full bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* Back Button Navigation Bar */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 md:px-8 py-4 bg-zinc-50/20 dark:bg-zinc-900/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors focus-visible:outline-blue-500 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          Case Study // Fashionvalet Sunset
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 md:px-8 py-10 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-orange-500 dark:text-orange-400 font-bold uppercase tracking-widest block mb-3">
              UX/UI DESIGN CASE STUDY
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight select-text">
              From Fashionvalet to dUCk & LILIT. : Crafting Prototypes for a Seamless Transition
            </h1>
          </div>

          {/* Hero Image Section representing: Website for FV Sunset part FAQ and Touchpoints to dUCk & LILIT */}
          <FramerImage 
            desktopSrc="https://framerusercontent.com/images/P8N4Mo4H0Uyiy5zlSwOnKxugHbQ.png?width=3720&height=1800"
            tabletSrc="https://framerusercontent.com/images/5jkIA22SmEzSNPrahnz97VUHlv8.png?width=2190&height=1800"
            mobileSrc="https://framerusercontent.com/images/HawtHJp7ZY1Ve9APVbseAFSb2Fw.png?width=1146&height=1326"
            caption="Image - Website for FV Sunset part FAQ and Touchpoints to dUCk & LILIT."
          />
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> UI Designer, UX Designer
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> 6-17 June 2022
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-zinc-400" /> FashionValet, dUCk, LILIT
          </span>
        </div>
      </div>

      {/* Main Narrative Sections with Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left column sidebar for local table of contents */}
        <div className="md:col-span-3 p-4 sm:p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 hidden md:block">
          <div className="sticky top-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4 font-sans text-xs font-bold tracking-wider text-zinc-400 uppercase select-none">
              <span className="text-[10px] text-zinc-300 dark:text-zinc-650 font-mono tracking-widest font-bold mb-1">Navigation</span>
              <a href="#product-platform" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">00 // Product & Platform</a>
              <a href="#problem" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">01 // The Problem</a>
              <a href="#goal" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">02 // Goal</a>
              <a href="#methodology" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // Methodology</a>
              <a href="#process" className="hover:text-zinc-955 dark:hover:text-zinc-50 transition-colors">04 // The Process</a>
              <a href="#result" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">05 // Final Result</a>
              <a href="#lessons" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">06 // Lesson Learned</a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-14 select-text max-w-3xl">

          {/* 0. Product & Platform */}
          <section id="product-platform" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">00</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Product & Platform</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              About Fashionvalet Lifestyle E-commerce
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                FashionValet Sdn Bhd is a prominent e-commerce platform based in Malaysia. It was founded in 2010 by Vivy Yusof and Fadzarudin Shah Anuar. The company specializes in selling fashion and lifestyle products, including clothing, accessories, and cosmetics. FashionValet is known for featuring local and regional brands, supporting the growth of Southeast Asian designers and labels.
              </p>
              <p>
                2020-2022 they are focusing on highlighting their products dUCk and LILIT. dUCk is specialized for high-end consumers, while LILIT is for the lower end.
              </p>
              <p>
                In 2022, I contributed to the sunsetting of Fashionvalet and they are focusing on selling through their own dUCk and LILIT. platforms.
              </p>
            </div>

            {/* Image - First iteration for FV Sunset using fashionvalet style guide */}
            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/BSWVgkYfHHpH5Ydt6JF1p9jvo.png?width=3720&height=1800"
              tabletSrc="https://framerusercontent.com/images/LKfVhRlt6y6osb9VhyU8YLiRg3c.png?width=2190&height=1800"
              mobileSrc="https://framerusercontent.com/images/hrnRHFMwm4BcMgS9d4TsCvSa8.png?width=1146&height=1326"
              caption="Image - First iteration for FV Sunset using fashionvalet style guide"
            />
          </section>

          {/* 1. The Problem */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Problem</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Sunsetting of Fashionvalet, and the transfer of active users to dUCk & LILIT. platforms.
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                FashionValet Sdn Bhd shifted its focus to its own brands, dUCk and LILIT., and closed the platform to simplify operations and adapt to market trends. This allowed them to better serve niche markets, like modest fashion, while maintaining full control over quality and branding for a more sustainable business.
              </p>
            </div>
          </section>

          {/* 2. Goal */}
          <section id="goal" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-905 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Goal</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Getting Fashionvalet users to access and register into dUCk and LILIT. platforms.
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                And gives an exclusive offer 15% off for the first purchase
              </p>
            </div>
          </section>

          {/* 3. Methodology */}
          <section id="methodology" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Methodology</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Desk Research
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                We actually do some design research by looking in to other design and interactions. But, we have high expectations on this design and prototype, because this is something special, a sunsetting one of our products.
              </p>
            </div>
          </section>

          {/* 4. The Process */}
          <section id="process" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Process</span>
            </div>

            <div className="flex flex-col gap-8">
              
              {/* First Version Sub-section */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-semibold text-xl text-zinc-900 dark:text-zinc-200">
                  First Version
                </h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed">
                  When we first created the design, we (the design team) were told by the product manager that they needed a simple modal pop-up on the homepage, both on mobile and website. The modal contains:
                </p>
                <ul className="list-disc pl-5 font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed flex flex-col gap-1.5 my-2">
                  <li>Descriptions</li>
                  <li>Card redirect to dUCk and LILIT.</li>
                </ul>
                <p className="font-sans text-zinc-650 dark:text-zinc-355 text-sm sm:text-base leading-relaxed">
                  First, we create user flow and then jump in to the design.
                </p>
              </div>

              {/* Image - First iteration user flow */}
              <FramerImage 
                desktopSrc="https://framerusercontent.com/images/OXcWRIwDO6UxrYC78QhKCil7scQ.png?width=3720&height=1800"
                tabletSrc="https://framerusercontent.com/images/JmxcaTZdZz57K0ocOXUzgXtrf0I.png?width=2190&height=1800"
                mobileSrc="https://framerusercontent.com/images/HrLSjVSgZLgn3WC7gGnbM1rMXg.png?width=1146&height=1326"
                caption="Image - First iteration user flow"
              />

              <div className="flex flex-col gap-2">
                <p className="font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed">
                  After some iterations, we present this screen. Focusing on easy scrolling and showcasing our dUCk and LILIT.
                </p>
              </div>

              {/* Video - First iteration prototype Walkthrough */}
              <div className="my-8 w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 relative">
                <div style={{ padding: '69.88% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1053646122?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="FV Sunset - 1st Iterations"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js" async></script>
              </div>

              {/* Second Version Sub-section */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                <h3 className="font-display font-semibold text-xl text-zinc-900 dark:text-zinc-200">
                  Second Version
                </h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed">
                  After being told by the Design Lead (Mr. Eric Leong) that we have to make this project special because it is one of the historical moments for the company. Then we started brainstorming to make this web a bit of a story about a long journey and then sweetly closed with the presence of dUCk and LILIT.
                </p>
              </div>

              {/* Image - Second iteration user flow */}
              <FramerImage 
                desktopSrc="https://framerusercontent.com/images/cGQIVgfAjWGhFRDzFjI91vUcq2U.png?width=3720&height=1800"
                tabletSrc="https://framerusercontent.com/images/vmayx9y5EqSz0TU7zOCgIexjrLo.png?width=2190&height=1800"
                mobileSrc="https://framerusercontent.com/images/DTyhPgE3Qo9h1ZRQcLhNWMJs.png?width=1146&height=1326"
                caption="Image - Second iteration user flow"
              />

              <div className="flex flex-col gap-2">
                <p className="font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed">
                  The idea is to tell a story about why we closed the fashionvalet.com and change into two separate platform (dUCk and LILIT.) and the theme is 'sunset' because fashionvalet is sunsetting. "The sunset is beautiful, isn't?"
                </p>
              </div>

              {/* Image - Second iteration Prototype Walkthrough */}
              <div className="my-8 w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 relative">
                <div style={{ padding: '69.88% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1053646951?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="FV Sunset - Final"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js" async></script>
              </div>

            </div>
          </section>

          {/* 5. Final Result */}
          <section id="result" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Final Result</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight border-b border-zinc-100 dark:border-zinc-850 pb-2">
              After careful work, we finished the design on total in 2 Sprints.
            </h2>

            <h3 className="font-sans font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
              We successfully onboard around 400k users from Fashionvalet to sign up at dUCk and LILIT.
            </h3>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                I was quite challenged in the creation of this web, because it requires extra prototyping and unusual design, which is different from the fashionvalet style guide. What I'm afraid of is the implementation from the front end developer might different from what we designed, because we have high standards in prototyping.
              </p>
            </div>
          </section>

          {/* 6. Lesson Learned */}
          <section id="lessons" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-950/20 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Lesson Learned</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              From this task, we learned that it is not impossible to create a great and stunning interactions if we had given enough time and effort.
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Thanks to Mr. Eric who given an advice and always push me for being a better designer.
              </p>
            </div>
          </section>

          {/* Previous / Next Case Study Bottom Navigation Panel */}
          <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col gap-6 select-none">
            <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-[10px] tracking-widest font-bold">
              Explore More Case Studies
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigateCase?.('ezc-onboarding')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors line-clamp-2">
                  Welcoming Users the Right Way: Crafting an Effective Onboarding for EZCoordinator
                </h4>
              </button>

              <button
                onClick={() => onNavigateCase?.('duck-research')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors text-right">
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors text-right line-clamp-2">
                  Enhancing shopping experience for dUCk - Research for PDP image ratio
                </h4>
              </button>
            </div>
          </div>

        </div>

      </div>

    </article>
  );
}
