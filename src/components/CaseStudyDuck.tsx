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
  ShoppingBag 
} from 'lucide-react';

interface CaseStudyDuckProps {
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

export default function CaseStudyDuck({ onBack, onNavigateCase }: CaseStudyDuckProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article className="w-full bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* Back Button Navigation Bar */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 md:px-8 bg-zinc-50/20 dark:bg-zinc-900/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors focus-visible:outline-blue-500 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          Case Study // dUCk Image Ratio
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-orange-500 dark:text-orange-400 font-bold uppercase tracking-widest block mb-3">
              UX/UI RESEARCH CASE STUDY
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-tight select-text">
              Enhancing shopping experience for dUCk - Research for PDP image ratio
            </h1>
          </div>

          <FramerImage 
            desktopSrc="https://framerusercontent.com/images/lZL6NmldffFpmKJydRHPydhzQ.png?width=3559&height=1722"
            tabletSrc="https://framerusercontent.com/images/lZL6NmldffFpmKJydRHPydhzQ.png?scale-down-to=1024&width=3559&height=1722"
            mobileSrc="https://framerusercontent.com/images/cIbDFv4vs6YVisxoCA92DKwRT3A.png?width=2096&height=2425"
            caption="Image - Result of dUCk Image Ratio refinement"
          />
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> UI Designer, UX Designer
          </span>
        </div>
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> October 2022
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-zinc-400" /> dUCk App, Web (FashionValet)
          </span>
        </div>
      </div>

      {/* Main Narrative Sections with Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left column sidebar for local table of contents */}
        <div className="md:col-span-3 p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 hidden md:block">
          <div className="sticky top-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4 font-sans text-xs font-bold tracking-wider text-zinc-400 uppercase select-none">
              <span className="text-[10px] text-zinc-300 dark:text-zinc-650 font-mono tracking-widest font-bold mb-1">Navigation</span>
              <a href="#product-platform" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">00 // Product & Platform</a>
              <a href="#problem" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">01 // The Problems</a>
              <a href="#goal" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">02 // Project Goal</a>
              <a href="#methodology" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // Methodology</a>
              <a href="#research" className="hover:text-zinc-955 dark:hover:text-zinc-50 transition-colors">04 // The Research</a>
              <a href="#solution" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">05 // Solution</a>
              <a href="#lessons" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">06 // Lesson Learned</a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-6 md:p-12 flex flex-col gap-14 select-text max-w-3xl">

          {/* 0. Product & Platform */}
          <section id="product-platform" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">00</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Product & Platform</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              About dUCk Product & Platform
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                dUCk is one of the sub-products of FashionValet (Malaysia). dUCk is known for offering modest clothing ranging from scarfs, abayas, and accessories, presenting them with elegant contemporary art. This product has a commitment to always improve product quality, patterns, and prints that are very diverse.
              </p>
              <p>
                Fashionvalet also has another sub-product, LILIT. However, unlike dUCk which targets the international market and high-end customers, LILIT. is presented at a cheaper price than dUCk. While working at Fashionvalet, I also got the opportunity to manage LILIT.
              </p>
            </div>

            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/O52zwE4rnrNFcoMrkjR3ukc7WE.png?width=4344&height=2102"
              tabletSrc="https://framerusercontent.com/images/WQ6RQEi6G7c0SBh53MWV2rGKNw.png?width=2966&height=3432"
              mobileSrc="https://framerusercontent.com/images/go3FHdITSExEgC8flUrGftXkoRY.png?width=3302&height=2714"
              caption="Image - dUCk PDP on Web (Left) and Mobile (Right)"
            />
          </section>

          {/* 1. The Problems */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Problems</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Lack of Image Optimization on PDP Section
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Since the first release of the dUCk application on the App Store and Play Store, there has been a problem in the PDP (Product Detail Page) section where the application system does not maximize the appearance of images. This happened due to the lack of communication between the Content and Engineering teams, and we from the Product team took the initiative to conduct research on how product photos should be displayed.
              </p>
            </div>
          </section>

          {/* 2. Project Goal */}
          <section id="goal" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-905 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Project Goal</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              How might we implement an image ratio that can be used in mobile apps and web?
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                In conducting this research, we considered if the appearance of product photos could be implemented not only in the mobile app but also on the web.
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
              Competitor Research & Benchmarking
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                We do research on competitors and similar industries.
              </p>
            </div>
          </section>

          {/* 4. The Research */}
          <section id="research" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Research & Competitor Mapping</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              A Deep Analysis of 8 Leading E-Commerce Industries
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                We took screenshots of every mobile app and web. For mobile we use an iPhone XS device, because when designing on mobile devices we use the resolution size for iPhone XS (375x812px). And for web, we use 1440x1024px.
              </p>
              <p>
                We conducted research into 8 ecommerce competitors and the like, such as: <strong>Sephora, Buttonscarves, H&amp;M, Pomelo, POPLOOK, Bonobos, Shein, and Uniqlo</strong>.
              </p>
            </div>

            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/OedfD9Ydrh3t4LNxRsaeubwyRE.png?width=5609&height=2714"
              tabletSrc="https://framerusercontent.com/images/OedfD9Ydrh3t4LNxRsaeubwyRE.png?scale-down-to=1024&width=5609&height=2714"
              mobileSrc="https://framerusercontent.com/images/3u6Ri6zefeSkjpKgpgvK1rFQhM.png?width=3104&height=3592"
              caption="Image - Result of competitor research"
            />

            <h3 className="font-sans font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-150">
              Image Results & Platform Behaviors
            </h3>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                After taking sample screenshots, we then measured the resolution of each app. Here are the results:
              </p>
            </div>

            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/RL7uS9pF1XCKSarnRnYeLILMG4I.png?width=3302&height=2714"
              tabletSrc="https://framerusercontent.com/images/RL7uS9pF1XCKSarnRnYeLILMG4I.png?scale-down-to=1024&width=3302&height=2714"
              mobileSrc="https://framerusercontent.com/images/RL7uS9pF1XCKSarnRnYeLILMG4I.png?scale-down-to=512&width=3302&height=2714"
              caption="Image - Image Ratio on desktop results"
            />

            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/4Rsxmb31iOC2MridRG9OFkbWAyg.png?width=3302&height=2714"
              tabletSrc="https://framerusercontent.com/images/4Rsxmb31iOC2MridRG9OFkbWAyg.png?scale-down-to=1024&width=3302&height=2714"
              mobileSrc="https://framerusercontent.com/images/4Rsxmb31iOC2MridRG9OFkbWAyg.png?scale-down-to=512&width=3302&height=2714"
              caption="Image - Image Ratio on mobile results"
            />

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                After researching 8 similar ecommerce sites, we found that only 1 (H&amp;M) of the 8 sites changed the resolution from Web to Mobile, while the other 7 sites kept the same resolution on both web and mobile.
              </p>
            </div>
          </section>

          {/* 5. Solution for dUCk App */}
          <section id="solution" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Solution for dUCk App</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Make the same ratio on Web and Mobile (2:3 Resolution)
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                We decided to establish unified standards: <strong>Make the same ratio on Web and Mobile</strong>. So, we need to change the resolution to be 2:3 on the web and on app. The 2:3 resolution is good because customers can view the photos, product name and price smoothly (with the assumption that we remove the navbar).
              </p>
            </div>

            <FramerImage 
              desktopSrc="https://framerusercontent.com/images/LgU5PLMKUruyWhDxaRny1zhyoM8.png?width=5609&height=2714"
              tabletSrc="https://framerusercontent.com/images/LgU5PLMKUruyWhDxaRny1zhyoM8.png?scale-down-to=1024&width=5609&height=2714"
              mobileSrc="https://framerusercontent.com/images/LgU5PLMKUruyWhDxaRny1zhyoM8.png?scale-down-to=512&width=5609&height=2714"
              caption="Image - Results"
            />
          </section>

          {/* 6. Lesson Learned */}
          <section id="lessons" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-950/20 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Lesson Learned</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              &ldquo;We realize that consistency between devices is one of the keys to a good user experience and can make users better understand what products are being sold.&rdquo;
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                This small step made us realize that there is a lot to be done to make dUCk more accessible and increase sales via mobile app. This small step was one of the triggers for us to redesign dUCk app as a whole.
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
                onClick={() => onNavigateCase?.('fashionvalet')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors line-clamp-2">
                  From Fashionvalet to dUCk & LILIT. : Crafting Prototypes for a Seamless Transition
                </h4>
              </button>

              <button
                onClick={() => onNavigateCase?.('mola-tv')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors text-right">
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors text-right line-clamp-2">
                  Mola TV - Registration Flow with UGC
                </h4>
              </button>
            </div>
          </div>

        </div>

      </div>

    </article>
  );
}
