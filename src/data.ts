import { SubscriptionPlan, ChannelItem, SetupGuide, FAQItem } from './types';

export const PLANS: SubscriptionPlan[] = [
  {
    id: '3-months',
    name: '3 Months Pass',
    price: '$34.99',
    period: 'for 3 months',
    savings: 'Save 15% vs monthly',
    billingTerm: 'Single one-off payment. No contract.',
    features: [
      '18,500+ Live UK & International Channels',
      '65,000+ Movies & TV Series (VOD Catalog)',
      'FHD & 4K streams at smooth 50/60 FPS',
      'Premium Sports (Sky Sports, TNT, EFL Play)',
      'Anti-Buffer™ UK CDN server cluster',
      'Instant Email & WhatsApp delivery (15m)',
      'Single connection limit'
    ]
  },
  {
    id: '12-months',
    name: '12 Months Ultimate',
    price: '$74.99',
    period: 'for 12 months',
    savings: 'Save 45% (Best Value)',
    billingTerm: 'Single one-off payment. No rolling contract.',
    features: [
      '18,500+ Live UK & International Channels',
      '65,000+ Movies & TV Series (VOD Catalog)',
      'FHD & 4K streams at smooth 50/60 FPS',
      'Premium Sports (Sky Sports, TNT, EFL Play)',
      'Priority Anti-Buffer™ tier-1 server routing',
      'Instant Email & WhatsApp delivery (15m)',
      '2 simultaneous connections allowed',
      '24/7 Dedicated Priority UK WhatsApp Helpdesk'
    ],
    recommended: true,
    gradientAccent: true
  },
  {
    id: '6-months',
    name: '6 Months Pass',
    price: '$45.99',
    period: 'for 6 months',
    savings: 'Save 30% vs monthly',
    billingTerm: 'Single one-off payment. No contracts.',
    features: [
      '18,500+ Live UK & International Channels',
      '65,000+ Movies & TV Series (VOD Catalog)',
      'FHD & 4K streams at smooth 50/60 FPS',
      'Premium Sports (Sky Sports, TNT, EFL Play)',
      'Anti-Buffer™ UK CDN server cluster',
      'Instant Email & WhatsApp delivery (15m)',
      'Single connection limit',
      'Standard 24/7 Support via Email'
    ]
  }
];

export const CHANNELS: ChannelItem[] = [
  {
    id: 'sky-sports-me',
    name: 'Sky Sports Main Event',
    category: 'sports',
    subCategory: 'UK Sports',
    currentShow: 'Premier League Live: Football Special',
    showTime: '19:30 - 22:00',
    progress: 72,
    quality: '4K'
  },
  {
    id: 'sky-sports-pl',
    name: 'Sky Sports Premier League',
    category: 'sports',
    subCategory: 'UK Sports',
    currentShow: 'Matchday Analysis & Fan Zone',
    showTime: '20:00 - 21:30',
    progress: 45,
    quality: 'FHD @ 60FPS'
  },
  {
    id: 'tnt-sports-1',
    name: 'TNT Sports 1',
    category: 'sports',
    subCategory: 'UK Sports',
    currentShow: 'UEFA Champions League Live',
    showTime: '19:45 - 22:15',
    progress: 60,
    quality: '4K'
  },
  {
    id: 'sky-sports-f1',
    name: 'Sky Sports F1',
    category: 'sports',
    subCategory: 'UK Sports',
    currentShow: 'Monaco GP Qualifying Highlights',
    showTime: '21:00 - 22:00',
    progress: 15,
    quality: 'FHD @ 60FPS'
  },
  {
    id: 'bbc-one-lon',
    name: 'BBC One London',
    category: 'entertainment',
    subCategory: 'UK General',
    currentShow: 'Doctor Who: The Finale Event',
    showTime: '20:00 - 21:00',
    progress: 88,
    quality: 'UHD'
  },
  {
    id: 'itv-1',
    name: 'ITV1 London',
    category: 'entertainment',
    subCategory: 'UK General',
    currentShow: 'The Britain\'s Got Talent Live Shows',
    showTime: '19:30 - 21:00',
    progress: 78,
    quality: 'FHD @ 60FPS'
  },
  {
    id: 'channel-4',
    name: 'Channel 4',
    category: 'entertainment',
    subCategory: 'UK General',
    currentShow: 'Gogglebox Series 25',
    showTime: '21:00 - 22:00',
    progress: 5,
    quality: 'HD'
  },
  {
    id: 'sky-cinema-prem',
    name: 'Sky Cinema Premiere',
    category: 'movies',
    subCategory: 'Sky Movies',
    currentShow: 'Dune: Part Two (2024)',
    showTime: '19:30 - 22:10',
    progress: 54,
    quality: '4K'
  },
  {
    id: 'sky-cinema-action',
    name: 'Sky Cinema Action',
    category: 'movies',
    subCategory: 'Sky Movies',
    currentShow: 'John Wick: Chapter 4',
    showTime: '20:00 - 22:45',
    progress: 40,
    quality: 'UHD'
  },
  {
    id: 'discovery-uk',
    name: 'Discovery Channel UK',
    category: 'documentary',
    subCategory: 'Documentaries',
    currentShow: 'Gold Rush: New Frontiers',
    showTime: '21:00 - 22:00',
    progress: 10,
    quality: 'FHD @ 60FPS'
  },
  {
    id: 'nat-geo-uk',
    name: 'National Geographic UK',
    category: 'documentary',
    subCategory: 'Documentaries',
    currentShow: 'Air Crash Investigation',
    showTime: '20:00 - 21:00',
    progress: 95,
    quality: 'HD'
  },
  {
    id: 'sky-news',
    name: 'Sky News',
    category: 'news',
    subCategory: 'UK News',
    currentShow: 'Sky News Tonight with Sarah-Jane Mee',
    showTime: '20:00 - 22:00',
    progress: 50,
    quality: 'HD'
  },
  {
    id: 'bbc-news-24',
    name: 'BBC News Channel',
    category: 'news',
    subCategory: 'UK News',
    currentShow: 'The BBC News at Ten & Global Briefing',
    showTime: '21:00 - 22:00',
    progress: 8,
    quality: 'FHD @ 60FPS'
  }
];

export const SETUP_GUIDES: SetupGuide[] = [
  {
    id: 'firestick',
    device: 'Amazon Fire TV / Firestick',
    icon: 'Tv',
    steps: [
      {
        title: 'Enable Apps from Unknown Sources',
        description: 'Navigate to Settings > My Fire TV > Developer Options. Turn on "Apps from Unknown Sources". (If Developer Options is hidden, go to About and click your OS Name 7 times).'
      },
      {
        title: 'Install the Downloader Application',
        description: 'Search for "Downloader" on your Firestick Home Screen dashboard and click download to install it.'
      },
      {
        title: 'Fetch the IPTV London Smarters Player',
        description: 'Launch Downloader and insert our direct quick-code URL below. This downloads our specially optimized secure media client app.',
        code: 'https://iptvlondon.uk/app (Shortcode: 784310)'
      },
      {
        title: 'Login with your Credentials',
        description: 'Open the app, select Xtream Codes API login, and input the exact login token, username, password and portal link sent to your WhatsApp or Email after checkout.'
      }
    ]
  },
  {
    id: 'smart-tv',
    device: 'Smart TV (Samsung / LG / Sony)',
    icon: 'Monitor',
    steps: [
      {
        title: 'Install Player App from TV Store',
        description: 'Search for either "IBO Player", "Smart IPTV", or "Set IPTV" in your Samsung Tizen or LG webOS content store.'
      },
      {
        title: 'Locate your Device MAC Address',
        description: 'Open the installed player. It will display a unique 12-character MAC Address (e.g. 1a:2b:3c:4d:5e:6f) and Device Key.'
      },
      {
        title: 'Link Subscription Playlist URL',
        description: 'Provide your MAC address to us during checkout (or via our WhatsApp help line) and we will flash the complete active channel system remotely to your TV screen instantly.',
        code: 'MAC Address format: XX:XX:XX:XX:XX:XX'
      },
      {
        title: 'Restart TV Application',
        description: 'Completely restart your television IPTV app. High quality HD/4K channel list will render beautifully automatically.'
      }
    ]
  },
  {
    id: 'apple-ios',
    device: 'Apple TV / iOS & Mac',
    icon: 'Smartphone',
    steps: [
      {
        title: 'Install Smarters Player Lite',
        description: 'Navigate to the official Apple App Store on your iPhone, iPad or Apple TV and download "Smarters Player Lite" or "GSE Smart IPTV".'
      },
      {
        title: 'Select Xtream API Login Option',
        description: 'Initiate the application and opt for the "Login with Xtream Codes API" method for best stability.'
      },
      {
        title: 'Input secure IPTV London Server Host',
        description: 'Use your bespoke, high-bandwidth UK login credentials linked with our tier-1 fast host gateway url:',
        code: 'Server Line: http://ukstream.london:8080'
      }
    ]
  },
  {
    id: 'android-box',
    device: 'Android Box / Shield TV / TiviMate',
    icon: 'Cpu',
    steps: [
      {
        title: 'Download Premium TiviMate Player',
        description: 'TiviMate is highly recommended for Android boxes. Install it from the Google Play Store or sideload via Downloader.'
      },
      {
        title: 'Add New M3U Playlist',
        description: 'Select "Add Playlist", then enter the custom M3U Plus URL sent to you. Enable TV Guide EPG URL below to receive live schedule timelines:',
        code: 'EPG Link: http://ukstream.london:8080/xmltv.php'
      },
      {
        title: 'Configure Audio & Buffer Settings',
        description: 'In settings, set buffer size to "Small" (our anti-buffer engine is powerful enough) and select hardware audio decoder for Dolby 5.1.'
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'vpn',
    question: 'Do I need a VPN to use IPTV London in the UK?',
    answer: 'No. Our state-of-the-art IPTV server infrastructure utilizes premium double-encrypted tunneling which completely hides stream payloads from UK ISPs like Virgin Media, BT, Sky, and TalkTalk. Standard ISP broadband blockades are bypassed automatically, meaning you do not need an administrative VPN client to watch sports without stuttering.'
  },
  {
    id: 'channels',
    question: 'Which sports tournaments and EPL matches are included?',
    answer: 'Every English Premier League (EPL) game is covered, including Saturday 3 PM blackouts, Sky Sports, TNT Sports, Prime Video games, EFL football, SPFL, Formula 1, Champions League, PPV boxing nights, UFC cards, and international sports (US NFL, NBA, Cricket, Golf). Everything is streamed in 50fps/60fps high frame rate.'
  },
  {
    id: 'activation',
    question: 'How long does the activation process take after checkout?',
    answer: 'Standard activation is instant and fully completed within 10 to 15 minutes of safe payment clearance. Your complete digital login data package, including custom personalized configuration scripts & simple setup URLs, will load straight into your WhatsApp inbox and Email.'
  },
  {
    id: 'isp-blocks',
    question: 'Why does my current IPTV block during UK Saturday 3 PM matches?',
    answer: 'Most budget providers get blocked because they use cheap general cloud hosts. IPTV London uses dedicated UK-based bare-metal edge nodes (physical hardware based near London and Manchester) that dynamic-route streams during major high-traffic sporting events, making our network immune to ISP sports blocks.'
  },
  {
    id: 'multidevice',
    question: 'Can I watch on multiple devices simultaneously?',
    answer: 'Our 3 Months and 6 Months contracts support 1 active device stream connection. Our range-topping 12 Months Premium subscription package allows up to 2 devices to stream concurrently under the same roof on any network.'
  },
  {
    id: 'broadband-parent',
    question: 'Do I need to change any settings on my BT/Sky router?',
    answer: 'Some UK ISPs have home safety filters turned on by default (e.g., BT Web Protect, Sky Broadband Shield). We provide simple, developer-style 1-click tutorials on how to toggle these safe flags off, which normally takes under 60 seconds on your ISP portal account dashboard.'
  }
];
