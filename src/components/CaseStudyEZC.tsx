/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  User, 
  Monitor, 
  CheckCircle2, 
  HelpCircle,
  AlertCircle,
  Play
} from 'lucide-react';

interface CaseStudyEZCProps {
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

const SinglePortraitImage = ({ src, caption }: { src: string; caption: string }) => (
  <div className="my-8 w-full flex flex-col gap-2.5 max-w-xl mx-auto">
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
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

const VideoPreview = ({ label, secondaryLabel }: { label: string; secondaryLabel?: string }) => (
  <div className="my-8 w-full border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-950 relative group select-none aspect-video">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10">
      <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center mb-3 border border-orange-500/30 group-hover:scale-105 transition-transform duration-350 cursor-pointer">
        <Play className="w-5 h-5 fill-white ml-0.5" />
      </div>
      <span className="font-mono text-[9px] uppercase text-orange-400 tracking-widest font-bold mb-1">
        Video Walkthrough Prototype
      </span>
      <h4 className="font-sans font-bold text-sm text-zinc-100 mb-0.5 leading-snug">
        {label}
      </h4>
      {secondaryLabel && (
        <p className="font-sans text-xs text-zinc-400 max-w-md leading-relaxed">
          {secondaryLabel}
        </p>
      )}
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/70 backdrop-blur-sm z-20 flex items-center justify-between px-4 border-t border-zinc-900">
      <div className="flex items-center gap-3">
        <Play className="w-3 h-3 text-zinc-500 fill-zinc-500" />
        <div className="w-32 sm:w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-orange-600 rounded-full" />
        </div>
        <span className="font-mono text-[9px] text-zinc-500">00:00 / 01:45</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded bg-zinc-500" />
        <div className="w-3 h-3 border border-zinc-500 rounded-sm" />
      </div>
    </div>
  </div>
);

export default function CaseStudyEZC({ onBack, onNavigateCase }: CaseStudyEZCProps) {
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
          Case Study // EZCoordinator Onboarding
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-orange-500 dark:text-orange-400 font-bold uppercase tracking-widest block mb-3">
              UX/UI DESIGN CASE STUDY
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-955 dark:text-zinc-50 tracking-tight leading-tight select-text">
              Welcoming Users the Right Way: Crafting an Effective Onboarding for EZCoordinator
            </h1>
          </div>

          <VideoPreview 
            label="EZCoordinator Video-Based Onboarding Flow" 
            secondaryLabel="Watch how users learn core real estate operations via bite-sized guided visual walk-throughs." 
          />
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> UX Designer
          </span>
        </div>
        <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> 1 Nov 2023 - 14 Nov 2023
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-1.5Col">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Monitor className="w-4 h-4 text-zinc-400" /> EZCoordinator (Real Estate B2B SaaS)
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
              <a href="#problem" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">01 // The Problem</a>
              <a href="#goal" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">02 // Project Goal</a>
              <a href="#research" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // Research</a>
              <a href="#exploration" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">04 // Design Exploration</a>
              <a href="#result" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">05 // Result</a>
              <a href="#lessons" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">06 // Lesson Learned</a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-6 md:p-12 flex flex-col gap-14 select-text max-w-3xl">

          {/* 0. Product & Platform Description from the Framer site */}
          <section id="product-platform" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">00</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Product & Platform</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              About EZCoordinator
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                EZCoordinator is an essentials real estate tools to help brokers, agent, and real estate coordinator. It helps them to organize transactions, emails, documents, signatures, schedule, and task managements.
              </p>
            </div>
          </section>

          {/* 1. The Problem */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Problem</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              User Problem - The more time passes, the less effective
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Since its initial release (around 2008), EZCoordinator has always provided customer service or agents assigned to help users who first use the platform. Over time, this became less effective.
              </p>
            </div>
          </section>

          {/* 2. Project Goal */}
          <section id="goal" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Project Goal</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              How might we guide first time users without need of real Customer Service Agent?
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Dashboard can be overwhelming for a new users. By adding an onboarding, it helps them to understand navigations, key features, and how to get value from the dashboard quickly.
              </p>
              <p>
                Without guidance, users may struggle to find the most important insights or actions. Onboarding minimizes confusion and ensures they start using the dashboard effectively.
              </p>
            </div>
          </section>

          {/* 3. Research */}
          <section id="research" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Research</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Desk Research About Onboarding
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                There are several opportunity for onboarding a new users such as: the signup flow, empty states, splash screens and modals, checklist and progress bars, tooltips and tours, and gamified trials.
              </p>
            </div>
          </section>

          {/* 4. Design Exploration */}
          <section id="exploration" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Design Exploration</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Understanding The Flow
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Not only understanding the users, I also need to understand the EZCoordinator works. This is to make onboarding easier for me. How can I create onboarding if I don't know the initial stages of real estate agent work, right?
              </p>
            </div>

            {/* Vertical Flow Portrait Image */}
            <SinglePortraitImage 
              src="https://framerusercontent.com/images/7sJSSp4SvfnbBQ06bQN7huINfc.png?width=2944&height=3872" 
              caption="Image - The Flow from User of EZCoordinator"
            />

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Not forgetting after that I confirmed to stakeholders whether this flow was appropriate? Then, I concluded to make onboarding for:
              </p>
            </div>

            {/* Steps Checklist Grid Panel */}
            <div className="p-6 border border-zinc-200 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-xl flex flex-col gap-3.5 max-w-md mt-2">
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-widest font-bold uppercase block border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Core Onboarding Targets
              </span>
              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Create New Transaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Add Task Template</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Add New Custom Task Template</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Send Email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Add Additional Contact</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Add Document and Files</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Add Notes</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <h3 className="font-display font-semibold text-xl text-zinc-90 w-full tracking-tight">
                Explore the Design
              </h3>
              <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                The stakeholders told us to create a design that could be easily implemented by front-end developers. This is something I'm used to, so I always create several design options, in addition to making stakeholders have a choice of designs if there is one option they don't like, this also helps me to think more creatively. Because “All roads lead to Rome, right?” there are multiple ways to achieve a goal. Based on the desk research I will focusing on Tooltips & Tours, and Checklist & Progress Bar.
              </p>
            </div>

            {/* Tooltips and Tours section */}
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="font-display font-semibold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                Tooltips and Tours
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 border border-blue-100 dark:border-blue-950/20 bg-blue-50/20 dark:bg-blue-950/5 rounded-lg flex gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-505 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Benefit</span>
                    <p className="font-sans text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                      This approach can demonstrates the specific product features in details.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border border-rose-100 dark:border-rose-950/20 bg-rose-50/20 dark:bg-rose-950/5 rounded-lg flex gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Cons</span>
                    <p className="font-sans text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                      It can be highly irritating, can obstruct the natural flow of the products, and can disrupt user's autonomy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>
                  Based on the onboarding flow, I then create a copy for each point.
                </p>
                <p>
                  The Idea for this tooltips is they will be shown after users open the specific page. Example: when users first open the first page after login it will be shown welcome message, when user open Transaction page it will be shown the 'help' description on each feature.
                </p>
              </div>

              {/* Tooltips Responsive FramerImage */}
              <FramerImage 
                desktopSrc="https://framerusercontent.com/images/FMlIEBV7O2QgAEFzOhw8NORro.png?width=3720&height=1800"
                tabletSrc="https://framerusercontent.com/images/HhDGZ7CcSocXZrBwsQPeOhvu1mY.png?width=2190&height=1800"
                mobileSrc="https://framerusercontent.com/images/dNVGs8E0FOCTykuVC6wwJ562A.png?width=1146&height=1326"
                caption="Image - Bunch of Tooltips copy for onboarding"
              />
            </div>

            {/* Checklist and Progress Bar section */}
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="font-display font-semibold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                Checklist and Progress Bar
              </h3>

              <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>
                  Adding the checklist and we can reuse the tooltips.
                </p>
                <p>
                  With this, users can see the progress of onboarding, this can provide certainty to users, so that they do not guess and do not feel disturbed by the pop-ups that appear. In fact, users can easily choose which onboarding they want to complete first.
                </p>
              </div>

              {/* Checklist Responsive FramerImage */}
              <FramerImage 
                desktopSrc="https://framerusercontent.com/images/QwB7msNJrQ7qxPCHlx1QejafcrU.png?width=3720&height=1800"
                tabletSrc="https://framerusercontent.com/images/5SA7GKoT4VlLo9uZ0WcJZecy00.png?width=2190&height=1800"
                mobileSrc="https://framerusercontent.com/images/9CoVaXWY209SFFGa5SAWKtKqs.png?width=1146&height=1326"
                caption="Image - Checklist of Getting Started onboarding for EZCoordinator"
              />

              <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mt-2">
                <p>
                  The default options would be with tooltips. It is not using too much screens because it showing a small tooltips to let users know about each features.
                </p>
              </div>
            </div>

            {/* "Can you make it more simple?" section */}
            <div className="flex flex-col gap-4 mt-6 border-t border-zinc-100 dark:border-zinc-850 pt-6">
              <h3 className="font-display font-semibold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                "Can you make it more simple?"
              </h3>

              <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  After getting a feedback from the stakeholder to make it more simple and letting users know on 'how-to' use the feature more detailed, we create this version by showing video on each onboarding points.
                </p>
              </div>

              {/* Video Walkthrough Rectangle */}
              <VideoPreview 
                label="EZCoordinator Video-Based Onboarding Flow" 
                secondaryLabel="Watch how users learn core real estate operations via bite-sized guided visual walk-throughs." 
              />
            </div>
          </section>

          {/* 5. Result */}
          <section id="result" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Result</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Result
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
              <blockquote className="border-l-4 border-orange-500 dark:border-orange-400 pl-4 py-1 italic bg-orange-500/5 my-2">
                After several feedback from the stakeholder, we decided to go with Checklist and Progress Bar with Video. Because it doesn't require specific actions to go to the screens, hence it is easier to implement on the front-end side.
              </blockquote>
              <p>
                Since I developed this portfolio, they haven't proceeded with releasing this onboarding yet.
              </p>
            </div>
          </section>

          {/* 6. Lesson Learned */}
          <section id="lessons" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Lesson Learned</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Give more design options to make stakeholder/client more satisfied
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                From this project, I learned that by giving more design options, it shows that we can maximize the task within limited time and it can help us to be more understand the user problems. By giving more design options, It can also give clients/stakeholders some ideas to solve their problems that they might not have thought of.
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
                onClick={() => onNavigateCase?.('niagahoster')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors line-clamp-2">
                  Niagahoster Landing Page Redesign with UCD (User-Centered Design)
                </h4>
              </button>

              <button
                onClick={() => onNavigateCase?.('fashionvalet')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors text-right">
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors text-right line-clamp-2">
                  From Fashionvalet to dUCk & LILIT. : Crafting Prototypes for a Seamless Transition
                </h4>
              </button>
            </div>
          </div>

        </div>

      </div>

    </article>
  );
}
