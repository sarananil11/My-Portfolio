import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import useSectionObserver from '../hooks/useSectionObserver'

const Projects = () => {
  const sectionRef = useSectionObserver('projects')

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds & experiments"
          description="A mix of personal experiments and campus collaborations that focus on clean execution, UX, and smooth interactions."
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

