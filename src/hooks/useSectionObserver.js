import { useEffect, useRef } from 'react'
import { useSections } from '../context/SectionsContext'

const useSectionObserver = (sectionId, options = {}) => {
  const ref = useRef(null)
  const { setActiveSection } = useSections()

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId)
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.35,
        ...options,
      },
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
    }
  }, [options, sectionId, setActiveSection])

  return ref
}

export default useSectionObserver

