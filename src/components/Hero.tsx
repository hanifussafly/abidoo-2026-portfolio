/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Volume2, Check, Copy, MapPin, Phone, Mail, Link as LinkIcon, HelpCircle, Clock, CheckCircle2, Terminal, Shield, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CDLogo from './CDLogo.tsx';
import InteractiveAvatar from './InteractiveAvatar.tsx';
import { contactInfo } from '../data.ts';

const CAROUSEL_ITEMS = [
  "AI-Native Product Designer",
  "Seasonal Road & Trail Runner",
  "Based in 🇮🇩"
];

export default function Hero() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [copiedBubble, setCopiedBubble] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  // Privacy states to protect contact info from automated spam-bots
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);

  // Auto-rotate the profile subheader carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // HCM City Indochina Time (UTC + 7) dynamic updater clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Get UTC time by subtracting offset
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      // Create new Date object for HCM City (UTC+7)
      const hcmTime = new Date(utc + (3600000 * 7));
      
      const hours = hcmTime.getHours().toString().padStart(2, '0');
      const minutes = hcmTime.getMinutes().toString().padStart(2, '0');
      const seconds = hcmTime.getSeconds().toString().padStart(2, '0');
      
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Speak name function (Accessibility feature for the audio icon)
  const speakName = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // cancel current speak
      const utterance = new SpeechSynthesisUtterance("Abid Hanifussafly");
      utterance.lang = "en-US"; // English/International accent
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setCopiedBubble(true);
    setTimeout(() => {
      setCopiedText(null);
      setCopiedBubble(false);
    }, 2000);
  };

  return (
    <section id="about" className="w-full select-text transition-colors duration-200">
      
      {/* 1. TOP HERO SECTION: Dot Grid background spanning with 1/3 and 2/3 separation */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800 w-full relative">
        <div className="hidden md:block col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 dot-grid min-h-[40px] md:min-h-[160px] relative">
          <div className="absolute top-4 left-6 text-[10px] font-mono text-zinc-400 dark:text-zinc-650 tracking-widest uppercase hidden md:block select-none">
            SYSTEM_GRID: R_00
          </div>
        </div>
        <div className="col-span-1 md:col-span-9 dot-grid py-12 md:py-16 flex items-center justify-center relative min-h-[160px]">
          {/* Decorative blueprint elements */}
          <div className="absolute top-4 right-6 text-[10px] font-mono text-zinc-400 dark:text-zinc-600 tracking-widest uppercase hidden md:block select-none font-bold text-blue-500">
            ● REALTIME ACTIVE
          </div>

          {/* Dynamic CD Pixel Grid Logo centering and entry animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            <CDLogo />
          </motion.div>
        </div>
      </div>

      {/* 2. PROFILE INTERMEDIARY: Avatar and Main Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left Subcolumn: Interactive Avatar Box */}
        <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 flex items-stretch justify-center p-0">
          <InteractiveAvatar />
        </div>        {/* Right Subcolumn: Large Profile Headers */}
        <div className="col-span-1 md:col-span-9 flex flex-col justify-start bg-white dark:bg-zinc-950 divide-y divide-zinc-200 dark:divide-zinc-800">
          <div className="px-5 pt-2 pb-2">
            <div className="h-4.5 sm:h-5 overflow-hidden relative font-mono text-xs md:text-sm text-zinc-400 dark:text-zinc-500 tracking-wider">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={carouselIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 block w-full truncate"
                >
                  {CAROUSEL_ITEMS[carouselIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="px-5 py-2 flex flex-col justify-center">
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-zinc-950 dark:text-zinc-50 tracking-tight">
                Abid Hanifussafly
              </h1>
              
              <div className="flex items-center gap-1.5">
                {/* Verified Blue Checkmark icon */}
                <motion.span 
                  whileHover={{ scale: 1.15 }}
                  className="text-blue-500 drop-shadow-sm cursor-help flex items-center"
                  title="Verified Product Designer Profile"
                >
                  <CheckCircle2 className="w-5 h-5 fill-blue-500 text-white dark:text-zinc-950" />
                </motion.span>
 
                {/* Speaker Announce action button */}
                <button
                  onClick={speakName}
                  className="p-1 px-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-500 dark:text-zinc-400 rounded hover:text-orange-500 transition-all flex items-center"
                  title="Pronounce Name"
                  aria-label="Hear pronunciation of Abid Hanifussafly"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
 
          <div className="px-5 pt-2 pb-5">
            <p className="font-sans font-medium text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Over 7 years, I've shaped digital products used by thousands, from e-commerce platforms to healthcare apps. I integrate AI into my design workflow and product strategy, helping teams move faster without sacrificing depth. My work sits at the intersection of UX strategy, design systems, and product thinking.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CONTACT PARTICULARS TABLE: Double column of metadata aligned to the right 10 columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800 text-sm font-mono">
        
        {/* Left Side: Empty spacer matching grid alignment */}
        <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 bg-transparent hidden md:block select-none" />        {/* Right Side: Double Column of Details */}
        <div className="col-span-1 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 w-full bg-white dark:bg-zinc-950">
          
          {/* Sub-column 1: Design Role, Location, Website */}
          <div className="border-r-0 sm:border-r border-b sm:border-b-0 border-zinc-200 dark:border-zinc-800 flex flex-col justify-start">
            
            {/* Design Role */}
            <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 px-5 py-3 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/15 transition-colors">
              <span className="text-zinc-400">Design Role</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                AI-Native Designer
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 px-5 py-3 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/15 transition-colors">
              <span className="text-zinc-400">Location</span>
              <span className="text-zinc-900 dark:text-zinc-100 text-right font-medium">
                {contactInfo.location}
              </span>
            </div>

            {/* Website */}
            <div className="flex justify-between items-center px-5 py-3 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/15 transition-colors h-full min-h-[44px]">
              <span className="text-zinc-400">Website</span>
              <a 
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 dark:text-zinc-50 font-bold hover:text-orange-500 hover:underline flex items-center gap-1.5 group"
              >
                {contactInfo.website}
              </a>
            </div>

          </div>

          {/* Sub-column 2: WIB Clock, Email, Phone */}
          <div className="flex flex-col justify-start">
            
            {/* Real-time active WIB Time */}
            <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 px-5 py-3 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/15 transition-colors">
              <span className="text-zinc-400">Abid's Time</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold font-mono tracking-widest text-right flex items-center gap-1.5">
                <span className="pulse-subtle text-green-500 text-[10px]" aria-hidden="true">●</span>
                <span>{currentTime || "12:00:00"}</span>
                <span className="text-[10px] text-zinc-400 font-normal">// same time</span>
              </span>
            </div>

            {/* Email Address */}
            <button 
              onClick={() => {
                setIsEmailRevealed(true);
                copyToClipboard(contactInfo.email, 'Email address');
              }}
              className="w-full flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 px-5 py-3 hover:bg-orange-50/5 hover:text-orange-500 group text-left cursor-pointer transition-colors"
              title={isEmailRevealed ? "Click to copy email address" : "Click to unmask & copy email"}
              aria-label={isEmailRevealed ? `Email: ${contactInfo.email}` : "Click to expose & copy email address"}
            >
              <span className="text-zinc-400 group-hover:text-orange-400 flex items-center gap-1.5">
                <span>Email</span>
                {!isEmailRevealed ? (
                  <Shield className="w-3 h-3 text-zinc-350 dark:text-zinc-650 group-hover:text-orange-400/80 transition-colors shrink-0" title="Protected from scrapers" />
                ) : (
                  <ShieldCheck className="w-3 h-3 text-green-500 shrink-0" title="Decrypted successfully" />
                )}
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 font-mono text-xs flex items-center gap-1.5 font-medium select-none">
                {isEmailRevealed ? contactInfo.email : "hani••••••••••••@gmail.com"}
                <Copy className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-orange-500 transition-colors shrink-0" />
              </span>
            </button>

            {/* Phone */}
            <button 
              onClick={() => {
                setIsPhoneRevealed(true);
                copyToClipboard(contactInfo.phone, 'Phone number');
              }}
              className="w-full flex justify-between items-center px-5 py-3 hover:bg-orange-50/5 hover:text-orange-500 group text-left cursor-pointer transition-colors h-full min-h-[44px]"
              title={isPhoneRevealed ? "Click to copy phone number" : "Click to unmask & copy phone number"}
              aria-label={isPhoneRevealed ? `Phone: ${contactInfo.phone}` : "Click to expose & copy phone number"}
            >
              <span className="text-zinc-400 group-hover:text-orange-400 flex items-center gap-1.5">
                <span>Phone</span>
                {!isPhoneRevealed ? (
                  <Shield className="w-3 h-3 text-zinc-350 dark:text-zinc-650 group-hover:text-orange-400/80 transition-colors shrink-0" title="Protected from scrapers" />
                ) : (
                  <ShieldCheck className="w-3 h-3 text-green-500 shrink-0" title="Decrypted successfully" />
                )}
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 font-mono text-xs flex items-center gap-1.5 transition-all font-medium select-none">
                {isPhoneRevealed ? contactInfo.phone : "+62 896-••••-••••"}
                <Copy className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-orange-500 transition-colors shrink-0" />
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* 4. FLOATING NOTIFICATION BANNER when copying coordinates */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            className="fixed bottom-6 right-6 z-50 bg-zinc-900 dark:bg-zinc-50 hover-scale text-zinc-50 dark:text-zinc-900 font-mono text-xs px-3.5 py-2 rounded-md shadow-2xl border border-zinc-800 dark:border-zinc-200 flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-green-400 dark:text-green-600" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
