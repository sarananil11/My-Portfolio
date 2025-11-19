import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import Button from './Button'
import useScrollToSection from '../hooks/useScrollToSection'
import { useSections } from '../context/SectionsContext'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { activeSection } = useSections()
  const scrollToSection = useScrollToSection()

  const handleNavigate = (sectionId) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <Motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold text-white"
          onClick={() => handleNavigate('hero')}
        >
          Saran Anil
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`relative transition-colors ${
                activeSection === link.id ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              {activeSection === link.id && (
                <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-brand" />
              )}
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => handleNavigate('contact')} size="md">
            Contact Me
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="h-5 w-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-ink/95 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm text-slate-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-left ${
                    activeSection === link.id ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => handleNavigate('contact')} className="w-full">
                Contact Me
              </Button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  )
}

export default Navbar

