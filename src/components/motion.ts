import type { Variants } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1] as const

/** Child variant for <Stagger>: fades + rises in turn. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
