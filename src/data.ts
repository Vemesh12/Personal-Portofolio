// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Vemesh Bypureddi',
  roles: ['Software Engineer', 'Full Stack Developer', 'React + Node.js Engineer'],
  tagline:
    'I build scalable, responsive web applications — from React interfaces to Node.js APIs and AWS deployments.',
  email: 'vemeshbypureddi1204@gmail.com',
  phone: '+91 8186945403',
  linkedin: 'https://www.linkedin.com/in/vemesh-bypureddi-aa0240307',
  github: 'https://github.com/Vemesh12',
  resume: '/VemeshBypureddi.pdf',
  location: 'Visakhapatnam, India',
}

export const about = {
  summary:
    'Software Engineer and 2025 Computer Science graduate building full-stack web applications in production.',
  paragraphs: [
    'I work with React.js, TypeScript, Node.js, PostgreSQL, and AWS — from responsive frontends to backend APIs and cloud deployments. At nRich IT Consulting Services, I help migrate legacy PHP systems to Node.js across a mobile app, website, and admin portal, and I integrated Twilio Flex for live customer communication.',
    'Outside of work, I built WithUs — a Farm-to-Door delivery platform — end-to-end, from database design to AWS deployment. I enjoy turning designs into fast, intuitive interfaces and building systems that hold up in production.',
  ],
  stats: [
    { value: '1+', label: 'Year in production' },
    { value: '5', label: 'Projects shipped' },
    { value: '8.6', label: 'B.Tech CGPA' },
  ],
}

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'Socket.io', 'BullMQ', 'FastAPI', 'Flask'] },
  { title: 'Databases', items: ['PostgreSQL', 'Prisma', 'Redis'] },
  { title: 'Cloud & DevOps', items: ['AWS (EC2, RDS, S3)', 'Vercel', 'Render', 'Supabase', 'Git', 'GitHub'] },
  { title: 'AI / ML & Integrations', items: ['scikit-learn', 'Streamlit', 'OpenAI API', 'Gemini API', 'Twilio'] },
  { title: 'Tools', items: ['Postman', 'VS Code', 'Claude Code'] },
]

export type Project = {
  title: string
  year: string
  description: string
  highlights: string[]
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'TeluguArena — Real-Time Esports Tournaments',
    year: '2026',
    description: 'An end-to-end esports tournament platform with multi-stage brackets, team registration, and live standings.',
    highlights: [
      'Live standings and leaderboards over WebSockets (Socket.io)',
      'BullMQ + Redis jobs that release match-room credentials on schedule',
      'Discord OAuth2 + JWT auth, with telecom-circle checks for regional eligibility',
      'Dispute workflow with screenshot proofs (Supabase) and audited payouts',
    ],
    tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.io'],
    demo: 'https://tel-arena.vercel.app/',
  },
  {
    title: 'StyleIQ — AI Styling & Wardrobe Assistant',
    year: '2026',
    description: 'AI fashion assistant that suggests outfits based on weather, occasion, and your own wardrobe.',
    highlights: [
      'AI pipeline that tags uploaded clothes by color, garment type, and style',
      'FastAPI services for image processing, prompt chaining, and preference caching',
      'React + Tailwind wardrobe manager with lookbooks and outfit filters',
      'PostgreSQL schemas for profiles and preferences, plus cloud image storage',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'OpenAI / Gemini API', 'PostgreSQL'],
    github: 'https://github.com/Vemesh12/StyleIQ.git',
  },
  {
    title: 'WithUs — Farm to Door Delivery',
    year: '2026',
    description: 'A full-stack delivery platform built end-to-end and fully production-hosted.',
    highlights: [
      'Product listings, cart management, and order placement',
      'Admin dashboard for products, orders, and operations',
      'Node.js REST APIs + PostgreSQL; Vercel and AWS (EC2, RDS, S3)',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS'],
    demo: 'https://www.withusforu.com',
  },
  {
    title: 'Disease Predictor & AI Prescription',
    year: '2025',
    description: 'ML-based disease prediction from symptoms with multilingual audio prescriptions.',
    highlights: [
      'scikit-learn classification model trained on symptom data',
      'Audio prescriptions in English and Telugu for regional users',
      'Streamlit UI with predictions served from Flask',
    ],
    tech: ['Python', 'scikit-learn', 'Flask', 'Streamlit'],
    github: 'https://github.com/Vemesh12/Disease-Predictor-and-AI-Prescription-Generator.git',
  },
  {
    title: 'YouTube Transcript Summarizer',
    year: '2024',
    description: 'AI web app that turns long YouTube videos into concise summaries.',
    highlights: [
      'Transcript extraction and text-chunking pipeline',
      'Summaries generated with Google Gemini AI',
    ],
    tech: ['Python', 'Flask', 'Google Gemini AI'],
    github: 'https://github.com/Vemesh12/Youtube-Transcript-Summarizer.git',
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: [string, string]
  current: boolean
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'nRich IT Consulting Services',
    location: 'Visakhapatnam, India',
    period: ['Aug 2025', 'Present'],
    current: true,
    bullets: [
      'Contributed to migrating legacy PHP backend functionality to Node.js across a client-facing mobile app, website, and admin portal.',
      'Developed and maintained backend APIs for reliable frontend–backend communication.',
      'Built responsive web interfaces with React.js, TypeScript, and Tailwind CSS, focused on reusable, maintainable components.',
      'Integrated Twilio Flex for live customer communication and implemented API rate limiting to improve backend reliability.',
    ],
    tags: ['Node.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Twilio', 'WhatsApp API'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Edubot Software and Services',
    location: 'Vijayawada, India',
    period: ['2024', '2025'],
    current: false,
    bullets: [
      'Developed responsive, reusable user interfaces with React.js, TypeScript, Tailwind CSS, and Shadcn UI.',
      'Worked in Agile sprints with designers, backend engineers, and product managers to ship features iteratively and on schedule.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'PostgreSQL'],
  },
]

export const education = [
  { school: 'IIIT Nuzvid', degree: 'B.Tech in Computer Science', period: '2021 – 2025', score: 'CGPA 8.6' },
  { school: 'IIIT Nuzvid', degree: 'Pre-University Course (PUC)', period: '2019 – 2021', score: 'CGPA 9.34' },
  { school: 'Z.P. High School, Vemulapudi', degree: 'Secondary School Certificate', period: '2019', score: 'CGPA 10' },
]

export const certifications = [
  { title: 'Claude Code in Action', issuer: 'Anthropic', year: '2026' },
  { title: 'AI for Everyone: Master the Basics', issuer: 'IBM (edX)' },
  { title: 'Job Oriented Training & Internship Program', issuer: 'Edubot Software and Services', year: '2024' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
