import { Tv } from 'lucide-react'; // kept for section badge icon

interface Channel {
  id: string;
  name: string;
  logo: string;
  category: string;
}

const ROW_ONE: Channel[] = [
  { id: 'sky-sports-me', name: 'Sky Sports Main Event', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sky_Sports_Main_Event_-_Logo_2025.svg/200px-Sky_Sports_Main_Event_-_Logo_2025.svg.png', category: 'Sports' },
  { id: 'sky-sports-pl', name: 'Sky Sports Premier League', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sky_Sports_Football_-_Logo_2025.svg/200px-Sky_Sports_Football_-_Logo_2025.svg.png', category: 'Sports' },
  { id: 'tnt-sports', name: 'TNT Sports 1', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TNT_Sports_%282023%29.svg/200px-TNT_Sports_%282023%29.svg.png', category: 'Sports' },
  { id: 'sky-sports-f1', name: 'Sky Sports F1', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sky_Sports_2025.svg/200px-Sky_Sports_2025.svg.png', category: 'Sports' },
  { id: 'bbc-one', name: 'BBC One London', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BBC_One_logo.svg/200px-BBC_One_logo.svg.png', category: 'Entertainment' },
  { id: 'itv1', name: 'ITV1 London', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ITV1_Logo_2022.svg/200px-ITV1_Logo_2022.svg.png', category: 'Entertainment' },
  { id: 'channel-4', name: 'Channel 4', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Channel_4_Logo_2023.svg/200px-Channel_4_Logo_2023.svg.png', category: 'Entertainment' },
];

const ROW_TWO: Channel[] = [
  { id: 'sky-cinema-premiere', name: 'Sky Cinema Premiere', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Sky_Cinema_Premiere_2024_logo.svg/200px-Sky_Cinema_Premiere_2024_logo.svg.png', category: 'Movies' },
  { id: 'sky-cinema', name: 'Sky Cinema Action', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Sky_Cinema_Premiere_2024_logo.svg/200px-Sky_Cinema_Premiere_2024_logo.svg.png', category: 'Movies' },
  { id: 'discovery', name: 'Discovery Channel UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/The_Discovery_Channel_logo.svg/200px-The_Discovery_Channel_logo.svg.png', category: 'Documentary' },
  { id: 'nat-geo', name: 'National Geographic UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/National_Geographic_Channel.svg/200px-National_Geographic_Channel.svg.png', category: 'Documentary' },
  { id: 'sky-news', name: 'Sky News', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sky_News_logo.svg/200px-Sky_News_logo.svg.png', category: 'News' },
  { id: 'bbc-news', name: 'BBC News Channel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/BBC_News_2022.svg/200px-BBC_News_2022.svg.png', category: 'News' },
  { id: 'sky-sports-me2', name: 'Sky Sports Main Event', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sky_Sports_Main_Event_-_Logo_2025.svg/200px-Sky_Sports_Main_Event_-_Logo_2025.svg.png', category: 'Sports' },
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
      <div className="h-12 flex items-center justify-center">
        <img
          src={channel.logo}
          alt={channel.name}
          className="max-h-10 max-w-[120px] w-auto object-contain"
          referrerPolicy="no-referrer"
          style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(600%) hue-rotate(340deg)' }}
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
        <p className="font-sans text-[11px] font-semibold text-neutral-900 leading-tight">{channel.name}</p>
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
