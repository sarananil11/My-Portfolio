import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import useSectionObserver from '../hooks/useSectionObserver'
import useScrollToSection from '../hooks/useScrollToSection'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => {
  const sectionRef = useSectionObserver('hero')
  const scrollToSection = useScrollToSection()

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-10 md:flex-row md:py-24"
    >
      <Motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <Motion.p
          variants={heroVariants}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-300"
        >
          Portfolio 2025
        </Motion.p>
        <Motion.h1
          variants={heroVariants}
          className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m <span className="text-brand">Saran Anil</span> — Aspiring Web Developer
        </Motion.h1>
        <Motion.p variants={heroVariants} className="text-lg text-slate-300 sm:text-xl">
          I&apos;m a BCA student who loves turning thoughtful ideas into interactive experiences. I
          build modern web apps with clean UI, purposeful animations, and reliable code.
        </Motion.p>
        <Motion.div variants={heroVariants} className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            View Projects
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </Motion.div>
      </Motion.div>

      <Motion.div
        className="flex flex-1 flex-col gap-6 md:items-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <Card className="w-full">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light">Currently</p>
          <h3 className="mt-2 font-display text-2xl text-white">Intern @ Techolas Technologies</h3>
          <p className="mt-3 text-sm text-slate-300">
            Interning at Techolas Technologies as a Full stack Developer.
          </p>
        </Card>
        <Card className="w-full">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light">Focus Areas</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
            {['Web Developing', 'Responsive web apps', 'Full stack development'].map((item) => (
              <span key={item} className="rounded-full bg-white/5 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </Card>
      </Motion.div>
    </section>
  )
}

export default Hero

