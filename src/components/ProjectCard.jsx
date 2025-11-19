import { motion as Motion } from 'framer-motion'
import Card from './Card'

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="flex h-full flex-col">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>{project.year}</span>
          <span>{project.category}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl text-white">{project.title}</h3>
        <p className="mt-3 text-sm text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((stack) => (
            <span
              key={`${project.title}-${stack}`}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {stack}
            </span>
          ))}
        </div>
      </Card>
    </Motion.div>
  )
}

export default ProjectCard

