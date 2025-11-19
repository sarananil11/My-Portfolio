import { useCallback } from 'react'
import { useSections } from '../context/SectionsContext'

const useScrollToSection = () => {
  const { setActiveSection } = useSections()

  return useCallback(
    (sectionId) => {
      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveSection(sectionId)
      }
    },
    [setActiveSection],
  )
}

export default useScrollToSection

