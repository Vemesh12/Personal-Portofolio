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
        <a href="/VemeshBypureddi_Resume.pdf" download="VemeshBypureddi_Resume.pdf" className="text-sm px-3 py-1.5 border border-muted hover:bg-section transition-colors rounded inline-flex items-center gap-2">
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
      I am a Full Stack Developer passionate about building scalable, responsive, and user-friendly web applications. My experience spans both frontend and backend development, primarily in edtech and business automation.
    </motion.p>
  </div>

  <div className="md:col-span-7 text-muted leading-relaxed space-y-4">
    <motion.p
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      Proficient in React (Hooks, Context API), TypeScript, Node.js, Express.js, and Tailwind CSS, with a strong grasp of RESTful API development and database management using SQL and MongoDB.  
      I have collaborated in Agile teams, written clean, maintainable code, and deployed applications to cloud platforms.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      I am seeking opportunities in fast-paced, product-based organizations where I can contribute to building cohesive systems that scale, while continuously learning and enhancing my skills.
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
      title: 'YouTube Transcript Summarizer',
      description: 'Flask app using Google Gemini AI to generate detailed summaries from YouTube transcripts.',
      tech: ['Python', 'Flask', 'Gemini AI'],
      github: 'https://github.com/yourname/youtube-transcript-summarizer',
      //demo: 'https://youtube-transcript-summarizer.vercel.app',
    },
    {
      title: 'Disease Predictor & AI Prescription',
      description: 'ML-based disease prediction with audio prescription in English and Telugu, UI in Streamlit.',
      tech: ['Python', 'scikit-learn', 'Flask', 'Streamlit'],
      github: 'https://github.com/Vemesh12/Disease-Predictor-and-AI-Prescription-Generator.git',
    },
    {
      title: 'WithUs - Farm to Door',
      description: 'Full-stack delivery platform with responsive UI, product listings, orders, and reviews.',
      tech: ['React', 'TypeScript', 'Tailwind', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/Vemesh12/WithUs-Project.git',
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
          >Selected work that reflects my approach.</motion.p>
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

const Experience = () => (
  <Section id="experience" fit={false}>
    <motion.h2 className="text-4xl font-semibold tracking-tight"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >Experience</motion.h2>
    <div className="mt-6 space-y-4">
      {[
        {
          role: 'Full Stack Developer Intern',
          company: 'Edubot Software and Services',
          period: '2024 — 2025 · Vijayawada, India',
          summary: 'Built responsive, scalable frontends (React, TypeScript, Tailwind, Shadcn UI). Implemented REST APIs with Node.js/Express. Deployed the official website and collaborated in Agile sprints.'
        }
      ].map((e) => (
        <motion.div key={e.role} className="border border-muted rounded p-4 hover:bg-section transition-colors"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex justify-between gap-4">
            <p className="font-medium">{e.role} · {e.company}</p>
            <p className="text-sm text-muted">{e.period}</p>
          </div>
          <p className="text-sm text-muted mt-2">{e.summary}</p>
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
