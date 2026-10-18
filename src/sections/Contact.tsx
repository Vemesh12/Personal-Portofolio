import { useState, type FormEvent } from 'react'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { Magnetic } from '../components/Magnetic'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeading } from '../components/Section'
import { profile } from '../data'

const field =
  'w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-muted focus:outline-none focus:border-white transition-colors'

const channels = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin, external: true },
  { icon: FiGithub, label: 'GitHub', href: profile.github, external: true },
]

export const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' })

  // No backend: opens the visitor's email app with the message pre-filled.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact">
      <SectionHeading index="06" title="Contact" subtitle="Open to roles and collaborations. I usually reply within a day." />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal as="div" from="left" className="md:col-span-5 space-y-3">
          {channels.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="group flex items-center gap-4 border border-white/10 rounded-lg px-4 py-3 hover:bg-white hover:text-black transition-colors break-all"
            >
              <Icon className="shrink-0" />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </Reveal>

        <Reveal from="right" className="md:col-span-7">
          <form onSubmit={submit} className="space-y-6">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                required
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                required
                rows={4}
                className={`${field} resize-none`}
                placeholder="What would you like to talk about?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <Magnetic>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-medium hover:bg-white/85 transition-colors">
                <FiSend /> Send message
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export const Footer = () => (
  <footer className="border-t border-muted px-6 md:px-10 lg:px-16 py-8">
    <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js & Framer Motion.
      </p>
      <a href="#home" className="inline-flex items-center gap-2 hover:text-white transition-colors">
        Back to top <FiArrowUp />
      </a>
    </div>
  </footer>
)
