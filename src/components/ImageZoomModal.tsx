/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, RotateCcw, X, Move } from 'lucide-react';

interface ImageZoomModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function ImageZoomModal({ src, alt, onClose }: ImageZoomModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset zoom and position on change of source
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [src]);

  // Handle keyboard events (ESC, +, -)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '=' || e.key === '+') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scale]);

  // Scroll wheel to zoom
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = 0.1;
      const direction = e.deltaY < 0 ? 1 : -1;
      const newScale = Math.min(Math.max(scale + direction * zoomFactor, 0.5), 5);
      setScale(newScale);
    };

    const container = document.getElementById('zoom-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scale]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    // Only allow dragging if we are scaled in or holding left click
    if (e.button !== 0) return; // left click only
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Events for Mobile Panning
  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      };
    }
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Double Click / Double Tap to toggle zoom
  const handleDoubleClick = () => {
    if (scale > 1.1) {
      handleReset();
    } else {
      setScale(2);
      setPosition({ x: 0, y: 0 });
    }
  };

  if (!src) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur-md select-none touch-none">
        
        {/* Upper Action Bar */}
        <div className="absolute top-0 inset-x-0 h-16 px-4 sm:px-6 flex items-center justify-between z-50 bg-gradient-to-b from-zinc-950/60 to-transparent">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Image Inspector</span>
            <span className="text-xs sm:text-sm text-zinc-300 font-sans max-w-[280px] sm:max-w-[450px] truncate">
              {alt || 'Case study illustration'}
            </span>
          </div>

          {/* Quick HUD guide */}
          <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-zinc-400 uppercase tracking-widest bg-zinc-900/40 p-1.5 px-3 border border-zinc-805">
            <span>Scroll Wheel to Zoom</span>
            <span className="text-zinc-600 border-l border-zinc-700 pl-4">Double Click to toggle 2x</span>
          </div>

          {/* Action trigger group */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-50 transition-colors rounded-none focus-visible:outline-blue-500 cursor-pointer"
              aria-label="Close zoom viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Stage viewport container */}
        <div 
          id="zoom-container"
          className={`w-full h-full flex items-center justify-center cursor-move overflow-hidden relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleDoubleClick}
        >
          <motion.div 
            style={{
              x: position.x,
              y: position.y,
              scale: scale,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="max-w-[90%] max-h-[80%] flex items-center justify-center"
          >
            <img 
              ref={imageRef}
              src={src} 
              alt={alt} 
              className="max-w-full max-h-full object-contain pointer-events-none select-none border border-zinc-800/50 bg-zinc-900/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Floating HUD bottom control panel */}
        <div className="absolute bottom-6 flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 p-1.5 backdrop-blur-md shadow-2xl z-50">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-transparent rounded-none transition-all cursor-pointer"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          
          <div className="px-3 min-w-[64px] text-center border-x border-zinc-800">
            <span className="font-mono text-xs font-bold text-zinc-300">
              {Math.round(scale * 100)}%
            </span>
          </div>

          <button
            onClick={handleZoomIn}
            disabled={scale >= 5}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-transparent rounded-none transition-all cursor-pointer"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-none transition-all border-l border-zinc-800 cursor-pointer"
            title="Reset Zoom &amp; Position (R)"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>
    </AnimatePresence>
  );
}
