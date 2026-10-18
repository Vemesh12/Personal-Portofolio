import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { staggerItem } from '../components/motion'
import { Reveal, Stagger } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { certifications, education } from '../data'

export const Education = () => (
  <Section id="education" className="bg-section border-y border-muted">
    <SectionHeading index="05" title="Education" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <Stagger className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10" stagger={0.1}>
        {education.map((e) => (
          <motion.div key={e.degree} variants={staggerItem} className="py-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <div>
              <p className="font-semibold">{e.degree}</p>
              <p className="text-sm text-muted">{e.school}</p>
            </div>
            <div className="text-right font-mono text-xs text-muted">
              <p>{e.period}</p>
              <p className="text-white mt-0.5">{e.score}</p>
            </div>
          </motion.div>
        ))}
      </Stagger>

      <div className="lg:col-span-5">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
          Certifications
        </Reveal>
        <Stagger className="space-y-3" stagger={0.1}>
          {certifications.map((c) => (
            <motion.div key={c.title} variants={staggerItem} whileHover={{ x: 4 }} className="flex gap-3 items-start border border-white/10 rounded-lg p-4 hover:border-white/30 transition-colors">
              <FiAward className="mt-0.5 shrink-0 text-white/70" />
              <div>
                <p className="text-sm font-medium">{c.title}</p>
                <p className="text-xs text-muted mt-0.5">
                  {c.issuer}
                  {c.year && ` · ${c.year}`}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </div>
  </Section>
)
