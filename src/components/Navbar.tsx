import { useState, useEffect } from 'react';
import { Shield, Radio, Activity, Menu, X, Clock, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  onOpenCheckout: (planId?: string) => void;
}

export default function Navbar({ onScrollTo, onOpenCheckout }: NavbarProps) {
  const [londonTime, setLondonTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setLondonTime(`${timeStr} BST`);
      } catch (e) {
        const now = new Date();
        setLondonTime(`${now.toTimeString().split(' ')[0]} GMT`);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'channels', label: 'Channels Guide' },
    { id: 'pricing', label: 'Plans & Pricing' },
    { id: 'speedtest', label: 'Broadband Test' },
    { id: 'setup', label: 'Setup Manuals' },
    { id: 'faqs', label: 'Support & FAQs' }
  ];

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800 shadow-lg shadow-black/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-700 border border-red-600 select-none">
              <Radio className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-tight text-white text-base">
                IPTV LONDON
              </span>
              <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">
                Premium UK Network
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onScrollTo(item.id)}
                  className="font-sans text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-neutral-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Clock + status + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-md px-2.5 py-1">
              <Clock className="w-3.5 h-3.5 text-neutral-600" />
              <span>LON:</span>
              <span className="text-white font-medium whitespace-nowrap">{londonTime}</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] bg-emerald-950 border border-emerald-800 rounded-md px-2.5 py-1 text-emerald-400 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide text-[10px] font-bold">STALWART UK HUB: OPTIMAL (28ms)</span>
            </div>

            <button
              id="nav-cta-buy"
              onClick={() => onOpenCheckout()}
              className="bg-red-700 hover:bg-red-600 text-white font-sans font-medium text-xs px-4 py-2 rounded-md active:scale-95 transition-all duration-150 inline-flex items-center gap-1.5 border border-red-600 shadow-md shadow-red-900/30"
            >
              <Shield className="w-3.5 h-3.5" />
              Get Subscription
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 bg-emerald-950 border border-emerald-800 rounded-full px-2 py-0.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[8px] font-semibold">LIVE</span>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1.5 rounded-md hover:bg-neutral-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-panel" className="md:hidden bg-neutral-950 border-b border-neutral-800 py-4 px-4">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollTo(item.id);
                }}
                className="text-left font-sans text-sm text-neutral-400 hover:text-white py-2 px-3 rounded-md hover:bg-neutral-800 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="h-px bg-neutral-800 my-2" />

            <div className="flex flex-col gap-2 pt-2 px-3">
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> LONDON BST:</span>
                <span className="text-white font-medium">{londonTime}</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> ROUTING EDGE:</span>
                <span className="text-emerald-400 font-bold">28ms (ONLINE)</span>
              </div>

              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full mt-3 bg-red-700 hover:bg-red-600 text-white font-sans font-medium text-xs py-2.5 rounded-md active:scale-[0.98] transition-all duration-150 inline-flex items-center justify-center gap-1.5 border border-red-600"
              >
                <Shield className="w-4 h-4" />
                Get Instant IPTV Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
