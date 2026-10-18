import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export const Section = ({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`relative w-full overflow-hidden px-6 md:px-10 lg:px-16 py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto w-full">{children}</div>
  </section>
)

/** Numbered eyebrow + title, e.g. "01 — About". */
export const SectionHeading = ({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) => (
  <div className="mb-10 md:mb-14">
    <Reveal as="p" className="font-mono text-xs tracking-[0.3em] text-muted uppercase mb-3">
      {index} — {title}
    </Reveal>
    <Reveal as="h2" delay={0.05} className="text-4xl md:text-5xl font-semibold tracking-tight">
      {title}
    </Reveal>
    {subtitle && (
      <Reveal as="p" delay={0.1} className="text-muted mt-3 max-w-xl">
        {subtitle}
      </Reveal>
    )}
  </div>
)
