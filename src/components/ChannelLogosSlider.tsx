import { Tv } from 'lucide-react'; // kept for section badge icon

interface Channel {
  id: string;
  name: string;
  logo: string;
  category: string;
}

const ROW_ONE: Channel[] = [
  { id: 'sky-sports-me', name: 'Sky Sports Main Event', logo: '/logos/sky-sports-main-event.png', category: 'Sports' },
  { id: 'sky-sports-pl', name: 'Sky Sports Premier League', logo: '/logos/sky-sports.png', category: 'Sports' },
  { id: 'tnt-sports', name: 'TNT Sports 1', logo: '/logos/tnt-sports.png', category: 'Sports' },
  { id: 'sky-sports-f1', name: 'Sky Sports F1', logo: '/logos/sky-sports-f1.png', category: 'Sports' },
  { id: 'bbc-one', name: 'BBC One London', logo: '/logos/bbc-one.png', category: 'Entertainment' },
  { id: 'itv1', name: 'ITV1 London', logo: '/logos/itv1.png', category: 'Entertainment' },
  { id: 'channel-4', name: 'Channel 4', logo: '/logos/channel-4.png', category: 'Entertainment' },
];

const ROW_TWO: Channel[] = [
  { id: 'sky-cinema-premiere', name: 'Sky Cinema Premiere', logo: '/logos/sky-cinema-premiere.png', category: 'Movies' },
  { id: 'sky-cinema', name: 'Sky Cinema Action', logo: '/logos/sky-cinema.png', category: 'Movies' },
  { id: 'discovery', name: 'Discovery Channel UK', logo: '/logos/discovery.png', category: 'Documentary' },
  { id: 'nat-geo', name: 'National Geographic UK', logo: '/logos/nat-geo.png', category: 'Documentary' },
  { id: 'sky-news', name: 'Sky News', logo: '/logos/sky-news.png', category: 'News' },
  { id: 'bbc-news', name: 'BBC News Channel', logo: '/logos/bbc-news.png', category: 'News' },
  { id: 'sky-sports-me2', name: 'Sky Sports Main Event', logo: '/logos/sky-sports-main-event.png', category: 'Sports' },
];

const CATEGORY_COLORS: Record<string, string> = {
  Sports: 'text-red-500',
  Entertainment: 'text-red-500',
  Movies: 'text-red-500',
  Documentary: 'text-red-500',
  News: 'text-red-500',
};

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <div className="shrink-0 w-44 mx-2 bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="h-28 flex items-center justify-center">
        <img
          src={channel.logo}
          alt={channel.name}
          className="max-h-24 max-w-[200px] w-full object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }} className="items-center justify-center">
          <Tv className="w-8 h-8 text-red-400" />
        </div>
      </div>
      <div className="text-center space-y-0.5">
        <p className="font-display text-sm tracking-widest text-neutral-900 leading-tight uppercase">{channel.name}</p>
        <p className={`font-mono text-[8px] uppercase tracking-wider ${CATEGORY_COLORS[channel.category] ?? 'text-red-500'}`}>
          {channel.category}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ channels, reverse = false }: { channels: Channel[]; reverse?: boolean }) {
  const doubled = [...channels, ...channels, ...channels];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((ch, i) => (
          <ChannelCard key={`${ch.id}-${i}`} channel={ch} />
        ))}
      </div>
    </div>
  );
}

export default function ChannelLogosSlider() {
  return (
    <section
      id="channel-logos"
      className="bg-black py-16 px-0 border-b border-neutral-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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
      </div>

      <div className="mb-4">
        <MarqueeRow channels={ROW_ONE} />
      </div>
      <MarqueeRow channels={ROW_TWO} reverse />
    </section>
  );
}
