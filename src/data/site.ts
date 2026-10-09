// Site-wide settings: lab name, address, and navigation.
// The PI's details (name, email, photo, links, bio) live in src/content/people/hong-chen.md.

export const site = {
  shortName: 'WINC Lab',
  name: 'Wireless Intelligent Networking and Computing Lab',
  description:
    'The WINC Lab at the University of New Brunswick develops architectures, algorithms, and system designs for intelligent wireless communication, networking, and computing.',
  department: 'Department of Electrical and Computer Engineering',
  university: 'University of New Brunswick',
  universityUrl: 'https://www.unb.ca',
  location: 'Fredericton, New Brunswick, Canada',
  // Shown in the footer. Currently the PI's office; change if the lab gets its own room.
  address: 'Gillin Hall GD117A, University of New Brunswick, Fredericton, NB',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'PI', href: '/pi' },
  { label: 'People', href: '/people' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Join Us', href: '/join' },
];
