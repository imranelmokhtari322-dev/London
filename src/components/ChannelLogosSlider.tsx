import { Tv } from 'lucide-react';

const ROW_ONE = [
  {
    id: 'bbc-one',
    name: 'BBC One',
    category: 'Free-to-Air',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BBC_One_logo.svg/200px-BBC_One_logo.svg.png',
  },
  {
    id: 'itv1',
    name: 'ITV1',
    category: 'Free-to-Air',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ITV1_Logo_2022.svg/200px-ITV1_Logo_2022.svg.png',
  },
  {
    id: 'channel-4',
    name: 'Channel 4',
    category: 'Free-to-Air',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Channel_4_Logo_2023.svg/200px-Channel_4_Logo_2023.svg.png',
  },
  {
    id: 'sky-sports',
    name: 'Sky Sports',
    category: 'Sports',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sky_Sports_2025.svg/200px-Sky_Sports_2025.svg.png',
  },
  {
    id: 'sky-sports-main-event',
    name: 'Sky Sports Main Event',
    category: 'Sports',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sky_Sports_Main_Event_-_Logo_2025.svg/200px-Sky_Sports_Main_Event_-_Logo_2025.svg.png',
  },
  {
    id: 'sky-sports-football',
    name: 'Sky Sports Football',
    category: 'Sports',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sky_Sports_Football_-_Logo_2025.svg/200px-Sky_Sports_Football_-_Logo_2025.svg.png',
  },
  {
    id: 'tnt-sports',
    name: 'TNT Sports',
    category: 'Sports',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TNT_Sports_%282023%29.svg/200px-TNT_Sports_%282023%29.svg.png',
  },
];

const ROW_TWO = [
  {
    id: 'bbc-two',
    name: 'BBC Two',
    category: 'Free-to-Air',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BBC_Two_logo_2021.svg/200px-BBC_Two_logo_2021.svg.png',
  },
  {
    id: 'sky-atlantic',
    name: 'Sky Atlantic',
    category: 'Entertainment',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sky_Atlantic_-_Logo_2020.svg/200px-Sky_Atlantic_-_Logo_2020.svg.png',
  },
  {
    id: 'sky-cinema',
    name: 'Sky Cinema Premiere',
    category: 'Movies',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Sky_Cinema_Premiere_2024_logo.svg/200px-Sky_Cinema_Premiere_2024_logo.svg.png',
  },
  {
    id: 'sky-news',
    name: 'Sky News',
    category: 'News',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sky_News_logo.svg/200px-Sky_News_logo.svg.png',
  },
  {
    id: 'nat-geo',
    name: 'National Geographic',
    category: 'Documentary',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/National_Geographic_Channel.svg/200px-National_Geographic_Channel.svg.png',
  },
  {
    id: 'discovery',
    name: 'Discovery Channel',
    category: 'Documentary',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/The_Discovery_Channel_logo.svg/200px-The_Discovery_Channel_logo.svg.png',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Free-to-Air': 'text-emerald-400',
  'Sports': 'text-red-400',
  'Entertainment': 'text-purple-400',
  'Movies': 'text-amber-400',
  'News': 'text-blue-400',
  'Documentary': 'text-orange-400',
};

function LogoCard({ name, logo, category }: { name: string; logo: string; category: string }) {
  return (
    <div className="shrink-0 w-40 mx-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-md hover:border-neutral-600 hover:bg-neutral-800 transition-colors duration-200 group">
      <div className="h-12 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-h-10 max-w-[120px] w-auto object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }} className="items-center justify-center">
          <Tv className="w-8 h-8 text-neutral-600" />
        </div>
      </div>
      <div className="text-center space-y-0.5">
        <p className="font-sans text-[11px] font-semibold text-white leading-tight">{name}</p>
        <p className={`font-mono text-[8px] uppercase tracking-wider ${CATEGORY_COLORS[category] ?? 'text-neutral-500'}`}>
          {category}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ channels, reverse = false }: { channels: typeof ROW_ONE; reverse?: boolean }) {
  const doubled = [...channels, ...channels, ...channels];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((ch, i) => (
          <LogoCard key={`${ch.id}-${i}`} name={ch.name} logo={ch.logo} category={ch.category} />
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
          <div className="flex flex-wrap gap-2 pb-1">
            {['Sports', 'Entertainment', 'Movies', 'News', 'Free-to-Air', 'Documentary'].map((cat) => (
              <span
                key={cat}
                className={`font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900 ${CATEGORY_COLORS[cat]}`}
              >
                {cat}
              </span>
            ))}
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
