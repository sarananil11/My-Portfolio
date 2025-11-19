import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-ink text-slate-100 antialiased">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[32rem] bg-grid-glow blur-3xl"
      />
      <Navbar />
      <main className="relative z-10 pt-28">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

