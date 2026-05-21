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
  Globe
} from 'lucide-react';

interface CaseStudyNiagahosterProps {
  onBack: () => void;
  onNavigateCase?: (slug: string) => void;
}

interface CaseImageProps {
  src: string;
  caption: string;
}

const CaseImage = ({ src, caption }: CaseImageProps) => (
  <div className="my-6 w-full flex flex-col gap-2.5">
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10 p-1">
      <img 
        src={src} 
        alt={caption} 
        className="w-full h-auto object-cover select-none"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
    <span className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-center">
      {caption}
    </span>
  </div>
);

export default function CaseStudyNiagahoster({ onBack, onNavigateCase }: CaseStudyNiagahosterProps) {
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
          Case Study // Niagahoster Redesign
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-blue-500 dark:text-blue-400 font-bold uppercase tracking-widest block mb-3">
              Web & Mobile Responsive Redesign
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-tight select-text">
              Niagahoster Landing Page Redesign with UCD (User-Centered Design)
            </h1>
          </div>
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> UI/UX Designer
          </span>
        </div>
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> Redesign concept and framework
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Globe className="w-4 h-4 text-zinc-400" /> Niagahoster Web & Mobile Responsive
          </span>
        </div>
      </div>

      {/* Main Narrative Sections with Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left column sidebar for local table of contents */}
        <div className="md:col-span-3 p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-805 hidden md:block">
          <div className="sticky top-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4 font-sans text-xs font-bold tracking-wider text-zinc-400 uppercase select-none">
              <span className="text-[10px] text-zinc-300 dark:text-zinc-650 font-mono tracking-widest font-bold mb-1">Navigation</span>
              <a href="#task" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">01 // Task Statement</a>
              <a href="#goals" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">02 // Design Goals</a>
              <a href="#research" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // User Research</a>
              <a href="#wireframe" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">04 // Wireframes</a>
              <a href="#hifi" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">05 // High-Fidelity details</a>
              <a href="#protopage" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">06 // Interactive Prototypes</a>
              <a href="#conclusion" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">07 // Conclusion</a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-6 md:p-12 flex flex-col gap-14 select-text max-w-4xl">

          {/* 1. Task */}
          <section id="task" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Project Task</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              A Brand New Homepage Experience for Niagahoster
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Niagahoster is one of the leading web hosting providers. The objective of this project was to establish a brand-new, highly intuitive homepage redesign designed from the ground up to address user difficulties and build optimal trust throughout the acquisition and discovery process.
              </p>
            </div>
          </section>

          {/* 2. Goals */}
          <section id="goals" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Design Goals</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              User-Centered Design (UCD) Approach
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                User-Centered Design (UCD) is a design methodology that focuses primarily on user needs and behaviors. Given this methodology, I formulated key assumptions on the goals of this redesign:
              </p>
              
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-zinc-655 dark:text-zinc-300 text-sm sm:text-base">
                <li>
                  <strong>Reducing Friction & Difficulty</strong> when users select a Web Hosting package.
                </li>
                <li>
                  <strong>Increasing Trust</strong> during the overall selection and decision-making process.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Research */}
          <section id="research" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">User Research</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Analyzing User Behavior & Host Requirements
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                I conducted research interviewing 5 participants aged 22–25 with diverse professional, activist, and student backgrounds. Here is a summarized analysis of the core research findings:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                <div className="p-5 border border-zinc-150 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-3 font-bold">Personal Dynamics:</span>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <li><strong>60% of participants</strong> prefer using desktop browsers for general website access, while <strong>40% prefer</strong> mobile devices (smartphones/tablets).</li>
                    <li>All participants frequently visit work-related websites as part of their daily routines.</li>
                  </ul>
                </div>

                <div className="p-5 border border-zinc-150 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-3 font-bold">Web Hosting Selection Dynamics:</span>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <li>All participants need to build a website, but <strong>40% of them remain confused</strong> about selecting the right hosting package.</li>
                    <li><strong>80% of participants</strong> prioritize promotional pricing, while the remaining 20% prioritize hardware and service specifications.</li>
                    <li><strong>80% of participants</strong> look for clear and reliable customer support, while 20% value more personalized, friendly communication channels.</li>
                    <li>Regarding built-in website building features, 40% are not highly interested, while 60% are interested depending on promotions and bundle clarity.</li>
                    <li>For payments, 60% prefer bank transfers, 20% choose offline outlets/agents, and the rest use e-wallets.</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 border border-zinc-150 dark:border-zinc-805 bg-zinc-50/10 dark:bg-zinc-900/5 my-2">
                <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-2 font-bold font-sans">TL;DR Insights & Synthesis:</span>
                <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  <li>A significant portion of users still rely on mobile devices to browse and evaluate web hosting providers.</li>
                  <li>Promotional offers and discounts are key decision-making drivers.</li>
                  <li>Responsive Customer Support is one of the most critical factors of trust in selecting a service provider.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* 4. Wireframe */}
          <section id="wireframe" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Wireframes</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Drafting the Layout Structure
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Equipped with insights from interviewing these 5 participants, the next phase was drafting low-fidelity wireframes for the homepage. This helped organize information and establish a clear visual hierarchy before moving to final visual polishing.
              </p>

              <CaseImage 
                src="/Public/niagahoster/prototype.png"
                caption="Wireframe layout sketches representing structural components and pricing cards on the Homepage"
              />
            </div>
          </section>

          {/* 5. High-Fidelity Design */}
          <section id="hifi" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">High-Fidelity Design</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Polished Multi-Platform Visual Presentation
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Following the wireframe design, the next step was producing high-fidelity mockups. I created both Web (Desktop) and Android formats to ensure a responsive, clean, and flexible multi-device adaptation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CaseImage 
                  src="/Public/niagahoster/homepage-web.png"
                  caption="High-Fidelity Web Presentation for the redesigned Homepage"
                />
                <CaseImage 
                  src="/Public/niagahoster/homepage-android.png"
                  caption="High-Fidelity Native Android Mobile Layout variant adaptation"
                />
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <p>
                  In the high-fidelity redesign of Niagahoster's homepage, several critical updates were made: restructured content flow, refined copy, optimized vertical grid spacing, revised color palette, and streamlined custom iconography.
                </p>

                <div className="p-5 border border-zinc-150 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-3 font-bold">Key Architectural Changes:</span>
                  <ol className="list-decimal pl-5 flex flex-col gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-305 leading-relaxed">
                    <li>
                      <strong>Relocating 'Trusted by 5 Top Organizations' social proof</strong> right beneath the Hero section. Introducing early authority and social proof bolsters visual credibility for incoming clients assessing web hosts.
                    </li>
                    <li>
                      <strong>Realigning 'Niagahoster Services'</strong> closer to the 'Select Hosting Plan' action block. I separated the 'Website Builder' service to raise user awareness of independent website creation services. Beneath this, I integrated clear visual indicators for 'Payment Alternatives' and 'Service Guarantees.' Furthermore, services are categorized in ascending price order, with lower-priced offerings starting on the left to reduce choice paradigm anxiety.
                    </li>
                    <li>
                      <strong>Upgrading the testimonial block</strong> to show two featured client reviews clearly alongside video indicators, enabling prospective users to gauge actual client feedback effortlessly.
                    </li>
                    <li>
                      <strong>Restructuring the FAQ (Frequently Asked Questions) format</strong> and building a cleaner, more logical informational hierarchy in the global Footer layout.
                    </li>
                  </ol>
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                  Certain existing high-performing areas remained intact with minimal modifications, such as the speed/security assurance sections ('Priority Speed & Security Features') and cost-efficiency highlights ('Value Budget, High Quality').
                </p>
              </div>
            </div>
          </section>

          {/* 6. Prototype */}
          <section id="protopage" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-105 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-955/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Interactive Prototype</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-55 tracking-tight">
              Interactive Prototype Sandbox
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-6 mt-2">
              <p>
                Below is the interactive prototype showcasing the redesigned landing page layouts. You can view the full interface design for both web desktops and mobile adapters (interactivity is limited to layout exploration).
              </p>

              <div className="grid grid-cols-1 gap-8 mt-4">
                
                {/* Proto 1: Web Interface Redesign */}
                <div className="flex flex-col gap-2 border border-zinc-200 dark:border-zinc-800 p-1 rounded-none bg-zinc-50/50 dark:bg-zinc-900/5">
                  <div className="p-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-blue-500 font-bold">Figma Link 01</span>
                    <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100 mt-0.5">Desktop Web Homepage Redesign</h4>
                    <p className="text-xs text-zinc-500 font-normal">Highly responsive layout structures, pricing cards and trust factors placement on 1440px viewport grid.</p>
                  </div>
                  <div className="w-full h-[500px] bg-zinc-105 dark:bg-zinc-900 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-805">
                    <iframe 
                      src="https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyLii5RkzW066JZwbrpYvR9%2FNiagahoster-Test-Abid%3Fnode-id%3D21%253A0%26viewport%3D-86%252C204%252C0.2231876701116562%26scaling%3Dscale-down" 
                      className="w-full h-full border-0" 
                      allowFullScreen 
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Proto 2: Mobile Interface Redesign */}
                <div className="flex flex-col gap-2 border border-zinc-200 dark:border-zinc-800 p-1 rounded-none bg-zinc-50/50 dark:bg-zinc-900/5">
                  <div className="p-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-blue-500 font-bold">Figma Link 02</span>
                    <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100 mt-0.5">Android Mobile Version adaptation</h4>
                    <p className="text-xs text-zinc-500 font-normal">Reconstructed layout adaptation optimized for smartphone viewports following Android design guidelines.</p>
                  </div>
                  <div className="w-full h-[500px] bg-zinc-105 dark:bg-zinc-900 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-805">
                    <iframe 
                      src="https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyLii5RkzW066JZwbrpYvR9%2FNiagahoster-Test-Abid%3Fnode-id%3D71%253A1797%26viewport%3D372%252C887%252C0.10748542845249176%26scaling%3Dscale-down" 
                      className="w-full h-full border-0" 
                      allowFullScreen 
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 7. Conclusion */}
          <section id="conclusion" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-105 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-955/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">07</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Conclusion</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              Lessons Learned & Future Validations
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                The primary takeaways and key conclusions from this homepage redesign study are:
              </p>

              <ol className="list-decimal pl-5 flex flex-col gap-3 text-zinc-707 dark:text-zinc-300 text-sm sm:text-base">
                <li>
                  <strong>Grid Spacing & Responsiveness:</strong> I gained functional experience designing within strict horizontal/vertical grid lines and maintaining fluid consistency when adapting rich layouts from desktop viewports down to fine smartphone mobile viewports.
                </li>
                <li>
                  <strong>Iconography Creation:</strong> I enjoyed designing and crafting custom iconography vector structures, working towards pixel perfection.
                </li>
                <li>
                  <strong>Validation Under Constraints:</strong> Due to timeline constraints, concluding qualitative validation with the initial research cohort could not be fully explored. As a result, this redesign iteration remains unvalidated as to whether it resolves the initial business assumptions absolutely.
                </li>
              </ol>

              <p className="mt-4">
                That concludes the homepage redesign study. I am immensely grateful for the feedback and opportunities exploring this digital space!
              </p>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Thank You.
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
                onClick={() => onNavigateCase?.('mola-tv')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors line-clamp-2">
                  Mola TV - Registration Flow with UGC
                </h4>
              </button>

              <button
                onClick={() => onNavigateCase?.('ezc-onboarding')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors text-right">
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors text-right line-clamp-2">
                  Welcoming Users the Right Way: Crafting an Effective Onboarding for EZCoordinator
                </h4>
              </button>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
}
