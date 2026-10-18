import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data'

/** Returns the id of the section currently in the middle of the viewport. */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

const ids = ['home', ...navLinks.map((l) => l.id)]

export const Header = () => {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/60 border-b border-muted">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a href="#home" aria-label="Home" className="block hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt={profile.name} width={382} height={93} className="h-7 md:h-8 w-auto object-contain" />
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              className={`relative px-3 py-2 transition-colors ${active === l.id ? 'text-white' : 'text-muted hover:text-white'}`}
            >
              {l.label}
              {active === l.id && (
                <motion.span layoutId="nav-underline" className="absolute left-3 right-3 -bottom-0.5 h-px bg-white" transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download="Vemesh_Bypureddi_Resume.pdf"
            className="text-sm px-3 py-1.5 border border-muted hover:bg-white hover:text-black transition-colors rounded inline-flex items-center gap-2"
          >
            <FiDownload /> <span>Resume</span>
          </a>
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-xl"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="md:hidden overflow-hidden border-t border-muted bg-black/95"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="px-6 py-4 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-lg border-b border-muted ${active === l.id ? 'text-white' : 'text-muted'}`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
