import { createContext, useContext, useMemo, useState } from 'react'

const SectionsContext = createContext(undefined)

export const SectionsProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero')

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection],
  )

  return <SectionsContext.Provider value={value}>{children}</SectionsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSections = () => {
  const context = useContext(SectionsContext)
  if (!context) {
    throw new Error('useSections must be used within a SectionsProvider')
  }

  return context
}

