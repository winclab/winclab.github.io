// Site-wide settings: lab name, PI contact details, navigation, and profile links.
// Edit the values here; every page reads from this file.

export const site = {
  shortName: 'WINC Lab',
  name: 'Wireless Intelligent Networking and Computing Lab',
  description:
    'The WINC Lab at the University of New Brunswick develops architectures, algorithms, and system designs for intelligent wireless communication, networking, and computing.',
  department: 'Department of Electrical and Computer Engineering',
  university: 'University of New Brunswick',
  universityUrl: 'https://www.unb.ca',
  location: 'Fredericton, New Brunswick, Canada',
  // [PLACEHOLDER] Replace with the lab's room / building.
  address: '[PLACEHOLDER] Room XXX, Head Hall, 15 Dineen Drive, Fredericton, NB E3B 5A3',
};

export const pi = {
  name: 'Dr. Hong Chen',
  title: 'Assistant Professor',
  chair: 'Cisco Research Chair in IoT',
  department: site.department,
  university: site.university,
  // [PLACEHOLDER] Confirm Dr. Chen's email address.
  email: 'hong.chen@unb.ca',
  photo: '/images/pi/hong-chen.svg', // replace with /images/pi/hong-chen.jpg
  // Leave a link as '' to hide its button on the PI page.
  links: {
    scholar: 'https://scholar.google.com/', // [PLACEHOLDER] full Google Scholar profile URL
    unb: 'https://www.unb.ca/', // [PLACEHOLDER] UNB faculty profile URL
    linkedin: '', // e.g. https://www.linkedin.com/in/...
    orcid: '', // e.g. https://orcid.org/0000-0000-0000-0000
    github: '', // e.g. https://github.com/...
    cv: '', // e.g. /files/hong-chen-cv.pdf (put the file in public/files/)
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'PI', href: '/pi' },
  { label: 'People', href: '/people' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Join Us', href: '/join' },
];

// Newsletter signup. Paste the embed form from Buttondown or Mailchimp into
// src/components/Newsletter.astro (see the comments there). Set to false to hide the section.
export const newsletter = {
  enabled: true,
  heading: 'Stay in the loop',
  blurb: 'Occasional updates on our research, publications, and open positions. No spam.',
};
