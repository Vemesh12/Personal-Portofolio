import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMail, FiDownload, FiLinkedin } from 'react-icons/fi'

type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

const Section = ({ id, children, className = '', fit = true }: { id: string; children: React.ReactNode; className?: string; fit?: boolean }) => (
  <section id={id} className={`w-full ${fit ? 'min-h-[100svh]' : ''} overflow-hidden flex items-center px-6 md:px-10 lg:px-16 py-16 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto w-full">{children}</div>
  </section>
)


const TypingText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setDisplay(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 60)
    return () => clearInterval(id)
  }, [text])
  return <span>{display}</span>
}

const Header = () => (
  <header className="sticky top-0 z-20 backdrop-blur bg-black/50 border-b border-muted">
    <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
      <a href="#home" aria-label="Home" className="block hover:opacity-90 transition-opacity">
        <img src="/text-1760088347429.png" alt="Vemesh Bypureddi" className="h-7 md:h-9 lg:h-10 w-auto object-contain"/>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
        <a className="hover:text-white transition-colors" href="#about">About</a>
        <a className="hover:text-white transition-colors" href="#skills">Skills</a>
        <a className="hover:text-white transition-colors" href="#projects">Projects</a>
        <a className="hover:text-white transition-colors" href="#experience">Experience</a>
        <a className="hover:text-white transition-colors" href="#contact">Contact</a>
      </nav>
      <div className="flex items-center gap-4 ">
        <a href="#projects" className="hidden md:block text-sm text-nowrap px-3 py-1.5 border border-muted hover:bg-section transition-colors rounded">View Work</a>
        <a href="/Vemesh_FullStackDeveloper.pdf" download="Vemesh_FullStackDeveloper.pdf" className="text-sm px-3 py-1.5 border border-muted hover:bg-section transition-colors rounded inline-flex items-center gap-2">
          <FiDownload/> <span>Resume</span>
        </a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <Section id="home" className="pt-24 relative" fit>
    {/* Background image and overlay */}
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 bg-center bg-cover blur-[0px]"
        style={{ backgroundImage: "url('/pic1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </div>
    <div className="grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7 relative z-10">
        <motion.p className="text-muted mb-3"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >— Portfolio</motion.p>
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >
          <TypingText text="Vemesh Bypureddi"/>
        </motion.h1>
        <motion.p className="text-lg text-white-100 max-w-2xl mb-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        >
          Full Stack Developer building scalable, responsive, and user-friendly web applications.
        </motion.p>
        <motion.div className="flex items-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <a href="#projects" className="px-4 py-2 border  hover:bg-section transition-colors rounded">View Projects</a>
          <a href="#contact" className="px-4 py-2 border hover:bg-section transition-colors rounded">Get in touch</a>
        </motion.div>
      </div>
      {/* Right column intentionally empty; background image fills section */}
    </div>
  </Section>
)

const About = () => (
  <Section id="about" className="bg-section border-y border-muted" fit={false}>
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-5">
        <motion.h2
          className="text-4xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          About
        </motion.h2>
        <motion.p
          className="text-muted mt-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >
          Full-stack Software Engineer with 1+ year of production experience building
          and shipping scalable web applications. I care about clean code, real impact,
          and systems that actually work in production.
        </motion.p>
      </div>

      <div className="md:col-span-7 text-muted leading-relaxed space-y-4">
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          I work with React.js, TypeScript, Node.js, PostgreSQL, and AWS — from
          building responsive frontends to designing backend APIs and deploying
          cloud-hosted applications. At nRich IT, I contributed to migrating legacy
          PHP systems to Node.js, integrated Twilio Flex for real-time customer
          communication, and shipped production-grade interfaces used by real users.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          Outside of work, I built WithUs — a full-stack Farm-to-Door delivery
          platform — end-to-end, from database design to AWS deployment. I am looking
          for opportunities in fast-paced, product-driven teams where I can contribute
          to building things that scale and matter.
        </motion.p>
      </div>
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" fit>
    <motion.h2 className="text-4xl font-semibold tracking-tight"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >Skills</motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-sm">
      {[
        'Python', 'SQL', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Shadcn UI', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST', 'PostgreSQL', 'MySQL', 'MongoDB', 'scikit-learn', 'Streamlit', 'Git', 'GitHub', 'Postman', 'Vercel'
      ].map((s) => (
        <motion.div key={s} className="px-3 py-2 border border-muted rounded hover:bg-section transition-colors text-muted font-semibold hover:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {s}
        </motion.div>
      ))}
    </div>
  </Section>
)

const Projects = () => {
  const projects: Project[] = useMemo(() => ([
    {
      title: 'WithUs — Farm to Door Delivery',
      description: 'Full-stack delivery platform built end-to-end — product listings, cart, order placement, and an admin dashboard. Deployed on Vercel (frontend) and AWS EC2/RDS/S3 (backend).',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS'],
      demo: 'https://www.withusforu.com',
    },
    {
      title: 'Disease Predictor & AI Prescription',
      description: 'ML-based disease prediction from user symptoms with multilingual audio prescriptions in English and Telugu — making healthcare tools accessible to regional users.',
      tech: ['Python', 'scikit-learn', 'Flask', 'Streamlit'],
      github: 'https://github.com/Vemesh12/Disease-Predictor-and-AI-Prescription-Generator.git',
    },
    {
      title: 'YouTube Transcript Summarizer',
      description: 'AI-powered web app that extracts YouTube transcripts and generates concise summaries using Google Gemini AI, with a backend pipeline for text chunking and processing.',
      tech: ['Python', 'Flask', 'Google Gemini AI'],
      github:'https://github.com/Vemesh12/Youtube-Transcript-Summarizer.git',
    },
  ]), [])

  return (
    <Section id="projects" className="bg-section border-y border-muted" fit>
      <div className="flex items-end justify-between gap-4">
        <div>
          <motion.h2 className="text-4xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >Projects</motion.h2>
          <motion.p className="text-muted mt-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >Things I've built and shipped.</motion.p>
        </div>
        <a href="https://github.com/Vemesh12" className="text-muted hover:text-white transition-colors inline-flex items-center gap-2">
          <FiGithub/> <span>GitHub</span>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => (
          <motion.article key={p.title} className="group border rounded-lg p-5 hover:bg-black transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h3 className="font-medium mb-2 group-hover:opacity-90">{p.title}</h3>
            <p className="text-sm text-muted">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 border border-muted rounded text-muted">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-5 text-sm">
              {p.github && (
                <a className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors" href={p.github} target="_blank">
                  <FiGithub/> Code
                </a>
              )}
              {p.demo && (
                <a className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors" href={p.demo} target="_blank">
                  <FiExternalLink/> Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

const experiences = [
  {
    role: 'Software Engineer',
    company: 'nRich IT Consulting Services',
    location: 'Visakhapatnam, India',
    period: ['Nov 2025', 'Present'],
    current: true,
    bullets: [
      'Contributed to migrating legacy PHP backend to Node.js across mobile app, website, and admin portal — reducing technical debt and simplifying deployments.',
      'Integrated Twilio Flex for real-time live chat support across web and mobile platforms.',
      'Built production-grade responsive frontend with React.js, TypeScript, and Tailwind CSS.',
      'Implemented rate limiting and request throttling to improve backend reliability under load.',
    ],
    tags: ['Node.js', 'React.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Twilio'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Edubot Software and Services',
    location: 'Vijayawada, India',
    period: ['2024', '2025'],
    current: false,
    bullets: [
      'Built responsive, accessible frontends using React.js, TypeScript, Tailwind CSS, and Shadcn UI.',
      'Designed and implemented RESTful APIs with Node.js and Express.js across multiple features.',
      'Collaborated in Agile sprints with designers, backend engineers, and product managers.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
  },
]

const Experience = () => (
  <Section id="experience" fit={false}>
    <motion.h2 className="text-4xl font-semibold tracking-tight mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >Work Experience</motion.h2>

    <div className="flex flex-col">
      {experiences.map((e, i) => (
        <motion.div
          key={e.role}
          className="grid gap-0"
          style={{ gridTemplateColumns: '140px 1fr' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
        >
          {/* Left — dates */}
          <div className="pr-6 pt-6 pb-6 flex flex-col gap-1">
            <span className="text-xs text-muted font-mono leading-snug">
              {e.period[0]}<br />{e.period[1]}
            </span>
            {e.current && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 font-medium w-fit">
                Current
              </span>
            )}
          </div>

          {/* Timeline dot + line */}
          <div className="relative">
            <div className="absolute -left-[17px] top-[30px] w-2 h-2 rounded-full bg-white border border-muted" />
            {i < experiences.length - 1 && (
              <div className="absolute -left-[13px] top-[30px] bottom-0 w-px bg-muted/30" />
            )}

            {/* Right — content */}
            <div className={`pl-8 pt-6 pb-6 ${i < experiences.length - 1 ? 'border-b border-muted/20' : ''}`}>
              <p className="font-medium text-[15px]">{e.role}</p>
              <p className="text-sm text-muted mt-0.5">{e.company}</p>
              <p className="text-xs text-muted/60 mt-0.5">{e.location}</p>

              <ul className="mt-3 space-y-1.5">
                {e.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted pl-3.5 relative leading-relaxed
                    before:content-[''] before:absolute before:left-0 before:top-[9px]
                    before:w-1 before:h-1 before:rounded-full before:bg-muted/50">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {e.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full border border-muted/40 text-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
)
const Contact = () => (
  <Section id="contact" className="bg-section border-y border-muted" fit={false}>
    <div className="grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <motion.h2 className="text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >Get in touch</motion.h2>
        <motion.p className="text-muted mt-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >Open to roles and collaborations. Reach out anytime.</motion.p>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a href="mailto:vemeshbypureddi1204@gmail.com" className="px-4 py-2 border border-muted rounded hover:bg-black transition-colors inline-flex items-center gap-2"><FiMail/> Email</a>
          <a href="tel:+918186945403" className="px-4 py-2 border border-muted rounded hover:bg-black transition-colors inline-flex items-center gap-2">+91 8186945403</a>
          <a href="https://www.linkedin.com/in/vemesh-bypureddi-aa0240307" target="_blank" className="px-4 py-2 border border-muted rounded hover:bg-black transition-colors inline-flex items-center gap-2"><FiLinkedin/> LinkedIn</a>
        </div>
      </div>
      <div className="md:col-span-5 text-sm text-muted">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >Prefer a quick note? I usually reply within a day.</motion.p>
      </div>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="px-6 md:px-10 lg:px-16 py-10 text-center text-xs text-muted">
    © {new Date().getFullYear()} Vemesh Bypureddi. All rights reserved.
  </footer>
)

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}
