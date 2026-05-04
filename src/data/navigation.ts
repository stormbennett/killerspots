export type NavLink = {
  label: string;
  href: string;
};

export type MegaSection = {
  heading: string;
  href: string;
  items: NavLink[];
};

export type MegaMenu = {
  id: 'who-we-help' | 'solutions';
  label: string;
  sections: MegaSection[];
};

export const whoWeHelp: MegaMenu = {
  id: 'who-we-help',
  label: 'Who We Help',
  sections: [
    {
      heading: 'Home Services',
      href: '/industries/home-services',
      items: [
        { label: 'HVAC', href: '/industries/home-services/hvac' },
        { label: 'Plumbing', href: '/industries/home-services/plumbing' },
        { label: 'Roofing', href: '/industries/home-services/roofing' },
        { label: 'Electrical', href: '/industries/home-services/electrical' },
        { label: 'Landscaping', href: '/industries/home-services/landscaping' },
        { label: 'Pool & Spa', href: '/industries/home-services/pool-spa' },
      ],
    },
    {
      heading: 'Legal',
      href: '/industries/legal',
      items: [
        { label: 'Personal Injury', href: '/industries/legal/personal-injury' },
        { label: 'Family Law', href: '/industries/legal/family-law' },
        { label: 'General Practice', href: '/industries/legal/general-practice' },
      ],
    },
    {
      heading: 'Healthcare',
      href: '/industries/healthcare',
      items: [
        { label: 'Doctors Offices', href: '/industries/healthcare/doctors' },
        { label: 'Dental', href: '/industries/healthcare/dental' },
        { label: 'Optical', href: '/industries/healthcare/optical' },
      ],
    },
    {
      heading: 'Restaurants, Bars & Nightclubs',
      href: '/industries/restaurants-bars-nightclubs',
      items: [
        { label: 'Events (Des Vu)', href: '/industries/restaurants-bars-nightclubs/events' },
      ],
    },
    {
      heading: 'Financial Services',
      href: '/industries/financial-services',
      items: [],
    },
    {
      heading: 'Small Business',
      href: '/industries/small-business',
      items: [
        { label: 'Fitness & Gyms', href: '/industries/small-business/fitness' },
      ],
    },
    {
      heading: 'Radio Stations & Groups',
      href: '/industries/radio-stations-groups',
      items: [
        { label: 'White-Label Production', href: '/industries/radio-stations-groups/white-label-production' },
        { label: 'Digital Solutions', href: '/industries/radio-stations-groups/digital-solutions' },
      ],
    },
    {
      heading: 'Platforms & Agencies',
      href: '/industries/platforms-agencies',
      items: [
        { label: 'White Label', href: '/industries/platforms-agencies/white-label' },
        { label: 'Agency Partners', href: '/industries/platforms-agencies/agency-partners' },
      ],
    },
  ],
};

export const solutions: MegaMenu = {
  id: 'solutions',
  label: 'Solutions',
  sections: [
    {
      heading: 'Audio Production',
      href: '/services/audio-production',
      items: [
        { label: 'Custom Jingles', href: '/services/audio-production/custom-jingles' },
        { label: 'Radio Commercials', href: '/services/audio-production/radio-commercials' },
        { label: 'Voice Overs', href: '/services/audio-production/voice-overs' },
        { label: 'Voice Talent', href: '/voice-talent' },
        { label: 'On-Hold Messaging', href: '/services/audio-production/on-hold-messaging' },
        { label: 'Auto-Attendant', href: '/services/audio-production/auto-attendant' },
        { label: 'Radio Imaging', href: '/services/audio-production/radio-imaging' },
      ],
    },
    {
      heading: 'Video & TV',
      href: '/services/video-tv',
      items: [
        { label: 'TV Commercials', href: '/services/video-tv/tv-commercials' },
        { label: 'Web Videos', href: '/services/video-tv/web-videos' },
        { label: 'Documentaries', href: '/services/video-tv/documentaries' },
        { label: 'Corporate Video', href: '/services/video-tv/corporate-video' },
        { label: 'Social Video', href: '/services/video-tv/social-video' },
        { label: 'Graphics & Animations', href: '/services/video-tv/graphics-animations' },
      ],
    },
    {
      heading: 'PPC',
      href: '/services/ppc',
      items: [
        { label: 'Google Ads & LSA', href: '/services/ppc/google-ads-lsa' },
        { label: 'Meta Ads', href: '/services/ppc/meta-ads' },
        { label: 'LinkedIn Ads', href: '/services/ppc/linkedin-ads' },
        { label: 'YouTube Ads', href: '/services/ppc/youtube-ads' },
      ],
    },
    {
      heading: 'Digital Ads',
      href: '/services/digital-ads',
      items: [
        { label: 'CTV / Streaming', href: '/services/digital-ads/ctv-streaming' },
        { label: 'OTT / Sports', href: '/services/digital-ads/ott-sports' },
        { label: 'Programmatic Display', href: '/services/digital-ads/programmatic-display' },
        { label: 'Geo-Fencing', href: '/services/digital-ads/geo-fencing' },
        { label: 'Email Campaigns', href: '/services/digital-ads/email-campaigns' },
      ],
    },
    {
      heading: 'AI Services',
      href: '/services/ai-services',
      items: [
        { label: 'AI Chatbots', href: '/services/ai-services/ai-chatbots' },
        { label: 'AI Voice Agents', href: '/services/ai-services/ai-voice-agents' },
        { label: 'AI Content & Automation', href: '/services/ai-services/ai-content-automation' },
      ],
    },
    {
      heading: 'Social Media',
      href: '/services/social-media',
      items: [
        { label: 'Organic Social', href: '/services/social-media/organic-social' },
        { label: 'Short-Form Video', href: '/services/social-media/short-form-video' },
        { label: 'Paid Social', href: '/services/social-media/paid-social' },
      ],
    },
    {
      heading: 'SEO / AIO',
      href: '/services/seo-aio',
      items: [
        { label: 'SEO', href: '/services/seo-aio/seo' },
        { label: 'AI Optimization', href: '/services/seo-aio/ai-optimization' },
        { label: 'GEO', href: '/services/seo-aio/geo' },
        { label: 'LLM Visibility', href: '/services/seo-aio/llm-visibility' },
        { label: 'KillerSEOx Audit', href: '/services/seo-aio/killerseox-audit' },
      ],
    },
    {
      heading: 'Websites',
      href: '/services/websites',
      items: [
        { label: 'Landing Pages', href: '/services/websites/landing-pages' },
        { label: 'Business Sites', href: '/services/websites/business-sites' },
        { label: 'Hosting', href: '/services/websites/hosting' },
      ],
    },
    {
      heading: 'Creative & Content',
      href: '/services/creative',
      items: [
        { label: 'Graphic Design & Branding', href: '/services/creative/graphic-design' },
        { label: 'Logo Design', href: '/services/creative/logo-design' },
        { label: 'Content Writing', href: '/services/creative/content-writing' },
        { label: 'Green Screen Studio Rental', href: '/studio' },
      ],
    },
  ],
};

export const megaMenus: MegaMenu[] = [whoWeHelp, solutions];

export const simpleNavItems: NavLink[] = [
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Marketing Plans', href: '/marketing-plans' },
  { label: 'LeadConnector', href: '/leadconnector' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerCompanyLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Marketing Plans', href: '/marketing-plans' },
  { label: 'Marketing Recommendations', href: '/marketing-recommendations' },
  { label: 'LeadConnector', href: '/leadconnector' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Studio Rental', href: '/studio' },
  { label: 'Voice Talent', href: '/voice-talent' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const businessInfo = {
  name: 'Killerspots Agency',
  phone: '(513) 270-2500',
  phoneTel: '+15132702500',
  email: 'storm@killerspots.com',
  address: {
    street: '463 Ohio Pike, Suite 310',
    city: 'Cincinnati',
    region: 'OH',
    postal: '45255',
    country: 'US',
  },
  social: {
    facebook: 'https://facebook.com/killerspots',
    linkedin: 'https://linkedin.com/company/killerspots',
    instagram: 'https://instagram.com/killerspots',
  },
} as const;

export const logoUrls = {
  color: 'https://assets.cdn.filesafe.space/E3Rv5E7JpJH3jrDtAbaE/media/695da27422afaa447ddaef57.png',
  white: 'https://assets.cdn.filesafe.space/E3Rv5E7JpJH3jrDtAbaE/media/696eb670eecbfa0ff3475a2e.png',
  icon: 'https://assets.cdn.filesafe.space/E3Rv5E7JpJH3jrDtAbaE/media/687e83502c48dd0e64003332.png',
  leadConnector: 'https://assets.cdn.filesafe.space/E3Rv5E7JpJH3jrDtAbaE/media/698e6223899b886c5dd7bead.png',
  killerSeox: 'https://assets.cdn.filesafe.space/E3Rv5E7JpJH3jrDtAbaE/media/69deaff680b446d0fb7d54f3.png',
} as const;
