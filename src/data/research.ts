// Research content used on the Home, About, and Research pages.
// Source: WINC Lab poster (2026). Text marked [DRAFT] was written for the website and needs PI review.

export const summary =
  'Our WINC Lab focuses on developing new architectures, algorithms, and system designs for intelligent ' +
  'wireless communication, networking, and computing.';

export const mission =
  'Our research aims to facilitate the transition from traditional communications to intelligent communications ' +
  'and advanced computing to support diverse intelligent Internet of Things (IoT) applications.';

// Research directions, shown on the About page. `figure` selects the illustration in
// src/components/DirectionFigure.astro (semcom | edge | twin | leo | agentic).
export const directions = [
  {
    title: 'Semantic Communications',
    figure: 'semcom',
    points: [
      '"Understand-before-transmit": only task-related, meaningful information is exchanged.',
      'Alleviates spectrum scarcity and reduces network traffic loads.',
    ],
  },
  {
    title: 'Edge Intelligence',
    figure: 'edge',
    points: [
      'Deploying AI directly at network edge devices, such as edge servers, access points, and IoT devices.',
      'Lower latency and communication overhead, better privacy and scalability, real-time decision making, and higher energy efficiency.',
    ],
  },
  {
    title: 'Digital Twin-assisted Networking',
    figure: 'twin',
    points: [
      'Virtual, real-time replicas of physical communication systems.',
      'Enable intelligent monitoring, prediction, optimization, and autonomous network management.',
    ],
  },
  {
    title: 'LEO Satellite Networks',
    figure: 'leo',
    points: [
      '[DRAFT] Low Earth orbit constellations that extend connectivity to remote and underserved regions.',
      '[DRAFT] Integrated satellite-terrestrial networking, resource management, and edge computing in space.',
    ],
  },
  {
    title: 'Agentic AI for Wireless Networks',
    figure: 'agentic',
    points: [
      '[DRAFT] Autonomous AI agents that perceive network conditions, reason, and act to manage wireless networks.',
      '[DRAFT] Toward self-configuring, self-optimizing, and intent-driven networks.',
    ],
  },
] as const;

// Shown as tags on the About page.
export const interests = [
  'B5G/6G networks',
  'Intelligent IoT systems',
  'Semantic communications',
  'Edge intelligence',
  'Digital twin-assisted networking',
  'LEO satellite networks',
  'Agentic AI',
  'Multi-access edge computing (MEC)',
  'Generative AI and large language models (LLMs)',
  'Joint resource allocation',
  'Machine learning for communications and networking',
];

// The current research program, shown at the top of the Research page.
// Only the headline challenge/direction pairs are published here, not the detailed task breakdown.
export const program = {
  title: 'Edge AI-empowered Semantic Communication Networks for Intelligent IoT Systems',
  goal:
    'Leverage distributed AI deployed at the network edge to achieve effective semantic communication networks ' +
    'for energy-efficient, low-latency, intelligent IoT systems.',
  figure: {
    src: '/images/research/edge-ai-semantic-networks.png',
    alt: 'Three-layer architecture: a central cloud layer with server and knowledge base; a distributed edge server layer of access points, edge servers, and knowledge bases; and an IoT device layer covering smart home, autonomous driving, and smart factory, connected by semantic communications.',
    caption: 'Edge AI-enabled semantic communication network architecture for intelligent IoT systems.',
  },
  applications: ['Smart home', 'Autonomous driving', 'Smart factory'],
  subtasks: [
    {
      challenge: 'Dynamic user demands and background knowledge changes',
      direction: 'Adaptive knowledge sharing-enabled hybrid semantic-bit communications',
    },
    {
      challenge: 'Heavy communication overheads over harsh channel conditions',
      direction: 'Data-efficient generative AI-assisted semantic communications',
    },
    {
      challenge: 'Complex wireless environments and limited network resources',
      direction: 'Digital twin-assisted semantic network management and resource orchestration',
    },
  ],
};

// Funding acknowledgements, shown at the bottom of the Research page (logos live in public/images/sponsors/).
export const acknowledgements = [
  { name: 'Natural Sciences and Engineering Research Council of Canada (NSERC)', logo: '/images/sponsors/nserc.jpg' },
  { name: 'Research New Brunswick', logo: '/images/sponsors/research-nb.jpg' },
  { name: 'Cisco Research Fund', logo: '/images/sponsors/cisco.svg' },
  { name: 'UNB Internal Research Fund: Harrison McCain Foundation Young Scholars Award', logo: '/images/sponsors/unb.png' },
];
