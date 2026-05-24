export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  savings: string;
  billingTerm: string;
  features: string[];
  recommended?: boolean;
  gradientAccent?: boolean;
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'sports' | 'entertainment' | 'documentary' | 'movies' | 'news';
  subCategory: string;
  logoUrl?: string;
  currentShow?: string;
  showTime?: string;
  progress?: number;
  quality: '4K' | 'UHD' | 'FHD @ 60FPS' | 'HD';
}

export interface SetupGuide {
  id: string;
  device: string;
  icon: string;
  steps: {
    title: string;
    description: string;
    code?: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
