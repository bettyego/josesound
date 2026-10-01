import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon.jsx'

/**
 * Service preview card used on home + services pages.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 grid place-items-center bg-brand-500 text-white shadow-glow rounded-md">
          <ServiceIcon name={service.icon} className="text-xl" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl uppercase tracking-wide mb-3 text-ink-900 group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-ink-500 text-sm leading-relaxed mb-5">{service.short}</p>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-wider
                     hover:gap-3 hover:text-brand-700 transition-all"
        >
          Learn more <FiArrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
