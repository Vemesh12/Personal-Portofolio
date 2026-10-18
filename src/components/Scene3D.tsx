// Three.js scenes. Imported lazily (see Hero/About) so three.js stays out of the main bundle.
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView, useReducedMotion } from 'framer-motion'
import { useMemo, useRef, type ReactNode } from 'react'
import { CanvasTexture, type Group } from 'three'

/** Rotates a group slowly, bobs it up and down, and eases it toward the mouse. */
const Drift = ({ children, speed, follow, bob = 0, still }: { children: ReactNode; speed: number; follow: number; bob?: number; still: boolean }) => {
  const ref = useRef<Group>(null)
  useFrame((state, delta) => {
    const g = ref.current
    if (!g || still) return
    // pointer is relative to the canvas, so clamp it when the mouse is elsewhere on the page
    const px = Math.max(-1, Math.min(1, state.pointer.x))
    const py = Math.max(-1, Math.min(1, state.pointer.y))
    g.rotation.y += delta * speed
    g.rotation.x += (-py * follow - g.rotation.x) * 0.05
    g.position.x += (px * follow - g.position.x) * 0.05
    g.position.y = Math.sin(state.clock.elapsedTime * 1.2) * bob
  })
  return <group ref={ref}>{children}</group>
}

/** Soft round sprite so points render as dots instead of squares. */
const useDotTexture = () =>
  useMemo(() => {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.4, 'rgba(255,255,255,0.8)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 64, 64)
    return new CanvasTexture(c)
  }, [])

const Particles = () => {
  const dot = useDotTexture()
  const positions = useMemo(() => {
    const count = 1800
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [])
  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial map={dot} color="#ffffff" size={0.04} sizeAttenuation transparent opacity={0.6} depthWrite={false} />
    </points>
  )
}

const useScene = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const still = !!useReducedMotion()
  return { ref, still, frameloop: (inView ? 'always' : 'never') as 'always' | 'never' }
}

/** Wireframe shell around a faceted metal core; follows the mouse. */
export const AboutOrb = () => {
  const { ref, still, frameloop } = useScene()
  return (
    <div ref={ref} className="h-full w-full min-w-0 overflow-hidden">
      <Canvas eventSource={document.body} eventPrefix="client" camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.75]} frameloop={frameloop} gl={{ alpha: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 4, 5]} intensity={2.5} />
        <pointLight position={[-4, -2, -2]} intensity={40} />
        <Drift speed={0.15} follow={0.4} bob={0.12} still={still}>
          <mesh>
            <icosahedronGeometry args={[1.9, 1]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.18} />
          </mesh>
          <mesh rotation={[0.4, 0.2, 0]}>
            <icosahedronGeometry args={[1.1, 1]} />
            <meshStandardMaterial color="#3a3a3a" metalness={0.85} roughness={0.25} flatShading />
          </mesh>
          <Particles />
        </Drift>
      </Canvas>
    </div>
  )
}
