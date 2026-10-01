import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks, company } from '../data/site.js'

/**
 * Sticky responsive navbar with scroll-aware styling and mobile drawer.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // When scrolled the bar is light/white; otherwise it's transparent and sits on top of the hero (dark).
  const onDark = !scrolled

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur border-b border-ink-200 shadow-soft'
          : 'bg-transparent on-dark'}`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-sm uppercase tracking-widest font-semibold transition-colors
                 ${isActive
                    ? (onDark ? 'text-brand-400' : 'text-brand-600')
                    : (onDark ? 'text-white/85 hover:text-white' : 'text-ink-700 hover:text-ink-900')}`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex flex-col items-center">
                  {link.label}
                  <span
                    className={`mt-1 h-px bg-brand-500 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className={`hidden xl:inline-flex items-center gap-2 text-sm transition-colors
              ${onDark ? 'text-white/75 hover:text-brand-400' : 'text-ink-600 hover:text-brand-600'}`}
          >
            <FiPhone /> {company.phone}
          </a>
          <Button to="/booking" variant="primary" className="!py-2.5 !px-5 !text-xs">Book Now</Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className={`lg:hidden w-11 h-11 grid place-items-center rounded-md transition-colors
            ${onDark
              ? 'bg-ink-800/60 border border-white/15 text-white hover:border-brand-500 hover:text-brand-400'
              : 'bg-white border border-ink-200 text-ink-800 hover:border-brand-500 hover:text-brand-600 shadow-soft'}`}
        >
          {open ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/98 backdrop-blur border-t border-ink-200 shadow-soft"
          >
            <nav className="container-x py-6 flex flex-col gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 px-2 border-b border-ink-100
                     uppercase tracking-widest text-sm font-semibold
                     ${isActive ? 'text-brand-600' : 'text-ink-800 hover:text-brand-600'}`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-ink-400">→</span>
                </NavLink>
              ))}

              <div className="pt-6 flex flex-col gap-3">
                <Button to="/booking" variant="primary">Book Now</Button>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="btn-outline justify-center"
                >
                  <FiPhone /> {company.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
