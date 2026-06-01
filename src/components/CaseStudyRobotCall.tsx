/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  User, 
  Phone
} from 'lucide-react';

interface CaseStudyRobotCallProps {
  onBack: () => void;
  onNavigateCase?: (slug: string) => void;
}

interface FramerImageProps {
  src: string;
  caption: string;
}

const FramerImage = ({ src, caption }: FramerImageProps) => (
  <div className="my-8 w-full flex flex-col gap-2.5">
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
      <img 
        src={src} 
        alt={caption} 
        className="w-full h-auto object-cover select-none"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
    <span className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-505 uppercase tracking-wider block text-center">
      {caption}
    </span>
  </div>
);

export default function CaseStudyRobotCall({ onBack, onNavigateCase }: CaseStudyRobotCallProps) {
  const [activeSection, setActiveSection] = useState('snapshot');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const handleScroll = () => {
      const sections = [
        'snapshot', 'problem', 'why-it-mattered', 'role-constraints',
        'strategy', 'experience', 'separation', 'iteration', 'outcome', 'lessons'
      ];
      const scrollPosition = window.scrollY + 250;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="w-full bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* Back Button Navigation Bar */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 md:px-8 py-4 bg-zinc-50/20 dark:bg-zinc-900/10 flex items-center justify-between sticky top-0 backdrop-blur-md z-40">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors focus-visible:outline-blue-500 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div>
            <span className="font-mono text-xs text-orange-500 dark:text-orange-400 font-bold uppercase tracking-widest block mb-3">
              PRODUCT DESIGN CASE STUDY
            </span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-tight select-text">
              Refining Robot Call for Operational Clarity
            </h1>
          </div>
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-505 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-medium text-sm text-zinc-850 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> Product Designer
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-505 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-medium text-sm text-zinc-850 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> April 1 - April 20, 2024
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-505 uppercase tracking-widest font-bold">Platform</span>
          <span className="font-sans font-medium text-sm text-zinc-850 dark:text-zinc-200 flex items-center gap-2">
            <Phone className="w-4 h-4 text-zinc-400" /> Web-App Dashboard
          </span>
        </div>
      </div>

      {/* Main Narrative Sections with Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left column sidebar for local table of contents - Sticky Pinning */}
        <div className="md:col-span-3 p-4 sm:p-6 md:p-8 bg-zinc-50/20 dark:bg-zinc-900/10 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 hidden md:block">
          <div className="sticky top-24 flex flex-col gap-6">
            <nav className="flex flex-col gap-3 font-sans text-xs font-bold tracking-wider text-zinc-400 uppercase select-none">
              <span className="text-[10px] text-zinc-300 dark:text-zinc-700 font-mono tracking-widest font-bold mb-1">Navigation</span>
              <a 
                href="#snapshot" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'snapshot' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                01 // Project Snapshot
              </a>
              <a 
                href="#problem" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'problem' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                02 // The Problem
              </a>
              <a 
                href="#why-it-mattered" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'why-it-mattered' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                03 // Why It Mattered
              </a>
              <a 
                href="#role-constraints" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'role-constraints' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                04 // Role &amp; Constraints
              </a>
              <a 
                href="#strategy" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'strategy' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                05 // The Strategy
              </a>
              <a 
                href="#experience" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'experience' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                06 // Redesigned Experience
              </a>
              <a 
                href="#separation" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'separation' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                07 // Custom vs Templates
              </a>
              <a 
                href="#iteration" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'iteration' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                08 // Feedback &amp; Iteration
              </a>
              <a 
                href="#outcome" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'outcome' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                09 // Final Outcome
              </a>
              <a 
                href="#lessons" 
                className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${activeSection === 'lessons' ? 'text-zinc-950 dark:text-zinc-50 font-semibold border-l-2 border-orange-500 pl-2' : 'pl-2'}`}
              >
                10 // What I Learned
              </a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-16 select-text max-w-3xl">

          {/* 01. Project Snapshot */}
          <section id="snapshot" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Project snapshot</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              Refining Automated Collections Calling
            </h2>
            <div className="font-sans text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Koikoll is a dashboard that helps collections teams automate outbound calls for P2P lending operations. In this project, I refined the Robot Call feature so users could create IVR (Interactive Voice Response) scenarios and campaigns with less confusion and more confidence.
              </p>
            </div>
          </section>

          {/* 02. The Problem */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Problem</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              Users struggled to set up Robot Call
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              
              {/* Embedded Video Player 1 */}
              <div className="my-4 border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 aspect-video relative">
                <iframe
                  src="https://player.mux.com/R01eqVsMBBbsxlO9Ln9HrqUZB01YCTy1xIXDH4zIayFy00?autoplay=1&muted=1&loop=1"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  title="Robot Call Setup Struggle Walkthrough"
                ></iframe>
              </div>

              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Robot Call was already built and ready to be marketed, but users still struggled to use it. The issue was not missing functionality, but a setup experience that felt fragmented and hard to follow.
              </p>
              
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Main pain points:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>Scenario creation and task creation were separated.</li>
                  <li>Variable creation was not intuitive.</li>
                  <li>Users could not easily understand how the IVR conversation would actually run.</li>
                  <li>Important setup actions were not prominent enough.</li>
                  <li>The overall flow created unnecessary cognitive load.</li>
                </ul>
              </div>

              <div className="p-4 border-l-2 border-orange-500 bg-orange-500/5 mt-6 rounded-none">
                <p className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">Why this was a UX problem?</p>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Scenarios were the foundation of IVR task creation.</li>
                  <li>If users did not understand the scenario, they could not confidently complete campaign setup.</li>
                  <li>A technically complete feature still felt difficult to adopt because the workflow lacked clarity.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 03. Why this mattered */}
          <section id="why-it-mattered" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Why this mattered</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              Ensuring Successful Adoption &amp; Value
            </h2>
            <div className="font-sans text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                This project mattered because Robot Call was intended to help collections agents automate outreach more efficiently. If the setup flow felt confusing, users would be less likely to trust the feature or complete tasks successfully, which weakened the feature’s business value and readiness for launch.
              </p>
              
              <div className="mt-4 flex flex-col gap-2">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">From a product perspective:</p>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>The feature was already close to market.</li>
                  <li>Improving usability could increase customer understanding and reduce support needs.</li>
                  <li>Better clarity could help internal teams explain and implement the feature more effectively.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 04. My role and constraints */}
          <section id="role-constraints" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">My role &amp; constraints</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              Directing Refinement &amp; Strategy
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                I led the refinement from structure to prototype. My focus was to simplify the setup journey, improve collaboration with engineering, and turn stakeholder feedback into clearer product decisions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-250 uppercase font-mono tracking-wide">My responsibilities:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Created the information architecture.</li>
                    <li>Mapped scenario creation and campaign creation flows.</li>
                    <li>Designed the final UI in high fidelity.</li>
                    <li>Built the prototype.</li>
                    <li>Validated the design with stakeholders.</li>
                    <li>Refined the experience after feedback.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-250 uppercase font-mono tracking-wide">Constraints:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Tight timeline: 2 weeks for design and prototyping.</li>
                    <li>Cross-functional communication happened asynchronously.</li>
                    <li>Language differences between teams made visual alignment especially important.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 05. How I reduced confusion */}
          <section id="strategy" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider font-bold">How I reduced confusion</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-snug">
              Logical Restructuring Over Pixels First
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Instead of starting with screens, I first focused on clarifying the product structure. This helped me solve the real problem: users were getting lost because the setup logic was not easy to understand.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">My decision-making:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>I created an information architecture to define how the feature should be organized.</li>
                  <li>I used flowcharts to align logic before refining the interface.</li>
                  <li>I made scenario creation more visible because it was a key action and stakeholder feedback confirmed it needed stronger emphasis.</li>
                  <li>I added templates because many users did not need to start from scratch.</li>
                  <li>I added support features because users needed more confidence during setup and review.</li>
                </ul>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/60 mt-4 rounded-none">
                <h4 className="font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase font-mono tracking-widest pl-1 mb-2">Why these choices mattered:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Better structure reduced ambiguity.</li>
                  <li>Clearer entry points improved discoverability.</li>
                  <li>Templates reduced effort and decision friction.</li>
                  <li>Support tools improved confidence and usability.</li>
                  <li>Flow documentation made handoff and collaboration easier.</li>
                </ul>
              </div>

              {/* Multi-column flowchart and architecture grid images */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8 items-start">
                
                {/* Information Architecture */}
                <div className="md:col-span-12 flex flex-col gap-1.5">
                  <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 p-2 text-center">
                    <img 
                      src="/robot-call-information-architecture.jpg" 
                      alt="Information Architecture for Robot Call" 
                      className="w-full h-auto max-h-[400px] object-contain select-none"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 block text-center uppercase tracking-widest">
                    Information Architecture for Robot Call
                  </span>
                </div>

                {/* Flowchart scenario + campaign side-by-side */}
                <div className="md:col-span-6 flex flex-col gap-1.5 mt-2">
                  <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 p-2 text-center">
                    <img 
                      src="/robot-call-flowchart-add-scenario.jpg" 
                      alt="Flow-Chart - Add (Create) Scenario" 
                      className="w-full h-auto max-h-[380px] object-contain select-none"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 block text-center uppercase tracking-widest">
                    Flow-Chart - Add (Create) Scenario
                  </span>
                </div>

                <div className="md:col-span-6 flex flex-col gap-1.5 mt-2">
                  <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 p-2 text-center">
                    <img 
                      src="/robot-call-flowchart-add-campaign.jpg" 
                      alt="Flow Chart - Create Campaign" 
                      className="w-full h-auto max-h-[380px] object-contain select-none"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 block text-center uppercase tracking-widest">
                    Flow Chart - Create Campaign
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 06. What changed in the experience */}
          <section id="experience" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">What changed in the experience</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              The Redesigned Robot Call Experience
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              
              {/* Embedded Video Player 2 */}
              <div className="my-4 border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 aspect-video relative">
                <iframe
                  src="https://player.mux.com/fgVqmaTTx2pfWUCuVZVxIMKTSdNWQQOfeqomL01vQI54?autoplay=1&muted=1&loop=1"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  title="Redesigned Robot Call Setup Demo"
                ></iframe>
              </div>

              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                I redesigned the Robot Call experience to make the setup flow more understandable and more usable. The goal was to connect scenario thinking more clearly with campaign execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Key improvements:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Refined the scenario creation flow.</li>
                    <li>Refined the IVR campaign and task creation flow.</li>
                    <li>Added default scenarios for common use cases.</li>
                    <li>Added FAQ by default.</li>
                    <li>Added voice preview.</li>
                    <li>Added recording history with speech-to-text.</li>
                    <li>Improved visibility of scenario creation.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Template options added:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Product or Service Promotion.</li>
                    <li>Reminder.</li>
                    <li>OTP.</li>
                    <li>One-way Message.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border-l border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 mt-4 rounded-none">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-1">Why the redesign improved the experience:</p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-xs text-zinc-500">
                  <li>Users could start faster with clearer options.</li>
                  <li>Reusable templates lowered setup effort.</li>
                  <li>Scenario planning became easier to understand.</li>
                  <li>Extra support features reduced uncertainty during setup.</li>
                  <li>The overall experience felt more guided and less fragmented.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 07. Template Separation */}
          <section id="separation" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">07</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Separation of Templates</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              I separated templates from created scenarios
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              
              {/* Core visual showing before and after comparison */}
              <FramerImage 
                src="/robot-call-scenario-before-after.png"
                caption="Before and After on Robot Call (Previously IVR)"
              />

              <p className="mt-2 text-zinc-650 dark:text-zinc-300">
                One important refinement was separating created scenarios from scenario templates. This made the interface easier to scan and helped users distinguish between reusing existing work and starting something new.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Why this helped:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Reduced visual clutter.</li>
                    <li>Made entry points clearer.</li>
                    <li>Improved recognition over recall.</li>
                    <li>Helped users understand what action to take next.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Additional improvements:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Added a separate screen for Scenario Templates.</li>
                    <li>Added illustrations to make templates easier to recognize.</li>
                    <li>Improved layout density after feedback about excessive whitespace.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 08. Iteration & Collaboration */}
          <section id="iteration" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">08</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Feedback &amp; Iteration</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
              Iteration and collaboration shaped the final design
            </h2>
            <div className="font-sans text-zinc-655 dark:text-zinc-350 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                This project was not a straight line from idea to final UI. Feedback from stakeholders and engineering directly influenced the final structure of the experience.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">What happened after the first prototype:</p>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>Stakeholders were satisfied overall.</li>
                  <li>The IT team asked for a Mandarin version.</li>
                  <li>Stakeholders felt the scenario creation section had too much whitespace.</li>
                  <li>They also wanted the setup to feel more understandable and accessible.</li>
                </ul>
              </div>

              {/* Embedded Video Player 3: Whitespace walkthrough */}
              <div className="my-6 border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 aspect-video relative">
                <iframe
                  src="https://player.mux.com/MUfzyQ00e8bwoP5DoVsQPnxiE7bEMfhYcT2TbhueC2iI?autoplay=1&muted=1&loop=1"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  title="Whitespace and Hierarchy Refinement Walkthrough"
                ></iframe>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">How I responded:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-zinc-650 dark:text-zinc-400">
                  <li>Separated the scenario list from template selection.</li>
                  <li>Improved hierarchy in the scenario creation area.</li>
                  <li>Made the layout more compact and easier to scan.</li>
                  <li>Worked with Vincent to create a Mandarin prototype in 1 working day.</li>
                </ul>
              </div>

              {/* Embedded Video Player 4: Mandarin Localized Walkthrough */}
              <div className="my-6 border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 aspect-video relative">
                <iframe
                  src="https://player.mux.com/vqFqZxULd7fmDKjg00cFXpGQ7JEuIAds5ybUgrnyQgKY?autoplay=1&muted=1&loop=1"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  title="Mandarin Localized Walkthrough"
                ></iframe>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs flex flex-col gap-2 rounded-none">
                <span className="font-bold text-orange-500 uppercase tracking-widest block">Mandarin Localization Workflow:</span>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-[11px] text-zinc-500">
                  <li>Duplicated the prototype page.</li>
                  <li>Guided Vincent in using Figma’s Find and Replace feature.</li>
                  <li>Sped up translation compared with editing each text layer manually.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* 09. Final Outcome */}
          <section id="outcome" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">09</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider font-bold">Final Outcome</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-snug">
              Unified Team Direction &amp; Streamlined Setup
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                The final prototype made Robot Call easier to understand by giving users a clearer path from scenario setup to campaign creation. The redesign improved clarity, reduced friction, and gave both stakeholders and engineering a stronger foundation for implementation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">What improved:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-zinc-650 dark:text-zinc-400 text-xs">
                    <li>The setup flow became easier to follow.</li>
                    <li>Users had clearer starting points.</li>
                    <li>Templates reduced the effort required to begin.</li>
                    <li>The interface better supported confidence and comprehension.</li>
                    <li>Design artifacts helped align cross-functional teams.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 uppercase font-mono tracking-wide">Outcome and Impact:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-zinc-650 dark:text-zinc-400 text-xs">
                    <li>Reduced setup ambiguity during stakeholder review.</li>
                    <li>Improved handoff clarity for engineering.</li>
                    <li>Faster localization workflow for the Mandarin prototype.</li>
                    <li>Better usability through clearer grouping and hierarchy.</li>
                    <li>Stronger implementation readiness across teams.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 10. What I Learned */}
          <section id="lessons" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">10</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-505 uppercase text-xs tracking-wider font-bold">What I learned</span>
            </div>
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-snug">
              Complex B2B Usability Demands Flow Clarity
            </h2>
            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                This project reinforced that usability issues often come from structure, not just visual design. A feature can be technically complete and still feel difficult if the setup flow creates too much cognitive load.
              </p>

              <div className="mt-2 flex flex-col gap-2">
                <h3 className="font-bold text-xs text-zinc-805 dark:text-zinc-200 uppercase font-mono tracking-wide">Key learnings:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-zinc-650 dark:text-zinc-400 text-sm">
                  <li>Clarity is critical in complex B2B workflows.</li>
                  <li>IA and flowcharts can be powerful collaboration tools.</li>
                  <li>Tight timelines require stronger prioritization.</li>
                  <li>Small hierarchy changes can significantly improve comprehension.</li>
                  <li>Good design work includes aligning teams, not just polishing screens.</li>
                </ul>
              </div>
              
              <p className="mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-6 font-mono text-xs text-zinc-400 italic">
                Special thanks to Vincent Liu, Hendy Wijaya, and Mr. Liu who have contributed to making this project a reality.
              </p>
            </div>
          </section>

          {/* Previous / Next Case Study Bottom Navigation Panel */}
          <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col gap-6 select-none">
            <span className="font-mono text-zinc-400 dark:text-zinc-505 uppercase text-[10px] tracking-widest font-bold">
              Explore More Case Studies
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigateCase?.('niagahoster')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors line-clamp-2">
                  Niagahoster Landing Page Redesign with UCD Framework
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
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors text-right line-clamp-2">
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
