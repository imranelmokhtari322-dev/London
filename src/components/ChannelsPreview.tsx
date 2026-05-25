import { useState } from 'react';
import { CHANNELS } from '../data';
import { ChannelItem } from '../types';
import { Search, Radio, Tv, Film, Sparkles, Trophy, Globe } from 'lucide-react';

export default function ChannelsPreview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredChannels = CHANNELS.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          channel.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (channel.currentShow && channel.currentShow.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && channel.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All Live TV', icon: Globe },
    { id: 'sports', label: 'Sports Channels', icon: Trophy },
    { id: 'entertainment', label: 'Entertainment', icon: Tv },
    { id: 'movies', label: 'Movies & Cinema', icon: Film },
    { id: 'documentary', label: 'Documentaries', icon: Sparkles }
  ];

  return (
    <section
      id="channels"
      className="bg-white py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200"
    >
      <div className="text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1 bg-neutral-100 border border-neutral-200 font-mono text-[9px] text-emerald-600 px-2.5 py-0.5 rounded-full uppercase">
          <Radio className="w-2.5 h-2.5 animate-pulse" />
          Server Status: Fully Loaded
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-neutral-900 tracking-wide uppercase">
          Live UK Channel Preview & EPG
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto">
          Explore a fraction of our live broadcaster lineup. Complete with real-time Electronic Program Guide (EPG) metadata streams.
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-sans text-xs px-3.5 py-2 rounded-lg transition-all duration-150 inline-flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'bg-white text-neutral-500 border border-neutral-300 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            id="channel-search-input"
            type="text"
            placeholder="Search Sky, BBC, Movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-neutral-300 hover:border-neutral-400 focus:outline-none focus:border-red-500 text-neutral-900 placeholder-neutral-400 rounded-lg pl-9 pr-4 py-2 text-xs transition-colors font-sans"
          />
        </div>
      </div>

      {/* Channel Grid */}
      {filteredChannels.length > 0 ? (
        <div
          id="channels-grid-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              id={`channel-card-${channel.id}`}
              className="group relative bg-white border border-neutral-200 hover:border-neutral-400 rounded-xl p-5 hover:translate-y-[-1px] transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] bg-neutral-100 border border-neutral-200 rounded px-2 py-0.5 text-neutral-500 tracking-wide">
                    {channel.subCategory}
                  </span>

                  <span className={`font-mono text-[9px] border rounded px-1.5 py-0.5 font-bold ${
                    channel.quality === '4K'
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : channel.quality === 'UHD'
                      ? 'bg-amber-50 border-amber-200 text-amber-600'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-500'
                  }`}>
                    {channel.quality}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-md text-neutral-900 group-hover:text-red-600 transition-colors flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
                  {channel.name}
                </h3>

                {channel.currentShow && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-baseline font-sans text-xs">
                      <span className="text-neutral-700 font-medium truncate max-w-[170px]">
                        {channel.currentShow}
                      </span>
                      <span className="text-neutral-400 font-mono text-[10px] shrink-0">
                        {channel.showTime}
                      </span>
                    </div>

                    <div className="relative w-full h-[3px] bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all duration-300"
                        style={{ width: `${channel.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <span className="font-mono text-[9px] text-neutral-400 flex items-center gap-1">
                  <span className="h-1 w-1 bg-neutral-400 rounded-full" />
                  HEVC H.265 Source
                </span>
                <span className="font-sans text-[10px] text-neutral-400 font-medium group-hover:text-red-500 transition-colors">
                  EPG ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-neutral-100 border border-neutral-200 rounded-xl space-y-2">
          <p className="font-sans text-neutral-500 text-sm">No live broadcaster channels found matching your search.</p>
          <p className="font-mono text-[10px] text-neutral-400">We host 18,500+ worldwide channels. Select another query or click All Live TV.</p>
        </div>
      )}

      {/* Summary bar */}
      <div className="mt-10 bg-neutral-100 border border-neutral-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white border border-neutral-200 shrink-0">
            <Radio className="w-4 h-4 text-neutral-500" />
          </div>
          <div className="text-left">
            <h4 className="font-sans font-bold text-neutral-900 text-xs">Looking for a specific channel?</h4>
            <p className="font-mono text-[10px] text-neutral-500">We support full bouquet lists from UK (BBC, ITV, Sky Sports, TNT, PPV) + USA, Europe & Worldwide.</p>
          </div>
        </div>
        <button
          id="btn-view-all-bouquet"
          onClick={() => {
            alert("Our playlist contains 18,500+ live TV channels and 65,000+ VOD files. Complete lists will be sent directly via PDF list on WhatsApp or Email!");
          }}
          className="bg-white hover:bg-neutral-50 text-neutral-900 font-sans font-medium text-xs px-4 py-2 rounded-lg border border-neutral-300 transition-colors shrink-0"
        >
          Request Full PDF Channel Guide
        </button>
      </div>
    </section>
  );
}
