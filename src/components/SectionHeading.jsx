import { motion } from 'framer-motion'

/**
 * Animated section heading with eyebrow, title, and optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  // `light` (legacy prop) → place over dark background, render white text
  const titleColor    = light ? 'text-white'    : 'text-ink-900'
  const subtitleColor = light ? 'text-white/75' : 'text-ink-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 max-w-3xl ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`heading-lg ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`${subtitleColor} text-base md:text-lg leading-relaxed max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
