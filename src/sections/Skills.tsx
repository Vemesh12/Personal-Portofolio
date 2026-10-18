import { motion } from 'framer-motion'
import { staggerItem } from '../components/motion'
import { Reveal, Stagger } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { SkillSphere } from '../components/SkillSphere'
import { skillGroups } from '../data'

const allSkills = skillGroups.flatMap((g) => g.items)

/** Endless horizontal strip of skills. */
const Marquee = () => (
  <div className="relative mt-16 overflow-hidden border-y border-muted py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex w-max animate-marquee gap-10 pr-10">
      {[...allSkills, ...allSkills].map((s, i) => (
        <span key={i} aria-hidden={i >= allSkills.length} className="text-2xl md:text-3xl font-semibold text-white/25 whitespace-nowrap">
          {s} <span className="text-white/10 ml-10">✦</span>
        </span>
      ))}
    </div>
  </div>
)

export const Skills = () => (
  <Section id="skills">
    <SectionHeading index="02" title="Skills" subtitle="Tools and technologies I use to design, build, and ship." />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="grid sm:grid-cols-[150px_1fr] gap-2 sm:gap-4 items-start">
            <Reveal as="p" from="left" className="font-mono text-xs uppercase tracking-widest text-muted pt-2">
              {g.title}
            </Reveal>
            <Stagger className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.span
                  key={s}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  className="px-3 py-1.5 border border-muted rounded text-sm text-white/80 font-medium hover:bg-white hover:text-black transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
      <Reveal from="right" className="lg:col-span-5">
        <SkillSphere words={allSkills} />
        <p className="text-center text-xs text-muted font-mono mt-2">drag to spin</p>
      </Reveal>
    </div>
    <Marquee />
  </Section>
)
