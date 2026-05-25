import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import SetupHelper from './components/SetupHelper';
import FaqSection from './components/FaqSection';
import CheckoutModal from './components/CheckoutModal';
import TrendingFilms from './components/TrendingFilms';
import ChannelLogosSlider from './components/ChannelLogosSlider';
import { Shield, Lock, Cpu, Globe } from 'lucide-react';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCheckout = (planId?: string) => {
    setSelectedPlanId(planId || null);
    setCheckoutOpen(true);
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-black text-white selection:bg-red-700 selection:text-white font-sans antialiased overflow-x-hidden"
    >
      {/* Upper alert bar */}
      <div className="bg-red-700 text-white py-1.5 px-4 text-center text-[9px] sm:text-[10px] font-mono tracking-widest uppercase relative z-50 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-1.5 bg-white rounded-full animate-ping" />
        <span className="hidden sm:inline">DIRECT FEED ACTIVE FOR ALL SATURDAY 3PM EPL MATCHES & BOXING PPV. CHOOSE & GO.</span>
        <span className="sm:hidden">LIVE FEED ACTIVE · SAT 3PM EPL & PPV</span>
      </div>

      <Navbar onScrollTo={handleScrollTo} onOpenCheckout={handleOpenCheckout} />

      <main id="main-content-scroller">
        <Hero onScrollTo={handleScrollTo} onOpenCheckout={() => handleOpenCheckout('12-months')} />
        <TrendingFilms />
        <ChannelLogosSlider />
        <PricingSection onOpenCheckout={handleOpenCheckout} />
        <SetupHelper />
        <FaqSection />
      </main>

      {/* Footer */}
      <footer
        id="app-classic-footer"
        className="bg-neutral-950 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-800"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          <div className="space-y-4 sm:col-span-2 md:col-span-2">
            <h3 className="font-display text-2xl text-white tracking-wider uppercase">
              IPTV London
            </h3>
            <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
              Premium high-bandwidth streaming engineered specifically for the Great Britain region. Our edge networks route directly to key hubs in London, Manchester, and Edinburgh for unparalleled weekend sports stability.
            </p>
            <div className="flex items-center gap-2 font-mono text-[9px] text-emerald-400 bg-emerald-950 border border-emerald-800 rounded-lg px-2.5 py-1.5 w-fit">
              <Shield className="w-3 h-3" />
              <span>STALWART CLUSTER: SHIELDED & VERIFIED TLS SECURE</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">COVERED METROS</h4>
            <ul className="space-y-1.5 font-sans text-xs text-neutral-400">
              <li>Greater London & South East</li>
              <li>Midlands (Birmingham, Leicester)</li>
              <li>The North (Manchester, Leeds, Liverpool)</li>
              <li>Scotland (Glasgow, Edinburgh)</li>
              <li>Northern Ireland (Belfast)</li>
              <li>Wales (Cardiff)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">NETWORK SPECS</h4>
            <ul className="space-y-1.5 font-mono text-[10px] text-neutral-400">
              <li className="flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-neutral-500" /> Codecs: HEVC H.265, AAC Stereo
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-neutral-500" /> Protocol: Xtream Codes, M3U Plus
              </li>
              <li className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-neutral-500" /> Protection: TLS 1.3 Tunneling
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-neutral-600 text-left">
          <p>© {new Date().getFullYear()} IPTV LONDON. All television rights and logos belong to native broadcasters. We deliver secure raw protocol links tailored for UK broadband hubs.</p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>ALL UK HOST GROUPS SECURED</span>
          </div>
        </div>
      </footer>

      <CheckoutModal
        isOpen={checkoutOpen}
        selectedPlanId={selectedPlanId}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
}
