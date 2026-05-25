import { useState } from 'react';
import { SETUP_GUIDES } from '../data';
import { SetupGuide } from '../types';
import { Tv, Monitor, Smartphone, Cpu, Clipboard, Check, Terminal, BookOpen } from 'lucide-react';

export default function SetupHelper() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const iconsMap: { [key: string]: any } = {
    Tv: Tv,
    Monitor: Monitor,
    Smartphone: Smartphone,
    Cpu: Cpu
  };

  const currentGuide = SETUP_GUIDES.find(g => g.id === activeDevice) || SETUP_GUIDES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section
      id="setup"
      className="bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-800"
    >
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1 bg-neutral-900 border border-neutral-800 font-mono text-[9px] text-emerald-400 px-2.5 py-0.5 rounded-full uppercase">
          <BookOpen className="w-2.5 h-2.5" />
          Setup Manual Library
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase">
          Developer-Grade IPTV Setup Guides
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          Choose your media hardware below to receive clear, step-by-step terminal and application setups with clipboard-copyable host parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Tabs */}
        <div className="md:col-span-4 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest text-left mb-2 pl-2">
            Select Your Streaming Device:
          </span>
          {SETUP_GUIDES.map((guide) => {
            const IconComp = iconsMap[guide.icon] || Tv;
            const isActive = guide.id === activeDevice;
            return (
              <button
                key={guide.id}
                id={`setup-tab-${guide.id}`}
                onClick={() => setActiveDevice(guide.id)}
                className={`w-full text-left font-sans text-xs px-4 py-3.5 rounded-xl border transition-all duration-150 inline-flex items-center justify-between group ${
                  isActive
                    ? 'bg-red-700 text-white font-semibold border-red-600 shadow-md shadow-red-950/30'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                  <span>{guide.device}</span>
                </div>
                <span className={`font-mono text-[10px] ${isActive ? 'text-white/70' : 'text-neutral-600'}`}>
                  &gt;
                </span>
              </button>
            );
          })}
        </div>

        {/* Step contents */}
        <div className="md:col-span-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 text-left relative">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-mono text-xs text-neutral-300 uppercase">
                {currentGuide.device} config console
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-600 uppercase">
              REDUNDANT UK PORTS ACTIVE
            </span>
          </div>

          <div className="space-y-6">
            {currentGuide.steps.map((step, idx) => (
              <div
                key={idx}
                id={`guide-${activeDevice}-step-${idx}`}
                className="relative pl-8 border-l border-neutral-800 last:border-0"
              >
                <div className="absolute top-0.5 left-[-13px] w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono text-[10px] text-neutral-400 font-bold shadow-sm">
                  {idx + 1}
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-sm text-white">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>

                  {step.code && (
                    <div className="mt-3 bg-black border border-neutral-800 rounded-lg p-3 flex items-center justify-between gap-4 font-mono text-xs text-neutral-300 overflow-x-auto">
                      <span className="select-all whitespace-nowrap">{step.code}</span>
                      <button
                        id={`btn-copy-${activeDevice}-${idx}`}
                        onClick={() => handleCopy(step.code!)}
                        className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors shrink-0"
                        title="Copy to Clipboard"
                      >
                        {copiedText === step.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Clipboard className="w-3.5 h-3.5 text-neutral-500" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-neutral-600">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
              Need live UK help? Contact our WhatsApp desk for free 1-on-1 configuration setup.
            </div>
            <a
              id="whatsapp-help-setup"
              href="https://wa.me/447400000000"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-all underline decoration-amber-700 hover:decoration-amber-400"
            >
              LAUNCH UK WHATSAPP HELP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
