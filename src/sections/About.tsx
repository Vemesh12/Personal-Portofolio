import { animate, useInView, useReducedMotion } from 'framer-motion'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { about } from '../data'

const AboutOrb = lazy(() => import('../components/Scene3D').then((m) => ({ default: m.AboutOrb })))

/** Counts up from 0 to the numeric part of `value` when scrolled into view. */
const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const target = parseFloat(value)
  const decimals = value.includes('.') ? value.split('.')[1].replace(/\D/g, '').length : 0
  const suffix = value.replace(/[\d.]/g, '')
  const [n, setN] = useState(reduce ? target : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, target, { duration: 1.4, ease: 'easeOut', onUpdate: setN })
    return () => controls.stop()
  }, [inView, reduce, target])

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export const About = () => (
  <Section id="about" className="bg-section border-y border-muted">
    <SectionHeading index="01" title="About" />
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
      <div className="md:col-span-7 space-y-4 md:space-y-5">
        <Reveal as="p" className="text-lg sm:text-xl md:text-2xl text-white leading-snug">
          {about.summary}
        </Reveal>
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} as="p" delay={0.1 + i * 0.1} className="text-[15px] md:text-base text-muted leading-relaxed">
            {p}
          </Reveal>
        ))}
        {/* boxed tiles on mobile, divider style on desktop */}
        <div className="grid grid-cols-3 gap-2.5 md:gap-4 pt-4 md:pt-6">
          {about.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.15 + i * 0.1}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-4 text-center md:rounded-none md:border-0 md:border-l md:border-white/20 md:bg-transparent md:px-0 md:py-0 md:pl-4 md:text-left"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                <CountUp value={s.value} />
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-muted mt-1 leading-tight">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
      {/* orb sits above the text on mobile so the section doesn't end in a large empty block */}
      <Reveal from="right" className="order-first md:order-none md:col-span-5 h-[220px] sm:h-[280px] md:h-[440px] -mt-4 md:mt-0">
        <Suspense fallback={null}>
          <AboutOrb />
        </Suspense>
      </Reveal>
    </div>
  </Section>
)
