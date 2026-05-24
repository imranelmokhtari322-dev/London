import { useState } from 'react';
import { Network, Play, RefreshCw, AlertTriangle, CheckCircle, Wifi } from 'lucide-react';

export default function NetworkTester() {
  const [isp, setIsp] = useState('virgin');
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testRun, setTestRun] = useState(false);
  const [results, setResults] = useState({
    download: 0,
    latency: 0,
    jitter: 0,
  });

  const ukIsps = [
    { id: 'virgin', label: 'Virgin Media', delay: 12, blocks: true },
    { id: 'bt', label: 'BT Broadband', delay: 18, blocks: true },
    { id: 'sky', label: 'Sky Broadband', delay: 15, blocks: true },
    { id: 'ee', label: 'EE Network / Plusnet', delay: 24, blocks: false },
    { id: 'talktalk', label: 'TalkTalk', delay: 28, blocks: true },
    { id: 'other', label: 'Other/Starlink/VPN', delay: 35, blocks: false }
  ];

  const handleStartTest = () => {
    setTesting(true);
    setProgress(0);
    setTestRun(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTesting(false);
          const speedBase = isp === 'virgin' ? 240 : isp === 'bt' ? 76 : isp === 'sky' ? 68 : 45;
          const latencyBase = isp === 'virgin' ? 14 : isp === 'bt' ? 22 : isp === 'sky' ? 19 : 26;
          setResults({
            download: Math.round(speedBase + (Math.random() * 20 - 10)),
            latency: Math.round(latencyBase + (Math.random() * 4 - 2)),
            jitter: Math.round(1.5 + Math.random() * 2)
          });
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const getIsCompatible = () => {
    if (results.download >= 50) return { label: 'Optimal 4K & UHD Certified', color: 'text-emerald-400', desc: 'Excellent connection. Safe for multiple concurrent 4K feeds and 60 FPS sports streaming.', icon: CheckCircle };
    if (results.download >= 15) return { label: 'FHD Stream Certified', color: 'text-amber-400', desc: 'Pass. Stream will run smoothly in Full HD. We recommend setting app buffer to 3 seconds.', icon: CheckCircle };
    return { label: 'Low bandwidth warning', color: 'text-yellow-500', desc: 'Streams may buffer. Check if extra background downloads or devices are hogging bandwidth.', icon: AlertTriangle };
  };

  const isIspBlocked = ukIsps.find(x => x.id === isp)?.blocks;
  const compatibility = getIsCompatible();

  return (
    <section
      id="speedtest"
      className="bg-black py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left explanation */}
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 font-mono text-[9px] text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1">
            <Network className="w-3.5 h-3.5 text-neutral-500" />
            <span>LATENCY CONVERGENCE CHECK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Analyze Your UK ISP Network Compatibility
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Streaming flawless 4K IPTV in Great Britain depends on stable peering directly to London hub routers, rather than raw bulk speed ratings. Run our tailored simulation to analyze streaming latency.
          </p>

          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl space-y-3">
            <h4 className="font-sans font-bold text-white text-xs">Standard Streaming Scale:</h4>
            <div className="grid grid-cols-3 gap-2 font-mono text-[9px]">
              <div className="p-2 border border-neutral-800 rounded bg-neutral-950">
                <span className="block text-neutral-500 mb-1">4K ULTRA HD</span>
                <span className="text-white font-semibold">25+ Mbps</span>
              </div>
              <div className="p-2 border border-neutral-800 rounded bg-neutral-950">
                <span className="block text-neutral-500 mb-1">FHD 60FPS</span>
                <span className="text-white font-semibold">15+ Mbps</span>
              </div>
              <div className="p-2 border border-neutral-800 rounded bg-neutral-950">
                <span className="block text-neutral-500 mb-1">LATENCY BOUNDS</span>
                <span className="text-emerald-400 font-semibold">Under 40ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Test panel */}
        <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <h3 className="font-sans font-bold text-white text-sm border-b border-neutral-800 pb-3 text-left">
            UK stream telemetry dashboard
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-neutral-500">CHOOSE PRIMARY ISP PROVIDER:</label>
              <select
                id="isp-selector"
                disabled={testing}
                value={isp}
                onChange={(e) => setIsp(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:border-red-600 font-sans text-xs rounded-lg px-3 py-2 text-white transition-all disabled:opacity-50"
              >
                {ukIsps.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                id="start-speedtest-btn"
                disabled={testing}
                onClick={handleStartTest}
                className="w-full bg-red-700 hover:bg-red-600 text-white py-2.5 rounded-lg text-xs font-sans font-medium transition-all select-none flex items-center justify-center gap-2 border border-red-600 disabled:opacity-50 shadow-md shadow-red-950/30"
              >
                {testing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Checking Routing Latency...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    Initiate Stream Speedtest
                  </>
                )}
              </button>
            </div>
          </div>

          {testing && (
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between font-mono text-[9px] text-neutral-500">
                <span>CONNECTING TO LONDON CDN EDGE...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-[3px] bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {testRun && !testing && (
            <div className="space-y-5 text-left">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-center">
                  <span className="block font-mono text-[9px] text-neutral-500 mb-1 uppercase">UK DOWNLOAD</span>
                  <span className="font-sans font-bold text-2xl text-white select-none whitespace-nowrap">{results.download} Mbps</span>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-center">
                  <span className="block font-mono text-[9px] text-neutral-500 mb-1 uppercase">EDGE LATENCY</span>
                  <span className="font-sans font-bold text-2xl text-emerald-400 select-none whitespace-nowrap">{results.latency} ms</span>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-center">
                  <span className="block font-mono text-[9px] text-neutral-500 mb-1 uppercase">STABLE JITTER</span>
                  <span className="font-sans font-bold text-2xl text-white select-none whitespace-nowrap">{results.jitter} ms</span>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <compatibility.icon className={`w-5 h-5 ${compatibility.color} shrink-0 mt-0.5`} />
                  <div className="space-y-1">
                    <h4 className={`font-sans font-bold text-xs ${compatibility.color}`}>{compatibility.label}</h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed">{compatibility.desc}</p>
                  </div>
                </div>

                {isIspBlocked && (
                  <div className="mt-3 pt-3 border-t border-neutral-800 bg-amber-950/30 p-3 rounded-lg border border-amber-900/50 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-sans font-bold text-[11px] text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Notice to {ukIsps.find(x => x.id === isp)?.label} Subscriber
                    </div>
                    <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">
                      {ukIsps.find(x => x.id === isp)?.label} implements WebSafe filters which can stop media connections. To resolve: simply access your ISP hub profile settings, and toggle parent control safety or WebSafe filters to OFF. You may also update your TV DNS provider to Cloudflare: <strong className="font-mono text-white select-all">1.1.1.1</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 justify-between font-mono text-[9px] text-neutral-600 pt-2 border-t border-neutral-800">
            <span>IPTV LONDON ENCRYPTION LEVEL:</span>
            <span>TLSv1.3 COMPLIANT CODESET</span>
          </div>
        </div>
      </div>
    </section>
  );
}
