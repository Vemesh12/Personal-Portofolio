import { motion } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import { staggerItem } from '../components/motion'
import { Reveal, Stagger } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { TiltCard } from '../components/TiltCard'
import { profile, projects } from '../data'

const linkClass = 'inline-flex items-center gap-2 text-muted hover:text-white transition-colors'

export const Projects = () => (
  <Section id="projects">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <SectionHeading index="04" title="Projects" subtitle="Things I've built and shipped." />
      <Reveal className="mb-10 md:mb-14">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FiGithub /> More on GitHub <FiArrowUpRight />
        </a>
      </Reveal>
    </div>

    <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
      {projects.map((p, i) => {
        // with an odd count, the first project spans the full row so the grid stays even
        const featured = i === 0 && projects.length % 2 === 1
        return (
          <motion.div key={p.title} variants={staggerItem} className={`h-full ${featured ? 'md:col-span-2' : ''}`}>
            <TiltCard className="rounded-xl">
              <article className="h-full flex flex-col rounded-xl border border-white/15 bg-white/[0.03] p-6 hover:border-white/40 transition-colors">
                <div className="flex items-center justify-between font-mono text-xs text-muted mb-6">
                  <span>
                    0{i + 1}
                    {featured && <span className="ml-3 px-2 py-0.5 rounded-full border border-white/30 text-white">Featured</span>}
                  </span>
                  <span>{p.year}</span>
                </div>
                <h3 className={`font-semibold mb-2 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>{p.title}</h3>
                <p className="text-sm text-muted">{p.description}</p>
                <ul className={`mt-4 space-y-1.5 text-sm text-white/70 ${featured ? 'md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-1.5 md:space-y-0' : ''}`}>
                  {p.highlights.map((h) => (
                    <li key={h} className="pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-white/50">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 border border-white/15 rounded font-mono text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 mt-auto pt-6 text-sm">
                  {p.github && (
                    <a className={linkClass} href={p.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a className={linkClass} href={p.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> Live site
                    </a>
                  )}
                </div>
              </article>
            </TiltCard>
          </motion.div>
        )
      })}
    </Stagger>
  </Section>
)
