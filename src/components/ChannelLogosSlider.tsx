import { Tv } from 'lucide-react';

const RED_FILTER = 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(700%) hue-rotate(340deg)';

interface Channel {
  name: string;
  number: number;
  logo: string;
}

const SPORTS: Channel[] = [
  { number: 1, name: 'Sky Sports Main Event', logo: '/logos/sky-sports-main-event.png' },
  { number: 2, name: 'Sky Sports Premier League', logo: '/logos/sky-sports.png' },
  { number: 3, name: 'TNT Sports 1', logo: '/logos/tnt-sports.png' },
  { number: 4, name: 'Sky Sports F1', logo: '/logos/sky-sports-f1.png' },
];

const ENTERTAINMENT: Channel[] = [
  { number: 5, name: 'BBC One London', logo: '/logos/bbc-hd.png' },
  { number: 6, name: 'ITV1 London', logo: '/logos/itv1.png' },
  { number: 7, name: 'Channel 4', logo: '/logos/channel-4.png' },
];

const MOVIES: Channel[] = [
  { number: 8, name: 'Sky Cinema Premiere', logo: '/logos/sky-cinema.png' },
  { number: 9, name: 'Sky Cinema Action', logo: '/logos/sky-cinema.png' },
];

const DOCUMENTARY: Channel[] = [
  { number: 10, name: 'Discovery Channel UK', logo: '/logos/discovery.png' },
  { number: 11, name: 'National Geographic UK', logo: '/logos/nat-geo.png' },
];

const NEWS: Channel[] = [
  { number: 12, name: 'Sky News', logo: '/logos/sky-news.png' },
  { number: 13, name: 'BBC News Channel', logo: '/logos/bbc-news.png' },
];

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 flex flex-col items-center justify-center gap-3 border border-neutral-700">
      <div className="h-12 flex items-center justify-center">
        <img
          src={channel.logo}
          alt={channel.name}
          className="max-h-10 max-w-[110px] w-auto object-contain"
          style={{ filter: RED_FILTER }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }} className="items-center justify-center">
          <Tv className="w-8 h-8 text-red-800" />
        </div>
      </div>
      <p className="font-sans text-[10px] font-semibold text-red-500 text-center leading-tight">
        {channel.number}. {channel.name}
      </p>
    </div>
  );
}

function CategoryBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-neutral-700 rounded-2xl p-4">
      <p className="font-mono text-[9px] uppercase tracking-widest text-red-500 mb-3">{title}</p>
      {children}
    </div>
  );
}

export default function ChannelLogosSlider() {
  return (
    <section
      id="channel-logos"
      className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-[9px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full uppercase tracking-widest">
              <Tv className="w-2.5 h-2.5" />
              18,500+ Live Channels Available
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-white tracking-tight">
              Premium UK Channel Lineup
            </h2>
            <p className="font-sans text-xs text-neutral-400 max-w-md leading-relaxed">
              From live Premier League to HBO dramas — every major UK broadcaster and premium package included.
            </p>
          </div>
        </div>

        {/* Top row: Sports + Entertainment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Sports */}
          <CategoryBlock title="Sports">
            <div className="grid grid-cols-2 gap-3">
              {SPORTS.map((ch) => <ChannelCard key={ch.number} channel={ch} />)}
            </div>
          </CategoryBlock>

          {/* Entertainment */}
          <CategoryBlock title="Entertainment Section">
            <div className="grid grid-cols-3 gap-3">
              {ENTERTAINMENT.map((ch) => <ChannelCard key={ch.number} channel={ch} />)}
            </div>
          </CategoryBlock>
        </div>

        {/* Bottom row: Movies + Documentary + News */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CategoryBlock title="Movies">
            <div className="grid grid-cols-2 gap-3">
              {MOVIES.map((ch) => <ChannelCard key={ch.number} channel={ch} />)}
            </div>
          </CategoryBlock>

          <CategoryBlock title="Documentary">
            <div className="grid grid-cols-2 gap-3">
              {DOCUMENTARY.map((ch) => <ChannelCard key={ch.number} channel={ch} />)}
            </div>
          </CategoryBlock>

          <CategoryBlock title="News">
            <div className="grid grid-cols-2 gap-3">
              {NEWS.map((ch) => <ChannelCard key={ch.number} channel={ch} />)}
            </div>
          </CategoryBlock>
        </div>
      </div>
    </section>
  );
}
