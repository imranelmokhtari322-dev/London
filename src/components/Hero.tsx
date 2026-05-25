import { Shield, Sparkles, MoveRight, ChevronDown, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
  onOpenCheckout: () => void;
}

export default function Hero({ onScrollTo, onOpenCheckout }: HeroProps) {
  return (
    <header
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col justify-end sm:justify-between items-center bg-black overflow-hidden select-none border-b border-neutral-800"
    >
      {/* Background Movie Image */}
      <div className="absolute inset-0 z-0 film-grain">
        <img
          src="https://media.themoviedb.org/t/p/original/fWPgbnt2LSqkQ6cdQc0SZN9CpLm.jpg"
          alt="28 Years Later"
          className="w-full h-full object-cover object-top opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Deep dark gradient overlays — cinematic letterbox feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

        {/* Vignette */}
        <div className="absolute inset-0 cinema-vignette" />

        {/* Red/crimson accent glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-gradient-to-tr from-red-900/40 via-red-800/10 to-transparent blur-[120px] animate-pulse-slow" />

        {/* Gold accent glow top-right */}
        <div className="absolute top-0 right-0 w-[400px] h-[350px] bg-gradient-to-bl from-amber-700/20 via-yellow-900/10 to-transparent blur-[100px] animate-pulse-slow" />

        {/* Subtle horizontal scan lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)', backgroundSize: '100% 3px' }}
        />
      </div>

      {/* Main Heading */}
      <div className="relative z-10 w-full max-w-5xl px-6 pt-10 sm:pt-16 text-center">
        <div className="inline-flex items-center gap-1.5 bg-black/60 border border-amber-700/40 rounded-full px-3 py-1 mb-6 text-amber-400 backdrop-blur-md shadow-sm shadow-amber-900/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest">Enhanced Ultra-HD 4.0 Launch</span>
        </div>

        <h1
          id="hero-main-title"
          className="font-display text-4xl sm:text-6xl md:text-9xl text-white leading-none tracking-wide select-none drop-shadow-2xl uppercase"
        >
          The Premium Broadcaster <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600">
            Of Great Britain & London
          </span>
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-md text-neutral-400 max-w-xl mx-auto mt-6 leading-relaxed">
          Premium live television and matchday feeds custom routed over UK server clusters. Designed for absolute stability. Compatible with Firestick, Smart TVs, and Apple devices.
        </p>
      </div>

      {/* Bottom Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-12 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-end">

        {/* Frosted dark card bottom-left */}
        <div className="md:col-span-5 bg-black/60 backdrop-blur-xl border border-neutral-700/60 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/60 space-y-3 sm:space-y-4 text-left">
          <div className="flex items-center gap-2 font-mono text-[9px] text-amber-500 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-sm shadow-red-500" />
            Direct CDN Packet Delivery
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-white leading-snug uppercase tracking-wide">
            Stream feeds that run with absolute native priority
          </h2>
          <p className="font-sans text-xs text-neutral-400 leading-relaxed">
            Unlike budget providers utilizing oversold cloud instances, IPTV London maintains redundant physical streams routed via key London nodes. This prevents stuttering even during major 3 PM sports events.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 border-t border-neutral-700/50">
            <span className="inline-flex items-center gap-1 font-mono text-[9px] text-emerald-400">
              <CheckCircle className="w-3 h-3" /> Anti-Block 4.0
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[9px] text-neutral-400">
              <CheckCircle className="w-3 h-3 text-neutral-500" /> No ISP Bottleneck
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[9px] text-neutral-400">
              <CheckCircle className="w-3 h-3 text-neutral-500" /> 50 FPS HFR
            </span>
          </div>
        </div>

        <div className="hidden md:block md:col-span-2" />

        {/* CTAs bottom-right */}
        <div className="md:col-span-5 flex flex-col gap-4 text-left justify-end">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              id="hero-cta-plans"
              onClick={() => onScrollTo('pricing')}
              className="flex-1 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-5 rounded-lg font-sans font-medium text-xs transition-all duration-150 inline-flex items-center justify-center gap-2 hover:translate-y-[-1px] active:translate-y-0 shadow-lg shadow-red-900/40"
            >
              Get IPTV Pass
              <MoveRight className="w-4 h-4" />
            </button>
            <button
              id="hero-cta-speedtest"
              onClick={() => onScrollTo('speedtest')}
              className="flex-1 bg-white/5 hover:bg-white/10 active:bg-white/15 text-neutral-300 border border-neutral-600 py-3 px-5 rounded-lg font-sans font-medium text-xs transition-colors inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Broadband Speed Check
            </button>
          </div>

          <div className="flex items-center justify-between px-3 py-2 bg-black/50 border border-neutral-700/60 rounded-lg font-mono text-[9px] text-neutral-500 backdrop-blur-sm">
            <span>NETWORK SPEED REQUIREMENT:</span>
            <span className="text-amber-400 font-medium text-right">15+ MBPS ALLOWED</span>
          </div>

          <div className="flex justify-center md:justify-start pt-2">
            <button
              id="scroll-to-content"
              onClick={() => onScrollTo('channels')}
              className="text-neutral-500 hover:text-amber-400 transition-colors py-1 inline-flex items-center gap-1.5 font-mono text-[10px]"
            >
              Browse Content Guide
              <ChevronDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
