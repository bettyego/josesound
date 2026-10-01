import { motion } from 'framer-motion'

/**
 * Initial app loader — shown briefly on first mount.
 */
export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-panel"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="equalizer h-16 w-20" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="text-center">
          <p className="font-display text-2xl tracking-[0.4em] text-ink-900">
            JOCCI <span className="text-brand-500">SOUND</span>
          </p>
          <p className="text-[10px] uppercase tracking-[0.5em] text-ink-500 mt-2">Tuning the experience…</p>
        </div>
      </div>
    </motion.div>
  )
}
