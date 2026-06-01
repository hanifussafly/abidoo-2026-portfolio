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
  Tv
} from 'lucide-react';

interface CaseStudyMolaProps {
  onBack: () => void;
  onNavigateCase?: (slug: string) => void;
}

interface CaseImageProps {
  src: string;
  caption: string;
}

const renderMolaMockup = (src: string) => {
  if (src.includes('new-user-flow')) {
    return (
      <div className="w-full bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-6 font-sans select-none flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">Scenario A: New User Onboarding Flow Map</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-stretch relative text-xs">
          <div className="p-3.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Step 01 // Entry</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-250">Registration Gate</span>
            <p className="text-[10px] text-zinc-500 font-normal leading-relaxed">User enters onboarding credentials or triggers single-sign-on authentications.</p>
          </div>
          <div className="flex items-center justify-center text-zinc-400 h-6 sm:h-auto">
            <span className="sm:hidden text-lg">↓</span>
            <span className="hidden sm:inline text-lg">→</span>
          </div>
          <div className="p-3.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Step 02 // Profiling</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-255">Favorite Genres</span>
            <p className="text-[10px] text-zinc-500 font-normal leading-relaxed">User selects exactly 5 key tags (e.g. Sports, Action Movies) to configure content.</p>
          </div>
          <div className="flex items-center justify-center text-zinc-400 h-6 sm:h-auto">
            <span className="sm:hidden text-lg">↓</span>
            <span className="hidden sm:inline text-lg">→</span>
          </div>
          <div className="p-3.5 border border-blue-500/20 dark:border-blue-500/20 bg-blue-50/20 dark:bg-blue-950/20 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-blue-500 dark:text-blue-400 uppercase tracking-widest font-bold">Step 03 // Landing</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              Custom Home
              <span className="px-1 text-[8px] border border-blue-500/50 text-blue-600 dark:text-blue-400 font-mono">LIVE</span>
            </span>
            <p className="text-[10px] text-zinc-650 dark:text-zinc-400 font-normal leading-relaxed">Landing feed serves customized team events and genre streams instantly.</p>
          </div>
        </div>
      </div>
    );
  }

  if (src.includes('existing-user-flow')) {
    return (
      <div className="w-full bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-6 font-sans select-none flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">Scenario B: Existing User Logic Flow</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-stretch relative text-xs">
          <div className="p-3.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Stage 01 // Gate</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-250">Login credentials</span>
            <p className="text-[10px] text-zinc-500 font-normal leading-relaxed">System parses existing login details during login entry check.</p>
          </div>
          <div className="flex items-center justify-center text-zinc-400 h-6 sm:h-auto">
            <span className="sm:hidden text-lg">↓</span>
            <span className="hidden sm:inline text-lg">→</span>
          </div>
          <div className="p-3.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Stage 02 // Check</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-255">Preference Check</span>
            <p className="text-[10px] text-zinc-500 font-normal leading-relaxed">Checks if active content preference keys exist in user account database profile.</p>
          </div>
          <div className="flex items-center justify-center text-zinc-400 h-6 sm:h-auto">
            <span className="sm:hidden text-lg">↓</span>
            <span className="hidden sm:inline text-lg">→</span>
          </div>
          <div className="p-3.5 border border-amber-500/20 dark:border-amber-500/20 bg-amber-50/20 dark:bg-amber-950/20 rounded-none flex flex-col gap-1.5 shadow-sm min-h-[140px]">
            <span className="font-mono text-[8px] text-amber-500 dark:text-amber-400 uppercase tracking-widest font-bold">Stage 03 // Smart Router</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Direct Delivery</span>
            <p className="text-[10px] text-zinc-650 dark:text-zinc-400 font-normal leading-relaxed">Skips onboarding configuration and lands user directly on custom dashboard streams.</p>
          </div>
        </div>
      </div>
    );
  }

  if (src.includes('wireframe')) {
    return (
      <div className="w-full bg-zinc-50 dark:bg-zinc-900/30 p-4 sm:p-5 font-sans select-none flex flex-col gap-4">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-bold block">Low-Fidelity Screen Wireframe Board</span>
        <div className="border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 p-4 rounded-none max-w-sm mx-auto w-full flex flex-col gap-4 border-dashed">
          {/* Header Block Mock */}
          <div className="flex justify-between items-center border border-zinc-200 dark:border-zinc-800 p-2 border-dashed">
            <div className="w-16 h-4 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 border-dashed" />
            <div className="w-32 h-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 border-dashed flex items-center justify-center font-mono text-[9px] text-zinc-400">Search Placeholder</div>
            <div className="w-4 h-4 bg-zinc-150 dark:bg-zinc-800 border border-dashed rounded-full" />
          </div>
          {/* Main Visual Carousel Mock */}
          <div className="h-28 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 border-dashed flex flex-col items-center justify-center p-3 text-center gap-1.5">
            <span className="font-sans font-bold text-xs text-zinc-450 dark:text-zinc-500">[ EPL LIVE VIDEO HEADER CAROUSEL ]</span>
            <span className="font-mono text-[9px] text-zinc-400">Aspect Ratio 16:9 - Live Match Primary stream slot</span>
          </div>
          {/* Thumb Zone List Rows */}
          <div className="flex flex-col gap-2">
            <div className="h-3 w-28 bg-zinc-200 dark:bg-zinc-700 border border-dashed" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 border-dashed flex items-center justify-center font-mono text-[9px] text-zinc-400">[Stream 1]</div>
              <div className="h-16 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 border-dashed flex items-center justify-center font-mono text-[9px] text-zinc-400">[Stream 2]</div>
              <div className="h-16 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 border-dashed flex items-center justify-center font-mono text-[9px] text-zinc-400">[Stream 3]</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (src.includes('sign-in-up')) {
    return (
      <div className="w-full bg-zinc-950 py-8 px-4 font-sans select-none">
        <div className="max-w-xs mx-auto bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col gap-6 text-zinc-100">
          <div className="flex justify-between items-center text-zinc-550 text-[10px] px-1">
            <span className="font-mono tracking-tighter">09:41</span>
            <div className="flex items-center gap-1.5 font-sans">
              <span>LTE</span>
              <span className="w-4 h-2.5 border border-zinc-650 rounded-sm inline-block relative pr-0.5"><span className="absolute top-[1.5px] -right-[3px] w-[2px] h-[3px] bg-zinc-655" /></span>
            </div>
          </div>
          <div className="text-center flex flex-col gap-1.5 mt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto text-white font-black text-xl tracking-tighter shadow-md">M</div>
            <h4 className="font-display font-bold text-lg text-white tracking-tight mt-1">Join Mola TV Today</h4>
            <p className="text-[10px] text-zinc-400 leading-normal">Elevating streaming and customized schedules</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1 font-bold">Email Address</label>
              <div className="p-2.5 bg-zinc-850 border border-zinc-750 text-xs text-zinc-300">hanifussafly@gmail.com</div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1 font-bold">Password</label>
              <div className="p-2.5 bg-zinc-850 border border-zinc-750 text-xs text-zinc-450 tracking-widest">•••••••••••••</div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 text-xs text-center border-none mt-2 transition-colors cursor-pointer rounded-none">
              Sign Up For Free Account
            </button>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-[9px] uppercase tracking-wider justify-center">
            <span className="h-px bg-zinc-800 flex-1" />
            <span>Or Connect using</span>
            <span className="h-px bg-zinc-800 flex-1" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center mb-4">
            <div className="p-2 border border-zinc-750 bg-zinc-850 text-zinc-150 font-bold hover:bg-zinc-800 transition-colors cursor-pointer">Google</div>
            <div className="p-2 border border-zinc-750 bg-zinc-850 text-zinc-150 font-bold hover:bg-zinc-800 transition-colors cursor-pointer">Facebook</div>
          </div>
        </div>
      </div>
    );
  }

  if (src.includes('walkthrough-1')) {
    return (
      <div className="w-full bg-zinc-950 py-8 px-4 font-sans select-none">
        <div className="max-w-xs mx-auto bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col gap-5 text-zinc-100">
          <div className="flex justify-between items-center text-zinc-550 text-[10px] px-1">
            <span className="font-mono tracking-tighter">09:41</span>
            <span className="font-mono scale-90 text-blue-500">Step 1 of 3</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-tight leading-snug">Personalize Your Genres</h4>
            <p className="text-[10px] text-zinc-450 leading-relaxed mt-1">Tap your 5 favorite categories to customize your streaming feed.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 my-1">
            <div className="p-3 border-2 border-blue-500 bg-blue-500/10 text-xs font-semibold rounded-none flex flex-col justify-between h-20 relative cursor-pointer">
              <span className="text-white">Live Sports</span>
              <span className="absolute top-2 right-2 w-4.5 h-4.5 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-[8px] text-white">✓</span>
            </div>
            <div className="p-3 border-2 border-blue-500 bg-blue-500/10 text-xs font-semibold rounded-none flex flex-col justify-between h-20 relative cursor-pointer">
              <span className="text-white">Cinema & Movies</span>
              <span className="absolute top-2 right-2 w-4.5 h-4.5 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-[8px] text-white">✓</span>
            </div>
            <div className="p-3 border-2 border-blue-500 bg-blue-500/10 text-xs font-semibold rounded-none flex flex-col justify-between h-20 relative cursor-pointer">
              <span className="text-white">Documentaries</span>
              <span className="absolute top-2 right-2 w-4.5 h-4.5 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-[8px] text-white">✓</span>
            </div>
            <div className="p-3 border border-zinc-800 bg-zinc-850 hover:border-zinc-700 text-xs text-zinc-450 rounded-none flex flex-col justify-between h-20 cursor-pointer transition-colors">
              <span>Kids & Family</span>
              <span className="w-3.5 h-3.5 bg-transparent border border-zinc-700 rounded-full inline-block self-end" />
            </div>
          </div>
          <div className="flex justify-between items-center text-xs mt-2 mb-4">
            <span className="text-zinc-500 text-[10px]">Selected: 3 of 5</span>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 transition-colors text-[10px] uppercase tracking-wider rounded-none">
              Next Step
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (src.includes('walkthrough-2')) {
    return (
      <div className="w-full bg-zinc-950 py-8 px-4 font-sans select-none">
        <div className="max-w-xs mx-auto bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col gap-5 text-zinc-100">
          <div className="flex justify-between items-center text-zinc-550 text-[10px] px-1">
            <span className="font-mono tracking-tighter">09:41</span>
            <span className="font-mono scale-90 text-blue-500">Step 2 of 3</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-tight leading-snug">Choose Gateway Bundle</h4>
            <p className="text-[10px] text-zinc-405 leading-relaxed mt-1">Subscribing custom bundle unlocks personalized streams immediately.</p>
          </div>
          <div className="flex flex-col gap-3 my-1">
            {/* Standard Tier */}
            <div className="p-3 bg-zinc-850 border border-zinc-750 flex justify-between items-center cursor-pointer hover:border-zinc-600 transition-colors">
              <div>
                <span className="text-xs font-bold block text-zinc-100">Standard Showcase</span>
                <span className="text-[9px] text-zinc-450 font-normal">Movies and series streaming only</span>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-300">$3.99/mo</span>
            </div>
            {/* Recommended Tier */}
            <div className="p-3 bg-blue-500/10 border-2 border-blue-500 flex justify-between items-center relative cursor-pointer">
              <span className="absolute -top-2 right-4 bg-blue-500 text-[8px] font-mono leading-none py-1 px-1.5 font-bold uppercase tracking-widest text-white">RECOMMENDED</span>
              <div>
                <span className="text-xs font-bold block text-white">Sports & Stream Premium</span>
                <span className="text-[9px] text-blue-400 font-normal">All movies plus exclusive live EPL sports</span>
              </div>
              <span className="text-xs font-mono font-bold text-blue-400">$6.99/mo</span>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 text-xs uppercase tracking-wider mt-2 mb-4 text-center rounded-none cursor-pointer">
            Subscribe & Continue
          </button>
        </div>
      </div>
    );
  }

  if (src.includes('walkthrough-3')) {
    return (
      <div className="w-full bg-zinc-950 py-8 px-4 font-sans select-none">
        <div className="max-w-xs mx-auto bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col gap-5 text-zinc-100">
          <div className="flex justify-between items-center text-zinc-550 text-[10px] px-1">
            <span className="font-mono tracking-tighter">09:41</span>
            <span className="font-mono scale-90 text-blue-500">Step 3 of 3</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white tracking-tight leading-snug">Track Your Teams</h4>
            <p className="text-[10px] text-zinc-405 leading-relaxed mt-1">Choose teams you support to directly prioritize live fixtures on your feed.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 my-1 text-center">
            <div className="p-2 border-2 border-blue-500 bg-blue-500/10 flex flex-col items-center justify-center gap-1.5 relative cursor-pointer">
              <div className="w-7 h-7 bg-zinc-850 rounded-full border border-blue-300 flex items-center justify-center font-mono text-[8px] font-extrabold text-blue-400">LIV</div>
              <span className="text-[9px] font-semibold text-white truncate w-full">Liverpool FC</span>
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
            <div className="p-2 border border-zinc-800 bg-zinc-850 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:border-zinc-700 transition-colors">
              <div className="w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center font-mono text-[8px] font-bold text-zinc-500">CHE</div>
              <span className="text-[9px] font-medium text-zinc-400 truncate w-full">Chelsea FC</span>
            </div>
            <div className="p-2 border-2 border-blue-500 bg-blue-500/10 flex flex-col items-center justify-center gap-1.5 relative cursor-pointer">
              <div className="w-7 h-7 bg-zinc-850 rounded-full border border-blue-300 flex items-center justify-center font-mono text-[8px] font-extrabold text-blue-400">ARS</div>
              <span className="text-[9px] font-semibold text-white truncate w-full">Arsenal FC</span>
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 text-xs uppercase tracking-wider mt-2 mb-4 text-center rounded-none cursor-pointer">
            Finished • Go to Feed
          </button>
        </div>
      </div>
    );
  }

  if (src.includes('beranda')) {
    return (
      <div className="w-full bg-zinc-950 py-8 px-4 font-sans select-none">
        <div className="max-w-xs mx-auto bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 p-5 shadow-2xl flex flex-col gap-4 text-zinc-100">
          <div className="flex justify-between items-center text-zinc-550 text-[10px] px-1">
            <span className="font-mono tracking-tighter">09:41</span>
            <span className="font-bold text-blue-500 text-[9px] uppercase tracking-wide">● LIVE FEED</span>
          </div>
          {/* Header tabs navigation */}
          <div className="flex gap-4 border-b border-zinc-850 pb-2 text-[10px] font-bold text-zinc-400">
            <span className="text-white border-b-2 border-blue-500 pb-2">Home</span>
            <span>Sports</span>
            <span>Movies</span>
            <span>Living</span>
          </div>
          {/* EPL Spotlight Live Box */}
          <div className="bg-zinc-850 rounded-none overflow-hidden border border-zinc-750 flex flex-col gap-1.5">
            <div className="bg-zinc-800 h-24 p-3 relative flex flex-col justify-end">
              <span className="absolute top-3 left-3 bg-red-600 text-[8px] font-bold inline-flex items-center gap-1 py-0.5 px-1.5 rounded-sm"><span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />LIVE 76&apos;</span>
              <span className="text-[10px] font-semibold text-blue-400 tracking-wide font-mono">English Premier League</span>
              <h5 className="text-[11px] font-extrabold text-white">Chelsea FC <span className="text-blue-500 font-mono">2 - 1</span> Arsenal FC</h5>
            </div>
            <div className="p-2 flex items-center justify-between text-[9px] text-zinc-450 border-t border-zinc-800">
              <span>Streaming matches with active UGC preferences</span>
              <span className="text-blue-500 font-bold hover:underline cursor-pointer">Launch Stream</span>
            </div>
          </div>
          {/* Resume Matching section row */}
          <div className="flex flex-col gap-2 mt-1">
            <span className="text-[10px] font-bold tracking-wide uppercase text-zinc-405 font-mono">Resume Watching</span>
            <div className="p-2.5 bg-zinc-850 border border-zinc-800 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-semibold">
                <span className="text-white">Liverpool vs Leicester City</span>
                <span className="text-zinc-500 text-[9px]">40m left</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[65%]" />
              </div>
            </div>
          </div>
          {/* Footer rail elements bar */}
          <div className="border-t border-zinc-850 pt-2.5 mt-2 flex justify-around items-center text-zinc-500 text-[10px] max-h-10">
            <span className="text-blue-500 font-bold">Home</span>
            <span>Schedule</span>
            <span>Search</span>
            <span>Billing</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const NOTION_IMAGE_MAPPING: Record<string, string> = {
  'new-user-flow': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F34bad2e0-086b-43b4-88b6-01d5d210013f%2FUntitled.png?table=block&id=61ddc160-f724-40ac-8b26-3f15a42b3257&cache=v2',
  'existing-user-flow': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb35aa9de-753e-409f-bbb3-32ecc1c0c3cc%2FUntitled.png?table=block&id=35f09972-a36b-48f6-8da0-e0c8144dcb4e&cache=v2',
  'wireframe': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F161199f7-9407-4a9f-83d8-0d7e36344bf6%2FScreen_Shot_2020-09-08_at_13.32.43.png?table=block&id=7c2c4932-9de3-4510-be23-89f22c36299b&cache=v2',
  'sign-in-up': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F681962e1-5445-4e8b-9626-2853cf63d8ab%2FUntitled.png?table=block&id=125272ac-e584-432f-888b-384c5d8ee361&cache=v2',
  'walkthrough-1': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3067b96d-e6ac-4b1e-bc51-2a3794ee8697%2FUntitled.png?table=block&id=f035bf5f-e12b-44e3-b59f-6fd9dbfbf4ba&cache=v2',
  'walkthrough-2': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69c744c6-c393-4502-9ccf-5d241e8306eb%2FUntitled.png?table=block&id=6dbc515e-72df-4d91-8d8f-fddad4128790&cache=v2',
  'walkthrough-3': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53149498-adb1-4dd6-a6c2-f65d02edd59f%2FUntitled.png?table=block&id=05caef3c-3830-4632-b615-ef1a562c7a6a&cache=v2',
  'beranda': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf434905-1a15-4a58-94d2-c82ae5abcffb%2FUntitled.png?table=block&id=29d7d6dd-c72d-4602-b84d-900a04c471c6&cache=v2',
  'section-feature': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5cba9e6e-e788-4c89-9d57-c5d01a7e3a99%2FUntitled.png?table=block&id=1841293d-a104-445c-8c58-560733466424&cache=v2',
  'search': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e882340-bc6d-418a-ae9c-30ef5c4c2f8c%2FUntitled.png?table=block&id=d4f71f1b-0017-441f-ba63-18b04c6adbc1&cache=v2',
  'profile-1': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3310fca8-e141-4269-bc22-526a878407fa%2FUntitled.png?table=block&id=0f2140e1-41fe-41a4-8654-78a9a98c3ff5&cache=v2',
  'profile-2': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcdf2e859-40ab-44b5-be6f-fbf80579eb4a%2FUntitled.png?table=block&id=fef87912-6911-42b1-bc92-565fb1b8cc10&cache=v2',
  'thankyou': 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e37052e-89ab-4094-b29b-25f3a0acbaef%2FUntitled.png?table=block&id=37634ca3-9a35-4233-88ad-f34b35dd7342&cache=v2',
};

const CaseImage = ({ src, caption }: CaseImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  // Resolve mapping
  let imageUrl = src;
  const key = Object.keys(NOTION_IMAGE_MAPPING).find(k => src.includes(k));
  if (key) {
    imageUrl = NOTION_IMAGE_MAPPING[key];
  }

  return (
    <div className="my-6 w-full flex flex-col gap-2.5">
      <div className="w-full border border-zinc-200 dark:border-zinc-850 rounded-none overflow-hidden bg-zinc-50 dark:bg-zinc-900/10 p-1 relative flex items-center justify-center min-h-[140px]">
        {!loaded && !errorStatus && (
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-905 flex flex-col items-center justify-center p-6 gap-2">
            <div className="w-5 h-5 border-2 border-zinc-300 dark:border-zinc-700 border-t-zinc-600 dark:border-t-zinc-400 rounded-full animate-spin" />
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Loading Image...</span>
          </div>
        )}
        {errorStatus ? (
          <div className="py-12 px-6 flex flex-col items-center justify-center text-center gap-2">
            <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Failed to render active image asset</span>
            <span className="text-[10px] font-mono text-zinc-400">{src}</span>
          </div>
        ) : (
          <img 
            src={imageUrl} 
            alt={caption} 
            className={`w-full h-auto object-cover select-none transition-all duration-300 hover:scale-[1.005] ${loaded ? 'opacity-100' : 'opacity-0 h-0'}`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrorStatus(true)}
          />
        )}
      </div>
      <span className="font-mono text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block text-center leading-normal">
        {caption}
      </span>
    </div>
  );
};

export default function CaseStudyMola({ onBack, onNavigateCase }: CaseStudyMolaProps) {
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
      </div>

      {/* Hero Header Block */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 md:px-8 py-10 md:py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-blue-500 dark:text-blue-400 font-bold uppercase tracking-widest block mb-3">
              UX/UI Redesign Case Study
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight select-text">
              Mola TV - Elevating the Registration Flow with User-Generated Preferences
            </h1>
          </div>
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 select-text">
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Role</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <User className="w-4 h-4 text-zinc-400" /> UI/UX Designer
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Timeline</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" /> July 2020 (Redesign Concept)
          </span>
        </div>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Product & Platform</span>
          <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Tv className="w-4 h-4 text-zinc-400" /> Mola TV Mobile (Android) Redesign
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
              <a href="#problem" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">01 // Problem Statement</a>
              <a href="#research" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">02 // User Research</a>
              <a href="#literature" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">03 // Literature Review</a>
              <a href="#flows" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">04 // Flows & Wireframes</a>
              <a href="#highfidelity" className="hover:text-zinc-955 dark:hover:text-zinc-50 transition-colors">05 // High-Fidelity Details</a>
              <a href="#prototype" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">06 // Interactive Prototypes</a>
            </nav>
          </div>
        </div>

        {/* Right column detailed reading content */}
        <div className="md:col-span-9 p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-14 select-text max-w-4xl">

          {/* 1. Problem Statement */}
          <section id="problem" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">01</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Problem Statement</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              A Vast Library with Underutilized Content Preferences
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                Mola boasts an incredible abundance of entertainment and sports coverage—spanning world-class soccer, boxing, martial arts, movies, series, and kids' programs. However, when users first opened the app, Mola had no structured way of knowing what individual users actually wanted to watch.
              </p>
              <p className="border-l-2 border-zinc-900 dark:border-zinc-450 pl-4 py-1 italic font-medium text-zinc-800 dark:text-zinc-200">
                "How do we design a highly effective, friction-free registration and onboarding flow for both new and existing users that captures their specific preferences right at the entry point?"
              </p>
            </div>
          </section>

          {/* 2. User Research */}
          <section id="research" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">02</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">User Research</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Gathering Real Usage Insights & Expectations
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                To explore issues with the existing app experience, I conducted targeted user interviews and synthesized findings based on my own systematic usage and interactions with active Mola TV consumers.
              </p>
              
              <div className="p-5 border border-zinc-150 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 my-2">
                <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-3 font-bold">Research Questions Asked:</span>
                <ol className="list-decimal pl-5 flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Since when have you been using Mola?</li>
                  <li>When you opened the app for the first time, what was the first content you wanted to watch?</li>
                  <li>Did you find the registration process confusing? What specific steps felt troublesome?</li>
                  <li>How long did it take you to complete the registration?</li>
                  <li>What other classes of content (outside of your primary interest) have you watched on the platform?</li>
                  <li>Is finding the specific content you want on the current app harder, or has it become easier?</li>
                </ol>
              </div>

              <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-150 mt-4 leading-normal">
                Key Insights and Synthesis
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-zinc-650 dark:text-zinc-300 text-sm">
                <li>
                  <strong>Campaign-Driven Onboarding:</strong> Interviewed participants began using Mola primarily for the restart of the English Premier League 2019/2020 season in June 2020.
                </li>
                <li>
                  <strong>High Attrition Risks:</strong> Subscriptions were frequently isolated strictly to the specific Premier League season packages, indicating lower general discovery rates of other paid categories.
                </li>
                <li>
                  <strong>Social Logins are Dominant:</strong> Users experienced zero friction when they skipped standard manual forms in favor of single-tap credentials like "Login with Google."
                </li>
                <li>
                  <strong>Content Engagement Gaps:</strong> Even when users tried to branch out—for example, attempting to watch movies—they abandoned sessions midway because discovery was poor and personalized recommendations did not exist.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Literature Review */}
          <section id="literature" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">03</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Literature Review & Principles</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              Structuring the User Preference Framework
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                To back our redesign with proven patterns, I referenced the paradigm defined in the research paper <em>"User Experience Design of User Generated Content Products"</em> (Hongyuan Ma, 2016). The paper underlines three critical pillars for engaging user interest:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-400">Pillar 01</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100">Scenario-Based Content Entry</h4>
                  <p className="text-xs text-zinc-500">Provide direct, scenario-driven ingress points matching immediate user intent.</p>
                </div>
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-400">Pillar 02</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100">Effortless Navigation</h4>
                  <p className="text-xs text-zinc-500 font-normal">Establish crystal-clear and highly discoverable hierarchies within the app.</p>
                </div>
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-bold text-zinc-400">Pillar 03</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100">User Incentivization</h4>
                  <p className="text-xs text-zinc-500">Encourage active profiling by directly reflecting preferred selections on the interface.</p>
                </div>
              </div>

              <p>
                <strong>Conclusion:</strong> A clean User-Generated content onboarding sequence will customize the content feed on-the-fly. During registration, prompting users to declare their personal preferences allows us to immediately shape their experience, lowering churn rates.
              </p>
            </div>
          </section>

          {/* 4. Flows & Wireframes */}
          <section id="flows" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">04</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">User Flows & Wireframes</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              Designing Scenarios for New & Existing Users
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4 mt-2">
              <p>
                I drafted two distinct flow diagrams to map out specific conditions:
              </p>
              
              <div className="flex flex-col gap-6 my-4">
                <CaseImage 
                  src="/mola-tv-new-user-flow.png"
                  caption="Scenario A: Complete user onboarding flow for first-time registrants"
                />
                <CaseImage 
                  src="/mola-tv-returning-user-flow.png"
                  caption="Scenario B: Seamless update check flow for pre-existing active users"
                />
              </div>

              <p>
                Following the core logic flow, I sketched structured wireframes to draft layout patterns, form styles, and thumb-friendly spacing constraints.
              </p>

              <CaseImage 
                src="/mola-tv-registration-wireframes.png"
                caption="Low-fidelity wireframe blueprints outlining screen layouts"
              />

              <div className="p-5 border border-zinc-150 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 my-2">
                <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 tracking-wider block mb-3 font-bold">Planned Product Features:</span>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-normal">
                  <li><strong>Initial Genre Choices:</strong> Fresh registrants see an elegant grid to toggle their five favorite content types.</li>
                  <li><strong>Value-Aligned Bundles:</strong> Direct personalization engine that serves subscription bundles matching user-selected genres instantly.</li>
                  <li><strong>Targeted Sports Filters:</strong> If sport-centric choices (like soccer) are picked, users select favorite teams to directly customize schedules and upcoming live reminders on their home screens.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. High-Fidelity Details */}
          <section id="highfidelity" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">05</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">High-Fidelity Design Review</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-955 dark:text-zinc-50 tracking-tight">
              Polished High-Fidelity Visual Systems
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-6 mt-2">
              <p>
                These designs strictly adhere to Android Material guidelines. Layout densities, card components, text sizing, and custom UI components are tailored beautifully for elegant mobile interactions.
              </p>

              {/* Hifi 1: Sign in */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div>
                  <h3 className="font-sans font-bold text-zinc-850 dark:text-zinc-100 text-base mb-1.5">Sign In & Sign Up Screen</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    This screen maximizes pendaftaran speed and convenience. Users can manually sign up, or immediately authenticate using streamlined triggers: "Continue with Google", "Continue with Facebook", or standard single-tap "Email Authentication."
                  </p>
                </div>
                <div className="max-w-xs mx-auto md:max-w-none w-full">
                  <CaseImage src="/mola-tv-sign-in-up-onboarding.png" caption="Clean, high-contrast entry login portal" />
                </div>
              </div>

              {/* Hifi 2: Walkthrough 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div className="max-w-xs mx-auto md:max-w-none w-full order-2 md:order-1">
                  <CaseImage src="/mola-tv-onboarding-genres-grid.png" caption="Onboarding grid selection pattern" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-sans font-bold text-zinc-850 dark:text-zinc-100 text-base mb-1.5">Walkthrough Phase 1: Favorite Content</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    The initial step displays content category mapping. When a user creates their account, they select up to 5 favorite types of entertainment spanning high-interest live sports, feature films, family cartoons, or documentary serials.
                  </p>
                </div>
              </div>

              {/* Hifi 3: Walkthrough 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div>
                  <h3 className="font-sans font-bold text-zinc-850 dark:text-zinc-100 text-base mb-1.5">Walkthrough Phase 2: Package Recommendation</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    Based on selected tastes, users are served custom packages matching their profiling criteria directly. This screen speeds up monetization loops by allowing instant billing setups and friction-free payment checkouts.
                  </p>
                </div>
                <div className="max-w-xs mx-auto md:max-w-none w-full">
                  <CaseImage src="/mola-tv-onboarding-subscription-bundles.png" caption="Targeted payment bundle recommendation" />
                </div>
              </div>

              {/* Hifi 4: Walkthrough 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div className="max-w-xs mx-auto md:max-w-none w-full order-2 md:order-1">
                  <CaseImage src="/mola-tv-onboarding-sports-teams.png" caption="Team-level sports tracking onboarding" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-sans font-bold text-zinc-850 dark:text-zinc-100 text-base mb-1.5">Walkthrough Phase 3: Team-Level Customization</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    Under the Sports vertical, users select exact football clubs they support from their favorite leagues list. This enables highly relevant notification triggers and localized home feed setups.
                  </p>
                </div>
              </div>

              {/* Hifi 5: Homepage */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div className="md:col-span-7 flex flex-col gap-3">
                  <h3 className="font-sans font-bold text-zinc-850 dark:text-zinc-100 text-base mb-1.5">Main Home Layout Redesign</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                    The revamped Homepage focuses on immediate reach and clean discoverability:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2.5 text-zinc-500 text-xs">
                    <li>
                      <strong>Direct Live Streams:</strong> Positioned active Matches directly on the homepage, removing the high-friction step of accessing the schedule menu separately.
                    </li>
                    <li>
                      <strong>Resume-Watching Strip:</strong> Fully answers the requirement of scenario-driven content entry, allowing players to instantly resume paused matches or unfinished movies without searching.
                    </li>
                    <li>
                      <strong>This Week's Hype:</strong> Highlights high-engagement trending events to inspire curious viewers easily.
                    </li>
                    <li>
                      <strong>Thumb-Optimized Bottom Bar:</strong> Swapped search and schedules positions to fit the optimal thumb reach zone around the center of target displays.
                    </li>
                    <li>
                      <strong>Header Navigation Zones:</strong> Clean, distinct header segmentation (Home Logo, Sports, Movies, Living) that makes rapid browsing effortless.
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-5 max-w-xs mx-auto md:max-w-none w-full">
                  <CaseImage src="/mola-tv-homepage-redesign.png" caption="The Redesigned Mola TV Homepage layout" />
                </div>
              </div>

               {/* Extra Hifi: Mola Features, Search and Profile details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <div>
                  <h4 className="font-sans font-semibold text-zinc-850 dark:text-zinc-100 text-sm mb-1">Tailored Search Experience</h4>
                  <CaseImage src="/mola-tv-search-suggestions.png" caption="Fast real-time query results with active suggestions" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-zinc-850 dark:text-zinc-100 text-sm mb-1">Section and Featured Highlights</h4>
                  <CaseImage src="/mola-tv-featured-content-blocks.png" caption="High-fidelity display of active content feature blocks" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-zinc-850 dark:text-zinc-100 text-sm mb-1">User Profile & Subscriptions Interface</h4>
                  <CaseImage src="/mola-tv-profile-account-settings.png" caption="Polished account status and bundle levels page code" />
                </div>
              </div>

            </div>
          </section>

          {/* 6. Live Prototypes */}
          <section id="prototype" className="flex flex-col gap-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/10 text-blue-500 font-mono text-[10px] font-bold rounded-none">06</span>
              <span className="font-mono text-zinc-400 dark:text-zinc-500 uppercase text-xs tracking-wider">Live Figma Prototypes</span>
            </div>
            
            <h2 className="font-display font-semibold text-2xl text-zinc-950 dark:text-zinc-50 tracking-tight">
              Test Interactive Case Prototypes
            </h2>

            <div className="font-sans text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-8 mt-2">
              <p>
                Below are real interactive Figma prototypes. Select and try individual user scenarios:
              </p>

              {/* Proto 1: New User */}
              <div className="flex flex-col gap-2 border border-zinc-200 dark:border-zinc-805 p-1 rounded-none bg-zinc-50/50 dark:bg-zinc-900/5">
                <div className="p-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blue-500 font-bold">Scenario 01</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100 mt-0.5">New Registrant User Flow</h4>
                  <p className="text-xs text-zinc-500 font-normal">Sign up, select genres, verify bundle packages, select favorite teams, and enter the localized homepage feed.</p>
                </div>
                <div className="w-full h-[500px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-800">
                  <iframe 
                    src="https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl81QZ6Bne94BzOw8cjTHHi%2FMola-TV%3Fnode-id%3D135%253A7%26viewport%3D372%252C377%252C0.18211358785629272%26scaling%3Dscale-down" 
                    className="w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Proto 2: Existing User App Version Update */}
              <div className="flex flex-col gap-2 border border-zinc-200 dark:border-zinc-805 p-1 rounded-none bg-zinc-50/50 dark:bg-zinc-900/5">
                <div className="p-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blue-500 font-bold">Scenario 02</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100 mt-0.5">Pre-Existing App Version Update Flow</h4>
                  <p className="text-xs text-zinc-500 font-normal">Active paying users are prompted to configure their content tastes after they perform their latest Play Store update.</p>
                </div>
                <div className="w-full h-[500px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-800">
                  <iframe 
                    src="https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl81QZ6Bne94BzOw8cjTHHi%2FMola-TV%3Fnode-id%3D136%253A611%26viewport%3D824%252C826%252C0.24332933127880096%26scaling%3Dscale-down" 
                    className="w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Proto 3: Skip Preferences */}
              <div className="flex flex-col gap-2 border border-zinc-200 dark:border-zinc-805 p-1 rounded-none bg-zinc-50/50 dark:bg-zinc-900/5">
                <div className="p-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blue-500 font-bold">Scenario 03</span>
                  <h4 className="font-sans font-bold text-sm text-zinc-850 dark:text-zinc-100 mt-0.5">Skipping Genre Preference Prompts</h4>
                  <p className="text-xs text-zinc-500 font-normal">User selects to bypass prompts and go straight to default matches and live feeds directly.</p>
                </div>
                <div className="w-full h-[500px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-800">
                  <iframe 
                    src="https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl81QZ6Bne94BzOw8cjTHHi%2FMola-TV%3Fnode-id%3D144%253A864%26viewport%3D620%252C330%252C0.18170304596424103%26scaling%3Dscale-down" 
                    className="w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>
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
                onClick={() => onNavigateCase?.('niagahoster')}
                className="group p-5 text-left border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-650 rounded-none transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 uppercase tracking-widest transition-colors text-right">
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h4 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-orange-500 transition-colors text-right line-clamp-2">
                  Niagahoster Landing Page Redesign with UCD
                </h4>
              </button>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
}
