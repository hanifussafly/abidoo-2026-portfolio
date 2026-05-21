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
  Play 
} from 'lucide-react';

interface CaseStudyTelkomProps {
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
        <span className="font-mono text-[9px] text-zinc-500">00:00 / 01:52</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded bg-zinc-500" />
        <div className="w-3 h-3 border border-zinc-500 rounded-sm" />
      </div>
    </div>
  </div>
);

export default function CaseStudyTelkom({ onBack, onNavigateCase }: CaseStudyTelkomProps) {
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
          Case Study // MyTel-U Mobile
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
              Simplified Telkom University Academic App - Study Case MyTel-U Mobile
            </h1>
          </div>

          <FramerImage 
            desktopSrc="https://framerusercontent.com/images/3Ad5CB9Z8yzoWtQk2N3V0LvS28.png?width=3720&height=1800"
            tabletSrc="https://framerusercontent.com/images/Xdgurz0B3f3hK0X93kH2iRY.png?width=2190&height=1800"
            mobileSrc="https://framerusercontent.com/images/31oiYBXbMuWuWjlp7AcV6bvgLM.png?width=1146&height=1326"
            caption="MyTel-U Mobile Super-App Concept Overview"
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
            <Clock className="w-4 h-4 text-zinc-400" /> March 2021 - August 2021
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Monitor className="w-4 h-4 text-zinc-400" /> MyTel-U Mobile (Academic Super-App)
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
              <a href="#process" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // Phase 1</a>
              <a href="#phase2" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">04 // Phase 2</a>
              <a href="#phase3" className="hover:text-zinc-955 dark:hover:text-zinc-50 transition-colors">05 // Phase 3</a>
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
              About MyTel-U App
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                My Telkom University (My Tel-U) App is a super-app for Telkom University Academics, ranging from Student, Teacher, Staff, Alumni, and parents guardian.
              </p>
              <p>
                I worked at Telkom University to help building the MyTel-U super app and doing some UX Audit for the Telkom University internal and external app in order to make the user easier on using the app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
                <img src="https://framerusercontent.com/images/kXkdVS9JKeGANlcNbBICgMKmTxE.png?width=1800&height=1800" alt="MyTel-U Square Concept Mockup 1" className="w-full h-auto object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10">
                <img src="https://framerusercontent.com/images/MzAJmOYvBI2AUpa5aP7Fj7LKGCU.png?width=1800&height=1800" alt="MyTel-U Square Concept Mockup 2" className="w-full h-auto object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </section>

          {/* 1. The Problems */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">The Problems</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Legacy Infrastructure and Mobile Accessibility Constraints
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-6 mt-2">
              <div>
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">User Problem</h3>
                <p>
                  Since the beginning of igracias, there have been many complaints expressed by students. One of them is the design that is still old-fashioned. Of course this is a problem for students and lecturers, both user-profile that often access igracias, because they expect if igracias easy to use to complete their work and have a stable server or load time.
                </p>
                <p className="mt-2.5">
                  In addition, the thing that is very problematic is that iGracias is not friendly to use via mobile. So, every user must open iGracias using a web browser.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-150 dark:border-zinc-850">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">Business Problem</h3>
                <p>
                  Problems such as unstable servers and load time are due to legacy code on iGracias is very difficult to make changes and refinement. So we from the PUTI Telkom University team took the initiative to make a Super-App that can be accessed via mobile.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-150 dark:border-zinc-850">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">An Efficient Teams</h3>
                <p>
                  Our team consists of 2 Front-End Engineers, 2 Back-end engineers, 2 System Analysts (1 being the leader), and 1 UI/UX Designer. As a professional, I feel responsible for directing how the team works agile and directing how the user experience works. Working with a team of mostly engineers, their mindset is usually limited to the limitations of the system.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Project Goal */}
          <section id="goal" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Project Goal</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              How might we build the mobile super-app for Telkom University academics?
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                The issue stems from verbal suggestions given by students to lecturers. As a team consisting of myself, my supervisor, and the rest of the group — all of whom are students and lecturers at Telkom University — we believe this modification is profoundly vital.
              </p>
            </div>
          </section>

          {/* 3. Phase 1 */}
          <section id="process" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Phase 1 // Design Foundation</span>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
                Project Timeline and Process
              </h2>
              <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                We built this app from scratch and we used daily stand-up as a daily reporting platform which turned out to be quite effective in communicating various problems in project development, especially in mobile development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50/30 dark:bg-zinc-900/10">
              <div className="flex flex-col gap-1.5 pr-2">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold">Phase 1</span>
                <span className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100">Core Foundations</span>
                <p className="font-sans text-xs text-zinc-500">Brands, Homepage, Sign In, Profile, News first for students role.</p>
              </div>
              <div className="flex flex-col gap-1.5 px-2 border-t sm:border-t-0 sm:border-x border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold">Phase 2</span>
                <span className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100">Schedule & Campus Hub</span>
                <p className="font-sans text-xs text-zinc-500">Schedule, QR Check-In attendance, Grades tracker, and Timeline forum.</p>
              </div>
              <div className="flex flex-col gap-1.5 pl-2 border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold">Phase 3</span>
                <span className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100">Teacher Role & Beta</span>
                <p className="font-sans text-xs text-zinc-500">Teaching operations, Attendance code generation and Beta Testing deploy.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-850 pb-2">
                <span className="font-sans font-bold text-lg text-zinc-900 dark:text-zinc-100">Phase 1 : Brands, Homepage, Sign In, Profile, News</span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">Branding</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  This includes creating logos for each use case, such as logos for android, play store, app store, and the in-app logo itself. However, in the end this logo was not used because stakeholders preferred to use the Telkom University logo.
                </p>
              </div>

              <FramerImage 
                desktopSrc="https://framerusercontent.com/images/gI1qa69SINqaBSRayTyFRjSO3U.png?width=3720&height=1800"
                tabletSrc="https://framerusercontent.com/images/YcQWdlUQHdg0y8ydOiZbR2Gq3M.png?width=2190&height=1800"
                mobileSrc="https://framerusercontent.com/images/daXFEJ03kJYx3HLaA37ywyUb2t8.png?width=1146&height=1326"
                caption="Image - Branding Identity Assets for MyTel-U Mobile"
              />

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-4">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Home Page</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We are concerned with what users (students and teachers) see when they first open MyTel-U Mobile. The PM, manager and I brainstormed and decided to prioritize the following functions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-zinc-150 dark:border-zinc-850 rounded-lg p-5 bg-zinc-50/20 dark:bg-zinc-900/5">
                  <div>
                    <span className="font-sans font-semibold text-xs text-zinc-900 dark:text-zinc-100 block mb-0.5">User Schedule</span>
                    <p className="font-sans text-xs text-zinc-500 leading-normal">
                      Most of the students are screenshoting the schedule from iGracias and then making it as a lock screen on their mobile phone even some of them making it as a desktop wallpaper.
                    </p>
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-xs text-zinc-900 dark:text-zinc-100 block mb-0.5">Mini-App</span>
                    <p className="font-sans text-xs text-zinc-500 leading-normal">
                      The concept is super-app and we plan to put some other features or apps on this mini-app list.
                    </p>
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-xs text-zinc-900 dark:text-zinc-100 block mb-0.5">Latest News</span>
                    <p className="font-sans text-xs text-zinc-500 leading-normal">
                      Users will certainly not miss the latest news about the academic community at Telkom University.
                    </p>
                  </div>
                </div>

                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  And contains 4 menus, Homepage, Timeline, Notifications, and Profile.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/NjvudQfpOlcVMAqL1OciikTw6IU.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/NjvudQfpOlcVMAqL1OciikTw6IU.png?width=1240&height=600"
                  mobileSrc="https://framerusercontent.com/images/mwWxwJIjrFlDJlskopR1ch2eg.png?width=382&height=442"
                  caption="Image - Homepage Layout, Menu Tabs & Widget Structures"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Sign-In</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  There is only access to login and forgot password. Why is there no sign up? Because users must be registered as telkom university academicians first to be able to access the full features of this application.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/yOBSVOi4pcPZ3X7QbcpdK3cL0g.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/yOBSVOi4pcPZ3X7QbcpdK3cL0g.png?width=1240&height=600"
                  mobileSrc="https://framerusercontent.com/images/Ppju0edMk7RcDkEPQhAzw2mpuec.png?width=382&height=442"
                  caption="Image - Welcome Sign-In Page UI Flow"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Profile</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Not too much can be displayed because the main purpose is to show the QR code from the user, because at the time this was made, some courses were still using online learning.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/RuABzSICqOCegdlFj3D79VwhTY.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/6I37jqRIKR4N5m9vvDLamX2gtfQ.png?width=730&height=600"
                  mobileSrc="https://framerusercontent.com/images/U9viV9wOtSeYUVe97lTGU3zwg.png?width=382&height=442"
                  caption="Image - Student Profile & Digital Personal Identification QR Card"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">News</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Shows the latest information and news related to telkom university. this feature also already exists in iGracias, so we only move and adjust to the mobile view.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/kNanjwTX03e5s6ccJyrFuftqoo8.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/kNanjwTX03e5s6ccJyrFuftqoo8.png?width=1240&height=600"
                  mobileSrc="https://framerusercontent.com/images/uLCIfZc84r7H4thOTUhYY06xs.png?width=382&height=442"
                  caption="Image - Academic News Articles & Portal Feed Layout"
                />
              </div>
            </div>
          </section>

          {/* 4. Phase 2 */}
          <section id="phase2" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Phase 2 // Schedule & Attendance, Grades, Timeline</span>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight border-b border-zinc-100 dark:border-zinc-850 pb-2">
                Phase 2 : Schedule & Attendance, Grades, Timeline
              </h2>

              <div>
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">Schedule & Attendance</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  At the time of this creation (Q1-Q2 2021), Telkom University is prioritizing creating a presence check-in application, this is because it is still during the COVID-19 pandemic and all classes are online classes. Previously (and until now), to take attendance, students needed to tap their student cards to the RFID machine in each class. With the addition of the QR scan feature, it is hoped that students will take attendance by scanning the QR code that the teacher provides.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/CFVn1EamXoDH1rPinHqNlwWc2oo.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/RlInDQoww1ezK1gKFJXMQXa3rCo.png?width=730&height=600"
                  mobileSrc="https://framerusercontent.com/images/as9xeffpUqNaBIMccJ4GPSXFM.png?width=382&height=442"
                  caption="Image - Class Schedule Details & Quick QR Presence Check-In Flow"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Grades</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  In addition to schedules and attendance, Grades are also one of the things that must be added as a feature. The function of adding this feature is so that students can always remember the grades they get from exams or tests, because they will periodically be submitted by lecturers.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/CGUT5SAtXq2NBk72JIId374Kp8.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/ALTEn8GMl7HDd2t1WCFSM3Tgh80.png?width=730&height=600"
                  mobileSrc="https://framerusercontent.com/images/73TByZdjiKAZwvVTYQL1rTcn3E.png?width=382&height=442"
                  caption="Image - Student Academic Grades & GPAs Overview"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Timeline</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Serves as a forum for socializing between the telkom university academic community. Previously there was no feature or platform like this on campus and through MyTel-U we tried to create this text-based social network so that we are always connected to each other.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/eA9IychblmwLMNp4gy7VGJRsA.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/eA9IychblmwLMNp4gy7VGJRsA.png?width=1240&height=600"
                  mobileSrc="https://framerusercontent.com/images/M1F4eIqpVnCHs3xx5fjzkUZlc.png?width=382&height=442"
                  caption="Image - Socializing Hub & Micro-Blogging Campus Forum Feed"
                />
              </div>
            </div>
          </section>

          {/* 5. Phase 3 */}
          <section id="phase3" className="flex flex-col gap-6 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Phase 3 // Release & Testing</span>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight border-b border-zinc-100 dark:border-zinc-850 pb-2">
                Phase 3 : Teacher Role & Release for Testing
              </h2>

              <div>
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">Teacher Role</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  After creating features for students, the next step is to create features for teachers. Such as teaching schedules and generating QR codes for attendance. We did not immediately change all the features contained in iGracias to MyTel-U mobile, because there are some features that are more effective when completed via desktop.
                </p>

                <FramerImage 
                  desktopSrc="https://framerusercontent.com/images/g5EdmdL1o2n5H5Mufv0UPJU1o.png?width=1240&height=600"
                  tabletSrc="https://framerusercontent.com/images/bhODXD0Mzxr21qQ5EoLSYEmq3oM.png?width=730&height=600"
                  mobileSrc="https://framerusercontent.com/images/XSAWdJXhSLQgk79ONKPm2NHWgRE.png?width=382&height=442"
                  caption="Image - Teacher Attendance QR Code Generation Panel"
                />
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100">Release for Testing</h3>
                <p className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We did a Beta release only to a few friends and relations in the telkom university academic community. At that time there were still some bugs, but the MVP (Minimum viable product) and features were enough for students and teachers to access every day. This beta release is already available on the App Store and Play Store.
                </p>
              </div>

              {/* Supposedly Video Showcase block inside phase 3 or timeline representing app demonstration */}
              <VideoPreview 
                label="MyTel-U Mobile Interactive Showcase" 
                secondaryLabel="Demonstrating QR Code generation, student quick-attendance check-in, and micro-blog community feeds." 
              />
            </div>
          </section>

          {/* 6. Lesson Learned */}
          <section id="lessons" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Lesson Learned</span>
            </div>

            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Based on user problem, we did accomplish our goals to make an academic apps for Telutizen (Telkom University Academics) and also from the server side, it is much better than the iGracias.
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-5 mt-2">
              <blockquote className="border-l-4 border-orange-500 pl-4 py-1 italic bg-orange-500/5 my-2 font-medium text-zinc-900 dark:text-zinc-100">
                There was one thing that surprised us, because at the beginning of the release, the Timeline feature became very crowded and even became the first reason for about 2000 more students (out of a total of approximately 27,000++ students) to install this MyTel-U App.
              </blockquote>

              <p>
                In addition, after they installed the MyTel-U App, our team then collected feedback from students, teachers, and staff. Which then we decided to:
              </p>

              <div className="p-5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-xl flex flex-col gap-3 max-w-md">
                <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider font-bold uppercase block border-b border-zinc-150 dark:border-zinc-805 pb-1.5">
                  Future Decided Roadmap Actions
                </span>
                <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-zinc-700 dark:text-zinc-350">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Add Onboarding & Walkthrough</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Create a staff check in application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Create a forms application</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Previous / Next Case Study Bottom Navigation Panel */}
          <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col gap-6 select-none">
            <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-[10px] tracking-widest font-bold">
              Explore More Case Studies
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigateCase?.('duck-research')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Previous Chapter</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors line-clamp-2">
                  Enhancing shopping experience for dUCk - Research for PDP image ratio
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
