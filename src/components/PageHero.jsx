import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

/**
 * Reusable page hero / banner used by all interior pages.
 */
export default function PageHero({ eyebrow, title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden on-dark">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-noise-dark opacity-40" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="heading-xl mt-4 text-white">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>
          )}

          {breadcrumb && (
            <nav className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
              <Link to="/" className="hover:text-brand-400">Home</Link>
              <FiChevronRight />
              <span className="text-brand-400">{breadcrumb}</span>
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  )
}
