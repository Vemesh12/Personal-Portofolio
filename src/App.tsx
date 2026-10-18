import { MotionConfig } from 'framer-motion'
import { Cursor, Loader, ScrollProgress, SmoothScroll } from './components/Effects'
import { Header } from './components/Header'
import { About } from './sections/About'
import { Contact, Footer } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    // reducedMotion="user" turns transform animations off for visitors who prefer less motion
    <MotionConfig reducedMotion="user">
      <Loader />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
