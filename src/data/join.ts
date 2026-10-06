// Content for the Join Us page (src/pages/join.astro).
// Update `openings` whenever positions open or close; set it to [] when there are none.

export const openings = [
  {
    title: 'Two open PhD positions',
    start: 'Starting Winter (January) 2027',
    details: 'Full financial support for admitted PhD students.',
  },
];

// Research topics we are recruiting for.
export const topics = [
  'Semantic communication',
  'Digital twin',
  'Edge intelligence',
  'Generative AI and large language models (LLMs)',
  'LEO satellite networks',
  'Intelligent IoT systems',
];

export const requirements = [
  'Background in Electrical and Computer Engineering, Computer Science, or a related field.',
  'Strong academic record, with a minimum GPA of 3.3.',
  'Highly self-motivated.',
  'PhD applicants must hold a Master’s degree with a strong research record; prior relevant publications are preferred.',
  'Meet UNB’s English language requirements.',
];

export const benefits = [
  'Full financial support (PhD)',
  'Timely, effective supervision',
  'Strong research outcomes through joint effort',
  'Teaching assistant and guest-lecturing opportunities',
  'Academic visit and exchange opportunities',
  'Industry visits and internship opportunities',
];

// Ways to work with the lab, shown as cards.
export const paths = [
  {
    title: 'PhD students',
    text: 'PhD applicants should hold a Master’s degree with a strong research record. Admitted PhD students receive full financial support.',
  },
  {
    title: 'Master’s students',
    text: 'We welcome motivated Master’s applicants with a solid background in ECE, CS, or a related field. Publications are not required but are an advantage.',
  },
  {
    title: 'Undergraduate researchers',
    text: 'UNB undergraduates interested in research experience are welcome to get in touch. Several undergraduates already work with the lab.',
  },
  {
    title: 'Visiting scholars and students',
    text: 'We welcome visiting scholars and students sponsored by their home countries or universities worldwide.',
  },
];

export const applySubject = '[PhD/Master’s/Postdoc] Application – [Your Name] – [Intended Start Term/Year]';

export const applyMaterials = ['CV', 'Transcripts', 'TOEFL/IELTS score report (if applicable)'];

// UNB pages linked from the Join page.
export const links = {
  eceProgram: 'https://www.unb.ca/gradstudies/programs/electrical.html', // admission + English requirements
  gradStudies: 'https://www.unb.ca/gradstudies/',
};

// Frequently asked questions. `a` may contain simple HTML (links, <strong>).
export const faqs = [
  {
    q: 'Do I need a publication to apply?',
    a: 'For Master’s applicants, no, but publications are preferred. For PhD and postdoctoral applicants, yes: a strong research record with relevant publications is expected.',
  },
  {
    q: 'What background do I need?',
    a: 'A degree in Electrical and Computer Engineering, Computer Science, or a related field, a strong academic record (minimum GPA of 3.3), and genuine interest in our research areas.',
  },
  {
    q: 'What are the English language requirements?',
    a: `We follow UNB’s requirements. See the <a href="${links.eceProgram}" target="_blank" rel="noopener">UNB ECE graduate program page</a> for accepted tests and minimum scores.`,
  },
  {
    q: 'When can I start?',
    a: 'Graduate students usually start in the Fall (September) or Winter (January) term. Check the current openings above for available start terms.',
  },
  {
    q: 'I emailed but did not hear back. What does that mean?',
    a: 'We receive many applications, so only selected applicants are contacted. Please do not send repeated follow-ups.',
  },
  {
    q: 'Can I use AI tools to write my email?',
    a: '<strong>AI-generated emails will be ignored.</strong> Write your own message: tell us who you are, why our research interests you, and how your background fits.',
  },
  {
    q: 'How can I improve my chances?',
    a: 'Be genuine. Read some of our <a href="/research#publications">recent publications</a> before reaching out, and mention specifically which work or direction interests you and why. Generic mass emails are unlikely to get a response.',
  },
  {
    q: 'Do you accept visiting students or scholars?',
    a: 'Yes. We welcome visiting scholars and students sponsored by their home countries or universities. Email us with your CV, proposed visit dates, and funding source.',
  },
  {
    q: 'I am a UNB undergraduate. Can I do research with the lab?',
    a: 'Yes. Email us with your CV, transcript, and a short note on which of our research directions interests you.',
  },
];
