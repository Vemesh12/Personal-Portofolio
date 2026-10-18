import { useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'

/**
 * A rotating 3D globe of words, built with CSS transforms (no WebGL).
 * Drag to spin it; it keeps rotating slowly on its own.
 */
export const SkillSphere = ({ words }: { words: string[] }) => {
  const reduce = useReducedMotion()
  const wrap = useRef<HTMLDivElement>(null)
  const items = useRef<(HTMLSpanElement | null)[]>([])

  // Spread points evenly over a unit sphere (Fibonacci lattice)
  const points = useMemo(
    () =>
      words.map((_, i) => {
        const y = 1 - (2 * (i + 0.5)) / words.length
        const r = Math.sqrt(1 - y * y)
        const theta = Math.PI * (3 - Math.sqrt(5)) * i
        return [Math.cos(theta) * r, y, Math.sin(theta) * r] as const
      }),
    [words],
  )

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    let ax = 0.4
    let ay = 0
    let vx = 0.0015
    let vy = 0.004
    let dragging = false
    let last = { x: 0, y: 0 }
    let raf = 0
    let visible = true

    const render = () => {
      const radius = el.clientWidth * 0.4
      const [sx, cx, sy, cy] = [Math.sin(ax), Math.cos(ax), Math.sin(ay), Math.cos(ay)]
      points.forEach(([x, y, z], i) => {
        // rotate around Y, then X
        const x1 = x * cy + z * sy
        const z1 = -x * sy + z * cy
        const y2 = y * cx - z1 * sx
        const z2 = y * sx + z1 * cx
        const scale = 0.6 + 0.4 * ((z2 + 1) / 2) // 0.6 (back) .. 1 (front)
        const node = items.current[i]
        if (!node) return
        node.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y2 * radius}px, 0) scale(${scale})`
        node.style.opacity = String(0.3 + 0.7 * ((z2 + 1) / 2))
        node.style.zIndex = String(Math.round(scale * 100))
      })
    }

    const tick = () => {
      if (visible && !dragging) {
        ax += vx
        ay += vy
        // ease drag momentum back to the idle spin
        vx += (0.0015 - vx) * 0.02
        vy += (0.004 - vy) * 0.02
      }
      if (visible) render()
      raf = requestAnimationFrame(tick)
    }

    const down = (e: PointerEvent) => {
      dragging = true
      last = { x: e.clientX, y: e.clientY }
      el.setPointerCapture(e.pointerId)
    }
    const move = (e: PointerEvent) => {
      if (!dragging) return
      const dx = e.clientX - last.x
      const dy = e.clientY - last.y
      last = { x: e.clientX, y: e.clientY }
      vy = dx * 0.005
      vx = -dy * 0.005
      ay += vy
      ax += vx
    }
    const up = () => (dragging = false)

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(el)
    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)
    render()
    if (!reduce) raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      el.removeEventListener('pointerdown', down)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
      el.removeEventListener('pointercancel', up)
    }
  }, [points, reduce])

  return (
    <div
      ref={wrap}
      data-cursor
      aria-label="Skills globe — drag to rotate"
      className="relative mx-auto aspect-square w-full max-w-[440px] cursor-grab active:cursor-grabbing select-none touch-pan-y"
    >
      {words.map((w, i) => (
        <span
          key={w}
          ref={(n) => {
            items.current[i] = n
          }}
          className="absolute left-1/2 top-1/2 whitespace-nowrap text-sm md:text-base font-semibold will-change-transform"
        >
          {w}
        </span>
      ))}
    </div>
  )
}
