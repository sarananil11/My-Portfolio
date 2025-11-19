import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import { SectionsProvider } from './context/SectionsContext'

function App() {
  return (
    <SectionsProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </SectionsProvider>
  )
}

export default App
