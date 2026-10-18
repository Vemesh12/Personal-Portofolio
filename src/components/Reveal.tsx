import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ease } from './motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** direction the element travels in from */
  from?: 'up' | 'down' | 'left' | 'right'
  as?: 'div' | 'p' | 'h2' | 'h3' | 'li' | 'span'
}

const offsets = { up: { y: 32 }, down: { y: -32 }, left: { x: -40 }, right: { x: 40 } }

/** Fades + slides its children in once, when they scroll into view. */
export const Reveal = ({ children, className, delay = 0, from = 'up', as = 'div' }: RevealProps) => {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Tag>
  )
}

/** Parent that reveals its `motion` children one after another. */
export const Stagger = ({ children, className, stagger = 0.06 }: { children: ReactNode; className?: string; stagger?: number }) => (
  <motion.div
    className={className}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    initial="hidden"
    whileInView="show"
    // trigger on first pixel (minus a small margin) — a % threshold never fires for lists taller than the screen
    viewport={{ once: true, amount: 'some', margin: '0px 0px -10% 0px' }}
  >
    {children}
  </motion.div>
)
