import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { Magnetic } from '../components/Magnetic'
import { ease } from '../components/motion'
import { profile } from '../data'

const INTRO_DELAY = 1.3 // wait for the loader to finish

/** Types each role, pauses, deletes it, then moves to the next. */
const RotatingRole = ({ roles }: { roles: string[] }) => {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(reduce ? roles[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const full = roles[index]
    let delay = deleting ? 35 : 70
    if (!deleting && text === full) delay = 1800
    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % roles.length)
      } else setText(full.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, roles, reduce])

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-[2px] h-[1em] -mb-[0.15em] ml-1 bg-white animate-blink" />
    </span>
  )
}

export const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const words = profile.name.split(' ')

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden flex items-end md:items-center px-6 md:px-10 lg:px-16 pb-20 md:pb-0"
    >
      {/* Parallax photo */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY, scale: bgScale }}>
        <div className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center" style={{ backgroundImage: "url('/hero.webp')" }} />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/10 md:bg-gradient-to-r md:from-black/85 md:via-black/45 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 -z-10 bg-gradient-to-t from-black to-transparent" />

      <motion.div className="max-w-6xl mx-auto w-full" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="max-w-2xl">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-white/70 mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: INTRO_DELAY }}
          >
            Hi, I'm
          </motion.p>

          <h1 aria-label={profile.name} className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-5">
            {words.map((word, wi) => (
              <span key={word} className="inline-block whitespace-nowrap mr-[0.25em]" aria-hidden>
                {word.split('').map((ch, ci) => (
                  <span key={ci} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease, delay: INTRO_DELAY + 0.1 + (wi * 6 + ci) * 0.035 }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white mb-4 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: INTRO_DELAY + 0.7 }}
          >
            <RotatingRole roles={profile.roles} />
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/75 max-w-xl mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: INTRO_DELAY + 0.8 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: INTRO_DELAY + 0.95 }}
          >
            <Magnetic>
              <a href="#projects" className="block px-5 py-2.5 rounded bg-white text-black font-medium hover:bg-white/85 transition-colors">
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="block px-5 py-2.5 rounded border border-white/60 hover:bg-white hover:text-black transition-colors">
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/60 font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: INTRO_DELAY + 1.4 }}
      >
        SCROLL
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}
