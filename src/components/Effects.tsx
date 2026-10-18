import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect, useState } from 'react'

/** Thin bar at the very top that fills as the page is scrolled. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50" style={{ scaleX }} />
}

/** Inertia smooth scrolling (also handles in-page #anchor links). Off for reduced motion. */
export const SmoothScroll = () => {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({ anchors: { offset: -64 }, lerp: 0.1 })
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [reduce])
  return null
}

/** Soft circular cursor follower; grows over links/buttons. Desktop pointers only. */
export const Cursor = () => {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHovering(!!(e.target as HTMLElement).closest('a, button, [data-cursor]'))
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [reduce, x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] rounded-full border border-white/60 mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 48 : 20, height: hovering ? 48 : 20, backgroundColor: hovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)' }}
      transition={{ duration: 0.2 }}
    />
  )
}

/** Short intro screen shown once on load. Skipped for reduced motion. */
export const Loader = () => {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(!!reduce)
  useEffect(() => {
    if (reduce) return
    const id = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(id)
  }, [reduce])

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[70] bg-black flex items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      animate={done ? { opacity: 0, transitionEnd: { display: 'none' } } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="overflow-hidden">
        <motion.p
          className="font-mono text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase text-muted whitespace-nowrap"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Vemesh Bypureddi
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-white"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
