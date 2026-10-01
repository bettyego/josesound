import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home     from './pages/Home.jsx'
import About    from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Gallery  from './pages/Gallery.jsx'
import Contact  from './pages/Contact.jsx'
import Booking  from './pages/Booking.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * Wraps each route in a fade transition.
 */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Page><Home /></Page>} />
        <Route path="/about"     element={<Page><About /></Page>} />
        <Route path="/services"  element={<Page><Services /></Page>} />
        <Route path="/gallery"   element={<Page><Gallery /></Page>} />
        <Route path="/contact"   element={<Page><Contact /></Page>} />
        <Route path="/booking"   element={<Page><Booking /></Page>} />
        <Route path="*"          element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}
