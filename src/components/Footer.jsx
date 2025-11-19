import Button from './Button'
import useScrollToSection from '../hooks/useScrollToSection'

const Footer = () => {
  const scrollToSection = useScrollToSection()

  return (
    <footer className="relative z-10 border-t border-white/5 bg-ink/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">Saran Anil</p>
          <p>Aspiring Software Developer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <button onClick={() => scrollToSection('projects')} className="hover:text-white">
            View Projects
          </button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')}>
            Contact
          </Button>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Saran Anil</p>
      </div>
    </footer>
  )
}

export default Footer

