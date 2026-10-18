import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { experiences } from '../data'

export const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <Section id="experience" className="bg-section border-y border-muted">
      <SectionHeading index="03" title="Experience" />
      <ol ref={listRef} className="relative ml-1.5 md:ml-[180px]">
        {/* timeline track + line that draws itself while scrolling */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
        <motion.div className="absolute left-0 top-2 bottom-2 w-px bg-white origin-top" style={{ scaleY: lineScale }} />

        {experiences.map((e, i) => (
          <li key={e.company} className="relative pl-8 md:pl-12 pb-14 last:pb-0">
            <motion.span
              className={`absolute -left-[6px] top-1.5 w-[13px] h-[13px] rounded-full border-2 border-white ${e.current ? 'bg-white' : 'bg-black'}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              {e.current && <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-60" />}
            </motion.span>

            {/* date: under the title on mobile, left of the line on desktop */}
            <Reveal from="left" className="md:absolute md:-left-[180px] md:w-[150px] md:text-right font-mono text-xs text-muted mb-2 md:mb-0 pt-1">
              {e.period[0]} — {e.period[1]}
              {e.current && <span className="block md:mt-1 text-white">● Current</span>}
            </Reveal>

            <Reveal delay={0.05 * i}>
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <p className="text-white/80 mt-0.5">{e.company}</p>
              <p className="text-xs text-muted mt-0.5">{e.location}</p>
              <ul className="mt-4 space-y-2 max-w-3xl">
                {e.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-white/50">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {e.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
